// Eschool course: Grade 10 Biology (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'biology', name:'Grade 10 Biology', code:'BIO 101', level:'grade-10', iconStyle:'fas', icon:'fa-dna', color:'#2e7d32',
          category:'Sciences',
          description:'Discover what Biology is, how it is used every day and the careers it leads to, then learn to collect, process and preserve plant and animal specimens using improvised and conventional apparatus.',
          longDescription:'This Grade 10 Biology course follows the KICD Senior School Grade 10 Biology curriculum design (June 2024) strand by strand: Cell Biology and Biodiversity, Anatomy and Physiology of Plants, and Anatomy and Physiology of Animals. Each strand opens with an overview, its learning outcomes and an introduction, and every sub-strand has three lessons, a laboratory activity, a quiz, an assignment, a revision page and a summary. Lessons include teacher explanations, scientific background, vocabulary, labelled diagrams, worked examples, safety notes, practical investigations, data analysis, real-life Kenyan applications, guided and independent practice, and ten practice questions each. Batch 1 covers Introduction to Biology (applications, fields of study and careers) and Specimen Collection and Preservation (apparatus, herbaria, and processing and preserving animal specimens).',
          modules:[
{
    name: '1.0 Cell Biology and Biodiversity — Strand Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🗺️ Strand 1.0: Cell Biology and Biodiversity</h2>
    <p style="font-size:16px;">Welcome to Grade 10 Biology. Biology is all around you: the food you eat, the medicines you take, the crops on Kenyan farms, the wildlife in our parks and the microorganisms that make yoghurt and cause disease. It is the science of life.</p>
    <p style="font-size:16px;">This first strand, <strong>Cell Biology and Biodiversity</strong>, introduces Biology and its careers, teaches you to collect and preserve specimens like a real biologist, and then takes you inside the cell and into the chemicals that make life possible.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e8f5e9;">❓ Big question for this strand:</strong> Why is it important to study Biology, and how do we study living things?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>Biology studies life from microscopic organisms such as viruses, bacteria and fungi to complex plants and animals, and how organisms interact with each other and their environment.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Big question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">You will be able to…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Introduction to Biology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why is it important to study Biology?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explain how Biology applies to everyday life and relate its fields of study to careers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Specimen Collection and Preservation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How are specimens collected and preserved?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identify apparatus and collect, process and preserve specimens using improvised and conventional apparatus.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Cell Structure and Specialization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How are cells adapted to their functions?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use a microscope and describe cell structure and specialisation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Chemicals of Life</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What chemicals make up living things?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe and test for carbohydrates, proteins, lipids and enzymes.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Strand Map</h3>
    <p>Strand 1.0 has four sub-strands. Each has three lessons, a laboratory activity, a quiz, an assignment, a revision page and a summary. This first batch covers 1.1 and 1.2.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.1 Introduction to Biology <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Biology and Society</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Meaning of Biology and its application in everyday life</li>
    <li>1.1.2 Fields of study in Biology</li>
    <li>1.1.3 Careers linked to Biology</li>
    <li>🔬 Laboratory activity: exploring fields of Biology through stations</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.2 Specimen Collection and Preservation <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Scientific Investigation</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Apparatus for collecting specimens (conventional and improvised)</li>
    <li>1.2.2 Collecting, processing and preserving plant specimens</li>
    <li>1.2.3 Collecting, processing and preserving animal specimens</li>
    <li>🔬 Laboratory activity: collecting and preserving specimens around the school</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.3 Cell Structure and Specialization <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: The Cell</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.4 Chemicals of Life <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Biochemistry</span>
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
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Imagination and creativity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing career wheels and improvising apparatus.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discussing career choice and carrying out specimen work.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Improvising apparatus from local materials.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group research and presentations.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching from safe internet sites.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 PCIs</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gender equality in career choice</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Strand</p>
    <div>Work through the modules in order. Read the teacher explanation and background, learn the vocabulary, then study each diagram. Keep a practical notebook and a project portfolio. Collect specimens only with permission and under supervision, and never harm protected species.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Strand 1.0?',
            options: ['Two', 'Seven', 'Four', 'Six'],
            correct: 2,
            explanation: 'Introduction, Specimen Collection, Cell Structure and Chemicals of Life.'
        },
        {
            question: 'Which sub-strand includes making a herbarium?',
            options: ['1.1 Introduction to Biology', '1.3 Cell Structure', '1.4 Chemicals of Life', '1.2 Specimen Collection and Preservation'],
            correct: 3,
            explanation: 'Herbaria are made from collected plant specimens.'
        },
        {
            question: 'The other strands of Grade 10 Biology are:',
            options: ['Algebra; Geometry', 'Maps; Rocks', 'Anatomy and Physiology of Plants; Anatomy and Physiology of Animals', 'Engines; Drawing'],
            correct: 2,
            explanation: 'Grade 10 Biology has three strands.'
        },
        {
            question: 'The key inquiry question for 1.1 is:',
            options: ['Why is it important to study Biology?', 'How are engines built?', 'How are rocks formed?', 'How is soil tested?'],
            correct: 0,
            explanation: 'This is the KICD key inquiry question.'
        },
        {
            question: 'When collecting specimens you must:',
            options: ['Collect as many rare animals as possible', 'Get permission and avoid protected species', 'Work alone at night', 'Harm animals'],
            correct: 1,
            explanation: 'Conservation and safety come first.'
        }
    ]
},
{
    name: '1.0 Cell Biology and Biodiversity — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🎯 Learning Outcomes for Strand 1.0</h2>
    <p style="font-size:16px;">These are the outcomes you should achieve in this strand. Come back after each sub-strand and tick what you can now do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌟 General Learning Outcomes for the Strand</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Build knowledge, skills and attitudes for further study and training in Biology-related fields.</li>
    <li>Understand how humans, other organisms and the environment are interconnected, and use this to conserve nature.</li>
    <li>Design and carry out practical activities and projects that build understanding of biological concepts.</li>
    <li>Communicate biological information precisely, clearly and logically.</li>
    <li>Use scientific knowledge to make informed decisions on personal, societal, health and environmental issues.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.1 Introduction to Biology</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how Biology applies to everyday life.</li>
    <li>Relate fields of study in Biology to career opportunities.</li>
    <li>Illustrate careers linked to Biology fields of study.</li>
    <li>Appreciate the importance of Biology in everyday life.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Why is it important to study Biology?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.2 Specimen Collection and Preservation</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify apparatus and materials used to collect, process and preserve specimens.</li>
    <li>Collect, process and preserve specimens for biological study using improvised and conventional apparatus.</li>
    <li>Appreciate the importance of collecting, processing and preserving specimens.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How are specimens collected and preserved?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0;color:#c8e6c9;font-weight:bold;">1.3–1.4 Cell Structure and Specialization; Chemicals of Life</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Outcomes for these sub-strands will be added with their lessons in a later batch.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>What are living things made of?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your teacher (and this course) will use the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Strand 1.0 (from the KICD rubric)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correctly and precisely relates all fields of Biology to their career opportunities; procedurally collects, sorts, processes and preserves specimens using improvised and conventional apparatus.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correctly relates all fields to career opportunities; procedurally collects, processes and preserves specimens using improvised and conventional apparatus.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates most fields to career opportunities; collects, processes and preserves specimens using conventional apparatus only.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates a few fields to career opportunities; collects and processes specimens but does not preserve them.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Biology is assessed through written tests, practicals, projects, portfolios and observation. The specimen project in 1.2 is assessed on planning, budgeting, recording and presentation.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'To exceed expectations in 1.2 you must also:',
            options: ['Collect only', 'Use conventional apparatus only', 'Avoid preserving', 'Sort specimens and use both improvised and conventional apparatus'],
            correct: 3,
            explanation: 'The rubric adds sorting and both types of apparatus.'
        },
        {
            question: 'Relating most fields to careers is at which level?',
            options: ['Approaches Expectations', 'Exceeds Expectations', 'Meets Expectations', 'Below Expectations'],
            correct: 0,
            explanation: 'Most fields matches Approaches.'
        },
        {
            question: 'Collecting and processing but not preserving is:',
            options: ['Meets Expectations', 'Exceeds Expectations', 'Below Expectations', 'Approaches Expectations'],
            correct: 2,
            explanation: 'Preservation is required for higher levels.'
        },
        {
            question: 'Which is a general outcome of Biology?',
            options: ['Communicate biological information precisely and clearly', 'Repair engines', 'Draw maps', 'Write music'],
            correct: 0,
            explanation: 'Clear communication is a general outcome.'
        },
        {
            question: 'Being honest in your project portfolio shows:',
            options: ['Rivalry', 'Laziness', 'Integrity', 'Greed'],
            correct: 2,
            explanation: 'The design links integrity to the project.'
        }
    ]
},
{
    name: '1.0 Cell Biology and Biodiversity — Introduction',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🚪 Introduction: Thinking Like a Biologist</h2>
    <p style="font-size:16px;">In 2017, farmers across Kenya found their maize leaves full of holes and their cobs eaten. Biologists collected the caterpillars, preserved specimens, identified them as the fall armyworm and advised farmers on control methods. Specimen collection, identification and knowledge of insects — all Biology — protected Kenya’s food supply.</p>
    <p style="font-size:16px;">Biologists observe carefully, ask questions, collect evidence, keep honest records and communicate clearly. This introduction shows you the habits and tools you will use in this strand.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔬 How Biologists Work</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li><strong>Observe</strong> organisms carefully, often with a hand lens or microscope.</li>
    <li><strong>Ask</strong> questions and form hypotheses.</li>
    <li><strong>Investigate</strong> by experiments, fieldwork and specimen study.</li>
    <li><strong>Record</strong> accurately with drawings, tables and labels.</li>
    <li><strong>Communicate</strong> findings clearly and honestly.</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔤 The Language of Biology</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A living thing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bean plant, Amoeba</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specimen</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An organism or part kept for study</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A pressed leaf</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Habitat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where an organism lives</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pond, forest floor</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Preservation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Treating a specimen so it does not decay</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Storing in ethanol</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Herbarium</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A collection of dried, labelled plants</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">East African Herbarium</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Tools You Will Use</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tool</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hand lens</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnifying small features</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweep net and pooter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collecting insects</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pitfall trap and Tullgren funnel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collecting ground and soil animals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plant press</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressing and drying plants</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specimen bottles and labels</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Storing and recording specimens</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🥽 Safety and Respect for Life</h3>
    <p>Wear gloves when handling specimens, soil and preservatives, and wash hands with soap afterwards. Never taste plants or handle stinging, biting or venomous animals. Collect only common species, take only what you need, get permission from landowners and return living organisms where possible. Protected plants and animals must never be collected.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Get a notebook with sections for: (1) vocabulary, (2) diagrams, (3) practical reports and (4) your specimen project portfolio. Learn the names of the fields of Biology early — you will use them throughout the course.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A living thing is called an:',
            options: ['Apparatus', 'Habitat', 'Herbarium', 'Organism'],
            correct: 3,
            explanation: 'Organisms are living things of any size.'
        },
        {
            question: 'An organism kept for study is a:',
            options: ['Habitat', 'Career', 'Specimen', 'Preservative'],
            correct: 2,
            explanation: 'Specimens are studied by biologists.'
        },
        {
            question: 'Biologists identified the pest damaging Kenyan maize in 2017 as the:',
            options: ['Fall armyworm', 'Locust', 'Tsetse fly', 'Mosquito'],
            correct: 0,
            explanation: 'Correct identification guided control methods.'
        },
        {
            question: 'After handling specimens you should:',
            options: ['Eat immediately', 'Wash your hands with soap', 'Rub your eyes', 'Do nothing'],
            correct: 1,
            explanation: 'Specimens and preservatives can carry harmful substances.'
        },
        {
            question: 'Protected plants and animals should:',
            options: ['Be collected first', 'Be sold', 'Be preserved in large numbers', 'Never be collected'],
            correct: 3,
            explanation: 'They are protected by law to conserve biodiversity.'
        }
    ]
},
{
    name: '1.1.1 Introduction to Biology: Meaning of Biology and Its Application in Everyday Life',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Meaning of Biology and Its Application in Everyday Life</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what Biology is, recall the characteristics of living things, and explain how Biology is applied in health, agriculture, the environment, industry, forensics and daily decisions.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every day you make choices about food, hygiene, health and the environment. Biology gives you the knowledge to make those choices wisely and to understand news about diseases, climate and food security.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Health and medicine</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌽 Food production</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌳 Conservation</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🥛 Food processing</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Forensics</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧼 Hygiene and sanitation</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8f5e9;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how Biology applies to everyday life.</li>
    <li>Relate fields of study in Biology to career opportunities.</li>
    <li>Illustrate careers linked to Biology fields of study.</li>
    <li>Appreciate the importance of Biology in everyday life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8f5e9;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define Biology.</li>
    <li>State the characteristics of living things.</li>
    <li>Explain at least six applications of Biology in everyday life.</li>
    <li>Relate Biology to Kenya’s development goals.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">❓ Key inquiry question:</strong> Why is it important to study Biology?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">🧰 What you already know:</strong> Junior School Integrated Science: living things, the human body, plants and health.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Biology</strong> comes from two Greek words: <em>bios</em> (life) and <em>logos</em> (study or knowledge). Biology is the science that studies life — from microscopic organisms such as viruses, bacteria and fungi to complex plants and animals — and how organisms interact with each other and their environment.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 150" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="60" y="70" fill="#fde68a" font-size="28" text-anchor="middle">M</text><text x="60" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Movement</text><rect x="108" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="148" y="70" fill="#fde68a" font-size="28" text-anchor="middle">R</text><text x="148" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Respiration</text><rect x="196" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="236" y="70" fill="#fde68a" font-size="28" text-anchor="middle">S</text><text x="236" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Sensitivity</text><rect x="284" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="324" y="70" fill="#fde68a" font-size="28" text-anchor="middle">G</text><text x="324" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Growth</text><rect x="372" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="412" y="70" fill="#fde68a" font-size="28" text-anchor="middle">R</text><text x="412" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Reproduction</text><rect x="460" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="500" y="70" fill="#fde68a" font-size="28" text-anchor="middle">E</text><text x="500" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Excretion</text><rect x="548" y="30" width="80" height="80" rx="12" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="588" y="70" fill="#fde68a" font-size="28" text-anchor="middle">N</text><text x="588" y="98" fill="#e8f5e9" font-size="11" text-anchor="middle">Nutrition</text><text x="320" y="18" fill="#e8f5e9" font-size="13" text-anchor="middle">Characteristics of living things — remember “MRS GREN”</text><text x="320" y="136" fill="#c8e6c9" font-size="11" text-anchor="middle">All living organisms show all seven characteristics at some stage of life.</text>
    </svg>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Biology = the study of living things and how they work, grow, reproduce and depend on each other.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Viruses are a special case: they show reproduction and inheritance only inside living host cells, so biologists study them even though they are not made of cells. Biology is linked to Kenya’s Vision 2030 and to science, technology and innovation, which drive development in health, agriculture, manufacturing and environmental management.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Biology</strong>
    </p>
    <p style="margin:6px 0;">The scientific study of living organisms.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8f5e9;">📏 Symbol / unit:</span> bios + logos</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Studying how malaria spreads.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Organism</strong>
    </p>
    <p style="margin:6px 0;">Any living thing.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Bacterium, maize plant, cow.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Nutrition</strong>
    </p>
    <p style="margin:6px 0;">Obtaining and using food.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Photosynthesis in plants.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Respiration</strong>
    </p>
    <p style="margin:6px 0;">Releasing energy from food in cells.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Breaking down glucose.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Excretion</strong>
    </p>
    <p style="margin:6px 0;">Removal of metabolic waste from the body.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Urine, carbon dioxide.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Sensitivity</strong>
    </p>
    <p style="margin:6px 0;">Detecting and responding to changes.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Plants bending towards light.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">1. Characteristics of Living Things</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Characteristic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Movement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change of position of the whole or part of an organism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Walking; flowers opening</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respiration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Release of energy from food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscle cells using glucose</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sensitivity (irritability)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detecting and responding to stimuli</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pulling a hand from a hot object</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Growth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Permanent increase in size and mass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A seedling growing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reproduction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Producing new individuals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeds, eggs, babies</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excretion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Removing metabolic wastes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweating, breathing out CO₂</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nutrition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taking in and using food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eating; photosynthesis</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>A car moves, uses fuel and gives out waste gases, but it is not alive: it cannot grow, reproduce or respond to stimuli by itself. Living things show <strong>all</strong> seven characteristics.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">2. Applications of Biology in Everyday Life</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How Biology is applied</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kenyan example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Health and medicine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Understanding the body, diseases, vaccines and drugs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Malaria and HIV research at KEMRI</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nutrition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balanced diets and preventing deficiency diseases</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fortified flour to prevent anaemia</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Agriculture and food security</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Better crop varieties, livestock breeds and pest control</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drought-tolerant maize; controlling fall armyworm</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Environment and conservation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protecting habitats, species and water catchments</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conservation of the Mau Forest and wildlife</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Industry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using organisms in fermentation and biotechnology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yoghurt, bread, brewing, biogas</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hygiene and sanitation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Preventing spread of disease</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Handwashing to prevent cholera</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forensics and law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">DNA and biological evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Government Chemist DNA analysis</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Personal decisions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Informed choices about health and lifestyle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Avoiding drugs; family health</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 1: Applying Biology to a problem</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A village has frequent cases of diarrhoea after the rains. How can Biology help solve the problem?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Link the disease to its cause and prevention.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Identify cause</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Microorganisms (e.g. bacteria) from faeces contaminate water during rains.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Prevention</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Boil or treat drinking water, use latrines, wash hands with soap.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: Monitoring</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Health workers test water and track cases.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> Biology identifies the microorganisms and how they spread, guiding water treatment, sanitation and hygiene.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8f5e9;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Define Biology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">The scientific study of living organisms and their interactions with each other and the environment.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> State four characteristics of living things.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Nutrition, respiration, growth, reproduction (also movement, sensitivity, excretion).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give two applications of Biology in agriculture.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Breeding better crop varieties; pest control.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear a lab coat and closed shoes; wear gloves when handling specimens, soil or pond water.</li>
    <li>Never eat, drink or taste anything in the laboratory or field.</li>
    <li>Handle living organisms gently and return them to their habitat; never collect protected species.</li>
    <li>Report every cut, sting, bite or spill to the teacher immediately, and wash your hands with soap after the activity.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recording</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Drawing conclusions</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Living or Non-Living? Observing Signs of Life</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To observe characteristics of living things in seeds and yeast and compare them with non-living objects.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two petri dishes or tins</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cotton wool</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two small bottles</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two balloons</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hand lens</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Labels</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Bean seeds</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small stones of similar size</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Dry yeast</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sugar</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Warm water</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do not taste any materials.</li>
    <li>Wash hands after handling seeds and yeast.</li>
    <li>Keep balloons away from faces.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Place five bean seeds on moist cotton wool in one dish and five stones in another. Keep both moist for five days.</li>
    <li>Observe each day and record any changes.</li>
    <li>In bottle A, mix warm water, sugar and yeast; in bottle B, warm water and sugar only. Fit a balloon over each mouth.</li>
    <li>After 30 minutes, observe the balloons.</li>
    <li>Record which characteristics of life you observed.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Set-up</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Observation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Characteristic of life shown</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bean seeds on moist cotton</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stones on moist cotton</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bottle A (yeast + sugar)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bottle B (sugar only)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why did the balloon on bottle A inflate?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Yeast respired, using sugar and releasing carbon dioxide gas.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What characteristics did the germinating seeds show?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Growth, and later movement of the shoot towards light (sensitivity).</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Seeds and yeast show characteristics of life such as growth and respiration; stones and sugar solution alone do not.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Living cells carry out respiration and grow using energy from food; non-living objects cannot.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Letting the cotton wool dry out.</li>
    <li>Using cold water, which slows yeast activity.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Bakers use yeast respiration to make bread and mandazi rise.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Bottle B is the <strong>control</strong>: it shows that the gas in bottle A came from the yeast, not the sugar or water. Count how many seeds germinated and calculate the germination percentage = (seeds germinated ÷ seeds planted) × 100.</p>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 2: Germination percentage</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> 4 out of 5 bean seeds germinated. Find the germination percentage.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Part ÷ whole × 100.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Divide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 ÷ 5 = 0.8.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Multiply</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.8 × 100 = 80%.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> 80%</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #81c784;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Biology in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Knowing how diseases spread helps families stay healthy; knowledge of nutrition guides balanced meals.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Biology explains why forests, wetlands and wildlife must be conserved.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Food processing, pharmaceuticals, brewing and biogas all use biological processes.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What does “bios” mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Greek word.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Life.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which characteristic is shown when we breathe out carbon dioxide?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Removing waste.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Excretion (also linked to respiration).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Give one industrial use of Biology.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Fermentation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Making yoghurt using bacteria (also bread, biogas).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List five ways Biology affected your life this week.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Name an object; your partner decides whether it is living and gives reasons using MRS GREN.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a poster: “Biology in Kenya’s Vision 2030”.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Using a safe website, find one recent Kenyan health or agriculture story that involves Biology.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain the meaning of Biology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">The scientific study of life — living organisms and their interactions with each other and the environment.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe five applications of Biology in everyday life.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Health, nutrition, agriculture, conservation, industry (also hygiene, forensics).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why is a car not a living thing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">It cannot grow, reproduce or respond to stimuli by itself.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What was the purpose of bottle B?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">It was a control to show that gas production was due to yeast.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How can Biology help Kenya achieve food security?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Improved crop varieties and breeds, pest and disease control, soil and water conservation, food preservation.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Biology is the study of life, from microorganisms to complex plants and animals, and their interactions. Living things show movement, respiration, sensitivity, growth, reproduction, excretion and nutrition (MRS GREN). Biology is applied in health, nutrition, agriculture, conservation, industry, hygiene, forensics and personal decisions.</p>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Meaning of Biology.</li>
    <li>Characteristics of living things.</li>
    <li>Applications of Biology.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>MRS GREN.</li>
    <li>Bios = life; logos = study.</li>
    <li>Living things show all seven characteristics.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calling machines living.</li>
    <li>Listing applications without examples.</li>
    <li>Confusing respiration with breathing.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give a Kenyan example for each application.</li>
    <li>Learn MRS GREN.</li>
    <li>Relate Biology to news stories.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #43a047;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain applications with examples.</li>
    <li>Use correct terms such as respiration and excretion.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Imagination and creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linking Biology to daily life.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carrying out simple experiments.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safe online research.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health education</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every meal, medicine and clean glass of water involves Biology.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write 150 words on how Biology is used in your community.</li>
    <li>Explain why viruses are studied in Biology.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which application of Biology matters most to me?</li>
    <li>How can I use Biology to stay healthy?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Biology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study of life.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Organism</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Living thing.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Respiration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Releasing energy.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Excretion</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Removing waste.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sensitivity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responding to stimuli.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can define Biology.</p>
    <p style="margin:6px 0;">☐ I can state the characteristics of living things.</p>
    <p style="margin:6px 0;">☐ I can explain applications of Biology.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The word “Biology” means:',
            options: ['Study of rocks', 'Study of stars', 'Study of life', 'Study of machines'],
            correct: 2,
            explanation: 'Bios means life and logos means study.'
        },
        {
            question: 'Which is NOT a characteristic of living things?',
            options: ['Rusting', 'Growth', 'Reproduction', 'Respiration'],
            correct: 0,
            explanation: 'Rusting is a chemical change in metals, not life.'
        },
        {
            question: 'Releasing energy from food in cells is:',
            options: ['Excretion', 'Respiration', 'Movement', 'Growth'],
            correct: 1,
            explanation: 'Respiration breaks down food to release energy.'
        },
        {
            question: 'Removing metabolic waste from the body is:',
            options: ['Excretion', 'Nutrition', 'Sensitivity', 'Reproduction'],
            correct: 0,
            explanation: 'Examples are urine and carbon dioxide.'
        },
        {
            question: 'A plant bending towards light shows:',
            options: ['Excretion', 'Nutrition only', 'Reproduction', 'Sensitivity'],
            correct: 3,
            explanation: 'It is responding to a stimulus.'
        },
        {
            question: 'Yoghurt making is an application of Biology in:',
            options: ['Forensics', 'Astronomy', 'Industry', 'Geology'],
            correct: 2,
            explanation: 'Bacteria ferment milk into yoghurt.'
        },
        {
            question: 'Handwashing to prevent cholera applies Biology in:',
            options: ['Mining', 'Engineering', 'Music', 'Hygiene and sanitation'],
            correct: 3,
            explanation: 'It removes disease-causing microorganisms.'
        },
        {
            question: 'DNA analysis to solve crimes is part of:',
            options: ['Ecology only', 'Botany only', 'Forensics', 'Taxonomy only'],
            correct: 2,
            explanation: 'Biological evidence helps courts.'
        },
        {
            question: 'In the yeast experiment, the balloon inflated because yeast produced:',
            options: ['Oxygen', 'Carbon dioxide', 'Nitrogen', 'Water only'],
            correct: 1,
            explanation: 'Yeast respiration releases carbon dioxide.'
        },
        {
            question: '4 of 5 seeds germinated. Germination percentage:',
            options: ['20%', '80%', '40%', '45%'],
            correct: 1,
            explanation: 'The answer is 80%. 4 ÷ 5 × 100 = 80%.'
        }
    ]
},
{
    name: '1.1.2 Introduction to Biology: Fields of Study in Biology',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Fields of Study in Biology</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the main fields (branches) of Biology — Botany, Zoology, Taxonomy, Anatomy, Physiology, Ecology, Biochemistry, Biotechnology, Genetics, Parasitology, Microbiology and Entomology — what each studies and examples of their use.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Biology is so broad that scientists specialise. Knowing the fields helps you understand how the subject is organised and links directly to the careers you could follow.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌿 Plant research</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦁 Wildlife management</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Genetic testing</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦠 Disease diagnosis</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐝 Pest and pollinator study</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Drug development</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8f5e9;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how Biology applies to everyday life.</li>
    <li>Relate fields of study in Biology to career opportunities.</li>
    <li>Illustrate careers linked to Biology fields of study.</li>
    <li>Appreciate the importance of Biology in everyday life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8f5e9;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name and define at least twelve fields of Biology.</li>
    <li>Give an example of the work done in each field.</li>
    <li>Classify biological activities into fields.</li>
    <li>Explain how fields overlap.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">❓ Key inquiry question:</strong> Why is it important to study Biology?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">🧰 What you already know:</strong> Lesson 1.1.1: meaning and applications of Biology.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Just as a hospital has different departments, Biology has different <strong>fields of study</strong>. Some fields are based on the <strong>type of organism</strong> studied (plants, animals, insects, microorganisms), others on the <strong>level or aspect</strong> studied (structure, function, chemistry, inheritance, environment).</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 460" width="620" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><circle cx="320" cy="230" r="70" fill="#1b5e20" stroke="#81c784" stroke-width="2"/><text x="320" y="225" fill="#e8f5e9" font-size="16" text-anchor="middle">BIOLOGY</text><text x="320" y="245" fill="#e8f5e9" font-size="11" text-anchor="middle">study of life</text><line x1="320.0" y1="160.0" x2="320.0" y2="70.0" stroke="#81c784"/><rect x="262.0" y="25.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="320" y="45" fill="#e8f5e9" font-size="12" text-anchor="middle">Botany</text><line x1="355.0" y1="169.4" x2="412.5" y2="91.4" stroke="#81c784"/><rect x="387.0" y="50.5" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="445" y="70.45517328095664" fill="#e8f5e9" font-size="12" text-anchor="middle">Zoology</text><line x1="380.6" y1="195.0" x2="480.2" y2="150.0" stroke="#81c784"/><rect x="478.5" y="120.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="536.5063509461097" y="140" fill="#e8f5e9" font-size="12" text-anchor="middle">Taxonomy</text><line x1="390.0" y1="230.0" x2="505.0" y2="230.0" stroke="#81c784"/><rect x="512.0" y="215.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="570" y="235" fill="#e8f5e9" font-size="12" text-anchor="middle">Anatomy</text><line x1="380.6" y1="265.0" x2="480.2" y2="310.0" stroke="#81c784"/><rect x="478.5" y="310.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="536.5063509461097" y="330" fill="#e8f5e9" font-size="12" text-anchor="middle">Physiology</text><line x1="355.0" y1="290.6" x2="412.5" y2="368.6" stroke="#81c784"/><rect x="387.0" y="379.5" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="445" y="399.5448267190434" fill="#e8f5e9" font-size="12" text-anchor="middle">Ecology</text><line x1="320.0" y1="300.0" x2="320.0" y2="390.0" stroke="#81c784"/><rect x="262.0" y="405.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="320" y="425" fill="#e8f5e9" font-size="12" text-anchor="middle">Biochemistry</text><line x1="285.0" y1="290.6" x2="227.5" y2="368.6" stroke="#81c784"/><rect x="137.0" y="379.5" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="195.00000000000006" y="399.5448267190434" fill="#e8f5e9" font-size="12" text-anchor="middle">Biotechnology</text><line x1="259.4" y1="265.0" x2="159.8" y2="310.0" stroke="#81c784"/><rect x="45.5" y="310.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="103.49364905389038" y="330.00000000000006" fill="#e8f5e9" font-size="12" text-anchor="middle">Genetics</text><line x1="250.0" y1="230.0" x2="135.0" y2="230.0" stroke="#81c784"/><rect x="12.0" y="215.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="70" y="235.00000000000003" fill="#e8f5e9" font-size="12" text-anchor="middle">Parasitology</text><line x1="259.4" y1="195.0" x2="159.8" y2="150.0" stroke="#81c784"/><rect x="45.5" y="120.0" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="103.49364905389035" y="140" fill="#e8f5e9" font-size="12" text-anchor="middle">Microbiology</text><line x1="285.0" y1="169.4" x2="227.5" y2="91.4" stroke="#81c784"/><rect x="137.0" y="50.5" width="116" height="30" rx="15" fill="#0f2e14" stroke="#81c784"/><text x="194.9999999999999" y="70.4551732809567" fill="#e8f5e9" font-size="12" text-anchor="middle">Entomology</text>
    </svg>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Botany = plants; Zoology = animals; Microbiology = microorganisms; Genetics = inheritance; Ecology = organisms and their environment.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Many modern advances come from combining fields. Biotechnology uses microbiology, biochemistry and genetics to make products such as insulin and disease-resistant crops. Ecology combines botany, zoology and microbiology to understand ecosystems. Other specialised fields include cytology (cells), histology (tissues), mycology (fungi), virology (viruses), immunology (the immune system), embryology (development) and marine biology (life in the sea).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Botany</strong>
    </p>
    <p style="margin:6px 0;">Study of plants.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Studying tea varieties.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Zoology</strong>
    </p>
    <p style="margin:6px 0;">Study of animals.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Studying elephant behaviour.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Taxonomy</strong>
    </p>
    <p style="margin:6px 0;">Naming, describing and classifying organisms.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Naming a new frog species.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Anatomy</strong>
    </p>
    <p style="margin:6px 0;">Study of the internal structure of organisms.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Structure of the heart.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Physiology</strong>
    </p>
    <p style="margin:6px 0;">Study of how body parts function.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>How kidneys filter blood.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Ecology</strong>
    </p>
    <p style="margin:6px 0;">Study of organisms and their environment.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Flamingos at Lake Nakuru.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Genetics</strong>
    </p>
    <p style="margin:6px 0;">Study of inheritance and variation.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Inheritance of blood groups.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">1. Fields Based on the Organisms Studied</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it studies</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example of work</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Botany</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plants</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Improving tea, maize and coffee varieties</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zoology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Animals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Studying wildlife populations</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microbiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microorganisms: bacteria, viruses, fungi, protozoa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifying the bacteria causing cholera</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Entomology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insects</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Controlling mosquitoes, tsetse flies and crop pests; studying bees</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parasitology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parasites and their hosts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Studying malaria parasites and intestinal worms</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">2. Fields Based on Aspects of Life</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it studies</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example of work</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taxonomy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Naming, describing and classifying organisms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifying and naming species</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anatomy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Internal structure of organisms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Studying bones and organs</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Functions of body parts and processes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How the heart pumps blood</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ecology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relationships between organisms and their environment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Studying food webs in a lake</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biochemistry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemical processes in living things</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Studying enzymes and digestion</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Genetics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inheritance and variation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Breeding disease-resistant cattle</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biotechnology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using organisms or their products to make useful things</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making vaccines and tissue-culture bananas</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 1: Classifying activities into fields</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Name the field: (a) studying why some children inherit sickle-cell anaemia (b) studying how tsetse flies breed (c) using bacteria to make insulin (d) describing a newly discovered plant.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Ask: which organism or which aspect of life?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: (a)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Inheritance → Genetics.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: (b)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Insects → Entomology.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: (c)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Using organisms to make products → Biotechnology.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8f5e9;">Step 4: (d)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Naming and describing → Taxonomy (and Botany).</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> (a) Genetics (b) Entomology (c) Biotechnology (d) Taxonomy</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">ℹ️ Note</p>
    <div>Fields overlap: a scientist studying how malaria parasites live in mosquitoes uses parasitology, entomology, physiology and ecology together.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8f5e9;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is studied in Physiology?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">How body parts and processes function.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which field studies insects?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Entomology.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Define Biotechnology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Using organisms or their products to make useful products or processes.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear a lab coat and closed shoes; wear gloves when handling specimens, soil or pond water.</li>
    <li>Never eat, drink or taste anything in the laboratory or field.</li>
    <li>Handle living organisms gently and return them to their habitat; never collect protected species.</li>
    <li>Report every cut, sting, bite or spill to the teacher immediately, and wash your hands with soap after the activity.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classifying</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Researching</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Presenting</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Fields of Biology Flash-Card Game</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To match biological activities and specimens to the correct fields of study.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Manila cards for flash cards</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Markers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">A set of specimens or pictures (leaf, insect, mould, bone, X-ray image, food sample)</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Card set: field names on one side, definitions and examples on the other</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle specimens with forceps or gloves.</li>
    <li>Wash hands after handling mould or preserved specimens.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In groups, make twelve flash cards — one for each field — with the name on one side and a definition and example on the other.</li>
    <li>Place the specimens or pictures on a table.</li>
    <li>Take turns to pick a specimen and name the fields that would study it, giving reasons.</li>
    <li>Score one point for each correct field and reason.</li>
    <li>Record your group’s results and the fields most often confused.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Specimen or picture</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Fields that study it</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reason</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaf</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mould on bread</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bone</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Food sample</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which specimen could be studied by the most fields?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Often the insect: entomology, zoology, taxonomy, anatomy, physiology, ecology.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which fields were most often confused?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Usually anatomy (structure) and physiology (function).</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> One organism can be studied in many fields, depending on the question being asked.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Fields of Biology are defined by the organism or the aspect of life studied, so they overlap.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing anatomy with physiology.</li>
    <li>Naming only one field when several apply.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Research teams in institutions such as KEMRI combine experts from several fields.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Total your group’s score and calculate the percentage of correct answers. List the three fields your group found hardest and write a one-sentence definition of each to improve your understanding.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #81c784;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Biology in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Doctors rely on anatomy and physiology; farmers benefit from genetics and entomology.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Ecologists and botanists guide forest and wetland conservation.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Biotechnology and microbiology support food, drug and vaccine industries.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which field studies fungi?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Myco = fungus.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Mycology (part of microbiology/botany).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Structure of the kidney is studied in…</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Structure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Anatomy.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How the kidney filters blood is studied in…</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Function.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Physiology.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write each field of Biology with one example from your community.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Quiz each other using the flash cards.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Draw a large fields-of-Biology wheel for the classroom wall.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Search a safe site to find one Kenyan research institution for each of three fields.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define (a) Taxonomy (b) Ecology (c) Parasitology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">(a) Naming and classifying organisms. (b) Organisms and their environment. (c) Parasites and their hosts.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Distinguish between Anatomy and Physiology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Anatomy studies structure; physiology studies function.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Give two examples of Biotechnology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Making vaccines; tissue-culture bananas (also insulin, yoghurt).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should mould be handled with gloves?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Its spores can cause allergies or infections.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why controlling malaria needs several fields of Biology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Parasitology (Plasmodium), entomology (mosquito), physiology (human body), ecology (breeding sites), biochemistry (drugs).</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Fields of Biology include Botany (plants), Zoology (animals), Taxonomy (classification), Anatomy (structure), Physiology (function), Ecology (environment), Biochemistry (chemistry of life), Biotechnology (useful products), Genetics (inheritance), Parasitology (parasites), Microbiology (microorganisms) and Entomology (insects). Fields overlap, and many problems need several fields together.</p>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Fields based on organisms.</li>
    <li>Fields based on aspects of life.</li>
    <li>Overlap of fields.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Anatomy = structure; Physiology = function.</li>
    <li>Entomology = insects.</li>
    <li>Genetics = inheritance.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mixing entomology with etymology (study of words).</li>
    <li>Confusing anatomy and physiology.</li>
    <li>Naming only one field.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use flash cards.</li>
    <li>Link each field to a career.</li>
    <li>Learn word roots (botany, zoo, micro, entomo).</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #43a047;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define fields precisely.</li>
    <li>Give an example for each.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Imagination and creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making flash cards and wheels.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group games.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching institutions.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security online</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Teams of biologists from many fields protect Kenya’s health, food and wildlife.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Make a table of twelve fields with definitions and examples.</li>
    <li>Find out what Immunology and Virology study.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which field interests me most?</li>
    <li>Which field could solve a problem in my area?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Botany</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plants.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zoology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Animals.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Microbiology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microorganisms.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Entomology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insects.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Biochemistry</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemistry of life.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can name twelve fields.</p>
    <p style="margin:6px 0;">☐ I can define each field.</p>
    <p style="margin:6px 0;">☐ I can classify activities into fields.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Botany is the study of:',
            options: ['Animals', 'Insects', 'Plants', 'Rocks'],
            correct: 2,
            explanation: 'The answer is Plants. Botany deals with plant life.'
        },
        {
            question: 'Zoology is the study of:',
            options: ['Plants', 'Fungi only', 'Weather', 'Animals'],
            correct: 3,
            explanation: 'Zoology deals with animal life.'
        },
        {
            question: 'Naming, describing and classifying organisms is:',
            options: ['Ecology', 'Taxonomy', 'Anatomy', 'Physiology'],
            correct: 1,
            explanation: 'Taxonomists classify living things.'
        },
        {
            question: 'How the heart pumps blood is studied in:',
            options: ['Taxonomy', 'Entomology', 'Physiology', 'Botany'],
            correct: 2,
            explanation: 'The answer is Physiology. Physiology studies function.'
        },
        {
            question: 'The internal structure of organisms is studied in:',
            options: ['Ecology', 'Anatomy', 'Genetics', 'Parasitology'],
            correct: 1,
            explanation: 'The answer is Anatomy. Anatomy studies structure.'
        },
        {
            question: 'The relationship between organisms and their environment is:',
            options: ['Biochemistry', 'Anatomy', 'Genetics', 'Ecology'],
            correct: 3,
            explanation: 'Ecologists study interactions.'
        },
        {
            question: 'Inheritance and variation are studied in:',
            options: ['Entomology', 'Genetics', 'Botany', 'Microbiology'],
            correct: 1,
            explanation: 'Genetics explains how traits pass on.'
        },
        {
            question: 'Studying malaria parasites falls under:',
            options: ['Parasitology', 'Botany', 'Taxonomy only', 'Ecology only'],
            correct: 0,
            explanation: 'The answer is Parasitology. Plasmodium is a parasite.'
        },
        {
            question: 'Using bacteria to make insulin is an example of:',
            options: ['Anatomy', 'Ecology', 'Entomology', 'Biotechnology'],
            correct: 3,
            explanation: 'Organisms are used to make useful products.'
        },
        {
            question: 'Chemical processes such as digestion by enzymes are studied in:',
            options: ['Biochemistry', 'Taxonomy', 'Zoology only', 'Ecology'],
            correct: 0,
            explanation: 'Biochemistry is the chemistry of life.'
        }
    ]
},
{
    name: '1.1.3 Introduction to Biology: Careers Linked to Biology Fields of Study',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Careers Linked to Biology Fields of Study</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will relate fields of Biology to career opportunities, discuss factors that should influence career choice (and stereotypes that should not), and learn about training pathways and Kenyan institutions where biologists work.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Biology leads to some of the most important careers in society — in medicine, agriculture, environment, research and industry. Choosing well now helps you pick the right subjects and pathway.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Hospitals</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Research institutes</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Agricultural research</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦓 Wildlife service</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏭 Food and drug industries</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 Teaching</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8f5e9;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how Biology applies to everyday life.</li>
    <li>Relate fields of study in Biology to career opportunities.</li>
    <li>Illustrate careers linked to Biology fields of study.</li>
    <li>Appreciate the importance of Biology in everyday life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8f5e9;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Relate each field of Biology to at least one career.</li>
    <li>Explain factors that should influence career choice.</li>
    <li>Identify stereotypes that should not influence career choice.</li>
    <li>Describe training pathways and employers.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">❓ Key inquiry question:</strong> Why is it important to study Biology?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">🧰 What you already know:</strong> Lesson 1.1.2: fields of Biology.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Every field of Biology leads to careers. A learner interested in plants could become an agronomist or plant breeder; one interested in disease could become a doctor, nurse, pharmacist or laboratory technologist; one interested in wildlife could become a wildlife biologist or park warden.</p>
    <p>Good career choices are based on your <strong>interests, abilities, values and opportunities</strong> — not on gender, culture, disability, where you live or stereotypes such as “nursing is for women” or “science is for boys”.</p>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Choose a career that matches what you enjoy and what you are good at — Biology careers are open to everyone.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 Scientific Background</h3>
    <p>In Kenya, Biology graduates work at institutions such as the Kenya Medical Research Institute (KEMRI), the Kenya Agricultural and Livestock Research Organization (KALRO), the Kenya Wildlife Service (KWS), the Kenya Forestry Research Institute (KEFRI), the Kenya Marine and Fisheries Research Institute (KMFRI), the National Museums of Kenya, hospitals, universities, schools and private companies. Training is offered at universities, the Kenya Medical Training College (KMTC) and other colleges, with placement through KUCCPS.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Career</strong>
    </p>
    <p style="margin:6px 0;">A long-term path of work in a field.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A career in microbiology.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Stereotype</strong>
    </p>
    <p style="margin:6px 0;">A fixed, oversimplified belief about a group of people.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“Only men can be surgeons.”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Agronomist</strong>
    </p>
    <p style="margin:6px 0;">Expert in crop production and soil management.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Advises maize farmers.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Pharmacist</strong>
    </p>
    <p style="margin:6px 0;">Prepares and dispenses medicines.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Hospital pharmacy.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Laboratory technologist</strong>
    </p>
    <p style="margin:6px 0;">Tests samples in a laboratory.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Malaria blood-smear tests.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Resource person</strong>
    </p>
    <p style="margin:6px 0;">An expert invited to share knowledge.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A nurse visiting the class.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">1. Relating Fields to Careers</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Career opportunities</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Botany</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Botanist, agronomist, horticulturist, plant breeder, forester</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zoology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zoologist, wildlife biologist, veterinary officer, animal scientist</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taxonomy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taxonomist, museum curator, herbarium technician</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anatomy and Physiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Doctor, nurse, physiotherapist, clinical officer, sports scientist</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ecology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ecologist, environmental officer, conservationist, park warden</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biochemistry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biochemist, nutritionist, food scientist, pharmacist</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biotechnology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biotechnologist, vaccine and drug developer, tissue-culture technician</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Genetics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geneticist, genetic counsellor, animal and plant breeder, forensic DNA analyst</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parasitology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parasitologist, medical laboratory technologist, public health officer</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microbiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microbiologist, food quality officer, water quality analyst</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Entomology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Entomologist, pest control officer, bee-keeping officer</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">2. Factors in Career Choice</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Should influence choice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Should NOT influence choice</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interests and passions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gender (“that job is for boys/girls”)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Abilities and talents</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Culture or tradition alone</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Values (helping people, environment)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disability (with support, many careers are possible)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subject and pathway requirements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where you were born or live</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Job opportunities and future demand</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Peer pressure</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Advice from teachers, counsellors and professionals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stereotypes</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Teacher Tip</p>
    <div>Many Kenyan women lead in medical and agricultural research, and many men are excellent nurses and nutritionists. Your interests and abilities should guide you, not stereotypes.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">3. Training Pathways and Employers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li><strong>Senior School:</strong> take Biology with Chemistry, Mathematics and Physics or Geography as required by your chosen course.</li>
    <li><strong>Colleges:</strong> certificates and diplomas, e.g. in medical laboratory sciences, nursing, nutrition or agriculture.</li>
    <li><strong>Universities:</strong> degrees in medicine, pharmacy, biochemistry, microbiology, botany, zoology, biotechnology and more.</li>
    <li><strong>Postgraduate study:</strong> master’s and PhD for research and university teaching.</li>
    <li><strong>Employers:</strong> hospitals, KEMRI, KALRO, KWS, KEFRI, KMFRI, National Museums of Kenya, Government Chemist, universities, schools, NGOs, food and pharmaceutical companies.</li>
    </ul>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 1: Matching a learner to careers</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Amina enjoys Biology and Chemistry, likes working in laboratories and wants to help fight disease. Suggest two careers and the fields they come from.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Match interests to fields, then to careers.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Interests</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Laboratory work, Biology and Chemistry, fighting disease.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Fields</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Microbiology, parasitology, biochemistry.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: Careers</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Medical laboratory technologist; microbiologist (or vaccine developer).</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> Medical laboratory technologist (parasitology/microbiology) or microbiologist.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8f5e9;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Name two careers linked to Entomology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Entomologist and pest control officer (also bee-keeping officer).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Give two factors that should influence career choice.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Interests and abilities.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name a Kenyan institution for medical research.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">KEMRI.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear a lab coat and closed shoes; wear gloves when handling specimens, soil or pond water.</li>
    <li>Never eat, drink or taste anything in the laboratory or field.</li>
    <li>Handle living organisms gently and return them to their habitat; never collect protected species.</li>
    <li>Report every cut, sting, bite or spill to the teacher immediately, and wash your hands with soap after the activity.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interviewing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Designing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Presenting</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Self-assessment</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Designing a Biology Career Wheel from Local Materials</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To design a career wheel that links fields of Biology to careers.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cardboard from used boxes</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">A bottle top or nail and stick for the pivot</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Markers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler and scissors</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">String or a pencil for drawing circles</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">List of fields and careers</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use scissors and nails carefully.</li>
    <li>Use clean recycled materials and dispose of offcuts properly.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Cut two cardboard circles: a large base circle and a smaller top circle.</li>
    <li>Divide both into twelve equal sectors (30° each).</li>
    <li>Write a field of Biology in each sector of the top circle and matching careers in the base circle.</li>
    <li>Cut a window in the top circle and join the circles at the centre with a pivot so the top turns.</li>
    <li>Test the wheel: turn to each field and read the careers.</li>
    <li>Present your wheel to the class and explain two careers in detail.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Careers shown on wheel</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Training needed</th>
    </tr>
    <tr>
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
    </tr>
    <tr>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why divide the circle into 30° sectors?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Twelve fields × 30° = 360°, so each field gets an equal sector.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which careers on your wheel need a degree?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">E.g. doctor, pharmacist, biochemist, geneticist.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A career wheel shows clearly how each field of Biology leads to different careers.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Organising careers by field helps learners see options linked to their interests.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Unequal sectors.</li>
    <li>Placing careers under the wrong field.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Career counsellors use similar tools to guide learners in choosing pathways.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare wheels across groups. Which field had the most careers listed? Use a tally to find the three careers most popular in your class and discuss why.</p>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 2: Sector angles</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A career wheel shows 12 fields equally. What angle does each sector have? If you add 3 more fields, what is the new angle?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Divide 360° by the number of fields.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: 12 fields</strong>
    </p>
    <div style="margin:6px 0 0 34px;">360 ÷ 12 = 30°.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: 15 fields</strong>
    </p>
    <div style="margin:6px 0 0 34px;">360 ÷ 15 = 24°.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> 30°; then 24°</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #81c784;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Biology in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Knowing Biology careers helps you choose subjects and courses wisely.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Conservation careers protect Kenya’s forests, wildlife and water.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Health, agriculture and food industries employ many Biology graduates.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which career comes from Anatomy and Physiology?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Human body.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Doctor or nurse (also physiotherapist).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Is gender a good reason to reject a career?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Stereotypes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">No — careers are open to everyone.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which body places students in university courses in Kenya?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Placement service.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">KUCCPS.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write down your top three Biology-related careers and why.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Interview your partner about a career they like and list the subjects it needs.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Invite a resource person (e.g. a nurse, agricultural officer or lab technologist) and prepare questions.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a safe website to find the entry requirements for one Biology-related degree.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Relate six fields of Biology to careers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Botany — agronomist; Zoology — wildlife biologist; Microbiology — microbiologist; Genetics — plant breeder; Ecology — environmental officer; Biochemistry — nutritionist.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Explain three factors that should and three that should not influence career choice.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Should: interests, abilities, job opportunities. Should not: gender, culture, stereotypes.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Name four employers of biologists in Kenya.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">KEMRI, KALRO, KWS, hospitals (also KEFRI, KMFRI, museums).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why use local materials for the career wheel?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">They are cheap and available, and reusing them conserves the environment.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why might demand for biotechnologists grow in Kenya?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Need for vaccines, disease-resistant crops, food processing and new medicines.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Each field of Biology leads to careers: botany to agronomist, zoology to wildlife biologist, anatomy and physiology to doctor or nurse, microbiology to microbiologist, genetics to breeder or forensic analyst, entomology to pest control officer, and many more. Career choice should be based on interests, abilities, values and opportunities, not gender, culture, disability or stereotypes.</p>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Fields and careers.</li>
    <li>Factors in career choice.</li>
    <li>Training pathways and employers.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Interest + ability = good choice.</li>
    <li>Careers are for everyone.</li>
    <li>KEMRI, KALRO, KWS employ biologists.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Choosing by peer pressure.</li>
    <li>Ignoring subject requirements.</li>
    <li>Believing stereotypes.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Talk to professionals.</li>
    <li>Keep a career portfolio.</li>
    <li>Check requirements early.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #43a047;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Relate careers to specific fields.</li>
    <li>Explain factors with reasons.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-awareness in career choice.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Imagination and creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing career wheels.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presenting.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gender equality</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Biology careers keep Kenya healthy, fed and green.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a one-page career profile for a Biology career, including training and employers.</li>
    <li>List three stereotypes about careers and explain why they are wrong.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which career fits me best?</li>
    <li>What will I do this term to prepare?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Career</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Long-term work path.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Stereotype</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fixed oversimplified belief.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Agronomist</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Crop expert.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Geneticist</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inheritance expert.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Entomologist</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insect expert.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can relate fields to careers.</p>
    <p style="margin:6px 0;">☐ I can explain factors in career choice.</p>
    <p style="margin:6px 0;">☐ I can describe training pathways.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'An agronomist works mainly in:',
            options: ['Insect collections', 'Crop production and soils', 'Forensic DNA', 'Marine fish only'],
            correct: 1,
            explanation: 'Agronomy links botany to farming.'
        },
        {
            question: 'A career linked to Entomology is:',
            options: ['Pharmacist', 'Geneticist', 'Pest control officer', 'Dentist'],
            correct: 2,
            explanation: 'Entomology studies insects, including pests.'
        },
        {
            question: 'A medical laboratory technologist applies:',
            options: ['Taxonomy only', 'Parasitology and microbiology', 'Ecology only', 'Botany only'],
            correct: 1,
            explanation: 'They test samples for parasites and microbes.'
        },
        {
            question: 'Career choice should mainly depend on:',
            options: ['Gender', 'Friends’ choices', 'Interest and ability', 'Culture alone'],
            correct: 2,
            explanation: 'The KICD design discourages stereotypes.'
        },
        {
            question: 'A fixed oversimplified belief about a group is a:',
            options: ['Career', 'Field', 'Stereotype', 'Specimen'],
            correct: 2,
            explanation: 'Stereotypes should not limit choices.'
        },
        {
            question: 'KEMRI mainly carries out:',
            options: ['Road construction', 'Banking', 'Weather forecasting', 'Medical research'],
            correct: 3,
            explanation: 'It researches diseases such as malaria and HIV.'
        },
        {
            question: 'KALRO is involved in:',
            options: ['Wildlife tourism only', 'Space research', 'Mining', 'Agricultural and livestock research'],
            correct: 3,
            explanation: 'It develops crop varieties and breeds.'
        },
        {
            question: 'A forensic DNA analyst uses:',
            options: ['Genetics', 'Entomology only', 'Ecology only', 'Botany only'],
            correct: 0,
            explanation: 'The answer is Genetics. DNA is studied in genetics.'
        },
        {
            question: 'Twelve equal sectors on a career wheel each measure:',
            options: ['12°', '36°', '60°', '30°'],
            correct: 3,
            explanation: 'The answer is 30°. 360 ÷ 12 = 30°.'
        },
        {
            question: 'University course placement in Kenya is done by:',
            options: ['KUCCPS', 'KWS', 'KEMRI', 'NEMA'],
            correct: 0,
            explanation: 'KUCCPS places students in universities and colleges.'
        }
    ]
},
{
    name: '1.1 Laboratory Activity: Exploring Fields of Biology Through Stations',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🧪 Exploring Fields of Biology Through Stations</h2>
    <p style="font-size:16px;">Biologists in different fields use different methods. In this activity you will rotate through five laboratory stations, each showing the work of a different field, and record your observations and measurements.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#c8e6c9;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">PPE</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lab coat and gloves; goggles at the food-test station.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemicals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iodine solution stains and is an irritant — avoid skin and eyes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specimens</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Handle mould and preserved insects with forceps; do not inhale spores.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exercise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learners with health conditions do light activity only, with teacher approval.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hygiene</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wash hands after each station; no eating in the lab.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Five-Station Rotation</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To observe and practise methods used in different fields of Biology.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hand lenses</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Forceps</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Test tubes and rack</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Droppers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatch</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">White tiles</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Seedlings in pots</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mouldy bread in a sealed bag (Microbiology)</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Preserved insect (Entomology)</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Leaf and root of a seedling (Botany)</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Iodine solution and starch, potato and sugar solution (Biochemistry)</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Learners’ own pulse (Physiology)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Open the mould bag only briefly; never sniff it.</li>
    <li>Use a dropper for iodine.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Station 1 — Microbiology: observe mould through the sealed bag with a hand lens; describe colour and threads.</li>
    <li>Station 2 — Entomology: count the body parts, legs and wings of the insect.</li>
    <li>Station 3 — Botany: compare the leaf and root of a seedling; describe shape and colour.</li>
    <li>Station 4 — Biochemistry: add two drops of iodine to starch, potato and sugar solution on a white tile; record colours.</li>
    <li>Station 5 — Physiology: count your pulse for 30 seconds at rest, then after 1 minute of stepping; multiply by 2 for beats per minute.</li>
    <li>Record observations and name the field at each station.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Station</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Observation / result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microbiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Entomology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Botany</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biochemistry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What did iodine show at Station 4?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">A blue-black colour shows starch (in starch and potato); sugar solution stays brown-yellow.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why did pulse rate rise after exercise?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Muscles need more oxygen and glucose, so the heart beats faster.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Each field of Biology has its own questions and methods, from observing microbes to testing chemicals and measuring body functions.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Biologists choose methods suited to their field: hand lenses and microscopes, chemical tests, counting and measuring.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Counting pulse for the wrong time.</li>
    <li>Contaminating iodine droppers.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Hospitals, research institutes and factories use these same methods every day.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Results and Data Analysis</h3>
    <div style="background:#0b1a2e;border:1px solid #43a047;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c8e6c9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Percentage increase in pulse rate</p>
    <div style="color:#e8f5e9;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">% increase = (pulse after − pulse at rest) ÷ pulse at rest × 100</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> How much the heart rate rose during exercise.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> %</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Comparing physiology results.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 3: Pulse rate after exercise</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Resting pulse: 36 beats in 30 s. After exercise: 54 beats in 30 s. Find both rates per minute and the percentage increase.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Multiply by 2, then use the formula.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Resting</strong>
    </p>
    <div style="margin:6px 0 0 34px;">36 × 2 = 72 beats/min.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: After exercise</strong>
    </p>
    <div style="margin:6px 0 0 34px;">54 × 2 = 108 beats/min.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: Increase</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(108 − 72) ÷ 72 × 100 = 50%.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> 72 and 108 beats/min; 50% increase.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the field at each station and one method used.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Microbiology — observing mould; Entomology — counting body parts; Botany — comparing organs; Biochemistry — iodine test; Physiology — measuring pulse.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What colour shows starch with iodine?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Blue-black.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why multiply a 30-second pulse count by 2?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To get beats per minute.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why keep mould in a sealed bag?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To prevent spores spreading and being inhaled.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why measure the resting pulse first?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">It is the baseline for comparison.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'Iodine solution turns blue-black with:',
            options: ['Sugar', 'Starch', 'Water', 'Protein'],
            correct: 1,
            explanation: 'This is the standard test for starch.'
        },
        {
            question: 'Counting an insect’s legs and body parts is work in:',
            options: ['Biochemistry', 'Physiology', 'Microbiology', 'Entomology'],
            correct: 3,
            explanation: 'The answer is Entomology. Entomology studies insects.'
        },
        {
            question: 'Pulse rate is a measurement in:',
            options: ['Taxonomy', 'Botany', 'Ecology', 'Physiology'],
            correct: 3,
            explanation: 'It measures how the heart functions.'
        },
        {
            question: 'A resting pulse of 35 in 30 s is:',
            options: ['35 beats/min', '105 beats/min', '70 beats/min', '17.5 beats/min'],
            correct: 2,
            explanation: 'The answer is 70 beats/min. 35 × 2 = 70.'
        },
        {
            question: 'Pulse rises from 80 to 100 beats/min. The increase is:',
            options: ['25%', '20%', '80%', '100%'],
            correct: 0,
            explanation: 'The answer is 25%. 20 ÷ 80 × 100 = 25%.'
        }
    ]
},
{
    name: '1.1 Quiz: Introduction to Biology',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📝 Quiz — Introduction to Biology</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.1.1–1.1.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Meaning of Biology and characteristics of living things</li>
    <li>Applications of Biology in everyday life</li>
    <li>Fields of study in Biology</li>
    <li>Careers linked to Biology fields</li>
    <li>Factors in career choice</li>
    <li>Methods used in different fields</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #43a047;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c8e6c9;font-weight:bold;">📝 Exam Tip</p>
    <div>For fields, ask “which organism?” or “which aspect of life?”. For careers, link each to its field.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Biology studies life from:',
            options: ['Only large animals', 'Only plants', 'Only humans', 'Microorganisms to complex plants and animals'],
            correct: 3,
            explanation: 'The essence statement covers all forms of life.'
        },
        {
            question: '“MRS GREN” helps you remember:',
            options: ['Fields of Biology', 'Characteristics of living things', 'Careers', 'Apparatus'],
            correct: 1,
            explanation: 'Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.'
        },
        {
            question: 'A permanent increase in size and mass is:',
            options: ['Growth', 'Excretion', 'Sensitivity', 'Respiration'],
            correct: 0,
            explanation: 'Growth is a characteristic of life.'
        },
        {
            question: 'Drought-tolerant maize is an application of Biology in:',
            options: ['Forensics', 'Astronomy', 'Physics', 'Agriculture'],
            correct: 3,
            explanation: 'Breeding crops improves food security.'
        },
        {
            question: 'The study of microorganisms is:',
            options: ['Entomology', 'Zoology', 'Microbiology', 'Botany'],
            correct: 2,
            explanation: 'The answer is Microbiology. Micro means small.'
        },
        {
            question: 'The study of parasites is:',
            options: ['Ecology', 'Parasitology', 'Genetics', 'Anatomy'],
            correct: 1,
            explanation: 'Parasites live on or in hosts.'
        },
        {
            question: 'Making tissue-culture bananas is:',
            options: ['Taxonomy', 'Anatomy', 'Biotechnology', 'Ecology'],
            correct: 2,
            explanation: 'It uses living cells to produce plants.'
        },
        {
            question: 'A conservationist works mainly in the field of:',
            options: ['Biochemistry', 'Ecology', 'Anatomy', 'Parasitology'],
            correct: 1,
            explanation: 'Ecology deals with organisms and environment.'
        },
        {
            question: 'A nutritionist mainly applies:',
            options: ['Biochemistry and physiology', 'Entomology', 'Taxonomy', 'Geology'],
            correct: 0,
            explanation: 'Nutrition involves body chemistry and function.'
        },
        {
            question: 'Which should NOT influence career choice?',
            options: ['Gender stereotypes', 'Interests', 'Abilities', 'Job opportunities'],
            correct: 0,
            explanation: 'The answer is Gender stereotypes. Careers are open to all.'
        },
        {
            question: 'Wildlife research and protection in Kenya is done by:',
            options: ['KEBS', 'KRA', 'KNEC', 'KWS'],
            correct: 3,
            explanation: 'The Kenya Wildlife Service manages wildlife.'
        },
        {
            question: 'Which careers need a university degree?',
            options: ['None', 'All without training', 'Doctor and pharmacist', 'Only artisans'],
            correct: 2,
            explanation: 'These professions require degree-level training.'
        },
        {
            question: 'Comparing a leaf and a root of a seedling is work in:',
            options: ['Zoology', 'Parasitology', 'Botany', 'Entomology'],
            correct: 2,
            explanation: 'The answer is Botany. Botany studies plants.'
        },
        {
            question: 'Pulse increases from 70 to 105 beats/min. The increase is:',
            options: ['35%', '105%', '15%', '50%'],
            correct: 3,
            explanation: 'The answer is 50%. 35 ÷ 70 × 100 = 50%.'
        },
        {
            question: 'Correctly and precisely relating all fields to careers reaches:',
            options: ['Meets Expectations', 'Exceeds Expectations', 'Approaches Expectations', 'Below Expectations'],
            correct: 1,
            explanation: 'This is the KICD Exceeding descriptor.'
        }
    ]
},
{
    name: '1.1 Assignment: Biology Careers Fair',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📂 Biology Careers Fair</h2>
    <p style="font-size:16px;">In groups, you will prepare a stand for a Biology Careers Fair, using a career wheel, flash cards and a career profile to show how fields of Biology lead to careers.</p>
    <p style="margin:6px 0 0 0;color:#e8f5e9;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your school is holding a Careers Fair for Grade 9 learners choosing their Senior School pathways. The Biology club will run a stand showing the fields of Biology, the careers they lead to and the training needed.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Build a career wheel linking all twelve fields to at least two careers each.</li>
    <li>Make a set of flash cards for a quick quiz game for visitors.</li>
    <li>Interview a resource person in a Biology-related career (in person, by phone or email with your teacher’s help) and write a one-page profile.</li>
    <li>Prepare a poster on factors that should and should not influence career choice.</li>
    <li>Run your stand for at least ten visitors and record their feedback.</li>
    <li>Write a short group report.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Career wheel</li>
    <li>Flash-card game</li>
    <li>Career profile</li>
    <li>Career-choice poster</li>
    <li>Feedback summary</li>
    <li>Individual reflections (100 words each)</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relating fields to careers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correctly and precisely relates all fields to careers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correctly relates all fields</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates most fields</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates a few fields</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity of materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Highly creative use of local materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creative and clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some creativity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little creativity</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Career profile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detailed, accurate and well presented</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate and clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some gaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incomplete</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork and presentation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All contribute; confident presentation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uneven contribution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poorly prepared</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use safe and reliable websites.<br>Show careers as open to everyone.<br>Use recycled materials.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which career surprised me most?</li>
    <li>How has this changed my subject choices?</li>
    <li>How did our group work together?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The career wheel must link how many fields?',
            options: ['Two', 'Five', 'Twelve', 'Twenty'],
            correct: 2,
            explanation: 'All twelve fields from the design.'
        },
        {
            question: 'Each field should link to at least:',
            options: ['One career', 'Two careers', 'Ten careers', 'No careers'],
            correct: 1,
            explanation: 'The answer is Two careers. The brief asks for two.'
        },
        {
            question: 'Feedback should be collected from at least:',
            options: ['Ten visitors', 'One visitor', 'Fifty visitors', 'No visitors'],
            correct: 0,
            explanation: 'The answer is Ten visitors. The brief sets ten.'
        },
        {
            question: 'Correctly relating all fields to careers reaches at least:',
            options: ['Meets Expectations', 'Below Expectations', 'Approaches Expectations', 'No level'],
            correct: 0,
            explanation: 'Precise relating reaches Exceeds.'
        },
        {
            question: 'Using recycled materials supports:',
            options: ['Pollution', 'Waste', 'Deforestation', 'Environmental conservation'],
            correct: 3,
            explanation: 'The answer is Environmental conservation. Reuse reduces waste.'
        }
    ]
},
{
    name: '1.1 Revision: Introduction to Biology',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🔁 Revision — Introduction to Biology</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.1 before starting 1.2 Specimen Collection and Preservation.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🧬 Meaning</p>
    <div>Biology is the study of life and how organisms interact with each other and the environment.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🐾 MRS GREN</p>
    <div>Movement, Respiration, Sensitivity, Growth, Reproduction, Excretion, Nutrition.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🌍 Applications</p>
    <div>Health, nutrition, agriculture, conservation, industry, hygiene, forensics, decisions.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🌿 Fields</p>
    <div>Botany, Zoology, Taxonomy, Anatomy, Physiology, Ecology, Biochemistry, Biotechnology, Genetics, Parasitology, Microbiology, Entomology.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">💼 Careers</p>
    <div>Doctor, nurse, agronomist, microbiologist, geneticist, ecologist, entomologist, lab technologist, nutritionist.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🧭 Career choice</p>
    <div>Interest, ability, values, opportunities — not gender, culture, disability or stereotypes.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Studies</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Botany</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plants</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zoology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Animals</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taxonomy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Classification</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anatomy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Structure</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physiology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Function</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ecology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organisms and environment</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Genetics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inheritance</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Entomology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insects</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain three applications of Biology in health.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Understanding diseases, developing vaccines and drugs, improving nutrition and hygiene.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Distinguish between Microbiology and Parasitology.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Microbiology studies microorganisms; parasitology studies parasites and their hosts.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Relate four fields to careers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Botany — agronomist; Zoology — wildlife biologist; Genetics — breeder; Microbiology — microbiologist.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should gender not influence career choice?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Ability and interest matter; all careers are open to everyone.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Pulse 30 in 30 s rises to 45 in 30 s. Find the percentage increase.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">60 to 90 beats/min; 50% increase.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can explain the meaning and applications of Biology.</p>
    <p style="margin:6px 0;">☐ I can name and define the fields.</p>
    <p style="margin:6px 0;">☐ I can relate fields to careers.</p>
    <p style="margin:6px 0;">☐ I can explain factors in career choice.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which shows nutrition?',
            options: ['A stone rolling', 'Water boiling', 'Iron rusting', 'A plant making food by photosynthesis'],
            correct: 3,
            explanation: 'Nutrition is obtaining and using food.'
        },
        {
            question: 'Sanitation and hygiene apply Biology to:',
            options: ['Build roads', 'Forecast weather', 'Prevent disease spread', 'Mine gold'],
            correct: 2,
            explanation: 'Clean water and handwashing stop germs.'
        },
        {
            question: 'Biochemistry studies:',
            options: ['Rocks', 'Chemical processes in living things', 'Weather', 'Engines'],
            correct: 1,
            explanation: 'The answer is Chemical processes in living things. It is the chemistry of life.'
        },
        {
            question: 'Taxonomists work in places such as:',
            options: ['Petrol stations', 'Banks', 'Courts only', 'Museums and herbaria'],
            correct: 3,
            explanation: 'They store and classify specimens.'
        },
        {
            question: 'A physiotherapist mainly applies:',
            options: ['Anatomy and physiology', 'Entomology', 'Mycology', 'Botany'],
            correct: 0,
            explanation: 'They work with body structure and function.'
        },
        {
            question: 'Which is a factor that should influence career choice?',
            options: ['Ability', 'Peer pressure', 'Stereotypes', 'Gender'],
            correct: 0,
            explanation: 'The answer is Ability. Abilities help you succeed.'
        },
        {
            question: 'KMFRI researches:',
            options: ['Space', 'Marine and freshwater fisheries', 'Roads', 'Banks'],
            correct: 1,
            explanation: 'Kenya Marine and Fisheries Research Institute.'
        },
        {
            question: 'A career wheel with 10 equal fields has sectors of:',
            options: ['10°', '30°', '36°', '45°'],
            correct: 2,
            explanation: 'The answer is 36°. 360 ÷ 10 = 36°.'
        }
    ]
},
{
    name: '1.1 Summary: Introduction to Biology',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.1 Introduction to Biology</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🧾 Summary — Introduction to Biology</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Biology is the study of life; it is applied every day in health, food, the environment and industry, and its many fields lead to careers open to everyone who has the interest and ability.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Biology studies living organisms and their interactions.</li>
    <li>Living things show movement, respiration, sensitivity, growth, reproduction, excretion and nutrition.</li>
    <li>Biology is applied in health, nutrition, agriculture, conservation, industry, hygiene and forensics.</li>
    <li>Fields include Botany, Zoology, Taxonomy, Anatomy, Physiology, Ecology, Biochemistry, Biotechnology, Genetics, Parasitology, Microbiology and Entomology.</li>
    <li>Each field leads to careers in health, agriculture, environment, research and industry.</li>
    <li>Career choice should be based on interest, ability and opportunity, not stereotypes.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Meaning and applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition, MRS GREN, applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Give Kenyan examples</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Fields of Biology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Twelve fields and overlaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anatomy = structure; Physiology = function</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Careers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fields to careers; career choice; pathways</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interest + ability</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Five-station rotation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply 30 s pulse by 2</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Biology</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">organism</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">respiration</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">excretion</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sensitivity</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">botany</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">zoology</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">taxonomy</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">anatomy</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">physiology</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ecology</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">genetics</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">biotechnology</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">microbiology</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">entomology</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From KEMRI laboratories to KWS parks, Biology careers serve Kenya.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Specimen Collection and Preservation teaches you to collect, process and preserve specimens.</div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ explain how Biology applies to everyday life</p>
    <p style="margin:6px 0;">✔️ relate fields of Biology to careers</p>
    <p style="margin:6px 0;">✔️ illustrate careers linked to Biology</p>
    <p style="margin:6px 0;">✔️ appreciate the importance of Biology</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is that Biology:',
            options: ['Has no practical use', 'Is applied daily and leads to careers for everyone', 'Is only for doctors', 'Studies only plants'],
            correct: 1,
            explanation: 'The answer is Is applied daily and leads to careers for everyone. This sums up the sub-strand.'
        },
        {
            question: 'Which lesson covered MRS GREN?',
            options: ['1.1.2', '1.1.1', '1.1.3', '1.2.1'],
            correct: 1,
            explanation: 'Characteristics of life were in 1.1.1.'
        },
        {
            question: 'Which lesson covered career choice factors?',
            options: ['1.1.1', '1.1.2', '1.2.2', '1.1.3'],
            correct: 3,
            explanation: 'The answer is 1.1.3. Careers were in 1.1.3.'
        },
        {
            question: 'What comes next?',
            options: ['1.2 Specimen Collection and Preservation', '1.3 Cell Structure', '2.1 Nutrition in Plants', '3.1 Nutrition in Animals'],
            correct: 0,
            explanation: 'Specimen work follows the introduction.'
        },
        {
            question: 'Entomology is the study of:',
            options: ['Words', 'Fungi', 'Insects', 'Fish'],
            correct: 2,
            explanation: 'Not to be confused with etymology.'
        }
    ]
},
{
    name: '1.2.1 Specimen Collection and Preservation: Apparatus for Collecting Specimens',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Apparatus for Collecting Specimens</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will identify the apparatus and materials used to collect specimens — aspirators (pooters), pitfall traps, sweep nets, light traps, Tullgren funnels, forceps, hand lenses and collecting bags — learn what each collects, and improvise them from locally available materials.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Biologists need real specimens to identify species, monitor pests and diseases, and teach. The right apparatus collects organisms safely and without unnecessary harm, and improvising apparatus solves shortages in schools.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐛 Pest monitoring on farms</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦟 Mosquito surveillance</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌿 Plant surveys</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Museum collections</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐟 Fisheries research</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 School laboratories</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8f5e9;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify apparatus and materials used to collect, process and preserve specimens.</li>
    <li>Collect, process and preserve specimens for biological study using improvised and conventional apparatus.</li>
    <li>Appreciate the importance of collecting, processing and preserving specimens.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8f5e9;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify at least eight apparatus used to collect specimens.</li>
    <li>State the organisms each collects and how it works.</li>
    <li>Improvise collecting apparatus from local materials.</li>
    <li>Explain ethical and safety rules for collecting.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">❓ Key inquiry question:</strong> How are specimens collected and preserved?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">🧰 What you already know:</strong> Sub-strand 1.1: fields of Biology (taxonomy, entomology, ecology).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>specimen</strong> is a whole organism or part of an organism collected for study. Collecting specimens is the first step of many investigations — from identifying a crop pest to checking which insects live in a forest.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 660 300" width="660" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="40" y="110" width="90" height="120" rx="10" fill="none" stroke="#e8f5e9" stroke-width="2"/><rect x="60" y="96" width="50" height="16" fill="#8d6e63"/><path d="M75 96 L 75 50 L 30 30" fill="none" stroke="#81c784" stroke-width="4"/><path d="M95 96 L 95 60 L 140 40" fill="none" stroke="#fde68a" stroke-width="4"/><rect x="90" y="112" width="10" height="6" fill="#cfd8dc"/><text x="20" y="22" fill="#e8f5e9" font-size="11">inlet tube</text><text x="120" y="34" fill="#e8f5e9" font-size="11">mouthpiece</text><text x="85" y="140" fill="#e8f5e9" font-size="10" text-anchor="middle">gauze</text><circle cx="70" cy="200" r="4" fill="#3e2723"/><circle cx="90" cy="210" r="3" fill="#3e2723"/><text x="85" y="256" fill="#e8f5e9" font-size="13" text-anchor="middle">Pooter (aspirator)</text><text x="85" y="274" fill="#c8e6c9" font-size="11" text-anchor="middle">small insects</text><rect x="200" y="140" width="200" height="90" fill="#5d4037" opacity="0.7"/><line x1="200" y1="140" x2="400" y2="140" stroke="#a1887f" stroke-width="3"/><path d="M270 140 L 275 220 L 325 220 L 330 140" fill="#1b2a10" stroke="#e8f5e9" stroke-width="2"/><rect x="250" y="100" width="100" height="8" fill="#8d6e63"/><line x1="258" y1="108" x2="258" y2="140" stroke="#8d6e63" stroke-width="3"/><line x1="342" y1="108" x2="342" y2="140" stroke="#8d6e63" stroke-width="3"/><text x="300" y="92" fill="#e8f5e9" font-size="11" text-anchor="middle">cover against rain</text><text x="300" y="200" fill="#e8f5e9" font-size="10" text-anchor="middle">jar sunk level</text><text x="300" y="214" fill="#e8f5e9" font-size="10" text-anchor="middle">with ground</text><ellipse cx="225" cy="134" rx="9" ry="5" fill="#3e2723"/><text x="300" y="256" fill="#e8f5e9" font-size="13" text-anchor="middle">Pitfall trap</text><text x="300" y="274" fill="#c8e6c9" font-size="11" text-anchor="middle">crawling ground animals</text><path d="M480 40 L 560 40 L 540 20 L 500 20 Z" fill="#fde68a"/><text x="520" y="14" fill="#e8f5e9" font-size="11" text-anchor="middle">lamp</text><path d="M460 80 L 580 80 L 530 160 L 530 180 L 510 180 L 510 160 Z" fill="none" stroke="#e8f5e9" stroke-width="2"/><path d="M470 80 L 570 80 L 555 100 L 485 100 Z" fill="#5d4037"/><line x1="482" y1="102" x2="558" y2="102" stroke="#cfd8dc" stroke-dasharray="3 2" stroke-width="2"/><text x="452" y="60" fill="#e8f5e9" font-size="11" text-anchor="end">soil sample</text><text x="452" y="74" fill="#e8f5e9" font-size="11" text-anchor="end">on wire gauze</text><rect x="500" y="184" width="40" height="44" rx="4" fill="none" stroke="#e8f5e9" stroke-width="2"/><rect x="502" y="206" width="36" height="20" fill="#4fc3f7" opacity="0.5"/><text x="560" y="214" fill="#e8f5e9" font-size="11">ethanol</text><text x="520" y="256" fill="#e8f5e9" font-size="13" text-anchor="middle">Tullgren funnel</text><text x="520" y="274" fill="#c8e6c9" font-size="11" text-anchor="middle">small soil organisms</text>
    </svg>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Choose the apparatus that suits the organism: nets for flying insects, pooters for tiny insects, pitfall traps for crawling animals, Tullgren funnels for soil animals.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Collecting apparatus works by matching the habits of the organism: flying insects are swept or trapped with light; crawling animals fall into pitfall traps; small soil animals move away from heat and drying and fall out of a Tullgren funnel. Ethical collecting means taking only what is needed, never collecting protected species, getting permission and causing as little harm as possible to the organisms and their habitat.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Specimen</strong>
    </p>
    <p style="margin:6px 0;">An organism or part of an organism collected for study.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A pressed leaf, a beetle.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Pooter (aspirator)</strong>
    </p>
    <p style="margin:6px 0;">A bottle with two tubes used to suck up small insects.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Collecting aphids.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Pitfall trap</strong>
    </p>
    <p style="margin:6px 0;">A container sunk into the ground to trap crawling animals.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Catching beetles.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Sweep net</strong>
    </p>
    <p style="margin:6px 0;">A strong net swept through grass to catch insects.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Grasshoppers in a field.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Light trap</strong>
    </p>
    <p style="margin:6px 0;">A lamp with a container to attract and catch night-flying insects.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Moths.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Tullgren funnel</strong>
    </p>
    <p style="margin:6px 0;">A funnel and lamp that drive small animals out of soil or leaf litter.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Mites and springtails.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Improvised apparatus</strong>
    </p>
    <p style="margin:6px 0;">Apparatus made from locally available materials.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A pooter from a bottle and straws.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">1. Conventional Apparatus and Their Uses</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Apparatus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Organisms collected</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it works</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweep net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insects in grass and low bushes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swept in an arc through vegetation; insects fall into the net</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Butterfly (insect) net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flying insects such as butterflies</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light, fine net swung over flying insects</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pooter (aspirator)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small insects such as aphids, ants, small beetles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sucking through the mouthpiece draws insects in; gauze protects the mouth</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pitfall trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Crawling animals: beetles, ants, spiders, millipedes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Animals walking on the ground fall into a sunken jar</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Night-flying insects such as moths</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light attracts insects, which fall into a container</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tullgren funnel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small soil and leaf-litter animals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heat and light from a lamp drive animals down into a collecting bottle</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beating tray</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insects on trees and shrubs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Branches are tapped over a white tray</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plankton net and fish net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small aquatic organisms and fish</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pulled through water</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forceps, hand lens, collecting bags and bottles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Handling, observing and carrying specimens</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forceps pick up; hand lens magnifies; bags and bottles carry</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">2. Improvising Apparatus from Local Materials</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Apparatus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Improvised from</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pooter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small plastic bottle, two drinking straws or plastic tubes, a piece of mosquito net, plasticine or tape to seal</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweep net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wire coat hanger bent into a ring, old mosquito net or cloth, a stick handle</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pitfall trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yoghurt cup or tin sunk into the ground, a flat stone or board on small stones as a rain cover</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tullgren funnel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Top half of a plastic bottle as funnel, wire mesh or net, a desk lamp or bulb, a jar of ethanol underneath</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A torch or bulb over a basin of soapy water or a white sheet</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plant press</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two boards or pieces of plywood, newspapers, cardboard and straps or heavy stones</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collecting bags</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clean polythene or paper bags with labels</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Never use a pooter to collect stinging insects, or to suck up soil, liquid or dusty material. Always check that the gauze is in place before use.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">3. Rules for Ethical and Safe Collecting</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Get permission from the landowner and your teacher.</li>
    <li>Never collect protected or rare species; do not collect in national parks or reserves without official permits.</li>
    <li>Collect only the number of specimens you need.</li>
    <li>Disturb habitats as little as possible; replace stones and logs you turn over.</li>
    <li>Avoid stinging, biting and venomous animals and poisonous plants.</li>
    <li>Wear gloves, closed shoes and long sleeves where needed; wash hands afterwards.</li>
    <li>Label specimens immediately with locality, date and collector.</li>
    </ul>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 1: Choosing apparatus</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Which apparatus would you use to collect (a) grasshoppers in a school field (b) beetles active at night on the ground (c) tiny mites in leaf litter (d) moths?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Match apparatus to habitat and behaviour.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: (a)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Grasshoppers in grass → sweep net.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: (b)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Night-active crawlers → pitfall trap.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: (c)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Small animals in litter → Tullgren funnel.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e8f5e9;">Step 4: (d)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Night-flying insects → light trap.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> (a) sweep net (b) pitfall trap (c) Tullgren funnel (d) light trap</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8f5e9;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does a Tullgren funnel collect?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Small soil and leaf-litter organisms.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does a pooter have gauze?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To stop insects entering the mouth.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give two rules for ethical collecting.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Collect only what you need; never collect protected species (also get permission).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear a lab coat and closed shoes; wear gloves when handling specimens, soil or pond water.</li>
    <li>Never eat, drink or taste anything in the laboratory or field.</li>
    <li>Handle living organisms gently and return them to their habitat; never collect protected species.</li>
    <li>Report every cut, sting, bite or spill to the teacher immediately, and wash your hands with soap after the activity.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Improvising</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Designing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Handling apparatus</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Working safely</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Improvising a Pooter and a Pitfall Trap</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To make a pooter and a pitfall trap from local materials and test them.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small transparent plastic bottle with lid</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two drinking straws or flexible tubes</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mosquito net (small piece)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plasticine or tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Yoghurt cup or tin</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small trowel</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Flat stone or board</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hand lens</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">None (optional: a little soapy water in the pitfall trap to stop animals climbing out, if specimens are to be preserved)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Make holes in the bottle lid with a heated nail only under teacher supervision.</li>
    <li>Never suck up soil, water or stinging insects with the pooter.</li>
    <li>Place the pitfall trap where nobody will trip on it, and mark it.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Pooter: make two holes in the bottle lid; push in two straws; tie mosquito net over the inner end of the mouthpiece straw; seal gaps with plasticine.</li>
    <li>Test the pooter on small insects on a plant: point the inlet straw at an insect and suck gently through the mouthpiece.</li>
    <li>Pitfall trap: dig a hole the size of the cup; sink the cup so its rim is level with the soil surface.</li>
    <li>Place a flat stone or board raised on small stones above it as a rain cover.</li>
    <li>Leave the trap overnight; next morning, examine the catch with a hand lens.</li>
    <li>Record the animals caught and release them unless they are needed for preservation.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Apparatus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Animals collected</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Did it work well? Improvements</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pooter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pitfall trap</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why must the rim of the pitfall trap be level with the ground?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">So walking animals do not notice an edge and fall straight in.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How could you improve your pooter?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">E.g. use longer, wider tubes for bigger insects or a better seal to improve suction.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Effective collecting apparatus can be improvised cheaply from local materials.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> The pooter uses suction; the pitfall trap uses the animals’ own movement across the ground.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Leaving the rim above the soil so animals avoid it.</li>
    <li>Leaky seals that reduce suction.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Many field biologists use home-made traps in remote areas where conventional apparatus is not available.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare the number and types of animals caught by each apparatus across the class. Which apparatus collected the greatest variety? Explain why different apparatus collect different organisms.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #81c784;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Biology in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Farmers and extension officers use traps to monitor pests before spraying.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Monitoring insects with traps helps track biodiversity and the health of ecosystems.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Pest control companies and research institutes use light traps and pheromone traps to monitor insects.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which apparatus collects insects on tree branches?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Tap the branch.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">A beating tray.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What can replace a sweep net frame?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Bend into a ring.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">A wire coat hanger.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why use a light trap at night?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Night fliers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Many insects such as moths are attracted to light at night.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw and label a pooter, a pitfall trap and a Tullgren funnel.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Explain to your partner which apparatus you would use for five different organisms.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Improvise a sweep net and a Tullgren funnel for the school laboratory.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Watch a short video on insect sampling methods and list two new apparatus.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name six apparatus used to collect specimens and the organisms each collects.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Sweep net — grass insects; pooter — small insects; pitfall trap — crawling animals; light trap — moths; Tullgren funnel — soil organisms; plankton net — aquatic organisms.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe how to improvise a pooter.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Bottle with two straws through the lid; gauze over the mouthpiece end; seal with plasticine.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> State four ethical rules for collecting specimens.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Get permission; collect only what is needed; avoid protected species; minimise habitat damage.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should a pitfall trap have a cover?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To keep out rain and debris and protect trapped animals from predators.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how the Tullgren funnel separates organisms from soil.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Heat and light from the lamp dry the top of the sample; organisms move downwards away from it and fall through the mesh into the collecting bottle.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Specimens are organisms or parts collected for study. Apparatus include sweep nets, insect nets, pooters, pitfall traps, light traps, Tullgren funnels, beating trays, plankton nets, forceps, hand lenses and collecting bags. Many can be improvised from local materials. Collecting must be ethical and safe: permission, minimum numbers, no protected species and immediate labelling.</p>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Apparatus and uses.</li>
    <li>Improvised apparatus.</li>
    <li>Ethical and safe collecting.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Match apparatus to organism.</li>
    <li>Gauze in the pooter.</li>
    <li>Rim of pitfall trap level with soil.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using a pooter on stinging insects.</li>
    <li>Collecting protected species.</li>
    <li>Not labelling at once.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw each apparatus.</li>
    <li>Practise improvising.</li>
    <li>Learn one organism per apparatus.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #43a047;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name apparatus with the organism collected and how it works.</li>
    <li>Draw labelled diagrams.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking and problem solving</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Improvising apparatus.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Successful collecting.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group research.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Simple traps help protect Kenya’s crops and health.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw and label three improvised apparatus and list the materials used.</li>
    <li>Write 100 words on why protected species must not be collected.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which apparatus was easiest to improvise?</li>
    <li>How can I collect without harming the environment?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Specimen</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organism for study.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pooter</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Suction collector.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pitfall trap</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sunken jar trap.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tullgren funnel</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soil animal extractor.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sweep net</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grass insect net.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can identify apparatus.</p>
    <p style="margin:6px 0;">☐ I can state their uses.</p>
    <p style="margin:6px 0;">☐ I can improvise apparatus.</p>
    <p style="margin:6px 0;">☐ I can collect ethically.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A sweep net is used to collect:',
            options: ['Soil mites', 'Fish', 'Plankton', 'Insects in grass'],
            correct: 3,
            explanation: 'It is swept through vegetation.'
        },
        {
            question: 'A pooter is used to collect:',
            options: ['Small insects', 'Birds', 'Large mammals', 'Trees'],
            correct: 0,
            explanation: 'Suction draws in tiny insects.'
        },
        {
            question: 'The gauze in a pooter:',
            options: ['Kills insects', 'Adds air', 'Prevents insects entering the mouth', 'Holds water'],
            correct: 2,
            explanation: 'The answer is Prevents insects entering the mouth. It is a safety barrier.'
        },
        {
            question: 'A pitfall trap collects:',
            options: ['Flying birds', 'Fish', 'Moths in flight', 'Crawling ground animals'],
            correct: 3,
            explanation: 'Animals fall into the sunken jar.'
        },
        {
            question: 'Night-flying moths are best collected with a:',
            options: ['Light trap', 'Pitfall trap', 'Plankton net', 'Plant press'],
            correct: 0,
            explanation: 'The answer is Light trap. Light attracts them.'
        },
        {
            question: 'Small animals are driven out of soil in a Tullgren funnel by:',
            options: ['Water', 'Heat and light from a lamp', 'Wind', 'Sound'],
            correct: 1,
            explanation: 'They move away from heat and drying.'
        },
        {
            question: 'A wire coat hanger can be used to improvise a:',
            options: ['Sweep net frame', 'Pooter', 'Light bulb', 'Hand lens'],
            correct: 0,
            explanation: 'The answer is Sweep net frame. It forms the ring of the net.'
        },
        {
            question: 'Insects on tree branches are collected with a:',
            options: ['Pitfall trap', 'Tullgren funnel', 'Beating tray', 'Plankton net'],
            correct: 2,
            explanation: 'Tapped branches drop insects onto the tray.'
        },
        {
            question: 'Which is an ethical collecting rule?',
            options: ['Collect all you see', 'Collect only what you need', 'Collect protected species', 'Destroy habitats'],
            correct: 1,
            explanation: 'This reduces harm to populations.'
        },
        {
            question: 'The rim of a pitfall trap should be:',
            options: ['Above the soil', 'Upside down', 'Covered with soil', 'Level with the soil surface'],
            correct: 3,
            explanation: 'Animals then fall in without noticing an edge.'
        }
    ]
},
{
    name: '1.2.2 Specimen Collection and Preservation: Collecting, Processing and Preserving Plant Specimens',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Collecting, Processing and Preserving Plant Specimens</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how to collect plant specimens correctly, press and dry them, mount them on herbarium sheets, label them with scientific and local information, and store them to make a herbarium.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Herbaria are libraries of plants. They help scientists identify plants, study medicinal and food plants, track invasive weeds and conserve rare species. Kenya’s East African Herbarium in Nairobi holds a very large collection of plant specimens from the region.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌿 Herbaria and museums</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Medicinal plant research</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Weed identification</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌳 Forest surveys</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 School teaching collections</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Plant identification guides</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8f5e9;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify apparatus and materials used to collect, process and preserve specimens.</li>
    <li>Collect, process and preserve specimens for biological study using improvised and conventional apparatus.</li>
    <li>Appreciate the importance of collecting, processing and preserving specimens.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8f5e9;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Collect plant specimens correctly.</li>
    <li>Press and dry plant specimens.</li>
    <li>Mount and label herbarium specimens.</li>
    <li>Store specimens to prevent damage.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">❓ Key inquiry question:</strong> How are specimens collected and preserved?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">🧰 What you already know:</strong> Lesson 1.2.1: collecting apparatus; Junior School: parts of a plant.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>herbarium</strong> is a collection of pressed, dried, mounted and labelled plant specimens stored for study. A good herbarium specimen shows as many parts as possible — leaves, stem, flowers, fruits and, for small plants, roots — so that the plant can be identified accurately.</p>
    <p>The process has four stages: <strong>collecting</strong>, <strong>pressing and drying</strong>, <strong>mounting</strong> and <strong>labelling and storing</strong>.</p>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Collect → press → dry → mount → label → store. Change the drying papers often so the plant does not rot.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Plant tissues contain a lot of water. If they are not dried quickly, fungi and bacteria grow and the specimen decays and turns black. Pressing between absorbent paper flattens the specimen and draws out water; changing the paper regularly and allowing air flow speeds drying. Well-dried specimens can last for centuries if kept dry and protected from insects.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Herbarium</strong>
    </p>
    <p style="margin:6px 0;">A collection of pressed, dried, labelled plant specimens.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8f5e9;">📏 Symbol / unit:</span> pl. herbaria</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>East African Herbarium, Nairobi.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Plant press</strong>
    </p>
    <p style="margin:6px 0;">A frame that holds plants flat between absorbent paper for drying.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Boards, newspaper and straps.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Mounting</strong>
    </p>
    <p style="margin:6px 0;">Fixing a dried specimen onto a herbarium sheet.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Using glue or tape strips.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Herbarium sheet</strong>
    </p>
    <p style="margin:6px 0;">Stiff paper or card on which a specimen is mounted.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Manila card.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Locality</strong>
    </p>
    <p style="margin:6px 0;">The place where a specimen was collected.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Near Nakuru, roadside.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Habitat</strong>
    </p>
    <p style="margin:6px 0;">The type of environment where the plant grows.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Moist forest edge.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">1. Collecting Plant Specimens</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Choose healthy plants with leaves, and flowers or fruits if possible.</li>
    <li>For small herbs, collect the whole plant including roots; for shrubs and trees, cut a representative branch about 30 cm long.</li>
    <li>Use secateurs, a knife or a panga carefully; do not uproot rare or protected plants.</li>
    <li>Collect only one or two specimens of each plant.</li>
    <li>Place specimens in labelled polythene bags or straight into the field press to stop wilting.</li>
    <li>Record field notes: date, locality, habitat, local name, height of plant, flower colour and collector.</li>
    </ul>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">ℹ️ Note</p>
    <div>Some features such as flower colour, smell and plant height are lost on drying, so record them in your field notebook at the time of collection.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">2. Pressing, Drying and Mounting</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 220" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="60" y="30" width="300" height="20" fill="#8d6e63"/><text x="380" y="45" fill="#e8f5e9" font-size="12">board or grid (top)</text><rect x="60" y="54" width="300" height="14" fill="#cfd8dc" opacity="0.85"/><text x="380" y="66" fill="#e8f5e9" font-size="11">newspaper / blotting paper</text><rect x="60" y="72" width="300" height="14" fill="#66bb6a" opacity="0.85"/><text x="380" y="84" fill="#e8f5e9" font-size="11">plant specimen</text><rect x="60" y="90" width="300" height="14" fill="#cfd8dc" opacity="0.85"/><text x="380" y="102" fill="#e8f5e9" font-size="11">newspaper / blotting paper</text><rect x="60" y="108" width="300" height="14" fill="#a1887f" opacity="0.85"/><text x="380" y="120" fill="#e8f5e9" font-size="11">corrugated cardboard (air flow)</text><rect x="60" y="126" width="300" height="14" fill="#cfd8dc" opacity="0.85"/><text x="380" y="138" fill="#e8f5e9" font-size="11">newspaper / blotting paper</text><rect x="60" y="144" width="300" height="14" fill="#66bb6a" opacity="0.85"/><text x="380" y="156" fill="#e8f5e9" font-size="11">next specimen</text><rect x="60" y="162" width="300" height="14" fill="#cfd8dc" opacity="0.85"/><text x="380" y="174" fill="#e8f5e9" font-size="11">newspaper / blotting paper</text><rect x="60" y="182" width="300" height="20" fill="#8d6e63"/><text x="380" y="197" fill="#e8f5e9" font-size="12">board or grid (bottom)</text><line x1="100" y1="22" x2="100" y2="210" stroke="#fde68a" stroke-width="3"/><line x1="320" y1="22" x2="320" y2="210" stroke="#fde68a" stroke-width="3"/><text x="210" y="18" fill="#fde68a" font-size="11" text-anchor="middle">straps or weights press the layers tightly</text>
    </svg>
    </div>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Arrange the specimen flat on a sheet of newspaper so that leaves do not overlap; turn one leaf to show its lower surface.</li>
    <li>Cover with more newspaper and place between cardboard sheets in the press.</li>
    <li>Tighten the straps or add heavy weights.</li>
    <li>Change the newspaper daily for the first three days, then every two to three days, until the plant is completely dry and stiff (about 1–3 weeks).</li>
    <li>Mount the dried specimen on a herbarium sheet using strips of gummed tape or a little glue; place loose seeds in a small paper envelope glued to the sheet.</li>
    <li>Attach the label to the bottom right-hand corner of the sheet.</li>
    </ol>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Herbarium label information</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scientific name (if known)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><em>Bidens pilosa</em>
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Common/local name</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Black-jack</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Family</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asteraceae</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Locality</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">School field, Nakuru</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Habitat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Open disturbed ground</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Date of collection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 March</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collector’s name and number</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A. Otieno, No. 07</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Notes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yellow flowers; height 60 cm</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">3. Storing Specimens and Importance of Herbaria</h3>
    <p>Store herbarium sheets flat in folders in a dry, well-ventilated cupboard or box. Protect them from insects (such as beetles that eat dried plants) by keeping them dry and clean; cupboards may be treated with insect repellents by the teacher, and sheets can be checked regularly.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Importance of herbaria</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing an unknown plant with named specimens</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Research</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Studying medicinal and food plants</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conservation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recording rare and endangered plants</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Monitoring change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tracking spread of invasive weeds over time</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Education</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teaching plant structure and classification</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 1: Planning drying time</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A learner presses a plant on Monday morning. Papers are changed daily for 3 days, then every 3 days until the plant is dry on day 15. How many paper changes are made after the first pressing?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Count the daily changes, then the changes every 3 days.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Daily changes</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Days 2, 3 and 4 → 3 changes.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Every 3 days after that</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Days 7, 10, 13 → 3 changes.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: Total</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 + 3 = 6 changes.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> 6 paper changes before the specimen is dry on day 15.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8f5e9;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is a herbarium?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">A collection of pressed, dried, mounted and labelled plant specimens.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why change the drying paper often?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To remove moisture and stop fungi and bacteria causing decay.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give four details on a herbarium label.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Name, locality, date, collector (also habitat, family, notes).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear a lab coat and closed shoes; wear gloves when handling specimens, soil or pond water.</li>
    <li>Never eat, drink or taste anything in the laboratory or field.</li>
    <li>Handle living organisms gently and return them to their habitat; never collect protected species.</li>
    <li>Report every cut, sting, bite or spill to the teacher immediately, and wash your hands with soap after the activity.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Collecting</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pressing and drying</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mounting</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Labelling</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Making Herbarium Specimens</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To collect, press, dry, mount and label plant specimens.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Improvised plant press (boards, cardboard, straps or weights)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Old newspapers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Secateurs or scissors</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Polythene collecting bags</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Herbarium sheets (manila card)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gummed tape or glue</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Field notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plant specimens from the school compound (common weeds, grasses, garden plants)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear gloves; avoid thorny, stinging or poisonous plants (e.g. those with milky latex).</li>
    <li>Use secateurs carefully and close them after use.</li>
    <li>Wash hands after handling plants.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Collect three different common plants, recording field notes for each.</li>
    <li>Arrange each specimen neatly on newspaper and place it in the press.</li>
    <li>Tighten the press and keep it in a dry, airy place.</li>
    <li>Change papers as planned and record the condition each time.</li>
    <li>When dry, mount each specimen on a herbarium sheet with tape strips.</li>
    <li>Write and attach a full label; store sheets in a folder.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Specimen</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Date collected</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Date dry</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Days to dry</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Condition when dry</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which specimen dried fastest, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Usually thin-leaved plants such as grasses; thick or succulent plants hold more water.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why turn one leaf to show its lower surface?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Features on the lower surface, such as hairs and veins, help identification.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Plants can be preserved for long periods by pressing, drying, mounting and labelling them in a herbarium.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Removing water stops decay; flattening preserves shape; labels make the specimen scientifically useful.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Overlapping leaves that stick together.</li>
    <li>Not changing papers, causing mould.</li>
    <li>Incomplete labels.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Botanists at the National Museums of Kenya prepare herbarium specimens in the same way.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare the drying times of specimens across the class. Plot a bar chart of days to dry for different types of plants. Suggest why succulent plants need special treatment (e.g. a quick dip in hot water or splitting before pressing, done by the teacher).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #81c784;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Biology in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Herbaria help identify medicinal plants and poisonous plants that affect livestock.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Herbarium records show where rare plants grew in the past and help conservation planning.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Pharmaceutical and agricultural research rely on correctly identified plant material.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which plant parts should a herbarium specimen show?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: As complete as possible.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Leaves, stem, flowers or fruits, and roots for small herbs.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Where is the label usually placed?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Corner.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">At the bottom right-hand corner of the sheet.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How long does drying usually take?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Weeks.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">About 1–3 weeks.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Collect and press one plant from home with full field notes.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Swap specimens and check each other’s labels for missing information.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Start a class herbarium of twenty common plants in the school compound.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find out what the East African Herbarium does and summarise it in five points.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Describe the steps in making a herbarium specimen.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Collect; press between newspaper in a press; change paper until dry; mount on a sheet; label; store dry.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> State five items of information on a herbarium label.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Scientific name, local name, locality, habitat, date (also collector, family).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain three uses of herbaria.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Identification, research and conservation.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why record flower colour at the time of collection?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Colour often fades during drying.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is cardboard placed between layers in the press?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">It allows air to circulate, speeding drying and reducing mould.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Plant specimens are collected with as many parts as possible and with field notes, pressed between absorbent paper in a plant press, dried by regular paper changes, mounted on herbarium sheets and labelled with name, locality, habitat, date and collector. Dry, insect-free storage keeps them for many years. Herbaria support identification, research, conservation and education.</p>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Collecting plants.</li>
    <li>Pressing and drying.</li>
    <li>Mounting and labelling.</li>
    <li>Storing and importance.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Change papers often.</li>
    <li>Label bottom right.</li>
    <li>Record colour and smell in the field.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Overlapping leaves.</li>
    <li>Uprooting rare plants.</li>
    <li>Missing locality on labels.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use a field notebook.</li>
    <li>Work neatly.</li>
    <li>Check specimens regularly in storage.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #43a047;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the process in correct order.</li>
    <li>Give reasons for each step.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making specimens confidently.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Improvising a plant press.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Labelling clearly.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> A well-made herbarium sheet can be useful to scientists for more than a hundred years.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Make one complete herbarium sheet with a full label.</li>
    <li>Explain in 100 words how herbaria help conservation.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I find hardest about making a herbarium?</li>
    <li>Which local plants would I like to study?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Herbarium</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plant specimen collection.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Plant press</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressing frame.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mounting</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fixing to a sheet.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Locality</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where collected.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Habitat</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Type of environment.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can collect plants correctly.</p>
    <p style="margin:6px 0;">☐ I can press and dry them.</p>
    <p style="margin:6px 0;">☐ I can mount and label them.</p>
    <p style="margin:6px 0;">☐ I can store them safely.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A herbarium is a collection of:',
            options: ['Live fish', 'Dried, labelled plant specimens', 'Insects in jars', 'Soil samples'],
            correct: 1,
            explanation: 'Herbaria store plant specimens.'
        },
        {
            question: 'A small herb should be collected:',
            options: ['As one leaf only', 'Whole, including roots', 'As flowers only', 'Without any label'],
            correct: 1,
            explanation: 'Complete specimens are easier to identify.'
        },
        {
            question: 'Drying papers are changed regularly to:',
            options: ['Add colour', 'Make the plant grow', 'Add water', 'Remove moisture and prevent decay'],
            correct: 3,
            explanation: 'The answer is Remove moisture and prevent decay. Damp specimens go mouldy.'
        },
        {
            question: 'Cardboard in a plant press allows:',
            options: ['Water to enter', 'Insects to feed', 'Light to pass', 'Air circulation'],
            correct: 3,
            explanation: 'The answer is Air circulation. Air flow speeds drying.'
        },
        {
            question: 'The herbarium label is usually placed:',
            options: ['At the bottom right-hand corner', 'Under the specimen', 'On the back only', 'Nowhere'],
            correct: 0,
            explanation: 'This is the standard position.'
        },
        {
            question: 'Which information is lost on drying and must be recorded in the field?',
            options: ['Locality', 'Flower colour', 'Date', 'Collector'],
            correct: 1,
            explanation: 'The answer is Flower colour. Colours fade as plants dry.'
        },
        {
            question: 'Dried specimens are fixed to sheets using:',
            options: ['Gummed tape strips or a little glue', 'Nails', 'Staples through stems only', 'Water'],
            correct: 0,
            explanation: 'Tape and glue hold them without damage.'
        },
        {
            question: 'A use of herbaria is:',
            options: ['Storing fish', 'Breeding insects', 'Measuring rainfall', 'Identifying unknown plants'],
            correct: 3,
            explanation: 'Comparison with named specimens identifies plants.'
        },
        {
            question: 'Specimens should be stored:',
            options: ['In a damp corner', 'In direct rain', 'Dry and protected from insects', 'On the floor outside'],
            correct: 2,
            explanation: 'Moisture and insects damage specimens.'
        },
        {
            question: 'Drying usually takes about:',
            options: ['1 hour', '1 year', '1–3 weeks', '1 minute'],
            correct: 2,
            explanation: 'Depends on plant thickness and conditions.'
        }
    ]
},
{
    name: '1.2.3 Specimen Collection and Preservation: Collecting, Processing and Preserving Animal Specimens',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Collecting, Processing and Preserving Animal Specimens</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how to collect small animals safely, sort them, preserve them dry (by pinning on soft boards) or wet (in 70% ethanol), label them and store them, and why preserved animal collections are important.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Preserved animals let biologists identify pests, disease vectors and new species, and they make excellent teaching collections. Correct preservation keeps their shape and features for years.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦟 Disease-vector surveillance</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐛 Crop pest identification</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Museum collections</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦋 Biodiversity surveys</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏫 School teaching collections</span><span style="background:#0b1a2e;border:1px solid #c8e6c9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐟 Fisheries research</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e8f5e9;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify apparatus and materials used to collect, process and preserve specimens.</li>
    <li>Collect, process and preserve specimens for biological study using improvised and conventional apparatus.</li>
    <li>Appreciate the importance of collecting, processing and preserving specimens.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e8f5e9;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Collect small animals safely and humanely.</li>
    <li>Sort and process animal specimens.</li>
    <li>Preserve specimens by dry and wet methods.</li>
    <li>Label and store specimens correctly.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">❓ Key inquiry question:</strong> How are specimens collected and preserved?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e8f5e9;">🧰 What you already know:</strong> Lessons 1.2.1 and 1.2.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Animal specimens are collected with the apparatus you learnt about — nets, pooters, pitfall traps and Tullgren funnels — or carefully by hand with forceps. After collection they are <strong>sorted</strong> into groups, <strong>processed</strong> and then <strong>preserved</strong>.</p>
    <p>There are two main preservation methods: <strong>dry preservation</strong> for animals with hard exoskeletons such as beetles, butterflies and grasshoppers, and <strong>wet preservation</strong> in ethanol for soft-bodied animals such as earthworms, spiders, larvae, slugs and tadpoles.</p>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Hard bodies → pinned and dried. Soft bodies → kept in 70% ethanol. Label everything.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔭 Scientific Background</h3>
    <p>Preservatives stop decay by killing microorganisms and preventing chemical breakdown of tissues. Ethanol at about 70% is widely used in schools because it preserves tissues, penetrates well and is safer than stronger chemicals. Specimens intended for a collection are humanely killed by the teacher using an approved method; others are observed and released. Labels in wet collections are written in pencil or alcohol-proof ink and placed inside the jar.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Sorting</strong>
    </p>
    <p style="margin:6px 0;">Separating collected specimens into groups.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Beetles, ants, spiders.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Dry preservation</strong>
    </p>
    <p style="margin:6px 0;">Preserving by drying, usually after pinning.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Pinned butterflies.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Wet preservation</strong>
    </p>
    <p style="margin:6px 0;">Preserving in a liquid preservative.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Earthworms in ethanol.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Preservative</strong>
    </p>
    <p style="margin:6px 0;">A substance that prevents decay.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e8f5e9;">📏 Symbol / unit:</span> e.g. 70% ethanol</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Ethanol solution.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Insect pin</strong>
    </p>
    <p style="margin:6px 0;">A thin rust-proof pin used to mount insects.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Pinned through the thorax.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #81c784;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Setting board</strong>
    </p>
    <p style="margin:6px 0;">A grooved board used to spread insect wings while drying.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Butterfly wings spread.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">1. Collecting and Sorting Animal Specimens</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the right apparatus for each animal and handle animals gently with forceps or soft brushes.</li>
    <li>Avoid venomous or dangerous animals such as scorpions, some spiders, snakes and stinging insects.</li>
    <li>Place animals in separate labelled containers to avoid damage or predation.</li>
    <li>Sort the catch on a white tray into groups (e.g. insects, spiders, millipedes, worms, snails) using a hand lens.</li>
    <li>Count and record each group; release animals not needed for preservation where they were found.</li>
    </ul>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Teacher Tip</p>
    <div>Only the teacher should humanely kill specimens for a collection, using an approved method. Learners should never harm animals unnecessarily.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">2. Dry Preservation: Pinning and Mounting</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 600 170" width="600" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><ellipse cx="78" cy="70" rx="10" ry="8" fill="#5d4037"/><ellipse cx="100" cy="70" rx="14" ry="11" fill="#6d4c41"/><ellipse cx="134" cy="70" rx="22" ry="12" fill="#795548"/><circle cx="104" cy="66" r="4" fill="#e53935"/><text x="100" y="114" fill="#e8f5e9" font-size="11" text-anchor="middle">Most insects: pin through the thorax,</text><text x="100" y="128" fill="#e8f5e9" font-size="11" text-anchor="middle">slightly right of the centre line</text><path d="M300 50 L 360 50 L 360 92 L 300 92 Z" fill="#4e342e" stroke="#e8f5e9"/><line x1="330" y1="50" x2="330" y2="92" stroke="#e8f5e9"/><circle cx="342" cy="60" r="4" fill="#e53935"/><text x="330" y="114" fill="#e8f5e9" font-size="11" text-anchor="middle">Beetle: pin through the</text><text x="330" y="128" fill="#e8f5e9" font-size="11" text-anchor="middle">right wing case (elytron)</text><path d="M500 70 L 440 30 L 440 100 Z M 500 70 L 560 30 L 560 100 Z" fill="#ffb74d" opacity="0.8"/><rect x="496" y="40" width="8" height="60" fill="#5d4037"/><circle cx="500" cy="54" r="4" fill="#e53935"/><text x="500" y="120" fill="#e8f5e9" font-size="11" text-anchor="middle">Butterfly: pin thorax; spread</text><text x="500" y="134" fill="#e8f5e9" font-size="11" text-anchor="middle">wings on a setting board</text><text x="300" y="160" fill="#c8e6c9" font-size="11" text-anchor="middle">red dot = position of insect pin</text>
    </svg>
    </div>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Pin the insect while it is still soft (or relax a dried one in a damp container).</li>
    <li>Pin most insects through the thorax, slightly right of the centre line; beetles through the right wing case.</li>
    <li>Spread the wings of butterflies and moths on a setting board and hold them with paper strips until dry.</li>
    <li>Arrange legs and antennae neatly using pins while drying.</li>
    <li>Dry for several days in a dry, airy place.</li>
    <li>Mount the pinned specimens in a box with a soft base (cork, polystyrene or soft board) and add a label below each specimen on the same pin.</li>
    <li>Store in a closed box in a dry place, protected from pests such as ants and beetles.</li>
    </ol>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Pinning through the centre of the thorax destroys features used for identification. Pin slightly to the right of the centre line.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">3. Wet Preservation and Labelling</h3>
    <p>Soft-bodied animals shrivel when dried, so they are stored in a preservative. Place the specimen in a clean glass or plastic jar, cover it completely with 70% ethanol, add a label written in pencil inside the jar, close it tightly and store it away from heat and flames.</p>
    <div style="background:#0b1a2e;border:1px solid #43a047;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#c8e6c9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Diluting ethanol</p>
    <div style="color:#e8f5e9;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">C₁ × V₁ = C₂ × V₂</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> C₁ = starting concentration, V₁ = volume of starting solution needed, C₂ = concentration wanted, V₂ = final volume wanted.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Concentration in %, volume in cm³</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Making 70% ethanol from stronger ethanol.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> V₁ = C₂ × V₂ ÷ C₁, then add water up to V₂.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 1: Making 70% ethanol</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> How would you make 200 cm³ of 70% ethanol from 95% ethanol?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Use C₁V₁ = C₂V₂.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">95 × V₁ = 70 × 200.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">V₁ = 14 000 ÷ 95 ≈ 147 cm³.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e8f5e9;">Step 3: Make up</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Measure 147 cm³ of 95% ethanol and add water to make 200 cm³.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> About 147 cm³ of 95% ethanol plus about 53 cm³ of water.</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Animal specimen label</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Name (common and scientific if known)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grasshopper</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Locality</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">School field, Kisumu</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Habitat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Long grass</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Date</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 April</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Method of collection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweep net</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collector</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">J. Wanjiku</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Preservation method</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dry, pinned</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e8f5e9;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which animals are preserved wet?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Soft-bodied animals such as earthworms, spiders, larvae and tadpoles.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Where is an insect pinned?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Through the thorax, slightly right of the centre line (beetles through the right wing case).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why is ethanol kept away from flames?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">It is flammable.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear gloves and goggles when handling ethanol; it is flammable — no flames nearby.</li>
    <li>Handle insect pins carefully and keep them in a pin box.</li>
    <li>Never handle venomous or stinging animals.</li>
    <li>Wash hands after handling specimens and preservatives.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sorting</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pinning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Wet preservation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Labelling</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Preserving Animal Specimens by Dry and Wet Methods</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To sort collected animals and preserve them by pinning and by wet preservation in ethanol.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">White tray</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Forceps and soft brush</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hand lens</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Insect pins</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Soft board (cork or polystyrene)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Setting board (or improvised from two strips of soft board)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Specimen jars with lids</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Measuring cylinders</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Labels and pencil</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Specimens collected earlier (insects and soft-bodied animals)</span><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">95% ethanol and water (to make 70% ethanol)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Make up ethanol solution under teacher supervision, away from flames, with goggles.</li>
    <li>Keep pins in their box and pick them up with forceps if dropped.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sort the specimens on a white tray into hard-bodied and soft-bodied groups.</li>
    <li>Make 100 cm³ of 70% ethanol from 95% ethanol (about 74 cm³ ethanol + water to 100 cm³).</li>
    <li>Place soft-bodied specimens in jars, cover with 70% ethanol, add a pencil label inside and close tightly.</li>
    <li>Pin hard-bodied insects through the thorax and place them on the soft board.</li>
    <li>Spread the wings of any butterfly or moth on the setting board.</li>
    <li>Attach labels to each pinned insect and leave to dry for several days.</li>
    <li>Arrange the finished specimens in a labelled display box.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Specimen</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Group (hard/soft)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Method</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Label complete? (Y/N)</th>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why are soft-bodied animals not dried?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">They shrivel and lose their shape and features when dried.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why use pencil for labels inside ethanol jars?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Most inks dissolve in ethanol; pencil does not.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Hard-bodied animals are preserved by pinning and drying; soft-bodied animals by wet preservation in 70% ethanol; both must be labelled fully.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Drying and ethanol both stop decay by removing water or killing microorganisms.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Not covering specimens fully with ethanol.</li>
    <li>Pinning through the centre of the thorax.</li>
    <li>Labels written in ink that runs.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Entomologists at research institutes keep pinned insect collections and ethanol-preserved larvae for identifying pests and vectors.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Calculate the ethanol needed for different volumes (50, 100 and 250 cm³). Count the number of specimens preserved by each method in the class collection and work out the percentage preserved wet. Suggest why some specimens deteriorated, if any did.</p>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 2: Percentage of wet specimens</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A class preserved 24 specimens: 9 wet and 15 dry. What percentage were preserved wet?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Part ÷ whole × 100.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Divide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">9 ÷ 24 = 0.375.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Percentage</strong>
    </p>
    <div style="margin:6px 0 0 34px;">37.5%.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> 37.5%</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #81c784;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Biology in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Preserved mosquito larvae and adults help health workers identify malaria vectors.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Reference collections help monitor biodiversity and detect invasive species.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Pest control and agricultural companies use reference collections to identify pests correctly.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How should a beetle be pinned?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Hard wing cover.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Through the right wing case (elytron).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What preservative concentration is commonly used?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Seventy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">70% ethanol.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is a setting board used for?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Butterflies.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Spreading insect wings while they dry.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a labelled diagram showing where to pin a grasshopper, a beetle and a butterfly.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Calculate together the volumes needed to make 50 cm³ and 250 cm³ of 70% ethanol.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Prepare a display box of ten pinned and labelled insects for the laboratory.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find out how museums store insect and wet collections to protect them for many years.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Distinguish between dry and wet preservation, with examples.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Dry: pinning and drying hard-bodied insects (beetles). Wet: storing soft-bodied animals in 70% ethanol (earthworms).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe how to pin and set a butterfly.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Pin through the thorax; spread wings on a setting board and hold with paper strips; dry; label.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> How much 95% ethanol is needed to make 50 cm³ of 70% ethanol?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">70 × 50 ÷ 95 ≈ 37 cm³.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should ethanol jars be tightly closed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To prevent evaporation and drying out of specimens.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why are preserved collections important to Kenya’s health and agriculture?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">They allow accurate identification of disease vectors and crop pests so the right control measures are used.</div>
    </details>
    </div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Animal specimens are collected safely with suitable apparatus, sorted on a white tray and preserved. Hard-bodied insects are pinned (through the thorax, slightly right of centre; beetles through the right wing case), set and dried, then stored in boxes. Soft-bodied animals are preserved wet in 70% ethanol (made using C₁V₁ = C₂V₂). All specimens are labelled with name, locality, habitat, date, method and collector.</p>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Collecting and sorting.</li>
    <li>Dry preservation.</li>
    <li>Wet preservation and ethanol dilution.</li>
    <li>Labelling and storage.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hard → pin; soft → ethanol.</li>
    <li>Pencil labels in jars.</li>
    <li>Ethanol is flammable.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Drying soft-bodied animals.</li>
    <li>Ink labels in ethanol.</li>
    <li>Pinning through the centre line.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Practise dilution calculations.</li>
    <li>Draw pinning positions.</li>
    <li>Label immediately.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #43a047;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe methods in order with reasons.</li>
    <li>Show working in dilution calculations.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Preserving specimens successfully.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing methods.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a class collection.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e8f5e9;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Animal welfare</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Kenya’s insect reference collections help fight malaria and protect crops.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Describe the preservation of a grasshopper and an earthworm.</li>
    <li>Calculate the 95% ethanol needed to make 300 cm³ of 70% ethanol.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How can I collect animals responsibly?</li>
    <li>Which preservation method did I find easier?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sorting</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grouping specimens.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pinning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mounting insects on pins.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Setting board</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wing-spreading board.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Wet preservation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Storing in liquid.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Preservative</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prevents decay.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can collect and sort animals.</p>
    <p style="margin:6px 0;">☐ I can pin and dry insects.</p>
    <p style="margin:6px 0;">☐ I can preserve specimens in ethanol.</p>
    <p style="margin:6px 0;">☐ I can label and store specimens.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Hard-bodied insects such as beetles are usually preserved by:',
            options: ['Pinning and drying', 'Storing in ethanol', 'Freezing only', 'Boiling'],
            correct: 0,
            explanation: 'Their exoskeleton keeps its shape when dry.'
        },
        {
            question: 'Earthworms are best preserved by:',
            options: ['Pinning', 'Drying in the sun', 'Wet preservation in 70% ethanol', 'Pressing'],
            correct: 2,
            explanation: 'Soft bodies shrivel when dried.'
        },
        {
            question: 'Most insects are pinned through the:',
            options: ['Head', 'Thorax, slightly right of centre', 'Abdomen tip', 'Legs'],
            correct: 1,
            explanation: 'This keeps key features intact.'
        },
        {
            question: 'A beetle is pinned through the:',
            options: ['Left antenna', 'Head', 'Mouthparts', 'Right wing case'],
            correct: 3,
            explanation: 'This is the standard position for beetles.'
        },
        {
            question: 'A setting board is used to:',
            options: ['Spread insect wings while drying', 'Press plants', 'Catch insects', 'Measure ethanol'],
            correct: 0,
            explanation: 'It holds wings flat and symmetrical.'
        },
        {
            question: 'Labels inside ethanol jars should be written in:',
            options: ['Ordinary ink', 'Pencil', 'Chalk', 'Felt pen'],
            correct: 1,
            explanation: 'The answer is Pencil. Ink dissolves in ethanol.'
        },
        {
            question: 'To make 100 cm³ of 70% ethanol from 95% ethanol you need about:',
            options: ['70 cm³', '95 cm³', '30 cm³', '74 cm³ of 95% ethanol'],
            correct: 3,
            explanation: 'The answer is 74 cm³ of 95% ethanol. 70 × 100 ÷ 95 ≈ 74 cm³.'
        },
        {
            question: 'Ethanol must be kept away from:',
            options: ['Flames', 'Labels', 'Jars', 'Forceps'],
            correct: 0,
            explanation: 'The answer is Flames. It is flammable.'
        },
        {
            question: 'Specimens are first sorted on a:',
            options: ['Black cloth', 'White tray', 'Mirror', 'Window'],
            correct: 1,
            explanation: 'A white background shows small animals clearly.'
        },
        {
            question: '9 of 24 specimens preserved wet is:',
            options: ['9%', '24%', '37.5%', '62.5%'],
            correct: 2,
            explanation: 'The answer is 37.5%. 9 ÷ 24 × 100 = 37.5%.'
        }
    ]
},
{
    name: '1.2 Laboratory Activity: Collecting and Preserving Specimens Around the School',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🧪 Collecting and Preserving Specimens Around the School</h2>
    <p style="font-size:16px;">In this activity you will use both improvised and conventional apparatus to collect specimens from three habitats around the school, sort and count them, preserve selected specimens, and compare how well each apparatus worked. The KICD rubric rewards learners who collect, sort, process and preserve specimens using both improvised and conventional apparatus.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#c8e6c9;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">PPE</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gloves, closed shoes, long sleeves; goggles when handling ethanol.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Animals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not handle stinging, biting or venomous animals; use forceps and brushes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plants</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Avoid thorny, stinging and latex-producing plants.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemicals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ethanol is flammable — no flames; close containers.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Environment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collect only what is needed; replace stones and logs; release unused animals.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Three-Habitat Specimen Survey</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To collect, sort, count and preserve specimens from three habitats using improvised and conventional apparatus.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Conventional and improvised sweep nets, pooters and pitfall traps</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Improvised Tullgren funnel with lamp</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plant press</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">White trays, forceps, hand lenses</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Specimen jars, 70% ethanol, labels</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Field notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / specimens:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #43a047;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Habitats: grass field, under trees (leaf litter), garden or hedge</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Stay with your group in the area set by the teacher.</li>
    <li>Mark pitfall traps so nobody trips; remove them after the activity.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Set pitfall traps in each habitat the day before (both improvised and conventional if available).</li>
    <li>In each habitat, take ten sweeps with a sweep net and use a pooter on vegetation for five minutes.</li>
    <li>Collect a cup of leaf litter and run it through the Tullgren funnel for at least 2 hours.</li>
    <li>Collect one plant specimen from each habitat for pressing.</li>
    <li>Sort all animals on white trays, identify them to major groups and count them.</li>
    <li>Preserve two hard-bodied and two soft-bodied specimens correctly and label everything.</li>
    <li>Release all other animals where they were collected.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Habitat</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Apparatus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Improvised or conventional</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Groups collected</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Total number</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grass field</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweep net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grass field</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pitfall trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaf litter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tullgren funnel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hedge/garden</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pooter</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which habitat had the greatest variety of animals, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Often leaf litter or hedges, which provide food, shelter and moisture.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How did improvised apparatus compare with conventional apparatus?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Often nearly as effective, though less durable; results depend on construction quality.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Different habitats and apparatus yield different organisms; with care, improvised apparatus can collect specimens effectively for preservation and study.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Each apparatus samples organisms with particular habits, and each habitat supports organisms adapted to its conditions.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Taking different numbers of sweeps in different habitats.</li>
    <li>Leaving the Tullgren funnel too short a time.</li>
    <li>Mixing specimens from different habitats.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Biodiversity surveys in Kenyan forests and farms use the same methods to compare habitats.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Total the animals from each habitat and calculate the percentage of the class total found in each. Draw a bar chart. Compare improvised and conventional apparatus by the number of animals caught.</p>
    <div style="background:#0b1a2e;border-left:4px solid #43a047;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#c8e6c9;font-weight:bold;">✏️ Worked Example 3: Comparing habitats</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The class collected 120 animals: 54 from leaf litter, 42 from grass and 24 from the hedge. What percentage came from leaf litter?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Part ÷ whole × 100.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e8f5e9;">Step 1: Divide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">54 ÷ 120 = 0.45.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#43a047;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e8f5e9;">Step 2: Percentage</strong>
    </p>
    <div style="margin:6px 0 0 34px;">45%.</div>
    </div>
    <div style="background:#0f2e14;border:1px solid #43a047;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#c8e6c9;">✅ Model answer:</strong> 45%</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the apparatus you used in each habitat and what it collected.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Sweep net — grass insects; pitfall trap — crawling animals; Tullgren funnel — litter animals; pooter — small insects on plants.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Why must the number of sweeps be the same in each habitat?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">For a fair comparison between habitats.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> State two ways to reduce harm to the environment during collecting.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Release unused animals; replace stones and logs (also collect only what is needed).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why are pitfall traps set the day before?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">To catch animals active at night and over a longer period.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What should be written on each preserved specimen label?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Name, locality, habitat, date, collection method, collector and preservation method.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'Procedurally collecting, sorting, processing and preserving with both kinds of apparatus reaches:',
            options: ['Meets Expectations', 'Exceeds Expectations', 'Approaches Expectations', 'Below Expectations'],
            correct: 1,
            explanation: 'This is the KICD Exceeding descriptor.'
        },
        {
            question: 'Using conventional apparatus only places a learner at:',
            options: ['Exceeds Expectations', 'Meets Expectations', 'Approaches Expectations', 'Below Expectations'],
            correct: 2,
            explanation: 'The rubric requires improvised apparatus too for higher levels.'
        },
        {
            question: 'For fair comparison, the number of sweeps in each habitat should be:',
            options: ['The same', 'Different', 'Random', 'Zero'],
            correct: 0,
            explanation: 'Equal effort makes results comparable.'
        },
        {
            question: '54 of 120 animals came from leaf litter. That is:',
            options: ['54%', '66%', '45%', '12%'],
            correct: 2,
            explanation: 'The answer is 45%. 54 ÷ 120 × 100 = 45%.'
        },
        {
            question: 'After the activity, unused animals should be:',
            options: ['Released where they were found', 'Thrown away', 'Kept in sealed jars', 'Left on the tray'],
            correct: 0,
            explanation: 'This conserves local populations.'
        }
    ]
},
{
    name: '1.2 Quiz: Specimen Collection and Preservation',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📝 Quiz — Specimen Collection and Preservation</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.2.1–1.2.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Apparatus for collecting specimens and their uses</li>
    <li>Improvising apparatus from local materials</li>
    <li>Ethical and safe collecting</li>
    <li>Making herbarium specimens</li>
    <li>Dry and wet preservation of animals</li>
    <li>Labelling, storage and ethanol dilution</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #43a047;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c8e6c9;font-weight:bold;">📝 Exam Tip</p>
    <div>Match each apparatus to the organism it collects. For dilution, use C₁V₁ = C₂V₂ and show your working.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A specimen is:',
            options: ['A type of apparatus', 'An organism or part collected for study', 'A habitat', 'A preservative'],
            correct: 1,
            explanation: 'Specimens are studied by biologists.'
        },
        {
            question: 'Grasshoppers in long grass are best collected with a:',
            options: ['Sweep net', 'Tullgren funnel', 'Plankton net', 'Plant press'],
            correct: 0,
            explanation: 'Sweeping catches insects in vegetation.'
        },
        {
            question: 'Ants walking on the ground are best collected with a:',
            options: ['Light trap', 'Butterfly net', 'Pitfall trap', 'Plant press'],
            correct: 2,
            explanation: 'They fall into the sunken jar.'
        },
        {
            question: 'A Tullgren funnel uses a lamp to:',
            options: ['Attract birds', 'Dry plants', 'Drive soil animals downwards', 'Kill bacteria'],
            correct: 2,
            explanation: 'Animals move away from heat and drying.'
        },
        {
            question: 'A plant press can be improvised from:',
            options: ['Glass and water', 'Boards, newspapers and straps or weights', 'Metal and fire', 'Plastic bags only'],
            correct: 1,
            explanation: 'These hold plants flat while drying.'
        },
        {
            question: 'Which is an ethical collecting practice?',
            options: ['Getting permission from the landowner', 'Collecting rare species', 'Damaging habitats', 'Collecting hundreds of the same species'],
            correct: 0,
            explanation: 'Permission and restraint protect people and nature.'
        },
        {
            question: 'Herbarium specimens are dried mainly to:',
            options: ['Prevent decay', 'Add colour', 'Make them heavier', 'Grow roots'],
            correct: 0,
            explanation: 'Removing water stops microorganisms.'
        },
        {
            question: 'Loose seeds on a herbarium sheet are kept in:',
            options: ['Ethanol', 'A pitfall trap', 'The press only', 'A small paper envelope'],
            correct: 3,
            explanation: 'Envelopes stop seeds being lost.'
        },
        {
            question: 'The East African Herbarium is in:',
            options: ['Mombasa', 'Kisumu', 'Garissa', 'Nairobi'],
            correct: 3,
            explanation: 'It is part of the National Museums of Kenya.'
        },
        {
            question: 'A butterfly’s wings are spread using a:',
            options: ['Setting board', 'Plant press', 'Pooter', 'Sweep net'],
            correct: 0,
            explanation: 'Paper strips hold the wings flat while drying.'
        },
        {
            question: 'Spiders and larvae are preserved:',
            options: ['Dry, pinned', 'Wet, in ethanol', 'Pressed in newspaper', 'In the sun'],
            correct: 1,
            explanation: 'Soft bodies need wet preservation.'
        },
        {
            question: 'To make 150 cm³ of 70% ethanol from 95% ethanol you need about:',
            options: ['70 cm³', '111 cm³', '95 cm³', '150 cm³'],
            correct: 1,
            explanation: 'The answer is 111 cm³. 70 × 150 ÷ 95 ≈ 111 cm³.'
        },
        {
            question: 'Labels in ethanol jars are written in pencil because:',
            options: ['Pencil is cheaper', 'Ink is illegal', 'Ink dissolves in ethanol', 'Pencil glows'],
            correct: 2,
            explanation: 'Pencil graphite does not dissolve.'
        },
        {
            question: 'A specimen label should include:',
            options: ['Price and colour of jar', 'Only the name of the school', 'Nothing', 'Locality, date, habitat and collector'],
            correct: 3,
            explanation: 'These details give the specimen scientific value.'
        },
        {
            question: 'Collecting and processing but not preserving specimens is:',
            options: ['Meets Expectations', 'Exceeds Expectations', 'Below Expectations', 'Approaches Expectations'],
            correct: 2,
            explanation: 'This is the KICD Below descriptor.'
        }
    ]
},
{
    name: '1.2 Assignment: Specimen Collection and Preservation Project',
    type: 'lesson',
    duration: '120 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">📂 Specimen Collection and Preservation Project</h2>
    <p style="font-size:16px;">As the KICD design requires, you will carry out a project on collecting, processing and preserving specimens, including planning, budgeting and recording, keep a portfolio of your progress and present your findings.</p>
    <p style="margin:6px 0 0 0;color:#e8f5e9;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school laboratory needs a teaching collection of local plants and animals. Your group has been asked to produce a set of correctly preserved and labelled specimens, using improvised apparatus wherever possible to keep costs low.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Plan: choose your habitats and target groups (e.g. ten plants, ten insects, five soft-bodied animals), set a timeline and assign roles.</li>
    <li>Budget: list all materials and apparatus, mark which you will improvise, and estimate costs for anything you must buy.</li>
    <li>Collect: use at least three types of apparatus, including at least two improvised ones; record field notes.</li>
    <li>Process and preserve: press and mount plants; pin and dry insects; preserve soft-bodied animals in 70% ethanol.</li>
    <li>Record: keep a portfolio with dated entries, photographs or sketches, problems met and solutions.</li>
    <li>Present: display your collection and explain your methods, costs and findings to the class.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Project plan and timeline</li>
    <li>Budget table</li>
    <li>Preserved and labelled collection</li>
    <li>Project portfolio</li>
    <li>Presentation</li>
    <li>Individual reflections (150 words each)</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collecting, processing and preserving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Procedurally collects, sorts, processes and preserves using improvised and conventional apparatus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Procedurally collects, processes and preserves using both types</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uses conventional apparatus only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collects and processes but does not preserve</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planning and budgeting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detailed plan; accurate, realistic budget with savings from improvising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear plan and budget</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial plan or budget</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No plan or budget</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Portfolio and records</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete, honest, dated and well organised</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly complete</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some gaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incomplete</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation and teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, confident; all contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear; most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some disorganisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poorly prepared</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Improvise apparatus to save money and show creativity.<br>Never collect protected species or collect in parks without permits.<br>Record everything honestly in your portfolio, including failures.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which part of the project was most challenging?</li>
    <li>How much did improvising save?</li>
    <li>What did I learn about teamwork and integrity?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The project must include:',
            options: ['Only collecting', 'Planning, budgeting and recording', 'Only a presentation', 'Buying all apparatus'],
            correct: 1,
            explanation: 'The KICD design lists all three.'
        },
        {
            question: 'At least how many improvised apparatus should be used?',
            options: ['None', 'Two', 'Ten', 'One'],
            correct: 1,
            explanation: 'The brief asks for at least two.'
        },
        {
            question: 'A portfolio is:',
            options: ['A type of net', 'A preservative', 'A dated record of project progress', 'A specimen jar'],
            correct: 2,
            explanation: 'It shows the work done over time.'
        },
        {
            question: 'Improvising apparatus mainly helps to:',
            options: ['Increase costs', 'Break rules', 'Harm specimens', 'Reduce costs and solve shortages'],
            correct: 3,
            explanation: 'Local materials are cheap and available.'
        },
        {
            question: 'Recording failures honestly in the portfolio shows:',
            options: ['Integrity', 'Dishonesty', 'Laziness', 'Rivalry'],
            correct: 0,
            explanation: 'The design links integrity to the project.'
        }
    ]
},
{
    name: '1.2 Revision: Specimen Collection and Preservation',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🔁 Revision — Specimen Collection and Preservation</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.2 before moving on to 1.3 Cell Structure and Specialization.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🪤 Apparatus</p>
    <div>Sweep net, insect net, pooter, pitfall trap, light trap, Tullgren funnel, beating tray, plankton net, forceps, hand lens, bags.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">♻️ Improvising</p>
    <div>Bottles, straws, coat hangers, mosquito nets, cups, boards and newspapers.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🤝 Ethics</p>
    <div>Permission, minimum numbers, no protected species, minimal disturbance, label at once.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🌿 Plants</p>
    <div>Collect → press → dry (change papers) → mount → label → store.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🦋 Dry preservation</p>
    <div>Pin through thorax (beetles: right wing case); set wings; dry; box.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🧪 Wet preservation</p>
    <div>Soft-bodied animals in 70% ethanol; pencil labels; closed jars.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #81c784;">
    <p style="margin:0 0 4px 0;color:#c8e6c9;font-weight:bold;">🧮 Dilution</p>
    <div>C₁V₁ = C₂V₂; 100 cm³ of 70% from 95% needs about 74 cm³.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Apparatus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Organisms collected</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweep net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insects in grass</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pooter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small insects</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pitfall trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Crawling ground animals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light trap</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Night-flying insects</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tullgren funnel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soil and litter animals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plankton net</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small aquatic organisms</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Describe how to improvise a Tullgren funnel.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Cut the top of a plastic bottle as a funnel; place wire mesh with litter in it; put a lamp above and a jar of ethanol below.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> List the steps in preparing a herbarium specimen.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Collect, press, dry with paper changes, mount, label, store.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why soft-bodied animals are preserved wet.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">They lose shape and shrivel when dried.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Calculate the 95% ethanol needed for 250 cm³ of 70% ethanol.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">70 × 250 ÷ 95 ≈ 184 cm³.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> State three reasons for preserving specimens.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e8f5e9;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e8f5e9;">Identification, teaching, research/conservation.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2e14;padding:20px;border-radius:12px;border:1px solid #43a047;margin-bottom:20px;">
    <h3 style="color:#c8e6c9;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can identify collecting apparatus.</p>
    <p style="margin:6px 0;">☐ I can improvise apparatus.</p>
    <p style="margin:6px 0;">☐ I can make herbarium specimens.</p>
    <p style="margin:6px 0;">☐ I can preserve animals dry and wet.</p>
    <p style="margin:6px 0;">☐ I can label and store specimens.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A beating tray is used for insects on:',
            options: ['Water surfaces', 'Trees and shrubs', 'Soil', 'Rocks only'],
            correct: 1,
            explanation: 'Branches are tapped over the tray.'
        },
        {
            question: 'A sweep net can be improvised using a:',
            options: ['Bottle and straws', 'Board and newspaper', 'Lamp and funnel', 'Coat hanger and mosquito net'],
            correct: 3,
            explanation: 'The answer is Coat hanger and mosquito net. The hanger forms the frame.'
        },
        {
            question: 'In a plant press, specimens are placed between:',
            options: ['Absorbent paper', 'Plastic sheets', 'Metal plates only', 'Glass'],
            correct: 0,
            explanation: 'The answer is Absorbent paper. Paper draws out moisture.'
        },
        {
            question: 'Flower colour must be recorded in the field because it:',
            options: ['Fades on drying', 'Never changes', 'Is not important', 'Is on the label already'],
            correct: 0,
            explanation: 'Field notes keep this information.'
        },
        {
            question: 'Wet preservation is used for:',
            options: ['Beetles only', 'Soft-bodied animals', 'Dried plants', 'Butterflies'],
            correct: 1,
            explanation: 'Ethanol keeps soft tissues intact.'
        },
        {
            question: 'Insect pins should be:',
            options: ['Rusty', 'Very thick nails', 'Rust-proof', 'Wooden'],
            correct: 2,
            explanation: 'The answer is Rust-proof. Rust damages specimens.'
        },
        {
            question: 'Which detail is NOT needed on a specimen label?',
            options: ['Locality', 'Date', 'The collector’s phone number', 'Habitat'],
            correct: 2,
            explanation: 'Labels need scientific details, not personal contact data.'
        },
        {
            question: 'C₁V₁ = C₂V₂ is used to:',
            options: ['Count insects', 'Measure height', 'Press plants', 'Dilute a solution to a required concentration'],
            correct: 3,
            explanation: 'It links concentrations and volumes.'
        }
    ]
},
{
    name: '1.2 Summary: Specimen Collection and Preservation',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #81c784;">
    <p style="margin:0;color:#e8f5e9;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Cell Biology and Biodiversity · Sub-strand 1.2 Specimen Collection and Preservation</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0f2e14;border:1px solid #81c784;color:#e8f5e9;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e8f5e9;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e8f5e9;margin:8px 0 10px 0;">🧾 Summary — Specimen Collection and Preservation</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Biologists collect specimens with apparatus matched to each organism, often improvised from local materials, then process and preserve them — plants in herbaria, hard-bodied animals pinned and dried, soft-bodied animals in ethanol — and label them so they remain useful for study for many years.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Specimens are organisms or parts collected for study.</li>
    <li>Apparatus include sweep nets, pooters, pitfall traps, light traps, Tullgren funnels, beating trays and plankton nets.</li>
    <li>Many apparatus can be improvised from local materials.</li>
    <li>Collecting must be ethical, safe and minimal.</li>
    <li>Plants are pressed, dried, mounted and labelled to make a herbarium.</li>
    <li>Hard-bodied animals are pinned, set and dried; soft-bodied animals are preserved in 70% ethanol.</li>
    <li>Labels record name, locality, habitat, date, method and collector.</li>
    <li>Preserved specimens support identification, research, conservation and teaching.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Apparatus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conventional and improvised apparatus; ethics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Match apparatus to organism</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Plant specimens</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collecting, pressing, drying, mounting, labelling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change papers often</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Animal specimens</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sorting, dry and wet preservation, labelling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hard → pin; soft → ethanol</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three-habitat survey with both kinds of apparatus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equal sampling effort</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#c8e6c9;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">specimen</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">pooter</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">pitfall trap</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sweep net</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">light trap</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tullgren funnel</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">improvised apparatus</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">herbarium</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">plant press</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">mounting</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sorting</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dry preservation</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">wet preservation</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">preservative</span><span style="background:#0b1a2e;border:1px solid #e8f5e9;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">setting board</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Specimen collections at Kenyan museums and research institutes support health, farming and conservation.</div>
    </div>
    <div style="background:#0f2e14;border-left:4px solid #81c784;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e8f5e9;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Cell Structure and Specialization takes you inside the cell with the microscope.</div>
    </div>
    <div style="background:#14532d;padding:20px;border-radius:12px;border:1px solid #81c784;margin-bottom:20px;">
    <h3 style="color:#e8f5e9;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ identify apparatus for collecting, processing and preserving specimens</p>
    <p style="margin:6px 0;">✔️ collect, process and preserve specimens using improvised and conventional apparatus</p>
    <p style="margin:6px 0;">✔️ appreciate the importance of preserved specimens</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is that specimens are:',
            options: ['Collected, processed, preserved and labelled for long-term study', 'Thrown away after viewing', 'Only bought from shops', 'Never labelled'],
            correct: 0,
            explanation: 'The answer is Collected, processed, preserved and labelled for long-term study. This sums up the sub-strand.'
        },
        {
            question: 'Which lesson covered herbaria?',
            options: ['1.2.1', '1.2.2', '1.2.3', '1.1.2'],
            correct: 1,
            explanation: 'Plant specimens were in 1.2.2.'
        },
        {
            question: 'Which lesson covered ethanol dilution?',
            options: ['1.2.1', '1.2.3', '1.2.2', '1.1.3'],
            correct: 1,
            explanation: 'Wet preservation was in 1.2.3.'
        },
        {
            question: 'What comes next?',
            options: ['1.4 Chemicals of Life', '2.1 Nutrition in Plants', '1.1 Introduction to Biology', '1.3 Cell Structure and Specialization'],
            correct: 3,
            explanation: 'Cell structure follows specimen work.'
        },
        {
            question: 'Soft-bodied specimens are preserved in:',
            options: ['Newspaper', 'Pins only', 'Sunlight', '70% ethanol'],
            correct: 3,
            explanation: 'Wet preservation keeps their shape.'
        }
    ]
}
],
          stats:{lessons:19,exercises:117,quizzes:20,projects:2,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Biology is the study of:',
                  options: ['Rocks and minerals only', 'Stars and planets', 'Living organisms and their interactions with each other and the environment', 'Machines'],
                  correct: 2,
                  explanation: 'Bios means life and logos means study; Biology studies life from viruses and bacteria to complex plants and animals.'
              },
              {
                  question: 'The study of insects is called:',
                  options: ['Parasitology', 'Entomology', 'Mycology', 'Ecology'],
                  correct: 1,
                  explanation: 'Entomology is the branch of zoology dealing with insects.'
              },
              {
                  question: 'Microbiology is the study of:',
                  options: ['Microorganisms such as bacteria, viruses and fungi', 'Large mammals', 'Soil texture', 'Tree heights'],
                  correct: 0,
                  explanation: 'Microorganisms are too small to see without a microscope.'
              },
              {
                  question: 'A career that applies parasitology is:',
                  options: ['Medical laboratory technologist testing for malaria parasites', 'Pilot', 'Accountant', 'Architect'],
                  correct: 0,
                  explanation: 'Lab technologists identify parasites such as Plasmodium in blood smears.'
              },
              {
                  question: 'Career choice should be based mainly on:',
                  options: ['Gender stereotypes', 'Interest and ability', 'What friends choose', 'Disability alone'],
                  correct: 1,
                  explanation: 'The KICD design discourages choices based on gender, culture, disability or stereotypes.'
              },
              {
                  question: 'A pooter (aspirator) is used to collect:',
                  options: ['Fish', 'Large trees', 'Birds', 'Small insects'],
                  correct: 3,
                  explanation: 'Sucking through the mouthpiece draws small insects into the container; gauze stops them reaching the mouth.'
              },
              {
                  question: 'A pitfall trap is used to collect:',
                  options: ['Flying birds', 'Crawling ground animals such as beetles', 'Fish', 'Plankton'],
                  correct: 1,
                  explanation: 'Animals walking on the ground fall into the sunken container.'
              },
              {
                  question: 'A Tullgren funnel collects small soil organisms using:',
                  options: ['Water pressure', 'A net', 'Magnets', 'Heat and light from a lamp that drive them downwards'],
                  correct: 3,
                  explanation: 'Organisms move away from the heat and dryness and fall into the collecting bottle.'
              },
              {
                  question: 'A collection of pressed, dried and labelled plant specimens is a:',
                  options: ['Aquarium', 'Insectarium', 'Herbarium', 'Vivarium'],
                  correct: 2,
                  explanation: 'Herbaria store plant specimens for study and identification.'
              },
              {
                  question: 'Soft-bodied animals such as earthworms are best preserved:',
                  options: ['Dry, pinned on a board', 'In the sun', 'In salt water', 'Wet, in 70% ethanol'],
                  correct: 3,
                  explanation: 'Wet preservation stops decay while keeping the body shape.'
              },
              {
                  question: 'A specimen label should include:',
                  options: ['Name, locality, date, collector and habitat', 'Only the colour', 'The price', 'Nothing'],
                  correct: 0,
                  explanation: 'Labels make specimens useful for scientific study.'
              },
              {
                  question: 'To make 100 cm³ of 70% ethanol from 95% ethanol you need about:',
                  options: ['70 cm³ of water only', '95 cm³ of ethanol', '74 cm³ of 95% ethanol plus water to 100 cm³', '30 cm³ of ethanol'],
                  correct: 2,
                  explanation: 'C₁V₁ = C₂V₂: V₁ = 70 × 100 ÷ 95 ≈ 74 cm³, then add water to make 100 cm³.'
              }
          ]}
);