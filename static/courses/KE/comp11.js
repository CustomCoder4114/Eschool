// Eschool course: Grade 11 Computer Studies (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'computer-studies-grade-11', name:'Grade 11 Computer Studies', code:'CSC 111', level:'grade-11', iconStyle:'fas', icon:'fa-microchip', color:'#283593',
          category:'Sciences',
          description:'Learn how computers represent numbers, text, images and sound, and master binary arithmetic — addition, subtraction with two’s complement, multiplication, division and shifts — with hands-on computer laboratory activities.',
          longDescription:'This Grade 11 Computer Studies course builds on Grade 10 Computer Science and follows the KICD Senior School Grade 11 sequence: data representation, binary arithmetic, logic gates and circuits, network standards, protocols and security, object-oriented programming, relational databases and SQL, and web development fundamentals. Each strand opens with an overview, its learning outcomes and an introduction, and every sub-strand has three lessons, a computer laboratory activity, a quiz, an assignment, a revision page and a summary. Lessons include teacher explanations, background, vocabulary, labelled diagrams, many worked examples, safety notes, practical investigations, analysis, real-life Kenyan applications, guided and independent practice, and ten practice questions each. Batch 1 covers Data Representation (data units, binary fractions, signed integers, BCD, floating point, text, images and sound) and Binary Arithmetic Operations (addition, overflow, subtraction, two’s complement, multiplication, division and shifts).',
          modules:[
{
    name: '1.0 Foundations of Computer Studies — Strand Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🗺️ Strand 1.0: Foundations of Computer Studies (Grade 11)</h2>
    <p style="font-size:16px;">Welcome to Grade 11 Computer Studies. In Grade 10 you learnt how computers evolved, how the von Neumann architecture works and how to convert between binary, octal and hexadecimal. In Grade 11 you go deeper into how the machine really thinks.</p>
    <p style="font-size:16px;">Every photo on your phone, every M-Pesa message and every song you stream is stored as patterns of 0s and 1s. This strand shows how numbers, text, images and sound are represented, how the computer does arithmetic in binary, and how logic gates and circuits make those calculations happen.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e8eaf6;">❓ Big question for this strand:</strong> How do computers represent and process all types of data using only 0s and 1s?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>Grade 11 Computer Studies has three strands. Strand 1.0 builds the mathematical and electronic foundations; Strand 2.0 extends networking with standards, protocols and security; Strand 3.0 develops programming, databases and the web.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Big question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">You will be able to…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Data Representation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How are numbers, text, images and sound stored in a computer?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use data units, binary fractions, signed integers, BCD and floating point; calculate text, image and sound storage.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Binary Arithmetic Operations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How does a computer calculate in binary?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add, subtract, multiply and divide in binary, use two’s complement and detect overflow.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Logic Gates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How do gates make decisions?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe AND, OR, NOT, NAND, NOR, XOR and their truth tables.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Logic Circuits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How are gates combined?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Draw and analyse logic circuits and simple adders.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Strand Map</h3>
    <p>The whole course has 11 sub-strands across three strands. Each sub-strand has three lessons, a computer laboratory activity, a quiz, an assignment, a revision page and a summary. This first batch covers 1.1 and 1.2.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.1 Data Representation <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Data in the Machine</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Data units, number systems and binary fractions</li>
    <li>1.1.2 Representing signed numbers: sign-and-magnitude, complements, BCD and floating point</li>
    <li>1.1.3 Representing text, images and sound</li>
    <li>💻 Laboratory activity: measuring how data is stored</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.2 Binary Arithmetic Operations <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Computer Arithmetic</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Binary addition and overflow</li>
    <li>1.2.2 Binary subtraction and two’s complement</li>
    <li>1.2.3 Binary multiplication, division and shifts</li>
    <li>💻 Laboratory activity: checking binary arithmetic with software</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.3 Logic Gates <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Digital Logic</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.4 Logic Circuits <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Digital Logic</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">2.1–2.2 Network Standards and Protocols; Network Security <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Strand 2.0 Computer Networking</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">3.1–3.5 OOP Concepts; OOP Implementation; Relational Databases; SQL; Web Development <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Strand 3.0 Software Development</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Converting and calculating in binary; detecting overflow.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using programmer calculators, spreadsheets and file properties.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining methods in groups.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking answers by converting back.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and imagination</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing pixel images and codes.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 PCIs</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security and digital citizenship</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (data bundles and storage)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety in the computer laboratory</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care (e-waste)</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Strand</p>
    <div>Work through the modules in order. Do every worked example yourself on paper before reading the answer, and always check by converting your answer back to decimal. Use the computer laboratory activities to confirm your hand calculations.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Grade 11 Computer Studies?',
            options: ['Four', 'Eleven', 'Seven', 'Two'],
            correct: 1,
            explanation: 'Four in Strand 1.0, two in Strand 2.0 and five in Strand 3.0.'
        },
        {
            question: 'Which sub-strand covers two’s complement subtraction?',
            options: ['1.2 Binary Arithmetic Operations', '1.1 Data Representation', '1.3 Logic Gates', '3.4 SQL'],
            correct: 0,
            explanation: 'Subtraction methods are part of binary arithmetic.'
        },
        {
            question: 'Which strand covers SQL and web development?',
            options: ['Strand 1.0', 'Strand 3.0 Software Development', 'Strand 2.0', 'None'],
            correct: 1,
            explanation: 'Databases and the web are software development topics.'
        },
        {
            question: 'Grade 11 data representation builds on Grade 10:',
            options: ['Biology', 'Map reading', 'Number systems and conversions', 'Engines'],
            correct: 2,
            explanation: 'Grade 10 introduced binary, octal and hexadecimal.'
        },
        {
            question: 'The best way to check a binary answer is to:',
            options: ['Convert it back to decimal', 'Guess', 'Ask a friend only', 'Skip checking'],
            correct: 0,
            explanation: 'Converting back confirms the result.'
        }
    ]
},
{
    name: '1.0 Foundations of Computer Studies — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🎯 Learning Outcomes for Strand 1.0 (Grade 11)</h2>
    <p style="font-size:16px;">These are the outcomes you should achieve in this strand. Come back after each sub-strand and tick what you can now do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌟 General Learning Outcomes for the Strand</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use computer science knowledge, skills and values in daily life.</li>
    <li>Practise ethical and safe use of computer technology.</li>
    <li>Develop computer applications that solve real-world problems.</li>
    <li>Configure and secure computer networks for resource sharing.</li>
    <li>Pursue further education, careers and entrepreneurship in computing.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.1 Data Representation</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain data units and convert between them.</li>
    <li>Convert binary fractions to and from decimal.</li>
    <li>Represent signed integers using sign-and-magnitude, ones’ complement and two’s complement.</li>
    <li>Represent numbers in BCD and explain floating point.</li>
    <li>Explain how text, images and sound are represented and calculate storage requirements.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How are numbers, text, images and sound stored in a computer?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.2 Binary Arithmetic Operations</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Add binary numbers and detect overflow.</li>
    <li>Subtract binary numbers directly and using two’s complement.</li>
    <li>Multiply and divide binary numbers.</li>
    <li>Use shifts to multiply and divide by powers of two.</li>
    <li>Appreciate how the ALU performs arithmetic.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How does a computer calculate in binary?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0;color:#c5cae9;font-weight:bold;">1.3–1.4 Logic Gates; Logic Circuits</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Outcomes for these sub-strands will be added with their lessons in a later batch.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do gates and circuits process binary data?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your teacher (and this course) will use the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Strand 1.0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Represents all data types and performs all binary operations accurately, explains each method and detects overflow without prompting.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Represents data and performs binary operations accurately with clear working.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Represents data and performs most operations with some errors.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Represents data and performs operations with many errors, even with support.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Computer Studies is assessed through written tests, practical computer tasks, projects, observation and portfolios. Show working in every calculation — method marks matter.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Detecting overflow without prompting is evidence of:',
            options: ['Below Expectations', 'Exceeds Expectations', 'Approaches Expectations', 'No level'],
            correct: 1,
            explanation: 'Independent, accurate work reaches the top level.'
        },
        {
            question: 'Calculating image storage is an outcome of:',
            options: ['1.1 Data Representation', '1.2 Binary Arithmetic', '1.3 Logic Gates', '2.2 Network Security'],
            correct: 0,
            explanation: 'Images are a data type represented in binary.'
        },
        {
            question: 'Using shifts to multiply by 2 is an outcome of:',
            options: ['1.1 Data Representation', '3.1 OOP', '2.1 Protocols', '1.2 Binary Arithmetic Operations'],
            correct: 3,
            explanation: 'Shifts are arithmetic operations.'
        },
        {
            question: 'Which is a general outcome of Computer Studies?',
            options: ['Grow crops', 'Draw maps', 'Repair engines', 'Practise ethical and safe use of computer technology'],
            correct: 3,
            explanation: 'Ethical use is a general outcome.'
        },
        {
            question: 'Showing honest working in tests demonstrates:',
            options: ['Rivalry', 'Laziness', 'Integrity', 'Greed'],
            correct: 2,
            explanation: 'The answer is Integrity. Honest work is integrity.'
        }
    ]
},
{
    name: '1.0 Foundations of Computer Studies — Introduction',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🚪 Introduction: Everything Is Bits</h2>
    <p style="font-size:16px;">Take a photo on your phone and look at its size: perhaps 3 MB. That is about 25 million bits — 0s and 1s — describing every colour of every dot. Send the photo on WhatsApp and the app squeezes it into fewer bits so it uses less of your data bundle. Your phone’s processor then adds, subtracts and compares those bits billions of times per second.</p>
    <p style="font-size:16px;">To work with computers seriously — as a programmer, network engineer or security analyst — you need to think in bits. This introduction gives you the habits you will use throughout the strand.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧠 Think in Bits</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li><strong>Every value is a pattern</strong> of bits; its meaning depends on how it is interpreted.</li>
    <li><strong>Fixed width</strong>: computers store numbers in a fixed number of bits (8, 16, 32, 64).</li>
    <li><strong>Limits matter</strong>: a fixed width has a smallest and largest value — go beyond and you overflow.</li>
    <li><strong>Check</strong> every answer by converting back to decimal.</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🔤 Key Vocabulary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A binary digit, 0 or 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Byte</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 bits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">01000001</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Word</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The number of bits a CPU handles at once</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">64-bit word</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">MSB / LSB</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most / least significant bit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leftmost / rightmost bit</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Overflow</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A result too large for the bits available</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">200 in 8-bit signed</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Tools You Will Use</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tool</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculator in Programmer mode</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking conversions and arithmetic</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spreadsheet (DEC2BIN, BIN2DEC, CODE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Converting numbers and finding character codes</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">File properties</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeing real file sizes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Text editor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Investigating how text is stored</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🥽 Safety and Ethics</h3>
    <p>Follow computer laboratory rules: no food or drinks, report damaged cables, sit correctly and rest your eyes. Use only approved software and websites, never install programs without permission, and respect other users’ files and privacy.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Keep a “binary workbook” with sections for conversions, signed numbers, data storage calculations and arithmetic. Memorise the powers of 2 from 2⁰ = 1 to 2¹⁰ = 1 024.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The leftmost bit of a binary number is the:',
            options: ['Least significant bit', 'Most significant bit (MSB)', 'Parity bit always', 'Carry bit'],
            correct: 1,
            explanation: 'It has the highest place value.'
        },
        {
            question: '2¹⁰ equals:',
            options: ['1 000', '512', '2 048', '1 024'],
            correct: 3,
            explanation: 'Ten doublings of 1 give 1 024.'
        },
        {
            question: 'A result too large for the available bits is:',
            options: ['A byte', 'Overflow', 'A nibble', 'A word'],
            correct: 1,
            explanation: 'Fixed-width storage has limits.'
        },
        {
            question: 'Which spreadsheet function converts decimal to binary?',
            options: ['SUM', 'CODE', 'AVERAGE', 'DEC2BIN'],
            correct: 3,
            explanation: 'DEC2BIN returns a binary string.'
        },
        {
            question: 'A 64-bit processor handles how many bits at once?',
            options: ['8', '32', '64', '16'],
            correct: 2,
            explanation: 'The answer is 64. Its word size is 64 bits.'
        }
    ]
},
{
    name: '1.1.1 Data Representation: Data Units, Number Systems and Binary Fractions',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Data Units, Number Systems and Binary Fractions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will revise why computers use binary and how to convert between bases, then extend this to data units (bit to terabyte), word size, the place values of binary fractions, and converting decimal fractions to and from binary.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Data bundles, file sizes, memory and storage are all measured in binary units. Real numbers such as prices and measurements contain fractions, so you need to know how computers store them — and why some fractions cannot be stored exactly.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📶 Data bundles</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💾 Storage and memory sizes</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💰 Money in banking systems</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📏 Measurements in sensors</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game physics</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Scientific computing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8eaf6;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain data units and convert between them.</li>
    <li>Convert binary fractions to and from decimal.</li>
    <li>Represent signed integers using sign-and-magnitude, ones’ complement and two’s complement.</li>
    <li>Represent numbers in BCD and explain floating point.</li>
    <li>Explain how text, images and sound are represented and calculate storage requirements.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8eaf6;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Convert between bits, bytes, KB, MB, GB and TB.</li>
    <li>Explain word size.</li>
    <li>Convert decimal fractions to binary.</li>
    <li>Convert binary fractions to decimal.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">❓ Key inquiry question:</strong> How are numbers, text, images and sound stored in a computer?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">🧰 What you already know:</strong> Grade 10 Computer Science 1.2.3: binary, octal and hexadecimal conversions.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A computer stores everything with two-state switches, so it uses binary. A single binary digit is a <strong>bit</strong>. Bits are grouped: 4 bits make a <strong>nibble</strong>, 8 bits a <strong>byte</strong>, and the number of bits a processor handles at one time is its <strong>word</strong> (16, 32 or 64 bits).</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 170" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="10" y="110" width="84" height="40" rx="6" fill="#1a237e" opacity="0.5" stroke="#7986cb"/><text x="52" y="128" fill="#e8eaf6" font-size="11" text-anchor="middle">bit</text><text x="52" y="144" fill="#c5cae9" font-size="10" text-anchor="middle">0 or 1</text><rect x="100" y="96" width="84" height="54" rx="6" fill="#1a237e" opacity="0.5700000000000001" stroke="#7986cb"/><text x="142" y="114" fill="#e8eaf6" font-size="11" text-anchor="middle">nibble</text><text x="142" y="130" fill="#c5cae9" font-size="10" text-anchor="middle">4 bits</text><rect x="190" y="82" width="84" height="68" rx="6" fill="#1a237e" opacity="0.64" stroke="#7986cb"/><text x="232" y="100" fill="#e8eaf6" font-size="11" text-anchor="middle">byte</text><text x="232" y="116" fill="#c5cae9" font-size="10" text-anchor="middle">8 bits</text><rect x="280" y="68" width="84" height="82" rx="6" fill="#1a237e" opacity="0.71" stroke="#7986cb"/><text x="322" y="86" fill="#e8eaf6" font-size="11" text-anchor="middle">kilobyte (KB)</text><text x="322" y="102" fill="#c5cae9" font-size="10" text-anchor="middle">1 024 bytes</text><rect x="370" y="54" width="84" height="96" rx="6" fill="#1a237e" opacity="0.78" stroke="#7986cb"/><text x="412" y="72" fill="#e8eaf6" font-size="11" text-anchor="middle">megabyte (MB)</text><text x="412" y="88" fill="#c5cae9" font-size="10" text-anchor="middle">1 024 KB</text><rect x="460" y="40" width="84" height="110" rx="6" fill="#1a237e" opacity="0.8500000000000001" stroke="#7986cb"/><text x="502" y="58" fill="#e8eaf6" font-size="11" text-anchor="middle">gigabyte (GB)</text><text x="502" y="74" fill="#c5cae9" font-size="10" text-anchor="middle">1 024 MB</text><rect x="550" y="26" width="84" height="124" rx="6" fill="#1a237e" opacity="0.92" stroke="#7986cb"/><text x="592" y="44" fill="#e8eaf6" font-size="11" text-anchor="middle">terabyte (TB)</text><text x="592" y="60" fill="#c5cae9" font-size="10" text-anchor="middle">1 024 GB</text><text x="10" y="166" fill="#c5cae9" font-size="11">Each step up (from KB) is 1 024 times larger — 2¹⁰. Storage makers often use 1 000 instead.</text>
    </svg>
    </div>
    <p>Just as decimal numbers can have digits after the point (tenths, hundredths), binary numbers can have digits after the <strong>binary point</strong>, worth ½, ¼, ⅛ and so on.</p>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Before the point: 1, 2, 4, 8… After the point: ½, ¼, ⅛, 1/16…</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Operating systems usually measure memory and file sizes in powers of 2 (1 KB = 1 024 bytes), while storage manufacturers often use powers of 10 (1 KB = 1 000 bytes). That is why a “500 GB” disk shows less space in the computer. The international standard names for the binary units are kibibyte (KiB), mebibyte (MiB) and gibibyte (GiB). Some decimal fractions, such as 0.1, repeat forever in binary, so computers store only an approximation — a source of tiny rounding errors in calculations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Bit</strong>
    </p>
    <p style="margin:6px 0;">A binary digit: 0 or 1.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> b</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Nibble</strong>
    </p>
    <p style="margin:6px 0;">4 bits.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1011</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Byte</strong>
    </p>
    <p style="margin:6px 0;">8 bits.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> B</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>01000001</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Word</strong>
    </p>
    <p style="margin:6px 0;">The number of bits a processor handles as one unit.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>64-bit word</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Binary point</strong>
    </p>
    <p style="margin:6px 0;">The point separating whole and fractional parts of a binary number.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> .</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>101.11</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">MSB / LSB</strong>
    </p>
    <p style="margin:6px 0;">Most / least significant bit.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>In 1000, the MSB is 1</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">1. Converting Data Units</h3>
    <div style="background:#0b1a2e;border:1px solid #3949ab;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c5cae9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Data units</p>
    <div style="color:#e8eaf6;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">1 byte = 8 bits; 1 KB = 1 024 B; 1 MB = 1 024 KB; 1 GB = 1 024 MB; 1 TB = 1 024 GB</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Multiply by 1 024 to go to a smaller unit; divide by 1 024 to go to a larger unit.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> bits, bytes, KB, MB, GB, TB</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> File sizes, memory and data bundles.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> 8 bits per byte; 1 024 for each step above.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 1: Converting units</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A video is 1.5 GB. Express its size in MB and in bytes.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Multiply by 1 024 at each step down.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: GB to MB</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1.5 × 1 024 = 1 536 MB.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: MB to KB</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 536 × 1 024 = 1 572 864 KB.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: KB to bytes</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 572 864 × 1 024 = 1 610 612 736 bytes.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 1 536 MB, or 1 610 612 736 bytes.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 2: Download time</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 24 MB file is downloaded at 8 megabits per second (Mbps). How long does it take? (Use 1 MB = 8 megabits.)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert MB to megabits, then divide by the speed.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Megabits</strong>
    </p>
    <div style="margin:6px 0 0 34px;">24 × 8 = 192 megabits.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">192 ÷ 8 = 24 s.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 24 seconds</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Mixing up <strong>b</strong> (bits) and <strong>B</strong> (bytes). Internet speeds are given in bits per second (Mbps); file sizes in bytes (MB).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">2. Binary Fractions: Binary to Decimal</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Place</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2²</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2¹</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2⁰</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">•</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2⁻¹</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2⁻²</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2⁻³</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2⁻⁴</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Value</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">•</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.125</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.0625</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 3: Binary fraction to decimal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 101.11₂ to decimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Add the place values of each 1.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Whole part</strong>
    </p>
    <div style="margin:6px 0 0 34px;">101₂ = 4 + 1 = 5.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Fraction part</strong>
    </p>
    <div style="margin:6px 0 0 34px;">.11₂ = 0.5 + 0.25 = 0.75.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Total</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5 + 0.75 = 5.75.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 101.11₂ = 5.75₁₀</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">3. Decimal Fractions to Binary</h3>
    <p>Convert the whole part by repeated division by 2. Convert the fractional part by <strong>repeated multiplication by 2</strong>: each time, the whole number part (0 or 1) is the next binary digit; continue with the fractional part until it becomes 0 or you have enough digits.</p>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 4: Decimal fraction to binary</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 0.625₁₀ to binary.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Multiply the fraction by 2 repeatedly.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: 0.625 × 2 = 1.25</strong>
    </p>
    <div style="margin:6px 0 0 34px;">digit 1, keep 0.25</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: 0.25 × 2 = 0.5</strong>
    </p>
    <div style="margin:6px 0 0 34px;">digit 0, keep 0.5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: 0.5 × 2 = 1.0</strong>
    </p>
    <div style="margin:6px 0 0 34px;">digit 1, stop (fraction is 0)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Read digits top to bottom</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.101</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 0.625₁₀ = 0.101₂</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 5: A fraction that repeats</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 0.1₁₀ to binary (to 8 places).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Keep multiplying by 2.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Digits obtained</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.1→0, 0.2→0, 0.4→0, 0.8→1 (0.6), 1.2→1 (0.2), 0.4→0, 0.8→1 (0.6), 1.2→1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Pattern</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.00011001… — the block 0011 repeats forever.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 0.1₁₀ ≈ 0.00011001₂ — it cannot be stored exactly.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8eaf6;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> How many bits are in 3 KB?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">3 × 1 024 × 8 = 24 576 bits.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Convert 11.01₂ to decimal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">3.25</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Convert 0.375₁₀ to binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">0.011₂</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Converting units</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Converting fractions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using a programmer calculator</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking answers</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Checking File Sizes and Conversions on a Computer</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To compare file sizes in different units and check binary fraction conversions.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">File manager (file properties)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator in Programmer mode</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet software</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">A folder of sample files (text, image, audio, video) provided by the teacher</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do not delete or move files outside your practice folder.</li>
    <li>Sit correctly and rest your eyes regularly.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Open the properties of each sample file and record its size as shown, and the exact size in bytes.</li>
    <li>Convert each size in bytes to KB and MB by dividing by 1 024 and compare with what the computer shows.</li>
    <li>In a spreadsheet, enter a formula to convert bytes to MB: =A2/1024/1024.</li>
    <li>Convert 0.5, 0.25, 0.625 and 0.1 to binary by hand, then check the whole-number parts with the calculator.</li>
    <li>Record any differences and explain them.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">File</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Size shown</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Exact bytes</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Your KB</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Your MB</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Text</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Audio</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Video</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why might your MB value differ slightly from the one shown?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Rounding, or the system using 1 000 instead of 1 024.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which file type was largest per second of content?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Usually video, because it stores many images per second plus sound.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> File sizes are stored in bytes and displayed in larger units using powers of 2; binary fractions follow place values of ½, ¼, ⅛…</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Operating systems divide by 1 024 at each step, which explains the displayed values.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Dividing by 1 000 instead of 1 024.</li>
    <li>Confusing bits and bytes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Understanding data units helps you choose data bundles and storage devices wisely.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Calculate the percentage difference between 1 GB as 1 000 000 000 bytes and as 1 073 741 824 bytes. (About 7.4%.) Explain why a “64 GB” flash disk shows about 59.6 GB available.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #7986cb;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Computer Studies in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Choosing a phone with enough storage or a suitable data bundle needs data-unit knowledge.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Storing fewer, smaller files saves energy in data centres.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Banks avoid binary fraction errors by storing money in whole cents or using decimal arithmetic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How many bytes are in 2 MB?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Two steps of 1 024.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">2 × 1 024 × 1 024 = 2 097 152 bytes.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Convert 0.75₁₀ to binary.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 0.5 + 0.25.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">0.11₂</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Convert 110.101₂ to decimal.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 4 + 2 + 0.5 + 0.125.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">6.625</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a table of powers of 2 from 2⁻⁴ to 2¹⁰.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each write three binary fractions; swap and convert them to decimal.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Compare the cost per GB of three data bundles from Kenyan mobile networks.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a spreadsheet to build a unit converter from bytes to KB, MB and GB.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define (a) nibble (b) word.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">(a) 4 bits. (b) The number of bits a processor handles as one unit.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Convert 12.375₁₀ to binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1100.011₂</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A 4.5 MB photo — how many bits?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">4.5 × 1 024 × 1 024 × 8 = 37 748 736 bits.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why does a file show “Size” and “Size on disk”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Disks allocate space in fixed blocks, so the space used can be larger than the data.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why can 0.5 be stored exactly in binary but 0.1 cannot?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">0.5 = 2⁻¹ is a power of 2; 0.1 is not a sum of a finite number of powers of 2, so it repeats.</div>
    </details>
    </div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Data is stored as bits; 4 bits = nibble, 8 bits = byte; larger units step up by 1 024. The word size is the number of bits a processor handles at once. Binary fractions have place values ½, ¼, ⅛…; convert decimal fractions to binary by repeated multiplication by 2. Some decimal fractions repeat in binary and are stored only approximately.</p>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Data units.</li>
    <li>Word size.</li>
    <li>Binary to decimal fractions.</li>
    <li>Decimal to binary fractions.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>b = bit, B = byte.</li>
    <li>×2 for fractions; ÷2 for whole numbers.</li>
    <li>0.1 repeats in binary.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using 1 000 when 1 024 is meant.</li>
    <li>Reading fraction digits in the wrong order.</li>
    <li>Forgetting the binary point.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Memorise powers of 2.</li>
    <li>Check by converting back.</li>
    <li>Write units at every step.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #3949ab;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show each multiplication step in fraction conversions.</li>
    <li>State units in every answer.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Converting and checking.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using file properties and spreadsheets.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Learning to learn</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-checking methods.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy: data bundles</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every file size and data bundle you see is measured in binary units.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Convert 9.8125₁₀ to binary and 1011.0101₂ to decimal.</li>
    <li>Explain in 80 words why storage devices show less space than advertised.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which conversion do I find hardest?</li>
    <li>How can I avoid unit mistakes?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Bit</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Binary digit.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Byte</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 bits.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Word</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">CPU unit of bits.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Binary point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separates whole and fraction.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">KiB</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kibibyte, 1 024 bytes.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can convert data units.</p>
    <p style="margin:6px 0;">☐ I can explain word size.</p>
    <p style="margin:6px 0;">☐ I can convert binary fractions both ways.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A nibble contains:',
            options: ['4 bits', '8 bits', '2 bits', '16 bits'],
            correct: 0,
            explanation: 'The answer is 4 bits. Half a byte is a nibble.'
        },
        {
            question: '1 KB in binary units equals:',
            options: ['1 024 bytes', '1 000 bits', '100 bytes', '8 bytes'],
            correct: 0,
            explanation: 'The answer is 1 024 bytes. Binary units step by 2¹⁰.'
        },
        {
            question: '2 GB equals:',
            options: ['2 000 KB', '2 048 MB', '1 024 MB', '2 MB'],
            correct: 1,
            explanation: 'The answer is 2 048 MB. 2 × 1 024 = 2 048.'
        },
        {
            question: 'Internet speeds such as 10 Mbps are measured in:',
            options: ['Bytes per hour', 'Kilograms', 'Pixels', 'Bits per second'],
            correct: 3,
            explanation: 'The answer is Bits per second. Small b means bits.'
        },
        {
            question: 'The binary place value just after the point is:',
            options: ['0.1', '2', '0.5', '0.25'],
            correct: 2,
            explanation: 'The answer is 0.5. 2⁻¹ = 0.5.'
        },
        {
            question: '101.1₂ in decimal is:',
            options: ['5.1', '5.5', '10.1', '6.5'],
            correct: 1,
            explanation: 'The answer is 5.5. 4 + 1 + 0.5 = 5.5.'
        },
        {
            question: '0.25₁₀ in binary is:',
            options: ['0.1₂', '0.01₂', '0.25₂', '0.11₂'],
            correct: 1,
            explanation: 'The answer is 0.01₂. 0.25 = 2⁻².'
        },
        {
            question: 'To convert a decimal fraction to binary you repeatedly:',
            options: ['Divide by 2', 'Add 2', 'Subtract 1', 'Multiply by 2'],
            correct: 3,
            explanation: 'The whole parts give the binary digits.'
        },
        {
            question: 'Which decimal fraction cannot be stored exactly in binary?',
            options: ['0.5', '0.25', '0.1', '0.125'],
            correct: 2,
            explanation: 'The answer is 0.1. 0.1 repeats in binary.'
        },
        {
            question: 'A 64-bit processor has a word size of:',
            options: ['8 bits', '64 bytes', '32 bits', '64 bits'],
            correct: 3,
            explanation: 'The answer is 64 bits. Word size is in bits.'
        }
    ]
},
{
    name: '1.1.2 Data Representation: Signed Numbers, BCD and Floating Point',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Signed Numbers, BCD and Floating Point</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how computers store negative numbers using sign-and-magnitude, ones’ complement and two’s complement, the range of values each allows, how Binary Coded Decimal (BCD) stores decimal digits, and the idea of floating-point representation for very large and very small numbers.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Temperatures below zero, bank overdrafts, game scores and GPS coordinates all need negative numbers. Calculators and digital clocks use BCD, and scientific values use floating point. Two’s complement is the method almost every processor uses.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Temperature sensors</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏦 Bank balances</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game coordinates</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⏰ Digital clocks (BCD)</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛰️ Scientific data</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📍 GPS</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8eaf6;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain data units and convert between them.</li>
    <li>Convert binary fractions to and from decimal.</li>
    <li>Represent signed integers using sign-and-magnitude, ones’ complement and two’s complement.</li>
    <li>Represent numbers in BCD and explain floating point.</li>
    <li>Explain how text, images and sound are represented and calculate storage requirements.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8eaf6;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Represent integers in sign-and-magnitude.</li>
    <li>Represent integers in ones’ and two’s complement.</li>
    <li>State the range of each method for n bits.</li>
    <li>Represent numbers in BCD.</li>
    <li>Explain mantissa and exponent in floating point.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">❓ Key inquiry question:</strong> How are numbers, text, images and sound stored in a computer?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">🧰 What you already know:</strong> Lesson 1.1.1: data units and binary fractions.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Computers have no minus sign — only 0s and 1s. To store negative numbers, one bit must show the sign. In all three common methods, the <strong>most significant bit (MSB)</strong> indicates the sign: <strong>0 for positive, 1 for negative</strong>.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 360" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><circle cx="280" cy="180" r="120" fill="none" stroke="#475569" stroke-width="2"/><text x="280" y="39" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0000</text><text x="280" y="90" fill="#a5d6a7" font-size="13" text-anchor="middle">0</text><circle cx="280.0" cy="60.0" r="3" fill="#7986cb"/><text x="335.489097692938" y="50.03746778586341" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0001</text><text x="316.35492607468353" y="97.23144441142776" fill="#a5d6a7" font-size="13" text-anchor="middle">+1</text><circle cx="325.9" cy="69.1" r="3" fill="#7986cb"/><text x="382.5304832720494" y="81.46951672795062" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0010</text><text x="347.175144212722" y="117.824855787278" fill="#a5d6a7" font-size="13" text-anchor="middle">+2</text><circle cx="364.9" cy="95.1" r="3" fill="#7986cb"/><text x="413.96253221413656" y="128.510902307062" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0011</text><text x="367.7685555885722" y="148.64507392531647" fill="#a5d6a7" font-size="13" text-anchor="middle">+3</text><circle cx="390.9" cy="134.1" r="3" fill="#7986cb"/><text x="425" y="184" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0100</text><text x="375" y="185" fill="#a5d6a7" font-size="13" text-anchor="middle">+4</text><circle cx="400.0" cy="180.0" r="3" fill="#7986cb"/><text x="413.96253221413656" y="239.489097692938" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0101</text><text x="367.7685555885722" y="221.35492607468353" fill="#a5d6a7" font-size="13" text-anchor="middle">+5</text><circle cx="390.9" cy="225.9" r="3" fill="#7986cb"/><text x="382.5304832720494" y="286.53048327204937" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0110</text><text x="347.175144212722" y="252.175144212722" fill="#a5d6a7" font-size="13" text-anchor="middle">+6</text><circle cx="364.9" cy="264.9" r="3" fill="#7986cb"/><text x="335.489097692938" y="317.96253221413656" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">0111</text><text x="316.35492607468353" y="272.7685555885722" fill="#a5d6a7" font-size="13" text-anchor="middle">+7</text><circle cx="325.9" cy="290.9" r="3" fill="#7986cb"/><text x="280" y="329" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1000</text><text x="280" y="280" fill="#ffab91" font-size="13" text-anchor="middle">-8</text><circle cx="280.0" cy="300.0" r="3" fill="#7986cb"/><text x="224.510902307062" y="317.96253221413656" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1001</text><text x="243.64507392531647" y="272.7685555885722" fill="#ffab91" font-size="13" text-anchor="middle">-7</text><circle cx="234.1" cy="290.9" r="3" fill="#7986cb"/><text x="177.46951672795063" y="286.5304832720494" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1010</text><text x="212.824855787278" y="252.17514421272202" fill="#ffab91" font-size="13" text-anchor="middle">-6</text><circle cx="195.1" cy="264.9" r="3" fill="#7986cb"/><text x="146.03746778586344" y="239.4890976929381" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1011</text><text x="192.2314444114278" y="221.3549260746836" fill="#ffab91" font-size="13" text-anchor="middle">-5</text><circle cx="169.1" cy="225.9" r="3" fill="#7986cb"/><text x="135" y="184.00000000000003" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1100</text><text x="185" y="185" fill="#ffab91" font-size="13" text-anchor="middle">-4</text><circle cx="160.0" cy="180.0" r="3" fill="#7986cb"/><text x="146.03746778586344" y="128.51090230706194" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1101</text><text x="192.2314444114278" y="148.64507392531644" fill="#ffab91" font-size="13" text-anchor="middle">-3</text><circle cx="169.1" cy="134.1" r="3" fill="#7986cb"/><text x="177.46951672795058" y="81.46951672795062" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1110</text><text x="212.82485578727795" y="117.824855787278" fill="#ffab91" font-size="13" text-anchor="middle">-2</text><circle cx="195.1" cy="95.1" r="3" fill="#7986cb"/><text x="224.5109023070619" y="50.03746778586344" fill="#e8eaf6" font-size="12" text-anchor="middle" font-family="monospace">1111</text><text x="243.6450739253164" y="97.23144441142779" fill="#ffab91" font-size="13" text-anchor="middle">-1</text><circle cx="234.1" cy="69.1" r="3" fill="#7986cb"/><text x="280" y="172" fill="#e8eaf6" font-size="13" text-anchor="middle">4-bit two’s</text><text x="280" y="190" fill="#e8eaf6" font-size="13" text-anchor="middle">complement</text><text x="280" y="352" fill="#c5cae9" font-size="11" text-anchor="middle">MSB 0 → positive (green); MSB 1 → negative (orange). Range −8 to +7.</text>
    </svg>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Two’s complement of a negative number: write the positive number, flip every bit, then add 1.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Sign-and-magnitude and ones’ complement both have two zeros (+0 and −0), which complicates hardware. Two’s complement has only one zero and lets the same adder circuit add and subtract, which is why modern processors use it. Floating point stores numbers as a <strong>mantissa</strong> (the significant digits) and an <strong>exponent</strong> (the power of 2), like scientific notation; the IEEE 754 standard defines common 32-bit and 64-bit formats.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Signed number</strong>
    </p>
    <p style="margin:6px 0;">A number that can be positive or negative.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−45</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Sign-and-magnitude</strong>
    </p>
    <p style="margin:6px 0;">MSB is the sign; the other bits give the size.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> S&M</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−5 = 10000101</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Ones’ complement</strong>
    </p>
    <p style="margin:6px 0;">Negative found by inverting every bit.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−5 = 11111010</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Two’s complement</strong>
    </p>
    <p style="margin:6px 0;">Negative found by inverting every bit and adding 1.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−5 = 11111011</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">BCD</strong>
    </p>
    <p style="margin:6px 0;">Binary Coded Decimal: each decimal digit stored as 4 bits.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>59 = 0101 1001</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Mantissa</strong>
    </p>
    <p style="margin:6px 0;">The significant digits of a floating-point number.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1.101 in 1.101 × 2²</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Exponent</strong>
    </p>
    <p style="margin:6px 0;">The power of 2 in a floating-point number.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>2 in 1.101 × 2²</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">1. Three Ways to Store Negative Integers</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Method</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How to get −45 (8 bits)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Range (8 bits)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sign-and-magnitude</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Set MSB to 1; write 45 in the other 7 bits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10101101</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−127 to +127 (two zeros)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ones’ complement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write +45 (00101101) and invert every bit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11010010</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−127 to +127 (two zeros)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two’s complement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ones’ complement + 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11010011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−128 to +127 (one zero)</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #3949ab;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c5cae9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Range of n-bit two’s complement</p>
    <div style="color:#e8eaf6;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">−2ⁿ⁻¹ to 2ⁿ⁻¹ − 1</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Smallest and largest values that fit.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Integers</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Choosing storage size; detecting overflow.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> 8 bits: −128 to 127; 16 bits: −32 768 to 32 767.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 1: Two’s complement of −20</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write −20 in 8-bit two’s complement.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Write +20, invert, add 1.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: +20</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00010100</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Invert</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11101011</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Add 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11101100</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> −20 = 11101100</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 2: Reading a two’s complement number</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> What decimal value is 11110110 in 8-bit two’s complement?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> MSB 1 → negative. Invert and add 1 to find the size.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: MSB</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1, so the number is negative.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Invert</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00001001</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Add 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00001010 = 10</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> −10. (Shortcut: MSB is worth −128, so −128 + 64 + 32 + 16 + 4 + 2 = −10.)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">2. Binary Coded Decimal (BCD)</h3>
    <p>In BCD each decimal digit is stored separately as a 4-bit pattern from 0000 (0) to 1001 (9). The patterns 1010–1111 are not used. BCD makes it easy to show digits on displays such as clocks, calculators and petrol-pump meters, but it uses more bits than pure binary.</p>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 3: Pure binary versus BCD</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Represent 59 in pure binary and in BCD. Which uses fewer bits?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert the whole number; then code each digit.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Pure binary</strong>
    </p>
    <div style="margin:6px 0 0 34px;">59 = 32 + 16 + 8 + 2 + 1 = 111011 (6 bits).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: BCD</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5 = 0101, 9 = 1001 → 0101 1001 (8 bits).</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> Binary 111011 (6 bits); BCD 0101 1001 (8 bits). Pure binary is more compact.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">3. Floating-Point Representation</h3>
    <p>Very large and very small numbers are stored like scientific notation. In decimal, 6 500 000 = 6.5 × 10⁶. In binary, a number is <strong>normalised</strong> so there is one significant digit before the point, then stored as a <strong>sign</strong>, a <strong>mantissa</strong> and an <strong>exponent</strong>.</p>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 4: Normalising a binary number</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write 6.5₁₀ in normalised binary form.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert, then move the point until one 1 is before it.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Convert</strong>
    </p>
    <div style="margin:6px 0 0 34px;">6.5 = 110.1₂</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Move the point 2 places left</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1.101 × 2²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Parts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Sign 0 (positive); mantissa 1.101; exponent 2</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 6.5 = 1.101₂ × 2²</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">ℹ️ Note</p>
    <div>More mantissa bits give more <strong>precision</strong>; more exponent bits give a wider <strong>range</strong>. A 32-bit IEEE 754 float uses 1 sign bit, 8 exponent bits and 23 mantissa bits.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8eaf6;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Write −7 in 8-bit sign-and-magnitude.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">10000111</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Write −7 in 8-bit two’s complement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11111001</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Write 83 in BCD.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1000 0011</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Representing signed numbers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting bit patterns</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using spreadsheets</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing methods</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Exploring Signed Numbers in a Programmer Calculator</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To check sign-and-magnitude, ones’ complement and two’s complement representations using software.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator in Programmer mode (set to BYTE or 8-bit)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet software</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet of numbers: +45, −45, −20, −1, −128, +127</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only approved software.</li>
    <li>Save your work in your own folder.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Work out each number in 8-bit sign-and-magnitude, ones’ complement and two’s complement by hand.</li>
    <li>Set the calculator to BYTE size and decimal mode. Type each negative number and switch to binary to read its two’s complement pattern.</li>
    <li>Compare with your hand answers.</li>
    <li>Try typing 128 and −129 in BYTE mode and note what happens.</li>
    <li>Record your results and explain any differences.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Decimal</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sign-and-magnitude</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Ones’ complement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Two’s complement (hand)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculator shows</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−128</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why can’t −128 be shown in 8-bit sign-and-magnitude?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Its range is only −127 to +127, because one bit is used for the sign.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What happened when you typed 128 in BYTE mode?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">It wrapped around to −128 (overflow), because +127 is the largest 8-bit signed value.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The calculator uses two’s complement, confirming it is the standard method in computers.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Two’s complement gives one zero and a range from −128 to +127 in 8 bits.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to add 1 after inverting.</li>
    <li>Setting the calculator to a larger word size.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Programmers choose data types (such as 8-bit or 32-bit integers) based on these ranges.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Make a table of the ranges of 4-, 8-, 16- and 32-bit two’s complement integers using −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1. Explain which size you would choose to store (a) a learner’s age (b) a county’s population (c) a temperature reading.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #7986cb;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Computer Studies in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Weather stations store sub-zero temperatures using signed integers.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Efficient number formats reduce the storage and energy used by sensors.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Programmers and embedded-systems engineers choose number formats for speed and accuracy.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What does an MSB of 1 mean in two’s complement?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Sign bit.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">The number is negative.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> How many zeros does ones’ complement have?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 00000000 and 11111111.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Two (+0 and −0).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Range of 4-bit two’s complement?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use −2³ to 2³ − 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">−8 to +7.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write −1 to −8 in 4-bit two’s complement.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Give your partner a bit pattern; they decide its value in all three methods.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a poster comparing the three signed-number methods.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find out what the IEEE 754 standard is used for and list its single- and double-precision sizes.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Represent −36 in 8-bit sign-and-magnitude, ones’ complement and two’s complement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">10100100; 11011011; 11011100.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give two advantages of two’s complement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Only one zero; the same circuit can add and subtract (and wider range).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Represent 407 in BCD.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">0100 0000 0111</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why did typing 128 in BYTE mode give −128?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Overflow — 128 is outside the 8-bit range, so the pattern 10000000 is read as −128.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why do calculators and digital clocks use BCD?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Each digit maps directly to a display digit, avoiding conversion.</div>
    </details>
    </div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Signed numbers use the MSB as the sign. Sign-and-magnitude and ones’ complement have two zeros and range −(2ⁿ⁻¹ − 1) to 2ⁿ⁻¹ − 1; two’s complement (invert and add 1) has one zero and ranges −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1. BCD codes each decimal digit in 4 bits. Floating point stores a sign, mantissa and exponent for very large and small numbers.</p>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Three signed methods.</li>
    <li>Ranges.</li>
    <li>BCD.</li>
    <li>Floating point.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Two’s complement: invert, add 1.</li>
    <li>8-bit range: −128 to 127.</li>
    <li>BCD uses 0000–1001 only.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to add 1.</li>
    <li>Inverting the sign bit in sign-and-magnitude.</li>
    <li>Using 1010 in BCD.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the −128 shortcut to read two’s complement.</li>
    <li>Check with the calculator.</li>
    <li>Practise with small 4-bit numbers first.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #3949ab;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the number of bits used.</li>
    <li>Show inverting and adding steps.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing representations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using the programmer calculator.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing methods.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security awareness</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every negative number in a computer — from M-Pesa reversals to cold temperatures — uses these methods.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Represent −50, −100 and −127 in 8-bit two’s complement.</li>
    <li>Write 2 026 in BCD.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which method do I understand best?</li>
    <li>Why do computers prefer two’s complement?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Two’s complement</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Invert + 1.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ones’ complement</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Invert.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">BCD</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 bits per digit.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mantissa</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Significant digits.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Exponent</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Power of 2.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can use sign-and-magnitude.</p>
    <p style="margin:6px 0;">☐ I can use ones’ and two’s complement.</p>
    <p style="margin:6px 0;">☐ I can state ranges.</p>
    <p style="margin:6px 0;">☐ I can use BCD.</p>
    <p style="margin:6px 0;">☐ I can explain floating point.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'In signed binary, an MSB of 1 means:',
            options: ['Negative', 'Positive', 'Zero', 'Overflow'],
            correct: 0,
            explanation: 'The sign bit 1 shows a negative number.'
        },
        {
            question: '−5 in 8-bit sign-and-magnitude is:',
            options: ['11111011', '11111010', '00000101', '10000101'],
            correct: 3,
            explanation: 'Sign 1 followed by 5 in seven bits.'
        },
        {
            question: '−5 in 8-bit ones’ complement is:',
            options: ['11111010', '11111011', '10000101', '00000101'],
            correct: 0,
            explanation: 'The answer is 11111010. Invert every bit of 00000101.'
        },
        {
            question: '−5 in 8-bit two’s complement is:',
            options: ['11111010', '10000101', '10000100', '11111011'],
            correct: 3,
            explanation: 'The answer is 11111011. Ones’ complement plus 1.'
        },
        {
            question: 'Which method has only one zero?',
            options: ['Sign-and-magnitude', 'Ones’ complement', 'Two’s complement', 'BCD'],
            correct: 2,
            explanation: 'The answer is Two’s complement. This simplifies hardware.'
        },
        {
            question: 'The range of 8-bit two’s complement is:',
            options: ['−127 to 127', '−128 to 127', '0 to 255', '−255 to 255'],
            correct: 1,
            explanation: 'The answer is −128 to 127. −2⁷ to 2⁷ − 1.'
        },
        {
            question: '11111111 in two’s complement equals:',
            options: ['−127', '255', '−1', '0'],
            correct: 2,
            explanation: 'The answer is −1. −128 + 127 = −1.'
        },
        {
            question: '47 in BCD is:',
            options: ['00101111', '0100 0111', '0100 0100', '1000 0111'],
            correct: 1,
            explanation: 'The answer is 0100 0111. 4 = 0100, 7 = 0111.'
        },
        {
            question: 'In 1.101 × 2², the exponent is:',
            options: ['1.101', '101', '2', '4'],
            correct: 2,
            explanation: 'The power of 2 is the exponent.'
        },
        {
            question: 'Floating point is mainly used to store:',
            options: ['Only whole numbers', 'Only text', 'Only images', 'Very large and very small real numbers'],
            correct: 3,
            explanation: 'It is like scientific notation.'
        }
    ]
},
{
    name: '1.1.3 Data Representation: Representing Text, Images and Sound',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Representing Text, Images and Sound</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how characters are coded with ASCII and Unicode, how images are made of pixels with a resolution and colour depth, how sound is sampled with a sample rate and bit depth, how to calculate storage sizes, and why compression is used.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every message, photo and voice note you send is converted to bits. Knowing how lets you estimate file sizes, understand why compression reduces quality, and choose settings wisely.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💬 SMS and WhatsApp</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📸 Phone cameras</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎙️ Voice notes</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎵 Music streaming</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📺 Video calls</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌐 Multilingual websites</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8eaf6;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain data units and convert between them.</li>
    <li>Convert binary fractions to and from decimal.</li>
    <li>Represent signed integers using sign-and-magnitude, ones’ complement and two’s complement.</li>
    <li>Represent numbers in BCD and explain floating point.</li>
    <li>Explain how text, images and sound are represented and calculate storage requirements.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8eaf6;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain character sets: ASCII and Unicode.</li>
    <li>Explain pixels, resolution and colour depth.</li>
    <li>Calculate image file sizes.</li>
    <li>Explain sampling and calculate sound file sizes.</li>
    <li>Distinguish lossy and lossless compression.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">❓ Key inquiry question:</strong> How are numbers, text, images and sound stored in a computer?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">🧰 What you already know:</strong> Lessons 1.1.1–1.1.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Text:</strong> each character is given a number code from a <strong>character set</strong>, and the code is stored in binary. <strong>Images:</strong> a picture is a grid of tiny dots called <strong>pixels</strong>, each storing a colour as bits. <strong>Sound:</strong> the sound wave is measured (sampled) many times per second, and each measurement is stored as a binary number.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 600 230" width="600" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="20" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="44" y="20" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="68" y="20" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="92" y="20" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="116" y="20" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="140" y="20" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="164" y="20" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="188" y="20" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="20" y="44" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="44" y="44" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="68" y="44" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="92" y="44" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="116" y="44" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="140" y="44" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="164" y="44" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="188" y="44" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="20" y="68" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="44" y="68" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="68" y="68" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="92" y="68" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="116" y="68" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="140" y="68" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="164" y="68" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="188" y="68" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="20" y="92" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="44" y="92" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="68" y="92" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="92" y="92" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="116" y="92" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="140" y="92" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="164" y="92" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="188" y="92" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="20" y="116" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="44" y="116" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="68" y="116" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="92" y="116" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="116" y="116" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="140" y="116" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="164" y="116" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="188" y="116" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="20" y="140" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="44" y="140" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="68" y="140" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="92" y="140" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="116" y="140" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="140" y="140" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="164" y="140" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="188" y="140" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="20" y="164" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="44" y="164" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="68" y="164" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="92" y="164" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="116" y="164" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="140" y="164" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="164" y="164" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="188" y="164" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="20" y="188" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="44" y="188" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="68" y="188" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="92" y="188" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="116" y="188" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="140" y="188" width="22" height="22" fill="#fde68a" stroke="#475569"/><rect x="164" y="188" width="22" height="22" fill="#12163a" stroke="#475569"/><rect x="188" y="188" width="22" height="22" fill="#12163a" stroke="#475569"/><text x="240" y="37" fill="#e8eaf6" font-size="14" font-family="monospace">00111100</text><text x="240" y="61" fill="#e8eaf6" font-size="14" font-family="monospace">01000010</text><text x="240" y="85" fill="#e8eaf6" font-size="14" font-family="monospace">10100101</text><text x="240" y="109" fill="#e8eaf6" font-size="14" font-family="monospace">10000001</text><text x="240" y="133" fill="#e8eaf6" font-size="14" font-family="monospace">10100101</text><text x="240" y="157" fill="#e8eaf6" font-size="14" font-family="monospace">10011001</text><text x="240" y="181" fill="#e8eaf6" font-size="14" font-family="monospace">01000010</text><text x="240" y="205" fill="#e8eaf6" font-size="14" font-family="monospace">00111100</text><text x="340" y="50" fill="#e8eaf6" font-size="12">8 × 8 pixels, 1 bit per pixel</text><text x="340" y="70" fill="#e8eaf6" font-size="12">(1 = yellow, 0 = dark)</text><text x="340" y="110" fill="#e8eaf6" font-size="12">Size = 8 × 8 × 1 = 64 bits</text><text x="340" y="130" fill="#e8eaf6" font-size="12">= 8 bytes</text><text x="340" y="170" fill="#e8eaf6" font-size="12">With 24-bit colour:</text><text x="340" y="190" fill="#e8eaf6" font-size="12">64 × 24 = 1 536 bits = 192 bytes</text>
    </svg>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Text = codes for characters. Images = colours of pixels. Sound = samples of the wave.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 Scientific Background</h3>
    <p>ASCII uses 7 bits (128 characters) — enough for English letters, digits and symbols — and extended ASCII uses 8 bits (256). <strong>Unicode</strong> aims to include every writing system and symbol, including emoji; its common encoding UTF-8 uses 1 to 4 bytes per character and is compatible with ASCII for the first 128 codes. Compression reduces file size: <strong>lossless</strong> compression (ZIP, PNG) rebuilds the original exactly; <strong>lossy</strong> compression (JPEG, MP3) removes detail people are unlikely to notice.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Character set</strong>
    </p>
    <p style="margin:6px 0;">The list of characters a computer recognises and their codes.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>ASCII, Unicode.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">ASCII</strong>
    </p>
    <p style="margin:6px 0;">American Standard Code for Information Interchange (7-bit).</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A = 65</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Unicode</strong>
    </p>
    <p style="margin:6px 0;">Character set covering most writing systems and emoji.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> UTF-8</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>😀</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Pixel</strong>
    </p>
    <p style="margin:6px 0;">The smallest element of a digital image.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> picture element</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>One dot on screen</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Colour depth</strong>
    </p>
    <p style="margin:6px 0;">Number of bits used for each pixel’s colour.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> bits per pixel</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>24-bit colour</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Sample rate</strong>
    </p>
    <p style="margin:6px 0;">Number of sound samples taken per second.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> Hz</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>44 100 Hz</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Bit depth (sound)</strong>
    </p>
    <p style="margin:6px 0;">Number of bits per sample.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>16-bit audio</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">1. Representing Text</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Character</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">ASCII (decimal)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Binary (7-bit)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Space</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">32</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0100000</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">48</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0110000</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">65</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1000001</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">66</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1000010</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">97</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1100001</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 1: Storing a word</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> How is the word “Hi” stored in ASCII? How many bytes does it use (one byte per character)?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Find each code and convert to binary.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: H</strong>
    </p>
    <div style="margin:6px 0 0 34px;">ASCII 72 = 01001000</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: i</strong>
    </p>
    <div style="margin:6px 0 0 34px;">ASCII 105 = 01101001</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Size</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 characters × 1 byte = 2 bytes (16 bits).</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 01001000 01101001 — 2 bytes.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">ℹ️ Note</p>
    <div>Upper-case and lower-case letters differ by exactly 32 in ASCII (A = 65, a = 97), which is why changing case flips one bit.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">2. Representing Images</h3>
    <div style="background:#0b1a2e;border:1px solid #3949ab;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c5cae9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Image file size (uncompressed)</p>
    <div style="color:#e8eaf6;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Size (bits) = width (pixels) × height (pixels) × colour depth (bits)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Total bits for all pixels.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Divide by 8 for bytes</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Estimating image storage.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Number of colours = 2^colour depth.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 2: Image size</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> An image is 800 × 600 pixels with 24-bit colour. Find its uncompressed size in bytes and MB.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Multiply, then convert.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Pixels</strong>
    </p>
    <div style="margin:6px 0 0 34px;">800 × 600 = 480 000.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Bits</strong>
    </p>
    <div style="margin:6px 0 0 34px;">480 000 × 24 = 11 520 000 bits.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Bytes</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11 520 000 ÷ 8 = 1 440 000 bytes.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: MB</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 440 000 ÷ 1 048 576 ≈ 1.37 MB.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> About 1.37 MB (1 440 000 bytes).</div>
    </div>
    <p><strong>Resolution</strong> is the number of pixels (e.g. 1920 × 1080); higher resolution shows more detail. <strong>Colour depth</strong> sets the number of colours: 1 bit = 2 colours, 8 bits = 256 colours, 24 bits ≈ 16.7 million colours.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">3. Representing Sound and Compression</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 600 220" width="600" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="40" y1="110" x2="580" y2="110" stroke="#475569"/><line x1="40" y1="20" x2="40" y2="200" stroke="#475569"/><path d="M40 110 L 40 110.0 L 45 101.3 L 50 92.7 L 55 84.4 L 60 76.4 L 65 69.0 L 70 62.3 L 75 56.3 L 80 51.1 L 85 46.8 L 90 43.6 L 95 41.3 L 100 40.2 L 105 40.1 L 110 41.1 L 115 43.2 L 120 46.3 L 125 50.5 L 130 55.5 L 135 61.4 L 140 68.1 L 145 75.4 L 150 83.3 L 155 91.6 L 160 100.1 L 165 108.8 L 170 117.6 L 175 126.2 L 180 134.6 L 185 142.5 L 190 150.0 L 195 156.9 L 200 163.0 L 205 168.3 L 210 172.6 L 215 176.1 L 220 178.4 L 225 179.7 L 230 180.0 L 235 179.1 L 240 177.1 L 245 174.1 L 250 170.1 L 255 165.2 L 260 159.4 L 265 152.8 L 270 145.6 L 275 137.8 L 280 129.6 L 285 121.0 L 290 112.3 L 295 103.6 L 300 94.9 L 305 86.5 L 310 78.5 L 315 70.9 L 320 64.0 L 325 57.8 L 330 52.4 L 335 47.9 L 340 44.3 L 345 41.8 L 350 40.4 L 355 40.0 L 360 40.7 L 365 42.6 L 370 45.4 L 375 49.3 L 380 54.1 L 385 59.8 L 390 66.3 L 395 73.4 L 400 81.2 L 405 89.3 L 410 97.8 L 415 106.5 L 420 115.3 L 425 123.9 L 430 132.4 L 435 140.5 L 440 148.1 L 445 155.1 L 450 161.4 L 455 166.9 L 460 171.6 L 465 175.2 L 470 177.9 L 475 179.5 L 480 180.0 L 485 179.4 L 490 177.7 L 495 175.0 L 500 171.3 L 505 166.6 L 510 161.0 L 515 154.6 L 520 147.6 L 525 139.9 L 530 131.8 L 535 123.3 L 540 114.6 L 545 105.9 L 550 97.2 L 555 88.7 L 560 80.6 L 565 72.9 L 570 65.8 L 575 59.4 L 580 53.7" fill="none" stroke="#7986cb" stroke-width="2"/><line x1="40" y1="110" x2="40" y2="110.0" stroke="#fde68a" stroke-width="2"/><circle cx="40" cy="110.0" r="4" fill="#fde68a"/><line x1="70" y1="110" x2="70" y2="70.0" stroke="#fde68a" stroke-width="2"/><circle cx="70" cy="70.0" r="4" fill="#fde68a"/><line x1="100" y1="110" x2="100" y2="50.0" stroke="#fde68a" stroke-width="2"/><circle cx="100" cy="50.0" r="4" fill="#fde68a"/><line x1="130" y1="110" x2="130" y2="50.0" stroke="#fde68a" stroke-width="2"/><circle cx="130" cy="50.0" r="4" fill="#fde68a"/><line x1="160" y1="110" x2="160" y2="110.0" stroke="#fde68a" stroke-width="2"/><circle cx="160" cy="110.0" r="4" fill="#fde68a"/><line x1="190" y1="110" x2="190" y2="150.0" stroke="#fde68a" stroke-width="2"/><circle cx="190" cy="150.0" r="4" fill="#fde68a"/><line x1="220" y1="110" x2="220" y2="170.0" stroke="#fde68a" stroke-width="2"/><circle cx="220" cy="170.0" r="4" fill="#fde68a"/><line x1="250" y1="110" x2="250" y2="170.0" stroke="#fde68a" stroke-width="2"/><circle cx="250" cy="170.0" r="4" fill="#fde68a"/><line x1="280" y1="110" x2="280" y2="130.0" stroke="#fde68a" stroke-width="2"/><circle cx="280" cy="130.0" r="4" fill="#fde68a"/><line x1="310" y1="110" x2="310" y2="70.0" stroke="#fde68a" stroke-width="2"/><circle cx="310" cy="70.0" r="4" fill="#fde68a"/><line x1="340" y1="110" x2="340" y2="50.0" stroke="#fde68a" stroke-width="2"/><circle cx="340" cy="50.0" r="4" fill="#fde68a"/><line x1="370" y1="110" x2="370" y2="50.0" stroke="#fde68a" stroke-width="2"/><circle cx="370" cy="50.0" r="4" fill="#fde68a"/><line x1="400" y1="110" x2="400" y2="90.0" stroke="#fde68a" stroke-width="2"/><circle cx="400" cy="90.0" r="4" fill="#fde68a"/><line x1="430" y1="110" x2="430" y2="130.0" stroke="#fde68a" stroke-width="2"/><circle cx="430" cy="130.0" r="4" fill="#fde68a"/><line x1="460" y1="110" x2="460" y2="170.0" stroke="#fde68a" stroke-width="2"/><circle cx="460" cy="170.0" r="4" fill="#fde68a"/><line x1="490" y1="110" x2="490" y2="170.0" stroke="#fde68a" stroke-width="2"/><circle cx="490" cy="170.0" r="4" fill="#fde68a"/><line x1="520" y1="110" x2="520" y2="150.0" stroke="#fde68a" stroke-width="2"/><circle cx="520" cy="150.0" r="4" fill="#fde68a"/><line x1="550" y1="110" x2="550" y2="90.0" stroke="#fde68a" stroke-width="2"/><circle cx="550" cy="90.0" r="4" fill="#fde68a"/><line x1="580" y1="110" x2="580" y2="50.0" stroke="#fde68a" stroke-width="2"/><circle cx="580" cy="50.0" r="4" fill="#fde68a"/><text x="320" y="214" fill="#c5cae9" font-size="11" text-anchor="middle">Yellow bars = samples taken at regular intervals and rounded to the nearest level (bit depth).</text><text x="46" y="18" fill="#e8eaf6" font-size="11">amplitude</text><text x="575" y="104" fill="#e8eaf6" font-size="11" text-anchor="end">time</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border:1px solid #3949ab;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c5cae9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Sound file size (uncompressed)</p>
    <div style="color:#e8eaf6;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Size (bits) = sample rate (Hz) × bit depth × channels × time (s)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Total bits for all samples.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Divide by 8 for bytes</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Estimating audio storage.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 3: Sound size</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 1-minute stereo song is recorded at 44 100 Hz with 16-bit samples. Find its uncompressed size in MB.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Stereo has 2 channels.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Bits</strong>
    </p>
    <div style="margin:6px 0 0 34px;">44 100 × 16 × 2 × 60 = 84 672 000 bits.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Bytes</strong>
    </p>
    <div style="margin:6px 0 0 34px;">84 672 000 ÷ 8 = 10 584 000 bytes.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: MB</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10 584 000 ÷ 1 048 576 ≈ 10.1 MB.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> About 10.1 MB per minute — which is why MP3 compression is used.</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lossless compression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lossy compression</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Original data restored exactly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some data permanently removed</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Smaller reduction in size</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Much smaller files</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ZIP, PNG, FLAC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">JPEG, MP3, MP4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Used for text, programs, documents</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Used for photos, music, video</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8eaf6;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is the ASCII code of “B”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">66</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How many colours does 8-bit colour depth give?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">256</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which compression type removes data permanently?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Lossy compression.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating file sizes</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using character codes</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing compression</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting data</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: How Big Is a Message, a Picture and a Song?</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To compare calculated and actual sizes of text, image and sound files.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Text editor (e.g. Notepad)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Image viewer showing dimensions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet software</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sample image (known dimensions) and short audio clip provided by the teacher</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use headphones at a low volume.</li>
    <li>Save files only in your practice folder.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Type “Hello Kenya” in a text editor and save it as plain text. Predict its size (one byte per character) and check the file properties.</li>
    <li>In a spreadsheet, use =CODE("A") and =CHAR(65) to explore character codes.</li>
    <li>Open the sample image, note its width, height and colour depth, and calculate its uncompressed size.</li>
    <li>Compare with the actual file size and calculate the compression ratio.</li>
    <li>Note the audio clip’s length, sample rate, bit depth and channels; calculate its uncompressed size and compare with the actual MP3 size.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">File</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculated size</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Actual size</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Compression ratio</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Text</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Audio</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why was the text file the same as your prediction?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Plain ASCII/UTF-8 text uses one byte per English character with no compression.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why were the image and audio files much smaller than calculated?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">They were compressed (e.g. JPEG and MP3 are lossy formats).</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Text, images and sound can be measured in bits; compression greatly reduces the size of images and sound.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Lossy formats remove detail the eye or ear barely notices, giving high compression ratios.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting channels in sound calculations.</li>
    <li>Confusing bits and bytes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>WhatsApp compresses photos and videos before sending to save data and time.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <div style="background:#0b1a2e;border:1px solid #3949ab;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c5cae9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Compression ratio</p>
    <div style="color:#e8eaf6;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Compression ratio = uncompressed size ÷ compressed size</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> How many times smaller the compressed file is.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Written as e.g. 10 : 1</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Comparing formats.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 4: Compression ratio</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> An image is 1 440 000 bytes uncompressed and 180 000 bytes as a JPEG. Find the compression ratio.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Divide.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Divide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 440 000 ÷ 180 000 = 8.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 8 : 1</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #7986cb;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Computer Studies in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Phone camera settings (resolution, quality) trade file size against detail.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Compression reduces storage and network energy use.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Media, telecoms and streaming companies rely on efficient encoding and compression.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is the ASCII code for “a”?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 32 more than A.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">97</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> How many bits for a 100 × 100 image with 8-bit colour?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Multiply all three.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">80 000 bits (10 000 bytes).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which format is lossless: PNG or JPEG?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Exact rebuild.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">PNG.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write your first name in ASCII binary.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Design an 8 × 8 one-bit image and give its bit pattern to your partner to draw.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Compare the sizes of the same photo saved at different quality settings.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find out how many characters the latest Unicode version includes.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Distinguish ASCII from Unicode.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">ASCII is a 7-bit set of 128 characters for English; Unicode covers most writing systems and emoji using 1–4 bytes per character (UTF-8).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Calculate the size of a 1 920 × 1 080 image with 24-bit colour, in MB.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1 920 × 1 080 × 24 ÷ 8 = 6 220 800 bytes ≈ 5.93 MB.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A 30-second mono recording at 22 050 Hz, 8-bit. Find its size in KB.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">22 050 × 8 × 1 × 30 ÷ 8 = 661 500 bytes ≈ 646 KB.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why did the text file match your prediction but the photo did not?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Text was stored uncompressed; the photo was compressed.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is lossy compression unsuitable for program files?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Removing any bits would corrupt the instructions; programs must be restored exactly.</div>
    </details>
    </div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Text uses character sets: ASCII (7-bit, A = 65) and Unicode (UTF-8, 1–4 bytes, all scripts and emoji). Images are grids of pixels: size = width × height × colour depth. Sound is sampled: size = sample rate × bit depth × channels × time. Compression reduces size: lossless (ZIP, PNG) restores exactly; lossy (JPEG, MP3) removes some detail.</p>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>ASCII and Unicode.</li>
    <li>Pixels, resolution, colour depth.</li>
    <li>Sampling and sound size.</li>
    <li>Compression.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A = 65; a = 97; 0 = 48.</li>
    <li>Colours = 2^depth.</li>
    <li>Stereo = 2 channels.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to divide by 8.</li>
    <li>Leaving out channels or time.</li>
    <li>Calling JPEG lossless.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write the formula first.</li>
    <li>Keep units clear.</li>
    <li>Estimate before calculating.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #3949ab;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show each multiplication step.</li>
    <li>Give answers in the unit asked.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculating sizes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing pixel images.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exploring files.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy: data use</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every voice note and photo you share is a calculation of bits.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate the size of a 5-minute stereo song at 48 000 Hz, 24-bit.</li>
    <li>Explain three differences between lossy and lossless compression.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How could I save data when sending photos?</li>
    <li>Which calculation do I find hardest?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">ASCII</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7-bit character code.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Unicode</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Universal character set.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pixel</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Picture element.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sample rate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Samples per second.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Lossy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some data removed.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain text coding.</p>
    <p style="margin:6px 0;">☐ I can calculate image sizes.</p>
    <p style="margin:6px 0;">☐ I can calculate sound sizes.</p>
    <p style="margin:6px 0;">☐ I can compare compression types.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Standard ASCII uses:',
            options: ['7 bits', '16 bits', '4 bits', '32 bits'],
            correct: 0,
            explanation: 'The answer is 7 bits. It defines 128 characters.'
        },
        {
            question: 'The ASCII code of “a” is:',
            options: ['65', '48', '97', '32'],
            correct: 2,
            explanation: 'Lower-case letters start at 97.'
        },
        {
            question: 'Unicode is needed because it:',
            options: ['Is smaller than ASCII', 'Stores only numbers', 'Is only for images', 'Covers most writing systems and emoji'],
            correct: 3,
            explanation: 'ASCII covers only basic English characters.'
        },
        {
            question: 'A pixel is:',
            options: ['A sound sample', 'The smallest element of a digital image', 'A character code', 'A type of compression'],
            correct: 1,
            explanation: 'The answer is The smallest element of a digital image. Picture element.'
        },
        {
            question: '8-bit colour depth gives:',
            options: ['8 colours', '16 colours', '256 colours', '16.7 million colours'],
            correct: 2,
            explanation: 'The answer is 256 colours. 2⁸ = 256.'
        },
        {
            question: 'A 100 × 50 image with 4-bit colour uses:',
            options: ['5 000 bits', '200 bits', '400 bits', '20 000 bits'],
            correct: 3,
            explanation: 'The answer is 20 000 bits. 100 × 50 × 4 = 20 000.'
        },
        {
            question: 'Sample rate is measured in:',
            options: ['Hertz (samples per second)', 'Pixels', 'Bytes', 'Volts'],
            correct: 0,
            explanation: 'The answer is Hertz (samples per second). For example 44 100 Hz.'
        },
        {
            question: 'A stereo recording has:',
            options: ['1 channel', '2 channels', '4 channels', '0 channels'],
            correct: 1,
            explanation: 'The answer is 2 channels. Left and right.'
        },
        {
            question: 'Which is a lossless format?',
            options: ['JPEG', 'MP3', 'MP4', 'PNG'],
            correct: 3,
            explanation: 'The answer is PNG. PNG restores images exactly.'
        },
        {
            question: 'An image of 1 000 000 bytes compressed to 250 000 bytes has a ratio of:',
            options: ['1 : 4', '25 : 1', '4 : 1', '2 : 1'],
            correct: 2,
            explanation: 'The answer is 4 : 1. 1 000 000 ÷ 250 000 = 4.'
        }
    ]
},
{
    name: '1.1 Laboratory Activity: Measuring How Data Is Stored',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🧪 Measuring How Data Is Stored</h2>
    <p style="font-size:16px;">In this activity you will create your own text, image and sound files, predict their sizes using the formulas from this sub-strand, measure the actual sizes, and investigate how changing settings (resolution, colour depth, sample rate and compression) changes file size.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#c5cae9;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrical</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not touch sockets or cables with wet hands.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Posture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sit upright; screen at eye level; rest eyes every 20 minutes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hearing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use headphones at a low volume.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Files</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Save only in your practice folder; do not delete others’ files.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Privacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not photograph or record people without permission.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Predict, Measure, Compare</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To predict and measure file sizes for text, images and sound, and investigate the effect of settings on size.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with text editor, basic image editor (e.g. Paint) and sound recorder</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Headset with microphone</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet software</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data recording sheet</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Record only your own voice, with permission from your teacher.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Text: type a 50-character sentence, save as plain text, predict and measure its size.</li>
    <li>Image: create a 200 × 200 image; save as 24-bit BMP, 256-colour BMP, PNG and JPEG. Predict BMP sizes and measure all four.</li>
    <li>Sound: record a 10-second voice clip; note sample rate, bit depth and channels; predict its uncompressed size and measure it; if possible save as MP3 and compare.</li>
    <li>Enter all predictions and measurements in a spreadsheet and calculate compression ratios.</li>
    <li>Write a short conclusion on which settings affect size most.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">File and setting</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Predicted size (bytes)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Actual size (bytes)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Compression ratio</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Text (50 characters)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image 24-bit BMP</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image 256-colour BMP</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image PNG</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image JPEG</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound WAV</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound MP3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why are BMP files slightly larger than predicted?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">They include a header with information such as dimensions and colour depth.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which setting changed image size the most?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Usually the file format (compression), then colour depth.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> File size depends on the amount of data (pixels, samples, characters), the bits used for each item, and compression.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Uncompressed sizes follow the formulas; compressed formats store the same content in fewer bits.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting file headers.</li>
    <li>Recording in stereo but calculating for mono.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Web developers choose formats and sizes so pages load quickly on mobile data.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>For each file, calculate the percentage difference between predicted and actual sizes. Draw a bar chart of the four image formats. Recommend the best format for (a) a school logo with few colours (b) a photograph for a website (c) a scanned exam paper.</p>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 5: Predicting BMP size</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Predict the size of a 200 × 200, 24-bit BMP (ignore the header).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Width × height × bits ÷ 8.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Bits</strong>
    </p>
    <div style="margin:6px 0 0 34px;">200 × 200 × 24 = 960 000 bits.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Bytes</strong>
    </p>
    <div style="margin:6px 0 0 34px;">960 000 ÷ 8 = 120 000 bytes.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 120 000 bytes (about 117 KB)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State three factors that affect the size of an image file.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Resolution (width × height), colour depth, compression/format.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Why is a WAV file larger than an MP3 of the same clip?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">WAV is uncompressed; MP3 uses lossy compression.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Predict the size of a 10-second mono clip at 16 000 Hz, 16-bit.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">16 000 × 16 × 1 × 10 ÷ 8 = 320 000 bytes.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should you record only with permission?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">To respect privacy and school rules.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What extra data makes real files slightly larger than predicted?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">File headers and metadata.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📝 Write Your Laboratory Report</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Title and aim</li>
    <li>Apparatus and materials</li>
    <li>Procedure (past tense, passive voice)</li>
    <li>Observation table</li>
    <li>Results and calculations</li>
    <li>Discussion and sources of error</li>
    <li>Conclusion</li>
    <li>Safety measures you followed</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A 200 × 200 24-bit image without compression is about:',
            options: ['960 bytes', '40 000 bytes', '24 bytes', '120 000 bytes'],
            correct: 3,
            explanation: 'The answer is 120 000 bytes. 200 × 200 × 24 ÷ 8 = 120 000.'
        },
        {
            question: 'BMP files are slightly larger than predicted because of:',
            options: ['Compression', 'Missing pixels', 'Viruses', 'Headers and metadata'],
            correct: 3,
            explanation: 'Files store extra information.'
        },
        {
            question: 'Which change reduces sound file size?',
            options: ['Lower sample rate', 'Higher bit depth', 'More channels', 'Longer recording'],
            correct: 0,
            explanation: 'Fewer samples need fewer bits.'
        },
        {
            question: 'A 50-character plain-text file is about:',
            options: ['400 bytes', '50 bytes', '5 bytes', '50 KB'],
            correct: 1,
            explanation: 'The answer is 50 bytes. One byte per ASCII character.'
        },
        {
            question: 'Best format for a photograph on a website:',
            options: ['BMP', 'WAV', 'JPEG', 'TXT'],
            correct: 2,
            explanation: 'JPEG gives small files with acceptable quality.'
        }
    ]
},
{
    name: '1.1 Quiz: Data Representation',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📝 Quiz — Data Representation</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.1.1–1.1.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Data units and word size</li>
    <li>Binary fractions</li>
    <li>Sign-and-magnitude, ones’ and two’s complement</li>
    <li>BCD and floating point</li>
    <li>ASCII and Unicode</li>
    <li>Image and sound storage; compression</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 CBC Performance Levels</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Score</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do next</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80% – 100%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excellent. Move on to the assignment.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60% – 79%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Good. Revise the few areas you missed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40% – 59%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study the revision page, then try again.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below 40%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the three lessons and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3949ab;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c5cae9;font-weight:bold;">📝 Exam Tip</p>
    <div>Write formulas before substituting, divide by 8 for bytes, and check binary answers by converting back.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many bits are in 2 bytes?',
            options: ['8', '16', '4', '32'],
            correct: 1,
            explanation: 'The answer is 16. 2 × 8 = 16.'
        },
        {
            question: '3 MB equals:',
            options: ['3 072 KB', '3 000 bytes', '300 KB', '24 KB'],
            correct: 0,
            explanation: 'The answer is 3 072 KB. 3 × 1 024 = 3 072.'
        },
        {
            question: '0.11₂ equals:',
            options: ['0.11', '0.3', '0.75', '3'],
            correct: 2,
            explanation: 'The answer is 0.75. 0.5 + 0.25.'
        },
        {
            question: '0.875₁₀ in binary is:',
            options: ['0.101₂', '0.011₂', '0.1₂', '0.111₂'],
            correct: 3,
            explanation: 'The answer is 0.111₂. 0.5 + 0.25 + 0.125.'
        },
        {
            question: '−12 in 8-bit two’s complement is:',
            options: ['10001100', '11110100', '11110011', '00001100'],
            correct: 1,
            explanation: '00001100 → 11110011 → +1 = 11110100.'
        },
        {
            question: '10000000 in 8-bit two’s complement is:',
            options: ['128', '−0', '0', '−128'],
            correct: 3,
            explanation: 'The answer is −128. The MSB has weight −128.'
        },
        {
            question: 'Range of 16-bit two’s complement:',
            options: ['0 to 65 535', '−32 768 to 32 767', '−65 536 to 65 535', '−128 to 127'],
            correct: 1,
            explanation: 'The answer is −32 768 to 32 767. −2¹⁵ to 2¹⁵ − 1.'
        },
        {
            question: 'In BCD, 1001 represents:',
            options: ['10', '5', '9', '12'],
            correct: 2,
            explanation: 'The answer is 9. BCD codes 0–9 only.'
        },
        {
            question: 'In floating point, more mantissa bits give more:',
            options: ['Precision', 'Range only', 'Colours', 'Speed of sound'],
            correct: 0,
            explanation: 'Mantissa holds the significant digits.'
        },
        {
            question: 'UTF-8 uses how many bytes per character?',
            options: ['1 to 4', 'Always 1', 'Always 2', 'Always 8'],
            correct: 0,
            explanation: 'Common characters use 1 byte; others more.'
        },
        {
            question: '24-bit colour gives about:',
            options: ['24 colours', '16.7 million colours', '256 colours', '65 536 colours'],
            correct: 1,
            explanation: 'The answer is 16.7 million colours. 2²⁴ ≈ 16 777 216.'
        },
        {
            question: 'A 640 × 480 image at 8 bits per pixel uses:',
            options: ['2 457 600 bytes', '38 400 bytes', '307 200 bytes', '640 bytes'],
            correct: 2,
            explanation: '640 × 480 × 8 ÷ 8 = 307 200 bytes.'
        },
        {
            question: 'Sound size depends on sample rate, bit depth, channels and:',
            options: ['Time', 'Colour depth', 'Resolution', 'Font'],
            correct: 0,
            explanation: 'Longer recordings need more samples.'
        },
        {
            question: 'MP3 is an example of:',
            options: ['Lossless compression', 'An image format', 'A character set', 'Lossy compression'],
            correct: 3,
            explanation: 'The answer is Lossy compression. MP3 removes inaudible detail.'
        },
        {
            question: 'A file of 2 000 000 bytes compressed to 500 000 bytes has ratio:',
            options: ['1 : 4', '2 : 1', '40 : 1', '4 : 1'],
            correct: 3,
            explanation: 'The answer is 4 : 1. 2 000 000 ÷ 500 000 = 4.'
        }
    ]
},
{
    name: '1.1 Assignment: Data Saver Guide for Mobile Users',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📂 Data Saver Guide for Mobile Users</h2>
    <p style="font-size:16px;">In groups, you will produce a short guide that explains to ordinary phone users how text, photos, voice notes and videos are stored, how much data they use, and how to save data and storage space.</p>
    <p style="margin:6px 0 0 0;color:#e8eaf6;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🎬 The Task in Context</h3>
    <p>Many families in your community run out of data bundles and phone storage quickly. The school ICT club wants a simple guide, with real calculations, to help people understand and reduce their data use.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate the uncompressed size of: a 160-character SMS, a 12-megapixel photo (4 000 × 3 000, 24-bit), a 1-minute voice note (mono, 16 000 Hz, 16-bit) and a 1-minute video (assume 30 frames per second at 640 × 360, 24-bit).</li>
    <li>Find the typical compressed sizes of these items on a phone (check file properties or reliable sources).</li>
    <li>Calculate compression ratios and how many of each item 1 GB of data could send.</li>
    <li>Write five practical data-saving tips, explaining each using what you learnt (e.g. lower camera resolution, compressed formats, Wi-Fi for updates).</li>
    <li>Present your guide as a one-page leaflet or a short slide show.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calculations with working</li>
    <li>Table of compressed sizes and ratios</li>
    <li>Five data-saving tips</li>
    <li>Leaflet or slides</li>
    <li>Individual reflections (100 words each)</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📏 Assessment Rubric</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Criterion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Exceeds Expectations (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meets Expectations (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approaches Expectations (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Below Expectations (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All correct with clear working and units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct with working</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors or missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explanation of representation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, accurate and linked to each tip</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inaccurate</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data-saving tips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Five practical, justified tips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Four justified tips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two or three tips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One or none</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation and teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Attractive and clear; all contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear; most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some disorganisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poorly prepared</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Show units at every step.<br>Use simple language for the public.<br>Check sizes on a real phone where possible.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which item uses the most data, and why?</li>
    <li>Which tip will I use myself?</li>
    <li>How did our group share the calculations?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A 12-megapixel photo at 24-bit colour is about how many uncompressed bytes?',
            options: ['12 000 000', '36 000 000', '288 000 000', '4 000'],
            correct: 1,
            explanation: '12 000 000 × 24 ÷ 8 = 36 000 000.'
        },
        {
            question: 'A 160-character SMS in 7-bit ASCII uses:',
            options: ['160 bits', '1 280 bytes', '16 bits', '1 120 bits'],
            correct: 3,
            explanation: '160 × 7 = 1 120 bits (140 bytes).'
        },
        {
            question: 'Which tip saves the most mobile data?',
            options: ['Download updates on Wi-Fi', 'Raise video quality', 'Turn off compression', 'Send uncompressed files'],
            correct: 0,
            explanation: 'The answer is Download updates on Wi-Fi. Updates can be very large.'
        },
        {
            question: 'How many 2 MB photos fit in 1 GB?',
            options: ['500', '1 024', '512', '2 048'],
            correct: 2,
            explanation: 'The answer is 512. 1 024 MB ÷ 2 MB = 512.'
        },
        {
            question: 'Lowering camera resolution reduces file size because:',
            options: ['Colours increase', 'Sound is removed', 'Text is shorter', 'There are fewer pixels'],
            correct: 3,
            explanation: 'Size depends on the number of pixels.'
        }
    ]
},
{
    name: '1.1 Revision: Data Representation',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🔁 Revision — Data Representation</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.1 before starting 1.2 Binary Arithmetic Operations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">📦 Units</p>
    <div>bit, nibble (4), byte (8), KB, MB, GB, TB (× 1 024); word size.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🔢 Fractions</p>
    <div>Place values ½, ¼, ⅛…; decimal → binary by multiplying by 2; 0.1 repeats.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">➖ Signed numbers</p>
    <div>Sign-and-magnitude, ones’ complement (invert), two’s complement (invert + 1).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">📏 Ranges</p>
    <div>n-bit two’s complement: −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🔟 BCD</p>
    <div>Each decimal digit in 4 bits (0000–1001).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🔬 Floating point</p>
    <div>Sign, mantissa (precision), exponent (range).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🔤 Text</p>
    <div>ASCII (A = 65, a = 97, 0 = 48); Unicode/UTF-8.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🖼️🔊 Media</p>
    <div>Image = w × h × depth; sound = rate × depth × channels × time; lossy vs lossless.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Formula</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bytes = bits ÷ 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Converting bits to bytes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Colours = 2^depth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Colour depth</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image bits = w × h × depth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Image size</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound bits = rate × depth × channels × time</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound size</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ratio = original ÷ compressed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compression</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Convert 13.625₁₀ to binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1101.101₂</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Represent −63 in 8-bit two’s complement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11000001</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> What is 10111001 in two’s complement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">−128 + 32 + 16 + 8 + 1 = −71.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the size of a 1 024 × 768, 16-bit image in KB.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1 024 × 768 × 16 ÷ 8 ÷ 1 024 = 1 536 KB.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find the size of 2 minutes of mono 8 000 Hz, 8-bit audio in KB.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">8 000 × 8 × 120 ÷ 8 ÷ 1 024 ≈ 937.5 KB.</div>
    </details>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can convert units and fractions.</p>
    <p style="margin:6px 0;">☐ I can represent signed numbers.</p>
    <p style="margin:6px 0;">☐ I can use BCD and explain floating point.</p>
    <p style="margin:6px 0;">☐ I can calculate text, image and sound sizes.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '1 TB equals:',
            options: ['1 000 MB', '1 024 KB', '1 024 GB', '8 GB'],
            correct: 2,
            explanation: 'Each unit is 1 024 of the one below.'
        },
        {
            question: '1.1₂ equals:',
            options: ['1.1', '3', '2', '1.5'],
            correct: 3,
            explanation: 'The answer is 1.5. 1 + 0.5.'
        },
        {
            question: 'Ones’ complement of 00110011 is:',
            options: ['11001101', '11001100', '00110011', '10110011'],
            correct: 1,
            explanation: 'The answer is 11001100. Invert every bit.'
        },
        {
            question: 'Two’s complement of 00110011 is:',
            options: ['11001101', '11001100', '00110100', '10110011'],
            correct: 0,
            explanation: 'The answer is 11001101. Invert and add 1.'
        },
        {
            question: 'Which is NOT valid BCD?',
            options: ['0111', '1001', '0000', '1100'],
            correct: 3,
            explanation: '1100 (12) is not a decimal digit.'
        },
        {
            question: 'Changing a letter’s case in ASCII changes the code by:',
            options: ['1', '26', '32', '64'],
            correct: 2,
            explanation: 'The answer is 32. A = 65, a = 97.'
        },
        {
            question: 'Doubling the colour depth from 8 to 16 bits makes an image:',
            options: ['Twice as large', 'Half as large', 'The same size', 'Four times smaller'],
            correct: 0,
            explanation: 'The answer is Twice as large. Bits per pixel double.'
        },
        {
            question: 'ZIP files use:',
            options: ['Lossy compression', 'Lossless compression', 'No compression', 'BCD'],
            correct: 1,
            explanation: 'The answer is Lossless compression. Files are restored exactly.'
        }
    ]
},
{
    name: '1.1 Summary: Data Representation',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.1 Data Representation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🧾 Summary — Data Representation</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Every kind of data — whole and fractional numbers, negative values, text, images and sound — is stored as patterns of bits, and the number of bits used decides the range, precision, quality and size of what can be stored.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Data units go from bit and byte up to TB in steps of 1 024.</li>
    <li>Binary fractions use place values ½, ¼, ⅛…; some decimals such as 0.1 cannot be stored exactly.</li>
    <li>Negative numbers use sign-and-magnitude, ones’ complement or two’s complement; computers use two’s complement.</li>
    <li>n-bit two’s complement ranges from −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1.</li>
    <li>BCD stores each decimal digit in 4 bits; floating point uses sign, mantissa and exponent.</li>
    <li>Text uses ASCII or Unicode; images use pixels and colour depth; sound uses sampling.</li>
    <li>Compression is lossless or lossy.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Units and fractions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data units, word size, binary fractions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply by 2 for fractions</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Signed numbers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">S&M, ones’ and two’s complement, BCD, floating point</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Invert and add 1</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Text, images, sound</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ASCII, Unicode, pixels, sampling, compression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide by 8 for bytes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Predict and measure file sizes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Remember headers</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">bit</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">byte</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">word</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">binary point</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sign-and-magnitude</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ones’ complement</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">two’s complement</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">BCD</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">mantissa</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">exponent</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ASCII</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unicode</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">pixel</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">colour depth</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sample rate</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compression</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Understanding data representation explains your phone storage, data bundles and media quality.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Binary Arithmetic Operations shows how the computer calculates with these bits.</div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ explain and convert data units</p>
    <p style="margin:6px 0;">✔️ convert binary fractions</p>
    <p style="margin:6px 0;">✔️ represent signed integers</p>
    <p style="margin:6px 0;">✔️ use BCD and explain floating point</p>
    <p style="margin:6px 0;">✔️ calculate text, image and sound storage</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is that:',
            options: ['Computers store pictures as paper', 'Only numbers can be stored', 'All data is stored as bit patterns whose size limits range and quality', 'Text needs no coding'],
            correct: 2,
            explanation: 'The answer is All data is stored as bit patterns whose size limits range and quality. Bits represent everything.'
        },
        {
            question: 'Which lesson covered two’s complement?',
            options: ['1.1.2', '1.1.1', '1.1.3', '1.2.1'],
            correct: 0,
            explanation: 'The answer is 1.1.2. Signed numbers were in 1.1.2.'
        },
        {
            question: 'Which lesson covered sampling?',
            options: ['1.1.1', '1.1.2', '1.2.2', '1.1.3'],
            correct: 3,
            explanation: 'The answer is 1.1.3. Sound was in 1.1.3.'
        },
        {
            question: 'What comes next?',
            options: ['1.3 Logic Gates', '2.1 Network Standards', '3.1 OOP Concepts', '1.2 Binary Arithmetic Operations'],
            correct: 3,
            explanation: 'Arithmetic follows representation.'
        },
        {
            question: 'Colours available with 4-bit depth:',
            options: ['4', '16', '8', '256'],
            correct: 1,
            explanation: 'The answer is 16. 2⁴ = 16.'
        }
    ]
},
{
    name: '1.2.1 Binary Arithmetic Operations: Binary Addition and Overflow',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Binary Addition and Overflow</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the four rules of binary addition, add two and three binary numbers with carries, check answers in decimal, and identify overflow when a result is too large for the number of bits available.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Addition is the most basic operation a processor performs. Subtraction, multiplication and many other operations are built from it. Overflow errors have caused real software failures, so programmers must understand them.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧮 CPU arithmetic logic unit (ALU)</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💳 Payment totals</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game scores</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⏱️ Counters and timers</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📡 Error checking (checksums)</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧾 Spreadsheets</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8eaf6;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Add binary numbers and detect overflow.</li>
    <li>Subtract binary numbers directly and using two’s complement.</li>
    <li>Multiply and divide binary numbers.</li>
    <li>Explain the effect of binary shifts.</li>
    <li>Apply binary arithmetic in computing contexts.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8eaf6;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the rules of binary addition.</li>
    <li>Add binary numbers with carries.</li>
    <li>Check binary sums in decimal.</li>
    <li>Detect overflow in unsigned and signed addition.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">❓ Key inquiry question:</strong> How does a computer calculate using only 0s and 1s?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">🧰 What you already know:</strong> Sub-strand 1.1: binary numbers, two’s complement and ranges.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Binary addition works like decimal column addition, but you carry when a column reaches <strong>2</strong> instead of 10. There are only four facts to learn.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 230" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="60" y="40" fill="#c5cae9" font-size="12">carries</text><text x="150" y="40" fill="#ffab91" font-size="20" text-anchor="middle" font-family="monospace"> </text><text x="200" y="40" fill="#ffab91" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="250" y="40" fill="#ffab91" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="300" y="40" fill="#ffab91" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="350" y="40" fill="#ffab91" font-size="20" text-anchor="middle" font-family="monospace"> </text><text x="60" y="80" fill="#c5cae9" font-size="12">11</text><text x="150" y="80" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace"> </text><text x="200" y="80" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="250" y="80" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">0</text><text x="300" y="80" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="350" y="80" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="60" y="115" fill="#c5cae9" font-size="12">+ 6</text><text x="150" y="115" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">+</text><text x="200" y="115" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">0</text><text x="250" y="115" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="300" y="115" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="350" y="115" fill="#e8eaf6" font-size="20" text-anchor="middle" font-family="monospace">0</text><line x1="120" y1="130" x2="400" y2="130" stroke="#7986cb" stroke-width="2"/><text x="60" y="165" fill="#c5cae9" font-size="12">= 17</text><text x="150" y="165" fill="#a5d6a7" font-size="20" text-anchor="middle" font-family="monospace">1</text><text x="200" y="165" fill="#a5d6a7" font-size="20" text-anchor="middle" font-family="monospace">0</text><text x="250" y="165" fill="#a5d6a7" font-size="20" text-anchor="middle" font-family="monospace">0</text><text x="300" y="165" fill="#a5d6a7" font-size="20" text-anchor="middle" font-family="monospace">0</text><text x="350" y="165" fill="#a5d6a7" font-size="20" text-anchor="middle" font-family="monospace">1</text><line x1="120" y1="178" x2="400" y2="178" stroke="#7986cb" stroke-width="2"/><text x="420" y="80" fill="#e8eaf6" font-size="13">Rules</text><text x="420" y="102" fill="#e8eaf6" font-size="12" font-family="monospace">0 + 0 = 0</text><text x="420" y="120" fill="#e8eaf6" font-size="12" font-family="monospace">0 + 1 = 1</text><text x="420" y="138" fill="#e8eaf6" font-size="12" font-family="monospace">1 + 1 = 0 carry 1</text><text x="420" y="156" fill="#e8eaf6" font-size="12" font-family="monospace">1+1+1 = 1 carry 1</text><text x="280" y="215" fill="#c5cae9" font-size="11" text-anchor="middle">Work right to left; write the carry above the next column.</text>
    </svg>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">🗣️ In Simple Words</p>
    <div>1 + 1 = 10 in binary (“zero, carry one”). 1 + 1 + 1 = 11 (“one, carry one”).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Inside the processor, the arithmetic logic unit (ALU) adds bits using circuits called half adders and full adders, which you will build in sub-strand 1.3 Logic Gates. Each register has a fixed number of bits, so a result that needs more bits causes <strong>overflow</strong>. A famous example is the “Year 2038 problem”, when 32-bit signed time counters will overflow.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Carry</strong>
    </p>
    <p style="margin:6px 0;">A 1 passed to the next column when a column sum is 2 or 3.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> c</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1 + 1 = 0 carry 1</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Sum bit</strong>
    </p>
    <p style="margin:6px 0;">The bit written in a column after addition.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Overflow</strong>
    </p>
    <p style="margin:6px 0;">When a result is too large (or too small) to fit in the available bits.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>200 in 8-bit signed</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">ALU</strong>
    </p>
    <p style="margin:6px 0;">Arithmetic Logic Unit: part of the CPU that calculates.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Register</strong>
    </p>
    <p style="margin:6px 0;">A small, fast storage location in the CPU with a fixed number of bits.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>8-bit register</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">1. Adding Two Binary Numbers</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">A</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">B</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Carry in</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sum</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Carry out</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 1: Four-bit addition</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Add 1011₂ + 0110₂ and check in decimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Work from the right; carry when a column total is 2 or 3.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Column 1 (right)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 + 0 = 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Column 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 + 1 = 0 carry 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Column 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 + 1 + 1 = 0 carry 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Column 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 + 0 + 1 = 0 carry 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e8eaf6;">Step 5: Final carry</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Write 1 at the front → 10001</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">6</span><strong style="color:#e8eaf6;">Step 6: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11 + 6 = 17 = 10001₂ ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 10001₂ (17)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 2: Adding three numbers</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Add 101 + 110 + 111.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Add two first, then add the third.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: 101 + 110</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1011 (5 + 6 = 11)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: 1011 + 111</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10010 (11 + 7 = 18)</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 10010₂ (18)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">2. Overflow</h3>
    <p>In an <strong>8-bit unsigned</strong> register the largest value is 255. In <strong>8-bit two’s complement</strong>, it is 127. If a result is outside the range, overflow occurs.</p>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 3: Signed overflow</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Add 01101101 + 01011011 in 8 bits. Is there overflow if the numbers are signed?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Add, then look at the sign bits.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Decimal</strong>
    </p>
    <div style="margin:6px 0 0 34px;">109 + 91 = 200</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Binary sum</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11001000</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: As unsigned</strong>
    </p>
    <div style="margin:6px 0 0 34px;">200 — fits (≤ 255), no overflow.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: As signed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">MSB is 1, so it reads as −56. Two positives gave a negative → overflow.</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 11001000 — correct unsigned, but signed overflow.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">ℹ️ Note</p>
    <div><strong>Signed overflow rule:</strong> overflow occurs when two numbers with the <em>same</em> sign are added and the result has the <em>opposite</em> sign. Adding a positive and a negative number can never overflow.</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Thinking that a carry out of the MSB always means overflow. In two’s complement, the final carry is often simply discarded.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8eaf6;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Add 1101 + 0111.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">10100 (13 + 7 = 20)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the largest 8-bit unsigned value?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">255 (11111111)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Does 01000000 + 01000000 overflow in 8-bit signed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Yes: 64 + 64 = 128 gives 10000000, read as −128.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Adding binary</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking in decimal</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Detecting overflow</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using a programmer calculator</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Binary Addition Race with a Calculator Check</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To practise binary addition and confirm answers with software.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator in Programmer mode</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet of 10 additions</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet including some sums that overflow 8 bits</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only approved software.</li>
    <li>Take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete the 10 additions by hand, showing carries.</li>
    <li>Set the calculator to BIN and BYTE, and enter each sum to check.</li>
    <li>For each sum, decide if signed overflow occurred.</li>
    <li>Repeat three sums in WORD (16-bit) mode and compare.</li>
    <li>Record your results.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sum</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hand answer</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculator</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Signed overflow?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1011 + 0110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">01101101 + 01011011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">01111111 + 00000001</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why did 01111111 + 00000001 give a negative result in BYTE mode?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">127 + 1 = 128 is outside the signed range, so 10000000 is read as −128.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What changed in WORD mode?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">With 16 bits the result fits, so no overflow.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Binary addition follows four rules; overflow depends on the number of bits used.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> More bits give a wider range and prevent overflow for the same values.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting carries.</li>
    <li>Leaving the calculator in the wrong word size.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Programmers choose larger data types when totals could exceed the range.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>For your 10 sums, count how many overflowed in 8-bit signed, 8-bit unsigned and 16-bit signed. Explain the pattern.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #7986cb;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Computer Studies in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> A shop till adds prices in binary; a large enough register prevents wrong totals.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Efficient arithmetic circuits use less power in phones.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Chip designers build fast adders for processors.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is 1 + 1 + 1 in binary?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 3 in decimal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11 (1 carry 1).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Add 111 + 1.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 7 + 1 = 8.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1000</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Can adding a positive and a negative number overflow?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: The result lies between them.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">No.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Add the binary numbers for your age and your desk number.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write two 6-bit numbers each; add them and check each other’s work.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Act out a 4-bit adder: four learners hold bits and pass carry cards.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a spreadsheet: =DEC2BIN(BIN2DEC(A1)+BIN2DEC(B1)) to check sums.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Add 110110 + 101101.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1100011 (54 + 45 = 99)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> State the signed overflow rule.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Two same-sign numbers give a result of the opposite sign.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Add 10011 + 1101 + 111.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">100111 (19 + 13 + 7 = 39)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why check binary answers in decimal?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">It confirms the result and catches carry errors.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is the Year 2038 problem an overflow problem?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">A 32-bit signed counter of seconds since 1970 reaches its maximum (2 147 483 647) in 2038 and wraps to a negative value.</div>
    </details>
    </div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Binary addition uses four rules: 0 + 0 = 0, 0 + 1 = 1, 1 + 1 = 0 carry 1, 1 + 1 + 1 = 1 carry 1. Add right to left, carrying into the next column. Overflow occurs when a result does not fit the available bits; in two’s complement it happens when two same-sign numbers give an opposite-sign result.</p>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Addition rules.</li>
    <li>Carries.</li>
    <li>Unsigned overflow.</li>
    <li>Signed overflow.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1 + 1 = 10.</li>
    <li>Check in decimal.</li>
    <li>Same signs in, opposite sign out = overflow.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Dropping carries.</li>
    <li>Misaligned columns.</li>
    <li>Confusing carry-out with overflow.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write carries above columns.</li>
    <li>Pad numbers to equal length.</li>
    <li>Convert to decimal to check.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #3949ab;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show carries clearly.</li>
    <li>State the number of bits when discussing overflow.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detecting overflow.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Human adder activity.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculator checks.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every total on a receipt was added in binary.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Add 11101011 + 00110110 and decide if signed overflow occurs.</li>
    <li>Research one real overflow bug and describe it.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I carry correctly every time?</li>
    <li>How can I spot overflow quickly?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Carry</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bit passed to the next column.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Overflow</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Result out of range.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">ALU</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">CPU calculator.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Register</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fixed-size CPU store.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can add binary numbers.</p>
    <p style="margin:6px 0;">☐ I can check in decimal.</p>
    <p style="margin:6px 0;">☐ I can detect overflow.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '1 + 1 in binary equals:',
            options: ['2', '11', '10', '01'],
            correct: 2,
            explanation: 'The answer is 10. Zero, carry one.'
        },
        {
            question: '1 + 1 + 1 in binary equals:',
            options: ['11', '10', '111', '3'],
            correct: 0,
            explanation: 'The answer is 11. One, carry one.'
        },
        {
            question: '1011 + 0110 =',
            options: ['1111', '10011', '1101', '10001'],
            correct: 3,
            explanation: 'The answer is 10001. 11 + 6 = 17.'
        },
        {
            question: '111 + 1 =',
            options: ['1000', '1110', '112', '1001'],
            correct: 0,
            explanation: 'The answer is 1000. 7 + 1 = 8.'
        },
        {
            question: 'The largest 8-bit unsigned value is:',
            options: ['127', '256', '128', '255'],
            correct: 3,
            explanation: 'The answer is 255. 2⁸ − 1.'
        },
        {
            question: 'Overflow happens when:',
            options: ['A number is zero', 'A result needs more bits than are available', 'Two numbers are equal', 'A carry is written'],
            correct: 1,
            explanation: 'The answer is A result needs more bits than are available. The register is too small.'
        },
        {
            question: 'Two positive signed numbers give a negative result. This shows:',
            options: ['Correct addition', 'Underflow of zero', 'BCD', 'Overflow'],
            correct: 3,
            explanation: 'The answer is Overflow. Same signs, opposite result.'
        },
        {
            question: 'Adding a positive and a negative number:',
            options: ['Cannot overflow', 'Always overflows', 'Gives zero', 'Needs BCD'],
            correct: 0,
            explanation: 'The answer is Cannot overflow. The result lies between them.'
        },
        {
            question: 'The CPU part that adds numbers is the:',
            options: ['RAM', 'ALU', 'Hard disk', 'Monitor'],
            correct: 1,
            explanation: 'The answer is ALU. Arithmetic Logic Unit.'
        },
        {
            question: '101 + 110 + 111 =',
            options: ['1110', '11000', '10010', '10101'],
            correct: 2,
            explanation: 'The answer is 10010. 5 + 6 + 7 = 18.'
        }
    ]
},
{
    name: '1.2.2 Binary Arithmetic Operations: Binary Subtraction',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Binary Subtraction</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will subtract binary numbers directly by borrowing, and then by the method computers use: adding the two’s complement of the number being subtracted and discarding the final carry. You will also handle results that are negative.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Processors do not have a separate subtraction circuit — they subtract by adding a two’s complement. This keeps hardware simple and fast. Understanding it shows how one circuit can do two jobs.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏦 Account withdrawals</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📉 Change in readings</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⏳ Countdown timers</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎯 Distance calculations</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Calculating change</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📊 Differences in data</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8eaf6;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Add binary numbers and detect overflow.</li>
    <li>Subtract binary numbers directly and using two’s complement.</li>
    <li>Multiply and divide binary numbers.</li>
    <li>Explain the effect of binary shifts.</li>
    <li>Apply binary arithmetic in computing contexts.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8eaf6;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Subtract binary numbers by borrowing.</li>
    <li>Subtract using two’s complement addition.</li>
    <li>Interpret negative results.</li>
    <li>Explain why computers subtract by adding.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">❓ Key inquiry question:</strong> How does a computer calculate using only 0s and 1s?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">🧰 What you already know:</strong> Lesson 1.2.1 and two’s complement from 1.1.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Method 1 — borrowing:</strong> like decimal, but a borrow is worth 2. The rules are 0 − 0 = 0, 1 − 0 = 1, 1 − 1 = 0, and 0 − 1 = 1 borrow 1.</p>
    <p><strong>Method 2 — two’s complement:</strong> to calculate A − B, find the two’s complement of B (invert and add 1), add it to A, and <strong>discard any carry</strong> out of the MSB.</p>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">🗣️ In Simple Words</p>
    <div>A − B = A + (−B). Computers turn subtraction into addition.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Because two’s complement subtraction reuses the adder, the ALU only needs an adder plus a set of inverters (NOT gates) and a way to add 1. Early computers sometimes used ones’ complement with an “end-around carry”, but two’s complement replaced it.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Borrow</strong>
    </p>
    <p style="margin:6px 0;">Taking 1 from the next higher column, worth 2 in the current column.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>0 − 1 = 1 borrow 1</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Minuend</strong>
    </p>
    <p style="margin:6px 0;">The number subtracted from.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> A</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>In 25 − 12, 25</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Subtrahend</strong>
    </p>
    <p style="margin:6px 0;">The number being subtracted.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> B</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>In 25 − 12, 12</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Discard carry</strong>
    </p>
    <p style="margin:6px 0;">Ignore the carry out of the MSB in two’s complement subtraction.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">1. Subtraction by Borrowing</h3>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 1: Direct subtraction</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 1101₂ − 0110₂.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Work from the right, borrowing when the top bit is 0.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Column 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 − 0 = 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Column 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 − 1: borrow → 10 − 1 = 1; the next column 1 becomes 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Column 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 − 1: borrow → 10 − 1 = 1; the next column 1 becomes 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Column 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 − 0 = 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e8eaf6;">Step 5: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">13 − 6 = 7 = 0111 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 0111₂ (7)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">2. Subtraction Using Two’s Complement</h3>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 2: Positive result</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 25 − 12 using 8-bit two’s complement.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert both, make 12 negative, add.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: 25</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00011001</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: 12</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00001100</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: −12</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Invert → 11110011, add 1 → 11110100</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Add</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00011001 + 11110100 = 1 00001101</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e8eaf6;">Step 5: Discard carry</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00001101 = 13 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 00001101 (13)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 3: Negative result</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 12 − 25 using 8-bit two’s complement.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Make 25 negative, add, then read the result.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: −25</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00011001 → invert 11100110 → add 1 → 11100111</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Add</strong>
    </p>
    <div style="margin:6px 0 0 34px;">00001100 + 11100111 = 11110011</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: No carry out</strong>
    </p>
    <div style="margin:6px 0 0 34px;">MSB is 1, so the answer is negative.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Read</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Invert 00001100, add 1 → 00001101 = 13, so −13 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 11110011 (−13)</div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3949ab;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c5cae9;font-weight:bold;">📝 Exam Tip</p>
    <div>Always state the number of bits (e.g. 8-bit) and show the invert and add-1 steps for full marks.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8eaf6;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> 1010 − 0011 by borrowing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">0111 (10 − 3 = 7)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> −9 in 8-bit two’s complement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11110111</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> 20 − 9 in 8-bit two’s complement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">00010100 + 11110111 = 1 00001011 → 00001011 (11)</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Borrowing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two’s complement subtraction</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reading negative results</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Subtraction Two Ways</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To compare direct subtraction with two’s complement subtraction and check using software.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator in Programmer mode</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet software</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet of 8 subtractions (some with negative results)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only approved software.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Do each subtraction by borrowing (where the result is positive).</li>
    <li>Do each subtraction using 8-bit two’s complement addition.</li>
    <li>Check each result in the calculator (BYTE mode).</li>
    <li>Record which method you found faster and which gave fewer errors.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Subtraction</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Borrowing</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Two’s complement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculator</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13 − 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25 − 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 − 25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why can’t borrowing give 12 − 25 directly?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Borrowing needs the top number to be larger; negative results need a signed method.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why do computers use the two’s complement method?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">It reuses the adder circuit.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Both methods give the same positive results; two’s complement also handles negative results.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Adding −B is the same as subtracting B.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to discard the carry.</li>
    <li>Forgetting to add 1.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Every withdrawal calculation in a banking system is subtraction by addition.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare the number of steps in each method for your 8 subtractions. Explain why hardware designers prefer two’s complement.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #7986cb;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Computer Studies in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Mobile money balances are reduced by subtraction in binary.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Fewer circuits mean less power and fewer materials.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Processor designers reuse adders for subtraction.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> 0 − 1 in binary?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Borrow is worth 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1 borrow 1.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What do you do with the final carry in two’s complement subtraction?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It falls outside the bits.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Discard it.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> If the result’s MSB is 1, what does that mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Sign bit.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">The result is negative.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Subtract your age from 50 using two’s complement.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each set three subtractions; solve them both ways.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Draw a flowchart of the two’s complement subtraction method.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Check results with =DEC2BIN(BIN2DEC(A1)-BIN2DEC(B1)).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Calculate 11001 − 1011 by borrowing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">01110 (25 − 11 = 14)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Calculate 30 − 45 in 8-bit two’s complement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">00011110 + 11010011 = 11110001 (−15)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why is the final carry discarded?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">It is outside the 8-bit word and does not affect the correct result.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What does the calculator show for 12 − 25 in BYTE mode?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11110011, which it displays as −13.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how one adder can both add and subtract.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Invert B with NOT gates and set the carry-in to 1, so the adder computes A + (−B).</div>
    </details>
    </div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Binary subtraction can be done by borrowing (0 − 1 = 1 borrow 1) or by adding the two’s complement of the subtrahend and discarding the final carry. A result with MSB 1 is negative; find its size by inverting and adding 1. Computers subtract by addition to reuse the adder.</p>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Borrowing.</li>
    <li>Two’s complement subtraction.</li>
    <li>Negative results.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A − B = A + (−B).</li>
    <li>Discard the carry.</li>
    <li>MSB 1 = negative.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Not adding 1.</li>
    <li>Keeping the carry.</li>
    <li>Misreading negative results.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pad to 8 bits first.</li>
    <li>Check in decimal.</li>
    <li>Use the −128 shortcut to read results.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #3949ab;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show each stage.</li>
    <li>State the final answer in binary and decimal.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing methods.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flowcharts.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Software checks.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Subtraction by addition runs in every processor.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate 100 − 37 and 37 − 100 in 8-bit two’s complement.</li>
    <li>Explain in 60 words why computers subtract by adding.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which method do I prefer and why?</li>
    <li>Where do I make mistakes?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Borrow</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Take 2 from next column.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Minuend</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number subtracted from.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Subtrahend</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number subtracted.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Discard carry</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ignore MSB carry.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can subtract by borrowing.</p>
    <p style="margin:6px 0;">☐ I can subtract with two’s complement.</p>
    <p style="margin:6px 0;">☐ I can read negative results.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '0 − 1 in binary gives:',
            options: ['0', '1 carry 1', '−1 only', '1 borrow 1'],
            correct: 3,
            explanation: 'The answer is 1 borrow 1. A borrow is worth 2.'
        },
        {
            question: '1101 − 0110 =',
            options: ['0101', '1011', '0111', '0011'],
            correct: 2,
            explanation: 'The answer is 0111. 13 − 6 = 7.'
        },
        {
            question: 'Computers usually subtract by:',
            options: ['Dividing', 'Using BCD', 'Shifting only', 'Adding the two’s complement'],
            correct: 3,
            explanation: 'The answer is Adding the two’s complement. This reuses the adder.'
        },
        {
            question: 'In two’s complement subtraction the final carry is:',
            options: ['Added again', 'Doubled', 'Stored as the sign', 'Discarded'],
            correct: 3,
            explanation: 'The answer is Discarded. It is outside the word.'
        },
        {
            question: '−12 in 8-bit two’s complement is:',
            options: ['11110011', '11110100', '10001100', '00001100'],
            correct: 1,
            explanation: 'The answer is 11110100. Invert and add 1.'
        },
        {
            question: '25 − 12 in 8 bits gives:',
            options: ['00011001', '11110100', '00001101', '00010011'],
            correct: 2,
            explanation: 'The answer is 00001101. 13.'
        },
        {
            question: '12 − 25 in 8 bits gives:',
            options: ['11110011', '00001101', '11110100', '10001101'],
            correct: 0,
            explanation: 'The answer is 11110011. −13.'
        },
        {
            question: 'A result of 11111110 means:',
            options: ['254 only', '−2', '−126', '2'],
            correct: 1,
            explanation: 'Invert 00000001, add 1 → 2, so −2.'
        },
        {
            question: 'The number being subtracted is called the:',
            options: ['Subtrahend', 'Minuend', 'Mantissa', 'Exponent'],
            correct: 0,
            explanation: 'The answer is Subtrahend. B in A − B.'
        },
        {
            question: 'Two’s complement subtraction mainly saves:',
            options: ['Screen space', 'Hardware (circuits)', 'Ink', 'Network data'],
            correct: 1,
            explanation: 'The answer is Hardware (circuits). One adder does both jobs.'
        }
    ]
},
{
    name: '1.2.3 Binary Arithmetic Operations: Multiplication, Division and Shifts',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Multiplication, Division and Shifts</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will multiply binary numbers by shift-and-add, divide them by long division, use logical shifts to multiply and divide by powers of 2, and add hexadecimal numbers.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Graphics, encryption, audio processing and games need millions of multiplications every second. Shifts are the fastest way for a processor to multiply or divide by 2, 4, 8…, and programmers use them to write efficient code.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🖼️ Scaling images</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔐 Encryption</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎵 Audio volume</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game physics</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📐 Engineering calculations</span><span style="background:#0b1a2e;border:1px solid #c5cae9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧠 AI computations</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8eaf6;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Add binary numbers and detect overflow.</li>
    <li>Subtract binary numbers directly and using two’s complement.</li>
    <li>Multiply and divide binary numbers.</li>
    <li>Explain the effect of binary shifts.</li>
    <li>Apply binary arithmetic in computing contexts.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8eaf6;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiply binary numbers.</li>
    <li>Divide binary numbers.</li>
    <li>Use left and right shifts.</li>
    <li>Add hexadecimal numbers.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">❓ Key inquiry question:</strong> How does a computer calculate using only 0s and 1s?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8eaf6;">🧰 What you already know:</strong> Lessons 1.2.1 and 1.2.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Binary multiplication is easy because each digit is 0 or 1: multiplying by 1 copies the number, multiplying by 0 gives zero. So you write shifted copies and <strong>add</strong> them. Division works by repeated subtraction, like decimal long division.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 620 250" width="620" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="170" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="186" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="204" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="220" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="238" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="254" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="272" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="288" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="306" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="322" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="340" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="356" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">1</text><rect x="374" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="390" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">1</text><rect x="408" y="20" width="32" height="32" rx="4" fill="#1a237e" stroke="#7986cb"/><text x="424" y="42" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><text x="160" y="42" fill="#e8eaf6" font-size="14" text-anchor="end">6 =</text><polygon points="120,110 140,100 140,120" fill="#a5d6a7"/><line x1="140" y1="110" x2="200" y2="110" stroke="#a5d6a7" stroke-width="3"/><text x="210" y="115" fill="#a5d6a7" font-size="13">shift left 1 → × 2</text><polygon points="500,110 480,100 480,120" fill="#ffab91"/><line x1="420" y1="110" x2="480" y2="110" stroke="#ffab91" stroke-width="3"/><text x="410" y="115" fill="#ffab91" font-size="13" text-anchor="end">÷ 2 ← shift right 1</text><rect x="20" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="36" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="54" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="70" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="88" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="104" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="122" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="138" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="156" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="172" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">1</text><rect x="190" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="206" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">1</text><rect x="224" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="240" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="258" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#a5d6a7"/><text x="274" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><text x="20" y="205" fill="#a5d6a7" font-size="14">12</text><rect x="330" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="346" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="364" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="380" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="398" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="414" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="432" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="448" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="466" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="482" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="500" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="516" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">0</text><rect x="534" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="550" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">1</text><rect x="568" y="150" width="32" height="32" rx="4" fill="#1a237e" stroke="#ffab91"/><text x="584" y="172" fill="#e8eaf6" font-size="16" text-anchor="middle" font-family="monospace">1</text><text x="330" y="205" fill="#ffab91" font-size="14">3</text><text x="310" y="240" fill="#c5cae9" font-size="11" text-anchor="middle">A 0 enters the empty end; the bit pushed out is lost.</text>
    </svg>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Shift left 1 place = × 2. Shift right 1 place = ÷ 2 (whole-number part).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Processors have multiplier circuits that use shift-and-add internally, and many programming languages provide shift operators (&lt;&lt; and &gt;&gt; in C, Java and Python). A <strong>logical shift</strong> fills with 0; an <strong>arithmetic right shift</strong> copies the sign bit so negative numbers stay negative. Hexadecimal arithmetic is used by programmers because each hex digit stands for exactly 4 bits.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Partial product</strong>
    </p>
    <p style="margin:6px 0;">A shifted copy of the multiplicand in multiplication.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Logical shift</strong>
    </p>
    <p style="margin:6px 0;">Moving all bits left or right, filling with 0.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>0110 → 1100</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Arithmetic shift</strong>
    </p>
    <p style="margin:6px 0;">Right shift that keeps the sign bit.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1100 → 1110</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Quotient</strong>
    </p>
    <p style="margin:6px 0;">The result of a division.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> Q</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>15 ÷ 3 = 5</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #7986cb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Remainder</strong>
    </p>
    <p style="margin:6px 0;">What is left after division.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8eaf6;">📏 Symbol / unit:</span> R</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>7 ÷ 2 = 3 R 1</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">1. Binary Multiplication</h3>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 1: Small multiplication</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 101₂ × 11₂.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Write a copy of 101 for each 1 in 11, shifted, then add.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: × rightmost 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">101</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: × next 1 (shift left)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1010</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Add</strong>
    </p>
    <div style="margin:6px 0 0 34px;">101 + 1010 = 1111</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5 × 3 = 15 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 1111₂ (15)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 2: Larger multiplication</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 1101₂ × 101₂.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Partial products only for the 1s.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: × 1 (units)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1101</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: × 0 (twos)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0000 shifted — skip</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: × 1 (fours)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">110100</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Add</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1101 + 110100 = 1000001</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e8eaf6;">Step 5: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">13 × 5 = 65 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 1000001₂ (65)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">2. Binary Division</h3>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 3: Long division</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 1111₂ ÷ 11₂.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Does 11 go into the leading bits? Subtract and bring down.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: 11 into 11</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1, remainder 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Bring down 1: 11 into 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Bring down 1: 11 into 11</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1, remainder 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Quotient</strong>
    </p>
    <div style="margin:6px 0 0 34px;">101</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e8eaf6;">Step 5: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">15 ÷ 3 = 5 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 101₂ (5)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 4: Another division</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate 11011₂ ÷ 11₂.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Same steps.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: 11 into 11</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 R 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Bring down 0</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Bring down 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8eaf6;">Step 4: Bring down 1: 11 into 11</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 R 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e8eaf6;">Step 5: Quotient</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1001 (27 ÷ 3 = 9) ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 1001₂ (9)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">3. Shifts and Hexadecimal Addition</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Operation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Before</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">After</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Decimal</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift left 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00000110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00001100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 → 12</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift left 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00000110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00011000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 → 24</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift right 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00000110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00000011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 → 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift right 1 (odd)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00000111</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00000011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 → 3 (1 lost)</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Shifting too far left pushes 1s out of the register — that is overflow. Shifting right loses the remainder.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 5: Hex addition</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Add 3A₁₆ + 2F₁₆.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Add each column in decimal; carry when the sum is 16 or more.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: Right column</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A + F = 10 + 15 = 25 = 16 + 9 → write 9, carry 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: Left column</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 + 2 + 1 = 6</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">58 + 47 = 105 = 6 × 16 + 9 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 69₁₆</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8eaf6;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> 110 × 10 =</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1100 (6 × 2 = 12)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> 1010 ÷ 10 =</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">101 (10 ÷ 2 = 5)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Shift 00010100 right 2 places.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">00000101 (20 ÷ 4 = 5)</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Multiplying</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Dividing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Shifting</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hex arithmetic</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Shifts in Code</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To show that left and right shifts multiply and divide by powers of 2.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with Python (or any language with shift operators)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator in Programmer mode (Lsh/Rsh buttons)</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet of numbers to shift</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Save your code in your own folder.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In Python, type: print(6 &lt;&lt; 1, 6 &lt;&lt; 2, 6 &gt;&gt; 1).</li>
    <li>Record the outputs and explain them.</li>
    <li>Try 7 &gt;&gt; 1 and 1 &lt;&lt; 10, and explain the results.</li>
    <li>Use the calculator’s Lsh and Rsh buttons in BYTE mode with 200 and note what happens to bits shifted out.</li>
    <li>Write a short program that prints 1 &lt;&lt; n for n = 0 to 10.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Output</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Explanation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 &lt;&lt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 &lt;&lt; 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 &gt;&gt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 &gt;&gt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 &lt;&lt; 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why does 7 &gt;&gt; 1 give 3, not 3.5?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">The bit shifted out (the remainder 1) is lost; shifts give whole numbers.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What does 1 &lt;&lt; 10 represent?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">2¹⁰ = 1 024, the number of bytes in a KB.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Shifting left by n multiplies by 2ⁿ; shifting right by n divides by 2ⁿ, dropping the remainder.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Each place in binary is worth twice the place to its right.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing &lt;&lt; with less-than.</li>
    <li>Forgetting that shifts drop bits.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Graphics and game engines use shifts for fast scaling.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Copy and complete: 13 &lt;&lt; 3 = ___, 200 &gt;&gt; 3 = ___. Explain using powers of 2. (104; 25)</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #7986cb;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Computer Studies in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Phone cameras scale images using multiplication and shifts.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Faster calculations use less battery power.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Encryption and AI chips perform billions of multiplications per second.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is 111 × 10?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Multiplying by 10₂ is a left shift.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1110 (7 × 2 = 14)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is 1100 ÷ 100?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Shift right 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11 (12 ÷ 4 = 3)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is 9 + 8 in hex?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 17 = 16 + 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">11₁₆</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Multiply 1011 × 11 and check in decimal.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Give your partner a number; they shift it left and right and state the decimal results.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a poster explaining shift-and-add multiplication.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Write a Python function that multiplies two numbers using only shifts and additions.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Calculate 1110 × 101.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1000110 (14 × 5 = 70)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Calculate 100100 ÷ 110.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">110 (36 ÷ 6 = 6)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Add 7C₁₆ + 1A₁₆.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">96₁₆ (124 + 26 = 150)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What happened to 200 when shifted left once in BYTE mode?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">400 does not fit in 8 bits; the MSB is lost, giving 144 (overflow).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does a right shift of a negative number need an arithmetic shift?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">A logical shift puts 0 in the MSB, making the number positive; an arithmetic shift copies the sign bit.</div>
    </details>
    </div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Binary multiplication writes shifted copies of the multiplicand for each 1 and adds them. Binary division uses long division with repeated subtraction. A left shift by n multiplies by 2ⁿ; a right shift divides by 2ⁿ and drops the remainder. Hex addition carries when a column reaches 16.</p>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Shift-and-add.</li>
    <li>Long division.</li>
    <li>Shifts.</li>
    <li>Hex addition.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>× 1 copies; × 0 is zero.</li>
    <li>Left = × 2; right = ÷ 2.</li>
    <li>Hex carries at 16.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Misaligning partial products.</li>
    <li>Forgetting lost bits.</li>
    <li>Carrying at 10 in hex.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check in decimal.</li>
    <li>Skip partial products for 0s.</li>
    <li>Write hex letters as numbers first.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #3949ab;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show partial products.</li>
    <li>State the number of bits for shifts.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing methods.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing a shift program.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using code and calculators.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8eaf6;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and innovation</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Shifts and multiplications power every photo filter and game.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate 10111 × 110 and 101101 ÷ 101.</li>
    <li>Add B7₁₆ + 4E₁₆.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which operation needs most practice?</li>
    <li>Where could I use shifts in programming?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Partial product</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shifted copy.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Logical shift</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fill with 0.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Arithmetic shift</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep sign.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Quotient</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Division result.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Remainder</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Left over.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can multiply binary.</p>
    <p style="margin:6px 0;">☐ I can divide binary.</p>
    <p style="margin:6px 0;">☐ I can use shifts.</p>
    <p style="margin:6px 0;">☐ I can add hex.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '101 × 11 =',
            options: ['1011', '1100', '1111', '111'],
            correct: 2,
            explanation: 'The answer is 1111. 5 × 3 = 15.'
        },
        {
            question: '1101 × 101 =',
            options: ['111001', '1000001', '1000011', '110101'],
            correct: 1,
            explanation: 'The answer is 1000001. 13 × 5 = 65.'
        },
        {
            question: '1111 ÷ 11 =',
            options: ['11', '101', '111', '1001'],
            correct: 1,
            explanation: 'The answer is 101. 15 ÷ 3 = 5.'
        },
        {
            question: '11011 ÷ 11 =',
            options: ['1011', '111', '1001', '101'],
            correct: 2,
            explanation: 'The answer is 1001. 27 ÷ 3 = 9.'
        },
        {
            question: 'Shifting 00000110 left by 1 gives:',
            options: ['00000011', '00001100', '00011000', '01100000'],
            correct: 1,
            explanation: 'The answer is 00001100. 6 × 2 = 12.'
        },
        {
            question: 'Shifting 00000110 right by 1 gives:',
            options: ['00000011', '00001100', '00000110', '00000001'],
            correct: 0,
            explanation: 'The answer is 00000011. 6 ÷ 2 = 3.'
        },
        {
            question: 'Shifting left by 3 places multiplies by:',
            options: ['8', '3', '6', '9'],
            correct: 0,
            explanation: 'The answer is 8. 2³ = 8.'
        },
        {
            question: 'Shifting 7 (0111) right by 1 gives 3 because:',
            options: ['Shifts round up', 'Overflow occurs', 'The remainder bit is lost', '7 is negative'],
            correct: 2,
            explanation: 'Shifts drop the bit pushed out.'
        },
        {
            question: '3A₁₆ + 2F₁₆ =',
            options: ['5F₁₆', '6A₁₆', '59₁₆', '69₁₆'],
            correct: 3,
            explanation: 'The answer is 69₁₆. 58 + 47 = 105 = 69₁₆.'
        },
        {
            question: 'An arithmetic right shift:',
            options: ['Keeps the sign bit', 'Fills with 1 always', 'Multiplies by 2', 'Adds 1'],
            correct: 0,
            explanation: 'Negative numbers stay negative.'
        }
    ]
},
{
    name: '1.2 Laboratory Activity: Building a Binary Calculator in a Spreadsheet',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🧪 Building a Binary Calculator in a Spreadsheet</h2>
    <p style="font-size:16px;">You will build a spreadsheet that adds, subtracts, multiplies and divides binary numbers, flags 8-bit overflow, and shows two’s complement — then test it against hand calculations and a programmer calculator.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#c5cae9;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrical</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep drinks away from computers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Posture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sit upright and rest eyes regularly.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Files</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Save to your own folder with a clear file name.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integrity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Build your own formulas; credit any help you used.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Spreadsheet Binary Calculator</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To build and test a spreadsheet that performs binary arithmetic and detects overflow.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with spreadsheet software (functions BIN2DEC, DEC2BIN, IF)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator in Programmer mode</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #3949ab;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Test sheet of 10 operations</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Save your work every 10 minutes.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In A2 and B2, enter two 8-bit binary numbers as text.</li>
    <li>In C2 and D2, convert them to decimal: =BIN2DEC(A2), =BIN2DEC(B2).</li>
    <li>In E2 to H2, calculate the sum, difference, product and quotient in decimal.</li>
    <li>In I2, show the sum in binary: =DEC2BIN(E2,8) (it shows an error if the sum is too large).</li>
    <li>In J2, flag unsigned overflow: =IF(E2>255,"OVERFLOW","OK").</li>
    <li>In K2, show the 8-bit two’s complement of B2: =DEC2BIN(256-D2,8).</li>
    <li>Test with the 10 operations and compare with hand and calculator answers.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">A</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">B</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sum (binary)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Overflow?</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Two’s complement of B</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Matches hand?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00011001</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00001100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">01101101</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">01011011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11110000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00100000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why does =DEC2BIN(256-D2,8) give the two’s complement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">In 8 bits, −B is stored as 256 − B.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What did the spreadsheet show for sums over 255?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">An error or OVERFLOW flag, because the result needs more than 8 bits.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A spreadsheet can model binary arithmetic and overflow, confirming hand methods.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> The spreadsheet converts to decimal, calculates and converts back, while the overflow test checks the range.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Typing binary as numbers so leading zeros disappear.</li>
    <li>Using the wrong number of places in DEC2BIN.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Engineers model circuits and data formats in spreadsheets before building them.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Extend the sheet to test signed overflow: flag when two inputs with MSB 0 give a sum with MSB 1. Record how many of your 10 tests overflow as unsigned and as signed.</p>
    <div style="background:#0b1a2e;border-left:4px solid #3949ab;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c5cae9;font-weight:bold;">✏️ Worked Example 6: Why 256 − B?</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Show that 256 − 12 gives the 8-bit two’s complement of 12.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert 244 to binary.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8eaf6;">Step 1: 256 − 12</strong>
    </p>
    <div style="margin:6px 0 0 34px;">244</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8eaf6;">Step 2: 244 in binary</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11110100</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#3949ab;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8eaf6;">Step 3: Compare</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Same as invert-and-add-1 of 00001100 ✓</div>
    </div>
    <div style="background:#12163a;border:1px solid #3949ab;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c5cae9;">✅ Model answer:</strong> 11110100</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write a formula that adds two binary numbers in A2 and B2 and shows the answer in binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">=DEC2BIN(BIN2DEC(A2)+BIN2DEC(B2))</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> How could you detect signed overflow?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">Check if both inputs have MSB 0 and the sum has MSB 1, or both 1 and the sum 0.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why does the spreadsheet use text for binary?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">To keep leading zeros.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why compare with hand calculations?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">To check the formulas are correct.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Name two functions you used.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">BIN2DEC and DEC2BIN (also IF).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📝 Write Your Laboratory Report</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Title and aim</li>
    <li>Apparatus and materials</li>
    <li>Procedure (past tense, passive voice)</li>
    <li>Observation table</li>
    <li>Results and calculations</li>
    <li>Discussion and sources of error</li>
    <li>Conclusion</li>
    <li>Safety measures you followed</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '=BIN2DEC("1010") returns:',
            options: ['10', '1010', '5', '2'],
            correct: 0,
            explanation: 'The answer is 10. 1010₂ = 10.'
        },
        {
            question: '=DEC2BIN(5,8) returns:',
            options: ['101', '5', '10100000', '00000101'],
            correct: 3,
            explanation: 'The answer is 00000101. Padded to 8 places.'
        },
        {
            question: '8-bit two’s complement of B equals:',
            options: ['255 + B', 'B − 256', '256 − B', '128 − B'],
            correct: 2,
            explanation: 'The answer is 256 − B. Modulo 2⁸.'
        },
        {
            question: 'Unsigned 8-bit overflow occurs when the sum is greater than:',
            options: ['127', '255', '256', '128'],
            correct: 1,
            explanation: 'The answer is 255. Largest 8-bit unsigned value.'
        },
        {
            question: 'Binary should be typed as text so that:',
            options: ['It runs faster', 'Leading zeros are kept', 'Colours show', 'It becomes decimal'],
            correct: 1,
            explanation: 'The answer is Leading zeros are kept. Numbers drop leading zeros.'
        }
    ]
},
{
    name: '1.2 Quiz: Binary Arithmetic Operations',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📝 Quiz — Binary Arithmetic Operations</h2>
    <p style="font-size:16px;">This quiz checks lessons 1.2.1–1.2.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Binary addition and overflow</li>
    <li>Subtraction by borrowing and two’s complement</li>
    <li>Multiplication and division</li>
    <li>Shifts</li>
    <li>Hexadecimal addition</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📊 CBC Performance Levels</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Score</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do next</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80% – 100%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excellent. Move on to the assignment.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60% – 79%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Good. Revise the few areas you missed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40% – 59%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study the revision page, then try again.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below 40%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the three lessons and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3949ab;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c5cae9;font-weight:bold;">📝 Exam Tip</p>
    <div>Pad numbers to the same length, show carries and borrows, and check every answer in decimal.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '10110 + 01101 =',
            options: ['11011', '100001', '100011', '11111'],
            correct: 2,
            explanation: 'The answer is 100011. 22 + 13 = 35.'
        },
        {
            question: '1111 + 1 =',
            options: ['1110', '10000', '11110', '10001'],
            correct: 1,
            explanation: 'The answer is 10000. 15 + 1 = 16.'
        },
        {
            question: '01111111 + 00000001 in 8-bit signed shows:',
            options: ['No change', 'Overflow', 'Zero', 'BCD error'],
            correct: 1,
            explanation: '127 + 1 = 128 is out of range.'
        },
        {
            question: '1000 − 0001 =',
            options: ['1001', '0110', '1111', '0111'],
            correct: 3,
            explanation: 'The answer is 0111. 8 − 1 = 7.'
        },
        {
            question: '−6 in 8-bit two’s complement is:',
            options: ['11111001', '10000110', '00000110', '11111010'],
            correct: 3,
            explanation: 'The answer is 11111010. Invert 00000110 and add 1.'
        },
        {
            question: '15 − 6 using 8-bit two’s complement gives:',
            options: ['11111001', '00001001', '00001111', '00000110'],
            correct: 1,
            explanation: 'The answer is 00001001. 9.'
        },
        {
            question: '6 − 15 using 8-bit two’s complement gives:',
            options: ['00001001', '11111001', '11110111', '10001001'],
            correct: 2,
            explanation: 'The answer is 11110111. −9.'
        },
        {
            question: 'In two’s complement subtraction you add:',
            options: ['The two’s complement of the subtrahend', 'The minuend twice', 'BCD codes', 'The ASCII codes'],
            correct: 0,
            explanation: 'The answer is The two’s complement of the subtrahend. A + (−B).'
        },
        {
            question: '110 × 11 =',
            options: ['10010', '1100', '1001', '11110'],
            correct: 0,
            explanation: 'The answer is 10010. 6 × 3 = 18.'
        },
        {
            question: '10010 ÷ 11 =',
            options: ['110', '101', '111', '11'],
            correct: 0,
            explanation: 'The answer is 110. 18 ÷ 3 = 6.'
        },
        {
            question: 'Shifting 00001010 left by 2 gives:',
            options: ['00101000', '00000010', '00010100', '10100000'],
            correct: 0,
            explanation: 'The answer is 00101000. 10 × 4 = 40.'
        },
        {
            question: 'Shifting 00101000 right by 3 gives:',
            options: ['00001010', '00010100', '00000101', '01000000'],
            correct: 2,
            explanation: 'The answer is 00000101. 40 ÷ 8 = 5.'
        },
        {
            question: 'A right shift by 1 of an odd number:',
            options: ['Rounds up', 'Doubles it', 'Causes overflow', 'Loses the remainder'],
            correct: 3,
            explanation: 'The answer is Loses the remainder. The LSB is shifted out.'
        },
        {
            question: '9₁₆ + 9₁₆ =',
            options: ['18₁₆', '1F₁₆', '12₁₆', '99₁₆'],
            correct: 2,
            explanation: 'The answer is 12₁₆. 18 = 16 + 2.'
        },
        {
            question: 'Computers subtract by adding because:',
            options: ['Subtraction is impossible', 'It uses less memory', 'It avoids binary', 'It reuses the adder circuit'],
            correct: 3,
            explanation: 'The answer is It reuses the adder circuit. Simpler hardware.'
        }
    ]
},
{
    name: '1.2 Assignment: Teach a Younger Learner Binary Arithmetic',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">📂 Teach a Younger Learner Binary Arithmetic</h2>
    <p style="font-size:16px;">In pairs, you will design a short illustrated tutorial (poster, slides or short video script) that teaches a Grade 9 learner to add, subtract and shift binary numbers, with worked examples and a mini-quiz.</p>
    <p style="margin:6px 0 0 0;color:#e8eaf6;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school computer club is running a “Binary Day” for junior learners. Your tutorial will be used at a learning station, so it must be clear, accurate and engaging.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose your format: poster, slide show or video script.</li>
    <li>Explain the addition rules with two worked examples, including carries.</li>
    <li>Explain two’s complement subtraction with one positive and one negative result.</li>
    <li>Explain left and right shifts using a diagram.</li>
    <li>Include a five-question mini-quiz with answers.</li>
    <li>Test your tutorial with a classmate and improve it based on feedback.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tutorial (poster, slides or script)</li>
    <li>Five-question mini-quiz with answers</li>
    <li>Feedback notes and improvements made</li>
    <li>Individual reflections</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📏 Assessment Rubric</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Criterion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Exceeds Expectations (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meets Expectations (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approaches Expectations (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Below Expectations (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All examples correct and checked in decimal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clarity for younger learners</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very clear steps and visuals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Confusing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mini-quiz</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Five good questions with correct answers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Four good questions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two or three questions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use of feedback</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear improvements made</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some improvements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Feedback noted only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No feedback</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use colour for carries and borrows.<br>Keep numbers small (4 bits).<br>Check every example in decimal.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did teaching help me understand better?</li>
    <li>Which part was hardest to explain?</li>
    <li>How did we use feedback?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A good first example for a younger learner is:',
            options: ['A 32-bit division', 'A 4-bit addition', 'Floating point', 'Unicode'],
            correct: 1,
            explanation: 'The answer is A 4-bit addition. Small numbers are easier.'
        },
        {
            question: 'When explaining 1 + 1, you should say:',
            options: ['0 carry 1', '2', '11', '1 carry 0'],
            correct: 0,
            explanation: 'The answer is 0 carry 1. This is the key binary rule.'
        },
        {
            question: 'A shift left by 1:',
            options: ['Halves the number', 'Doubles the number', 'Adds 1', 'Changes the sign'],
            correct: 1,
            explanation: 'Each place is worth twice the previous.'
        },
        {
            question: 'Testing your tutorial with a classmate helps to:',
            options: ['Make it longer', 'Avoid checking', 'Find unclear parts', 'Remove examples'],
            correct: 2,
            explanation: 'The answer is Find unclear parts. Feedback improves clarity.'
        },
        {
            question: 'Why check examples in decimal?',
            options: ['To use more paper', 'To avoid binary', 'It is not needed', 'To make sure they are correct'],
            correct: 3,
            explanation: 'Accuracy matters when teaching.'
        }
    ]
},
{
    name: '1.2 Revision: Binary Arithmetic Operations',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🔁 Revision — Binary Arithmetic Operations</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.2 before moving on to 1.3 Logic Gates.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">➕ Addition</p>
    <div>0+0=0, 0+1=1, 1+1=0 c1, 1+1+1=1 c1.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">⚠️ Overflow</p>
    <div>Result out of range; signed: same signs in, opposite sign out.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">➖ Borrowing</p>
    <div>0 − 1 = 1 borrow 1.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🔄 Two’s complement subtraction</p>
    <div>A + (−B), discard the final carry.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">✖️ Multiplication</p>
    <div>Shift-and-add partial products.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">➗ Division</p>
    <div>Long division by repeated subtraction.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">↔️ Shifts</p>
    <div>Left n = × 2ⁿ; right n = ÷ 2ⁿ (remainder lost).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #7986cb;">
    <p style="margin:0 0 4px 0;color:#c5cae9;font-weight:bold;">🔣 Hex addition</p>
    <div>Carry when a column reaches 16.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Operation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1011 + 0110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10001</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25 − 12 (8-bit)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">00001101</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Negative result</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 − 25 (8-bit)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11110011</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">101 × 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1111</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Division</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1111 ÷ 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">101</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 &lt;&lt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hex</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3A + 2F</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">69</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Add 11011 + 10110.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">110001 (27 + 22 = 49)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Calculate 50 − 20 in 8-bit two’s complement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">00110010 + 11101100 = 1 00011110 → 00011110 (30)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Calculate 1011 × 110.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">1000010 (11 × 6 = 66)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Calculate 110110 ÷ 1001.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">110 (54 ÷ 9 = 6)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Add A8₁₆ + 5C₁₆.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8eaf6;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8eaf6;">104₁₆ (168 + 92 = 260)</div>
    </details>
    </div>
    </div>
    <div style="background:#12163a;padding:20px;border-radius:12px;border:1px solid #3949ab;margin-bottom:20px;">
    <h3 style="color:#c5cae9;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can add and detect overflow.</p>
    <p style="margin:6px 0;">☐ I can subtract both ways.</p>
    <p style="margin:6px 0;">☐ I can multiply and divide.</p>
    <p style="margin:6px 0;">☐ I can shift and add hex.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '11 + 11 in binary =',
            options: ['22', '110', '101', '111'],
            correct: 1,
            explanation: 'The answer is 110. 3 + 3 = 6.'
        },
        {
            question: 'Signed overflow when adding two negatives gives:',
            options: ['A negative result', 'A positive result', 'Zero', 'An error message always'],
            correct: 1,
            explanation: 'The answer is A positive result. Opposite sign shows overflow.'
        },
        {
            question: '10 − 1 in binary =',
            options: ['11', '0', '1', '10'],
            correct: 2,
            explanation: 'The answer is 1. 2 − 1 = 1.'
        },
        {
            question: 'Two’s complement subtraction discards:',
            options: ['The sign bit', 'The LSB', 'The minuend', 'The final carry'],
            correct: 3,
            explanation: 'The answer is The final carry. It is outside the word.'
        },
        {
            question: '111 × 111 =',
            options: ['110001', '1110', '111111', '100011'],
            correct: 0,
            explanation: 'The answer is 110001. 7 × 7 = 49.'
        },
        {
            question: '100000 ÷ 100 =',
            options: ['1000', '100', '10', '10000'],
            correct: 0,
            explanation: 'The answer is 1000. 32 ÷ 4 = 8.'
        },
        {
            question: 'Shifting right by 2 divides by:',
            options: ['2', '8', '16', '4'],
            correct: 3,
            explanation: 'The answer is 4. 2² = 4.'
        },
        {
            question: 'F₁₆ + 1₁₆ =',
            options: ['G₁₆', '16₁₆', '10₁₆', 'F1₁₆'],
            correct: 2,
            explanation: 'The answer is 10₁₆. 15 + 1 = 16 = 10₁₆.'
        }
    ]
},
{
    name: '1.2 Summary: Binary Arithmetic Operations',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1a237e, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #7986cb;">
    <p style="margin:0;color:#e8eaf6;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundations of Computer Studies · Sub-strand 1.2 Binary Arithmetic Operations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#12163a;border:1px solid #7986cb;color:#e8eaf6;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e8eaf6;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e8eaf6;margin:8px 0 10px 0;">🧾 Summary — Binary Arithmetic Operations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> A computer performs all arithmetic with a few simple binary rules: addition with carries, subtraction by adding two’s complements, multiplication by shifting and adding, and division by repeated subtraction — always limited by the number of bits available.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Binary addition has four rules and carries at 2.</li>
    <li>Overflow occurs when a result needs more bits than are available.</li>
    <li>Subtraction can use borrowing or two’s complement addition with the carry discarded.</li>
    <li>Negative results have MSB 1 in two’s complement.</li>
    <li>Multiplication uses shifted partial products; division uses long division.</li>
    <li>Shifting left multiplies and shifting right divides by powers of 2.</li>
    <li>Hexadecimal addition carries at 16.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Addition and overflow</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rules, carries, overflow</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same signs in, opposite out</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Borrowing, two’s complement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discard the carry</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Multiply, divide, shift</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift-and-add, long division, shifts, hex</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Left = × 2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spreadsheet calculator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two’s complement = 256 − B</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c5cae9;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">carry</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">overflow</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ALU</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">borrow</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">minuend</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">subtrahend</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">partial product</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">logical shift</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">arithmetic shift</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">quotient</span><span style="background:#0b1a2e;border:1px solid #e8eaf6;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">remainder</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From till totals to game physics, every calculation in a computer uses these operations.</div>
    </div>
    <div style="background:#12163a;border-left:4px solid #7986cb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8eaf6;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Logic Gates shows the circuits that carry out these operations.</div>
    </div>
    <div style="background:#1a1f4d;padding:20px;border-radius:12px;border:1px solid #7986cb;margin-bottom:20px;">
    <h3 style="color:#e8eaf6;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ add binary numbers and detect overflow</p>
    <p style="margin:6px 0;">✔️ subtract by borrowing and by two’s complement</p>
    <p style="margin:6px 0;">✔️ multiply and divide binary numbers</p>
    <p style="margin:6px 0;">✔️ use shifts</p>
    <p style="margin:6px 0;">✔️ add hexadecimal numbers</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is that:',
            options: ['All arithmetic uses simple binary rules limited by bit size', 'Computers use decimal inside', 'Only addition is possible', 'Overflow never happens'],
            correct: 0,
            explanation: 'The answer is All arithmetic uses simple binary rules limited by bit size. A few rules do everything.'
        },
        {
            question: 'Which lesson covered shifts?',
            options: ['1.2.3', '1.2.1', '1.2.2', '1.1.3'],
            correct: 0,
            explanation: 'The answer is 1.2.3. Shifts were in 1.2.3.'
        },
        {
            question: 'Which lesson covered overflow?',
            options: ['1.2.2', '1.2.3', '1.2.1', '1.1.1'],
            correct: 2,
            explanation: 'The answer is 1.2.1. Addition and overflow.'
        },
        {
            question: 'What comes next?',
            options: ['1.1 Data Representation', '1.3 Logic Gates', '2.2 Network Security', '3.4 SQL'],
            correct: 1,
            explanation: 'Gates carry out the arithmetic.'
        },
        {
            question: '1 shifted left by 3 places equals:',
            options: ['3', '4', '8', '13'],
            correct: 2,
            explanation: 'The answer is 8. 2³ = 8.'
        }
    ]
}
],
          stats:{lessons:19,exercises:116,quizzes:20,projects:2,duration:'13 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'How many bits are in one byte?',
                  options: ['4', '16', '8', '1 024'],
                  correct: 2,
                  explanation: 'A byte is a group of eight bits; four bits make a nibble.'
              },
              {
                  question: 'The binary fraction 0.101₂ equals:',
                  options: ['0.5₁₀', '0.625₁₀', '0.101₁₀', '5₁₀'],
                  correct: 1,
                  explanation: 'The place values after the point are ½, ¼ and ⅛: 0.5 + 0.125 = 0.625.'
              },
              {
                  question: 'In 8-bit two’s complement, −5 is written as:',
                  options: ['11111011', '10000101', '11111010', '00000101'],
                  correct: 0,
                  explanation: 'Write +5 as 00000101, invert to 11111010, then add 1 to get 11111011.'
              },
              {
                  question: 'The range of an 8-bit two’s complement integer is:',
                  options: ['−128 to +127', '0 to 255', '−127 to +127', '−256 to +255'],
                  correct: 0,
                  explanation: 'With n bits the range is −2ⁿ⁻¹ to 2ⁿ⁻¹ − 1, so −128 to 127 for 8 bits.'
              },
              {
                  question: 'In BCD, the decimal number 59 is:',
                  options: ['00111011', '0101 1001', '1011 1001', '0101 0101'],
                  correct: 1,
                  explanation: 'Each decimal digit gets its own 4-bit code: 5 = 0101 and 9 = 1001.'
              },
              {
                  question: 'The ASCII code of capital A is:',
                  options: ['97', '48', '32', '65'],
                  correct: 3,
                  explanation: 'Capital letters start at 65; lower-case a is 97 and the digit 0 is 48.'
              },
              {
                  question: 'An 800 × 600 image with 24-bit colour needs about:',
                  options: ['480 KB', '1.44 MB (1 440 000 bytes) uncompressed', '24 MB', '600 bytes'],
                  correct: 1,
                  explanation: '800 × 600 × 24 = 11 520 000 bits ÷ 8 = 1 440 000 bytes.'
              },
              {
                  question: '1011₂ + 0110₂ =',
                  options: ['1101₂', '11111₂', '10101₂', '10001₂'],
                  correct: 3,
                  explanation: '11 + 6 = 17, which is 10001 in binary.'
              },
              {
                  question: 'Adding two positive 8-bit two’s complement numbers gives a negative result. This is:',
                  options: ['Underflow of memory', 'A carry into a new byte that is always correct', 'Overflow', 'Normal'],
                  correct: 2,
                  explanation: 'If two numbers of the same sign give a result of the opposite sign, overflow has occurred.'
              },
              {
                  question: 'Using 8-bit two’s complement, 25 − 12 is worked out as:',
                  options: ['00011001 − 00001100 with no rules', '11100111 + 00001100', '00011001 + 00001100', '00011001 + 11110100, discarding the final carry'],
                  correct: 3,
                  explanation: 'Subtracting is the same as adding the two’s complement of 12 (11110100); the carry out of the eighth bit is ignored.'
              },
              {
                  question: '101₂ × 11₂ =',
                  options: ['1111₂', '1001₂', '1110₂', '10101₂'],
                  correct: 0,
                  explanation: '5 × 3 = 15, which is 1111 in binary.'
              },
              {
                  question: 'Shifting 00000110₂ one place to the left gives:',
                  options: ['00000011₂', '00000110₂', '00001100₂ (multiplies by 2)', '11111001₂'],
                  correct: 2,
                  explanation: 'Each left shift doubles an unsigned binary number: 6 becomes 12.'
              }
          ]}
);