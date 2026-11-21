// Eschool course: Grade 11 ICT (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'ict-grade-11', name:'Grade 11 ICT', code:'ICT 111', level:'grade-11', iconStyle:'fas', icon:'fa-laptop', color:'#00695c',
          category:'Sciences',
          description:'Analyse the impact of ICT on individuals, organisations and society — benefits, risks, the digital divide, e-waste and ethics — and become a responsible digital citizen: privacy, digital footprints, online safety, cyberbullying, information quality, intellectual property and digital etiquette.',
          longDescription:'This Grade 11 Information and Communication Technology (ICT) course builds on Grade 10 ICT and follows the Senior School Grade 11 sequence: ICT and Society (impact of ICT on society, digital citizenship), Productivity Tools (spreadsheets and database management systems) and Internet and Web Technologies (how the web works, HTML and CSS). Each strand opens with an overview, its learning outcomes and an introduction, and every sub-strand has three lessons, a computer laboratory activity, a quiz, an assignment, a revision page and a summary. Lessons include teacher explanations, background, vocabulary, labelled diagrams, worked examples and case studies, safety notes, practical activities, real-life Kenyan applications, guided and independent practice, and practice questions. Batch 1 covers Impact of ICT on Society and Digital Citizenship.',
          modules:[
{
    name: '1.0 ICT and Society — Strand Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🗺️ Strand 1.0: ICT and Society (Grade 11)</h2>
    <p style="font-size:16px;">Welcome to Grade 11 ICT. In Grade 10 you learnt what ICT is, how it is applied in different sectors and how an operating system manages a computer. In Grade 11 you will go deeper: not only <em>where</em> ICT is used, but <em>what difference it makes</em> — to individuals, organisations, communities and the environment — and how to judge whether that difference is good or harmful.</p>
    <p style="font-size:16px;">You will also learn to be a responsible <strong>digital citizen</strong>: protecting your privacy and accounts, managing your digital footprint, responding to cyberbullying, checking information before you share it, respecting other people’s work, and behaving respectfully online.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e0f7fa;">❓ Big question for this strand:</strong> How does ICT change society, and how should individuals use it responsibly?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>Grade 11 ICT has three strands. Strand 1.0 looks at ICT and society; Strand 2.0 builds skills with spreadsheets and databases; Strand 3.0 explains how the web works and introduces HTML and CSS.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Big question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">You will be able to…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Impact of ICT on Society</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What difference does ICT make, and for whom?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyse the benefits, risks and costs of ICT for individuals, organisations and communities, including the digital divide, e-waste and ethical issues.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Digital Citizenship</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How should I behave in a digital world?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explain the dimensions of digital citizenship and practise privacy, safety, information checking, respect for intellectual property and digital etiquette.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Strand Map</h3>
    <p>The whole course has three strands. Each sub-strand has three lessons, a computer laboratory activity, a quiz, an assignment, a revision page and a summary. This first batch covers 1.1 and 1.2, which make up Strand 1.0.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0;color:#b2ebf2;font-weight:bold;">1.1 Impact of ICT on Society <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Weighing the Change</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 ICT and society: analysing impacts</li>
    <li>1.1.2 Positive impacts on individuals, organisations, education, health and the economy</li>
    <li>1.1.3 Negative impacts, the digital divide, e-waste and ethical issues</li>
    <li>💻 Laboratory activity: impact analysis of an online school portal</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0;color:#b2ebf2;font-weight:bold;">1.2 Digital Citizenship <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Responsible and Safe Online</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Meaning, importance and dimensions of digital citizenship</li>
    <li>1.2.2 Privacy, digital footprints, online safety and cyberbullying</li>
    <li>1.2.3 Information quality, intellectual property, digital etiquette and ethical decisions</li>
    <li>💻 Laboratory activity: verify, cite and secure</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0;color:#b2ebf2;font-weight:bold;">2.1–2.2 Spreadsheets; Database Management Systems <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Strand 2.0 Productivity Tools</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0;color:#b2ebf2;font-weight:bold;">3.0 Web technology, HTML and CSS <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Strand 3.0 Internet and Web Technologies</span>
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
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analysing benefits, risks and safeguards of ICT.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Securing accounts, checking sources and citing correctly.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Citizenship</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responsible and respectful online behaviour.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Case-study discussions and group reports.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making informed decisions online.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social justice</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Peace</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 PCIs</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Online safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Privacy and data protection</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care (e-waste)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Self-esteem</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Strand</p>
    <div>Work through the modules in order. Many lessons use case studies — read them carefully, identify who is affected and how, and support your conclusions with evidence. Always follow laboratory rules and use only approved accounts and websites.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which sub-strand covers digital footprints?',
            options: ['1.1 Impact of ICT on Society', '2.1 Spreadsheets', '3.0 Web Technologies', '1.2 Digital Citizenship'],
            correct: 3,
            explanation: 'The answer is 1.2 Digital Citizenship. Responsible online behaviour.'
        },
        {
            question: 'Which sub-strand covers e-waste and the digital divide?',
            options: ['1.1 Impact of ICT on Society', '1.2 Digital Citizenship', '2.2 DBMS', '3.0 HTML'],
            correct: 0,
            explanation: 'The answer is 1.1 Impact of ICT on Society. Negative impacts.'
        },
        {
            question: 'Spreadsheets and databases belong to:',
            options: ['Strand 1.0', 'Strand 2.0 Productivity Tools', 'Strand 3.0', 'None'],
            correct: 1,
            explanation: 'The answer is Strand 2.0 Productivity Tools. Productivity.'
        },
        {
            question: 'Grade 11 builds on Grade 10 by asking:',
            options: ['How to type faster only', 'What difference ICT makes and for whom', 'How to repair engines', 'How to draw maps'],
            correct: 1,
            explanation: 'The answer is What difference ICT makes and for whom. Impact analysis.'
        },
        {
            question: 'When analysing a case study you should:',
            options: ['Support conclusions with evidence', 'Guess', 'Ignore affected groups', 'Copy another group'],
            correct: 0,
            explanation: 'The answer is Support conclusions with evidence. Evidence-based reasoning.'
        }
    ]
},
{
    name: '1.0 ICT and Society — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🎯 Learning Outcomes for Strand 1.0 (Grade 11)</h2>
    <p style="font-size:16px;">These are the outcomes you should achieve in this strand. Come back after each sub-strand and tick what you can now do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌟 General Learning Outcomes for the Strand</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use ICT knowledge and skills responsibly in daily life.</li>
    <li>Evaluate the effects of ICT on individuals, organisations and society.</li>
    <li>Practise safe, ethical and legal use of digital technologies.</li>
    <li>Communicate respectfully and constructively online.</li>
    <li>Appreciate the role of ICT in national development.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0;color:#b2ebf2;font-weight:bold;">1.1 Impact of ICT on Society</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how ICT changes routines, relationships, institutions and access to information.</li>
    <li>Analyse the benefits, risks, costs and affected groups of an ICT system.</li>
    <li>Describe positive impacts of ICT on individuals, organisations, education, health and the economy.</li>
    <li>Explain negative impacts of ICT, including cybercrime, privacy loss, misinformation, the digital divide and e-waste.</li>
    <li>Discuss ethical considerations in choosing and evaluating ICT systems.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>What difference does ICT make, and for whom?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0;color:#b2ebf2;font-weight:bold;">1.2 Digital Citizenship</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning, importance and dimensions of digital citizenship.</li>
    <li>Protect personal information and manage digital footprints.</li>
    <li>Respond appropriately to cyberbullying and harmful online behaviour.</li>
    <li>Evaluate the credibility of online information before sharing it.</li>
    <li>Respect intellectual property and practise digital etiquette.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How should I behave responsibly in a digital world?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your teacher (and this course) will use the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Strand 1.0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyses impacts in depth, considering all affected groups and safeguards, and consistently applies responsible digital citizenship with clear justification.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyses benefits and risks accurately and applies responsible digital citizenship practices.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifies some benefits and risks; applies some responsible practices with help.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifies few impacts and seldom applies responsible practices, even with support.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>ICT is assessed through written tests, case-study analyses, practical computer tasks, projects, oral presentations, observation of responsible behaviour and portfolios.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Considering all affected groups and safeguards shows:',
            options: ['Below Expectations', 'Approaches Expectations', 'No level', 'Exceeds Expectations'],
            correct: 3,
            explanation: 'The answer is Exceeds Expectations. Depth.'
        },
        {
            question: 'Evaluating credibility of online information is an outcome of:',
            options: ['1.2 Digital Citizenship', '1.1 Impact of ICT', '2.1 Spreadsheets', '3.0 Web'],
            correct: 0,
            explanation: 'The answer is 1.2 Digital Citizenship. Information quality.'
        },
        {
            question: 'Discussing ethical considerations in choosing ICT systems is part of:',
            options: ['1.1 Impact of ICT on Society', '1.2 Digital Citizenship', '2.2 DBMS', '3.0 CSS'],
            correct: 0,
            explanation: 'The answer is 1.1 Impact of ICT on Society. Impact.'
        },
        {
            question: 'Which is a general outcome of this strand?',
            options: ['Grow crops', 'Practise safe, ethical and legal use of digital technologies', 'Repair engines', 'Draw maps'],
            correct: 1,
            explanation: 'The answer is Practise safe, ethical and legal use of digital technologies. Responsible use.'
        },
        {
            question: 'Observation of responsible behaviour is a form of:',
            options: ['Hacking', 'Spamming', 'Assessment', 'Coding'],
            correct: 2,
            explanation: 'The answer is Assessment. Values assessment.'
        }
    ]
},
{
    name: '1.0 ICT and Society — Introduction',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🚪 Introduction: Every Click Has Consequences</h2>
    <p style="font-size:16px;">A school launches an online portal so parents can see results and pay fees from their phones. Many parents are delighted. But some have no smartphone, some live where the network is poor, and one family receives a fake “payment confirmation” message that tricks them out of money. Was the portal a success?</p>
    <p style="font-size:16px;">Questions like this are at the heart of this strand. ICT brings real benefits, but also costs and risks — and they do not fall equally on everyone. Being an informed and responsible digital citizen means seeing both sides and acting wisely.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔑 Key Vocabulary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Impact</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The effect of something on people or the environment</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stakeholder</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anyone affected by a decision or system</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safeguard</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A measure that reduces a risk</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital citizen</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A person who uses technology responsibly</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital footprint</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The trail of data left by online activity</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">⚖️ Five Questions for Any ICT System</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What problem does it solve?</li>
    <li>Who benefits and how?</li>
    <li>Who could be harmed or left out?</li>
    <li>What does it cost (money, energy, privacy)?</li>
    <li>What safeguards reduce the risks?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Tools You Will Use</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tool</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Web browser</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching and fact-checking</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spreadsheet</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building impact matrices</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Word processor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing reports and citations</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Account settings pages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reviewing privacy and security</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🥽 Safety and Ethics</h3>
    <p>Use only school-approved accounts and sites. Never share passwords or personal details. When discussing case studies, focus on actions and systems, not on real named individuals. Respect classmates’ views and privacy.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Keep an ICT notebook with sections for key terms, impact analyses, case studies and a personal “digital citizenship checklist” that you update after each lesson.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Anyone affected by an ICT system is a:',
            options: ['Stakeholder', 'Server', 'Router', 'Browser'],
            correct: 0,
            explanation: 'The answer is Stakeholder. Affected party.'
        },
        {
            question: 'A measure that reduces a risk is a:',
            options: ['Footprint', 'Download', 'Safeguard', 'Pixel'],
            correct: 2,
            explanation: 'The answer is Safeguard. Protection.'
        },
        {
            question: 'The trail of data from your online activity is your:',
            options: ['Digital footprint', 'Bandwidth', 'Operating system', 'Firewall'],
            correct: 0,
            explanation: 'The answer is Digital footprint. Lasting record.'
        },
        {
            question: 'When discussing case studies, focus on:',
            options: ['Naming and shaming real people', 'Actions and systems', 'Rumours', 'Gossip'],
            correct: 1,
            explanation: 'The answer is Actions and systems. Respect.'
        },
        {
            question: 'A good first question about any ICT system is:',
            options: ['What colour is it?', 'Who made the logo?', 'How heavy is it?', 'What problem does it solve?'],
            correct: 3,
            explanation: 'The answer is What problem does it solve?. Purpose.'
        }
    ]
},
{
    name: '1.1.1 Impact of ICT on Society: ICT and Society — Analysing Impacts',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📘 Lesson 1.1.1: ICT and Society — Analysing Impacts</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will revise the components and applications of ICT, explore how ICT changes routines, relationships, institutions, opportunities and access to information, and learn a six-step method for analysing the impact of any ICT system.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every new app or system is introduced to solve a problem, but it also creates new effects — some planned, some not. A clear method helps you judge ICT fairly instead of only praising or only criticising it.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 School portals</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏦 Mobile banking</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Hospital systems</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Online government services</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Online shops</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Social media</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e0f7fa;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how ICT changes routines, relationships, institutions and access to information.</li>
    <li>Analyse the benefits, risks, costs and affected groups of an ICT system.</li>
    <li>Describe positive impacts of ICT on individuals, organisations, education, health and the economy.</li>
    <li>Explain negative impacts of ICT, including cybercrime, privacy loss, misinformation, the digital divide and e-waste.</li>
    <li>Discuss ethical considerations in choosing and evaluating ICT systems.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e0f7fa;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how ICT changes society.</li>
    <li>Identify stakeholders affected by an ICT system.</li>
    <li>Use the six-step impact analysis.</li>
    <li>Recognise unintended consequences.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">❓ Key inquiry question:</strong> What difference does ICT make, and for whom?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">🧰 What you already know:</strong> Grade 10 ICT: introduction to ICT, application areas and operating systems.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>ICT is not only a set of tools; it changes the way people live and work. It changes <strong>routines</strong> (paying bills on the phone instead of queuing), <strong>relationships</strong> (keeping in touch with relatives abroad), <strong>institutions</strong> (schools and hospitals keeping digital records), <strong>opportunities</strong> (online work and businesses) and <strong>access to information</strong> (searching for answers instantly). To judge whether a change is good, we analyse its <strong>impact</strong>.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 660 230" width="660" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="10" y="30" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="110" y="61" fill="#fde68a" font-size="13" text-anchor="middle">1. Purpose</text><text x="110" y="81" fill="#e0f7fa" font-size="11" text-anchor="middle">What problem?</text><line x1="212" y1="65" x2="226" y2="65" stroke="#fde68a" stroke-width="2.5"/><polygon points="226,65 217.7,68.5 217.7,61.5" fill="#fde68a"/><rect x="228" y="30" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="328" y="61" fill="#fde68a" font-size="13" text-anchor="middle">2. Benefits</text><text x="328" y="81" fill="#e0f7fa" font-size="11" text-anchor="middle">Who gains?</text><line x1="430" y1="65" x2="444" y2="65" stroke="#fde68a" stroke-width="2.5"/><polygon points="444,65 435.7,68.5 435.7,61.5" fill="#fde68a"/><rect x="446" y="30" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="546" y="61" fill="#fde68a" font-size="13" text-anchor="middle">3. Risks</text><text x="546" y="81" fill="#e0f7fa" font-size="11" text-anchor="middle">What could go wrong?</text><rect x="10" y="126" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="110" y="157" fill="#fde68a" font-size="13" text-anchor="middle">4. Costs</text><text x="110" y="177" fill="#e0f7fa" font-size="11" text-anchor="middle">Money, energy, data</text><line x1="212" y1="161" x2="226" y2="161" stroke="#fde68a" stroke-width="2.5"/><polygon points="226,161 217.7,164.5 217.7,157.5" fill="#fde68a"/><rect x="228" y="126" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="328" y="157" fill="#fde68a" font-size="13" text-anchor="middle">5. Affected</text><text x="328" y="177" fill="#e0f7fa" font-size="11" text-anchor="middle">Who is left out?</text><line x1="430" y1="161" x2="444" y2="161" stroke="#fde68a" stroke-width="2.5"/><polygon points="444,161 435.7,164.5 435.7,157.5" fill="#fde68a"/><rect x="446" y="126" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="546" y="157" fill="#fde68a" font-size="13" text-anchor="middle">6. Safeguards</text><text x="546" y="177" fill="#e0f7fa" font-size="11" text-anchor="middle">How to reduce harm</text><path d="M545,102 L545,114 L110,114 L110,124" fill="none" stroke="#fde68a" stroke-width="2.5"/><polygon points="110,128 105,118 115,118" fill="#fde68a"/><text x="330" y="18" fill="#b2ebf2" font-size="12" text-anchor="middle">Six-step impact analysis</text><text x="330" y="222" fill="#b2ebf2" font-size="11" text-anchor="middle">Also ask: are there unintended consequences?</text>
    </svg>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Look at the whole picture: purpose, benefits, risks, costs, who is affected and how to reduce harm.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 Technical Background</h3>
    <p>A <strong>stakeholder</strong> is anyone affected by a system — users, staff, customers, families, the community and even future generations. Impacts may be <strong>positive</strong> or <strong>negative</strong>, <strong>direct</strong> (a parent pays fees faster) or <strong>indirect</strong> (fewer people visit the bursar’s office), <strong>short-term</strong> or <strong>long-term</strong>, and <strong>intended</strong> or <strong>unintended</strong>. An <strong>unintended consequence</strong> is an effect nobody planned — for example, a homework app that increases late-night screen time. <strong>Safeguards</strong> are measures that reduce risks, such as training, strong passwords, alternative offline options and clear policies.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Impact</strong>
    </p>
    <p style="margin:6px 0;">The effect of something on people or the environment.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Stakeholder</strong>
    </p>
    <p style="margin:6px 0;">Anyone affected by a system or decision.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Parents</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Unintended consequence</strong>
    </p>
    <p style="margin:6px 0;">An effect that was not planned.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Safeguard</strong>
    </p>
    <p style="margin:6px 0;">A measure that reduces risk or harm.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Training</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital society</strong>
    </p>
    <p style="margin:6px 0;">A society in which ICT is part of most activities.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Trade-off</strong>
    </p>
    <p style="margin:6px 0;">Gaining one benefit by accepting a cost.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Convenience vs privacy</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">1. How ICT Changes Society</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 330" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><circle cx="280" cy="150" r="130" fill="#00695c" opacity="0.55" stroke="#4dd0e1" stroke-width="1.5"/><circle cx="280" cy="150" r="100" fill="#00838f" opacity="0.55" stroke="#4dd0e1" stroke-width="1.5"/><circle cx="280" cy="150" r="70" fill="#0097a7" opacity="0.55" stroke="#4dd0e1" stroke-width="1.5"/><circle cx="280" cy="150" r="40" fill="#00acc1" opacity="0.55" stroke="#4dd0e1" stroke-width="1.5"/><text x="280" y="155" fill="#fde68a" font-size="12" text-anchor="middle">Individuals</text><text x="280" y="98" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Organisations</text><text x="280" y="68" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Communities</text><text x="280" y="38" fill="#e0f7fa" font-size="11" text-anchor="middle">Society and environment</text><text x="280" y="302" fill="#b2ebf2" font-size="11" text-anchor="middle">Impacts ripple outward: a change for one person</text><text x="280" y="320" fill="#b2ebf2" font-size="11" text-anchor="middle">can affect organisations, communities and the planet.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area of change</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Before ICT</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">With ICT</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Routines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Queuing to pay bills</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Paying by phone at any time</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relationships</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Letters taking weeks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Instant messages and video calls</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Institutions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Paper files and registers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital records and portals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Opportunities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jobs mainly local</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Online work and selling to distant customers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Access to information</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Libraries and newspapers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Search engines and online courses</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">2. Applying the Six-Step Analysis</h3>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 1: Case study: a bus booking app</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A bus company introduces an app for booking seats. Analyse its impact.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Work through the six steps.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Purpose</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Reduce queues and overbooking.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Benefits</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Travellers book from home; the company tracks demand.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Risks</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Fake booking messages; system downtime.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e0f7fa;">Step 4: Costs</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Development, data bundles for users, staff training.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e0f7fa;">Step 5: Affected / left out</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Travellers without smartphones; booking clerks whose work changes.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">6</span><strong style="color:#e0f7fa;">Step 6: Safeguards</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Keep an office counter and USSD option; verify payments in-app; retrain clerks.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> Mostly positive if safeguards protect those without smartphones and prevent fraud.</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Do not judge an ICT system only by its intended purpose. Ask who is left out and what unintended effects might occur.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e0f7fa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is a stakeholder?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Anyone affected by a system or decision.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Give an example of an unintended consequence of ICT.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Increased screen time or distraction (also job changes).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is a safeguard?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">A measure that reduces risk or harm.</div>
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
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analysis</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Case-study reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Discussion</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Building an Impact Matrix in a Spreadsheet</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To analyse the impact of an ICT system using a spreadsheet matrix.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet program</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Case study: school fees payment by mobile money</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sit correctly; save your work regularly.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Create columns: Stakeholder, Benefit, Risk, Cost, Safeguard.</li>
    <li>List at least five stakeholders (parents, learners, bursar, head teacher, bank).</li>
    <li>Fill in each row for the fees-payment case study.</li>
    <li>Use a column “Overall effect” with values +1, 0 or −1 and total it with SUM.</li>
    <li>Use conditional formatting to colour positive and negative rows.</li>
    <li>Write a two-sentence conclusion below the table.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stakeholder</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Benefit</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Risk</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Safeguard</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parents</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bursar</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learners</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which stakeholder benefits most?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Often parents (convenience) or the bursar (accurate records).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why include a safeguard for every risk?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">So that the analysis leads to practical improvements.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> An impact matrix shows clearly who gains, who faces risks and what can be done.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> Organising impacts by stakeholder prevents important groups from being overlooked.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Listing only benefits.</li>
    <li>Forgetting indirect stakeholders.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Organisations carry out impact assessments before introducing new systems.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Analysis and Reasoning</h3>
    <p>Write a paragraph explaining one trade-off between convenience and privacy in a mobile app you use.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #4dd0e1;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 ICT in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Families weigh convenience and cost when choosing digital services.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Impact analysis should include energy use and e-waste.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Systems analysts, project managers and policy makers carry out ICT impact assessments.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Name two stakeholders of a hospital records system.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Who is affected?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Patients and doctors (also nurses, records staff).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Is faster fee payment a direct or indirect impact?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Immediate effect.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Direct.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Give one safeguard for people without smartphones.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Inclusion.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">An offline or USSD alternative.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Choose an app you use and list its benefits and risks.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Discuss how ICT has changed your family’s routines.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Carry out a six-step analysis of a school system.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Build an impact matrix in a spreadsheet.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain five ways ICT changes society.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Routines, relationships, institutions, opportunities, access to information — with examples.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe the six steps of impact analysis.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Purpose, benefits, risks, costs, affected groups, safeguards.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Distinguish between intended and unintended consequences with examples.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Intended: faster payments; unintended: increased fraud or screen time.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why use conditional formatting in the matrix?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To make positive and negative effects easy to see.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why might one group gain while another loses from the same system?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Benefits and costs fall differently depending on access, skills and roles.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🧠 Lesson Summary</h3>
    <p>ICT changes routines, relationships, institutions, opportunities and access to information. Impacts can be positive or negative, direct or indirect, short- or long-term, intended or unintended. A six-step analysis — purpose, benefits, risks, costs, affected groups and safeguards — helps judge an ICT system fairly and suggest improvements.</p>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How ICT changes society.</li>
    <li>Types of impact.</li>
    <li>Stakeholders.</li>
    <li>Six-step analysis.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Purpose → benefits → risks → costs → affected → safeguards.</li>
    <li>Look for unintended consequences.</li>
    <li>Every risk needs a safeguard.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Only praising or only criticising ICT.</li>
    <li>Forgetting people who are left out.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use a matrix.</li>
    <li>Name specific stakeholders.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #00838f;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the six steps as headings.</li>
    <li>Give balanced conclusions.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Impact analysis.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spreadsheet matrix.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group discussion.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social justice</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-cohesion</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Online safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Good impact analysis helps schools and businesses introduce ICT fairly.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Carry out a six-step analysis of mobile money.</li>
    <li>Explain three unintended consequences of social media.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Has ICT changed my routines for better or worse?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Impact</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Effect.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Stakeholder</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Affected party.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Safeguard</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Risk reducer.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Trade-off</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gain with a cost.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain how ICT changes society.</p>
    <p style="margin:6px 0;">☐ I can carry out an impact analysis.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Anyone affected by an ICT system is a:',
            options: ['Stakeholder', 'Server', 'Router', 'Footprint'],
            correct: 0,
            explanation: 'The answer is Stakeholder. Affected party.'
        },
        {
            question: 'An effect that nobody planned is:',
            options: ['The purpose', 'An unintended consequence', 'A safeguard', 'A trade-off'],
            correct: 1,
            explanation: 'The answer is An unintended consequence. Unplanned.'
        },
        {
            question: 'The first step of impact analysis asks about the:',
            options: ['Safeguards', 'Purpose', 'Costs', 'Logo'],
            correct: 1,
            explanation: 'The answer is Purpose. What problem?'
        },
        {
            question: 'Paying bills by phone instead of queuing is a change in:',
            options: ['Routines', 'Relationships', 'Hardware', 'Bandwidth'],
            correct: 0,
            explanation: 'The answer is Routines. Daily habits.'
        },
        {
            question: 'Keeping an office counter as well as an app is a:',
            options: ['Risk', 'Cost only', 'Trade-off only', 'Safeguard for inclusion'],
            correct: 3,
            explanation: 'The answer is Safeguard for inclusion. Reduces exclusion.'
        },
        {
            question: 'Gaining convenience but sharing more personal data is a:',
            options: ['Safeguard', 'Stakeholder', 'Trade-off', 'Footprint only'],
            correct: 2,
            explanation: 'The answer is Trade-off. Cost for benefit.'
        },
        {
            question: 'Digital records in hospitals are a change in:',
            options: ['Relationships', 'Institutions', 'Weather', 'Sport'],
            correct: 1,
            explanation: 'The answer is Institutions. Organisations.'
        },
        {
            question: 'Impacts that appear only after years are:',
            options: ['Short-term', 'Direct only', 'Long-term', 'Intended'],
            correct: 2,
            explanation: 'The answer is Long-term. Time scale.'
        },
        {
            question: 'A balanced analysis includes:',
            options: ['Only benefits', 'Only risks', 'Benefits and risks', 'Only costs'],
            correct: 2,
            explanation: 'The answer is Benefits and risks. Both sides.'
        },
        {
            question: 'Booking clerks whose work changes after an app is introduced are:',
            options: ['Hackers', 'Safeguards', 'Servers', 'Affected stakeholders'],
            correct: 3,
            explanation: 'The answer is Affected stakeholders. Affected group.'
        }
    ]
},
{
    name: '1.1.2 Impact of ICT on Society: Positive Impacts on Individuals, Organisations, Education, Health and the Economy',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Positive Impacts on Individuals, Organisations, Education, Health and the Economy</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will examine the positive impacts of ICT on individuals and organisations, and in education, healthcare and community services, and business, employment and the economy — including digital transformation, automation and new digital occupations.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Understanding how ICT creates value helps you make the most of it in your studies and future career, and explain why governments and businesses invest in it.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Digital learning</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Remote consultations</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏪 Online selling</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Digital jobs</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Public health messages</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🤝 Remote collaboration</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e0f7fa;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how ICT changes routines, relationships, institutions and access to information.</li>
    <li>Analyse the benefits, risks, costs and affected groups of an ICT system.</li>
    <li>Describe positive impacts of ICT on individuals, organisations, education, health and the economy.</li>
    <li>Explain negative impacts of ICT, including cybercrime, privacy loss, misinformation, the digital divide and e-waste.</li>
    <li>Discuss ethical considerations in choosing and evaluating ICT systems.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e0f7fa;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe positive impacts on individuals.</li>
    <li>Describe positive impacts on organisations.</li>
    <li>Explain positive impacts in education and health.</li>
    <li>Explain positive impacts on business, employment and the economy.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">❓ Key inquiry question:</strong> What difference does ICT make, and for whom?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">🧰 What you already know:</strong> Lesson 1.1.1: analysing impacts.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>ICT benefits people at every level. For <strong>individuals</strong>, it improves communication, access to information and services, learning, personal organisation, creativity and self-expression. For <strong>organisations</strong>, it raises productivity through automation, improves communication and collaboration, keeps accurate records, supports better decisions, improves customer service and encourages innovation.</p>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">🗣️ In Simple Words</p>
    <div>ICT saves time, widens access and opens new opportunities.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 Technical Background</h3>
    <p><strong>Digital transformation</strong> is the process of changing how an organisation works by using digital technology — not just putting old paper forms online, but redesigning services around what ICT makes possible. <strong>Automation</strong> uses computers or machines to perform tasks with little human effort, such as automatic stock re-ordering. New <strong>digital occupations</strong> include software developers, data analysts, digital marketers, content creators, cyber security analysts, online tutors and e-commerce managers. In <strong>education</strong>, ICT provides digital resources, educational videos, simulations, online assignments, digital assessment and learner records. In <strong>healthcare and community services</strong>, it supports electronic records, appointment coordination, remote consultations and public-health communication.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Productivity</strong>
    </p>
    <p style="margin:6px 0;">The amount of useful work done in a given time.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Automation</strong>
    </p>
    <p style="margin:6px 0;">Using machines or software to do tasks with little human effort.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital transformation</strong>
    </p>
    <p style="margin:6px 0;">Redesigning how an organisation works using digital technology.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Simulation</strong>
    </p>
    <p style="margin:6px 0;">A computer model that imitates a real process.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Virtual lab</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Remote consultation</strong>
    </p>
    <p style="margin:6px 0;">A health visit by phone or video.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Gig work</strong>
    </p>
    <p style="margin:6px 0;">Short-term work often found through digital platforms.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">1. Positive Impacts on Individuals and Organisations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Positive impact</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Individual</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Video calls with family abroad</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Individual</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Access to information and services</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Online applications, e-books</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Individual</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Personal organisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calendars, reminders, budgeting apps</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Individual</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and self-expression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital art, music, blogs, videos</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Productivity and automation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Automatic payroll and stock control</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shared documents and online meetings</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Record management and decision-making</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Databases and reports</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Customer service and innovation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chat support, new digital products</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">2. Education, Health and the Economy</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sector</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Positive impacts</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Education</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital learning resources, videos and simulations; online assignments and digital assessment; learner records; efficient school administration</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Healthcare</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electronic records; appointment coordination; remote consultations; faster test results; public-health messages by SMS and radio</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Community services</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Online registration; alerts during emergencies; digital payments for services</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Business</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Online selling; digital payments; online advertising; stock management; reaching distant customers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Employment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New digital occupations; remote work; online freelancing; gig work</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Economy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Higher productivity; financial inclusion; growth of the digital economy and innovation hubs</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 1: Case study: a small tailoring business</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A tailor in a small town starts selling through social media and accepting mobile payments. Explain three positive impacts.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Consider customers, records and growth.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Reach</strong>
    </p>
    <div style="margin:6px 0 0 34px;">She advertises to customers beyond her town.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Payments</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Customers pay safely and instantly; she keeps digital records.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Growth</strong>
    </p>
    <div style="margin:6px 0 0 34px;">More orders let her employ an assistant.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> Wider market, safer payments with records, and business growth creating employment.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e0f7fa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is automation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Using machines or software to do tasks with little human effort.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Give two positive impacts of ICT in education.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Digital resources and online assessment (also simulations, learner records).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name two digital occupations.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Software developer and data analyst (also digital marketer, cyber security analyst).</div>
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
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Research</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Explanation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Case-study analysis</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Presentation</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Exploring Digital Occupations</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To research digital occupations created or changed by ICT.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with Internet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Word processor</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career research template</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use approved sites; do not register on job sites with personal details.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose two digital occupations.</li>
    <li>Research what each does, the skills needed and where people train.</li>
    <li>Find how ICT has created or changed each job.</li>
    <li>Record your findings in a table in a word processor.</li>
    <li>Share one interesting fact with the class.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Occupation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What they do</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skills needed</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How ICT shaped it</th>
    </tr>
    <tr>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which subjects help prepare for these occupations?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Mathematics, ICT, Computer Studies, English, Business Studies, Art.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why do digital skills matter for all careers?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Most jobs now use ICT tools.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> ICT has created many new occupations and changed existing ones.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> New technologies create demand for new skills.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing job titles.</li>
    <li>Not stating skills.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Innovation hubs in Kenya train and employ young people in digital work.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Analysis and Reasoning</h3>
    <p>Explain how digital transformation differs from simply typing paper forms into a computer. Use a school example.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #4dd0e1;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 ICT in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Learners use online resources and simulations to revise.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Remote meetings and digital records reduce travel and paper use.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Developers, data analysts and digital marketers work in the growing digital economy.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How does ICT help personal organisation?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Individuals.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Calendars, reminders and budgeting apps.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> How does ICT improve customer service?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Organisations.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Faster responses through chat, SMS and online help.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How does ICT support public health?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Communication.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Mass SMS and radio messages during outbreaks.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List three ways ICT helps your own learning.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Discuss positive impacts of ICT on a local business.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Research two digital occupations.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Create a one-slide career profile.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain four positive impacts of ICT on individuals.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Communication, information access, personal organisation, creativity.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Explain four positive impacts on organisations.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Productivity/automation, collaboration, records/decisions, customer service.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain three positive impacts of ICT on employment and the economy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">New occupations, remote work, financial inclusion/growth.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why avoid registering on job sites during the activity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To protect personal data.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Can automation be both positive and negative?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Yes: it raises productivity but may replace some jobs.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🧠 Lesson Summary</h3>
    <p>ICT benefits individuals (communication, information, services, organisation, creativity) and organisations (productivity, automation, collaboration, records, decisions, customer service, innovation). In education it provides digital resources, simulations and assessment; in health, electronic records, remote consultations and public-health messages; in business and the economy, online selling, digital payments, new occupations and growth.</p>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Individuals.</li>
    <li>Organisations.</li>
    <li>Education and health.</li>
    <li>Business, employment and economy.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Automation raises productivity.</li>
    <li>Digital transformation redesigns services.</li>
    <li>New digital jobs.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing digitisation with transformation.</li>
    <li>Listing without examples.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use case studies.</li>
    <li>Link each impact to a stakeholder.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #00838f;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain with examples.</li>
    <li>Organise by level.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Learning to learn</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Career research.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Case study.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentations.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Many young Kenyans earn income through digital work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain five positive impacts of ICT in health.</li>
    <li>Describe a digital occupation you are interested in.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which digital skill would most improve my future?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Productivity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Useful output.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Automation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Machine-done tasks.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Digital transformation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redesign with ICT.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Gig work</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Short-term platform work.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain positive impacts of ICT at different levels.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Using software to re-order stock automatically is:',
            options: ['Plagiarism', 'Phishing', 'Netiquette', 'Automation'],
            correct: 3,
            explanation: 'The answer is Automation. Machine-done task.'
        },
        {
            question: 'Redesigning services around digital technology is:',
            options: ['E-waste', 'The digital divide', 'Cyberbullying', 'Digital transformation'],
            correct: 3,
            explanation: 'The answer is Digital transformation. Transformation.'
        },
        {
            question: 'A virtual chemistry lab is a:',
            options: ['Simulation', 'Footprint', 'Firewall', 'Router'],
            correct: 0,
            explanation: 'The answer is Simulation. Model of a process.'
        },
        {
            question: 'A doctor’s video call with a patient is a:',
            options: ['Spam', 'Cookie', 'Remote consultation', 'Backup'],
            correct: 2,
            explanation: 'The answer is Remote consultation. Telemedicine.'
        },
        {
            question: 'Shared online documents improve:',
            options: ['E-waste', 'Collaboration', 'Fraud', 'Isolation'],
            correct: 1,
            explanation: 'The answer is Collaboration. Teamwork.'
        },
        {
            question: 'A budgeting app helps with:',
            options: ['Hacking', 'Personal organisation', 'Plagiarism', 'Noise'],
            correct: 1,
            explanation: 'The answer is Personal organisation. Individuals.'
        },
        {
            question: 'Data analyst is an example of a:',
            options: ['Hardware device', 'Digital occupation', 'Network', 'Virus'],
            correct: 1,
            explanation: 'The answer is Digital occupation. Career.'
        },
        {
            question: 'Mobile payments for a small business provide:',
            options: ['More cash theft', 'No records', 'Slower sales', 'Safe, recorded transactions'],
            correct: 3,
            explanation: 'The answer is Safe, recorded transactions. Records.'
        },
        {
            question: 'Public-health SMS messages help during:',
            options: ['Disease outbreaks', 'Football matches', 'Exams only', 'Weddings'],
            correct: 0,
            explanation: 'The answer is Disease outbreaks. Communication.'
        },
        {
            question: 'Digital records help organisations to:',
            options: ['Lose information', 'Work slower', 'Make better decisions', 'Avoid customers'],
            correct: 2,
            explanation: 'The answer is Make better decisions. Decision-making.'
        }
    ]
},
{
    name: '1.1.3 Impact of ICT on Society: Negative Impacts, the Digital Divide, E-Waste and Ethical Issues',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Negative Impacts, the Digital Divide, E-Waste and Ethical Issues</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will study the negative impacts of ICT — cybercrime and fraud, privacy loss, online harassment, distraction, misinformation and social exclusion — the risks to digital businesses, the digital divide, e-waste, and the ethical questions organisations should ask when choosing and evaluating ICT systems.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Knowing the risks protects you, your family and future employers. It also prepares you to help design fairer, safer and greener ICT systems.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📩 Fake payment messages</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔐 Account takeovers</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📵 Distraction</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Misinformation</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌍 Rural connectivity</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">♻️ E-waste collection</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e0f7fa;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how ICT changes routines, relationships, institutions and access to information.</li>
    <li>Analyse the benefits, risks, costs and affected groups of an ICT system.</li>
    <li>Describe positive impacts of ICT on individuals, organisations, education, health and the economy.</li>
    <li>Explain negative impacts of ICT, including cybercrime, privacy loss, misinformation, the digital divide and e-waste.</li>
    <li>Discuss ethical considerations in choosing and evaluating ICT systems.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e0f7fa;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain negative impacts of ICT.</li>
    <li>Describe risks to digital businesses.</li>
    <li>Explain the factors behind the digital divide.</li>
    <li>Discuss e-waste and ethical considerations.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">❓ Key inquiry question:</strong> What difference does ICT make, and for whom?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">🧰 What you already know:</strong> Lessons 1.1.1 and 1.1.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>The same technology that brings benefits can cause harm. <strong>Cybercrime</strong> includes fraud, hacking and identity theft. <strong>Privacy loss</strong> happens when personal information is collected, leaked or misused. <strong>Online harassment</strong> hurts people’s wellbeing. <strong>Distraction</strong> and over-use reduce concentration and sleep. <strong>Misinformation</strong> spreads quickly. And people without access or skills face <strong>social exclusion</strong>.</p>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Every benefit of ICT comes with a risk that must be managed.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 Technical Background</h3>
    <p>Digital businesses face specific risks: <strong>fraudulent payment messages</strong> (fake confirmations that trick sellers into releasing goods), <strong>fake customer accounts</strong>, <strong>account takeovers</strong> (criminals gaining control of an account, often after a stolen password or SIM swap), <strong>information leaks</strong> and <strong>dependence on digital platforms</strong> (a business can suffer if a platform changes its rules or goes offline). The <strong>digital divide</strong> is the gap between those who can benefit from ICT and those who cannot, caused by differences in access, affordability, connectivity, accessibility, digital literacy and support. <strong>E-waste</strong> — discarded phones, computers and batteries — contains toxic materials such as lead and mercury, and must be repaired, reused or recycled through approved handlers. <strong>Ethical considerations</strong> include fairness, privacy, transparency, accessibility, environmental care and accountability.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Cybercrime</strong>
    </p>
    <p style="margin:6px 0;">Crime committed using computers or networks.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Fraud</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Account takeover</strong>
    </p>
    <p style="margin:6px 0;">When a criminal gains control of someone’s account.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">SIM swap fraud</strong>
    </p>
    <p style="margin:6px 0;">Criminal transfers a victim’s number to a new SIM.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Social exclusion</strong>
    </p>
    <p style="margin:6px 0;">Being left out of opportunities and services.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">E-waste</strong>
    </p>
    <p style="margin:6px 0;">Discarded electrical and electronic equipment.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Ethics</strong>
    </p>
    <p style="margin:6px 0;">Principles of right and wrong behaviour.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">1. Negative Impacts and Digital Business Risks</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Negative impact</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Safeguard</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cybercrime and fraud</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fake payment confirmation SMS</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check the real account balance before releasing goods</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Account takeover</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stolen password used to empty an account</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strong unique passwords and two-step verification</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Privacy loss</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Personal data leaked from an app</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share minimum data; use privacy settings</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Online harassment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Abusive messages or impersonation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Block, report and seek help</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distraction and over-use</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Late-night scrolling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Screen-time limits and phone-free study</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Misinformation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">False health claims shared widely</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verify before sharing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fake customer accounts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Orders placed with stolen identities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verify customers and payments</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Platform dependence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Business loses sales when a platform is down</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use more than one channel; keep own records</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">2. The Digital Divide, E-Waste and Ethics</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 660 220" width="660" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="10" y="30" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="110" y="61" fill="#fde68a" font-size="13" text-anchor="middle">Access</text><text x="110" y="81" fill="#e0f7fa" font-size="11" text-anchor="middle">Devices and electricity</text><rect x="228" y="30" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="328" y="61" fill="#fde68a" font-size="13" text-anchor="middle">Affordability</text><text x="328" y="81" fill="#e0f7fa" font-size="11" text-anchor="middle">Cost of data and devices</text><rect x="446" y="30" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="546" y="61" fill="#fde68a" font-size="13" text-anchor="middle">Connectivity</text><text x="546" y="81" fill="#e0f7fa" font-size="11" text-anchor="middle">Network coverage</text><rect x="10" y="120" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="110" y="151" fill="#fde68a" font-size="13" text-anchor="middle">Accessibility</text><text x="110" y="171" fill="#e0f7fa" font-size="11" text-anchor="middle">For persons with disabilities</text><rect x="228" y="120" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="328" y="151" fill="#fde68a" font-size="13" text-anchor="middle">Digital literacy</text><text x="328" y="171" fill="#e0f7fa" font-size="11" text-anchor="middle">Skills to use ICT</text><rect x="446" y="120" width="200" height="70" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="546" y="151" fill="#fde68a" font-size="13" text-anchor="middle">Support</text><text x="546" y="171" fill="#e0f7fa" font-size="11" text-anchor="middle">Help when things fail</text><text x="330" y="18" fill="#b2ebf2" font-size="12" text-anchor="middle">Six factors behind the digital divide</text><text x="330" y="212" fill="#b2ebf2" font-size="11" text-anchor="middle">Closing the divide needs action on every factor, not only devices.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">E-waste issue</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Responsible action</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Toxic materials (lead, mercury, cadmium)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never burn or dump devices</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Short device lifespans</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Repair and maintain devices</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usable old devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Donate or reuse</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">End-of-life devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Take to approved e-waste collectors</td>
    </tr>
    </table>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Ethical question when introducing ICT</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why it matters</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is it fair to all users?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Avoid excluding the poor, rural or disabled</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is personal data protected?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect privacy</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Are users told how it works?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transparency builds trust</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is it accessible?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inclusion of persons with disabilities</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What is its environmental cost?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy and e-waste</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Who is accountable if it fails?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responsibility</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 1: Case study: an online school portal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A school moves all communication with parents to an online portal. Identify two ethical concerns and suggest safeguards.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Consider fairness and privacy.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Concern 1: fairness</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Parents without smartphones or data miss information.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Safeguard 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Send SMS summaries and keep printed notices.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Concern 2: privacy</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Learner results could be seen by others.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e0f7fa;">Step 4: Safeguard 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Individual logins, strong passwords and limited access for staff.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> Ensure inclusion through alternative channels and protect data with access controls.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e0f7fa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is an account takeover?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">When a criminal gains control of someone’s account.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Name three factors behind the digital divide.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Access, affordability, connectivity (also accessibility, literacy, support).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why should e-waste not be burned?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">It releases toxic substances harmful to health and the environment.</div>
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
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Risk analysis</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ethical reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Problem solving</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Debate</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Spotting a Fraudulent Payment Message</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To identify warning signs in fake payment messages and plan safe responses.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Printed sample messages (teacher-prepared, fictional)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checklist of warning signs</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only fictional examples; never call numbers from suspicious messages.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read the sample messages provided by the teacher.</li>
    <li>Compare each with a genuine message format.</li>
    <li>Highlight warning signs: wrong sender name, spelling errors, urgency, requests to send money back.</li>
    <li>Decide which messages are genuine and which are fake.</li>
    <li>Write a safe response plan for a shopkeeper.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Message</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Warning signs</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Genuine or fake?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is the safest way to confirm a payment?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Check the actual account balance or statement, not the SMS alone.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why do fraudsters create urgency?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To stop victims from thinking and checking.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Careful checking prevents losses from fraudulent payment messages.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> Fraudsters imitate genuine messages; verification breaks the trick.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Trusting the sender name alone.</li>
    <li>Replying to the fraudster.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Traders and families protect themselves by always verifying payments.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Analysis and Reasoning</h3>
    <p>Debate: “ICT has widened the gap between rich and poor in Kenya.” Write two arguments for, two against and your conclusion.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #4dd0e1;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 ICT in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Families protect accounts with PINs and two-step verification.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Recycling e-waste recovers valuable metals and prevents pollution.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Fraud analysts, cyber security officers and e-waste recyclers address these risks.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Give one warning sign of a fake payment message.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Urgency.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Urgent request to send money back (also spelling errors, unusual sender).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is platform dependence?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Risk.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">When a business relies on one digital platform and suffers if it changes or fails.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Give one way to reduce the digital divide.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Access.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Community ICT centres or affordable data.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Check your phone’s screen-time report and reflect.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Identify warning signs in sample fake messages.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Debate whether ICT widens inequality.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research approved e-waste collection points near you.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain five negative impacts of ICT on society.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Cybercrime, privacy loss, harassment, distraction, misinformation (also exclusion).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe four risks faced by digital businesses.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Fraudulent messages, fake accounts, account takeovers, platform dependence (also leaks).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain the factors that cause the digital divide.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Access, affordability, connectivity, accessibility, literacy, support.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why use fictional messages in the activity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To avoid real scams and protect privacy.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why are ethical questions important before introducing a new system?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To prevent unfair, harmful or unaccountable outcomes.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🧠 Lesson Summary</h3>
    <p>ICT can cause cybercrime and fraud, privacy loss, harassment, distraction, misinformation and exclusion. Digital businesses face fake payment messages, fake accounts, account takeovers, leaks and platform dependence. The digital divide arises from differences in access, affordability, connectivity, accessibility, literacy and support. E-waste is toxic and must be handled responsibly. Ethical choices consider fairness, privacy, transparency, accessibility, environment and accountability.</p>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Negative impacts.</li>
    <li>Business risks.</li>
    <li>Digital divide.</li>
    <li>E-waste.</li>
    <li>Ethics.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Verify payments in the real account.</li>
    <li>Six divide factors.</li>
    <li>Never burn e-waste.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking the divide is only about devices.</li>
    <li>Trusting sender names.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pair each risk with a safeguard.</li>
    <li>Use case studies.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #00838f;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain fully.</li>
    <li>Suggest solutions.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spotting fraud.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ethical choices.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Debate.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social justice</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Online safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Simple checks prevent many cases of mobile fraud.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain four ethical considerations when introducing ICT in a school.</li>
    <li>Describe how e-waste should be managed.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How do I protect myself and my family from digital fraud?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cybercrime</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital crime.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Account takeover</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stolen account control.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">E-waste</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discarded electronics.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ethics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right and wrong.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain negative impacts and safeguards.</p>
    <p style="margin:6px 0;">☐ I can explain the digital divide, e-waste and ethics.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A fake SMS claiming money was sent to you is an example of:',
            options: ['A digital footprint', 'Automation', 'A simulation', 'A fraudulent payment message'],
            correct: 3,
            explanation: 'The answer is A fraudulent payment message. Fraud.'
        },
        {
            question: 'The safest way to confirm a payment is to:',
            options: ['Trust the SMS', 'Call the sender back', 'Ask a stranger', 'Check your actual account balance'],
            correct: 3,
            explanation: 'The answer is Check your actual account balance. Verify.'
        },
        {
            question: 'Criminals gaining control of your account is:',
            options: ['Backup', 'Encryption', 'Account takeover', 'Streaming'],
            correct: 2,
            explanation: 'The answer is Account takeover. Takeover.'
        },
        {
            question: 'Two-step verification helps prevent:',
            options: ['E-waste', 'Digital divide', 'Account takeovers', 'Simulations'],
            correct: 2,
            explanation: 'The answer is Account takeovers. Extra check.'
        },
        {
            question: 'Which is a factor of the digital divide?',
            options: ['Affordability of data', 'Screen colour', 'Keyboard layout', 'Font size'],
            correct: 0,
            explanation: 'The answer is Affordability of data. Cost.'
        },
        {
            question: 'E-waste contains toxic metals such as:',
            options: ['Gold only', 'Lead and mercury', 'Salt', 'Sugar'],
            correct: 1,
            explanation: 'The answer is Lead and mercury. Hazardous.'
        },
        {
            question: 'Old but working phones should be:',
            options: ['Burned', 'Reused or donated', 'Dumped in rivers', 'Buried'],
            correct: 1,
            explanation: 'The answer is Reused or donated. Reuse.'
        },
        {
            question: 'Telling users how a system uses their data is:',
            options: ['Fraud', 'Plagiarism', 'Exclusion', 'Transparency'],
            correct: 3,
            explanation: 'The answer is Transparency. Ethics.'
        },
        {
            question: 'A business that sells only on one platform faces:',
            options: ['Platform dependence', 'Automation', 'Inclusion', 'Simulation'],
            correct: 0,
            explanation: 'The answer is Platform dependence. Risk.'
        },
        {
            question: 'Fraudsters often create a sense of:',
            options: ['Calm', 'Patience', 'Urgency', 'Boredom'],
            correct: 2,
            explanation: 'The answer is Urgency. Pressure.'
        }
    ]
},
{
    name: '1.1 Laboratory Activity: Impact Analysis of an Online School Portal',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🧪 Impact Analysis of an Online School Portal</h2>
    <p style="font-size:16px;">In groups, you will carry out a full impact analysis of a proposed online school portal for results, fees and announcements, record it in a spreadsheet, chart the results and recommend safeguards.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#b2ebf2;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use fictional data only; no real learner records.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equipment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No food or drinks; report faults.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share tasks fairly and respect views.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Saving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Save regularly with clear file names.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Analyse, Score, Chart, Recommend</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To evaluate the impact of an ICT system using the six-step method and a spreadsheet.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spreadsheet and word processor</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Case study sheet: proposed school portal</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use fictional data.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read the case study and list all stakeholders.</li>
    <li>In a spreadsheet, create columns: Stakeholder, Benefit, Risk, Cost, Benefit score (1–5), Risk score (1–5), Safeguard.</li>
    <li>Fill in every row.</li>
    <li>Add a column Net = Benefit score − Risk score and fill it with a formula.</li>
    <li>Create a bar chart of the Net score for each stakeholder.</li>
    <li>Identify the stakeholder with the lowest Net score and design two safeguards for them.</li>
    <li>Write a 150-word recommendation to the head teacher.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stakeholder</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Benefit score</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Risk score</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Net</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parents with smartphones</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parents without smartphones</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teachers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bursar</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learners</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which group had the lowest net score and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Often parents without smartphones, because they gain little and risk missing information.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How do safeguards change the analysis?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">They raise benefits or lower risks for disadvantaged groups.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A structured, scored analysis shows where an ICT system helps and where safeguards are needed.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> Scoring makes comparisons clearer, though scores are judgements and must be justified.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Typing scores without reasons.</li>
    <li>Forgetting excluded groups.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Organisations use similar matrices before investing in ICT.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Explain one limitation of giving numerical scores to impacts.</p>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 2: Sample formula</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write the formula for Net in row 2 if Benefit score is in E2 and Risk score in F2.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Subtract risk from benefit.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">=E2-F2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Copy</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Drag down with the fill handle.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> =E2-F2</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name four stakeholders of a school portal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Parents, learners, teachers, bursar (also head teacher, ICT technician).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give one safeguard for parents without smartphones.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">SMS summaries or printed notices.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why chart the Net scores?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To compare stakeholders visually.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why use fictional data?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To protect real people’s privacy.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why justify each score?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Scores are judgements and need reasons.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'In the activity, Net score equals:',
            options: ['Risk plus cost', 'Benefit times risk', 'Cost only', 'Benefit score minus risk score'],
            correct: 3,
            explanation: 'The answer is Benefit score minus risk score. Formula.'
        },
        {
            question: 'The formula for Net in row 2 is:',
            options: ['=E2-F2', '=E2+F2', '=SUM(E:F)', '=E2*F2'],
            correct: 0,
            explanation: 'The answer is =E2-F2. Subtract.'
        },
        {
            question: 'A bar chart helps to:',
            options: ['Hide results', 'Delete data', 'Compare stakeholders visually', 'Encrypt files'],
            correct: 2,
            explanation: 'The answer is Compare stakeholders visually. Visual comparison.'
        },
        {
            question: 'Real learner records should be:',
            options: ['Used freely', 'Shared online', 'Printed', 'Kept out of the activity'],
            correct: 3,
            explanation: 'The answer is Kept out of the activity. Privacy.'
        },
        {
            question: 'A limitation of scoring impacts is that scores are:',
            options: ['Always exact', 'Never useful', 'Judgements that need justification', 'Random'],
            correct: 2,
            explanation: 'The answer is Judgements that need justification. Subjective.'
        }
    ]
},
{
    name: '1.1 Quiz: Impact of ICT on Society',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📝 Quiz — Impact of ICT on Society</h2>
    <p style="font-size:16px;">This quiz checks lessons 1.1.1–1.1.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How ICT changes society</li>
    <li>Impact analysis</li>
    <li>Positive impacts</li>
    <li>Negative impacts and business risks</li>
    <li>Digital divide</li>
    <li>E-waste and ethics</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #00838f;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#b2ebf2;font-weight:bold;">📝 Exam Tip</p>
    <div>For every impact, think of a stakeholder and a safeguard.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Keeping in touch with relatives abroad by video call is a change in:',
            options: ['Institutions', 'Relationships', 'Hardware', 'Weather'],
            correct: 1,
            explanation: 'The answer is Relationships. Social.'
        },
        {
            question: 'Which step of impact analysis asks “Who is left out?”',
            options: ['Purpose', 'Benefits', 'Costs', 'Affected groups'],
            correct: 3,
            explanation: 'The answer is Affected groups. Step 5.'
        },
        {
            question: 'An effect that appears immediately is:',
            options: ['Short-term', 'Long-term', 'Unintended always', 'Indirect always'],
            correct: 0,
            explanation: 'The answer is Short-term. Time scale.'
        },
        {
            question: 'Online advertising helps businesses to:',
            options: ['Lose customers', 'Increase e-waste', 'Reduce records', 'Reach more customers'],
            correct: 3,
            explanation: 'The answer is Reach more customers. Marketing.'
        },
        {
            question: 'Remote work is a positive impact on:',
            options: ['Employment', 'E-waste', 'Privacy', 'Fraud'],
            correct: 0,
            explanation: 'The answer is Employment. Jobs.'
        },
        {
            question: 'Digital assessment is an ICT application in:',
            options: ['Education', 'Agriculture', 'Transport', 'Mining'],
            correct: 0,
            explanation: 'The answer is Education. Schools.'
        },
        {
            question: 'Appointment coordination by SMS is used in:',
            options: ['Sport', 'Music', 'Healthcare', 'Fishing'],
            correct: 2,
            explanation: 'The answer is Healthcare. Health.'
        },
        {
            question: 'Transferring a victim’s number to a criminal’s SIM is:',
            options: ['Backup', 'Encryption', 'SIM swap fraud', 'Automation'],
            correct: 2,
            explanation: 'The answer is SIM swap fraud. Fraud.'
        },
        {
            question: 'Late-night scrolling that reduces sleep is:',
            options: ['Distraction and over-use', 'Productivity', 'Automation', 'Inclusion'],
            correct: 0,
            explanation: 'The answer is Distraction and over-use. Wellbeing.'
        },
        {
            question: 'Being left out of online services is:',
            options: ['Collaboration', 'Social exclusion', 'Innovation', 'Transparency'],
            correct: 1,
            explanation: 'The answer is Social exclusion. Divide.'
        },
        {
            question: 'Lack of skills to use ICT is a lack of:',
            options: ['Bandwidth', 'Storage', 'Digital literacy', 'Electricity only'],
            correct: 2,
            explanation: 'The answer is Digital literacy. Skills.'
        },
        {
            question: 'Making a website usable by blind people improves:',
            options: ['Fraud', 'E-waste', 'Distraction', 'Accessibility'],
            correct: 3,
            explanation: 'The answer is Accessibility. Inclusion.'
        },
        {
            question: 'E-waste should be taken to:',
            options: ['Open burning sites', 'Approved collectors', 'Rivers', 'Bushes'],
            correct: 1,
            explanation: 'The answer is Approved collectors. Safe disposal.'
        },
        {
            question: 'Asking “Who is responsible if the system fails?” is about:',
            options: ['Speed', 'Colour', 'Storage', 'Accountability'],
            correct: 3,
            explanation: 'The answer is Accountability. Ethics.'
        },
        {
            question: 'In the lab activity, the stakeholder with the lowest net score needs:',
            options: ['No attention', 'Exclusion', 'Safeguards', 'Higher costs'],
            correct: 2,
            explanation: 'The answer is Safeguards. Protection.'
        }
    ]
},
{
    name: '1.1 Assignment: ICT Impact Report on a Local Service',
    type: 'lesson',
    duration: '80 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📂 ICT Impact Report on a Local Service</h2>
    <p style="font-size:16px;">In groups, you will write an impact report on one ICT-based service used in your community (for example mobile money, online government services, a school portal, a hospital appointment system or an online market).</p>
    <p style="margin:6px 0 0 0;color:#e0f7fa;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your county’s youth forum wants learners’ views on how digital services affect the community. Each group will produce a balanced report with recommendations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose a service and describe its purpose.</li>
    <li>Identify at least five stakeholders.</li>
    <li>Analyse benefits, risks and costs for each.</li>
    <li>Identify who is left out and why (digital divide factors).</li>
    <li>Consider environmental and ethical issues.</li>
    <li>Recommend at least three safeguards.</li>
    <li>Type the report (about two pages) with headings and a summary table, and submit it by email.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Typed impact report</li>
    <li>Summary table or chart</li>
    <li>Recommendations</li>
    <li>Individual reflections</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analysis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All six steps applied in depth with evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All steps applied</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some steps applied</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few steps</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Benefits and risks fairly weighed for all groups</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Benefits and risks covered</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly one-sided</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One-sided</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Practical, specific safeguards for each major risk</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Practical safeguards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">General safeguards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">None</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear headings, table and correct formatting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unclear</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use the six-step frame as headings.<br>Avoid naming real individuals.<br>Base claims on observation or reliable sources.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I learn about the effects of ICT in my community?</li>
    <li>Which recommendation is most important and why?</li>
    <li>How did our group share the work?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A balanced report includes:',
            options: ['Only benefits', 'Only complaints', 'Rumours', 'Benefits and risks for all groups'],
            correct: 3,
            explanation: 'The answer is Benefits and risks for all groups. Balance.'
        },
        {
            question: 'The report should identify who is left out using:',
            options: ['Favourite apps', 'Phone colours', 'Digital divide factors', 'Brand names'],
            correct: 2,
            explanation: 'The answer is Digital divide factors. Analysis.'
        },
        {
            question: 'Recommendations should be:',
            options: ['Vague', 'Impossible', 'Practical and specific', 'Unrelated'],
            correct: 2,
            explanation: 'The answer is Practical and specific. Useful.'
        },
        {
            question: 'Claims in the report should be based on:',
            options: ['Guesswork', 'Observation or reliable sources', 'Gossip', 'Opinion only'],
            correct: 1,
            explanation: 'The answer is Observation or reliable sources. Evidence.'
        },
        {
            question: 'The report is submitted:',
            options: ['By shouting', 'By email', 'By drum', 'Not at all'],
            correct: 1,
            explanation: 'The answer is By email. ICT use.'
        }
    ]
},
{
    name: '1.1 Revision: Impact of ICT on Society',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🔁 Revision — Impact of ICT on Society</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.1 before moving on to 1.2 Digital Citizenship.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🔄 Change</p>
    <div>Routines, relationships, institutions, opportunities, information.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🧭 Analysis</p>
    <div>Purpose, benefits, risks, costs, affected, safeguards.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">👤 Individuals</p>
    <div>Communication, access, organisation, creativity.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🏢 Organisations</p>
    <div>Productivity, automation, collaboration, decisions.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">💼 Economy</p>
    <div>Online selling, digital jobs, inclusion.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">⚠️ Risks</p>
    <div>Fraud, takeovers, privacy loss, harassment, misinformation.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🌍 Divide</p>
    <div>Access, affordability, connectivity, accessibility, literacy, support.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">♻️ E-waste and ethics</p>
    <div>Recycle; fairness, privacy, transparency, accountability.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stakeholder</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anyone affected</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parents</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unintended consequence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unplanned effect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More screen time</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Automation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Machine-done tasks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Auto stock re-order</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Account takeover</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Criminal controls account</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">After stolen password</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital divide</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gap in ICT benefits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rural vs urban</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain five ways ICT changes society.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Routines, relationships, institutions, opportunities, information access.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe the six steps of impact analysis.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Purpose, benefits, risks, costs, affected groups, safeguards.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain four positive impacts of ICT on organisations.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Productivity, collaboration, record management, customer service.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain four risks faced by digital businesses and a safeguard for each.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Fake payments (verify), fake accounts (verify customers), takeovers (2-step), platform dependence (multiple channels).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain four ethical considerations when introducing ICT.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Fairness, privacy, transparency, accessibility (also environment, accountability).</div>
    </details>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can analyse ICT impacts.</p>
    <p style="margin:6px 0;">☐ I can explain positive and negative impacts.</p>
    <p style="margin:6px 0;">☐ I can explain the digital divide, e-waste and ethics.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Online work opportunities are a change in:',
            options: ['Routines only', 'Opportunities', 'Hardware', 'Weather'],
            correct: 1,
            explanation: 'The answer is Opportunities. Jobs.'
        },
        {
            question: 'Weighing convenience against privacy is a:',
            options: ['Footprint', 'Virus', 'Trade-off', 'Server'],
            correct: 2,
            explanation: 'The answer is Trade-off. Balance.'
        },
        {
            question: 'Simulations in education help learners:',
            options: ['Cheat', 'Understand processes', 'Avoid learning', 'Waste time'],
            correct: 1,
            explanation: 'The answer is Understand processes. Models.'
        },
        {
            question: 'Information leaks are a risk to:',
            options: ['Digital businesses', 'Only hardware', 'Weather', 'Rivers'],
            correct: 0,
            explanation: 'The answer is Digital businesses. Data.'
        },
        {
            question: 'Network coverage is part of:',
            options: ['Affordability', 'Literacy', 'Connectivity', 'Support'],
            correct: 2,
            explanation: 'The answer is Connectivity. Divide factor.'
        },
        {
            question: 'Repairing devices reduces:',
            options: ['Productivity', 'Inclusion', 'Collaboration', 'E-waste'],
            correct: 3,
            explanation: 'The answer is E-waste. Lifespan.'
        },
        {
            question: 'Accountability means:',
            options: ['No one is responsible', 'Hiding data', 'Faster speed', 'Someone is responsible for outcomes'],
            correct: 3,
            explanation: 'The answer is Someone is responsible for outcomes. Ethics.'
        },
        {
            question: 'The next sub-strand is:',
            options: ['1.2 Digital Citizenship', '2.1 Spreadsheets', '3.0 HTML', '1.1 again'],
            correct: 0,
            explanation: 'The answer is 1.2 Digital Citizenship. Next.'
        }
    ]
},
{
    name: '1.1 Summary: Impact of ICT on Society',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.1 Impact of ICT on Society</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🧾 Summary — Impact of ICT on Society</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> ICT changes how people live, work and relate; judging its impact means weighing benefits, risks and costs for everyone affected and adding safeguards so that no one is harmed or left behind.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>ICT changes routines, relationships, institutions, opportunities and access to information.</li>
    <li>Impact analysis covers purpose, benefits, risks, costs, affected groups and safeguards, including unintended consequences.</li>
    <li>ICT benefits individuals and organisations through communication, access, productivity, automation and better decisions.</li>
    <li>In education, health and the economy, ICT brings digital learning, remote care, online selling and new occupations.</li>
    <li>Negative impacts include fraud, account takeovers, privacy loss, harassment, distraction and misinformation.</li>
    <li>The digital divide arises from gaps in access, affordability, connectivity, accessibility, literacy and support.</li>
    <li>E-waste must be handled responsibly, and ICT choices should be fair, private, transparent, accessible and accountable.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Analysing impacts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How ICT changes society; six steps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stakeholders</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Positive impacts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Individuals, organisations, sectors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Automation</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Negative impacts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Risks, divide, e-waste, ethics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verify payments</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scored impact matrix</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Net = benefit − risk</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">impact</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stakeholder</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">unintended consequence</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">safeguard</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">trade-off</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">automation</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">digital transformation</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">account takeover</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SIM swap fraud</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">digital divide</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">e-waste</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ethics</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Thoughtful analysis helps communities enjoy ICT’s benefits while staying safe and included.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Digital Citizenship focuses on how you personally should behave online.</div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ explain how ICT changes society</p>
    <p style="margin:6px 0;">✔️ carry out an impact analysis</p>
    <p style="margin:6px 0;">✔️ explain positive impacts of ICT</p>
    <p style="margin:6px 0;">✔️ explain negative impacts and safeguards</p>
    <p style="margin:6px 0;">✔️ discuss the digital divide, e-waste and ethics</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is to:',
            options: ['Weigh benefits, risks and costs for everyone affected', 'Praise all ICT', 'Reject all ICT', 'Ignore stakeholders'],
            correct: 0,
            explanation: 'The answer is Weigh benefits, risks and costs for everyone affected. Balanced judgement.'
        },
        {
            question: 'Which lesson covered the six-step analysis?',
            options: ['1.1.2', '1.1.3', '1.2.1', '1.1.1'],
            correct: 3,
            explanation: 'The answer is 1.1.1. Analysing impacts.'
        },
        {
            question: 'Which lesson covered SIM swap fraud?',
            options: ['1.1.1', '1.1.2', '1.2.2', '1.1.3'],
            correct: 3,
            explanation: 'The answer is 1.1.3. Negative impacts.'
        },
        {
            question: 'What comes next?',
            options: ['2.1 Spreadsheets', '3.0 Web', '1.2 Digital Citizenship', '1.3 Operating Systems'],
            correct: 2,
            explanation: 'The answer is 1.2 Digital Citizenship. Next.'
        },
        {
            question: 'The lab activity scored impacts using:',
            options: ['A spreadsheet', 'A microscope', 'A thermometer', 'A compass'],
            correct: 0,
            explanation: 'The answer is A spreadsheet. Matrix.'
        }
    ]
},
{
    name: '1.2.1 Digital Citizenship: Meaning, Importance and Dimensions',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Meaning, Importance and Dimensions of Digital Citizenship</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what digital citizenship means, why technical skill must go together with responsible behaviour, the ten core dimensions of digital citizenship, and your digital rights and responsibilities.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> You spend part of every day in digital spaces — class groups, social media, games and learning platforms. Just as good citizens follow rules and respect others in their community, good digital citizens do the same online.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💬 Class WhatsApp groups</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Learning platforms</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Online games</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Social media</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Online shopping</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Online services</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e0f7fa;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning, importance and dimensions of digital citizenship.</li>
    <li>Protect personal information and manage digital footprints.</li>
    <li>Respond appropriately to cyberbullying and harmful online behaviour.</li>
    <li>Evaluate the credibility of online information before sharing it.</li>
    <li>Respect intellectual property and practise digital etiquette.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e0f7fa;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define digital citizenship.</li>
    <li>Explain its importance.</li>
    <li>Describe the ten dimensions.</li>
    <li>Explain digital rights and responsibilities.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">❓ Key inquiry question:</strong> How should I behave responsibly in a digital world?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">🧰 What you already know:</strong> Sub-strand 1.1: impact of ICT on society.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Digital citizenship</strong> is the responsible, safe, ethical and respectful use of digital technology. A person can be very skilled with a phone or computer and still be a poor digital citizen — for example, by spreading rumours, copying others’ work or bullying. Digital citizenship joins <strong>technical ability</strong> with <strong>responsible behaviour</strong>.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 660 330" width="660" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><circle cx="330" cy="165" r="62" fill="#0a2a2e" stroke="#fde68a" stroke-width="2"/><text x="330" y="160" fill="#fde68a" font-size="13" text-anchor="middle">Digital</text><text x="330" y="178" fill="#fde68a" font-size="13" text-anchor="middle">citizen</text><line x1="330.0" y1="101.0" x2="330.0" y2="63.0" stroke="#4dd0e1" stroke-width="1.8"/><rect x="262.0" y="21.0" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="330.0" y="40.0" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Access</text><line x1="367.6" y1="113.2" x2="435.8" y2="82.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="408.9" y="45.8" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="476.9" y="64.8" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Literacy</text><line x1="390.9" y1="145.2" x2="501.2" y2="133.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="499.8" y="110.8" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="567.8" y="129.8" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Communication</text><line x1="390.9" y1="184.8" x2="501.2" y2="196.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="499.8" y="191.2" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="567.8" y="210.2" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Etiquette</text><line x1="367.6" y1="216.8" x2="435.8" y2="247.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="408.9" y="256.2" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="476.9" y="275.2" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Rights and duties</text><line x1="330.0" y1="229.0" x2="330.0" y2="267.0" stroke="#4dd0e1" stroke-width="1.8"/><rect x="262.0" y="281.0" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="330.0" y="300.0" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Safety and security</text><line x1="292.4" y1="216.8" x2="224.2" y2="247.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="115.1" y="256.2" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="183.1" y="275.2" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Privacy</text><line x1="269.1" y1="184.8" x2="158.8" y2="196.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="24.2" y="191.2" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="92.2" y="210.2" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Digital law</text><line x1="269.1" y1="145.2" x2="158.8" y2="133.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="24.2" y="110.8" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="92.2" y="129.8" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Intellectual property</text><line x1="292.4" y1="113.2" x2="224.2" y2="82.5" stroke="#4dd0e1" stroke-width="1.8"/><rect x="115.1" y="45.8" width="136" height="28" rx="14" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="183.1" y="64.8" fill="#e0f7fa" font-size="11.5" text-anchor="middle">Health and balance</text>
    </svg>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Skill + responsibility = good digital citizen.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 Technical Background</h3>
    <p>The ten dimensions are: <strong>digital access</strong> (fair access for all), <strong>digital literacy</strong> (skills to use and evaluate technology), <strong>digital communication</strong> (choosing the right tool and tone), <strong>digital etiquette</strong> (polite behaviour online), <strong>rights and responsibilities</strong> (freedoms with duties), <strong>safety and security</strong> (protecting accounts and devices), <strong>privacy</strong> (controlling personal information), <strong>digital law</strong> (following rules on cybercrime, data protection and copyright), <strong>intellectual property</strong> (respecting creators’ work) and <strong>digital health and balance</strong> (healthy, balanced technology use). In Kenya, laws such as the Data Protection Act (2019) and the Computer Misuse and Cybercrimes Act (2018) set out rules for handling personal data and for offences committed using computers.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital citizenship</strong>
    </p>
    <p style="margin:6px 0;">Responsible, safe, ethical and respectful use of technology.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital literacy</strong>
    </p>
    <p style="margin:6px 0;">Skills to find, evaluate, create and communicate with technology.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital rights</strong>
    </p>
    <p style="margin:6px 0;">Freedoms people have when using technology.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Free expression</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital responsibilities</strong>
    </p>
    <p style="margin:6px 0;">Duties that come with digital rights.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Respect others</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital law</strong>
    </p>
    <p style="margin:6px 0;">Rules governing the use of technology.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital wellbeing</strong>
    </p>
    <p style="margin:6px 0;">Healthy balance in technology use.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">1. Why Digital Citizenship Matters</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>It protects you and others from harm such as fraud and bullying.</li>
    <li>It builds trust in online communities and services.</li>
    <li>It protects your reputation and future opportunities.</li>
    <li>It helps stop the spread of misinformation.</li>
    <li>It respects the rights of creators and other users.</li>
    <li>It supports healthy and balanced lives.</li>
    <li>It keeps you within the law.</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">2. Rights and Responsibilities</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Digital right</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Matching responsibility</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Freedom of expression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Express opinions respectfully, without hate or false claims</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Access to information</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check accuracy before sharing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Privacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect other people’s privacy too</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use of digital content</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acknowledge creators; follow licences</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safety online</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Report harmful behaviour; protect your accounts</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Participation in online communities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Follow group rules and be accountable for your actions</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 1: Applying the dimensions</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A learner shares a classmate’s embarrassing photo in a class group without asking. Which dimensions of digital citizenship are broken?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Consider privacy, etiquette and responsibility.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Privacy</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The classmate did not give permission.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Etiquette</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The act is disrespectful and hurtful.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Rights and responsibilities</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Freedom to post comes with a duty not to harm others.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e0f7fa;">Step 4: Possibly law</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Some harmful sharing can be an offence.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> Privacy, etiquette, and rights and responsibilities (and possibly digital law).</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e0f7fa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Define digital citizenship.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Responsible, safe, ethical and respectful use of technology.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Name four dimensions of digital citizenship.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Access, literacy, etiquette, privacy (any four).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give a responsibility that matches freedom of expression.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Express opinions respectfully without hate or false claims.</div>
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
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reflection</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ethical reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Discussion</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classification</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Creating a Class Digital Citizenship Charter</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To agree on rules for responsible behaviour in class digital spaces.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with word processor or shared document</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Projector</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">List of the ten dimensions</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect all suggestions; use school-approved shared documents.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In groups, take two dimensions each.</li>
    <li>Write two clear rules for each dimension for the class group or learning platform.</li>
    <li>Combine all rules in a shared document.</li>
    <li>Vote on the final charter as a class.</li>
    <li>Format and display the charter.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Dimension</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule 1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule 2</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Etiquette</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Privacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safety and security</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why should learners write the rules themselves?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">People are more likely to follow rules they helped create.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How should the charter be enforced?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Through reminders, class leaders and the teacher.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A shared charter turns digital citizenship into practical class rules.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> Clear, agreed rules guide behaviour in digital spaces.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Vague rules such as “be good”.</li>
    <li>Rules that are impossible to follow.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Many organisations have acceptable use policies for ICT.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Analysis and Reasoning</h3>
    <p>Explain why a person with excellent technical skills may still be a poor digital citizen. Give two examples.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #4dd0e1;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 ICT in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Families agree on rules for phone use at home.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Digital wellbeing includes reducing unnecessary device use and energy.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Organisations set acceptable use policies; compliance officers enforce them.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which dimension covers fair access for all?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Inclusion.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Digital access.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which dimension covers healthy technology use?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Wellbeing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Digital health and balance.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Name a Kenyan law on personal data.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Digital law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">The Data Protection Act (2019).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Rate yourself out of 5 on each dimension.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Discuss rights and matching responsibilities.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Write a class digital citizenship charter.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Format the charter as a poster.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain the meaning and importance of digital citizenship.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Responsible use; protects, builds trust, reputation, stops misinformation, respects rights, wellbeing, law.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe six dimensions of digital citizenship.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Access, literacy, communication, etiquette, privacy, safety (any six with descriptions).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Match three digital rights with responsibilities.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Expression–respect; information–verify; privacy–respect others’ privacy.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should charter rules be specific?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">So people know exactly what to do.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How is digital citizenship like ordinary citizenship?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Both involve rights, duties, laws and respect for others.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Digital citizenship is the responsible, safe, ethical and respectful use of technology, joining skill with behaviour. Its ten dimensions are access, literacy, communication, etiquette, rights and responsibilities, safety and security, privacy, digital law, intellectual property, and health and balance. Every digital right comes with a responsibility.</p>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Meaning.</li>
    <li>Importance.</li>
    <li>Ten dimensions.</li>
    <li>Rights and responsibilities.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Skill + responsibility.</li>
    <li>Ten dimensions.</li>
    <li>Rights come with duties.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking skill alone makes a good digital citizen.</li>
    <li>Ignoring others’ rights.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the dimension wheel.</li>
    <li>Give real examples.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #00838f;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define then explain.</li>
    <li>Match rights to duties.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responsible behaviour.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing a charter.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-rating.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Online safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Self-esteem</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Good digital citizens make class groups and platforms safer for everyone.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain five dimensions of digital citizenship.</li>
    <li>Write three rules for your family’s phone use.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which dimension do I need to improve most?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Digital citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responsible tech use.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital skills.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Digital law</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tech rules.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Digital wellbeing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Healthy balance.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain digital citizenship and its dimensions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Digital citizenship is:',
            options: ['Owning many devices', 'Having many followers', 'Never going online', 'Responsible, safe, ethical use of technology'],
            correct: 3,
            explanation: 'The answer is Responsible, safe, ethical use of technology. Definition.'
        },
        {
            question: 'Polite behaviour online is digital:',
            options: ['Etiquette', 'Law', 'Access', 'Literacy'],
            correct: 0,
            explanation: 'The answer is Etiquette. Netiquette.'
        },
        {
            question: 'Skills to find and evaluate information are digital:',
            options: ['Etiquette', 'Literacy', 'Law', 'Access'],
            correct: 1,
            explanation: 'The answer is Literacy. Skills.'
        },
        {
            question: 'Controlling who sees your personal information is:',
            options: ['Access', 'Commerce', 'Privacy', 'Literacy'],
            correct: 2,
            explanation: 'The answer is Privacy. Dimension.'
        },
        {
            question: 'Respecting creators’ work falls under:',
            options: ['Intellectual property', 'Digital access', 'Health and balance', 'Communication'],
            correct: 0,
            explanation: 'The answer is Intellectual property. Dimension.'
        },
        {
            question: 'A healthy balance of screen time is digital:',
            options: ['Health and balance', 'Law', 'Etiquette', 'Access'],
            correct: 0,
            explanation: 'The answer is Health and balance. Wellbeing.'
        },
        {
            question: 'The matching responsibility for freedom of expression is to:',
            options: ['Insult others', 'Spread rumours', 'Hide your identity to harm', 'Express opinions respectfully'],
            correct: 3,
            explanation: 'The answer is Express opinions respectfully. Respect.'
        },
        {
            question: 'Kenya’s Data Protection Act was passed in:',
            options: ['1963', '2000', '2019', '2025'],
            correct: 2,
            explanation: 'The answer is 2019. Digital law.'
        },
        {
            question: 'A highly skilled user who bullies others is:',
            options: ['A good digital citizen', 'Following etiquette', 'A poor digital citizen', 'Practising wellbeing'],
            correct: 2,
            explanation: 'The answer is A poor digital citizen. Skill is not enough.'
        },
        {
            question: 'Fair access to technology for all is digital:',
            options: ['Law', 'Access', 'Etiquette', 'Security'],
            correct: 1,
            explanation: 'The answer is Access. Inclusion.'
        }
    ]
},
{
    name: '1.2.2 Digital Citizenship: Privacy, Digital Footprints, Online Safety and Cyberbullying',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Privacy, Digital Footprints, Online Safety and Cyberbullying</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how to protect personal information and respect others’ privacy, understand and manage your digital footprint, secure your accounts, recognise suspicious activity, and respond to cyberbullying, harassment and impersonation.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> What you post today can be seen by universities and employers years later. Strong security habits protect your money and identity, and knowing how to respond to bullying protects your wellbeing and that of others.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📸 Sharing photos</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔐 Passwords and PINs</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📍 Location settings</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💬 Group chats</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Gaming chats</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📧 Suspicious emails</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e0f7fa;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning, importance and dimensions of digital citizenship.</li>
    <li>Protect personal information and manage digital footprints.</li>
    <li>Respond appropriately to cyberbullying and harmful online behaviour.</li>
    <li>Evaluate the credibility of online information before sharing it.</li>
    <li>Respect intellectual property and practise digital etiquette.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e0f7fa;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Protect personal information.</li>
    <li>Explain active and passive digital footprints.</li>
    <li>Apply online safety practices.</li>
    <li>Respond to cyberbullying and harassment.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">❓ Key inquiry question:</strong> How should I behave responsibly in a digital world?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">🧰 What you already know:</strong> Lesson 1.2.1.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Personal information</strong> includes your full name, date of birth, phone number, home address, school, ID numbers, passwords, photos and location. <strong>Privacy</strong> is your right to control who sees and uses this information. Every online action leaves a <strong>digital footprint</strong>.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 230" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="40" width="270" height="150" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="155" y="120" fill="#fde68a" font-size="13" text-anchor="middle"></text><text x="155" y="66" fill="#fde68a" font-size="13" text-anchor="middle">Active footprint</text><text x="155" y="86" fill="#b2ebf2" font-size="11" text-anchor="middle">(what you choose to share)</text><text x="155" y="112" fill="#e0f7fa" font-size="12" text-anchor="middle">Posts and comments</text><text x="155" y="130" fill="#e0f7fa" font-size="12" text-anchor="middle">Photos and videos</text><text x="155" y="148" fill="#e0f7fa" font-size="12" text-anchor="middle">Profiles and bios</text><text x="155" y="166" fill="#e0f7fa" font-size="12" text-anchor="middle">Messages in groups</text><rect x="350" y="40" width="270" height="150" rx="10" fill="#0a2a2e" stroke="#f9a8d4" stroke-width="2"/><text x="485" y="120" fill="#fde68a" font-size="13" text-anchor="middle"></text><text x="485" y="66" fill="#fde68a" font-size="13" text-anchor="middle">Passive footprint</text><text x="485" y="86" fill="#b2ebf2" font-size="11" text-anchor="middle">(collected without you posting)</text><text x="485" y="112" fill="#e0f7fa" font-size="12" text-anchor="middle">Search history</text><text x="485" y="130" fill="#e0f7fa" font-size="12" text-anchor="middle">Location data</text><text x="485" y="148" fill="#e0f7fa" font-size="12" text-anchor="middle">Cookies and app tracking</text><text x="485" y="166" fill="#e0f7fa" font-size="12" text-anchor="middle">Websites visited</text><text x="320" y="24" fill="#b2ebf2" font-size="12" text-anchor="middle">Your digital footprint</text><text x="320" y="216" fill="#b2ebf2" font-size="11" text-anchor="middle">Both can last for years and be seen by others.</text>
    </svg>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Think before you post: would I be happy for a teacher, parent or future employer to see this?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 Technical Background</h3>
    <p><strong>Protecting privacy:</strong> share only what is necessary, use privacy settings, turn off location sharing when not needed, ask permission before sharing photos of others, and keep confidential information confidential. <strong>Account protection:</strong> use long, unique passwords or passphrases, turn on two-step verification, never share PINs or one-time codes, log out on shared devices and keep software updated. <strong>Suspicious activity</strong> includes unexpected login alerts, messages asking for codes, links promising prizes and requests from “friends” for money. <strong>Phishing</strong> is tricking people into revealing information through fake messages or websites. <strong>Cyberbullying</strong> is using digital technology to repeatedly hurt, threaten or embarrass someone; <strong>impersonation</strong> is pretending to be someone else online. The response is: do not reply in anger, save evidence (screenshots), block, report to the platform, and tell a trusted adult or teacher.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Personal information</strong>
    </p>
    <p style="margin:6px 0;">Details that identify a person.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Phone number</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Digital footprint</strong>
    </p>
    <p style="margin:6px 0;">The trail of data left by online activity.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Two-step verification</strong>
    </p>
    <p style="margin:6px 0;">A second check, such as a code, when logging in.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Phishing</strong>
    </p>
    <p style="margin:6px 0;">Tricking people into revealing information.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Fake bank link</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Cyberbullying</strong>
    </p>
    <p style="margin:6px 0;">Using technology to repeatedly hurt someone.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Impersonation</strong>
    </p>
    <p style="margin:6px 0;">Pretending to be someone else online.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Fake profile</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">1. Privacy, Footprints and Account Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Good practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share minimum personal information</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reduces risk of identity theft</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ask before sharing others’ photos</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respects their privacy</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Review privacy settings</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Controls who sees your posts</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turn off unnecessary location sharing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protects your physical safety</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use long, unique passphrases</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hard to guess or crack</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turn on two-step verification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Blocks most stolen-password logins</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never share PINs or one-time codes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No genuine organisation asks for them</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Log out on shared devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prevents others using your account</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Deleting a post does not always remove it — others may have saved or shared it. Prevention is better than deletion.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">2. Responding to Cyberbullying and Harmful Behaviour</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Step</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Action</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Do not retaliate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Replying in anger often makes it worse</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Save evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Take screenshots with dates</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Block</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stop the person contacting you</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Report</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the platform’s report tool</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5. Tell someone</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A parent, teacher, counsellor or trusted adult</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6. Support others</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not share hurtful content; check on the target</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 1: Scenario</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A fake account using a classmate’s name and photo is posting insults about other learners. What should you do?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Identify the behaviour and the correct response.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Identify</strong>
    </p>
    <div style="margin:6px 0 0 34px;">This is impersonation and cyberbullying.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Do not engage</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Do not reply or share the posts.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Evidence</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Screenshot the profile and posts.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e0f7fa;">Step 4: Report</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Report the account to the platform as impersonation.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e0f7fa;">Step 5: Tell</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Inform the classmate and a teacher.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> Do not engage; save evidence; report; tell the classmate and a trusted adult.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e0f7fa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Give two examples of personal information.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Phone number and home address (also ID number, passwords).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is phishing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Tricking people into revealing information through fake messages or sites.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is the first thing to avoid when cyberbullied?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Replying in anger (retaliating).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Never share real passwords or personal details in class activities.</li>
    <li>If an activity makes you uncomfortable, tell the teacher.</li>
    <li>Keep food and drinks out of the computer laboratory.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Risk awareness</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Decision making</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Account management</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Empathy</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Reviewing Privacy and Security Settings</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To review and improve privacy and security settings on a school account or demonstration device.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer or tablet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">School-approved account</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Settings checklist</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do not reveal passwords; work on your own account only.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Open the account’s privacy and security settings.</li>
    <li>Check who can see your profile and posts.</li>
    <li>Check whether two-step verification is on.</li>
    <li>Check location and app permissions.</li>
    <li>Change settings to safer options where needed (with teacher guidance).</li>
    <li>Record what you changed and why.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Setting</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Before</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">After</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reason</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Profile visibility</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two-step verification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Location sharing</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which setting made the biggest difference?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Often two-step verification or profile visibility.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why review settings regularly?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Apps change their default settings and features.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Reviewing settings is a simple way to protect privacy and security.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> Defaults are often less private than needed; users must choose safer options.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sharing screens with passwords visible.</li>
    <li>Changing others’ settings.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Security experts recommend regular privacy check-ups.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Analysis and Reasoning</h3>
    <p>Write a short guide: “Five things I will never share online, and why.”</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #4dd0e1;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 ICT in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Families protect mobile money with secret PINs.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Clearing unused apps and accounts reduces data stored on servers.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Data protection officers and cyber security analysts protect people’s information.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Is a passive footprint created by posting?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Passive.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">No — it is collected without posting, e.g. search history.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Should you share a one-time code with a caller from your “bank”?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Phishing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">No, never.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why save evidence of cyberbullying?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Screenshots.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To support a report.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Search your name online and review what appears.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Role-play responding to a phishing call.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a poster on responding to cyberbullying.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Review privacy settings on a school account.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain five ways to protect personal information online.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Share minimum, privacy settings, location off, ask permission, keep confidential.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Distinguish active and passive digital footprints with examples.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Active: posts, photos; passive: search history, location, cookies.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Describe the steps to take when cyberbullied.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Do not retaliate, save evidence, block, report, tell an adult, support others.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why only change your own account settings?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Changing others’ settings without permission is wrong.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How can a digital footprint help you?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">A positive footprint (achievements, projects) can support applications.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Personal information must be protected: share the minimum, use privacy settings, limit location sharing and ask before sharing others’ content. Digital footprints may be active or passive and can last for years. Secure accounts with strong unique passphrases and two-step verification, never share codes, and watch for phishing. Respond to cyberbullying and impersonation by not retaliating, saving evidence, blocking, reporting and telling a trusted adult.</p>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Personal information.</li>
    <li>Footprints.</li>
    <li>Account safety.</li>
    <li>Phishing.</li>
    <li>Cyberbullying response.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Think before you post.</li>
    <li>Never share codes or PINs.</li>
    <li>Save, block, report, tell.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking deleted posts disappear.</li>
    <li>Replying to bullies in anger.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use passphrases.</li>
    <li>Review settings regularly.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #00838f;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give steps in order.</li>
    <li>Explain why each step matters.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Settings review.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responding to bullying.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respecting privacy.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Love</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Online safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Self-esteem</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Simple habits prevent most account takeovers and privacy problems.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a guide to strong passwords and two-step verification.</li>
    <li>Explain how to respond to impersonation online.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What does my digital footprint say about me?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Personal information</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifying details.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Phishing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Information trickery.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cyberbullying</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital bullying.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Impersonation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fake identity.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can protect my privacy and accounts.</p>
    <p style="margin:6px 0;">☐ I can respond to cyberbullying.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is personal information?',
            options: ['The weather', 'Home address', 'A school motto', 'A song title'],
            correct: 1,
            explanation: 'The answer is Home address. Identifying.'
        },
        {
            question: 'Search history is part of your:',
            options: ['Active footprint only', 'Password', 'Passive digital footprint', 'Operating system'],
            correct: 2,
            explanation: 'The answer is Passive digital footprint. Collected.'
        },
        {
            question: 'Posting a photo creates an:',
            options: ['Passive footprint only', 'Active footprint', 'Encryption', 'Backup'],
            correct: 1,
            explanation: 'The answer is Active footprint. Chosen sharing.'
        },
        {
            question: 'A message asking for your one-time code is likely:',
            options: ['A genuine bank request', 'Phishing', 'A school notice', 'An update'],
            correct: 1,
            explanation: 'The answer is Phishing. Never share.'
        },
        {
            question: 'Two-step verification adds:',
            options: ['A second check when logging in', 'More storage', 'Faster Internet', 'More followers'],
            correct: 0,
            explanation: 'The answer is A second check when logging in. Security.'
        },
        {
            question: 'A long, unique passphrase is:',
            options: ['Easy to guess', 'Shared with friends', 'Written on the screen', 'Hard to guess'],
            correct: 3,
            explanation: 'The answer is Hard to guess. Strong.'
        },
        {
            question: 'Pretending to be someone else online is:',
            options: ['Impersonation', 'Netiquette', 'Citation', 'Backup'],
            correct: 0,
            explanation: 'The answer is Impersonation. Fake identity.'
        },
        {
            question: 'When cyberbullied, you should first:',
            options: ['Insult back', 'Share the posts', 'Avoid retaliating', 'Delete your evidence'],
            correct: 2,
            explanation: 'The answer is Avoid retaliating. Stay calm.'
        },
        {
            question: 'Before sharing a friend’s photo you should:',
            options: ['Post it immediately', 'Edit it to mock them', 'Tag strangers', 'Ask permission'],
            correct: 3,
            explanation: 'The answer is Ask permission. Privacy.'
        },
        {
            question: 'On a shared computer, after use you should:',
            options: ['Log out', 'Stay logged in', 'Save your password', 'Share your account'],
            correct: 0,
            explanation: 'The answer is Log out. Security.'
        }
    ]
},
{
    name: '1.2.3 Digital Citizenship: Information Quality, Intellectual Property, Digital Etiquette and Ethical Decisions',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Information Quality, Intellectual Property, Digital Etiquette and Ethical Decisions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn to judge the credibility of online sources, tell misinformation from disinformation, verify claims before sharing, respect copyright and avoid plagiarism, express opinions responsibly, follow digital etiquette and make ethical decisions online.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> False information can cause panic, harm health and damage reputations. Copying without credit is dishonest and can be illegal. Respectful communication keeps online spaces useful for learning and discussion.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 News and forwards</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Assignments and projects</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎵 Music and videos</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🖼️ Images for posters</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💬 Online debates</span><span style="background:#0b1a2e;border:1px solid #b2ebf2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Class forums</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e0f7fa;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning, importance and dimensions of digital citizenship.</li>
    <li>Protect personal information and manage digital footprints.</li>
    <li>Respond appropriately to cyberbullying and harmful online behaviour.</li>
    <li>Evaluate the credibility of online information before sharing it.</li>
    <li>Respect intellectual property and practise digital etiquette.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e0f7fa;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Evaluate the credibility of sources.</li>
    <li>Distinguish misinformation and disinformation.</li>
    <li>Respect intellectual property and cite sources.</li>
    <li>Practise digital etiquette and ethical decision-making.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">❓ Key inquiry question:</strong> How should I behave responsibly in a digital world?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e0f7fa;">🧰 What you already know:</strong> Lessons 1.2.1 and 1.2.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Misinformation</strong> is false information shared without the intention to deceive — for example, forwarding a fake cure believing it is true. <strong>Disinformation</strong> is false information created and spread <em>deliberately</em> to mislead. Both can be stopped by <strong>verifying</strong> before sharing.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 660 180" width="660" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="10" y="50" width="148" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="84" y="81" fill="#fde68a" font-size="13" text-anchor="middle">S — Stop</text><text x="84" y="101" fill="#e0f7fa" font-size="11" text-anchor="middle">Pause before sharing</text><line x1="160" y1="85" x2="170" y2="85" stroke="#fde68a" stroke-width="2.5"/><polygon points="170,85 161.7,88.5 161.7,81.5" fill="#fde68a"/><rect x="172" y="50" width="148" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="246" y="81" fill="#fde68a" font-size="13" text-anchor="middle">I — Investigate</text><text x="246" y="101" fill="#e0f7fa" font-size="11" text-anchor="middle">Who is the source?</text><line x1="322" y1="85" x2="332" y2="85" stroke="#fde68a" stroke-width="2.5"/><polygon points="332,85 323.7,88.5 323.7,81.5" fill="#fde68a"/><rect x="334" y="50" width="148" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="408" y="81" fill="#fde68a" font-size="13" text-anchor="middle">F — Find</text><text x="408" y="101" fill="#e0f7fa" font-size="11" text-anchor="middle">Other reliable coverage</text><line x1="484" y1="85" x2="494" y2="85" stroke="#fde68a" stroke-width="2.5"/><polygon points="494,85 485.7,88.5 485.7,81.5" fill="#fde68a"/><rect x="496" y="50" width="148" height="70" rx="10" fill="#0a2a2e" stroke="#4dd0e1" stroke-width="2"/><text x="570" y="81" fill="#fde68a" font-size="13" text-anchor="middle">T — Trace</text><text x="570" y="101" fill="#e0f7fa" font-size="11" text-anchor="middle">Go to the original claim</text><text x="330" y="30" fill="#b2ebf2" font-size="12" text-anchor="middle">SIFT: four moves to check online information</text><text x="330" y="152" fill="#b2ebf2" font-size="11" text-anchor="middle">If you cannot verify it, do not share it.</text>
    </svg>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">🗣️ In Simple Words</p>
    <div>If you cannot verify it, do not share it.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔭 Technical Background</h3>
    <p>A credible source has a known <strong>author</strong> or organisation with relevant expertise, is <strong>current</strong>, gives <strong>evidence</strong> or references, has a clear <strong>purpose</strong> (to inform rather than to sell or provoke), and agrees with other reliable sources. <strong>Intellectual property</strong> is creations of the mind — writing, music, images, software, inventions and designs. <strong>Copyright</strong> gives creators rights over how their work is copied and shared. <strong>Plagiarism</strong> is presenting someone else’s work or ideas as your own. To use others’ work responsibly: ask permission, use openly licensed content (such as Creative Commons) according to its terms, quote briefly and <strong>cite</strong> the source. <strong>Digital etiquette</strong> (netiquette) means respectful participation: suitable language, no shouting in capital letters, staying on topic, respecting time zones and group rules. Responsible expression means disagreeing with <em>ideas</em> using evidence, not attacking <em>people</em>.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Credibility</strong>
    </p>
    <p style="margin:6px 0;">How trustworthy a source is.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Misinformation</strong>
    </p>
    <p style="margin:6px 0;">False information shared without intent to deceive.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Disinformation</strong>
    </p>
    <p style="margin:6px 0;">False information spread deliberately to mislead.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Copyright</strong>
    </p>
    <p style="margin:6px 0;">Legal rights of creators over their original work.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>©</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Plagiarism</strong>
    </p>
    <p style="margin:6px 0;">Presenting others’ work as your own.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Netiquette</strong>
    </p>
    <p style="margin:6px 0;">Rules of polite behaviour online.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #4dd0e1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Creative Commons</strong>
    </p>
    <p style="margin:6px 0;">Licences that let creators share work on stated terms.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>CC BY</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">1. Judging Information and Respecting Intellectual Property</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Credibility check</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Question to ask</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Author</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Who wrote it? Are they qualified?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Date</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is it current?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Are facts supported with sources?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Purpose</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is it informing, selling or provoking?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Corroboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do other reliable sources agree?</td>
    </tr>
    </table>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Responsible use</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Irresponsible use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Citing sources in assignments</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copying and pasting without credit</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using openly licensed images and following the terms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using any image found online as if it were yours</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asking permission to use a classmate’s work</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Submitting a friend’s work as your own</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Buying or streaming music legally</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distributing pirated music or films</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 1: Writing a citation</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write a simple citation for an online article titled “Managing E-Waste” written by J. Otieno, published on an organisation’s website in 2025.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Include author, year, title, source and date accessed.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Author and year</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Otieno, J. (2025).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Title</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Managing E-Waste.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Source</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Name of the organisation’s website.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e0f7fa;">Step 4: Accessed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Date you viewed it.</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> Otieno, J. (2025). Managing E-Waste. [Organisation website]. Accessed [date].</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">2. Digital Etiquette, Responsible Expression and Ethical Decisions</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Netiquette rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use respectful language</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No insults or hate speech</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Avoid all capital letters</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">CAPITALS read as shouting</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stay on topic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep class groups for class matters</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect time</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not message groups late at night</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disagree with ideas, not people</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">“I see it differently because…”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Think before forwarding</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check accuracy and permission</td>
    </tr>
    </table>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Ethical decision question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Ask yourself</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is it true and verified?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Could it hurt or humiliate someone?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Could it put anyone at risk?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Permission</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do I have consent to share it?</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Necessity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Does it need to be shared?</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Harm</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What is the worst that could happen?</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e0f7fa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is the difference between misinformation and disinformation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Misinformation is shared without intent to deceive; disinformation is spread deliberately to mislead.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is plagiarism?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Presenting someone else’s work as your own.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why avoid typing in all capital letters?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">It reads as shouting.</div>
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
    <h3 style="color:#b2ebf2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Source evaluation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Citation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respectful communication</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ethical reasoning</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Fact-Checking a Viral Message</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To use the SIFT method to check a viral message before sharing.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with Internet</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sample viral messages (teacher-prepared)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use approved sites; do not forward the sample messages.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read the sample message (Stop).</li>
    <li>Find out who created it and whether they are reliable (Investigate the source).</li>
    <li>Search for the same claim on trusted news or official sites (Find better coverage).</li>
    <li>Look for the original source of any quote, image or statistic (Trace).</li>
    <li>Decide: true, false or unverified.</li>
    <li>Write a polite reply you could post to correct the message if it is false.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">SIFT step</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you found</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stop</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Investigate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trace</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verdict</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why do false messages spread quickly?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">They are emotional, surprising and easy to forward.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How can you correct someone politely?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Share a reliable source and focus on the facts, not the person.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Verifying information before sharing stops the spread of misinformation.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> SIFT checks the source, other coverage and the original claim.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Trusting a message because many people shared it.</li>
    <li>Correcting people rudely.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Fact-checking organisations and journalists use similar methods daily.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Analysis and Reasoning</h3>
    <p>Explain why criticising an idea is different from attacking a person online. Rewrite this comment respectfully: “YOUR IDEA IS STUPID, YOU KNOW NOTHING.”</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #4dd0e1;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 ICT in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Families avoid harm by checking health claims before acting on them.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Accurate information supports good environmental decisions.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Journalists, fact-checkers, librarians and lawyers deal with information quality and copyright.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Is forwarding a fake cure you believe is true misinformation or disinformation?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: No intent to deceive.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Misinformation.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What licence family lets creators share work on stated terms?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Open licence.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Creative Commons.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What should you do before sharing a photo of a news event?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: SIFT.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Trace its original source and date.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Check one message you recently received using SIFT.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Rewrite rude comments respectfully.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Fact-check three viral claims.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find an openly licensed image and write its attribution.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain five ways to judge the credibility of a source.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Author, date, evidence, purpose, corroboration.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Explain how learners can avoid plagiarism.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Cite sources, use own words, quote briefly, ask permission, use open licences.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Describe five rules of digital etiquette.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Respectful language, no capitals, stay on topic, respect time, disagree with ideas.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should you not forward the sample messages?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">They may be false and could spread misinformation.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is disinformation especially dangerous?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">It is designed deliberately to deceive and often targets emotions.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Credible sources have qualified authors, current dates, evidence, a clear purpose and agreement with other reliable sources. Misinformation is false but shared innocently; disinformation is deliberate. Use SIFT — stop, investigate, find, trace — before sharing. Respect intellectual property by citing, asking permission and following licences; avoid plagiarism. Practise netiquette, disagree respectfully and weigh accuracy, respect, safety, permission, necessity and harm before acting online.</p>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Credibility.</li>
    <li>Misinformation vs disinformation.</li>
    <li>SIFT.</li>
    <li>IP and plagiarism.</li>
    <li>Netiquette.</li>
    <li>Ethical decisions.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Verify before sharing.</li>
    <li>Cite your sources.</li>
    <li>Disagree with ideas, not people.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Trusting popularity as proof.</li>
    <li>Thinking anything online is free to use.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SIFT every time.</li>
    <li>Keep a list of sources while researching.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #00838f;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish terms clearly.</li>
    <li>Give examples.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fact-checking.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respectful expression.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ethical decisions.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Peace</span>
    </div>
    <h4 style="color:#e0f7fa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Online safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Checking before sharing protects communities from panic and harm.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Fact-check a message using SIFT and report your findings.</li>
    <li>Explain the difference between copyright and plagiarism.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Have I ever shared something without checking it?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Credibility</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trustworthiness.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Disinformation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deliberate falsehood.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Plagiarism</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copying without credit.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Netiquette</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Online manners.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can evaluate sources and verify claims.</p>
    <p style="margin:6px 0;">☐ I can respect IP and practise netiquette.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'False information spread deliberately is:',
            options: ['Misinformation', 'Disinformation', 'Citation', 'Netiquette'],
            correct: 1,
            explanation: 'The answer is Disinformation. Intentional.'
        },
        {
            question: 'Sharing a false claim you believe is true is:',
            options: ['Misinformation', 'Disinformation', 'Plagiarism', 'Encryption'],
            correct: 0,
            explanation: 'The answer is Misinformation. Unintentional.'
        },
        {
            question: 'The S in SIFT stands for:',
            options: ['Share', 'Search only', 'Send', 'Stop'],
            correct: 3,
            explanation: 'The answer is Stop. Pause first.'
        },
        {
            question: 'A credible source usually:',
            options: ['Has no author', 'Is very old', 'Gives evidence and references', 'Only sells products'],
            correct: 2,
            explanation: 'The answer is Gives evidence and references. Evidence.'
        },
        {
            question: 'Presenting a friend’s essay as your own is:',
            options: ['Citation', 'Collaboration', 'Plagiarism', 'Licensing'],
            correct: 2,
            explanation: 'The answer is Plagiarism. Dishonest.'
        },
        {
            question: 'Copyright protects:',
            options: ['Only hardware', 'Creators’ original work', 'Internet speed', 'Passwords'],
            correct: 1,
            explanation: 'The answer is Creators’ original work. Rights.'
        },
        {
            question: 'Typing in all capital letters is seen as:',
            options: ['Shouting', 'Polite', 'Formal', 'Quiet'],
            correct: 0,
            explanation: 'The answer is Shouting. Netiquette.'
        },
        {
            question: 'Responsible disagreement focuses on:',
            options: ['Insulting the person', 'Spreading rumours', 'Shouting', 'Ideas and evidence'],
            correct: 3,
            explanation: 'The answer is Ideas and evidence. Respect.'
        },
        {
            question: 'Before sharing content you should consider:',
            options: ['Only how many likes it will get', 'Nothing', 'Only speed', 'Accuracy, permission and harm'],
            correct: 3,
            explanation: 'The answer is Accuracy, permission and harm. Ethics.'
        },
        {
            question: 'Creative Commons licences allow:',
            options: ['Use on terms set by the creator', 'Any use without credit', 'Selling others’ work freely', 'Removing the author’s name'],
            correct: 0,
            explanation: 'The answer is Use on terms set by the creator. Open licensing.'
        }
    ]
},
{
    name: '1.2 Laboratory Activity: Verify, Cite and Secure',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🧪 Verify, Cite and Secure</h2>
    <p style="font-size:16px;">In this three-part activity you will fact-check a claim using SIFT, prepare a short properly cited fact sheet using an openly licensed image, and create and test a strong passphrase strategy — putting digital citizenship into practice.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#b2ebf2;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accounts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never type real passwords into class documents.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use approved websites and openly licensed images.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not forward sample claims outside class.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equipment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No food or drinks; report faults.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Part A Verify, Part B Cite, Part C Secure</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To apply information checking, respect for intellectual property and account security.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with Internet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Word processor</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Teacher-selected claim</span><span style="background:#0b1a2e;border:1px solid #00838f;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Openly licensed image library</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use example passphrases only — not your real ones.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Part A: Apply SIFT to the claim and record your verdict with two reliable sources.</li>
    <li>Part B: Create a one-page fact sheet on the topic using your own words.</li>
    <li>Part B: Insert one openly licensed image and write its attribution (title, creator, licence).</li>
    <li>Part B: List your sources in a references section.</li>
    <li>Part C: Write three example passphrases using four random words, and explain why each is strong.</li>
    <li>Part C: Write a checklist of five account security habits.</li>
    <li>Save and submit your work by email.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Part</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Evidence of completion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Done (✓)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A: SIFT verdict with sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B: Fact sheet with attribution and references</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C: Example passphrases and checklist</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why is a four-word passphrase stronger than a short password?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">It is long and hard to guess, yet easy to remember.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What information must an image attribution include?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Title, creator, source and licence.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Verifying information, citing correctly and securing accounts are everyday digital citizenship skills.</p>
    <p><strong style="color:#fde68a;">Explanation:</strong> Each part applies a different dimension: literacy, intellectual property and security.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using real passwords.</li>
    <li>Missing licence details.</li>
    <li>Copying text into the fact sheet.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Students, journalists and professionals use these habits every day.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Reflect: which part was hardest and why? How will you use these skills in your next assignment?</p>
    <div style="background:#0b1a2e;border-left:4px solid #00838f;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#b2ebf2;font-weight:bold;">✏️ Worked Example 2: Sample attribution</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write an attribution for an image titled “Solar Panels” by A. Wambui under a CC BY licence.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Title, creator, licence.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e0f7fa;">Step 1: Title</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“Solar Panels”</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e0f7fa;">Step 2: Creator</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A. Wambui</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#00838f;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e0f7fa;">Step 3: Licence</strong>
    </p>
    <div style="margin:6px 0 0 34px;">CC BY</div>
    </div>
    <div style="background:#0a2a2e;border:1px solid #00838f;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#b2ebf2;">✅ Model answer:</strong> “Solar Panels” by A. Wambui, licensed under CC BY.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the four SIFT moves.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Stop, Investigate the source, Find better coverage, Trace the claim.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give two account security habits.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Two-step verification and unique passphrases (also logging out, never sharing codes).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> What does CC BY require?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Credit to the creator.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why write the fact sheet in your own words?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To avoid plagiarism and show understanding.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why use example passphrases only?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">To keep real passwords secret.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'A four-random-word passphrase is strong because it is:',
            options: ['Short', 'Your name', 'Long and hard to guess', 'Shared'],
            correct: 2,
            explanation: 'The answer is Long and hard to guess. Length.'
        },
        {
            question: 'An image attribution should include the:',
            options: ['Your phone number', 'Title, creator and licence', 'The colour', 'File size only'],
            correct: 1,
            explanation: 'The answer is Title, creator and licence. Credit.'
        },
        {
            question: 'In Part A, a verdict should be supported by:',
            options: ['Rumours', 'Number of forwards', 'Guesswork', 'Reliable sources'],
            correct: 3,
            explanation: 'The answer is Reliable sources. Evidence.'
        },
        {
            question: 'Real passwords in class documents should be:',
            options: ['Shared', 'Printed', 'Never typed', 'Emailed'],
            correct: 2,
            explanation: 'The answer is Never typed. Security.'
        },
        {
            question: 'A references section lists:',
            options: ['Friends’ names', 'Passwords', 'Test scores', 'Sources used'],
            correct: 3,
            explanation: 'The answer is Sources used. Citation.'
        }
    ]
},
{
    name: '1.2 Quiz: Digital Citizenship',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📝 Quiz — Digital Citizenship</h2>
    <p style="font-size:16px;">This quiz checks lessons 1.2.1–1.2.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Meaning and dimensions</li>
    <li>Rights and responsibilities</li>
    <li>Privacy and footprints</li>
    <li>Online safety and cyberbullying</li>
    <li>Information quality</li>
    <li>Intellectual property and etiquette</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #00838f;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#b2ebf2;font-weight:bold;">📝 Exam Tip</p>
    <div>Remember: think before you post, verify before you share, cite before you submit.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Digital citizenship joins technical skill with:',
            options: ['Expensive devices', 'Fast Internet', 'Many followers', 'Responsible behaviour'],
            correct: 3,
            explanation: 'The answer is Responsible behaviour. Behaviour.'
        },
        {
            question: 'Choosing the right tool and tone for a message is digital:',
            options: ['Law', 'Communication', 'Access', 'Property'],
            correct: 1,
            explanation: 'The answer is Communication. Dimension.'
        },
        {
            question: 'Kenya’s Computer Misuse and Cybercrimes Act is an example of:',
            options: ['Netiquette', 'Digital law', 'Digital access', 'Wellbeing'],
            correct: 1,
            explanation: 'The answer is Digital law. Law.'
        },
        {
            question: 'The responsibility that matches the right to privacy is to:',
            options: ['Share others’ data', 'Hack accounts', 'Respect others’ privacy', 'Post addresses'],
            correct: 2,
            explanation: 'The answer is Respect others’ privacy. Reciprocity.'
        },
        {
            question: 'Location data collected by an app is part of your:',
            options: ['Passive footprint', 'Active footprint', 'Copyright', 'Citation'],
            correct: 0,
            explanation: 'The answer is Passive footprint. Collected.'
        },
        {
            question: 'A link promising a prize if you enter your PIN is:',
            options: ['A genuine offer', 'A citation', 'An update', 'Phishing'],
            correct: 3,
            explanation: 'The answer is Phishing. Scam.'
        },
        {
            question: 'After being cyberbullied, saving screenshots helps to:',
            options: ['Spread the content', 'Embarrass the victim', 'Delete the account', 'Provide evidence for a report'],
            correct: 3,
            explanation: 'The answer is Provide evidence for a report. Evidence.'
        },
        {
            question: 'A fake profile using a classmate’s photo is:',
            options: ['Netiquette', 'Impersonation', 'Citation', 'Encryption'],
            correct: 1,
            explanation: 'The answer is Impersonation. Fake identity.'
        },
        {
            question: 'Checking whether other reliable sources report a claim is:',
            options: ['Finding better coverage', 'Stopping', 'Plagiarism', 'Licensing'],
            correct: 0,
            explanation: 'The answer is Finding better coverage. SIFT F.'
        },
        {
            question: 'A source with no author and no date is:',
            options: ['Most credible', 'Less credible', 'Always correct', 'Official'],
            correct: 1,
            explanation: 'The answer is Less credible. Credibility.'
        },
        {
            question: 'Using a song in a video without permission may break:',
            options: ['Copyright', 'Netiquette only', 'Privacy only', 'Access'],
            correct: 0,
            explanation: 'The answer is Copyright. IP.'
        },
        {
            question: 'Citing sources helps to avoid:',
            options: ['Electricity', 'Updates', 'Plagiarism', 'Storage'],
            correct: 2,
            explanation: 'The answer is Plagiarism. Honesty.'
        },
        {
            question: 'Messaging a class group late at night ignores:',
            options: ['Respect for time', 'Copyright', 'Encryption', 'Backups'],
            correct: 0,
            explanation: 'The answer is Respect for time. Netiquette.'
        },
        {
            question: 'Asking “Does this need to be shared?” is about:',
            options: ['Speed', 'Colour', 'Necessity', 'Storage'],
            correct: 2,
            explanation: 'The answer is Necessity. Ethics.'
        },
        {
            question: 'An attribution for a CC BY image must credit the:',
            options: ['Printer', 'Teacher only', 'Creator', 'Browser'],
            correct: 2,
            explanation: 'The answer is Creator. Licence term.'
        }
    ]
},
{
    name: '1.2 Assignment: Digital Citizenship Awareness Campaign',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">📂 Digital Citizenship Awareness Campaign</h2>
    <p style="font-size:16px;">In groups, you will design a digital citizenship awareness campaign for Grade 10 learners joining the school, focusing on one or two dimensions.</p>
    <p style="margin:6px 0 0 0;color:#e0f7fa;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🎬 The Task in Context</h3>
    <p>Many new learners join class groups and learning platforms for the first time. The school wants a short campaign — posters, a slide show or a short skit script — to help them stay safe, respectful and responsible online.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose one or two dimensions (e.g. privacy and safety, or information quality and intellectual property).</li>
    <li>Research the main risks and good practices.</li>
    <li>Plan three key messages written in simple language.</li>
    <li>Create campaign materials: posters or a five-slide presentation, using openly licensed images with attributions.</li>
    <li>Include a short scenario showing the right response to a problem.</li>
    <li>Present to the class and collect feedback.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Campaign materials with attributions</li>
    <li>Scenario or skit script</li>
    <li>References list</li>
    <li>Individual reflections</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy of content</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, detailed and well-researched</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clarity of messages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, memorable and suitable for the audience</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unclear</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intellectual property</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All sources and images correctly attributed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most attributed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some attributed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">None attributed</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation and teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engaging, all members contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Basic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poor</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Keep messages short and positive.<br>Use realistic scenarios without naming real people.<br>Credit every image and source.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I learn from researching my dimension?</li>
    <li>How will I change my own online behaviour?</li>
    <li>How did our group work together?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Campaign messages for new learners should be:',
            options: ['Simple and clear', 'Long and technical', 'Frightening only', 'Unrelated'],
            correct: 0,
            explanation: 'The answer is Simple and clear. Audience.'
        },
        {
            question: 'Images in the campaign must be:',
            options: ['Copied from anywhere', 'Uncredited', 'Openly licensed and attributed', 'Pirated'],
            correct: 2,
            explanation: 'The answer is Openly licensed and attributed. IP.'
        },
        {
            question: 'Scenarios should avoid:',
            options: ['Showing good responses', 'Clear steps', 'Simple language', 'Naming real people'],
            correct: 3,
            explanation: 'The answer is Naming real people. Respect.'
        },
        {
            question: 'A references list shows:',
            options: ['Passwords', 'Sources used', 'Phone numbers', 'Exam marks'],
            correct: 1,
            explanation: 'The answer is Sources used. Honesty.'
        },
        {
            question: 'Collecting feedback helps to:',
            options: ['Waste time', 'Hide errors', 'Copy others', 'Improve the campaign'],
            correct: 3,
            explanation: 'The answer is Improve the campaign. Improvement.'
        }
    ]
},
{
    name: '1.2 Revision: Digital Citizenship',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🔁 Revision — Digital Citizenship</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.2 before the end-of-strand assessment.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🧑🏾‍💻 Meaning</p>
    <div>Responsible, safe, ethical, respectful use of technology.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🔟 Dimensions</p>
    <div>Access, literacy, communication, etiquette, rights, safety, privacy, law, IP, health.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">⚖️ Rights</p>
    <div>Each right comes with a responsibility.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">👣 Footprint</p>
    <div>Active (posts) and passive (tracking); long-lasting.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🔐 Security</p>
    <div>Passphrases, two-step verification, never share codes.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🛑 Cyberbullying</p>
    <div>Do not retaliate; save, block, report, tell.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">🔍 SIFT</p>
    <div>Stop, Investigate, Find, Trace.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #4dd0e1;">
    <p style="margin:0 0 4px 0;color:#b2ebf2;font-weight:bold;">©️ IP</p>
    <div>Cite, ask permission, follow licences; avoid plagiarism.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Phishing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tricking people into revealing information</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fake bank SMS</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Impersonation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pretending to be someone else</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fake profile</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Misinformation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">False, shared innocently</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forwarded fake cure</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disinformation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">False, spread deliberately</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fabricated news</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plagiarism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Others’ work as your own</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copied essay</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain the meaning and importance of digital citizenship.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Responsible use; protects, builds trust, reputation, law.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe six dimensions of digital citizenship.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Any six with explanations.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain five ways to protect your privacy and accounts.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Minimum sharing, settings, location off, passphrases, two-step verification.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Describe the SIFT method.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Stop, investigate source, find better coverage, trace original.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how to use others’ work responsibly.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e0f7fa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f7fa;">Cite, ask permission, open licences, brief quotes, own words.</div>
    </details>
    </div>
    </div>
    <div style="background:#0a2a2e;padding:20px;border-radius:12px;border:1px solid #00838f;margin-bottom:20px;">
    <h3 style="color:#b2ebf2;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can explain digital citizenship.</p>
    <p style="margin:6px 0;">☐ I can protect privacy and respond to bullying.</p>
    <p style="margin:6px 0;">☐ I can verify information.</p>
    <p style="margin:6px 0;">☐ I can respect IP and practise netiquette.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Respecting group rules in a class forum is digital:',
            options: ['Access', 'Law', 'Security', 'Etiquette'],
            correct: 3,
            explanation: 'The answer is Etiquette. Netiquette.'
        },
        {
            question: 'Deleting a post guarantees it is gone forever:',
            options: ['True always', 'Only on Sundays', 'False — others may have saved it', 'Only for photos'],
            correct: 2,
            explanation: 'The answer is False — others may have saved it. Permanence.'
        },
        {
            question: 'Genuine organisations ask for your one-time code:',
            options: ['Never', 'Always', 'Every week', 'When calling'],
            correct: 0,
            explanation: 'The answer is Never. Phishing sign.'
        },
        {
            question: 'The T in SIFT means:',
            options: ['Type quickly', 'Trace the original claim', 'Trust the sender', 'Tell everyone'],
            correct: 1,
            explanation: 'The answer is Trace the original claim. Original.'
        },
        {
            question: 'Disagreeing with evidence rather than insults is:',
            options: ['Responsible expression', 'Cyberbullying', 'Plagiarism', 'Phishing'],
            correct: 0,
            explanation: 'The answer is Responsible expression. Respect.'
        },
        {
            question: 'Pirated films break:',
            options: ['Netiquette only', 'Two-step verification', 'Privacy only', 'Copyright'],
            correct: 3,
            explanation: 'The answer is Copyright. IP.'
        },
        {
            question: 'Taking breaks from screens supports digital:',
            options: ['Law', 'Health and balance', 'Commerce', 'Property'],
            correct: 1,
            explanation: 'The answer is Health and balance. Wellbeing.'
        },
        {
            question: 'Before acting online, consider accuracy, respect, safety, permission, necessity and:',
            options: ['Colour', 'Speed', 'Harm', 'Price'],
            correct: 2,
            explanation: 'The answer is Harm. Ethics.'
        }
    ]
},
{
    name: '1.2 Summary: Digital Citizenship',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #006064, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #4dd0e1;">
    <p style="margin:0;color:#e0f7fa;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 ICT and Society · Sub-strand 1.2 Digital Citizenship</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0a2a2e;border:1px solid #4dd0e1;color:#e0f7fa;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f7fa;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e0f7fa;margin:8px 0 10px 0;">🧾 Summary — Digital Citizenship</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Being a good digital citizen means using technology skilfully and responsibly — protecting yourself and others, checking before you share, respecting creators and treating people online with the same respect as in person.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Digital citizenship joins technical skill with responsible, safe, ethical and respectful behaviour.</li>
    <li>It has ten dimensions, from access and literacy to intellectual property and digital health.</li>
    <li>Every digital right comes with a responsibility.</li>
    <li>Protect personal information, manage active and passive footprints, and secure accounts.</li>
    <li>Respond to cyberbullying and impersonation by not retaliating, saving evidence, blocking, reporting and telling a trusted adult.</li>
    <li>Use SIFT to verify information; distinguish misinformation from disinformation.</li>
    <li>Respect intellectual property, avoid plagiarism, practise netiquette and make ethical decisions online.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Meaning and dimensions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ten dimensions; rights and duties</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skill + responsibility</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Privacy and safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Footprints, security, cyberbullying</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Save, block, report, tell</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Information and IP</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SIFT, copyright, netiquette, ethics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verify before sharing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verify, cite and secure</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skills in practice</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#b2ebf2;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">digital citizenship</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">digital literacy</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">digital footprint</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">two-step verification</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">phishing</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">cyberbullying</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">impersonation</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">misinformation</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">disinformation</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">copyright</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">plagiarism</span><span style="background:#0b1a2e;border:1px solid #e0f7fa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">netiquette</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Responsible digital citizens make online spaces safer, fairer and more useful for everyone.</div>
    </div>
    <div style="background:#0a2a2e;border-left:4px solid #4dd0e1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e0f7fa;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Strand 2.0 Productivity Tools develops practical skills with spreadsheets and database management systems.</div>
    </div>
    <div style="background:#0d2f33;padding:20px;border-radius:12px;border:1px solid #4dd0e1;margin-bottom:20px;">
    <h3 style="color:#e0f7fa;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ explain digital citizenship and its dimensions</p>
    <p style="margin:6px 0;">✔️ protect my privacy and accounts</p>
    <p style="margin:6px 0;">✔️ respond to cyberbullying</p>
    <p style="margin:6px 0;">✔️ verify information before sharing</p>
    <p style="margin:6px 0;">✔️ respect intellectual property and practise netiquette</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is to use technology:',
            options: ['Without rules', 'Skilfully and responsibly', 'Only for games', 'Never'],
            correct: 1,
            explanation: 'The answer is Skilfully and responsibly. Responsibility.'
        },
        {
            question: 'Which lesson covered SIFT?',
            options: ['1.2.3', '1.2.1', '1.2.2', '1.1.3'],
            correct: 0,
            explanation: 'The answer is 1.2.3. Information quality.'
        },
        {
            question: 'Which lesson covered digital footprints?',
            options: ['1.2.1', '1.2.3', '1.2.2', '1.1.1'],
            correct: 2,
            explanation: 'The answer is 1.2.2. Privacy and safety.'
        },
        {
            question: 'What comes next?',
            options: ['1.1 Impact of ICT', '3.0 HTML only', 'Nothing', 'Strand 2.0 Productivity Tools'],
            correct: 3,
            explanation: 'The answer is Strand 2.0 Productivity Tools. Next strand.'
        },
        {
            question: 'The lab activity combined verifying, citing and:',
            options: ['Building circuits', 'Securing accounts', 'Planting trees', 'Mapping rivers'],
            correct: 1,
            explanation: 'The answer is Securing accounts. Security.'
        }
    ]
}
],
          stats:{lessons:19,exercises:118,quizzes:20,projects:2,duration:'13 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'When analysing the impact of an ICT system, an unintended consequence is:',
                  options: ['The main purpose of the system', 'The price of the system', 'An effect that was not planned', 'The name of the software'],
                  correct: 2,
                  explanation: 'Good impact analysis looks beyond the intended benefits.'
              },
              {
                  question: 'Using computers to do tasks automatically without human effort is:',
                  options: ['Digitisation of paper only', 'Automation', 'Cyberbullying', 'Plagiarism'],
                  correct: 1,
                  explanation: 'Automation raises productivity but can change jobs.'
              },
              {
                  question: 'A message claiming you received money and asking you to send it back is likely:',
                  options: ['A fraudulent payment message', 'A bank statement', 'A software update', 'A digital footprint'],
                  correct: 0,
                  explanation: 'Always confirm in your real account balance before acting.'
              },
              {
                  question: 'The digital divide includes differences in:',
                  options: ['Access, affordability, connectivity and digital skills', 'Height and age only', 'Favourite colours', 'Football teams'],
                  correct: 0,
                  explanation: 'It is more than owning a device.'
              },
              {
                  question: 'Digital citizenship means:',
                  options: ['Having many followers', 'Using technology responsibly, safely and respectfully', 'Owning the newest phone', 'Never using the Internet'],
                  correct: 1,
                  explanation: 'Skills plus responsible behaviour.'
              },
              {
                  question: 'The record of everything you do online is your:',
                  options: ['Password', 'Browser', 'Firewall', 'Digital footprint'],
                  correct: 3,
                  explanation: 'Posts, photos, comments and searches can last a long time.'
              },
              {
                  question: 'False information spread deliberately to mislead is:',
                  options: ['Misinformation', 'Disinformation', 'Netiquette', 'Encryption'],
                  correct: 1,
                  explanation: 'Misinformation is false but shared without intent to deceive.'
              },
              {
                  question: 'Presenting someone else’s work as your own is:',
                  options: ['Citation', 'Collaboration', 'Licensing', 'Plagiarism'],
                  correct: 3,
                  explanation: 'Always acknowledge sources.'
              },
              {
                  question: 'Copyright protects:',
                  options: ['Only computer hardware', 'Internet speed', 'Creators’ rights over their original work', 'Passwords'],
                  correct: 2,
                  explanation: 'Permission or licensing is needed to reuse protected work.'
              },
              {
                  question: 'Good rules of behaviour online are called:',
                  options: ['Hacking', 'Spamming', 'Phishing', 'Netiquette (digital etiquette)'],
                  correct: 3,
                  explanation: 'Respectful participation in online spaces.'
              },
              {
                  question: 'Turning on two-step verification helps to:',
                  options: ['Protect accounts from takeover', 'Delete your footprint', 'Increase data bundles', 'Speed up the phone'],
                  correct: 0,
                  explanation: 'A second check blocks most stolen-password logins.'
              },
              {
                  question: 'Before sharing a photo of a friend online you should:',
                  options: ['Post it immediately', 'Add their phone number', 'Ask for their permission', 'Tag strangers'],
                  correct: 2,
                  explanation: 'Respect others’ privacy.'
              }
          ]}
);