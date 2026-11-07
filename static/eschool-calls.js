/* ==========================================================================
   eSchool calls - voice & video calls on EVERY page
   --------------------------------------------------------------------------
   backen.py adds this file to every signed-in page (learner, teacher and
   parent), so a call reaches the person wherever they are on the site.

   - Checks every 3 seconds whether someone is calling you. If so, a bar
     appears at the top with Answer / Decline and a soft ring.
   - Answer opens the call screen right on the page you're on.
   - Other pages start a call with:  EschoolCalls.start(person, 'audio' | 'video')
     where person = { id, name, avatar_url }  (the Messages page does this).
   - Group calls (up to 8 people):  EschoolCalls.startGroup([person, ...], kind, title)
     Invited people get a "Join" bar on any page; anyone in the call can add more.
   The sound and video go straight between the two browsers (WebRTC); the
   server only passes the connection details (/api/calls/...).
   ========================================================================== */
(function () {
    'use strict';
    if (window.EschoolCalls) return;            // loaded once per page

    // Connection servers. The server can add a TURN relay (see /api/calls/config
    // in backen.py): without one, calls between some mobile-data / school
    // networks connect but then freeze or drop.
    var RTC_CONFIG = {
        iceServers: [{ urls: ['stun:stun.l.google.com:19302', 'stun:stun1.l.google.com:19302'] }]
    };
    var configLoaded = null;
    function loadConfig() {
        if (!configLoaded) {
            configLoaded = api('/api/calls/config').then(function (d) {
                if (d.iceServers && d.iceServers.length) RTC_CONFIG = { iceServers: d.iceServers };
            }).catch(function () { configLoaded = null; });
        }
        return configLoaded || Promise.resolve();
    }

    // Camera/mic settings that hold up on slower connections: 640x480 at up
    // to 24 fps, with echo cancellation and noise suppression.
    function mediaConstraints(kind) {
        return {
            audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true },
            video: kind === 'video'
                ? { width: { ideal: 640 }, height: { ideal: 480 }, frameRate: { ideal: 24, max: 30 }, facingMode: 'user' }
                : false
        };
    }
    var VIDEO_MAX_BITRATE = 600000;   // 600 kbps: smooth video without choking a weak link
    var POLL_MS = 3000;

    var call = null;          // the call in progress
    var incomingId = null;    // the call currently ringing for you
    var ui = {};              // elements
    var ringCtx = null, ringTimer = null;

    /* ---------------- helpers ---------------- */
    function supported() {
        return !!(window.RTCPeerConnection && navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

    function api(url, method, body) {
        return fetch(url, {
            method: method || 'GET',
            credentials: 'same-origin',
            cache: 'no-store',
            headers: body ? { 'Content-Type': 'application/json' } : undefined,
            body: body ? JSON.stringify(body) : undefined
        }).then(function (res) {
            return res.json().catch(function () { return {}; }).then(function (d) {
                if (!res.ok || d.success === false) {
                    var err = new Error(d.message || ('Request failed (' + res.status + ')'));
                    err.status = res.status;
                    throw err;
                }
                return d;
            });
        });
    }

    function initial(name) { return ((name || '?').trim()[0] || '?').toUpperCase(); }

    /* small built-in icons, so the bar and call screen look right even on
       pages that don't load Font Awesome */
    var ICON = {
        phone: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/></svg>',
        hangup: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 9c-1.6 0-3.15.25-4.6.72v3.1c0 .4-.23.74-.56.9-.98.49-1.87 1.12-2.66 1.85a1 1 0 0 1-1.4-.02L.29 13.08a1 1 0 0 1 0-1.41C3.34 8.77 7.46 7 12 7s8.66 1.77 11.71 4.67a1 1 0 0 1 0 1.41l-2.48 2.48a1 1 0 0 1-1.4.02 11.3 11.3 0 0 0-2.67-1.85 1 1 0 0 1-.56-.9v-3.1A15 15 0 0 0 12 9z"/></svg>',
        video: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M17 10.5V7a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3.5l4 4v-11z"/></svg>',
        videoOff: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M21 6.5l-4 4V7a1 1 0 0 0-1-1H9.8L21 17.2zM3.3 2 2 3.3 4.7 6H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h12c.2 0 .4-.1.5-.2l3.2 3.2 1.3-1.3z"/></svg>',
        mic: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M12 14a3 3 0 0 0 3-3V5a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3zm5.3-3a5.3 5.3 0 0 1-10.6 0H5a7 7 0 0 0 6 6.9V21h2v-3.1a7 7 0 0 0 6-6.9z"/></svg>',
        micOff: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23A6.9 6.9 0 0 0 19 11zm-4 .16V5a3 3 0 0 0-6 0v.18zM4.27 3 3 4.27l6 6V11a3 3 0 0 0 4.18 2.75l1.66 1.66A5.3 5.3 0 0 1 6.7 11H5a7 7 0 0 0 6 6.9V21h2v-3.1c.9-.13 1.77-.44 2.54-.9L19.73 21 21 19.73z"/></svg>',
        lock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M18 8h-1V6a5 5 0 0 0-10 0v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2zM9 6a3 3 0 0 1 6 0v2H9z"/></svg>'
    };

    /* ---------------- styles + markup (added once) ---------------- */
    function build() {
        if (ui.root) return;
        var css = document.createElement('style');
        css.textContent = [
            '.esc-bar{position:fixed;top:12px;left:50%;transform:translateX(-50%);z-index:100000;display:none;align-items:center;gap:14px;flex-wrap:wrap;',
            'width:min(640px,calc(100% - 24px));padding:12px 16px;border-radius:16px;color:#fff;font-family:\"Segoe UI\",system-ui,-apple-system,Roboto,Arial,sans-serif;',
            'background:linear-gradient(135deg,#4361ee,#7209b7);box-shadow:0 14px 34px rgba(30,41,59,.35)}',
            '.esc-bar.show{display:flex}',
            '.esc-bar .esc-ic{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;animation:escPulse 1.4s infinite}',
            '@keyframes escPulse{0%{box-shadow:0 0 0 0 rgba(255,255,255,.6)}100%{box-shadow:0 0 0 14px rgba(255,255,255,0)}}',
            '.esc-bar .esc-txt{flex:1;min-width:150px;font-family:\"Segoe UI\",system-ui,-apple-system,Roboto,Arial,sans-serif;font-size:.95rem;line-height:1.35}',
            '.esc-bar .esc-txt strong{display:block;font-size:1.02rem}',
            '.esc-bar button{border:none;border-radius:999px;padding:10px 18px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:8px;font-size:.9rem;color:#fff}',
            '.esc-bar .esc-no{background:#ef4444}.esc-bar .esc-yes{background:#10b981}',
            '.esc-call{position:fixed;inset:0;z-index:100001;display:none;flex-direction:column;color:#fff;font-family:\"Segoe UI\",system-ui,-apple-system,Roboto,Arial,sans-serif;',
            'background:radial-gradient(circle at 50% 30%,#1e293b 0%,#0b1120 70%)}',
            '.esc-call.show{display:flex}',
            '.esc-stage{position:relative;flex:1;min-height:0;display:flex;align-items:center;justify-content:center;overflow:hidden}',
            '.esc-remote{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;background:#000;display:none}',
            '.esc-call.has-video .esc-remote{display:block}',
            '.esc-local{position:absolute;right:18px;bottom:18px;width:170px;aspect-ratio:3/4;object-fit:cover;border-radius:14px;border:2px solid rgba(255,255,255,.6);background:#111;display:none;transform:scaleX(-1);box-shadow:0 10px 25px rgba(0,0,0,.4)}',
            '.esc-call.is-video .esc-local{display:block}',
            '.esc-call.cam-off .esc-local{opacity:.25}',
            '.esc-person{position:relative;z-index:2;text-align:center;padding:20px}',
            '.esc-call.has-video .esc-person{display:none}',
            '.esc-av{width:120px;height:120px;margin:0 auto 18px;border-radius:50%;overflow:hidden;background:linear-gradient(135deg,#4361ee,#7209b7);display:flex;align-items:center;justify-content:center;font-size:2.6rem;font-weight:700}',
            '.esc-call.ringing .esc-av{animation:escRing 1.6s ease-out infinite}',
            '@keyframes escRing{0%{box-shadow:0 0 0 0 rgba(99,102,241,.55)}100%{box-shadow:0 0 0 26px rgba(99,102,241,0)}}',
            '.esc-av img{width:100%;height:100%;object-fit:cover}',
            '.esc-name{font-size:1.5rem;font-weight:700;margin-bottom:6px}',
            '.esc-state{font-size:.95rem;opacity:.85}',
            '.esc-top{position:absolute;top:0;left:0;right:0;z-index:3;padding:14px 18px;display:flex;gap:10px;align-items:center;background:linear-gradient(rgba(0,0,0,.55),transparent);font-size:.9rem}',
            '.esc-timer{margin-left:auto;font-variant-numeric:tabular-nums}',
            '.esc-bars{display:inline-flex;align-items:flex-end;gap:2px;height:14px;margin-left:6px}',
            '.esc-bars i{display:block;width:4px;border-radius:1px;background:rgba(255,255,255,.3)}',
            '.esc-bars i:nth-child(1){height:4px}.esc-bars i:nth-child(2){height:8px}.esc-bars i:nth-child(3){height:11px}.esc-bars i:nth-child(4){height:14px}',
            '.esc-bars.q3 i{background:#22c55e}',
            '.esc-bars.q2 i:nth-child(-n+3){background:#a3e635}',
            '.esc-bars.q1 i:nth-child(-n+2){background:#f59e0b}',
            '.esc-bars.q0 i:nth-child(1){background:#ef4444}',
            '.esc-pill{display:none;padding:4px 10px;border-radius:999px;background:rgba(245,158,11,.9);color:#111;font-size:.78rem;font-weight:700}',
            '.esc-pill.show{display:inline-block}',
            '.esc-sound{position:absolute;left:50%;top:58px;transform:translateX(-50%);z-index:4;display:none;border:none;border-radius:999px;padding:10px 18px;font-weight:700;background:#fff;color:#0f172a;cursor:pointer;font-size:.9rem}',
            '.esc-sound.show{display:block}',
            '.esc-ctrls{display:flex;justify-content:center;gap:22px;padding:18px 16px 28px;z-index:3}',
            '.esc-wrap{display:flex;flex-direction:column;align-items:center}',
            '.esc-wrap[hidden]{display:none}',
            '.esc-btn{width:60px;height:60px;border-radius:50%;border:none;cursor:pointer;font-size:1.2rem;background:rgba(255,255,255,.14);color:#fff;display:flex;align-items:center;justify-content:center}',
            '.esc-btn:hover{background:rgba(255,255,255,.24)}',
            '.esc-btn.off{background:#fff;color:#0f172a}',
            '.esc-btn.end{background:#ef4444}.esc-btn.end:hover{background:#dc2626}',
            '.esc-lbl{font-size:.72rem;margin-top:6px;opacity:.8}',
            '.esc-note{position:fixed;left:50%;bottom:18px;transform:translateX(-50%);z-index:100000;display:none;max-width:calc(100% - 24px);padding:10px 16px;border-radius:12px;background:#0f172a;color:#fff;font-size:.9rem;font-family:\\"Segoe UI\\",system-ui,-apple-system,Roboto,Arial,sans-serif}',
            '.esc-note.show{display:block}',
            '@media (max-width:520px){.esc-bar .esc-txt{flex-basis:calc(100% - 60px)}.esc-bar button{flex:1;justify-content:center}.esc-local{width:100px;right:10px;bottom:10px}.esc-av{width:96px;height:96px;font-size:2rem}.esc-btn{width:54px;height:54px}}'
        ].join('');
        document.head.appendChild(css);

        var bar = document.createElement('div');
        bar.className = 'esc-bar';
        bar.setAttribute('role', 'alert');
        bar.innerHTML = '<div class="esc-ic">' + ICON.phone + '</div>' +
            '<div class="esc-txt"><strong class="esc-who"></strong><span class="esc-kind"></span></div>' +
            '<button type="button" class="esc-no">' + ICON.hangup + ' Decline</button>' +
            '<button type="button" class="esc-yes">' + ICON.phone + ' Answer</button>';
        document.body.appendChild(bar);

        var root = document.createElement('div');
        root.className = 'esc-call';
        root.setAttribute('aria-live', 'polite');
        root.innerHTML =
            '<div class="esc-top">' + ICON.lock + '<span class="esc-kindlbl">Voice call</span><span class="esc-bars" role="img" aria-label="Connection"><i></i><i></i><i></i><i></i></span><span class="esc-pill" role="status"></span><span class="esc-timer"></span></div>' +
            '<div class="esc-stage">' +
            '  <video class="esc-remote" autoplay playsinline muted></video><audio class="esc-audio" autoplay></audio>' +
            '  <button type="button" class="esc-sound">Tap to turn on sound</button>' +
            '  <div class="esc-person"><div class="esc-av">?</div><div class="esc-name"></div><div class="esc-state">Calling…</div></div>' +
            '  <video class="esc-local" autoplay playsinline muted></video>' +
            '</div>' +
            '<div class="esc-ctrls">' +
            '  <div class="esc-wrap"><button type="button" class="esc-btn esc-mute" aria-label="Mute microphone">' + ICON.mic + '</button><span class="esc-lbl esc-mutelbl">Mute</span></div>' +
            '  <div class="esc-wrap esc-camwrap"><button type="button" class="esc-btn esc-cam" aria-label="Turn camera off">' + ICON.video + '</button><span class="esc-lbl esc-camlbl">Camera</span></div>' +
            '  <div class="esc-wrap"><button type="button" class="esc-btn end esc-end" aria-label="End call">' + ICON.hangup + '</button><span class="esc-lbl">End</span></div>' +
            '</div>';
        document.body.appendChild(root);

        var note = document.createElement('div');
        note.className = 'esc-note';
        note.setAttribute('role', 'status');
        document.body.appendChild(note);

        ui = {
            bar: bar, root: root, note: note,
            who: bar.querySelector('.esc-who'), kind: bar.querySelector('.esc-kind'), barIcon: bar.querySelector('.esc-ic'),
            remote: root.querySelector('.esc-remote'), audio: root.querySelector('.esc-audio'), local: root.querySelector('.esc-local'),
            av: root.querySelector('.esc-av'), name: root.querySelector('.esc-name'), state: root.querySelector('.esc-state'),
            kindLbl: root.querySelector('.esc-kindlbl'), timer: root.querySelector('.esc-timer'),
            pill: root.querySelector('.esc-pill'), sound: root.querySelector('.esc-sound'), bars: root.querySelector('.esc-bars'),
            mute: root.querySelector('.esc-mute'), muteLbl: root.querySelector('.esc-mutelbl'),
            cam: root.querySelector('.esc-cam'), camLbl: root.querySelector('.esc-camlbl'), camWrap: root.querySelector('.esc-camwrap')
        };
        bar.querySelector('.esc-yes').addEventListener('click', function () {
            var id = incomingId, gid = incomingGroupId, gkind = bar.dataset.gkind; hideBar();
            if (gid) joinGroup(gid, gkind); else if (id) answer(id);
        });
        bar.querySelector('.esc-no').addEventListener('click', function () {
            var id = incomingId, gid = incomingGroupId; hideBar();
            if (gid) api('/api/group-calls/' + gid + '/decline', 'POST').catch(function () {});
            else if (id) api('/api/calls/' + id + '/decline', 'POST').catch(function () {});
        });
        ui.remote.muted = true;            // sound plays through the <audio> element only
        ui.sound.addEventListener('click', function () { playRemote(); });
        ui.root.addEventListener('click', function () { if (ui.sound.classList.contains('show')) playRemote(); });
        ui.mute.addEventListener('click', toggleMute);
        ui.cam.addEventListener('click', toggleCamera);
        root.querySelector('.esc-end').addEventListener('click', function () { end(); });
    }

    var noteTimer = null;
    function note(text) {
        build();
        ui.note.textContent = text;
        ui.note.classList.add('show');
        clearTimeout(noteTimer);
        noteTimer = setTimeout(function () { ui.note.classList.remove('show'); }, 6000);
        document.dispatchEvent(new CustomEvent('eschool:call-note', { detail: { text: text } }));
    }

    /* ---------------- ringing ---------------- */
    function ringStart() {
        if (ringTimer) return;
        try {
            var AC = window.AudioContext || window.webkitAudioContext;
            if (!AC) return;
            ringCtx = ringCtx || new AC();
            if (ringCtx.state === 'suspended') ringCtx.resume().catch(function () {});
            var beep = function () {
                [0, 0.45].forEach(function (off) {
                    var o = ringCtx.createOscillator(), g = ringCtx.createGain(), t = ringCtx.currentTime + off;
                    o.type = 'sine'; o.frequency.value = 520;
                    g.gain.setValueAtTime(0.0001, t);
                    g.gain.exponentialRampToValueAtTime(0.15, t + 0.03);
                    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.35);
                    o.connect(g); g.connect(ringCtx.destination);
                    o.start(t); o.stop(t + 0.4);
                });
            };
            beep();
            ringTimer = setInterval(beep, 2500);
        } catch (e) { /* sound may need a first click on the page; the bar still shows */ }
    }
    function ringStop() { clearInterval(ringTimer); ringTimer = null; }

    function hideBar() {
        if (ui.bar) { ui.bar.classList.remove('show'); var y = ui.bar.querySelector('.esc-yes'); if (y && y.lastChild) y.lastChild.textContent = ' Answer'; }
        incomingId = null; incomingGroupId = null; ringStop();
    }

    /* ---------------- incoming calls ---------------- */
    var checking = false;
    function checkIncoming() {
        if (checking || call || gcall || document.hidden || incomingGroupId) return;
        checking = true;
        api('/api/calls/incoming').then(function (d) {
            var c = d.call;
            if (!c) { if (incomingId) hideBar(); return; }
            if (incomingId === c.id) return;
            build();
            incomingId = c.id;
            ui.who.textContent = (c.caller && c.caller.name) || 'Someone';
            ui.kind.textContent = c.kind === 'video' ? 'is video calling you…' : 'is calling you…';
            ui.barIcon.innerHTML = c.kind === 'video' ? ICON.video : ICON.phone;
            ui.bar.classList.add('show');
            ringStart();
        }).catch(function () { /* not signed in / offline: try later */ })
          .then(function () { checking = false; });
    }

    /* ---------------- the call screen ---------------- */
    function showScreen(person, kind, stateText) {
        build();
        ui.root.className = 'esc-call show' + (kind === 'video' ? ' is-video' : '');
        ui.kindLbl.textContent = kind === 'video' ? 'Video call' : 'Voice call';
        ui.name.textContent = (person && person.name) || '';
        ui.av.innerHTML = '';
        if (person && person.avatar_url) {
            var img = document.createElement('img');
            img.src = person.avatar_url; img.alt = '';
            img.onerror = function () { ui.av.textContent = initial(person.name); };
            ui.av.appendChild(img);
        } else {
            ui.av.textContent = initial(person && person.name);
        }
        ui.camWrap.hidden = kind !== 'video';
        ui.timer.textContent = '';
        ui.mute.classList.remove('off'); ui.mute.innerHTML = ICON.mic; ui.muteLbl.textContent = 'Mute';
        ui.cam.classList.remove('off'); ui.cam.innerHTML = ICON.video; ui.camLbl.textContent = 'Camera';
        ui.state.textContent = stateText;
        setPill('');
        ui.bars.className = 'esc-bars';
        ui.sound.classList.remove('show');
        document.documentElement.style.overflow = 'hidden';
        window.eschoolCallActive = true;
        document.dispatchEvent(new CustomEvent('eschool:call-state', { detail: { active: true } }));
    }

    function setState(t) { if (ui.state) ui.state.textContent = t; }

    function mediaError(err, kind) {
        if (!window.isSecureContext) return 'Calls need a secure (https) connection.';
        var what = kind === 'video' ? 'microphone and camera' : 'microphone';
        if (err && err.name === 'NotAllowedError') return 'Allow the ' + what + ' in your browser to make calls.';
        if (err && err.name === 'NotFoundError') return 'No ' + what + ' was found on this device.';
        if (err && err.name === 'NotReadableError') return 'Your ' + what + ' is being used by another app.';
        return 'Your ' + what + ' could not be started.';
    }

    function setPill(t) {
        if (!ui.pill) return;
        ui.pill.textContent = t;
        ui.pill.classList.toggle('show', !!t);
    }

    // Start (or restart) the other person's video and sound. Browsers pause
    // media when a tab is hidden or the phone screen locks, and some block
    // sound until you tap, so this is called again whenever that can happen.
    function playRemote() {
        if (!ui.root) return;
        if (ui.remote.srcObject) ui.remote.play().catch(function () {});
        if (ui.audio.srcObject) {
            ui.audio.play().then(function () { ui.sound.classList.remove('show'); })
                .catch(function () { if (call) ui.sound.classList.add('show'); });
        }
    }

    // Lower the video bitrate so it doesn't freeze on slower links; on a weak
    // connection keep the video moving (lower sharpness) instead of stalling.
    // Quality levels for YOUR outgoing video. The call watches the connection
    // every 2 seconds and steps down as soon as it struggles, so the voice
    // never has to fight the video for bandwidth. It steps back up slowly.
    var LEVELS = [
        { name: 'voice-only', active: false },
        { name: 'low',    active: true, maxBitrate: 150000, scale: 2,   fps: 12 },
        { name: 'medium', active: true, maxBitrate: 350000, scale: 1.5, fps: 20 },
        { name: 'high',   active: true, maxBitrate: VIDEO_MAX_BITRATE, scale: 1, fps: 24 }
    ];

    function setParams(sender, change) {
        if (!sender || !sender.getParameters || !sender.setParameters) return;
        try {
            var p = sender.getParameters();
            if (!p.encodings || !p.encodings.length) p.encodings = [{}];
            change(p);
            sender.setParameters(p).catch(function () {});
        } catch (e) {}
    }

    function senderOf(kind) {
        if (!call || !call.pc) return null;
        return call.pc.getSenders().filter(function (x) { return x.track && x.track.kind === kind; })[0] || null;
    }

    function applyVideoLevel(i) {
        if (!call) return;
        var L = LEVELS[i];
        call.level = i;
        setParams(senderOf('video'), function (p) {
            var e = p.encodings[0];
            e.active = L.active;
            if (L.active) {
                e.maxBitrate = L.maxBitrate;
                e.scaleResolutionDownBy = L.scale;
                e.maxFramerate = L.fps;
            }
            p.degradationPreference = 'balanced';
        });
    }

    function tuneSenders(pc) {
        // the voice goes first when the connection is busy
        pc.getSenders().forEach(function (sender) {
            if (!sender.track || sender.track.kind !== 'audio') return;
            setParams(sender, function (p) {
                p.encodings[0].priority = 'high';
                p.encodings[0].networkPriority = 'high';
                p.encodings[0].maxBitrate = 40000;   // clear speech (Opus)
            });
        });
        if (call && call.kind === 'video') applyVideoLevel(2);   // start at medium, then adapt
    }

    // ---- connection quality watcher ----
    function readStats() {
        if (!call || !call.pc || !call.timerStart || call.reconnecting) return;
        var me = call;
        me.pc.getStats().then(function (report) {
            if (call !== me) return;
            var avail = null, rtt = null, lost = 0, sent = 0;
            var pairs = {};
            report.forEach(function (r) { pairs[r.id] = r; });
            report.forEach(function (r) {
                if (r.type === 'transport' && r.selectedCandidatePairId && pairs[r.selectedCandidatePairId]) {
                    var cp = pairs[r.selectedCandidatePairId];
                    if (cp.availableOutgoingBitrate) avail = cp.availableOutgoingBitrate;
                    if (cp.currentRoundTripTime != null) rtt = cp.currentRoundTripTime;
                }
                if (r.type === 'candidate-pair' && r.nominated && r.state === 'succeeded' && avail == null) {
                    if (r.availableOutgoingBitrate) avail = r.availableOutgoingBitrate;
                    if (r.currentRoundTripTime != null) rtt = r.currentRoundTripTime;
                }
                // what the OTHER side reports losing from us
                if (r.type === 'remote-inbound-rtp') {
                    lost += r.packetsLost || 0;
                }
                if (r.type === 'outbound-rtp') sent += r.packetsSent || 0;
            });
            var dLost = Math.max(0, lost - (me.lastLost || 0)), dSent = Math.max(1, sent - (me.lastSent || 0));
            me.lastLost = lost; me.lastSent = sent;
            var loss = dLost / (dLost + dSent);

            // 0 = bad .. 3 = good
            var q = 3;
            if ((avail != null && avail < 700000) || loss > 0.03 || (rtt != null && rtt > 0.4)) q = 2;
            if ((avail != null && avail < 300000) || loss > 0.08 || (rtt != null && rtt > 0.8)) q = 1;
            if ((avail != null && avail < 120000) || loss > 0.18) q = 0;
            showBars(q);

            if (me.kind !== 'video') return;
            var target = q;                       // level index matches quality
            if (target < me.level) {              // step down straight away
                me.upCount = 0;
                applyVideoLevel(target);
            } else if (target > me.level) {       // step up one level after ~6 s of good readings
                me.upCount = (me.upCount || 0) + 1;
                if (me.upCount >= 3) { me.upCount = 0; applyVideoLevel(me.level + 1); }
            } else {
                me.upCount = 0;
            }
            if (me.level === 0) setPill('Weak connection: video paused to keep the voice clear');
            else if (ui.pill.textContent.indexOf('video paused to keep') === 0) setPill('');
        }).catch(function () {});
    }

    function showBars(q) {
        if (!ui.bars) return;
        ui.bars.className = 'esc-bars q' + q;
        ui.bars.setAttribute('aria-label', ['Very weak connection', 'Weak connection', 'Fair connection', 'Good connection'][q]);
    }

    // Keep the phone screen on during a call (a sleeping screen switches the
    // camera off, which freezes your video on the other side).
    function keepAwake() {
        if (!call || !navigator.wakeLock || document.hidden) return;
        navigator.wakeLock.request('screen').then(function (lock) {
            if (!call) { lock.release().catch(function () {}); return; }
            call.wakeLock = lock;
            lock.addEventListener('release', function () { if (call && call.wakeLock === lock) call.wakeLock = null; });
        }).catch(function () {});
    }

    // If the camera or mic stops (another app took it, or it was unplugged),
    // try to get it back and carry on with the same call.
    function watchLocalTrack(track) {
        track.addEventListener('ended', function () {
            if (!call || !call.pc) return;
            var kind = track.kind;
            // If it keeps stopping, something else (another tab, browser or app)
            // is using it. Grabbing it back would just make both sides flicker
            // on and off, so stop and say so.
            var now = Date.now();
            call.reacquired = call.reacquired || {};
            if (call.reacquired[kind] && now - call.reacquired[kind] < 20000) {
                note(kind === 'video'
                    ? 'Your camera keeps being taken by another tab or app. Close it, or use a second device to test calls.'
                    : 'Your microphone keeps being taken by another tab or app. Close it, or use a second device to test calls.');
                return;
            }
            call.reacquired[kind] = now;
            var c = mediaConstraints('video');
            navigator.mediaDevices.getUserMedia(kind === 'video' ? { video: c.video } : { audio: c.audio })
                .then(function (stream) {
                    if (!call) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
                    var fresh = stream.getTracks()[0];
                    var sender = call.pc.getSenders().filter(function (x) { return x.track === track || (x.track && x.track.kind === kind); })[0];
                    if (sender) sender.replaceTrack(fresh).then(function () { tuneSenders(call.pc); if (call.level != null) applyVideoLevel(call.level); }).catch(function () {});
                    call.local.removeTrack(track); call.local.addTrack(fresh);
                    if (kind === 'video') { ui.local.srcObject = call.local; }
                    watchLocalTrack(fresh);
                })
                .catch(function () {
                    note(kind === 'video' ? 'Your camera stopped. Another app may be using it.' : 'Your microphone stopped. Another app may be using it.');
                });
        });
    }

    function makePeer() {
        var pc = new RTCPeerConnection(RTC_CONFIG);
        call.pc = pc;
        call.local.getTracks().forEach(function (t) { pc.addTrack(t, call.local); watchLocalTrack(t); });
        tuneSenders(pc);
        call.remoteVideo = new MediaStream();
        call.remoteAudio = new MediaStream();
        pc.onicecandidate = function (e) {
            if (!e.candidate || !call) return;
            var c = JSON.stringify(e.candidate);
            if (call.id) sendIce(c); else call.pendingIce.push(c);
        };
        pc.ontrack = function (e) {
            if (!call) return;
            var track = e.track;
            if (track.kind === 'video') {
                call.remoteVideo.getVideoTracks().forEach(function (t) { call.remoteVideo.removeTrack(t); });
                call.remoteVideo.addTrack(track);
                ui.remote.srcObject = call.remoteVideo;
                ui.root.classList.add('has-video');
                // no picture arriving for a moment = weak connection: say so
                // instead of leaving a frozen/black screen with no explanation
                var slow = null;
                track.onmute = function () {
                    clearTimeout(slow);
                    slow = setTimeout(function () { if (call && track.muted) setPill('Weak connection: video paused'); }, 1500);
                };
                track.onunmute = function () { clearTimeout(slow); if (call && !call.reconnecting) setPill(''); playRemote(); };
            } else {
                call.remoteAudio.getAudioTracks().forEach(function (t) { call.remoteAudio.removeTrack(t); });
                call.remoteAudio.addTrack(track);
                ui.audio.srcObject = call.remoteAudio;
            }
            playRemote();
        };
        pc.onconnectionstatechange = function () { onConnState(pc); };
        pc.oniceconnectionstatechange = function () { onConnState(pc); };
        return pc;
    }

    // Connection watchdog. A dropped link (Wi-Fi blip, switching to mobile
    // data, screen lock) is repaired with an "ICE restart" instead of leaving
    // the video frozen. Only the caller restarts, so both sides never clash.
    function onConnState(pc) {
        if (!call || call.pc !== pc) return;
        var st = pc.connectionState || pc.iceConnectionState;
        if (st === 'connected' || st === 'completed') {
            clearTimeout(call.dropTimer); clearTimeout(call.giveUpTimer);
            call.reconnecting = false; call.restarts = 0;
            ui.root.classList.remove('ringing');
            setState('Connected');
            setPill('');
            playRemote();
            if (!call.timerStart) {
                call.timerStart = Date.now(); call.timer = setInterval(tick, 1000); tick(); keepAwake();
                call.statsTimer = setInterval(readStats, 2000);
                // connected: the server only needs checking now and then
                clearInterval(call.statusPoll); clearInterval(call.icePoll);
                call.statusPoll = setInterval(pollStatus, 2000);
                call.icePoll = setInterval(pollIce, 3000);
            }
        } else if (st === 'disconnected' || st === 'failed') {
            if (!call.timerStart) {             // never connected at all
                if (st === 'failed') end('Couldn\'t connect the call. The networks may be blocking it; try again or send a message.');
                return;
            }
            call.reconnecting = true;
            setState('Reconnecting…'); setPill('Reconnecting…');
            clearTimeout(call.dropTimer);
            call.dropTimer = setTimeout(restartIce, st === 'failed' ? 0 : 5000);
            if (!call.giveUpTimer) {
                call.giveUpTimer = setTimeout(function () {
                    if (call && call.reconnecting) end('The connection was lost.');
                }, 30000);
            }
        }
    }

    function restartIce() {
        if (!call || !call.pc || !call.reconnecting) return;
        var pc = call.pc;
        if (call.role !== 'caller') return;   // the caller drives the repair; we answer its new offer
        if (call.restarts >= 4 || pc.signalingState !== 'stable') {
            call.dropTimer = setTimeout(restartIce, 3000);
            return;
        }
        call.restarts = (call.restarts || 0) + 1;
        pc.createOffer({ iceRestart: true })
            .then(function (offer) { return pc.setLocalDescription(offer); })
            .then(function () { return api('/api/calls/' + call.id + '/restart', 'POST', { offer: JSON.stringify(pc.localDescription) }); })
            .then(function (d) { if (call) call.restartSeq = d.seq; })
            .catch(function () {});
        call.dropTimer = setTimeout(restartIce, 6000);   // try again if this one doesn't take
    }

    function handleRestart(me, c) {
        // callee: a fresh offer from the caller -> answer it
        if (me.role === 'callee' && c.restart_seq > (me.seenRestart || 0) && c.offer) {
            me.seenRestart = c.restart_seq;
            var pc = me.pc;
            var seq = c.restart_seq;
            var go = pc.signalingState === 'have-local-offer'
                ? pc.setLocalDescription({ type: 'rollback' }) : Promise.resolve();
            go.then(function () { return pc.setRemoteDescription(JSON.parse(c.offer)); })
              .then(function () { return pc.createAnswer(); })
              .then(function (a) { return pc.setLocalDescription(a); })
              .then(function () { return api('/api/calls/' + me.id + '/reanswer', 'POST', { answer: JSON.stringify(pc.localDescription), seq: seq }); })
              .then(flushIce)
              .catch(function () { me.seenRestart = seq - 1; });
        }
        // caller: the answer to our restart offer
        if (me.role === 'caller' && me.restartSeq && c.answer_seq === me.restartSeq && me.appliedRestart !== me.restartSeq && c.answer) {
            me.appliedRestart = me.restartSeq;
            if (me.pc.signalingState === 'have-local-offer') {
                me.pc.setRemoteDescription(JSON.parse(c.answer)).then(flushIce).catch(function () {});
            }
        }
    }

    function sendIce(c) { if (call && call.id) api('/api/calls/' + call.id + '/ice', 'POST', { candidate: c }).catch(function () {}); }

    function pollIce() {
        if (!call || !call.id || !call.pc) return;
        api('/api/calls/' + call.id + '/ice?after=' + call.iceAfter).then(function (d) {
            (d.candidates || []).forEach(function (c) {
                if (!call) return;
                call.iceAfter = Math.max(call.iceAfter, c.id);
                if (call.pc.remoteDescription) call.pc.addIceCandidate(JSON.parse(c.candidate)).catch(function () {});
                else call.waitingIce.push(c.candidate);
            });
        }).catch(function () {});
    }

    function flushIce() {
        call.waitingIce.splice(0).forEach(function (c) { call.pc.addIceCandidate(JSON.parse(c)).catch(function () {}); });
    }

    var END_TEXT = { declined: 'Call declined', missed: 'No answer', cancelled: 'Call cancelled', ended: 'Call ended' };

    function pollStatus() {
        if (!call || !call.id) return;
        var me = call;
        api('/api/calls/' + me.id).then(function (d) {
            if (call !== me) return;
            var c = d.call;
            if (END_TEXT[c.status]) { end(END_TEXT[c.status], true); return; }
            if (me.answerSet || me.role === 'callee') handleRestart(me, c);
            if (me.role === 'caller' && c.answer && !me.answerSet) {
                me.answerSet = true;
                me.appliedRestart = c.answer_seq || 0;
                ui.root.classList.remove('ringing');
                setState('Connecting…');
                me.pc.setRemoteDescription(JSON.parse(c.answer)).then(flushIce).catch(function () {
                    end('Couldn\'t connect the call.');
                });
            }
            me.failedPolls = 0;
        }).catch(function (e) {
            if (e.status === 404 || e.status === 401) { end('Call ended', true); return; }
            // our own internet dropped: say so; the call carries on when it's back
            me.failedPolls = (me.failedPolls || 0) + 1;
            if (me.failedPolls >= 3 && call === me) setPill('No internet: waiting…');
        });
    }

    function startPolling() {
        call.statusPoll = setInterval(pollStatus, 1000);
        call.icePoll = setInterval(pollIce, 1000);
    }

    function tick() {
        if (!call || !call.timerStart) return;
        var s = Math.floor((Date.now() - call.timerStart) / 1000);
        ui.timer.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    }

    /* ---- place a call ---- */
    function start(person, kind) {
        kind = kind === 'video' ? 'video' : 'audio';
        if (call || gcall) { note('You are already on a call.'); return; }
        if (!person || !person.id) return;
        if (!supported()) { note('This browser can\'t make calls. Try the latest Chrome, Edge, Firefox or Safari.'); return; }
        hideBar();
        call = { role: 'caller', kind: kind, other: person, pendingIce: [], waitingIce: [], iceAfter: 0 };
        showScreen(person, kind, 'Starting…');
        loadConfig().then(function () {
            return navigator.mediaDevices.getUserMedia(mediaConstraints(kind));
        }).then(function (stream) {
            if (!call) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
            call.local = stream;
            if (kind === 'video') ui.local.srcObject = stream;
            var pc = makePeer();
            return pc.createOffer().then(function (offer) { return pc.setLocalDescription(offer); }).then(function () {
                return api('/api/calls/start', 'POST', { callee_id: person.id, kind: kind, offer: JSON.stringify(pc.localDescription) });
            }).then(function (d) {
                if (!call) { api('/api/calls/' + d.call_id + '/end', 'POST').catch(function () {}); return; }
                call.id = d.call_id;
                call.pendingIce.splice(0).forEach(sendIce);
                ui.root.classList.add('ringing');
                setState('Ringing…');
                startPolling();
            });
        }).catch(function (err) {
            var text = (err && err.name && /Error$/.test(err.name) && err.name !== 'Error' && !err.status)
                ? mediaError(err, kind) : ((err && err.message) || 'Could not start the call.');
            cleanUp();
            note(text);
        });
    }

    /* ---- answer ---- */
    function answer(id) {
        if (call || gcall) return;
        if (!supported()) { note('This browser can\'t take calls. Try the latest Chrome, Edge, Firefox or Safari.'); return; }
        api('/api/calls/' + id).then(function (d) {
            var info = d.call;
            if (info.status !== 'ringing' || info.role !== 'callee') { note('That call has already ended.'); return; }
            call = { id: id, role: 'callee', kind: info.kind, other: info.other, pendingIce: [], waitingIce: [], iceAfter: 0,
                     seenRestart: info.restart_seq || 0 };
            showScreen(info.other, info.kind, 'Connecting…');
            document.dispatchEvent(new CustomEvent('eschool:call-answered', { detail: { other: info.other } }));
            return loadConfig().then(function () {
                return navigator.mediaDevices.getUserMedia(mediaConstraints(info.kind));
            }).catch(function (err) {
                api('/api/calls/' + id + '/decline', 'POST').catch(function () {});
                var text = mediaError(err, info.kind);
                cleanUp();
                note(text);
                return null;
            }).then(function (stream) {
                if (!stream) return;
                if (!call) { stream.getTracks().forEach(function (t) { t.stop(); }); return; }
                call.local = stream;
                if (info.kind === 'video') ui.local.srcObject = stream;
                var pc = makePeer();
                return pc.setRemoteDescription(JSON.parse(info.offer))
                    .then(function () { return pc.createAnswer(); })
                    .then(function (a) { return pc.setLocalDescription(a); })
                    .then(function () { return api('/api/calls/' + id + '/answer', 'POST', { answer: JSON.stringify(pc.localDescription) }); })
                    .then(function () { call.pendingIce.splice(0).forEach(sendIce); startPolling(); pollIce(); });
            });
        }).catch(function (err) {
            cleanUp();
            note((err && err.message) || 'Could not answer the call.');
        });
    }

    /* ---- in-call buttons ---- */
    function toggleMute() {
        if (!call || !call.local) return;
        var t = call.local.getAudioTracks()[0];
        if (!t) return;
        t.enabled = !t.enabled;
        ui.mute.classList.toggle('off', !t.enabled);
        ui.mute.innerHTML = t.enabled ? ICON.mic : ICON.micOff;
        ui.mute.setAttribute('aria-label', t.enabled ? 'Mute microphone' : 'Unmute microphone');
        ui.muteLbl.textContent = t.enabled ? 'Mute' : 'Unmute';
    }
    function toggleCamera() {
        if (!call || !call.local) return;
        var t = call.local.getVideoTracks()[0];
        if (!t) return;
        t.enabled = !t.enabled;
        ui.cam.classList.toggle('off', !t.enabled);
        ui.cam.innerHTML = t.enabled ? ICON.video : ICON.videoOff;
        ui.root.classList.toggle('cam-off', !t.enabled);
        ui.cam.setAttribute('aria-label', t.enabled ? 'Turn camera off' : 'Turn camera on');
        ui.camLbl.textContent = t.enabled ? 'Camera' : 'Camera off';
    }

    /* ---- hang up ---- */
    function cleanUp() {
        if (call) {
            clearInterval(call.statusPoll); clearInterval(call.icePoll); clearInterval(call.timer);
            clearTimeout(call.dropTimer); clearTimeout(call.giveUpTimer); clearInterval(call.statsTimer);
            if (call.wakeLock) call.wakeLock.release().catch(function () {});
            if (call.pc) { try { call.pc.close(); } catch (e) {} }
            if (call.local) call.local.getTracks().forEach(function (t) { t.stop(); });
        }
        if (ui.root) {
            ui.remote.srcObject = null; ui.local.srcObject = null; ui.audio.srcObject = null;
            ui.root.className = 'esc-call';
        }
        document.documentElement.style.overflow = '';
        call = null;
        window.eschoolCallActive = false;
        document.dispatchEvent(new CustomEvent('eschool:call-state', { detail: { active: false } }));
    }

    function end(message, fromServer) {
        if (!call) return;
        var id = call.id, other = call.other;
        var dur = ui.timer ? ui.timer.textContent : '';
        if (id && !fromServer) api('/api/calls/' + id + '/end', 'POST').catch(function () {});
        cleanUp();
        note((message || 'Call ended') + (dur ? ' · ' + dur : ''));
        document.dispatchEvent(new CustomEvent('eschool:call-ended', { detail: { other: other } }));
    }

    window.addEventListener('pagehide', function () {
        if (call && call.id && navigator.sendBeacon) navigator.sendBeacon('/api/calls/' + call.id + '/end');
    });

    /* ======================================================================
       GROUP CALLS (up to 8 people, voice or video)
       Every browser connects straight to every other one. Whoever joins
       sends an offer to everyone already in the call; the server only
       passes those connection details (/api/group-calls/...).
       ====================================================================== */
    var gcall = null;               // the group call you're in
    var incomingGroupId = null;     // the group call ringing for you
    var gui = {};

    var GICON = {
        users: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M16 11a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm-8 0a3 3 0 1 0-3-3 3 3 0 0 0 3 3zm0 2c-2.3 0-7 1.2-7 3.5V19h14v-2.5C15 14.2 10.3 13 8 13zm8 0c-.3 0-.6 0-1 .1a4.2 4.2 0 0 1 2 3.4V19h6v-2.5c0-2.3-4.7-3.5-7-3.5z"/></svg>',
        add: '<svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true"><path d="M15 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2zm9 4c-2.7 0-8 1.3-8 4v2h16v-2c0-2.7-5.3-4-8-4z"/></svg>',
        close: '<svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true"><path d="M19 6.4 17.6 5 12 10.6 6.4 5 5 6.4 10.6 12 5 17.6 6.4 19 12 13.4 17.6 19 19 17.6 13.4 12z"/></svg>',
        micOffSm: '<svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" aria-hidden="true"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23A6.9 6.9 0 0 0 19 11zm-4 .16V5a3 3 0 0 0-6 0v.18zM4.27 3 3 4.27l6 6V11a3 3 0 0 0 4.18 2.75l1.66 1.66A5.3 5.3 0 0 1 6.7 11H5a7 7 0 0 0 6 6.9V21h2v-3.1c.9-.13 1.77-.44 2.54-.9L19.73 21 21 19.73z"/></svg>'
    };

    function gBuild() {
        if (gui.root) return;
        build();
        var css = document.createElement('style');
        css.textContent = [
            '.esg{position:fixed;inset:0;z-index:100002;display:none;flex-direction:column;color:#fff;font-family:"Segoe UI",system-ui,-apple-system,Roboto,Arial,sans-serif;background:radial-gradient(circle at 50% 20%,#1e293b 0%,#0b1120 75%)}',
            '.esg.show{display:flex}',
            '.esg-top{display:flex;align-items:center;gap:10px;padding:14px 18px;font-size:.9rem;flex-wrap:wrap}',
            '.esg-title{font-weight:700;font-size:1rem;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:50vw}',
            '.esg-count{padding:3px 10px;border-radius:999px;background:rgba(255,255,255,.12);font-size:.8rem}',
            '.esg-timer{margin-left:auto;font-variant-numeric:tabular-nums;opacity:.9}',
            '.esg-grid{flex:1;min-height:0;display:grid;gap:10px;padding:0 14px 6px;grid-template-columns:repeat(var(--cols,2),minmax(0,1fr));grid-auto-rows:minmax(0,1fr);align-content:center}',
            '.esg-tile{position:relative;min-height:0;border-radius:16px;overflow:hidden;background:#111827;display:flex;align-items:center;justify-content:center;border:2px solid transparent;transition:border-color .15s,box-shadow .15s}',
            '.esg-tile.speaking{border-color:#22c55e;box-shadow:0 0 0 3px rgba(34,197,94,.25)}',
            '.esg-tile video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;background:#000;display:none}',
            '.esg-tile.has-video video{display:block}',
            '.esg-tile.me video{transform:scaleX(-1)}',
            '.esg-av{width:min(96px,38%);aspect-ratio:1;border-radius:50%;overflow:hidden;background:linear-gradient(135deg,#4361ee,#7209b7);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:700}',
            '.esg-tile.has-video .esg-av{display:none}',
            '.esg-av img{width:100%;height:100%;object-fit:cover}',
            '.esg-name{position:absolute;left:10px;bottom:10px;max-width:calc(100% - 20px);display:flex;align-items:center;gap:6px;padding:4px 10px;border-radius:999px;background:rgba(0,0,0,.55);font-size:.82rem;font-weight:600;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',
            '.esg-name .m{display:none;color:#f87171}.esg-tile.muted .esg-name .m{display:inline-flex}',
            '.esg-st{position:absolute;top:10px;left:10px;padding:3px 9px;border-radius:999px;background:rgba(0,0,0,.55);font-size:.75rem;display:none}',
            '.esg-tile.waiting .esg-st{display:block}',
            '.esg-tile.ghost{background:rgba(255,255,255,.04);border:2px dashed rgba(255,255,255,.18)}',
            '.esg-tile.ghost .esg-av{opacity:.55;animation:escRing 1.6s ease-out infinite}',
            '.esg-pill{display:none;margin:0 auto 4px;padding:6px 14px;border-radius:999px;background:rgba(245,158,11,.92);color:#111;font-size:.82rem;font-weight:700}',
            '.esg-pill.show{display:block}',
            '.esg-sound{display:none;margin:0 auto 6px;border:none;border-radius:999px;padding:9px 18px;font-weight:700;background:#fff;color:#0f172a;cursor:pointer}',
            '.esg-sound.show{display:block}',
            '.esg-ctrls{display:flex;justify-content:center;gap:20px;padding:12px 16px 24px;flex-wrap:wrap}',
            '.esg-add{position:absolute;right:14px;bottom:96px;z-index:3;width:min(360px,calc(100% - 28px));max-height:60vh;display:none;flex-direction:column;border-radius:16px;background:#fff;color:#0f172a;box-shadow:0 20px 50px rgba(0,0,0,.45);overflow:hidden}',
            '.esg-add.show{display:flex}',
            '.esg-add-h{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid #e5e7eb;font-weight:700}',
            '.esg-add-h button{margin-left:auto;border:none;background:#f1f5f9;border-radius:10px;width:32px;height:32px;cursor:pointer;color:#0f172a;display:flex;align-items:center;justify-content:center}',
            '.esg-add-h button:hover{background:#e2e8f0}',
            '.esg-add input[type=search]{margin:10px 14px 4px;padding:9px 12px;border-radius:10px;border:1px solid #e5e7eb;font:inherit;font-size:.9rem}',
            '.esg-add-list{overflow-y:auto;padding:4px 8px 8px}',
            '.esg-person{display:flex;align-items:center;gap:10px;width:100%;padding:8px 8px;border:none;background:none;border-radius:10px;cursor:pointer;font:inherit;color:inherit;text-align:left}',
            '.esg-person:hover{background:#f1f5f9}',
            '.esg-person:disabled{opacity:.5;cursor:default}',
            '.esg-person .pa{width:34px;height:34px;border-radius:50%;overflow:hidden;flex-shrink:0;background:linear-gradient(135deg,#4361ee,#7209b7);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem}',
            '.esg-person .pa img{width:100%;height:100%;object-fit:cover}',
            '.esg-person .pn{flex:1;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:.9rem;font-weight:600}',
            '.esg-person .ps{font-size:.75rem;color:#64748b;font-weight:600}',
            '.esg-add-msg{padding:8px 14px 12px;font-size:.82rem;color:#64748b}',
            '.esg-add-msg.bad{color:#dc2626}.esg-add-msg.ok{color:#059669}',
            '@media (max-width:640px){.esg-grid{gap:6px;padding:0 8px 4px}.esg-ctrls{gap:14px;padding:10px 10px 18px}.esg-title{max-width:60vw}.esg-add{right:8px;bottom:90px}}'
        ].join('');
        document.head.appendChild(css);

        var root = document.createElement('div');
        root.className = 'esg';
        root.setAttribute('role', 'dialog');
        root.setAttribute('aria-label', 'Group call');
        root.innerHTML =
            '<div class="esg-top">' + ICON.lock + '<span class="esg-title">Group call</span><span class="esg-count"></span>' +
            '<span class="esg-timer"></span></div>' +
            '<div class="esg-grid"></div>' +
            '<div class="esg-pill" role="status"></div>' +
            '<button type="button" class="esg-sound">Tap to turn on sound</button>' +
            '<div class="esg-ctrls">' +
            '  <div class="esc-wrap"><button type="button" class="esc-btn esg-mute" aria-label="Mute microphone">' + ICON.mic + '</button><span class="esc-lbl esg-mutelbl">Mute</span></div>' +
            '  <div class="esc-wrap esg-camwrap"><button type="button" class="esc-btn esg-cam" aria-label="Turn camera off">' + ICON.video + '</button><span class="esc-lbl esg-camlbl">Camera</span></div>' +
            '  <div class="esc-wrap"><button type="button" class="esc-btn esg-addbtn" aria-label="Add people">' + GICON.add + '</button><span class="esc-lbl">Add people</span></div>' +
            '  <div class="esc-wrap"><button type="button" class="esc-btn end esg-leave" aria-label="Leave call">' + ICON.hangup + '</button><span class="esc-lbl">Leave</span></div>' +
            '</div>' +
            '<div class="esg-add" role="dialog" aria-label="Add people to the call">' +
            '  <div class="esg-add-h">' + GICON.add + ' Add people<button type="button" class="esg-add-x" aria-label="Close">' + GICON.close + '</button></div>' +
            '  <input type="search" class="esg-add-q" placeholder="Search people you chat with" autocomplete="off">' +
            '  <div class="esg-add-list"></div><div class="esg-add-msg"></div>' +
            '</div>';
        document.body.appendChild(root);
        gui = {
            root: root, grid: root.querySelector('.esg-grid'), title: root.querySelector('.esg-title'), count: root.querySelector('.esg-count'),
            timer: root.querySelector('.esg-timer'), pill: root.querySelector('.esg-pill'), sound: root.querySelector('.esg-sound'),
            mute: root.querySelector('.esg-mute'), muteLbl: root.querySelector('.esg-mutelbl'),
            cam: root.querySelector('.esg-cam'), camLbl: root.querySelector('.esg-camlbl'), camWrap: root.querySelector('.esg-camwrap'),
            add: root.querySelector('.esg-add'), addList: root.querySelector('.esg-add-list'), addQ: root.querySelector('.esg-add-q'),
            addMsg: root.querySelector('.esg-add-msg')
        };
        gui.mute.addEventListener('click', gToggleMute);
        gui.cam.addEventListener('click', gToggleCam);
        root.querySelector('.esg-leave').addEventListener('click', function () { gEnd('You left the call'); });
        root.querySelector('.esg-addbtn').addEventListener('click', function () { gui.add.classList.contains('show') ? gui.add.classList.remove('show') : gOpenAdd(); });
        root.querySelector('.esg-add-x').addEventListener('click', function () { gui.add.classList.remove('show'); });
        gui.addQ.addEventListener('input', gRenderAdd);
        gui.sound.addEventListener('click', gPlayAll);
        document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && gui.add.classList.contains('show')) gui.add.classList.remove('show'); });
    }

    function gSetPill(t) { if (gui.pill) { gui.pill.textContent = t || ''; gui.pill.classList.toggle('show', !!t); } }

    function avatarHTML(p, cls) {
        var name = (p && p.name) || '';
        if (p && p.avatar_url) return '<div class="' + cls + '"><img src="' + escAttr(p.avatar_url) + '" alt="" onerror="this.parentNode.textContent=\'' + escAttr(initial(name)) + '\'"></div>';
        return '<div class="' + cls + '">' + escAttr(initial(name)) + '</div>';
    }
    function escAttr(s) {
        return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; });
    }

    /* ---- tiles ---- */
    function gTile(uid, person, isMe) {
        var t = gcall.tiles[uid];
        if (t) return t;
        var el = document.createElement('div');
        el.className = 'esg-tile' + (isMe ? ' me' : ' waiting');
        el.innerHTML = '<video autoplay playsinline muted></video>' + avatarHTML(person, 'esg-av') +
            '<span class="esg-st">Connecting…</span>' +
            '<span class="esg-name"><span class="m">' + GICON.micOffSm + '</span><span class="n"></span></span>';
        el.querySelector('.n').textContent = isMe ? 'You' : ((person && person.name) || 'Someone');
        gui.grid.appendChild(el);
        t = gcall.tiles[uid] = { el: el, video: el.querySelector('video'), person: person };
        gLayout();
        return t;
    }
    function gRemoveTile(uid) {
        var t = gcall && gcall.tiles[uid];
        if (!t) return;
        t.el.remove();
        delete gcall.tiles[uid];
        gLayout();
    }
    function gLayout() {
        if (!gcall) return;
        var n = gui.grid.children.length;
        var phone = window.matchMedia('(max-width: 640px)').matches;
        var cols = phone ? (n <= 2 ? 1 : 2) : (n <= 1 ? 1 : n <= 4 ? 2 : n <= 6 ? 3 : 4);   // phones: stacked for 2, then 2 across
        gui.grid.style.setProperty('--cols', cols);
        var joined = Object.keys(gcall.peers).length + 1;
        gui.count.textContent = joined + ' in call';
    }

    /* ---- media helpers ---- */
    function gBitrate() {
        var n = Object.keys(gcall.peers).length;      // every peer gets its own copy of your video
        return n <= 1 ? { br: 500000, scale: 1 } : n <= 3 ? { br: 300000, scale: 1.5 } : { br: 160000, scale: 2 };
    }
    function gTunePeer(peer) {
        var q = gBitrate();
        peer.pc.getSenders().forEach(function (s) {
            if (!s.track) return;
            setParams(s, function (p) {
                var e = p.encodings[0];
                if (s.track.kind === 'audio') { e.priority = 'high'; e.networkPriority = 'high'; e.maxBitrate = 40000; }
                else { e.maxBitrate = q.br; e.scaleResolutionDownBy = q.scale; e.maxFramerate = 20; p.degradationPreference = 'balanced'; }
            });
        });
    }
    function gTuneAll() { if (gcall) Object.keys(gcall.peers).forEach(function (k) { gTunePeer(gcall.peers[k]); }); }

    function gPlayAll() {
        if (!gcall) return;
        var blocked = false;
        Object.keys(gcall.peers).forEach(function (k) {
            var p = gcall.peers[k];
            if (p.audio && p.audio.srcObject) p.audio.play().catch(function () { blocked = true; gui.sound.classList.add('show'); });
            var t = gcall.tiles[k]; if (t && t.video.srcObject) t.video.play().catch(function () {});
        });
        if (!blocked) gui.sound.classList.remove('show');
    }

    // speaking ring: a quiet audio meter on each stream
    var meterCtx = null;
    function gMeter(uid, stream) {
        try {
            var AC = window.AudioContext || window.webkitAudioContext;
            if (!AC || !stream.getAudioTracks().length) return;
            meterCtx = meterCtx || new AC();
            if (meterCtx.state === 'suspended') meterCtx.resume().catch(function () {});
            var src = meterCtx.createMediaStreamSource(stream), an = meterCtx.createAnalyser();
            an.fftSize = 512; src.connect(an);
            gcall.meters[uid] = { an: an, buf: new Uint8Array(an.fftSize), src: src };
        } catch (e) { /* no meter, no ring */ }
    }
    function gMeterTick() {
        if (!gcall) return;
        Object.keys(gcall.meters).forEach(function (uid) {
            var m = gcall.meters[uid], t = gcall.tiles[uid];
            if (!t) return;
            m.an.getByteTimeDomainData(m.buf);
            var sum = 0;
            for (var i = 0; i < m.buf.length; i++) { var v = (m.buf[i] - 128) / 128; sum += v * v; }
            var loud = Math.sqrt(sum / m.buf.length) > 0.04 && !t.el.classList.contains('muted');
            t.el.classList.toggle('speaking', loud);
        });
    }

    /* ---- connections ---- */
    function gSignal(to, type, data) {
        if (!gcall) return Promise.resolve();
        return api('/api/group-calls/' + gcall.id + '/signal', 'POST', { to: to, type: type, data: data }).catch(function () {});
    }

    function gPeer(uid, offerer) {
        var peer = gcall.peers[uid];
        if (peer) return peer;
        var member = (gcall.members || []).filter(function (m) { return m.id === uid; })[0] || { id: uid, name: 'Someone' };
        if (gcall.tiles[uid] && gcall.tiles[uid].el.classList.contains('ghost')) gRemoveTile(uid);   // was "Ringing…"
        var pc = new RTCPeerConnection(RTC_CONFIG);
        peer = gcall.peers[uid] = { pc: pc, offerer: offerer, waitingIce: [], restarts: 0, connected: false, created: Date.now() };
        gcall.local.getTracks().forEach(function (t) { pc.addTrack(t, gcall.local); });
        var tile = gTile(uid, member, false);
        peer.remote = new MediaStream();
        peer.audio = document.createElement('audio');
        peer.audio.autoplay = true;
        peer.audio.setAttribute('playsinline', '');
        tile.el.appendChild(peer.audio);
        pc.onicecandidate = function (e) { if (e.candidate) gSignal(uid, 'ice', JSON.stringify(e.candidate)); };
        pc.ontrack = function (e) {
            var tr = e.track;
            if (tr.kind === 'video') {
                tile.video.srcObject = new MediaStream([tr]);
                tile.el.classList.add('has-video');
                tr.onmute = function () { tile.el.classList.remove('has-video'); };
                tr.onunmute = function () { if (!tile.camOff) tile.el.classList.add('has-video'); tile.video.play().catch(function () {}); };
                tile.video.play().catch(function () {});
            } else {
                peer.remote.getAudioTracks().forEach(function (x) { peer.remote.removeTrack(x); });
                peer.remote.addTrack(tr);
                peer.audio.srcObject = peer.remote;
                gMeter(uid, peer.remote);
                peer.audio.play().catch(function () { gui.sound.classList.add('show'); });
            }
        };
        pc.onconnectionstatechange = function () { gConnState(uid); };
        pc.oniceconnectionstatechange = function () { gConnState(uid); };
        gTunePeer(peer);
        gLayout();
        gTuneAll();
        return peer;
    }

    function gClosePeer(uid) {
        var peer = gcall && gcall.peers[uid];
        if (!peer) return;
        clearTimeout(peer.dropTimer);
        try { peer.pc.close(); } catch (e) {}
        if (peer.audio) { peer.audio.srcObject = null; }
        if (gcall.meters[uid]) { try { gcall.meters[uid].src.disconnect(); } catch (e) {} delete gcall.meters[uid]; }
        delete gcall.peers[uid];
        gRemoveTile(uid);
        gTuneAll();
    }

    function gOffer(uid, restart) {
        var peer = gcall.peers[uid];
        if (!peer || peer.pc.signalingState === 'closed') return;
        var pc = peer.pc;
        if (pc.signalingState !== 'stable') return;
        pc.createOffer(restart ? { iceRestart: true } : undefined)
            .then(function (o) { return pc.setLocalDescription(o); })
            .then(function () { return gSignal(uid, 'offer', JSON.stringify(pc.localDescription)); })
            .catch(function () {});
    }

    function gConnState(uid) {
        var peer = gcall && gcall.peers[uid];
        if (!peer) return;
        var st = peer.pc.connectionState || peer.pc.iceConnectionState;
        var tile = gcall.tiles[uid];
        if (st === 'connected' || st === 'completed') {
            clearTimeout(peer.dropTimer); peer.restarts = 0; peer.connected = true;
            if (tile) { tile.el.classList.remove('waiting'); tile.el.querySelector('.esg-st').textContent = ''; }
            if (!gcall.timerStart) { gcall.timerStart = Date.now(); gcall.timer = setInterval(gTick, 1000); gTick(); gKeepAwake(); }
            gUpdatePill();
        } else if (st === 'disconnected' || st === 'failed') {
            if (tile) { tile.el.classList.add('waiting'); tile.el.querySelector('.esg-st').textContent = 'Reconnecting…'; }
            gUpdatePill();
            clearTimeout(peer.dropTimer);
            peer.dropTimer = setTimeout(function () {
                if (!gcall || !gcall.peers[uid]) return;
                var s = peer.pc.connectionState || peer.pc.iceConnectionState;
                if ((s === 'disconnected' || s === 'failed') && peer.offerer && peer.restarts < 4) {
                    peer.restarts++; gOffer(uid, true);
                }
            }, st === 'failed' ? 0 : 5000);
        }
    }

    function gUpdatePill() {
        if (!gcall) return;
        var bad = Object.keys(gcall.peers).filter(function (k) {
            var s = gcall.peers[k].pc.connectionState || gcall.peers[k].pc.iceConnectionState;
            return gcall.peers[k].connected && (s === 'disconnected' || s === 'failed');
        }).length;
        gSetPill(bad ? (bad === 1 ? 'Reconnecting one person…' : 'Reconnecting ' + bad + ' people…') : '');
    }

    function gHandleSignal(s) {
        if (!gcall) return;
        var from = s.from_id;
        if (s.type === 'offer') {
            var peer = gcall.peers[from] || gPeer(from, false);
            var pc = peer.pc, desc;
            try { desc = JSON.parse(s.data); } catch (e) { return; }
            var go = pc.signalingState === 'have-local-offer' ? pc.setLocalDescription({ type: 'rollback' }) : Promise.resolve();
            go.then(function () { return pc.setRemoteDescription(desc); })
              .then(function () { return pc.createAnswer(); })
              .then(function (a) { return pc.setLocalDescription(a); })
              .then(function () { gFlush(peer); return gSignal(from, 'answer', JSON.stringify(pc.localDescription)); })
              .catch(function () {});
        } else if (s.type === 'answer') {
            var p2 = gcall.peers[from];
            if (!p2 || p2.pc.signalingState !== 'have-local-offer') return;
            try { p2.pc.setRemoteDescription(JSON.parse(s.data)).then(function () { gFlush(p2); }).catch(function () {}); } catch (e) {}
        } else if (s.type === 'ice') {
            var p3 = gcall.peers[from];
            if (!p3) return;
            if (p3.pc.remoteDescription) { try { p3.pc.addIceCandidate(JSON.parse(s.data)).catch(function () {}); } catch (e) {} }
            else p3.waitingIce.push(s.data);
        }
    }
    function gFlush(peer) {
        peer.waitingIce.splice(0).forEach(function (c) { try { peer.pc.addIceCandidate(JSON.parse(c)).catch(function () {}); } catch (e) {} });
    }

    /* ---- the call's heartbeat: members, mic/camera states, signals ---- */
    function gPoll() {
        if (!gcall || gcall.polling) return;
        var me = gcall;
        me.polling = true;
        var body = null;
        if (me.sendFlags) { body = { muted: me.muted, cam_off: me.camOff }; me.sendFlags = false; }
        api('/api/group-calls/' + me.id + '/state?after=' + me.after, body ? 'POST' : 'GET', body).then(function (d) {
            if (gcall !== me) return;
            me.failed = 0;
            var c = d.call;
            if (c.status !== 'active' || d.call.my_status !== 'joined') { gEnd(c.status !== 'active' ? 'The group call has ended' : 'You are no longer in the call', true); return; }
            me.members = c.members;
            (d.signals || []).forEach(function (s) { me.after = Math.max(me.after, s.id); gHandleSignal(s); });
            var joinedIds = {};
            c.members.forEach(function (m) {
                if (m.is_me) return;
                if (m.status === 'joined') {
                    joinedIds[m.id] = true;
                    var t = me.tiles[m.id];
                    if (t && t.el.classList.contains('ghost')) { t.el.remove(); delete me.tiles[m.id]; }
                    var tile = me.peers[m.id] ? me.tiles[m.id] : null;
                    if (tile) {
                        tile.el.classList.toggle('muted', m.muted);
                        tile.camOff = m.cam_off;
                        if (m.cam_off) tile.el.classList.remove('has-video');
                        else if (tile.video.srcObject && tile.video.srcObject.getVideoTracks().some(function (x) { return !x.muted; })) tile.el.classList.add('has-video');
                    }
                } else if (m.status === 'invited') {
                    if (!me.tiles[m.id]) {
                        var g = gTile(m.id, m, false);
                        g.el.classList.add('ghost'); g.el.classList.remove('waiting');
                        g.el.querySelector('.esg-st').textContent = 'Ringing…';
                        g.el.classList.add('waiting');
                    }
                } else {
                    if (me.peers[m.id]) gClosePeer(m.id);
                    else if (me.tiles[m.id] && me.tiles[m.id].el.classList.contains('ghost')) gRemoveTile(m.id);
                }
            });
            // a joined member we have no connection with after a while: if we joined later, we offer
            Object.keys(joinedIds).forEach(function (k) {
                var uid = Number(k);
                if (!me.peers[uid] && me.offerTo && me.offerTo.indexOf(uid) > -1) { gPeer(uid, true); gOffer(uid); }
            });
            Object.keys(me.peers).forEach(function (k) { if (!joinedIds[k]) gClosePeer(Number(k)); });
            // offerer: resend if the first offer got no answer in 15 s
            Object.keys(me.peers).forEach(function (k) {
                var p = me.peers[k];
                if (p.offerer && !p.connected && p.pc.signalingState === 'have-local-offer' && Date.now() - p.created > 15000 && !p.resent) {
                    p.resent = true; p.pc.setLocalDescription({ type: 'rollback' }).then(function () { gOffer(Number(k)); }).catch(function () {});
                }
            });
            var others = c.members.filter(function (m) { return !m.is_me && (m.status === 'joined' || m.status === 'invited'); }).length;
            if (!others) {
                me.aloneSince = me.aloneSince || Date.now();
                gSetPill('Everyone else has left. The call ends in a moment unless someone joins.');
                if (Date.now() - me.aloneSince > 20000) gEnd('Everyone else left the call');
            } else if (me.aloneSince) { me.aloneSince = null; gUpdatePill(); }
            gLayout();
        }).catch(function (e) {
            if (gcall !== me) return;
            if (e.status === 404 || e.status === 401) { gEnd('The group call has ended', true); return; }
            me.failed = (me.failed || 0) + 1;
            if (me.failed >= 3) gSetPill('No internet: waiting…');
        }).then(function () { me.polling = false; });
    }

    function gTick() {
        if (!gcall || !gcall.timerStart) return;
        var s = Math.floor((Date.now() - gcall.timerStart) / 1000);
        gui.timer.textContent = Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
    }
    function gKeepAwake() {
        if (!gcall || !navigator.wakeLock || document.hidden) return;
        navigator.wakeLock.request('screen').then(function (l) { if (gcall) gcall.wakeLock = l; else l.release().catch(function () {}); }).catch(function () {});
    }

    /* ---- open the screen and start ---- */
    function gShow(info) {
        gBuild();
        gui.root.className = 'esg show';
        gui.grid.innerHTML = '';
        gui.title.textContent = info.title || (info.kind === 'video' ? 'Group video call' : 'Group voice call');
        gui.camWrap.hidden = info.kind !== 'video';
        gui.timer.textContent = '';
        gui.mute.classList.remove('off'); gui.mute.innerHTML = ICON.mic; gui.muteLbl.textContent = 'Mute';
        gui.cam.classList.remove('off'); gui.cam.innerHTML = ICON.video; gui.camLbl.textContent = 'Camera';
        gui.add.classList.remove('show');
        gSetPill('');
        gui.sound.classList.remove('show');
        document.documentElement.style.overflow = 'hidden';
        window.eschoolCallActive = true;
        document.dispatchEvent(new CustomEvent('eschool:call-state', { detail: { active: true, group: true } }));
    }

    function gBegin(callInfo, local, offerTo, after, me) {
        gcall = {
            id: callInfo.id, kind: callInfo.kind, title: callInfo.title, local: local, peers: {}, tiles: {}, meters: {},
            members: callInfo.members, after: after || 0, offerTo: offerTo || [], muted: false, camOff: false
        };
        gShow(callInfo);
        var myTile = gTile(me.id, me, true);
        if (callInfo.kind === 'video') { myTile.video.srcObject = local; myTile.el.classList.add('has-video'); myTile.video.play().catch(function () {}); }
        gMeter(me.id, local);
        (offerTo || []).forEach(function (uid) { gPeer(uid, true); gOffer(uid); });
        gcall.poll = setInterval(gPoll, 1500);
        gcall.meterTimer = setInterval(gMeterTick, 200);
        gPoll();
        window.addEventListener('resize', gLayout);
    }

    function gMedia(kind) {
        return loadConfig().then(function () { return navigator.mediaDevices.getUserMedia(mediaConstraints(kind)); });
    }

    function myself(members) { return (members || []).filter(function (m) { return m.is_me; })[0] || { id: 0, name: 'You' }; }

    // people = [{id, name, avatar_url}], kind = 'audio' | 'video'
    function startGroup(people, kind, title) {
        kind = kind === 'video' ? 'video' : 'audio';
        if (call || gcall) { note('You are already on a call.'); return Promise.resolve(false); }
        if (!supported()) { note('This browser can\'t make calls. Try the latest Chrome, Edge, Firefox or Safari.'); return Promise.resolve(false); }
        var ids = (people || []).map(function (p) { return Number(p.id); }).filter(Boolean);
        if (!ids.length) { note('Choose at least one person.'); return Promise.resolve(false); }
        hideBar();
        var stream = null;
        return gMedia(kind).then(function (s) {
            stream = s;
            return api('/api/group-calls/start', 'POST', { member_ids: ids, kind: kind, title: title || '' });
        }).then(function (d) {
            gBegin(d.call, stream, [], 0, myself(d.call.members));
            if (d.problems && d.problems.length) note(d.problems.join(' '));
            return true;
        }).catch(function (err) {
            if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
            var text = (err && err.name && /Error$/.test(err.name) && err.name !== 'Error' && !err.status) ? mediaError(err, kind) : ((err && err.message) || 'Could not start the group call.');
            note(text);
            return false;
        });
    }

    function joinGroup(id, kind) {
        if (call || gcall) { note('You are already on a call.'); return; }
        if (!supported()) { note('This browser can\'t take calls. Try the latest Chrome, Edge, Firefox or Safari.'); return; }
        var stream = null;
        gMedia(kind).then(function (s) {
            stream = s;
            return api('/api/group-calls/' + id + '/join', 'POST');
        }).then(function (d) {
            gBegin(d.call, stream, d.call.peers || [], d.signal_after || 0, myself(d.call.members));
        }).catch(function (err) {
            if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
            else api('/api/group-calls/' + id + '/decline', 'POST').catch(function () {});
            var text = (err && err.name && /Error$/.test(err.name) && err.name !== 'Error' && !err.status) ? mediaError(err, kind) : ((err && err.message) || 'Could not join the group call.');
            note(text);
        });
    }

    /* ---- buttons ---- */
    function gToggleMute() {
        if (!gcall) return;
        var t = gcall.local.getAudioTracks()[0]; if (!t) return;
        t.enabled = !t.enabled; gcall.muted = !t.enabled; gcall.sendFlags = true;
        gui.mute.classList.toggle('off', !t.enabled);
        gui.mute.innerHTML = t.enabled ? ICON.mic : ICON.micOff;
        gui.mute.setAttribute('aria-label', t.enabled ? 'Mute microphone' : 'Unmute microphone');
        gui.muteLbl.textContent = t.enabled ? 'Mute' : 'Unmute';
        var mine = gcall.tiles[myself(gcall.members).id]; if (mine) mine.el.classList.toggle('muted', !t.enabled);
        gPoll();
    }
    function gToggleCam() {
        if (!gcall) return;
        var t = gcall.local.getVideoTracks()[0]; if (!t) return;
        t.enabled = !t.enabled; gcall.camOff = !t.enabled; gcall.sendFlags = true;
        gui.cam.classList.toggle('off', !t.enabled);
        gui.cam.innerHTML = t.enabled ? ICON.video : ICON.videoOff;
        gui.cam.setAttribute('aria-label', t.enabled ? 'Turn camera off' : 'Turn camera on');
        gui.camLbl.textContent = t.enabled ? 'Camera' : 'Camera off';
        var mine = gcall.tiles[myself(gcall.members).id]; if (mine) mine.el.classList.toggle('has-video', t.enabled);
        gPoll();
    }

    /* ---- add people while in the call ---- */
    var gPeople = null;
    function gOpenAdd() {
        gui.add.classList.add('show');
        gui.addMsg.className = 'esg-add-msg'; gui.addMsg.textContent = '';
        gui.addQ.value = '';
        gui.addList.innerHTML = '<div class="esg-add-msg">Loading…</div>';
        fetch('/messages/conversations', { credentials: 'same-origin', cache: 'no-store' })
            .then(function (r) { return r.ok ? r.json() : []; })
            .then(function (list) {
                gPeople = (Array.isArray(list) ? list : []).filter(function (p) { return p.id > 0 && !p.is_broadcast; });
                gRenderAdd();
            }).catch(function () { gui.addList.innerHTML = '<div class="esg-add-msg bad">Couldn\'t load your chats.</div>'; });
        setTimeout(function () { gui.addQ.focus(); }, 50);
    }
    function gRenderAdd() {
        if (!gcall || !gPeople) return;
        var q = gui.addQ.value.trim().toLowerCase();
        var inCall = {};
        (gcall.members || []).forEach(function (m) { if (m.status === 'joined' || m.status === 'invited') inCall[m.id] = m.status; });
        var list = gPeople.filter(function (p) { return !q || String(p.name || '').toLowerCase().indexOf(q) > -1; });
        if (!list.length) { gui.addList.innerHTML = '<div class="esg-add-msg">' + (gPeople.length ? 'Nobody matches that name.' : 'Start a chat with someone in Messages first, then you can add them.') + '</div>'; return; }
        gui.addList.innerHTML = list.map(function (p) {
            var st = inCall[p.id];
            return '<button type="button" class="esg-person" data-uid="' + Number(p.id) + '"' + (st ? ' disabled' : '') + '>' +
                avatarHTML(p, 'pa') + '<span class="pn">' + escAttr(p.name) + '</span>' +
                '<span class="ps">' + (st === 'joined' ? 'In the call' : st === 'invited' ? 'Ringing…' : 'Add') + '</span></button>';
        }).join('');
        gui.addList.querySelectorAll('[data-uid]').forEach(function (b) {
            b.addEventListener('click', function () {
                b.disabled = true; b.querySelector('.ps').textContent = 'Adding…';
                api('/api/group-calls/' + gcall.id + '/invite', 'POST', { member_ids: [Number(b.dataset.uid)] }).then(function (d) {
                    gcall.members = d.call.members;
                    gui.addMsg.className = 'esg-add-msg ok';
                    gui.addMsg.textContent = d.invited.length ? d.invited[0].name + ' is being called.' : (d.problems[0] || 'Already in the call.');
                    gRenderAdd(); gPoll();
                }).catch(function (e) {
                    b.disabled = false; b.querySelector('.ps').textContent = 'Add';
                    gui.addMsg.className = 'esg-add-msg bad'; gui.addMsg.textContent = e.message;
                });
            });
        });
    }

    /* ---- leave ---- */
    function gEnd(message, fromServer) {
        if (!gcall) return;
        var me = gcall, dur = gui.timer ? gui.timer.textContent : '';
        if (!fromServer) api('/api/group-calls/' + me.id + '/leave', 'POST').catch(function () {});
        clearInterval(me.poll); clearInterval(me.timer); clearInterval(me.meterTimer);
        Object.keys(me.peers).forEach(function (k) { try { me.peers[k].pc.close(); } catch (e) {} if (me.peers[k].audio) me.peers[k].audio.srcObject = null; });
        Object.keys(me.meters).forEach(function (k) { try { me.meters[k].src.disconnect(); } catch (e) {} });
        if (me.local) me.local.getTracks().forEach(function (t) { t.stop(); });
        if (me.wakeLock) me.wakeLock.release().catch(function () {});
        window.removeEventListener('resize', gLayout);
        gcall = null;
        if (gui.root) { gui.grid.innerHTML = ''; gui.root.className = 'esg'; }
        document.documentElement.style.overflow = '';
        window.eschoolCallActive = false;
        note((message || 'Call ended') + (dur ? ' · ' + dur : ''));
        document.dispatchEvent(new CustomEvent('eschool:call-state', { detail: { active: false, group: true } }));
        document.dispatchEvent(new CustomEvent('eschool:call-ended', { detail: { group: true, id: me.id } }));
    }

    window.addEventListener('pagehide', function () {
        if (gcall && navigator.sendBeacon) navigator.sendBeacon('/api/group-calls/' + gcall.id + '/leave');
    });
    document.addEventListener('visibilitychange', function () { if (!document.hidden && gcall) { gPlayAll(); if (!gcall.wakeLock) gKeepAwake(); } });

    /* ---- ringing for group calls ---- */
    var gChecking = false;
    function checkIncomingGroup() {
        if (gChecking || call || gcall || document.hidden || incomingId) return;
        gChecking = true;
        api('/api/group-calls/incoming').then(function (d) {
            var c = d.call;
            if (!c) { if (incomingGroupId) hideBar(); return; }
            if (incomingGroupId === c.id) return;
            build();
            incomingGroupId = c.id;
            ui.bar.dataset.gkind = c.kind;
            var others = c.members.filter(function (m) { return !m.is_me; }).length;
            ui.who.textContent = ((c.invited_by && c.invited_by.name) || 'Someone') + (c.title ? ' · ' + c.title : '');
            ui.kind.textContent = 'is calling you in a group ' + (c.kind === 'video' ? 'video' : 'voice') + ' call with ' + others + ' ' + (others === 1 ? 'person' : 'people') + '…';
            ui.barIcon.innerHTML = GICON.users;
            ui.bar.querySelector('.esc-yes').lastChild.textContent = ' Join';
            ui.bar.classList.add('show');
            ringStart();
        }).catch(function () {}).then(function () { gChecking = false; });
    }

    /* ---------------- go ---------------- */
    window.EschoolCalls = {
        start: start,
        answer: answer,
        end: function () { end(); },
        supported: supported,
        isActive: function () { return !!(call || gcall); },
        // group calls: people = [{ id, name, avatar_url }]
        startGroup: startGroup,
        joinGroup: joinGroup,
        inGroup: function () { return !!gcall; },
        maxGroup: 8
    };
    // kept for older pages that look for this name
    window.eschoolAnswerCall = answer;

    function boot() {
        checkIncoming();
        setInterval(checkIncoming, POLL_MS);
        setTimeout(checkIncomingGroup, 800);
        setInterval(checkIncomingGroup, POLL_MS);
        document.addEventListener('visibilitychange', function () {
            if (document.hidden) return;
            checkIncoming();
            if (call) { playRemote(); if (call.timerStart && !call.wakeLock) keepAwake(); }
        });
        // /somepage?answer=<id> answers straight away (used by older links)
        var a = new URLSearchParams(window.location.search).get('answer');
        if (a) {
            var u = new URL(window.location.href); u.searchParams.delete('answer');
            window.history.replaceState({}, '', u);
            answer(Number(a));
        }
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
    else boot();
})();