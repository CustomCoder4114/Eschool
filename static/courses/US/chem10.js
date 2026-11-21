// Eschool course: Chemistry (USA, high school, NGSS aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'chemistry-us', name:'Chemistry', code:'CHEM 1', level:'grade-10', iconStyle:'fas', icon:'fa-flask', color:'#6a1b9a',
          category:'Sciences',
          description:'Start thinking like a chemist: measure precisely with SI units, scientific notation and significant figures, convert units with dimensional analysis, calculate density, classify matter, separate mixtures and tell physical from chemical changes.',
          longDescription:'Chemistry is a high-school physical-science course aligned to the Next Generation Science Standards (NGSS), HS-PS1 Matter and Its Interactions, and the science and engineering practices. Unit 1, Matter and Measurement, covers SI units and metric prefixes, scientific notation, accuracy and precision, significant figures, percent error, dimensional analysis, density, the states of matter and kinetic molecular theory, the classification of matter, separation techniques, physical and chemical properties and changes, and the law of conservation of mass (connected to HS-PS1-3 and HS-PS1-7). Later units cover atomic structure and nuclear chemistry, electrons and the periodic table, chemical bonding, the mole and stoichiometry, chemical reactions, gases, solutions, acids and bases, and reaction rates and equilibrium. Every lesson includes worked examples, lab safety, a hands-on lab, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Matter and Measurement — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Matter and Measurement</h2>
    <p style="font-size:16px;">Welcome to Chemistry — the study of matter and how it changes. Everything you can touch, taste or smell is made of matter, from the air you breathe to the phone in your hand.</p>
    <p style="font-size:16px;">Chemists answer questions by measuring carefully. In this first unit you will learn the measuring language of science, then use it to describe, classify and separate matter and to tell physical changes from chemical ones.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How do chemists measure, describe and classify matter — and how can we tell when matter has changed into something new?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>Chemistry depends on reliable data. Topic 1.1 teaches you to measure precisely, record data with the right number of digits and convert between units. Topic 1.2 uses those skills to study matter: its states, its classification and the changes it undergoes.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">NGSS connection</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Measurement in Chemistry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SI units and scientific notation; accuracy, precision and significant figures; dimensional analysis and density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Science practices: using mathematics (SEP 5), analyzing data (SEP 4)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Matter and Its Properties</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">States of matter and kinetic molecular theory; classifying matter; physical and chemical changes; conservation of mass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">HS-PS1-3 (properties and particle structure), HS-PS1-7 (conservation of mass)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, a lab investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Measurement in Chemistry <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: The Language of Measurement</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 SI Units and Scientific Notation</li>
    <li>1.1.2 Accuracy, Precision and Significant Figures</li>
    <li>1.1.3 Dimensional Analysis and Density</li>
    <li>🧭 Lab: Identifying Metals by Density</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Matter and Its Properties <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: What Is Stuff Made Of?</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 States of Matter and Kinetic Molecular Theory</li>
    <li>1.2.2 Classifying Matter</li>
    <li>1.2.3 Physical and Chemical Changes</li>
    <li>🧭 Lab: Separating a Mixture</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using mathematics (SEP 5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scientific notation, significant figures, unit conversions and density.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing data (SEP 4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Judging accuracy and precision and calculating percent error.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planning investigations (SEP 3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing the density and separation labs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing models (SEP 2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle diagrams of solids, liquids, gases and mixtures.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constructing explanations (SEP 6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining changes in matter with evidence.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with data</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environment and recycling</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cooking and everyday chemistry</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a lab notebook in pen. Record every measurement with its unit and the correct number of digits, and never erase data — draw a single line through mistakes.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Chemistry is the study of:',
            options: ['Living things only', 'Matter and how it changes', 'Stars and planets', 'Past events'],
            correct: 1,
            explanation: 'Chemistry studies matter and its changes.'
        },
        {
            question: 'Topic 1.1 of this unit focuses on:',
            options: ['Measurement in chemistry', 'Atomic structure', 'Chemical bonding', 'Gas laws'],
            correct: 0,
            explanation: 'Topic 1.1 builds measurement skills.'
        },
        {
            question: 'NGSS HS-PS1-7 is about:',
            options: ['Plate tectonics', 'Conservation of mass in chemical reactions', 'Cell division', 'Star formation'],
            correct: 1,
            explanation: 'Mass is conserved in reactions.'
        },
        {
            question: 'Why should lab data be recorded in pen?',
            options: ['Because pencils are banned', 'To make it colorful', 'To save time', 'So it cannot be erased or changed'],
            correct: 3,
            explanation: 'Permanent records keep data honest.'
        },
        {
            question: 'Science Practice 5 (SEP 5) is:',
            options: ['Asking questions', 'Developing models', 'Using mathematics and computational thinking', 'Obtaining information'],
            correct: 2,
            explanation: 'The answer is Using mathematics and computational thinking. SEP 5 involves calculations.'
        },
        {
            question: 'Which is matter?',
            options: ['Air', 'Light', 'Heat', 'Sound'],
            correct: 0,
            explanation: 'Air has mass and takes up space.'
        }
    ]
},
{
    name: '1.0 Matter and Measurement — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives are based on the Next Generation Science Standards (HS-PS1) and the science and engineering practices. Check them at the start and end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, metric prefixes and scientific notation to record measurements.</li>
    <li>Distinguish accuracy from precision, apply significant-figure rules and calculate percent error.</li>
    <li>Use dimensional analysis to convert units and solve problems.</li>
    <li>Calculate and use density to identify substances.</li>
    <li>Use particle models to explain the states of matter and classify matter as elements, compounds or mixtures. (HS-PS1-3)</li>
    <li>Distinguish physical from chemical changes and use evidence to show that mass is conserved. (HS-PS1-7)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Measurement in Chemistry</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify SI base units and use metric prefixes.</li>
    <li>Convert numbers to and from scientific notation.</li>
    <li>Apply significant-figure rules to measurements and calculations.</li>
    <li>Use dimensional analysis and density to solve problems.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Why does the number of digits in a measurement matter?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Matter and Its Properties</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe solids, liquids and gases using kinetic molecular theory.</li>
    <li>Classify matter and choose methods to separate mixtures.</li>
    <li>Distinguish physical and chemical properties and changes.</li>
    <li>Use data to show that mass is conserved in chemical changes. (HS-PS1-7)</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How can we tell when a new substance has formed?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You calculate accurately with correct units and significant figures and explain chemistry ideas using evidence and particle models.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You calculate accurately and explain ideas correctly, with minor slips in units or significant figures.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You use correct methods but make errors in units, significant figures or explanations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You recall some terms but cannot yet apply them to problems.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>In chemistry, a number without a unit is meaningless. Always write the unit.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which objective belongs to Topic 1.2?',
            options: ['Convert to scientific notation', 'Classify matter as elements, compounds or mixtures', 'Use dimensional analysis', 'Calculate percent error'],
            correct: 1,
            explanation: 'The answer is Classify matter as elements, compounds or mixtures. Topic 1.2 studies matter.'
        },
        {
            question: 'Percent error compares:',
            options: ['Two different units', 'A measured value with an accepted value', 'Mass and volume', 'Solids and liquids'],
            correct: 1,
            explanation: 'It shows how far off a measurement is.'
        },
        {
            question: 'At the Proficient (3) level, you:',
            options: ['Only recall terms', 'Skip units', 'Calculate accurately with minor slips', 'Guess answers'],
            correct: 2,
            explanation: 'Proficient work is mostly accurate.'
        },
        {
            question: 'HS-PS1-3 connects the properties of substances to:',
            options: ['Their color only', 'Their price', 'Their names', 'The structure of their particles'],
            correct: 3,
            explanation: 'Particle structure explains properties.'
        },
        {
            question: 'A number without a unit is:',
            options: ['Meaningless in chemistry', 'Always correct', 'More precise', 'Required'],
            correct: 0,
            explanation: 'The answer is Meaningless in chemistry. Units give a number meaning.'
        },
        {
            question: 'Dimensional analysis is used to:',
            options: ['Convert units', 'Classify matter', 'Separate mixtures', 'Draw particle diagrams'],
            correct: 0,
            explanation: 'The answer is Convert units. It uses conversion factors.'
        }
    ]
},
{
    name: '1.0 Matter and Measurement — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: Chemistry Is Everywhere</h2>
    <p style="font-size:16px;">When you cook an egg, charge your phone, take medicine or watch fireworks, chemistry is happening. Chemists design new medicines, cleaner fuels, stronger materials and safer foods.</p>
    <p style="font-size:16px;">In 1999, NASA lost the Mars Climate Orbiter, a spacecraft costing more than $100 million, partly because one team used U.S. customary units while another used metric units. In science, careful measurement is not a detail — it is everything.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧪 What Is Matter?</h3>
    <p><strong>Matter</strong> is anything that has mass and takes up space (has volume). Light, heat and sound are not matter — they are forms of energy.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Matter</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Not matter</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water, air, salt</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Your body</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heat</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A pencil</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Your Chemistry Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">matter</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">mass</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">volume</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SI units</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scientific notation</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">significant figures</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">accuracy</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">precision</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">density</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">element</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compound</span><span style="background:#0b1a2e;border:1px solid #ce93d8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">mixture</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Lab Safety Contract</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wear goggles at all times in the lab</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protects eyes from splashes and broken glass</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never eat, drink or taste chemicals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many chemicals are toxic</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Waft, do not sniff</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vapors can harm your lungs</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Know where the eyewash, shower and extinguisher are</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seconds matter in an emergency</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Report all spills, breaks and injuries</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Your teacher can respond safely</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Quick-Write (5 minutes)</h3>
    <p>List five things in your kitchen and decide whether each is a pure substance or a mixture. Keep your list — you will check it in Lesson 1.2.2.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Read and sign the lab safety contract before your first lab. Bring a calculator with scientific notation (the EE or EXP key) to every lesson.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Matter is anything that:',
            options: ['Gives off light', 'Makes sound', 'Has mass and takes up space', 'Is alive'],
            correct: 2,
            explanation: 'Mass and volume define matter.'
        },
        {
            question: 'Which is NOT matter?',
            options: ['Air', 'Water', 'Salt', 'Light'],
            correct: 3,
            explanation: 'The answer is Light. Light is energy.'
        },
        {
            question: 'Why was the Mars Climate Orbiter lost?',
            options: ['Teams used different units', 'It ran out of fuel', 'It hit an asteroid', 'Its battery failed'],
            correct: 0,
            explanation: 'A units mix-up caused the error.'
        },
        {
            question: 'How should you smell a substance in the lab when told to?',
            options: ['Sniff it directly', 'Waft the vapor toward your nose', 'Taste it', 'Never smell anything'],
            correct: 1,
            explanation: 'The answer is Waft the vapor toward your nose. Wafting keeps exposure low.'
        },
        {
            question: 'Goggles should be worn:',
            options: ['Only when heating', 'Only at the end', 'At all times during labs', 'Only if the teacher is watching'],
            correct: 2,
            explanation: 'The answer is At all times during labs. Accidents can happen anytime.'
        },
        {
            question: 'Which calculator key is used for scientific notation?',
            options: ['EE or EXP', 'π', 'Memory', 'Clear'],
            correct: 0,
            explanation: 'It enters “× 10 to the power.”'
        }
    ]
},
{
    name: '1.1.1 SI Units and Scientific Notation',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Language of Measurement</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: SI Units and Scientific Notation</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the SI base units used in chemistry, how metric prefixes work, how to convert temperatures to kelvins, and how to write and calculate with very large and very small numbers in scientific notation.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Scientists around the world share one measuring system so that results can be compared and repeated. Chemistry also deals with numbers that are enormous (atoms in a drop of water) or tiny (the mass of one atom), so scientific notation is essential.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Medicine doses (mg)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Lab measurements</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Computer storage (GB)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔭 Astronomy</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Cell biology (µm)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚡ Electronics (nm chips)</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, metric prefixes and scientific notation. (SEP 5)</li>
    <li>Distinguish accuracy from precision and calculate percent error. (SEP 4)</li>
    <li>Apply significant-figure rules to measurements and calculations. (SEP 5)</li>
    <li>Use dimensional analysis and density to solve problems. (SEP 5)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify the SI base units for length, mass, time, temperature and amount of substance.</li>
    <li>Use metric prefixes to convert units.</li>
    <li>Convert between degrees Celsius and kelvins.</li>
    <li>Write numbers in scientific notation and multiply and divide with them.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why do scientists everywhere use the same units?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> You have used metric units such as meters and grams, and you have worked with exponents in math class.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Imagine a recipe that says “add 2 of sugar.” Two what — cups, spoons, kilograms? Without a unit, the number is useless. Scientists solve this problem by using the <strong>International System of Units (SI)</strong>, a modern form of the metric system used in laboratories around the world.</p>
    <p>Chemists also work with extreme numbers. A single drop of water contains roughly 1,700,000,000,000,000,000,000 molecules. Writing all those zeros is slow and error-prone, so we use <strong>scientific notation</strong>: about 1.7 × 10²¹ molecules.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>SI = one shared set of units. Scientific notation = a short way to write very big or very small numbers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The metric system was developed in France in the 1790s. In 1960, scientists agreed on the modern International System of Units (SI). Since 2019, all seven SI base units have been defined using fixed values of fundamental constants of nature, so they never change. Most countries use metric units in daily life, and scientists everywhere — including in the United States — use SI in the laboratory.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">SI</strong>
    </p>
    <p style="margin:6px 0;">The International System of Units, used by scientists worldwide.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> SI</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The SI unit of length is the meter.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">mass</strong>
    </p>
    <p style="margin:6px 0;">The amount of matter in an object.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> kilogram (kg); grams (g) in labs</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A paper clip has a mass of about 1 g.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">volume</strong>
    </p>
    <p style="margin:6px 0;">The amount of space an object occupies.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> m³; liters (L), mL or cm³ in labs</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1 mL = 1 cm³.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">kelvin</strong>
    </p>
    <p style="margin:6px 0;">The SI unit of temperature; 0 K is absolute zero.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> K = °C + 273.15</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Water freezes at 273.15 K.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">scientific notation</strong>
    </p>
    <p style="margin:6px 0;">A number written as a coefficient between 1 and 10 times a power of 10.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> a × 10ⁿ, where 1 ≤ a &lt; 10</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>4,520,000 = 4.52 × 10⁶</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">mole</strong>
    </p>
    <p style="margin:6px 0;">The SI unit for amount of substance.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> mol</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>You will use the mole in a later unit.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. SI Base Units and Metric Prefixes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Quantity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">SI base unit</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbol</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Common lab unit</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">meter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">cm, mm</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kilogram</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kg</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">g, mg</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Time</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">second</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s, min</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Temperature</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kelvin</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">K</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">°C</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amount of substance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mole</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mol</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mol</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electric current</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ampere</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mA</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Luminous intensity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">candela</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">cd</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Common Metric Prefixes</text><rect x="120" y="50" width="460" height="32" rx="8" fill="#2a1838" stroke="#ce93d8" stroke-width="1.5"/><text x="134" y="71" fill="#fde68a" font-size="14" font-weight="bold">kilo-</text><text x="350" y="71" fill="#e2e8f0" font-size="14" text-anchor="middle">k  ·  10³</text><text x="566" y="71" fill="#cbd5e1" font-size="12" text-anchor="end">1,000</text><rect x="135" y="88" width="430" height="32" rx="8" fill="#2a1838" stroke="#ce93d8" stroke-width="1.5"/><text x="149" y="109" fill="#fde68a" font-size="14" font-weight="bold">(base)</text><text x="350" y="109" fill="#e2e8f0" font-size="14" text-anchor="middle">—  ·  10⁰</text><text x="551" y="109" fill="#cbd5e1" font-size="12" text-anchor="end">1</text><rect x="150" y="126" width="400" height="32" rx="8" fill="#2a1838" stroke="#ce93d8" stroke-width="1.5"/><text x="164" y="147" fill="#fde68a" font-size="14" font-weight="bold">centi-</text><text x="350" y="147" fill="#e2e8f0" font-size="14" text-anchor="middle">c  ·  10⁻²</text><text x="536" y="147" fill="#cbd5e1" font-size="12" text-anchor="end">0.01</text><rect x="165" y="164" width="370" height="32" rx="8" fill="#2a1838" stroke="#ce93d8" stroke-width="1.5"/><text x="179" y="185" fill="#fde68a" font-size="14" font-weight="bold">milli-</text><text x="350" y="185" fill="#e2e8f0" font-size="14" text-anchor="middle">m  ·  10⁻³</text><text x="521" y="185" fill="#cbd5e1" font-size="12" text-anchor="end">0.001</text><rect x="180" y="202" width="340" height="32" rx="8" fill="#2a1838" stroke="#ce93d8" stroke-width="1.5"/><text x="194" y="223" fill="#fde68a" font-size="14" font-weight="bold">micro-</text><text x="350" y="223" fill="#e2e8f0" font-size="14" text-anchor="middle">µ  ·  10⁻⁶</text><text x="506" y="223" fill="#cbd5e1" font-size="12" text-anchor="end">0.000001</text><rect x="195" y="240" width="310" height="32" rx="8" fill="#2a1838" stroke="#ce93d8" stroke-width="1.5"/><text x="209" y="261" fill="#fde68a" font-size="14" font-weight="bold">nano-</text><text x="350" y="261" fill="#e2e8f0" font-size="14" text-anchor="middle">n  ·  10⁻⁹</text><text x="491" y="261" fill="#cbd5e1" font-size="12" text-anchor="end">0.000000001</text><text x="350" y="290" fill="#86efac" font-size="12" text-anchor="middle">Each step down is a smaller unit. 1 km = 1,000 m; 1 m = 100 cm = 1,000 mm.</text>
    </svg>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Mass and weight are not the same. Mass is the amount of matter and does not change from place to place; weight is the force of gravity on that mass and would be smaller on the Moon.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Temperature Scales</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Celsius to kelvin</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">K = °C + 273.15</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Converts a Celsius temperature to the absolute (kelvin) scale.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> kelvins (K) — no degree symbol</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Gas-law and energy calculations, which require absolute temperatures.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Writing “°K.” The kelvin has no degree sign.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> For quick work, add 273: 25 °C ≈ 298 K.</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reference point</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">°C</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">K</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absolute zero</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−273.15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water freezes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">273.15</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Room temperature (about)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">298</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Body temperature (about)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">37</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">310</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water boils (at sea level)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">373.15</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Scientific Notation</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Writing numbers in scientific notation</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write 4,520,000 and 0.00073 in scientific notation.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Move the decimal point until one nonzero digit is to its left. Count the moves: moving left gives a positive exponent; moving right gives a negative exponent.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 4,520,000</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Move the decimal 6 places left → 4.52 × 10⁶</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 0.00073</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Move the decimal 4 places right → 7.3 × 10⁻⁴</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 4.52 × 10⁶ and 7.3 × 10⁻⁴</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Multiplying and dividing</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate (3.0 × 10⁴)(2.0 × 10³) and (8.0 × 10⁶) ÷ (2.0 × 10²).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Multiply</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Multiply coefficients: 3.0 × 2.0 = 6.0; add exponents: 4 + 3 = 7 → 6.0 × 10⁷</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Divide coefficients: 8.0 ÷ 2.0 = 4.0; subtract exponents: 6 − 2 = 4 → 4.0 × 10⁴</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 6.0 × 10⁷ and 4.0 × 10⁴</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying the exponents instead of adding them.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is the SI base unit of temperature?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The kelvin (K).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Convert 37 °C to kelvins.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">About 310 K.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Write 0.0000052 in scientific notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5.2 × 10⁻⁶</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles at all times during labs, and tie back long hair and loose clothing.</li>
    <li>Never taste, smell directly or touch chemicals; waft vapors toward your nose only when instructed.</li>
    <li>Know the location of the eyewash station, safety shower and fire extinguisher, and report every spill or accident to your teacher at once.</li>
    <li>Dispose of chemicals only as your teacher directs, and wash your hands after every lab.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 5 Using mathematics</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unit conversion</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Scientific notation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using a scientific calculator</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision in recording</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>When entering scientific notation on a calculator, use the EE or EXP key, not “× 10^”. For example, type 6.02 EE 23 for 6.02 × 10²³. Typing “6.02 × 10 ^ 23” can give the wrong answer when the number is part of a larger calculation, because of the order of operations.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why do you think scientists chose a temperature scale where zero means “no thermal energy at all”?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ce93d8;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Chemistry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Medicine labels use milligrams (mg) and milliliters (mL). A mistake in a prefix could mean a dose 1,000 times too large or too small.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Air-quality reports measure tiny particles in micrometers (µm) — particles smaller than 2.5 µm can travel deep into the lungs.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Pharmacists, lab technicians, engineers and computer-chip makers (who build features measured in nanometers) all depend on SI units.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How many grams are in 1 kilogram?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: kilo = 1,000.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1,000 g.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Write 300,000,000 in scientific notation.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Count 8 places.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3 × 10⁸</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Convert 0 °C to kelvins.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Add 273.15.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">273.15 K (about 273 K).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find five products at home and record their quantities with units (for example, 500 mL, 250 g). Convert each to a different prefix.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Scientific-notation race: one partner reads a large or small number aloud; the other writes it in scientific notation as fast as possible.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a “Powers of Ten” poster showing objects from 10⁻⁹ m (a molecule) to 10⁶ m (a country) with their sizes in scientific notation.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore an online “scale of the universe” interactive and record the size of five objects in scientific notation.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the SI base units of length and mass.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Meter (m) and kilogram (kg).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write 6,000 in scientific notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6 × 10³</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Convert 25 °C and 100 °C to kelvins.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">298 K (298.15 K) and 373 K (373.15 K).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Calculate (4.0 × 10⁵)(3.0 × 10⁻²).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1.2 × 10⁴</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ce93d8;">
    <p style="margin:0 0 6px 0;color:#ce93d8;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Calculate (6.0 × 10²³) ÷ (2.0 × 10²¹) and explain your steps.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6.0 ÷ 2.0 = 3.0; 23 − 21 = 2; answer 3.0 × 10²</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A medicine dose is 250 mg. Write this in grams and in scientific notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0.250 g = 2.50 × 10⁻¹ g</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 5: Explain why chemists use scientific notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It makes very large and very small numbers easier to write, read, compare and calculate with, and reduces errors from counting zeros.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Scientists use the International System of Units (SI): meter, kilogram, second, kelvin, mole, ampere and candela. Metric prefixes such as kilo-, centi-, milli-, micro- and nano- scale units by powers of ten. Temperatures in kelvins equal degrees Celsius plus 273.15. Scientific notation writes numbers as a × 10ⁿ with 1 ≤ a &lt; 10; to multiply, add exponents; to divide, subtract them.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Seven SI base units.</li>
    <li>kilo = 10³, centi = 10⁻², milli = 10⁻³.</li>
    <li>K = °C + 273.15.</li>
    <li>a × 10ⁿ with 1 ≤ a &lt; 10.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mass ≠ weight.</li>
    <li>No degree sign with kelvins.</li>
    <li>Use the EE key on calculators.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Negative exponent for large numbers.</li>
    <li>Multiplying exponents when multiplying numbers.</li>
    <li>Coefficients of 10 or more.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Left = positive, right = negative (decimal moves for large and small numbers).</li>
    <li>Memorize the prefix ladder.</li>
    <li>Always write units.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the conversion factor used.</li>
    <li>Check that the coefficient is between 1 and 10.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 5 Mathematics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculating with scientific notation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using correct units and prefixes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Global science</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sharing one measurement system.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Collaboration</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From medicine doses to phone storage, the units and notation in this lesson keep everyday measurements clear and safe.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten scientific-notation problems.</li>
    <li>Make a flash-card set for the metric prefixes.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which prefix do I confuse most?</li>
    <li>How confident am I using my calculator for scientific notation?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">SI</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">International System of Units.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kelvin</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SI temperature unit.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Scientific notation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a × 10ⁿ form.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mass</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Amount of matter.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can name SI base units.</p>
    <p style="margin:6px 0;">☐ I can use metric prefixes.</p>
    <p style="margin:6px 0;">☐ I can convert °C to K.</p>
    <p style="margin:6px 0;">☐ I can calculate with scientific notation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The SI base unit of length is the:',
            options: ['Centimeter', 'Meter', 'Foot', 'Kilometer'],
            correct: 1,
            explanation: 'The answer is Meter. The meter is the base unit.'
        },
        {
            question: 'The prefix “milli-” means:',
            options: ['10⁻³', '10³', '10⁻²', '10⁻⁶'],
            correct: 0,
            explanation: 'The answer is 10⁻³. One thousandth.'
        },
        {
            question: 'How many centimeters are in 1 meter?',
            options: ['1,000', '10', '0.01', '100'],
            correct: 3,
            explanation: 'The answer is 100. centi = 10⁻².'
        },
        {
            question: 'Convert 25 °C to kelvins.',
            options: ['248 K', '25 K', '77 K', 'About 298 K'],
            correct: 3,
            explanation: 'The answer is About 298 K. 25 + 273.15.'
        },
        {
            question: 'Write 4,520,000 in scientific notation.',
            options: ['45.2 × 10⁵', '4.52 × 10⁻⁶', '4.52 × 10⁶', '452 × 10⁴'],
            correct: 2,
            explanation: 'Move the decimal 6 places left.'
        },
        {
            question: 'Write 0.00073 in scientific notation.',
            options: ['7.3 × 10⁻⁴', '7.3 × 10⁴', '73 × 10⁻⁵', '0.73 × 10⁻³'],
            correct: 0,
            explanation: 'Move the decimal 4 places right.'
        },
        {
            question: '(3.0 × 10⁴)(2.0 × 10³) =',
            options: ['6.0 × 10¹²', '5.0 × 10⁷', '6.0 × 10⁷', '6.0 × 10¹'],
            correct: 2,
            explanation: 'Multiply coefficients, add exponents.'
        },
        {
            question: '(8.0 × 10⁶) ÷ (2.0 × 10²) =',
            options: ['4.0 × 10³', '6.0 × 10⁴', '4.0 × 10⁴', '4.0 × 10⁸'],
            correct: 2,
            explanation: 'Divide coefficients, subtract exponents.'
        },
        {
            question: 'Mass differs from weight because mass:',
            options: ['Changes on the Moon', 'Is measured in newtons', 'Is a force', 'Does not depend on gravity'],
            correct: 3,
            explanation: 'Weight depends on gravity; mass does not.'
        },
        {
            question: 'Absolute zero is:',
            options: ['0 °C', '0 K', '273 K', '100 K'],
            correct: 1,
            explanation: 'The lowest possible temperature.'
        }
    ]
},
{
    name: '1.1.2 Accuracy, Precision and Significant Figures',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Language of Measurement</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Accuracy, Precision and Significant Figures</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the difference between accuracy and precision, calculate percent error, count significant figures and round calculated answers correctly.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every measurement has some uncertainty. Significant figures tell other scientists how precise your measurement was, so they know how much to trust it. Reporting too many digits is like claiming more certainty than you have.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Lab balances</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Medical tests</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏁 Sports timing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏭 Quality control</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Weather data</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Research papers</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, metric prefixes and scientific notation. (SEP 5)</li>
    <li>Distinguish accuracy from precision and calculate percent error. (SEP 4)</li>
    <li>Apply significant-figure rules to measurements and calculations. (SEP 5)</li>
    <li>Use dimensional analysis and density to solve problems. (SEP 5)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish accuracy from precision.</li>
    <li>Calculate percent error.</li>
    <li>Count significant figures in a measurement.</li>
    <li>Round answers to the correct number of significant figures after calculations.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can a measurement be both precise and wrong?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned SI units and scientific notation. Scientific notation also helps show significant figures clearly.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Suppose four students measure the mass of the same coin. Their results are 5.02 g, 5.03 g, 5.01 g and 5.02 g, but the true mass is 5.67 g. Their results are <strong>precise</strong> (close to each other) but not <strong>accurate</strong> (not close to the true value) — perhaps the balance was not set to zero.</p>
    <p>When you read a measuring tool, you record all the certain digits plus one estimated digit. These digits are called <strong>significant figures</strong>. They show how precise a measurement is.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Accuracy = close to the true value. Precision = close to each other. Significant figures = the digits you can trust, plus one estimate.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>All measurements have uncertainty, which depends on the instrument. A ruler marked in millimeters lets you estimate to tenths of a millimeter; a balance that reads to 0.01 g is more precise than one that reads to 0.1 g. Scientists report uncertainty honestly so that others can repeat and check their work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">accuracy</strong>
    </p>
    <p style="margin:6px 0;">How close a measurement is to the true or accepted value.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A clock that shows the correct time is accurate.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">precision</strong>
    </p>
    <p style="margin:6px 0;">How close repeated measurements are to each other.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Arrows grouped tightly together are precise.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">percent error</strong>
    </p>
    <p style="margin:6px 0;">How far a measured value is from the accepted value, as a percentage.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> % error</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A 2% error is small.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">significant figures</strong>
    </p>
    <p style="margin:6px 0;">All certain digits in a measurement plus one estimated digit.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> sig figs</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>12.30 cm has 4 significant figures.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">uncertainty</strong>
    </p>
    <p style="margin:6px 0;">The range of doubt in a measurement.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> ±</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>12.3 ± 0.1 cm</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">accepted value</strong>
    </p>
    <p style="margin:6px 0;">The value most scientists agree is correct.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The accepted density of aluminum is 2.70 g/cm³.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Accuracy, Precision and Percent Error</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 250" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Accuracy vs. Precision</text><circle cx="95" cy="110" r="62" fill="#10233d" stroke="#64748b" stroke-width="2"/><circle cx="95" cy="110" r="40" fill="none" stroke="#64748b" stroke-width="2"/><circle cx="95" cy="110" r="18" fill="#2a1838" stroke="#ce93d8" stroke-width="2"/><circle cx="91" cy="113" r="5" fill="#86efac"/><circle cx="98" cy="106" r="5" fill="#86efac"/><circle cx="100" cy="114" r="5" fill="#86efac"/><circle cx="92" cy="107" r="5" fill="#86efac"/><text x="95" y="198" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Accurate</text><text x="95" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">and precise</text><circle cx="265" cy="110" r="62" fill="#10233d" stroke="#64748b" stroke-width="2"/><circle cx="265" cy="110" r="40" fill="none" stroke="#64748b" stroke-width="2"/><circle cx="265" cy="110" r="18" fill="#2a1838" stroke="#ce93d8" stroke-width="2"/><circle cx="295" cy="78" r="5" fill="#fde68a"/><circle cx="301" cy="83" r="5" fill="#fde68a"/><circle cx="298" cy="74" r="5" fill="#fde68a"/><circle cx="293" cy="80" r="5" fill="#fde68a"/><text x="265" y="198" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Precise,</text><text x="265" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">not accurate</text><circle cx="435" cy="110" r="62" fill="#10233d" stroke="#64748b" stroke-width="2"/><circle cx="435" cy="110" r="40" fill="none" stroke="#64748b" stroke-width="2"/><circle cx="435" cy="110" r="18" fill="#2a1838" stroke="#ce93d8" stroke-width="2"/><circle cx="405" cy="120" r="5" fill="#67e8f9"/><circle cx="460" cy="90" r="5" fill="#67e8f9"/><circle cx="445" cy="140" r="5" fill="#67e8f9"/><circle cx="420" cy="82" r="5" fill="#67e8f9"/><text x="435" y="198" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Accurate on average,</text><text x="435" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">not precise</text><circle cx="605" cy="110" r="62" fill="#10233d" stroke="#64748b" stroke-width="2"/><circle cx="605" cy="110" r="40" fill="none" stroke="#64748b" stroke-width="2"/><circle cx="605" cy="110" r="18" fill="#2a1838" stroke="#ce93d8" stroke-width="2"/><circle cx="560" cy="90" r="5" fill="#fca5a5"/><circle cx="645" cy="135" r="5" fill="#fca5a5"/><circle cx="595" cy="155" r="5" fill="#fca5a5"/><circle cx="640" cy="70" r="5" fill="#fca5a5"/><text x="605" y="198" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Neither</text><text x="605" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">accurate nor precise</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Percent error</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">% error = |measured − accepted| ÷ accepted × 100</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> How large the error is compared with the accepted value.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> %</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Comparing lab results with known values.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Dividing by the measured value instead of the accepted value.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Percent error is always positive because of the absolute-value bars.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Calculating percent error</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A student measures the density of aluminum as 2.65 g/cm³. The accepted value is 2.70 g/cm³. Find the percent error.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Find the difference</strong>
    </p>
    <div style="margin:6px 0 0 34px;">|2.65 − 2.70| = 0.05</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide by the accepted value</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.05 ÷ 2.70 = 0.0185</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Multiply by 100</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1.85%, about 1.9%</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Percent error ≈ 1.9%.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Counting Significant Figures</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Significant figures</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All nonzero digits are significant.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">245</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zeros between nonzero digits are significant.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">205</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leading zeros (before the first nonzero digit) are NOT significant.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.0045</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trailing zeros after a decimal point ARE significant.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.00450</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trailing zeros in a whole number without a decimal point are not significant.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1,200</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A decimal point makes trailing zeros significant.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1,200.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exact numbers (counted objects, defined conversions) have unlimited significant figures.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 eggs; 1 m = 100 cm</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unlimited</td>
    </tr>
    </table>
    </div>
    <div style="background:#241338;border-left:4px solid #ff9800;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">⚡ Quick Trick</p>
    <div>Scientific notation removes confusion: 1.20 × 10³ clearly has 3 significant figures, while 1.2 × 10³ has 2.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Significant Figures in Calculations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Operation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication and division</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Round to the fewest significant figures in any number used.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.5 × 3.42 = 8.55 → 8.6 (2 sig figs)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition and subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Round to the fewest decimal places in any number used.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.11 + 18.0 + 1.013 = 31.123 → 31.1 (1 decimal place)</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Density with significant figures</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A sample has a mass of 15.62 g and a volume of 5.8 mL. Calculate its density with the correct significant figures.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Divide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">15.62 g ÷ 5.8 mL = 2.693… g/mL</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Count sig figs</strong>
    </p>
    <div style="margin:6px 0 0 34px;">15.62 has 4; 5.8 has 2 → answer gets 2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Round</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2.7 g/mL</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 2.7 g/mL</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Copying every digit from the calculator (2.693103…). The answer cannot be more precise than the least precise measurement.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> How many significant figures are in 0.0050?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How many significant figures are in 100.0?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Calculate 4.56 + 2.1 with correct significant figures.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6.7</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles at all times during labs, and tie back long hair and loose clothing.</li>
    <li>Never taste, smell directly or touch chemicals; waft vapors toward your nose only when instructed.</li>
    <li>Know the location of the eyewash station, safety shower and fire extinguisher, and report every spill or accident to your teacher at once.</li>
    <li>Dispose of chemicals only as your teacher directs, and wash your hands after every lab.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 4 Analyzing data</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 5 Using mathematics</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reading instruments</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rounding correctly</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating error</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>When reading a graduated cylinder, read the bottom of the curved surface (the meniscus) at eye level, and estimate one digit beyond the smallest marking. If the cylinder is marked every 1 mL and the liquid is between 32 and 33 mL, you might record 32.4 mL — three significant figures, with the 4 being estimated.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>If a result is very precise but has a large percent error, what kind of problem might the experiment have?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ce93d8;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Chemistry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Medical labs report blood test results with a set number of significant figures so doctors know how precise the measurement is.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Climate scientists compare temperature records carefully, accounting for the precision of older and newer instruments.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Factories use precision and accuracy checks to make sure parts — such as engine pieces or phone components — fit perfectly.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How many significant figures are in 2,050?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: The trailing zero is not significant without a decimal point.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Calculate 3.0 × 4.25 with correct significant figures.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Fewest significant figures.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">13 (2 sig figs)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Measured 9.6, accepted 9.8. Find percent error.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 0.2 ÷ 9.8 × 100.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">About 2.0%</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Measure the length of five objects with a ruler and record each with the correct number of significant figures.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each partner measures the same object three times. Compare results and decide whether your measurements are accurate, precise, both or neither.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Station challenge: measure volume in three different glassware types (beaker, graduated cylinder, pipet) and compare their precision.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online significant-figures counter only to check answers you have already worked out by hand.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define accuracy and precision.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Accuracy: closeness to the true value. Precision: closeness of repeated measurements to each other.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> How many significant figures are in 0.00450?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Calculate 12.11 + 18.0 + 1.013 with correct significant figures.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">31.1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A measured boiling point is 99.1 °C; the accepted value is 100.0 °C. Find the percent error.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0.9%</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ce93d8;">
    <p style="margin:0 0 6px 0;color:#ce93d8;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Calculate (6.022 × 10²³) × (2.0) and give the answer with correct significant figures.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1.2 × 10²⁴ (2 sig figs)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A digital scale shows 52.38 g. How many significant figures does it report, and what does that tell you?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4 significant figures; the scale measures to the nearest 0.01 g.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 4: Four trials give 10.2, 10.3, 10.2 and 10.3 g; the true value is 12.0 g. Evaluate the data.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The data are precise (close together) but not accurate (far from 12.0 g), suggesting a systematic error such as an incorrectly zeroed balance.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Accuracy is closeness to the accepted value; precision is closeness of repeated measurements. Percent error = |measured − accepted| ÷ accepted × 100. Significant figures are the certain digits plus one estimated digit; leading zeros never count, and trailing zeros count only with a decimal point. In multiplication and division, round to the fewest significant figures; in addition and subtraction, round to the fewest decimal places.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Accurate = correct; precise = consistent.</li>
    <li>% error = |M − A| ÷ A × 100.</li>
    <li>Leading zeros never count.</li>
    <li>× ÷ fewest sig figs; + − fewest decimal places.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Exact numbers have unlimited sig figs.</li>
    <li>Read the meniscus at eye level.</li>
    <li>Use scientific notation to show sig figs clearly.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Copying all calculator digits.</li>
    <li>Counting leading zeros.</li>
    <li>Using the sig-fig rule for addition in multiplication.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Underline the significant digits.</li>
    <li>Decide the rounding rule before calculating.</li>
    <li>Estimate one digit beyond the markings.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show your unrounded answer, then the rounded one.</li>
    <li>State which rule you used.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 4 Data</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluating accuracy and precision.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 5 Mathematics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Significant figures and percent error.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Honesty</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reporting uncertainty truthfully.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with data</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Carefulness</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and medicine</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Quality and safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Honest measurement — reporting exactly how sure you are — is the foundation of trustworthy science.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete fifteen significant-figure problems.</li>
    <li>Measure three household items and calculate percent error against package values.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I tend to report too many digits?</li>
    <li>How does uncertainty affect how much I trust a result?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Accuracy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Closeness to the true value.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Closeness of repeated values.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Significant figures</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digits that carry meaning.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Percent error</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Size of error as a percentage.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can distinguish accuracy and precision.</p>
    <p style="margin:6px 0;">☐ I can calculate percent error.</p>
    <p style="margin:6px 0;">☐ I can count significant figures.</p>
    <p style="margin:6px 0;">☐ I can round calculated answers correctly.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Precision describes:',
            options: ['How close a value is to the true value', 'The size of an object', 'How close repeated measurements are to each other', 'The unit used'],
            correct: 2,
            explanation: 'The answer is How close repeated measurements are to each other. Precision is consistency.'
        },
        {
            question: 'Accuracy describes:',
            options: ['How many digits are recorded', 'How fast you measure', 'How close a measurement is to the accepted value', 'The type of balance'],
            correct: 2,
            explanation: 'The answer is How close a measurement is to the accepted value. Accuracy is correctness.'
        },
        {
            question: 'How many significant figures are in 205?',
            options: ['3', '2', '1', '4'],
            correct: 0,
            explanation: 'Zeros between nonzero digits count.'
        },
        {
            question: 'How many significant figures are in 0.0045?',
            options: ['4', '5', '3', '2'],
            correct: 3,
            explanation: 'The answer is 2. Leading zeros do not count.'
        },
        {
            question: 'How many significant figures are in 1,200. (with a decimal point)?',
            options: ['4', '2', '3', '1'],
            correct: 0,
            explanation: 'The decimal point makes trailing zeros significant.'
        },
        {
            question: '2.5 × 3.42 rounded correctly is:',
            options: ['8.55', '8.550', '9', '8.6'],
            correct: 3,
            explanation: 'The answer is 8.6. 2 significant figures.'
        },
        {
            question: '12.11 + 18.0 + 1.013 rounded correctly is:',
            options: ['31.123', '31.12', '31', '31.1'],
            correct: 3,
            explanation: 'The answer is 31.1. Fewest decimal places: one.'
        },
        {
            question: 'Measured 2.65 g/cm³, accepted 2.70 g/cm³. Percent error ≈',
            options: ['0.05%', '5%', '1.9%', '98%'],
            correct: 2,
            explanation: 'The answer is 1.9%. 0.05 ÷ 2.70 × 100.'
        },
        {
            question: 'Results of 5.02, 5.03 and 5.01 g for a 5.67 g coin are:',
            options: ['Accurate but not precise', 'Precise but not accurate', 'Both', 'Neither'],
            correct: 1,
            explanation: 'Close together but far from true.'
        },
        {
            question: 'Counted numbers such as 12 eggs have:',
            options: ['2 significant figures', 'Unlimited significant figures', 'No significant figures', '1 significant figure'],
            correct: 1,
            explanation: 'Exact numbers are not measured.'
        }
    ]
},
{
    name: '1.1.3 Dimensional Analysis and Density',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Language of Measurement</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Dimensional Analysis and Density</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will use dimensional analysis (the factor-label method) to convert units in one or more steps, and use the density formula to find density, mass or volume and identify substances.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Dimensional analysis is the single most useful problem-solving tool in chemistry — you will use it all year. Density explains why oil floats on water, why ice floats and how scientists identify unknown materials.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍳 Scaling recipes</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Speed conversions</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Medicine dosing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛳️ Why ships float</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💍 Testing gold purity</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌊 Oil spills</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, metric prefixes and scientific notation. (SEP 5)</li>
    <li>Distinguish accuracy from precision and calculate percent error. (SEP 4)</li>
    <li>Apply significant-figure rules to measurements and calculations. (SEP 5)</li>
    <li>Use dimensional analysis and density to solve problems. (SEP 5)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write conversion factors from equalities.</li>
    <li>Use dimensional analysis for single- and multi-step conversions.</li>
    <li>Calculate density from mass and volume.</li>
    <li>Use density to find mass or volume and identify substances.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we convert any unit into any other unit — and identify a substance without changing it?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lessons 1.1.1 and 1.1.2 you learned SI units, prefixes and significant figures. You will use all three today.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>How many seconds are in 2.5 hours? You might multiply in your head, but chemists use a reliable method called <strong>dimensional analysis</strong>. You multiply by <strong>conversion factors</strong> — fractions equal to 1, such as 60 min / 1 h — arranged so that unwanted units cancel.</p>
    <p><strong>Density</strong> is the mass of a substance per unit of volume. Every pure substance has its own density at a given temperature, so density acts like a fingerprint for identifying materials.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Dimensional analysis: let the units guide you. Density: how tightly matter is packed.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>According to a famous story, the ancient Greek scientist Archimedes was asked to find out whether a king’s crown was pure gold without damaging it. He realized that he could measure the crown’s volume by the water it displaced, then compare its density with that of pure gold. Whether or not the story is exactly true, the method — water displacement — is still used in labs today.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">conversion factor</strong>
    </p>
    <p style="margin:6px 0;">A ratio of equal quantities in different units, equal to 1.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> e.g. 1,000 m / 1 km</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>60 s / 1 min</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">dimensional analysis</strong>
    </p>
    <p style="margin:6px 0;">A method of solving problems by tracking and canceling units.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Also called the factor-label method.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">density</strong>
    </p>
    <p style="margin:6px 0;">The mass of a substance per unit of volume.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> D = m/V; g/cm³ or g/mL</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Gold has a density of 19.3 g/cm³.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">water displacement</strong>
    </p>
    <p style="margin:6px 0;">Measuring an object’s volume by the rise in water level when it is submerged.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> mL</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A rock raises the water from 25.0 to 32.4 mL.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">intensive property</strong>
    </p>
    <p style="margin:6px 0;">A property that does not depend on the amount of matter.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Density is intensive.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">extensive property</strong>
    </p>
    <p style="margin:6px 0;">A property that depends on the amount of matter.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Mass and volume are extensive.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Dimensional Analysis</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 160" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Dimensional Analysis: Units Cancel Like Numbers</text><rect x="40" y="50" width="190" height="60" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="135" y="86" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">5.0 km</text><line x1="232" y1="80" x2="242.0" y2="80.0" stroke="#94a3b8" stroke-width="2"/><polygon points="252,80 242.0,85.0 242.0,75.0" fill="#94a3b8"/><rect x="255" y="50" width="190" height="60" rx="12" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><text x="350" y="86" fill="#ce93d8" font-size="15" font-weight="bold" text-anchor="middle">× 1,000 m / 1 km</text><line x1="447" y1="80" x2="457.0" y2="80.0" stroke="#94a3b8" stroke-width="2"/><polygon points="467,80 457.0,85.0 457.0,75.0" fill="#94a3b8"/><rect x="470" y="50" width="190" height="60" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="565" y="86" fill="#86efac" font-size="15" font-weight="bold" text-anchor="middle">= 5.0 × 10³ m</text><text x="350" y="140" fill="#cbd5e1" font-size="12" text-anchor="middle">Put the unit you want to cancel in the denominator of the conversion factor.</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: A one-step conversion</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 2.5 hours to minutes.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Start with the given</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2.5 h</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Choose a factor with h in the denominator</strong>
    </p>
    <div style="margin:6px 0 0 34px;">× 60 min / 1 h</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Cancel and calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2.5 × 60 = 150 min</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 150 min (1.5 × 10² min, 2 significant figures)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: A multi-step conversion</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 60.0 miles per hour to meters per second (1 mi = 1,609 m).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert miles to meters on the top and hours to seconds on the bottom.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Set up</strong>
    </p>
    <div style="margin:6px 0 0 34px;">60.0 mi/h × 1,609 m / 1 mi × 1 h / 60 min × 1 min / 60 s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Cancel units</strong>
    </p>
    <div style="margin:6px 0 0 34px;">mi and h and min cancel, leaving m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">60.0 × 1,609 ÷ 3,600 = 26.8 m/s</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 26.8 m/s</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Putting a conversion factor upside down. If the unit does not cancel, flip the factor.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Density</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Density</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">D = m / V</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Density equals mass divided by volume.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> g/cm³ for solids; g/mL for liquids (1 cm³ = 1 mL)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Identifying substances, predicting floating or sinking.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Dividing volume by mass.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Rearrange: m = D × V and V = m ÷ D.</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Substance</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approximate density (g/cm³ or g/mL)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ethanol</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.789</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ice</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.92</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water (about 4 °C)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.00</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aluminum</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.70</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.87</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8.96</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lead</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11.3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gold</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">19.3</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">A Density Column (approximate densities)</text><rect x="250" y="46" width="120" height="236" rx="10" fill="none" stroke="#94a3b8" stroke-width="3"/><rect x="253" y="49" width="114" height="56" fill="#e2e8f0" opacity="0.55"/><line x1="372" y1="77" x2="410" y2="77" stroke="#94a3b8" stroke-width="1.5"/><text x="418" y="74" fill="#e2e8f0" font-size="14" font-weight="bold">rubbing alcohol</text><text x="418" y="92" fill="#cbd5e1" font-size="12">0.79 g/mL</text><rect x="253" y="107" width="114" height="56" fill="#fde68a" opacity="0.55"/><line x1="372" y1="135" x2="410" y2="135" stroke="#94a3b8" stroke-width="1.5"/><text x="418" y="132" fill="#e2e8f0" font-size="14" font-weight="bold">vegetable oil</text><text x="418" y="150" fill="#cbd5e1" font-size="12">0.92 g/mL</text><rect x="253" y="165" width="114" height="56" fill="#38bdf8" opacity="0.55"/><line x1="372" y1="193" x2="410" y2="193" stroke="#94a3b8" stroke-width="1.5"/><text x="418" y="190" fill="#e2e8f0" font-size="14" font-weight="bold">water</text><text x="418" y="208" fill="#cbd5e1" font-size="12">1.00 g/mL</text><rect x="253" y="223" width="114" height="56" fill="#f59e0b" opacity="0.55"/><line x1="372" y1="251" x2="410" y2="251" stroke="#94a3b8" stroke-width="1.5"/><text x="418" y="248" fill="#e2e8f0" font-size="14" font-weight="bold">honey</text><text x="418" y="266" fill="#cbd5e1" font-size="12">1.42 g/mL</text><text x="150" y="70" fill="#86efac" font-size="13" text-anchor="middle">less dense</text><text x="150" y="88" fill="#86efac" font-size="13" text-anchor="middle">floats on top</text><text x="150" y="250" fill="#fca5a5" font-size="13" text-anchor="middle">more dense</text><text x="150" y="268" fill="#fca5a5" font-size="13" text-anchor="middle">sinks to the bottom</text><line x1="150" y1="100" x2="150.0" y2="222.0" stroke="#94a3b8" stroke-width="2"/><polygon points="150,232 145.0,222.0 155.0,222.0" fill="#94a3b8"/>
    </svg>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Ice (about 0.92 g/cm³) is less dense than liquid water, so it floats. This keeps lakes from freezing solid and protects life underwater in winter.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Solving Density Problems</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Finding density and identifying a metal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A metal sample has a mass of 58.3 g. When it is placed in a graduated cylinder, the water level rises from 25.0 mL to 32.4 mL. Find the density and identify the metal.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Find the volume</strong>
    </p>
    <div style="margin:6px 0 0 34px;">32.4 − 25.0 = 7.4 mL</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Find the density</strong>
    </p>
    <div style="margin:6px 0 0 34px;">58.3 g ÷ 7.4 mL = 7.88 g/mL</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Round</strong>
    </p>
    <div style="margin:6px 0 0 34px;">7.9 g/mL (2 significant figures, from 7.4)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Compare</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Closest to iron, 7.87 g/cm³</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Density ≈ 7.9 g/mL; the metal is most likely iron.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: Finding mass from density</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> What is the mass of 50.0 mL of ethanol (density 0.789 g/mL)?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Rearrange</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m = D × V</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.789 g/mL × 50.0 mL</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">39.5 g</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 39.5 g</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Convert 5.0 km to meters.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5.0 × 10³ m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> A block has a mass of 54.0 g and a volume of 20.0 cm³. Find its density.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2.70 g/cm³ (aluminum)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Will an object with a density of 1.3 g/cm³ float or sink in water?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Sink — it is denser than water.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles at all times during labs, and tie back long hair and loose clothing.</li>
    <li>Never taste, smell directly or touch chemicals; waft vapors toward your nose only when instructed.</li>
    <li>Know the location of the eyewash station, safety shower and fire extinguisher, and report every spill or accident to your teacher at once.</li>
    <li>Dispose of chemicals only as your teacher directs, and wash your hands after every lab.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 5 Using mathematics</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 4 Analyzing data</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Dimensional analysis</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rearranging formulas</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Identifying substances</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Density is an <strong>intensive</strong> property: a small nail and a large iron bar have the same density, even though their masses and volumes are very different. That is why density can identify a substance, while mass or volume alone cannot.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student finds the density of a 10.0 g sample with a volume of 2.0 mL as 0.20 g/mL. What went wrong? <em>Answer: they divided volume by mass. D = m/V = 10.0 ÷ 2.0 = 5.0 g/mL.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ce93d8;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Chemistry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Jewelers and pawn shops can check whether an item is likely to be pure gold by measuring its density.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Oil is less dense than water, so spilled oil floats on the ocean surface, where clean-up crews can contain it with floating barriers.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Nurses use dimensional analysis to calculate medicine doses, engineers to convert units, and shipbuilders use density to design ships that float.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Write a conversion factor to change grams to kilograms.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Grams on the bottom.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1 kg / 1,000 g</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Convert 3.5 L to mL.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 1 L = 1,000 mL.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3,500 mL (3.5 × 10³ mL)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Find the volume of 20.0 g of a liquid with density 0.800 g/mL.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: V = m ÷ D.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">25.0 mL</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Convert your height from feet and inches into centimeters and meters using dimensional analysis.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Build a three-layer density column with water, oil and corn syrup (or honey) and predict the order before pouring.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Dimensional-analysis relay: each member performs one conversion step of a multi-step problem and passes it on.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online density simulation to change the mass and volume of blocks and observe which ones float in water.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Convert 250 mL to liters.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0.250 L</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the density of a 30.0 g object with a volume of 10.0 cm³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3.00 g/cm³</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Convert 2.5 hours to seconds.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2.5 h × 60 min/h × 60 s/min = 9.0 × 10³ s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the mass of 15.0 cm³ of gold (19.3 g/cm³).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">19.3 × 15.0 = 2.90 × 10² g (290. g)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ce93d8;">
    <p style="margin:0 0 6px 0;color:#ce93d8;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A rock with a mass of 45.6 g raises the water in a cylinder from 30.0 mL to 46.8 mL. Find its density.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">V = 16.8 mL; D = 45.6 ÷ 16.8 = 2.71 g/mL</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A car travels at 100. km/h. Convert this speed to meters per second.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">100. km/h × 1,000 m/km × 1 h/3,600 s = 27.8 m/s</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 6: Explain why density, rather than mass, can be used to identify a substance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Density is an intensive property that is the same for any amount of a pure substance, while mass depends on the size of the sample.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Dimensional analysis solves problems by multiplying by conversion factors so that unwanted units cancel. Density, D = m/V, is the mass per unit volume and is an intensive property, so it can identify substances. Water displacement measures the volume of irregular objects. Objects less dense than a liquid float in it; denser objects sink.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Conversion factors equal 1.</li>
    <li>Cancel units like numbers.</li>
    <li>D = m/V; m = DV; V = m/D.</li>
    <li>Less dense floats; denser sinks.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1 cm³ = 1 mL.</li>
    <li>Water ≈ 1.00 g/mL.</li>
    <li>Density is intensive.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Upside-down conversion factors.</li>
    <li>Dividing V by m.</li>
    <li>Ignoring significant figures in the answer.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write units on every number.</li>
    <li>Check that the final unit is the one you want.</li>
    <li>Estimate before calculating.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show all conversion factors.</li>
    <li>Round the final answer only.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 5 Mathematics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dimensional analysis and density.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using density as evidence.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scale, proportion and quantity.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Problem solving</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environment (oil spills)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health (medicine doses)</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Dimensional analysis and density help you cook, travel, stay healthy and understand the natural world.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten conversion and density problems.</li>
    <li>Find the density of a household object using water displacement (with permission).</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How does dimensional analysis help me avoid mistakes?</li>
    <li>Where have I seen density at work in everyday life?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Conversion factor</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A ratio equal to 1.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Dimensional analysis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving by canceling units.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Density</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mass per volume.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Water displacement</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Finding volume by rising water.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can write conversion factors.</p>
    <p style="margin:6px 0;">☐ I can do multi-step conversions.</p>
    <p style="margin:6px 0;">☐ I can calculate density.</p>
    <p style="margin:6px 0;">☐ I can use density to find mass or volume and identify substances.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Convert 5.0 km to meters.',
            options: ['5.0 × 10⁻³ m', '5.0 × 10³ m', '50 m', '500 m'],
            correct: 1,
            explanation: 'The answer is 5.0 × 10³ m. 1 km = 1,000 m.'
        },
        {
            question: 'Which conversion factor changes minutes to seconds?',
            options: ['1 min / 60 s', '60 min / 1 s', '60 s / 1 min', '1 s / 60 min'],
            correct: 2,
            explanation: 'Minutes must be in the denominator.'
        },
        {
            question: 'Convert 2.5 hours to seconds.',
            options: ['150 s', '9.0 × 10³ s', '1.5 × 10² s', '3.6 × 10³ s'],
            correct: 1,
            explanation: 'The answer is 9.0 × 10³ s. 2.5 × 3,600 = 9,000 s.'
        },
        {
            question: 'The density formula is:',
            options: ['D = m / V', 'D = V / m', 'D = m × V', 'D = m − V'],
            correct: 0,
            explanation: 'The answer is D = m / V. Mass divided by volume.'
        },
        {
            question: 'A 54.0 g block has a volume of 20.0 cm³. Its density is:',
            options: ['2.70 g/cm³', '1,080 g/cm³', '0.370 g/cm³', '74.0 g/cm³'],
            correct: 0,
            explanation: 'The answer is 2.70 g/cm³. 54.0 ÷ 20.0.'
        },
        {
            question: 'Water rises from 25.0 mL to 32.4 mL when a 58.3 g metal is added. Its density is about:',
            options: ['2.3 g/mL', '1.8 g/mL', '0.13 g/mL', '7.9 g/mL'],
            correct: 3,
            explanation: 'The answer is 7.9 g/mL. 58.3 ÷ 7.4.'
        },
        {
            question: 'The mass of 50.0 mL of ethanol (0.789 g/mL) is:',
            options: ['63.4 g', '0.0158 g', '39.5 g', '50.8 g'],
            correct: 2,
            explanation: 'The answer is 39.5 g. m = D × V.'
        },
        {
            question: 'An object with density 0.5 g/cm³ placed in water will:',
            options: ['Sink', 'Dissolve', 'Explode', 'Float'],
            correct: 3,
            explanation: 'The answer is Float. It is less dense than water.'
        },
        {
            question: 'Density is an intensive property because it:',
            options: ['Depends on mass', 'Depends on volume', 'Changes with size', 'Does not depend on the amount of substance'],
            correct: 3,
            explanation: 'Any amount of iron has the same density.'
        },
        {
            question: 'Ice floats on water because ice is:',
            options: ['Less dense than liquid water', 'Denser than water', 'Lighter in mass always', 'A different chemical'],
            correct: 0,
            explanation: 'The answer is Less dense than liquid water. Ice is about 0.92 g/cm³.'
        }
    ]
},
{
    name: '1.1 Lab: Identifying Metals by Density',
    type: 'lesson',
    duration: '55 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lab</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Lab: Identifying Metals by Density</h2>
    <p style="font-size:16px;">In this lab you will measure the mass and volume of unknown metal samples, calculate their densities with correct significant figures, identify each metal and evaluate your accuracy with percent error.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wear safety goggles for the whole lab.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Glassware</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slide metal samples gently down a tilted graduated cylinder so the glass does not crack; report any breakage.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balances</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zero (tare) the balance before every measurement and never place wet samples directly on the pan.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clean-up</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dry the samples and return them; wipe up any spilled water to prevent slips.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Lab Investigation: Density of Unknown Metals</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To determine the densities of unknown metal samples and identify them by comparing with accepted values.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Electronic balance (0.01 g)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">50 mL or 100 mL graduated cylinder</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Paper towels</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Forceps or tongs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unknown metal samples A, B and C (for example aluminum, iron, copper or zinc)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tap water</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Goggles on at all times.</li>
    <li>Do not drop samples into the cylinder.</li>
    <li>Wash hands after handling metals.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a hypothesis predicting which sample will have the greatest density, based on how heavy each feels for its size.</li>
    <li>Zero the balance and measure the mass of sample A to 0.01 g. Record it.</li>
    <li>Fill the graduated cylinder about halfway with water. Read the volume at the bottom of the meniscus at eye level, estimating one digit.</li>
    <li>Tilt the cylinder and gently slide sample A in. Record the new volume.</li>
    <li>Calculate the volume of the sample by subtraction and its density with correct significant figures.</li>
    <li>Repeat steps 2–5 for samples B and C, and do a second trial for each sample.</li>
    <li>Identify each metal using the accepted-density table and calculate the percent error.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sample</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mass (g)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Initial volume (mL)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Final volume (mL)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sample volume (mL)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Density (g/mL)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Identity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">% error</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
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
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Metal</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Accepted density (g/cm³)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aluminum</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.70</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zinc</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.14</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.87</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8.96</td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why is water displacement used instead of a ruler to find volume?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The samples are irregular in shape, so their volume cannot easily be calculated from measurements; displacement measures the volume directly.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which measurement limited the number of significant figures in your densities?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Usually the volume, because the graduated cylinder is less precise than the balance.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give two sources of error and their effects.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Water drops clinging to the cylinder walls or an air bubble trapped on the sample would change the volume reading; a balance not zeroed would change the mass.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Each metal sample has a characteristic density that can be used to identify it. Comparing measured densities with accepted values, and calculating percent error, shows how accurate the measurements were.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Density is an intensive property, so it stays the same regardless of sample size. Measuring mass and volume precisely allows a substance to be identified without changing it.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reading the top instead of the bottom of the meniscus.</li>
    <li>Trapped air bubbles increasing the apparent volume.</li>
    <li>Copying all calculator digits instead of rounding to significant figures.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Geologists, metal recyclers and quality-control technicians use density measurements to identify and sort materials.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Compare your results with the class. Calculate the class mean density for each sample. Are the class results precise? Are they accurate? What does this tell you about the method?</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Always report densities with units (g/mL or g/cm³) and the correct number of significant figures.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Lab Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Sample A: mass 27.15 g; volume rises from 30.0 mL to 40.1 mL. Find its density.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">V = 10.1 mL; D = 27.15 ÷ 10.1 = 2.69 g/mL</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Identify sample A.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Aluminum (accepted 2.70 g/cm³).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Calculate the percent error for sample A.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">|2.69 − 2.70| ÷ 2.70 × 100 ≈ 0.4%</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should you tilt the cylinder when adding the metal?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To prevent the metal from cracking the glass and splashing water out, which would change the volume reading.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How would doing more trials improve the investigation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It would show how precise the measurements are and allow an average to reduce the effect of random errors.</div>
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
            question: 'The volume of an irregular metal sample is found by:',
            options: ['Measuring with a ruler', 'Weighing it', 'Heating it', 'Water displacement'],
            correct: 3,
            explanation: 'The rise in water equals the sample’s volume.'
        },
        {
            question: 'Before measuring mass, you should:',
            options: ['Wet the sample', 'Zero (tare) the balance', 'Heat the balance', 'Shake the sample'],
            correct: 1,
            explanation: 'Zeroing prevents systematic error.'
        },
        {
            question: 'You read a graduated cylinder at the:',
            options: ['Top of the meniscus from above', 'Bottom of the meniscus at eye level', 'Side of the cylinder', 'Highest marking'],
            correct: 1,
            explanation: 'Eye level avoids parallax error.'
        },
        {
            question: 'A sample with density 8.9 g/mL is most likely:',
            options: ['Aluminum', 'Zinc', 'Copper', 'Water'],
            correct: 2,
            explanation: 'The answer is Copper. Copper is 8.96 g/cm³.'
        },
        {
            question: 'An air bubble trapped on a sample makes the measured density:',
            options: ['Too low', 'Too high', 'Exactly right', 'Negative'],
            correct: 0,
            explanation: 'The volume appears larger, so the density is smaller.'
        },
        {
            question: 'Which measurement usually limits the significant figures in this lab?',
            options: ['Volume from the graduated cylinder', 'Mass from the balance', 'The sample letter', 'Room temperature'],
            correct: 0,
            explanation: 'The answer is Volume from the graduated cylinder. The cylinder is less precise.'
        }
    ]
},
{
    name: '1.1 Quiz: Measurement in Chemistry',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Measurement in Chemistry</h2>
    <p style="font-size:16px;">Test your understanding of SI units, scientific notation, significant figures, percent error, dimensional analysis and density from Topic 1.1.</p>
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
    <li>SI base units and metric prefixes</li>
    <li>Kelvin conversions</li>
    <li>Scientific notation</li>
    <li>Accuracy, precision and percent error</li>
    <li>Significant figures in measurements and calculations</li>
    <li>Dimensional analysis and density</li>
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
    <div>Write units on every number and check that they cancel. For significant figures, decide the rule (fewest sig figs or fewest decimal places) before you round.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The SI base unit for amount of substance is the:',
            options: ['Gram', 'Liter', 'Mole', 'Kelvin'],
            correct: 2,
            explanation: 'The answer is Mole. The mole (mol).'
        },
        {
            question: 'How many milligrams are in 1 gram?',
            options: ['1,000', '100', '10', '0.001'],
            correct: 0,
            explanation: 'The answer is 1,000. milli = 10⁻³.'
        },
        {
            question: 'Convert 310 K to degrees Celsius.',
            options: ['583 °C', '−37 °C', 'About 37 °C', '310 °C'],
            correct: 2,
            explanation: 'The answer is About 37 °C. 310 − 273 ≈ 37.'
        },
        {
            question: 'Write 0.0000052 in scientific notation.',
            options: ['5.2 × 10⁶', '52 × 10⁻⁷', '5.2 × 10⁻⁶', '0.52 × 10⁻⁵'],
            correct: 2,
            explanation: 'Move the decimal 6 places right.'
        },
        {
            question: 'How many significant figures are in 0.0050?',
            options: ['4', '5', '1', '2'],
            correct: 3,
            explanation: 'Leading zeros do not count; the trailing zero after 5 does.'
        },
        {
            question: '4.56 + 2.1 rounded correctly is:',
            options: ['6.66', '6.7', '6.660', '7'],
            correct: 1,
            explanation: 'The answer is 6.7. Fewest decimal places: one.'
        },
        {
            question: 'A result of 99.1 °C for water’s boiling point (accepted 100.0 °C) has a percent error of:',
            options: ['9%', '0.9%', '0.09%', '99.1%'],
            correct: 1,
            explanation: 'The answer is 0.9%. 0.9 ÷ 100.0 × 100.'
        },
        {
            question: 'Convert 3.5 L to mL.',
            options: ['3.5 × 10⁻³ mL', '35 mL', '350 mL', '3.5 × 10³ mL'],
            correct: 3,
            explanation: 'The answer is 3.5 × 10³ mL. 1 L = 1,000 mL.'
        },
        {
            question: 'Find the volume of 20.0 g of a liquid with density 0.800 g/mL.',
            options: ['25.0 mL', '16.0 mL', '0.0400 mL', '20.8 mL'],
            correct: 0,
            explanation: 'The answer is 25.0 mL. V = m ÷ D.'
        },
        {
            question: 'A substance with density 0.92 g/cm³ placed in water will:',
            options: ['Sink', 'Dissolve', 'Boil', 'Float'],
            correct: 3,
            explanation: 'The answer is Float. It is less dense than water.'
        }
    ]
},
{
    name: '1.1 Assignment: Density Lab Report',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Density Lab Report</h2>
    <p style="font-size:16px;">Write a formal lab report for the “Identifying Metals by Density” lab, using correct units, significant figures and scientific reasoning.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>A lab report communicates what you did, what you found and what it means, so that another scientist could repeat your work. Your report must use the data you collected, show all calculations and evaluate the accuracy and precision of your results.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Use your own data. If your group’s results had large errors, explain why — honest analysis of errors earns more credit than “perfect” numbers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a title and a research question.</li>
    <li>State your hypothesis in “If… then… because…” form.</li>
    <li>List materials and summarize the procedure in numbered steps.</li>
    <li>Present your data in a clear table with units and correct significant figures.</li>
    <li>Show one sample calculation each for volume, density and percent error.</li>
    <li>Write a conclusion using claim, evidence and reasoning to identify each metal.</li>
    <li>Evaluate at least two sources of error and suggest specific improvements.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Title, research question and hypothesis</li>
    <li>Materials and procedure</li>
    <li>Data table with units</li>
    <li>Sample calculations</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hypothesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Testable, with scientific reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Testable hypothesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague hypothesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete, organized table with units and correct significant figures</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete table with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some units or values missing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little data</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All calculations correct, shown and rounded properly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conclusion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Claim fully supported by data and reasoning about density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Claim supported by data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Weak support</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No conclusion</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Error analysis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specific errors, their effects on results and realistic improvements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Errors and improvements identified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague error analysis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Never write a number without its unit.<br>Show the formula, the substitution and the answer.<br>Explain the direction of each error’s effect (too high or too low).<br>Compare your results with other groups’ results.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Were your results more precise or more accurate?</li>
    <li>Which source of error affected your results most?</li>
    <li>How would you redesign the lab for better results?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A hypothesis should be written in the form:',
            options: ['Maybe…', 'If… then… because…', 'I think…', 'Yes or no'],
            correct: 1,
            explanation: 'It must be testable with a reason.'
        },
        {
            question: 'Each value in the data table must include:',
            options: ['A drawing', 'Your name', 'Its unit and correct significant figures', 'A question'],
            correct: 2,
            explanation: 'Units and sig figs are required.'
        },
        {
            question: 'A sample calculation should show:',
            options: ['The formula, the substitution and the answer', 'Only the answer', 'Only the formula', 'Nothing'],
            correct: 0,
            explanation: 'The answer is The formula, the substitution and the answer. Show your work.'
        },
        {
            question: 'Error analysis should explain:',
            options: ['Who made the mistake', 'Only that errors happened', 'Nothing', 'The effect of each error on the results'],
            correct: 3,
            explanation: 'Explain how errors changed results.'
        },
        {
            question: 'Honest reporting of large errors is:',
            options: ['Penalized', 'Valued in science', 'Unnecessary', 'Not allowed'],
            correct: 1,
            explanation: 'The answer is Valued in science. Scientific honesty matters.'
        },
        {
            question: 'In the conclusion, CER stands for:',
            options: ['Calculate, Estimate, Report', 'Chemical, Element, Reaction', 'Claim, Evidence, Reasoning', 'Count, Equal, Round'],
            correct: 2,
            explanation: 'Structure your conclusion with CER.'
        }
    ]
},
{
    name: '1.1 Review: Measurement in Chemistry',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Measurement in Chemistry</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before moving on to matter and its properties.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">SI Units and Notation</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Base units: m, kg, s, K, mol, A, cd.</li>
    <li>kilo 10³, centi 10⁻², milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹.</li>
    <li>K = °C + 273.15; scientific notation a × 10ⁿ.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Accuracy, Precision and Error</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Accurate = close to the true value; precise = consistent.</li>
    <li>% error = |M − A| ÷ A × 100.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Significant Figures</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Leading zeros never count; trailing zeros count with a decimal point.</li>
    <li>× ÷: fewest sig figs. + −: fewest decimal places.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Dimensional Analysis and Density</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiply by conversion factors so units cancel.</li>
    <li>D = m/V; less dense floats.</li>
    <li>Water displacement measures volume.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Concept</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scientific notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a × 10ⁿ, 1 ≤ a &lt; 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.00073 = 7.3 × 10⁻⁴</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kelvin</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">K = °C + 273.15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25 °C ≈ 298 K</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sig figs (× ÷)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fewest sig figs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.5 × 3.42 = 8.6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sig figs (+ −)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fewest decimal places</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.11 + 18.0 = 30.1</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Percent error</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|M − A| ÷ A × 100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.65 vs 2.70 → 1.9%</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">D = m/V</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">54.0 g ÷ 20.0 cm³ = 2.70 g/cm³</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Convert 750 mg to grams.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0.750 g</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write 602,000,000 in scientific notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6.02 × 10⁸</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> How many significant figures are in 3.060?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Calculate 8.45 ÷ 2.1 with correct significant figures.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4.0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Convert 1.5 days to minutes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1.5 × 24 × 60 = 2.2 × 10³ min</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Find the mass of 12.0 cm³ of copper (8.96 g/cm³).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">108 g</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can use SI units and prefixes.</p>
    <p style="margin:6px 0;">☐ I can use scientific notation.</p>
    <p style="margin:6px 0;">☐ I can distinguish accuracy and precision and calculate percent error.</p>
    <p style="margin:6px 0;">☐ I can apply significant-figure rules.</p>
    <p style="margin:6px 0;">☐ I can use dimensional analysis and density.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Convert 750 mg to grams.',
            options: ['0.750 g', '750,000 g', '7.50 g', '75.0 g'],
            correct: 0,
            explanation: 'The answer is 0.750 g. Divide by 1,000.'
        },
        {
            question: 'How many significant figures are in 3.060?',
            options: ['3', '4', '2', '5'],
            correct: 1,
            explanation: 'The trailing zero after the decimal counts.'
        },
        {
            question: '8.45 ÷ 2.1 rounded correctly is:',
            options: ['4.02', '4.024', '4.0', '4'],
            correct: 2,
            explanation: 'The answer is 4.0. 2 significant figures.'
        },
        {
            question: 'Convert 1.5 days to minutes.',
            options: ['36 min', '90 min', '1.5 × 10² min', '2.2 × 10³ min'],
            correct: 3,
            explanation: 'The answer is 2.2 × 10³ min. 1.5 × 24 × 60 = 2,160.'
        },
        {
            question: 'The mass of 12.0 cm³ of copper (8.96 g/cm³) is:',
            options: ['1.34 g', '108 g', '20.96 g', '0.747 g'],
            correct: 1,
            explanation: 'The answer is 108 g. m = D × V.'
        },
        {
            question: 'Which unit has no degree symbol?',
            options: ['Celsius', 'Fahrenheit', 'Kelvin', 'All of them'],
            correct: 2,
            explanation: 'The answer is Kelvin. Write K, not °K.'
        }
    ]
},
{
    name: '1.1 Summary: Measurement in Chemistry',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.1 Measurement in Chemistry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Measurement in Chemistry</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Chemistry runs on measurement. Using shared SI units, scientific notation, honest significant figures and dimensional analysis lets chemists record, compare and calculate with data that everyone can trust — and density turns those measurements into a way to identify matter.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>SI base units include the meter, kilogram, second, kelvin and mole; prefixes scale them by powers of ten.</li>
    <li>Scientific notation writes very large or small numbers as a × 10ⁿ.</li>
    <li>Accuracy is closeness to the true value; precision is consistency; percent error measures accuracy.</li>
    <li>Significant figures show how precise a measurement is and guide how answers are rounded.</li>
    <li>Dimensional analysis converts units by canceling them with conversion factors.</li>
    <li>Density, D = m/V, is an intensive property used to identify substances and predict floating or sinking.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 SI Units and Scientific Notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Base units, prefixes, kelvins, scientific notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the EE key correctly</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Accuracy, Precision and Significant Figures</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy vs. precision, percent error, sig-fig rules</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Round only at the end</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Dimensional Analysis and Density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conversion factors, multi-step conversions, density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Let units cancel</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SI</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">kilogram</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">kelvin</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">mole</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">metric prefix</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scientific notation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">accuracy</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">precision</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">percent error</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">significant figures</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">conversion factor</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dimensional analysis</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">density</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">water displacement</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">intensive property</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From medicine labels to engineering designs, careful measurement keeps people safe and makes science reliable.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will use these measurement skills to explore matter itself — its states, how it is classified, and how it changes.</div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can use SI units, prefixes and scientific notation.</p>
    <p style="margin:6px 0;">✔️ I can tell accuracy from precision and calculate percent error.</p>
    <p style="margin:6px 0;">✔️ I can apply significant-figure rules.</p>
    <p style="margin:6px 0;">✔️ I can convert units with dimensional analysis.</p>
    <p style="margin:6px 0;">✔️ I can calculate and use density.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that chemistry depends on:',
            options: ['Guessing', 'Only memorizing names', 'Careful, shared measurement', 'Avoiding math'],
            correct: 2,
            explanation: 'Reliable data needs careful measurement.'
        },
        {
            question: 'Topic 1.2 will study:',
            options: ['Nuclear chemistry', 'Matter and its properties', 'Organic chemistry', 'Gas laws'],
            correct: 1,
            explanation: 'States, classification and changes of matter.'
        },
        {
            question: 'Which is an intensive property?',
            options: ['Mass', 'Volume', 'Length', 'Density'],
            correct: 3,
            explanation: 'Density does not depend on sample size.'
        },
        {
            question: 'Units cancel in:',
            options: ['Dimensional analysis', 'Percent error', 'Significant figures', 'Scientific notation only'],
            correct: 0,
            explanation: 'Conversion factors cancel units.'
        },
        {
            question: 'The prefix “nano-” means:',
            options: ['10⁹', '10⁻⁹', '10⁻⁶', '10⁻³'],
            correct: 1,
            explanation: 'The answer is 10⁻⁹. One billionth.'
        },
        {
            question: 'Percent error is always:',
            options: ['Negative', 'Zero', 'Positive', 'Greater than 100%'],
            correct: 2,
            explanation: 'Absolute value makes it positive.'
        }
    ]
},
{
    name: '1.2.1 States of Matter and Kinetic Molecular Theory',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: What Is Stuff Made Of?</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: States of Matter and Kinetic Molecular Theory</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will use kinetic molecular theory to explain the properties of solids, liquids and gases, describe the six phase changes and explain the energy involved in each.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Why does ice melt, water boil and dry ice “smoke”? Understanding how particles behave explains cooking, weather, refrigeration and how engines work.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍳 Cooking and boiling</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">❄️ Refrigerators and freezers</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">☁️ Clouds and rain</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Engines</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧊 Dry ice and fog effects</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💨 Air in tires</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use kinetic molecular theory and particle models to explain the states of matter and phase changes. (SEP 2)</li>
    <li>Classify matter as elements, compounds, homogeneous mixtures or heterogeneous mixtures. (HS-PS1-3)</li>
    <li>Choose and explain methods to separate mixtures based on physical properties.</li>
    <li>Distinguish physical from chemical changes and show that mass is conserved. (HS-PS1-7)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the main ideas of kinetic molecular theory.</li>
    <li>Compare solids, liquids and gases at the particle level.</li>
    <li>Name and describe the six phase changes.</li>
    <li>Explain phase changes in terms of energy and particle motion.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How does the motion of tiny particles explain the properties of the matter we can see?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In middle school you learned that matter is made of particles and exists as solids, liquids and gases.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>If you open a bottle of perfume at the front of a classroom, students at the back soon smell it — even though no one moved the perfume. Its particles spread through the air on their own. This happens because all particles of matter are in constant, random motion.</p>
    <p><strong>Kinetic molecular theory</strong> (KMT) explains the behavior of matter using particle motion. The faster the particles move, the more <strong>kinetic energy</strong> they have — and temperature is a measure of the average kinetic energy of the particles.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Everything is made of moving particles. Heat them and they move faster; cool them and they slow down.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>Scientists such as Daniel Bernoulli (1700s) and later James Clerk Maxwell and Ludwig Boltzmann (1800s) developed the kinetic theory to explain how gases behave. In everyday conditions on Earth we usually see three states of matter, but a fourth state, <strong>plasma</strong> — a hot, electrically charged gas — makes up the Sun and other stars and is found in lightning and neon signs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">kinetic molecular theory</strong>
    </p>
    <p style="margin:6px 0;">The theory that matter is made of particles in constant, random motion.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> KMT</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>KMT explains why gases spread out.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">kinetic energy</strong>
    </p>
    <p style="margin:6px 0;">The energy of motion.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> joules (J)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Faster particles have more kinetic energy.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">temperature</strong>
    </p>
    <p style="margin:6px 0;">A measure of the average kinetic energy of particles.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> °C or K</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Hot water particles move faster than cold ones.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">phase change</strong>
    </p>
    <p style="margin:6px 0;">A change from one state of matter to another.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Melting is a phase change.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">endothermic</strong>
    </p>
    <p style="margin:6px 0;">A process that absorbs energy from the surroundings.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Melting ice absorbs heat.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">exothermic</strong>
    </p>
    <p style="margin:6px 0;">A process that releases energy to the surroundings.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Freezing water releases heat.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Kinetic Molecular Theory</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>All matter is made of tiny particles (atoms, molecules or ions).</li>
    <li>The particles are in constant, random motion.</li>
    <li>Particles collide with each other and with the walls of their container.</li>
    <li>Temperature measures the average kinetic energy of the particles.</li>
    <li>Particles attract each other; these attractions are strongest in solids and weakest in gases.</li>
    </ul>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 290" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Particle Models of the Three States of Matter</text><rect x="70" y="46" width="132" height="150" rx="8" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><circle cx="88" cy="110" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="110" cy="110" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="132" cy="110" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="154" cy="110" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="176" cy="110" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="88" cy="132" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="110" cy="132" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="132" cy="132" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="154" cy="132" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="176" cy="132" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="88" cy="154" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="110" cy="154" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="132" cy="154" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="154" cy="154" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="176" cy="154" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="88" cy="176" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="110" cy="176" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="132" cy="176" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="154" cy="176" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="176" cy="176" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><text x="136" y="220" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Solid</text><text x="136" y="240" fill="#cbd5e1" font-size="12" text-anchor="middle">fixed shape and volume</text><text x="136" y="256" fill="#cbd5e1" font-size="12" text-anchor="middle">particles vibrate in place</text><rect x="284" y="46" width="132" height="150" rx="8" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><circle cx="298" cy="140" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="320" cy="144" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="342" cy="138" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="366" cy="144" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="388" cy="140" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="308" cy="164" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="332" cy="166" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="356" cy="162" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="380" cy="166" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="314" cy="120" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="354" cy="122" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><circle cx="400" cy="166" r="9" fill="#86efac" stroke="#0f172a" stroke-width="1"/><text x="350" y="220" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Liquid</text><text x="350" y="240" fill="#cbd5e1" font-size="12" text-anchor="middle">fixed volume, takes shape</text><text x="350" y="256" fill="#cbd5e1" font-size="12" text-anchor="middle">particles slide past each other</text><rect x="498" y="46" width="132" height="150" rx="8" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><circle cx="516" cy="70" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="590" cy="62" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="558" cy="110" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="524" cy="150" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="602" cy="140" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="568" cy="168" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><text x="564" y="220" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Gas</text><text x="564" y="240" fill="#cbd5e1" font-size="12" text-anchor="middle">fills its container</text><text x="564" y="256" fill="#cbd5e1" font-size="12" text-anchor="middle">particles move fast and far apart</text>
    </svg>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Comparing the States of Matter</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solid</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Liquid</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Gas</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shape</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definite</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Takes the shape of its container</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Takes the shape of its container</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Volume</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definite</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definite</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fills its container</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle arrangement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tightly packed in a regular pattern</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Close together but disordered</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Far apart</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle motion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vibrate in place</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slide past each other</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Move fast in all directions</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compressibility</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Almost none</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very little</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Easily compressed</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Gas particles are not bigger than liquid particles. The particles are the same size; there is just much more empty space between them in a gas.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Phase Changes and Energy</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Phase Changes</text><rect x="70" y="208" width="120" height="44" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="130" y="236" fill="#67e8f9" font-size="16" font-weight="bold" text-anchor="middle">SOLID</text><rect x="290" y="68" width="120" height="44" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="350" y="96" fill="#86efac" font-size="16" font-weight="bold" text-anchor="middle">LIQUID</text><rect x="510" y="208" width="120" height="44" rx="12" fill="#10233d" stroke="#fca5a5" stroke-width="2"/><text x="570" y="236" fill="#fca5a5" font-size="16" font-weight="bold" text-anchor="middle">GAS</text><line x1="110" y1="208" x2="281.5" y2="103.2" stroke="#fde68a" stroke-width="2"/><polygon points="290,98 284.1,107.5 278.9,98.9" fill="#fde68a"/><text x="186" y="140" fill="#fde68a" font-size="13" text-anchor="end">melting</text><line x1="312" y1="114" x2="180.3" y2="202.4" stroke="#94a3b8" stroke-width="2"/><polygon points="172,208 177.5,198.3 183.1,206.6" fill="#94a3b8"/><text x="252" y="180" fill="#cbd5e1" font-size="13">freezing</text><line x1="410" y1="98" x2="581.5" y2="202.8" stroke="#fde68a" stroke-width="2"/><polygon points="590,208 578.9,207.1 584.1,198.5" fill="#fde68a"/><text x="514" y="140" fill="#fde68a" font-size="13">vaporization</text><line x1="528" y1="208" x2="396.3" y2="119.6" stroke="#94a3b8" stroke-width="2"/><polygon points="388,114 399.1,115.4 393.5,123.7" fill="#94a3b8"/><text x="448" y="180" fill="#cbd5e1" font-size="13" text-anchor="end">condensation</text><line x1="192" y1="222" x2="498.0" y2="222.0" stroke="#fde68a" stroke-width="2"/><polygon points="508,222 498.0,227.0 498.0,217.0" fill="#fde68a"/><text x="350" y="214" fill="#fde68a" font-size="13" text-anchor="middle">sublimation</text><line x1="508" y1="242" x2="202.0" y2="242.0" stroke="#94a3b8" stroke-width="2"/><polygon points="192,242 202.0,237.0 202.0,247.0" fill="#94a3b8"/><text x="350" y="262" fill="#cbd5e1" font-size="13" text-anchor="middle">deposition</text><text x="350" y="290" fill="#86efac" font-size="12" text-anchor="middle">Yellow arrows absorb energy (endothermic); gray arrows release energy (exothermic).</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Phase change</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">From → to</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Energy</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Melting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solid → liquid</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absorbed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ice melting</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Freezing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Liquid → solid</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Released</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water freezing into ice</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vaporization (boiling or evaporation)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Liquid → gas</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absorbed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water boiling</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Condensation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gas → liquid</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Released</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water droplets on a cold glass</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sublimation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solid → gas</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absorbed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dry ice (solid CO₂)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deposition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gas → solid</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Released</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Frost forming on a window</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Explaining a phase change with particles</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Explain, using KMT, why a puddle evaporates on a sunny day.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Energy input</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Sunlight transfers energy to the water.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Particle motion</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Water molecules move faster and gain kinetic energy.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Escape</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Molecules at the surface gain enough energy to overcome their attractions and escape as a gas.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Result</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Over time, the liquid water becomes water vapor and the puddle disappears.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Energy from the Sun increases the kinetic energy of water molecules until surface molecules overcome their attractions and escape as water vapor.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A strong explanation links energy, particle motion and attractions.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does temperature measure?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The average kinetic energy of the particles.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Is condensation endothermic or exothermic?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Exothermic — it releases energy.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which phase change turns a solid directly into a gas?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Sublimation.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles at all times during labs, and tie back long hair and loose clothing.</li>
    <li>Never taste, smell directly or touch chemicals; waft vapors toward your nose only when instructed.</li>
    <li>Know the location of the eyewash station, safety shower and fire extinguisher, and report every spill or accident to your teacher at once.</li>
    <li>Dispose of chemicals only as your teacher directs, and wash your hands after every lab.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Developing particle models</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Constructing explanations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Crosscutting concept: energy and matter</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing states</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cause and effect reasoning</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>During a phase change, the temperature of a pure substance stays constant even though energy is being added or removed. For example, while ice melts at 0 °C, the added energy breaks attractions between molecules instead of raising their speed. Only after all the ice has melted does the temperature rise again.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why does sweating cool you down? Use the word “evaporation” and the idea of energy in your answer.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ce93d8;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Chemistry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> A refrigerator works by evaporating and condensing a refrigerant: evaporation inside absorbs heat from the food, and condensation outside releases it.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> The water cycle is a chain of phase changes — evaporation, condensation and precipitation — that moves water and energy around the planet.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> HVAC technicians, chefs, meteorologists and chemical engineers all apply phase changes in their work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> In which state are particles farthest apart?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Most empty space.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Gas.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Name the phase change that forms frost.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Gas straight to solid.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Deposition.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Does melting absorb or release energy?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Energy is needed to break attractions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Absorbs (endothermic).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw particle diagrams of a solid, a liquid and a gas, and label how the particles move.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Act it out: one partner calls out a temperature change; the other moves like a particle in that state (vibrating, sliding or zooming).</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Observe an ice cube melting in a warm room. Record the time and describe each stage using KMT.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a free online states-of-matter simulation (such as PhET) to heat and cool water and observe the particles.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> List the three common states of matter.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Solid, liquid and gas.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is kinetic energy?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The energy of motion.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why gases can be compressed but solids cannot.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Gas particles are far apart with lots of empty space, so they can be pushed closer; solid particles are already tightly packed.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Name the six phase changes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Melting, freezing, vaporization, condensation, sublimation and deposition.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ce93d8;">
    <p style="margin:0 0 6px 0;color:#ce93d8;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why the temperature of boiling water stays at 100 °C (at sea level) while it is still being heated.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The added energy is used to overcome attractions between molecules to change liquid into gas, not to increase their average kinetic energy.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why do droplets form on the outside of a cold drink can on a humid day?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Water vapor in the air cools when it touches the can, loses energy and condenses into liquid.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 2: Use a particle model to explain what happens when a solid melts.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">As energy is added, particles vibrate faster until they overcome some attractions and begin to slide past each other, so the solid becomes a liquid.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Kinetic molecular theory states that matter is made of particles in constant motion, and temperature measures their average kinetic energy. Solids have tightly packed, vibrating particles; liquids have close particles that slide past each other; gases have fast, widely spaced particles. The six phase changes are melting, freezing, vaporization, condensation, sublimation and deposition; some absorb energy and some release it.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Particles are always moving.</li>
    <li>Temperature = average kinetic energy.</li>
    <li>Solid, liquid, gas differ in spacing and motion.</li>
    <li>Endothermic: melt, vaporize, sublime. Exothermic: freeze, condense, deposit.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Temperature stays constant during a phase change.</li>
    <li>Particles do not grow when heated.</li>
    <li>Plasma is a fourth state.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying particles get bigger when heated.</li>
    <li>Confusing condensation and evaporation.</li>
    <li>Thinking melting releases energy.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw particle diagrams for every explanation.</li>
    <li>Use the phase-change triangle.</li>
    <li>Link energy to particle motion.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the words “kinetic energy” and “attractions.”</li>
    <li>Name both the phase change and the energy change.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle diagrams.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy and matter.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining phase changes.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observation</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Weather and climate</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Everyday technology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From your refrigerator to the clouds in the sky, the motion of particles shapes the world around you.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw and label the phase-change diagram from memory.</li>
    <li>Find three examples of phase changes at home and classify each as endothermic or exothermic.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which phase change surprises me most?</li>
    <li>How does thinking about particles change how I see everyday events?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">KMT</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particles are always moving.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Temperature</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Average kinetic energy.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sublimation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solid to gas.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Endothermic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absorbs energy.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state the ideas of KMT.</p>
    <p style="margin:6px 0;">☐ I can compare the states of matter.</p>
    <p style="margin:6px 0;">☐ I can name the six phase changes.</p>
    <p style="margin:6px 0;">☐ I can explain phase changes with energy.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Kinetic molecular theory says particles of matter are:',
            options: ['In constant, random motion', 'Always still', 'Only moving in gases', 'Growing when heated'],
            correct: 0,
            explanation: 'The answer is In constant, random motion. All particles move.'
        },
        {
            question: 'Temperature is a measure of:',
            options: ['Total mass', 'Volume', 'Density', 'Average kinetic energy of particles'],
            correct: 3,
            explanation: 'Hotter means faster particles.'
        },
        {
            question: 'Which state has a definite volume but no definite shape?',
            options: ['Solid', 'Gas', 'Plasma', 'Liquid'],
            correct: 3,
            explanation: 'Liquids take the shape of their container.'
        },
        {
            question: 'In a solid, particles:',
            options: ['Move freely in all directions', 'Slide past each other', 'Do not move at all', 'Vibrate in fixed positions'],
            correct: 3,
            explanation: 'Solid particles vibrate in place.'
        },
        {
            question: 'Which state is most easily compressed?',
            options: ['Solid', 'Liquid', 'Gas', 'All equally'],
            correct: 2,
            explanation: 'Gases have the most empty space.'
        },
        {
            question: 'Liquid changing into a gas is called:',
            options: ['Condensation', 'Deposition', 'Vaporization', 'Freezing'],
            correct: 2,
            explanation: 'Boiling and evaporation are vaporization.'
        },
        {
            question: 'Frost forming directly from water vapor is:',
            options: ['Sublimation', 'Deposition', 'Melting', 'Condensation'],
            correct: 1,
            explanation: 'The answer is Deposition. Gas → solid.'
        },
        {
            question: 'Which phase change releases energy?',
            options: ['Melting', 'Freezing', 'Sublimation', 'Vaporization'],
            correct: 1,
            explanation: 'The answer is Freezing. Freezing is exothermic.'
        },
        {
            question: 'Dry ice “smoking” at room temperature is an example of:',
            options: ['Sublimation', 'Melting', 'Condensation', 'Freezing'],
            correct: 0,
            explanation: 'Solid CO₂ turns directly into gas.'
        },
        {
            question: 'While ice is melting at 0 °C, its temperature:',
            options: ['Rises quickly', 'Stays constant', 'Falls', 'Becomes negative'],
            correct: 1,
            explanation: 'Energy breaks attractions instead.'
        }
    ]
},
{
    name: '1.2.2 Classifying Matter',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: What Is Stuff Made Of?</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Classifying Matter</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will classify matter as elements, compounds, homogeneous mixtures or heterogeneous mixtures, interpret particle diagrams, and choose methods to separate mixtures.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Knowing what a material is made of helps chemists purify water, refine metals, make medicines and recycle materials. Classification is the first question a chemist asks about any sample.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚰 Water treatment</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Pharmaceuticals</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">♻️ Recycling</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛽ Oil refining</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧂 Salt production</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩸 Blood tests</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use kinetic molecular theory and particle models to explain the states of matter and phase changes. (SEP 2)</li>
    <li>Classify matter as elements, compounds, homogeneous mixtures or heterogeneous mixtures. (HS-PS1-3)</li>
    <li>Choose and explain methods to separate mixtures based on physical properties.</li>
    <li>Distinguish physical from chemical changes and show that mass is conserved. (HS-PS1-7)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish pure substances from mixtures.</li>
    <li>Distinguish elements from compounds.</li>
    <li>Distinguish homogeneous from heterogeneous mixtures.</li>
    <li>Choose separation techniques based on physical properties.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we tell what a sample of matter is made of?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you learned that matter is made of particles. Now you will classify matter by the kinds of particles it contains.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Look at a glass of salt water and a glass of pure water. They look the same, but one is a <strong>pure substance</strong> and the other is a <strong>mixture</strong>. If you let the salt water evaporate, salt is left behind — proof that it contained two substances.</p>
    <p>A <strong>pure substance</strong> has a fixed composition — every sample is the same. It is either an <strong>element</strong> (one kind of atom) or a <strong>compound</strong> (two or more elements chemically combined in a fixed ratio). A <strong>mixture</strong> is a physical combination of substances that keep their own properties and can be separated by physical means.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Pure substance = one kind of stuff. Mixture = two or more kinds of stuff mixed but not chemically joined.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>There are 118 known elements, listed on the periodic table. Combined in different ways, they form millions of compounds. For example, sodium is a reactive metal and chlorine is a toxic gas, yet chemically combined they form sodium chloride — ordinary table salt. A compound’s properties can be completely different from those of its elements.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">pure substance</strong>
    </p>
    <p style="margin:6px 0;">Matter with a fixed, uniform composition.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Distilled water is a pure substance.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">element</strong>
    </p>
    <p style="margin:6px 0;">A pure substance made of only one kind of atom.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> symbol, e.g. O, Fe, Au</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Gold (Au) is an element.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">compound</strong>
    </p>
    <p style="margin:6px 0;">A pure substance of two or more elements chemically combined in a fixed ratio.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> formula, e.g. H₂O</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Water is H₂O.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">homogeneous mixture</strong>
    </p>
    <p style="margin:6px 0;">A mixture with the same composition throughout; also called a solution.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Salt water.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">heterogeneous mixture</strong>
    </p>
    <p style="margin:6px 0;">A mixture whose parts are visibly different.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sand in water.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">filtration</strong>
    </p>
    <p style="margin:6px 0;">Separating a solid from a liquid by passing the mixture through a filter.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Coffee filters separate grounds from coffee.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Classification of Matter</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Classifying Matter</text><line x1="350" y1="76" x2="190" y2="132" stroke="#64748b" stroke-width="2"/><line x1="350" y1="76" x2="510" y2="132" stroke="#64748b" stroke-width="2"/><line x1="190" y1="168" x2="110" y2="222" stroke="#64748b" stroke-width="2"/><line x1="190" y1="168" x2="270" y2="222" stroke="#64748b" stroke-width="2"/><line x1="510" y1="168" x2="430" y2="222" stroke="#64748b" stroke-width="2"/><line x1="510" y1="168" x2="590" y2="222" stroke="#64748b" stroke-width="2"/><rect x="285" y="40" width="130" height="36" rx="10" fill="#10233d" stroke="#e3f2fd" stroke-width="2"/><text x="350" y="63" fill="#e3f2fd" font-size="13" font-weight="bold" text-anchor="middle">MATTER</text><rect x="105" y="132" width="170" height="36" rx="10" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="190" y="155" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Pure substance</text><rect x="445" y="132" width="130" height="36" rx="10" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><text x="510" y="155" fill="#ce93d8" font-size="13" font-weight="bold" text-anchor="middle">Mixture</text><rect x="50" y="222" width="120" height="36" rx="10" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="110" y="245" fill="#67e8f9" font-size="13" font-weight="bold" text-anchor="middle">Element</text><rect x="210" y="222" width="120" height="36" rx="10" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="270" y="245" fill="#67e8f9" font-size="13" font-weight="bold" text-anchor="middle">Compound</text><rect x="365" y="222" width="130" height="36" rx="10" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="430" y="245" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">Homogeneous</text><rect x="525" y="222" width="130" height="36" rx="10" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="590" y="245" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">Heterogeneous</text><text x="110" y="280" fill="#cbd5e1" font-size="11" text-anchor="middle">gold, oxygen</text><text x="270" y="280" fill="#cbd5e1" font-size="11" text-anchor="middle">water, table salt</text><text x="430" y="280" fill="#cbd5e1" font-size="11" text-anchor="middle">salt water, air</text><text x="590" y="280" fill="#cbd5e1" font-size="11" text-anchor="middle">salad, sand in water</text>
    </svg>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 230" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Particle Diagrams</text><rect x="40" y="46" width="160" height="130" rx="10" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><circle cx="70" cy="80" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="120" cy="70" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="95" cy="120" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="140" cy="125" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="65" cy="150" r="9" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><text x="120" y="198" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Element</text><text x="120" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">one kind of atom</text><rect x="270" y="46" width="160" height="130" rx="10" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><circle cx="300" cy="80" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="315" cy="80" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="285" cy="80" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="355" cy="75" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="370" cy="75" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="340" cy="75" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="320" cy="135" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="335" cy="135" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="305" cy="135" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="370" cy="140" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="385" cy="140" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="355" cy="140" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><text x="350" y="198" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Compound</text><text x="350" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">atoms bonded in a fixed ratio</text><rect x="500" y="46" width="160" height="130" rx="10" fill="#10233d" stroke="#ce93d8" stroke-width="2"/><circle cx="525" cy="75" r="9" fill="#fde68a" stroke="#0f172a" stroke-width="1"/><circle cx="630" cy="100" r="9" fill="#fde68a" stroke="#0f172a" stroke-width="1"/><circle cx="530" cy="145" r="9" fill="#fde68a" stroke="#0f172a" stroke-width="1"/><circle cx="580" cy="70" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="595" cy="70" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="565" cy="70" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="575" cy="115" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="590" cy="115" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="560" cy="115" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="610" cy="145" r="9" fill="#fca5a5" stroke="#0f172a" stroke-width="1"/><circle cx="625" cy="145" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><circle cx="595" cy="145" r="7" fill="#67e8f9" stroke="#0f172a" stroke-width="1"/><text x="580" y="198" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Mixture</text><text x="580" y="216" fill="#cbd5e1" font-size="12" text-anchor="middle">different substances, not bonded</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Can it be separated physically?</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Composition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Examples</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Element</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One kind of atom</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron, oxygen, helium</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compound</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No (only by chemical change)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fixed ratio of elements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water (H₂O), carbon dioxide (CO₂)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Homogeneous mixture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uniform but variable</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Air, salt water, brass</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heterogeneous mixture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not uniform</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salad, granite, oil and water</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Classifying Samples</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Using a flowchart</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Classify each: (a) carbon dioxide, (b) air, (c) copper, (d) chocolate-chip cookie.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> First ask: is it pure (one substance) or a mixture? Then: if pure, one kind of atom or more? If a mixture, uniform or not?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: (a) CO₂</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Pure; two elements chemically combined → compound</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: (b) Air</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Several gases mixed evenly → homogeneous mixture</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: (c) Copper</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Pure; one kind of atom → element</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: (d) Cookie</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Visibly different parts → heterogeneous mixture</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> (a) compound, (b) homogeneous mixture, (c) element, (d) heterogeneous mixture</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>“Pure” in everyday language (like “pure orange juice”) does not mean a pure substance in chemistry. Orange juice is a mixture of water, sugars, acids and many other substances.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Separating Mixtures</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Technique</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Physical property used</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Filtration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle size (solid vs. liquid)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separating sand from water</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaporation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Volatility (liquid evaporates, solid stays)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Getting salt from salt water</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distillation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different boiling points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Purifying water; separating alcohol from water</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnetism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnetic attraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Removing iron filings from sand</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chromatography</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different attractions to a paper or other material</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separating the dyes in ink</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Decanting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Density (pouring off the top layer)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pouring water off settled sand</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is water an element or a compound?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A compound (H₂O).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is another name for a homogeneous mixture?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A solution.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which technique separates iron filings from sand?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Using a magnet.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles at all times during labs, and tie back long hair and loose clothing.</li>
    <li>Never taste, smell directly or touch chemicals; waft vapors toward your nose only when instructed.</li>
    <li>Know the location of the eyewash station, safety shower and fire extinguisher, and report every spill or accident to your teacher at once.</li>
    <li>Dispose of chemicals only as your teacher directs, and wash your hands after every lab.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 2 Interpreting particle models</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 3 Planning separations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classifying</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reasoning from properties</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using flowcharts</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>The key difference between a compound and a mixture is how the parts are joined. In a compound, elements are chemically bonded in a fixed ratio, and the compound has new properties. In a mixture, the substances keep their own properties and can be present in any ratio. You can add more salt to water to make it saltier, but water is always exactly two hydrogen atoms to one oxygen atom.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Is a pure gold ring an element, a compound or a mixture? What about a 14-karat gold ring, which contains gold mixed with other metals?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ce93d8;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Chemistry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Water treatment plants use filtration, settling and other steps to remove particles and impurities from water before it reaches your tap.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Recycling centers separate mixed waste using magnets (for steel), air jets and density differences, so materials can be reused.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Oil refineries use distillation to separate crude oil into gasoline, jet fuel and other products, based on boiling points.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Classify: helium in a balloon.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: One kind of atom.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Element.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Classify: Italian salad dressing.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Layers you can see.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Heterogeneous mixture.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which technique separates the dyes in a marker?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Paper and water.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Chromatography.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Classify twenty items from your kitchen (from your quick-write) as elements, compounds or mixtures, and explain three choices.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Draw particle diagrams for an element, a compound, a homogeneous mixture and a heterogeneous mixture; swap and identify each other’s diagrams.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Paper chromatography: separate the dyes in black washable markers and compare results between brands.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online sorting game or simulation to classify substances, then explain any items you got wrong.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define element and compound.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An element is made of one kind of atom; a compound is two or more elements chemically combined in a fixed ratio.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give one example of a homogeneous and one of a heterogeneous mixture.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Homogeneous: salt water or air. Heterogeneous: salad or sand in water.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why salt water is a mixture and not a compound.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The salt and water are not chemically bonded, can be present in any ratio and can be separated by evaporation.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Choose a method to separate alcohol from water and explain it.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Distillation — alcohol has a lower boiling point, so it evaporates first and can be condensed separately.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ce93d8;">
    <p style="margin:0 0 6px 0;color:#ce93d8;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Describe how to separate a mixture of salt, sand and iron filings.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Use a magnet to remove the iron, add water to dissolve the salt, filter out the sand, then evaporate the water to recover the salt.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Is tap water a pure substance? Explain.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — it is a mixture of water with small amounts of dissolved minerals and gases.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> HS-PS1-3: Explain how the different properties of sand and salt allow them to be separated.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Salt dissolves in water but sand does not, so adding water and filtering separates them; evaporation then recovers the salt.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Matter is either a pure substance or a mixture. Pure substances are elements (one kind of atom) or compounds (elements chemically combined in a fixed ratio). Mixtures are homogeneous (uniform, also called solutions) or heterogeneous (visibly different parts). Mixtures can be separated by physical methods such as filtration, evaporation, distillation, magnetism and chromatography.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pure substance: element or compound.</li>
    <li>Mixture: homogeneous or heterogeneous.</li>
    <li>Compounds have fixed ratios.</li>
    <li>Separation uses physical properties.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Compounds can only be broken down chemically.</li>
    <li>Solutions are homogeneous mixtures.</li>
    <li>Everyday “pure” is not chemistry “pure.”</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calling water a mixture of hydrogen and oxygen.</li>
    <li>Calling air a compound.</li>
    <li>Thinking all clear liquids are pure.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the flowchart every time.</li>
    <li>Ask: chemically bonded or just mixed?</li>
    <li>Match each separation to a property.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Justify classifications with a reason.</li>
    <li>Name the property each separation uses.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">HS-PS1-3</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Properties and particle structure.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle diagrams.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 3 Investigation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planning separations.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Careful observation</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Water and sanitation</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recycling</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Clean water, recycled materials and many medicines all depend on classifying and separating matter.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Classify fifteen household substances with reasons.</li>
    <li>Design a method to separate a mixture of your choice.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which classification surprised me most?</li>
    <li>How could separation techniques help my community?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Element</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One kind of atom.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Compound</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elements bonded in a fixed ratio.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Solution</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Homogeneous mixture.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Distillation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separation by boiling point.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can tell pure substances from mixtures.</p>
    <p style="margin:6px 0;">☐ I can tell elements from compounds.</p>
    <p style="margin:6px 0;">☐ I can tell homogeneous from heterogeneous mixtures.</p>
    <p style="margin:6px 0;">☐ I can choose separation methods.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is an element?',
            options: ['Water', 'Air', 'Salt water', 'Copper'],
            correct: 3,
            explanation: 'Copper contains one kind of atom.'
        },
        {
            question: 'Which is a compound?',
            options: ['Carbon dioxide', 'Oxygen', 'Air', 'Brass'],
            correct: 0,
            explanation: 'CO₂ is carbon and oxygen bonded.'
        },
        {
            question: 'Air is best classified as a(n):',
            options: ['Compound', 'Element', 'Homogeneous mixture', 'Heterogeneous mixture'],
            correct: 2,
            explanation: 'The answer is Homogeneous mixture. Gases are mixed evenly.'
        },
        {
            question: 'A salad is a(n):',
            options: ['Heterogeneous mixture', 'Homogeneous mixture', 'Compound', 'Element'],
            correct: 0,
            explanation: 'You can see the different parts.'
        },
        {
            question: 'Another name for a homogeneous mixture is a:',
            options: ['Compound', 'Solution', 'Element', 'Suspension only'],
            correct: 1,
            explanation: 'Solutions are uniform mixtures.'
        },
        {
            question: 'Compounds can be broken down only by:',
            options: ['Filtration', 'Magnets', 'Chemical changes', 'Evaporation'],
            correct: 2,
            explanation: 'Their elements are chemically bonded.'
        },
        {
            question: 'Which technique separates substances by boiling point?',
            options: ['Filtration', 'Distillation', 'Magnetism', 'Decanting'],
            correct: 1,
            explanation: 'Lower-boiling substances evaporate first.'
        },
        {
            question: 'Salt can be recovered from salt water by:',
            options: ['Filtration', 'Magnetism', 'Evaporation', 'Chromatography'],
            correct: 2,
            explanation: 'The water evaporates and salt remains.'
        },
        {
            question: 'Table salt has properties very different from sodium and chlorine because it is a:',
            options: ['Compound', 'Mixture', 'Element', 'Solution'],
            correct: 0,
            explanation: 'Compounds have new properties.'
        },
        {
            question: 'The dyes in ink are separated by:',
            options: ['Distillation', 'Chromatography', 'Magnetism', 'Decanting'],
            correct: 1,
            explanation: 'Different dyes travel at different rates.'
        }
    ]
},
{
    name: '1.2.3 Physical and Chemical Changes',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: What Is Stuff Made Of?</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Physical and Chemical Changes</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will distinguish physical properties from chemical properties, identify evidence of chemical change, and use data to show that mass is conserved in chemical reactions.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Cooking, rusting, burning fuel and digesting food are all changes in matter. Knowing whether a new substance forms helps chemists design reactions, prevent corrosion and keep people safe.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍞 Baking and cooking</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Fuel combustion</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦀 Rust prevention</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔥 Fire safety</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Lab reactions</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍎 Food spoiling</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use kinetic molecular theory and particle models to explain the states of matter and phase changes. (SEP 2)</li>
    <li>Classify matter as elements, compounds, homogeneous mixtures or heterogeneous mixtures. (HS-PS1-3)</li>
    <li>Choose and explain methods to separate mixtures based on physical properties.</li>
    <li>Distinguish physical from chemical changes and show that mass is conserved. (HS-PS1-7)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish physical from chemical properties.</li>
    <li>Distinguish physical from chemical changes.</li>
    <li>Identify evidence that a chemical change has occurred.</li>
    <li>Use mass data to show that mass is conserved. (HS-PS1-7)</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we tell when a new substance has formed?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you learned that phase changes are changes in state. In Lesson 1.2.2 you learned that compounds can be broken down only by chemical changes.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>When you crumple paper, it is still paper — that is a <strong>physical change</strong>. When you burn paper, it turns into ash, smoke and gases — new substances with different properties. That is a <strong>chemical change</strong>, also called a <strong>chemical reaction</strong>.</p>
    <p>In every chemical change, atoms are rearranged to form new substances, but no atoms are created or destroyed. That is why the total mass before and after a reaction is the same — the <strong>law of conservation of mass</strong>.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Physical change: same substance, new form. Chemical change: new substance. Either way, mass is conserved.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>In the 1770s and 1780s, the French chemist Antoine Lavoisier carried out careful experiments in sealed containers and showed that the total mass of substances stayed the same during chemical reactions. His precise measurements helped turn chemistry into a modern science, and he is often called the “father of modern chemistry.”</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">physical property</strong>
    </p>
    <p style="margin:6px 0;">A property that can be observed without changing the substance’s identity.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Color, density and boiling point.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">chemical property</strong>
    </p>
    <p style="margin:6px 0;">A property that describes how a substance can change into new substances.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Flammability, reactivity with acid.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">physical change</strong>
    </p>
    <p style="margin:6px 0;">A change in form or state that does not produce a new substance.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Cutting, melting, dissolving.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">chemical change</strong>
    </p>
    <p style="margin:6px 0;">A change that produces one or more new substances.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> reactants → products</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Burning, rusting, cooking.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">precipitate</strong>
    </p>
    <p style="margin:6px 0;">A solid that forms from two solutions in a chemical reaction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> (s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A cloudy solid appearing in a test tube.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ce93d8;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">law of conservation of mass</strong>
    </p>
    <p style="margin:6px 0;">Mass is neither created nor destroyed in a chemical reaction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> mass of reactants = mass of products</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>10.0 g → 5.6 g + 4.4 g</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Physical and Chemical Properties</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Physical properties</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Chemical properties</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Color, odor, texture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flammability (ability to burn)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reactivity with oxygen (rusting, tarnishing)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Melting and boiling points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reactivity with acids</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solubility, hardness, conductivity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stability (tendency to decompose)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Malleability (can be hammered into sheets)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Toxicity in reactions</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Observing a physical property leaves the substance unchanged. Observing a chemical property requires a chemical change.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Physical vs. Chemical Changes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Physical changes</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Chemical changes</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ice melting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wood burning</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sugar dissolving in tea</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron rusting</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cutting paper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baking a cake</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Boiling water</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Milk souring</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Crushing a can</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fireworks exploding</td>
    </tr>
    </table>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Evidence of a chemical change</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gas produced (bubbles not caused by boiling)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Baking soda and vinegar fizzing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Color change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A cut apple turning brown</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Precipitate (solid) forms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two clear solutions forming a cloudy solid</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy change (heat, light or sound)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A glow stick glowing; a burning candle</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New odor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotting food</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>One clue is not always proof. Boiling water forms bubbles but is a physical change; heating a pan changes its temperature without a reaction. Look for evidence that a NEW substance has formed.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Conservation of Mass</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Using conservation of mass (HS-PS1-7)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> When 10.0 g of calcium carbonate is heated, it breaks down into calcium oxide and carbon dioxide gas. If 5.6 g of calcium oxide forms, what mass of carbon dioxide is produced?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> The total mass of products must equal the mass of the reactant.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write the relationship</strong>
    </p>
    <div style="margin:6px 0 0 34px;">mass of reactant = total mass of products</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10.0 g = 5.6 g + mass of CO₂</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">mass of CO₂ = 10.0 − 5.6 = 4.4 g</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 4.4 g of carbon dioxide.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Atoms are rearranged, not created or destroyed, so the total mass stays the same.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Explaining an “apparent” loss of mass</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A student burns a 5.0 g piece of wood and only 0.4 g of ash remains. Does this break the law of conservation of mass?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Identify the products</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ash, plus carbon dioxide gas and water vapor.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Explain</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The gases escaped into the air, so their mass was not measured.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Conclude</strong>
    </p>
    <div style="margin:6px 0 0 34px;">In a closed container, the total mass of all products would equal the mass of the wood plus the oxygen used.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> No. The “missing” mass left as gases. Mass is conserved when all reactants and products are measured.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is dissolving sugar in water a physical or chemical change?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Physical — the sugar is still sugar.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Give two pieces of evidence that a chemical change has occurred.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Any two: gas produced, color change, precipitate, energy change, new odor.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Who showed that mass is conserved in chemical reactions?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Antoine Lavoisier.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear safety goggles at all times during labs, and tie back long hair and loose clothing.</li>
    <li>Never taste, smell directly or touch chemicals; waft vapors toward your nose only when instructed.</li>
    <li>Know the location of the eyewash station, safety shower and fire extinguisher, and report every spill or accident to your teacher at once.</li>
    <li>Dispose of chemicals only as your teacher directs, and wash your hands after every lab.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 6 Explaining with evidence</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SEP 5 Using mathematics (mass data)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">HS-PS1-7 Conservation of mass</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observing carefully</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Distinguishing evidence from inference</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>To test conservation of mass in the lab, chemists use a <strong>closed system</strong>, where no matter can enter or leave. For example, if baking soda and vinegar react in a sealed bag on a balance, the mass stays the same even though gas is produced. In an open beaker, the mass appears to drop because the carbon dioxide gas escapes.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>A steel nail gains mass as it rusts. Where does the extra mass come from?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ce93d8;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Chemistry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Painting or oiling metal prevents rust by keeping oxygen and water away — a way of controlling a chemical change.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Burning fossil fuels is a chemical change that produces carbon dioxide; conservation of mass explains why tons of fuel burned produce tons of CO₂ in the atmosphere.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Chefs, firefighters, materials scientists and pharmaceutical chemists all control physical and chemical changes in their work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Is a metal’s ability to conduct electricity a physical or chemical property?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: The metal does not change.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Physical.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Is toasting bread a physical or chemical change?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Can you un-toast it?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Chemical — new substances form, with a color and odor change.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> 12.0 g of reactants form two products. One is 7.5 g. What is the other?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Total mass is conserved.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4.5 g.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List ten changes you observe in one day and classify each as physical or chemical, with evidence.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Sort cards describing changes into “physical” and “chemical,” then explain the trickiest card to another pair.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Closed-system demonstration: react baking soda and vinegar in a sealed zip bag on a balance and record the mass before and after.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online reactions simulation to balance simple reactions and confirm that atoms are rearranged, not created or destroyed.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define physical change and chemical change.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A physical change alters form or state without producing a new substance; a chemical change produces a new substance.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give two physical properties of water.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Any two: colorless, boils at 100 °C, freezes at 0 °C, density about 1.00 g/mL.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Classify and explain: (a) iron rusting, (b) glass breaking.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(a) Chemical — iron oxide, a new substance, forms. (b) Physical — it is still glass.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> 25.0 g of reactants form 18.3 g of one product and one other product. Find its mass.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6.7 g</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ce93d8;">
    <p style="margin:0 0 6px 0;color:#ce93d8;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why the mass of a burning candle seems to decrease, using the law of conservation of mass.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The wax reacts with oxygen to form carbon dioxide and water vapor, which escape into the air; if these gases were captured, the total mass would be conserved.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why do apple slices turn brown, and how does lemon juice slow it?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A chemical reaction with oxygen in the air causes browning; lemon juice slows the reaction.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> HS-PS1-7: Use the idea of atoms to explain why mass is conserved in a chemical reaction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Atoms are rearranged into new substances but are not created or destroyed, so the total number and mass of atoms stays the same.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Physical properties can be observed without changing a substance; chemical properties describe how it can change into new substances. Physical changes alter form or state; chemical changes produce new substances, shown by evidence such as gas, color change, precipitates, energy changes and new odors. The law of conservation of mass, demonstrated by Lavoisier, states that mass is neither created nor destroyed in chemical reactions.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Physical property: observed without change.</li>
    <li>Chemical property: how it reacts.</li>
    <li>Evidence: gas, color, precipitate, energy, odor.</li>
    <li>Mass of reactants = mass of products.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Phase changes are physical.</li>
    <li>One clue is not always proof.</li>
    <li>Use a closed system to test mass.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calling dissolving a chemical change.</li>
    <li>Thinking burning destroys matter.</li>
    <li>Treating boiling bubbles as evidence of a reaction.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ask: is there a new substance?</li>
    <li>Look for more than one piece of evidence.</li>
    <li>Account for gases in mass problems.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give evidence for every classification.</li>
    <li>Show the mass equation.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">HS-PS1-7</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conservation of mass.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 6 Explanations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using evidence for change.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting concept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy and matter.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with data</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Fire safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Climate and energy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From cooking dinner to protecting bridges from rust, recognizing and controlling chemical changes matters every day.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a CER paragraph explaining whether baking a cake is a chemical change.</li>
    <li>Solve five conservation-of-mass problems.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which everyday change was hardest to classify?</li>
    <li>How does the law of conservation of mass change how I think about burning fuel?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Physical change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same substance, new form.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Chemical change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New substance forms.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Precipitate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solid formed in a reaction.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Conservation of mass</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mass stays constant.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can tell physical from chemical properties.</p>
    <p style="margin:6px 0;">☐ I can tell physical from chemical changes.</p>
    <p style="margin:6px 0;">☐ I can identify evidence of chemical change.</p>
    <p style="margin:6px 0;">☐ I can apply conservation of mass.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a physical property?',
            options: ['Flammability', 'Density', 'Reactivity with acid', 'Ability to rust'],
            correct: 1,
            explanation: 'Measuring density does not change the substance.'
        },
        {
            question: 'Which is a chemical property?',
            options: ['Color', 'Boiling point', 'Flammability', 'Hardness'],
            correct: 2,
            explanation: 'Burning changes the substance.'
        },
        {
            question: 'Which is a chemical change?',
            options: ['Ice melting', 'Paper being cut', 'Sugar dissolving', 'Iron rusting'],
            correct: 3,
            explanation: 'The answer is Iron rusting. Rust is a new substance.'
        },
        {
            question: 'Which is a physical change?',
            options: ['Burning wood', 'Boiling water', 'Baking bread', 'Milk souring'],
            correct: 1,
            explanation: 'The answer is Boiling water. Steam is still water.'
        },
        {
            question: 'A solid forming when two solutions mix is called a:',
            options: ['Solvent', 'Solution', 'Precipitate', 'Distillate'],
            correct: 2,
            explanation: 'Precipitates are evidence of reaction.'
        },
        {
            question: 'Which is evidence of a chemical change?',
            options: ['Unexpected color change', 'Change of shape', 'Change of state', 'Change of size'],
            correct: 0,
            explanation: 'Color change can signal a new substance.'
        },
        {
            question: '10.0 g of CaCO₃ forms 5.6 g of CaO and some CO₂. The mass of CO₂ is:',
            options: ['15.6 g', '4.4 g', '5.6 g', '10.0 g'],
            correct: 1,
            explanation: 'The answer is 4.4 g. 10.0 − 5.6 = 4.4 g.'
        },
        {
            question: 'The law of conservation of mass was demonstrated by:',
            options: ['Isaac Newton', 'Marie Curie', 'Dmitri Mendeleev', 'Antoine Lavoisier'],
            correct: 3,
            explanation: 'Lavoisier used careful measurements.'
        },
        {
            question: 'A burning candle seems to lose mass because:',
            options: ['Gaseous products escape into the air', 'Matter is destroyed', 'Wax disappears completely', 'Light has mass'],
            correct: 0,
            explanation: 'The answer is Gaseous products escape into the air. CO₂ and water vapor leave.'
        },
        {
            question: 'To test conservation of mass with a gas-producing reaction, you should use:',
            options: ['A closed system', 'An open beaker', 'A hot plate only', 'A magnet'],
            correct: 0,
            explanation: 'The answer is A closed system. Gas must not escape.'
        }
    ]
},
{
    name: '1.2 Lab: Separating a Mixture',
    type: 'lesson',
    duration: '60 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lab</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 60 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Lab: Separating a Mixture</h2>
    <p style="font-size:16px;">In this lab you will design and carry out a procedure to separate a mixture of sand, table salt and iron filings using their physical properties, then calculate the percent composition of the mixture and your percent recovery.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wear safety goggles throughout; hot salt water can spatter during evaporation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use tongs or heat-resistant gloves to handle hot evaporating dishes; never touch a hot plate surface.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron filings</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep the magnet inside a plastic bag so filings can be removed easily; avoid touching your eyes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disposal</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dispose of sand and iron in the containers your teacher provides — never down the sink.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Lab Investigation: Separating Sand, Salt and Iron</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To separate a mixture into its components using differences in physical properties and to determine the percent composition of the mixture.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Electronic balance</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Magnet in a plastic bag</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Beaker (250 mL)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Filter funnel and filter paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaporating dish</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hot plate</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stirring rod</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tongs</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">About 10 g of a sand–salt–iron mixture</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Distilled water</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Goggles on at all times.</li>
    <li>Let equipment cool before handling.</li>
    <li>Report any burns or spills immediately.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Measure and record the mass of the whole mixture.</li>
    <li>Spread the mixture on paper and use the bagged magnet to remove the iron filings. Measure their mass.</li>
    <li>Pour the remaining sand and salt into a beaker, add about 50 mL of water and stir until the salt dissolves.</li>
    <li>Measure the mass of a dry filter paper, then filter the mixture. The sand stays on the paper; the salt water (filtrate) passes through.</li>
    <li>Let the sand and filter paper dry, then measure the mass and subtract the filter paper to find the mass of sand.</li>
    <li>Measure the mass of an empty evaporating dish, pour in the filtrate and gently heat it until all the water evaporates. Let it cool.</li>
    <li>Measure the dish with the salt and calculate the mass of salt. Calculate the percent composition and percent recovery.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Component</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mass (g)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Percent of mixture (%)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property used to separate</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron filings</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnetism</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sand</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insoluble in water (filtration)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salt</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soluble in water (evaporation)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Total recovered</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Percent composition and recovery</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">% of component = mass of component ÷ mass of mixture × 100</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Percent recovery = total mass recovered ÷ starting mass × 100.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> %</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Evaluating the composition of the mixture and how well the separation worked.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Dividing by the mass of one component instead of the whole mixture.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Your percentages should add up to your percent recovery.</div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Sample data: a 10.00 g mixture gave 2.15 g iron, 4.60 g sand and 3.05 g salt. Find each percentage and the percent recovery.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Iron 21.5%, sand 46.0%, salt 30.5%; total recovered 9.80 g, so recovery = 98.0%.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why might your percent recovery be less than 100%?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Some salt may stay in the sand or filter paper, some may spatter during heating, and a few particles may be lost when transferring.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why might the sand’s mass be too high?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If the sand is not completely dry, the water adds extra mass, or salt may remain in it.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A mixture can be separated into its components using differences in physical properties: magnetism for iron, solubility and filtration for sand, and evaporation for salt. Because the components keep their own properties, this confirms that the sample was a mixture.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Each step uses a physical property, so no new substances form. The components are recovered unchanged, which is the key difference between separating a mixture and breaking down a compound.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wet sand or filter paper adding extra mass.</li>
    <li>Salt spattering out of the evaporating dish.</li>
    <li>Iron filings left behind or sand stuck to the magnet bag.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Mining, recycling and water treatment use the same ideas on a huge scale to separate valuable materials from mixtures.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Compare your percent composition with that of other groups who were given the same mixture. Which component had the greatest variation between groups? Suggest why.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Percent recovery close to 100% shows a careful separation. Explain any difference honestly.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Lab Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Which property is used to separate iron from the mixture?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Magnetism.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Which property allows salt and sand to be separated?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Salt dissolves in water and sand does not.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Calculate the percent of salt if 2.80 g of salt is recovered from a 10.00 g mixture.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">28.0%</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why is the magnet kept inside a plastic bag?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">So the iron filings can be released easily by removing the magnet from the bag.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How could you check that all the water had evaporated from the salt?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Heat, cool and weigh the dish again until the mass stops changing (constant mass).</div>
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
            question: 'Iron filings are separated from the mixture using:',
            options: ['Filtration', 'Evaporation', 'Distillation', 'A magnet'],
            correct: 3,
            explanation: 'The answer is A magnet. Iron is magnetic.'
        },
        {
            question: 'Sand is separated from salt water by:',
            options: ['Filtration', 'Evaporation', 'Magnetism', 'Chromatography'],
            correct: 0,
            explanation: 'The answer is Filtration. Sand does not dissolve.'
        },
        {
            question: 'Salt is recovered from salt water by:',
            options: ['Filtration', 'Magnetism', 'Evaporation', 'Decanting'],
            correct: 2,
            explanation: 'The answer is Evaporation. The water evaporates.'
        },
        {
            question: 'A 10.00 g mixture gives 9.80 g of recovered components. The percent recovery is:',
            options: ['2.0%', '9.8%', '102%', '98.0%'],
            correct: 3,
            explanation: 'The answer is 98.0%. 9.80 ÷ 10.00 × 100.'
        },
        {
            question: 'Wet sand would make the measured mass of sand:',
            options: ['Too low', 'Too high', 'Exactly right', 'Zero'],
            correct: 1,
            explanation: 'The answer is Too high. Water adds extra mass.'
        },
        {
            question: 'This lab shows the sample was a mixture because:',
            options: ['A new substance formed', 'It caught fire', 'Its components were separated physically and kept their properties', 'Its mass disappeared'],
            correct: 2,
            explanation: 'Mixtures separate by physical means.'
        }
    ]
},
{
    name: '1.2 Quiz: Matter and Its Properties',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Matter and Its Properties</h2>
    <p style="font-size:16px;">Test your understanding of kinetic molecular theory, states of matter, phase changes, classification of matter, separation methods and physical and chemical changes from Topic 1.2.</p>
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
    <li>Kinetic molecular theory and temperature</li>
    <li>Properties of solids, liquids and gases</li>
    <li>Phase changes and energy</li>
    <li>Elements, compounds and mixtures</li>
    <li>Separation techniques</li>
    <li>Physical and chemical changes; conservation of mass</li>
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
    <div>For classification questions, ask “pure or mixed?” first. For change questions, ask “is there a new substance?”</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Particles in a liquid:',
            options: ['Vibrate in fixed positions', 'Move far apart in all directions', 'Slide past each other', 'Do not move'],
            correct: 2,
            explanation: 'The answer is Slide past each other. Liquids flow.'
        },
        {
            question: 'Which phase change is endothermic?',
            options: ['Melting', 'Freezing', 'Condensation', 'Deposition'],
            correct: 0,
            explanation: 'The answer is Melting. Melting absorbs energy.'
        },
        {
            question: 'Water vapor turning into liquid on a cold mirror is:',
            options: ['Evaporation', 'Condensation', 'Sublimation', 'Melting'],
            correct: 1,
            explanation: 'The answer is Condensation. Gas → liquid.'
        },
        {
            question: 'Oxygen gas (O₂) is classified as a(n):',
            options: ['Compound', 'Mixture', 'Element', 'Solution'],
            correct: 2,
            explanation: 'It contains only oxygen atoms.'
        },
        {
            question: 'Brass, an even blend of copper and zinc, is a:',
            options: ['Compound', 'Homogeneous mixture', 'Element', 'Heterogeneous mixture'],
            correct: 1,
            explanation: 'The answer is Homogeneous mixture. It is a uniform alloy.'
        },
        {
            question: 'Granite, with visible specks of different minerals, is a:',
            options: ['Homogeneous mixture', 'Heterogeneous mixture', 'Compound', 'Element'],
            correct: 1,
            explanation: 'The answer is Heterogeneous mixture. Different parts are visible.'
        },
        {
            question: 'Which method separates two liquids with different boiling points?',
            options: ['Filtration', 'Magnetism', 'Decanting', 'Distillation'],
            correct: 3,
            explanation: 'Distillation uses boiling points.'
        },
        {
            question: 'Which is a chemical change?',
            options: ['Baking a cake', 'Melting butter', 'Chopping onions', 'Dissolving salt'],
            correct: 0,
            explanation: 'New substances form when baking.'
        },
        {
            question: 'Bubbles from baking soda and vinegar are evidence of:',
            options: ['A physical change only', 'Boiling', 'A chemical change', 'Freezing'],
            correct: 2,
            explanation: 'The answer is A chemical change. A new gas (CO₂) forms.'
        },
        {
            question: '25.0 g of reactants form 18.3 g of one product and one other. The other has a mass of:',
            options: ['43.3 g', '18.3 g', '25.0 g', '6.7 g'],
            correct: 3,
            explanation: 'The answer is 6.7 g. 25.0 − 18.3 = 6.7.'
        }
    ]
},
{
    name: '1.2 Assignment: Chemistry in My Kitchen',
    type: 'lesson',
    duration: '90 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 90 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Chemistry in My Kitchen</h2>
    <p style="font-size:16px;">Create an illustrated guide (poster, slideshow or booklet) showing the chemistry of matter in a kitchen — classifying substances, explaining phase changes and identifying physical and chemical changes in cooking.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 90 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Task:</strong> Kitchens are full of chemistry. Choose at least ten substances and five changes you can observe in a kitchen. Classify each substance, explain each change using particle ideas, and include one simple conservation-of-mass calculation.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Observe safely: do not heat, mix or taste anything without an adult’s permission. You may use descriptions or pictures instead of doing experiments at home.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>List at least ten kitchen substances and classify each as an element, compound, homogeneous mixture or heterogeneous mixture.</li>
    <li>Draw a particle diagram for at least three of them.</li>
    <li>Describe five changes (for example, boiling water, melting butter, toasting bread, frying an egg, dissolving sugar).</li>
    <li>Classify each change as physical or chemical and give evidence.</li>
    <li>For each phase change, name it and state whether energy is absorbed or released.</li>
    <li>Write and solve one conservation-of-mass problem based on a kitchen reaction (for example, baking soda and vinegar).</li>
    <li>Design your guide with clear headings, labels and pictures, then submit.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Classification table of ten substances with reasons</li>
    <li>Three particle diagrams</li>
    <li>Five changes with classification and evidence</li>
    <li>One conservation-of-mass calculation</li>
    <li>Your finished guide</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Classification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All ten substances correctly classified with clear reasons</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most correctly classified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Changes and evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All five changes correctly classified with strong evidence and particle explanations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct with evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors or weak evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little evidence</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle diagrams</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, labeled diagrams</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conservation of mass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct calculation with clear explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct calculation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculation with errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, attractive and well organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat unclear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hard to follow</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Remember that most foods are mixtures.<br>Look for more than one piece of evidence for chemical changes.<br>Use the classification flowchart.<br>Label every diagram.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which kitchen change surprised you most?</li>
    <li>How has this topic changed how you see cooking?</li>
    <li>What question about kitchen chemistry would you like to investigate?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many substances must the guide classify?',
            options: ['One', 'At least ten', 'Three', 'Exactly five'],
            correct: 1,
            explanation: 'The answer is At least ten. At least ten substances.'
        },
        {
            question: 'Melting butter is a:',
            options: ['Chemical change', 'Compound', 'Precipitate', 'Physical change'],
            correct: 3,
            explanation: 'The answer is Physical change. It is still butter.'
        },
        {
            question: 'Frying an egg is a:',
            options: ['Chemical change', 'Physical change', 'Phase change only', 'Mixture'],
            correct: 0,
            explanation: 'New substances form; you cannot un-fry it.'
        },
        {
            question: 'Sugar is classified as a(n):',
            options: ['Element', 'Heterogeneous mixture', 'Solution', 'Compound'],
            correct: 3,
            explanation: 'Sugar is a pure substance made of several elements.'
        },
        {
            question: 'Why must you not taste or mix substances at home without permission?',
            options: ['For safety', 'Because it is too easy', 'It ruins the guide', 'It is not chemistry'],
            correct: 0,
            explanation: 'The answer is For safety. Safety comes first.'
        },
        {
            question: 'Boiling water absorbs energy, so it is:',
            options: ['Exothermic', 'A chemical change', 'Endothermic', 'Deposition'],
            correct: 2,
            explanation: 'The answer is Endothermic. Vaporization absorbs energy.'
        }
    ]
},
{
    name: '1.2 Review: Matter and Its Properties',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Matter and Its Properties</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and the whole unit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Kinetic Molecular Theory</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Particles are always moving.</li>
    <li>Temperature = average kinetic energy.</li>
    <li>Solids vibrate; liquids slide; gases move freely.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Phase Changes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Absorb energy: melting, vaporization, sublimation.</li>
    <li>Release energy: freezing, condensation, deposition.</li>
    <li>Temperature stays constant during a phase change.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Classifying Matter</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pure substances: elements and compounds.</li>
    <li>Mixtures: homogeneous (solutions) and heterogeneous.</li>
    <li>Separation: filtration, evaporation, distillation, magnetism, chromatography.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ce93d8;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Changes in Matter</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Physical change: same substance.</li>
    <li>Chemical change: new substance; look for gas, color, precipitate, energy, odor.</li>
    <li>Mass is conserved.</li>
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
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sublimation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solid → gas</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dry ice</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compound</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elements bonded in a fixed ratio</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">H₂O</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Homogeneous mixture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Salt water</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distillation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separation by boiling point</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Purifying water</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemical change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New substance forms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rusting</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conservation of mass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mass in = mass out</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10.0 g → 5.6 g + 4.4 g</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Describe the particles in a gas.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Far apart, moving fast in all directions, with weak attractions.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name a phase change that releases energy and give an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Freezing (water to ice), condensation (dew) or deposition (frost).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Classify vinegar, iron and carbon dioxide.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vinegar: homogeneous mixture; iron: element; carbon dioxide: compound.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How would you separate a mixture of water and alcohol?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Distillation.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Classify: a match burning; ice cream melting.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Chemical change; physical change.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A reaction starts with 40.0 g of reactants and produces 31.5 g of one product. Find the mass of the other product.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">8.5 g</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can explain the states of matter with KMT.</p>
    <p style="margin:6px 0;">☐ I can name and explain phase changes.</p>
    <p style="margin:6px 0;">☐ I can classify matter.</p>
    <p style="margin:6px 0;">☐ I can choose separation methods.</p>
    <p style="margin:6px 0;">☐ I can distinguish physical and chemical changes and apply conservation of mass.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Particles in a gas are:',
            options: ['Far apart and moving fast', 'Tightly packed', 'Vibrating in place', 'Not moving'],
            correct: 0,
            explanation: 'The answer is Far apart and moving fast. Gases have the most space.'
        },
        {
            question: 'Which phase change releases energy?',
            options: ['Condensation', 'Melting', 'Vaporization', 'Sublimation'],
            correct: 0,
            explanation: 'The answer is Condensation. Condensation is exothermic.'
        },
        {
            question: 'Vinegar is a:',
            options: ['Compound', 'Element', 'Homogeneous mixture', 'Heterogeneous mixture'],
            correct: 2,
            explanation: 'Acetic acid dissolved evenly in water.'
        },
        {
            question: 'Water and alcohol can be separated by:',
            options: ['Filtration', 'Magnetism', 'Decanting', 'Distillation'],
            correct: 3,
            explanation: 'They have different boiling points.'
        },
        {
            question: 'A match burning is a:',
            options: ['Physical change', 'Phase change', 'Chemical change', 'Mixture'],
            correct: 2,
            explanation: 'New substances and energy are produced.'
        },
        {
            question: '40.0 g of reactants produce 31.5 g of one product. The other product is:',
            options: ['71.5 g', '8.5 g', '31.5 g', '40.0 g'],
            correct: 1,
            explanation: 'The answer is 8.5 g. 40.0 − 31.5 = 8.5.'
        }
    ]
},
{
    name: '1.2 Summary: Matter and Its Properties',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #6a1b9a, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ce93d8;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Matter and Measurement · Topic 1.2 Matter and Its Properties</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ce93d8;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Matter and Its Properties</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> All matter is made of moving particles. How those particles are arranged and combined determines a substance’s state, its classification and its properties — and when particles are rearranged into new substances, mass is always conserved.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Kinetic molecular theory explains solids, liquids and gases through particle motion and attraction.</li>
    <li>Six phase changes link the states; some absorb energy and some release it.</li>
    <li>Pure substances are elements or compounds; mixtures are homogeneous or heterogeneous.</li>
    <li>Mixtures can be separated using physical properties such as magnetism, solubility and boiling point.</li>
    <li>Physical changes alter form; chemical changes produce new substances, shown by several kinds of evidence.</li>
    <li>The law of conservation of mass states that mass is neither created nor destroyed in chemical reactions. (HS-PS1-7)</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 States of Matter and KMT</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Particle motion, states, phase changes and energy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Draw particle diagrams</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Classifying Matter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elements, compounds, mixtures, separation methods</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the classification flowchart</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Physical and Chemical Changes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Properties, evidence of change, conservation of mass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ask: is there a new substance?</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">kinetic molecular theory</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">kinetic energy</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">phase change</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">sublimation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">endothermic</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">exothermic</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">element</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compound</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">homogeneous mixture</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">heterogeneous mixture</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">distillation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">physical change</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">chemical change</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">precipitate</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">conservation of mass</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From clean water and recycling to cooking and fuel, understanding matter and its changes helps us live safely and sustainably.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #ce93d8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Matter and Measurement. In Unit 2.0 you will look inside the atom — protons, neutrons and electrons, isotopes, and nuclear chemistry.</div>
    </div>
    <div style="background:#2a1838;padding:20px;border-radius:12px;border:1px solid #ce93d8;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can explain the states of matter using particles.</p>
    <p style="margin:6px 0;">✔️ I can describe the six phase changes and their energy.</p>
    <p style="margin:6px 0;">✔️ I can classify matter and separate mixtures.</p>
    <p style="margin:6px 0;">✔️ I can distinguish physical and chemical changes.</p>
    <p style="margin:6px 0;">✔️ I can use conservation of mass in calculations.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.2 is that matter’s properties depend on:',
            options: ['Its price', 'Its name', 'How its particles are arranged and combined', 'Its color only'],
            correct: 2,
            explanation: 'The answer is How its particles are arranged and combined. Particles explain properties.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['Genetics', 'Plate tectonics', 'Atomic structure', 'Ecology'],
            correct: 2,
            explanation: 'You will look inside the atom.'
        },
        {
            question: 'Which is a pure substance?',
            options: ['Water', 'Air', 'Salad', 'Salt water'],
            correct: 0,
            explanation: 'Water has a fixed composition.'
        },
        {
            question: 'Which change produces a new substance?',
            options: ['Melting', 'Dissolving', 'Cutting', 'Rusting'],
            correct: 3,
            explanation: 'The answer is Rusting. Rusting forms iron oxide.'
        },
        {
            question: 'Deposition is:',
            options: ['Gas → solid', 'Solid → gas', 'Liquid → gas', 'Solid → liquid'],
            correct: 0,
            explanation: 'The answer is Gas → solid. Frost forms by deposition.'
        },
        {
            question: 'Conservation of mass means:',
            options: ['Mass always increases', 'Mass is neither created nor destroyed in reactions', 'Mass always decreases', 'Only gases have mass'],
            correct: 1,
            explanation: 'The answer is Mass is neither created nor destroyed in reactions. Total mass stays the same.'
        }
    ]
}
],
          stats:{lessons:19,exercises:128,quizzes:20,projects:2,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'The SI base unit of mass is the:',
                  options: ['Gram', 'Pound', 'Kilogram', 'Newton'],
                  correct: 2,
                  explanation: 'The kilogram is the SI base unit of mass.'
              },
              {
                  question: 'Write 0.00073 in scientific notation.',
                  options: ['7.3 × 10⁴', '7.3 × 10⁻⁴', '73 × 10⁻⁵', '0.73 × 10⁻³'],
                  correct: 1,
                  explanation: 'Move the decimal 4 places right, so the exponent is −4.'
              },
              {
                  question: 'How many significant figures are in 0.00450?',
                  options: ['3', '2', '5', '6'],
                  correct: 0,
                  explanation: 'Leading zeros do not count; the trailing zero after the decimal does.'
              },
              {
                  question: 'Measurements that are close to each other but far from the true value are:',
                  options: ['Precise but not accurate', 'Accurate but not precise', 'Accurate and precise', 'Neither'],
                  correct: 0,
                  explanation: 'Precision is agreement; accuracy is closeness to the true value.'
              },
              {
                  question: 'Convert 5.0 km to meters.',
                  options: ['5.0 × 10⁻³ m', '5.0 × 10³ m', '500 m', '50 m'],
                  correct: 1,
                  explanation: '1 km = 1,000 m.'
              },
              {
                  question: 'A 54.0 g sample has a volume of 20.0 cm³. Its density is:',
                  options: ['1,080 g/cm³', '0.370 g/cm³', '34.0 g/cm³', '2.70 g/cm³'],
                  correct: 3,
                  explanation: 'Density = mass ÷ volume.'
              },
              {
                  question: '25 °C equals:',
                  options: ['248 K', '298 K', '25 K', '77 K'],
                  correct: 1,
                  explanation: 'K = °C + 273.15, about 298 K.'
              },
              {
                  question: 'Salt water is an example of a:',
                  options: ['Heterogeneous mixture', 'Compound', 'Element', 'Homogeneous mixture (solution)'],
                  correct: 3,
                  explanation: 'Salt is evenly dissolved throughout the water.'
              },
              {
                  question: 'Water (H₂O) is classified as a(n):',
                  options: ['Element', 'Mixture', 'Compound', 'Solution'],
                  correct: 2,
                  explanation: 'It is two elements chemically combined in a fixed ratio.'
              },
              {
                  question: 'Which is a chemical change?',
                  options: ['Ice melting', 'Sugar dissolving', 'Glass breaking', 'Iron rusting'],
                  correct: 3,
                  explanation: 'Rusting forms a new substance, iron oxide.'
              },
              {
                  question: 'A solid changing directly into a gas is called:',
                  options: ['Sublimation', 'Deposition', 'Condensation', 'Melting'],
                  correct: 0,
                  explanation: 'Dry ice (solid CO₂) sublimes.'
              },
              {
                  question: '10.0 g of a substance decomposes into 5.6 g of one product. The other product has a mass of:',
                  options: ['15.6 g', '5.6 g', '4.4 g', '10.0 g'],
                  correct: 2,
                  explanation: 'Mass is conserved: 10.0 − 5.6 = 4.4 g.'
              }
          ]}
);