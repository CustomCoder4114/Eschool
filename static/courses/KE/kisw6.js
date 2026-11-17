// Eschool course: Grade 6 Kiswahili (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'kiswahili-grade-6', name:'Grade 6 Kiswahili', code:'KSL 061', level:'grade-6', iconStyle:'fas', icon:'fa-language', color:'#dc2626',
          category:'Languages',
          description:'Kozi kamili ya Kiswahili cha Gredi ya 6 (CBC, Kenya): kusikiliza na kuzungumza, kusoma, kuandika na sarufi, kwa matini asilia, mifano ya hatua kwa hatua, maswali shirikishi na majaribio.',
          longDescription:'Kozi hii inafuata mtaala wa KICD wa Kiswahili cha Gredi ya 6 (Shule ya Msingi). Mtaala umepangwa katika mada kumi na moja, kuanzia Viungo vya Mwili vya Ndani, Michezo na Mahusiano hadi Kukabiliana na Ugaidi na Ushuru. Kila mada ina mada ndogo nne: Kusikiliza na Kuzungumza, Kusoma, Kuandika na Sarufi. Kila mada ndogo ina masomo matatu, Zoezi la Tathmini, Kazi ya Mradi na Marudio. Kila somo lina matokeo yanayotarajiwa, swali dadisi, maelezo ya mwalimu, msamiati, matini asilia za Kikenya, mifano ya hatua kwa hatua, maswali shirikishi, shughuli za kibinafsi, za wawili, za vikundi na za kidijitali, mazoezi ya viwango mbalimbali, umilisi wa CBC, maadili, masuala mtambuko, makosa ya kawaida, vidokezo vya mtihani, kazi ya nyumbani, tafakari, faharasa na jaribio la maswali kumi yenye maelezo.',
          modules:[
{
    name: '1.0 Viungo vya Mwili vya Ndani — Utangulizi wa Mada',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Utangulizi wa Mada</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🗺️ Mada 1.0: Viungo vya Mwili vya Ndani</h2>
    <p style="font-size:16px;">Karibu katika Kiswahili cha Gredi ya 6, mwaka wako wa mwisho katika shule ya msingi. Mwaka huu utakuza stadi nne za lugha — kusikiliza na kuzungumza, kusoma, kuandika na sarufi — kupitia mada mbalimbali zinazohusu maisha yako.</p>
    <p style="font-size:16px;">Mada ya kwanza ni <strong>Viungo vya Mwili vya Ndani</strong> kama moyo, mapafu, tumbo, ini na figo. Utajifunza kutamka silabi za sauti zinazokaribiana, kusoma kifungu kwa ufahamu, kuandika insha ya wasifu na kutumia vivumishi.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bbf7d0;">❓ Swali dadisi la mada:</strong> Tunawezaje kutumia Kiswahili kujifunza na kuzungumza kuhusu afya ya miili yetu?</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 Muhtasari wa Mada</h3>
    <p>Mtaala wa KICD wa Kiswahili cha Gredi ya 6 umepangwa katika mada zifuatazo. Kila mada ina mada ndogo za Kusikiliza na Kuzungumza, Kusoma, Kuandika na Sarufi.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mada</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jina la mada</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viungo vya Mwili vya Ndani</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Michezo</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahusiano</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Misimu</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mshikamano wa Kitaifa</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usawa wa Kijinsia</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Majanga na Jinsi ya Kuyazuia</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wanyama wa Majini</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Afya ya Akili</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukabiliana na Ugaidi</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ushuru</td>
    </tr>
    </table>
    </div>
    <p>Katika Mada 1.0 utajifunza:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mada ndogo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stadi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Utajifunza nini?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Matamshi Bora</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na Kuzungumza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutamka silabi za sauti d/nd, ch/sh, j/nj na g/ng, na vitanzandimi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Kusoma kwa Ufahamu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati lengwa, maswali ya ufahamu na muhtasari.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Insha ya Wasifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika insha ya wasifu kwa ubunifu (kundi lijalo).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Vivumishi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sarufi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vivumishi vya sifa, viashiria na vimilikishi (kundi lijalo).</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 Matokeo ya Ujifunzaji wa Mada</h3>
    <p>Kufikia mwisho wa mada hii, mwanafunzi aweze:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Kutamka silabi za sauti zinazokaribiana kwa usahihi.</li>
    <li>Kusoma kifungu kwa ufahamu, kueleza msamiati na kutoa muhtasari.</li>
    <li>Kuandika insha ya wasifu kwa ubunifu.</li>
    <li>Kutumia vivumishi vya sifa, viashiria na vimilikishi ipasavyo.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Ramani ya Mada</h3>
    <p>Mada hii ina mada ndogo nne. Kila mada ndogo ina masomo matatu, zoezi la tathmini, kazi ya mradi na somo la marudio.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.1 Matamshi Bora</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.1.1 Silabi za sauti d/nd na j/nj</li>
    <li>Somo 1.1.2 Silabi za sauti ch/sh na g/ng</li>
    <li>Somo 1.1.3 Vitanzandimi</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.2 Kusoma kwa Ufahamu</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.2.1 Msamiati lengwa</li>
    <li>Somo 1.2.2 Kujibu maswali ya ufahamu</li>
    <li>Somo 1.2.3 Kuandika muhtasari</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.3 Insha ya Wasifu</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Masomo yatakuja katika kundi lijalo</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.4 Vivumishi</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Masomo yatakuja katika kundi lijalo</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka ya Mada</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Utakavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mawasiliano na ushirikiano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutamka maneno kwa usahihi na kusoma kwa sauti.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fikra makini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutofautisha sauti zinazokaribiana.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ujuzi wa kidijitali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kurekodi matamshi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujiamini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukariri vitanzandimi mbele ya wenzako.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: kutunza viungo vya mwili</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stadi za maisha</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Jinsi ya Kujifunza Mada Hii</p>
    <div>Fuata mpangilio: soma masomo matatu ya kila mada ndogo, fanya maswali shirikishi, kisha Zoezi la Tathmini, Kazi ya Mradi na Marudio. Tamka kila neno kwa sauti — matamshi hujifunzwa kwa kusema, si kwa kusoma kimya.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mada ya kwanza ya Kiswahili cha Gredi ya 6 ni:',
            options: ['Michezo', 'Misimu', 'Ushuru', 'Viungo vya Mwili vya Ndani'],
            correct: 3,
            explanation: 'Mada 1.0 inahusu viungo vya mwili vya ndani.'
        },
        {
            question: 'Mfano wa kiungo cha ndani cha mwili ni:',
            options: ['Mkono', 'Mguu', 'Moyo', 'Sikio'],
            correct: 2,
            explanation: 'Jibu ni “Moyo”. Moyo uko ndani ya kifua.'
        },
        {
            question: 'Mada ndogo ya Kusikiliza na Kuzungumza katika Mada 1.0 ni:',
            options: ['Insha ya Wasifu', 'Matamshi Bora', 'Vivumishi', 'Kusoma kwa Ufahamu'],
            correct: 1,
            explanation: 'Mada ndogo 1.1 inahusu matamshi bora.'
        },
        {
            question: 'Mada ndogo ya sarufi katika Mada 1.0 inahusu:',
            options: ['Vivumishi', 'Viwakilishi', 'Vihusishi', 'Ngeli'],
            correct: 0,
            explanation: 'Mada ndogo 1.4 inafundisha vivumishi.'
        },
        {
            question: 'Matamshi hujifunzwa vizuri kwa:',
            options: ['Kusoma kimya pekee', 'Kuandika tu', 'Kutamka kwa sauti', 'Kuchora'],
            correct: 2,
            explanation: 'Sauti hujifunzwa kwa kuzitamka.'
        }
    ]
},
{
    name: '1.1.1 Matamshi Bora: Silabi za Sauti d/nd na j/nj',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.1 Matamshi Bora</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.1: Silabi za Sauti d/nd na j/nj</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza kutambua na kutamka silabi zinazotokana na sauti /d/ na /nd/, na /j/ na /nj/, katika maneno, na kuona jinsi sauti hizi zinavyobadilisha maana ya maneno.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Sauti hizi zinakaribiana sana. Ukitamka “jaa” badala ya “njaa”, au “doa” badala ya “ndoa”, maana inabadilika kabisa. Matamshi bora hufanya ujumbe wako ueleweke.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Kusoma kwa sauti darasani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎤 Hotuba</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Redio</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛪ Ibada</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Sokoni</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗣️ Mazungumzo ya kila siku</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua silabi zinazotokana na sauti d/nd, ch/sh, j/nj na g/ng katika maneno.</li>
    <li>Kutamka silabi zinazotokana na sauti zinazokaribiana kimatamshi ili kuimarisha matamshi.</li>
    <li>Kutamka vitanzandimi vinavyoundwa kwa silabi za sauti zinazokaribiana kimatamshi.</li>
    <li>Kuchangamkia kukariri vitanzandimi ili kuimarisha matamshi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unajua maneno gani yenye silabi za sauti d/nd, ch/sh, j/nj na g/ng?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Katika Gredi ya 5 ulijifunza silabi na kutamka maneno kwa usahihi.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Silabi</strong> ni sehemu ya neno inayotamkwa kwa pumzi moja: <em>ma-ji</em>, <em>ndi-zi</em>. Baadhi ya sauti hukaribiana kimatamshi. Sauti <strong>/d/</strong> hutamkwa kwa ncha ya ulimi kugusa ufizi: <em>dada</em>. Sauti <strong>/nd/</strong> huanza kwa mvumo wa pua kabla ya /d/: <em>ndizi</em>.</p>
    <p>Vivyo hivyo, <strong>/j/</strong> hutamkwa bila mvumo wa pua: <em>jani</em>, lakini <strong>/nj/</strong> huanza kwa mvumo wa pua: <em>njia</em>. Ukisahau mvumo huo, neno linaweza kubadilika maana: <em>jaa</em> (mahali pa taka) na <em>njaa</em> (hamu ya chakula).</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>nd na nj huanza kwa “n” ya puani — sikia mvumo kabla ya sauti.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📚 Msamiati Muhimu</h3>
    <p>Soma maneno haya kwanza. Yatakusaidia kuelewa somo zima.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana kwa lugha rahisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano katika sentensi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Silabi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu ya neno inayotamkwa kwa pumzi moja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ndizi ina silabi mbili: ndi-zi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Matamshi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jinsi neno linavyotamkwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Matamshi bora hufanya ujumbe ueleweke.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukaribiana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwa karibu sana au kufanana.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Sauti d na nd zinakaribiana.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Njaa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hamu kubwa ya kula.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Baada ya michezo nilihisi njaa.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ndoa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muungano rasmi wa mume na mke.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ndoa ya shangazi ilifanyika Jumamosi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ndama</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtoto wa ng’ombe.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ndama alinyonya maziwa.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Sauti /d/ na /nd/</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/d/</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/nd/</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">doa (alama ya uchafu)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ndoa (muungano wa mume na mke)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">dama (mchezo wa bao)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ndama (mtoto wa ng’ombe)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">dada</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ndizi</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">damu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ndege</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">dawa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ndoo</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Tamka “doa” na “ndoa”. Ni tofauti gani unayoisikia?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Ndoa” huanza kwa mvumo wa pua /n/ kabla ya /d/.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Taja maneno mawili mengine yenye “nd”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">ndugu, ndani, ndoto, kanda (au mengine).</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Sauti /j/ na /nj/</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/j/</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/nj/</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">jaa (mahali pa kutupa taka)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">njaa (hamu ya chakula)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">jia (kuja kupitia)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">njia (barabara ndogo)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">jani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">njugu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">jiko</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">njiwa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">juu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">nje</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kuchagua neno sahihi</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Jaza pengo: “Baada ya kukimbia, Juma alihisi ___ kubwa.” (jaa / njaa)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Neno lipi linamaanisha hamu ya chakula?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tamka yote mawili</strong>
    </p>
    <div style="margin:6px 0 0 34px;">jaa — njaa</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Fikiria maana</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Jaa” ni mahali pa taka; “njaa” ni hamu ya chakula.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Chagua</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“njaa”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Baada ya kukimbia, Juma alihisi njaa kubwa.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kusahau mvumo wa pua na kusema “jaa” — sentensi inapoteza maana.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Viungo vya Mwili na Sauti Hizi</h3>
    <p>Tamka maneno haya kuhusu mwili: <em>damu</em> (/d/), <em>ndani</em> (/nd/), <em>njia ya chakula</em> (/nj/), <em>jasho</em> (/j/). Sentensi: “<strong>Damu</strong> husafiri <strong>ndani</strong> ya mwili kupitia mishipa.”</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Kosa la Kawaida</p>
    <div>Usitamke “ndani” kama “dani”. Mvumo wa pua ni muhimu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Silabi ni nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria ndi-zi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sehemu ya neno inayotamkwa kwa pumzi moja.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Neno lipi lina maana ya barabara ndogo: jia au njia?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Lina mvumo wa pua.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">njia</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Gawanya “ndama” katika silabi.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Silabi mbili.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">nda-ma</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika maneno kumi: matano yenye /d/ na matano yenye /nd/.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mmoja atamke neno; mwenzake aseme kama ni /d/ au /nd/, /j/ au /nj/.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Chezeni “Mchezo wa Kadi”: kila kadi ina neno; kikundi kipange kadi katika makundi manne ya sauti.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Rekodi sauti yako ukitamka jozi za maneno (kwa ruhusa) kisha sikiliza.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja neno lenye /nd/.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">ndizi / ndege / ndoo (au jingine).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja neno lenye /nj/.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">njaa / njia / njugu (au jingine).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Eleza tofauti ya maana kati ya “doa” na “ndoa”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Doa ni alama ya uchafu; ndoa ni muungano wa mume na mke.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Gawanya “njugu” katika silabi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">nju-gu</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini matamshi ya /nd/ na /d/ ni muhimu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa sababu yanaweza kubadilisha maana ya neno, kama doa na ndoa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Ukimwambia mwuzaji “Nataka dizi” badala ya “ndizi”, nini kinaweza kutokea?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huenda asikuelewe; hutapata unachotaka.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Tunga sentensi moja yenye maneno “jaa” na “njaa”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Mbwa mwenye njaa alitafuta chakula jaani.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Sauti /nd/ na /nj/ huanza kwa mvumo wa pua, tofauti na /d/ na /j/. Jozi kama doa/ndoa, dama/ndama, jaa/njaa na jia/njia zinaonyesha kwamba sauti hizi hubadilisha maana. Matamshi bora hufanya ujumbe ueleweke.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>nd = n + d (puani).</li>
    <li>nj = n + j (puani).</li>
    <li>Sauti hubadilisha maana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sikiliza mvumo wa pua.</li>
    <li>Gawanya maneno katika silabi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kusema “dizi” badala ya “ndizi”.</li>
    <li>Kuchanganya jaa na njaa.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Chagua neno sahihi kwa kuzingatia maana.</li>
    <li>Gawanya maneno katika silabi kwa usahihi.</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi wa kimsingi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jinsi somo hili unavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutamka kwa usahihi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutofautisha sauti.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kurekodi matamshi.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: viungo vya mwili</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stadi za maisha: mawasiliano</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Watangazaji wa redio, walimu na wahubiri hutamka sauti hizi kwa usahihi ili wasikilizaji waelewe.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika jozi nne za maneno zenye /d/–/nd/ na /j/–/nj/ na utunge sentensi kwa kila neno.</li>
    <li>Mfundishe mzazi au ndugu tofauti kati ya jaa na njaa.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni sauti ipi inayonipa ugumu?</li>
    <li>Kwa nini matamshi bora ni muhimu?</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Faharasa</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Istilahi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Silabi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu ya neno.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Matamshi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jinsi ya kutamka.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Njaa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hamu ya chakula.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ndama</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtoto wa ng’ombe.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua /d/ na /nd/.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua /j/ na /nj/.</p>
    <p style="margin:6px 0;">☐ Naweza kutamka sauti hizi kwa usahihi.</p>
    <p style="margin:6px 0;">☐ Naweza kugawanya maneno katika silabi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Silabi ni:',
            options: ['Sentensi nzima', 'Sehemu ya neno inayotamkwa kwa pumzi moja', 'Herufi kubwa', 'Alama ya kuuliza'],
            correct: 1,
            explanation: 'Kwa mfano, ndizi ina silabi ndi na zi.'
        },
        {
            question: 'Neno lenye sauti /nd/ ni:',
            options: ['dada', 'dawa', 'ndizi', 'damu'],
            correct: 2,
            explanation: '“Ndizi” huanza kwa mvumo wa pua.'
        },
        {
            question: 'Neno lenye sauti /nj/ ni:',
            options: ['jani', 'jiko', 'juu', 'njia'],
            correct: 3,
            explanation: '“Njia” huanza kwa n ya puani kabla ya j.'
        },
        {
            question: '“Njaa” inamaanisha:',
            options: ['Mahali pa taka', 'Hamu ya chakula', 'Barabara', 'Ndege'],
            correct: 1,
            explanation: 'Tunasikia njaa tunapohitaji chakula.'
        },
        {
            question: '“Ndoa” inamaanisha:',
            options: ['Alama ya uchafu', 'Muungano wa mume na mke', 'Mtoto wa ng’ombe', 'Mchezo wa bao'],
            correct: 1,
            explanation: '“Doa” ndilo lenye maana ya alama ya uchafu.'
        },
        {
            question: 'Gawanya “ndama” katika silabi:',
            options: ['n-da-ma', 'ndam-a', 'nd-ama', 'nda-ma'],
            correct: 3,
            explanation: '“Nd” hutamkwa pamoja katika silabi moja.'
        },
        {
            question: '“Baada ya kukimbia, Juma alihisi ___.”',
            options: ['jaa', 'jia', 'jiko', 'njaa'],
            correct: 3,
            explanation: 'Maana inayofaa ni hamu ya chakula.'
        },
        {
            question: 'Sauti /nd/ na /nj/ huanza kwa:',
            options: ['Kupiga mluzi', 'Kunyamaza', 'Mvumo wa pua', 'Kucheka'],
            correct: 2,
            explanation: 'Jibu ni “Mvumo wa pua”. Herufi n huleta mvumo wa pua.'
        },
        {
            question: 'Neno lipi ni barabara ndogo?',
            options: ['njia', 'jia', 'jaa', 'jani'],
            correct: 0,
            explanation: '“Jia” ni kitenzi cha kuja kupitia.'
        },
        {
            question: 'Kwa nini tutamke sauti hizi kwa usahihi?',
            options: ['Ili maana ieleweke', 'Ili tuzungumze haraka', 'Ili tutumie maneno mengi', 'Ili tupige kelele'],
            correct: 0,
            explanation: 'Sauti moja ikibadilika, maana hubadilika.'
        }
    ]
},
{
    name: '1.1.2 Matamshi Bora: Silabi za Sauti ch/sh na g/ng',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.1 Matamshi Bora</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.2: Silabi za Sauti ch/sh na g/ng</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza kutambua na kutamka silabi za sauti /ch/ na /sh/, na /g/ na /ng/, kwa kutumia maneno yanayohusu mwili na maisha ya kila siku.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Watu wengi huchanganya “chati” na “shati”, au “goma” na “ngoma”. Kutofautisha sauti hizi hutusaidia kuzungumza na kusoma kwa ufasaha.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Darasani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎤 Mashindano ya kusoma</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Redio</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Hospitalini</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Dukani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Nyumbani</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua silabi zinazotokana na sauti d/nd, ch/sh, j/nj na g/ng katika maneno.</li>
    <li>Kutamka silabi zinazotokana na sauti zinazokaribiana kimatamshi ili kuimarisha matamshi.</li>
    <li>Kutamka vitanzandimi vinavyoundwa kwa silabi za sauti zinazokaribiana kimatamshi.</li>
    <li>Kuchangamkia kukariri vitanzandimi ili kuimarisha matamshi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unajua maneno gani yenye silabi za sauti d/nd, ch/sh, j/nj na g/ng?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.1.1 — sauti d/nd na j/nj.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Sauti <strong>/ch/</strong> ni fupi na kali, ulimi ukigusa sehemu ya juu ya kinywa kisha kuachilia ghafla: <em>chai</em>. Sauti <strong>/sh/</strong> ni ndefu na laini, kama unamwambia mtu anyamaze: “shhh”: <em>shati</em>.</p>
    <p>Sauti <strong>/g/</strong> hutamkwa nyuma ya kinywa bila mvumo wa pua: <em>goti</em>. Sauti <strong>/ng/</strong> huanza kwa mvumo wa pua kabla ya /g/: <em>ngoma</em>. Jozi kama <em>goma/ngoma</em> (mgomo/chombo cha muziki) na <em>gome/ngome</em> (ganda la mti/boma la ulinzi) zinaonyesha tofauti hii.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>ch = fupi na kali. sh = ndefu na laini. ng = n ya puani + g.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📚 Msamiati Muhimu</h3>
    <p>Soma maneno haya kwanza. Yatakusaidia kuelewa somo zima.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana kwa lugha rahisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano katika sentensi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Chati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Karatasi yenye picha au takwimu za kufundishia.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mwalimu alibandika chati ya moyo.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Shati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vazi la juu lenye mikono.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alivaa shati jeupe.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ngoma</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chombo cha muziki kinachopigwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ngoma ilipigwa sherehe.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Goma</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukataa kufanya kazi ili kudai haki.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Wafanyakazi waligoma.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Gome</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ganda la nje la mti.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Gome la mti ni gumu.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Shingo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu inayounganisha kichwa na kiwiliwili.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Twiga ana shingo ndefu.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Sauti /ch/ na /sh/</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/ch/</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/sh/</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">chati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">shati</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">chai</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">shamba</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">chumvi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">shule</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kichwa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">shingo</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">chakula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mashavu</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Tamka “chati” na “shati”. Ni ipi ndefu na laini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Shati” — sauti /sh/ ni ndefu na laini.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Taja kiungo cha mwili chenye /ch/.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">kichwa</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Sauti /g/ na /ng/</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/g/</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">/ng/</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">goma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ngoma</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">gome</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ngome</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">goti</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ngozi</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">gari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ngazi</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">gunia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">nguo</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Zingatia</p>
    <div>Angalia: <strong>ng’</strong> (yenye kiapostrofi), kama katika <em>ng’ombe</em>, ni sauti tofauti /ŋ/. Katika somo hili tunashughulikia <strong>ng</strong> bila kiapostrofi, kama katika <em>ngoma</em> na <em>nguo</em>.</div>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kuchagua neno sahihi</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Jaza pengo: “Wageni walicheza kwa mdundo wa ___.” (goma / ngoma)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Ni kitu gani hutoa mdundo wa kucheza?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tamka yote mawili</strong>
    </p>
    <div style="margin:6px 0 0 34px;">goma — ngoma</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Fikiria maana</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ngoma ni chombo cha muziki.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Chagua</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“ngoma”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Wageni walicheza kwa mdundo wa ngoma.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kusema “goma” bila mvumo wa pua.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Maneno ya Mwili</h3>
    <p>Tamka: <em>kichwa</em> (/ch/), <em>shingo</em> (/sh/), <em>goti</em> (/g/), <em>ngozi</em> (/ng/). Sentensi: “<strong>Ngozi</strong> hufunika mwili, na <strong>shingo</strong> hushikilia <strong>kichwa</strong>.”</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Neno lipi ni vazi: chati au shati?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Linavaliwa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">shati</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Neno lipi ni chombo cha muziki: goma au ngoma?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Lina mvumo wa pua.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">ngoma</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Gawanya “ngozi” katika silabi.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Silabi mbili.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">ngo-zi</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Chora mtu na uandike majina ya viungo vyenye sauti /ch/, /sh/, /g/ na /ng/.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Chezeni “Nani Amesema?”: mmoja atamke jozi kama chati/shati; mwenzake aonyeshe kidole kimoja kwa /ch/ na viwili kwa /sh/.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Tengenezeni chati ya darasa yenye safu nne: ch, sh, g, ng, na maneno matano kila moja.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta wimbo wa watoto wa Kiswahili (kwa ruhusa) na uandike maneno matano yenye /sh/ au /ng/.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja neno lenye /sh/.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">shati / shule / shingo (au jingine).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja neno lenye /ng/.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">ngoma / nguo / ngozi (au jingine).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Eleza tofauti ya maana kati ya “gome” na “ngome”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Gome ni ganda la mti; ngome ni boma la ulinzi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Gawanya “shingo” katika silabi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">shi-ngo</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Eleza tofauti kati ya ng katika “ngoma” na ng’ katika “ng’ombe”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Ng” ni n ya puani pamoja na g; “ng’” ni sauti moja ya puani bila g kamili.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Mwalimu akisema “Leteni chati” nawe ukasikia “shati”, nini kitatokea?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Unaweza kuleta vazi badala ya karatasi ya kufundishia.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Tunga sentensi yenye maneno “chai” na “shamba”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Baada ya kunywa chai, tulienda shambani.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>/ch/ ni sauti fupi na kali; /sh/ ni ndefu na laini. /ng/ huanza kwa mvumo wa pua kabla ya /g/. Jozi kama chati/shati, goma/ngoma na gome/ngome zinaonyesha kwamba sauti hizi hubadilisha maana.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>ch: chai, kichwa.</li>
    <li>sh: shati, shingo.</li>
    <li>ng: ngoma, ngozi.</li>
    <li>ng’ ni tofauti na ng.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tamka polepole kwanza.</li>
    <li>Sikiliza tofauti kabla ya kutamka.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kusema “chati” badala ya “shati”.</li>
    <li>Kuchanganya ng na ng’.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Chagua neno sahihi kulingana na maana.</li>
    <li>Gawanya maneno katika silabi.</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi wa kimsingi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jinsi somo hili unavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutamka kwa usahihi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ushirikiano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Michezo ya sauti.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza nyimbo.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: viungo vya mwili</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Washindani wa mashindano ya kusoma na wasomaji wa habari hujizoeza sauti hizi kila siku.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika jozi tatu za maneno: chati/shati, goma/ngoma, gome/ngome, na utunge sentensi kwa kila neno.</li>
    <li>Andika majina ya viungo vitano vya mwili yenye sauti hizi.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ninaweza kusikia tofauti ya ch na sh?</li>
    <li>Ni neno gani nitajizoeza zaidi?</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Faharasa</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Istilahi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Chati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Karatasi ya kufundishia.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Shati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vazi la juu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ngoma</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chombo cha muziki.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ngome</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Boma la ulinzi.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua /ch/ na /sh/.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua /g/ na /ng/.</p>
    <p style="margin:6px 0;">☐ Naweza kutamka sauti hizi.</p>
    <p style="margin:6px 0;">☐ Najua ng na ng’ ni tofauti.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Neno lenye /sh/ ni:',
            options: ['chati', 'chai', 'kichwa', 'shati'],
            correct: 3,
            explanation: '“Shati” huanza kwa sauti ndefu na laini.'
        },
        {
            question: 'Neno lenye /ch/ ni:',
            options: ['shule', 'shingo', 'chumvi', 'shamba'],
            correct: 2,
            explanation: '“Chumvi” huanza kwa sauti fupi na kali.'
        },
        {
            question: '“Ngoma” ni:',
            options: ['Mgomo', 'Chombo cha muziki', 'Ganda la mti', 'Vazi'],
            correct: 1,
            explanation: '“Goma” ndilo linalohusu kukataa kufanya kazi.'
        },
        {
            question: '“Gome” ni:',
            options: ['Boma la ulinzi', 'Ngoma', 'Ganda la nje la mti', 'Shati'],
            correct: 2,
            explanation: 'Jibu ni “Ganda la nje la mti”. “Ngome” ndilo boma la ulinzi.'
        },
        {
            question: 'Kiungo chenye sauti /sh/ ni:',
            options: ['shingo', 'kichwa', 'goti', 'mkono'],
            correct: 0,
            explanation: 'Jibu ni “shingo”. “Shingo” ina sauti /sh/.'
        },
        {
            question: 'Gawanya “ngozi” katika silabi:',
            options: ['n-go-zi', 'ngo-zi', 'ngoz-i', 'ng-ozi'],
            correct: 1,
            explanation: '“Ng” huenda pamoja na irabu inayofuata.'
        },
        {
            question: '“Wageni walicheza kwa mdundo wa ___.”',
            options: ['ngoma', 'goma', 'gome', 'ngome'],
            correct: 0,
            explanation: 'Mdundo wa kucheza hutoka kwa ngoma.'
        },
        {
            question: 'Sauti /sh/ ni:',
            options: ['Fupi na kali', 'Ya puani', 'Kimya', 'Ndefu na laini'],
            correct: 3,
            explanation: 'Ni kama kumwambia mtu anyamaze: shhh.'
        },
        {
            question: '“Ng’ombe” lina sauti:',
            options: ['ng sawa na ngoma', 'ch', 'ng’ (tofauti na ng)', 'sh'],
            correct: 2,
            explanation: 'Kiapostrofi huonyesha sauti tofauti.'
        },
        {
            question: 'Kwa nini tutofautishe chati na shati?',
            options: ['Ni neno moja', 'Hazina maana', 'Ni za Kiingereza', 'Maana zao ni tofauti'],
            correct: 3,
            explanation: 'Moja ni karatasi, jingine ni vazi.'
        }
    ]
},
{
    name: '1.1.3 Matamshi Bora: Vitanzandimi',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.1 Matamshi Bora</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.3: Vitanzandimi</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza vitanzandimi ni nini, kutamka vitanzandimi vyenye silabi za sauti d/nd, ch/sh, j/nj na g/ng, na kutunga vyetu wenyewe.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Vitanzandimi huzoeza ulimi kutamka sauti zinazokaribiana kwa usahihi na kwa kasi. Pia ni burudani nzuri inayokuza ujasiri wa kuzungumza.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Darasani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎭 Tamasha za muziki na drama</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Michezo ya jioni</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Vipindi vya watoto</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎤 Mashindano</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚌 Safarini</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua silabi zinazotokana na sauti d/nd, ch/sh, j/nj na g/ng katika maneno.</li>
    <li>Kutamka silabi zinazotokana na sauti zinazokaribiana kimatamshi ili kuimarisha matamshi.</li>
    <li>Kutamka vitanzandimi vinavyoundwa kwa silabi za sauti zinazokaribiana kimatamshi.</li>
    <li>Kuchangamkia kukariri vitanzandimi ili kuimarisha matamshi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unajua vitanzandimi gani vyenye silabi za sauti d/nd, ch/sh, j/nj na g/ng?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.1.1 na 1.1.2.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Kitanzandimi</strong> (wingi: vitanzandimi) ni sentensi au kifungu chenye maneno yenye sauti zinazokaribiana, kinachokusudiwa kutamkwa kwa haraka. Kinaitwa hivyo kwa sababu “hutatiza ndimi”.</p>
    <p>Kutamka kitanzandimi: (1) soma polepole, ukitamka kila silabi; (2) rudia mara kadhaa; (3) ongeza kasi bila kupoteza usahihi; (4) kariri bila kusoma.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Polepole → sahihi → haraka → kariri.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📚 Msamiati Muhimu</h3>
    <p>Soma maneno haya kwanza. Yatakusaidia kuelewa somo zima.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana kwa lugha rahisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano katika sentensi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kitanzandimi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sentensi yenye sauti zinazokaribiana inayotamkwa haraka.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kitanzandimi hiki kina sauti nd.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukariri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusema kitu kwa moyo bila kusoma.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alikariri kitanzandimi bila kukosea.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kasi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwendo wa haraka.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ongeza kasi polepole.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ufasaha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uwezo wa kuzungumza lugha vizuri bila kukwama.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Vitanzandimi hukuza ufasaha.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kutatiza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufanya jambo kuwa gumu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Maneno haya hutatiza ulimi.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Vitanzandimi vya Kutamka</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Mwalimu atamke kila kitanzandimi polepole; wanafunzi warudie, kisha waongeze kasi.</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sauti</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kitanzandimi (asilia)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">d/nd</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ndege mdogo wa Dada Ndunge alidonoa ndizi ndani ya ndoo ya dawa.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">j/nj</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Njoroge mwenye njaa alijaa njiani akila njugu za Juma.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ch/sh</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shangazi Chausiku alishona shati la chati shuleni huku akinywa chai.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">g/ng</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gogo la Ngugi liligonga ngoma ya Gathoni karibu na ngome.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ndani ya ngozi, damu husafiri na moyo hushughulika bila kuchoka.</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Kitanzandimi cha kwanza kina maneno mangapi yenye /nd/?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Matano: ndege, Ndunge, ndizi, ndani, ndoo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Taja maneno yenye /sh/ katika kitanzandimi cha tatu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Shangazi, alishona, shati, shuleni.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kutunga Kitanzandimi</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kutunga kitanzandimi</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Tunga kitanzandimi chako chenye sauti /nj/ na /j/.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Kusanya maneno yenye sauti hizo, kisha yaunganishe kwa sentensi yenye maana.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Kusanya maneno</strong>
    </p>
    <div style="margin:6px 0 0 34px;">njiwa, njia, jani, jiko, Jabali, njugu</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Unganisha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Njiwa wa Jabali alijificha jikoni njiani…</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Kamilisha kwa maana</strong>
    </p>
    <div style="margin:6px 0 0 34px;">…akila njugu na majani.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Njiwa wa Jabali alijificha jikoni njiani akila njugu na majani.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutunga sentensi isiyo na maana; kitanzandimi lazima kieleweke.</p>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Watangazaji, waimbaji na waigizaji hutumia vitanzandimi kuandaa sauti zao kabla ya kuzungumza hadharani.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Kitanzandimi ni nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Hutatiza ndimi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sentensi yenye sauti zinazokaribiana inayotamkwa haraka.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Hatua ya kwanza ya kutamka kitanzandimi ni ipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Usianze kwa haraka.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusoma polepole ukitamka kila silabi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Taja faida moja ya vitanzandimi.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria ulimi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huimarisha matamshi / hukuza ufasaha / huburudisha.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Kariri vitanzandimi viwili na uvitamke kwa mzazi au mlezi.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Shindaneni: nani atatamka kitanzandimi mara tatu kwa haraka bila kukosea?</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Tungeni kitanzandimi cha kikundi chenye sauti zote nne na mkiwasilishe darasani.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Rekodi kitanzandimi chako (kwa ruhusa) na usikilize kama ulikosea popote.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Wingi wa “kitanzandimi” ni upi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">vitanzandimi</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Kukariri ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusema kitu kwa moyo bila kusoma.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja maneno matatu yenye /ng/ katika kitanzandimi cha nne.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ngugi, ngoma, ngome (pia liligonga).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini tuanze kutamka polepole?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili tutamke kila silabi kwa usahihi kabla ya kuongeza kasi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Tunga kitanzandimi chenye sauti /ch/ na /sh/.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Chausiku alichukua shoka shambani akachanja kuni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Kwa nini mtangazaji wa redio angetumia vitanzandimi kabla ya kipindi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuandaa ulimi ili atamke maneno kwa ufasaha na usahihi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Je, kitanzandimi kinahitaji kuwa na maana? Eleza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ndiyo; kinapaswa kuwa sentensi yenye maana ili kieleweke na kikumbukwe.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Vitanzandimi ni sentensi zenye sauti zinazokaribiana zinazotamkwa haraka. Huimarisha matamshi, hukuza ufasaha na huburudisha. Tunavitamka polepole kwanza, kisha kwa kasi, na mwisho kuvikariri.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Polepole → sahihi → haraka → kariri.</li>
    <li>Huimarisha matamshi.</li>
    <li>Vitanzandimi vinapaswa kuwa na maana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Usiruke silabi.</li>
    <li>Furahia kujizoeza.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kuanza kwa haraka.</li>
    <li>Kutunga sentensi zisizo na maana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ukiulizwa kutunga kitanzandimi, tumia sauti uliyopewa mara nyingi.</li>
    <li>Andika kwa sentensi kamili.</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi wa kimsingi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jinsi somo hili unavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ubunifu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutunga vitanzandimi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujiamini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukariri mbele ya wenzako.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ushirikiano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mashindano ya vikundi.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stadi za maisha: kujiamini</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: viungo vya mwili</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Vitanzandimi hutumiwa na waigizaji, waimbaji na watangazaji kuandaa sauti zao.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Tunga vitanzandimi viwili: kimoja chenye /d/ na /nd/, kingine chenye /g/ na /ng/.</li>
    <li>Kariri kitanzandimi kimoja na ukitamke mbele ya familia.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni kitanzandimi kipi kilichonitatiza zaidi?</li>
    <li>Nilijisikiaje nilipokariri mbele ya wenzangu?</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Faharasa</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Istilahi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kitanzandimi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sentensi ya kutatiza ndimi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukariri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusema kwa moyo.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kasi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwendo wa haraka.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ufasaha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uzungumzaji mzuri.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Najua kitanzandimi ni nini.</p>
    <p style="margin:6px 0;">☐ Naweza kutamka vitanzandimi.</p>
    <p style="margin:6px 0;">☐ Naweza kutunga kitanzandimi.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia kukariri vitanzandimi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kitanzandimi ni:',
            options: ['Hadithi ndefu', 'Wimbo wa taifa', 'Sentensi yenye sauti zinazokaribiana inayotamkwa haraka', 'Barua'],
            correct: 2,
            explanation: 'Jibu ni “Sentensi yenye sauti zinazokaribiana inayotamkwa haraka”. Kitanzandimi hutatiza ndimi.'
        },
        {
            question: 'Wingi wa “kitanzandimi” ni:',
            options: ['kitanzandimi', 'vitanzandimi', 'matanzandimi', 'mitanzandimi'],
            correct: 1,
            explanation: 'Ki- hubadilika kuwa vi- katika wingi.'
        },
        {
            question: 'Hatua ya kwanza ya kutamka kitanzandimi ni:',
            options: ['Kusoma kwa haraka sana', 'Kukariri bila kusoma', 'Kuimba', 'Kusoma polepole'],
            correct: 3,
            explanation: 'Jibu ni “Kusoma polepole”. Usahihi huja kabla ya kasi.'
        },
        {
            question: 'Vitanzandimi husaidia:',
            options: ['Kuandika barua', 'Kuimarisha matamshi', 'Kuhesabu', 'Kuchora'],
            correct: 1,
            explanation: 'Jibu ni “Kuimarisha matamshi”. Huzoeza ulimi.'
        },
        {
            question: 'Kukariri ni:',
            options: ['Kuandika', 'Kusema kwa moyo bila kusoma', 'Kunyamaza', 'Kuchora'],
            correct: 1,
            explanation: 'Unakumbuka maneno bila kuyaangalia.'
        },
        {
            question: 'Kitanzandimi cha Njoroge kina sauti:',
            options: ['ch/sh', 'd/nd', 'j/nj', 'g/ng'],
            correct: 2,
            explanation: 'Kina njaa, njiani, njugu, Juma, alijaa.'
        },
        {
            question: 'Kitanzandimi cha Shangazi Chausiku kina sauti:',
            options: ['j/nj', 'g/ng', 'd/nd', 'ch/sh'],
            correct: 3,
            explanation: 'Kina shati, chati, chai, shuleni.'
        },
        {
            question: 'Kitanzandimi kizuri kinapaswa:',
            options: ['Kuwa na maana', 'Kukosa maana', 'Kuwa kirefu sana', 'Kuwa cha Kiingereza'],
            correct: 0,
            explanation: 'Jibu ni “Kuwa na maana”. Maana husaidia kukikumbuka.'
        },
        {
            question: 'Nani hutumia vitanzandimi kuandaa sauti zao?',
            options: ['Wahasibu pekee', 'Madereva pekee', 'Watangazaji na waigizaji', 'Hakuna'],
            correct: 2,
            explanation: 'Hujiandaa kuzungumza hadharani.'
        },
        {
            question: 'Ufasaha ni:',
            options: ['Kunyamaza', 'Kuandika haraka', 'Kusoma kimya', 'Uwezo wa kuzungumza vizuri bila kukwama'],
            correct: 3,
            explanation: 'Jibu ni “Uwezo wa kuzungumza vizuri bila kukwama”. Vitanzandimi hukuza ufasaha.'
        }
    ]
},
{
    name: '1.1 Zoezi la Tathmini: Matamshi Bora',
    type: 'lesson',
    duration: '30 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.1 Matamshi Bora</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Matamshi Bora</h2>
    <p style="font-size:16px;">Zoezi hili linapima uelewa wako wa masomo 1.1.1 hadi 1.1.3.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Maelekezo</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Zoezi lina maswali 10 ya kuchagua jibu sahihi.</li>
    <li>Soma kila swali mara mbili kabla ya kuchagua.</li>
    <li>Usirudi kwenye maelezo ya somo wakati wa zoezi — jipime kwa uaminifu.</li>
    <li>Baada ya kumaliza, soma maelezo ya kila jibu ili kujifunza kutokana na makosa.</li>
    <li>Muda unaopendekezwa: 30 min.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 Yanayotathminiwa</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sauti d/nd na j/nj</li>
    <li>Sauti ch/sh na g/ng</li>
    <li>Silabi</li>
    <li>Vitanzandimi</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📊 Viwango vya Utendaji (CBC)</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Alama</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kiwango</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80% – 100%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzidi Matarajio (KM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umeielewa mada ndogo vizuri sana.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60% – 79%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufikia Matarajio (FM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umeelewa; rudia sehemu chache ulizokosea.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40% – 59%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukaribia Matarajio (KKM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rudia somo la marudio kisha ujaribu tena.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya 40%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya Matarajio (CM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soma tena masomo matatu na uombe msaada kwa mwalimu.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Kidokezo cha Mtihani</p>
    <div>Tamka kila neno kimoyomoyo kabla ya kuchagua jibu.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Neno lenye /nd/ ni:',
            options: ['ndoo', 'dawa', 'dada', 'damu'],
            correct: 0,
            explanation: '“Ndoo” huanza kwa mvumo wa pua.'
        },
        {
            question: 'Neno lenye /nj/ ni:',
            options: ['njugu', 'jani', 'jiko', 'juu'],
            correct: 0,
            explanation: '“Njugu” huanza kwa n ya puani.'
        },
        {
            question: 'Neno lenye /sh/ ni:',
            options: ['shule', 'chai', 'kichwa', 'chumvi'],
            correct: 0,
            explanation: '“Shule” ina sauti ndefu na laini.'
        },
        {
            question: 'Neno lenye /ng/ ni:',
            options: ['gari', 'goti', 'gunia', 'nguo'],
            correct: 3,
            explanation: '“Nguo” ina n ya puani kabla ya g.'
        },
        {
            question: '“Doa” na “ndoa”:',
            options: ['Zina maana moja', 'Si maneno', 'Zina maana tofauti', 'Ni ya Kiingereza'],
            correct: 2,
            explanation: 'Doa ni alama ya uchafu; ndoa ni muungano.'
        },
        {
            question: '“Jaa” ni:',
            options: ['Hamu ya chakula', 'Barabara', 'Mahali pa kutupa taka', 'Ndege'],
            correct: 2,
            explanation: 'Jibu ni “Mahali pa kutupa taka”. “Njaa” ndiyo hamu ya chakula.'
        },
        {
            question: '“Chati” ni:',
            options: ['Vazi', 'Chombo cha muziki', 'Mti', 'Karatasi ya kufundishia'],
            correct: 3,
            explanation: 'Jibu ni “Karatasi ya kufundishia”. “Shati” ndilo vazi.'
        },
        {
            question: '“Ngome” ni:',
            options: ['Ganda la mti', 'Boma la ulinzi', 'Mgomo', 'Ngoma'],
            correct: 1,
            explanation: 'Jibu ni “Boma la ulinzi”. “Gome” ni ganda la mti.'
        },
        {
            question: 'Gawanya “shingo” katika silabi:',
            options: ['sh-in-go', 'shi-ngo', 'shin-go', 's-hingo'],
            correct: 1,
            explanation: 'Jibu ni “shi-ngo”. Silabi mbili: shi na ngo.'
        },
        {
            question: 'Kitanzandimi hutamkwa kwanza:',
            options: ['Kwa haraka sana', 'Kwa kunong’ona', 'Polepole', 'Kwa kuimba'],
            correct: 2,
            explanation: 'Jibu ni “Polepole”. Usahihi kwanza, kasi baadaye.'
        }
    ]
},
{
    name: '1.1 Kazi ya Mradi: Tamasha la Vitanzandimi',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.1 Matamshi Bora</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Tamasha la Vitanzandimi</h2>
    <p style="font-size:16px;">Kwa vikundi, mtatunga na kuwasilisha vitanzandimi vyenye sauti d/nd, ch/sh, j/nj na g/ng kuhusu viungo vya mwili vya ndani.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Darasa lenu linaandaa Tamasha la Vitanzandimi. Kila kikundi kitawasilisha vitanzandimi vinne, kimoja kwa kila jozi ya sauti, vinavyohusu viungo vya mwili kama moyo, mapafu, tumbo, ini na figo.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Tamasha za muziki na drama nchini hujumuisha vitanzandimi kama sehemu ya mashindano ya lugha.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Undeni vikundi vya watu wanne.</li>
    <li>Tungeni vitanzandimi vinne: d/nd, ch/sh, j/nj na g/ng.</li>
    <li>Kila kitanzandimi kitaje angalau kiungo kimoja cha mwili.</li>
    <li>Jizoezeni kuvitamka polepole, kisha kwa kasi.</li>
    <li>Wasilisheni mbele ya darasa; kila mwanakikundi atamke kitanzandimi kimoja.</li>
    <li>Andikeni vitanzandimi vyenu kwenye bango.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Vitanzandimi vinne vilivyoandikwa</li>
    <li>Uwasilishaji</li>
    <li>Bango</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📏 Kigezo cha Tathmini (Rubriki)</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kigezo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kuzidi Matarajio (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kufikia Matarajio (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kukaribia Matarajio (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Chini ya Matarajio (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utunzi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vinne, vyenye maana na sauti lengwa nyingi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vinne vyenye maana</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vitatu au chini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Havieleweki</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matamshi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi kabisa kwa kasi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi kwa kasi ya wastani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa kadhaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa mengi</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viungo vya mwili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kila kitanzandimi kina kiungo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vingi vina kiungo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kimoja au viwili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bango</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nadhifu na la kuvutia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nadhifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lina makosa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Halipo</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Tumieni maneno mengi yenye sauti lengwa.<br>Jizoezeni nyumbani.<br>Tabasamu na furahia.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni kitanzandimi kipi kilichokuwa kigumu zaidi?</li>
    <li>Nilijifunza nini kuhusu matamshi?</li>
    <li>Nilishirikianaje na kikundi?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kila kikundi kitunge vitanzandimi vingapi?',
            options: ['Kimoja', 'Kumi', 'Vinne', 'Hakuna'],
            correct: 2,
            explanation: 'Kimoja kwa kila jozi ya sauti.'
        },
        {
            question: 'Vitanzandimi vihusu:',
            options: ['Magari', 'Viungo vya mwili vya ndani', 'Michezo pekee', 'Hali ya hewa'],
            correct: 1,
            explanation: 'Jibu ni “Viungo vya mwili vya ndani”. Ndiyo mada ya Mada 1.0.'
        },
        {
            question: 'Kila mwanakikundi atamke:',
            options: ['Vyote', 'Hakuna', 'Kitanzandimi kimoja', 'Wimbo'],
            correct: 2,
            explanation: 'Jibu ni “Kitanzandimi kimoja”. Kila mtu ashiriki.'
        },
        {
            question: 'Vikundi viwe na watu:',
            options: ['Wawili', 'Wanne', 'Kumi', 'Mmoja'],
            correct: 1,
            explanation: 'Jibu ni “Wanne”. Maelekezo yanataja wanne.'
        },
        {
            question: 'Mwisho, vitanzandimi viandikwe:',
            options: ['Ubaoni pekee', 'Hapana', 'Mchangani', 'Kwenye bango'],
            correct: 3,
            explanation: 'Jibu ni “Kwenye bango”. Bango litabandikwa darasani.'
        }
    ]
},
{
    name: '1.1 Marudio: Matamshi Bora',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.1 Matamshi Bora</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Matamshi Bora</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.1.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔤 d/nd</p>
    <div>doa/ndoa, dama/ndama, damu, ndizi, ndani.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔤 j/nj</p>
    <div>jaa/njaa, jia/njia, jani, njugu.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔤 ch/sh</p>
    <div>chati/shati, chai, kichwa, shingo, shule.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔤 g/ng</p>
    <div>goma/ngoma, gome/ngome, goti, ngozi.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">👅 Vitanzandimi</p>
    <div>Polepole → sahihi → haraka → kariri.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ndoa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">muungano wa mume na mke</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">njaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">hamu ya chakula</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">shati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">vazi la juu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ngoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">chombo cha muziki</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja jozi moja ya d/nd.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">doa/ndoa au dama/ndama.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja jozi moja ya j/nj.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">jaa/njaa au jia/njia.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja jozi moja ya ch/sh.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">chati/shati.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja jozi moja ya g/ng.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">goma/ngoma au gome/ngome.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kitanzandimi ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sentensi yenye sauti zinazokaribiana inayotamkwa haraka.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sauti zinazokaribiana hubadilisha maana.</li>
    <li>nd, nj na ng huanza kwa mvumo wa pua.</li>
    <li>Vitanzandimi huimarisha matamshi.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kutambua silabi za sauti hizi.</p>
    <p style="margin:6px 0;">☐ Naweza kuzitamka kwa usahihi.</p>
    <p style="margin:6px 0;">☐ Naweza kutamka vitanzandimi.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia kukariri vitanzandimi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Jozi ipi ni ya d/nd?',
            options: ['doa/ndoa', 'chati/shati', 'goma/ngoma', 'jaa/njaa'],
            correct: 0,
            explanation: 'Doa na ndoa hutofautiana kwa /d/ na /nd/.'
        },
        {
            question: 'Jozi ipi ni ya ch/sh?',
            options: ['chati/shati', 'jia/njia', 'gome/ngome', 'dama/ndama'],
            correct: 0,
            explanation: 'Chati na shati hutofautiana kwa /ch/ na /sh/.'
        },
        {
            question: 'Sauti zipi huanza kwa mvumo wa pua?',
            options: ['ch, sh', 'd, j, g', 'a, e, i', 'nd, nj, ng'],
            correct: 3,
            explanation: 'Jibu ni “nd, nj, ng”. Herufi n huleta mvumo wa pua.'
        },
        {
            question: 'Kitanzandimi hukuza:',
            options: ['Uvivu', 'Ufasaha', 'Kimya', 'Hasira'],
            correct: 1,
            explanation: 'Huzoeza ulimi kuzungumza vizuri.'
        },
        {
            question: '“Ndama” ni:',
            options: ['Mchezo wa bao', 'Alama ya uchafu', 'Mtoto wa ng’ombe', 'Ngoma'],
            correct: 2,
            explanation: 'Jibu ni “Mtoto wa ng’ombe”. “Dama” ndio mchezo wa bao.'
        }
    ]
},
{
    name: '1.2.1 Kusoma kwa Ufahamu: Kutambua na Kueleza Msamiati Lengwa',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.2 Kusoma kwa Ufahamu</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.1: Kutambua na Kueleza Msamiati Lengwa</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutasoma kifungu “Kiwanda Kilichofichika” na kujifunza kutambua msamiati lengwa kuhusu viungo vya mwili vya ndani na kueleza maana yake.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Msamiati lengwa ndio ufunguo wa kuelewa kifungu. Ukijua maana ya maneno kama “mapafu”, “figo” na “virutubishi”, utaelewa kifungu na kujifunza jinsi ya kutunza mwili wako.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Vitabu vya Sayansi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Zahanati</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Vipindi vya afya</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Klabu ya afya</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua msamiati wa suala lengwa uliotumika katika kifungu ili kuimarisha ufahamu.</li>
    <li>Kueleza maana ya msamiati lengwa ili kuubainisha.</li>
    <li>Kuonyesha ufahamu wa kifungu kwa kujibu maswali na kutoa muhtasari.</li>
    <li>Kuchangamkia usomaji ili kuimarisha ufahamu.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Kusoma kuhusu viungo vya mwili vya ndani kuna umuhimu gani?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Kusoma hadithi fupi katika Gredi ya 5; mada ndogo 1.1 kuhusu matamshi.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Msamiati lengwa</strong> ni maneno muhimu ya mada fulani yanayojitokeza katika kifungu. Katika mada hii, msamiati lengwa ni majina ya viungo vya mwili vya ndani na kazi zake.</p>
    <p>Kueleza maana ya neno: (1) soma sentensi nzima linamotumika; (2) angalia maneno yanayolizunguka; (3) kisia maana; (4) thibitisha kwa kamusi au kwa mwalimu.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Neno + sentensi yake = maana yake.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📚 Msamiati Muhimu</h3>
    <p>Soma maneno haya kwanza. Yatakusaidia kuelewa somo zima.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana kwa lugha rahisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano katika sentensi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Moyo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kiungo kinachosukuma damu mwilini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Moyo hupiga bila kupumzika.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mapafu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viungo viwili vya kifuani vya kupumua.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Moshi huharibu mapafu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Figo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viungo viwili vinavyochuja damu na kutoa mkojo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kunywa maji husaidia figo.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kiungo kikubwa kinachoondoa sumu na kusaidia kusaga mafuta.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Pombe huharibu ini.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Virutubishi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viini vya chakula vinavyojenga na kulinda mwili.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mboga zina virutubishi vingi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mishipa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mirija inayopitisha damu mwilini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Damu husafiri kwenye mishipa.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Oksijeni</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu ya hewa inayohitajika kwa uhai.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mapafu huchukua oksijeni.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Soma Kifungu</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Tabiri Kwanza</p>
    <div>Kabla ya kusoma: kichwa ni “Kiwanda Kilichofichika”. Unafikiri kiwanda hicho ni nini?</div>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Kiwanda Kilichofichika” — kifungu cha hadithi</p>
    <p style="margin:8px 0;">(1) Wakati wa likizo ya Aprili, Amani alienda kumtembelea shangazi yake, Bi. Halima, aliyekuwa muuguzi katika zahanati ya Kijiji cha Mto Baridi. Siku moja, Amani aliona chati kubwa ukutani yenye picha ya mwili wa binadamu uliofunguliwa. “Shangazi, hiki ni nini?” aliuliza kwa mshangao.</p>
    <p style="margin:8px 0;">(2) Bi. Halima alitabasamu. “Hiki ni kiwanda kilichofichika ndani yako,” alisema. “Mwili wako una viungo vya ndani vinavyofanya kazi mchana na usiku bila kupumzika, hata unapolala.” Alianza kwa kuonyesha <strong>moyo</strong>. “Moyo ni pampu. Husukuma damu kwenda kila sehemu ya mwili kupitia mishipa. Damu hubeba hewa safi na chakula hadi kila seli.”</p>
    <p style="margin:8px 0;">(3) Kisha alionyesha <strong>mapafu</strong> mawili kifuani. “Unapovuta pumzi, mapafu hujaa hewa yenye oksijeni. Unapotoa pumzi, hutoa hewa chafu. Ndiyo maana moshi wa sigara na wa jiko lisilo na dirisha ni hatari kwa mapafu.” Amani alivuta pumzi ndefu na kuhisi kifua chake kikipanuka.</p>
    <p style="margin:8px 0;">(4) “Na tumbo je?” Amani aliuliza. Shangazi alieleza kwamba chakula husagwa <strong>tumboni</strong> na kwenye <strong>utumbo</strong>, ambapo virutubishi hufyonzwa na kuingia kwenye damu. <strong>Ini</strong>, kiungo kikubwa kilicho upande wa kulia, husaidia kusaga mafuta na kuondoa sumu mwilini. <strong>Figo</strong> mbili, zilizo mgongoni chini ya mbavu, huchuja damu na kutoa uchafu kama mkojo.</p>
    <p style="margin:8px 0;">(5) “Je, ninawezaje kutunza kiwanda hiki?” Amani aliuliza. Bi. Halima alihesabu kwa vidole: “Kunywa maji safi ya kutosha, kula vyakula vya aina mbalimbali, fanya mazoezi kila siku, lala vya kutosha, na epuka pombe, sigara na dawa za kulevya.”</p>
    <p style="margin:8px 0;">(6) Likizo ilipoisha, Amani alirudi shuleni akiwa na furaha. Katika kipindi cha Sayansi, alichora picha ya moyo na mapafu ubaoni na kuwaeleza wenzake yote aliyojifunza. Mwalimu wake alimpongeza na kumteua kuwa kiongozi wa klabu ya afya. Amani aliahidi kwamba atatunza “kiwanda chake kilichofichika” maisha yake yote.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Msamiati Lengwa na Kazi Zake</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kiungo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mahali</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kazi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moyo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kifuani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Husukuma damu mwilini.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mapafu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kifuani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huvuta oksijeni na kutoa hewa chafu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumbo na utumbo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumboni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Husaga chakula na kufyonza virutubishi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Upande wa kulia wa tumbo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Husaidia kusaga mafuta na kuondoa sumu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Figo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mgongoni chini ya mbavu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huchuja damu na kutoa mkojo.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kueleza maana kwa muktadha</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Eleza maana ya “huchuja” katika aya ya 4: “Figo… huchuja damu na kutoa uchafu.”</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Ukichuja chai, unafanya nini?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Soma sentensi</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Figo huchuja damu na kutoa uchafu.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Linganisha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Kuchuja chai ni kutenganisha majani na chai.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Eleza</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Kutenganisha uchafu na damu safi.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Huchuja” inamaanisha kutenganisha uchafu na kitu safi — hapa, figo hutenganisha uchafu na damu.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kunakili sentensi nzima badala ya kueleza maana ya neno.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Maneno Mengine katika Kifungu</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mshangao</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">hali ya kushangaa</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">pampu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">chombo cha kusukuma maji au hewa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kupanuka</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kuongezeka ukubwa</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kufyonzwa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kuingizwa ndani, kama sponji inavyonyonya maji</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kumteua</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kumchagua</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Moyo umelinganishwa na nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Pampu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Figo ziko wapi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mgongoni chini ya mbavu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Ni kiungo kipi husaidia kuondoa sumu mwilini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ini.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Msamiati lengwa ni nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Mfano: moyo, figo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maneno muhimu ya mada yanayojitokeza katika kifungu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Kazi ya mapafu ni ipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuvuta oksijeni na kutoa hewa chafu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Eleza maana ya “virutubishi”.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Hufyonzwa kutoka kwa chakula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Viini vya chakula vinavyojenga na kulinda mwili.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Chora mwili wa binadamu na uonyeshe moyo, mapafu, tumbo, ini na figo.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mmoja ataje kiungo; mwenzake aeleze kazi yake.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Tengenezeni kamusi ndogo ya darasa yenye maneno kumi ya viungo vya mwili na maana zake.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tazama video fupi ya elimu kuhusu moyo (kwa ruhusa ya mwalimu) na uandike maneno mapya matatu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja viungo vitatu vya ndani vilivyotajwa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Moyo, mapafu, ini (au figo, tumbo).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Shangazi wa Amani alikuwa na kazi gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Muuguzi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Eleza maana ya “mishipa”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mirija inayopitisha damu mwilini.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini moshi ni hatari kwa mapafu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huingiza hewa chafu inayoharibu mapafu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini mwandishi aliuita mwili “kiwanda”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa sababu viungo vyake hufanya kazi nyingi bila kupumzika, kama mashine za kiwanda.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Taja njia mbili za kutunza figo zako.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kunywa maji safi ya kutosha; kuepuka pombe na dawa za kulevya.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kusoma kuhusu viungo vya mwili kuna umuhimu gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hutusaidia kujua jinsi mwili unavyofanya kazi na jinsi ya kuutunza.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Msamiati lengwa ni maneno muhimu ya mada. Katika kifungu hiki, ni majina ya viungo vya mwili vya ndani — moyo, mapafu, tumbo, ini na figo — na kazi zake. Tunaeleza maana kwa kusoma muktadha.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Moyo husukuma damu.</li>
    <li>Mapafu hupumua.</li>
    <li>Figo huchuja damu.</li>
    <li>Ini huondoa sumu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Soma sentensi nzima.</li>
    <li>Thibitisha maana kwa kamusi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kuchanganya figo na ini.</li>
    <li>Kunakili sentensi badala ya kueleza maana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Eleza maana kwa maneno yako.</li>
    <li>Tunga sentensi ukiulizwa.</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi wa kimsingi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jinsi somo hili unavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujifunza kujifunza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutafuta maana ya maneno.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kueleza msamiati.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutazama video za elimu.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: kutunza viungo vya mwili</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu dhidi ya dawa za kulevya</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Madaktari, wauguzi na walimu wa Sayansi hutumia msamiati huu kila siku.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika maneno kumi ya msamiati lengwa na maana zake.</li>
    <li>Mweleze mzazi kazi za viungo vitatu vya ndani.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni neno gani jipya nililojifunza?</li>
    <li>Nitatunzaje viungo vyangu?</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Faharasa</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Istilahi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Moyo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pampu ya damu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mapafu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viungo vya kupumua.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Figo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huchuja damu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Virutubishi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viini vya chakula.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua msamiati lengwa.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza maana yake.</p>
    <p style="margin:6px 0;">☐ Najua kazi za viungo vya ndani.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Moyo umelinganishwa na:',
            options: ['Kiwanda cha nguo', 'Chujio', 'Jiko', 'Pampu'],
            correct: 3,
            explanation: 'Kama pampu, moyo husukuma damu.'
        },
        {
            question: 'Kazi ya mapafu ni:',
            options: ['Kusaga chakula', 'Kuchuja damu', 'Kuvuta oksijeni na kutoa hewa chafu', 'Kuondoa sumu'],
            correct: 2,
            explanation: 'Jibu ni “Kuvuta oksijeni na kutoa hewa chafu”. Aya ya 3 inaeleza kupumua.'
        },
        {
            question: 'Figo ziko:',
            options: ['Mgongoni chini ya mbavu', 'Kichwani', 'Mguuni', 'Shingoni'],
            correct: 0,
            explanation: 'Aya ya 4 inaeleza mahali pa figo.'
        },
        {
            question: 'Ini husaidia:',
            options: ['Kupumua', 'Kuondoa sumu mwilini', 'Kusukuma damu', 'Kuona'],
            correct: 1,
            explanation: 'Jibu ni “Kuondoa sumu mwilini”. Pia husaidia kusaga mafuta.'
        },
        {
            question: '“Virutubishi” ni:',
            options: ['Aina ya dawa za kulevya', 'Mishipa', 'Viini vya chakula vinavyojenga mwili', 'Hewa chafu'],
            correct: 2,
            explanation: 'Jibu ni “Viini vya chakula vinavyojenga mwili”. Hufyonzwa kutoka kwa chakula.'
        },
        {
            question: '“Huchuja” inamaanisha:',
            options: ['Kupika', 'Kusukuma', 'Kupumua', 'Kutenganisha uchafu na kitu safi'],
            correct: 3,
            explanation: 'Jibu ni “Kutenganisha uchafu na kitu safi”. Kama kuchuja chai.'
        },
        {
            question: 'Shangazi wa Amani alifanya kazi:',
            options: ['Shuleni', 'Sokoni', 'Zahanati', 'Kiwandani'],
            correct: 2,
            explanation: 'Jibu ni “Zahanati”. Alikuwa muuguzi wa zahanati.'
        },
        {
            question: 'Msamiati lengwa ni:',
            options: ['Maneno yasiyo na maana', 'Majina ya watu pekee', 'Alama za uakifishaji', 'Maneno muhimu ya mada katika kifungu'],
            correct: 3,
            explanation: 'Jibu ni “Maneno muhimu ya mada katika kifungu”. Ni maneno yanayolenga mada.'
        },
        {
            question: '“Mishipa” ni:',
            options: ['Mirija inayopitisha damu', 'Mifupa', 'Nywele', 'Meno'],
            correct: 0,
            explanation: 'Damu husafiri ndani ya mishipa.'
        },
        {
            question: 'Kusoma kuhusu viungo vya mwili hutusaidia:',
            options: ['Kupoteza muda', 'Kujua jinsi ya kutunza afya yetu', 'Kuogopa', 'Kulala'],
            correct: 1,
            explanation: 'Jibu ni “Kujua jinsi ya kutunza afya yetu”. Hili ni jibu la swali dadisi.'
        }
    ]
},
{
    name: '1.2.2 Kusoma kwa Ufahamu: Kujibu Maswali ya Ufahamu',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.2 Kusoma kwa Ufahamu</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.2: Kujibu Maswali ya Ufahamu</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza mambo ya kuzingatia tunaposoma kifungu cha hadithi na jinsi ya kujibu aina mbalimbali za maswali ya ufahamu kuhusu “Kiwanda Kilichofichika”.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Kujibu maswali ya ufahamu huonyesha kwamba umeelewa ulichosoma. Ni stadi muhimu darasani, katika mitihani na maishani.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Maktaba</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Darasani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Maelekezo ya dawa</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Habari mtandaoni</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua msamiati wa suala lengwa uliotumika katika kifungu ili kuimarisha ufahamu.</li>
    <li>Kueleza maana ya msamiati lengwa ili kuubainisha.</li>
    <li>Kuonyesha ufahamu wa kifungu kwa kujibu maswali na kutoa muhtasari.</li>
    <li>Kuchangamkia usomaji ili kuimarisha ufahamu.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Unazingatia nini unaposoma kifungu cha hadithi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.2.1 — msamiati lengwa.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Unaposoma kifungu cha hadithi, zingatia: <strong>kichwa</strong>, <strong>wahusika</strong> (nani?), <strong>mahali</strong> (wapi?), <strong>wakati</strong> (lini?), <strong>matukio</strong> (nini kilitokea?) na <strong>funzo</strong> (tunajifunza nini?).</p>
    <p>Maswali ya ufahamu ni ya aina mbili kuu: maswali ambayo <strong>jibu limo kifunguni</strong> moja kwa moja, na maswali ya <strong>kufikiri</strong> ambayo yanahitaji utumie akili yako. Jibu kila swali kwa <strong>sentensi kamili</strong>.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Soma swali → tafuta aya → jibu kwa sentensi kamili.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📚 Msamiati Muhimu</h3>
    <p>Soma maneno haya kwanza. Yatakusaidia kuelewa somo zima.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana kwa lugha rahisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano katika sentensi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mhusika</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu au kiumbe katika hadithi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Amani ni mhusika mkuu.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Funzo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo la kujifunza kutoka kwa hadithi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Funzo ni kutunza mwili.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sentensi kamili</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sentensi inayojitosheleza kimaana.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Jibu kwa sentensi kamili.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zahanati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kituo kidogo cha matibabu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Bi. Halima alifanya kazi zahanati.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuteua</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumchagua mtu kwa cheo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mwalimu alimteua Amani.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Kifungu</h3>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Kiwanda Kilichofichika” — kifungu cha hadithi</p>
    <p style="margin:8px 0;">(1) Wakati wa likizo ya Aprili, Amani alienda kumtembelea shangazi yake, Bi. Halima, aliyekuwa muuguzi katika zahanati ya Kijiji cha Mto Baridi. Siku moja, Amani aliona chati kubwa ukutani yenye picha ya mwili wa binadamu uliofunguliwa. “Shangazi, hiki ni nini?” aliuliza kwa mshangao.</p>
    <p style="margin:8px 0;">(2) Bi. Halima alitabasamu. “Hiki ni kiwanda kilichofichika ndani yako,” alisema. “Mwili wako una viungo vya ndani vinavyofanya kazi mchana na usiku bila kupumzika, hata unapolala.” Alianza kwa kuonyesha <strong>moyo</strong>. “Moyo ni pampu. Husukuma damu kwenda kila sehemu ya mwili kupitia mishipa. Damu hubeba hewa safi na chakula hadi kila seli.”</p>
    <p style="margin:8px 0;">(3) Kisha alionyesha <strong>mapafu</strong> mawili kifuani. “Unapovuta pumzi, mapafu hujaa hewa yenye oksijeni. Unapotoa pumzi, hutoa hewa chafu. Ndiyo maana moshi wa sigara na wa jiko lisilo na dirisha ni hatari kwa mapafu.” Amani alivuta pumzi ndefu na kuhisi kifua chake kikipanuka.</p>
    <p style="margin:8px 0;">(4) “Na tumbo je?” Amani aliuliza. Shangazi alieleza kwamba chakula husagwa <strong>tumboni</strong> na kwenye <strong>utumbo</strong>, ambapo virutubishi hufyonzwa na kuingia kwenye damu. <strong>Ini</strong>, kiungo kikubwa kilicho upande wa kulia, husaidia kusaga mafuta na kuondoa sumu mwilini. <strong>Figo</strong> mbili, zilizo mgongoni chini ya mbavu, huchuja damu na kutoa uchafu kama mkojo.</p>
    <p style="margin:8px 0;">(5) “Je, ninawezaje kutunza kiwanda hiki?” Amani aliuliza. Bi. Halima alihesabu kwa vidole: “Kunywa maji safi ya kutosha, kula vyakula vya aina mbalimbali, fanya mazoezi kila siku, lala vya kutosha, na epuka pombe, sigara na dawa za kulevya.”</p>
    <p style="margin:8px 0;">(6) Likizo ilipoisha, Amani alirudi shuleni akiwa na furaha. Katika kipindi cha Sayansi, alichora picha ya moyo na mapafu ubaoni na kuwaeleza wenzake yote aliyojifunza. Mwalimu wake alimpongeza na kumteua kuwa kiongozi wa klabu ya afya. Amani aliahidi kwamba atatunza “kiwanda chake kilichofichika” maisha yake yote.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Mambo ya Kuzingatia Unaposoma</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kipengele</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Katika kifungu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kichwa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kiwanda Kilichofichika</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wahusika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amani, Bi. Halima, mwalimu wa Amani</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zahanati ya Kijiji cha Mto Baridi; shuleni</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wakati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Likizo ya Aprili</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matukio</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amani anajifunza kuhusu viungo; anawafundisha wenzake</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Funzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tutunze miili yetu kwa kula vizuri, kunywa maji, kufanya mazoezi na kuepuka sumu.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Aina za Maswali na Majibu</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Swali</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aina</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jibu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amani alimtembelea nani?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jibu limo kifunguni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alimtembelea shangazi yake, Bi. Halima.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amani alienda likizo ya mwezi gani?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jibu limo kifunguni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alienda likizo ya Aprili.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa nini Amani alivuta pumzi ndefu?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufikiri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alitaka kuhisi mapafu yake yakijaa hewa kama shangazi alivyoeleza.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taja sifa moja ya Amani.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufikiri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ni mdadisi — aliuliza maswali mengi.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kujibu swali la kufikiri</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Kwa nini mwalimu alimteua Amani kuwa kiongozi wa klabu ya afya?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Amani alifanya nini darasani? Hiyo inaonyesha nini?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tafuta aya</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aya ya 6.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Tambua kitendo</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aliwaeleza wenzake aliyojifunza.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Eleza sababu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Alionyesha ujuzi na hamu ya kufundisha wengine.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Mwalimu alimteua kwa sababu Amani alionyesha ujuzi kuhusu afya na hamu ya kuwafundisha wenzake.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kujibu kwa neno moja: “Ujuzi.”</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Mhusika mkuu ni nani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Hadithi inamfuata yeye.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Amani.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Taja ushauri mmoja wa Bi. Halima.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kunywa maji safi ya kutosha (au mwingine).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Jibu kwa sentensi kamili: Kijiji kiliitwa nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kijiji kiliitwa Mto Baridi.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika maswali matano kuhusu kifungu na majibu yake.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Ulizaneni maswali; jibuni kwa sentensi kamili.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Igizeni mazungumzo kati ya Amani na Bi. Halima.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Soma kifungu kifupi cha afya mtandaoni (kwa ruhusa) na ujibu maswali matatu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Bi. Halima alikuwa nani kwa Amani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Shangazi yake.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Amani aliona nini ukutani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Chati kubwa yenye picha ya mwili wa binadamu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja mambo matatu ya kutunza mwili kulingana na kifungu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kunywa maji safi, kula vyakula mbalimbali, kufanya mazoezi (au kulala vya kutosha, kuepuka pombe na sigara).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Amani alifanya nini aliporudi shuleni?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Alichora moyo na mapafu ubaoni na kuwaeleza wenzake.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Funzo kuu la kifungu ni lipi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Tunapaswa kutunza viungo vya mwili kwa kufuata tabia bora za afya.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Kwa nini ni muhimu kujua kazi za viungo vya mwili?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili tuchukue hatua za kuvitunza na kuepuka magonjwa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Unazingatia nini unaposoma kifungu cha hadithi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kichwa, wahusika, mahali, wakati, matukio na funzo.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Unaposoma kifungu cha hadithi, zingatia kichwa, wahusika, mahali, wakati, matukio na funzo. Maswali ya ufahamu ni ya jibu lililo kifunguni au ya kufikiri; yote hujibiwa kwa sentensi kamili.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kichwa, wahusika, mahali, wakati, matukio, funzo.</li>
    <li>Sentensi kamili.</li>
    <li>Rudi kwenye kifungu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Soma swali kwa makini.</li>
    <li>Jibu swali lililoulizwa tu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Majibu ya neno moja.</li>
    <li>Kubahatisha bila kusoma.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Taja aya unayotumia.</li>
    <li>Swali la alama mbili linahitaji hoja mbili.</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi wa kimsingi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jinsi somo hili unavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu maswali ya kufikiri.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu kwa sentensi kamili.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ushirikiano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuulizana maswali.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya ya mwili</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu dhidi ya dawa za kulevya</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Kuelewa maelekezo ya dawa au ushauri wa daktari kunahitaji stadi hizi za ufahamu.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Jibu maswali sita kuhusu kifungu kwa sentensi kamili.</li>
    <li>Andika funzo la kifungu kwa sentensi mbili.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni aina gani ya swali inayonipa ugumu?</li>
    <li>Nimejifunza nini kuhusu mwili wangu?</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Faharasa</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Istilahi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mhusika</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu katika hadithi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Funzo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo la kujifunza.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zahanati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kituo cha matibabu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuteua</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Najua mambo ya kuzingatia ninaposoma.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu maswali ya ufahamu.</p>
    <p style="margin:6px 0;">☐ Ninajibu kwa sentensi kamili.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mhusika mkuu wa kifungu ni:',
            options: ['Bi. Halima', 'Amani', 'Mwalimu', 'Daktari'],
            correct: 1,
            explanation: 'Hadithi inafuata safari ya Amani ya kujifunza.'
        },
        {
            question: 'Amani alienda likizo ya mwezi:',
            options: ['Agosti', 'Aprili', 'Desemba', 'Januari'],
            correct: 1,
            explanation: 'Aya ya kwanza inataja likizo ya Aprili.'
        },
        {
            question: 'Bi. Halima alikuwa:',
            options: ['Mwalimu', 'Muuguzi', 'Mkulima', 'Dereva'],
            correct: 1,
            explanation: 'Alifanya kazi katika zahanati.'
        },
        {
            question: 'Kijiji kilichotajwa ni:',
            options: ['Mto Mweupe', 'Mlima Kijani', 'Kambi Moto', 'Mto Baridi'],
            correct: 3,
            explanation: 'Jibu ni “Mto Baridi”. Aya ya kwanza inakitaja.'
        },
        {
            question: 'Amani alipewa cheo gani?',
            options: ['Kiranja mkuu', 'Mwalimu', 'Kiongozi wa klabu ya afya', 'Muuguzi'],
            correct: 2,
            explanation: 'Mwalimu alimteua kuwa kiongozi wa klabu ya afya.'
        },
        {
            question: 'Sifa ya Amani ni:',
            options: ['Mvivu', 'Mwoga', 'Mbinafsi', 'Mdadisi'],
            correct: 3,
            explanation: 'Aliuliza maswali mengi kuhusu mwili.'
        },
        {
            question: 'Majibu ya maswali ya ufahamu yaandikwe kwa:',
            options: ['Sentensi kamili', 'Neno moja', 'Michoro', 'Nambari'],
            correct: 0,
            explanation: 'Sentensi kamili huonyesha uelewa.'
        },
        {
            question: 'Ushauri mmoja wa Bi. Halima ni:',
            options: ['Kunywa maji safi ya kutosha', 'Kula peremende nyingi', 'Kulala kidogo', 'Kuvuta sigara'],
            correct: 0,
            explanation: 'Jibu ni “Kunywa maji safi ya kutosha”. Aya ya 5 inataja ushauri huu.'
        },
        {
            question: '“Kwa nini Amani alivuta pumzi ndefu?” ni swali la:',
            options: ['Jibu lililo moja kwa moja', 'Hesabu', 'Kufikiri', 'Msamiati pekee'],
            correct: 2,
            explanation: 'Jibu ni “Kufikiri”. Linahitaji uelewa wa sababu.'
        },
        {
            question: 'Funzo kuu la kifungu ni:',
            options: ['Kutunza viungo vya mwili', 'Kwenda likizo', 'Kuchora picha', 'Kuwa muuguzi'],
            correct: 0,
            explanation: 'Kifungu kinahimiza kutunza afya.'
        }
    ]
},
{
    name: '1.2.3 Kusoma kwa Ufahamu: Kutoa Muhtasari wa Kifungu',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.2 Kusoma kwa Ufahamu</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.3: Kutoa Muhtasari wa Kifungu</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza maana ya muhtasari na hatua za kuandika muhtasari wa kifungu “Kiwanda Kilichofichika” kwa maneno yetu wenyewe.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Muhtasari unaonyesha kwamba umeelewa mambo makuu ya kifungu. Ni stadi inayotumika katika kusoma, kuandika ripoti na kusoma kwa ajili ya mitihani.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Kusoma vitabu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Habari</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Ripoti za klabu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📋 Mikutano</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Ujumbe mfupi</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua msamiati wa suala lengwa uliotumika katika kifungu ili kuimarisha ufahamu.</li>
    <li>Kueleza maana ya msamiati lengwa ili kuubainisha.</li>
    <li>Kuonyesha ufahamu wa kifungu kwa kujibu maswali na kutoa muhtasari.</li>
    <li>Kuchangamkia usomaji ili kuimarisha ufahamu.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Unazingatia nini unaposoma kifungu cha hadithi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.2.1 na 1.2.2.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Muhtasari</strong> ni maelezo mafupi yanayotaja mambo makuu ya kifungu kwa maneno yako mwenyewe. Hauna maelezo madogo madogo, mifano mingi wala mazungumzo.</p>
    <p><strong>Hatua za kuandika muhtasari:</strong> (1) soma kifungu chote; (2) tambua hoja kuu ya kila aya; (3) ziandike hoja hizo kwa maneno yako; (4) ziunganishe katika aya moja yenye mtiririko; (5) hakikisha idadi ya maneno inafaa.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Hoja kuu tu, kwa maneno yako, kwa ufupi.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📚 Msamiati Muhimu</h3>
    <p>Soma maneno haya kwanza. Yatakusaidia kuelewa somo zima.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana kwa lugha rahisi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano katika sentensi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muhtasari</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maelezo mafupi ya mambo makuu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Andika muhtasari wa kifungu.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hoja kuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo muhimu zaidi katika aya.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kila aya ina hoja kuu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mtiririko</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mpangilio mzuri wa mawazo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Muhtasari uwe na mtiririko.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kunakili</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika maneno kama yalivyo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Usinakili kifungu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kufupisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufanya jambo kuwa fupi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Fupisha aya kwa sentensi moja.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Kifungu</h3>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Kiwanda Kilichofichika” — kifungu cha hadithi</p>
    <p style="margin:8px 0;">(1) Wakati wa likizo ya Aprili, Amani alienda kumtembelea shangazi yake, Bi. Halima, aliyekuwa muuguzi katika zahanati ya Kijiji cha Mto Baridi. Siku moja, Amani aliona chati kubwa ukutani yenye picha ya mwili wa binadamu uliofunguliwa. “Shangazi, hiki ni nini?” aliuliza kwa mshangao.</p>
    <p style="margin:8px 0;">(2) Bi. Halima alitabasamu. “Hiki ni kiwanda kilichofichika ndani yako,” alisema. “Mwili wako una viungo vya ndani vinavyofanya kazi mchana na usiku bila kupumzika, hata unapolala.” Alianza kwa kuonyesha <strong>moyo</strong>. “Moyo ni pampu. Husukuma damu kwenda kila sehemu ya mwili kupitia mishipa. Damu hubeba hewa safi na chakula hadi kila seli.”</p>
    <p style="margin:8px 0;">(3) Kisha alionyesha <strong>mapafu</strong> mawili kifuani. “Unapovuta pumzi, mapafu hujaa hewa yenye oksijeni. Unapotoa pumzi, hutoa hewa chafu. Ndiyo maana moshi wa sigara na wa jiko lisilo na dirisha ni hatari kwa mapafu.” Amani alivuta pumzi ndefu na kuhisi kifua chake kikipanuka.</p>
    <p style="margin:8px 0;">(4) “Na tumbo je?” Amani aliuliza. Shangazi alieleza kwamba chakula husagwa <strong>tumboni</strong> na kwenye <strong>utumbo</strong>, ambapo virutubishi hufyonzwa na kuingia kwenye damu. <strong>Ini</strong>, kiungo kikubwa kilicho upande wa kulia, husaidia kusaga mafuta na kuondoa sumu mwilini. <strong>Figo</strong> mbili, zilizo mgongoni chini ya mbavu, huchuja damu na kutoa uchafu kama mkojo.</p>
    <p style="margin:8px 0;">(5) “Je, ninawezaje kutunza kiwanda hiki?” Amani aliuliza. Bi. Halima alihesabu kwa vidole: “Kunywa maji safi ya kutosha, kula vyakula vya aina mbalimbali, fanya mazoezi kila siku, lala vya kutosha, na epuka pombe, sigara na dawa za kulevya.”</p>
    <p style="margin:8px 0;">(6) Likizo ilipoisha, Amani alirudi shuleni akiwa na furaha. Katika kipindi cha Sayansi, alichora picha ya moyo na mapafu ubaoni na kuwaeleza wenzake yote aliyojifunza. Mwalimu wake alimpongeza na kumteua kuwa kiongozi wa klabu ya afya. Amani aliahidi kwamba atatunza “kiwanda chake kilichofichika” maisha yake yote.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Hoja Kuu za Kila Aya</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aya</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hoja kuu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amani alimtembelea shangazi yake muuguzi na kuona chati ya mwili.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moyo husukuma damu inayobeba hewa na chakula mwilini.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mapafu huvuta oksijeni na kutoa hewa chafu; moshi huyadhuru.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumbo na utumbo husaga chakula; ini huondoa sumu; figo huchuja damu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwili hutunzwa kwa maji, chakula bora, mazoezi, usingizi na kuepuka sumu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amani aliwafundisha wenzake na akateuliwa kuwa kiongozi wa klabu ya afya.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kuandika muhtasari</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Andika muhtasari wa kifungu kwa maneno yasiyozidi 60.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Unganisha hoja kuu za aya zote kwa maneno yako.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Hoja za aya 1–4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Amani alijifunza kutoka kwa shangazi yake kazi za moyo, mapafu, tumbo, ini na figo.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Hoja ya aya 5</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Alijifunza njia za kutunza mwili.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Hoja ya aya 6</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aliwafundisha wenzake na akawa kiongozi wa klabu ya afya.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Wakati wa likizo, Amani alijifunza kutoka kwa shangazi yake muuguzi kwamba moyo husukuma damu, mapafu hupumua, tumbo husaga chakula, ini huondoa sumu na figo huchuja damu. Alifundishwa kutunza mwili kwa maji, chakula bora, mazoezi, usingizi na kuepuka sumu. Aliporudi shuleni aliwafundisha wenzake na akateuliwa kuwa kiongozi wa klabu ya afya. (maneno 50)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kunakili mazungumzo ya wahusika au maelezo madogo kama “alivuta pumzi ndefu”.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Muhtasari Mzuri na Mbaya</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Muhtasari mzuri</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Muhtasari mbaya</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Una hoja kuu tu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Una maelezo madogo mengi</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umeandikwa kwa maneno yako</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umenakiliwa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Una mtiririko</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja zimerukaruka</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unafuata idadi ya maneno</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ni mrefu kupita kiasi</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Kosa la Kawaida</p>
    <div>Usiongeze maoni yako binafsi katika muhtasari. Andika kile kilichomo kifunguni tu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Muhtasari ni nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Ni mfupi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maelezo mafupi ya mambo makuu ya kifungu kwa maneno yako.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Hoja kuu ya aya ya 3 ni ipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya kuhusu kupumua.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mapafu huvuta oksijeni na kutoa hewa chafu; moshi huyadhuru.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Je, tunaweka mazungumzo ya wahusika katika muhtasari?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Muhtasari ni mfupi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hapana; tunaandika hoja kuu tu.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika hoja kuu ya kila aya ya kifungu kwa sentensi moja.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Linganisheni muhtasari wenu na mpeane maoni.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Kila mwanakikundi afupishe aya moja; kisha unganisheni kuwa muhtasari mmoja.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Andika muhtasari wa sentensi tatu kuhusu kipindi cha afya ulichosikiliza (kwa ruhusa) na umtumie mwalimu kwenye jukwaa la darasa.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja hatua moja ya kuandika muhtasari.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusoma kifungu chote / kutambua hoja kuu / kuandika kwa maneno yako.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Muhtasari huandikwa kwa maneno ya nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maneno yako mwenyewe.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Fupisha aya ya 4 kwa sentensi moja.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Tumbo husaga chakula, ini huondoa sumu na figo huchuja damu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini tusinakili kifungu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa sababu muhtasari unapaswa kuonyesha uelewa wetu kwa maneno yetu wenyewe.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Andika muhtasari wa aya ya 5 na ya 6 kwa maneno yasiyozidi 30.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Amani alifundishwa kutunza mwili kwa maji, chakula bora, mazoezi na usingizi. Aliwafundisha wenzake na akawa kiongozi wa klabu ya afya.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Kiongozi wa klabu anahitaji kuandika ripoti ya mkutano. Muhtasari utamsaidiaje?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuandika mambo makuu tu kwa ufupi na kwa uwazi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini idadi ya maneno ni muhimu katika muhtasari?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Inahakikisha muhtasari ni mfupi na una mambo makuu tu.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Muhtasari ni maelezo mafupi ya mambo makuu ya kifungu kwa maneno yako. Tunasoma kifungu, tunatambua hoja kuu ya kila aya, tunaziandika kwa maneno yetu na kuziunganisha kwa mtiririko, bila kuzidi idadi ya maneno.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hoja kuu tu.</li>
    <li>Maneno yako.</li>
    <li>Mtiririko.</li>
    <li>Idadi ya maneno.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Usiongeze maoni yako.</li>
    <li>Usinakili mazungumzo.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kunakili sentensi za kifungu.</li>
    <li>Kuzidi idadi ya maneno.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hesabu maneno yako na uandike idadi mwishoni.</li>
    <li>Andika kwa aya moja yenye mtiririko.</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Umilisi, Maadili na Masuala Mtambuka</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Umilisi wa kimsingi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jinsi somo hili unavyoukuza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua hoja kuu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika kwa ufupi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ushirikiano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufupisha kwa vikundi.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya ya mwili</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Waandishi wa habari, makatibu wa mikutano na wanafunzi huandika muhtasari kila mara.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika muhtasari wa kifungu kwa maneno yasiyozidi 50.</li>
    <li>Soma hadithi fupi nyumbani na uandike muhtasari wake kwa sentensi tatu.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni sehemu gani ya kuandika muhtasari inayonipa ugumu?</li>
    <li>Nimejifunza nini kutoka kwa Amani?</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Faharasa</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Istilahi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muhtasari</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maelezo mafupi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hoja kuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo muhimu zaidi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mtiririko</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mpangilio mzuri.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kunakili</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika neno kwa neno.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Najua muhtasari ni nini.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua hoja kuu.</p>
    <p style="margin:6px 0;">☐ Naweza kuandika muhtasari kwa maneno yangu.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia usomaji.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Muhtasari ni:',
            options: ['Nakala ya kifungu chote', 'Hadithi mpya', 'Maelezo mafupi ya mambo makuu', 'Orodha ya maneno magumu'],
            correct: 2,
            explanation: 'Muhtasari hufupisha hoja kuu kwa maneno yako.'
        },
        {
            question: 'Muhtasari huandikwa kwa:',
            options: ['Maneno ya kifungu neno kwa neno', 'Maneno yako mwenyewe', 'Kiingereza', 'Michoro'],
            correct: 1,
            explanation: 'Jibu ni “Maneno yako mwenyewe”. Kunakili hakuonyeshi uelewa.'
        },
        {
            question: 'Hatua ya kwanza ya kuandika muhtasari ni:',
            options: ['Kuandika kichwa', 'Kuhesabu maneno', 'Kuongeza maoni', 'Kusoma kifungu chote'],
            correct: 3,
            explanation: 'Jibu ni “Kusoma kifungu chote”. Lazima uelewe kifungu kwanza.'
        },
        {
            question: 'Katika muhtasari tunaacha:',
            options: ['Hoja kuu', 'Wahusika wakuu', 'Matukio muhimu', 'Maelezo madogo na mazungumzo'],
            correct: 3,
            explanation: 'Jibu ni “Maelezo madogo na mazungumzo”. Muhtasari una hoja kuu tu.'
        },
        {
            question: 'Hoja kuu ya aya ya 2 ni:',
            options: ['Moyo husukuma damu mwilini', 'Amani alishangaa', 'Shangazi alitabasamu', 'Chati ilikuwa kubwa'],
            correct: 0,
            explanation: 'Jibu ni “Moyo husukuma damu mwilini”. Aya inaeleza kazi ya moyo.'
        },
        {
            question: 'Mtiririko unamaanisha:',
            options: ['Maneno mengi', 'Mpangilio mzuri wa mawazo', 'Kurukaruka', 'Kunakili'],
            correct: 1,
            explanation: 'Jibu ni “Mpangilio mzuri wa mawazo”. Hoja zifuatane kwa mantiki.'
        },
        {
            question: 'Je, tuweke maoni yetu katika muhtasari?',
            options: ['Hapana', 'Ndiyo, mengi', 'Ndiyo, mwanzoni', 'Ndiyo, mwishoni'],
            correct: 0,
            explanation: 'Muhtasari una yaliyomo kifunguni tu.'
        },
        {
            question: 'Kwa nini tuhesabu maneno?',
            options: ['Kuongeza maneno', 'Kuhakikisha muhtasari si mrefu kupita kiasi', 'Kupoteza muda', 'Kuchora'],
            correct: 1,
            explanation: 'Idadi ya maneno huweka kikomo.'
        },
        {
            question: 'Muhtasari mzuri:',
            options: ['Ni mrefu kuliko kifungu', 'Una mazungumzo yote', 'Una hoja kuu kwa ufupi', 'Hauna mpangilio'],
            correct: 2,
            explanation: 'Ufupi na hoja kuu ndizo sifa zake.'
        },
        {
            question: 'Stadi ya muhtasari hutumika:',
            options: ['Kuandika ripoti na kusoma kwa mitihani', 'Kucheza mpira pekee', 'Kupika', 'Kulala'],
            correct: 0,
            explanation: 'Ni stadi muhimu ya kusoma na kuandika.'
        }
    ]
},
{
    name: '1.2 Zoezi la Tathmini: Kusoma kwa Ufahamu',
    type: 'lesson',
    duration: '30 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.2 Kusoma kwa Ufahamu</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Kusoma kwa Ufahamu</h2>
    <p style="font-size:16px;">Zoezi hili linapima uelewa wako wa masomo 1.2.1 hadi 1.2.3.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Maelekezo</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Zoezi lina maswali 10 ya kuchagua jibu sahihi.</li>
    <li>Soma kila swali mara mbili kabla ya kuchagua.</li>
    <li>Usirudi kwenye maelezo ya somo wakati wa zoezi — jipime kwa uaminifu.</li>
    <li>Baada ya kumaliza, soma maelezo ya kila jibu ili kujifunza kutokana na makosa.</li>
    <li>Muda unaopendekezwa: 30 min.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 Yanayotathminiwa</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Msamiati lengwa</li>
    <li>Maswali ya ufahamu</li>
    <li>Muhtasari</li>
    <li>Viungo vya mwili vya ndani</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📊 Viwango vya Utendaji (CBC)</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Alama</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kiwango</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80% – 100%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzidi Matarajio (KM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umeielewa mada ndogo vizuri sana.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60% – 79%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufikia Matarajio (FM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umeelewa; rudia sehemu chache ulizokosea.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40% – 59%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukaribia Matarajio (KKM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rudia somo la marudio kisha ujaribu tena.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya 40%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya Matarajio (CM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soma tena masomo matatu na uombe msaada kwa mwalimu.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Kidokezo cha Mtihani</p>
    <div>Rejelea kifungu “Kiwanda Kilichofichika” kila unapojibu.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kiungo kinachosukuma damu ni:',
            options: ['Moyo', 'Figo', 'Ini', 'Mapafu'],
            correct: 0,
            explanation: 'Jibu ni “Moyo”. Moyo ni kama pampu ya damu.'
        },
        {
            question: 'Viungo vya kupumua ni:',
            options: ['Figo', 'Tumbo', 'Mapafu', 'Ini'],
            correct: 2,
            explanation: 'Jibu ni “Mapafu”. Mapafu huvuta oksijeni.'
        },
        {
            question: 'Figo hufanya kazi gani?',
            options: ['Husukuma damu', 'Huchuja damu na kutoa mkojo', 'Hupumua', 'Huona'],
            correct: 1,
            explanation: 'Jibu ni “Huchuja damu na kutoa mkojo”. Aya ya 4 inaeleza.'
        },
        {
            question: 'Ini liko upande gani wa tumbo?',
            options: ['Kulia', 'Kushoto', 'Juu ya kichwa', 'Mguuni'],
            correct: 0,
            explanation: 'Aya ya 4 inasema upande wa kulia.'
        },
        {
            question: '“Virutubishi” ni:',
            options: ['Viini vya chakula', 'Hewa chafu', 'Damu', 'Sumu'],
            correct: 0,
            explanation: 'Jibu ni “Viini vya chakula”. Hujenga na kulinda mwili.'
        },
        {
            question: 'Amani alijifunza kutoka kwa:',
            options: ['Babu yake', 'Shangazi yake muuguzi', 'Daktari wa meno', 'Mkulima'],
            correct: 1,
            explanation: 'Bi. Halima alikuwa shangazi yake.'
        },
        {
            question: 'Moshi wa sigara ni hatari kwa:',
            options: ['Nywele pekee', 'Kucha', 'Nguo', 'Mapafu'],
            correct: 3,
            explanation: 'Jibu ni “Mapafu”. Huingiza hewa chafu mapafuni.'
        },
        {
            question: 'Muhtasari huandikwa:',
            options: ['Kwa kunakili', 'Kwa urefu', 'Bila hoja kuu', 'Kwa ufupi na kwa maneno yako'],
            correct: 3,
            explanation: 'Ndiyo sifa za muhtasari mzuri.'
        },
        {
            question: 'Funzo la kifungu ni:',
            options: ['Kwenda zahanati kila siku', 'Kuacha shule', 'Kutunza viungo vya mwili', 'Kuchora picha'],
            correct: 2,
            explanation: 'Jibu ni “Kutunza viungo vya mwili”. Kifungu kinahimiza afya bora.'
        },
        {
            question: 'Majibu ya ufahamu yaandikwe kwa:',
            options: ['Neno moja', 'Picha', 'Nambari', 'Sentensi kamili'],
            correct: 3,
            explanation: 'Sentensi kamili huonyesha uelewa.'
        }
    ]
},
{
    name: '1.2 Kazi ya Mradi: Kijitabu cha Viungo vya Mwili',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.2 Kusoma kwa Ufahamu</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Kijitabu cha Viungo vya Mwili</h2>
    <p style="font-size:16px;">Kwa vikundi, mtatengeneza kijitabu kidogo kuhusu viungo vya mwili vya ndani chenye msamiati, maswali ya ufahamu na muhtasari.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Klabu ya afya ya shule inataka kijitabu cha kuwafundisha wanafunzi wa gredi za chini kuhusu viungo vya mwili vya ndani na jinsi ya kuvitunza.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Vijitabu vya afya hutumika zahanati na shuleni kuelimisha watu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Undeni vikundi vya watu wanne au watano.</li>
    <li>Kila mwanakikundi achague kiungo kimoja: moyo, mapafu, tumbo, ini au figo.</li>
    <li>Andikeni aya fupi (maneno 50–70) kuhusu kazi ya kiungo hicho na jinsi ya kukitunza.</li>
    <li>Ongezeni mchoro wa kiungo na msamiati lengwa watano pamoja na maana zake.</li>
    <li>Tungeni maswali matano ya ufahamu na majibu yake.</li>
    <li>Andikeni muhtasari wa kijitabu chote kwa maneno yasiyozidi 60.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Aya za viungo</li>
    <li>Michoro</li>
    <li>Orodha ya msamiati</li>
    <li>Maswali na majibu</li>
    <li>Muhtasari</li>
    </ul>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📏 Kigezo cha Tathmini (Rubriki)</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kigezo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kuzidi Matarajio (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kufikia Matarajio (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kukaribia Matarajio (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Chini ya Matarajio (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maudhui</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi, kamili na wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi na wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa kadhaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hayaeleweki</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno matano kwa maana sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Manne sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matatu au chini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maswali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matano yenye majibu kamili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Manne</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matatu au chini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muhtasari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja kuu, ufupi, maneno yako</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mzuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Una makosa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haupo</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Tumieni lugha rahisi kwa wanafunzi wadogo.<br>Chorani kwa rangi.<br>Hakikisheni ukweli na mwalimu wa Sayansi.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijifunza nini kuhusu kiungo nilichochagua?</li>
    <li>Muhtasari wetu ulikuwa mzuri?</li>
    <li>Nitatunzaje viungo vyangu?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kila mwanakikundi achague:',
            options: ['Viungo vyote', 'Hakuna', 'Wimbo', 'Kiungo kimoja'],
            correct: 3,
            explanation: 'Kila mmoja atashughulikia kiungo kimoja.'
        },
        {
            question: 'Aya ya kila kiungo iwe na maneno:',
            options: ['5', '500', '50–70', '1 000'],
            correct: 2,
            explanation: 'Maelekezo yanataja maneno 50–70.'
        },
        {
            question: 'Msamiati lengwa uwe na maneno:',
            options: ['Matano', 'Mawili', 'Ishirini', 'Hakuna'],
            correct: 0,
            explanation: 'Jibu ni “Matano”. Maneno matano yanaombwa.'
        },
        {
            question: 'Muhtasari usizidi maneno:',
            options: ['600', '60', '6', '160'],
            correct: 1,
            explanation: 'Jibu ni “60”. Maelekezo yanataja maneno 60.'
        },
        {
            question: 'Kijitabu kinalenga:',
            options: ['Madaktari', 'Wazee pekee', 'Wanafunzi wa gredi za chini', 'Hakuna'],
            correct: 2,
            explanation: 'Kitawafundisha wanafunzi wadogo.'
        }
    ]
},
{
    name: '1.2 Marudio: Kusoma kwa Ufahamu',
    type: 'lesson',
    duration: '30 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7f1d1d, #b91c1c); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Viungo vya Mwili vya Ndani · Mada Ndogo 1.2 Kusoma kwa Ufahamu</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Kusoma kwa Ufahamu</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.2.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">📖 Msamiati lengwa</p>
    <div>moyo, mapafu, tumbo, ini, figo, virutubishi, mishipa, oksijeni.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">❓ Maswali</p>
    <div>Jibu limo kifunguni au ni la kufikiri; jibu kwa sentensi kamili.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">✂️ Muhtasari</p>
    <div>Hoja kuu tu, maneno yako, mtiririko, idadi ya maneno.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">❤️ Afya</p>
    <div>Maji safi, chakula bora, mazoezi, usingizi; epuka pombe, sigara na dawa za kulevya.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kiungo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kazi</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moyo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Husukuma damu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mapafu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hupumua</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumbo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Husaga chakula</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huondoa sumu</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Figo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huchuja damu</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Eleza maana ya “mishipa”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mirija inayopitisha damu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja vitu vitatu vya kuzingatia unaposoma kifungu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wahusika, mahali, matukio (au kichwa, wakati, funzo).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Muhtasari ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maelezo mafupi ya mambo makuu kwa maneno yako.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja njia mbili za kutunza mwili.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kunywa maji safi; kufanya mazoezi.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Msamiati lengwa hufungua uelewa.</li>
    <li>Maswali hujibiwa kwa sentensi kamili.</li>
    <li>Muhtasari hufupisha hoja kuu.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kueleza msamiati lengwa.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu maswali ya ufahamu.</p>
    <p style="margin:6px 0;">☐ Naweza kuandika muhtasari.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia usomaji.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kiungo kinachohusika na kupumua ni:',
            options: ['Moyo', 'Figo', 'Ini', 'Mapafu'],
            correct: 3,
            explanation: 'Jibu ni “Mapafu”. Mapafu huchukua oksijeni.'
        },
        {
            question: 'Muhtasari mzuri una:',
            options: ['Hoja kuu kwa ufupi', 'Kila neno la kifungu', 'Maoni mengi', 'Mazungumzo yote'],
            correct: 0,
            explanation: 'Jibu ni “Hoja kuu kwa ufupi”. Ufupi na hoja kuu.'
        },
        {
            question: '“Kuteua” ni:',
            options: ['Kukataa', 'Kuchagua', 'Kufukuza', 'Kusahau'],
            correct: 1,
            explanation: 'Jibu ni “Kuchagua”. Mwalimu alimchagua Amani.'
        },
        {
            question: 'Unaposoma kifungu, zingatia:',
            options: ['Rangi ya karatasi', 'Idadi ya kurasa', 'Jina la mchapishaji pekee', 'Wahusika, mahali na matukio'],
            correct: 3,
            explanation: 'Hivi husaidia kuelewa hadithi.'
        },
        {
            question: 'Ushauri wa kutunza mwili ni:',
            options: ['Kuepuka dawa za kulevya', 'Kulala kidogo', 'Kunywa maji machafu', 'Kukosa mazoezi'],
            correct: 0,
            explanation: 'Dawa za kulevya huharibu viungo.'
        }
    ]
}
],
          stats:{lessons:13,exercises:88,quizzes:14,projects:4,duration:'9 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Neno lenye sauti /nd/ ni lipi?',
                  options: ['dada', 'dawa', 'ndizi', 'damu'],
                  correct: 2,
                  explanation: '“Ndizi” huanza kwa mvumo wa pua kabla ya /d/.'
              },
              {
                  question: '“Njaa” inamaanisha:',
                  options: ['Mahali pa kutupa taka', 'Hamu ya chakula', 'Barabara ndogo', 'Ndege'],
                  correct: 1,
                  explanation: '“Jaa” ndilo mahali pa taka; “njaa” ni hamu ya chakula.'
              },
              {
                  question: 'Jozi ipi ni ya sauti ch/sh?',
                  options: ['chati/shati', 'goma/ngoma', 'doa/ndoa', 'jia/njia'],
                  correct: 0,
                  explanation: 'Chati na shati hutofautiana kwa /ch/ na /sh/.'
              },
              {
                  question: '“Ngoma” ni:',
                  options: ['Chombo cha muziki', 'Mgomo wa wafanyakazi', 'Ganda la mti', 'Vazi'],
                  correct: 0,
                  explanation: '“Goma” ndilo linalohusu kukataa kufanya kazi.'
              },
              {
                  question: 'Kitanzandimi ni:',
                  options: ['Hadithi ndefu', 'Sentensi yenye sauti zinazokaribiana inayotamkwa haraka', 'Barua rasmi', 'Wimbo wa taifa'],
                  correct: 1,
                  explanation: 'Vitanzandimi hutatiza ndimi na kuimarisha matamshi.'
              },
              {
                  question: 'Hatua ya kwanza ya kutamka kitanzandimi ni:',
                  options: ['Kusoma haraka sana', 'Kunyamaza', 'Kuimba', 'Kusoma polepole'],
                  correct: 3,
                  explanation: 'Usahihi huja kabla ya kasi.'
              },
              {
                  question: 'Kiungo kinachosukuma damu mwilini ni:',
                  options: ['Figo', 'Moyo', 'Mapafu', 'Ini'],
                  correct: 1,
                  explanation: 'Moyo ni kama pampu ya damu.'
              },
              {
                  question: 'Figo hufanya kazi gani?',
                  options: ['Hupumua', 'Husukuma damu', 'Husaga chakula', 'Huchuja damu na kutoa mkojo'],
                  correct: 3,
                  explanation: 'Figo hutenganisha uchafu na damu safi.'
              },
              {
                  question: 'Msamiati lengwa ni:',
                  options: ['Majina ya watu pekee', 'Alama za uakifishaji', 'Maneno muhimu ya mada katika kifungu', 'Maneno yasiyo na maana'],
                  correct: 2,
                  explanation: 'Msamiati lengwa ni maneno yanayolenga mada ya kifungu.'
              },
              {
                  question: 'Majibu ya maswali ya ufahamu yaandikwe kwa:',
                  options: ['Neno moja', 'Michoro', 'Nambari', 'Sentensi kamili'],
                  correct: 3,
                  explanation: 'Sentensi kamili huonyesha uelewa wa kifungu.'
              },
              {
                  question: 'Muhtasari ni:',
                  options: ['Maelezo mafupi ya mambo makuu kwa maneno yako', 'Nakala ya kifungu chote', 'Hadithi mpya', 'Orodha ya maswali'],
                  correct: 0,
                  explanation: 'Muhtasari hufupisha hoja kuu bila kunakili.'
              },
              {
                  question: 'Njia mojawapo ya kutunza viungo vya mwili ni:',
                  options: ['Kuvuta sigara', 'Kulala kidogo', 'Kunywa maji safi ya kutosha', 'Kula peremende nyingi'],
                  correct: 2,
                  explanation: 'Maji safi husaidia figo na mwili mzima.'
              }
          ]}
);