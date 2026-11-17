// Eschool course: Grade 11 Kiswahili (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'kiswahili-grade-11', name:'Grade 11 Kiswahili', code:'KSL 201', level:'grade-11', iconStyle:'fas', icon:'fa-language', color:'#059669',
          category:'Languages',
          description:'Kozi kamili ya Kiswahili cha Gredi ya 11 (CBC, Kenya): kusikiliza na kuzungumza, kusoma, kuandika na sarufi — kila mada na mada ndogo zikifundishwa hatua kwa hatua kwa mifano, mazoezi, mazoezi ya tathmini, kazi za mradi na marudio.',
          longDescription:'Kozi hii ya Kiswahili cha Gredi ya 11 inaendeleza stadi za Gredi ya 10 kwa kiwango cha juu zaidi. Kila mada huanza kwa utangulizi, kisha kila mada ndogo ina masomo matatu, zoezi la tathmini, kazi ya mradi na marudio. Masomo yanajumuisha matokeo ya ujifunzaji, swali dadisi, msamiati, maelezo ya mwalimu, mifano ya kazi, mazoezi yanayoongozwa, shughuli za mtu binafsi, wawili wawili na vikundi, umilisi wa CBC, maadili, masuala mtambuka, makosa ya kawaida, vidokezo vya mtihani, faharasa, kazi ya nyumbani, tafakari na maswali ya kuchagua yenye maelezo. Matini zote ni asilia na zimejikita katika mazingira ya Kenya. Mada ya kwanza, Teknolojia na Mawasiliano, inashughulikia Hotuba, Ufahamu wa Kusoma, Barua Rasmi na Ngeli za Nomino.',
          modules:[
{
    name: '1.0 Teknolojia na Mawasiliano — Utangulizi wa Mada',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Utangulizi wa Mada</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🗺️ Mada 1.0: Teknolojia na Mawasiliano</h2>
    <p style="font-size:16px;">Karibu katika Kiswahili cha Gredi ya 11. Katika Gredi ya 10 ulijifunza kusikiliza kwa ufahamu, kusoma kwa ufasaha, kutumia viakifishi na kutambua aina za maneno. Sasa tunapanda ngazi moja juu.</p>
    <p style="font-size:16px;">Mada hii ya kwanza inahusu <strong>teknolojia na mawasiliano</strong> — simu, mitandao ya kijamii, mtandao wa intaneti na jinsi vinavyobadilisha maisha yetu. Utajifunza kusikiliza na kutoa hotuba, kusoma kwa kina, kuandika barua rasmi na kutumia ngeli za nomino kwa usahihi.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bbf7d0;">❓ Swali dadisi la mada:</strong> Tunawezaje kutumia Kiswahili fasaha kuwasiliana kwa ufanisi na kwa uwajibikaji katika ulimwengu wa teknolojia?</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 Muhtasari wa Mada</h3>
    <p>Teknolojia imerahisisha mawasiliano, lakini pia imeleta changamoto mpya: habari za uongo, uraibu wa simu na uonevu wa mtandaoni. Mada hii inakupa stadi za lugha zitakazokusaidia kuwasiliana kwa busara, iwe ana kwa ana au mtandaoni.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mada ndogo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stadi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Utajifunza nini?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Hotuba</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na Kuzungumza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza hotuba kwa makini, kubaini sifa na muundo wake, kuandaa na kutoa hotuba.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Ufahamu wa Kusoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutumia mikakati ya kusoma kwa kina, kujibu maswali ya ufahamu na kuandika muhtasari.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Barua Rasmi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika barua rasmi kwa muundo, lugha na mtindo ufaao.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Ngeli za Nomino</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sarufi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kubaini ngeli za nomino na kutumia upatanisho wa kisarufi ipasavyo.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 Matokeo ya Ujifunzaji wa Mada</h3>
    <p>Kufikia mwisho wa mada hii, mwanafunzi aweze:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Kusikiliza hotuba kwa makini na kubaini ujumbe, muundo na sifa zake.</li>
    <li>Kuandaa na kutoa hotuba fupi kwa ufasaha mbele ya hadhira.</li>
    <li>Kutumia mikakati ya kusoma kwa kina kujibu maswali ya ufahamu na kuandika muhtasari.</li>
    <li>Kuandika barua rasmi kwa kuzingatia muundo na lugha rasmi.</li>
    <li>Kutumia ngeli za nomino na upatanisho wa kisarufi kwa usahihi.</li>
    <li>Kuthamini matumizi bora na salama ya teknolojia.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Ramani ya Mada</h3>
    <p>Mada hii ina mada ndogo nne. Kila mada ndogo ina masomo matatu, zoezi la tathmini, kazi ya mradi na somo la marudio.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.1.1 Sifa na muundo wa hotuba</li>
    <li>Somo 1.1.2 Kuandaa hotuba</li>
    <li>Somo 1.1.3 Kutoa hotuba mbele ya hadhira</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.2 Kusoma: Ufahamu wa Kusoma</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.2.1 Mikakati ya kusoma kwa kina</li>
    <li>Somo 1.2.2 Kujibu maswali ya ufahamu</li>
    <li>Somo 1.2.3 Kuandika muhtasari</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.3 Kuandika: Barua Rasmi</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.3.1 Muundo wa barua rasmi</li>
    <li>Somo 1.3.2 Lugha na mtindo wa barua rasmi</li>
    <li>Somo 1.3.3 Kuandika na kuhariri barua rasmi</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.4 Sarufi: Ngeli za Nomino</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.4.1 Ngeli za A-WA, KI-VI na LI-YA</li>
    <li>Somo 1.4.2 Ngeli za U-I, U-ZI, I-ZI na YA-YA</li>
    <li>Somo 1.4.3 Ngeli za KU, PA-KU-MU na upatanisho</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na kutoa hotuba, kujadili matini na kufanya kazi za vikundi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fikra makini na utatuzi wa matatizo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchambua hoja za hotuba na makala, kutofautisha ukweli na maoni.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ujuzi wa kidijitali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujirekodi, kutafiti mtandaoni kwa usalama na kuandika kwa tarakilishi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ubunifu na mawazo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutunga hotuba na barua zenye mvuto.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujiamini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumza mbele ya hadhira.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uraia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwa raia mwema mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Amani</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usalama mtandaoni</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uraia wa kidijitali</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya ya akili (uraibu wa simu)</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ujuzi wa maisha</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Jinsi ya Kujifunza Mada Hii</p>
    <div>Fuata mpangilio: soma masomo matatu ya kila mada ndogo, fanya maswali shirikishi, kisha Zoezi la Tathmini. Baadaye kamilisha Kazi ya Mradi na usome Marudio kabla ya kuendelea. Matini za kusikiliza zimeandikwa ili mwalimu au mwenzako azisome kwa sauti — sikiliza kwanza, soma baadaye.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mada 1.0 ya Gredi ya 11 katika kozi hii inahusu:',
            options: ['Teknolojia na mawasiliano', 'Fursa za ajira', 'Usalama barabarani', 'Kilimo'],
            correct: 0,
            explanation: 'Mada ya kwanza inachunguza teknolojia na mawasiliano katika maisha ya kila siku.'
        },
        {
            question: 'Stadi ya kusikiliza na kuzungumza katika Mada 1.0 inashughulikia:',
            options: ['Barua rasmi', 'Hotuba', 'Ngeli', 'Muhtasari'],
            correct: 1,
            explanation: 'Mada ndogo 1.1 inahusu kusikiliza, kuandaa na kutoa hotuba.'
        },
        {
            question: 'Sarufi ya Mada 1.0 inahusu:',
            options: ['Viakifishi', 'Aina za maneno', 'Tashbihi', 'Ngeli za nomino'],
            correct: 3,
            explanation: 'Mada ndogo 1.4 inafundisha ngeli za nomino na upatanisho wa kisarufi.'
        },
        {
            question: 'Kila mada ndogo ina masomo mangapi?',
            options: ['Matatu', 'Mawili', 'Manne', 'Matano'],
            correct: 0,
            explanation: 'Kila mada ndogo ina masomo matatu, zoezi la tathmini, kazi ya mradi na marudio.'
        },
        {
            question: 'Kwa nini matini za kusikiliza zimeandikwa?',
            options: ['Ili usisikilize kamwe', 'Kwa sababu kusikiliza si muhimu', 'Ili mwalimu au mwenzako azisome kwa sauti', 'Ili uzinakili tu'],
            correct: 2,
            explanation: 'Mwanafunzi asikilize kwanza sauti halisi, kisha asome matini baadaye.'
        }
    ]
},
{
    name: '1.1.1 Hotuba: Sifa na Muundo wa Hotuba',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.1: Sifa na Muundo wa Hotuba</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza maana ya hotuba, aina zake, sifa za hotuba bora na muundo wake (salamu, utangulizi, mwili, hitimisho na shukrani). Tutasikiliza hotuba kuhusu matumizi bora ya simu na kuichambua.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Hotuba hutolewa kila mahali: shuleni, kanisani na msikitini, mikutanoni, harusini na kwenye vyombo vya habari. Ukielewa sifa na muundo wa hotuba, utaweza kuisikiliza kwa makini, kubaini ujumbe wake na kuitoa mwenyewe kwa ufanisi.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Gwaride na mikutano ya shule</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Baraza la chifu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💒 Harusi na sherehe</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Redio na runinga</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗳️ Kampeni za uongozi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Mahafali</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kueleza maana ya hotuba na aina zake.</li>
    <li>Kutaja sifa za hotuba bora.</li>
    <li>Kubaini muundo wa hotuba katika matini aliyoisikiliza.</li>
    <li>Kubaini ujumbe mkuu na hoja za mzungumzaji.</li>
    <li>Kuthamini hotuba kama njia ya kuelimisha jamii.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Ni nini kinachofanya hotuba iwe bora na yenye kuvutia?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Ufahamu wa kusikiliza na kuzungumza kwa kupasha habari kutoka Gredi ya 10.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Wanafunzi wapendwa, <strong>hotuba</strong> ni maelezo rasmi yanayotolewa kwa mdomo na mtu mmoja mbele ya hadhira kuhusu jambo fulani, kwa lengo maalumu — kuelimisha, kushawishi, kuhamasisha, kupongeza au kuaga.</p>
    <p>Hotuba bora ina <strong>muundo</strong> unaoeleweka: inaanza kwa salamu na kutambua hadhira, ina utangulizi unaotaja mada, mwili wenye hoja zilizopangwa vizuri, hitimisho linalofupisha na kutoa wito, na hatimaye shukrani.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Hotuba ni kama nyumba: salamu ni mlango, utangulizi ni sebule, mwili ni vyumba vya ndani, na hitimisho ni paa linalofunika kila kitu.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hotuba</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maelezo rasmi yanayotolewa kwa mdomo mbele ya hadhira.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Rais wa baraza la wanafunzi alitoa hotuba gwarideni.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hadhira</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Watu wanaosikiliza au kutazama.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Hadhira ilishangilia mwishoni mwa hotuba.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mhutubu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu anayetoa hotuba.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mhutubu aliwasalimu wageni wote kwanza.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hoja</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazo kuu linalotolewa kuunga mkono jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Hoja yake ya kwanza ilihusu uraibu wa simu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Uraibu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hali ya kutegemea jambo kupita kiasi hadi kushindwa kuliacha.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Uraibu wa simu huathiri usingizi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Wito</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ombi au agizo la kuchukua hatua.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alitoa wito kwa vijana kuthibitisha habari.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Aina za Hotuba</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aina</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lengo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hotuba ya kuelimisha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa maarifa au habari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtaalamu akieleza usalama mtandaoni</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hotuba ya kushawishi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumfanya msikilizaji akubali wazo au kuchukua hatua</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mgombea akiomba kura</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hotuba ya kuhamasisha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutia moyo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kocha akiwatia moyo wachezaji</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hotuba ya sherehe</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupongeza, kukaribisha au kuaga</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hotuba ya mahafali au harusi</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kusikiliza Hotuba</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Kidokezo cha Mwalimu</p>
    <div>Mwalimu au mwenzako asome hotuba ifuatayo kwa sauti. Sikiliza mara ya kwanza ukibaini ujumbe mkuu; mara ya pili, dokeza sehemu za muundo.</div>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Simu Mkononi, Busara Kichwani” — hotuba ya Rais wa Baraza la Wanafunzi (msikilize mwalimu au mwenzako akiisoma kwa sauti)</p>
    <p style="margin:8px 0;">Mwalimu Mkuu, walimu wetu wapendwa, wazazi mliohudhuria na wanafunzi wenzangu, hamjambo? Ninashukuru kwa nafasi hii ya kuzungumza nanyi leo kuhusu jambo linalotugusa sote: matumizi ya simu na mitandao ya kijamii.</p>
    <p style="margin:8px 0;">Ndugu zangu, teknolojia ni kama kisu: kinaweza kukata mboga jikoni, kinaweza pia kumjeruhi mtumiaji asiye makini. Simu imetuletea mema mengi. Leo mwanafunzi wa Kakamega anaweza kusoma maktaba ya mtandaoni ya chuo kikuu cha Nairobi bila kutoka nyumbani. Mzazi hupokea ripoti ya mwanawe kupitia ujumbe mfupi. Mkulima hupata bei ya mahindi sokoni kabla ya kuondoka shambani.</p>
    <p style="margin:8px 0;">Hata hivyo, hatuwezi kufumba macho tusione hatari zake. Kwanza, uraibu wa simu unawanyima wengi wetu usingizi na muda wa kusoma. Pili, uenezaji wa habari za uongo umezua hofu mara nyingi katika jamii yetu. Mwezi uliopita tu, ujumbe wa uongo kuhusu kufungwa kwa shule ulisambaa kama moto wa nyika na kuwatia wazazi wasiwasi bure. Tatu, uonevu wa mtandaoni umewaumiza wenzetu wengi kimyakimya.</p>
    <p style="margin:8px 0;">Basi, tufanye nini? Napendekeza mambo matatu. Mosi, tuweke muda maalumu wa kutumia simu na tuuzingatie. Pili, tuthibitishe kila habari kabla ya kuisambaza. Tatu, tuwe na adabu mtandaoni kama tulivyo ana kwa ana. Kumbukeni, maneno ni kama maji yaliyomwagika — hayazoleki.</p>
    <p style="margin:8px 0;">Kwa kuhitimisha, nawaomba tuwe mabalozi wa matumizi bora ya teknolojia. Simu iwe mkononi, lakini busara iwe kichwani. Asanteni sana kwa kunisikiliza. Mungu awabariki.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Muundo wa Hotuba</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sehemu</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kazi yake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano kutoka hotuba</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salamu na kutambua hadhira</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwaheshimu wasikilizaji kwa vyeo vyao</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Mwalimu Mkuu, walimu wetu wapendwa, wazazi…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utangulizi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutaja mada na kuvuta makini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“…kuzungumza nanyi leo kuhusu… matumizi ya simu”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa hoja na mifano kwa mpangilio</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mema ya simu; hatari tatu; mapendekezo matatu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hitimisho</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufupisha na kutoa wito</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“…tuwe mabalozi wa matumizi bora ya teknolojia.”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shukrani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwashukuru wasikilizaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Asanteni sana kwa kunisikiliza.”</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kubaini hoja za mwili wa hotuba</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Taja hatari tatu za simu zilizotajwa na mhutubu.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Sikiliza viunganishi vya mpangilio: “Kwanza”, “Pili”, “Tatu”.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Kwanza</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Uraibu wa simu unaowanyima wanafunzi usingizi na muda wa kusoma.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Pili</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Uenezaji wa habari za uongo unaozua hofu katika jamii.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Tatu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Uonevu wa mtandaoni unaowaumiza wengi kimyakimya.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Uraibu wa simu, habari za uongo na uonevu wa mtandaoni.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kuchanganya hatari na mapendekezo. Mapendekezo yanaanza na “Basi, tufanye nini?”.</p>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Kubaini ujumbe mkuu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Eleza ujumbe mkuu wa hotuba kwa sentensi moja.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Anwani “Simu Mkononi, Busara Kichwani” na hitimisho vinatoa dokezo.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Chunguza anwani na hitimisho</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Vyote vinasisitiza busara katika matumizi ya simu.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Andika kwa maneno yako</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Teknolojia ni nzuri ikitumiwa kwa busara na uwajibikaji.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Vijana watumie simu na mitandao kwa busara, uwajibikaji na adabu ili kufaidika bila kudhurika.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kuorodhesha hoja zote badala ya kutoa ujumbe mmoja mkuu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Mhutubu alilinganisha teknolojia na nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kisu — kinaweza kusaidia au kudhuru.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Ni tamathali gani katika “ulisambaa kama moto wa nyika”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Tashbihi (ina neno “kama”).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Taja pendekezo moja la mhutubu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuweka muda maalumu wa kutumia simu; kuthibitisha habari; kuwa na adabu mtandaoni.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Sifa za Hotuba Bora</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ina lengo wazi na mada moja kuu.</li>
    <li>Ina muundo unaoeleweka: salamu, utangulizi, mwili, hitimisho na shukrani.</li>
    <li>Hoja zimepangwa kwa mpangilio na kuungwa mkono kwa mifano halisi.</li>
    <li>Lugha inafaa hadhira; ina tamathali za usemi, methali na maswali ya balagha kwa mvuto.</li>
    <li>Ni fupi kiasi — haichoshi.</li>
    <li>Inamalizika kwa wito unaokumbukwa.</li>
    </ul>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Katika hotuba uliyosikiliza, tafuta methali au msemo mmoja, tashbihi moja na swali moja la balagha.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Hotuba ya mgombea anayeomba kura ni ya aina gani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria lengo la mgombea.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hotuba ya kushawishi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Ni sehemu ipi ya hotuba hutaja mada kwa mara ya kwanza?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Inakuja baada ya salamu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Utangulizi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> “Maneno ni kama maji yaliyomwagika — hayazoleki” inamaanisha nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria maji yaliyomwagika chini.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maneno yakishasemwa au kuandikwa hayawezi kurudishwa; tuwe waangalifu.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Sikiliza hotuba moja redioni, runingani au mtandaoni (k.v. hotuba ya kiongozi). Andika sehemu zake tano za muundo na ujumbe mkuu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mmoja asome aya ya tatu ya hotuba kwa sauti; mwingine asikilize bila kuangalia na ataje hoja zote zilizomo. Badilishaneni kwa aya ya nne.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Katika vikundi, tengenezeni chati ya “Sifa za Hotuba Bora” na kuipamba darasani.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta video fupi ya hotuba ya Kiswahili kwenye tovuti salama (kwa idhini ya mwalimu). Linganisha muundo wake na wa hotuba ya somo hili.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Hotuba ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maelezo rasmi yanayotolewa kwa mdomo na mtu mmoja mbele ya hadhira kwa lengo maalumu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja sehemu tano za muundo wa hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Salamu, utangulizi, mwili, hitimisho na shukrani.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja faida mbili za simu zilizotajwa katika hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wanafunzi kusoma maktaba za mtandaoni; wazazi kupokea ripoti; wakulima kupata bei za soko.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza tofauti kati ya hotuba ya kuelimisha na ya kushawishi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ya kuelimisha hutoa maarifa; ya kushawishi hulenga kumfanya msikilizaji akubali wazo au achukue hatua.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini mhutubu alianza kwa faida za simu kabla ya hatari zake?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kuonyesha usawa na kuwavuta wasikilizaji (wapenzi wa simu) wasihisi kushambuliwa, hivyo wakubali mapendekezo yake.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Umeombwa kutoa hotuba fupi siku ya wazazi kuhusu usalama mtandaoni. Taja hadhira yako na namna utakavyoitambua katika salamu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hadhira: mwalimu mkuu, walimu, wazazi na wanafunzi. Salamu: “Mwalimu Mkuu, walimu wetu, wazazi wapendwa na wanafunzi wenzangu, hamjambo?”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Je, hotuba ndefu ni bora kuliko fupi? Toa sababu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Si lazima. Hotuba inayochosha hupoteza wasikilizaji; ubora unategemea lengo, mpangilio na mvuto, si urefu.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Hotuba ni maelezo rasmi ya mdomo mbele ya hadhira. Ina aina kadhaa (ya kuelimisha, kushawishi, kuhamasisha na sherehe) na muundo wa salamu, utangulizi, mwili, hitimisho na shukrani. Hotuba bora ina lengo wazi, hoja zilizopangwa, mifano halisi, lugha yenye mvuto na wito unaokumbukwa.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hotuba hutolewa na mtu mmoja mbele ya hadhira.</li>
    <li>Muundo: salamu → utangulizi → mwili → hitimisho → shukrani.</li>
    <li>Viunganishi kama “kwanza, pili, tatu” hupanga hoja.</li>
    <li>Tamathali na methali huongeza mvuto.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tambua hadhira kwa vyeo vyao katika salamu.</li>
    <li>Ujumbe mkuu ni funzo moja, si orodha ya hoja.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kuanza bila salamu.</li>
    <li>Kuchanganya hoja bila mpangilio.</li>
    <li>Kumaliza ghafla bila hitimisho wala shukrani.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ukiulizwa muundo, taja sehemu na utoe mfano kutoka matini.</li>
    <li>Ujumbe mkuu uandikwe kwa sentensi moja kamili.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano na ushirikiano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na kuchambua hotuba pamoja na wenzako.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kubaini hoja na kutathmini mpangilio wake.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza hotuba mtandaoni kwa usalama.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usalama mtandaoni</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya ya akili</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Viongozi, walimu, wanahabari na wajasiriamali hutoa hotuba kila siku; kuzielewa hukusaidia kufanya maamuzi bora.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sikiliza hotuba moja nyumbani au mtandaoni na uandike muundo wake.</li>
    <li>Andika methali mbili zinazofaa kutumika katika hotuba kuhusu teknolojia na ueleze maana zake.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni sehemu ipi ya hotuba niliyoielewa vizuri zaidi?</li>
    <li>Ningebadilisha nini ili hotuba ya somo hili ivutie zaidi?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hotuba</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maelezo rasmi ya mdomo mbele ya hadhira.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mhutubu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtoaji wa hotuba.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hadhira</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wasikilizaji.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hitimisho</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu ya mwisho inayofupisha na kutoa wito.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Swali la balagha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swali lisilohitaji jibu, la kuvuta makini.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza maana ya hotuba.</p>
    <p style="margin:6px 0;">☐ Naweza kutaja aina za hotuba.</p>
    <p style="margin:6px 0;">☐ Naweza kubaini muundo wa hotuba niliyoisikiliza.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza ujumbe mkuu wa hotuba.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Hotuba ni:',
            options: ['Maelezo rasmi ya mdomo mbele ya hadhira', 'Barua ya kirafiki', 'Mazungumzo ya simu ya watu wawili', 'Shairi la kuandikwa'],
            correct: 0,
            explanation: 'Hotuba hutolewa kwa mdomo na mtu mmoja mbele ya hadhira kwa lengo maalumu.'
        },
        {
            question: 'Sehemu ya hotuba inayotaja mada kwa mara ya kwanza ni:',
            options: ['Hitimisho', 'Shukrani', 'Mwili', 'Utangulizi'],
            correct: 3,
            explanation: 'Baada ya salamu, utangulizi hutaja mada na kuvuta makini ya wasikilizaji.'
        },
        {
            question: 'Hotuba ya mgombea anayeomba kura ni ya:',
            options: ['Sherehe', 'Kuaga', 'Kushawishi', 'Kuomboleza'],
            correct: 2,
            explanation: 'Lengo lake ni kuwafanya wasikilizaji wamchague, hivyo ni ya kushawishi.'
        },
        {
            question: 'Katika hotuba, teknolojia imelinganishwa na:',
            options: ['Moto', 'Kisu', 'Maji', 'Ndege'],
            correct: 1,
            explanation: 'Mhutubu alisema teknolojia ni kama kisu kinachoweza kusaidia au kudhuru.'
        },
        {
            question: '“Ulisambaa kama moto wa nyika” ni mfano wa:',
            options: ['Tashbihi', 'Sitiari', 'Methali', 'Nahau'],
            correct: 0,
            explanation: 'Neno “kama” linaonyesha ulinganisho wa tashbihi.'
        },
        {
            question: 'Ni ipi SI hatari iliyotajwa katika hotuba?',
            options: ['Uraibu wa simu', 'Habari za uongo', 'Bei ya juu ya simu', 'Uonevu wa mtandaoni'],
            correct: 2,
            explanation: 'Mhutubu alitaja uraibu, habari za uongo na uonevu; hakutaja bei ya simu.'
        },
        {
            question: 'Hitimisho la hotuba bora:',
            options: ['Huanzisha mada mpya', 'Huorodhesha wageni', 'Huwa ndefu kuliko mwili', 'Hufupisha na kutoa wito'],
            correct: 3,
            explanation: 'Hitimisho hufunga hotuba kwa muhtasari na wito wa kuchukua hatua.'
        },
        {
            question: 'Ujumbe mkuu wa hotuba ni:',
            options: ['Tusitumie simu kamwe', 'Tutumie teknolojia kwa busara na uwajibikaji', 'Simu ni ghali', 'Wazazi wanunue simu nyingi'],
            correct: 1,
            explanation: 'Anwani na hitimisho vinasisitiza busara katika matumizi ya simu.'
        }
    ]
},
{
    name: '1.1.2 Hotuba: Kuandaa Hotuba',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.2: Kuandaa Hotuba</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza hatua za kuandaa hotuba: kubaini lengo na hadhira, kukusanya habari, kupanga hoja, kuchagua lugha yenye mvuto na kuandaa vidokezo vya kuzungumzia.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Hotuba nzuri haitokei kwa bahati; huandaliwa. Mhutubu aliyejiandaa vizuri huzungumza kwa ujasiri, hufuata mpangilio na huwavutia wasikilizaji.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗳️ Kampeni za uongozi shuleni</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Siku ya wazazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏆 Tamasha za muziki na drama</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Mikutano ya kazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛪ Mikusanyiko ya kidini</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📣 Kampeni za jamii</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kueleza hatua za kuandaa hotuba.</li>
    <li>Kubaini lengo na hadhira ya hotuba.</li>
    <li>Kupanga hoja na mifano kwa mpangilio unaofaa.</li>
    <li>Kutumia lugha yenye mvuto katika hotuba.</li>
    <li>Kuandaa vidokezo vya kuzungumzia.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Mhutubu anapaswa kuzingatia nini anapoandaa hotuba?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.1.1 — sifa na muundo wa hotuba.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Kabla ya kuandaa hotuba, jiulize maswali matatu: <strong>Kwa nini</strong> ninazungumza (lengo)? <strong>Ninazungumza na nani</strong> (hadhira)? <strong>Nitasema nini</strong> (maudhui)?</p>
    <p>Kisha kusanya habari kutoka vyanzo vinavyoaminika, panga hoja tatu hadi tano kuanzia muhimu zaidi, chagua mifano halisi, na andika hotuba kwa lugha inayofaa hadhira. Mwisho, tayarisha <strong>vidokezo</strong> vifupi kwenye kadi badala ya kusoma maandishi yote.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Lengo + Hadhira + Habari + Mpangilio + Lugha + Mazoezi = Hotuba bora.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Lengo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sababu au madhumuni ya kufanya jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Lengo la hotuba yangu ni kuwahamasisha wanafunzi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vyanzo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahali habari zinapotoka.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Vyanzo vya kuaminika ni vitabu na tovuti rasmi.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vidokezo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno au sentensi fupi za kukumbusha hoja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Aliandika vidokezo kwenye kadi ndogo.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Swali la balagha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swali lisilohitaji jibu, la kufikirisha.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>“Ni nani kati yetu asiyetumia simu?”</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mvuto</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uwezo wa kuvutia makini ya watu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Methali huongeza mvuto wa hotuba.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Hatua za Kuandaa Hotuba</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hatua</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unachofanya</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Bainisha lengo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Je, unaelimisha, unashawishi au unahamasisha?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Ijue hadhira</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umri, idadi, kiwango cha elimu, wanachokijua tayari.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Kusanya habari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vitabu, wataalamu, tovuti rasmi — thibitisha kila habari.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Panga hoja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja 3–5 zilizopangwa; kila moja na mfano.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5. Andika rasimu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salamu, utangulizi, mwili, hitimisho, shukrani.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6. Pamba lugha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Methali, tashbihi, maswali ya balagha, takwimu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7. Andaa vidokezo na fanya mazoezi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kadi za vidokezo; jizoeze mbele ya kioo au rafiki.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Mifano ya Kazi</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kubaini lengo na hadhira</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Umeombwa kuzungumza na wanafunzi wa Gredi ya 7 kuhusu hatari za kuzungumza na watu usiowajua mtandaoni. Bainisha lengo na sifa za hadhira.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Fikiria umri wao na wanachokijua kuhusu mitandao.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Lengo</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Kuelimisha na kuonya — kuwasaidia kujilinda.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Hadhira</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Watoto wa miaka 12–13; wanatumia simu za wazazi; wanahitaji lugha rahisi na mifano wanayoielewa.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Athari kwa lugha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Sentensi fupi, mifano ya michezo ya mtandaoni, na wito rahisi: “Usimpe mgeni picha wala anwani yako.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Lengo: kuelimisha na kuonya. Hadhira: watoto wa miaka 12–13, hivyo lugha rahisi na mifano ya karibu nao.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutumia istilahi ngumu za kiteknolojia zisizoeleweka na watoto.</p>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Kuandika utangulizi wenye mvuto</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Andika utangulizi wa hotuba kuhusu “Uraibu wa Simu” unaoanza kwa swali la balagha.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Swali la balagha huvuta makini mara moja.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Anza kwa swali</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Ni mara ngapi umeamka usiku wa manane kuangalia simu yako?”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Taja mada</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Leo nataka tuzungumzie uraibu wa simu…”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Onyesha umuhimu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“…tatizo linalonyakua usingizi, masomo na hata urafiki wetu.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Ni mara ngapi umeamka usiku wa manane kuangalia simu yako? Leo nataka tuzungumzie uraibu wa simu — tatizo linalonyakua usingizi, masomo na hata urafiki wetu bila sisi kujua.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kuanza kwa maelezo marefu ya historia ya simu badala ya kuvuta makini.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Taja hatua ya kwanza ya kuandaa hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kubainisha lengo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Kwa nini vidokezo ni bora kuliko kusoma maandishi yote?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Vinamwezesha mhutubu kuwatazama wasikilizaji na kuzungumza kwa kawaida.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Taja chanzo kimoja cha habari kinachoaminika.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Vitabu, wataalamu, tovuti za serikali au taasisi rasmi.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Lugha ya Kuvutia</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mbinu</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Methali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Usipoziba ufa utajenga ukuta.”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tashbihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Habari za uongo husambaa kama moto wa nyika.”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swali la balagha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Je, tutaendelea kunyamaza?”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Takwimu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Asilimia kubwa ya vijana hutumia simu zaidi ya saa tano kwa siku.” (thibitisha kutoka chanzo)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Takriri (urudiaji)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Tusome kwa bidii, tutumie simu kwa busara, tujenge maisha bora.”</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Bainisha lengo la hotuba ya kuwapongeza washindi wa mashindano ya kuandika insha.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Hotuba inatolewa kwa sababu gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kupongeza na kuhamasisha (hotuba ya sherehe).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Andika swali moja la balagha kuhusu habari za uongo.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Swali lisilohitaji jibu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Ni nani kati yetu hajawahi kupokea ujumbe wa uongo?”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Panga hoja hizi kuanzia muhimu zaidi kwa hotuba kuhusu usalama mtandaoni: kutumia nenosiri imara; kutokutana na wageni wa mtandaoni; kufuta historia ya kivinjari.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Ipi inalinda maisha moja kwa moja?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutokutana na wageni wa mtandaoni → nenosiri imara → kufuta historia.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Chagua mada moja kuhusu teknolojia. Jaza jedwali la lengo, hadhira, hoja tatu na mfano kwa kila hoja.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mwandikie mwenzako utangulizi wa hotuba yako; akusaidie kuuboresha kwa swali la balagha au methali.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Kila kikundi kiandae vidokezo vya hotuba ya dakika tatu kuhusu “Faida na Hasara za Mitandao ya Kijamii”.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta takwimu moja kuhusu matumizi ya intaneti nchini Kenya kutoka tovuti rasmi (k.v. ya Mamlaka ya Mawasiliano). Itumie katika hotuba yako na utaje chanzo.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja hatua tatu za kuandaa hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kubainisha lengo, kujua hadhira, kukusanya habari (au kupanga hoja, kuandika rasimu, kupamba lugha, mazoezi).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Vidokezo ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maneno au sentensi fupi za kukumbusha hoja wakati wa kuzungumza.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Kwa nini ni muhimu kuijua hadhira?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kuchagua lugha, mifano na urefu unaofaa ili ujumbe ueleweke.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Andika hitimisho la hotuba kuhusu usalama mtandaoni lenye wito.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Kwa hiyo, ndugu zangu, kabla ya kubofya, fikiri. Linda siri zako, heshimu wenzako na uwe raia mwema mtandaoni. Asanteni.”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Eleza jinsi hotuba moja kuhusu uraibu wa simu ingetofautiana ikiwa hadhira ni wazazi badala ya wanafunzi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa wazazi: lugha rasmi zaidi, kusisitiza jinsi ya kuwaongoza watoto na kuweka mipaka nyumbani; kwa wanafunzi: mifano ya maisha yao na wito wa kujidhibiti.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Unagombea nafasi ya kiranja. Andaa hoja tatu za hotuba yako ya kampeni zinazohusu teknolojia shuleni.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: kuanzisha klabu ya TEHAMA; kampeni ya usalama mtandaoni; kuomba maabara ya kompyuta ifunguliwe jioni kwa masomo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini mhutubu anapaswa kuthibitisha takwimu kabla ya kuzitumia?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Takwimu za uongo huharibu uaminifu wake na zinaweza kupotosha jamii.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Kuandaa hotuba kunahusisha kubainisha lengo, kuijua hadhira, kukusanya habari za kuaminika, kupanga hoja, kuandika rasimu yenye muundo kamili, kupamba lugha na kufanya mazoezi kwa kutumia vidokezo.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Lengo na hadhira huamua lugha na mifano.</li>
    <li>Thibitisha habari kutoka vyanzo vya kuaminika.</li>
    <li>Panga hoja 3–5 zenye mifano.</li>
    <li>Tumia vidokezo, si kusoma maandishi yote.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Swali la balagha ni mwanzo mzuri.</li>
    <li>Taja chanzo cha takwimu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutumia habari ambazo hazijathibitishwa.</li>
    <li>Kuandika hotuba ndefu mno.</li>
    <li>Kusahau hadhira wakati wa kuchagua lugha.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ukiombwa kuandika hotuba, onyesha sehemu zote tano za muundo.</li>
    <li>Tumia angalau mbinu mbili za lugha (k.v. methali na swali la balagha).</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua na kupanga hoja zenye nguvu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutafiti habari mtandaoni kwa usalama na kuthibitisha vyanzo.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ubunifu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutunga utangulizi na hitimisho lenye mvuto.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usalama mtandaoni</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uongozi na uraia</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wafanyabiashara, viongozi na wanaharakati huandaa hotuba kwa makini ili kushawishi na kuelimisha jamii.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andaa vidokezo vya hotuba ya dakika tatu kuhusu “Teknolojia na Elimu”.</li>
    <li>Andika utangulizi na hitimisho la hotuba hiyo kwa ukamilifu.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni hatua ipi ya maandalizi ninayoiona ngumu zaidi?</li>
    <li>Nimetumia vyanzo vya kuaminika?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Lengo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Madhumuni ya hotuba.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vidokezo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maandishi mafupi ya kukumbusha hoja.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Rasimu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maandishi ya awali kabla ya kuboreshwa.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Takriri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Urudiaji wa maneno kwa msisitizo.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kubainisha lengo na hadhira.</p>
    <p style="margin:6px 0;">☐ Naweza kupanga hoja kwa mpangilio.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia lugha yenye mvuto.</p>
    <p style="margin:6px 0;">☐ Naweza kuandaa vidokezo.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Hatua ya kwanza ya kuandaa hotuba ni:',
            options: ['Kuandika shukrani', 'Kununua kipaza sauti', 'Kukariri hotuba', 'Kubainisha lengo'],
            correct: 3,
            explanation: 'Lengo huongoza maamuzi yote mengine kuhusu hotuba.'
        },
        {
            question: 'Vidokezo vya hotuba ni:',
            options: ['Hotuba nzima iliyoandikwa', 'Majina ya wasikilizaji', 'Maneno mafupi ya kukumbusha hoja', 'Picha za hadhira'],
            correct: 2,
            explanation: 'Vidokezo humsaidia mhutubu kukumbuka hoja bila kusoma kila neno.'
        },
        {
            question: 'Kwa nini ni muhimu kuijua hadhira?',
            options: ['Ili kuchagua lugha na mifano inayofaa', 'Ili kujua bei ya tiketi', 'Ili kuchagua mavazi tu', 'Haina umuhimu'],
            correct: 0,
            explanation: 'Hadhira tofauti huhitaji lugha, mifano na urefu tofauti.'
        },
        {
            question: '“Je, tutaendelea kunyamaza?” ni mfano wa:',
            options: ['Swali la balagha', 'Methali', 'Tashbihi', 'Takwimu'],
            correct: 0,
            explanation: 'Ni swali lisilohitaji jibu, la kufikirisha wasikilizaji.'
        },
        {
            question: 'Chanzo kipi cha habari kinaaminika zaidi?',
            options: ['Uvumi wa mtaani', 'Tovuti rasmi ya taasisi ya serikali', 'Ujumbe usiojulikana mtumaji', 'Maoni ya mtu asiye mtaalamu'],
            correct: 1,
            explanation: 'Taasisi rasmi huthibitisha habari kabla ya kuzichapisha.'
        },
        {
            question: '“Tusome kwa bidii, tutumie simu kwa busara, tujenge maisha bora” inatumia:',
            options: ['Tashbihi', 'Methali', 'Takriri', 'Sitiari'],
            correct: 2,
            explanation: 'Kurudia muundo wa “tu-” ni takriri inayoleta msisitizo na mdundo.'
        },
        {
            question: 'Hotuba ya kuwapongeza washindi ni ya:',
            options: ['Kushawishi', 'Kuomboleza', 'Kuelimisha tu', 'Sherehe'],
            correct: 3,
            explanation: 'Hotuba za kupongeza ni sehemu ya hotuba za sherehe.'
        },
        {
            question: 'Takwimu katika hotuba zinapaswa:',
            options: ['Kubuniwa ili kuvutia', 'Kuthibitishwa na kutajiwa chanzo', 'Kuepukwa kabisa', 'Kuandikwa kwa Kiingereza'],
            correct: 1,
            explanation: 'Takwimu za uongo huharibu uaminifu wa mhutubu.'
        }
    ]
},
{
    name: '1.1.3 Hotuba: Kutoa Hotuba Mbele ya Hadhira',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.3: Kutoa Hotuba Mbele ya Hadhira</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza mbinu za kutoa hotuba kwa ufasaha: matamshi bora, kasi, kiimbo, kiwango cha sauti, viziada lugha, kudhibiti hofu na kujibu maswali ya hadhira. Kila mwanafunzi atatoa hotuba fupi.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Hotuba nzuri inaweza kuharibika ikiwasilishwa vibaya. Sauti, macho na mkao wako huwashawishi wasikilizaji sawa na maneno yako.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎤 Gwaride la shule</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏆 Mashindano ya hotuba</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Mahojiano ya kazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📹 Video za mtandaoni</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Mikutano ya jamii</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Mawasilisho ya chuo</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutoa hotuba kwa matamshi bora, kasi ifaayo, kiimbo na kiwango kinachofaa cha sauti.</li>
    <li>Kutumia viziada lugha ipasavyo.</li>
    <li>Kudhibiti hofu ya kuzungumza hadharani.</li>
    <li>Kujibu maswali ya hadhira kwa adabu.</li>
    <li>Kutathmini hotuba ya mwenzake kwa kutumia vigezo.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Mhutubu anawezaje kuwavutia wasikilizaji wake?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.1.1 na 1.1.2; kusoma kwa ufasaha (Gredi ya 10).</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Uwasilishaji ni <strong>jinsi</strong> unavyosema hotuba. Hata hoja bora hupotea ikiwa mhutubu ananong’ona, anatazama sakafu au anazungumza kwa kasi kupita kiasi.</p>
    <p>Kumbuka mambo haya: simama wima, watazame wasikilizaji machoni, zungumza kwa sauti inayosikika hadi nyuma ya ukumbi, punguza kasi kwenye hoja muhimu, badilisha kiimbo, na tumia mikono kusisitiza — si kuchezea kalamu.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Sauti wazi, macho kwa hadhira, mkao imara, tabasamu — na pumua!</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Uwasilishaji</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jinsi ya kuwasilisha au kutoa jambo kwa hadhira.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Uwasilishaji wake ulikuwa wa kuvutia.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kiimbo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupanda na kushuka kwa sauti wakati wa kuzungumza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kiimbo cha swali hupanda mwishoni.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viziada lugha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara za mwili zinazoambatana na usemi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alitumia mikono na tabasamu kama viziada lugha.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mkao</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Namna ya kusimama au kukaa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mkao imara huonyesha kujiamini.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Wasiwasi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hali ya hofu au kutotulia.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alipumua kwa kina kupunguza wasiwasi.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Vipengele vya Uwasilishaji</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kipengele</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Fanya</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Usifanye</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matamshi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tamka kila neno wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumeza silabi au kuchanganya lugha</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kasi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wastani; punguza kwenye hoja muhimu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukimbia ili umalize haraka</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kiwango cha sauti</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti isikike hadi nyuma ya ukumbi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kunong’ona au kupiga kelele</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kiimbo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Badilisha kulingana na hisia na maana</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti moja tu (ya kuchosha)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viziada lugha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Macho kwa hadhira, mikono kusisitiza, tabasamu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutazama sakafu, kuchezea vitu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muda</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zingatia muda uliopewa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzidisha muda</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kudhibiti Hofu na Kujibu Maswali</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Jiandae vizuri na ufanye mazoezi angalau mara tatu.</li>
    <li>Pumua kwa kina mara tatu kabla ya kuanza.</li>
    <li>Watazame watu wachache wenye sura za kirafiki kwanza.</li>
    <li>Kumbuka: hadhira inakutakia mema.</li>
    </ul>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kujibu swali gumu kwa adabu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Baada ya hotuba yako kuhusu uraibu wa simu, mzazi anauliza: “Si wewe pia uko mtandaoni kila siku?” Utajibuje?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Kubali ukweli, onyesha unyenyekevu, rudisha kwenye hoja yako.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Shukuru kwa swali</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Asante kwa swali zuri, mzazi.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Kubali kwa ukweli</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Ni kweli, natumia mtandao kila siku.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Rudisha kwenye hoja</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Ndiyo maana nimejiwekea muda maalumu — saa moja jioni baada ya kusoma. Siyo kuacha simu, bali kuitumia kwa busara.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Asante kwa swali zuri. Ni kweli, natumia mtandao kila siku, ndiyo maana nimejiwekea muda maalumu wa saa moja jioni baada ya kusoma. Ujumbe wangu si kuacha simu, bali kuitumia kwa busara.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kujibu kwa hasira au kujitetea kupita kiasi, jambo linaloharibu uaminifu wa mhutubu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Taja njia mbili za kupunguza wasiwasi kabla ya hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kujiandaa vizuri, kufanya mazoezi, kupumua kwa kina, kuwatazama watu wa kirafiki.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Kiimbo kinachobaki palepale huitwa nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sauti ya kuchosha / monotoni.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Mhutubu atazame wapi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wasikilizaji, akizungusha macho sehemu zote za ukumbi.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Kigezo cha Kutathmini Hotuba</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kigezo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kuzidi (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kufikia (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kukaribia (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Chini (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muundo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu zote zimekamilika vizuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu zote zipo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu moja inakosekana</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muundo haueleweki</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja nzito zenye mifano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja zinazoeleweka</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja chache</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja hazieleweki</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matamshi na sauti</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazi, yenye kiimbo kizuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mara nyingine haisikiki</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haisikiki</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viziada lugha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vinaongeza mvuto</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vinafaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vichache</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Havifai</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Ni wapi mhutubu anapaswa kupunguza kasi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Ili ujumbe muhimu uzame.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwenye hoja muhimu na wito.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Taja kiziada lugha kimoja kinachoonyesha kujiamini.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria mkao na macho.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusimama wima / kuwatazama wasikilizaji machoni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Mhutubu amezidisha muda kwa dakika tano. Ni kosa gani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria hadhira na ratiba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutozingatia muda — huchosha hadhira na huvuruga ratiba.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Jizoeze hotuba yako ya dakika tatu mbele ya kioo mara tatu, ukizingatia macho na mikono.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Toa hotuba yako kwa mwenzako; akutathmini kwa kutumia kigezo cha somo hili na akupe ushauri mmoja.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Fanyeni mashindano madogo ya hotuba darasani kuhusu “Teknolojia na Vijana”; vikundi vitathmini kwa kigezo.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Jirekodi kwa video ukitoa hotuba (kwa idhini ya wazazi au mwalimu). Itazame na uandike mambo matatu ya kuboresha.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja vipengele vitatu vya uwasilishaji wa hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Matamshi, kasi, kiwango cha sauti, kiimbo, viziada lugha, muda.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Viziada lugha ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ishara za mwili zinazoambatana na usemi, k.v. macho, mikono na tabasamu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Kwa nini mhutubu hapaswi kusoma hotuba yote kutoka karatasi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hukosa mawasiliano ya macho na wasikilizaji na hotuba hukosa uhai.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza jinsi ya kujibu swali usilolijua jibu lake.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kukiri kwa adabu, kuahidi kutafuta jibu, au kumwomba mwenye ujuzi kusaidia.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Linganisha hotuba ya ana kwa ana na hotuba ya mtandaoni (video) kwa upande wa uwasilishaji.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mtandaoni: kutazama kamera, sauti wazi kwa kipaza sauti, mandhari tulivu, muda mfupi zaidi; ana kwa ana: kuzungusha macho kwenye ukumbi na kutumia nafasi ya jukwaa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Utatoa hotuba ya kumkaribisha mgeni rasmi siku ya michezo. Andika sentensi mbili za kwanza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Mgeni wetu rasmi, Mwalimu Mkuu, walimu na wanafunzi wenzangu, hamjambo? Ni fahari kubwa kukukaribisha leo katika siku yetu ya michezo.”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Je, mhutubu mwenye sauti nzuri lakini hoja dhaifu atafaulu? Eleza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Atavutia kwa muda mfupi, lakini wasikilizaji wenye fikra makini watagundua udhaifu wa hoja; maudhui na uwasilishaji vyote ni muhimu.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Uwasilishaji bora wa hotuba unahitaji matamshi wazi, kasi ya wastani, sauti inayosikika, kiimbo kinachobadilika, viziada lugha vinavyofaa na kuzingatia muda. Mhutubu hudhibiti hofu kwa maandalizi na mazoezi, na hujibu maswali kwa adabu.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Matamshi, kasi, sauti na kiimbo.</li>
    <li>Macho kwa hadhira; mkao imara.</li>
    <li>Mazoezi hupunguza hofu.</li>
    <li>Jibu maswali kwa adabu na ukweli.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Punguza kasi kwenye hoja muhimu.</li>
    <li>Zingatia muda.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kusoma kila neno kutoka karatasi.</li>
    <li>Kutazama sakafu.</li>
    <li>Kujibu maswali kwa hasira.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Katika tathmini ya mdomo, salamu nzuri na hitimisho wazi hupata alama.</li>
    <li>Onyesha viziada lugha vinavyofaa.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujiamini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumza mbele ya hadhira.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano na ushirikiano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutathmini na kushauri wenzako.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujirekodi na kujitathmini.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uvumilivu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ujuzi wa maisha</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uongozi</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wanasiasa, walimu, wanahabari na wauzaji hufaulu kwa sababu ya uwezo wao wa kuwasilisha ujumbe kwa ufasaha.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Toa hotuba yako ya dakika tatu nyumbani kwa familia na uombe maoni.</li>
    <li>Andika mambo matatu uliyojifunza kutokana na maoni hayo.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijisikiaje nilipotoa hotuba?</li>
    <li>Ni kipengele kipi cha uwasilishaji ninachohitaji kuboresha?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Uwasilishaji</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Namna ya kutoa hotuba.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kiimbo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupanda na kushuka kwa sauti.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viziada lugha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara za mwili.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mkao</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Namna ya kusimama.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutoa hotuba kwa sauti wazi na kiimbo kizuri.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia viziada lugha.</p>
    <p style="margin:6px 0;">☐ Naweza kudhibiti hofu.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu maswali kwa adabu.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kiimbo ni:',
            options: ['Idadi ya maneno', 'Urefu wa hotuba', 'Mavazi ya mhutubu', 'Kupanda na kushuka kwa sauti'],
            correct: 3,
            explanation: 'Kiimbo hueleza mabadiliko ya sauti yanayoonyesha maana na hisia.'
        },
        {
            question: 'Ni kipi kiziada lugha kizuri?',
            options: ['Kuchezea kalamu', 'Kuwatazama wasikilizaji machoni', 'Kutazama sakafu', 'Kuweka mikono mfukoni muda wote'],
            correct: 1,
            explanation: 'Mawasiliano ya macho huonyesha kujiamini na huwavuta wasikilizaji.'
        },
        {
            question: 'Njia bora ya kupunguza hofu ni:',
            options: ['Kujiandaa na kufanya mazoezi', 'Kukimbia jukwaani', 'Kusoma kwa kasi', 'Kunong’ona'],
            correct: 0,
            explanation: 'Maandalizi na mazoezi hujenga ujasiri.'
        },
        {
            question: 'Mhutubu apunguze kasi wapi?',
            options: ['Kwenye salamu tu', 'Popote bila sababu', 'Kwenye hoja muhimu', 'Asipunguze kamwe'],
            correct: 2,
            explanation: 'Kupunguza kasi huwapa wasikilizaji muda wa kuelewa hoja muhimu.'
        },
        {
            question: 'Swali gumu kutoka hadhira lijibiwe:',
            options: ['Kwa hasira', 'Kwa kunyamaza', 'Kwa kuondoka', 'Kwa adabu na ukweli'],
            correct: 3,
            explanation: 'Majibu ya adabu hulinda uaminifu wa mhutubu.'
        },
        {
            question: 'Sauti isiyobadilika kiimbo:',
            options: ['Huvutia sana', 'Huonyesha furaha', 'Huchosha wasikilizaji', 'Ni bora kwa hotuba'],
            correct: 2,
            explanation: 'Sauti ya monotoni hupunguza makini ya hadhira.'
        },
        {
            question: 'Kusoma hotuba yote kutoka karatasi:',
            options: ['Hupunguza mawasiliano ya macho', 'Huongeza mvuto', 'Ni lazima', 'Hupendeza kila mara'],
            correct: 0,
            explanation: 'Macho huwa kwenye karatasi badala ya wasikilizaji.'
        },
        {
            question: 'Katika hotuba ya video mtandaoni, mhutubu atazame:',
            options: ['Dari', 'Kamera', 'Simu yake nyingine', 'Sakafu'],
            correct: 1,
            explanation: 'Kutazama kamera huonekana kama kuwatazama wasikilizaji machoni.'
        }
    ]
},
{
    name: '1.1 Zoezi la Tathmini: Hotuba',
    type: 'lesson',
    duration: '30 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Hotuba</h2>
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
    <li>Maana, aina na sifa za hotuba</li>
    <li>Muundo wa hotuba</li>
    <li>Hatua za kuandaa hotuba</li>
    <li>Lugha ya kuvutia</li>
    <li>Uwasilishaji, kudhibiti hofu na kujibu maswali</li>
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
    <div>Soma kila chaguo kwa makini; baadhi ya majibu ni sahihi kwa sehemu tu. Chagua lililo kamili zaidi.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Sehemu ya mwisho ya hotuba ni:',
            options: ['Shukrani', 'Utangulizi', 'Salamu', 'Mwili'],
            correct: 0,
            explanation: 'Hotuba hufungwa kwa kuwashukuru wasikilizaji baada ya hitimisho.'
        },
        {
            question: 'Mwili wa hotuba hubeba:',
            options: ['Majina ya wageni tu', 'Shukrani', 'Anwani', 'Hoja na mifano'],
            correct: 3,
            explanation: 'Mwili ndio sehemu kuu yenye hoja zilizopangwa na mifano.'
        },
        {
            question: 'Hotuba ya kocha kwa wachezaji kabla ya mechi ni ya:',
            options: ['Kuomboleza', 'Kuaga', 'Kuhamasisha', 'Kushtaki'],
            correct: 2,
            explanation: 'Lengo lake ni kuwatia moyo wachezaji.'
        },
        {
            question: 'Hatua ya kukusanya habari inahitaji:',
            options: ['Vyanzo vya kuaminika', 'Uvumi', 'Kubuni takwimu', 'Kunakili hotuba ya mtu mwingine'],
            correct: 0,
            explanation: 'Habari za kuaminika hujenga uaminifu wa mhutubu.'
        },
        {
            question: '“Usipoziba ufa utajenga ukuta” ni:',
            options: ['Tashbihi', 'Swali la balagha', 'Nahau', 'Methali'],
            correct: 3,
            explanation: 'Ni methali inayoonya kurekebisha tatizo mapema.'
        },
        {
            question: 'Takriri ni:',
            options: ['Swali lisilohitaji jibu', 'Ulinganisho kwa “kama”', 'Chanzo cha habari', 'Urudiaji wa maneno kwa msisitizo'],
            correct: 3,
            explanation: 'Takriri hurudia maneno au muundo ili kusisitiza.'
        },
        {
            question: 'Kiwango kinachofaa cha sauti ni kile:',
            options: ['Cha kunong’ona', 'Kinachosikika hadi nyuma ya ukumbi', 'Cha kupiga kelele', 'Kisichobadilika kamwe'],
            correct: 1,
            explanation: 'Kila msikilizaji anapaswa kusikia vizuri bila kelele.'
        },
        {
            question: 'Vidokezo humsaidia mhutubu:',
            options: ['Kusoma kila neno', 'Kukumbuka hoja huku akiwatazama wasikilizaji', 'Kujificha', 'Kuzidisha muda'],
            correct: 1,
            explanation: 'Vidokezo hukumbusha hoja bila kumfunga mhutubu kwenye karatasi.'
        },
        {
            question: 'Mhutubu aliulizwa swali asilolijua. Afanye nini?',
            options: ['Abuni jibu', 'Akiri kwa adabu na aahidi kutafuta jibu', 'Akasirike', 'Apuuze swali'],
            correct: 1,
            explanation: 'Ukweli na adabu hulinda uaminifu.'
        },
        {
            question: 'Sifa ya hotuba bora ni:',
            options: ['Kuwa na lengo wazi na mpangilio mzuri', 'Kuwa ndefu kupita kiasi', 'Kukosa salamu', 'Kuwa na hoja nyingi zisizopangwa'],
            correct: 0,
            explanation: 'Hotuba bora ina lengo wazi, muundo na hoja zilizopangwa.'
        }
    ]
},
{
    name: '1.1 Kazi ya Mradi: Kampeni ya Matumizi Bora ya Simu Shuleni',
    type: 'lesson',
    duration: '80 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Kampeni ya Matumizi Bora ya Simu Shuleni</h2>
    <p style="font-size:16px;">Katika vikundi, mtaandaa na kutoa hotuba ya dakika tano kuhusu matumizi bora ya simu na mitandao, kwa wanafunzi wa Gredi ya 9 au 10.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Idara ya ushauri nasaha imeona ongezeko la uraibu wa simu na uonevu wa mtandaoni miongoni mwa wanafunzi. Imewaomba wanafunzi wa Gredi ya 11 kuongoza kampeni kupitia hotuba fupi gwarideni.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Kampeni zinazoongozwa na vijana wenyewe huwafikia vijana wenzao kwa urahisi zaidi.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Chagueni mada ndogo: uraibu wa simu, habari za uongo, uonevu wa mtandaoni au usalama wa taarifa binafsi.</li>
    <li>Wahojini wanafunzi watano kuhusu tabia zao za kutumia simu na mdokeze majibu.</li>
    <li>Bainisheni lengo na hadhira ya hotuba yenu.</li>
    <li>Andikeni hotuba kamili yenye sehemu zote tano, mbinu tatu za lugha na takwimu moja yenye chanzo.</li>
    <li>Andaeni kadi za vidokezo.</li>
    <li>Fanyeni mazoezi mara tatu na mtathminiane kwa kigezo cha somo 1.1.3.</li>
    <li>Toeni hotuba (moja kwa moja au kwa video) na mpokee maswali.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Majibu ya mahojiano</li>
    <li>Hotuba kamili iliyoandikwa</li>
    <li>Kadi za vidokezo</li>
    <li>Uwasilishaji wa hotuba</li>
    <li>Tafakari ya kila mwanakikundi (maneno 100)</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utafiti na maandalizi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahojiano ya kina; takwimu yenye chanzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahojiano yamekamilika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahojiano machache</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna utafiti</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muundo na hoja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muundo kamili; hoja nzito zenye mifano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muundo kamili; hoja wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu moja inakosekana</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muundo haueleweki</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lugha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mbinu tatu au zaidi zimetumika kwa ufasaha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mbinu mbili zimetumika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mbinu moja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna mbinu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uwasilishaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti wazi, kiimbo na viziada lugha bora</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mara nyingine haisikiki</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haisikiki</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ushirikiano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kila mmoja alichangia kikamilifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ushirikiano mzuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baadhi hawakuchangia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ushirikiano duni</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Ombeni idhini kabla ya kumrekodi mtu yeyote.<br>Hotuba isizidi dakika tano.<br>Malizeni kwa wito unaokumbukwa.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijifunza nini kutokana na mahojiano?</li>
    <li>Wasikilizaji waliitikiaje hotuba yetu?</li>
    <li>Nitabadilisha nini katika matumizi yangu ya simu?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Hotuba ya kampeni inapaswa kuchukua muda gani?',
            options: ['Saa mbili', 'Isizidi dakika tano', 'Sekunde kumi', 'Siku nzima'],
            correct: 1,
            explanation: 'Maelekezo yanasema hotuba isizidi dakika tano.'
        },
        {
            question: 'Mnapaswa kuwahoji wanafunzi wangapi?',
            options: ['Mmoja', 'Watano', 'Hamsini', 'Hakuna'],
            correct: 1,
            explanation: 'Kazi inahitaji mahojiano ya wanafunzi watano.'
        },
        {
            question: 'Kabla ya kumrekodi mtu mnapaswa:',
            options: ['Kuomba idhini', 'Kumrekodi kisiri', 'Kubadilisha jina lake', 'Kumlipa'],
            correct: 0,
            explanation: 'Idhini ni sehemu ya maadili ya mawasiliano na usalama mtandaoni.'
        },
        {
            question: 'Takwimu katika hotuba iwe na:',
            options: ['Rangi nzuri', 'Uongo kidogo', 'Picha tu', 'Chanzo chake'],
            correct: 3,
            explanation: 'Kutaja chanzo huthibitisha ukweli wa takwimu.'
        },
        {
            question: 'Hadhira ya kampeni hii ni:',
            options: ['Wazazi pekee', 'Walimu pekee', 'Wageni wa kigeni', 'Wanafunzi wa Gredi ya 9 au 10'],
            correct: 3,
            explanation: 'Kampeni inawalenga wanafunzi wadogo shuleni.'
        }
    ]
},
{
    name: '1.1 Marudio: Hotuba',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.1 Kusikiliza na Kuzungumza: Hotuba</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Hotuba</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.1 kabla ya kuendelea na 1.2 Ufahamu wa Kusoma.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🎤 Maana na aina</p>
    <div>Hotuba ni maelezo rasmi ya mdomo mbele ya hadhira. Aina: ya kuelimisha, kushawishi, kuhamasisha na ya sherehe.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🏠 Muundo</p>
    <div>Salamu → utangulizi → mwili → hitimisho → shukrani.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🛠️ Maandalizi</p>
    <div>Lengo, hadhira, habari za kuaminika, mpangilio wa hoja, rasimu, lugha ya mvuto, vidokezo na mazoezi.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🎨 Lugha ya mvuto</p>
    <div>Methali, tashbihi, maswali ya balagha, takwimu zenye chanzo na takriri.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🗣️ Uwasilishaji</p>
    <div>Matamshi wazi, kasi ya wastani, sauti inayosikika, kiimbo kinachobadilika, viziada lugha na kuzingatia muda.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kipengele</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kosa la kuepuka</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salamu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Mwalimu Mkuu, walimu, wazazi…”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuanza bila kutambua hadhira</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utangulizi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swali la balagha + mada</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Historia ndefu isiyovutia</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwanza…, Pili…, Tatu…</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja bila mpangilio</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hitimisho</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muhtasari + wito</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumaliza ghafla</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uwasilishaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Macho kwa hadhira</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma kila neno</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja aina nne za hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ya kuelimisha, kushawishi, kuhamasisha na ya sherehe.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Eleza kazi ya utangulizi wa hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutaja mada na kuvuta makini ya wasikilizaji.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja mbinu tatu za lugha zinazoongeza mvuto wa hotuba.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Methali, tashbihi, maswali ya balagha (au takwimu, takriri).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini mhutubu atumie vidokezo?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili akumbuke hoja huku akiwatazama wasikilizaji.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Taja njia mbili za kudhibiti hofu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maandalizi na mazoezi; kupumua kwa kina; kuwatazama watu wa kirafiki.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Andika hitimisho la sentensi mbili la hotuba kuhusu habari za uongo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Kwa hiyo, kabla ya kusambaza ujumbe wowote, uthibitishe. Ukweli ni ngao yetu dhidi ya hofu na fujo.”</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hotuba ina aina, sifa na muundo maalumu.</li>
    <li>Maandalizi bora huanza kwa lengo na hadhira.</li>
    <li>Lugha ya mvuto hufanya hotuba ikumbukwe.</li>
    <li>Uwasilishaji bora hutegemea sauti, kiimbo, viziada lugha na muda.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kubaini muundo na ujumbe wa hotuba.</p>
    <p style="margin:6px 0;">☐ Naweza kuandaa hotuba kamili.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia lugha ya mvuto.</p>
    <p style="margin:6px 0;">☐ Naweza kutoa hotuba kwa ufasaha na kujibu maswali.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Muundo sahihi wa hotuba ni:',
            options: ['Mwili, salamu, shukrani, utangulizi', 'Hitimisho, mwili, salamu', 'Shukrani, mwili, utangulizi', 'Salamu, utangulizi, mwili, hitimisho, shukrani'],
            correct: 3,
            explanation: 'Hotuba huanza kwa salamu na kumalizika kwa shukrani.'
        },
        {
            question: 'Hotuba ya mahafali ni ya:',
            options: ['Kushtaki', 'Sherehe', 'Kuomba msamaha', 'Kuomboleza'],
            correct: 1,
            explanation: 'Mahafali ni sherehe ya kuhitimu masomo.'
        },
        {
            question: '“Je, tutaendelea kunyamaza?” ni:',
            options: ['Swali la balagha', 'Methali', 'Takwimu', 'Salamu'],
            correct: 0,
            explanation: 'Ni swali lisilohitaji jibu la kufikirisha.'
        },
        {
            question: 'Kosa la uwasilishaji ni:',
            options: ['Kutumia vidokezo', 'Kupunguza kasi kwenye hoja muhimu', 'Kutabasamu', 'Kutazama sakafu muda wote'],
            correct: 3,
            explanation: 'Kutazama sakafu hupoteza mawasiliano na hadhira.'
        },
        {
            question: 'Habari za hotuba zitoke kwenye:',
            options: ['Vyanzo vya kuaminika', 'Uvumi', 'Ndoto', 'Ujumbe usiojulikana'],
            correct: 0,
            explanation: 'Vyanzo vya kuaminika hulinda ukweli wa hotuba.'
        }
    ]
},
{
    name: '1.2.1 Ufahamu wa Kusoma: Mikakati ya Kusoma kwa Kina',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.2 Kusoma: Ufahamu wa Kusoma</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.1: Mikakati ya Kusoma kwa Kina</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza mikakati ya kusoma kabla, wakati na baada ya kusoma: kubashiri, kusoma kwa kuruka (kudurusu), kutafuta habari mahususi, kubaini wazo kuu la kila aya na kutofautisha ukweli na maoni.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Katika Gredi ya 11 utasoma makala ndefu za magazeti, ripoti na matini za mtandaoni. Mikakati hii inakusaidia kuelewa kwa haraka, kukumbuka na kuchambua unachosoma badala ya kusoma tu maneno.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti na majarida</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌐 Tovuti na blogu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Vitabu vya kiada</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📄 Mikataba na fomu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Ujumbe wa benki na simu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutumia mikakati ya kabla, wakati na baada ya kusoma.</li>
    <li>Kubaini wazo kuu la kila aya.</li>
    <li>Kutofautisha ukweli na maoni katika makala.</li>
    <li>Kukisia maana ya msamiati kutokana na muktadha.</li>
    <li>Kuthamini usomaji makini kama kinga dhidi ya udanganyifu.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Tunawezaje kusoma kwa kina ili kuelewa na kuchambua matini?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Kusoma kwa ufasaha na ufahamu (Gredi ya 10).</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Kusoma kwa kina ni zaidi ya kutamka maneno. Msomaji makini <strong>hubashiri</strong> kabla ya kusoma (akitumia anwani na picha), <strong>huuliza maswali</strong> wakati anasoma, na <strong>hufupisha</strong> baada ya kusoma.</p>
    <p>Kila aya nzuri ina <strong>wazo kuu</strong>, mara nyingi katika sentensi ya kwanza (sentensi kuu). Sentensi nyingine hutoa maelezo au mifano. Pia jifunze kutofautisha <strong>ukweli</strong> (unaoweza kuthibitishwa) na <strong>maoni</strong> (mtazamo wa mwandishi).</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Kabla: bashiri. Wakati: uliza na dokeza. Baada: fupisha na tathmini.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudurusu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma kwa haraka ili kupata picha ya jumla.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Nilidurusu makala kabla ya kuisoma kwa makini.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sentensi kuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sentensi inayobeba wazo kuu la aya.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Sentensi kuu ya aya ya pili inahusu uchumi.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muktadha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya maneno yanayosaidia kuelewa maana.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Nilikisia maana ya “matapeli” kutokana na muktadha.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tapeli</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu anayewadanganya wengine ili kupata mali yao.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Tapeli aliomba namba yangu ya siri.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Taslimu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pesa halisi za noti na sarafu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Hakubeba pesa taslimu sokoni.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuhadaa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kudanganya kwa ujanja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ujumbe huo ulilenga kuwahadaa wateja.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Mikakati ya Kusoma</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Wakati</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mkakati</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Swali la kujiuliza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kabla</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kubashiri kwa anwani na picha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matini hii itahusu nini?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kabla</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kudurusu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aya ngapi? Mada kuu ni ipi?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wakati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kubaini sentensi kuu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aya hii inasema nini hasa?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wakati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia maana kwa muktadha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno ya karibu yananisaidiaje?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wakati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutofautisha ukweli na maoni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Je, hili linaweza kuthibitishwa?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baada</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufupisha na kutathmini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwandishi anataka nikubali nini? Nakubali?</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Soma Makala</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Kabla ya kusoma: anwani “Pesa Mfukoni, Simu Mkononi” inakusaidia kubashiri nini?</div>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Pesa Mfukoni, Simu Mkononi</p>
    <p style="margin:8px 0;">Miaka ishirini iliyopita, Bi. Rehema, mama mboga wa soko la Gikomba, alilazimika kusafiri hadi mjini kila mwisho wa mwezi ili kumtumia mama yake pesa kijijini Makueni. Safari hiyo ilimgharimu nauli, muda na hofu ya kuporwa njiani. Leo hii, anabofya vitufe vichache kwenye simu yake na pesa zinafika kijijini kabla hajamaliza kupanga nyanya zake.</p>
    <p style="margin:8px 0;">Huduma za pesa kwa simu zimebadilisha uchumi wa Kenya kwa kiasi kikubwa. Wafanyabiashara wadogo hupokea malipo bila kubeba pesa taslimu, wakulima hulipwa mazao yao papo hapo, na wanafunzi hulipiwa karo bila wazazi kupanga foleni benki. Wataalamu wa uchumi wanaamini kuwa huduma hizi zimewasaidia mamilioni ya watu waliokuwa nje ya mfumo rasmi wa benki.</p>
    <p style="margin:8px 0;">Hata hivyo, kila chenye faida hakikosi changamoto. Matapeli wamebuni mbinu za kuwahadaa watu, kwa mfano kutuma ujumbe wa uongo unaodai kuwa pesa zimetumwa kimakosa na kumtaka mpokeaji azirudishe. Wengine hujifanya maafisa wa kampuni za simu na kuomba namba ya siri. Aidha, mikopo ya haraka kupitia simu imewatumbukiza baadhi ya vijana katika madeni wasiyoweza kulipa.</p>
    <p style="margin:8px 0;">Kwa maoni yangu, suluhisho si kuikataa teknolojia bali kujielimisha. Mtumiaji anapaswa kutotoa namba yake ya siri kwa mtu yeyote, kuthibitisha kila ujumbe kwa kuangalia salio lake, na kukopa tu anapokuwa na mpango wa kulipa. Elimu ya fedha ianze shuleni ili kizazi kijacho kifaidike na teknolojia bila kuangamizwa nayo.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Kuchambua Makala</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kubaini wazo kuu la aya</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Eleza wazo kuu la aya ya tatu.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Sentensi ya kwanza: “kila chenye faida hakikosi changamoto”.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tafuta sentensi kuu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Inaonyesha kuwa sasa mwandishi anazungumzia changamoto.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Angalia mifano</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Utapeli wa ujumbe, kujifanya maafisa, mikopo ya haraka.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Fupisha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Huduma za pesa kwa simu zina changamoto za utapeli na madeni.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Huduma za pesa kwa simu zimeleta changamoto kama utapeli na madeni ya mikopo ya haraka.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutaja mfano mmoja tu (k.m. matapeli) badala ya wazo linalojumuisha yote.</p>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Ukweli au maoni?</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Bainisha kama kauli hizi ni ukweli au maoni: (a) Wakulima hulipwa mazao yao papo hapo. (b) Kwa maoni yangu, suluhisho si kuikataa teknolojia.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Ukweli unaweza kuthibitishwa; maoni ni mtazamo binafsi, mara nyingi na viashiria kama “kwa maoni yangu”, “naamini”.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: (a)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Inaweza kuthibitishwa kwa kuwauliza wakulima — ukweli.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: (b)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ina kiashiria “kwa maoni yangu” — maoni.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> (a) Ukweli; (b) Maoni.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kudhani kila kauli iliyoandikwa gazetini ni ukweli.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Kwa nini Bi. Rehema alihofia safari ya mjini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Aliogopa kuporwa njiani, pamoja na gharama ya nauli na muda.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Kisia maana ya “taslimu” kutokana na muktadha.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Pesa halisi (noti na sarafu), si za kidijitali.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Taja mbinu moja ya matapeli iliyotajwa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ujumbe wa uongo wa pesa zilizotumwa kimakosa; kujifanya maafisa wa kampuni.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Wazo kuu la aya ya kwanza ni lipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Linganisha zamani na leo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huduma za pesa kwa simu zimerahisisha kutuma pesa ikilinganishwa na zamani.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> “Wataalamu wa uchumi wanaamini…” — ni ukweli au maoni?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Angalia kitenzi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ni maoni ya wataalamu (kitenzi “wanaamini”), ingawa yanaweza kuungwa mkono na takwimu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Methali “kila chenye faida hakikosi changamoto” inafanya kazi gani katika aya?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Linganisha aya ya pili na ya tatu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Inabadilisha mwelekeo kutoka faida hadi changamoto.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Soma makala moja ya gazeti la Kiswahili. Andika wazo kuu la kila aya kwa sentensi moja.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Kila mmoja aandike kauli tatu za ukweli na tatu za maoni kutoka makala; mwenzake azitofautishe.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Tengenezeni bango la “Mikakati ya Kusoma: Kabla, Wakati, Baada” kwa ajili ya darasa.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta ujumbe wa utapeli wa simu uliowahi kuripotiwa kwenye tovuti rasmi (k.v. ya Mamlaka ya Mawasiliano au benki). Bainisha dalili za utapeli. Usibofye viungo vya ujumbe wowote wa kutiliwa shaka.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja mkakati mmoja wa kabla ya kusoma.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kubashiri kwa kutumia anwani au picha; kudurusu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Sentensi kuu ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sentensi inayobeba wazo kuu la aya.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja faida tatu za huduma za pesa kwa simu kwa mujibu wa makala.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wafanyabiashara hupokea malipo bila pesa taslimu; wakulima hulipwa papo hapo; karo hulipwa bila kupanga foleni benki.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza maana ya “kuwatumbukiza katika madeni”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuwasababishia kuingia katika madeni makubwa bila kujua.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Mwandishi ana msimamo gani kuhusu teknolojia ya pesa kwa simu? Thibitisha.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Anaiunga mkono lakini kwa tahadhari: anasema suluhisho si kuikataa bali kujielimisha (aya ya nne).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Umepokea ujumbe: “Nimekutumia Sh. 2,000 kimakosa, tafadhali nirudishie.” Utafanya nini kwa mujibu wa makala?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Nitaangalia salio langu kwanza ili kuthibitisha; kama pesa hazikuingia sitatuma chochote, na nitaripoti namba hiyo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini mwandishi alianza na hadithi ya Bi. Rehema badala ya takwimu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hadithi ya mtu halisi huvutia na kumfanya msomaji ahusike kihisia, kisha takwimu na hoja hufuata.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Kusoma kwa kina kunahusisha mikakati ya kabla (kubashiri, kudurusu), wakati (kubaini sentensi kuu, kukisia maana, kutofautisha ukweli na maoni) na baada ya kusoma (kufupisha na kutathmini).</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wazo kuu mara nyingi liko katika sentensi kuu.</li>
    <li>Ukweli unathibitishika; maoni ni mtazamo.</li>
    <li>Muktadha husaidia kukisia maana ya maneno mapya.</li>
    <li>Msomaji makini hutathmini msimamo wa mwandishi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Viashiria vya maoni: “kwa maoni yangu”, “naamini”, “inaonekana”.</li>
    <li>Soma swali kabla ya kusoma matini mara ya pili.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kusoma bila kusudi.</li>
    <li>Kukubali kila kauli kama ukweli.</li>
    <li>Kuruka maneno mapya bila kukisia maana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Swali la msamiati: tumia muktadha na utoe maana inayofaa sentensi.</li>
    <li>Swali la msimamo wa mwandishi: thibitisha kwa kurejelea aya.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutofautisha ukweli na maoni.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujifunza kujifunza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutumia mikakati ya kusoma.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutambua utapeli wa mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu ya fedha</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usalama mtandaoni</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Kusoma kwa kina hukulinda dhidi ya mikataba ya mikopo isiyoeleweka, ujumbe wa utapeli na habari za uongo.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Soma makala ya gazeti kuhusu teknolojia. Andika kauli mbili za ukweli na mbili za maoni.</li>
    <li>Kisia maana ya maneno matano mapya kutokana na muktadha.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni mkakati upi wa kusoma utakaonisaidia zaidi?</li>
    <li>Nimewahi kudanganywa na ujumbe au habari niliyoisoma haraka?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudurusu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma kwa haraka.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sentensi kuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sentensi ya wazo kuu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muktadha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya neno.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Maoni</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtazamo wa mtu binafsi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ukweli</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo linaloweza kuthibitishwa.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia mikakati ya kabla, wakati na baada ya kusoma.</p>
    <p style="margin:6px 0;">☐ Naweza kubaini wazo kuu la aya.</p>
    <p style="margin:6px 0;">☐ Naweza kutofautisha ukweli na maoni.</p>
    <p style="margin:6px 0;">☐ Naweza kukisia maana kutokana na muktadha.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kudurusu ni:',
            options: ['Kusoma kwa sauti', 'Kuandika muhtasari', 'Kukariri', 'Kusoma kwa haraka kupata picha ya jumla'],
            correct: 3,
            explanation: 'Kudurusu ni usomaji wa haraka kabla ya kusoma kwa kina.'
        },
        {
            question: 'Wazo kuu la aya mara nyingi hupatikana katika:',
            options: ['Kichwa cha gazeti', 'Jina la mwandishi', 'Tarehe', 'Sentensi kuu'],
            correct: 3,
            explanation: 'Sentensi kuu hubeba wazo linaloelezwa na aya nzima.'
        },
        {
            question: 'Kauli ipi ni maoni?',
            options: ['Bi. Rehema huuza mboga Gikomba', 'Mama yake anaishi Makueni', 'Kwa maoni yangu, elimu ya fedha ianze shuleni', 'Wakulima hulipwa kwa simu'],
            correct: 2,
            explanation: 'Kiashiria “kwa maoni yangu” huonyesha mtazamo wa mwandishi.'
        },
        {
            question: 'Kwa mujibu wa makala, matapeli hujifanya:',
            options: ['Maafisa wa kampuni za simu', 'Walimu', 'Madaktari', 'Wakulima'],
            correct: 0,
            explanation: 'Makala inataja matapeli wanaojifanya maafisa na kuomba namba ya siri.'
        },
        {
            question: 'Neno “taslimu” linamaanisha:',
            options: ['Pesa za simu', 'Pesa halisi za noti na sarafu', 'Deni', 'Mshahara'],
            correct: 1,
            explanation: 'Muktadha unalinganisha pesa taslimu na malipo ya simu.'
        },
        {
            question: 'Msimamo wa mwandishi ni:',
            options: ['Tuachane na simu', 'Tujielimishe tusikatae teknolojia', 'Tukope kila mara', 'Benki zifungwe'],
            correct: 1,
            explanation: 'Aya ya mwisho inasema suluhisho ni kujielimisha.'
        },
        {
            question: 'Mkakati wa kubashiri hutumika:',
            options: ['Kabla ya kusoma', 'Baada ya mtihani', 'Wakati wa kuandika', 'Hautumiki kamwe'],
            correct: 0,
            explanation: 'Msomaji hubashiri kwa anwani na picha kabla ya kusoma.'
        },
        {
            question: 'Kwa nini msomaji atofautishe ukweli na maoni?',
            options: ['Ili asome haraka tu', 'Ili akariri', 'Ili asidanganywe na kutathmini hoja', 'Haina umuhimu'],
            correct: 2,
            explanation: 'Kutofautisha hulinda msomaji dhidi ya kupotoshwa.'
        }
    ]
},
{
    name: '1.2.2 Ufahamu wa Kusoma: Kujibu Maswali ya Ufahamu',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.2 Kusoma: Ufahamu wa Kusoma</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.2: Kujibu Maswali ya Ufahamu</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza aina za maswali ya ufahamu — ya moja kwa moja, ya kukisia, ya msamiati, ya maoni na ya lugha — na mbinu za kuyajibu kwa sentensi kamili na kwa usahihi.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Maswali ya ufahamu hupima jinsi unavyoelewa matini. Kujua aina ya swali hukusaidia kujua mahali pa kutafuta jibu na jinsi ya kuliandika ili upate alama kamili.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani ya kitaifa</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📋 Fomu za maombi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Mahojiano ya kazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📄 Maagizo ya dawa</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏦 Masharti ya mikopo</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Utafiti</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kubaini aina za maswali ya ufahamu.</li>
    <li>Kujibu maswali ya moja kwa moja na ya kukisia kwa usahihi.</li>
    <li>Kueleza maana ya msamiati kulingana na muktadha.</li>
    <li>Kutoa maoni yenye sababu.</li>
    <li>Kuandika majibu kwa sentensi kamili.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Tunawezaje kujibu maswali ya ufahamu kwa usahihi na ukamilifu?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.2.1 — mikakati ya kusoma kwa kina.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Maswali ya ufahamu ni ya aina tofauti. Mengine yana majibu <strong>moja kwa moja</strong> katika matini; mengine yanahitaji <strong>kukisia</strong> (kusoma kati ya mistari); mengine huuliza <strong>maana ya msamiati</strong>; na mengine hutaka <strong>maoni yako</strong> yenye sababu.</p>
    <p>Kanuni kuu: soma swali kwa makini, tafuta sehemu husika ya matini, jibu kwa <strong>sentensi kamili</strong> kwa maneno yako, na zingatia alama za swali — swali la alama mbili huhitaji hoja mbili.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Soma swali → tafuta aya → jibu kwa maneno yako → kagua alama.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukisia</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufikia hitimisho kutokana na vidokezo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Tunakisia kuwa Bi. Rehema ni mchapakazi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kunukuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchukua maneno halisi ya matini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Usinukuu aya nzima kama jibu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Thibitisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa ushahidi kutoka matini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Thibitisha jibu lako kwa kurejelea aya ya pili.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Alama</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pointi zinazotolewa kwa jibu sahihi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Swali la alama mbili linahitaji hoja mbili.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Aina za Maswali</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aina</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano (makala ya 1.2.1)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mbinu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moja kwa moja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mama yake Bi. Rehema anaishi wapi?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tafuta jibu katika matini.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ya kukisia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bi. Rehema ni mtu wa aina gani?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumia vidokezo na utoe ushahidi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ya msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eleza maana ya “kuwahadaa”.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumia muktadha; jibu liingie kwenye sentensi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ya maoni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Je, unakubaliana na mwandishi? Eleza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Toa msimamo + sababu mbili.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ya lugha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Andika “Matapeli wamebuni mbinu” kwa umoja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zingatia kanuni za sarufi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ya anwani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ipe makala anwani nyingine.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fupi, inayoakisi wazo kuu.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Mifano ya Kazi</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Swali la kukisia</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Ni sifa gani ya Bi. Rehema inayojitokeza katika aya ya kwanza? Thibitisha. (alama 2)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Hasafiri kwa ajili yake bali kumtumia mama yake pesa.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Bainisha sifa</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Anawajali wazazi wake (mwenye mapenzi kwa familia).</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Toa ushahidi</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Kila mwezi alisafiri mjini kumtumia mama yake pesa licha ya gharama na hatari.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Bi. Rehema anamjali mama yake, kwa sababu kila mwisho wa mwezi alisafiri mjini kumtumia pesa licha ya gharama ya nauli na hofu ya kuporwa.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutaja sifa bila ushahidi, hivyo kupoteza alama moja.</p>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Swali la maoni</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Je, unakubaliana kuwa elimu ya fedha ianze shuleni? Toa sababu mbili. (alama 3)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Alama 3: msimamo (1) + sababu mbili (2).</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Msimamo</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ndiyo, nakubaliana.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Sababu ya kwanza</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Wanafunzi wengi hutumia simu na huduma za pesa mapema.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Sababu ya pili</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Itawakinga vijana dhidi ya madeni ya mikopo ya haraka na matapeli.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Ndiyo, nakubaliana. Kwanza, wanafunzi wengi huanza kutumia huduma za pesa kwa simu mapema. Pili, elimu hii itawakinga dhidi ya madeni na utapeli.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutoa msimamo bila sababu au kutoa sababu moja tu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Swali la alama mbili linahitaji nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hoja au vipengele viwili.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Kwa nini tusinukuu aya nzima?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Inaonyesha kutoelewa; jibu linapaswa kuwa mahususi na kwa maneno yako.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Jibu la msamiati liandikwe vipi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa maana inayofaa muktadha, ikiwezekana katika sentensi.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Taja njia mbili za matapeli kwa mujibu wa makala. (alama 2)</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya tatu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutuma ujumbe wa uongo wa pesa zilizotumwa kimakosa; kujifanya maafisa wa kampuni na kuomba namba ya siri.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Eleza maana ya “papo hapo” kama ilivyotumika.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Wakulima hulipwa lini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mara moja, bila kuchelewa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Ipe makala anwani nyingine.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Iakisi faida na changamoto.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Teknolojia ya Pesa: Neema na Changamoto”.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Tunga maswali sita ya ufahamu (aina moja kila moja) kutoka makala ya 1.2.1 na uyajibu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Badilishaneni maswali mliyotunga na mjibu ya mwenzako; mkosoaneni kwa kigezo cha sentensi kamili.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Kila kikundi kichague makala ya gazeti na kiandae mtihani mdogo wa ufahamu wa alama 15 kwa kikundi kingine.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tumia programu ya kuchakata maneno kuandika majibu yako na kutumia kipengele cha kukagua tahajia — kisha kagua mwenyewe kwa makini kwa sababu programu haielewi Kiswahili kikamilifu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja aina nne za maswali ya ufahamu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Moja kwa moja, kukisia, msamiati, maoni (pia lugha na anwani).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Mama yake Bi. Rehema anaishi wapi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kijijini Makueni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Eleza changamoto mbili za huduma za pesa kwa simu. (alama 2)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Utapeli kupitia ujumbe wa uongo; madeni ya mikopo ya haraka.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Andika kwa umoja: “Wafanyabiashara wadogo hupokea malipo.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfanyabiashara mdogo hupokea malipo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini mwandishi anapendekeza mtu akope tu anapokuwa na mpango wa kulipa? (alama 2)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili asitumbukie katika madeni asiyoweza kulipa, kwa kuwa mikopo ya haraka imewaathiri vijana wengi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Rafiki yako anataka kuchukua mkopo wa simu kununua viatu vya bei ghali. Kwa kutumia hoja za makala, mshauri kwa sentensi tatu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Mikopo ya haraka imewatumbukiza vijana wengi katika madeni. Ukopaji ufanyike tu ukiwa na mpango wa kulipa. Ni bora kuweka akiba kidogo kidogo kisha ununue.”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini maswali ya maoni huwa na alama zaidi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Yanahitaji msimamo pamoja na sababu na uchambuzi, si kunakili tu.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Maswali ya ufahamu ni ya moja kwa moja, kukisia, msamiati, maoni, lugha na anwani. Jibu kwa sentensi kamili kwa maneno yako, thibitisha kwa ushahidi kutoka matini na zingatia idadi ya alama.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Bainisha aina ya swali kwanza.</li>
    <li>Alama huonyesha idadi ya hoja.</li>
    <li>Thibitisha majibu ya kukisia.</li>
    <li>Maoni = msimamo + sababu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Usinakili aya nzima.</li>
    <li>Jibu swali lililoulizwa, si jingine.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Majibu ya neno moja yasiyo sentensi kamili.</li>
    <li>Kujibu kwa maoni swali linalohitaji ukweli kutoka matini.</li>
    <li>Kupuuza idadi ya alama.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Andika kwa nathari isipokuwa umeagizwa vinginevyo.</li>
    <li>Jibu la msamiati likae vizuri katika sentensi ya matini.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika majibu wazi na kamili.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia na kutoa maoni yenye sababu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujifunza kujifunza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujitathmini kwa kutunga maswali.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Bidii</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu ya fedha</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Kuelewa maswali na masharti ni muhimu katika fomu za kazi, mikataba na maagizo ya dawa.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Soma matini fupi ya chaguo lako na utunge maswali matano ya aina tofauti pamoja na majibu.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni aina gani ya swali ninayoipata ngumu zaidi? Kwa nini?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukisia</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufikia hitimisho kwa vidokezo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kunukuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchukua maneno halisi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuthibitisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa ushahidi.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kubaini aina za maswali.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu kwa sentensi kamili.</p>
    <p style="margin:6px 0;">☐ Naweza kuthibitisha majibu yangu.</p>
    <p style="margin:6px 0;">☐ Naweza kutoa maoni yenye sababu.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Swali la kukisia linahitaji:',
            options: ['Kunakili sentensi moja', 'Kutumia vidokezo na kutoa ushahidi', 'Kuandika maoni bila sababu', 'Kuruka matini'],
            correct: 1,
            explanation: 'Majibu ya kukisia hutokana na vidokezo na huthibitishwa kwa ushahidi.'
        },
        {
            question: 'Swali la alama tatu la maoni linahitaji:',
            options: ['Neno moja', 'Aya nzima iliyonakiliwa', 'Picha', 'Msimamo na sababu mbili'],
            correct: 3,
            explanation: 'Kila alama huwakilisha kipengele kimoja: msimamo na sababu mbili.'
        },
        {
            question: 'Mama yake Bi. Rehema anaishi:',
            options: ['Gikomba', 'Nairobi mjini', 'Makueni', 'Mombasa'],
            correct: 2,
            explanation: 'Aya ya kwanza inasema mama yake yuko kijijini Makueni.'
        },
        {
            question: '“Papo hapo” inamaanisha:',
            options: ['Mara moja', 'Baadaye sana', 'Mara chache', 'Kesho'],
            correct: 0,
            explanation: 'Wakulima hulipwa bila kuchelewa.'
        },
        {
            question: 'Kosa la kawaida katika kujibu ufahamu ni:',
            options: ['Kutumia sentensi kamili', 'Kuthibitisha jibu', 'Kusoma swali kwa makini', 'Kunakili aya nzima'],
            correct: 3,
            explanation: 'Kunakili aya nzima huonyesha kutoelewa swali.'
        },
        {
            question: 'Anwani bora mbadala inapaswa:',
            options: ['Kuwa ndefu sana', 'Kuakisi wazo kuu', 'Kutaja mtu mmoja tu bila sababu', 'Kuwa sentensi ya maswali kumi'],
            correct: 1,
            explanation: 'Anwani fupi inayobeba wazo kuu ndiyo bora.'
        },
        {
            question: '“Mfanyabiashara mdogo hupokea malipo” kwa wingi ni:',
            options: ['Wafanyabiashara wadogo hupokea malipo', 'Mfanyabiashara wadogo hupokea malipo', 'Wafanyabiashara mdogo hupokea malipo', 'Wafanyabiashara wadogo hupokei malipo'],
            correct: 0,
            explanation: 'Nomino ya ngeli ya A-WA na kivumishi chake hubadilika kuwa wa- na wa-.'
        },
        {
            question: 'Swali la msamiati hujibiwa kwa:',
            options: ['Maana yoyote ya kamusi', 'Kunakili neno lenyewe', 'Maana inayofaa muktadha', 'Kutafsiri kwa Kiingereza'],
            correct: 2,
            explanation: 'Maana sahihi ni ile inayolingana na jinsi neno lilivyotumika.'
        }
    ]
},
{
    name: '1.2.3 Ufahamu wa Kusoma: Kuandika Muhtasari',
    type: 'lesson',
    duration: '40 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.2 Kusoma: Ufahamu wa Kusoma</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.3: Kuandika Muhtasari</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza maana ya muhtasari, hatua za kuuandika, jinsi ya kubaini hoja kuu, kuziandika kwa maneno yetu wenyewe na kuzingatia idadi ya maneno.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Muhtasari hukusaidia kusoma kwa ajili ya mitihani, kuandika ripoti fupi, kuwasilisha habari kwa wakubwa wako kazini na hata kufupisha habari ndefu za mtandaoni kwa wenzako.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Ripoti za kazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Habari fupi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Madokezo ya masomo</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Ujumbe mfupi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Kumbukumbu za mikutano</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kueleza maana na umuhimu wa muhtasari.</li>
    <li>Kubaini hoja kuu za aya au makala.</li>
    <li>Kuandika muhtasari kwa maneno yake mwenyewe.</li>
    <li>Kuzingatia idadi ya maneno iliyotolewa.</li>
    <li>Kuandika rasimu na nakala safi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Tunawezaje kufupisha matini bila kupoteza hoja zake kuu?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.2.1 na 1.2.2 — kubaini wazo kuu na kujibu maswali.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Muhtasari</strong> ni ufupisho wa matini unaobeba hoja kuu tu, ukiandikwa kwa maneno ya mwandishi wa muhtasari mwenyewe. Mifano, maelezo marefu, takriri na maoni yasiyo ya lazima huachwa.</p>
    <p>Hatua: soma matini yote; dokeza hoja kuu kwa kila aya; andika <strong>rasimu</strong> kwa maneno yako; hesabu maneno; kisha andika <strong>nakala safi</strong> kwa aya moja, isipokuwa umeagizwa vinginevyo.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Muhtasari = hoja kuu + maneno yako + idadi ya maneno inayotakiwa.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ufupisho wa hoja kuu za matini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Andika muhtasari wa aya ya pili kwa maneno 40.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Rasimu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maandishi ya kwanza kabla ya kuboreshwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Rasimu yangu ilikuwa na maneno 60.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Nakala safi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maandishi ya mwisho yaliyorekebishwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Nakala safi ina maneno 40.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kufupisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupunguza urefu bila kupoteza maana.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alifupisha makala ya kurasa tatu.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Hatua za Kuandika Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hatua</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maelezo</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Soma swali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ni sehemu gani? Maneno mangapi? Hoja za nini?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Soma matini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soma mara mbili ukilenga swali.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Dokeza hoja kuu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pigia mstari au andika hoja; acha mifano na takriri.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Andika rasimu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa maneno yako, kwa nathari.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5. Hesabu na rekebisha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ondoa maneno ya ziada; usizidi kikomo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6. Nakala safi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aya moja yenye mtiririko mzuri.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Mfano wa Kazi</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Muhtasari wa aya ya tatu (maneno 30–35)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Fupisha changamoto zinazotokana na huduma za pesa kwa simu kama zilivyoelezwa katika aya ya tatu ya “Pesa Mfukoni, Simu Mkononi”.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Hoja kuu: (1) ujumbe wa uongo, (2) kujifanya maafisa, (3) mikopo ya haraka inayoleta madeni.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Dokeza hoja</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1. Ujumbe wa uongo wa pesa zilizotumwa kimakosa. 2. Matapeli kujifanya maafisa ili kupata namba ya siri. 3. Mikopo ya haraka imesababisha madeni kwa vijana.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Andika rasimu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Huduma za pesa kwa simu zina changamoto. Matapeli hutuma ujumbe wa uongo wa pesa zilizotumwa kimakosa na wengine hujifanya maafisa wa kampuni ili kupata namba za siri. Pia, mikopo ya haraka imewaingiza vijana katika madeni makubwa.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Hesabu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Takriban maneno 34 — ndani ya kikomo.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Huduma za pesa kwa simu zina changamoto. Matapeli hutuma ujumbe wa uongo wa pesa zilizotumwa kimakosa na wengine hujifanya maafisa wa kampuni ili kupata namba za siri. Pia, mikopo ya haraka imewaingiza vijana katika madeni makubwa.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kunakili sentensi za makala neno kwa neno au kuongeza maoni yako binafsi.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Taja vitu viwili vinavyoachwa katika muhtasari.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mifano, takriri, maelezo marefu, maoni yasiyo ya lazima.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Muhtasari huandikwa kwa mtindo gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa nathari, aya moja, isipokuwa umeagizwa vinginevyo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Kwa nini tuandike rasimu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kurekebisha na kuhakikisha hatuzidi idadi ya maneno.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Muhtasari katika Maisha ya Kidijitali</h3>
    <p>Mara nyingi tunatumia ujumbe mrefu wa mitandao au barua pepe. Kufupisha habari kabla ya kuzituma huwasaidia wapokeaji kuelewa haraka. Hata hivyo, unapotumia programu za kufupisha maandishi kiotomatiki, kagua kila mara: zinaweza kuacha hoja muhimu au kubadilisha maana.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Dokeza hoja kuu za aya ya pili ya makala.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Kuna hoja nne.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wafanyabiashara hupokea malipo bila pesa taslimu; wakulima hulipwa papo hapo; karo hulipwa bila foleni; mamilioni wamejumuishwa katika mfumo wa fedha.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Ni kipi kati ya hivi hakifai katika muhtasari wa aya ya kwanza: “nyanya zake”, “kutuma pesa kumerahisishwa”?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Ipi ni hoja kuu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Nyanya zake” — ni maelezo madogo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Muhtasari umetakiwa kuwa maneno 50, wako una 72. Utafanya nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria hatua ya 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuondoa mifano na maneno ya ziada, kuunganisha hoja zinazofanana.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika muhtasari wa makala nzima “Pesa Mfukoni, Simu Mkononi” kwa maneno 60–70.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Linganisha muhtasari wako na wa mwenzako. Je, hoja zote kuu zimo? Je, kuna maneno yaliyonakiliwa?</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Kila kikundi kifupishe habari moja ya redio au runinga kwa maneno 50 na kusoma kwa darasa.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Andika muhtasari kama ujumbe mfupi wa simu (herufi zisizozidi 160) unaomweleza mzazi hatari ya utapeli wa pesa kwa simu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Muhtasari ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ufupisho wa hoja kuu za matini kwa maneno ya mwandishi wa muhtasari mwenyewe.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja hatua mbili za kuandika muhtasari.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusoma swali na matini; kudokeza hoja; kuandika rasimu; kuhesabu maneno; kuandika nakala safi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Fupisha mapendekezo ya mwandishi katika aya ya nne (maneno 30).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Mwandishi anapendekeza watumiaji wasitoe namba za siri, wathibitishe ujumbe kwa kuangalia salio, wakope wakiwa na mpango wa kulipa, na elimu ya fedha ianzishwe shuleni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza tofauti kati ya muhtasari na kujibu maswali ya ufahamu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Muhtasari hufupisha hoja kuu zote za sehemu fulani kwa idadi ya maneno; maswali ya ufahamu hulenga habari mahususi au maoni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Mkutano wa klabu umechukua saa mbili. Eleza jinsi utakavyoandaa muhtasari wa maazimio kwa wanachama wasiohudhuria.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuandika maazimio makuu tu, kwa sentensi fupi, kuacha mijadala mirefu, na kutaja hatua na wahusika.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Kwa nini kunakili sentensi za matini katika muhtasari hupunguza alama?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huonyesha kuwa mwanafunzi hajaelewa na hajaonyesha uwezo wa kuwasilisha kwa maneno yake.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Muhtasari ni ufupisho wa hoja kuu kwa maneno yako mwenyewe. Soma swali na matini, dokeza hoja kuu, andika rasimu, hesabu maneno, kisha andika nakala safi ya aya moja.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hoja kuu tu — acha mifano na takriri.</li>
    <li>Tumia maneno yako.</li>
    <li>Zingatia idadi ya maneno.</li>
    <li>Rasimu kwanza, nakala safi baadaye.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Usiongeze maoni yako.</li>
    <li>Muhtasari huandikwa kwa nathari.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kunakili sentensi nzima kutoka matini.</li>
    <li>Kuzidi idadi ya maneno.</li>
    <li>Kuacha hoja kuu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Onyesha rasimu na nakala safi ukitakiwa.</li>
    <li>Hoja moja kuu huwa alama moja.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwasilisha habari kwa ufupi na kwa uwazi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua hoja kuu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukagua muhtasari wa programu za kiotomatiki.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uadilifu (kutonakili)</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Bidii</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu ya fedha</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usalama mtandaoni</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wafanyakazi huandika muhtasari wa ripoti na mikutano kila siku; ni stadi muhimu ya ajira.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika muhtasari wa maneno 50 wa habari moja ya gazeti.</li>
    <li>Fupisha somo moja la Kiswahili kwa madokezo ya maneno 80.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni sehemu ipi ya kuandika muhtasari inayonipa shida?</li>
    <li>Nitatumiaje muhtasari katika masomo mengine?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ufupisho wa hoja kuu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Rasimu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maandishi ya kwanza.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Nakala safi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maandishi ya mwisho.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudokeza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika hoja kwa ufupi.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kubaini hoja kuu.</p>
    <p style="margin:6px 0;">☐ Naweza kuandika kwa maneno yangu.</p>
    <p style="margin:6px 0;">☐ Naweza kuzingatia idadi ya maneno.</p>
    <p style="margin:6px 0;">☐ Naweza kuandika rasimu na nakala safi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Muhtasari ni:',
            options: ['Nakala kamili ya matini', 'Maoni yako kuhusu matini', 'Ufupisho wa hoja kuu kwa maneno yako', 'Orodha ya maneno magumu'],
            correct: 2,
            explanation: 'Muhtasari hubeba hoja kuu tu, zikiandikwa upya kwa maneno yako.'
        },
        {
            question: 'Katika muhtasari, mifano:',
            options: ['Huongezwa', 'Hurudiwa', 'Hupigiwa mstari', 'Huachwa'],
            correct: 3,
            explanation: 'Mifano ni maelezo ya ziada yasiyo hoja kuu.'
        },
        {
            question: 'Hatua ya kwanza ya kuandika muhtasari ni:',
            options: ['Kuandika nakala safi', 'Kusoma swali kwa makini', 'Kuhesabu maneno', 'Kuongeza maoni'],
            correct: 1,
            explanation: 'Swali huonyesha sehemu na idadi ya maneno inayotakiwa.'
        },
        {
            question: 'Muhtasari wako una maneno 80 badala ya 50. Ufanye nini?',
            options: ['Uondoe maneno na mifano ya ziada', 'Uache hivyo', 'Uongeze maneno', 'Uandike kwa vitone'],
            correct: 0,
            explanation: 'Kuzidi kikomo hupunguza alama; fupisha zaidi.'
        },
        {
            question: 'Muhtasari huandikwa kwa:',
            options: ['Nathari, aya moja', 'Shairi', 'Mazungumzo', 'Jedwali pekee'],
            correct: 0,
            explanation: 'Isipokuwa umeagizwa vinginevyo, muhtasari ni aya moja ya nathari.'
        },
        {
            question: 'Kunakili sentensi za matini katika muhtasari:',
            options: ['Huongeza alama', 'Hupunguza alama', 'Hakuna tatizo', 'Ni lazima'],
            correct: 1,
            explanation: 'Kunakili huonyesha kutoelewa; muhtasari hutumia maneno yako.'
        },
        {
            question: 'Programu ya kufupisha maandishi kiotomatiki:',
            options: ['Inaaminika kikamilifu', 'Haipaswi kutumiwa kamwe', 'Huandika Kiswahili bora kuliko binadamu', 'Ikaguliwe kwa sababu inaweza kuacha hoja'],
            correct: 3,
            explanation: 'Matokeo ya kiotomatiki yanaweza kuacha hoja au kubadilisha maana.'
        },
        {
            question: 'Rasimu huandikwa ili:',
            options: ['Kuwasilishwa peke yake', 'Kuongeza maneno', 'Kurekebisha kabla ya nakala safi', 'Kunakili matini'],
            correct: 2,
            explanation: 'Rasimu hutoa nafasi ya kurekebisha na kuhesabu maneno.'
        }
    ]
},
{
    name: '1.2 Zoezi la Tathmini: Ufahamu wa Kusoma',
    type: 'lesson',
    duration: '30 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.2 Kusoma: Ufahamu wa Kusoma</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Ufahamu wa Kusoma</h2>
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
    <li>Mikakati ya kusoma kwa kina</li>
    <li>Ukweli na maoni</li>
    <li>Aina za maswali ya ufahamu</li>
    <li>Msamiati kwa muktadha</li>
    <li>Muhtasari</li>
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
    <div>Rejelea makala “Pesa Mfukoni, Simu Mkononi” inapohitajika.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mkakati wa wakati wa kusoma ni:',
            options: ['Kubashiri kwa anwani', 'Kubaini sentensi kuu', 'Kuandika nakala safi', 'Kudurusu kabla ya kuanza'],
            correct: 1,
            explanation: 'Kubaini sentensi kuu hufanyika wakati wa kusoma kila aya.'
        },
        {
            question: 'Kiashiria cha maoni ni:',
            options: ['“Mwaka 2007…”', '“Mji wa Nairobi…”', '“Kilo kumi…”', '“Naamini kwamba…”'],
            correct: 3,
            explanation: 'Kitenzi “naamini” huonyesha mtazamo binafsi.'
        },
        {
            question: 'Mikopo ya haraka imesababisha:',
            options: ['Madeni kwa baadhi ya vijana', 'Utajiri kwa wote', 'Kufungwa kwa masoko', 'Kupanda kwa karo'],
            correct: 0,
            explanation: 'Aya ya tatu inataja vijana kutumbukia katika madeni.'
        },
        {
            question: 'Swali “Bi. Rehema ni mtu wa aina gani?” ni la:',
            options: ['Moja kwa moja', 'Lugha', 'Kukisia', 'Anwani'],
            correct: 2,
            explanation: 'Sifa zake hazitajwi wazi; zinakisiwa kutokana na matendo yake.'
        },
        {
            question: 'Swali la alama mbili linahitaji:',
            options: ['Hoja tano', 'Hoja mbili', 'Neno moja', 'Aya tatu'],
            correct: 1,
            explanation: 'Kila hoja hupata alama moja.'
        },
        {
            question: 'Katika muhtasari, mtu:',
            options: ['Hunakili matini', 'Huongeza mifano mipya', 'Hutumia maneno yake mwenyewe', 'Huandika shairi'],
            correct: 2,
            explanation: 'Kuandika upya kwa maneno yako huonyesha kuelewa.'
        },
        {
            question: '“Kuhadaa” linamaanisha:',
            options: ['Kudanganya kwa ujanja', 'Kusaidia', 'Kulipa deni', 'Kuhifadhi'],
            correct: 0,
            explanation: 'Muktadha wa matapeli unaonyesha maana ya kudanganya.'
        },
        {
            question: 'Ili kuthibitisha ujumbe wa pesa “zilizotumwa kimakosa”, mtu:',
            options: ['Arudishe pesa mara moja', 'Atoe namba ya siri', 'Aangalie salio lake', 'Afute simu'],
            correct: 2,
            explanation: 'Makala inashauri kuthibitisha kwa kuangalia salio.'
        },
        {
            question: 'Rasimu ya muhtasari:',
            options: ['Ndiyo jibu la mwisho kila mara', 'Hurekebishwa kabla ya nakala safi', 'Haihitajiki kamwe', 'Huandikwa baada ya nakala safi'],
            correct: 1,
            explanation: 'Rasimu hutoa nafasi ya kuhariri na kuhesabu maneno.'
        },
        {
            question: 'Msimamo wa mwandishi wa makala ni:',
            options: ['Kuacha simu', 'Kuongeza mikopo', 'Kupiga marufuku pesa kwa simu', 'Kujielimisha badala ya kukataa teknolojia'],
            correct: 3,
            explanation: 'Aya ya mwisho inasisitiza elimu ya fedha.'
        }
    ]
},
{
    name: '1.2 Kazi ya Mradi: Jarida la Elimu ya Fedha za Kidijitali',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.2 Kusoma: Ufahamu wa Kusoma</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Jarida la Elimu ya Fedha za Kidijitali</h2>
    <p style="font-size:16px;">Katika vikundi, mtakusanya makala tatu fupi kuhusu matumizi salama ya huduma za fedha za kidijitali, kuandaa maswali ya ufahamu na muhtasari, na kutengeneza jarida dogo la darasa.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Shule inataka kuwaelimisha wanafunzi na wazazi kuhusu utapeli wa simu na mikopo ya haraka. Kikundi chenu kimepewa jukumu la kuandaa jarida la kurasa nne.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Taasisi za fedha hutumia majarida na vipeperushi kuelimisha wateja kuhusu usalama.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Tafuteni makala tatu fupi (magazeti, tovuti rasmi za benki au mamlaka ya mawasiliano).</li>
    <li>Tambueni wazo kuu la kila aya na mtofautishe ukweli na maoni.</li>
    <li>Andikeni muhtasari wa maneno 60 kwa kila makala.</li>
    <li>Tungeni maswali matano ya ufahamu (aina tofauti) kwa makala moja pamoja na majibu.</li>
    <li>Ongezeni ukurasa wa “Vidokezo vya Usalama” wenye hoja tano.</li>
    <li>Pambeni jarida kwa mkono au kwa tarakilishi na mliwasilishe darasani.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Jarida la kurasa nne</li>
    <li>Muhtasari mitatu</li>
    <li>Maswali matano na majibu</li>
    <li>Orodha ya vyanzo</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vyanzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vyanzo vitatu vya kuaminika vimetajwa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vyanzo vimetajwa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chanzo kimoja tu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna vyanzo</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muhtasari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja zote kuu kwa maneno yao</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja nyingi kuu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja chache; kunakili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kunakili kabisa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maswali ya ufahamu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina tano tofauti zenye majibu sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina nne</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina mbili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hakuna</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lugha na uwasilishaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi na ya kuvutia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa kadhaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa mengi</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Msinakili makala nzima; tajeni chanzo.<br>Msiweke namba halisi za simu za watu katika jarida.<br>Tumieni lugha rahisi kwa wazazi.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nimejifunza nini kuhusu usalama wa fedha za kidijitali?</li>
    <li>Kuandika muhtasari kulinisaidiaje kuelewa makala?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kila muhtasari katika jarida uwe na maneno:',
            options: ['60', '600', '6', '1,000'],
            correct: 0,
            explanation: 'Maelekezo yanataka muhtasari wa maneno 60 kwa kila makala.'
        },
        {
            question: 'Vyanzo vya makala vinapaswa kuwa:',
            options: ['Ujumbe wa WhatsApp usiojulikana', 'Uvumi', 'Vya kuaminika na vitajwe', 'Vya kubuni'],
            correct: 2,
            explanation: 'Vyanzo rasmi hulinda ukweli wa jarida.'
        },
        {
            question: 'Kwa nini msiweke namba halisi za simu za watu?',
            options: ['Kuokoa wino', 'Kwa sababu ni ndefu', 'Hakuna sababu', 'Kulinda faragha yao'],
            correct: 3,
            explanation: 'Kuchapisha taarifa binafsi bila idhini huhatarisha faragha.'
        },
        {
            question: 'Jarida lina kurasa ngapi?',
            options: ['Moja', 'Nne', 'Kumi', 'Ishirini'],
            correct: 1,
            explanation: 'Kazi inahitaji jarida la kurasa nne.'
        },
        {
            question: 'Maswali ya ufahamu katika jarida yawe ya:',
            options: ['Aina moja tu', 'Aina tano tofauti pamoja na majibu', 'Bila majibu', 'Kiingereza'],
            correct: 1,
            explanation: 'Kigezo kinatoa alama za juu kwa maswali ya aina tano tofauti yenye majibu sahihi.'
        }
    ]
},
{
    name: '1.2 Marudio: Ufahamu wa Kusoma',
    type: 'lesson',
    duration: '30 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #064e3b, #14532d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Teknolojia na Mawasiliano · Mada Ndogo 1.2 Kusoma: Ufahamu wa Kusoma</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Ufahamu wa Kusoma</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.2 kabla ya kuendelea.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">📖 Mikakati</p>
    <div>Kabla: bashiri, durusu. Wakati: sentensi kuu, muktadha, ukweli/maoni. Baada: fupisha na tathmini.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">⚖️ Ukweli na maoni</p>
    <div>Ukweli unathibitishika; maoni yana viashiria kama “naamini”, “kwa maoni yangu”.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">❓ Maswali</p>
    <div>Moja kwa moja, kukisia, msamiati, maoni, lugha, anwani. Alama = idadi ya hoja.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">✂️ Muhtasari</p>
    <div>Hoja kuu tu, kwa maneno yako, ndani ya idadi ya maneno, rasimu kisha nakala safi.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stadi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Fanya</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Usifanye</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soma kwa kusudi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma bila kufikiri</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sentensi kamili zenye ushahidi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Neno moja</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maana ya muktadha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maana yoyote ya kamusi</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muhtasari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja kuu, maneno yako</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kunakili na kuongeza maoni</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja mikakati miwili ya wakati wa kusoma.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kubaini sentensi kuu; kukisia maana kwa muktadha; kutofautisha ukweli na maoni.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Toa mfano wa kauli ya maoni kuhusu teknolojia.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Naamini simu zimeharibu adabu za vijana.”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Swali la maoni la alama 3 lijibiwe vipi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Msimamo mmoja na sababu mbili.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja vitu vitatu vinavyoachwa katika muhtasari.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mifano, takriri, maelezo marefu (na maoni ya mwandishi wa muhtasari).</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Msomaji makini hutumia mikakati kabla, wakati na baada ya kusoma.</li>
    <li>Majibu ya ufahamu ni sentensi kamili zenye ushahidi.</li>
    <li>Muhtasari hubeba hoja kuu kwa maneno yako.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kutumia mikakati ya kusoma.</p>
    <p style="margin:6px 0;">☐ Naweza kutofautisha ukweli na maoni.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu maswali ya aina zote.</p>
    <p style="margin:6px 0;">☐ Naweza kuandika muhtasari.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kubashiri hufanyika:',
            options: ['Baada ya muhtasari', 'Kabla ya kusoma', 'Wakati wa kuhesabu maneno', 'Kamwe'],
            correct: 1,
            explanation: 'Msomaji hubashiri kwa anwani na picha kabla ya kusoma.'
        },
        {
            question: 'Jibu la swali la kukisia linapaswa:',
            options: ['Kuwa neno moja', 'Kunakiliwa', 'Kubuniwa', 'Kuthibitishwa kwa ushahidi wa matini'],
            correct: 3,
            explanation: 'Ushahidi kutoka matini huthibitisha kukisia.'
        },
        {
            question: 'Muhtasari hauna:',
            options: ['Mifano na takriri', 'Hoja kuu', 'Maneno ya mwandishi wa muhtasari', 'Mtiririko'],
            correct: 0,
            explanation: 'Mifano na takriri huachwa ili kufupisha.'
        },
        {
            question: '“Takwimu zinaonyesha kuwa watu wengi hutumia pesa za simu” ni:',
            options: ['Maoni', 'Methali', 'Ukweli unaoweza kuthibitishwa', 'Swali la balagha'],
            correct: 2,
            explanation: 'Takwimu zinaweza kuthibitishwa kutoka vyanzo.'
        },
        {
            question: 'Maana ya msamiati katika ufahamu hutolewa kulingana na:',
            options: ['Maana yoyote ya kamusi', 'Tafsiri ya Kiingereza', 'Muktadha wa matini', 'Urefu wa neno'],
            correct: 2,
            explanation: 'Neno moja linaweza kuwa na maana kadhaa; muktadha huonyesha ile inayofaa.'
        }
    ]
}
],
          stats:{lessons:13,exercises:89,quizzes:14,projects:4,duration:'9 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Muundo sahihi wa hotuba ni:',
                  options: ['Mwili, salamu, hitimisho', 'Shukrani, utangulizi, mwili', 'Salamu, utangulizi, mwili, hitimisho, shukrani', 'Hitimisho, salamu, mwili'],
                  correct: 2,
                  explanation: 'Hotuba huanza kwa salamu na kutambua hadhira, na humalizika kwa hitimisho na shukrani.'
              },
              {
                  question: 'Hotuba ya mgombea anayeomba kura ni ya:',
                  options: ['Kuelimisha', 'Kushawishi', 'Kuomboleza', 'Sherehe'],
                  correct: 1,
                  explanation: 'Lengo la mgombea ni kuwafanya wasikilizaji wamchague, hivyo ni hotuba ya kushawishi.'
              },
              {
                  question: '“Je, tutaendelea kunyamaza?” ni mfano wa:',
                  options: ['Swali la balagha', 'Methali', 'Tashbihi', 'Takwimu'],
                  correct: 0,
                  explanation: 'Ni swali lisilohitaji jibu, linalotumiwa kufikirisha wasikilizaji.'
              },
              {
                  question: 'Vidokezo vya hotuba humsaidia mhutubu:',
                  options: ['Kukumbuka hoja huku akiwatazama wasikilizaji', 'Kusoma kila neno', 'Kuzidisha muda', 'Kuepuka hadhira'],
                  correct: 0,
                  explanation: 'Vidokezo vifupi hukumbusha hoja bila kumfunga mhutubu kwenye karatasi.'
              },
              {
                  question: 'Kiimbo ni:',
                  options: ['Idadi ya maneno', 'Kupanda na kushuka kwa sauti', 'Mavazi ya mhutubu', 'Urefu wa hotuba'],
                  correct: 1,
                  explanation: 'Kiimbo ni mabadiliko ya sauti yanayoonyesha maana na hisia.'
              },
              {
                  question: 'Kauli ipi ni maoni?',
                  options: ['Wakulima hulipwa kwa simu', 'Gikomba ni soko la Nairobi', 'Mama yake anaishi Makueni', 'Kwa maoni yangu, elimu ya fedha ianze shuleni'],
                  correct: 3,
                  explanation: 'Kiashiria “kwa maoni yangu” huonyesha mtazamo binafsi wa mwandishi.'
              },
              {
                  question: 'Wazo kuu la aya mara nyingi hupatikana katika:',
                  options: ['Tarehe ya makala', 'Sentensi kuu', 'Jina la mwandishi', 'Picha'],
                  correct: 1,
                  explanation: 'Sentensi kuu hubeba wazo linaloelezwa na aya nzima.'
              },
              {
                  question: 'Swali la maoni la alama tatu linahitaji:',
                  options: ['Neno moja', 'Aya iliyonakiliwa', 'Kichwa kipya', 'Msimamo na sababu mbili'],
                  correct: 3,
                  explanation: 'Kila alama huwakilisha kipengele: msimamo mmoja na sababu mbili.'
              },
              {
                  question: 'Katika muhtasari:',
                  options: ['Mifano huongezwa', 'Sentensi hunakiliwa', 'Hoja kuu huandikwa kwa maneno yako', 'Maoni yako huongezwa'],
                  correct: 2,
                  explanation: 'Muhtasari hubeba hoja kuu tu, zikiandikwa upya kwa maneno ya mwanafunzi.'
              },
              {
                  question: 'Ujumbe unadai umetumiwa pesa kimakosa. Hatua ya kwanza ni:',
                  options: ['Kurudisha pesa mara moja', 'Kutoa namba ya siri', 'Kuufuta bila kusoma', 'Kuangalia salio lako'],
                  correct: 3,
                  explanation: 'Kuangalia salio huthibitisha kama pesa ziliingia kweli kabla ya kuchukua hatua yoyote.'
              },
              {
                  question: 'Habari za hotuba zinapaswa kutoka:',
                  options: ['Vyanzo vya kuaminika', 'Uvumi', 'Ujumbe usiojulikana', 'Ndoto'],
                  correct: 0,
                  explanation: 'Vyanzo vya kuaminika hulinda ukweli na uaminifu wa mhutubu.'
              },
              {
                  question: 'Kosa la uwasilishaji wa hotuba ni:',
                  options: ['Kutabasamu', 'Kupunguza kasi kwenye hoja muhimu', 'Kutazama sakafu muda wote', 'Kutumia vidokezo'],
                  correct: 2,
                  explanation: 'Kutazama sakafu hupoteza mawasiliano na wasikilizaji.'
              }
          ]}
);