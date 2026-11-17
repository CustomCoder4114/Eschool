// Eschool course: Grade 9 Kiswahili (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'kiswahili-grade-9', name:'Grade 9 Kiswahili', code:'KSL 091', level:'grade-9', iconStyle:'fas', icon:'fa-language', color:'#c2410c',
          category:'Languages',
          description:'Kozi kamili ya Kiswahili cha Gredi ya 9 (CBC, Kenya): kusikiliza na kuzungumza, kusoma, kuandika na sarufi, kwa matini asilia, mifano ya hatua kwa hatua, maswali shirikishi na majaribio.',
          longDescription:'Kozi hii inafuata mtaala wa KICD wa Kiswahili cha Gredi ya 9 (Shule ya Junia). Mtaala umepangwa katika mada kumi na tano, kuanzia Usafi wa Mazingira, Mazoezi ya Viungo vya Mwili na Utunzaji wa Wanyama hadi Matumizi ya Kodi na Maadili ya Kitaifa. Kila mada ina mada ndogo nne: Kusikiliza na Kuzungumza, Kusoma, Kuandika na Sarufi. Kila mada ndogo ina masomo matatu, Zoezi la Tathmini, Kazi ya Mradi na Marudio. Kila somo lina matokeo yanayotarajiwa, swali dadisi, maelezo ya mwalimu, msamiati, matini asilia za Kikenya, mifano ya hatua kwa hatua, maswali shirikishi, shughuli za kibinafsi, za wawili, za vikundi na za kidijitali, mazoezi ya viwango mbalimbali, umilisi wa CBC, maadili, masuala mtambuko, makosa ya kawaida, vidokezo vya mtihani, kazi ya nyumbani, tafakari, faharasa na jaribio la maswali kumi yenye maelezo.',
          modules:[
{
    name: '1.0 Usafi wa Mazingira — Utangulizi wa Mada',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Utangulizi wa Mada</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🗺️ Mada 1.0: Usafi wa Mazingira</h2>
    <p style="font-size:16px;">Karibu katika Kiswahili cha Gredi ya 9, mwaka wako wa mwisho katika Shule ya Junia. Mwaka huu utakuza stadi nne za lugha — kusikiliza na kuzungumza, kusoma, kuandika na sarufi — kupitia mada kumi na tano zinazohusu maisha halisi.</p>
    <p style="font-size:16px;">Mada ya kwanza ni <strong>Usafi wa Mazingira</strong>. Utajifunza kushiriki mjadala kwa adabu, kusoma na kuelewa kifungu cha simulizi, kutumia koloni na semikoloni, na kutumia vihusishi vya mahali na vya wakati — yote yakihusu usafi wa nyumbani, shuleni na katika jamii.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bbf7d0;">❓ Swali dadisi la mada:</strong> Tunawezaje kutumia Kiswahili kuhamasisha usafi wa mazingira katika jamii yetu?</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 Muhtasari wa Mada</h3>
    <p>Mtaala wa KICD wa Gredi ya 9 una mada kumi na tano. Kila mada ina mada ndogo nne: Kusikiliza na Kuzungumza, Kusoma, Kuandika na Sarufi.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mada</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jina la mada</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usafi wa Mazingira</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazoezi ya Viungo vya Mwili</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utunzaji wa Wanyama</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Utunzaji wa Maliasili</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mitazamo Hasi ya Kijinsia</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usalama Barabarani</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huduma katika Asasi za Kijamii</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Misukosuko ya Kijamii</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matumizi ya Vifaa vya Kidijitali katika Biashara</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukabiliana na Msongo wa Mawazo</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haki za Kibinadamu</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magonjwa Yanayotokana na Mienendo ya Maisha</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mshikamano wa Kijamii</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">14.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matumizi ya Kodi</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maadili ya Kitaifa</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Kusikiliza na Kujibu: Mjadala</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na Kuzungumza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mambo ya kuzingatia unaposikiliza na kuchangia mjadala.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupata habari mahususi, kupanga matukio, kutabiri, kufasiri na kueleza msamiati.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Viakifishi: Koloni na Semikoloni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matumizi ya koloni (:) na semikoloni (;) (kundi lijalo).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Vihusishi vya Mahali na vya Wakati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sarufi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutambua na kutumia vihusishi vya mahali na vya wakati (kundi lijalo).</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 Matokeo ya Ujifunzaji wa Mada</h3>
    <p>Kufikia mwisho wa mada hii, mwanafunzi aweze:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Kusikiliza na kuchangia mjadala kwa kuzingatia adabu na taratibu zake.</li>
    <li>Kusoma kifungu cha simulizi na kujibu maswali ya ufahamu kwa usahihi.</li>
    <li>Kutumia koloni na semikoloni ipasavyo katika maandishi.</li>
    <li>Kutumia vihusishi vya mahali na vya wakati kwa usahihi.</li>
    <li>Kuthamini usafi wa mazingira katika jamii.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Ramani ya Mada</h3>
    <p>Mada hii ina mada ndogo nne. Kila mada ndogo ina masomo matatu, zoezi la tathmini, kazi ya mradi na somo la marudio.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.1 Kusikiliza na Kujibu: Mjadala</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.1.1 Maana na taratibu za mjadala</li>
    <li>Somo 1.1.2 Kusikiliza na kuchangia mjadala</li>
    <li>Somo 1.1.3 Kushiriki mjadala kuhusu usafi</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Somo 1.2.1 Kupata habari mahususi na kupanga matukio</li>
    <li>Somo 1.2.2 Kutabiri na kufasiri</li>
    <li>Somo 1.2.3 Msamiati na maswali ya ufahamu</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.3 Viakifishi: Koloni na Semikoloni</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Masomo yatakuja katika kundi lijalo</li>
    <li>📝 Zoezi la Tathmini</li>
    <li>📂 Kazi ya Mradi</li>
    <li>🔁 Marudio</li>
    </ul>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0;color:#86efac;font-weight:bold;">1.4 Vihusishi vya Mahali na vya Wakati</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kushiriki mijadala na kazi za vikundi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fikra makini na utatuzi wa matatizo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa na kujibu hoja; kutabiri na kufasiri matukio.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ujuzi wa kidijitali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutazama mijadala iliyorekodiwa na kusoma matini mtandaoni.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ubunifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutunga hoja na sentensi kuhusu usafi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujiamini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumza mbele ya wenzako.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uzalendo</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu ya mazingira</span>
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
            question: 'Mtaala wa Kiswahili wa Gredi ya 9 una mada ngapi?',
            options: ['Kumi na tano', 'Kumi', 'Nne', 'Ishirini'],
            correct: 0,
            explanation: 'Mtaala wa KICD wa Gredi ya 9 una mada kumi na tano.'
        },
        {
            question: 'Mada ya kwanza ya Gredi ya 9 ni:',
            options: ['Usalama Barabarani', 'Haki za Kibinadamu', 'Usafi wa Mazingira', 'Maadili ya Kitaifa'],
            correct: 2,
            explanation: 'Mada 1.0 inahusu usafi wa mazingira.'
        },
        {
            question: 'Kila mada ina mada ndogo ngapi?',
            options: ['Mbili', 'Sita', 'Moja', 'Nne'],
            correct: 3,
            explanation: 'Kila mada ina mada ndogo za kusikiliza na kuzungumza, kusoma, kuandika na sarufi.'
        },
        {
            question: 'Mada ndogo ya sarufi katika Mada 1.0 inahusu:',
            options: ['Ngeli za nomino', 'Vielezi', 'Usemi halisi', 'Vihusishi vya mahali na vya wakati'],
            correct: 3,
            explanation: 'Mada ndogo 1.4 inafundisha vihusishi vya mahali na vya wakati.'
        },
        {
            question: 'Viakifishi vinavyofundishwa katika Mada 1.0 ni:',
            options: ['Mabano na kistari', 'Kiulizi na hisi', 'Koloni na semikoloni', 'Nukta na mkato'],
            correct: 2,
            explanation: 'Mada ndogo 1.3 inahusu koloni na semikoloni.'
        }
    ]
},
{
    name: '1.1.1 Mjadala: Maana na Taratibu za Mjadala',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mjadala</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.1: Maana na Taratibu za Mjadala</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza maana ya mjadala, washiriki wake (mwenyekiti, watetezi, wapinzani, katibu, mlinda muda na wachangiaji) na taratibu zinazofuatwa kuanzia kufunguliwa hadi kupigwa kura.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Mjadala hutufundisha kufikiri kwa makini, kusikiliza maoni tofauti na kutetea hoja zetu kwa adabu. Stadi hizi zinahitajika shuleni, katika vikao vya jamii, bungeni na kazini.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Vilabu vya mjadala</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Bunge na mabaraza ya kaunti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Vipindi vya redio na runinga</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏘️ Mikutano ya jamii</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Vikao vya kazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗳️ Kampeni</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kubainisha mambo ya kuzingatia unaposikiliza na kuchangia mjadala.</li>
    <li>Kushiriki mjadala katika miktadha mbalimbali.</li>
    <li>Kuthamini mjadala kama njia ya kubadilishana mawazo.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unazingatia nini wakati wa kusikiliza na kuchangia mjadala?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Katika Gredi ya 8 ulishiriki mazungumzo na majadiliano ya darasani.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Mjadala</strong> ni mazungumzo rasmi ambapo pande mbili hutoa hoja kuunga mkono au kupinga <strong>hoja</strong> (mada) fulani, chini ya uongozi wa <strong>mwenyekiti</strong>. Upande unaounga mkono huitwa <strong>watetezi</strong>; upande unaopinga huitwa <strong>wapinzani</strong>.</p>
    <p>Mjadala hufuata taratibu: mwenyekiti hufungua kikao, husoma hoja na kanuni; wazungumzaji wakuu hutoa hoja kwa zamu; wachangiaji kutoka sakafuni huchangia; kisha kura hupigwa na mshindi hutangazwa.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Mjadala = hoja + pande mbili + mwenyekiti + adabu + kura.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mjadala</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazungumzo rasmi ya kutetea au kupinga hoja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Klabu ilifanya mjadala kuhusu usafi.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hoja</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mada au kauli inayojadiliwa; pia wazo linalotolewa kuunga mkono jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Hoja ya leo inahusu taka za plastiki.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mwenyekiti</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kiongozi wa mjadala anayedumisha utaratibu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mwenyekiti aliwakaribisha wageni.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mtetezi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mzungumzaji anayeunga mkono hoja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mtetezi wa kwanza alizungumza kwa ufasaha.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mpinzani</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mzungumzaji anayepinga hoja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mpinzani alitoa mfano mzuri.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mlinda muda</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu anayehakikisha wazungumzaji hawazidishi muda.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mlinda muda aligonga kengele.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Washiriki wa Mjadala</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mshiriki</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jukumu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwenyekiti</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hufungua na kufunga mjadala, husoma hoja na kanuni, hudumisha nidhamu na hutangaza matokeo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Katibu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huandika hoja muhimu na matokeo ya kura.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mlinda muda</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hupima muda wa kila mzungumzaji.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Watetezi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hutoa hoja za kuunga mkono hoja kuu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wapinzani</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hutoa hoja za kupinga hoja kuu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wachangiaji (sakafu)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wanafunzi wengine wanaotoa michango mifupi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Waamuzi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hutathmini ubora wa hoja na uwasilishaji (katika mashindano).</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Taratibu za Mjadala</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1. Mwenyekiti anafungua kikao na kuwakaribisha wote.</li>
    <li>2. Katibu au mwenyekiti anasoma hoja na kanuni (k.v. muda, lugha ya heshima).</li>
    <li>3. Wazungumzaji wakuu wanazungumza kwa zamu: mtetezi, mpinzani, mtetezi, mpinzani.</li>
    <li>4. Sakafu inafunguliwa kwa wachangiaji.</li>
    <li>5. Wazungumzaji wa mwisho wanajumlisha hoja zao.</li>
    <li>6. Kura zinapigwa na mwenyekiti anatangaza matokeo, kisha anafunga kikao.</li>
    </ul>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kubaini mshiriki</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Katika mjadala, mtu mmoja anasema: “Muda wako umekwisha, tafadhali hitimisha.” Mtu huyu ni nani, na kwa nini kazi yake ni muhimu?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Nani anahusika na muda?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Bainisha jukumu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Anahusika na muda.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Taja mshiriki</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ni mlinda muda (au mwenyekiti kwa niaba yake).</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Eleza umuhimu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Anahakikisha kila mzungumzaji anapata nafasi sawa.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Ni mlinda muda; kazi yake huhakikisha usawa na mpangilio mzuri wa mjadala.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kudhani ni mpinzani — wapinzani hawadhibiti muda.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Upande unaounga mkono hoja huitwa?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Watetezi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Nani hutangaza matokeo ya kura?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwenyekiti.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Sakafu ni nini katika mjadala?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hadhira/wanafunzi wengine wanaochangia baada ya wazungumzaji wakuu.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Lugha ya Heshima katika Mjadala</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lengo</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maneno ya adabu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuanza</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Bwana/Bi. Mwenyekiti, mwalimu wetu, waamuzi, wanafunzi wenzangu, hamjambo?”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukubali</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Ninakubaliana na mzungumzaji aliyetangulia…”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupinga</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Kwa heshima, naomba kutofautiana na mwenzangu…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuhitimisha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Kwa hayo machache, naomba mniunge mkono. Asanteni.”</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Shambulia hoja, si mtu. Badala ya “Mwenzangu hajui kitu”, sema “Hoja ya mwenzangu ina upungufu kwa sababu…”.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Taja washiriki wanne wa mjadala.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria kila mtu katika ukumbi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwenyekiti, katibu, mlinda muda, watetezi, wapinzani, wachangiaji, waamuzi (wowote wanne).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Ni nini hufanyika mwisho wa mjadala?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Mshindi hupatikanaje?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kura hupigwa, matokeo hutangazwa na kikao hufungwa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Andika maneno ya heshima ya kupinga hoja.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Anza na “kwa heshima”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Kwa heshima, naomba kutofautiana na mwenzangu.”</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Chora mchoro wa ukumbi wa mjadala ukionyesha mahali pa kila mshiriki.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mmoja aigize mwenyekiti akifungua mjadala; mwingine aigize mlinda muda. Badilishaneni.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Tengenezeni chati ya “Taratibu za Mjadala” na kuibandika darasani.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tazama mjadala uliorekodiwa (k.m. wa bunge au wa shule) kwenye kifaa cha kidijitali kwa idhini ya mwalimu. Taja washiriki uliowaona.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Mjadala ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mazungumzo rasmi ambapo pande mbili hutetea au kupinga hoja chini ya mwenyekiti.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Mpinzani ni nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mzungumzaji anayepinga hoja.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Eleza majukumu mawili ya mwenyekiti.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kufungua na kufunga mjadala; kudumisha nidhamu; kusoma hoja; kutangaza matokeo (yoyote mawili).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Panga taratibu hizi: kura, kufungua kikao, wazungumzaji wakuu, sakafu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kufungua kikao, wazungumzaji wakuu, sakafu, kura.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini mjadala unahitaji kanuni?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kudumisha nidhamu, kuhakikisha usawa wa muda na heshima kati ya washiriki.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Taja mahali pawili katika jamii ambapo mijadala hufanyika.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Bunge, mabaraza ya kaunti, mikutano ya chifu, vipindi vya redio (yoyote miwili).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Je, mshindi wa mjadala ndiye mwenye ukweli kila mara? Eleza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Si lazima; mshindi huwa aliyewasilisha hoja kwa ushawishi zaidi, si lazima ukweli wote.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Mjadala ni mazungumzo rasmi ya kutetea au kupinga hoja chini ya mwenyekiti. Washiriki ni mwenyekiti, katibu, mlinda muda, watetezi, wapinzani, wachangiaji na waamuzi. Mjadala hufuata taratibu maalumu na lugha ya heshima.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hoja hujadiliwa na pande mbili.</li>
    <li>Mwenyekiti hudumisha utaratibu.</li>
    <li>Taratibu: kufungua, wazungumzaji, sakafu, kura, kufunga.</li>
    <li>Shambulia hoja, si mtu.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Anza kwa kuwasalimu wote.</li>
    <li>Zingatia muda.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kuzungumza bila ruhusa ya mwenyekiti.</li>
    <li>Kumtusi mpinzani.</li>
    <li>Kuzidisha muda.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ukiulizwa washiriki wa mjadala, taja na ueleze majukumu yao.</li>
    <li>Toa mifano ya lugha ya heshima.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kushiriki mjadala kwa zamu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujiamini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumza mbele ya wenzako.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutazama mijadala iliyorekodiwa.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uraia</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Wabunge, madiwani na viongozi wa jamii hujadili sheria na sera zinazotuhusu sote.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika majukumu ya washiriki saba wa mjadala.</li>
    <li>Andika maneno ya heshima ya kufungua mjadala.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Je, huwa nasikiliza maoni yanayotofautiana na yangu?</li>
    <li>Ningependa kuwa nani katika mjadala? Kwa nini?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mjadala</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazungumzo rasmi ya kujadili hoja.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mtetezi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anayeunga mkono hoja.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mpinzani</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anayepinga hoja.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sakafu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hadhira inayochangia.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza maana ya mjadala.</p>
    <p style="margin:6px 0;">☐ Naweza kutaja washiriki na majukumu yao.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza taratibu za mjadala.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia lugha ya heshima.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mjadala ni:',
            options: ['Mchezo wa mpira', 'Mazungumzo rasmi ya kutetea au kupinga hoja', 'Hadithi ya kubuni', 'Barua rasmi'],
            correct: 1,
            explanation: 'Mjadala huwa na pande mbili zinazojadili hoja chini ya mwenyekiti.'
        },
        {
            question: 'Anayeunga mkono hoja huitwa:',
            options: ['Mpinzani', 'Katibu', 'Mtetezi', 'Mlinda muda'],
            correct: 2,
            explanation: 'Watetezi hutoa hoja za kuunga mkono.'
        },
        {
            question: 'Nani hudumisha nidhamu katika mjadala?',
            options: ['Mpinzani', 'Mchangiaji', 'Mwenyekiti', 'Mtetezi'],
            correct: 2,
            explanation: 'Mwenyekiti huongoza na kudumisha utaratibu.'
        },
        {
            question: 'Mlinda muda hufanya nini?',
            options: ['Hupiga kura', 'Huandika hoja', 'Hupinga hoja', 'Hupima muda wa wazungumzaji'],
            correct: 3,
            explanation: 'Huhakikisha kila mzungumzaji hazidishi muda.'
        },
        {
            question: 'Hatua ya mwisho ya mjadala ni:',
            options: ['Kusoma hoja', 'Kufungua kikao', 'Wazungumzaji wakuu', 'Kura na kutangaza matokeo'],
            correct: 3,
            explanation: 'Mjadala humalizika kwa kura na kufungwa kwa kikao.'
        },
        {
            question: 'Ni ipi lugha ya heshima ya kupinga?',
            options: ['Wewe huna akili', 'Kwa heshima, naomba kutofautiana na mwenzangu', 'Nyamaza!', 'Hoja yako ni ujinga'],
            correct: 1,
            explanation: 'Inapinga hoja huku ikimheshimu mzungumzaji.'
        },
        {
            question: 'Sakafu katika mjadala ni:',
            options: ['Wachangiaji kutoka hadhira', 'Sakafu ya ukumbi tu', 'Waamuzi', 'Mwenyekiti'],
            correct: 0,
            explanation: 'Baada ya wazungumzaji wakuu, hadhira hupewa nafasi ya kuchangia.'
        },
        {
            question: 'Katibu wa mjadala:',
            options: ['Huandika hoja muhimu na matokeo', 'Hupima muda', 'Hupinga hoja', 'Hufunga kikao'],
            correct: 0,
            explanation: 'Katibu huhifadhi kumbukumbu za mjadala.'
        }
    ]
},
{
    name: '1.1.2 Mjadala: Kusikiliza na Kuchangia Mjadala',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mjadala</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.2: Kusikiliza na Kuchangia Mjadala</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutasikiliza mjadala kuhusu usafi wa mazingira ya shule na kubaini mambo ya kuzingatia tunaposikiliza (makini, kudokeza hoja, kutokatiza) na tunapochangia (ruhusa, hoja wazi, mifano, adabu, muda).</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Mchango mzuri katika mjadala hutegemea kusikiliza vizuri. Ukisikiliza kwa makini, utajibu hoja za wengine kwa usahihi badala ya kurudia yaliyokwisha kusemwa.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Darasani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏘️ Mikutano ya wakazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛪ Vikao vya kidini</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Vipindi vya redio</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Vikao vya kazi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Mabaraza</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kubainisha mambo ya kuzingatia unaposikiliza na kuchangia mjadala.</li>
    <li>Kushiriki mjadala katika miktadha mbalimbali.</li>
    <li>Kuthamini mjadala kama njia ya kubadilishana mawazo.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unazingatia nini wakati wa kusikiliza na kuchangia mjadala?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.1.1 — maana, washiriki na taratibu za mjadala.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Msikilizaji mzuri wa mjadala <strong>hutulia</strong>, <strong>humtazama</strong> mzungumzaji, <strong>hudokeza</strong> hoja muhimu na <strong>hasubiri</strong> zamu yake. Mchangiaji mzuri <strong>huomba ruhusa</strong> kwa mwenyekiti, hutoa <strong>hoja moja wazi</strong> yenye <strong>mfano</strong>, hujibu hoja zilizotangulia kwa <strong>adabu</strong> na <strong>huzingatia muda</strong>.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Sikiliza → dokeza → subiri → omba ruhusa → changia kwa adabu na kwa ufupi.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudokeza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika maneno machache muhimu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Nilidokeza hoja za wapinzani.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukatiza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumkatisha mtu anapozungumza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Si adabu kumkatiza mzungumzaji.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mchango</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazo au maoni yanayotolewa katika mjadala.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Mchango wake ulikuwa mfupi na wenye mashiko.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kujibu hoja</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutoa sababu za kukubali au kupinga hoja iliyotolewa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Hassan alijibu hoja ya Wanjiru kwa adabu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Taka</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uchafu au vitu visivyohitajika.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Taka za plastiki huziba mitaro.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Sikiliza Mjadala</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Kidokezo cha Mwalimu</p>
    <div>Wanafunzi wasome sehemu za wahusika kwa sauti. Wengine wasikilize bila kuangalia matini na wadokeze hoja.</div>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mwenyekiti (Amani):</strong> Mwalimu wetu, wanafunzi wenzangu, hamjambo? Hoja ya leo ni: “Usafi wa mazingira ya shule ni jukumu la wanafunzi pekee.” Kila mzungumzaji ana dakika mbili. Tuanze na mtetezi wa kwanza.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mtetezi (Wanjiru):</strong> Asante, Bwana Mwenyekiti. Sisi wanafunzi ndio tunaotumia madarasa, vyoo na uwanja kila siku. Tukitupa karatasi ovyo, nani mwingine atakuja kuzizoa? Usafi huanza na mtumiaji.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mpinzani (Hassan):</strong> Asante, Mwenyekiti. Ninaheshimu hoja ya mwenzangu, lakini naomba kutofautiana naye. Wanafunzi hawana vifaa kama mapipa ya taka wala dawa za kusafishia vyoo. Shule na serikali ya kaunti zina jukumu la kuvileta. Usafi ni jukumu la kila mmoja.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mtetezi (Atieno):</strong> Mwenyekiti, hata bila mapipa, tunaweza kubeba karatasi hadi nyumbani au kutengeneza vikapu kwa makaratasi chakavu. Penye nia pana njia.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mpinzani (Kiprop):</strong> Kwa heshima, Mwenyekiti, mwenzangu anasahau kwamba taka za shule zinahitaji kuchomwa au kusafirishwa mbali. Hiyo ni kazi ya wafanyakazi na kaunti, si ya watoto.</p>
    <p style="margin:6px 0;"><strong style="color:#fde68a;">Mwenyekiti (Amani):</strong> Asanteni nyote kwa hoja nzuri na kwa adabu yenu. Sasa nafungua sakafu kwa wachangiaji wengine kabla ya kupiga kura.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Hoja ya mjadala ni ipi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Usafi wa mazingira ya shule ni jukumu la wanafunzi pekee.”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Taja hoja moja ya watetezi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wanafunzi ndio watumiaji wakuu; wanaweza kubeba karatasi au kutengeneza vikapu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Taja hoja moja ya wapinzani.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Shule na kaunti zina jukumu la kuleta vifaa na kusafirisha taka.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>4.</strong> Taja methali iliyotumika.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Penye nia pana njia.”</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Mambo ya Kuzingatia</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unaposikiliza</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unapochangia</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tulia na umtazame mzungumzaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simama au inua mkono na usubiri ruhusa ya mwenyekiti</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dokeza hoja muhimu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwamkie mwenyekiti na hadhira</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usimkatize mzungumzaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Toa hoja moja wazi yenye mfano</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tambua hoja dhaifu za kujibu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jibu hoja zilizotangulia kwa adabu</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Onyesha heshima kwa viziada lugha (k.v. kutikisa kichwa)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tumia lugha fasaha na sauti inayosikika</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usicheke wala kuzomea</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zingatia muda na umalize kwa shukrani</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kuandaa mchango wa sakafu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Andaa mchango mfupi wa kuunga mkono wapinzani katika mjadala ulio hapo juu.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Omba ruhusa, salimia, jibu hoja ya watetezi, toa mfano, shukuru.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Salamu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Bwana Mwenyekiti, asante kwa nafasi hii.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Jibu hoja</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Watetezi wamesema tunaweza kubeba taka nyumbani, lakini taka za chakula huoza na kuleta nzi.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Mfano</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Mwezi uliopita, shimo la taka la shule lilijaa na kaunti ndiyo iliyosaidia kulizoa.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bfdbfe;">Hatua ya 4: Hitimisho</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Kwa hivyo, usafi ni jukumu la kila mmoja. Asante.”</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Mchango wenye salamu, jibu kwa hoja iliyotangulia, mfano halisi na shukrani — usiozidi dakika moja.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kurudia hoja iliyokwisha kutolewa bila kuongeza kitu kipya.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Taja mambo mawili ya kuzingatia unaposikiliza mjadala.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria tabia ya msikilizaji mzuri.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutulia, kudokeza hoja, kutomkatiza mzungumzaji, kumtazama (yoyote mawili).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Kwa nini ni muhimu kudokeza hoja?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Utajibu nini baadaye?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kukumbuka hoja za kujibu unapopewa nafasi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Mchangiaji anapaswa kuanza vipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Anza kwa adabu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwa kuomba ruhusa na kumwamkia mwenyekiti na hadhira.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Sikiliza mjadala wa redio au runinga na udokeze hoja tatu za kila upande.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Mmoja atoe hoja; mwingine adokeze kisha aijibu kwa adabu ndani ya dakika moja.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Igizeni mjadala uliotolewa hapo juu, kisha ongezeni michango mitatu ya sakafu.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tazama mjadala uliorekodiwa kuhusu usafi au mazingira kwenye kifaa cha kidijitali. Andika mambo matatu ya kusikiliza na kuchangia uliyoyaona.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Kudokeza ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuandika maneno machache muhimu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Je, ni adabu kumkatiza mzungumzaji?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hapana.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja mambo matatu ya kuzingatia unapochangia mjadala.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuomba ruhusa, kusalimia, kutoa hoja wazi yenye mfano, kutumia adabu, kuzingatia muda (yoyote matatu).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza maana ya methali “Penye nia pana njia”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mtu mwenye nia ya dhati atapata njia ya kufanikisha jambo.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Andika jibu la adabu kwa hoja ya Kiprop kwamba usafirishaji wa taka si kazi ya watoto.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Kwa heshima, wanafunzi hawasafirishi taka, lakini wanaweza kuzipanga kwa aina ili kurahisisha kazi ya kaunti.”</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Katika mkutano wa wakazi kuhusu taka, mzee anakatiza kila mara. Mwenyekiti afanye nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Amkumbushe kwa adabu kanuni za kikao na amhakikishie kwamba atapata zamu yake.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini kusikiliza vizuri ni muhimu kama kuzungumza vizuri katika mjadala?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Bila kusikiliza, huwezi kujibu hoja za wengine ipasavyo; mjadala huwa mazungumzo ya kurudiarudia.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Msikilizaji mzuri hutulia, humtazama mzungumzaji, hudokeza hoja na hasubiri zamu yake. Mchangiaji mzuri huomba ruhusa, husalimia, hutoa hoja wazi yenye mfano, hujibu hoja zilizotangulia kwa adabu na huzingatia muda.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sikiliza kwa makini na udokeze.</li>
    <li>Usikatize.</li>
    <li>Omba ruhusa kabla ya kuchangia.</li>
    <li>Toa hoja moja wazi yenye mfano.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Jibu hoja, si mtu.</li>
    <li>Usirudie hoja zilizokwisha kutolewa.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kucheka au kuzomea wapinzani.</li>
    <li>Kuzungumza bila ruhusa.</li>
    <li>Mchango mrefu mno.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Swali la mambo ya kuzingatia: tenganisha kusikiliza na kuchangia.</li>
    <li>Toa mifano ya lugha ya adabu.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusikiliza na kuchangia kwa zamu.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu hoja za wengine.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutazama mijadala iliyorekodiwa.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uvumilivu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elimu ya mazingira</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Katika mikutano ya chama, kanisa, msikiti au kazi, wanaosikiliza vizuri ndio hutoa michango yenye maana.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika mchango wa sakafu wa kuunga mkono watetezi.</li>
    <li>Dokeza hoja za mjadala mmoja wa redio au runinga.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Je, nilisikiliza bila kukatiza leo?</li>
    <li>Ni mambo gani nitaboresha ninapochangia?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kudokeza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuandika mambo muhimu kwa ufupi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kukatiza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumkatisha mzungumzaji.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mchango</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazo linalotolewa.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Taka</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uchafu.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kusikiliza mjadala kwa makini.</p>
    <p style="margin:6px 0;">☐ Naweza kudokeza hoja.</p>
    <p style="margin:6px 0;">☐ Naweza kuchangia kwa adabu.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu hoja za wengine.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Msikilizaji mzuri wa mjadala:',
            options: ['Hukatiza wazungumzaji', 'Hucheka wapinzani', 'Hudokeza hoja muhimu', 'Huzungumza na jirani'],
            correct: 2,
            explanation: 'Kudokeza humsaidia kukumbuka hoja za kujibu.'
        },
        {
            question: 'Kabla ya kuchangia, mchangiaji anapaswa:',
            options: ['Kusimama na kuzungumza tu', 'Kukatiza mzungumzaji', 'Kuondoka', 'Kuomba ruhusa ya mwenyekiti'],
            correct: 3,
            explanation: 'Mwenyekiti ndiye anayetoa nafasi ya kuzungumza.'
        },
        {
            question: 'Hoja ya mjadala katika somo ni kuhusu:',
            options: ['Michezo', 'Kilimo', 'Teknolojia', 'Usafi wa mazingira ya shule'],
            correct: 3,
            explanation: 'Hoja ilihusu jukumu la usafi wa shule.'
        },
        {
            question: '“Penye nia pana njia” ilitumiwa na:',
            options: ['Hassan', 'Kiprop', 'Atieno', 'Amani'],
            correct: 2,
            explanation: 'Atieno, mtetezi, aliitumia kuonyesha kwamba wanafunzi wanaweza kutafuta suluhisho.'
        },
        {
            question: 'Hoja ya Hassan ilikuwa kwamba:',
            options: ['Wanafunzi pekee wawajibike', 'Shule na kaunti zina jukumu la kuleta vifaa', 'Taka hazina madhara', 'Mjadala usimame'],
            correct: 1,
            explanation: 'Alisisitiza kuwa usafi ni jukumu la kila mmoja.'
        },
        {
            question: 'Mchango mzuri unapaswa kuwa na:',
            options: ['Hoja wazi yenye mfano', 'Matusi', 'Hadithi ndefu isiyohusiana', 'Hoja zilizokwisha kutolewa'],
            correct: 0,
            explanation: 'Hoja wazi yenye mfano huwashawishi wasikilizaji.'
        },
        {
            question: 'Kosa la kawaida katika mjadala ni:',
            options: ['Kuzidisha muda', 'Kuomba ruhusa', 'Kushukuru', 'Kudokeza'],
            correct: 0,
            explanation: 'Kuzidisha muda huwanyima wengine nafasi.'
        },
        {
            question: 'Kutikisa kichwa unaposikiliza ni mfano wa:',
            options: ['Matusi', 'Kiziada lugha cha heshima', 'Kukatiza', 'Kupiga kura'],
            correct: 1,
            explanation: 'Huonyesha kuwa unasikiliza kwa makini.'
        }
    ]
},
{
    name: '1.1.3 Mjadala: Kushiriki Mjadala kuhusu Usafi wa Mazingira',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mjadala</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.1.3: Kushiriki Mjadala kuhusu Usafi wa Mazingira</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutaandaa hoja, tutaziunga mkono kwa mifano na takwimu, kisha tutashiriki mjadala wa darasa kuhusu usafi wa mazingira tukizingatia taratibu na adabu.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Kushiriki mjadala halisi hukujengea ujasiri, ufasaha na uwezo wa kutetea hoja — huku ukitafakari njia za kuboresha usafi wa jamii yako.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Mashindano ya mijadala</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏘️ Mabaraza ya chifu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧹 Kampeni za usafi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Vipindi vya redio</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Ushiriki wa umma</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Vikao vya kazi</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kubainisha mambo ya kuzingatia unaposikiliza na kuchangia mjadala.</li>
    <li>Kushiriki mjadala katika miktadha mbalimbali.</li>
    <li>Kuthamini mjadala kama njia ya kubadilishana mawazo.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Je, unazingatia nini wakati wa kusikiliza na kuchangia mjadala?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.1.1 na 1.1.2.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Hotuba ya mjadala ina sehemu tatu: <strong>utangulizi</strong> (salamu na msimamo), <strong>mwili</strong> (hoja tatu hivi zenye mifano) na <strong>hitimisho</strong> (muhtasari na ombi la kuungwa mkono). Tumia viunganishi kama <em>kwanza, pili, aidha, hatimaye</em> kupanga hoja zako.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Salamu + msimamo → hoja 1, 2, 3 + mifano → ombi la kura.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Msimamo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Upande unaouunga mkono katika mjadala.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Msimamo wangu ni kupinga hoja.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Takwimu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Idadi au tarakimu zinazothibitisha jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Takwimu zilionyesha ongezeko la taka.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viunganishi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno yanayounganisha mawazo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kwanza, pili, aidha, hatimaye.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Uchafuzi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuharibu mazingira kwa taka au kemikali.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Uchafuzi wa mito huleta magonjwa.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuhamasisha</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuwatia watu ari ya kufanya jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Walihamasisha jamii kuhusu usafi.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Mfano wa Hotuba ya Mjadala</h3>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mtetezi wa kwanza: “Kila mkazi ana jukumu la kudumisha usafi wa mtaa wake”</p>
    <p style="margin:8px 0;">Bwana Mwenyekiti, mwalimu wetu, waamuzi na wanafunzi wenzangu, hamjambo? Jina langu ni Neema, nami nimesimama kuunga mkono hoja kwamba kila mkazi ana jukumu la kudumisha usafi wa mtaa wake.</p>
    <p style="margin:8px 0;">Kwanza, taka huzalishwa nyumbani. Tukipanga taka zetu — za kuoza, plastiki na chupa — tutapunguza mzigo wa magari ya kaunti. Pili, mitaro iliyozibwa na mifuko ya plastiki husababisha mafuriko, kama ilivyotokea katika mtaa wetu mvua za mwezi Aprili. Aidha, taka zilizotupwa ovyo huvutia nzi na panya, ambao hueneza magonjwa kama kipindupindu.</p>
    <p style="margin:8px 0;">Hatimaye, siku ya usafi ya kila mwezi katika mtaa wa jirani imefanya mazingira yao kuwa safi na salama. Kwa hayo machache, naomba mniunge mkono. Asanteni.</p>
    </div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Msimamo wa Neema ni upi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuunga mkono hoja kwamba kila mkazi ana jukumu la usafi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Taja viunganishi vinne alivyotumia.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwanza, pili, aidha, hatimaye.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Hoja yake ya pili inaungwa mkono na mfano gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mafuriko yaliyotokea mtaani mwezi Aprili kwa sababu ya mitaro iliyozibwa.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kuandaa Hoja Zako</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kuandaa hoja ya mpinzani</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Andaa hoja moja ya kupinga hoja ya Neema, ukiiunga mkono kwa mfano.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Tafuta udhaifu: je, wakazi wana uwezo wa kila kitu?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Hoja</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Wakazi hawawezi kudumisha usafi bila huduma za kaunti.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Sababu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ukusanyaji na utupaji wa taka unahitaji magari na maeneo maalumu.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Mfano</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Katika mtaa fulani, wakazi walipanga taka lakini gari la kaunti halikuja kwa wiki tatu, na taka zikarundikana.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Kwa heshima, wakazi hawawezi kudumisha usafi bila huduma za kaunti. Kwa mfano, wakazi wa mtaa fulani walipanga taka zao, lakini gari la kaunti halikufika kwa wiki tatu.”</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutoa hoja isiyo na mfano wala sababu.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Hotuba ya mjadala ina sehemu ngapi? Zitaje.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Fikiria mwanzo, kati na mwisho.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Tatu: utangulizi, mwili na hitimisho.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Taja kiunganishi kinachotumika kuongeza hoja.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Unaongeza wazo jingine.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Aidha / zaidi ya hayo / pia.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Mzungumzaji anahitimisha vipi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Omba kuungwa mkono.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Kwa hayo machache, naomba mniunge mkono. Asanteni.”</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika hotuba ya mjadala ya dakika mbili kuunga mkono au kupinga hoja ya Neema.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Jizoezeni hotuba zenu mbele ya mwenzako; mpe ushauri mmoja.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Fanyeni mjadala wa darasa kuhusu hoja: “Mifuko ya plastiki ipigwe marufuku kabisa sokoni.” Chagueni mwenyekiti, katibu na mlinda muda.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta habari moja kuhusu usafi au marufuku ya mifuko ya plastiki nchini Kenya kutoka chanzo cha kuaminika na uitumie kama mfano katika hotuba yako.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Msimamo ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Upande unaouunga mkono katika mjadala.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja viunganishi viwili vya kupanga hoja.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kwanza, pili, aidha, hatimaye (yoyote viwili).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Andika utangulizi wa hotuba ya mjadala.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Bi. Mwenyekiti, mwalimu, waamuzi na wanafunzi wenzangu, hamjambo? Nimesimama kupinga hoja kwamba…”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kwa nini hoja zinahitaji mifano?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mifano huthibitisha hoja na kuwashawishi wasikilizaji.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Andika hoja tatu za kuunga mkono marufuku ya mifuko ya plastiki.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huziba mitaro; huua mifugo na viumbe wa majini; haiozi haraka (mfano wowote unaofaa).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Pendekeza njia mbili ambazo shule yako inaweza kuboresha usafi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuweka mapipa ya taka zilizopangwa; siku ya usafi ya kila mwezi; klabu ya mazingira (yoyote mbili).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Je, mjadala unaweza kuleta mabadiliko halisi ya usafi? Eleza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ndiyo; huhamasisha watu, huibua suluhisho na huweza kuwafikia viongozi.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Hotuba ya mjadala ina utangulizi wenye salamu na msimamo, mwili wenye hoja zilizopangwa kwa viunganishi na kuungwa mkono kwa mifano, na hitimisho lenye ombi la kuungwa mkono. Kushiriki mjadala kuhusu usafi hutufundisha lugha na uwajibikaji.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Utangulizi, mwili, hitimisho.</li>
    <li>Hoja zenye mifano na takwimu.</li>
    <li>Viunganishi: kwanza, pili, aidha, hatimaye.</li>
    <li>Adabu na muda.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hoja tatu nzuri ni bora kuliko kumi dhaifu.</li>
    <li>Tumia mifano halisi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kukosa msimamo wazi.</li>
    <li>Hoja zisizo na mifano.</li>
    <li>Kusoma kila neno bila kuwatazama wasikilizaji.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ukiandika hotuba ya mjadala, onyesha sehemu zote tatu.</li>
    <li>Tumia viunganishi kupanga hoja.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuzungumza katika mjadala.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Fikra makini</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujenga na kujibu hoja.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutafuta mifano mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uzalendo</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heshima</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Viongozi wa jamii hutumia mijadala kufanya maamuzi kuhusu huduma za taka na usafi.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika hotuba kamili ya mjadala ya maneno 200 kuhusu usafi.</li>
    <li>Mweleze mzazi au mlezi hoja zako na uandike maoni yake.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijisikiaje nilipozungumza katika mjadala?</li>
    <li>Ni hoja ipi ya upande mwingine iliyonivutia?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Msimamo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Upande unaouunga mkono.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Takwimu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Idadi zinazothibitisha jambo.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viunganishi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maneno ya kuunganisha mawazo.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Uchafuzi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuharibu mazingira.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kuandaa hotuba ya mjadala.</p>
    <p style="margin:6px 0;">☐ Naweza kutoa hoja zenye mifano.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia viunganishi.</p>
    <p style="margin:6px 0;">☐ Naweza kushiriki mjadala kwa adabu.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Hotuba ya mjadala ina sehemu:',
            options: ['Moja', 'Tano', 'Tatu', 'Saba'],
            correct: 2,
            explanation: 'Utangulizi, mwili na hitimisho.'
        },
        {
            question: 'Msimamo wa Neema ulikuwa:',
            options: ['Kupinga hoja', 'Kutokuwa na upande', 'Kuwa mwenyekiti', 'Kuunga mkono hoja'],
            correct: 3,
            explanation: 'Alisimama kuunga mkono hoja kwamba kila mkazi ana jukumu la usafi.'
        },
        {
            question: 'Kiunganishi “aidha” hutumika:',
            options: ['Kuongeza hoja', 'Kuhitimisha', 'Kusalimia', 'Kuuliza swali'],
            correct: 0,
            explanation: '“Aidha” huongeza wazo jingine.'
        },
        {
            question: 'Mitaro iliyozibwa na plastiki husababisha:',
            options: ['Ukame', 'Mafuriko', 'Upepo', 'Moto'],
            correct: 1,
            explanation: 'Maji hushindwa kupita na kufurika.'
        },
        {
            question: 'Takwimu katika hoja husaidia:',
            options: ['Kumtusi mpinzani', 'Kurefusha hotuba tu', 'Kuthibitisha hoja', 'Kuchelewesha kura'],
            correct: 2,
            explanation: 'Idadi halisi hufanya hoja iaminike.'
        },
        {
            question: 'Hitimisho la hotuba ya mjadala huwa na:',
            options: ['Ombi la kuungwa mkono', 'Hoja mpya kumi', 'Salamu za mwanzo', 'Matusi'],
            correct: 0,
            explanation: 'Mzungumzaji huomba hadhira imuunge mkono.'
        },
        {
            question: 'Taka zilizotupwa ovyo huvutia:',
            options: ['Ndege wa porini tu', 'Watalii', 'Samaki', 'Nzi na panya'],
            correct: 3,
            explanation: 'Wadudu hawa hueneza magonjwa kama kipindupindu.'
        },
        {
            question: 'Mfano unaofaa kuunga mkono hoja ni:',
            options: ['Hadithi isiyohusiana', 'Tukio halisi linalohusiana na hoja', 'Matusi', 'Swali tu'],
            correct: 1,
            explanation: 'Mfano halisi huthibitisha hoja.'
        }
    ]
},
{
    name: '1.1 Zoezi la Tathmini: Mjadala',
    type: 'lesson',
    duration: '30 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mjadala</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Zoezi la Tathmini</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📝 Zoezi la Tathmini — Mjadala</h2>
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
    <li>Maana, washiriki na taratibu za mjadala</li>
    <li>Mambo ya kuzingatia unaposikiliza mjadala</li>
    <li>Mambo ya kuzingatia unapochangia mjadala</li>
    <li>Muundo wa hotuba ya mjadala na viunganishi</li>
    <li>Lugha ya heshima</li>
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
    <div>Chagua jibu linaloonyesha adabu, utaratibu na hoja yenye mfano.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Wanaopinga hoja huitwa:',
            options: ['Watetezi', 'Makatibu', 'Wapinzani', 'Waamuzi'],
            correct: 2,
            explanation: 'Wapinzani hutoa hoja za kupinga.'
        },
        {
            question: 'Mwenyekiti wa mjadala:',
            options: ['Hupinga hoja', 'Hupima muda pekee', 'Huandika hoja pekee', 'Hudumisha utaratibu'],
            correct: 3,
            explanation: 'Mwenyekiti huongoza kikao chote.'
        },
        {
            question: 'Msikilizaji mzuri:',
            options: ['Hukatiza', 'Hasubiri zamu yake', 'Huzomea', 'Hulala'],
            correct: 1,
            explanation: 'Kusubiri zamu ni sehemu ya adabu ya mjadala.'
        },
        {
            question: 'Kabla ya kuchangia, omba ruhusa ya:',
            options: ['Mpinzani', 'Mlinda muda', 'Mwenyekiti', 'Rafiki'],
            correct: 2,
            explanation: 'Mwenyekiti ndiye hutoa nafasi ya kuzungumza.'
        },
        {
            question: '“Kwa heshima, naomba kutofautiana na mwenzangu” hutumika:',
            options: ['Kusalimia', 'Kupinga kwa adabu', 'Kuhitimisha', 'Kupiga kura'],
            correct: 1,
            explanation: 'Ni njia ya heshima ya kupinga hoja.'
        },
        {
            question: 'Sehemu ya kati ya hotuba ya mjadala huitwa:',
            options: ['Mwili', 'Utangulizi', 'Hitimisho', 'Salamu'],
            correct: 0,
            explanation: 'Mwili hubeba hoja na mifano.'
        },
        {
            question: 'Kiunganishi cha kuhitimisha hoja ni:',
            options: ['Kwanza', 'Hatimaye', 'Pili', 'Aidha'],
            correct: 1,
            explanation: '“Hatimaye” huashiria hoja ya mwisho.'
        },
        {
            question: 'Kudokeza husaidia:',
            options: ['Kuchelewesha mjadala', 'Kumkatiza mzungumzaji', 'Kupiga kura', 'Kukumbuka hoja za kujibu'],
            correct: 3,
            explanation: 'Madokezo hukusaidia kujibu hoja kwa usahihi.'
        },
        {
            question: 'Kosa katika mjadala ni:',
            options: ['Kuomba ruhusa', 'Kutoa mfano', 'Kushukuru', 'Kumtusi mpinzani'],
            correct: 3,
            explanation: 'Shambulia hoja, si mtu.'
        },
        {
            question: 'Mjadala humalizika kwa:',
            options: ['Kura na kutangaza matokeo', 'Kusoma hoja', 'Wazungumzaji wakuu', 'Kuchagua mwenyekiti'],
            correct: 0,
            explanation: 'Kura huamua upande ulioshinda.'
        }
    ]
},
{
    name: '1.1 Kazi ya Mradi: Mjadala wa Darasa kuhusu Usafi wa Mazingira',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mjadala</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Mjadala wa Darasa kuhusu Usafi wa Mazingira</h2>
    <p style="font-size:16px;">Mtaandaa na kushiriki mjadala wa darasa, kisha mtaandika ripoti fupi na mapendekezo ya kuboresha usafi shuleni.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Klabu ya mazingira inataka kujua maoni ya wanafunzi kuhusu usafi wa shule. Darasa lenu limeombwa kufanya mjadala kuhusu hoja: “Mifuko ya plastiki ipigwe marufuku kabisa shuleni na sokoni.”</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Kenya ilipiga marufuku mifuko fulani ya plastiki ili kulinda mazingira; mijadala ya jamii husaidia kutekeleza sera kama hizi.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Chagueni mwenyekiti, katibu, mlinda muda, watetezi watatu na wapinzani watatu.</li>
    <li>Kila mzungumzaji aandae hotuba ya dakika mbili yenye hoja tatu na mifano.</li>
    <li>Wanafunzi wengine waandae mchango mmoja wa sakafu.</li>
    <li>Fanyeni mjadala kwa kufuata taratibu zote.</li>
    <li>Katibu aandike hoja muhimu na matokeo ya kura.</li>
    <li>Kwa vikundi, andikeni mapendekezo matatu ya kuboresha usafi shuleni na kuyawasilisha kwa klabu ya mazingira.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hotuba zilizoandikwa</li>
    <li>Kumbukumbu za katibu</li>
    <li>Mapendekezo matatu</li>
    <li>Tafakari ya kila mwanafunzi (maneno 100)</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja na mifano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja tatu nzito zenye mifano halisi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja tatu zenye mifano</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja chache au mifano dhaifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hoja hazieleweki</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adabu na taratibu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taratibu zote na lugha ya heshima kikamilifu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taratibu na adabu zimezingatiwa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makosa machache ya taratibu</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taratibu hazikuzingatiwa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uwasilishaji</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti wazi, ufasaha na kujiamini</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sauti wazi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusita mara kwa mara</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Haisikiki</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mapendekezo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matatu yanayotekelezeka na yaliyoelezwa vizuri</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matatu yanayofaa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mawili</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moja au hakuna</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Vidokezo vya Kufanikisha Kazi</p>
    <div>Andaa mifano halisi kutoka mtaa wako.<br>Zingatia muda wa dakika mbili.<br>Shambulia hoja, si mtu.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nimejifunza nini kuhusu usafi wa mazingira?</li>
    <li>Ni stadi ipi ya mjadala niliyoimudu zaidi?</li>
    <li>Nitachangia vipi usafi wa shule?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kila mzungumzaji mkuu ana dakika ngapi?',
            options: ['Kumi', 'Thelathini', 'Moja tu', 'Mbili'],
            correct: 3,
            explanation: 'Maelekezo yanasema hotuba ya dakika mbili.'
        },
        {
            question: 'Nani anaandika matokeo ya kura?',
            options: ['Katibu', 'Mpinzani', 'Mtetezi', 'Mchangiaji'],
            correct: 0,
            explanation: 'Katibu huhifadhi kumbukumbu.'
        },
        {
            question: 'Hoja ya mjadala wa mradi inahusu:',
            options: ['Michezo', 'Mavazi', 'Mifuko ya plastiki', 'Muziki'],
            correct: 2,
            explanation: 'Mjadala unahusu marufuku ya mifuko ya plastiki.'
        },
        {
            question: 'Mapendekezo yatawasilishwa kwa:',
            options: ['Klabu ya mazingira', 'Kituo cha polisi', 'Duka', 'Hospitali'],
            correct: 0,
            explanation: 'Klabu ya mazingira ndiyo iliyoomba mjadala.'
        },
        {
            question: 'Kila mzungumzaji mkuu atoe hoja ngapi?',
            options: ['Moja', 'Kumi', 'Ishirini', 'Tatu'],
            correct: 3,
            explanation: 'Maelekezo yanaomba hoja tatu zenye mifano.'
        }
    ]
},
{
    name: '1.1 Marudio: Mjadala',
    type: 'lesson',
    duration: '30 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.1 Kusikiliza na Kujibu: Mjadala</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Mjadala</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.1 kabla ya kuendelea na 1.2.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🗣️ Maana</p>
    <div>Mjadala ni mazungumzo rasmi ya kutetea au kupinga hoja chini ya mwenyekiti.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">👥 Washiriki</p>
    <div>Mwenyekiti, katibu, mlinda muda, watetezi, wapinzani, wachangiaji na waamuzi.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">📋 Taratibu</p>
    <div>Kufungua kikao → hoja na kanuni → wazungumzaji wakuu → sakafu → muhtasari → kura → kufunga.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">👂 Kusikiliza</p>
    <div>Tulia, mtazame mzungumzaji, dokeza, usikatize.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🎤 Kuchangia</p>
    <div>Omba ruhusa, salimia, hoja wazi yenye mfano, adabu, muda.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Jedwali la Muhtasari</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kipengele</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusalimia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Bwana Mwenyekiti, waamuzi, wanafunzi wenzangu…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kupinga</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Kwa heshima, naomba kutofautiana…”</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuongeza hoja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Aidha…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuhitimisha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Kwa hayo machache, naomba mniunge mkono.”</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Marudio Mseto</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja majukumu ya mwenyekiti.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kufungua na kufunga kikao, kusoma hoja, kudumisha nidhamu, kutangaza matokeo.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja mambo matatu ya kuzingatia unaposikiliza mjadala.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kutulia, kudokeza, kutokatiza, kumtazama mzungumzaji.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Andika hoja moja ya kuunga mkono usafi wa mtaa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Taka zilizotupwa ovyo huleta magonjwa kama kipindupindu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja sehemu tatu za hotuba ya mjadala.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Utangulizi, mwili, hitimisho.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mjadala una washiriki, taratibu na lugha ya heshima.</li>
    <li>Kusikiliza vizuri ndio msingi wa kuchangia vizuri.</li>
    <li>Hoja nzuri huungwa mkono kwa mifano.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kueleza taratibu za mjadala.</p>
    <p style="margin:6px 0;">☐ Naweza kusikiliza na kudokeza.</p>
    <p style="margin:6px 0;">☐ Naweza kuchangia kwa adabu.</p>
    <p style="margin:6px 0;">☐ Naweza kuandaa hotuba ya mjadala.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mjadala hufunguliwa na:',
            options: ['Mpinzani', 'Mchangiaji', 'Mwenyekiti', 'Mlinda muda'],
            correct: 2,
            explanation: 'Mwenyekiti hufungua na kufunga kikao.'
        },
        {
            question: 'Kutomkatiza mzungumzaji ni sehemu ya:',
            options: ['Adabu ya kusikiliza', 'Kura', 'Hitimisho', 'Takwimu'],
            correct: 0,
            explanation: 'Kusubiri zamu huonyesha heshima.'
        },
        {
            question: '“Hatimaye” ni:',
            options: ['Kiunganishi', 'Methali', 'Nahau', 'Kitendawili'],
            correct: 0,
            explanation: 'Ni kiunganishi kinachoashiria hoja ya mwisho.'
        },
        {
            question: 'Wachangiaji kutoka hadhira huitwa:',
            options: ['Waamuzi', 'Makatibu', 'Sakafu', 'Wenyeviti'],
            correct: 2,
            explanation: 'Sakafu hufunguliwa baada ya wazungumzaji wakuu.'
        },
        {
            question: 'Hoja nzuri huungwa mkono na:',
            options: ['Matusi', 'Kelele', 'Kicheko', 'Mifano'],
            correct: 3,
            explanation: 'Mifano huthibitisha hoja.'
        }
    ]
},
{
    name: '1.2.1 Kusoma kwa Ufahamu: Habari Mahususi na Mfuatano wa Matukio',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.1: Habari Mahususi na Mfuatano wa Matukio</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutasoma kifungu cha simulizi “Mto wa Zawadi” na kujifunza jinsi ya kutambua habari mahususi (nani, nini, wapi, lini, kwa nini, vipi) na kupanga matukio kwa mfuatano ufaao.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Kupata habari mahususi na kufuata mpangilio wa matukio ni msingi wa kuelewa hadithi yoyote, ripoti ya habari au maelekezo — na ndiko kunakokuwezesha kujibu maswali ya ufahamu kwa usahihi.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Vitabu vya hadithi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📋 Ripoti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Habari mtandaoni</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎬 Filamu na tamthilia</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua habari mahususi katika kifungu cha simulizi.</li>
    <li>Kupanga matukio ya kifungu kwa mfuatano ufaao.</li>
    <li>Kutabiri na kufasiri matukio ya kifungu.</li>
    <li>Kueleza maana ya msamiati kulingana na muktadha.</li>
    <li>Kujibu maswali ya ufahamu kwa usahihi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Unafanya nini ili kupata habari zilizo katika kifungu cha simulizi kwa usahihi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Kusoma kwa ufahamu kutoka Gredi ya 8; mada ndogo 1.1 kuhusu usafi.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p>Kifungu cha <strong>simulizi</strong> husimulia matukio yaliyotokea kwa mpangilio fulani. Ili kukielewa, tafuta <strong>habari mahususi</strong> kwa kujiuliza maswali ya <strong>nani, nini, wapi, lini, kwa nini</strong> na <strong>vipi</strong>.</p>
    <p>Kisha tambua <strong>mfuatano wa matukio</strong>. Maneno ya wakati kama <em>siku moja, wiki mbili baadaye, kisha, Jumamosi iliyofuata, miezi sita baadaye</em> ni ishara zinazoonyesha mpangilio wa matukio.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Uliza: Nani? Nini? Wapi? Lini? Kwa nini? Vipi? Kisha fuata viashiria vya wakati.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Simulizi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maelezo ya matukio kwa mpangilio, kama hadithi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kifungu hiki ni simulizi kuhusu mto.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Habari mahususi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taarifa maalumu kama majina, mahali, tarehe na idadi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Idadi ya watu waliojitokeza ni habari mahususi.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mfuatano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mpangilio wa matukio kutoka la kwanza hadi la mwisho.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Panga matukio kwa mfuatano ufaao.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Jaa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahali pa kutupa taka.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Ukingo wa mto ukageuka kuwa jaa.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zahanati</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kituo kidogo cha matibabu.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Wagonjwa walifikishwa zahanatini.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kuhara</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuendesha mara kwa mara kwa sababu ya ugonjwa.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Maji machafu husababisha kuhara.</em>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Soma Kifungu</h3>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Kabla ya kusoma: tazama kichwa “Mto wa Zawadi”. Unatabiri hadithi itahusu nini?</div>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">🎧 Matini ya Kusikiliza / Kusoma</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Mto wa Zawadi” — kifungu cha simulizi</p>
    <p style="margin:8px 0;">(1) Kijiji cha Kambi Moto kilikuwa na mto mmoja mdogo uliotiririka kutoka milimani. Zamani, maji yake yalikuwa angavu kiasi kwamba watoto waliweza kuona samaki wadogo wakiogelea. Lakini kadiri miaka ilivyosonga, wakazi walianza kutupa mifuko ya plastiki, chupa na mabaki ya chakula kandokando ya mto. Ukingo wa mto ukageuka kuwa jaa.</p>
    <p style="margin:8px 0;">(2) Zawadi, msichana wa Gredi ya 9, alikuwa akichota maji mtoni kila asubuhi kabla ya kwenda shuleni. Siku moja aliona nzi wakiwa wamesongamana juu ya rundo la taka, na harufu mbaya ikimjaa puani. Moyo wake ulifadhaika. “Mto huu ndio uhai wetu,” alinong’ona, “lakini tunauua kwa mikono yetu wenyewe.”</p>
    <p style="margin:8px 0;">(3) Wiki mbili baadaye, wagonjwa kadhaa wa kuhara walifikishwa katika zahanati ya kijiji. Muuguzi, Bi. Achieng, aliwaeleza wakazi kwamba maji machafu ndiyo yaliyokuwa chanzo cha ugonjwa huo. Wazazi walishikwa na hofu; wengine waliilaumu serikali, wengine wakawalaumu majirani.</p>
    <p style="margin:8px 0;">(4) Zawadi hakukaa kimya. Aliwaendea wanachama wa klabu ya mazingira shuleni na kuwaeleza mpango wake. Walitengeneza mabango yaliyosema “Mto Safi, Afya Bora” na kuyabandika sokoni na kanisani. Kisha walimwomba chifu awaruhusu kuandaa siku ya usafi kila Jumamosi ya mwisho wa mwezi.</p>
    <p style="margin:8px 0;">(5) Jumamosi ya kwanza, ni watu kumi tu waliojitokeza. Zawadi hakuvunjika moyo. Walizoa taka, wakazipanga kwa aina na kupanda miti kandokando ya mto. Jumamosi iliyofuata, idadi iliongezeka hadi hamsini. Hata wazee waliokuwa wakicheka mwanzoni walileta majembe na matoroli.</p>
    <p style="margin:8px 0;">(6) Miezi sita baadaye, mto ulianza kurejea katika hali yake ya awali. Visa vya kuhara vilipungua, na kaunti ikaweka mapipa ya taka sokoni. Siku ya sherehe ya Mashujaa, chifu alimkabidhi Zawadi cheti cha shukrani. Zawadi alitabasamu na kusema, “Kidole kimoja hakivunji chawa. Ushindi huu ni wa kijiji kizima.”</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kutambua Habari Mahususi</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Swali</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Habari mahususi kutoka kifungu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nani?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zawadi, Bi. Achieng (muuguzi), chifu, klabu ya mazingira, wakazi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mto ulichafuliwa; ugonjwa wa kuhara; siku za usafi.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wapi?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kijiji cha Kambi Moto, mtoni, zahanatini, sokoni, kanisani.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kila asubuhi; wiki mbili baadaye; Jumamosi ya mwisho wa mwezi; miezi sita baadaye; siku ya Mashujaa.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa nini?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taka zilichafua maji na kuleta magonjwa.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vipi?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa mabango, siku za usafi, kupanga taka na kupanda miti.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kupata habari mahususi</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Ni watu wangapi waliojitokeza siku ya kwanza ya usafi na siku iliyofuata?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Tafuta aya inayozungumzia Jumamosi ya kwanza.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Tafuta aya</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aya ya 5 inaeleza siku za usafi.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Soma kwa makini</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“ni watu kumi tu waliojitokeza… idadi iliongezeka hadi hamsini.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Andika jibu kamili</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Taja idadi zote mbili.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Siku ya kwanza walijitokeza watu kumi; Jumamosi iliyofuata idadi iliongezeka hadi hamsini.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kujibu kwa neno moja (“kumi”) bila kujibu sehemu ya pili ya swali.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Kupanga Matukio kwa Mfuatano</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Mfuatano wa matukio</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Panga matukio haya kwa mfuatano: (a) Chifu alimkabidhi Zawadi cheti. (b) Wagonjwa wa kuhara walifikishwa zahanatini. (c) Zawadi aliona nzi juu ya rundo la taka. (d) Klabu ilitengeneza mabango.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Fuata viashiria vya wakati katika aya.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Aya ya 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(c) Zawadi aliona nzi.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Aya ya 3 — “wiki mbili baadaye”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(b) Wagonjwa walifikishwa zahanatini.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Aya ya 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(d) Klabu ilitengeneza mabango.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bfdbfe;">Hatua ya 4: Aya ya 6 — “miezi sita baadaye”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(a) Cheti cha shukrani.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> (c), (b), (d), (a)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kupanga kwa kufuata jinsi matukio yalivyoandikwa kwenye swali badala ya kifungu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Taja viashiria vitatu vya wakati katika kifungu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Siku moja, wiki mbili baadaye, Jumamosi iliyofuata, miezi sita baadaye (vyovyote vitatu).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Muuguzi aliitwa nani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Bi. Achieng.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Klabu iliandika nini kwenye mabango?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">“Mto Safi, Afya Bora.”</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Zawadi alikuwa katika gredi gani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Gredi ya 9.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Mabango yalibandikwa wapi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Aya ya 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Sokoni na kanisani.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Ni tukio gani lilitokea mara baada ya wagonjwa kufikishwa zahanatini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Endelea kusoma aya ya 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Muuguzi aliwaeleza wakazi chanzo cha ugonjwa, na wazazi wakashikwa na hofu.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Andika jedwali la maswali sita (nani, nini, wapi, lini, kwa nini, vipi) kwa hadithi moja uliyosoma hivi karibuni.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Kila mmoja aandike kadi nne za matukio ya kifungu; mwenzake azipange kwa mfuatano.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Igizeni matukio sita ya “Mto wa Zawadi” kwa mfuatano kama mchezo mfupi.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tafuta hadithi fupi ya Kiswahili kuhusu mazingira kwenye tovuti salama na uandike habari mahususi tano.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja kijiji kilichotajwa katika kifungu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kambi Moto.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Zawadi alichota maji lini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kila asubuhi kabla ya kwenda shuleni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja vitu vitatu vilivyotupwa kandokando ya mto.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mifuko ya plastiki, chupa na mabaki ya chakula.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Kaunti ilifanya nini mwishoni?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Iliweka mapipa ya taka sokoni.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Panga matukio: miti ilipandwa; mto ulichafuka; visa vya kuhara vilipungua; chifu aliombwa ruhusa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mto ulichafuka → chifu aliombwa ruhusa → miti ilipandwa → visa vya kuhara vilipungua.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Ukisoma habari kuhusu mlipuko wa ugonjwa, ni habari zipi mahususi utatafuta?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ugonjwa gani, wapi, lini, idadi ya walioathirika, chanzo na hatua za kujikinga.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini mwandishi alitumia viashiria vingi vya wakati?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ili kuonyesha mabadiliko kadiri muda ulivyosonga na kurahisisha kufuata mfuatano wa matukio.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Habari mahususi hupatikana kwa kujiuliza nani, nini, wapi, lini, kwa nini na vipi. Mfuatano wa matukio hutambuliwa kwa kufuata viashiria vya wakati kama “siku moja”, “wiki mbili baadaye” na “miezi sita baadaye”.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Maswali sita ya habari mahususi.</li>
    <li>Viashiria vya wakati huonyesha mfuatano.</li>
    <li>Jibu kwa sentensi kamili.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rudi kwenye kifungu kuthibitisha jibu.</li>
    <li>Jibu sehemu zote za swali.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kujibu kwa kubahatisha bila kusoma kifungu.</li>
    <li>Kupanga matukio kwa mpangilio wa swali.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Taja nambari ya aya unapotafuta jibu.</li>
    <li>Andika majibu kamili.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu maswali kwa sentensi kamili.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusoma hadithi mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Waandishi wa habari, polisi na wanasayansi hukusanya habari mahususi na mfuatano wa matukio ili kuelewa kilichotokea.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika matukio sita ya “Mto wa Zawadi” kwa mfuatano, kila moja kwa sentensi moja.</li>
    <li>Tafuta habari mahususi tano katika gazeti la Kiswahili.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni swali lipi kati ya sita linalonisaidia zaidi?</li>
    <li>Nilijisikiaje kuhusu juhudi za Zawadi?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Simulizi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maelezo ya matukio kwa mpangilio.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Habari mahususi</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taarifa maalumu.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mfuatano</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mpangilio wa matukio.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Jaa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mahali pa taka.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua habari mahususi.</p>
    <p style="margin:6px 0;">☐ Naweza kutumia maswali sita.</p>
    <p style="margin:6px 0;">☐ Naweza kupanga matukio kwa mfuatano.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua viashiria vya wakati.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kijiji katika kifungu kinaitwa:',
            options: ['Kambi Moto', 'Kambi Mawe', 'Mto Moto', 'Kambi Safi'],
            correct: 0,
            explanation: 'Aya ya kwanza inataja kijiji cha Kambi Moto.'
        },
        {
            question: 'Zawadi alichota maji:',
            options: ['Kila jioni', 'Jumamosi tu', 'Kila asubuhi', 'Mara moja kwa mwezi'],
            correct: 2,
            explanation: 'Aya ya 2 inasema alichota maji kila asubuhi kabla ya shule.'
        },
        {
            question: 'Muuguzi aliitwa:',
            options: ['Bi. Zawadi', 'Bi. Neema', 'Bi. Wanjiru', 'Bi. Achieng'],
            correct: 3,
            explanation: 'Aya ya 3 inamtaja Bi. Achieng.'
        },
        {
            question: 'Siku ya kwanza ya usafi walijitokeza watu:',
            options: ['Hamsini', 'Mia moja', 'Kumi', 'Watano'],
            correct: 2,
            explanation: 'Aya ya 5 inasema ni watu kumi tu.'
        },
        {
            question: 'Kiashiria cha wakati ni:',
            options: ['Wiki mbili baadaye', 'Mto mdogo', 'Mabango', 'Kandokando'],
            correct: 0,
            explanation: 'Kinaonyesha muda uliopita kati ya matukio.'
        },
        {
            question: 'Tukio la kwanza kati ya haya ni:',
            options: ['Chifu alimpa cheti', 'Zawadi aliona nzi juu ya taka', 'Mabango yalibandikwa', 'Kaunti iliweka mapipa'],
            correct: 1,
            explanation: 'Lilitokea katika aya ya 2, kabla ya matukio mengine.'
        },
        {
            question: 'Maswali ya habari mahususi ni:',
            options: ['Ndiyo au hapana tu', 'Maswali ya hesabu', 'Maswali ya methali', 'Nani, nini, wapi, lini, kwa nini, vipi'],
            correct: 3,
            explanation: 'Maswali sita husaidia kupata taarifa kamili.'
        },
        {
            question: 'Kaunti iliweka mapipa ya taka:',
            options: ['Shuleni', 'Sokoni', 'Kanisani', 'Mtoni'],
            correct: 1,
            explanation: 'Aya ya 6 inasema kaunti iliweka mapipa sokoni.'
        }
    ]
},
{
    name: '1.2.2 Kusoma kwa Ufahamu: Kutabiri na Kufasiri Matukio',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.2: Kutabiri na Kufasiri Matukio</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza kutabiri yatakayotokea katika simulizi kwa kutumia kichwa, picha na vidokezo, na kufasiri maana iliyofichika ya matukio, kauli na tabia za wahusika.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Msomaji makini hasomi maneno tu; hutabiri, hufikiri na hufasiri. Stadi hizi hufanya kusoma kuwe kwa kufurahisha na hukusaidia kujibu maswali ya kukisia na ya maoni.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Riwaya na hadithi fupi</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎭 Tamthilia</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Makala</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎬 Filamu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗞️ Katuni za magazeti</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua habari mahususi katika kifungu cha simulizi.</li>
    <li>Kupanga matukio ya kifungu kwa mfuatano ufaao.</li>
    <li>Kutabiri na kufasiri matukio ya kifungu.</li>
    <li>Kueleza maana ya msamiati kulingana na muktadha.</li>
    <li>Kujibu maswali ya ufahamu kwa usahihi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Unafanya nini ili kupata habari zilizo katika kifungu cha simulizi kwa usahihi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Somo 1.2.1 — habari mahususi na mfuatano wa matukio.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Kutabiri</strong> ni kukisia kitakachotokea kwa kutumia vidokezo: kichwa, picha, matukio yaliyotangulia na tabia za wahusika. Utabiri si lazima uwe sahihi; muhimu ni uwe na sababu.</p>
    <p><strong>Kufasiri</strong> ni kueleza maana iliyofichika ya kauli au tukio. Kwa mfano, Zawadi aliposema “tunauua kwa mikono yetu wenyewe”, hakumaanisha kuua kwa mikono halisi, bali kwamba wakazi wenyewe wanaharibu mto kwa vitendo vyao.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Tabiri kwa vidokezo; fasiri kwa kuuliza: “Mwandishi anamaanisha nini hasa?”</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Fasiri kauli ya mhusika.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kidokezo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara inayosaidia kukisia jambo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Kichwa ni kidokezo muhimu.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mhusika</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu au kiumbe katika hadithi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Zawadi ndiye mhusika mkuu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kufadhaika</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kuhuzunika au kusumbuka moyoni.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Moyo wake ulifadhaika alipoona taka.</em>
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
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Mto wa Zawadi” — kifungu cha simulizi</p>
    <p style="margin:8px 0;">(1) Kijiji cha Kambi Moto kilikuwa na mto mmoja mdogo uliotiririka kutoka milimani. Zamani, maji yake yalikuwa angavu kiasi kwamba watoto waliweza kuona samaki wadogo wakiogelea. Lakini kadiri miaka ilivyosonga, wakazi walianza kutupa mifuko ya plastiki, chupa na mabaki ya chakula kandokando ya mto. Ukingo wa mto ukageuka kuwa jaa.</p>
    <p style="margin:8px 0;">(2) Zawadi, msichana wa Gredi ya 9, alikuwa akichota maji mtoni kila asubuhi kabla ya kwenda shuleni. Siku moja aliona nzi wakiwa wamesongamana juu ya rundo la taka, na harufu mbaya ikimjaa puani. Moyo wake ulifadhaika. “Mto huu ndio uhai wetu,” alinong’ona, “lakini tunauua kwa mikono yetu wenyewe.”</p>
    <p style="margin:8px 0;">(3) Wiki mbili baadaye, wagonjwa kadhaa wa kuhara walifikishwa katika zahanati ya kijiji. Muuguzi, Bi. Achieng, aliwaeleza wakazi kwamba maji machafu ndiyo yaliyokuwa chanzo cha ugonjwa huo. Wazazi walishikwa na hofu; wengine waliilaumu serikali, wengine wakawalaumu majirani.</p>
    <p style="margin:8px 0;">(4) Zawadi hakukaa kimya. Aliwaendea wanachama wa klabu ya mazingira shuleni na kuwaeleza mpango wake. Walitengeneza mabango yaliyosema “Mto Safi, Afya Bora” na kuyabandika sokoni na kanisani. Kisha walimwomba chifu awaruhusu kuandaa siku ya usafi kila Jumamosi ya mwisho wa mwezi.</p>
    <p style="margin:8px 0;">(5) Jumamosi ya kwanza, ni watu kumi tu waliojitokeza. Zawadi hakuvunjika moyo. Walizoa taka, wakazipanga kwa aina na kupanda miti kandokando ya mto. Jumamosi iliyofuata, idadi iliongezeka hadi hamsini. Hata wazee waliokuwa wakicheka mwanzoni walileta majembe na matoroli.</p>
    <p style="margin:8px 0;">(6) Miezi sita baadaye, mto ulianza kurejea katika hali yake ya awali. Visa vya kuhara vilipungua, na kaunti ikaweka mapipa ya taka sokoni. Siku ya sherehe ya Mashujaa, chifu alimkabidhi Zawadi cheti cha shukrani. Zawadi alitabasamu na kusema, “Kidole kimoja hakivunji chawa. Ushindi huu ni wa kijiji kizima.”</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Kutabiri</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kutabiri kutokana na aya</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Baada ya kusoma aya ya 3 tu (wagonjwa wa kuhara), tabiri kile Zawadi atakachofanya. Toa sababu.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Tumia tabia yake katika aya ya 2.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Kidokezo</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aya ya 2: Zawadi alifadhaika kuona mto ukichafuliwa.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Utabiri</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Atachukua hatua ya kusafisha mto au kuwahamasisha wengine.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Sababu</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ni mwenye kujali na tayari ameonyesha uchungu kwa uchafu.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Zawadi atachukua hatua ya kuhamasisha usafi wa mto, kwa sababu tayari alionyesha kujali alipoona taka mtoni.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutoa utabiri usio na sababu kutoka kifungu.</p>
    </div>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">👀 Umegundua Nini?</p>
    <div>Linganisha utabiri wako na aya ya 4. Je, ulikaribia?</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Kufasiri</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kauli au tukio</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana iliyofichika</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Mto huu ndio uhai wetu.”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maisha ya kijiji yanategemea maji ya mto.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Tunauua kwa mikono yetu wenyewe.”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wakazi wenyewe wanaharibu mto kwa kutupa taka.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wengine waliilaumu serikali, wengine majirani.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Watu hupenda kuwalaumu wengine badala ya kuwajibika.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wazee waliokuwa wakicheka walileta majembe.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Juhudi na mafanikio yaliwabadilisha mtazamo hata waliokuwa na shaka.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Kidole kimoja hakivunji chawa.”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Umoja ndio uliowezesha ushindi; mtu mmoja peke yake asingefanikiwa.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 2: Kufasiri tabia ya mhusika</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Zawadi hakuvunjika moyo watu kumi tu walipojitokeza. Hii inaonyesha sifa gani? Thibitisha.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Je, angekata tamaa? Alifanya nini baadaye?</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Bainisha sifa</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ni mvumilivu / mwenye bidii.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Thibitisha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Aliendelea na siku za usafi hadi idadi ikaongezeka hadi hamsini.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> Zawadi ni mvumilivu na mwenye bidii, kwa sababu aliendelea na kazi licha ya watu wachache, na mwishowe idadi ikaongezeka.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutaja sifa bila ushahidi kutoka kifungu.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Fasiri: “Ukingo wa mto ukageuka kuwa jaa.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Taka nyingi zilirundikwa kandokando ya mto kiasi kwamba palifanana na mahali pa kutupa taka.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Methali ya mwisho inamaanisha nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Umoja huleta mafanikio.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Tabiri: Je, kijiji kitarudia kuchafua mto? Toa sababu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Huenda kisirudie kwa sababu wakazi wameona faida za usafi na kaunti imeweka mapipa (au jibu jingine lenye sababu).</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Kichwa “Mto wa Zawadi” kinatabiri nini?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Kichwa ni kidokezo.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hadithi itahusu mto na msichana anayeitwa Zawadi, na labda uhusiano wake na mto.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Fasiri: “Moyo wake ulifadhaika.”</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Hisia gani?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Alihuzunika na kusumbuka kuona mto ukichafuliwa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Kwa nini wazee walibadilika?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Linganisha mwanzo na baadaye.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Waliona mafanikio ya siku za usafi na wakatambua umuhimu wake.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Soma hadithi mpya hadi katikati, kisha andika utabiri wa mwisho wake kabla ya kumaliza kusoma.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Fasirini kauli tatu kutoka kifungu kwa maneno yenu; linganisheni majibu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Kila kikundi kiandike mwisho mbadala wa hadithi na kuuwasilisha.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tazama picha ya mto uliochafuliwa mtandaoni na uandike utabiri wa madhara yatakayotokea kwa jamii inayoutegemea.</div>
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
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kueleza maana iliyofichika ya kauli au tukio.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Fasiri kauli: “Mto huu ndio uhai wetu.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Wakazi wanategemea mto kwa maji na maisha yao.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Taja sifa mbili za Zawadi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mwenye kujali, mvumilivu, mbunifu, kiongozi (yoyote mbili).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Kwa nini mwandishi alionyesha watu wakilaumiana katika aya ya 3?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kuonyesha tabia ya kukwepa uwajibikaji na kuweka tofauti na hatua ya Zawadi ya kuchukua jukumu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Ukiona taka zinarundikwa karibu na chanzo cha maji mtaani kwenu, tabiri madhara mawili.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Magonjwa kama kuhara na kipindupindu; harufu mbaya; kuzaliana kwa nzi na mbu.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Je, utabiri usio sahihi una faida? Eleza.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ndiyo; humfanya msomaji afikiri na kufuatilia hadithi kwa makini, na hulinganisha mawazo yake na ya mwandishi.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Kutabiri ni kukisia kitakachotokea kwa kutumia vidokezo kama kichwa, matukio na tabia za wahusika. Kufasiri ni kueleza maana iliyofichika ya kauli, matukio na tabia, kwa ushahidi kutoka kifungu.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tabiri kwa sababu.</li>
    <li>Fasiri kwa ushahidi.</li>
    <li>Methali na kauli huwa na maana fiche.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Utabiri si lazima uwe sahihi.</li>
    <li>Taja aya unayorejelea.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kufasiri kauli kwa maana ya juu juu tu.</li>
    <li>Kutoa sifa bila ushahidi.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Swali la sifa ya mhusika: sifa + ushahidi.</li>
    <li>Swali la kufasiri: eleza maana iliyofichika.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kueleza maana kwa maneno yako.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uvumilivu</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Umoja</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Afya</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Kutabiri na kufasiri hutusaidia kuelewa habari, matangazo na hata nia za watu katika maisha ya kila siku.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andika mwisho mbadala wa “Mto wa Zawadi” wa maneno 100.</li>
    <li>Fasiri methali tatu zinazohusu umoja.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Utabiri wangu ulikuwa karibu kiasi gani?</li>
    <li>Ni kauli gani ya kifungu iliyonigusa zaidi?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia kitakachotokea.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kufasiri</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kueleza maana fiche.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kidokezo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ishara ya kusaidia kukisia.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mhusika</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mtu katika hadithi.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kutabiri kwa kutumia vidokezo.</p>
    <p style="margin:6px 0;">☐ Naweza kufasiri kauli.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza sifa za wahusika kwa ushahidi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kutabiri ni:',
            options: ['Kukisia kitakachotokea', 'Kunakili kifungu', 'Kuhesabu maneno', 'Kusoma kwa sauti tu'],
            correct: 0,
            explanation: 'Msomaji hutumia vidokezo kukisia yatakayofuata.'
        },
        {
            question: '“Tunauua kwa mikono yetu wenyewe” inamaanisha:',
            options: ['Wanaua samaki kwa mikono', 'Wakazi wenyewe wanaharibu mto', 'Wanapigana', 'Wanavua samaki'],
            correct: 1,
            explanation: 'Kauli inaonyesha kwamba uchafuzi unatokana na vitendo vya wakazi.'
        },
        {
            question: 'Zawadi hakuvunjika moyo; hii inaonyesha kuwa ni:',
            options: ['Mvivu', 'Mwoga', 'Mvumilivu', 'Mbinafsi'],
            correct: 2,
            explanation: 'Aliendelea na kazi licha ya watu wachache kujitokeza.'
        },
        {
            question: '“Kidole kimoja hakivunji chawa” inafundisha:',
            options: ['Usafi wa kucha', 'Kuua wadudu', 'Kufanya kazi peke yako', 'Umoja huleta mafanikio'],
            correct: 3,
            explanation: 'Mtu mmoja peke yake hawezi kufanikisha jambo kubwa.'
        },
        {
            question: 'Kidokezo kizuri cha kutabiri ni:',
            options: ['Nambari ya ukurasa', 'Rangi ya kitabu', 'Jina la mchapishaji', 'Kichwa cha hadithi'],
            correct: 3,
            explanation: 'Kichwa hutoa wazo la maudhui.'
        },
        {
            question: 'Wakazi kulaumiana kunaonyesha:',
            options: ['Umoja', 'Kukwepa uwajibikaji', 'Furaha', 'Ushirikiano'],
            correct: 1,
            explanation: 'Walitafuta wa kulaumiwa badala ya kuchukua hatua.'
        },
        {
            question: 'Wazee waliokuwa wakicheka walileta majembe kwa sababu:',
            options: ['Waliona mafanikio na wakabadili mtazamo', 'Walilazimishwa', 'Walilipwa', 'Walikuwa wakicheza'],
            correct: 0,
            explanation: 'Mafanikio ya awali yaliwavutia kushiriki.'
        },
        {
            question: 'Kufasiri ni:',
            options: ['Kutafsiri kwa Kiingereza', 'Kunakili kauli', 'Kueleza maana iliyofichika', 'Kutabiri mwisho'],
            correct: 2,
            explanation: 'Kufasiri hutafuta maana iliyo nyuma ya maneno.'
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
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Somo</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📘 Somo 1.2.3: Msamiati katika Muktadha na Maswali ya Ufahamu</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Tunajifunza nini leo?</strong> Tutajifunza kueleza maana ya msamiati kwa kutumia muktadha, kutunga sentensi kwa msamiati huo, na kujibu maswali ya ufahamu ya aina mbalimbali kwa sentensi kamili.</p>
    <p><strong style="color:#fde68a;">Kwa nini somo hili ni muhimu?</strong> Maneno mengi yana maana zaidi ya moja. Kuelewa maana ya neno kulingana na muktadha wake kutakusaidia kusoma kwa ufasaha zaidi na kupata alama kamili katika maswali ya ufahamu.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Utatumia wapi maarifa haya maishani?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📝 Mitihani</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Kusoma vitabu</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Magazeti</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📋 Fomu na maelekezo</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💬 Mazungumzo</span><span style="background:#0f172a;border:1px solid #4ade80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✍️ Uandishi wa insha</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bbf7d0;">🎯 Matokeo maalumu yanayotarajiwa:</strong> Kufikia mwisho wa somo hili, mwanafunzi aweze:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutambua habari mahususi katika kifungu cha simulizi.</li>
    <li>Kupanga matukio ya kifungu kwa mfuatano ufaao.</li>
    <li>Kutabiri na kufasiri matukio ya kifungu.</li>
    <li>Kueleza maana ya msamiati kulingana na muktadha.</li>
    <li>Kujibu maswali ya ufahamu kwa usahihi.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">❓ Swali dadisi:</strong> Unafanya nini ili kupata habari zilizo katika kifungu cha simulizi kwa usahihi?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bbf7d0;">🧰 Maarifa ya awali:</strong> Masomo 1.2.1 na 1.2.2.</p>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">👩🏾‍🏫 Maelezo ya Mwalimu</h3>
    <p><strong>Muktadha</strong> ni maneno na hali zinazozunguka neno. Ukikutana na neno jipya, soma sentensi nzima na zile zilizo kando yake, kisha jiulize: neno hili linaweza kumaanisha nini hapa? Jaribu kuweka neno jingine lenye maana sawa; likifaa, umepata maana.</p>
    <p>Maswali ya ufahamu ni ya aina kadhaa: ya <strong>moja kwa moja</strong>, ya <strong>kukisia</strong>, ya <strong>msamiati</strong>, ya <strong>maoni</strong> na ya <strong>sarufi</strong>. Jibu kwa sentensi kamili na uzingatie alama za swali.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">🗣️ Kwa Lugha Rahisi</p>
    <div>Neno jipya? Soma sentensi nzima → kisia → jaribu kubadilisha → thibitisha.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mazingira ya neno katika sentensi.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Maana ya neno hutegemea muktadha.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Angavu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safi na yenye kuonyesha ndani yake.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Maji yalikuwa angavu.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kusongamana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukusanyika kwa wingi mahali pamoja.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Nzi walisongamana juu ya taka.</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kunong’ona</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kusema kwa sauti ya chini sana.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Alinong’ona peke yake.</em>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Toroli</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kigari cha mkono cha kubebea mizigo.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Wazee walileta matoroli.</em>
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
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">“Mto wa Zawadi” — kifungu cha simulizi</p>
    <p style="margin:8px 0;">(1) Kijiji cha Kambi Moto kilikuwa na mto mmoja mdogo uliotiririka kutoka milimani. Zamani, maji yake yalikuwa angavu kiasi kwamba watoto waliweza kuona samaki wadogo wakiogelea. Lakini kadiri miaka ilivyosonga, wakazi walianza kutupa mifuko ya plastiki, chupa na mabaki ya chakula kandokando ya mto. Ukingo wa mto ukageuka kuwa jaa.</p>
    <p style="margin:8px 0;">(2) Zawadi, msichana wa Gredi ya 9, alikuwa akichota maji mtoni kila asubuhi kabla ya kwenda shuleni. Siku moja aliona nzi wakiwa wamesongamana juu ya rundo la taka, na harufu mbaya ikimjaa puani. Moyo wake ulifadhaika. “Mto huu ndio uhai wetu,” alinong’ona, “lakini tunauua kwa mikono yetu wenyewe.”</p>
    <p style="margin:8px 0;">(3) Wiki mbili baadaye, wagonjwa kadhaa wa kuhara walifikishwa katika zahanati ya kijiji. Muuguzi, Bi. Achieng, aliwaeleza wakazi kwamba maji machafu ndiyo yaliyokuwa chanzo cha ugonjwa huo. Wazazi walishikwa na hofu; wengine waliilaumu serikali, wengine wakawalaumu majirani.</p>
    <p style="margin:8px 0;">(4) Zawadi hakukaa kimya. Aliwaendea wanachama wa klabu ya mazingira shuleni na kuwaeleza mpango wake. Walitengeneza mabango yaliyosema “Mto Safi, Afya Bora” na kuyabandika sokoni na kanisani. Kisha walimwomba chifu awaruhusu kuandaa siku ya usafi kila Jumamosi ya mwisho wa mwezi.</p>
    <p style="margin:8px 0;">(5) Jumamosi ya kwanza, ni watu kumi tu waliojitokeza. Zawadi hakuvunjika moyo. Walizoa taka, wakazipanga kwa aina na kupanda miti kandokando ya mto. Jumamosi iliyofuata, idadi iliongezeka hadi hamsini. Hata wazee waliokuwa wakicheka mwanzoni walileta majembe na matoroli.</p>
    <p style="margin:8px 0;">(6) Miezi sita baadaye, mto ulianza kurejea katika hali yake ya awali. Visa vya kuhara vilipungua, na kaunti ikaweka mapipa ya taka sokoni. Siku ya sherehe ya Mashujaa, chifu alimkabidhi Zawadi cheti cha shukrani. Zawadi alitabasamu na kusema, “Kidole kimoja hakivunji chawa. Ushindi huu ni wa kijiji kizima.”</p>
    </div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Msamiati katika Muktadha</h3>
    <div style="background:#0f172a;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Mfano wa Kazi 1: Kueleza maana kwa muktadha</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Swali:</strong> Eleza maana ya neno “angavu” kama lilivyotumika katika aya ya 1, kisha ulitumie katika sentensi yako.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Jinsi ya kufikiri:</strong> Sentensi inasema watoto waliweza kuona samaki wakiogelea.</p>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bfdbfe;">Hatua ya 1: Soma muktadha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“maji yake yalikuwa angavu kiasi kwamba watoto waliweza kuona samaki.”</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bfdbfe;">Hatua ya 2: Kisia maana</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Safi kiasi cha kuonyesha kilicho ndani.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bfdbfe;">Hatua ya 3: Jaribu kubadilisha</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“maji yake yalikuwa safi kabisa” — inafaa.</div>
    </div>
    <div style="background:#1e293b;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#22c55e;color:#052e16;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bfdbfe;">Hatua ya 4: Tunga sentensi</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Kioo cha dirisha kilikuwa angavu baada ya kuoshwa.</div>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Jibu:</strong> “Angavu” ni safi kiasi cha kuonyesha kilicho ndani. Sentensi: Kioo cha dirisha kilikuwa angavu baada ya kuoshwa.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Kosa la kawaida:</strong> Kutoa maana ya kamusi isiyolingana na muktadha.</p>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Neno (aya)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Maana katika muktadha</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">jaa (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mahali pa kutupa taka</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kusongamana (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kukusanyika kwa wingi</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kushikwa na hofu (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kuogopa sana</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">hakuvunjika moyo (5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">hakukata tamaa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kurejea (6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kurudi</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Aina za Maswali ya Ufahamu</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aina</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mfano kutoka kifungu</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Jibu</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moja kwa moja</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muuguzi alieleza nini kuhusu chanzo cha kuhara?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maji machafu ndiyo chanzo cha ugonjwa.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukisia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa nini Zawadi alipewa cheti?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kwa sababu ya uongozi wake katika kusafisha mto na kuhamasisha jamii.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Msamiati</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eleza maana ya “kurejea”.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kurudi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maoni</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Je, unakubali kuwa ushindi ulikuwa wa kijiji kizima? Eleza.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ndiyo, kwa sababu watu wengi walishiriki siku za usafi…</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sarufi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Andika kwa wingi: “Mto ulianza kurejea.”</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mito ilianza kurejea.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kichwa mbadala</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kipe kifungu kichwa kingine.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“Umoja Waokoa Mto.”</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Maswali Shirikishi 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— jaribu kwanza kabla ya kufungua jibu.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Jibu la swali la maoni linahitaji nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Msimamo na sababu.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Eleza maana ya “hakuvunjika moyo”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Hakukata tamaa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Andika kwa wingi: “Zahanati ilipokea mgonjwa.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Zahanati zilipokea wagonjwa.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Mazoezi Yanayoongozwa</h3>
    <p>Tufanye pamoja. Soma swali, fuata kidokezo, kisha linganisha jibu lako.</p>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Eleza maana ya “kusongamana” kisha ulitumie katika sentensi.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Nzi walikuwa wengi mahali pamoja.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Kukusanyika kwa wingi. Mfano: Watu walisongamana kituoni wakisubiri basi.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Swali “Kwa nini wazazi walishikwa na hofu?” ni la aina gani?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Je, jibu limeandikwa wazi?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">La kukisia (au moja kwa moja kwa sehemu).</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Kipe kifungu kichwa kingine.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Kidokezo: Kichwa kiakisi wazo kuu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: “Mto Safi, Afya Bora” au “Juhudi za Zawadi”.</div>
    </details>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🛠️ Shughuli za Ujifunzaji</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Shughuli ya Mwanafunzi Binafsi</p>
    <div>Chagua maneno matano mapya kutoka kifungu; eleza maana zake kwa muktadha na utunge sentensi.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Shughuli ya Wawili Wawili</p>
    <div>Tungeni maswali sita ya ufahamu (aina tofauti) na mjibu ya wenzenu.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Shughuli ya Kikundi</p>
    <div>Andaeni kamusi ndogo ya msamiati wa usafi wa mazingira yenye maneno kumi na mifano.</div>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Ujuzi wa Kidijitali</p>
    <div>Tumia kamusi ya Kiswahili mtandaoni kulinganisha maana ya kamusi na maana ya muktadha ya maneno matatu kutoka kifungu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Mazoezi ya Kujipima</h3>
    <p>Fanya kwenye daftari lako. Anza na maswali rahisi kisha upande ngazi. Fungua jibu baada ya kujaribu.</p>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Rahisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Muktadha ni nini?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maneno na hali zinazozunguka neno katika sentensi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Eleza maana ya “jaa”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mahali pa kutupa taka.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Wastani</p>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Taja aina nne za maswali ya ufahamu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Moja kwa moja, kukisia, msamiati, maoni, sarufi, kichwa mbadala (yoyote nne).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Tunga sentensi kwa “kunong’ona”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Mwanafunzi alinong’ona ili asimwamshe mtoto.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Magumu</p>
    <p style="margin:8px 0 2px 0;"><strong>S5.</strong> Je, unakubali kuwa wanafunzi wanaweza kubadilisha jamii zao? Toa sababu mbili kutoka kifungu.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Ndiyo: Zawadi na klabu walihamasisha jamii kupitia mabango; siku za usafi zilipunguza magonjwa.</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Maisha Halisi</p>
    <p style="margin:8px 0 2px 0;"><strong>S6.</strong> Andika maswali matatu ungeuliza mkutanoni kuhusu usafi wa soko.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mfano: Taka hukusanywa mara ngapi? Nani anahusika? Tunaweza kusaidiaje?</div>
    </details>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Maswali ya Kufikiri</p>
    <p style="margin:8px 0 2px 0;"><strong>S7.</strong> Kwa nini maana ya kamusi haitoshi kila mara?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Neno moja huweza kuwa na maana kadhaa; muktadha huamua maana inayofaa.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Marudio</h3>
    <p>Maana ya msamiati hupatikana kwa kusoma muktadha, kukisia na kujaribu neno mbadala. Maswali ya ufahamu ni ya moja kwa moja, kukisia, msamiati, maoni, sarufi na kichwa mbadala; yajibiwe kwa sentensi kamili.</p>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🔑 Mambo muhimu</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Muktadha huamua maana.</li>
    <li>Jaribu neno mbadala.</li>
    <li>Aina sita za maswali.</li>
    <li>Jibu kwa sentensi kamili.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📌 Mambo ya kukumbuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Maoni = msimamo + sababu.</li>
    <li>Tunga sentensi zinazoonyesha maana.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">⚠️ Makosa ya kuepuka</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kutoa maana ya kamusi isiyofaa muktadha.</li>
    <li>Kujibu kwa neno moja.</li>
    </ul>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">📝 Vidokezo vya mtihani</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Kwa swali la msamiati, toa maana inayolingana na kifungu.</li>
    <li>Soma swali kwa makini kabla ya kujibu.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kujibu kwa sentensi kamili.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Kujifunza kujifunza</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kubuni kamusi ndogo.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Ujuzi wa kidijitali</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kutumia kamusi mtandaoni.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">💚 Maadili</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Uwajibikaji</span><span style="background:#0f172a;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Bidii</span>
    </div>
    <h4 style="color:#86efac;margin:16px 0 6px 0;">🧩 Masuala mtambuka (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0f172a;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Usafi wa mazingira</span>
    </div>
    <p><strong style="color:#5eead4;">Matumizi halisi ya maisha:</strong> Kuelewa maneno kwa muktadha hukusaidia kuelewa mikataba, maagizo ya dawa na habari bila kukosea.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏠 Kazi ya Nyumbani</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Jibu maswali sita ya aina tofauti kuhusu “Mto wa Zawadi”.</li>
    <li>Andika maneno kumi mapya na maana zake.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Tafakari</h3>
    <p>Jibu kwa uaminifu katika daftari lako:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ni aina gani ya swali hunipa shida?</li>
    <li>Muktadha umenisaidiaje leo?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Angavu</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safi kabisa.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kusongamana</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kukusanyika kwa wingi.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Toroli</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kigari cha mkono.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Orodha ya Kujitathmini</h3>
    <p>Weka alama ☑ tu ukiweza kufanya jambo hili bila kuangalia maelezo.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza maana kwa muktadha.</p>
    <p style="margin:6px 0;">☐ Naweza kutunga sentensi kwa msamiati mpya.</p>
    <p style="margin:6px 0;">☐ Naweza kutambua aina za maswali.</p>
    <p style="margin:6px 0;">☐ Naweza kujibu kwa sentensi kamili.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '“Angavu” katika kifungu linamaanisha:',
            options: ['Chafu', 'Lenye kina kirefu', 'Baridi', 'Safi kabisa'],
            correct: 3,
            explanation: 'Maji yalikuwa safi kiasi cha kuona samaki.'
        },
        {
            question: '“Kusongamana” linamaanisha:',
            options: ['Kukusanyika kwa wingi', 'Kukimbia', 'Kulala', 'Kuruka'],
            correct: 0,
            explanation: 'Nzi walikuwa wengi mahali pamoja.'
        },
        {
            question: '“Hakuvunjika moyo” inamaanisha:',
            options: ['Aliugua moyo', 'Hakukata tamaa', 'Alikasirika', 'Alikimbia'],
            correct: 1,
            explanation: 'Aliendelea na juhudi zake.'
        },
        {
            question: 'Muktadha ni:',
            options: ['Kichwa cha kitabu', 'Jina la mwandishi', 'Idadi ya aya', 'Mazingira ya neno katika sentensi'],
            correct: 3,
            explanation: 'Maneno yanayozunguka neno husaidia kupata maana.'
        },
        {
            question: 'Swali la maoni hujibiwa kwa:',
            options: ['Neno moja', 'Msimamo na sababu', 'Kunakili aya', 'Kuchora'],
            correct: 1,
            explanation: 'Maoni yanahitaji msimamo wenye sababu.'
        },
        {
            question: '“Mto ulianza kurejea” kwa wingi ni:',
            options: ['Mito ilianza kurejea', 'Mto zilianza kurejea', 'Mito ulianza kurejea', 'Mitoni ilianza kurejea'],
            correct: 0,
            explanation: 'Mto (ngeli ya U-I) huwa mito na kiambishi i-.'
        },
        {
            question: 'Toroli ni:',
            options: ['Aina ya samaki', 'Jembe', 'Kigari cha mkono cha kubebea mizigo', 'Pipa la taka'],
            correct: 2,
            explanation: 'Wazee walileta matoroli kubeba taka.'
        },
        {
            question: 'Kichwa mbadala kinapaswa:',
            options: ['Kuwa kirefu sana', 'Kutaja mtu mmoja tu bila sababu', 'Kuakisi wazo kuu', 'Kuwa swali la hesabu'],
            correct: 2,
            explanation: 'Kichwa kizuri hubeba wazo kuu la kifungu.'
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
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
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
    <li>Habari mahususi</li>
    <li>Mfuatano wa matukio</li>
    <li>Kutabiri na kufasiri</li>
    <li>Msamiati katika muktadha</li>
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
    <div>Rejelea kifungu “Mto wa Zawadi” kila unapojibu.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mhusika mkuu wa kifungu ni:',
            options: ['Zawadi', 'Bi. Achieng', 'Chifu', 'Neema'],
            correct: 0,
            explanation: 'Hadithi inafuata juhudi za Zawadi.'
        },
        {
            question: 'Chanzo cha ugonjwa wa kuhara kilikuwa:',
            options: ['Chakula cha shule', 'Mvua', 'Maji machafu', 'Baridi'],
            correct: 2,
            explanation: 'Muuguzi alieleza kwamba maji machafu ndiyo chanzo.'
        },
        {
            question: 'Mabango yalisema:',
            options: ['Mto Safi, Afya Bora', 'Safisha Shule', 'Panda Miti', 'Okoa Samaki'],
            correct: 0,
            explanation: 'Aya ya 4 inataja ujumbe huu.'
        },
        {
            question: 'Siku za usafi zilifanyika:',
            options: ['Kila Jumatatu', 'Kila siku', 'Jumamosi ya mwisho wa mwezi', 'Mara moja kwa mwaka'],
            correct: 2,
            explanation: 'Chifu aliombwa ruhusa kwa Jumamosi ya mwisho wa mwezi.'
        },
        {
            question: 'Kufasiri ni:',
            options: ['Kukisia mwisho', 'Kueleza maana iliyofichika', 'Kunakili', 'Kuhesabu'],
            correct: 1,
            explanation: 'Kufasiri hutafuta maana fiche.'
        },
        {
            question: '“Kurejea” linamaanisha:',
            options: ['Kuondoka', 'Kurudi', 'Kulala', 'Kukauka'],
            correct: 1,
            explanation: 'Mto ulianza kurudi katika hali yake ya awali.'
        },
        {
            question: 'Zawadi alipewa cheti siku ya:',
            options: ['Madaraka', 'Jamhuri', 'Mashujaa', 'Krismasi'],
            correct: 2,
            explanation: 'Aya ya 6 inataja sherehe ya Mashujaa.'
        },
        {
            question: 'Kiashiria cha mfuatano ni:',
            options: ['Miezi sita baadaye', 'Mabango', 'Zahanati', 'Toroli'],
            correct: 0,
            explanation: 'Huonyesha muda uliopita.'
        },
        {
            question: 'Sifa ya Zawadi inayojitokeza ni:',
            options: ['Uvivu', 'Ubinafsi', 'Uoga', 'Uvumilivu'],
            correct: 3,
            explanation: 'Aliendelea licha ya watu wachache.'
        },
        {
            question: 'Jibu la swali la ufahamu linapaswa kuwa:',
            options: ['Neno moja tu', 'Aya nzima iliyonakiliwa', 'Picha', 'Sentensi kamili'],
            correct: 3,
            explanation: 'Sentensi kamili huonyesha uelewa.'
        }
    ]
},
{
    name: '1.2 Kazi ya Mradi: Jarida la Hadithi za Usafi wa Mazingira',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Kazi ya Mradi</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">📂 Jarida la Hadithi za Usafi wa Mazingira</h2>
    <p style="font-size:16px;">Kwa vikundi, mtakusanya au kuandika simulizi fupi kuhusu usafi wa mazingira, kutunga maswali ya ufahamu na kutengeneza jarida dogo la darasa.</p>
    <p style="margin:6px 0 0 0;color:#d1fae5;font-size:14px;">🗓️ Muda wa kukamilisha: wiki moja (takriban 80 min za kazi darasani na nyumbani).</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 Muktadha wa Kazi</h3>
    <p>Maktaba ya shule inataka jarida la hadithi fupi zitakazowahamasisha wanafunzi wa gredi za chini kuhusu usafi. Kikundi chenu kitachangia kurasa nne.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🏙️ Matumizi Halisi ya Maisha</p>
    <div>Hadithi huwahamasisha watu kubadilisha tabia kwa urahisi kuliko maagizo matupu.</div>
    </div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Hatua za Kufuata</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Andikeni simulizi fupi (maneno 250–300) kuhusu usafi katika mtaa, shule au soko.</li>
    <li>Wekeni kichwa kinachovutia na picha moja.</li>
    <li>Tungeni maswali sita ya ufahamu ya aina tofauti pamoja na majibu.</li>
    <li>Ongezeni orodha ya msamiati mpya kumi na maana zake kwa muktadha.</li>
    <li>Someni simulizi kwa mzazi au mlezi na mwandike maoni yake.</li>
    <li>Pangeni kurasa nne za jarida na kuwasilisha darasani.</li>
    </ol>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 Utakachowasilisha</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Simulizi yenye kichwa na picha</li>
    <li>Maswali sita na majibu</li>
    <li>Orodha ya msamiati</li>
    <li>Maoni ya mzazi au mlezi</li>
    <li>Jarida la kurasa nne</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mfuatano wazi, ubunifu na ujumbe mzito</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mfuatano wazi na ujumbe</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumi kwa maana sahihi za muktadha</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kumi kwa maana nyingi sahihi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tano hadi tisa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chini ya tano</td>
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
    <div>Tumieni viashiria vya wakati kuonyesha mfuatano.<br>Hadithi iwe na mhusika anayechukua hatua.<br>Msinakili hadithi za watu wengine.</div>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Kujitathmini Baada ya Kazi</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nilijifunza nini kuhusu kuandika simulizi?</li>
    <li>Maoni ya mzazi yalinisaidiaje?</li>
    <li>Nitachangiaje usafi wa mazingira?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Simulizi ya kikundi iwe na maneno:',
            options: ['10', '2 000', '50', '250–300'],
            correct: 3,
            explanation: 'Maelekezo yanaomba maneno 250–300.'
        },
        {
            question: 'Kila kikundi kitunge maswali mangapi ya ufahamu?',
            options: ['Moja', 'Ishirini', 'Sita', 'Hakuna'],
            correct: 2,
            explanation: 'Maswali sita ya aina tofauti yanahitajika.'
        },
        {
            question: 'Simulizi isomwe kwa:',
            options: ['Mgeni barabarani', 'Mzazi au mlezi', 'Mtu yeyote mtandaoni', 'Hakuna'],
            correct: 1,
            explanation: 'Maoni ya mzazi au mlezi husaidia kuboresha kazi.'
        },
        {
            question: 'Jarida litakuwa na kurasa:',
            options: ['Nne', 'Moja', 'Kumi', 'Ishirini'],
            correct: 0,
            explanation: 'Kila kikundi kitachangia kurasa nne.'
        },
        {
            question: 'Viashiria vya wakati husaidia:',
            options: ['Kuongeza picha', 'Kupamba jarida', 'Kuandika majina', 'Kuonyesha mfuatano wa matukio'],
            correct: 3,
            explanation: 'Huonyesha mpangilio wa matukio.'
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
    <div style="background: linear-gradient(135deg, #7c2d12, #9a3412); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4ade80;">
    <p style="margin:0;color:#bbf7d0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Mada 1.0 Usafi wa Mazingira · Mada Ndogo 1.2 Kusoma kwa Ufahamu: Kifungu cha Simulizi</p>
    <p style="margin:2px 0 0 0;"><span style="background:#052e16;border:1px solid #4ade80;color:#bbf7d0;padding:2px 10px;border-radius:999px;font-size:12px;">Marudio na Muhtasari</span> <span style="color:#d1fae5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#86efac;margin:8px 0 10px 0;">🔁 Marudio — Kusoma kwa Ufahamu: Kifungu cha Simulizi</h2>
    <p style="font-size:16px;">Rudia mambo makuu ya mada ndogo 1.2.</p>
    </div>
    <div style="background:#1e293b;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #334155;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Kadi za Marudio</h3>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔎 Habari mahususi</p>
    <div>Nani? Nini? Wapi? Lini? Kwa nini? Vipi?</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔢 Mfuatano</p>
    <div>Fuata viashiria vya wakati: siku moja, kisha, wiki mbili baadaye, hatimaye.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">🔮 Kutabiri</p>
    <div>Kukisia yatakayotokea kwa kutumia kichwa, picha na matukio.</div>
    </div>
    <div style="background:#0f172a;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4ade80;">
    <p style="margin:0 0 4px 0;color:#86efac;font-weight:bold;">💡 Kufasiri</p>
    <div>Kueleza maana iliyofichika ya kauli, tukio au tabia.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Habari mahususi</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mwandishi anamaanisha nini hasa?</td>
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
    <p style="margin:8px 0 2px 0;"><strong>S1.</strong> Taja maswali sita ya habari mahususi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Nani, nini, wapi, lini, kwa nini, vipi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S2.</strong> Taja viashiria vitatu vya wakati.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Siku moja, wiki mbili baadaye, miezi sita baadaye.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S3.</strong> Fasiri: “Mto huu ndio uhai wetu.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Maisha ya kijiji yanategemea mto.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>S4.</strong> Eleza maana ya “jaa” na utunge sentensi.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#a5b4fc;">👉 Onyesha jibu</summary>
    <div style="background:#0f172a;border-radius:8px;padding:8px 12px;margin-top:6px;color:#bbf7d0;">Mahali pa kutupa taka. Mfano: Jaa la soko lilijaa nzi.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #4ade80;margin-bottom:20px;">
    <h3 style="color:#bbf7d0;margin-top:0;">🧠 Muhtasari wa Mada Ndogo</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Msomaji makini hutafuta habari mahususi na mfuatano.</li>
    <li>Hutabiri na hufasiri kwa ushahidi.</li>
    <li>Hueleza msamiati kwa muktadha na hujibu kwa sentensi kamili.</li>
    </ul>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">✅ Je, Uko Tayari Kuendelea?</h3>
    <p style="margin:6px 0;">☐ Naweza kupata habari mahususi.</p>
    <p style="margin:6px 0;">☐ Naweza kupanga matukio.</p>
    <p style="margin:6px 0;">☐ Naweza kutabiri na kufasiri.</p>
    <p style="margin:6px 0;">☐ Naweza kueleza msamiati kwa muktadha.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Swali “Lini?” hutafuta:',
            options: ['Mahali', 'Mtu', 'Sababu', 'Wakati'],
            correct: 3,
            explanation: '“Lini” huuliza kuhusu wakati.'
        },
        {
            question: 'Kutabiri hufanyika:',
            options: ['Baada ya mtihani tu', 'Kabla au wakati wa kusoma', 'Kamwe', 'Wakati wa kuandika barua'],
            correct: 1,
            explanation: 'Msomaji hukisia kabla na wakati wa kusoma.'
        },
        {
            question: 'Maana ya neno hutegemea:',
            options: ['Rangi ya karatasi', 'Urefu wa neno', 'Muktadha', 'Herufi ya kwanza'],
            correct: 2,
            explanation: 'Muktadha huonyesha maana inayofaa.'
        },
        {
            question: '“Kidole kimoja hakivunji chawa” ni:',
            options: ['Kitendawili', 'Methali', 'Nahau', 'Tashbihi'],
            correct: 1,
            explanation: 'Ni methali inayofundisha umoja.'
        },
        {
            question: 'Sifa ya mhusika itajwe pamoja na:',
            options: ['Ushahidi kutoka kifungu', 'Picha', 'Hadithi nyingine', 'Takwimu za hesabu'],
            correct: 0,
            explanation: 'Ushahidi huthibitisha sifa.'
        }
    ]
}
],
          stats:{lessons:13,exercises:87,quizzes:14,projects:4,duration:'9 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Mjadala ni:',
                  options: ['Hadithi ya kubuni', 'Barua rasmi', 'Mazungumzo rasmi ya kutetea au kupinga hoja', 'Wimbo'],
                  correct: 2,
                  explanation: 'Mjadala huwa na pande mbili zinazojadili hoja chini ya mwenyekiti.'
              },
              {
                  question: 'Anayepinga hoja katika mjadala huitwa:',
                  options: ['Mtetezi', 'Mpinzani', 'Katibu', 'Mwenyekiti'],
                  correct: 1,
                  explanation: 'Wapinzani hutoa hoja za kupinga hoja kuu.'
              },
              {
                  question: 'Nani hudumisha nidhamu na kutangaza matokeo?',
                  options: ['Mwenyekiti', 'Mlinda muda', 'Mchangiaji', 'Mtetezi'],
                  correct: 0,
                  explanation: 'Mwenyekiti huongoza mjadala tangu mwanzo hadi mwisho.'
              },
              {
                  question: 'Kabla ya kuchangia mjadala, unapaswa:',
                  options: ['Kuomba ruhusa ya mwenyekiti', 'Kumkatiza mzungumzaji', 'Kupiga kelele', 'Kuondoka'],
                  correct: 0,
                  explanation: 'Mwenyekiti ndiye hutoa nafasi ya kuzungumza.'
              },
              {
                  question: 'Lugha ya heshima ya kupinga ni:',
                  options: ['Wewe hujui kitu', 'Kwa heshima, naomba kutofautiana na mwenzangu', 'Nyamaza', 'Hoja yako ni ujinga'],
                  correct: 1,
                  explanation: 'Inapinga hoja huku ikimheshimu mzungumzaji.'
              },
              {
                  question: 'Kiunganishi “aidha” hutumika:',
                  options: ['Kusalimia', 'Kuhitimisha', 'Kuuliza', 'Kuongeza hoja'],
                  correct: 3,
                  explanation: '“Aidha” huongeza wazo jingine.'
              },
              {
                  question: 'Maswali ya habari mahususi ni:',
                  options: ['Ndiyo au hapana', 'Nani, nini, wapi, lini, kwa nini, vipi', 'Maswali ya hesabu', 'Vitendawili'],
                  correct: 1,
                  explanation: 'Maswali haya sita husaidia kupata taarifa kamili.'
              },
              {
                  question: 'Viashiria kama “wiki mbili baadaye” huonyesha:',
                  options: ['Mhusika', 'Methali', 'Mahali', 'Mfuatano wa matukio'],
                  correct: 3,
                  explanation: 'Huonyesha mpangilio wa matukio kwa wakati.'
              },
              {
                  question: 'Kufasiri ni:',
                  options: ['Kukisia kitakachotokea', 'Kunakili kifungu', 'Kueleza maana iliyofichika', 'Kuhesabu maneno'],
                  correct: 2,
                  explanation: 'Kufasiri hutafuta maana iliyo nyuma ya maneno.'
              },
              {
                  question: 'Kutabiri ni:',
                  options: ['Kueleza maana ya neno', 'Kuandika barua', 'Kusoma kwa sauti', 'Kukisia kitakachotokea kwa kutumia vidokezo'],
                  correct: 3,
                  explanation: 'Msomaji hutumia kichwa, picha na matukio kukisia.'
              },
              {
                  question: 'Maana ya neno katika ufahamu hutegemea:',
                  options: ['Muktadha', 'Kamusi pekee', 'Urefu wa neno', 'Herufi ya kwanza'],
                  correct: 0,
                  explanation: 'Muktadha huonyesha maana inayofaa katika kifungu.'
              },
              {
                  question: '“Kidole kimoja hakivunji chawa” inafundisha:',
                  options: ['Usafi wa kucha', 'Kufanya kazi peke yako', 'Umoja huleta mafanikio', 'Kuua wadudu'],
                  correct: 2,
                  explanation: 'Methali hii inasisitiza ushirikiano.'
              }
          ]}
);