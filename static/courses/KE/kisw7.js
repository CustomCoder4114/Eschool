// Eschool course: Grade 7 Kiswahili (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'kiswahili-grade-7', name:'Grade 7 Kiswahili', code:'KSL 071', level:'grade-7', iconStyle:'fas', icon:'fa-language', color:'#9333ea',
          category:'Languages',
          description:'Kozi kamili ya Kiswahili cha Gredi ya 7 (CBC, Kenya): kusikiliza na kuzungumza, kusoma, kuandika na sarufi, kwa matini asilia, mifano ya hatua kwa hatua, maswali shirikishi na majaribio.',
          longDescription:'Kozi hii inafuata mtaala wa KICD wa Kiswahili cha Gredi ya 7 (Shule ya Junia). Mtaala umepangwa katika mada kumi na tano, kuanzia Usafi wa Kibinafsi, Lishe Bora na Uhuru wa Wanyama hadi Matumizi ya Pesa na Maadili ya Mtu Binafsi. Kila mada ina mada ndogo nne: Kusikiliza na Kuzungumza, Kusoma, Kuandika na Sarufi. Kila mada ndogo ina masomo matatu, Zoezi la Tathmini, Kazi ya Mradi na Marudio. Kila somo lina matokeo yanayotarajiwa, swali dadisi, maelezo ya mwalimu, msamiati, matini asilia za Kikenya, mifano ya hatua kwa hatua, maswali shirikishi, shughuli za kibinafsi, za wawili, za vikundi na za kidijitali, mazoezi ya viwango mbalimbali, umilisi wa CBC, maadili, masuala mtambuko, makosa ya kawaida, vidokezo vya mtihani, kazi ya nyumbani, tafakari, faharasa na jaribio la maswali kumi yenye maelezo.',
          modules:[
{
    name: '1.0 Usafi wa Kibinafsi — Utangulizi wa Mada',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Utangulizi wa Mada</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🗺️ Mada 1.0: Usafi wa Kibinafsi</h2>
    <p style="font-size:16px;">Karibu katika Kiswahili cha Gredi ya 7, mwaka wako wa kwanza katika Shule ya Junia. Mwaka huu utakuza stadi nne za lugha — kusikiliza na kuzungumza, kusoma, kuandika na sarufi — kupitia mada kumi na tano zinazohusu maisha yako ya kila siku.</p>
    <p style="font-size:16px;">Mada ya kwanza ni <strong>Usafi wa Kibinafsi</strong>: kuoga, kupiga mswaki, kunawa mikono, kukata kucha na kuvaa nguo safi. Utajifunza kusikiliza na kujibu mazungumzo, kusoma kifungu cha simulizi kwa ufahamu, kutumia herufi kubwa na kikomo, na kutambua nomino za pekee na za kawaida.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bbf7d0;">❓ Swali dadisi la mada:</strong> Tunawezaje kutumia Kiswahili kuhamasisha usafi wa kibinafsi?</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 Muhtasari wa Mada</h3>
    <p>Mtaala wa KICD wa Kiswahili cha Gredi ya 7 una mada kumi na tano. Kila mada ina mada ndogo nne: Kusikiliza na Kuzungumza, Kusoma, Kuandika na Sarufi.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mada</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jina la mada</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usafi wa Kibinafsi</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lishe Bora</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uhuru wa Wanyama</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina za Maliasili</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unyanyasaji wa Kijinsia</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usalama Shuleni</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuhudumia Jamii Shuleni</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ulaguzi wa Binadamu</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matumizi ya Vifaa vya Kidijitali katika Mawasiliano</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kijithamini</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Majukumu ya Watoto</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magonjwa Ambukizi</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utatuzi wa Mizozo</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">14.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matumizi ya Pesa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maadili ya Mtu Binafsi</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Kusikiliza na Kujibu: Mazungumzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na Kuzungumza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vipengele vya kuzingatia katika kusikiliza na kujibu mazungumzo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kudondoa habari mahususi, kupanga matukio, kutabiri, kufasiri na kueleza msamiati.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Viakifishi: Herufi Kubwa na Kikomo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matumizi ya herufi kubwa na kikomo (.) (kundi lijalo).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Aina za Nomino: Nomino za Pekee na za Kawaida</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sarufi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutambua na kutumia nomino za pekee na za kawaida (kundi lijalo).</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 Matokeo ya Ujifunzaji wa Mada</h3>
    <p>Kufikia mwisho wa mada hii, mwanafunzi aweze:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Kusikiliza na kujibu mazungumzo kwa kuzingatia vipengele vifaavyo.</li>
    <li>Kusoma kifungu cha simulizi na kujibu maswali ya ufahamu kwa usahihi.</li>
    <li>Kutumia herufi kubwa na kikomo ipasavyo katika maandishi.</li>
    <li>Kutumia nomino za pekee na za kawaida ipasavyo.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Ramani ya Mada</h3>
    <p>Mada hii ina mada ndogo nne. Kila mada ndogo ina masomo matatu, zoezi la tathmini, kazi ya mradi na somo la marudio.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.1.1 Kusikiliza mazungumzo</li>
    <li>Somo 1.1.2 Kujibu katika mazungumzo</li>
    <li>Somo 1.1.3 Kushiriki mazungumzo kuhusu usafi wa kibinafsi</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.2.1 Kudondoa habari mahususi na kupanga matukio</li>
    <li>Somo 1.2.2 Kutabiri na kufasiri</li>
    <li>Somo 1.2.3 Msamiati na maswali ya ufahamu</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.3 Viakifishi: Herufi Kubwa na Kikomo</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Masomo yatakuja katika kundi lijalo</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.4 Aina za Nomino: Nomino za Pekee na za Kawaida</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kushiriki mazungumzo na kazi za vikundi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fikra makini na utatuzi wa matatizo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuuliza maswali na kutafakari ushauri wa afya.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ujuzi wa kidijitali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kurekodi na kusikiliza mazungumzo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujiamini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumza mbele ya wenzako.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: usafi wa kibinafsi</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stadi za maisha</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Kujithamini</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Jinsi ya Kujifunza Mada Hii</p>
    <div>Fuata mpangilio: soma masomo matatu ya kila mada ndogo, fanya maswali shirikishi, kisha Zoezi la Tathmini, Kazi ya Mradi na Marudio. Matini za kusikiliza zimeandikwa ili mwalimu, mzazi au mwenzako azisome kwa sauti — sikiliza kwanza, soma baadaye.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mtaala wa Kiswahili wa Gredi ya 7 una mada ngapi?',
            options: ['Kumi', 'Nne', 'Ishirini', 'Kumi na tano'],
            correct: 3,
            explanation: 'Mtaala wa KICD wa Gredi ya 7 una mada kumi na tano.'
        },
        {
            question: 'Mada ya kwanza ya Gredi ya 7 ni:',
            options: ['Lishe Bora', 'Usalama Shuleni', 'Matumizi ya Pesa', 'Usafi wa Kibinafsi'],
            correct: 3,
            explanation: 'Mada 1.0 inahusu usafi wa kibinafsi.'
        },
        {
            question: 'Kila mada ina mada ndogo ngapi?',
            options: ['Nne', 'Mbili', 'Sita', 'Moja'],
            correct: 0,
            explanation: 'Kusikiliza na kuzungumza, kusoma, kuandika na sarufi.'
        },
        {
            question: 'Mada ndogo ya sarufi katika Mada 1.0 inahusu:',
            options: ['Nomino za pekee na za kawaida', 'Viwakilishi', 'Vihusishi', 'Vielezi'],
            correct: 0,
            explanation: 'Mada ndogo 1.4 inafundisha aina za nomino.'
        },
        {
            question: 'Viakifishi vinavyofundishwa katika Mada 1.0 ni:',
            options: ['Koloni na semikoloni', 'Alama ya hisi na ritifaa', 'Herufi kubwa na kikomo', 'Mabano na kistari'],
            correct: 2,
            explanation: 'Mada ndogo 1.3 inahusu herufi kubwa na kikomo.'
        },
        {
            question: 'Mfano wa usafi wa kibinafsi ni:',
            options: ['Kufagia barabara', 'Kusafisha soko', 'Kupiga mswaki', 'Kupanda miti'],
            correct: 2,
            explanation: 'Usafi wa kibinafsi unahusu mwili na mavazi yako.'
        }
    ]
},
{
    name: '1.1.1 Mazungumzo: Vipengele vya Kuzingatia katika Kusikiliza Mazungumzo',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.1: Kusikiliza Mazungumzo</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza maana ya mazungumzo na vipengele vya kuzingatia unaposikiliza mazungumzo: kumtazama mzungumzaji, kusikiliza bila kukatiza, kutambua hoja kuu, kutumia ishara za kuonyesha unafuatilia na kuomba ufafanuzi.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Kila siku tunazungumza na wazazi, walimu, marafiki na wahudumu. Tusiposikiliza vizuri tunakosa ujumbe muhimu — kama vile ushauri wa daktari kuhusu afya yetu.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Nyumbani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Darasani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Hospitalini</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛪ Nyumba za ibada</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Dukani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📞 Kwenye simu</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua vipengele vya kuzingatia katika usikilizaji wa mazungumzo.</li>
    <li>Kutambua vipengele vya kuzingatia katika kujibu mazungumzo.</li>
    <li>Kutumia vipengele vifaavyo katika kusikiliza na kujibu mazungumzo.</li>
    <li>Kuchangamkia kushiriki mazungumzo katika miktadha mbalimbali.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unaposikiliza mazungumzo unapaswa kuzingatia nini ili kupata ujumbe unaowasilishwa?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Katika Gredi ya 6 ulijifunza salamu na maamkizi, na kusikiliza kwa makini.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Mazungumzo</strong> ni mawasiliano ya mdomo kati ya watu wawili au zaidi wanaobadilishana mawazo, habari au hisia. Katika mazungumzo, kila mtu ni <strong>msemaji</strong> wakati mmoja na <strong>msikilizaji</strong> wakati mwingine.</p>
    <p>Msikilizaji bora: <strong>humtazama mzungumzaji</strong>; <strong>hasikilizi kwa nusu</strong> bali kwa makini; <strong>hamkatizi</strong>; hutambua <strong>hoja kuu</strong>; hutumia <strong>ishara</strong> kama kutikisa kichwa au kusema “ndiyo”, “naam”, “ahaa”; na <strong>huomba ufafanuzi</strong> pale asipoelewa.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Tazama, sikiliza, usikatize, tambua hoja, uliza ukihitaji.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mazungumzo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mawasiliano ya mdomo kati ya watu wawili au zaidi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Tulikuwa na mazungumzo mazuri na muuguzi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Msikilizaji</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu anayesikiliza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Msikilizaji bora hamkatizi msemaji.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Msemaji</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu anayezungumza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Msemaji alieleza umuhimu wa usafi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hoja kuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo muhimu zaidi katika mazungumzo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Hoja kuu ilikuwa usafi ni afya.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viini vya magonjwa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viumbe vidogo sana vinavyosababisha magonjwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Sabuni huondoa viini vya magonjwa.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukatiza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumzuia mtu kumaliza kuzungumza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Usimkatize anayezungumza.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Sikiliza Mazungumzo</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Wanafunzi wasome mazungumzo kwa sauti. Sikiliza mara ya kwanza ili kupata mada; mara ya pili, andika mambo matatu ya ushauri wa afya yaliyotolewa.</div>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Muuguzi (Bi. Atieno):</strong> Hamjambo, wanafunzi wa Gredi ya 7? Leo nimekuja kuzungumza nanyi kuhusu usafi wa kibinafsi.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Wanafunzi:</strong> Hatujambo, Bi. Muuguzi. Karibu sana.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Bi. Atieno:</strong> Asanteni. Nianze kwa swali: ni mara ngapi mnapaswa kupiga mswaki kwa siku?</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Juma:</strong> Samahani, Bi. Muuguzi. Nadhani ni mara moja asubuhi.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Bi. Atieno:</strong> Asante, Juma, kwa kujaribu. Ni bora kupiga mswaki angalau mara mbili: asubuhi baada ya kiamshakinywa na usiku kabla ya kulala.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Neema:</strong> Bi. Muuguzi, naomba kuuliza: kwa nini tunashauriwa kunawa mikono kwa sabuni na si maji pekee?</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Bi. Atieno:</strong> Swali zuri sana, Neema. Sabuni huondoa uchafu na viini vya magonjwa ambavyo maji pekee hayawezi kuondoa kwa urahisi.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Neema:</strong> Ahaa, sasa nimeelewa. Asante.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Kiprono:</strong> Je, ni lazima kuoga kila siku hata wakati wa baridi?</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Bi. Atieno:</strong> Ndiyo, Kiprono. Mwili hutoa jasho kila siku. Ukioga kila siku, unazuia harufu mbaya na magonjwa ya ngozi. Unaweza kutumia maji ya vuguvugu wakati wa baridi.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Juma:</strong> Tumejifunza mengi leo. Tunakushukuru sana, Bi. Muuguzi.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Bi. Atieno:</strong> Nami nawashukuru kwa kusikiliza kwa makini na kuuliza maswali mazuri. Kumbukeni: usafi ni afya.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Mazungumzo yanahusu nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Usafi wa kibinafsi: kupiga mswaki, kunawa mikono kwa sabuni na kuoga kila siku.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Tunapaswa kupiga mswaki mara ngapi kwa siku?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Angalau mara mbili: asubuhi baada ya kiamshakinywa na usiku kabla ya kulala.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Kwa nini tunawe mikono kwa sabuni?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sabuni huondoa uchafu na viini vya magonjwa ambavyo maji pekee hayaondoi kwa urahisi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>4.</strong> Neema anaonyeshaje kwamba ameelewa?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Anasema, “Ahaa, sasa nimeelewa. Asante.”</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Vipengele vya Kuzingatia katika Kusikiliza Mazungumzo</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kipengele</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maelezo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumtazama msemaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuonyesha kwamba unamjali.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wanafunzi walimtazama Bi. Atieno.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza kwa makini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuelekeza akili yote kwa msemaji.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikia ushauri wote wa muuguzi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutokatiza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumwacha msemaji amalize.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Neema alisubiri muuguzi amalize kabla ya kuuliza.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutambua hoja kuu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujua jambo muhimu zaidi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Usafi ni afya.”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara za kufuatilia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutikisa kichwa; “ndiyo”, “naam”, “ahaa”.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Ahaa, sasa nimeelewa.”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuomba ufafanuzi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuuliza kwa adabu pale usipoelewa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Naomba kuuliza: kwa nini…?”</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kutambua hoja kuu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Hoja kuu ya mazungumzo ya Bi. Atieno ni ipi?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Ni jambo gani ambalo kila ushauri unalielekea? Tazama kauli ya mwisho.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Orodhesha ushauri</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Mswaki mara mbili; kunawa kwa sabuni; kuoga kila siku.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Tafuta kinachounganisha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ushauri wote unalinda afya.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Thibitisha kwa kauli</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Kumbukeni: usafi ni afya.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Hoja kuu ni kwamba usafi wa kibinafsi hulinda afya yetu — “usafi ni afya”.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutaja ushauri mmoja tu (k.m. kupiga mswaki) kama hoja kuu.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Vikwazo vya Usikilizaji</h3>
    <p>Kelele, kuzungumza na mwenzako, kuwaza mambo mengine, kucheza na vitu, njaa au uchovu huweza kukuzuia kusikiliza vizuri.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Kosa la Kawaida</p>
    <div>Kuzungumza na mwenzako wakati mgeni anazungumza ni ukosefu wa adabu na hukufanya ukose ujumbe.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Mazungumzo ni nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria watu wanaobadilishana mawazo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mawasiliano ya mdomo kati ya watu wawili au zaidi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Taja ishara mbili zinazoonyesha unafuatilia mazungumzo.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Neema alisema nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutikisa kichwa; kusema “ndiyo”, “naam” au “ahaa”.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Taja kikwazo kimoja cha usikilizaji.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Ni nini kinachovuruga umakini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kelele / kuzungumza na mwenzako / kuwaza mambo mengine.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Sikiliza mazungumzo kati ya wazazi au walezi wako kuhusu jambo la nyumbani na uandike hoja kuu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mmoja aseme mambo matatu ya ushauri wa usafi; mwenzake asikilize bila kuandika kisha ayarudie.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Tengenezeni bango la “Msikilizaji Bora” lenye vipengele sita na michoro.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Kwa ruhusa ya mzazi, sikiliza kipindi cha afya kwenye redio au runinga ya Kiswahili na uandike mambo matatu uliyojifunza.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Msemaji ni nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mtu anayezungumza.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Bi. Atieno ni nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Muuguzi aliyetembelea darasa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja vipengele vitatu vya kusikiliza mazungumzo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kumtazama msemaji; kusikiliza kwa makini; kutokatiza (au vingine).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini tuoge kila siku hata wakati wa baridi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwili hutoa jasho kila siku; kuoga huzuia harufu mbaya na magonjwa ya ngozi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Eleza tofauti kati ya kusikia na kusikiliza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusikia ni sauti kuingia masikioni; kusikiliza ni kuelekeza akili kuelewa ujumbe.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Daktari anakupa maelekezo ya kumeza dawa. Taja mambo mawili utakayozingatia unaposikiliza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusikiliza kwa makini na kuomba ufafanuzi pale usipoelewa (au kuandika maelekezo).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini ni muhimu kutambua hoja kuu katika mazungumzo?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kuelewa ujumbe muhimu zaidi na kuukumbuka.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Mazungumzo ni mawasiliano ya mdomo kati ya watu wawili au zaidi. Msikilizaji bora humtazama msemaji, husikiliza kwa makini, hakatizi, hutambua hoja kuu, hutumia ishara za kufuatilia na huomba ufafanuzi kwa adabu.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tazama msemaji.</li>
    <li>Usikatize.</li>
    <li>Tambua hoja kuu.</li>
    <li>Uliza ufafanuzi kwa adabu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kusikiliza ni zaidi ya kusikia.</li>
    <li>Epuka kelele na kuzungumza na mwenzako.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kukatiza msemaji.</li>
    <li>Kuzungumza na mwenzako wakati mgeni anazungumza.</li>
    <li>Kutaja jambo dogo kama hoja kuu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Taja kipengele kisha toa mfano.</li>
    <li>Jibu kwa sentensi kamili.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza kwa makini.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutambua hoja kuu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza vipindi vya afya.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: usafi wa kibinafsi</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stadi za maisha: mawasiliano</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wagonjwa wanaosikiliza maelekezo ya madaktari kwa makini hupona haraka zaidi.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika vipengele sita vya msikilizaji bora.</li>
    <li>Andika mambo matatu ya ushauri wa usafi uliyoyasikia nyumbani au shuleni.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Je, mimi hukatiza watu?</li>
    <li>Ni ushauri gani wa usafi nitaanza kuufuata?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mazungumzo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mawasiliano ya mdomo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Msikilizaji</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anayesikiliza.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hoja kuu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo muhimu zaidi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vinavyosababisha magonjwa.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza maana ya mazungumzo.</p>
    <p style="margin:6px 0;">☐ Naweza kutaja vipengele vya kusikiliza.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua hoja kuu.</p>
    <p style="margin:6px 0;">☐ Naweza kuomba ufafanuzi kwa adabu.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mazungumzo ni:',
            options: ['Mawasiliano ya mdomo kati ya watu wawili au zaidi', 'Barua rasmi', 'Wimbo wa harusi', 'Insha'],
            correct: 0,
            explanation: 'Watu hubadilishana mawazo kwa mdomo katika mazungumzo.'
        },
        {
            question: 'Msikilizaji bora:',
            options: ['Huzungumza na mwenzake', 'Hucheza na kalamu', 'Huangalia dirishani', 'Hamkatizi msemaji'],
            correct: 3,
            explanation: 'Kumwacha msemaji amalize ni ishara ya heshima.'
        },
        {
            question: 'Kwa mujibu wa muuguzi, tupige mswaki mara ngapi kwa siku?',
            options: ['Angalau mara mbili', 'Mara moja', 'Mara tano', 'Mara moja kwa wiki'],
            correct: 0,
            explanation: 'Asubuhi baada ya kiamshakinywa na usiku kabla ya kulala.'
        },
        {
            question: 'Sabuni husaidia:',
            options: ['Kuongeza harufu mbaya', 'Kuchafua mikono', 'Kuondoa viini vya magonjwa', 'Kukausha maji'],
            correct: 2,
            explanation: 'Maji pekee hayaondoi viini kwa urahisi.'
        },
        {
            question: '“Ahaa, sasa nimeelewa” ni:',
            options: ['Ishara ya kufuatilia', 'Kukatiza', 'Swali', 'Salamu'],
            correct: 0,
            explanation: 'Huonyesha msemaji kwamba ujumbe umefika.'
        },
        {
            question: 'Hoja kuu ya mazungumzo ni:',
            options: ['Maji ni baridi', 'Usafi ni afya', 'Muuguzi ni mrefu', 'Darasa ni kubwa'],
            correct: 1,
            explanation: 'Ushauri wote ulilenga kulinda afya.'
        },
        {
            question: 'Kikwazo cha usikilizaji ni:',
            options: ['Kumtazama msemaji', 'Kutikisa kichwa', 'Kuomba ufafanuzi', 'Kelele'],
            correct: 3,
            explanation: 'Kelele huzuia kusikia vizuri.'
        },
        {
            question: 'Wakati wa baridi, muuguzi alishauri kutumia:',
            options: ['Maji ya barafu', 'Maji ya vuguvugu', 'Mchanga', 'Mafuta tu'],
            correct: 1,
            explanation: 'Maji ya vuguvugu hufanya kuoga kuwe rahisi wakati wa baridi.'
        },
        {
            question: 'Njia ya adabu ya kuuliza ni:',
            options: ['Wewe! Niambie!', 'Sielewi kitu!', 'Nyamaza!', 'Naomba kuuliza…'],
            correct: 3,
            explanation: 'Huonyesha heshima kwa msemaji.'
        },
        {
            question: 'Kusikiliza ni tofauti na kusikia kwa sababu:',
            options: ['Ni kwa masikio tu', 'Kunahitaji umakini wa akili', 'Hakuhitaji chochote', 'Ni kwa macho'],
            correct: 1,
            explanation: 'Kusikiliza ni kuelekeza akili kuelewa ujumbe.'
        }
    ]
},
{
    name: '1.1.2 Mazungumzo: Vipengele vya Kuzingatia katika Kujibu Mazungumzo',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.2: Kujibu katika Mazungumzo</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza vipengele vya kuzingatia unapomjibu mtu katika mazungumzo: kusubiri zamu yako, kujibu swali lililoulizwa, kutumia lugha ya adabu, sauti ifaayo, ishara za mwili na kuheshimu maoni ya wengine.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Jinsi unavyojibu huonyesha heshima yako na huamua kama mazungumzo yataendelea vizuri. Majibu ya adabu hujenga urafiki na huepusha migogoro.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Kuzungumza na wazazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Kujibu maswali ya mwalimu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Kumjibu daktari</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">👫 Kuzungumza na marafiki</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Kuhudumiwa dukani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📞 Kwenye simu</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua vipengele vya kuzingatia katika usikilizaji wa mazungumzo.</li>
    <li>Kutambua vipengele vya kuzingatia katika kujibu mazungumzo.</li>
    <li>Kutumia vipengele vifaavyo katika kusikiliza na kujibu mazungumzo.</li>
    <li>Kuchangamkia kushiriki mazungumzo katika miktadha mbalimbali.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Unazingatia nini unapomjibu mtu katika mazungumzo?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.1.1 — kusikiliza mazungumzo.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Unapomjibu mtu katika mazungumzo, zingatia: <strong>subiri zamu yako</strong>; <strong>jibu swali lililoulizwa</strong> kwa ufupi na uwazi; tumia <strong>lugha ya adabu</strong> kama “samahani”, “tafadhali”, “asante”; tumia <strong>sauti ifaayo</strong> — si ya juu sana wala ya chini sana; dumisha <strong>ishara nzuri za mwili</strong>; <strong>heshimu maoni</strong> ya wengine hata usipokubaliana nao; na tumia <strong>lugha inayofaa muktadha</strong> — rasmi kwa wakubwa, ya kirafiki kwa wenzako.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Subiri zamu, jibu swali, kwa adabu na kwa sauti ifaayo.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zamu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nafasi ya mtu kufanya jambo kwa mpangilio.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Subiri zamu yako ya kuzungumza.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Adabu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tabia njema na heshima.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alijibu kwa adabu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muktadha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya mazungumzo: nani, wapi, lini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Lugha hutegemea muktadha.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukubaliana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwa na maoni sawa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Tulikubaliana kuoga kila siku.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kutofautiana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwa na maoni tofauti.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Naomba kutofautiana nawe kwa heshima.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sauti ifaayo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti isiyo ya juu sana wala ya chini sana.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alizungumza kwa sauti ifaayo.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Linganisha Majibu</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Soma majibu ya Baraka na Wanjiku kwa swali la mama yao. Nani amejibu vizuri? Kwa nini?</div>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mama:</strong> Mwanangu, umeshakata kucha zako? Zimekuwa ndefu.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Baraka:</strong> (akipiga kelele) Aaah! Kwa nini kila siku ni kucha? Nitazikata nikitaka!</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Wanjiku:</strong> (kwa sauti tulivu) Bado, Mama. Samahani, nilisahau. Nitazikata leo jioni baada ya kazi ya ziada. Asante kwa kunikumbusha.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Taja makosa mawili ya Baraka.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Anapiga kelele; anajibu kwa dharau bila adabu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Taja vipengele vitatu katika jibu la Wanjiku.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sauti ifaayo; anajibu swali moja kwa moja; anatumia lugha ya adabu (“samahani”, “asante”).</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Vipengele vya Kuzingatia katika Kujibu</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kipengele</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Fanya</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Epuka</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zamu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subiri msemaji amalize.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kudakia maneno.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu swali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jibu kile ulichoulizwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumzia mambo mengine.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lugha ya adabu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Samahani, tafadhali, asante, naomba.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matusi na dharau.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tulivu na inayosikika.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupiga kelele au kunong’ona.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara za mwili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumtazama msemaji; kutabasamu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kugeuka au kukunja uso.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuheshimu maoni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Naomba kutofautiana nawe kwa heshima…”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Wewe hujui kitu!”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muktadha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lugha rasmi kwa wakubwa; ya kirafiki kwa wenzako.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lugha ya mtaani kwa wakubwa.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kujibu kwa heshima usipokubaliana</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Rafiki yako anasema, “Kunawa mikono si muhimu kama mikono haionekani michafu.” Mjibu kwa adabu.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Onyesha heshima, toa maoni yako, eleza sababu.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Anza kwa heshima</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Naelewa unachosema, rafiki yangu…”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Toa maoni yako</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“…lakini naomba kutofautiana nawe.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Eleza sababu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Viini vya magonjwa ni vidogo sana; huwezi kuviona kwa macho.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Naelewa unachosema, rafiki yangu, lakini naomba kutofautiana nawe. Viini vya magonjwa ni vidogo sana kiasi kwamba huwezi kuviona kwa macho, kwa hivyo tunapaswa kunawa mikono hata ikionekana safi.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kusema “Wewe hujui kitu!” — ni dharau na huanzisha ugomvi.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Lugha Kulingana na Muktadha</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Muktadha</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jibu linalofaa</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwalimu anauliza swali darasani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Ndiyo, mwalimu. Jibu ni…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mzee anakusalimu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Shikamoo, babu.” — “Marahaba.”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rafiki anakuuliza hali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Poa, rafiki! Na wewe je?”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Daktari anakuuliza unavyojisikia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Ninaumwa na kichwa tangu jana, daktari.”</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Zingatia</p>
    <div>“Shikamoo” ni salamu ya heshima kwa wakubwa; jibu lake ni “marahaba”.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Taja maneno matatu ya adabu.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Wanjiku alitumia mawili kati yake.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Samahani, tafadhali, asante (au naomba).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Jibu la “Shikamoo” ni lipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Hujibiwa na mkubwa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Marahaba.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Utasemaje usipokubaliana na mtu kwa heshima?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Tumia “naomba”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Naomba kutofautiana nawe kwa heshima.”</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika majibu ya adabu kwa maswali matano ambayo wazazi wako hukuuliza mara nyingi.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Igizeni mazungumzo: mmoja aulize kuhusu usafi, mwingine ajibu kwa kuzingatia vipengele vyote.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Igizeni jibu baya na jibu zuri kwa swali moja; darasa litaje tofauti.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Rekodi mazungumzo yenu (kwa ruhusa) na msikilize jinsi sauti zenu zilivyokuwa.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja kipengele kimoja cha kujibu mazungumzo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusubiri zamu / kujibu swali / lugha ya adabu (au kingine).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> “Tafadhali” ni neno la nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Adabu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Rekebisha jibu hili: “Nyamaza! Sitaki kusikia!”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Samahani, naomba tuzungumze baadaye kidogo.”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini tusubiri zamu yetu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili tusimkatize msemaji na tuonyeshe heshima.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Eleza jinsi muktadha unavyoathiri jibu lako.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa wakubwa na katika hali rasmi tunatumia lugha rasmi na ya heshima; kwa marafiki tunaweza kutumia lugha ya kirafiki lakini bado ya adabu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Mwalimu anakuuliza kwa nini umechelewa. Andika jibu la adabu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Samahani, mwalimu. Nilichelewa kwa sababu gari lilikwama njiani. Haitajirudia.”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini kuheshimu maoni ya wengine ni muhimu?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huepusha migogoro, hujenga urafiki na huwezesha kujifunza kutoka kwa wengine.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Unapojibu katika mazungumzo, subiri zamu yako, jibu swali lililoulizwa kwa ufupi, tumia lugha ya adabu na sauti ifaayo, dumisha ishara nzuri za mwili, heshimu maoni ya wengine na tumia lugha inayofaa muktadha.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Subiri zamu.</li>
    <li>Jibu swali.</li>
    <li>Adabu na sauti ifaayo.</li>
    <li>Heshimu maoni.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Shikamoo — marahaba.</li>
    <li>“Naomba kutofautiana nawe kwa heshima.”</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kupiga kelele.</li>
    <li>Kudakia maneno.</li>
    <li>Kutumia lugha ya mtaani kwa wakubwa.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ukiulizwa kuandika mazungumzo, onyesha majina ya wazungumzaji na lugha ya adabu.</li>
    <li>Toa mifano ya maneno ya adabu.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu kwa adabu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Uraia</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuheshimu maoni ya wengine.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujiamini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa maoni kwa utulivu.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Amani</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stadi za maisha: mawasiliano</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Utatuzi wa migogoro</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wahudumu wa wateja, viongozi na walimu hujibu watu kwa adabu kila siku ili kujenga uhusiano mwema.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika mazungumzo mafupi (mistari 8) kati yako na mzazi kuhusu usafi, ukitumia maneno ya adabu.</li>
    <li>Taja maneno kumi ya adabu katika Kiswahili.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Je, mimi hujibu kwa adabu hata ninapokasirika?</li>
    <li>Ni kipengele gani nitakiboresha?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zamu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nafasi kwa mpangilio.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Adabu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tabia njema.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muktadha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya mazungumzo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kutofautiana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwa na maoni tofauti.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kusubiri zamu yangu.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu kwa adabu.</p>
    <p style="margin:6px 0;">☐ Naweza kutofautiana kwa heshima.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia lugha ifaayo muktadha.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Unapojibu katika mazungumzo unapaswa:',
            options: ['Kudakia maneno', 'Kusubiri zamu yako', 'Kupiga kelele', 'Kugeuka nyuma'],
            correct: 1,
            explanation: 'Kusubiri zamu huonyesha heshima kwa msemaji.'
        },
        {
            question: 'Neno la adabu ni:',
            options: ['Tafadhali', 'Nyamaza', 'Toka', 'Haraka'],
            correct: 0,
            explanation: '“Tafadhali” hutumika kuomba kwa heshima.'
        },
        {
            question: 'Jibu la “Shikamoo” ni:',
            options: ['Poa', 'Sijambo', 'Asante', 'Marahaba'],
            correct: 3,
            explanation: 'Mkubwa hujibu salamu ya shikamoo kwa “marahaba”.'
        },
        {
            question: 'Baraka alikosea kwa sababu:',
            options: ['Alisema asante', 'Alijibu swali', 'Alipiga kelele na kujibu kwa dharau', 'Alitabasamu'],
            correct: 2,
            explanation: 'Kelele na dharau huharibu mazungumzo.'
        },
        {
            question: 'Njia ya heshima ya kutokubaliana ni:',
            options: ['Wewe hujui kitu', 'Nyamaza', 'Si kweli kabisa!', 'Naomba kutofautiana nawe kwa heshima'],
            correct: 3,
            explanation: 'Hutoa maoni bila kumdharau mtu.'
        },
        {
            question: 'Sauti ifaayo katika mazungumzo ni:',
            options: ['Tulivu na inayosikika', 'Kelele', 'Kunong’ona', 'Kilio'],
            correct: 0,
            explanation: 'Kila mtu anaweza kusikia bila kuudhika.'
        },
        {
            question: 'Muktadha ni:',
            options: ['Aina ya chakula', 'Rangi ya nguo', 'Mazingira ya mazungumzo', 'Jina la mtu'],
            correct: 2,
            explanation: 'Muktadha huamua aina ya lugha.'
        },
        {
            question: 'Kwa mwalimu, unafaa kutumia lugha:',
            options: ['Ya mtaani', 'Rasmi na ya heshima', 'Ya matusi', 'Ya ishara pekee'],
            correct: 1,
            explanation: 'Wakubwa huheshimiwa kwa lugha rasmi.'
        },
        {
            question: 'Wanjiku aliahidi kukata kucha:',
            options: ['Mwaka ujao', 'Kamwe', 'Kesho kutwa', 'Leo jioni'],
            correct: 3,
            explanation: 'Alisema atazikata leo jioni baada ya kazi ya ziada.'
        },
        {
            question: 'Kuheshimu maoni ya wengine husaidia:',
            options: ['Kuepusha migogoro', 'Kuanzisha ugomvi', 'Kumaliza urafiki', 'Kupiga kelele'],
            correct: 0,
            explanation: 'Heshima hujenga uhusiano mwema.'
        }
    ]
},
{
    name: '1.1.3 Mazungumzo: Kushiriki Mazungumzo kuhusu Usafi wa Kibinafsi',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.3: Kushiriki Mazungumzo kuhusu Usafi wa Kibinafsi</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutashiriki mazungumzo kamili kuhusu usafi wa kibinafsi katika miktadha mbalimbali — nyumbani, shuleni na hospitalini — tukitumia vipengele vya kusikiliza na kujibu.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Kushiriki mazungumzo halisi kunaunganisha stadi za kusikiliza na kujibu. Pia kunatusaidia kujadili na kufundishana tabia bora za usafi.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Nyumbani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Klabu ya afya</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Zahanati</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛺ Kambi za skauti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Michezo</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛏️ Bweni</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua vipengele vya kuzingatia katika usikilizaji wa mazungumzo.</li>
    <li>Kutambua vipengele vya kuzingatia katika kujibu mazungumzo.</li>
    <li>Kutumia vipengele vifaavyo katika kusikiliza na kujibu mazungumzo.</li>
    <li>Kuchangamkia kushiriki mazungumzo katika miktadha mbalimbali.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unaposikiliza mazungumzo unapaswa kuzingatia nini ili kupata ujumbe unaowasilishwa?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.1.1 na 1.1.2.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Mazungumzo mazuri yana sehemu tatu: <strong>kuanza</strong> (salamu na kutambulisha mada), <strong>kuendeleza</strong> (kubadilishana maoni, kuuliza na kujibu) na <strong>kumaliza</strong> (kufupisha na kuagana kwa adabu).</p>
    <p>Ili kuendeleza mazungumzo, uliza <strong>maswali</strong> (“Wewe unafanyaje…?”), <strong>ongeza hoja</strong> kwenye kile kilichosemwa (“Zaidi ya hayo…”) na <strong>wahusishe wengine</strong> (“Je, Amina, una maoni gani?”).</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Anza kwa salamu, endeleza kwa maswali, maliza kwa shukrani.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuendeleza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufanya jambo liendelee.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Aliendeleza mazungumzo kwa swali.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuhusisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumfanya mtu ashiriki.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Wahusishe wenzako katika mazungumzo.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuagana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusema kwaheri.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Waliagana kwa adabu.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kucha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu ngumu mwishoni mwa vidole.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kata kucha zako kila wiki.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Taulo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kitambaa cha kujipangusa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Usitumie taulo la mtu mwingine.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Harufu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kile kinachonuswa kwa pua.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kuoga huzuia harufu mbaya.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Mazungumzo ya Kikundi</h3>
    <div style="background:#0f172a;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Amina:</strong> Hamjambo, wenzangu? Leo katika klabu ya afya tujadili jinsi ya kutunza usafi tukiwa bwenini.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Otieno:</strong> Hatujambo, Amina. Mimi naona jambo la kwanza ni kuoga kila siku, hasa baada ya michezo.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Chebet:</strong> Nakubaliana nawe, Otieno. Zaidi ya hayo, kila mtu awe na taulo na mswaki wake. Kutumia vya wenzako kunaweza kusambaza magonjwa.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Amina:</strong> Hoja nzuri. Je, Musa, wewe una maoni gani? Hujasema kitu bado.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Musa:</strong> Asante kwa kunihusisha, Amina. Mimi nadhani tunafaa kufua nguo za ndani kila siku na kuzianika juani.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Otieno:</strong> Samahani, Musa, kwa nini juani hasa?</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Musa:</strong> Jua husaidia kuua baadhi ya viini na kukausha nguo vizuri.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Amina:</strong> Kwa hivyo tumekubaliana: kuoga kila siku, kutumia vifaa vyetu binafsi, na kufua na kuanika nguo juani. Asanteni nyote kwa mchango wenu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Mada ya mazungumzo ni ipi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Usafi wa kibinafsi bwenini.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Amina anamhusishaje Musa?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Anamuuliza moja kwa moja: “Je, Musa, wewe una maoni gani?”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Chebet anaongezaje hoja?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Anaanza kwa “Nakubaliana nawe… Zaidi ya hayo…”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>4.</strong> Mazungumzo yanamalizwaje?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Amina anafupisha hoja zilizokubaliwa na kuwashukuru wote.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Sehemu za Mazungumzo</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sehemu</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kinachofanyika</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuanza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salamu na kutambulisha mada</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Hamjambo… Leo tujadili…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuendeleza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa hoja, kuuliza, kuongeza, kuhusisha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Zaidi ya hayo…”; “Una maoni gani?”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumaliza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufupisha na kushukuru</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Kwa hivyo tumekubaliana… Asanteni.”</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kuendeleza mazungumzo</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Mwenzako amesema, “Napiga mswaki kila asubuhi.” Endeleza mazungumzo kwa njia mbili.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Uliza swali au ongeza hoja.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Uliza swali</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Vizuri! Je, unapiga mswaki pia usiku?”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Ongeza hoja</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Zaidi ya hayo, ni vizuri kubadilisha mswaki kila baada ya miezi mitatu.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Swali: “Je, unapiga mswaki pia usiku?” Hoja: “Zaidi ya hayo, ni vizuri kubadilisha mswaki kila baada ya miezi mitatu.”</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mazungumzo katika Miktadha Tofauti</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Muktadha</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano wa kuanza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nyumbani na mzazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Mama, naomba tuzungumze kuhusu sabuni ya kuoga.”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zahanati na muuguzi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Habari za asubuhi, daktari. Nina swali kuhusu meno yangu.”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Na rafiki</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Habari, rafiki! Unajua ushauri tuliopewa leo kuhusu kucha?”</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Kosa la Kawaida</p>
    <div>Usimcheke mtu kwa sababu ya hali yake ya usafi. Mshauri kwa upole na faragha — hiyo ndiyo heshima.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Taja sehemu tatu za mazungumzo.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Mwanzo, kati, mwisho.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuanza, kuendeleza na kumaliza.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Taja njia mbili za kuendeleza mazungumzo.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Amina na Chebet walifanya nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuuliza maswali; kuongeza hoja; kuwahusisha wengine.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Kwa nini tusitumie taulo la mtu mwingine?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Chebet alieleza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kunaweza kusambaza magonjwa.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika orodha ya hatua tano za usafi wa kibinafsi unazozifuata kila siku.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Fanyeni mazungumzo ya dakika tatu kuhusu kutunza meno, mkitumia sehemu zote tatu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Fanyeni mazungumzo ya klabu ya afya kuhusu usafi wa nywele na kucha, kila mtu akichangia angalau mara mbili.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Rekodi mazungumzo ya kikundi (kwa ruhusa) na mwalimu ayaweke kwenye jukwaa la darasa.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Mazungumzo huanza kwa nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Salamu na kutambulisha mada.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Musa alishauri nguo zianikwe wapi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Juani.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Andika sentensi ya kumhusisha mwenzako asiyezungumza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Je, Halima, una maoni gani kuhusu hili?”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja hoja tatu zilizokubaliwa na klabu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuoga kila siku; kutumia taulo na mswaki binafsi; kufua na kuanika nguo juani.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini ni muhimu kumaliza mazungumzo kwa kufupisha?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kila mtu akumbuke hoja zilizokubaliwa na mazungumzo yawe na lengo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Andika mazungumzo mafupi kati yako na mdogo wako kumfundisha kunawa mikono.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Majibu yatatofautiana; yawe na salamu, maelezo na kumaliza.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Unawezaje kumshauri rafiki kuhusu usafi bila kumuudhi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa upole, faragha, kwa maneno ya adabu na kwa nia njema.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Mazungumzo mazuri huanza kwa salamu na mada, huendelezwa kwa kuuliza, kuongeza hoja na kuwahusisha wengine, na humalizwa kwa kufupisha na kushukuru. Mazungumzo kuhusu usafi wa kibinafsi hutusaidia kujifunza na kufundishana tabia bora.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kuanza → kuendeleza → kumaliza.</li>
    <li>Uliza, ongeza, husisha.</li>
    <li>Shauri kwa upole.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kila mtu apewe nafasi ya kuzungumza.</li>
    <li>Fupisha hoja mwishoni.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kuzungumza peke yako bila kuwahusisha wengine.</li>
    <li>Kumcheka mtu.</li>
    <li>Kumaliza bila kuagana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Andika mazungumzo kwa majina ya wazungumzaji na koloni.</li>
    <li>Onyesha sehemu zote tatu.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazungumzo ya vikundi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Uraia</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuheshimu na kuwahusisha wengine.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kurekodi mazungumzo.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: usafi wa kibinafsi</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Kujithamini</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Klabu za afya shuleni na vikundi vya akina mama hutumia mazungumzo kufundishana mbinu za afya.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Fanya mazungumzo na mzazi kuhusu usafi wa kibinafsi na uandike hoja tatu mlizokubaliana.</li>
    <li>Andika mazungumzo ya mistari kumi kati ya marafiki watatu kuhusu kutunza meno.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilichangiaje mazungumzo ya kikundi?</li>
    <li>Ni tabia gani ya usafi nitaiboresha?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuendeleza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufanya kuendelea.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuhusisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumshirikisha mtu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuagana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusema kwaheri.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Taulo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kitambaa cha kujipangusa.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kuanza mazungumzo.</p>
    <p style="margin:6px 0;">☐ Naweza kuendeleza mazungumzo.</p>
    <p style="margin:6px 0;">☐ Naweza kumaliza mazungumzo kwa adabu.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia kushiriki mazungumzo.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mazungumzo huanza kwa:',
            options: ['Kuagana', 'Salamu na kutambulisha mada', 'Kufupisha', 'Kunyamaza'],
            correct: 1,
            explanation: 'Salamu hufungua mazungumzo kwa adabu.'
        },
        {
            question: '“Zaidi ya hayo…” hutumika:',
            options: ['Kuagana', 'Kusalimu', 'Kuongeza hoja', 'Kukatiza'],
            correct: 2,
            explanation: 'Huongeza wazo jipya kwenye lililotangulia.'
        },
        {
            question: 'Amina alimhusisha:',
            options: ['Otieno', 'Chebet', 'Musa', 'Muuguzi'],
            correct: 2,
            explanation: 'Alimuuliza Musa maoni yake.'
        },
        {
            question: 'Kwa nini kila mtu awe na taulo lake?',
            options: ['Kwa sababu ni rangi nzuri', 'Kuokoa pesa', 'Kuzuia kusambaa kwa magonjwa', 'Hakuna sababu'],
            correct: 2,
            explanation: 'Kushiriki taulo kunaweza kusambaza viini.'
        },
        {
            question: 'Musa alishauri nguo zianikwe:',
            options: ['Juani', 'Chini ya kitanda', 'Bafuni', 'Kabatini zikiwa mbichi'],
            correct: 0,
            explanation: 'Jua husaidia kuua baadhi ya viini.'
        },
        {
            question: 'Mazungumzo humalizwa kwa:',
            options: ['Kupiga kelele', 'Kuondoka ghafla', 'Swali jipya', 'Kufupisha na kushukuru'],
            correct: 3,
            explanation: 'Hii huonyesha adabu na lengo.'
        },
        {
            question: 'Njia mojawapo ya kuendeleza mazungumzo ni:',
            options: ['Kunyamaza', 'Kuuliza swali', 'Kuondoka', 'Kucheka'],
            correct: 1,
            explanation: 'Maswali huwapa wengine nafasi ya kuchangia.'
        },
        {
            question: 'Unapomshauri rafiki kuhusu usafi, fanya hivyo:',
            options: ['Mbele ya darasa zima', 'Kwa kumcheka', 'Kwa kelele', 'Kwa upole na faragha'],
            correct: 3,
            explanation: 'Faragha na upole huheshimu hisia zake.'
        },
        {
            question: 'Mada ya mazungumzo ya klabu ilikuwa:',
            options: ['Michezo', 'Usafi bwenini', 'Chakula', 'Mtihani'],
            correct: 1,
            explanation: 'Amina aliitambulisha mwanzoni.'
        },
        {
            question: 'Kushiriki mazungumzo kunasaidia:',
            options: ['Kujifunza na kufundishana', 'Kugombana', 'Kupoteza muda', 'Kuficha habari'],
            correct: 0,
            explanation: 'Tunapata mawazo mapya kutoka kwa wengine.'
        }
    ]
},
{
    name: '1.1 Zoezi la Tathmini: Kusikiliza na Kujibu Mazungumzo',
    type: 'lesson',
    duration: '30 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Kusikiliza na Kujibu: Mazungumzo</h2>
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
    <li>Maana ya mazungumzo</li>
    <li>Vipengele vya kusikiliza mazungumzo</li>
    <li>Vipengele vya kujibu mazungumzo</li>
    <li>Kuanza, kuendeleza na kumaliza mazungumzo</li>
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
    <div>Kumbuka: msikilizaji bora hakatizi; mjibuji bora hujibu kwa adabu.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Msikilizaji bora:',
            options: ['Huzungumza na mwenzake', 'Hukatiza', 'Humtazama msemaji', 'Hulala'],
            correct: 2,
            explanation: 'Kumtazama msemaji huonyesha heshima na umakini.'
        },
        {
            question: 'Hoja kuu ni:',
            options: ['Jambo muhimu zaidi', 'Neno la kwanza', 'Salamu', 'Jina la msemaji'],
            correct: 0,
            explanation: 'Ndilo ujumbe mkuu wa mazungumzo.'
        },
        {
            question: 'Neno la adabu ni:',
            options: ['Nyamaza', 'Samahani', 'Toka', 'Haraka'],
            correct: 1,
            explanation: 'Hutumika kuomba radhi au kuanza ombi kwa heshima.'
        },
        {
            question: 'Jibu la “Shikamoo” ni:',
            options: ['Marahaba', 'Sijambo', 'Poa', 'Ndiyo'],
            correct: 0,
            explanation: 'Mkubwa hujibu salamu hii kwa “marahaba”.'
        },
        {
            question: 'Sauti ifaayo katika mazungumzo ni:',
            options: ['Kelele', 'Kunong’ona', 'Tulivu na inayosikika', 'Kilio'],
            correct: 2,
            explanation: 'Kila mtu anaweza kusikia bila kuudhika.'
        },
        {
            question: '“Je, Musa, una maoni gani?” ni mfano wa:',
            options: ['Kuagana', 'Kumhusisha mwingine', 'Kukatiza', 'Salamu'],
            correct: 1,
            explanation: 'Humpa Musa nafasi ya kuchangia.'
        },
        {
            question: 'Kikwazo cha usikilizaji ni:',
            options: ['Kutikisa kichwa', 'Kelele', 'Kuandika', 'Kuuliza ufafanuzi'],
            correct: 1,
            explanation: 'Kelele huvuruga usikivu wa msikilizaji.'
        },
        {
            question: 'Muuguzi alishauri tupige mswaki:',
            options: ['Mara moja kwa wiki', 'Kamwe', 'Angalau mara mbili kwa siku', 'Mara moja kwa mwezi'],
            correct: 2,
            explanation: 'Asubuhi na usiku kabla ya kulala.'
        },
        {
            question: 'Mazungumzo humalizwa kwa:',
            options: ['Kufupisha na kushukuru', 'Kupiga kelele', 'Kuondoka ghafla', 'Kucheka'],
            correct: 0,
            explanation: 'Kumaliza kwa adabu huacha uhusiano mwema.'
        },
        {
            question: 'Njia ya heshima ya kutokubaliana ni:',
            options: ['Wewe ni mjinga', 'Nyamaza', 'Huna akili', 'Naomba kutofautiana nawe kwa heshima'],
            correct: 3,
            explanation: 'Hutoa maoni yako bila kumdharau mwenzako.'
        }
    ]
},
{
    name: '1.1 Kazi ya Mradi: Mazungumzo ya Klabu ya Afya kuhusu Usafi wa Kibinafsi',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Mazungumzo ya Klabu ya Afya kuhusu Usafi wa Kibinafsi</h2>
    <p style="font-size:16px;">Kwa vikundi, mtapanga na kuigiza mazungumzo ya klabu ya afya kuhusu usafi wa kibinafsi, kisha mtatengeneza bango la ushauri.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Klabu ya afya ya shule inataka kuwahamasisha wanafunzi wa Gredi ya 7 kuhusu usafi wa kibinafsi. Kikundi chenu kitaigiza mazungumzo mbele ya darasa na kutengeneza bango la ushauri.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Klabu za afya shuleni hutumia mazungumzo, maigizo na mabango kuhamasisha tabia bora.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Undeni vikundi vya watu wanne au watano.</li>
    <li>Chagueni kipengele kimoja cha usafi wa kibinafsi: meno, mikono, mwili, nywele, kucha au mavazi.</li>
    <li>Andikeni mazungumzo (mistari 12–16) yenye kuanza, kuendeleza na kumaliza, na maneno ya adabu.</li>
    <li>Igizeni mazungumzo mbele ya darasa mkizingatia vipengele vya kusikiliza na kujibu.</li>
    <li>Tengenezeni bango lenye mambo matano ya ushauri wa usafi na michoro.</li>
    <li>Kila mwanakikundi aandike tafakari ya maneno 60.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Maandishi ya mazungumzo</li>
    <li>Uigizaji</li>
    <li>Bango</li>
    <li>Tafakari za kibinafsi</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazungumzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu zote tatu; adabu kamili; hoja sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu tatu; adabu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sehemu mbili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hayana mpangilio</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uigizaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usikilizaji na majibu bora; sauti ifaayo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mzuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusitasita</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haueleweki</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bango</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mambo matano sahihi ya ushauri na michoro mizuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mambo matano ya ushauri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mambo chini ya matano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Halipo</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tafakari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ya kina na ya kibinafsi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fupi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haipo</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Kila mtu achangie angalau mara mbili.<br>Tumieni maneno ya adabu.<br>Ushauri uwe sahihi kiafya.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijifunza nini kuhusu usafi?</li>
    <li>Nilichangiaje mazungumzo ya kikundi?</li>
    <li>Nitabadilisha tabia gani?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mazungumzo ya kikundi yawe na mistari:',
            options: ['2', '100', '12–16', '5'],
            correct: 2,
            explanation: 'Maelekezo yanaomba mistari 12–16.'
        },
        {
            question: 'Bango liwe na mambo mangapi ya ushauri?',
            options: ['Moja', 'Ishirini', 'Hakuna', 'Matano'],
            correct: 3,
            explanation: 'Mambo matano ya ushauri yanaombwa.'
        },
        {
            question: 'Tafakari iwe na maneno:',
            options: ['60', '5', '1 000', '10'],
            correct: 0,
            explanation: 'Maelekezo yanataja maneno 60.'
        },
        {
            question: 'Mazungumzo yawe na sehemu ngapi?',
            options: ['Moja', 'Tatu', 'Tano', 'Kumi'],
            correct: 1,
            explanation: 'Kuanza, kuendeleza na kumaliza.'
        },
        {
            question: 'Kila mwanakikundi achangie angalau:',
            options: ['Mara moja kwa mwezi', 'Hakuna', 'Mara kumi', 'Mara mbili'],
            correct: 3,
            explanation: 'Hii huhakikisha kila mtu anashiriki.'
        }
    ]
},
{
    name: '1.1 Marudio: Kusikiliza na Kujibu Mazungumzo',
    type: 'lesson',
    duration: '30 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mazungumzo</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Kusikiliza na Kujibu: Mazungumzo</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.1.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">💬 Mazungumzo</p>
    <div>Mawasiliano ya mdomo kati ya watu wawili au zaidi.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">👂 Kusikiliza</p>
    <div>Tazama msemaji, sikiliza kwa makini, usikatize, tambua hoja kuu, uliza ufafanuzi.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🗣️ Kujibu</p>
    <div>Subiri zamu, jibu swali, adabu, sauti ifaayo, heshimu maoni, muktadha.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🧩 Muundo</p>
    <div>Kuanza → kuendeleza → kumaliza.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🧼 Usafi</p>
    <div>Mswaki mara mbili; kunawa kwa sabuni; kuoga kila siku; vifaa binafsi.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lisilo la adabu</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">La adabu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nyamaza!</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Samahani, naomba nimalize.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wewe hujui kitu!</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Naomba kutofautiana nawe kwa heshima.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Samahani, naomba urudie.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nitafanya nikitaka!</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asante kwa kunikumbusha; nitafanya leo.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Eleza maana ya mazungumzo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mawasiliano ya mdomo kati ya watu wawili au zaidi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja vipengele vitatu vya kusikiliza mazungumzo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kumtazama msemaji; kutokatiza; kutambua hoja kuu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja vipengele vitatu vya kujibu mazungumzo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kusubiri zamu; lugha ya adabu; sauti ifaayo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja sehemu tatu za mazungumzo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuanza, kuendeleza, kumaliza.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Msikilizaji bora hutambua ujumbe kwa makini.</li>
    <li>Mjibuji bora hujibu kwa adabu na kwa muktadha.</li>
    <li>Mazungumzo mazuri yana mwanzo, kati na mwisho.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kusikiliza mazungumzo ipasavyo.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu ipasavyo.</p>
    <p style="margin:6px 0;">☐ Naweza kushiriki mazungumzo kamili.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia kushiriki mazungumzo.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Msemaji ni:',
            options: ['Anayezungumza', 'Anayesikiliza', 'Anayelala', 'Anayeandika'],
            correct: 0,
            explanation: 'Msemaji hutoa ujumbe kwa mdomo.'
        },
        {
            question: 'Kutokatiza ni kipengele cha:',
            options: ['Kuagana', 'Kuandika', 'Kusikiliza', 'Kusoma'],
            correct: 2,
            explanation: 'Msikilizaji humwacha msemaji amalize.'
        },
        {
            question: '“Tafadhali” ni neno la:',
            options: ['Hasira', 'Salamu ya usiku', 'Kuagana', 'Adabu'],
            correct: 3,
            explanation: 'Hutumika kuomba kwa heshima.'
        },
        {
            question: 'Sehemu ya mwisho ya mazungumzo ni:',
            options: ['Kuanza', 'Kuendeleza', 'Salamu', 'Kumaliza'],
            correct: 3,
            explanation: 'Sehemu ya kumaliza hufupisha hoja na kushukuru.'
        },
        {
            question: 'Lugha rasmi hutumika kwa:',
            options: ['Marafiki pekee', 'Wakubwa na hali rasmi', 'Wanyama', 'Hakuna'],
            correct: 1,
            explanation: 'Lugha rasmi huonyesha heshima kwa wakubwa.'
        }
    ]
},
{
    name: '1.2.1 Kusoma kwa Ufahamu: Kudondoa Habari Mahususi na Kupanga Matukio',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.1: Kudondoa Habari Mahususi na Kupanga Matukio</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutasoma kifungu cha simulizi “Jino la Baraka” na kujifunza kudondoa habari mahususi kwa maswali sita — nani, nini, wapi, lini, kwa nini, vipi — na kupanga matukio jinsi yanavyofuatana.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Tunasoma ufahamu ili kuelewa habari, kujifunza mambo mapya na kujibu maswali kwa usahihi. Kudondoa habari na kufuata mpangilio wa matukio ni msingi wa kuelewa hadithi yoyote.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Vitabu vya hadithi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Vijitabu vya afya</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Habari mtandaoni</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎭 Tamthilia</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kudondoa habari mahususi katika kifungu cha simulizi.</li>
    <li>Kupanga matukio yanavyofuatana katika kifungu cha simulizi.</li>
    <li>Kufanya utabiri na ufasiri kutokana na kifungu cha simulizi.</li>
    <li>Kueleza msamiati katika kifungu cha simulizi.</li>
    <li>Kuchangamkia kusoma vifungu vya simulizi ili kukuza uelewa wa habari.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Kwa nini tunasoma ufahamu?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Kusoma hadithi fupi na kujibu maswali katika Gredi ya 6; mada ndogo 1.1 kuhusu usafi wa kibinafsi.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Kifungu cha simulizi</strong> husimulia matukio kwa mpangilio, kama hadithi. <strong>Kudondoa</strong> habari ni kuchagua taarifa maalumu inayojibu swali. Jiulize: <strong>nani? nini? wapi? lini? kwa nini? vipi?</strong>
    </p>
    <p>Kupanga matukio, tafuta <strong>viashiria vya wakati</strong> kama <em>kila jioni, usiku mmoja wa Ijumaa, kesho yake asubuhi, wiki mbili baadaye, mwisho wa muhula</em>. Viashiria hivi hukuonyesha kipi kilitangulia na kipi kilifuata.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Maswali sita hukusaidia kudondoa; viashiria vya wakati hukusaidia kupanga.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudondoa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua habari maalumu kutoka matini.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Dondoa majina ya wahusika.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Habari mahususi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taarifa maalumu kama majina, mahali, idadi na wakati.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Saa nane usiku ni habari mahususi.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mfuatano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mpangilio wa matukio.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Panga matukio kwa mfuatano ufaao.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kusukutua</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusafisha kinywa kwa kusukasuka maji.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Sukutua baada ya kula.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pengo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nafasi iliyoachwa na jino lililotoka.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Baraka alirudi na pengo kinywani.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kung’olewa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutolewa (kwa jino) kutoka mahali pake.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Jino bovu liling’olewa.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Soma Kifungu</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Tabiri Kwanza</p>
    <div>Kabla ya kusoma: tazama kichwa “Jino la Baraka”. Unatabiri nini kilimpata jino la Baraka?</div>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Jino la Baraka” — kifungu cha simulizi</p>
    <p style="margin:8px 0;">(1) Baraka alikuwa mwanafunzi wa Gredi ya 7 katika Shule ya Junia ya Mto Mweupe. Alipenda sana peremende, biskuti na soda. Kila jioni alipotoka shuleni, alinunua peremende tano kwa pesa alizopewa na shangazi yake. Mama yake alipomkumbusha kupiga mswaki kabla ya kulala, Baraka alijibu, “Mama, meno yangu ni meupe kama maziwa. Hayana tatizo!”</p>
    <p style="margin:8px 0;">(2) Usiku mmoja wa Ijumaa, Baraka aliamka saa nane akilia kwa uchungu. Jino lake la nyuma lilikuwa likimuuma kana kwamba linadungwa na sindano. Shavu lake la kushoto lilivimba kama embe bivu. Mama yake aliamka na kumpa maji ya vuguvugu yenye chumvi ili asukutue, lakini maumivu hayakupungua.</p>
    <p style="margin:8px 0;">(3) Kesho yake asubuhi, mama yake alimpeleka katika hospitali ya kaunti. Daktari wa meno, Dkt. Wambui, alilichunguza jino hilo kwa kioo kidogo na kutikisa kichwa. “Jino hili lina tundu kubwa,” alieleza. “Sukari ikikaa kinywani bila kusafishwa, vijidudu huila na kutengeneza asidi inayotoboa meno polepole.” Ilibidi jino hilo ling’olewe.</p>
    <p style="margin:8px 0;">(4) Baraka alirudi nyumbani akiwa na pengo kinywani na funzo moyoni. Dkt. Wambui alikuwa amemfundisha kupiga mswaki mara mbili kwa siku kwa dakika mbili, kusukutua baada ya kula, kupunguza vyakula vyenye sukari na kubadilisha mswaki kila baada ya miezi mitatu. Baraka aliandika ushauri huo kwenye karatasi na kuubandika ukutani karibu na kitanda chake.</p>
    <p style="margin:8px 0;">(5) Wiki mbili baadaye, Baraka aliona kwamba mdogo wake, Zuri, pia alikuwa akila peremende nyingi. Badala ya kumkemea, alimsimulia kisa chake na kumwonyesha pengo lake. Zuri aliogopa, kisha akacheka. “Basi tutapiga mswaki pamoja kila usiku,” akasema. Tangu siku hiyo, ndugu hao wawili walishindana kuona nani angepiga mswaki vizuri zaidi.</p>
    <p style="margin:8px 0;">(6) Mwisho wa muhula, klabu ya afya ya shule ilimwomba Baraka azungumze katika gwaride. Alisimama mbele ya wanafunzi wote na kusema, “Wenzangu, mimi nilifikiri meno meupe ni meno salama. Nilikosea. Usafi wa kinywa ni jukumu letu kila siku. Usingoje jino likuume ndipo ujifunze.” Wanafunzi walipiga makofi, na mwalimu mkuu akamteua kuwa balozi wa usafi wa klabu ya afya.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kudondoa Habari Mahususi</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Swali</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Habari mahususi kutoka kifungu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nani?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baraka, mama yake, Dkt. Wambui, Zuri, mwalimu mkuu, klabu ya afya.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jino lilitoboka na kung’olewa; Baraka alijifunza na kuwafundisha wengine.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wapi?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shule ya Junia ya Mto Mweupe; nyumbani; hospitali ya kaunti; gwaride la shule.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kila jioni; usiku mmoja wa Ijumaa saa nane; kesho yake asubuhi; wiki mbili baadaye; mwisho wa muhula.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa nini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alikula sukari nyingi bila kupiga mswaki; vijidudu vilitengeneza asidi iliyotoboa jino.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vipi?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa ushauri wa daktari, karatasi ukutani, kupiga mswaki na Zuri, hotuba gwarideni.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kudondoa habari mahususi</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Taja mambo manne ambayo Dkt. Wambui alimfundisha Baraka.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Tafuta aya inayoeleza ushauri wa daktari — aya ya 4.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tafuta aya</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aya ya 4.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Dondoa</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Mswaki mara mbili kwa dakika mbili; kusukutua; kupunguza sukari; kubadilisha mswaki.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Andika kwa sentensi kamili</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Tumia maneno yako.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Alimfundisha kupiga mswaki mara mbili kwa siku kwa dakika mbili, kusukutua baada ya kula, kupunguza vyakula vyenye sukari na kubadilisha mswaki kila baada ya miezi mitatu.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutaja mambo mawili tu ilhali swali linaomba manne.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Kupanga Matukio Yanavyofuatana</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Mfuatano wa matukio</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Panga matukio haya: (a) Baraka alizungumza gwarideni. (b) Jino liling’olewa. (c) Baraka aliamka akilia saa nane usiku. (d) Baraka alimsimulia Zuri kisa chake.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Tumia viashiria vya wakati katika kila aya.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Aya ya 2 — “usiku mmoja wa Ijumaa”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(c)</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Aya ya 3 — “kesho yake asubuhi”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(b)</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Aya ya 5 — “wiki mbili baadaye”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(d)</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bfdbfe;">Hatua ya 4: Aya ya 6 — “mwisho wa muhula”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(a)</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> (c), (b), (d), (a)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kupanga kwa kufuata herufi za swali badala ya kifungu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Baraka aliamka saa ngapi usiku?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Saa nane.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Daktari wa meno aliitwa nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Dkt. Wambui.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Baraka alibandika ushauri wapi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ukutani karibu na kitanda chake.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Baraka alisoma katika shule gani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Shule ya Junia ya Mto Mweupe.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Baraka alinunua peremende ngapi kila jioni?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Peremende tano.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Ni tukio gani lilitokea mara baada ya maumivu kuanza?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Endelea kusoma aya ya 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mama yake alimpa maji ya vuguvugu yenye chumvi asukutue.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika jedwali la maswali sita kwa hadithi moja uliyosoma au kusikia hivi karibuni.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Kila mmoja aandike kadi nne za matukio ya kifungu; mwenzake azipange kwa mfuatano.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Igizeni matukio sita ya “Jino la Baraka” kwa mfuatano.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Soma kijitabu cha afya ya meno mtandaoni (kwa ruhusa) na udondoe habari mahususi tano.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Mdogo wa Baraka anaitwa nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Zuri.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Baraka alipenda vyakula gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Peremende, biskuti na soda.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Mama yake alimpa nini usiku?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maji ya vuguvugu yenye chumvi ya kusukutua.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini jino liling’olewa?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Lilikuwa na tundu kubwa lililosababishwa na asidi kutoka kwa vijidudu vinavyokula sukari.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Panga matukio: Baraka aliteuliwa kuwa balozi; shavu lilivimba; Zuri alikubali kupiga mswaki; daktari alichunguza jino.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Shavu lilivimba → daktari alichunguza jino → Zuri alikubali kupiga mswaki → Baraka aliteuliwa kuwa balozi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Ukisoma tangazo la kliniki ya meno shuleni, ni habari zipi mahususi utatafuta?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Tarehe, saa, mahali, gharama (kama ipo), nani anahusika na cha kuleta.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini mwandishi alitaja “saa nane” badala ya kusema tu “usiku”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kuonyesha uzito wa maumivu — yalimwamsha usiku wa manane — na kufanya hadithi iaminike.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Kudondoa habari mahususi ni kuchagua taarifa maalumu kwa kujiuliza nani, nini, wapi, lini, kwa nini na vipi. Matukio hupangwa kwa kufuata viashiria vya wakati. Tunasoma ufahamu ili kuelewa habari na kujifunza mambo mapya — kama tulivyojifunza kuhusu afya ya meno.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Maswali sita.</li>
    <li>Viashiria vya wakati.</li>
    <li>Majibu kamili.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rudi kwenye kifungu kuthibitisha jibu.</li>
    <li>Jibu sehemu zote za swali.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kubahatisha.</li>
    <li>Kunakili aya nzima.</li>
    <li>Kupanga kwa mpangilio wa swali.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Taja aya unayotumia.</li>
    <li>Andika majibu kwa sentensi kamili.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupanga matukio kwa mantiki.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu kwa sentensi kamili.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma vijitabu vya afya mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: usafi wa kinywa</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Lishe</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wauguzi, waandishi wa habari na wanafunzi hudondoa habari mahususi kila siku.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika matukio sita ya “Jino la Baraka” kwa mfuatano.</li>
    <li>Dondoa habari mahususi tano kutoka kijitabu au bango la afya.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni swali lipi kati ya sita linalonisaidia zaidi?</li>
    <li>Je, mimi hupiga mswaki mara mbili kwa siku?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudondoa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua habari maalumu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mfuatano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mpangilio wa matukio.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kusukutua</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusafisha kinywa kwa maji.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pengo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nafasi ya jino lililotoka.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kudondoa habari mahususi.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia maswali sita.</p>
    <p style="margin:6px 0;">☐ Naweza kupanga matukio.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua viashiria vya wakati.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Baraka alikuwa katika gredi gani?',
            options: ['Gredi ya 7', 'Gredi ya 8', 'Gredi ya 6', 'Gredi ya 9'],
            correct: 0,
            explanation: 'Aya ya kwanza inasema alikuwa mwanafunzi wa Gredi ya 7.'
        },
        {
            question: 'Baraka alinunua peremende ngapi kila jioni?',
            options: ['Mbili', 'Kumi', 'Tano', 'Moja'],
            correct: 2,
            explanation: 'Aya ya 1 inataja peremende tano.'
        },
        {
            question: 'Maumivu yalianza:',
            options: ['Asubuhi ya Jumatatu', 'Mwisho wa muhula', 'Wakati wa chakula cha mchana', 'Usiku mmoja wa Ijumaa'],
            correct: 3,
            explanation: 'Aya ya 2 inaeleza usiku wa Ijumaa.'
        },
        {
            question: 'Daktari wa meno aliitwa:',
            options: ['Dkt. Zuri', 'Dkt. Wambui', 'Dkt. Baraka', 'Dkt. Atieno'],
            correct: 1,
            explanation: 'Aya ya 3 inamtaja Dkt. Wambui.'
        },
        {
            question: 'Jino lilikuwa na:',
            options: ['Rangi nyekundu', 'Dhahabu', 'Mswaki', 'Tundu kubwa'],
            correct: 3,
            explanation: 'Daktari alieleza jino lina tundu kubwa.'
        },
        {
            question: 'Kiashiria cha wakati ni:',
            options: ['Shavu', 'Peremende', 'Pengo', 'Wiki mbili baadaye'],
            correct: 3,
            explanation: 'Kinaonyesha muda uliopita kati ya matukio.'
        },
        {
            question: 'Tukio la mwisho katika kifungu ni:',
            options: ['Baraka kununua peremende', 'Baraka kuteuliwa kuwa balozi wa usafi', 'Jino kuuma', 'Kwenda hospitalini'],
            correct: 1,
            explanation: 'Linatokea mwisho wa muhula katika aya ya 6.'
        },
        {
            question: 'Baraka alibandika ushauri wa daktari:',
            options: ['Mlangoni mwa shule', 'Ukutani karibu na kitanda', 'Kwenye gari', 'Sokoni'],
            correct: 1,
            explanation: 'Aya ya 4 inaeleza kwamba aliubandika ukutani karibu na kitanda.'
        },
        {
            question: 'Maswali ya kudondoa habari ni:',
            options: ['Ndiyo au hapana', 'Vitendawili', 'Nani, nini, wapi, lini, kwa nini, vipi', 'Maswali ya hesabu'],
            correct: 2,
            explanation: 'Maswali sita hupata taarifa kamili.'
        },
        {
            question: 'Tunasoma ufahamu ili:',
            options: ['Kupoteza muda', 'Kunakili', 'Kuelewa habari na kujifunza', 'Kuchora'],
            correct: 2,
            explanation: 'Ufahamu hukuza uelewa wa habari.'
        }
    ]
},
{
    name: '1.2.2 Kusoma kwa Ufahamu: Kutabiri na Kufasiri',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.2: Kutabiri na Kufasiri</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza kutabiri yatakayotokea kwa kutumia vidokezo na kufasiri maana iliyofichika ya kauli, matukio na tabia za wahusika katika “Jino la Baraka”.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Msomaji makini hufikiri anaposoma: hukisia yatakayofuata na hutafuta maana fiche. Stadi hizi hufanya kusoma kuwe kwa kufurahisha na hukusaidia kujibu maswali ya kukisia.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Hadithi na riwaya</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎭 Tamthilia</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Makala</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎬 Filamu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗞️ Katuni</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kudondoa habari mahususi katika kifungu cha simulizi.</li>
    <li>Kupanga matukio yanavyofuatana katika kifungu cha simulizi.</li>
    <li>Kufanya utabiri na ufasiri kutokana na kifungu cha simulizi.</li>
    <li>Kueleza msamiati katika kifungu cha simulizi.</li>
    <li>Kuchangamkia kusoma vifungu vya simulizi ili kukuza uelewa wa habari.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, ni mambo gani yanayoweza kukusaidia kuelewa kifungu cha simulizi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.2.1.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Kutabiri</strong> ni kukisia kitakachotokea kwa kutumia vidokezo kama kichwa, picha, matukio yaliyotangulia na tabia za wahusika. Utabiri unapaswa kuwa na sababu.</p>
    <p><strong>Kufasiri</strong> ni kueleza maana iliyofichika. Baraka aliposema “meno yangu ni meupe kama maziwa”, alimaanisha kwamba aliamini meno yake ni salama kwa sababu yanaonekana safi. Hadithi inaonyesha kwamba hakuwa sahihi — meno yanaweza kuonekana meupe ilhali yanaharibika.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Tabiri kwa vidokezo; fasiri kwa kuuliza: “Hii inamaanisha nini hasa?”</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kutabiri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia kitakachotokea.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Tabiri mwisho wa hadithi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kufasiri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kueleza maana iliyofichika.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Fasiri kauli ya Baraka.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kidokezo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara inayosaidia kukisia.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Peremende nyingi ni kidokezo.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tashbihi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ulinganisho unaotumia “kama”.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>“Meupe kama maziwa” ni tashbihi.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Balozi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu anayewakilisha au kuhamasisha jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Baraka aliteuliwa kuwa balozi wa usafi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Funzo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jambo la kujifunza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alirudi na funzo moyoni.</em>
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
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Jino la Baraka” — kifungu cha simulizi</p>
    <p style="margin:8px 0;">(1) Baraka alikuwa mwanafunzi wa Gredi ya 7 katika Shule ya Junia ya Mto Mweupe. Alipenda sana peremende, biskuti na soda. Kila jioni alipotoka shuleni, alinunua peremende tano kwa pesa alizopewa na shangazi yake. Mama yake alipomkumbusha kupiga mswaki kabla ya kulala, Baraka alijibu, “Mama, meno yangu ni meupe kama maziwa. Hayana tatizo!”</p>
    <p style="margin:8px 0;">(2) Usiku mmoja wa Ijumaa, Baraka aliamka saa nane akilia kwa uchungu. Jino lake la nyuma lilikuwa likimuuma kana kwamba linadungwa na sindano. Shavu lake la kushoto lilivimba kama embe bivu. Mama yake aliamka na kumpa maji ya vuguvugu yenye chumvi ili asukutue, lakini maumivu hayakupungua.</p>
    <p style="margin:8px 0;">(3) Kesho yake asubuhi, mama yake alimpeleka katika hospitali ya kaunti. Daktari wa meno, Dkt. Wambui, alilichunguza jino hilo kwa kioo kidogo na kutikisa kichwa. “Jino hili lina tundu kubwa,” alieleza. “Sukari ikikaa kinywani bila kusafishwa, vijidudu huila na kutengeneza asidi inayotoboa meno polepole.” Ilibidi jino hilo ling’olewe.</p>
    <p style="margin:8px 0;">(4) Baraka alirudi nyumbani akiwa na pengo kinywani na funzo moyoni. Dkt. Wambui alikuwa amemfundisha kupiga mswaki mara mbili kwa siku kwa dakika mbili, kusukutua baada ya kula, kupunguza vyakula vyenye sukari na kubadilisha mswaki kila baada ya miezi mitatu. Baraka aliandika ushauri huo kwenye karatasi na kuubandika ukutani karibu na kitanda chake.</p>
    <p style="margin:8px 0;">(5) Wiki mbili baadaye, Baraka aliona kwamba mdogo wake, Zuri, pia alikuwa akila peremende nyingi. Badala ya kumkemea, alimsimulia kisa chake na kumwonyesha pengo lake. Zuri aliogopa, kisha akacheka. “Basi tutapiga mswaki pamoja kila usiku,” akasema. Tangu siku hiyo, ndugu hao wawili walishindana kuona nani angepiga mswaki vizuri zaidi.</p>
    <p style="margin:8px 0;">(6) Mwisho wa muhula, klabu ya afya ya shule ilimwomba Baraka azungumze katika gwaride. Alisimama mbele ya wanafunzi wote na kusema, “Wenzangu, mimi nilifikiri meno meupe ni meno salama. Nilikosea. Usafi wa kinywa ni jukumu letu kila siku. Usingoje jino likuume ndipo ujifunze.” Wanafunzi walipiga makofi, na mwalimu mkuu akamteua kuwa balozi wa usafi wa klabu ya afya.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kutabiri</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kidokezo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Utabiri unaowezekana</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kilichotokea</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kichwa “Jino la Baraka”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jino la Baraka litapata tatizo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jino lilitoboka na kung’olewa.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Peremende tano kila siku bila mswaki (aya 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atapata ugonjwa wa meno.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maumivu makali usiku.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Alirudi … na funzo moyoni” (aya 4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atabadilisha tabia.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alipiga mswaki na kumfundisha Zuri.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Klabu ilimwomba azungumze (aya 6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atawashauri wanafunzi wengine.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alitoa hotuba na kuwa balozi.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kutabiri kwa sababu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Baada ya kusoma aya ya 1 pekee, tabiri kitakachompata Baraka na utoe sababu.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Tumia kidokezo cha sukari nyingi na kukataa kupiga mswaki.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tambua kidokezo</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Anakula sukari nyingi na hapigi mswaki.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Toa utabiri</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Atapata tatizo la meno.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Toa sababu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Sukari bila usafi huharibu meno.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Ninatabiri Baraka atapata ugonjwa wa meno kwa sababu anakula sukari nyingi na anakataa kupiga mswaki.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Kufasiri</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kauli au tukio</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Ufasiri</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Meno yangu ni meupe kama maziwa.”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baraka aliamini meno yanayoonekana safi ni salama — imani potofu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shavu lilivimba kama embe bivu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uvimbe ulikuwa mkubwa na wa wazi; maumivu yalikuwa makali.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alirudi na pengo kinywani na funzo moyoni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Alipoteza jino lakini alipata somo la maisha.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Badala ya kumkemea, alimsimulia kisa chake</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baraka alitumia busara na upendo kumfundisha mdogo wake.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Usingoje jino likuume ndipo ujifunze.”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ni bora kuzuia tatizo kuliko kusubiri litokee.</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Zingatia</p>
    <div>“Meupe kama maziwa” na “kama embe bivu” ni tashbihi — zinalinganisha vitu viwili kwa kutumia “kama”.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Taja sifa mbili za Baraka mwishoni mwa hadithi na ushahidi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwajibikaji (anapiga mswaki na kubandika ushauri); mwenye busara (anamfundisha Zuri bila kumkemea).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Mama yake Baraka ana sifa gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwenye kujali — alimkumbusha kupiga mswaki na kumpeleka hospitalini.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Fasiri: “alirudi … na funzo moyoni”.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Funzo ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Alijifunza somo muhimu kutokana na tukio hilo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Taja tashbihi moja kutoka kifungu.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Tafuta neno “kama”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“meupe kama maziwa” / “kama embe bivu”.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Baraka alimfundisha Zuri vipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa kumsimulia kisa chake na kumwonyesha pengo, si kwa kumkemea.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika utabiri wa jinsi maisha ya Baraka na Zuri yatakavyokuwa mwaka mmoja baadaye.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Chagueni kauli tatu na kila mmoja aandike ufasiri wake; linganisheni.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Jadilini sifa za wahusika wanne na ushahidi wake; wasilisheni kwa jedwali.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta picha ya ushauri wa afya ya meno (kwa ruhusa) na uandike sentensi tatu za ufasiri.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Kutabiri ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kukisia kitakachotokea kwa kutumia vidokezo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Kufasiri ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kueleza maana iliyofichika.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Fasiri: “Usingoje jino likuume ndipo ujifunze.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ni bora kuzuia tatizo mapema kuliko kusubiri litokee.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja sifa ya Dkt. Wambui na ushahidi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwelimishaji — alimfundisha Baraka jinsi ya kutunza meno.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini Baraka alichagua kumsimulia Zuri badala ya kumkemea?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Alijua kwamba kisa halisi na ushahidi (pengo) vingemshawishi zaidi kuliko kukemewa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Fasiri methali “Kinga ni bora kuliko tiba” ukiihusisha na kifungu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ni bora kuzuia ugonjwa — kwa kupiga mswaki — kuliko kusubiri kutibiwa, kama Baraka alivyolazimika kung’olewa jino.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Pendekeza mwisho mwingine wa hadithi na ueleze funzo lake.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Majibu yatatofautiana; yawe na mantiki na funzo wazi.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Kutabiri ni kukisia yatakayotokea kwa kutumia vidokezo; kufasiri ni kueleza maana iliyofichika ya kauli, matukio na tabia. Utabiri na ufasiri mzuri huungwa mkono na ushahidi kutoka kifungu.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tabiri kwa vidokezo.</li>
    <li>Fasiri maana fiche.</li>
    <li>Toa ushahidi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tashbihi hutumia “kama”.</li>
    <li>Taja aya unayorejelea.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kufasiri kwa maana ya juu juu tu.</li>
    <li>Kutaja sifa bila ushahidi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Swali la “fasiri” huhitaji maana fiche.</li>
    <li>Sifa + ushahidi.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutabiri na kufasiri.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ubunifu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kubuni mwisho mbadala.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Mawasiliano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kueleza maoni kwa uwazi.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unyenyekevu</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: usafi wa kinywa</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Lishe bora</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Madaktari hutabiri hatari za kiafya kutokana na tabia za watu; wasomaji hufasiri ujumbe wa matangazo ya afya.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika ufasiri wa kauli tatu kutoka kifungu.</li>
    <li>Andika aya ya utabiri kuhusu Zuri miaka mitano baadaye.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Utabiri wangu wa mwanzo ulikuwa sahihi?</li>
    <li>Ni funzo gani nimejifunza kutoka kwa Baraka?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kutabiri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia yajayo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kufasiri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kueleza maana fiche.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tashbihi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ulinganisho kwa “kama”.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Balozi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mhamasishaji.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutabiri kwa vidokezo.</p>
    <p style="margin:6px 0;">☐ Naweza kufasiri kauli na matukio.</p>
    <p style="margin:6px 0;">☐ Naweza kutaja sifa za wahusika kwa ushahidi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kutabiri ni:',
            options: ['Kueleza maana fiche', 'Kunakili', 'Kuhesabu', 'Kukisia kitakachotokea'],
            correct: 3,
            explanation: 'Kutabiri hutumia vidokezo kukisia yajayo.'
        },
        {
            question: '“Meupe kama maziwa” ni mfano wa:',
            options: ['Methali', 'Tashbihi', 'Kitendawili', 'Swali'],
            correct: 1,
            explanation: 'Inalinganisha vitu viwili kwa kutumia “kama”.'
        },
        {
            question: 'Baraka alipoamini meno meupe ni salama, alikuwa:',
            options: ['Amekosea', 'Sahihi kabisa', 'Daktari', 'Mgonjwa wa macho'],
            correct: 0,
            explanation: 'Meno yanaweza kuonekana meupe yakiwa yanaharibika.'
        },
        {
            question: 'Kidokezo kilichotabiri tatizo la meno ni:',
            options: ['Kula sukari nyingi bila kupiga mswaki', 'Kwenda shuleni', 'Kuwa na mdogo', 'Kupenda michezo'],
            correct: 0,
            explanation: 'Sukari bila usafi huharibu meno.'
        },
        {
            question: '“Alirudi na pengo kinywani na funzo moyoni” inamaanisha:',
            options: ['Alipata jino jipya', 'Alipoteza jino lakini akajifunza', 'Alisahau kila kitu', 'Alifurahi tu'],
            correct: 1,
            explanation: 'Alipoteza jino lakini alipata somo la maisha.'
        },
        {
            question: 'Baraka alimfundisha Zuri kwa:',
            options: ['Kumkemea', 'Kumpiga', 'Kumsimulia kisa chake', 'Kumficha peremende'],
            correct: 2,
            explanation: 'Alitumia busara na upendo.'
        },
        {
            question: 'Sifa ya Baraka mwishoni ni:',
            options: ['Uvivu', 'Ubinafsi', 'Ukaidi', 'Uwajibikaji'],
            correct: 3,
            explanation: 'Anatunza meno na kuwashauri wengine.'
        },
        {
            question: '“Usingoje jino likuume ndipo ujifunze” inafundisha:',
            options: ['Kula peremende zaidi', 'Kutokwenda hospitalini', 'Kunyamaza', 'Kuzuia ni bora kuliko kusubiri tatizo'],
            correct: 3,
            explanation: 'Ni bora kuchukua hatua mapema.'
        },
        {
            question: 'Mama yake Baraka ana sifa ya:',
            options: ['Kutojali', 'Ukatili', 'Kujali', 'Uvivu'],
            correct: 2,
            explanation: 'Alimkumbusha na kumpeleka hospitalini.'
        },
        {
            question: 'Utabiri mzuri lazima uwe na:',
            options: ['Picha', 'Sababu kutoka kifungu', 'Wimbo', 'Maneno mengi'],
            correct: 1,
            explanation: 'Sababu huufanya utabiri kuwa wa kimantiki.'
        }
    ]
},
{
    name: '1.2.3 Kusoma kwa Ufahamu: Msamiati na Maswali ya Ufahamu',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.3: Msamiati na Maswali ya Ufahamu</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza kueleza msamiati kwa kutumia muktadha na kujibu aina mbalimbali za maswali ya ufahamu kuhusu “Jino la Baraka”.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Maneno mapya hujitokeza katika kila kifungu. Ukiweza kukisia maana kwa muktadha, utasoma kwa ufasaha na kujibu maswali kwa ujasiri.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Maktaba</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Vijitabu vya afya</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📖 Kamusi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Habari mtandaoni</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kudondoa habari mahususi katika kifungu cha simulizi.</li>
    <li>Kupanga matukio yanavyofuatana katika kifungu cha simulizi.</li>
    <li>Kufanya utabiri na ufasiri kutokana na kifungu cha simulizi.</li>
    <li>Kueleza msamiati katika kifungu cha simulizi.</li>
    <li>Kuchangamkia kusoma vifungu vya simulizi ili kukuza uelewa wa habari.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, ni mambo gani yanayoweza kukusaidia kuelewa kifungu cha simulizi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.2.1 na 1.2.2.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Muktadha</strong> ni maneno na sentensi zinazozunguka neno. Kueleza maana ya neno: (1) soma sentensi nzima; (2) kisia maana; (3) jaribu neno mbadala — maana ikibaki wazi, umepata.</p>
    <p>Maswali ya ufahamu ni ya aina nyingi: ya <strong>habari mahususi</strong>, ya <strong>kukisia</strong>, ya <strong>msamiati</strong>, ya <strong>sifa za wahusika</strong>, ya <strong>maoni</strong> na ya <strong>funzo</strong>.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Soma → kisia → jaribu neno mbadala. Tambua aina ya swali kabla ya kujibu.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muktadha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya maneno yanayozunguka neno.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Maana hutegemea muktadha.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuvimba</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuongezeka ukubwa kwa sababu ya ugonjwa au jeraha.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Shavu lilivimba.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tundu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shimo dogo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Jino lilikuwa na tundu.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Asidi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kitu chenye ukali kinachoweza kuharibu vitu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Asidi hutoboa meno.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuteua</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumchagua mtu kwa kazi au cheo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mwalimu mkuu alimteua Baraka.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Gwaride</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mkusanyiko rasmi wa wanafunzi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alizungumza gwarideni.</em>
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
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Jino la Baraka” — kifungu cha simulizi</p>
    <p style="margin:8px 0;">(1) Baraka alikuwa mwanafunzi wa Gredi ya 7 katika Shule ya Junia ya Mto Mweupe. Alipenda sana peremende, biskuti na soda. Kila jioni alipotoka shuleni, alinunua peremende tano kwa pesa alizopewa na shangazi yake. Mama yake alipomkumbusha kupiga mswaki kabla ya kulala, Baraka alijibu, “Mama, meno yangu ni meupe kama maziwa. Hayana tatizo!”</p>
    <p style="margin:8px 0;">(2) Usiku mmoja wa Ijumaa, Baraka aliamka saa nane akilia kwa uchungu. Jino lake la nyuma lilikuwa likimuuma kana kwamba linadungwa na sindano. Shavu lake la kushoto lilivimba kama embe bivu. Mama yake aliamka na kumpa maji ya vuguvugu yenye chumvi ili asukutue, lakini maumivu hayakupungua.</p>
    <p style="margin:8px 0;">(3) Kesho yake asubuhi, mama yake alimpeleka katika hospitali ya kaunti. Daktari wa meno, Dkt. Wambui, alilichunguza jino hilo kwa kioo kidogo na kutikisa kichwa. “Jino hili lina tundu kubwa,” alieleza. “Sukari ikikaa kinywani bila kusafishwa, vijidudu huila na kutengeneza asidi inayotoboa meno polepole.” Ilibidi jino hilo ling’olewe.</p>
    <p style="margin:8px 0;">(4) Baraka alirudi nyumbani akiwa na pengo kinywani na funzo moyoni. Dkt. Wambui alikuwa amemfundisha kupiga mswaki mara mbili kwa siku kwa dakika mbili, kusukutua baada ya kula, kupunguza vyakula vyenye sukari na kubadilisha mswaki kila baada ya miezi mitatu. Baraka aliandika ushauri huo kwenye karatasi na kuubandika ukutani karibu na kitanda chake.</p>
    <p style="margin:8px 0;">(5) Wiki mbili baadaye, Baraka aliona kwamba mdogo wake, Zuri, pia alikuwa akila peremende nyingi. Badala ya kumkemea, alimsimulia kisa chake na kumwonyesha pengo lake. Zuri aliogopa, kisha akacheka. “Basi tutapiga mswaki pamoja kila usiku,” akasema. Tangu siku hiyo, ndugu hao wawili walishindana kuona nani angepiga mswaki vizuri zaidi.</p>
    <p style="margin:8px 0;">(6) Mwisho wa muhula, klabu ya afya ya shule ilimwomba Baraka azungumze katika gwaride. Alisimama mbele ya wanafunzi wote na kusema, “Wenzangu, mimi nilifikiri meno meupe ni meno salama. Nilikosea. Usafi wa kinywa ni jukumu letu kila siku. Usingoje jino likuume ndipo ujifunze.” Wanafunzi walipiga makofi, na mwalimu mkuu akamteua kuwa balozi wa usafi wa klabu ya afya.</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Msamiati kwa Muktadha</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Muktadha (aya)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">alisukutua / asukutue</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">maji ya vuguvugu yenye chumvi ili asukutue (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">asafishe kinywa kwa kusukasuka maji</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">lilivimba</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shavu lake… lilivimba kama embe bivu (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">liliongezeka ukubwa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">tundu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jino hili lina tundu kubwa (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">shimo</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ling’olewe</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ilibidi jino hilo ling’olewe (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">litolewe</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kumkemea</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Badala ya kumkemea (5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kumkaripia</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">akamteua</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mwalimu mkuu akamteua kuwa balozi (6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">akamchagua</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kueleza maana kwa muktadha</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Eleza maana ya “ling’olewe” katika aya ya 3.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Daktari alifanya nini kwa jino lililoharibika sana? Baraka alirudi na nini?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Soma sentensi na ifuatayo</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Ilibidi jino hilo ling’olewe… alirudi nyumbani akiwa na pengo.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Kisia</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Jino lilitolewa.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Jaribu mbadala</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Ilibidi jino hilo litolewe” — inaeleweka.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Ling’olewe” inamaanisha litolewe kabisa kutoka mahali pake kinywani.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutoa maana isiyolingana na muktadha, kama “lisafishwe”.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Aina za Maswali ya Ufahamu</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aina ya swali</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jibu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Habari mahususi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baraka alinunua peremende ngapi kila jioni?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tano.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa nini Zuri aliogopa kisha akacheka?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aliogopa pengo la Baraka, kisha akaona ucheshi wake au akatulia.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eleza maana ya “tundu”.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shimo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sifa ya mhusika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taja sifa moja ya Dkt. Wambui.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwelimishaji — alimfundisha Baraka.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maoni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Je, uamuzi wa mwalimu mkuu ulifaa? Eleza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Majibu yatatofautiana; yatoe sababu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Funzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kifungu kinatufunza nini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usafi wa kinywa ni jukumu la kila siku; kinga ni bora kuliko tiba.</td>
    </tr>
    </table>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Kidokezo cha Mtihani</p>
    <div>Swali la alama mbili huhitaji hoja mbili au sehemu mbili. Jibu kwa sentensi kamili.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Eleza maana ya “gwaride”.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Baraka alisimama mbele ya wanafunzi wote.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mkusanyiko rasmi wa wanafunzi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> “Kwa nini Zuri aliogopa?” ni swali la aina gani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Jibu halijaandikwa moja kwa moja.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Swali la kukisia.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Taja funzo moja la kifungu.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Kauli ya Baraka gwarideni.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kinga ni bora kuliko tiba / tupige mswaki kila siku.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Chagua maneno matano mapya kutoka kifungu, eleza maana yake na utunge sentensi zako.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Tungeni maswali sita ya aina tofauti na mbadilishane kujibu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Andaeni “Mchezo wa Msamiati”: kikundi kimoja kisome sentensi, kingine kikisie maana ya neno.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tumia kamusi ya Kiswahili mtandaoni (kwa ruhusa) kulinganisha maana ya muktadha na ya kamusi kwa maneno matatu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Eleza maana ya “tundu”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Shimo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Muktadha ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maneno na sentensi zinazozunguka neno.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Eleza maana ya “kuteua” na utunge sentensi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuchagua. Mfano: Mwalimu alimteua Amina kuwa kiranja.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja aina tatu za maswali ya ufahamu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Habari mahususi, kukisia, msamiati, sifa, maoni, funzo (zozote tatu).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini Baraka aliandika ushauri na kuubandika ukutani? (alama 2)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili ausome kila siku na kuukumbuka; na ili ajikumbushe kuufuata kabla ya kulala.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Andika mambo matatu ya ushauri wa kutunza meno kwa wanafunzi wa gredi za chini.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Piga mswaki mara mbili kwa siku; punguza peremende; sukutua baada ya kula.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Pendekeza kichwa kingine cha kifungu na ueleze kwa nini kinafaa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Pengo la Funzo” — linaonyesha kwamba Baraka alijifunza kutokana na kupoteza jino.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Maana ya msamiati hupatikana kwa kusoma muktadha, kukisia na kujaribu neno mbadala. Maswali ya ufahamu ni ya aina mbalimbali na hujibiwa kwa sentensi kamili zenye ushahidi. Tunasoma ufahamu ili kuelewa habari na kujifunza — kama tulivyojifunza kutunza meno yetu.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Soma → kisia → jaribu mbadala.</li>
    <li>Tambua aina ya swali.</li>
    <li>Alama huonyesha urefu wa jibu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Maana ya muktadha ndiyo inayohitajika.</li>
    <li>Tunga sentensi yenye maana kamili.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kunakili sentensi ya kifungu kama maana.</li>
    <li>Kujibu kwa neno moja.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Eleza maana kisha tunga sentensi ukiulizwa.</li>
    <li>Andika funzo kwa sentensi kamili.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia maana bila kamusi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu maswali ya kukisia.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutumia kamusi mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Upendo</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya: usafi wa kinywa</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Lishe bora</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Tunakutana na maneno mapya kwenye maelekezo ya dawa, matangazo na habari; kukisia maana kwa muktadha hutusaidia kuelewa haraka.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Jibu maswali sita ya aina tofauti kuhusu “Jino la Baraka”.</li>
    <li>Andika maneno kumi mapya na maana zake katika daftari la msamiati.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni aina gani ya swali inayonipa ugumu?</li>
    <li>Kifungu kimebadilishaje tabia yangu ya kutunza meno?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Muktadha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya neno.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tundu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shimo.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuteua</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuchagua.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Gwaride</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mkusanyiko rasmi.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza msamiati kwa muktadha.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua aina za maswali.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu kwa sentensi kamili.</p>
    <p style="margin:6px 0;">☐ Ninachangamkia kusoma vifungu vya simulizi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Muktadha ni:',
            options: ['Kamusi', 'Kichwa cha habari', 'Herufi ya kwanza', 'Maneno yanayozunguka neno'],
            correct: 3,
            explanation: 'Muktadha husaidia kukisia maana ya neno.'
        },
        {
            question: '“Ling’olewe” linamaanisha:',
            options: ['Lisafishwe', 'Lipakwe rangi', 'Litolewe', 'Lifichwe'],
            correct: 2,
            explanation: 'Baraka alirudi na pengo, kwa hivyo jino lilitolewa.'
        },
        {
            question: '“Tundu” linamaanisha:',
            options: ['Mswaki', 'Dawa', 'Shimo', 'Shavu'],
            correct: 2,
            explanation: 'Asidi ilitoboa shimo kwenye jino.'
        },
        {
            question: '“Akamteua” linamaanisha:',
            options: ['Akamkemea', 'Akamfukuza', 'Akamsahau', 'Akamchagua'],
            correct: 3,
            explanation: 'Mwalimu mkuu alimchagua Baraka kuwa balozi.'
        },
        {
            question: '“Baraka alinunua peremende ngapi?” ni swali la:',
            options: ['Maoni', 'Funzo', 'Kukisia', 'Habari mahususi'],
            correct: 3,
            explanation: 'Jibu limo moja kwa moja kifunguni.'
        },
        {
            question: 'Funzo kuu la kifungu ni:',
            options: ['Peremende ni chakula bora', 'Hospitali si muhimu', 'Usafi wa kinywa ni jukumu la kila siku', 'Meno meupe ni salama daima'],
            correct: 2,
            explanation: 'Kauli ya Baraka gwarideni inaonyesha funzo hili.'
        },
        {
            question: 'Hatua ya mwisho ya kupata maana kwa muktadha ni:',
            options: ['Kujaribu neno mbadala', 'Kunakili', 'Kuruka neno', 'Kubahatisha'],
            correct: 0,
            explanation: 'Neno mbadala likileta maana, umepata jibu.'
        },
        {
            question: '“Gwaride” ni:',
            options: ['Mkusanyiko rasmi wa wanafunzi', 'Chumba cha daktari', 'Aina ya peremende', 'Mswaki'],
            correct: 0,
            explanation: 'Baraka alizungumza mbele ya wanafunzi wote.'
        },
        {
            question: '“Kusukutua” ni:',
            options: ['Kula haraka', 'Kusafisha kinywa kwa kusukasuka maji', 'Kulala', 'Kuimba'],
            correct: 1,
            explanation: 'Mama alimpa maji ya chumvi asukutue.'
        },
        {
            question: 'Swali la alama mbili linahitaji:',
            options: ['Neno moja', 'Hoja mbili au sehemu mbili', 'Aya tano', 'Picha'],
            correct: 1,
            explanation: 'Alama huonyesha kiasi cha jibu.'
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
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Kusoma kwa Ufahamu: Kifungu cha Simulizi</h2>
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
    <li>Kudondoa habari mahususi</li>
    <li>Mfuatano wa matukio</li>
    <li>Kutabiri na kufasiri</li>
    <li>Msamiati kwa muktadha</li>
    <li>Aina za maswali ya ufahamu</li>
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
    <div>Rejelea kifungu “Jino la Baraka” kila unapojibu.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mhusika mkuu wa kifungu ni:',
            options: ['Zuri', 'Dkt. Wambui', 'Baraka', 'Mwalimu mkuu'],
            correct: 2,
            explanation: 'Hadithi inafuata maisha na mabadiliko ya Baraka.'
        },
        {
            question: 'Chanzo cha tatizo la jino kilikuwa:',
            options: ['Kucheza mpira', 'Maji safi', 'Kusoma sana', 'Sukari nyingi bila kupiga mswaki'],
            correct: 3,
            explanation: 'Vijidudu hula sukari na kutengeneza asidi.'
        },
        {
            question: 'Mama alimpa Baraka nini usiku?',
            options: ['Soda', 'Peremende', 'Chai', 'Maji ya vuguvugu yenye chumvi'],
            correct: 3,
            explanation: 'Aya ya 2 inaeleza kwamba alipewa maji ya vuguvugu yenye chumvi.'
        },
        {
            question: 'Dkt. Wambui alishauri mswaki ubadilishwe kila baada ya:',
            options: ['Siku moja', 'Miaka mitano', 'Miezi mitatu', 'Wiki moja'],
            correct: 2,
            explanation: 'Aya ya 4 inataja miezi mitatu.'
        },
        {
            question: 'Kufasiri ni:',
            options: ['Kukisia yajayo', 'Kueleza maana iliyofichika', 'Kunakili', 'Kuhesabu'],
            correct: 1,
            explanation: 'Kufasiri hutafuta maana fiche.'
        },
        {
            question: '“Kuvimba” linamaanisha:',
            options: ['Kuongezeka ukubwa', 'Kupungua', 'Kupona', 'Kulala'],
            correct: 0,
            explanation: 'Shavu liliongezeka ukubwa kwa sababu ya ugonjwa.'
        },
        {
            question: 'Baraka alipewa cheo gani mwishoni?',
            options: ['Kiranja mkuu', 'Daktari', 'Balozi wa usafi', 'Mwalimu'],
            correct: 2,
            explanation: 'Mwalimu mkuu alimteua kuwa balozi wa usafi.'
        },
        {
            question: 'Kiashiria cha mfuatano ni:',
            options: ['Pengo', 'Kesho yake asubuhi', 'Shavu', 'Peremende'],
            correct: 1,
            explanation: 'Kiashiria hiki huonyesha muda uliopita kati ya matukio.'
        },
        {
            question: '“Kama embe bivu” ni mfano wa:',
            options: ['Methali', 'Tashbihi', 'Nahau', 'Kitendawili'],
            correct: 1,
            explanation: 'Inalinganisha kwa kutumia “kama”.'
        },
        {
            question: 'Jibu la swali la ufahamu linapaswa kuwa:',
            options: ['Neno moja tu', 'Aya iliyonakiliwa', 'Picha', 'Sentensi kamili'],
            correct: 3,
            explanation: 'Sentensi kamili huonyesha uelewa.'
        }
    ]
},
{
    name: '1.2 Kazi ya Mradi: Kitabu Kidogo cha Hadithi za Usafi wa Kibinafsi',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Kitabu Kidogo cha Hadithi za Usafi wa Kibinafsi</h2>
    <p style="font-size:16px;">Kwa vikundi, mtaandika simulizi fupi kuhusu usafi wa kibinafsi, kutunga maswali ya ufahamu ya aina tofauti na kutengeneza kitabu kidogo cha darasa.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Maktaba ya shule inataka kitabu kidogo cha hadithi zitakazowahamasisha wanafunzi wa gredi za chini kuhusu usafi wa kibinafsi — meno, mikono, mwili, nywele, kucha na mavazi.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Hadithi huwafundisha watoto tabia njema kwa urahisi kuliko maagizo matupu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Chagueni kipengele kimoja cha usafi wa kibinafsi.</li>
    <li>Andikeni simulizi (maneno 200–250) yenye mhusika anayebadilika na viashiria vya wakati.</li>
    <li>Wekeni kichwa kinachovutia na mchoro mmoja.</li>
    <li>Tungeni maswali sita ya ufahamu (aina sita tofauti) pamoja na majibu.</li>
    <li>Ongezeni orodha ya maneno mapya manane na maana zake za muktadha.</li>
    <li>Someni hadithi kwa mzazi au mlezi na mwandike maoni yake mafupi.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Simulizi yenye kichwa na mchoro</li>
    <li>Maswali sita na majibu</li>
    <li>Orodha ya msamiati</li>
    <li>Maoni ya mzazi au mlezi</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simulizi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mfuatano wazi, ubunifu na funzo zito</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mfuatano wazi na funzo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mfuatano haueleweki vizuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haina mpangilio</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maswali ya ufahamu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina sita tofauti, majibu sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina tano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aina tatu au nne</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya tatu</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno manane kwa maana sahihi za muktadha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno manane kwa maana nyingi sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno manne hadi saba</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya maneno manne</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lugha na unadhifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sahihi na nadhifu kabisa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa machache</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa kadhaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa mengi</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Tumieni viashiria vya wakati.<br>Mhusika abadilike kutoka tabia mbaya hadi nzuri.<br>Msinakili hadithi za wengine.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijifunza nini kuhusu kuandika simulizi?</li>
    <li>Maoni ya mzazi yalinisaidiaje?</li>
    <li>Nitaboresha vipi usafi wangu wa kibinafsi?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Simulizi ya kikundi iwe na maneno:',
            options: ['10', '200–250', '2 000', '50'],
            correct: 1,
            explanation: 'Maelekezo yanaomba maneno 200–250.'
        },
        {
            question: 'Kila kikundi kitunge maswali mangapi?',
            options: ['Moja', 'Ishirini', 'Hakuna', 'Sita'],
            correct: 3,
            explanation: 'Maswali sita ya aina tofauti yanahitajika.'
        },
        {
            question: 'Orodha ya msamiati iwe na maneno:',
            options: ['Manane', 'Mawili', 'Mia', 'Hakuna'],
            correct: 0,
            explanation: 'Maelekezo yanaomba maneno manane.'
        },
        {
            question: 'Hadithi isomwe kwa:',
            options: ['Mgeni barabarani', 'Mzazi au mlezi', 'Mtu yeyote mtandaoni', 'Hakuna'],
            correct: 1,
            explanation: 'Maoni ya mzazi husaidia kuboresha kazi.'
        },
        {
            question: 'Mhusika wa hadithi anafaa:',
            options: ['Kubaki vilevile', 'Kuchafuka zaidi', 'Kubadilika kutoka tabia mbaya hadi nzuri', 'Kutoweka'],
            correct: 2,
            explanation: 'Mabadiliko huonyesha funzo.'
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
    <div style="background: linear-gradient(135deg, #581c87, #7e22ce); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Kibinafsi · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Kusoma kwa Ufahamu: Kifungu cha Simulizi</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.2.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔎 Kudondoa</p>
    <div>Nani? Nini? Wapi? Lini? Kwa nini? Vipi?</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔢 Mfuatano</p>
    <div>Viashiria vya wakati: usiku mmoja, kesho yake, wiki mbili baadaye, mwisho wa muhula.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔮 Kutabiri</p>
    <div>Kukisia yatakayotokea kwa vidokezo.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">💡 Kufasiri</p>
    <div>Kueleza maana iliyofichika; tashbihi hutumia “kama”.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">📖 Msamiati</p>
    <div>Soma muktadha, kisia, jaribu neno mbadala.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stadi</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Swali la kujiuliza</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kudondoa habari</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ni nani/nini/wapi/lini?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mfuatano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nini kilitokea kwanza?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutabiri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nini kitafuata?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kufasiri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hii inamaanisha nini hasa?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Neno hili lina maana gani hapa?</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja maswali sita ya kudondoa habari.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Nani, nini, wapi, lini, kwa nini, vipi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja viashiria vitatu vya wakati kutoka “Jino la Baraka”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Usiku mmoja wa Ijumaa, kesho yake asubuhi, wiki mbili baadaye.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Fasiri: “Usingoje jino likuume ndipo ujifunze.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ni bora kuzuia tatizo mapema.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza maana ya “pengo” na utunge sentensi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Nafasi iliyoachwa na jino. Mfano: Mtoto alitabasamu na pengo lake.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Msomaji makini hudondoa habari na kufuata mfuatano.</li>
    <li>Hutabiri na hufasiri kwa ushahidi.</li>
    <li>Hueleza msamiati kwa muktadha na hujibu kwa sentensi kamili.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kudondoa habari mahususi.</p>
    <p style="margin:6px 0;">☐ Naweza kupanga matukio.</p>
    <p style="margin:6px 0;">☐ Naweza kutabiri na kufasiri.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza msamiati kwa muktadha.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Swali “Lini?” hutafuta:',
            options: ['Wakati', 'Mahali', 'Mtu', 'Sababu'],
            correct: 0,
            explanation: '“Lini” huuliza kuhusu wakati.'
        },
        {
            question: 'Tashbihi hutumia neno:',
            options: ['Lakini', 'Kama', 'Kwa sababu', 'Hata'],
            correct: 1,
            explanation: 'Tashbihi hulinganisha kwa “kama”.'
        },
        {
            question: 'Maana ya neno hutegemea:',
            options: ['Rangi ya karatasi', 'Urefu wa neno', 'Herufi ya kwanza', 'Muktadha'],
            correct: 3,
            explanation: 'Muktadha huonyesha maana inayofaa.'
        },
        {
            question: 'Sifa ya mhusika itajwe pamoja na:',
            options: ['Picha', 'Hadithi nyingine', 'Ushahidi kutoka kifungu', 'Takwimu'],
            correct: 2,
            explanation: 'Ushahidi huthibitisha sifa.'
        },
        {
            question: 'Tunasoma ufahamu ili:',
            options: ['Kupoteza muda', 'Kuelewa habari na kujifunza', 'Kuchora', 'Kunakili'],
            correct: 1,
            explanation: 'Hili ni jibu la swali dadisi la mada ndogo hii.'
        }
    ]
}
],
          stats:{lessons:13,exercises:88,quizzes:14,projects:4,duration:'9 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Mazungumzo ni:',
                  options: ['Barua rasmi', 'Wimbo', 'Mawasiliano ya mdomo kati ya watu wawili au zaidi', 'Insha'],
                  correct: 2,
                  explanation: 'Katika mazungumzo watu hubadilishana mawazo kwa mdomo.'
              },
              {
                  question: 'Msikilizaji bora wa mazungumzo:',
                  options: ['Hukatiza msemaji', 'Humtazama msemaji na kusikiliza kwa makini', 'Huzungumza na mwenzake', 'Hucheza na simu'],
                  correct: 1,
                  explanation: 'Kumtazama msemaji na kusikiliza kwa makini huonyesha heshima.'
              },
              {
                  question: 'Hoja kuu ni:',
                  options: ['Jambo muhimu zaidi katika mazungumzo', 'Neno la kwanza', 'Salamu', 'Jina la msemaji'],
                  correct: 0,
                  explanation: 'Hoja kuu ndiyo ujumbe mkuu unaowasilishwa.'
              },
              {
                  question: 'Neno la adabu ni lipi?',
                  options: ['Tafadhali', 'Nyamaza', 'Toka', 'Haraka'],
                  correct: 0,
                  explanation: '“Tafadhali” hutumika kuomba kwa heshima.'
              },
              {
                  question: 'Jibu la salamu “Shikamoo” ni:',
                  options: ['Poa', 'Marahaba', 'Sijambo', 'Asante'],
                  correct: 1,
                  explanation: 'Mkubwa hujibu salamu hii ya heshima kwa “marahaba”.'
              },
              {
                  question: 'Njia ya heshima ya kutokubaliana ni:',
                  options: ['Wewe hujui kitu', 'Nyamaza', 'Huna akili', 'Naomba kutofautiana nawe kwa heshima'],
                  correct: 3,
                  explanation: 'Hutoa maoni yako bila kumdharau mwingine.'
              },
              {
                  question: 'Kudondoa habari ni:',
                  options: ['Kunakili kifungu chote', 'Kuchagua habari maalumu kutoka matini', 'Kuchora picha', 'Kuandika insha'],
                  correct: 1,
                  explanation: 'Kudondoa ni kuchagua taarifa inayojibu swali.'
              },
              {
                  question: 'Kiashiria cha wakati ni:',
                  options: ['Shavu', 'Pengo', 'Peremende', 'Wiki mbili baadaye'],
                  correct: 3,
                  explanation: 'Viashiria vya wakati huonyesha mfuatano wa matukio.'
              },
              {
                  question: 'Kufasiri ni:',
                  options: ['Kukisia yajayo', 'Kunakili', 'Kueleza maana iliyofichika', 'Kuhesabu maneno'],
                  correct: 2,
                  explanation: 'Kufasiri hutafuta maana fiche ya kauli au tukio.'
              },
              {
                  question: '“Meupe kama maziwa” ni mfano wa:',
                  options: ['Methali', 'Kitendawili', 'Nahau', 'Tashbihi'],
                  correct: 3,
                  explanation: 'Tashbihi hulinganisha vitu viwili kwa kutumia “kama”.'
              },
              {
                  question: 'Maana ya neno katika kifungu hupatikana kwa kutumia:',
                  options: ['Muktadha', 'Rangi', 'Urefu wa neno', 'Herufi ya kwanza'],
                  correct: 0,
                  explanation: 'Muktadha ndio huonyesha maana inayofaa ya neno.'
              },
              {
                  question: 'Funzo kuu la “Jino la Baraka” ni:',
                  options: ['Peremende ni chakula bora', 'Hospitali si muhimu', 'Usafi wa kinywa ni jukumu la kila siku', 'Meno meupe ni salama daima'],
                  correct: 2,
                  explanation: 'Baraka alijifunza kwamba kutunza meno kila siku huzuia magonjwa.'
              }
          ]}
);