// Eschool course: Biology (USA, high school, NGSS aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'biology-us', name:'Biology', code:'BIO 1', level:'grade-9', iconStyle:'fas', icon:'fa-dna', color:'#1b5e20',
          category:'Sciences',
          description:'Explore life from the cell up: the cell theory and microscopes, prokaryotic and eukaryotic cells, membranes and transport, levels of organization, interacting body systems, and how feedback loops keep the body in balance.',
          longDescription:'Biology is a high-school life-science course aligned to the Next Generation Science Standards (NGSS) for High School Life Sciences. Unit 1, Cells and the Organization of Life, covers the characteristics of life, the cell theory and microscopy, prokaryotic and eukaryotic cell structure, the cell membrane and transport (diffusion, osmosis and active transport), levels of organization, interacting body systems (HS-LS1-2) and homeostasis through feedback mechanisms (HS-LS1-3). Later units cover biochemistry and enzymes, photosynthesis and cellular respiration, DNA and protein synthesis, cell division, genetics and heredity, evolution, and ecology. Every lesson includes worked examples, science practices, a hands-on lab investigation, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Cells and the Organization of Life — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Cells and the Organization of Life</h2>
    <p style="font-size:16px;">Welcome to Biology — the study of life. Every living thing, from a single bacterium to a blue whale, is built from cells. In this first unit you will look inside cells, see how they control what enters and leaves, and discover how trillions of cells work together to keep your body alive.</p>
    <p style="font-size:16px;">You will use microscopes, run investigations, collect data and build explanations from evidence — just as biologists do.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How do the structures of cells and body systems work together to keep an organism alive and in balance?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>This unit moves from the smallest level of life to the whole organism. You will start with the cell, the basic unit of life, and end with the feedback systems that keep your temperature, blood sugar and heart rate within safe limits.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">NGSS connection</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 The Cell: Structure and Function</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Characteristics of life, cell theory and microscopes, prokaryotic and eukaryotic cells, the cell membrane and transport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">HS-LS1-2 (structure and function); science practices of investigation and modeling</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Organization and Homeostasis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Levels of organization, interacting body systems, homeostasis and feedback loops</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">HS-LS1-2, HS-LS1-3</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, a lab investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 The Cell: Structure and Function <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: The Building Blocks of Life</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Life, the Cell Theory and Microscopes</li>
    <li>1.1.2 Prokaryotic and Eukaryotic Cells</li>
    <li>1.1.3 The Cell Membrane and Transport</li>
    <li>🧭 Lab: Observing Plant Cells with a Microscope</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Organization and Homeostasis <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Systems in Balance</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Levels of Organization</li>
    <li>1.2.2 Interacting Body Systems</li>
    <li>1.2.3 Homeostasis and Feedback Loops</li>
    <li>🧭 Lab: Exercise, Heart Rate and Homeostasis</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections in This Unit</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asking questions (SEP 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asking testable questions about cells and the body.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing models (SEP 2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing cell models and feedback-loop diagrams.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planning investigations (SEP 3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing the heart-rate investigation with variables and controls.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing data (SEP 4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making tables and graphs and finding patterns.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constructing explanations (SEP 6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing claim–evidence–reasoning explanations.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for living things</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with data</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and wellness</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Food and agriculture</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a science notebook. For every lab, record your question, hypothesis, data and conclusion. Label all drawings and include units with every measurement.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Biology is the study of:',
            options: ['Rocks', 'Weather', 'Stars', 'Life'],
            correct: 3,
            explanation: '“Bio” means life and “-logy” means study of.'
        },
        {
            question: 'The basic unit of life is the:',
            options: ['Organ', 'Atom', 'Cell', 'Tissue'],
            correct: 2,
            explanation: 'All living things are made of cells.'
        },
        {
            question: 'Topic 1.2 of this unit focuses on:',
            options: ['Genetics', 'Evolution', 'Organization and homeostasis', 'Ecology'],
            correct: 2,
            explanation: 'Topic 1.2 covers levels of organization and feedback.'
        },
        {
            question: 'NGSS HS-LS1-3 is about:',
            options: ['Plate tectonics', 'Feedback mechanisms that maintain homeostasis', 'Chemical bonding', 'Star formation'],
            correct: 1,
            explanation: 'HS-LS1-3 is the homeostasis standard.'
        },
        {
            question: 'Science Practice 4 (SEP 4) is:',
            options: ['Analyzing and interpreting data', 'Asking questions', 'Developing models', 'Obtaining information'],
            correct: 0,
            explanation: 'The answer is Analyzing and interpreting data. SEP 4 is about data.'
        },
        {
            question: 'Every lab record should include:',
            options: ['Only a drawing', 'Only the answer', 'Nothing written', 'A question, hypothesis, data and conclusion'],
            correct: 3,
            explanation: 'A complete record supports your conclusions.'
        }
    ]
},
{
    name: '1.0 Cells and the Organization of Life — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives are based on the Next Generation Science Standards for High School Life Sciences. Return to them at the end of each topic to check your progress.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Describe the characteristics of living things and the three parts of the cell theory.</li>
    <li>Use a microscope safely and calculate total magnification.</li>
    <li>Compare prokaryotic and eukaryotic cells and explain how organelles’ structures relate to their functions.</li>
    <li>Explain diffusion, osmosis and active transport across the cell membrane.</li>
    <li>Develop and use a model of the hierarchical organization of interacting systems in multicellular organisms. (HS-LS1-2)</li>
    <li>Plan and conduct an investigation to provide evidence that feedback mechanisms maintain homeostasis. (HS-LS1-3)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 The Cell: Structure and Function</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>List the characteristics of life and the parts of the cell theory.</li>
    <li>Identify microscope parts and calculate magnification.</li>
    <li>Compare prokaryotic, plant and animal cells and match organelles to functions.</li>
    <li>Predict the direction of water movement in isotonic, hypotonic and hypertonic solutions.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How does the structure of a cell allow it to carry out the functions of life?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Organization and Homeostasis</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Order and describe the levels of organization from cell to organism. (HS-LS1-2)</li>
    <li>Explain how two or more body systems interact to perform a function. (HS-LS1-2)</li>
    <li>Model negative and positive feedback loops. (HS-LS1-3)</li>
    <li>Plan and carry out an investigation of heart rate and exercise. (HS-LS1-3)</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How does the body stay in balance when conditions change?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your work is scored on a four-level mastery scale:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exemplary (4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You explain biological processes accurately, use precise vocabulary and support claims with data and reasoning.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You explain processes correctly and support claims with relevant evidence.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You describe parts of processes but explanations or evidence are incomplete.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You recall some terms but cannot yet explain the processes.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>In science, a claim is only as strong as its evidence. Always ask, “How do we know?”</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'HS-LS1-2 asks you to model:',
            options: ['The hierarchical organization of interacting systems', 'Plate boundaries', 'Chemical reactions in stars', 'Weather patterns'],
            correct: 0,
            explanation: 'HS-LS1-2 is about levels of organization.'
        },
        {
            question: 'To calculate total magnification, you:',
            options: ['Add the two powers', 'Multiply the eyepiece and objective powers', 'Divide the objective by the eyepiece', 'Use only the objective power'],
            correct: 1,
            explanation: 'The answer is Multiply the eyepiece and objective powers. Total = eyepiece × objective.'
        },
        {
            question: 'Which topic includes a heart-rate investigation?',
            options: ['1.1 The Cell', 'Both', 'Neither', '1.2 Organization and Homeostasis'],
            correct: 3,
            explanation: 'The heart-rate lab is in Topic 1.2.'
        },
        {
            question: 'At the Proficient (3) level, you:',
            options: ['Recall only some terms', 'Copy the textbook', 'Explain processes correctly with relevant evidence', 'Skip the data'],
            correct: 2,
            explanation: 'Proficient work is correct and supported.'
        },
        {
            question: 'Which is a question about how we know something?',
            options: ['What color is the book?', 'When is lunch?', 'What evidence supports this claim?', 'Who sits next to me?'],
            correct: 2,
            explanation: 'The answer is What evidence supports this claim?. Science asks for evidence.'
        },
        {
            question: 'Hypotonic, isotonic and hypertonic describe:',
            options: ['Types of microscopes', 'Body systems', 'Feedback loops', 'Solutions compared with a cell'],
            correct: 3,
            explanation: 'They compare solute concentrations.'
        }
    ]
},
{
    name: '1.0 Cells and the Organization of Life — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: What Makes Something Alive?</h2>
    <p style="font-size:16px;">Is fire alive? It grows, it uses oxygen, it gives off energy and it can “reproduce” by spreading. Is a virus alive? It has genetic material and can make copies of itself — but only inside a living cell.</p>
    <p style="font-size:16px;">Questions like these show that defining life is not as simple as it seems. Biologists use a list of characteristics — and they all lead back to the cell.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧬 The Characteristics of Life</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Made of one or more <strong>cells</strong>.</li>
    <li>Use <strong>energy</strong> (metabolism).</li>
    <li><strong>Grow and develop</strong>.</li>
    <li><strong>Reproduce</strong>.</li>
    <li><strong>Respond</strong> to their environment.</li>
    <li>Maintain <strong>homeostasis</strong> — a stable internal environment.</li>
    <li>Have <strong>DNA</strong> as genetic material.</li>
    <li>As a group, <strong>evolve</strong> over many generations.</li>
    </ul>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Something is considered living only if it shows <em>all</em> of these characteristics. Fire does not have cells or DNA, so it is not alive.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔬 Your Science Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">cell</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">organelle</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">microscope</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">magnification</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">membrane</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">diffusion</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">osmosis</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">tissue</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">organ</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">homeostasis</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">feedback</span><span style="background:#0b1a2e;border:1px solid #a5d6a7;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hypothesis</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Quick-Write (5 minutes)</h3>
    <p>Choose one: a tree, a car, a virus or a seed. Use the characteristics of life to argue whether it is alive. Keep your answer — you will revisit it at the end of Topic 1.1.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Lab Safety First</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wear goggles when told to</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protects your eyes from splashes and glass</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never eat or drink in the lab</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Materials may be contaminated</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Report spills and breakage at once</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prevents cuts and slips</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wash hands after every lab</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Removes chemicals and microorganisms</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Read the lab safety rules before your first lab. Your teacher may ask you to sign a safety agreement. Bring your science notebook to every lesson.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a characteristic of all living things?',
            options: ['They can move from place to place', 'They have a backbone', 'They make their own food', 'They are made of cells'],
            correct: 3,
            explanation: 'All organisms are made of one or more cells.'
        },
        {
            question: 'Maintaining a stable internal environment is called:',
            options: ['Homeostasis', 'Metabolism', 'Evolution', 'Reproduction'],
            correct: 0,
            explanation: 'Homeostasis means “staying the same.”'
        },
        {
            question: 'Why is fire NOT considered alive?',
            options: ['It does not use oxygen', 'It is not made of cells and has no DNA', 'It never grows', 'It gives off no energy'],
            correct: 1,
            explanation: 'Living things must show all the characteristics.'
        },
        {
            question: 'All the chemical reactions an organism uses to obtain and use energy are called its:',
            options: ['Homeostasis', 'Habitat', 'Metabolism', 'Adaptation'],
            correct: 2,
            explanation: 'Metabolism is the use of energy.'
        },
        {
            question: 'Why should you never eat or drink in the lab?',
            options: ['It is too noisy', 'Food makes microscopes blurry', 'Materials may be contaminated', 'It wastes time'],
            correct: 2,
            explanation: 'The answer is Materials may be contaminated. Lab materials can be harmful.'
        },
        {
            question: 'Which group of organisms evolves over many generations?',
            options: ['A single cell', 'One organ', 'One tissue', 'A population'],
            correct: 3,
            explanation: 'Populations, not individuals, evolve.'
        }
    ]
},
{
    name: '1.1.1 Life, the Cell Theory and Microscopes',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Building Blocks of Life</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Life, the Cell Theory and Microscopes</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the three parts of the cell theory, how it was developed, and how to use a compound light microscope and calculate magnification.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Cells are too small to see with the naked eye. Microscopes opened up the hidden world of cells and microbes — and led to modern medicine, from vaccines to cancer treatment.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Medical labs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧫 Food safety testing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Research labs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌱 Plant science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🕵️ Forensic science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💧 Water testing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the characteristics of life and the cell theory.</li>
    <li>Use a microscope and calculate total magnification.</li>
    <li>Compare prokaryotic and eukaryotic cells and relate organelle structure to function. (HS-LS1-2)</li>
    <li>Explain diffusion, osmosis and active transport across the cell membrane.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the three parts of the cell theory.</li>
    <li>Describe how scientists developed the cell theory over time.</li>
    <li>Identify the main parts of a compound light microscope.</li>
    <li>Calculate total magnification and estimate cell size.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do we know that all living things are made of cells?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In middle school you learned that living things are made of cells and that cells have parts such as a nucleus and a membrane.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>If you placed a drop of pond water on a slide and looked through a microscope, you would see a busy world of tiny organisms swimming, eating and dividing. Each one is a single cell — and each one is alive.</p>
    <p>The <strong>cell theory</strong> is one of the most important ideas in biology. It has three parts: (1) all living things are made of one or more cells; (2) the cell is the basic unit of structure and function in living things; and (3) all cells come from pre-existing cells.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Cells are to living things what bricks are to a building — and new bricks can only be made from old ones.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>In 1665, Robert Hooke looked at thin slices of cork through an early microscope and saw tiny boxes he called “cells.” He was actually seeing the empty walls of dead plant cells. A few years later, Antonie van Leeuwenhoek used his own powerful lenses to see living microorganisms. In the 1830s Matthias Schleiden and Theodor Schwann concluded that plants and animals are made of cells, and in 1855 Rudolf Virchow argued that new cells come only from existing cells.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>The cell theory is a scientific theory: a well-tested explanation supported by a large body of evidence — not just a guess.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its word parts. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">cell</strong>
    </p>
    <p style="margin:6px 0;">The smallest unit that can carry out all the processes of life.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> Latin <em>cella</em> = small room</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A red blood cell is about 7 micrometers across.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">cell theory</strong>
    </p>
    <p style="margin:6px 0;">The theory that all living things are made of cells, cells are the basic unit of life, and cells come from existing cells.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Virchow added the third part in 1855.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">microscope</strong>
    </p>
    <p style="margin:6px 0;">An instrument that produces enlarged images of small objects.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> micro- = small; -scope = look</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A compound light microscope uses two lenses.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">magnification</strong>
    </p>
    <p style="margin:6px 0;">How many times larger an image appears than the real object.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> written as ×</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A 400× image looks 400 times larger.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">resolution</strong>
    </p>
    <p style="margin:6px 0;">The ability to show two close points as separate; the sharpness of detail.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Electron microscopes have much higher resolution.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">micrometer</strong>
    </p>
    <p style="margin:6px 0;">One millionth of a meter, used to measure cells.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> µm</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Most bacteria are 1–10 µm long.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Cell Theory</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 200" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">How the Cell Theory Developed</text><line x1="40" y1="90" x2="660" y2="90" stroke="#a5d6a7" stroke-width="3"/><circle cx="76" cy="90" r="8" fill="#fde68a"/><text x="76" y="70" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1665</text><text x="76" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">Hooke names “cells”</text><text x="76" y="140" fill="#cbd5e1" font-size="12" text-anchor="middle">in cork</text><circle cx="213" cy="90" r="8" fill="#fde68a"/><text x="213" y="70" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1670s</text><text x="213" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">Leeuwenhoek sees</text><text x="213" y="140" fill="#cbd5e1" font-size="12" text-anchor="middle">living microbes</text><circle cx="350" cy="90" r="8" fill="#fde68a"/><text x="350" y="70" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1838</text><text x="350" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">Schleiden: plants</text><text x="350" y="140" fill="#cbd5e1" font-size="12" text-anchor="middle">are made of cells</text><circle cx="487" cy="90" r="8" fill="#fde68a"/><text x="487" y="70" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1839</text><text x="487" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">Schwann: animals</text><text x="487" y="140" fill="#cbd5e1" font-size="12" text-anchor="middle">are made of cells</text><circle cx="624" cy="90" r="8" fill="#fde68a"/><text x="624" y="70" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1855</text><text x="624" y="122" fill="#e2e8f0" font-size="12" text-anchor="middle">Virchow: cells come</text><text x="624" y="140" fill="#cbd5e1" font-size="12" text-anchor="middle">from cells</text><text x="350" y="182" fill="#86efac" font-size="13" text-anchor="middle">Many scientists, better microscopes and shared evidence built one theory over about 200 years.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Part of the theory</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it means</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Evidence</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All living things are made of one or more cells.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">From bacteria to whales, every organism is cellular.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every organism examined under a microscope is made of cells.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The cell is the basic unit of structure and function.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cells carry out life processes such as using energy and making proteins.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Single-celled organisms carry out all life functions alone.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All cells come from pre-existing cells.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cells do not form from non-living matter.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cells are observed dividing; sterilized broth does not grow new cells unless exposed to existing microbes.</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Viruses are not cells. They cannot reproduce or use energy on their own, so most biologists do not classify them as living organisms.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. The Compound Light Microscope</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Part</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eyepiece (ocular lens)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The lens you look through; usually 10×.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Objective lenses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lenses near the slide: often 4× (scanning), 10× (low) and 40× (high).</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stage and stage clips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hold the slide in place.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light source and diaphragm</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Provide and adjust light passing through the specimen.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coarse adjustment knob</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moves the stage a lot for rough focus — use only with the low-power objective.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fine adjustment knob</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makes small focusing changes for a sharp image.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Total magnification</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Total magnification = eyepiece power × objective power</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> How many times larger the image appears.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> written as a number followed by ×</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Recording observations and estimating cell size.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Adding the powers instead of multiplying them.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Low power: 10 × 10 = 100×. High power: 10 × 40 = 400×.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Calculating magnification</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A student uses a 10× eyepiece with the 40× objective. What is the total magnification?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write the formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Total = eyepiece × objective</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Total = 10 × 40</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">400×</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 400×</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Estimating Cell Size</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Using the field of view</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> At 100×, the field of view is about 1.5 mm (1,500 µm) wide. About 10 onion cells fit across it end to end. Estimate the length of one cell.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Divide the width of the field of view by the number of cells that fit across it.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write the relationship</strong>
    </p>
    <div style="margin:6px 0 0 34px;">cell length ≈ field of view ÷ number of cells</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1,500 µm ÷ 10</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">≈ 150 µm</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Each onion cell is about 150 µm (0.15 mm) long.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> This is an estimate, so we use “about.” Field-of-view widths vary between microscopes.</p>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>1 millimeter (mm) = 1,000 micrometers (µm).</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State the third part of the cell theory.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All cells come from pre-existing cells.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the total magnification with a 10× eyepiece and a 4× objective?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">40×</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which knob should you NOT use with the high-power objective?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The coarse adjustment knob — it can crack the slide or damage the lens.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles and follow your teacher’s instructions whenever you handle lab materials.</li>
    <li>Never eat, drink or taste anything in the lab, and wash your hands after every activity.</li>
    <li>Handle microscopes, glass slides and cover slips carefully; report any breakage to your teacher at once.</li>
    <li>Respect living organisms: handle plants and animals gently and return or dispose of them as instructed.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 3 Carrying out investigations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 5 Using mathematics</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using a microscope</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Estimating size</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating evidence</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>The cell theory developed because technology improved and many scientists shared and tested each other’s observations. Hooke saw only empty walls; better lenses revealed living cells; careful experiments showed that cells do not appear from nowhere. Science changes as new evidence appears.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>What new tools today might change our understanding of cells in the future?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #a5d6a7;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Biology in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Medical technicians use microscopes to identify bacteria in samples and to count blood cells, helping doctors diagnose infections and diseases.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists examine water samples under microscopes to check for harmful microorganisms and monitor the health of lakes and rivers.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Pathologists, microbiologists, food-safety inspectors and forensic scientists all rely on microscopes in their work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What are the three parts of the cell theory?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think: made of, basic unit, come from.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All living things are made of cells; the cell is the basic unit of life; cells come from existing cells.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is the total magnification with a 10× eyepiece and a 10× objective?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Multiply.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">100×</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Convert 2 mm to micrometers.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 1 mm = 1,000 µm.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2,000 µm</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw and label a compound light microscope in your notebook, with the function of each part.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Quiz each other on the microscope parts: one partner points to a part on a diagram, the other names it and gives its function.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a cell-theory timeline poster showing each scientist, the date, the discovery and the technology used.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore a free online virtual microscope. Switch between objectives and record how the field of view and detail change.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Who first used the word “cell” for biology?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Robert Hooke, in 1665.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Calculate the total magnification: 10× eyepiece and 40× objective.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">400×</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why a virus is not considered a living cell.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It is not made of cells and cannot use energy or reproduce on its own; it needs a host cell.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A field of view is 4,000 µm wide and 20 cells fit across it. Estimate the cell length.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4,000 ÷ 20 = 200 µm</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #a5d6a7;">
    <p style="margin:0 0 6px 0;color:#a5d6a7;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how improvements in technology led to the cell theory.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Better lenses allowed scientists to see living cells, and later observations of cells dividing provided evidence that cells come from existing cells.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why do hospitals use microscopes to examine blood samples?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To count and identify blood cells and detect microorganisms, which helps diagnose infections and diseases.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 7: Use the cell theory to argue that a newly discovered organism must have come from another living cell.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The cell theory states all cells come from pre-existing cells, and no observation has shown cells forming from non-living matter, so the organism must have descended from existing cells.</div>
    </details>
    </div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The cell theory states that all living things are made of cells, the cell is the basic unit of life, and all cells come from pre-existing cells. It was built over about 200 years by many scientists using improving microscopes. Total magnification equals eyepiece power times objective power.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cell theory: made of cells, basic unit, cells from cells.</li>
    <li>Hooke 1665; Schleiden 1838; Schwann 1839; Virchow 1855.</li>
    <li>Total magnification = eyepiece × objective.</li>
    <li>1 mm = 1,000 µm.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the coarse knob only on low power.</li>
    <li>Viruses are not cells.</li>
    <li>Size estimates use “about.”</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Adding lens powers.</li>
    <li>Thinking a theory is a guess.</li>
    <li>Using the coarse knob on high power.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Start focusing on the lowest power.</li>
    <li>Center the specimen before switching objectives.</li>
    <li>Always carry a microscope with two hands.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the magnification calculation.</li>
    <li>State all three parts of the cell theory in full.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 3 Investigations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a microscope safely.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 5 Mathematics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculating magnification and size.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Nature of science</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeing how theories grow from evidence.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Care with equipment</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Collaboration</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From diagnosing infections to testing drinking water, microscopes let us see and protect the living world.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Make flash cards for the parts of the microscope.</li>
    <li>Write a paragraph explaining why Virchow’s idea was important.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What surprised me about how the cell theory developed?</li>
    <li>How careful am I when using lab equipment?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cell</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The smallest unit of life.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Magnification</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How much larger an image appears.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Resolution</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sharpness of detail.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Micrometer</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One millionth of a meter.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state the cell theory.</p>
    <p style="margin:6px 0;">☐ I can describe how it developed.</p>
    <p style="margin:6px 0;">☐ I can name microscope parts.</p>
    <p style="margin:6px 0;">☐ I can calculate magnification.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is NOT part of the cell theory?',
            options: ['All living things are made of cells', 'The cell is the basic unit of life', 'All cells have a nucleus', 'All cells come from existing cells'],
            correct: 2,
            explanation: 'Prokaryotic cells have no nucleus.'
        },
        {
            question: 'Who first named “cells” after observing cork?',
            options: ['Robert Hooke', 'Rudolf Virchow', 'Theodor Schwann', 'Matthias Schleiden'],
            correct: 0,
            explanation: 'Hooke described cork cells in 1665.'
        },
        {
            question: 'Who proposed that all cells come from existing cells?',
            options: ['Robert Hooke', 'Antonie van Leeuwenhoek', 'Matthias Schleiden', 'Rudolf Virchow'],
            correct: 3,
            explanation: 'The answer is Rudolf Virchow. Virchow stated this in 1855.'
        },
        {
            question: 'The total magnification with a 10× eyepiece and a 40× objective is:',
            options: ['50×', '400×', '40×', '4×'],
            correct: 1,
            explanation: 'The answer is 400×. 10 × 40 = 400.'
        },
        {
            question: 'Which knob is used for small focusing adjustments?',
            options: ['Coarse adjustment', 'Diaphragm', 'Fine adjustment', 'Stage clip'],
            correct: 2,
            explanation: 'The answer is Fine adjustment. The fine knob sharpens focus.'
        },
        {
            question: 'How many micrometers are in 1 millimeter?',
            options: ['100', '1,000', '10', '1,000,000'],
            correct: 1,
            explanation: 'The answer is 1,000. 1 mm = 1,000 µm.'
        },
        {
            question: 'Resolution refers to:',
            options: ['How large the image is', 'The brightness of light', 'The size of the slide', 'The sharpness of detail in an image'],
            correct: 3,
            explanation: 'The answer is The sharpness of detail in an image. Resolution shows fine detail.'
        },
        {
            question: 'Schleiden and Schwann concluded that:',
            options: ['Cells form from non-living matter', 'Viruses are cells', 'Plants and animals are made of cells', 'Only animals have cells'],
            correct: 2,
            explanation: 'Schleiden studied plants, Schwann animals.'
        },
        {
            question: 'Why is a virus not considered a cell?',
            options: ['It is too large', 'It has a nucleus', 'It makes its own food', 'It cannot reproduce or use energy on its own'],
            correct: 3,
            explanation: 'The answer is It cannot reproduce or use energy on its own. Viruses depend on host cells.'
        },
        {
            question: 'A scientific theory is:',
            options: ['A well-tested explanation supported by much evidence', 'A random guess', 'An opinion', 'An untested idea'],
            correct: 0,
            explanation: 'Theories are strongly supported explanations.'
        }
    ]
},
{
    name: '1.1.2 Prokaryotic and Eukaryotic Cells',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Building Blocks of Life</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Prokaryotic and Eukaryotic Cells</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will compare prokaryotic and eukaryotic cells, identify the main organelles of plant and animal cells, and explain how each organelle’s structure helps it perform its function.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Knowing how cells are built explains how they work — and how they fail in disease. Antibiotics, for example, target structures found in bacteria but not in human cells.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Antibiotics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍞 Yeast in baking</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🥛 Bacteria in yogurt</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Crop science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Genetic research</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Disease diagnosis</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the characteristics of life and the cell theory.</li>
    <li>Use a microscope and calculate total magnification.</li>
    <li>Compare prokaryotic and eukaryotic cells and relate organelle structure to function. (HS-LS1-2)</li>
    <li>Explain diffusion, osmosis and active transport across the cell membrane.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish prokaryotic from eukaryotic cells.</li>
    <li>Identify the main organelles and their functions.</li>
    <li>Compare plant and animal cells.</li>
    <li>Explain how the structure of an organelle relates to its function.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How does the structure of a cell part help it do its job?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned that cells are the basic units of life. Now you will look inside them.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A cell is like a busy factory. It has a control center (the <strong>nucleus</strong>), power plants (<strong>mitochondria</strong>), production lines (<strong>ribosomes</strong> and the <strong>endoplasmic reticulum</strong>), a shipping department (the <strong>Golgi apparatus</strong>) and a security gate (the <strong>cell membrane</strong>). These specialized structures are called <strong>organelles</strong>.</p>
    <p>All cells fall into two groups. <strong>Prokaryotic cells</strong>, such as bacteria, are small and simple and have no nucleus. <strong>Eukaryotic cells</strong>, found in plants, animals, fungi and protists, are larger and have a nucleus and membrane-bound organelles.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Prokaryote = “before nucleus” (no nucleus). Eukaryote = “true nucleus.”</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>All cells share four features: a cell membrane, cytoplasm, ribosomes and DNA. Prokaryotes are generally about 1–10 µm long, while most eukaryotic cells are about 10–100 µm. Scientists think the first cells on Earth were prokaryotes, and that mitochondria and chloroplasts in eukaryotic cells descended from bacteria that once lived inside larger cells — an idea called the endosymbiotic theory.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its word parts. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">organelle</strong>
    </p>
    <p style="margin:6px 0;">A specialized structure inside a cell that performs a specific job.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> -elle = little; “little organ”</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The nucleus is an organelle.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">prokaryote</strong>
    </p>
    <p style="margin:6px 0;">A single-celled organism without a nucleus or membrane-bound organelles.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> pro- = before; karyon = nucleus</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Bacteria are prokaryotes.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">eukaryote</strong>
    </p>
    <p style="margin:6px 0;">An organism whose cells have a nucleus and membrane-bound organelles.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> eu- = true; karyon = nucleus</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Humans, plants and fungi are eukaryotes.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">nucleus</strong>
    </p>
    <p style="margin:6px 0;">The organelle that contains a eukaryotic cell’s DNA and controls its activities.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> Latin = kernel</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The nucleus directs protein production.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">mitochondrion</strong>
    </p>
    <p style="margin:6px 0;">The organelle that releases energy from food through cellular respiration.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> plural: mitochondria</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Muscle cells contain many mitochondria.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">chloroplast</strong>
    </p>
    <p style="margin:6px 0;">The organelle in plant cells that captures light energy for photosynthesis.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> chloro- = green</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Leaf cells are packed with chloroplasts.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Prokaryotic vs. Eukaryotic Cells</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Prokaryotic cells</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Eukaryotic cells</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bacteria and archaea</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plants, animals, fungi, protists</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nucleus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No — DNA in the cytoplasm (nucleoid region)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes — DNA inside a nucleus</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Membrane-bound organelles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes (mitochondria, ER, Golgi and more)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Typical size</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">About 1–10 µm</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">About 10–100 µm</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ribosomes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes (smaller)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes (larger)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell membrane, cytoplasm and DNA</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Every cell has a membrane, cytoplasm, ribosomes and DNA. Only eukaryotic cells have a nucleus.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Organelles and Their Functions</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Animal Cell and Plant Cell (simplified)</text><text x="190" y="56" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Animal cell</text><ellipse cx="190" cy="180" rx="95" ry="80" fill="#10233d" stroke="#67e8f9" stroke-width="3"/><circle cx="180" cy="175" r="26" fill="#2a1f4a" stroke="#c4b5fd" stroke-width="2"/><circle cx="184" cy="172" r="7" fill="#c4b5fd"/><ellipse cx="235" cy="140" rx="18" ry="9" fill="#7c2d12" stroke="#fb923c" stroke-width="2"/><ellipse cx="140" cy="225" rx="18" ry="9" fill="#7c2d12" stroke="#fb923c" stroke-width="2"/><circle cx="230" cy="210" r="3" fill="#fde68a"/><circle cx="150" cy="140" r="3" fill="#fde68a"/><circle cx="215" cy="235" r="3" fill="#fde68a"/><line x1="110" y1="140" x2="80" y2="100" stroke="#94a3b8" stroke-width="1.5"/><text x="40" y="92" fill="#e2e8f0" font-size="12" text-anchor="start">cell membrane</text><line x1="170" y1="190" x2="60" y2="290" stroke="#94a3b8" stroke-width="1.5"/><text x="64" y="294" fill="#e2e8f0" font-size="12" text-anchor="start">nucleus</text><line x1="250" y1="140" x2="300" y2="90" stroke="#94a3b8" stroke-width="1.5"/><text x="304" y="94" fill="#e2e8f0" font-size="12" text-anchor="start">mitochondrion</text><line x1="230" y1="210" x2="300" y2="290" stroke="#94a3b8" stroke-width="1.5"/><text x="304" y="294" fill="#e2e8f0" font-size="12" text-anchor="start">ribosome</text><text x="530" y="56" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Plant cell</text><rect x="430" y="90" width="200" height="180" rx="8" fill="#14532d" stroke="#86efac" stroke-width="6"/><rect x="438" y="98" width="184" height="164" rx="6" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><rect x="500" y="118" width="110" height="124" rx="16" fill="#0c4a6e" stroke="#38bdf8" stroke-width="2"/><circle cx="468" cy="140" r="20" fill="#2a1f4a" stroke="#c4b5fd" stroke-width="2"/><ellipse cx="462" cy="200" rx="14" ry="8" fill="#166534" stroke="#4ade80" stroke-width="2"/><ellipse cx="470" cy="240" rx="14" ry="8" fill="#166534" stroke="#4ade80" stroke-width="2"/><line x1="630" y1="110" x2="660" y2="76" stroke="#94a3b8" stroke-width="1.5"/><text x="664" y="68" fill="#e2e8f0" font-size="12" text-anchor="end">cell wall</text><line x1="580" y1="230" x2="640" y2="296" stroke="#94a3b8" stroke-width="1.5"/><text x="664" y="314" fill="#e2e8f0" font-size="12" text-anchor="end">central vacuole</text><line x1="450" y1="140" x2="400" y2="110" stroke="#94a3b8" stroke-width="1.5"/><text x="396" y="114" fill="#e2e8f0" font-size="12" text-anchor="end">nucleus</text><line x1="452" y1="205" x2="400" y2="230" stroke="#94a3b8" stroke-width="1.5"/><text x="396" y="234" fill="#e2e8f0" font-size="12" text-anchor="end">chloroplast</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Organelle</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Structure that fits the function</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nucleus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stores DNA and controls cell activities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Double membrane with pores lets instructions out while protecting DNA</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ribosome</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makes proteins</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small and numerous, so proteins can be made throughout the cell</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Endoplasmic reticulum (ER)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makes and transports proteins (rough ER) and lipids (smooth ER)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A folded network of membranes gives a large surface area</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Golgi apparatus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modifies, sorts and packages proteins for transport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stacked membranes work like a processing and shipping center</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mitochondrion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Releases energy (ATP) from food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Folded inner membrane increases surface area for reactions</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lysosome</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Breaks down waste and worn-out parts (mainly in animal cells)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contains digestive enzymes inside a membrane</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vacuole</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stores water, nutrients and wastes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large central vacuole in plants keeps the cell firm</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chloroplast (plants)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Photosynthesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stacks of membranes hold chlorophyll to capture light</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell wall (plants)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supports and protects the cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rigid layer of cellulose outside the membrane</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell membrane</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Controls what enters and leaves</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flexible phospholipid bilayer with proteins</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Structure Fits Function</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Linking structure and function (HS-LS1-2)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Muscle cells contain many more mitochondria than skin cells. Explain why.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Ask what mitochondria do and what muscle cells need.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Recall the function</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Mitochondria release energy (ATP) from food.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Identify the need</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Muscle cells contract constantly and need a lot of energy.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Connect</strong>
    </p>
    <div style="margin:6px 0 0 34px;">More mitochondria provide more ATP for movement.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Muscle cells need large amounts of energy for contraction, so they have many mitochondria to supply ATP.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> In biology, the structure of a cell usually matches the job it does.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which type of cell has no nucleus?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Prokaryotic cells, such as bacteria.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Name two structures found in plant cells but not animal cells.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cell wall and chloroplasts (and a large central vacuole).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which organelle packages proteins for transport?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Golgi apparatus.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles and follow your teacher’s instructions whenever you handle lab materials.</li>
    <li>Never eat, drink or taste anything in the lab, and wash your hands after every activity.</li>
    <li>Handle microscopes, glass slides and cover slips carefully; report any breakage to your teacher at once.</li>
    <li>Respect living organisms: handle plants and animals gently and return or dispose of them as instructed.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Developing models</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Constructing explanations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing and contrasting</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Structure–function reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classifying cells</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Comparing cells shows a pattern of unity and diversity. All cells share basic parts because all life shares a common ancestry. But cells differ in ways that fit their roles: plant cells have chloroplasts because they make their own food, and bacteria are small and simple, which lets them reproduce very quickly.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Many antibiotics damage bacterial cell walls or bacterial ribosomes. Why might these drugs harm bacteria but not human cells?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #a5d6a7;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Biology in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Doctors choose antibiotics that attack features of bacterial cells — such as their cell walls — that human cells do not have.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Bacteria in soil break down dead material and recycle nutrients, keeping ecosystems healthy.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Biotechnology companies use yeast and bacteria as tiny factories to make insulin, enzymes and other products.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Is yeast prokaryotic or eukaryotic?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Does it have a nucleus?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Eukaryotic — yeast is a fungus with a nucleus.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which organelle makes proteins?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Found in all cells.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The ribosome.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why do leaf cells have many chloroplasts?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Structure fits function.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Leaves capture light for photosynthesis, so they need many chloroplasts.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a two-column chart comparing plant and animal cells, with at least eight organelles.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Play “Organelle job interview”: one partner describes a job, the other names the organelle that would be hired.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Build a 3D cell model from everyday materials, with a key explaining each organelle’s function.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an interactive online cell model to explore organelles. Record one fact about each organelle that is not in this lesson.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What does “eukaryote” mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">“True nucleus” — a cell with a nucleus.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name the organelle that releases energy from food.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The mitochondrion.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> List four structures that all cells have.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cell membrane, cytoplasm, ribosomes and DNA.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Give two differences between plant and animal cells.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Plant cells have a cell wall and chloroplasts, and a large central vacuole; animal cells do not.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #a5d6a7;">
    <p style="margin:0 0 6px 0;color:#a5d6a7;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain how the folded inner membrane of a mitochondrion relates to its function.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Folding increases the surface area for the reactions of cellular respiration, so more ATP can be produced.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why are antibiotics effective against bacteria but useless against viruses?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Antibiotics target bacterial structures such as cell walls and ribosomes; viruses are not cells and lack these structures.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> HS-LS1-2: Use a model to explain how the nucleus, ribosomes, ER and Golgi work together to make and export a protein.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The nucleus holds the DNA instructions; ribosomes on the rough ER build the protein; the ER transports it to the Golgi, which modifies and packages it for export.</div>
    </details>
    </div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Prokaryotic cells, such as bacteria, are small and lack a nucleus and membrane-bound organelles. Eukaryotic cells have a nucleus and many organelles, each with a structure suited to its function. Plant cells also have a cell wall, chloroplasts and a large central vacuole.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Prokaryote = no nucleus; eukaryote = nucleus.</li>
    <li>All cells: membrane, cytoplasm, ribosomes, DNA.</li>
    <li>Plant only: cell wall, chloroplasts, large vacuole.</li>
    <li>Structure fits function.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Bacteria are prokaryotes.</li>
    <li>Mitochondria release energy; chloroplasts capture it.</li>
    <li>Cell walls are outside the membrane.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking plant cells have no mitochondria.</li>
    <li>Saying prokaryotes have no DNA.</li>
    <li>Confusing the cell wall with the cell membrane.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the factory analogy.</li>
    <li>Learn word parts (pro-, eu-, karyon).</li>
    <li>Draw and label cells from memory.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use comparison tables for “compare and contrast” questions.</li>
    <li>Link every organelle to its function.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing and building cell models.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining structure–function links.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Structure and function.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Accuracy</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Creativity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Biotechnology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Understanding cell structure is the basis of medicine, agriculture and biotechnology.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw and label a plant and an animal cell from memory.</li>
    <li>Write a factory analogy for five organelles.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which organelle do I find most interesting, and why?</li>
    <li>Can I explain the difference between prokaryotes and eukaryotes to a friend?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Organelle</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A specialized cell structure.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Prokaryote</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A cell without a nucleus.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Eukaryote</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A cell with a nucleus.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Chloroplast</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Site of photosynthesis.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can compare prokaryotic and eukaryotic cells.</p>
    <p style="margin:6px 0;">☐ I can identify organelles and their functions.</p>
    <p style="margin:6px 0;">☐ I can compare plant and animal cells.</p>
    <p style="margin:6px 0;">☐ I can explain structure–function links.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which organisms are prokaryotes?',
            options: ['Mushrooms', 'Bacteria', 'Oak trees', 'Humans'],
            correct: 1,
            explanation: 'The answer is Bacteria. Bacteria lack a nucleus.'
        },
        {
            question: 'Which structure do ALL cells have?',
            options: ['Nucleus', 'Ribosomes', 'Chloroplasts', 'Cell wall'],
            correct: 1,
            explanation: 'All cells make proteins on ribosomes.'
        },
        {
            question: 'Where is DNA found in a prokaryotic cell?',
            options: ['In the cytoplasm (nucleoid region)', 'In the nucleus', 'In the mitochondria only', 'In the cell wall'],
            correct: 0,
            explanation: 'The answer is In the cytoplasm (nucleoid region). Prokaryotes have no nucleus.'
        },
        {
            question: 'Which organelle captures light energy?',
            options: ['Mitochondrion', 'Golgi apparatus', 'Lysosome', 'Chloroplast'],
            correct: 3,
            explanation: 'Chloroplasts carry out photosynthesis.'
        },
        {
            question: 'Which organelle modifies, sorts and packages proteins?',
            options: ['Nucleus', 'Vacuole', 'Cell wall', 'Golgi apparatus'],
            correct: 3,
            explanation: 'The Golgi is the shipping center.'
        },
        {
            question: 'Plant cells have a cell wall made mainly of:',
            options: ['Protein', 'Cellulose', 'Fat', 'DNA'],
            correct: 1,
            explanation: 'Cellulose makes the wall rigid.'
        },
        {
            question: 'Why do muscle cells have many mitochondria?',
            options: ['They make their own food', 'They store water', 'They need a lot of energy', 'They have no nucleus'],
            correct: 2,
            explanation: 'The answer is They need a lot of energy. Mitochondria supply ATP.'
        },
        {
            question: 'Eukaryotic cells are usually:',
            options: ['Smaller than prokaryotic cells', 'Without organelles', 'Without DNA', 'Larger than prokaryotic cells'],
            correct: 3,
            explanation: 'About 10–100 µm versus 1–10 µm.'
        },
        {
            question: 'Which structure controls what enters and leaves a cell?',
            options: ['Cell wall', 'Ribosome', 'Cell membrane', 'Chloroplast'],
            correct: 2,
            explanation: 'The membrane is selectively permeable.'
        },
        {
            question: 'Lysosomes contain:',
            options: ['Chlorophyll', 'Cellulose', 'Digestive enzymes', 'Starch only'],
            correct: 2,
            explanation: 'The answer is Digestive enzymes. They break down wastes.'
        }
    ]
},
{
    name: '1.1.3 The Cell Membrane and Transport',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Building Blocks of Life</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: The Cell Membrane and Transport</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how the structure of the cell membrane controls what enters and leaves a cell, and explain diffusion, osmosis, facilitated diffusion and active transport.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every cell must take in nutrients and get rid of wastes. Understanding transport explains why salt preserves food, why IV fluids must be carefully balanced, and why plants wilt.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧂 Salting and pickling food</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💉 IV fluids in hospitals</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌿 Watering plants</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🫁 Gas exchange in lungs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🥤 Sports drinks</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚰 Water purification</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the characteristics of life and the cell theory.</li>
    <li>Use a microscope and calculate total magnification.</li>
    <li>Compare prokaryotic and eukaryotic cells and relate organelle structure to function. (HS-LS1-2)</li>
    <li>Explain diffusion, osmosis and active transport across the cell membrane.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the structure of the cell membrane.</li>
    <li>Explain diffusion and osmosis using concentration gradients.</li>
    <li>Predict the effect of hypotonic, isotonic and hypertonic solutions on cells.</li>
    <li>Distinguish passive transport from active transport.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How does a cell control what crosses its border?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.2 you learned that the cell membrane controls what enters and leaves the cell. Now you will learn how.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>If someone sprays air freshener in one corner of a room, soon the whole room smells of it. The scent molecules spread from where they are crowded to where there are fewer of them. This is <strong>diffusion</strong>, and it happens across cell membranes all the time.</p>
    <p>The <strong>cell membrane</strong> is <strong>selectively permeable</strong>: it lets some substances pass easily, blocks others, and uses special proteins to move some substances in or out. Transport that needs no energy from the cell is <strong>passive transport</strong>; transport that uses energy (ATP) is <strong>active transport</strong>.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Passive = downhill, no energy needed. Active = uphill, energy needed.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The membrane is a <strong>phospholipid bilayer</strong>: two layers of phospholipid molecules, each with a water-loving (hydrophilic) head and two water-fearing (hydrophobic) tails. The tails face inward, creating a barrier that blocks many charged and large molecules. Proteins embedded in the membrane act as channels, carriers and pumps. Scientists call this the <strong>fluid mosaic model</strong>, proposed by S. J. Singer and Garth Nicolson in 1972.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its word parts. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">selectively permeable</strong>
    </p>
    <p style="margin:6px 0;">Allowing some substances to pass through but not others.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> per- = through; -meable = pass</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The membrane lets oxygen in but blocks most proteins.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">concentration gradient</strong>
    </p>
    <p style="margin:6px 0;">A difference in concentration between two areas.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Oxygen moves down its gradient into cells.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">diffusion</strong>
    </p>
    <p style="margin:6px 0;">Movement of particles from an area of higher concentration to lower concentration.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> diffuse = spread out</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Oxygen diffuses from the lungs into the blood.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">osmosis</strong>
    </p>
    <p style="margin:6px 0;">Diffusion of water across a selectively permeable membrane.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> osmos = push</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Water enters plant roots by osmosis.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">active transport</strong>
    </p>
    <p style="margin:6px 0;">Movement of substances against a concentration gradient using energy.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> uses ATP</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The sodium–potassium pump uses active transport.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">hypertonic</strong>
    </p>
    <p style="margin:6px 0;">Having a higher solute concentration than the cell.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> hyper- = above</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Salt water is hypertonic to most cells.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Passive Transport</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What moves</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Energy?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simple diffusion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small molecules such as O₂ and CO₂</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Directly through the bilayer, high to low concentration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Facilitated diffusion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Larger or charged molecules such as glucose and ions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Through channel or carrier proteins, high to low</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Osmosis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Across the membrane (often through channel proteins called aquaporins)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>In passive transport, substances move down their concentration gradient until equilibrium is reached. Particles keep moving at equilibrium, but there is no net change.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Osmosis and Tonicity</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 290" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Osmosis: Which Way Does Water Move?</text><rect x="20" y="50" width="200" height="180" rx="12" fill="#0c2a3e" stroke="#38bdf8" stroke-width="2"/><circle cx="120" cy="140" r="62" fill="#1b2e1f" stroke="#a5d6a7" stroke-width="3"/><text x="120" y="145" fill="#e2e8f0" font-size="12" text-anchor="middle">cell</text><line x1="28" y1="140" x2="42.0" y2="140.0" stroke="#67e8f9" stroke-width="2"/><polygon points="52,140 42.0,145.0 42.0,135.0" fill="#67e8f9"/><line x1="212" y1="140" x2="198.0" y2="140.0" stroke="#67e8f9" stroke-width="2"/><polygon points="188,140 198.0,135.0 198.0,145.0" fill="#67e8f9"/><text x="120" y="252" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Hypotonic</text><text x="120" y="215" fill="#cbd5e1" font-size="12" text-anchor="middle">less solute outside</text><text x="120" y="274" fill="#86efac" font-size="12" text-anchor="middle">water moves IN — cell swells</text><rect x="250" y="50" width="200" height="180" rx="12" fill="#0c2a3e" stroke="#38bdf8" stroke-width="2"/><circle cx="350" cy="140" r="50" fill="#1b2e1f" stroke="#a5d6a7" stroke-width="3"/><text x="350" y="145" fill="#e2e8f0" font-size="12" text-anchor="middle">cell</text><line x1="258" y1="132" x2="284.0" y2="132.0" stroke="#67e8f9" stroke-width="2"/><polygon points="294,132 284.0,137.0 284.0,127.0" fill="#67e8f9"/><line x1="294" y1="148" x2="268.0" y2="148.0" stroke="#67e8f9" stroke-width="2"/><polygon points="258,148 268.0,143.0 268.0,153.0" fill="#67e8f9"/><line x1="442" y1="132" x2="416.0" y2="132.0" stroke="#67e8f9" stroke-width="2"/><polygon points="406,132 416.0,127.0 416.0,137.0" fill="#67e8f9"/><line x1="406" y1="148" x2="432.0" y2="148.0" stroke="#67e8f9" stroke-width="2"/><polygon points="442,148 432.0,153.0 432.0,143.0" fill="#67e8f9"/><text x="350" y="252" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Isotonic</text><text x="350" y="215" fill="#cbd5e1" font-size="12" text-anchor="middle">equal solute</text><text x="350" y="274" fill="#86efac" font-size="12" text-anchor="middle">no net movement</text><rect x="480" y="50" width="200" height="180" rx="12" fill="#0c2a3e" stroke="#38bdf8" stroke-width="2"/><circle cx="580" cy="140" r="38" fill="#1b2e1f" stroke="#a5d6a7" stroke-width="3"/><text x="580" y="145" fill="#e2e8f0" font-size="12" text-anchor="middle">cell</text><line x1="536" y1="140" x2="498.0" y2="140.0" stroke="#67e8f9" stroke-width="2"/><polygon points="488,140 498.0,135.0 498.0,145.0" fill="#67e8f9"/><line x1="624" y1="140" x2="662.0" y2="140.0" stroke="#67e8f9" stroke-width="2"/><polygon points="672,140 662.0,145.0 662.0,135.0" fill="#67e8f9"/><text x="580" y="252" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Hypertonic</text><text x="580" y="215" fill="#cbd5e1" font-size="12" text-anchor="middle">more solute outside</text><text x="580" y="274" fill="#86efac" font-size="12" text-anchor="middle">water moves OUT — cell shrinks</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solution outside the cell</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Water movement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Animal cell</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Plant cell</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hypotonic (lower solute)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Into the cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swells and may burst</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Becomes firm (turgid) — the cell wall stops it bursting</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Isotonic (equal solute)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No net movement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Normal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Becomes limp (flaccid)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hypertonic (higher solute)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Out of the cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shrivels</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Membrane pulls away from the wall (plasmolysis); the plant wilts</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Predicting osmosis</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A slice of potato is placed in a strong salt solution for 30 minutes. Predict and explain what happens to its mass.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Compare the solute concentration of the solution with the potato cells, then decide which way water moves.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Compare</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The salt solution has a higher solute concentration than the potato cells — it is hypertonic.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Direction</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Water moves by osmosis from the cells (more water) to the solution (less water).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Effect</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The potato loses water, so its mass decreases and it becomes soft.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The potato slice loses mass and becomes soft, because water leaves its cells by osmosis into the hypertonic salt solution.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Saying the salt moves into the potato. In osmosis, it is the water that moves across the membrane.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Active Transport and Bulk Transport</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Process</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Description</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protein pumps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carrier proteins use ATP to move substances against their gradient</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The sodium–potassium pump in nerve cells</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Endocytosis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The membrane surrounds material and brings it into the cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">White blood cells engulfing bacteria</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exocytosis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vesicles fuse with the membrane to release material</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cells releasing hormones</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which way does water move when a red blood cell is placed in pure water?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Into the cell — pure water is hypotonic, so the cell swells and may burst.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the difference between passive and active transport?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Passive transport needs no energy and moves substances down a gradient; active transport uses ATP to move them against a gradient.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why do plants wilt when soil is too salty?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The soil is hypertonic, so water leaves the root cells by osmosis.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles and follow your teacher’s instructions whenever you handle lab materials.</li>
    <li>Never eat, drink or taste anything in the lab, and wash your hands after every activity.</li>
    <li>Handle microscopes, glass slides and cover slips carefully; report any breakage to your teacher at once.</li>
    <li>Respect living organisms: handle plants and animals gently and return or dispose of them as instructed.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Modeling transport</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 4 Analyzing data</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Explaining with evidence</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Predicting outcomes</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating percent change</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>In osmosis labs, scientists compare <strong>percent change in mass</strong> rather than raw mass, because samples start at different sizes. Percent change = (final mass − initial mass) ÷ initial mass × 100. A negative value means the sample lost water; a positive value means it gained water.</p>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Calculating percent change</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A potato cylinder has a mass of 5.0 g. After 30 minutes in salt water, its mass is 4.2 g. Calculate the percent change.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Find the change</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4.2 − 5.0 = −0.8 g</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide by the initial mass</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−0.8 ÷ 5.0 = −0.16</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Multiply by 100</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−16%</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> −16%: the potato lost 16% of its mass, mostly water.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #a5d6a7;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Biology in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Hospital IV fluids are made isotonic to blood, so red blood cells neither swell nor shrink.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> When seawater floods farmland, the salty soil becomes hypertonic to plant roots, and crops wilt and die.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Food producers use salt and sugar to preserve food: the hypertonic environment draws water out of bacteria and stops them growing.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Oxygen moves from the lungs into the blood. Which process is this?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Small molecule, high to low.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Simple diffusion.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> A cell is in a solution with the same solute concentration. What happens?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Equal on both sides.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No net water movement — the solution is isotonic.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Does the sodium–potassium pump use energy?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Against the gradient.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — it is active transport using ATP.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw the phospholipid bilayer and label the heads, tails and a channel protein.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Demonstrate diffusion by dropping food coloring into still water. Time how long it takes to spread and discuss why.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Gummy-candy osmosis: place identical candies in plain water, salt water and sugar water overnight. Measure and compare their mass changes.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a free online membrane-transport simulation to change concentrations and observe how particles move.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define osmosis.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The diffusion of water across a selectively permeable membrane.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Does diffusion require energy?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — it is passive transport.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Predict what happens to an animal cell in a hypertonic solution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Water leaves the cell by osmosis, and the cell shrivels.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain why glucose needs facilitated diffusion.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Glucose is too large and polar to pass easily through the hydrophobic tails, so it uses carrier proteins.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #a5d6a7;">
    <p style="margin:0 0 6px 0;color:#a5d6a7;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A potato cylinder changes from 6.0 g to 6.6 g in water. Calculate the percent change and explain it.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(6.6 − 6.0) ÷ 6.0 × 100 = +10%. The water was hypotonic, so water entered the cells by osmosis.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why is drinking seawater dangerous for people?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Seawater is hypertonic, so it draws water out of body cells and causes dehydration.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 6: Explain, using evidence about tonicity, why IV fluids must be isotonic.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If the fluid were hypotonic, blood cells would swell and burst; if hypertonic, they would shrivel. Isotonic fluid causes no net water movement, so cells stay healthy.</div>
    </details>
    </div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The cell membrane is a selectively permeable phospholipid bilayer with embedded proteins. Passive transport (diffusion, facilitated diffusion and osmosis) moves substances down their concentration gradient without energy. Active transport uses ATP to move substances against their gradient. Cells swell in hypotonic solutions, stay normal in isotonic solutions and shrink in hypertonic solutions.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Membrane = phospholipid bilayer + proteins.</li>
    <li>Passive: high → low, no energy.</li>
    <li>Active: low → high, uses ATP.</li>
    <li>Hypotonic → water in; hypertonic → water out.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Osmosis moves water, not solute.</li>
    <li>Plant cell walls prevent bursting.</li>
    <li>Use percent change to compare samples.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying solute moves in osmosis.</li>
    <li>Mixing up hypotonic and hypertonic.</li>
    <li>Thinking particles stop moving at equilibrium.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>“Hyper” = more solute outside → water exits.</li>
    <li>Draw arrows on cell diagrams.</li>
    <li>Always state the gradient direction.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name the solution type and the direction of water movement.</li>
    <li>Show percent-change calculations with units.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing the bilayer and tonicity diagrams.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 5 Mathematics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculating percent change.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Structure and function of the membrane.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Careful measurement</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with data</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Food science</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Agriculture</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From pickling cucumbers to treating dehydration, controlling osmosis protects health and food.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain why salt is sprinkled on icy roads in terms of solutions (research task).</li>
    <li>Draw and label cells in three types of solution.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which transport process is hardest for me to explain?</li>
    <li>Where have I seen osmosis in everyday life?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Diffusion</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">High to low concentration.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Osmosis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Diffusion of water.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Active transport</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uses energy, against the gradient.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hypotonic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lower solute outside the cell.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe the membrane structure.</p>
    <p style="margin:6px 0;">☐ I can explain diffusion and osmosis.</p>
    <p style="margin:6px 0;">☐ I can predict tonicity effects.</p>
    <p style="margin:6px 0;">☐ I can distinguish passive and active transport.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The cell membrane is made mainly of:',
            options: ['Cellulose', 'A phospholipid bilayer', 'Starch', 'DNA'],
            correct: 1,
            explanation: 'Two layers of phospholipids form the membrane.'
        },
        {
            question: 'Diffusion moves particles:',
            options: ['From lower to higher concentration', 'Only with ATP', 'Only in plants', 'From higher to lower concentration'],
            correct: 3,
            explanation: 'Particles spread down the gradient.'
        },
        {
            question: 'Osmosis is the movement of:',
            options: ['Salt across a membrane', 'Proteins into the nucleus', 'Water across a membrane', 'Glucose using ATP'],
            correct: 2,
            explanation: 'The answer is Water across a membrane. Osmosis is water diffusion.'
        },
        {
            question: 'A cell placed in a hypertonic solution will:',
            options: ['Gain water and swell', 'Stay the same', 'Burst', 'Lose water and shrink'],
            correct: 3,
            explanation: 'Water moves out toward more solute.'
        },
        {
            question: 'A red blood cell in pure water will:',
            options: ['Shrivel', 'Stay the same', 'Swell and may burst', 'Grow a cell wall'],
            correct: 2,
            explanation: 'The answer is Swell and may burst. Pure water is hypotonic.'
        },
        {
            question: 'Which process uses energy (ATP)?',
            options: ['Active transport', 'Osmosis', 'Simple diffusion', 'Facilitated diffusion'],
            correct: 0,
            explanation: 'Active transport moves substances against the gradient.'
        },
        {
            question: 'Glucose usually enters cells by:',
            options: ['Simple diffusion through the tails', 'Facilitated diffusion through carrier proteins', 'Exocytosis', 'Osmosis'],
            correct: 1,
            explanation: 'Glucose needs a protein carrier.'
        },
        {
            question: 'Why don’t plant cells burst in hypotonic solutions?',
            options: ['The cell wall resists the pressure', 'They have no membrane', 'They have no vacuole', 'Water cannot enter them'],
            correct: 0,
            explanation: 'The rigid wall keeps them turgid, not burst.'
        },
        {
            question: 'A potato goes from 5.0 g to 4.2 g. The percent change is:',
            options: ['+16%', '−16%', '−0.8%', '−84%'],
            correct: 1,
            explanation: 'The answer is −16%. −0.8 ÷ 5.0 × 100 = −16%.'
        },
        {
            question: 'White blood cells engulfing bacteria is an example of:',
            options: ['Exocytosis', 'Osmosis', 'Endocytosis', 'Simple diffusion'],
            correct: 2,
            explanation: 'The membrane surrounds the material and brings it in.'
        }
    ]
},
{
    name: '1.1 Lab: Observing Plant Cells with a Microscope',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lab</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Lab: Observing Plant Cells with a Microscope</h2>
    <p style="font-size:16px;">In this lab you will prepare a wet-mount slide of onion skin and an Elodea (pondweed) leaf, observe them at low and high power, draw what you see, estimate cell size and observe the effect of salt water on plant cells.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Lab Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eyes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wear goggles when using iodine stain; it can irritate eyes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Glass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Handle slides and cover slips by the edges; report breakage — do not pick up broken glass by hand.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stain</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iodine stains skin and clothing; wipe up spills immediately.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microscope</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carry it with two hands (one on the arm, one under the base); never use the coarse knob on high power.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Lab Investigation: Plant Cells and Plasmolysis</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To observe and compare the structures of onion and Elodea cells and to observe the effect of a hypertonic salt solution on plant cells.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Compound light microscope</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Glass slides and cover slips</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Dropper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Forceps</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Paper towels</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Onion (one layer)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Elodea leaf</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Iodine solution (stain)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Distilled water</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">5% salt solution</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear goggles when using iodine.</li>
    <li>Wash hands after the lab.</li>
    <li>Dispose of plant material and glass as your teacher directs.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Place a drop of water in the center of a clean slide.</li>
    <li>Use forceps to peel a thin, transparent layer of onion skin and lay it flat in the water.</li>
    <li>Lower a cover slip at an angle to avoid air bubbles, then add a drop of iodine at one edge and draw it under with a paper towel on the opposite edge.</li>
    <li>Observe at 40× and then 100×. Center the cells, switch to 400× and focus with the fine knob only.</li>
    <li>Draw three or four cells at 400×, labeling the cell wall, cytoplasm and nucleus, and record the magnification.</li>
    <li>Prepare a wet mount of an Elodea leaf in water (no stain). Observe and draw it, labeling chloroplasts and the cell wall.</li>
    <li>Add a drop of 5% salt solution at the edge of the Elodea cover slip and draw it through. Observe for 3–5 minutes and draw the changes.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Specimen</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Magnification</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Structures seen</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Estimated cell length (µm)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Onion (iodine)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elodea (water)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elodea (salt water)</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why did onion cells have no chloroplasts?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Onion bulb cells grow underground and do not photosynthesize, so they lack chloroplasts.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What happened to the Elodea cells in salt water, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The cytoplasm and membrane pulled away from the cell wall (plasmolysis), because water left the cells by osmosis into the hypertonic salt solution.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why was iodine added to the onion slide?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Iodine stains structures such as the nucleus, making them easier to see.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Plant cells have a cell wall, cytoplasm and a nucleus; leaf cells such as Elodea also contain chloroplasts. In a hypertonic solution, plant cells lose water and undergo plasmolysis.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> The salt solution has a higher solute concentration than the cytoplasm, so water moves out of the cell by osmosis. The rigid cell wall keeps its shape while the membrane shrinks inward.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Onion layer too thick or folded, so cells overlap.</li>
    <li>Air bubbles mistaken for cells.</li>
    <li>Using the coarse knob at high power and losing focus.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Gardeners see the same effect when too much fertilizer or salt in soil makes plants wilt.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Compare your onion and Elodea drawings. Which structures appear in both? Which appear in only one? Use your observations of the salt-water slide as evidence for osmosis.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Scientific drawings use sharp pencil lines, no shading, labels with straight lines, a title and the magnification.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Lab Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Calculate the total magnification with a 10× eyepiece and a 40× objective.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">400×</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name two structures seen in both onion and Elodea cells.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cell wall, cytoplasm, cell membrane or nucleus.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> What is plasmolysis?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The shrinking of the cytoplasm and membrane away from the cell wall when a plant cell loses water.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should the cover slip be lowered at an angle?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To push out air and avoid trapping bubbles under it.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How could you show that plasmolysis can be reversed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Draw distilled water under the cover slip; water re-enters the cells and the cytoplasm expands back to the cell wall.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Your Lab Report</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Title and research question</li>
    <li>Hypothesis (an “if… then… because…” statement)</li>
    <li>Materials and procedure</li>
    <li>Data: tables, drawings or graphs with units</li>
    <li>Analysis: what patterns does the data show?</li>
    <li>Conclusion: was your hypothesis supported? Use evidence.</li>
    <li>Sources of error and how to improve the investigation</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Why is iodine added to the onion slide?',
            options: ['To kill bacteria', 'To add color for fun', 'To make the cells grow', 'To stain structures and make them visible'],
            correct: 3,
            explanation: 'Iodine stains the nucleus and other parts.'
        },
        {
            question: 'Onion bulb cells lack:',
            options: ['Chloroplasts', 'A cell wall', 'A nucleus', 'Cytoplasm'],
            correct: 0,
            explanation: 'Bulb cells do not photosynthesize.'
        },
        {
            question: 'Elodea cells in salt water show:',
            options: ['Bursting', 'No change', 'Plasmolysis', 'Cell division'],
            correct: 2,
            explanation: 'Water leaves the cells by osmosis.'
        },
        {
            question: 'When switching to high power, you should focus with:',
            options: ['The fine adjustment knob only', 'The coarse adjustment knob', 'The diaphragm', 'The stage clips'],
            correct: 0,
            explanation: 'The coarse knob can crack the slide.'
        },
        {
            question: 'Round, dark circles with thick edges on your slide are probably:',
            options: ['Nuclei', 'Chloroplasts', 'Mitochondria', 'Air bubbles'],
            correct: 3,
            explanation: 'Air bubbles are a common error.'
        },
        {
            question: 'How should you carry a microscope?',
            options: ['By the eyepiece', 'By the stage', 'With one hand on the arm and one under the base', 'With one hand only'],
            correct: 2,
            explanation: 'The answer is With one hand on the arm and one under the base. Two hands keep it safe.'
        }
    ]
},
{
    name: '1.1 Quiz: The Cell: Structure and Function',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: The Cell: Structure and Function</h2>
    <p style="font-size:16px;">Test your understanding of the cell theory, microscopes, cell types, organelles and membrane transport from Topic 1.1.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 10 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 25 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The characteristics of life and the cell theory</li>
    <li>Microscope parts and magnification</li>
    <li>Prokaryotic and eukaryotic cells</li>
    <li>Organelles and their functions</li>
    <li>Diffusion, osmosis and tonicity</li>
    <li>Active transport</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Mastery Levels</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Score</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do next</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">90% – 100%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Advanced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excellent. Move on to the assignment.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80% – 89%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Good. Review the few areas you missed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">65% – 79%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study the review page, then try again.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below 65%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the three lessons and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #1e88e5;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bbdefb;font-weight:bold;">📝 Exam Tip</p>
    <div>For osmosis questions, first decide which side has more solute; water always moves toward the side with more solute.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'All cells come from pre-existing cells. This idea was proposed by:',
            options: ['Robert Hooke', 'Theodor Schwann', 'Antonie van Leeuwenhoek', 'Rudolf Virchow'],
            correct: 3,
            explanation: 'The answer is Rudolf Virchow. Virchow, 1855.'
        },
        {
            question: 'A 10× eyepiece and a 10× objective give a total magnification of:',
            options: ['20×', '10×', '1,000×', '100×'],
            correct: 3,
            explanation: 'The answer is 100×. 10 × 10 = 100.'
        },
        {
            question: 'Which is a eukaryotic organism?',
            options: ['Yeast', 'E. coli bacterium', 'A bacterium in yogurt', 'An archaeon in a hot spring'],
            correct: 0,
            explanation: 'Yeast is a fungus with a nucleus.'
        },
        {
            question: 'Which organelle contains the cell’s DNA in eukaryotes?',
            options: ['Nucleus', 'Ribosome', 'Vacuole', 'Lysosome'],
            correct: 0,
            explanation: 'The answer is Nucleus. The nucleus stores DNA.'
        },
        {
            question: 'Which organelle is the site of protein production?',
            options: ['Golgi apparatus', 'Chloroplast', 'Ribosome', 'Cell wall'],
            correct: 2,
            explanation: 'The answer is Ribosome. Ribosomes build proteins.'
        },
        {
            question: 'Which structure is found in plant cells but not animal cells?',
            options: ['Mitochondrion', 'Ribosome', 'Cell membrane', 'Cell wall'],
            correct: 3,
            explanation: 'Plant cells have a cellulose wall.'
        },
        {
            question: 'Water moving into a cell placed in distilled water is an example of:',
            options: ['Osmosis in a hypertonic solution', 'Osmosis in a hypotonic solution', 'Active transport', 'Exocytosis'],
            correct: 1,
            explanation: 'The answer is Osmosis in a hypotonic solution. Distilled water is hypotonic.'
        },
        {
            question: 'Which process moves substances against a concentration gradient?',
            options: ['Diffusion', 'Osmosis', 'Active transport', 'Facilitated diffusion'],
            correct: 2,
            explanation: 'The answer is Active transport. It requires ATP.'
        },
        {
            question: 'Salt preserves food because it:',
            options: ['Draws water out of bacteria by osmosis', 'Adds nutrients for bacteria', 'Makes food hypotonic', 'Increases bacterial growth'],
            correct: 0,
            explanation: 'The hypertonic environment dehydrates microbes.'
        },
        {
            question: 'Oxygen enters cells mainly by:',
            options: ['Active transport', 'Endocytosis', 'Simple diffusion', 'Exocytosis'],
            correct: 2,
            explanation: 'O₂ is small and moves down its gradient.'
        }
    ]
},
{
    name: '1.1 Assignment: Osmosis Investigation Report',
    type: 'lesson',
    duration: '120 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Osmosis Investigation Report</h2>
    <p style="font-size:16px;">Design and carry out a simple investigation of osmosis using potato cylinders (or another plant tissue) in different salt or sugar concentrations, and write a full lab report.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Research question:</strong> How does the concentration of a salt solution affect the percent change in mass of potato cylinders?</p>
    <p>You will place equal-sized potato cylinders in solutions of 0%, 2%, 4% and 6% salt for 30 minutes, measure their mass before and after, calculate percent change and graph your results.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Your teacher will supply the potato, solutions and balances. Use a cork borer or knife only under supervision, and cut away from your body on a cutting board.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a hypothesis in the form “If… then… because…”.</li>
    <li>Identify the independent, dependent and controlled variables.</li>
    <li>Cut four sets of three potato cylinders of equal length, blot them dry and record their initial mass.</li>
    <li>Place each set in a different solution for 30 minutes.</li>
    <li>Remove, blot dry and record the final mass of each cylinder.</li>
    <li>Calculate the percent change for each cylinder and the mean for each concentration.</li>
    <li>Plot a graph of mean percent change (y-axis) against salt concentration (x-axis).</li>
    <li>Write your analysis and conclusion using claim, evidence and reasoning, and evaluate sources of error.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hypothesis and variables</li>
    <li>Data table with units</li>
    <li>Percent-change calculations</li>
    <li>Labeled graph</li>
    <li>Conclusion (CER) and error analysis</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 Assessment Rubric</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Criterion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Exemplary (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Proficient (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Developing (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Beginning (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hypothesis and variables</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Testable hypothesis with scientific reasoning; all variables correctly identified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Testable hypothesis; variables identified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hypothesis vague or variables partly wrong</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data collection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete, organized table with units and repeated trials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete table with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some data missing or no units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little data</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data analysis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate calculations and a correctly labeled graph with a trend line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly accurate calculations and graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Errors in calculations or graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No analysis</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conclusion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Claim supported by specific data and clear reasoning about osmosis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Claim supported by data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Claim with weak evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No conclusion</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful sources of error and specific improvements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sources of error identified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague evaluation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Blot cylinders the same way each time.<br>Use percent change, not raw mass.<br>The x-intercept of your graph estimates the concentration that is isotonic to potato cells.<br>Repeat trials to make results more reliable.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Did the results support your hypothesis?</li>
    <li>Which source of error had the biggest effect?</li>
    <li>How would you extend this investigation?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The independent variable in this investigation is:',
            options: ['The percent change in mass', 'The time in solution', 'The size of the cylinders', 'The salt concentration'],
            correct: 3,
            explanation: 'It is the variable you change.'
        },
        {
            question: 'The dependent variable is:',
            options: ['Percent change in mass', 'Salt concentration', 'Type of potato', 'Temperature'],
            correct: 0,
            explanation: 'The answer is Percent change in mass. It is what you measure.'
        },
        {
            question: 'Why use percent change instead of final mass?',
            options: ['It is easier to measure', 'It is always positive', 'Teachers prefer it', 'Cylinders may start at different masses'],
            correct: 3,
            explanation: 'Percent change allows fair comparison.'
        },
        {
            question: 'Where the graph crosses zero percent change, the solution is:',
            options: ['Hypertonic', 'Isotonic to the potato cells', 'Hypotonic', 'Pure water'],
            correct: 1,
            explanation: 'No net water movement means isotonic.'
        },
        {
            question: 'Which is a controlled variable?',
            options: ['Salt concentration', 'Change in mass', 'Time in solution', 'Final mass'],
            correct: 2,
            explanation: 'The answer is Time in solution. Time must be kept the same.'
        },
        {
            question: 'Repeating trials makes results:',
            options: ['Less accurate', 'More reliable', 'Unnecessary', 'Always identical'],
            correct: 1,
            explanation: 'Repeats reduce the effect of random error.'
        }
    ]
},
{
    name: '1.1 Review: The Cell: Structure and Function',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: The Cell: Structure and Function</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before you move on.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Cell Theory and Microscopes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>All living things are made of cells; the cell is the basic unit; cells come from cells.</li>
    <li>Total magnification = eyepiece × objective.</li>
    <li>1 mm = 1,000 µm.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Cell Types</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Prokaryotes: no nucleus, small, bacteria and archaea.</li>
    <li>Eukaryotes: nucleus and organelles.</li>
    <li>Plant cells add a cell wall, chloroplasts and a large vacuole.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Organelles</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nucleus: DNA. Ribosome: proteins. ER and Golgi: make and ship.</li>
    <li>Mitochondrion: energy. Chloroplast: photosynthesis.</li>
    <li>Structure fits function.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Transport</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Passive: diffusion, facilitated diffusion, osmosis — no energy.</li>
    <li>Active: pumps, endocytosis, exocytosis — energy.</li>
    <li>Hypotonic → in; isotonic → no net; hypertonic → out.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Definition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell theory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three-part theory about cells</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Virchow: cells from cells</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Eyepiece × objective</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10 × 40 = 400×</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prokaryote</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell with no nucleus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bacteria</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mitochondrion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Releases energy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many in muscle cells</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Osmosis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Diffusion of water</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plants wilting in salty soil</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Active transport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uses ATP, against gradient</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sodium–potassium pump</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the cell theory.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All living things are made of cells; the cell is the basic unit of life; all cells come from existing cells.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Calculate magnification with a 15× eyepiece and a 10× objective.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">150×</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Give two differences between prokaryotic and eukaryotic cells.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Prokaryotes have no nucleus and no membrane-bound organelles, and are smaller.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Which organelle would you expect many of in a cell that makes lots of proteins for export?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Ribosomes, rough ER and Golgi apparatus.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Predict the effect of hypertonic solution on a plant cell.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Water leaves, and the cell undergoes plasmolysis.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Calculate percent change: 4.0 g to 4.6 g.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(0.6 ÷ 4.0) × 100 = +15%</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can state the cell theory.</p>
    <p style="margin:6px 0;">☐ I can use a microscope and calculate magnification.</p>
    <p style="margin:6px 0;">☐ I can compare cell types.</p>
    <p style="margin:6px 0;">☐ I can match organelles to functions.</p>
    <p style="margin:6px 0;">☐ I can explain transport and predict osmosis.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A 15× eyepiece with a 10× objective gives:',
            options: ['150×', '25×', '1.5×', '1,500×'],
            correct: 0,
            explanation: 'The answer is 150×. 15 × 10 = 150.'
        },
        {
            question: 'Which organelle is the control center of a eukaryotic cell?',
            options: ['Mitochondrion', 'Vacuole', 'Ribosome', 'Nucleus'],
            correct: 3,
            explanation: 'The answer is Nucleus. The nucleus holds DNA.'
        },
        {
            question: 'A cell that makes many proteins for export will have lots of:',
            options: ['Chloroplasts', 'Cell walls', 'Rough ER and Golgi', 'Vacuoles only'],
            correct: 2,
            explanation: 'The answer is Rough ER and Golgi. These make and ship proteins.'
        },
        {
            question: 'Plasmolysis happens in:',
            options: ['Hypotonic solutions', 'Hypertonic solutions', 'Isotonic solutions', 'Pure water'],
            correct: 1,
            explanation: 'The answer is Hypertonic solutions. Water leaves the cell.'
        },
        {
            question: 'A potato goes from 4.0 g to 4.6 g. The solution was:',
            options: ['Hypotonic', 'Hypertonic', 'Isotonic', 'Impossible to tell'],
            correct: 0,
            explanation: 'Gaining mass means water entered.'
        },
        {
            question: 'Facilitated diffusion uses:',
            options: ['ATP', 'Proteins, but no energy', 'Vesicles', 'Cell walls'],
            correct: 1,
            explanation: 'It is passive transport through proteins.'
        }
    ]
},
{
    name: '1.1 Summary: The Cell: Structure and Function',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.1 The Cell: Structure and Function</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: The Cell: Structure and Function</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> The cell is the basic unit of life. Its structures — from the nucleus to the membrane — are built to carry out specific functions, and its membrane controls the movement of materials that keeps it alive.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Living things are made of cells, use energy, grow, reproduce, respond, maintain homeostasis and have DNA.</li>
    <li>The cell theory was built from evidence gathered with improving microscopes.</li>
    <li>Total magnification = eyepiece power × objective power.</li>
    <li>Prokaryotic cells lack a nucleus; eukaryotic cells have a nucleus and organelles.</li>
    <li>Each organelle’s structure suits its function.</li>
    <li>Passive transport moves substances down a gradient without energy; active transport uses ATP.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learned</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practice</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Life, the Cell Theory and Microscopes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell theory, its history, microscope use and magnification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculate magnification and estimate size</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Prokaryotic and Eukaryotic Cells</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell types, organelles, plant vs. animal cells</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Link each organelle to its function</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 The Cell Membrane and Transport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bilayer, diffusion, osmosis, tonicity, active transport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Predict water movement in solutions</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">cell theory</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">magnification</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">resolution</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">prokaryote</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">eukaryote</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">organelle</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">nucleus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">mitochondrion</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">chloroplast</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">phospholipid bilayer</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">diffusion</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">osmosis</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hypotonic</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hypertonic</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">active transport</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Doctors, farmers, food scientists and biotechnologists all use knowledge of cell structure and transport to protect health and produce food.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will zoom out from single cells to tissues, organs and body systems, and see how feedback loops keep the whole body in balance.</div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can state the cell theory and use a microscope.</p>
    <p style="margin:6px 0;">✔️ I can compare prokaryotic and eukaryotic cells.</p>
    <p style="margin:6px 0;">✔️ I can explain the functions of organelles.</p>
    <p style="margin:6px 0;">✔️ I can explain diffusion, osmosis and active transport.</p>
    <p style="margin:6px 0;">✔️ I can predict the effects of different solutions on cells.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that:',
            options: ['Cells have no structures', 'All cells are identical', 'Only animals have cells', 'Cell structures are suited to their functions'],
            correct: 3,
            explanation: 'The answer is Cell structures are suited to their functions. Structure fits function.'
        },
        {
            question: 'Which process needs ATP?',
            options: ['Active transport', 'Osmosis', 'Diffusion', 'Facilitated diffusion'],
            correct: 0,
            explanation: 'The answer is Active transport. Active transport uses energy.'
        },
        {
            question: 'Topic 1.2 will study:',
            options: ['Genetics', 'Organization and homeostasis', 'Ecology', 'Evolution'],
            correct: 1,
            explanation: 'Topic 1.2 covers levels of organization and feedback.'
        },
        {
            question: 'Which organisms have prokaryotic cells?',
            options: ['Plants', 'Animals', 'Bacteria', 'Fungi'],
            correct: 2,
            explanation: 'The answer is Bacteria. Bacteria have no nucleus.'
        },
        {
            question: 'Water moves out of a cell in a:',
            options: ['Hypotonic solution', 'Hypertonic solution', 'Isotonic solution', 'Pure-water solution'],
            correct: 1,
            explanation: 'Water moves toward higher solute.'
        },
        {
            question: 'Total magnification is found by:',
            options: ['Multiplying eyepiece and objective powers', 'Adding the powers', 'Using the eyepiece only', 'Measuring the slide'],
            correct: 0,
            explanation: 'The answer is Multiplying eyepiece and objective powers. Multiply the two lenses.'
        }
    ]
},
{
    name: '1.2.1 Levels of Organization',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Systems in Balance</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Levels of Organization</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how cells become specialized and how they are organized into tissues, organs, organ systems and whole organisms.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Your body has trillions of cells, yet it works as one organism. Understanding organization explains how — and why damage at one level, such as a tissue, can affect the whole body.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Medicine and surgery</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Organ transplants</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Tissue engineering</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Sports science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌳 Plant biology</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Stem-cell research</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the levels of organization in multicellular organisms. (HS-LS1-2)</li>
    <li>Explain how body systems interact to carry out functions. (HS-LS1-2)</li>
    <li>Model negative and positive feedback mechanisms that affect homeostasis. (HS-LS1-3)</li>
    <li>Plan and conduct an investigation of how the body responds to change. (HS-LS1-3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain cell specialization and differentiation.</li>
    <li>Describe the four main types of animal tissue.</li>
    <li>Order the levels of organization from cell to organism.</li>
    <li>Give examples of organs and organ systems in plants and animals.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do trillions of cells work together as one organism?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Topic 1.1 you studied single cells and their organelles. Now you will see how cells work together.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A single-celled organism like an amoeba must do everything by itself: move, eat, get rid of wastes and reproduce. In a multicellular organism, cells divide up the work. Muscle cells contract, nerve cells carry signals and red blood cells carry oxygen. This division of labor is called <strong>cell specialization</strong>.</p>
    <p>Specialized cells are organized into levels: similar cells form <strong>tissues</strong>; different tissues form <strong>organs</strong>; organs work together in <strong>organ systems</strong>; and organ systems make up an <strong>organism</strong>.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Cells → tissues → organs → organ systems → organism. Each level is built from the one before.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>All the cells in your body contain the same DNA, yet they look and act very differently. During development, cells <strong>differentiate</strong> by switching certain genes on or off. Unspecialized cells that can become different cell types are called <strong>stem cells</strong>. Scientists study stem cells to repair damaged tissues and to understand disease.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its word parts. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">cell specialization</strong>
    </p>
    <p style="margin:6px 0;">The process by which cells develop specific structures and functions.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Nerve cells have long extensions to carry signals.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">differentiation</strong>
    </p>
    <p style="margin:6px 0;">The process by which unspecialized cells become specialized.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> differ = become different</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Stem cells differentiate into blood cells.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">tissue</strong>
    </p>
    <p style="margin:6px 0;">A group of similar cells that work together to perform a function.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> Old French <em>tissu</em> = woven cloth</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Muscle tissue contracts.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">organ</strong>
    </p>
    <p style="margin:6px 0;">A structure made of different tissues working together.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> Greek <em>organon</em> = tool</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The stomach is an organ.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">organ system</strong>
    </p>
    <p style="margin:6px 0;">A group of organs that work together to perform major functions.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The digestive system breaks down food.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">stem cell</strong>
    </p>
    <p style="margin:6px 0;">An unspecialized cell that can develop into different cell types.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Bone marrow contains stem cells.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. From Cell to Organism</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 190" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Levels of Organization</text><rect x="18" y="52" width="112" height="90" rx="12" fill="#10233d" stroke="#a5d6a7" stroke-width="2"/><text x="74" y="92" fill="#a5d6a7" font-size="14" font-weight="bold" text-anchor="middle">Cell</text><text x="74" y="116" fill="#cbd5e1" font-size="12" text-anchor="middle">muscle cell</text><line x1="132" y1="97" x2="142.0" y2="97.0" stroke="#94a3b8" stroke-width="2"/><polygon points="152,97 142.0,102.0 142.0,92.0" fill="#94a3b8"/><rect x="154" y="52" width="112" height="90" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="210" y="92" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Tissue</text><text x="210" y="116" fill="#cbd5e1" font-size="12" text-anchor="middle">cardiac muscle</text><line x1="268" y1="97" x2="278.0" y2="97.0" stroke="#94a3b8" stroke-width="2"/><polygon points="288,97 278.0,102.0 278.0,92.0" fill="#94a3b8"/><rect x="290" y="52" width="112" height="90" rx="12" fill="#10233d" stroke="#fca5a5" stroke-width="2"/><text x="346" y="92" fill="#fca5a5" font-size="14" font-weight="bold" text-anchor="middle">Organ</text><text x="346" y="116" fill="#cbd5e1" font-size="12" text-anchor="middle">heart</text><line x1="404" y1="97" x2="414.0" y2="97.0" stroke="#94a3b8" stroke-width="2"/><polygon points="424,97 414.0,102.0 414.0,92.0" fill="#94a3b8"/><rect x="426" y="52" width="112" height="90" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="482" y="92" fill="#67e8f9" font-size="14" font-weight="bold" text-anchor="middle">Organ system</text><text x="482" y="116" fill="#cbd5e1" font-size="12" text-anchor="middle">circulatory</text><line x1="540" y1="97" x2="550.0" y2="97.0" stroke="#94a3b8" stroke-width="2"/><polygon points="560,97 550.0,102.0 550.0,92.0" fill="#94a3b8"/><rect x="562" y="52" width="112" height="90" rx="12" fill="#10233d" stroke="#c4b5fd" stroke-width="2"/><text x="618" y="92" fill="#c4b5fd" font-size="14" font-weight="bold" text-anchor="middle">Organism</text><text x="618" y="116" fill="#cbd5e1" font-size="12" text-anchor="middle">human</text><text x="350" y="172" fill="#86efac" font-size="13" text-anchor="middle">Each level is made of the level before it and can do things the parts cannot do alone.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Definition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Human example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Plant example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Basic unit of life</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Red blood cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Guard cell</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tissue</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Similar cells working together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscle tissue</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Xylem (water-carrying tissue)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organ</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different tissues working together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heart, lungs, stomach</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaf, root, stem</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organ system</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organs working together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Circulatory system</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shoot system, root system</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A complete living thing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A human</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A sunflower</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Do not confuse an organ with an organism. An organ (such as the heart) is one part of an organism (such as a person).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. The Four Animal Tissue Types</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tissue</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Examples</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Epithelial</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Covers and lines surfaces; protects and absorbs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skin, lining of the intestines</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Connective</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supports, connects and protects</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bone, cartilage, blood, fat</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contracts to produce movement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skeletal, smooth and cardiac muscle</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nervous</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carries electrical signals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brain, spinal cord, nerves</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Identifying tissues in an organ</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The stomach is an organ. Explain which tissues it contains and what each does.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> An organ contains several tissue types. Think about the stomach’s jobs: churning, protecting, digesting and being controlled.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Muscle tissue</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Smooth muscle contracts to churn and mix food.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Epithelial tissue</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Lines the stomach and releases digestive juices and protective mucus.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Connective tissue</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Holds the layers together and contains blood vessels.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Nervous tissue</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Carries signals that control muscle contractions and juice release.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The stomach contains all four tissue types, working together to digest food.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> This shows why the stomach is an organ, not a tissue: it is built from several different tissues.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Structure Fits Function in Specialized Cells</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cell</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Special feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it helps</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Red blood cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disc shape, no nucleus, full of hemoglobin</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large surface area and more room to carry oxygen</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nerve cell (neuron)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Long, thin extensions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carries signals over long distances quickly</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscle cell</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many mitochondria and protein fibers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Provides energy and the ability to contract</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Root hair cell (plant)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Long, thin extension</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large surface area for absorbing water</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Guard cell (plant)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Paired cells that change shape</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Open and close stomata to control water loss</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Put in order: organ, cell, organism, tissue, organ system.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cell, tissue, organ, organ system, organism.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which tissue type carries electrical signals?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Nervous tissue.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why does a root hair cell have a long extension?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To increase surface area for absorbing water and minerals.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles and follow your teacher’s instructions whenever you handle lab materials.</li>
    <li>Never eat, drink or taste anything in the lab, and wash your hands after every activity.</li>
    <li>Handle microscopes, glass slides and cover slips carefully; report any breakage to your teacher at once.</li>
    <li>Respect living organisms: handle plants and animals gently and return or dispose of them as instructed.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Developing models</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Constructing explanations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classifying</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Structure–function reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing plants and animals</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Each level of organization has <strong>emergent properties</strong> — abilities that its parts do not have on their own. A single heart muscle cell can contract, but only a whole heart can pump blood. A heart alone cannot keep you alive, but the circulatory system, working with other systems, can.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>What emergent property does a whole brain have that a single nerve cell does not?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #a5d6a7;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Biology in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Surgeons and doctors work at different levels: a blood test checks cells, a biopsy checks tissue, an organ transplant replaces an organ.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Plant tissues such as xylem and phloem move water and sugar through trees, helping forests store carbon and cycle water.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Tissue engineers grow skin and cartilage in labs for burn victims and joint repairs, using knowledge of cell specialization.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Is blood a cell, a tissue or an organ?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Similar cells working together.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A tissue — it is connective tissue made of cells in plasma.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Name the organ system that includes the heart and blood vessels.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It moves blood.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The circulatory system.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is a stem cell?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of differentiation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An unspecialized cell that can become different cell types.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Create a five-level organization chart for the digestive system, from a stomach cell to a whole human.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Card sort: partners sort cards (neuron, brain, nervous tissue, nervous system, human) into the correct order and explain each step.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Each group researches one human organ system and presents its organs, tissues and functions to the class.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore an online interactive human-body model. Choose one organ and list the tissues it contains.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> List the levels of organization in order.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cell, tissue, organ, organ system, organism.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name the four animal tissue types.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Epithelial, connective, muscle and nervous.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain the difference between a tissue and an organ.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A tissue is a group of similar cells; an organ is made of different tissues working together.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Give one plant organ and its function.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Leaf — photosynthesis; root — absorbing water; stem — support and transport.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #a5d6a7;">
    <p style="margin:0 0 6px 0;color:#a5d6a7;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why all body cells have the same DNA but different functions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">During differentiation, different genes are switched on or off, so cells make different proteins and develop different structures.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why are stem cells important in medical research?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They can become many cell types, so they may be used to repair or replace damaged tissues.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> HS-LS1-2: Develop a model showing how cells, tissues and organs are organized in the respiratory system.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cells (lung epithelial cells) form tissues (epithelial lining, smooth muscle), which form organs (lungs, trachea), which form the respiratory system.</div>
    </details>
    </div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Multicellular organisms are organized into levels: cells, tissues, organs, organ systems and the organism. Cells become specialized through differentiation, and their structures match their functions. Animals have four main tissue types: epithelial, connective, muscle and nervous.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cell → tissue → organ → organ system → organism.</li>
    <li>Four tissues: epithelial, connective, muscle, nervous.</li>
    <li>Differentiation creates specialized cells.</li>
    <li>Structure fits function.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Blood is a connective tissue.</li>
    <li>An organ contains several tissues.</li>
    <li>Each level has emergent properties.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing organ and organism.</li>
    <li>Calling blood an organ.</li>
    <li>Thinking specialized cells have different DNA.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the “building” analogy: bricks, walls, rooms, floors, building.</li>
    <li>Link each specialized cell to its job.</li>
    <li>Learn plant examples too.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give an example at each level.</li>
    <li>Explain one structure–function link in detail.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a levels-of-organization model.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Systems and system models.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining specialization.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for the human body</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Teamwork</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Biotechnology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every medical specialty — from cardiology to dermatology — focuses on particular tissues, organs or systems.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw a levels-of-organization chart for a plant.</li>
    <li>Research one use of stem cells in medicine.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How is my body like a team?</li>
    <li>Which level of organization do I find most interesting?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tissue</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Similar cells working together.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Organ</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different tissues working together.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Organ system</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organs working together.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Differentiation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cells becoming specialized.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain cell specialization.</p>
    <p style="margin:6px 0;">☐ I can name the four tissue types.</p>
    <p style="margin:6px 0;">☐ I can order the levels of organization.</p>
    <p style="margin:6px 0;">☐ I can give plant and animal examples.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which list is in order from simplest to most complex?',
            options: ['Tissue, cell, organ, organism, organ system', 'Cell, tissue, organ, organ system, organism', 'Organ, cell, tissue, organ system, organism', 'Cell, organ, tissue, organism, organ system'],
            correct: 1,
            explanation: 'Each level is built from the one before.'
        },
        {
            question: 'A group of similar cells working together is a(n):',
            options: ['Organ', 'Tissue', 'Organ system', 'Organism'],
            correct: 1,
            explanation: 'Tissues are made of similar cells.'
        },
        {
            question: 'The heart is an example of a(n):',
            options: ['Tissue', 'Cell', 'Organ', 'Organism'],
            correct: 2,
            explanation: 'The answer is Organ. It contains several tissues.'
        },
        {
            question: 'Which tissue type contracts to cause movement?',
            options: ['Muscle', 'Epithelial', 'Connective', 'Nervous'],
            correct: 0,
            explanation: 'The answer is Muscle. Muscle tissue contracts.'
        },
        {
            question: 'Blood is classified as:',
            options: ['Epithelial tissue', 'An organ', 'Connective tissue', 'An organ system'],
            correct: 2,
            explanation: 'The answer is Connective tissue. Blood is a connective tissue.'
        },
        {
            question: 'The process by which cells become specialized is:',
            options: ['Diffusion', 'Osmosis', 'Respiration', 'Differentiation'],
            correct: 3,
            explanation: 'Differentiation creates specialized cells.'
        },
        {
            question: 'Why do root hair cells have long extensions?',
            options: ['To carry nerve signals', 'To store fat', 'To make proteins', 'To increase surface area for absorbing water'],
            correct: 3,
            explanation: 'More surface area means more absorption.'
        },
        {
            question: 'Which is a plant organ?',
            options: ['Xylem', 'Guard cell', 'Chloroplast', 'Leaf'],
            correct: 3,
            explanation: 'Leaves are made of several tissues.'
        },
        {
            question: 'All the cells in your body have:',
            options: ['Different DNA', 'The same DNA', 'No DNA', 'DNA only in muscle cells'],
            correct: 1,
            explanation: 'Differences come from which genes are active.'
        },
        {
            question: 'An ability that appears only at a higher level of organization is called a(n):',
            options: ['Emergent property', 'Organelle', 'Stimulus', 'Gradient'],
            correct: 0,
            explanation: 'A heart can pump; a single cell cannot.'
        }
    ]
},
{
    name: '1.2.2 Interacting Body Systems',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Systems in Balance</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Interacting Body Systems</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the main human organ systems and their functions, and explain how two or more systems interact to carry out functions such as delivering oxygen, digesting food and moving.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> No organ system works alone. Understanding how systems interact explains how exercise, diet and illness affect the whole body.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Exercise and fitness</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍎 Nutrition</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Medical diagnosis</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚑 First aid</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧘 Stress and health</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🫁 Air quality and breathing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the levels of organization in multicellular organisms. (HS-LS1-2)</li>
    <li>Explain how body systems interact to carry out functions. (HS-LS1-2)</li>
    <li>Model negative and positive feedback mechanisms that affect homeostasis. (HS-LS1-3)</li>
    <li>Plan and conduct an investigation of how the body responds to change. (HS-LS1-3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify the main human organ systems and their functions.</li>
    <li>Explain how the respiratory and circulatory systems interact.</li>
    <li>Explain how the nervous, muscular and skeletal systems interact to produce movement.</li>
    <li>Model the interactions of systems during a specific activity.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do body systems depend on one another?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you learned that organs form organ systems. Now you will see how those systems work together.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Imagine you start running to catch a bus. Your brain sends signals through nerves to your leg muscles (<strong>nervous system</strong>). Muscles pull on bones to move you (<strong>muscular and skeletal systems</strong>). You breathe faster to take in more oxygen (<strong>respiratory system</strong>), and your heart pumps faster to deliver it (<strong>circulatory system</strong>). All of this happens in seconds — because your systems interact.</p>
    <p>Standard HS-LS1-2 asks you to model these interactions: to show how the parts of one system connect to the parts of another to keep the organism alive.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Body systems are like departments in a company: each has its own job, but none can succeed alone.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The human body is usually described as having eleven organ systems. They are linked by the blood, which carries oxygen, nutrients, hormones and wastes, and by the nervous and endocrine systems, which send signals that coordinate activities.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its word parts. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">circulatory system</strong>
    </p>
    <p style="margin:6px 0;">The heart, blood and blood vessels that transport materials around the body.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> circulate = move in a circle</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Blood carries oxygen to muscles.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">respiratory system</strong>
    </p>
    <p style="margin:6px 0;">The organs that exchange oxygen and carbon dioxide with the air.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> respire = breathe</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Gas exchange happens in the alveoli.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">alveoli</strong>
    </p>
    <p style="margin:6px 0;">Tiny air sacs in the lungs where gas exchange occurs.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> singular: alveolus</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Oxygen diffuses from alveoli into capillaries.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">capillary</strong>
    </p>
    <p style="margin:6px 0;">The smallest blood vessel, where materials pass between blood and cells.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> Latin = hair-like</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Capillary walls are one cell thick.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">endocrine system</strong>
    </p>
    <p style="margin:6px 0;">Glands that release hormones into the blood.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> endo- = within; crine = secrete</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The pancreas releases insulin.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">hormone</strong>
    </p>
    <p style="margin:6px 0;">A chemical messenger carried in the blood.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Adrenaline prepares the body for action.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Human Organ Systems</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">System</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Main organs</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Main function</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Circulatory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heart, blood vessels, blood</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transports oxygen, nutrients, hormones and wastes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respiratory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nose, trachea, lungs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exchanges oxygen and carbon dioxide</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digestive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mouth, stomach, intestines, liver</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Breaks down food and absorbs nutrients</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excretory (urinary)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kidneys, bladder</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Removes wastes from the blood</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nervous</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brain, spinal cord, nerves</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detects and responds to stimuli; coordinates the body</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Endocrine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pancreas, thyroid, adrenal glands</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Releases hormones that regulate the body</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscular</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skeletal, smooth and cardiac muscles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Produces movement</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skeletal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bones, cartilage, joints</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supports, protects and allows movement; makes blood cells</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Immune and lymphatic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">White blood cells, lymph nodes, spleen</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Defends against disease</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integumentary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skin, hair, nails</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protects the body and helps control temperature</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reproductive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reproductive organs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Produces offspring</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Systems Working Together</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Systems involved</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How they interact</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Delivering oxygen</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respiratory + circulatory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lungs take in oxygen; it diffuses into capillaries, and blood carries it to every cell.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Getting energy from food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digestive + circulatory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nutrients absorbed in the small intestine enter the blood and are carried to cells.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Removing wastes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excretory + circulatory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kidneys filter wastes such as urea from the blood.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nervous + muscular + skeletal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nerves signal muscles, which contract and pull on bones at joints.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Responding to danger</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nervous + endocrine + circulatory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The brain triggers adrenaline release, which raises heart rate and blood flow to muscles.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Modeling an interaction (HS-LS1-2)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Trace the path of an oxygen molecule from the air to a leg muscle cell, naming the systems involved.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Respiratory system</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Air enters the nose and travels down the trachea to the alveoli in the lungs.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Diffusion</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Oxygen diffuses from the alveoli into the surrounding capillaries.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Circulatory system</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Blood carries the oxygen to the heart, which pumps it through arteries to the leg.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Diffusion again</strong>
    </p>
    <div style="margin:6px 0 0 34px;">In the capillaries of the leg, oxygen diffuses into the muscle cell.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Cell level</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Mitochondria use the oxygen in cellular respiration to release energy.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Air → trachea → alveoli → capillaries → heart → arteries → capillaries in the leg → muscle cell → mitochondria.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> This model links organelles, cells, organs and systems — every level of organization.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. When One System Fails</h3>
    <p>Because systems depend on each other, a problem in one can affect many others. Asthma narrows the airways (respiratory), so less oxygen reaches the blood (circulatory), and muscles tire quickly (muscular).</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Smoking damages the alveoli, reducing the surface area for gas exchange. The heart must work harder to deliver enough oxygen, which over time can strain the circulatory system.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which two systems work together to deliver oxygen to cells?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The respiratory and circulatory systems.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which system releases hormones?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The endocrine system.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which three systems work together to move your arm?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The nervous, muscular and skeletal systems.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles and follow your teacher’s instructions whenever you handle lab materials.</li>
    <li>Never eat, drink or taste anything in the lab, and wash your hands after every activity.</li>
    <li>Handle microscopes, glass slides and cover slips carefully; report any breakage to your teacher at once.</li>
    <li>Respect living organisms: handle plants and animals gently and return or dispose of them as instructed.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Developing system models</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Explaining interactions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Crosscutting concept: systems</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tracing pathways</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cause and effect reasoning</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Systems interact through shared structures. The capillaries are where the respiratory, digestive and excretory systems all connect with the circulatory system. Their walls are one cell thick, so substances can diffuse quickly — another example of structure fitting function.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might a person with kidney disease also have problems with blood pressure?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #a5d6a7;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Biology in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Regular exercise strengthens both the heart (circulatory) and breathing muscles (respiratory), so they deliver oxygen more efficiently.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Air pollution affects the respiratory system first, but long-term exposure is also linked to heart disease — showing how systems are connected.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Paramedics, physical therapists, athletic trainers and doctors all need to understand how body systems interact.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which system breaks down food?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Stomach and intestines.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The digestive system.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Where does gas exchange happen in the lungs?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Tiny air sacs.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">In the alveoli.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How do nutrients reach your cells after digestion?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of the small intestine.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They are absorbed into the blood and carried by the circulatory system.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw a concept map linking at least five organ systems, labeling each connection with what is exchanged.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Choose an activity (eating lunch, playing soccer, sleeping). Partners list every system involved and how they interact.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Act it out: each student represents an organ system. Pass a ball of yarn to the system you interact with, building a “body web.”</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online body-systems simulation or video to trace the path of a nutrient molecule from food to a cell.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the organs of the respiratory system.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Nose, trachea, bronchi and lungs (with alveoli).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is the function of the excretory system?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To remove wastes from the blood.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how the digestive and circulatory systems interact.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The digestive system breaks food into nutrients that are absorbed into the blood; the circulatory system carries them to cells.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What is a hormone?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A chemical messenger carried in the blood.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #a5d6a7;">
    <p style="margin:0 0 6px 0;color:#a5d6a7;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why breathing and heart rate both increase during exercise.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Muscles need more oxygen and produce more carbon dioxide; faster breathing exchanges more gases, and a faster heart delivers oxygen and removes CO₂ more quickly.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> How does asthma affect more than one system?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It narrows the airways, reducing oxygen in the blood, so muscles and other organs receive less oxygen.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> HS-LS1-2: Model how the nervous, muscular and skeletal systems interact when you kick a ball.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The brain sends a signal through nerves to leg muscles; the muscles contract and pull on the leg bones at the knee and hip joints, moving the leg.</div>
    </details>
    </div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The human body has about eleven organ systems, each with specific functions. Systems interact constantly: the respiratory and circulatory systems deliver oxygen, the digestive and circulatory systems deliver nutrients, and the nervous, muscular and skeletal systems produce movement. A problem in one system often affects others.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respiratory + circulatory = oxygen delivery.</li>
    <li>Digestive + circulatory = nutrient delivery.</li>
    <li>Nervous + muscular + skeletal = movement.</li>
    <li>Endocrine hormones travel in the blood.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Capillaries connect many systems.</li>
    <li>Gas exchange happens by diffusion.</li>
    <li>Systems depend on each other.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking systems work independently.</li>
    <li>Confusing hormones with nerve signals.</li>
    <li>Forgetting the cell level in pathways.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Trace molecules step by step.</li>
    <li>Draw concept maps.</li>
    <li>Connect to your own activities.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name at least two systems in every interaction answer.</li>
    <li>Explain what is exchanged and where.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Systems and system models.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tracing pathways through the body.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining cause and effect.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health awareness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Teamwork</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and fitness</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Air quality</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Healthy habits — exercise, good food and avoiding smoking — protect several systems at once.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Trace the path of a glucose molecule from a meal to a muscle cell.</li>
    <li>Research how one disease affects more than one body system.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which of my daily habits help my body systems work together?</li>
    <li>Which system interaction surprised me most?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Organ system</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organs working together.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Alveoli</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Air sacs in the lungs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Capillary</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tiny blood vessel.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hormone</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemical messenger in the blood.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can name the main organ systems.</p>
    <p style="margin:6px 0;">☐ I can explain respiratory–circulatory interaction.</p>
    <p style="margin:6px 0;">☐ I can explain how movement happens.</p>
    <p style="margin:6px 0;">☐ I can model system interactions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which system transports oxygen and nutrients?',
            options: ['Digestive', 'Circulatory', 'Skeletal', 'Integumentary'],
            correct: 1,
            explanation: 'Blood carries materials around the body.'
        },
        {
            question: 'Gas exchange in the lungs takes place in the:',
            options: ['Trachea', 'Stomach', 'Kidneys', 'Alveoli'],
            correct: 3,
            explanation: 'The answer is Alveoli. Alveoli are tiny air sacs.'
        },
        {
            question: 'Which systems work together to deliver oxygen to cells?',
            options: ['Digestive and skeletal', 'Nervous and reproductive', 'Excretory and integumentary', 'Respiratory and circulatory'],
            correct: 3,
            explanation: 'Lungs and blood work together.'
        },
        {
            question: 'Which system removes wastes such as urea from the blood?',
            options: ['Excretory', 'Respiratory', 'Muscular', 'Endocrine'],
            correct: 0,
            explanation: 'The answer is Excretory. The kidneys filter the blood.'
        },
        {
            question: 'Hormones are released by the:',
            options: ['Endocrine system', 'Skeletal system', 'Digestive system only', 'Integumentary system'],
            correct: 0,
            explanation: 'Endocrine glands release hormones.'
        },
        {
            question: 'Moving your arm requires the nervous, skeletal and:',
            options: ['Digestive systems', 'Excretory systems', 'Muscular systems', 'Reproductive systems'],
            correct: 2,
            explanation: 'Muscles pull on bones when nerves signal them.'
        },
        {
            question: 'Nutrients from digested food enter the blood mainly in the:',
            options: ['Stomach', 'Small intestine', 'Lungs', 'Kidneys'],
            correct: 1,
            explanation: 'The small intestine absorbs nutrients.'
        },
        {
            question: 'Why do capillaries have walls only one cell thick?',
            options: ['To make blood thicker', 'To store fat', 'So substances can diffuse quickly', 'To produce hormones'],
            correct: 2,
            explanation: 'Thin walls allow fast exchange.'
        },
        {
            question: 'Smoking damages alveoli. This affects the respiratory system and also the:',
            options: ['Skeletal system only', 'Circulatory system', 'Reproductive system only', 'No other systems'],
            correct: 1,
            explanation: 'Less oxygen in the blood makes the heart work harder.'
        },
        {
            question: 'Which system helps control body temperature through sweating?',
            options: ['Integumentary', 'Skeletal', 'Digestive', 'Reproductive'],
            correct: 0,
            explanation: 'The answer is Integumentary. Skin contains sweat glands.'
        }
    ]
},
{
    name: '1.2.3 Homeostasis and Feedback Loops',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Systems in Balance</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Homeostasis and Feedback Loops</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how organisms maintain stable internal conditions, how negative and positive feedback loops work, and how the body regulates temperature and blood sugar.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Your body constantly adjusts to changes — heat, cold, meals and exercise. When feedback systems fail, illnesses such as diabetes can result.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Fever and body temperature</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍬 Blood sugar and diabetes</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💧 Hydration</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Exercise</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏔️ High altitude</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌵 Plants in dry climates</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the levels of organization in multicellular organisms. (HS-LS1-2)</li>
    <li>Explain how body systems interact to carry out functions. (HS-LS1-2)</li>
    <li>Model negative and positive feedback mechanisms that affect homeostasis. (HS-LS1-3)</li>
    <li>Plan and conduct an investigation of how the body responds to change. (HS-LS1-3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define homeostasis.</li>
    <li>Identify the parts of a feedback loop: stimulus, sensor, control center, effector, response.</li>
    <li>Distinguish negative from positive feedback.</li>
    <li>Explain how the body regulates temperature and blood glucose.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How does the body stay in balance when conditions change?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.2 you learned that the nervous and endocrine systems coordinate the body. They are the control centers of feedback loops.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A home thermostat keeps a room at a set temperature. When the room gets too cold, the thermostat switches the heater on; when it warms up, the heater switches off. Your body works in a similar way. Keeping internal conditions such as temperature, water and blood sugar within a narrow range is called <strong>homeostasis</strong>.</p>
    <p>Homeostasis is maintained by <strong>feedback loops</strong>. In a <strong>negative feedback</strong> loop, the response reverses the change and brings conditions back to normal. In a <strong>positive feedback</strong> loop, the response increases the change until an event is completed.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Negative feedback = “undo the change.” Positive feedback = “speed up the change until the job is done.”</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The term homeostasis comes from Greek words meaning “similar” and “standing still.” It was popularized by the American physiologist Walter Cannon in the 1920s. Most body systems use negative feedback. Normal human body temperature is about 37°C (98.6°F), and a healthy resting heart rate for adults is usually between about 60 and 100 beats per minute.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its word parts. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">homeostasis</strong>
    </p>
    <p style="margin:6px 0;">The maintenance of stable internal conditions.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> homeo- = similar; stasis = standing</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Body temperature stays near 37°C.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">stimulus</strong>
    </p>
    <p style="margin:6px 0;">A change in the environment that triggers a response.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> plural: stimuli</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A rise in body temperature.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">sensor (receptor)</strong>
    </p>
    <p style="margin:6px 0;">A structure that detects a change.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Temperature receptors in the skin.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">effector</strong>
    </p>
    <p style="margin:6px 0;">A muscle or gland that carries out the response.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> effect = cause a result</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sweat glands release sweat.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">negative feedback</strong>
    </p>
    <p style="margin:6px 0;">A response that reverses a change, returning conditions to normal.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sweating lowers body temperature.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #a5d6a7;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">positive feedback</strong>
    </p>
    <p style="margin:6px 0;">A response that increases a change until an event is completed.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🧩 Word parts:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Contractions during childbirth.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Parts of a Feedback Loop</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 340" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">A Negative Feedback Loop: Cooling the Body</text><rect x="255" y="40" width="190" height="60" rx="12" fill="#10233d" stroke="#fca5a5" stroke-width="2"/><text x="350" y="64" fill="#fca5a5" font-size="14" font-weight="bold" text-anchor="middle">Stimulus</text><text x="350" y="84" fill="#cbd5e1" font-size="12" text-anchor="middle">body temperature rises</text><rect x="495" y="130" width="190" height="60" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="590" y="154" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Sensor</text><text x="590" y="174" fill="#cbd5e1" font-size="12" text-anchor="middle">skin and brain receptors</text><rect x="255" y="220" width="190" height="60" rx="12" fill="#10233d" stroke="#c4b5fd" stroke-width="2"/><text x="350" y="244" fill="#c4b5fd" font-size="14" font-weight="bold" text-anchor="middle">Control center</text><text x="350" y="264" fill="#cbd5e1" font-size="12" text-anchor="middle">hypothalamus (brain)</text><rect x="15" y="130" width="190" height="60" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="110" y="154" fill="#67e8f9" font-size="14" font-weight="bold" text-anchor="middle">Effector</text><text x="110" y="174" fill="#cbd5e1" font-size="12" text-anchor="middle">sweat glands, blood vessels</text><line x1="445" y1="86" x2="530.9" y2="124.0" stroke="#94a3b8" stroke-width="2"/><polygon points="540,128 528.8,128.5 532.9,119.4" fill="#94a3b8"/><line x1="540" y1="192" x2="454.2" y2="228.1" stroke="#94a3b8" stroke-width="2"/><polygon points="445,232 452.3,223.5 456.2,232.7" fill="#94a3b8"/><line x1="255" y1="232" x2="169.2" y2="195.9" stroke="#94a3b8" stroke-width="2"/><polygon points="160,192 171.2,191.3 167.3,200.5" fill="#94a3b8"/><line x1="160" y1="128" x2="245.9" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="255,86 247.9,94.6 243.8,85.5" fill="#94a3b8"/><text x="148" y="84" fill="#86efac" font-size="12" text-anchor="end">response: sweating</text><text x="148" y="100" fill="#86efac" font-size="12" text-anchor="end">lowers temperature</text><text x="350" y="318" fill="#86efac" font-size="13" text-anchor="middle">The response reverses the stimulus, bringing temperature back toward about 37°C (98.6°F).</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Part</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Role</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example: overheating</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stimulus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A change from normal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Body temperature rises during exercise</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sensor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detects the change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Temperature receptors in the skin and brain</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Control center</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compares with the set point and sends signals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The hypothalamus in the brain</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Effector</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carries out the response</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweat glands; blood vessels in the skin widen</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Response</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reverses the change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweat evaporates and cools the skin; temperature falls</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Regulating Temperature and Blood Sugar</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Condition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Too high → response</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Too low → response</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Body temperature</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sweating; blood vessels near the skin widen to release heat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shivering; blood vessels near the skin narrow to keep heat in</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Blood glucose</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pancreas releases insulin; cells take in glucose and the liver stores it as glycogen</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pancreas releases glucagon; the liver releases stored glucose</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water balance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kidneys produce more, diluted urine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thirst increases; kidneys conserve water</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Blood glucose after a meal (HS-LS1-3)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Describe the feedback loop that controls blood glucose after a meal.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Stimulus</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Blood glucose rises after digestion.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Sensor and control center</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Cells in the pancreas detect the rise.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Effector</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The pancreas releases insulin into the blood.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Response</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Body cells take in glucose and the liver stores it as glycogen.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Result</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Blood glucose falls back toward normal, so insulin release slows.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> A negative feedback loop: high glucose → insulin → glucose taken up and stored → glucose returns to normal.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The response reverses the stimulus, which is the definition of negative feedback.</p>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>In type 1 diabetes, the pancreas makes little or no insulin. In type 2 diabetes, cells do not respond well to insulin. In both cases, blood glucose stays too high, so the feedback loop must be supported with medicine, diet and exercise.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Positive Feedback and Homeostasis in Plants</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it works</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it ends</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Childbirth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contractions push the baby, which triggers release of the hormone oxytocin, causing stronger contractions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The baby is born and the stimulus stops</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Blood clotting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Platelets at a wound release chemicals that attract more platelets</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The wound is sealed</td>
    </tr>
    </table>
    </div>
    <p>Plants maintain homeostasis too. When water is scarce, guard cells close the stomata on leaves to reduce water loss; when water is plentiful, they open to let in carbon dioxide for photosynthesis.</p>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is shivering an example of negative or positive feedback?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Negative — it produces heat to raise a body temperature that has fallen.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which hormone lowers blood glucose?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Insulin.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give one example of positive feedback.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Childbirth contractions or blood clotting.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles and follow your teacher’s instructions whenever you handle lab materials.</li>
    <li>Never eat, drink or taste anything in the lab, and wash your hands after every activity.</li>
    <li>Handle microscopes, glass slides and cover slips carefully; report any breakage to your teacher at once.</li>
    <li>Respect living organisms: handle plants and animals gently and return or dispose of them as instructed.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Modeling feedback loops</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 3 Planning investigations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Constructing explanations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Crosscutting concept: stability and change</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cause and effect reasoning</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Feedback loops explain why body conditions fluctuate slightly around a set point instead of staying perfectly constant. Body temperature might rise a little during exercise and fall a little at night, but negative feedback keeps it within a safe range. When a loop fails — as in diabetes or heatstroke — conditions can move outside that range and become dangerous.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>A fever raises the body’s temperature set point. Why might this help the body fight infection?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #a5d6a7;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Biology in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> People with diabetes use glucose monitors and insulin to replace or support the body’s natural blood-sugar feedback loop.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Desert animals and plants have special adaptations for maintaining water balance in very dry conditions.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Doctors, nurses, endocrinologists, athletic trainers and engineers who design medical devices all work with feedback systems.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is the control center for body temperature?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Part of the nervous system.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The hypothalamus in the brain.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which hormone raises blood glucose?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Opposite of insulin.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Glucagon.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> In a negative feedback loop, the response:</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of a thermostat.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Reverses the change.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw a feedback loop for the body’s response to cold, labeling all five parts.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Partners compare a home thermostat with body temperature control, matching each part of the thermostat to a body part.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a comic strip showing a character’s blood glucose rising after a meal and falling during exercise, with the hormones as characters.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research a continuous glucose monitor online. Explain how it helps people with diabetes manage their feedback loop.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define homeostasis.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The maintenance of stable internal conditions.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name the five parts of a feedback loop.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Stimulus, sensor, control center, effector, response.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how the body responds to being too cold.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The hypothalamus triggers shivering to produce heat and narrows blood vessels near the skin to reduce heat loss.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What is the difference between negative and positive feedback?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Negative feedback reverses a change; positive feedback increases it until an event is complete.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #a5d6a7;">
    <p style="margin:0 0 6px 0;color:#a5d6a7;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why blood glucose stays high in a person with type 1 diabetes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The pancreas makes little or no insulin, so cells cannot take in glucose from the blood and the negative feedback loop cannot lower it.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why should athletes drink water during long events in hot weather?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They lose water through sweating to cool down; drinking replaces lost water and helps maintain water balance.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> HS-LS1-3: Describe a model of the feedback loop that keeps body temperature stable during exercise.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Rising temperature (stimulus) is detected by receptors (sensor); the hypothalamus (control center) signals sweat glands and skin blood vessels (effectors); sweating and heat release (response) lower temperature back toward the set point.</div>
    </details>
    </div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Homeostasis is the maintenance of stable internal conditions. It depends on feedback loops with a stimulus, sensor, control center, effector and response. Negative feedback reverses changes, as in temperature and blood-glucose control. Positive feedback amplifies a change until an event, such as childbirth or clotting, is complete.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Stimulus → sensor → control center → effector → response.</li>
    <li>Negative feedback reverses change.</li>
    <li>Positive feedback amplifies change.</li>
    <li>Insulin lowers glucose; glucagon raises it.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Most body systems use negative feedback.</li>
    <li>The hypothalamus controls temperature.</li>
    <li>Conditions fluctuate around a set point.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking negative feedback is “bad.”</li>
    <li>Mixing up insulin and glucagon.</li>
    <li>Forgetting the effector in a loop.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Compare loops to a thermostat.</li>
    <li>Draw loops as circles with arrows.</li>
    <li>Learn one example of each type well.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Label every part of a feedback loop.</li>
    <li>State whether the loop is negative or positive and why.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Skills, Habits and Connections</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill or practice</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing feedback loops.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stability and change.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining how loops maintain balance.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health awareness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and wellness</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Nutrition and diabetes awareness</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Drinking water, eating balanced meals and dressing for the weather all help your body’s feedback loops do their job.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw feedback loops for blood glucose high and low.</li>
    <li>Research and explain one example of homeostasis in a non-human animal.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When have I felt my body responding to keep itself in balance?</li>
    <li>How can my habits support homeostasis?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Homeostasis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stable internal conditions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Negative feedback</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reverses a change.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Positive feedback</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amplifies a change.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Effector</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscle or gland that responds.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can define homeostasis.</p>
    <p style="margin:6px 0;">☐ I can label a feedback loop.</p>
    <p style="margin:6px 0;">☐ I can tell negative from positive feedback.</p>
    <p style="margin:6px 0;">☐ I can explain temperature and glucose control.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Homeostasis is:',
            options: ['Growing larger', 'Changing body temperature to match the air', 'Maintaining stable internal conditions', 'Reproducing quickly'],
            correct: 2,
            explanation: 'Homeostasis keeps conditions in a narrow range.'
        },
        {
            question: 'In a feedback loop, the structure that detects a change is the:',
            options: ['Effector', 'Response', 'Stimulus', 'Sensor'],
            correct: 3,
            explanation: 'Sensors (receptors) detect changes.'
        },
        {
            question: 'The control center for body temperature is the:',
            options: ['Pancreas', 'Kidney', 'Heart', 'Hypothalamus'],
            correct: 3,
            explanation: 'The hypothalamus is in the brain.'
        },
        {
            question: 'Sweating when you are hot is an example of:',
            options: ['Negative feedback', 'Positive feedback', 'Diffusion', 'Differentiation'],
            correct: 0,
            explanation: 'It reverses the rise in temperature.'
        },
        {
            question: 'Which hormone lowers blood glucose?',
            options: ['Glucagon', 'Insulin', 'Oxytocin', 'Adrenaline'],
            correct: 1,
            explanation: 'Insulin helps cells take in glucose.'
        },
        {
            question: 'When blood glucose is low, the pancreas releases:',
            options: ['Glucagon', 'Insulin', 'Oxytocin', 'Sweat'],
            correct: 0,
            explanation: 'Glucagon causes the liver to release glucose.'
        },
        {
            question: 'Which is an example of positive feedback?',
            options: ['Shivering when cold', 'Contractions during childbirth', 'Sweating when hot', 'Insulin release after a meal'],
            correct: 1,
            explanation: 'Each contraction triggers a stronger one.'
        },
        {
            question: 'Normal human body temperature is about:',
            options: ['30°C (86°F)', '42°C (107.6°F)', '25°C (77°F)', '37°C (98.6°F)'],
            correct: 3,
            explanation: 'The answer is 37°C (98.6°F). About 37°C.'
        },
        {
            question: 'Shivering helps the body by:',
            options: ['Producing heat', 'Releasing sweat', 'Lowering blood glucose', 'Removing wastes'],
            correct: 0,
            explanation: 'Muscle contractions release heat.'
        },
        {
            question: 'Plants reduce water loss in dry conditions by:',
            options: ['Opening their stomata wider', 'Closing their stomata', 'Growing more leaves immediately', 'Releasing insulin'],
            correct: 1,
            explanation: 'Guard cells close the stomata.'
        }
    ]
},
{
    name: '1.2 Lab: Exercise, Heart Rate and Homeostasis',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lab</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Lab: Exercise, Heart Rate and Homeostasis</h2>
    <p style="font-size:16px;">In this lab you will plan and carry out an investigation to measure how heart rate changes during and after exercise, and use your data as evidence that feedback mechanisms maintain homeostasis (HS-LS1-3).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Lab Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Health</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anyone with a heart, breathing or other health condition, or who feels unwell, should take the role of timer or recorder instead of exercising.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Effort</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exercise at a comfortable, moderate level. Stop immediately if you feel dizzy, faint or short of breath, and tell your teacher.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Space</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear the area of bags and chairs to avoid trips and falls.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Privacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heart-rate data is personal: share only class averages, not individual names.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Lab Investigation: Heart Rate Before and After Exercise</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To investigate how heart rate responds to exercise and how quickly it returns to the resting rate.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatch or timer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data table</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Open space for exercise</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Optional: heart-rate monitor or fitness tracker</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Warm up gently first.</li>
    <li>Exercise at a moderate pace only.</li>
    <li>Stop if you feel unwell and sit down.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a hypothesis: “If… then… because…”.</li>
    <li>Sit quietly for 2 minutes. Find your pulse at the wrist or the side of the neck using two fingers (not your thumb).</li>
    <li>Count the beats for 15 seconds and multiply by 4 to get beats per minute. Repeat twice and calculate the mean resting rate.</li>
    <li>Do 1 minute of moderate exercise, such as marching or jumping jacks.</li>
    <li>Immediately measure your heart rate (15 seconds × 4).</li>
    <li>Sit down and measure your heart rate again 1, 2 and 3 minutes after exercise.</li>
    <li>Record your results, combine them into class averages, and draw a line graph of heart rate against time.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Heart rate (beats per minute)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Class mean (beats per minute)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Resting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right after exercise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 minute after</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 minutes after</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 minutes after</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 340" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Sample Data: Heart Rate Before and After Exercise</text><line x1="80" y1="290" x2="660" y2="290" stroke="#64748b" stroke-width="2"/><line x1="80" y1="290" x2="80" y2="50" stroke="#64748b" stroke-width="2"/><text x="70" y="294" fill="#94a3b8" font-size="12" text-anchor="end">40</text><line x1="80" y1="290" x2="660" y2="290" stroke="#1e293b" stroke-width="1"/><text x="70" y="250" fill="#94a3b8" font-size="12" text-anchor="end">60</text><line x1="80" y1="246" x2="660" y2="246" stroke="#1e293b" stroke-width="1"/><text x="70" y="206" fill="#94a3b8" font-size="12" text-anchor="end">80</text><line x1="80" y1="202" x2="660" y2="202" stroke="#1e293b" stroke-width="1"/><text x="70" y="162" fill="#94a3b8" font-size="12" text-anchor="end">100</text><line x1="80" y1="158" x2="660" y2="158" stroke="#1e293b" stroke-width="1"/><text x="70" y="118" fill="#94a3b8" font-size="12" text-anchor="end">120</text><line x1="80" y1="114" x2="660" y2="114" stroke="#1e293b" stroke-width="1"/><text x="70" y="73.99999999999997" fill="#94a3b8" font-size="12" text-anchor="end">140</text><line x1="80" y1="69.99999999999997" x2="660" y2="69.99999999999997" stroke="#1e293b" stroke-width="1"/><text x="30" y="170" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90 30 170)">heart rate (beats per minute)</text><polyline points="120,219.6 240,105.19999999999999 360,155.79999999999998 480,188.8 600,210.8" fill="none" stroke="#a5d6a7" stroke-width="3"/><circle cx="120" cy="219.6" r="6" fill="#fde68a"/><text x="120" y="207.6" fill="#e2e8f0" font-size="12" text-anchor="middle">72</text><text x="120" y="310" fill="#94a3b8" font-size="12" text-anchor="middle">Rest</text><circle cx="240" cy="105.19999999999999" r="6" fill="#fde68a"/><text x="240" y="93.19999999999999" fill="#e2e8f0" font-size="12" text-anchor="middle">124</text><text x="240" y="310" fill="#94a3b8" font-size="12" text-anchor="middle">After 1 min</text><circle cx="360" cy="155.79999999999998" r="6" fill="#fde68a"/><text x="360" y="143.79999999999998" fill="#e2e8f0" font-size="12" text-anchor="middle">101</text><text x="360" y="310" fill="#94a3b8" font-size="12" text-anchor="middle">+1 min</text><circle cx="480" cy="188.8" r="6" fill="#fde68a"/><text x="480" y="176.8" fill="#e2e8f0" font-size="12" text-anchor="middle">86</text><text x="480" y="310" fill="#94a3b8" font-size="12" text-anchor="middle">+2 min</text><circle cx="600" cy="210.8" r="6" fill="#fde68a"/><text x="600" y="198.8" fill="#e2e8f0" font-size="12" text-anchor="middle">76</text><text x="600" y="310" fill="#94a3b8" font-size="12" text-anchor="middle">+3 min</text><text x="370" y="332" fill="#cbd5e1" font-size="12" text-anchor="middle">Exercise raises heart rate; during recovery it returns toward the resting rate.</text>
    </svg>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why did heart rate increase during exercise?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Muscles needed more oxygen and glucose for cellular respiration and produced more carbon dioxide, so the heart beat faster to deliver and remove these materials.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why did heart rate decrease after exercise?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">As the demand for oxygen fell, negative feedback signaled the heart to slow down, returning the rate toward the resting set point.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> How is this evidence of homeostasis?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The body responded to a change (exercise) and then returned to its normal state, which shows a feedback mechanism maintaining stable conditions.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Heart rate rises during exercise to meet the body’s increased needs and returns toward the resting rate afterward, providing evidence that feedback mechanisms maintain homeostasis.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Sensors detect rising carbon dioxide and other changes in the blood. The brain (control center) signals the heart (effector) to beat faster. When the stimulus is removed, the heart slows again — a negative feedback loop.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Counting the pulse with the thumb, which has its own pulse.</li>
    <li>Waiting too long before measuring after exercise.</li>
    <li>Different students exercising at different intensities.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Fitness trainers use recovery heart rate — how quickly heart rate falls after exercise — as one measure of cardiovascular fitness.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Use the class mean data to draw your graph. Describe the pattern, calculate the increase from resting to right after exercise, and estimate how long recovery took. In the sample data, heart rate rose from 72 to 124 beats per minute, an increase of 52, and returned close to resting within about 3 minutes.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Using class means rather than single results reduces the effect of individual differences and random error.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Lab Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Identify the independent and dependent variables.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Independent: time and exercise (before or after). Dependent: heart rate.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Using the sample data, calculate the increase in heart rate.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">124 − 72 = 52 beats per minute.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Name the type of feedback that brings heart rate back down.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Negative feedback.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should all students exercise at the same intensity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To control the variable, so differences in heart rate are due to the factor being tested and not to different effort.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why do we count for 15 seconds and multiply by 4?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It gives beats per minute quickly, before heart rate changes much; counting for longer would be less accurate right after exercise.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Your Lab Report</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Title and research question</li>
    <li>Hypothesis (an “if… then… because…” statement)</li>
    <li>Materials and procedure</li>
    <li>Data: tables, drawings or graphs with units</li>
    <li>Analysis: what patterns does the data show?</li>
    <li>Conclusion: was your hypothesis supported? Use evidence.</li>
    <li>Sources of error and how to improve the investigation</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The dependent variable in this lab is:',
            options: ['Time', 'Type of exercise', 'Heart rate', 'Room temperature'],
            correct: 2,
            explanation: 'The answer is Heart rate. Heart rate is measured.'
        },
        {
            question: 'Why should you not use your thumb to take a pulse?',
            options: ['It is too short', 'The thumb has its own pulse', 'It is too cold', 'It moves too fast'],
            correct: 1,
            explanation: 'You might count your own thumb’s pulse.'
        },
        {
            question: 'A count of 20 beats in 15 seconds is:',
            options: ['20 beats per minute', '35 beats per minute', '80 beats per minute', '300 beats per minute'],
            correct: 2,
            explanation: 'The answer is 80 beats per minute. 20 × 4 = 80.'
        },
        {
            question: 'Heart rate returning to normal after exercise is evidence of:',
            options: ['Negative feedback', 'Positive feedback', 'Diffusion', 'Differentiation'],
            correct: 0,
            explanation: 'The answer is Negative feedback. The change is reversed.'
        },
        {
            question: 'Why use class means?',
            options: ['To reduce the effect of individual differences', 'To make the graph look nicer', 'To hide data', 'Because individual data is wrong'],
            correct: 0,
            explanation: 'Means make results more reliable.'
        },
        {
            question: 'A student feels dizzy during exercise. They should:',
            options: ['Keep going faster', 'Stop, sit down and tell the teacher', 'Ignore it', 'Leave the room alone'],
            correct: 1,
            explanation: 'The answer is Stop, sit down and tell the teacher. Safety comes first.'
        }
    ]
},
{
    name: '1.2 Quiz: Organization and Homeostasis',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Organization and Homeostasis</h2>
    <p style="font-size:16px;">Test your understanding of levels of organization, body systems and feedback loops from Topic 1.2.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 10 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 25 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Levels of organization and cell specialization</li>
    <li>Animal tissue types</li>
    <li>Human organ systems and their interactions</li>
    <li>Parts of a feedback loop</li>
    <li>Negative and positive feedback</li>
    <li>Temperature and blood-glucose regulation</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Mastery Levels</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Score</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do next</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">90% – 100%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Advanced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Excellent. Move on to the assignment.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80% – 89%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Good. Review the few areas you missed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">65% – 79%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study the review page, then try again.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below 65%</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the three lessons and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #1e88e5;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bbdefb;font-weight:bold;">📝 Exam Tip</p>
    <div>For feedback questions, ask: does the response reverse the change (negative) or make it bigger (positive)?</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Cardiac muscle is an example of a(n):',
            options: ['Organ', 'Organ system', 'Organism', 'Tissue'],
            correct: 3,
            explanation: 'It is a group of similar muscle cells.'
        },
        {
            question: 'Which tissue type covers and lines body surfaces?',
            options: ['Connective', 'Muscle', 'Nervous', 'Epithelial'],
            correct: 3,
            explanation: 'Skin and gut lining are epithelial.'
        },
        {
            question: 'The heart, blood and blood vessels make up the:',
            options: ['Respiratory system', 'Circulatory system', 'Digestive system', 'Excretory system'],
            correct: 1,
            explanation: 'The answer is Circulatory system. They transport materials.'
        },
        {
            question: 'Oxygen moves from the alveoli into the blood by:',
            options: ['Diffusion', 'Active transport', 'Endocytosis', 'Exocytosis'],
            correct: 0,
            explanation: 'It moves down its concentration gradient.'
        },
        {
            question: 'Which systems produce movement together?',
            options: ['Digestive, excretory and endocrine', 'Nervous, muscular and skeletal', 'Respiratory and reproductive', 'Integumentary and immune'],
            correct: 1,
            explanation: 'Nerves signal muscles that pull on bones.'
        },
        {
            question: 'In a feedback loop, sweat glands are an example of a(n):',
            options: ['Sensor', 'Stimulus', 'Effector', 'Control center'],
            correct: 2,
            explanation: 'Effectors carry out the response.'
        },
        {
            question: 'When blood glucose rises after a meal, the pancreas releases:',
            options: ['Glucagon', 'Oxytocin', 'Insulin', 'Adrenaline'],
            correct: 2,
            explanation: 'The answer is Insulin. Insulin lowers blood glucose.'
        },
        {
            question: 'Blood clotting is an example of:',
            options: ['Negative feedback', 'Positive feedback', 'Osmosis', 'Differentiation'],
            correct: 1,
            explanation: 'Platelets attract more platelets until the wound is sealed.'
        },
        {
            question: 'When you are cold, blood vessels near the skin:',
            options: ['Widen to release heat', 'Disappear', 'Narrow to keep heat in', 'Make sweat'],
            correct: 2,
            explanation: 'The answer is Narrow to keep heat in. Narrowing reduces heat loss.'
        },
        {
            question: 'Heart rate rising during exercise and falling afterward shows:',
            options: ['Homeostasis through feedback', 'Cell division', 'Evolution', 'Photosynthesis'],
            correct: 0,
            explanation: 'The body responds and returns to normal.'
        }
    ]
},
{
    name: '1.2 Assignment: Body Systems Infographic',
    type: 'lesson',
    duration: '90 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 90 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Body Systems Infographic</h2>
    <p style="font-size:16px;">Create an infographic or poster that models how at least three body systems interact to maintain homeostasis during one real-life situation.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 90 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Task:</strong> Choose one situation — running a race, a hot summer day, eating a big meal, swimming in cold water or climbing at high altitude. Show which systems respond, how they interact, and at least one complete feedback loop that keeps the body in balance.</p>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Use at least two reliable sources, such as a textbook or a university or government health website, and list them at the bottom of your infographic.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose your situation and list the changes it causes in the body.</li>
    <li>Identify at least three body systems that respond and research how they interact.</li>
    <li>Draw a complete feedback loop with stimulus, sensor, control center, effector and response.</li>
    <li>Show the levels of organization involved for at least one system (cell to organ system).</li>
    <li>Add arrows and labels showing what is exchanged between systems.</li>
    <li>Include a short explanation (100–150 words) of how the body returns to balance.</li>
    <li>Peer review with a partner, revise and submit with your sources.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your infographic or poster (paper or digital)</li>
    <li>A complete, labeled feedback loop</li>
    <li>A 100–150-word explanation</li>
    <li>A list of at least two sources</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 Assessment Rubric</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Criterion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Exemplary (4)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Proficient (3)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Developing (2)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Beginning (1)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scientific accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All information accurate and detailed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate with minor gaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">System interactions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three or more systems with clear, specific interactions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three systems with interactions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fewer than three systems or vague links</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No interactions shown</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Feedback loop</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete loop, correctly labeled and classified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete loop with minor errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incomplete loop</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Design and communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, attractive and well organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat cluttered</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hard to follow</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two or more reliable sources, correctly listed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two sources listed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One source</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No sources</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use arrows and color to show interactions.<br>Keep text short — let the diagram do the work.<br>Check every term is spelled and used correctly.<br>Choose a situation you are curious about.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I learn about how my body responds to change?</li>
    <li>Which system interaction was hardest to show?</li>
    <li>How did peer feedback improve my work?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The infographic must show at least how many body systems?',
            options: ['One', 'Two', 'Three', 'Eleven'],
            correct: 2,
            explanation: 'At least three interacting systems.'
        },
        {
            question: 'A complete feedback loop includes:',
            options: ['Stimulus, sensor, control center, effector, response', 'Only a stimulus', 'Only a response', 'A list of organs'],
            correct: 0,
            explanation: 'The answer is Stimulus, sensor, control center, effector, response. All five parts are needed.'
        },
        {
            question: 'Which is a reliable source?',
            options: ['A university health website', 'An anonymous comment', 'A random social-media post', 'A rumor'],
            correct: 0,
            explanation: 'Use trustworthy, expert sources.'
        },
        {
            question: 'During a race on a hot day, which system helps cool the body?',
            options: ['Skeletal', 'Integumentary', 'Reproductive', 'Digestive'],
            correct: 1,
            explanation: 'The answer is Integumentary. Skin releases sweat.'
        },
        {
            question: 'Arrows on your infographic should show:',
            options: ['Decoration only', 'Page numbers', 'Nothing', 'What is exchanged between systems'],
            correct: 3,
            explanation: 'Arrows communicate interactions.'
        },
        {
            question: 'The explanation should describe:',
            options: ['Your favorite food', 'How the body returns to balance', 'The history of the poster', 'Unrelated facts'],
            correct: 1,
            explanation: 'The answer is How the body returns to balance. Focus on homeostasis.'
        }
    ]
},
{
    name: '1.2 Review: Organization and Homeostasis',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Organization and Homeostasis</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and the whole unit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Levels of Organization</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cell → tissue → organ → organ system → organism.</li>
    <li>Four animal tissues: epithelial, connective, muscle, nervous.</li>
    <li>Differentiation creates specialized cells.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Body Systems</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>About eleven human organ systems.</li>
    <li>Respiratory + circulatory deliver oxygen.</li>
    <li>Nervous + muscular + skeletal produce movement.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Feedback Loops</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Stimulus → sensor → control center → effector → response.</li>
    <li>Negative feedback reverses change.</li>
    <li>Positive feedback amplifies change.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #a5d6a7;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Key Examples</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Temperature: sweating and shivering, controlled by the hypothalamus.</li>
    <li>Glucose: insulin lowers, glucagon raises.</li>
    <li>Childbirth and clotting: positive feedback.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Definition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tissue</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Similar cells working together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Muscle tissue</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organ</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different tissues working together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heart</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organ system</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organs working together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digestive system</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Homeostasis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stable internal conditions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Body temperature near 37°C</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Negative feedback</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reverses a change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insulin after a meal</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Positive feedback</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amplifies a change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Childbirth contractions</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Put in order: organ system, cell, organ, organism, tissue.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cell, tissue, organ, organ system, organism.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name the tissue type that carries signals.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Nervous tissue.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how the digestive and circulatory systems interact.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Nutrients absorbed from the small intestine enter the blood, which carries them to cells.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> List the five parts of a feedback loop.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Stimulus, sensor, control center, effector, response.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Describe the body’s response to low blood glucose.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The pancreas releases glucagon, and the liver releases stored glucose into the blood.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Explain why heart rate falls after exercise.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Demand for oxygen drops, and negative feedback slows the heart back toward its resting rate.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can describe levels of organization.</p>
    <p style="margin:6px 0;">☐ I can name tissue types and organ systems.</p>
    <p style="margin:6px 0;">☐ I can explain system interactions.</p>
    <p style="margin:6px 0;">☐ I can model feedback loops.</p>
    <p style="margin:6px 0;">☐ I can explain temperature and glucose regulation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is the most complex level of organization?',
            options: ['Organ system', 'Organ', 'Organism', 'Tissue'],
            correct: 2,
            explanation: 'The organism includes all levels.'
        },
        {
            question: 'Bone is classified as:',
            options: ['Epithelial tissue', 'Connective tissue', 'Nervous tissue', 'Muscle tissue'],
            correct: 1,
            explanation: 'The answer is Connective tissue. Bone supports and connects.'
        },
        {
            question: 'Low blood glucose triggers the release of:',
            options: ['Insulin', 'Sweat', 'Oxytocin', 'Glucagon'],
            correct: 3,
            explanation: 'Glucagon raises blood glucose.'
        },
        {
            question: 'Which response is positive feedback?',
            options: ['Shivering when cold', 'Sweating when hot', 'Platelets attracting more platelets at a wound', 'Insulin after a meal'],
            correct: 2,
            explanation: 'Clotting amplifies until the wound is sealed.'
        },
        {
            question: 'The effector in temperature control includes:',
            options: ['Sweat glands', 'The hypothalamus', 'Temperature receptors', 'The stimulus'],
            correct: 0,
            explanation: 'Effectors carry out the response.'
        },
        {
            question: 'Heart rate falling after exercise is controlled by:',
            options: ['Negative feedback', 'Positive feedback', 'Osmosis', 'Differentiation'],
            correct: 0,
            explanation: 'The answer is Negative feedback. It returns to the set point.'
        }
    ]
},
{
    name: '1.2 Summary: Organization and Homeostasis',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #1b5e20, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #a5d6a7;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Cells and the Organization of Life · Topic 1.2 Organization and Homeostasis</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #a5d6a7;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Organization and Homeostasis</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Specialized cells are organized into tissues, organs and organ systems that interact constantly, and feedback mechanisms coordinate these systems to keep the body’s internal conditions stable.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Multicellular organisms are organized from cells to tissues, organs, organ systems and the whole organism.</li>
    <li>Cells specialize through differentiation; their structures fit their functions.</li>
    <li>Organ systems interact: for example, respiratory and circulatory systems deliver oxygen.</li>
    <li>Homeostasis is the maintenance of stable internal conditions.</li>
    <li>Negative feedback reverses changes; positive feedback amplifies them until an event is complete.</li>
    <li>Temperature, blood glucose, water balance and heart rate are all regulated by feedback.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learned</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practice</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Levels of Organization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specialization, tissue types, cell → organism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Give an example at every level</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Interacting Body Systems</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organ systems and how they work together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trace a molecule through the body</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Homeostasis and Feedback Loops</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Feedback loops; temperature and glucose control</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Label all five parts of a loop</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">specialization</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">differentiation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">tissue</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">organ</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">organ system</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stem cell</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">alveoli</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">capillary</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hormone</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">homeostasis</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stimulus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sensor</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">effector</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">negative feedback</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">positive feedback</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Understanding organization and homeostasis helps you make healthy choices and understand conditions such as diabetes, dehydration and fever.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #a5d6a7;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Cells and the Organization of Life. In Unit 2.0 you will study the chemistry of life — water, carbohydrates, lipids, proteins, nucleic acids and the enzymes that control cell reactions.</div>
    </div>
    <div style="background:#1b2e1f;padding:20px;border-radius:12px;border:1px solid #a5d6a7;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can describe the levels of organization.</p>
    <p style="margin:6px 0;">✔️ I can explain how body systems interact.</p>
    <p style="margin:6px 0;">✔️ I can model a feedback loop.</p>
    <p style="margin:6px 0;">✔️ I can distinguish negative from positive feedback.</p>
    <p style="margin:6px 0;">✔️ I can use data as evidence for homeostasis.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.2 is that:',
            options: ['Cells work alone', 'Systems interact and feedback keeps conditions stable', 'Organs never change', 'Homeostasis is rare'],
            correct: 1,
            explanation: 'Interaction and feedback maintain balance.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['Plate tectonics', 'Astronomy', 'Weather', 'The chemistry of life'],
            correct: 3,
            explanation: 'Unit 2.0 covers biomolecules and enzymes.'
        },
        {
            question: 'Which is an organ system?',
            options: ['Lung', 'Alveolus', 'Respiratory system', 'Epithelial tissue'],
            correct: 2,
            explanation: 'A system is a group of organs.'
        },
        {
            question: 'Most homeostatic mechanisms use:',
            options: ['Positive feedback', 'Negative feedback', 'No feedback', 'Random changes'],
            correct: 1,
            explanation: 'Negative feedback keeps conditions stable.'
        },
        {
            question: 'Differentiation produces:',
            options: ['New organisms', 'Viruses', 'Specialized cells', 'Hormones only'],
            correct: 2,
            explanation: 'The answer is Specialized cells. Cells become specialized.'
        },
        {
            question: 'Which pair has opposite effects on blood glucose?',
            options: ['Insulin and glucagon', 'Oxytocin and insulin', 'Sweat and insulin', 'Glucagon and oxytocin'],
            correct: 0,
            explanation: 'Insulin lowers it; glucagon raises it.'
        }
    ]
}
],
          stats:{lessons:19,exercises:129,quizzes:20,projects:2,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Which is part of the cell theory?',
                  options: ['All cells have a nucleus', 'Cells can form from non-living matter', 'All living things are made of one or more cells', 'Only animals are made of cells'],
                  correct: 2,
                  explanation: 'The cell theory says all organisms are made of cells, cells are the basic unit of life, and cells come from existing cells.'
              },
              {
                  question: 'A microscope has a 10× eyepiece and a 40× objective. The total magnification is:',
                  options: ['50×', '400×', '40×', '4,000×'],
                  correct: 1,
                  explanation: 'Multiply the two lenses: 10 × 40 = 400.'
              },
              {
                  question: 'Which cells have no nucleus?',
                  options: ['Prokaryotic cells', 'Plant cells', 'Animal cells', 'Fungal cells'],
                  correct: 0,
                  explanation: 'Prokaryotes such as bacteria keep their DNA in the cytoplasm.'
              },
              {
                  question: 'Which organelle releases energy from food in a process called cellular respiration?',
                  options: ['Mitochondrion', 'Ribosome', 'Golgi apparatus', 'Vacuole'],
                  correct: 0,
                  explanation: 'Mitochondria produce most of a cell’s ATP.'
              },
              {
                  question: 'Which structures are found in plant cells but not animal cells?',
                  options: ['Nucleus and ribosomes', 'Cell wall and chloroplasts', 'Mitochondria and cell membrane', 'Cytoplasm and DNA'],
                  correct: 1,
                  explanation: 'Plant cells have a cell wall and chloroplasts.'
              },
              {
                  question: 'Osmosis is the diffusion of:',
                  options: ['Glucose using ATP', 'Proteins into the nucleus', 'Oxygen into chloroplasts only', 'Water across a selectively permeable membrane'],
                  correct: 3,
                  explanation: 'Osmosis is water movement across a membrane.'
              },
              {
                  question: 'A cell placed in a hypertonic solution will:',
                  options: ['Gain water and swell', 'Lose water and shrink', 'Stay exactly the same', 'Divide immediately'],
                  correct: 1,
                  explanation: 'Water moves out toward the higher solute concentration.'
              },
              {
                  question: 'Which list is in order from simplest to most complex?',
                  options: ['Tissue, cell, organ, organism, organ system', 'Organ, tissue, cell, organism, organ system', 'Cell, organ, tissue, organism, organ system', 'Cell, tissue, organ, organ system, organism'],
                  correct: 3,
                  explanation: 'Cells form tissues, tissues form organs, organs form systems.'
              },
              {
                  question: 'Which two systems work together to deliver oxygen to body cells?',
                  options: ['Skeletal and digestive', 'Nervous and excretory', 'Respiratory and circulatory', 'Integumentary and reproductive'],
                  correct: 2,
                  explanation: 'The lungs take in oxygen; blood carries it to cells.'
              },
              {
                  question: 'Homeostasis is:',
                  options: ['Growing larger over time', 'Reproducing quickly', 'Changing to match the outside temperature', 'Maintaining stable internal conditions'],
                  correct: 3,
                  explanation: 'Homeostasis keeps internal conditions in a narrow range.'
              },
              {
                  question: 'Sweating when the body is too hot is an example of:',
                  options: ['Negative feedback', 'Positive feedback', 'Active transport', 'Cell division'],
                  correct: 0,
                  explanation: 'The response reverses the change and cools the body.'
              },
              {
                  question: 'After eating, blood glucose rises. Which hormone brings it back down?',
                  options: ['Glucagon', 'Adrenaline', 'Insulin', 'Oxytocin'],
                  correct: 2,
                  explanation: 'Insulin from the pancreas helps cells take in glucose.'
              }
          ]}
);