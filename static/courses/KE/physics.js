// Eschool course: Grade 10 Physics (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'physics', name:'Grade 10 Physics', code:'PHY 101', level:'grade-10', iconStyle:'fas', icon:'fa-atom', color:'#f57c00',
          category:'Sciences',
          description:'Understand forces, pressure, materials, heat, energy, waves, electricity and space through clear explanations, worked examples and hands-on practical investigations.',
          longDescription:'This Grade 10 Physics course follows the KICD Grade 10 Physics curriculum design strand by strand: Mechanics and Thermal Physics, Waves and Optics, Electricity and Magnetism, and Environmental and Space Physics. Each strand opens with an overview and its learning outcomes, and every sub-strand has three lessons followed by a quiz, an assignment, a revision page and a summary. Lessons include learning outcomes and objectives, a key inquiry question, a teacher explanation, key-term cards with symbols and SI units, formula cards, diagrams, step-by-step worked examples, a practical investigation with safety precautions, applications and careers, guided practice, independent, pair, group and digital activities, CBC competencies, values and PCIs, common mistakes, teacher tips, exam tips, interactive questions, practice exercises, homework, reflection, a glossary and a 10-question quiz with explanations.',
          modules:[
{
    name: '1.0 Mechanics and Thermal Physics — Strand Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🗺️ Strand 1.0: Mechanics and Thermal Physics</h2>
    <p style="font-size:16px;">Welcome to Grade 10 Physics. Physics explains why a boda boda leans into a corner, why a sufuria lid is made slightly wider than the pot, how a small push on a car jack lifts a whole car, and why a guitar string snaps but a spring stretches.</p>
    <p style="font-size:16px;">In this first strand you will study forces, pressure, materials, heat and temperature, turning effects, energy and machines — the physics that engineers, mechanics, builders, doctors and farmers use every day.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#ffedd5;">❓ Big question for this strand:</strong> How do forces, pressure, heat and energy shape the world around us and the machines we use?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>Mechanics is the study of forces and motion. Thermal physics is the study of heat and temperature. Together they explain much of everyday life and technology.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Big question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">You will be able to…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Introduction to Physics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How is Physics relevant in day-to-day life?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explain what Physics is, its branches, its importance, its links to other fields and related careers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Pressure</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How do density, gravity and depth affect pressure in a fluid?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe and demonstrate atmospheric pressure, use P = F/A and P = ρgh, and explain hydraulic machines and other applications.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Mechanical Properties of Materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why does a string snap more easily than a spring?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Demonstrate properties such as elasticity and ductility, and calculate stress, strain and Young’s modulus.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Temperature and Thermal Expansion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why is the lid of a sufuria made wider?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measure temperature with different instruments, investigate expansion and explain its applications.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.5 Moments and Equilibrium</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How does stability affect the design of structures?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find centres of gravity, use the principle of moments and explain stability.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.6 Energy, Work, Power and Machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How do machines make work easier?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculate work, energy, power, MA, VR and efficiency and build simple machines.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Strand Map</h3>
    <p>Strand 1.0 has six sub-strands. Each has three lessons followed by a quiz, an assignment, a revision page and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.1 Introduction to Physics <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Mechanics and Thermal Physics</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 What Physics is and its branches</li>
    <li>1.1.2 Importance of Physics and links to other fields</li>
    <li>1.1.3 Careers in Physics</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.2 Pressure <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Mechanics and Thermal Physics</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Pressure and atmospheric pressure</li>
    <li>1.2.2 Pressure in fluids: P = ρgh</li>
    <li>1.2.3 Transmission of pressure and applications</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.3 Mechanical Properties of Materials <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Mechanics and Thermal Physics</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.3.1 Mechanical properties of materials</li>
    <li>1.3.2 Force, extension and the spring constant</li>
    <li>1.3.3 Stress, strain and Young’s modulus</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.4 Temperature and Thermal Expansion <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Mechanics and Thermal Physics</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.4.1 Temperature and its measurement</li>
    <li>1.4.2 Expansion of solids and linear expansivity</li>
    <li>1.4.3 Expansion of fluids and applications</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.5 Moments and Equilibrium <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Mechanics and Thermal Physics</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.5.1 Centre of gravity and equilibrium</li>
    <li>1.5.2 Moments and the principle of moments</li>
    <li>1.5.3 Torque, couples and stability</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.6 Energy, Work, Power and Machines <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Mechanics and Thermal Physics</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.6.1 Energy, work and power</li>
    <li>1.6.2 Energy transformations and conservation</li>
    <li>1.6.3 Simple machines: MA, VR and efficiency</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group practicals, discussions and presentations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving numerical problems and analysing results.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and imagination</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing apparatus and simple machines from local materials.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching applications and careers with digital devices.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engaging resource persons and reflecting on experiments.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Citizenship</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ethical digital research and responsibility to the community.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Love</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Peace</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Patriotism</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 PCIs</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gender equality and myths about Physics</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental education and climate change</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security (fire, road and material safety)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-economic issues</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Life skills</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Strand</p>
    <div>Work through the modules in order. In every lesson, learn the key terms and formulae, study each worked example step by step, then try the guided practice before looking at the answers. Do every practical investigation you can — with your teacher’s supervision and the safety precautions given. Keep a Physics notebook for definitions, formulae, diagrams and results tables, and always write units in your answers.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Strand 1.0 Mechanics and Thermal Physics?',
            options: ['Two', 'Four', 'Six', 'Thirteen'],
            correct: 2,
            explanation: 'Strand 1.0 has six sub-strands, from Introduction to Physics to Energy, Work, Power and Machines.'
        },
        {
            question: 'Which sub-strand deals with the formula P = ρgh?',
            options: ['1.3 Mechanical Properties of Materials', '1.2 Pressure', '1.5 Moments and Equilibrium', '1.1 Introduction to Physics'],
            correct: 1,
            explanation: 'Pressure in fluids, P = ρgh, is part of sub-strand 1.2.'
        },
        {
            question: 'Mechanics is the study of:',
            options: ['Forces and motion', 'Living things', 'Chemical reactions', 'Ancient history'],
            correct: 0,
            explanation: 'Mechanics deals with forces and motion; biology studies living things and chemistry studies reactions.'
        },
        {
            question: 'Which question belongs to sub-strand 1.4?',
            options: ['How do machines make work easier?', 'Why does a string snap more easily than a spring?', 'How is Physics relevant in daily life?', 'Why is the lid of a sufuria made wider?'],
            correct: 3,
            explanation: 'This question about expansion belongs to Temperature and Thermal Expansion.'
        },
        {
            question: 'Why should you always write units in Physics answers?',
            options: ['Units make answers longer', 'Units are only for exams', 'A number without a unit has no clear physical meaning', 'Units replace working'],
            correct: 2,
            explanation: '“5” could be 5 N, 5 m or 5 kg; the unit gives the quantity its meaning.'
        }
    ]
},
{
    name: '1.0 Mechanics and Thermal Physics — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🎯 Learning Outcomes for Strand 1.0</h2>
    <p style="font-size:16px;">These are the outcomes you are expected to achieve in this strand. Return here after each sub-strand and tick off what you can do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌟 General Learning Outcomes for the Strand</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Connect Physics to technology and society and appreciate the physical environment.</li>
    <li>Develop science process skills by using appropriate instruments to explore and explain nature.</li>
    <li>Apply scientific skills and critical thinking to solve problems in the community.</li>
    <li>Apply Physics principles to support innovation, entrepreneurship and development.</li>
    <li>Explore talents and careers related to Physics for further training and self-fulfilment.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.1 Introduction to Physics</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning of Physics as a body of scientific knowledge.</li>
    <li>Describe the branches of Physics.</li>
    <li>Outline the importance of Physics in daily life and its relation to other fields.</li>
    <li>Identify career opportunities related to Physics.</li>
    <li>Appreciate the relevance of Physics in daily life.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How is Physics relevant in day-to-day life?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.2 Pressure</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe atmospheric pressure and demonstrate its existence.</li>
    <li>Investigate factors affecting pressure in fluids.</li>
    <li>Apply the fluid pressure equation P = ρgh.</li>
    <li>Demonstrate transmission of pressure in fluids.</li>
    <li>Appreciate applications of pressure.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do the density of a fluid, acceleration due to gravity and depth affect pressure in a fluid?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.3 Mechanical Properties of Materials</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain and demonstrate mechanical properties of materials.</li>
    <li>Determine tensile stress and strain using formulae.</li>
    <li>Describe industrial and everyday applications of mechanical properties.</li>
    <li>Appreciate the importance of mechanical properties.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Why does a string snap easily as compared to a spring?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.4 Temperature and Thermal Expansion</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain temperature and measure it using different technologies.</li>
    <li>Investigate thermal expansion and contraction in solids and fluids.</li>
    <li>Describe applications of thermal expansion.</li>
    <li>Appreciate their everyday relevance.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Why is the lid of a sufuria made wider?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.5 Moments and Equilibrium</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Determine the centre of gravity of regular and irregular objects.</li>
    <li>Identify states of equilibrium.</li>
    <li>Determine moments and verify the principle of moments.</li>
    <li>Describe torque and couples, and appreciate applications of moments and stability.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How does the stability of bodies affect the designs of their structures?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0;color:#fdba74;font-weight:bold;">1.6 Energy, Work, Power and Machines</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain energy, work and power in relation to machines.</li>
    <li>Demonstrate transformations of mechanical energy.</li>
    <li>Describe how simple machines make work easier.</li>
    <li>Appreciate machines in daily life.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do machines make work easier?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your teacher (and this course) will use the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Strand 1.0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Determines pressure, stress, strain and moments accurately and systematically; explains applications comprehensively; carries out investigations systematically.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Determines quantities accurately; explains applications accurately; carries out investigations accurately.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Determines quantities partially or omits some steps; explains applications partially.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Determines quantities and explains applications only with prompts, cues or help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Physics is assessed through written work, practical skills and projects. Careful measurement, honest recording of results, correct units and clear working all earn credit.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a learning outcome of sub-strand 1.3?',
            options: ['Determine tensile stress and strain', 'Apply P = ρgh', 'Verify the principle of moments', 'Measure temperature'],
            correct: 0,
            explanation: 'Stress and strain belong to Mechanical Properties of Materials; the others belong to 1.2, 1.5 and 1.4.'
        },
        {
            question: 'Which key inquiry question belongs to 1.6?',
            options: ['Why is the lid of a sufuria made wider?', 'How do machines make work easier?', 'How is Physics relevant in daily life?', 'Why does a string snap more easily than a spring?'],
            correct: 1,
            explanation: 'Machines are studied in Energy, Work, Power and Machines.'
        },
        {
            question: 'A learner who determines pressure only with prompts is at which level?',
            options: ['Meets Expectations', 'Exceeds Expectations', 'Below Expectations', 'Approaches Expectations'],
            correct: 2,
            explanation: 'Needing prompts is described as Below Expectations.'
        },
        {
            question: '“Systematically” in the rubric means:',
            options: ['Very quickly', 'Without units', 'By guessing', 'In a clear, orderly, step-by-step way'],
            correct: 3,
            explanation: 'Systematic work follows logical steps.'
        },
        {
            question: 'Honest recording of experimental results shows the value of:',
            options: ['Patriotism', 'Integrity', 'Peace', 'Unity'],
            correct: 1,
            explanation: 'Reporting genuine results is integrity.'
        }
    ]
},
{
    name: '1.1.1 Introduction to Physics: What Physics Is and Its Branches',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.1.1: What Physics Is and Its Branches</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what Physics is, how physicists find out about the world using the scientific method, and the main branches of Physics with everyday examples of each.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Physics is the foundation of almost every technology you use — phones, electricity, vehicles, medical scanners, solar panels. Understanding what it covers helps you see Physics everywhere and choose your future path.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Mobile phones</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Vehicles</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">☀️ Solar panels</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 X-rays and scans</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌦️ Weather forecasts</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛰️ Satellites</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning of Physics as a body of scientific knowledge.</li>
    <li>Describe the branches of Physics.</li>
    <li>Outline the importance of Physics in daily life and its relation to other fields.</li>
    <li>Identify career opportunities related to Physics.</li>
    <li>Appreciate the relevance of Physics in daily life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define Physics.</li>
    <li>Describe the steps of the scientific method.</li>
    <li>Name and describe the main branches of Physics.</li>
    <li>Classify everyday situations by branch of Physics.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> How is Physics relevant in day-to-day life?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> In Junior School Integrated Science you studied force, energy, electricity, light and sound.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Why does a stone fall but a hot-air balloon rise? Why can you see lightning before you hear thunder? Why does a phone charger get warm? Questions like these are the heart of <strong>Physics</strong>.</p>
    <p><strong>Physics</strong> is the branch of science that studies <strong>matter</strong>, <strong>energy</strong> and how they interact — including forces, motion, heat, light, sound, electricity, magnetism and the structure of atoms. It is a <strong>body of scientific knowledge</strong> built up over centuries by observation, experiment and reasoning.</p>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Physics asks <strong>how</strong> and <strong>why</strong> things in nature behave as they do — from the tiniest atom to the whole universe.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Physics</strong>
    </p>
    <p style="margin:6px 0;">The science of matter, energy and their interactions.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Explaining why a boda boda leans into a bend is Physics.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Matter</strong>
    </p>
    <p style="margin:6px 0;">Anything that has mass and occupies space.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> mass m, kilogram (kg)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Water, air and steel are all matter.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Energy</strong>
    </p>
    <p style="margin:6px 0;">The ability to do work.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> E, joule (J)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A charged phone battery stores chemical energy.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Hypothesis</strong>
    </p>
    <p style="margin:6px 0;">A testable prediction or explanation.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“If the ramp is steeper, the ball will roll faster.”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Experiment</strong>
    </p>
    <p style="margin:6px 0;">A planned test carried out to check a hypothesis.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Timing a ball on ramps of different heights.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Variable</strong>
    </p>
    <p style="margin:6px 0;">A quantity that can change in an experiment.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Ramp height (changed), time taken (measured).</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Physics as a Body of Scientific Knowledge</h3>
    <p>Physicists build knowledge using the <strong>scientific method</strong>:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li><strong>Observe</strong> something and ask a question.</li>
    <li><strong>Form a hypothesis</strong> — a testable prediction.</li>
    <li><strong>Experiment</strong>: change one variable, measure another, keep the rest constant.</li>
    <li><strong>Record and analyse</strong> the results (tables, graphs).</li>
    <li><strong>Conclude</strong> whether the hypothesis is supported.</li>
    <li><strong>Communicate</strong> findings so others can repeat and check them.</li>
    </ol>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Note</p>
    <div>Scientific knowledge is reliable because results can be <strong>repeated</strong> and <strong>checked</strong> by others — and it changes when new evidence appears.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Planning a fair test</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Wanjiku thinks a pendulum with a longer string swings more slowly. Describe how she can test this fairly.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Identify what to change, what to measure and what to keep the same.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Hypothesis</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A longer string makes the pendulum take longer for each swing.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Independent variable (change)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">String length: 20 cm, 40 cm, 60 cm, 80 cm.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Dependent variable (measure)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Time for 10 complete swings, divided by 10.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#ffedd5;">Step 4: Control variables (keep same)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Same bob mass, same small release angle, same timer.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#ffedd5;">Step 5: Conclude</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Plot time against length and see whether time increases.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Change only the string length, measure the time for 10 swings at each length, keep mass and angle constant, then analyse the pattern.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Only one variable changes, so any change in swing time can be linked to length.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Branches of Physics</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Branch</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it studies</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Everyday example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mechanics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forces, motion, pressure, energy and machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brakes stopping a bus; a car jack lifting a car</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thermal physics (heat)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Temperature, heat transfer, expansion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A thermos flask keeping tea hot; power lines sagging on hot days</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Waves and optics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound, light and other waves; lenses and mirrors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spectacles, echoes, rainbows</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electricity and magnetism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Charges, currents, circuits, magnets, motors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lighting a house; electric motors in posho mills</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atomic and nuclear physics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atoms, nuclei and radioactivity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">X-rays and radiotherapy in hospitals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electronics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Devices such as diodes and transistors that control current</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Phones, radios, computers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Environmental and space physics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Earth’s atmosphere, climate and the universe</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Weather satellites; studying climate change</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 220" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="280" y1="110" x2="90" y2="40" stroke="#fdba74" stroke-width="1.5"/><rect x="20" y="26" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="90" y="44" fill="#fde68a" font-size="12" text-anchor="middle">Mechanics</text><line x1="280" y1="110" x2="470" y2="40" stroke="#fdba74" stroke-width="1.5"/><rect x="400" y="26" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="470" y="44" fill="#fde68a" font-size="12" text-anchor="middle">Thermal physics</text><line x1="280" y1="110" x2="70" y2="110" stroke="#fdba74" stroke-width="1.5"/><rect x="0" y="96" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="70" y="114" fill="#fde68a" font-size="12" text-anchor="middle">Waves & optics</text><line x1="280" y1="110" x2="490" y2="110" stroke="#fdba74" stroke-width="1.5"/><rect x="420" y="96" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="490" y="114" fill="#fde68a" font-size="12" text-anchor="middle">Electricity & magnetism</text><line x1="280" y1="110" x2="100" y2="185" stroke="#fdba74" stroke-width="1.5"/><rect x="30" y="171" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="100" y="189" fill="#fde68a" font-size="12" text-anchor="middle">Atomic & nuclear</text><line x1="280" y1="110" x2="460" y2="185" stroke="#fdba74" stroke-width="1.5"/><rect x="390" y="171" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="460" y="189" fill="#fde68a" font-size="12" text-anchor="middle">Electronics</text><line x1="280" y1="110" x2="280" y2="205" stroke="#fdba74" stroke-width="1.5"/><rect x="210" y="191" width="140" height="26" rx="13" fill="#1e1b4b" stroke="#fdba74"/><text x="280" y="209" fill="#fde68a" font-size="12" text-anchor="middle">Environmental & space</text><circle cx="280" cy="110" r="46" fill="#7c2d12" stroke="#fb923c" stroke-width="2"/><text x="280" y="115" fill="#ffedd5" text-anchor="middle" font-weight="bold">PHYSICS</text>
    </svg>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> A solar panel charging a phone involves which branch(es)?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Electricity (and atomic/electronic physics in the solar cell; light in optics).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which branch explains why bridges have small gaps called expansion joints?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Thermal physics (thermal expansion), with mechanics.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name the branch that studies X-rays and radioactivity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Atomic and nuclear physics.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: A Simple Pendulum Fair Test</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To practise the scientific method by investigating how the length of a pendulum affects the time for one swing.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">String</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small mass (bob) or stone</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Retort stand and clamp</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatch or phone timer</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Tie the bob to the string and clamp it so that the length (pivot to centre of bob) is 20 cm.</li>
    <li>Pull the bob aside by a small angle (about 10°) and release.</li>
    <li>Time 10 complete swings and divide by 10 to get the time for one swing.</li>
    <li>Repeat for 40 cm, 60 cm and 80 cm, keeping the angle and bob the same.</li>
    <li>Record results in a table and draw a graph of time against length.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Length (cm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time for 10 swings (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time for 1 swing (s)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Longer pendulums take longer to complete one swing. Changing one variable at a time lets you link the cause (length) to the effect (time).</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Clamp the stand firmly so it does not topple.</li>
    <li>Keep a safe distance from the swinging bob.</li>
    <li>Do not swing the bob towards other learners.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Physics is everywhere in Kenya’s development: geothermal power at Olkaria uses heat from inside the Earth; wind turbines at Lake Turkana use mechanics and electromagnetism; mobile money relies on electronics and radio waves; hospitals use X-rays and ultrasound.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Once you know the branches, you start to notice Physics in every device and every activity around you.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Define Physics.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Include matter and energy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The science of matter, energy and their interactions.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which branch deals with lenses and mirrors?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of spectacles.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Waves and optics.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> In an experiment, what is a control variable?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Not changed, not measured.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A quantity kept the same so the test is fair.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List ten devices at home and name the main branch of Physics behind each.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Take turns describing an everyday event; your partner names the branch of Physics involved.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a large mind map of the branches of Physics with pictures from magazines or drawings.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Search for “Olkaria geothermal power” and note which branches of Physics are involved in producing electricity there.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is matter?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Anything that has mass and occupies space.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name four branches of Physics.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">E.g. mechanics, thermal physics, waves and optics, electricity and magnetism, atomic and nuclear physics, electronics.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> List the steps of the scientific method.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Observe and question, hypothesise, experiment, record and analyse, conclude, communicate.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Classify: (a) an echo in a hall (b) a fridge cooling food (c) a lift raising people.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">(a) waves (sound) (b) thermal physics (c) mechanics (with electricity for the motor).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why scientific knowledge can change over time.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">New experiments and better instruments can produce new evidence that improves or replaces older explanations.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A farmer wants to know whether a black water tank warms water faster than a white one. Suggest a fair test.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Fill both with equal water at the same starting temperature, place side by side in the sun, measure temperature every 15 minutes; only colour differs.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Why do you think Physics is often called the “fundamental science”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Its laws of matter and energy underlie chemistry, biology, engineering and technology.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Physics is the science of matter, energy and their interactions. Physicists build knowledge using the scientific method: observe, hypothesise, experiment, analyse, conclude and communicate. The main branches are mechanics, thermal physics, waves and optics, electricity and magnetism, atomic and nuclear physics, electronics, and environmental and space physics.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Physics = matter + energy + interactions.</li>
    <li>Scientific method: observe → hypothesise → experiment → analyse → conclude → communicate.</li>
    <li>Fair test: change one variable, measure one, control the rest.</li>
    <li>Seven branches with everyday examples.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Results must be repeatable.</li>
    <li>Many devices involve more than one branch.</li>
    <li>Always record units.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Changing several variables at once.</li>
    <li>Thinking Physics is only formulae.</li>
    <li>Confusing Physics with Chemistry.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep a list of everyday Physics examples.</li>
    <li>Draw results tables before starting an experiment.</li>
    <li>Ask “which branch?” whenever you see a device.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Definitions must be precise.</li>
    <li>When asked for branches, give an example for each.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group mind maps and discussions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Learning to learn</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carrying out a fair test.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching Kenyan Physics applications.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Myths and misconceptions about Physics</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Engineers, doctors, meteorologists and technicians all rely on the branches of Physics.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a short paragraph on how three branches of Physics are used in your home.</li>
    <li>Plan a fair test to find out whether salt water freezes faster than fresh water.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which branch of Physics interests me most? Why?</li>
    <li>What everyday question would I like Physics to answer for me?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Physics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Science of matter and energy.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hypothesis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Testable prediction.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Independent variable</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What you change.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Dependent variable</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What you measure.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Control variable</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What you keep the same.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can define Physics.</p>
    <p style="margin:6px 0;">☐ I can describe the scientific method.</p>
    <p style="margin:6px 0;">☐ I can name the branches of Physics.</p>
    <p style="margin:6px 0;">☐ I can classify everyday situations by branch.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Physics is best defined as the science of:',
            options: ['Matter, energy and their interactions', 'Living things', 'Chemical reactions only', 'Rocks and soils'],
            correct: 0,
            explanation: 'Physics studies matter and energy; living things are Biology and reactions are Chemistry.'
        },
        {
            question: 'Which branch studies lenses and mirrors?',
            options: ['Waves and optics', 'Mechanics', 'Thermal physics', 'Nuclear physics'],
            correct: 0,
            explanation: 'Optics deals with light, lenses and mirrors.'
        },
        {
            question: 'A testable prediction is called a:',
            options: ['Conclusion', 'Hypothesis', 'Variable', 'Law'],
            correct: 1,
            explanation: 'A hypothesis is tested by experiment.'
        },
        {
            question: 'In a fair test, the variable you change is the:',
            options: ['Dependent variable', 'Control variable', 'Independent variable', 'Constant'],
            correct: 2,
            explanation: 'You choose and change the independent variable.'
        },
        {
            question: 'A car jack lifting a car is an example of:',
            options: ['Optics', 'Nuclear physics', 'Electronics', 'Mechanics'],
            correct: 3,
            explanation: 'It involves forces and pressure — mechanics.'
        },
        {
            question: 'X-rays belong mainly to:',
            options: ['Mechanics', 'Thermal physics', 'Atomic and nuclear physics', 'Space physics only'],
            correct: 2,
            explanation: 'X-rays come from atomic processes and are studied in atomic physics.'
        },
        {
            question: 'Why must experiments be repeatable?',
            options: ['To waste time', 'So that others can check the results', 'To change the answer', 'Because teachers say so'],
            correct: 1,
            explanation: 'Repeatability makes scientific knowledge reliable.'
        },
        {
            question: 'Geothermal power at Olkaria uses heat from:',
            options: ['Inside the Earth', 'The Moon', 'Batteries', 'Wind'],
            correct: 0,
            explanation: 'Geothermal energy comes from heat within the Earth.'
        },
        {
            question: 'Matter is anything that:',
            options: ['Is invisible', 'Moves', 'Is hot', 'Has mass and occupies space'],
            correct: 3,
            explanation: 'This is the definition of matter.'
        },
        {
            question: 'In the pendulum test, the time for one swing is the:',
            options: ['Independent variable', 'Control variable', 'Dependent variable', 'Hypothesis'],
            correct: 2,
            explanation: 'Time is what is measured and depends on length.'
        }
    ]
},
{
    name: '1.1.2 Introduction to Physics: Importance of Physics and Links to Other Fields',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Importance of Physics and Links to Other Fields</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will explore how Physics improves daily life — in transport, communication, health, energy, agriculture and the environment — and how it connects to other subjects such as Mathematics, Chemistry, Biology, Geography and Engineering.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Seeing how Physics links to other fields helps you understand why it matters, makes learning easier, and shows you how combining subjects solves real problems.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Health care</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Agriculture</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚡ Energy</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📡 Communication</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚆 Transport</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌍 Environment</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning of Physics as a body of scientific knowledge.</li>
    <li>Describe the branches of Physics.</li>
    <li>Outline the importance of Physics in daily life and its relation to other fields.</li>
    <li>Identify career opportunities related to Physics.</li>
    <li>Appreciate the relevance of Physics in daily life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Outline the importance of Physics in daily life.</li>
    <li>Relate Physics to other subjects and fields.</li>
    <li>Give Kenyan examples of Physics applications.</li>
    <li>Explain how Physics helps solve community problems.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> How is Physics relevant in day-to-day life?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> Lesson 1.1.1 — the meaning and branches of Physics.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Imagine one day without Physics: no electricity, no phones, no vehicles, no radio, no X-ray machines, no refrigerators to keep vaccines cold, and no pumps to lift water. Physics quietly powers almost everything around us.</p>
    <p>Physics also does not work alone. It uses <strong>Mathematics</strong> as its language, explains the energy changes in <strong>Chemistry</strong>, the mechanics of the human body in <strong>Biology</strong>, the weather in <strong>Geography</strong>, and provides the principles that <strong>engineers</strong> turn into machines and buildings.</p>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Physics is the <strong>“how it works”</strong> behind technology, and it partners with every other science.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Technology</strong>
    </p>
    <p style="margin:6px 0;">The use of scientific knowledge to make tools and solve practical problems.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A solar-powered water pump is technology.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Application</strong>
    </p>
    <p style="margin:6px 0;">A practical use of a scientific idea.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Using pressure in a hydraulic jack.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Interdisciplinary</strong>
    </p>
    <p style="margin:6px 0;">Involving two or more subjects or fields.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Medical physics combines Physics and Biology.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Biophysics</strong>
    </p>
    <p style="margin:6px 0;">The use of Physics to study living things.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Studying how blood pressure works.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Geophysics</strong>
    </p>
    <p style="margin:6px 0;">The Physics of the Earth.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Locating geothermal steam or groundwater.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Renewable energy</strong>
    </p>
    <p style="margin:6px 0;">Energy from sources that are naturally replaced.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Solar, wind and geothermal power.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Importance of Physics in Daily Life</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How Physics helps</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Generating and distributing electricity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hydro (Tana River dams), geothermal (Olkaria), wind (Lake Turkana), solar</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Radio waves, electronics, fibre optics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mobile phones, internet, TV</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Health</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Imaging, radiotherapy, equipment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">X-rays, ultrasound, thermometers, blood-pressure machines</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engines, brakes, tyres, safety design</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matatus, trains, aircraft, seat belts</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Agriculture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Irrigation pumps, greenhouses, machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drip irrigation, solar dryers, tractors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Construction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strength of materials, stability, expansion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bridges, high-rise buildings, expansion joints</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Environment and weather</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Understanding climate, forecasting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Weather satellites, climate models</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Home</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Appliances and safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cookers, fridges, iron boxes, fuses</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Physics and Other Fields</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Field</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Link with Physics</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mathematics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formulae, graphs and calculations express physical laws.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chemistry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atomic structure, energy in reactions, gas laws.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Biology and medicine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How muscles act as levers, how eyes focus light, blood pressure, medical imaging.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geography</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Weather, climate, earthquakes, ocean currents.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engineering</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing machines, buildings, circuits and vehicles.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Agriculture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Soil moisture, irrigation, farm machinery.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sports</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Projectiles, friction, balance, energy.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Music</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sound waves, pitch, resonance in instruments.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Linking fields</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Explain how Physics, Biology and Mathematics combine when a doctor uses an ultrasound scan.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Physics</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ultrasound uses high-frequency sound waves that reflect from tissues.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Biology</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Different organs and tissues reflect sound differently, revealing their structure.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Mathematics</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The machine calculates distances from the time taken for echoes to return and builds an image.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Physics provides the sound waves and echoes, Biology explains the tissues being imaged, and Mathematics converts echo times into distances and images.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Name three sources of electricity in Kenya that depend on Physics.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">E.g. hydroelectric, geothermal, wind, solar.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How does Physics help agriculture?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Irrigation pumps, farm machinery, greenhouses, solar dryers, weather forecasting.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why is Mathematics called the “language of Physics”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Physical laws are expressed and tested using equations, graphs and calculations.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Physics Hunt Around the School</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To identify applications of Physics in the school environment and link them to branches and other fields.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Notebook</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pen</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Phone camera (optional, with permission)</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In groups, walk around the school compound with your teacher’s permission.</li>
    <li>Find at least ten objects or systems that use Physics (e.g. a water tank, gutters, a flagpole pulley, solar lights, a gate hinge).</li>
    <li>For each, record the branch of Physics and one other field it links to.</li>
    <li>Present your findings as a table or chart.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Object</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Physics principle</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Branch</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Linked field</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flagpole pulley</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simple machine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mechanics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engineering</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solar security light</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light to electrical energy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electricity / electronics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Environment</td>
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
    </table>
    </div>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Physics is present in almost every structure and device around the school, often combined with other fields.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Stay in your group and within the agreed area.</li>
    <li>Do not touch electrical installations.</li>
    <li>Do not climb structures.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Kenya generates a large share of its electricity from renewable sources — geothermal, hydro, wind and solar — all of which depend on Physics. Physicists and engineers also design the cold-chain fridges that keep vaccines safe in remote clinics.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>When communities face problems such as unreliable water or power, Physics-based solutions like solar pumps and mini-grids are often part of the answer.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Give two ways Physics is important in health care.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of hospital equipment.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">X-rays/ultrasound imaging; thermometers; radiotherapy; blood-pressure machines (any two).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Link Physics with Geography in one sentence.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of rainfall and wind.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Physics explains weather and climate processes studied in Geography.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is renewable energy? Give one example.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It does not run out.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Energy from naturally replaced sources, e.g. solar.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write a “day in my life” timeline showing at least eight moments where you use Physics.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Choose a subject you like and explain to your partner three ways it links with Physics.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Prepare a short presentation: “How Physics helps our county” (energy, water, transport or health).</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research Kenya’s main electricity sources and present them in a simple chart.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Give three areas where Physics is important.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">E.g. energy, communication, health, transport, agriculture, construction.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is technology?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The use of scientific knowledge to make tools and solve practical problems.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how Physics is related to Chemistry.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Both study matter and energy; atomic structure, energy changes and gas laws are shared.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Give two applications of Physics in transport.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Engines, brakes, tyres, seat belts, road design.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Discuss how Physics can help reduce the effects of drought in a community.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Solar-powered pumps, drip irrigation, water-harvesting gutters and tanks, weather forecasting, efficient storage.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Identify a problem in your community and suggest a Physics-based solution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Answers vary, e.g. dark paths — solar street lights.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Can technology based on Physics also cause harm? Give an example and a way to reduce it.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Yes — e.g. electrical fires or radiation; reduce through safety standards, training and protective equipment.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Physics underlies energy, communication, health, transport, agriculture, construction, environment and home technology. It links closely with Mathematics, Chemistry, Biology, Geography, Engineering and other fields, and helps solve community problems.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Physics powers modern life.</li>
    <li>Kenya’s renewable energy depends on Physics.</li>
    <li>Mathematics is the language of Physics.</li>
    <li>Physics is interdisciplinary.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give specific examples.</li>
    <li>One device can involve several fields.</li>
    <li>Physics solutions must be used safely.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Giving vague answers (“Physics helps people”).</li>
    <li>Ignoring links to other subjects.</li>
    <li>Forgetting local examples.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use Kenyan examples in answers.</li>
    <li>Connect each topic you study to a real device.</li>
    <li>Keep a “Physics around me” list.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>For “importance” questions, give the area and a specific example.</li>
    <li>For “links” questions, name the field and the shared concept.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group presentations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching energy sources.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proposing Physics-based solutions.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental education</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-economic issues</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every engineer, technician and health worker uses Physics to serve communities.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write one page on “Why every Kenyan needs some Physics”.</li>
    <li>Find three newspaper or online stories involving Physics-based technology in Kenya.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which application of Physics surprised me most?</li>
    <li>Which other subject do I now see differently?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Technology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Science applied to practical problems.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Interdisciplinary</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Involving several fields.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Renewable energy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy from naturally replaced sources.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Geophysics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics of the Earth.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can outline the importance of Physics.</p>
    <p style="margin:6px 0;">☐ I can relate Physics to other fields.</p>
    <p style="margin:6px 0;">☐ I can give Kenyan examples.</p>
    <p style="margin:6px 0;">☐ I can suggest Physics-based solutions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is an application of Physics in health?',
            options: ['Planting maize', 'Writing poems', 'Selling clothes', 'X-ray imaging'],
            correct: 3,
            explanation: 'X-rays use Physics to see inside the body.'
        },
        {
            question: 'Geothermal power at Olkaria is an example of:',
            options: ['Fossil fuel', 'Nuclear weapons', 'Renewable energy', 'Chemical fertiliser'],
            correct: 2,
            explanation: 'Heat from inside the Earth is naturally replaced.'
        },
        {
            question: 'Mathematics is called the language of Physics because:',
            options: ['Physics has no numbers', 'Maths is easier', 'Both use letters', 'Physical laws are expressed with equations and graphs'],
            correct: 3,
            explanation: 'Equations and graphs express Physics.'
        },
        {
            question: 'Ultrasound scans use:',
            options: ['X-rays', 'Magnets only', 'Heat', 'High-frequency sound waves'],
            correct: 3,
            explanation: 'Ultrasound is sound above human hearing.'
        },
        {
            question: 'Which field studies the Physics of the Earth?',
            options: ['Biophysics', 'Geophysics', 'Astrophysics', 'Electronics'],
            correct: 1,
            explanation: 'Geophysics is Earth Physics.'
        },
        {
            question: 'Which is NOT a renewable source?',
            options: ['Diesel', 'Solar', 'Wind', 'Hydro'],
            correct: 0,
            explanation: 'Diesel is a fossil fuel that is not replaced.'
        },
        {
            question: 'Physics helps agriculture through:',
            options: ['Only fertilisers', 'Only seeds', 'Irrigation pumps and farm machines', 'Weather myths'],
            correct: 2,
            explanation: 'Pumps and machines apply Physics.'
        },
        {
            question: 'Interdisciplinary means:',
            options: ['Involving two or more fields', 'Within one subject only', 'Without science', 'Only theory'],
            correct: 0,
            explanation: 'Interdisciplinary work combines knowledge from two or more fields.'
        },
        {
            question: 'Expansion joints on bridges are linked to:',
            options: ['Radioactivity', 'Thermal expansion', 'Magnetism', 'Sound'],
            correct: 1,
            explanation: 'They allow for expansion in heat.'
        },
        {
            question: 'Which shows Physics in communication?',
            options: ['Cooking ugali', 'Painting a wall', 'Mobile phones using radio waves', 'Planting trees'],
            correct: 2,
            explanation: 'Phones send signals with radio waves.'
        }
    ]
},
{
    name: '1.1.3 Introduction to Physics: Careers Related to Physics',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Careers Related to Physics</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will explore careers that use Physics, the pathways into them after Senior School, and common myths and misconceptions about Physics — including the myth that it is “only for boys”.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Physics opens doors to many well-paid, meaningful careers. Knowing them early helps you choose subjects wisely and stay motivated.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Engineering</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Medicine and radiography</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌦️ Meteorology</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✈️ Aviation</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Technology</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔭 Space science</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning of Physics as a body of scientific knowledge.</li>
    <li>Describe the branches of Physics.</li>
    <li>Outline the importance of Physics in daily life and its relation to other fields.</li>
    <li>Identify career opportunities related to Physics.</li>
    <li>Appreciate the relevance of Physics in daily life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify careers related to Physics.</li>
    <li>Describe the work done in selected careers.</li>
    <li>Challenge myths and misconceptions about Physics.</li>
    <li>Design a Physics career chart.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> How is Physics relevant in day-to-day life?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> Lessons 1.1.1 and 1.1.2 — branches and importance of Physics.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Who designed the phone in your pocket, the bridge on your way to school, the X-ray machine at the hospital and the weather forecast on the radio? People who studied <strong>Physics</strong>.</p>
    <p>Physics careers are found in engineering, health, energy, aviation, communication, research, education and business. The STEM pathway in Senior School prepares you for many of them.</p>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Physics is not just a subject — it is a <strong>key</strong> that opens many career doors.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Career</strong>
    </p>
    <p style="margin:6px 0;">A job or profession that a person trains for and does over a long time.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>She chose a career in electrical engineering.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Engineer</strong>
    </p>
    <p style="margin:6px 0;">A professional who designs and builds structures, machines or systems.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Civil engineers design roads and bridges.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Radiographer</strong>
    </p>
    <p style="margin:6px 0;">A health worker who uses X-rays and other imaging to examine patients.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The radiographer took an X-ray of the broken arm.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Meteorologist</strong>
    </p>
    <p style="margin:6px 0;">A scientist who studies and forecasts weather.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Meteorologists warned of heavy rains.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Misconception</strong>
    </p>
    <p style="margin:6px 0;">A wrong idea based on poor understanding.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“Physics is only for boys” is a misconception.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">STEM</strong>
    </p>
    <p style="margin:6px 0;">Science, Technology, Engineering and Mathematics.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Physics is a STEM subject.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Careers Related to Physics</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Career</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What they do</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Physics used</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrical engineer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Design power systems and electrical equipment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electricity, magnetism</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Civil / structural engineer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Design roads, bridges and buildings</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forces, materials, stability</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mechanical engineer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Design engines and machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mechanics, energy, heat</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Radiographer / medical physicist</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use imaging and radiation in health care</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atomic physics, waves</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meteorologist</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study and forecast weather and climate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thermal physics, fluids</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pilot / aeronautical engineer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fly or design aircraft</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forces, pressure, motion</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Telecommunications engineer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Build phone and internet networks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Waves, electronics</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Renewable energy technician</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Install and maintain solar, wind and geothermal systems</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Energy, electricity</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geophysicist</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find water, minerals and geothermal resources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Waves, heat, gravity</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics teacher / researcher</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teach and discover new knowledge</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All branches</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Optometrist</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Test eyes and prescribe lenses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Optics</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrician / electronics technician</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wire buildings and repair devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Circuits, electronics</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Myths and Misconceptions About Physics</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Myth</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reality</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics is only for boys.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ability in Physics has nothing to do with gender. Many women are leading physicists, engineers and astronauts.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics is only formulae.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics is about understanding the world; formulae are tools.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You must be a genius.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Practice, curiosity and good study habits make you successful.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics has few careers.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics leads to engineering, health, energy, aviation, ICT, research and business.</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Note</p>
    <div>Wangari Maathai was the first woman in East and Central Africa to earn a doctorate (in veterinary anatomy) — a reminder that science careers are for everyone.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Matching interests to careers</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Amina enjoys mathematics, likes fixing radios and cares about her community’s access to electricity. Suggest two suitable Physics-related careers and explain why.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Interests</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Mathematics, electronics, community energy.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Match</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Electrical engineer — designs power systems; renewable energy technician — installs solar systems in communities.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Reason</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Both use electricity and electronics and help communities get power.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Electrical engineer or renewable energy technician, because they combine her interest in electronics and maths with providing electricity to communities.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Name three careers that use Physics in health care.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Radiographer, medical physicist, optometrist (also biomedical engineer).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which career forecasts weather?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Meteorologist.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why is “Physics is only for boys” false?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Ability in Physics does not depend on gender; women succeed in all Physics careers.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Designing a Physics Career Chart</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To research and present careers related to Physics in an attractive chart.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Manila paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Markers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rulers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Printed or drawn pictures</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Digital device for research (optional)</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In groups, choose six Physics-related careers.</li>
    <li>Research each: what they do, the Physics used, where they work in Kenya and the training needed.</li>
    <li>Design a chart with a box for each career, including a picture or symbol.</li>
    <li>Present the chart to the class and display it.</li>
    </ol>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Physics leads to many careers in many sectors, open to everyone who studies it.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use scissors and markers carefully.</li>
    <li>Use only trusted websites and protect your personal information online.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Kenya’s growth in energy, ICT, construction and health care is creating demand for engineers, technicians and scientists. Choosing STEM subjects including Physics in Senior School keeps these options open.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Invite a resource person — an engineer, electrician, radiographer or meteorologist — to tell your class how they use Physics at work.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Name a career that installs solar systems.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of energy.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Renewable energy (solar) technician.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What does an optometrist do?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of optics.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Tests eyes and prescribes spectacles or contact lenses.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Correct this myth: “You must be a genius to do Physics.”</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Effort matters most.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Success in Physics comes from practice, curiosity and good study habits.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write about one Physics-related career you might like, explaining why it suits you.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Interview each other about career interests and suggest a Physics career for your partner.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Produce and present a Physics career chart.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research the training needed for one Physics-related career at a Kenyan university or TVET college.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is a career?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A job or profession someone trains for and does over a long time.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name four Physics-related careers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">E.g. engineer, radiographer, meteorologist, pilot, electrician, optometrist.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how a civil engineer uses Physics.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">They use forces, strength of materials and stability to design safe buildings and bridges.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> State two myths about Physics and correct them.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">E.g. only for boys — ability is not gender-based; only formulae — it is about understanding nature.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is it important to address the gender gap in Physics careers?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">To use all talent, ensure fairness and equal opportunity, and bring diverse ideas to solve problems.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Name a Physics-related job found in your county and describe what the person does.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Answers vary, e.g. an electrician who wires homes and repairs faults.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">CBC Competency</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Interview a professional who uses Physics. Write a one-page report.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Assessed on quality of questions and clear reporting.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Physics leads to careers in engineering, health, weather, aviation, communication, energy, research, teaching and technical trades. Myths such as “Physics is only for boys” are false: success comes from interest, practice and good study habits.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Many careers use Physics.</li>
    <li>Careers match interests and branches.</li>
    <li>Myths about Physics are false.</li>
    <li>STEM pathway keeps Physics careers open.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Anyone can succeed in Physics.</li>
    <li>Research training requirements early.</li>
    <li>Talk to professionals.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking Physics leads only to teaching.</li>
    <li>Believing gender myths.</li>
    <li>Choosing subjects without considering careers.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Link each topic to a career.</li>
    <li>Attend career days.</li>
    <li>Keep your options open with STEM subjects.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When naming careers, also explain the Physics used.</li>
    <li>Use precise job titles.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Career chart design.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Learning to learn</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engaging resource persons.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching training paths.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gender equality</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Myths and misconceptions</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Your choice of Senior School subjects affects which university and TVET courses you can join.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Research two Physics-related careers and their entry requirements.</li>
    <li>Write a letter to a younger learner encouraging them to study Physics.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which Physics career excites me most?</li>
    <li>Did any myth about Physics affect me before this lesson?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Career</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A long-term profession.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">STEM</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Science, Technology, Engineering and Mathematics.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Misconception</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A wrong idea.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Radiographer</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Imaging health professional.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can identify Physics-related careers.</p>
    <p style="margin:6px 0;">☐ I can describe what they involve.</p>
    <p style="margin:6px 0;">☐ I can challenge myths about Physics.</p>
    <p style="margin:6px 0;">☐ I can present a career chart.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which career forecasts weather?',
            options: ['Radiographer', 'Optometrist', 'Meteorologist', 'Pilot'],
            correct: 2,
            explanation: 'Meteorologists study and forecast weather.'
        },
        {
            question: 'A radiographer uses:',
            options: ['X-rays and imaging', 'Weather balloons', 'Telescopes only', 'Hydraulic jacks'],
            correct: 0,
            explanation: 'Radiographers use imaging in health care.'
        },
        {
            question: '“Physics is only for boys” is:',
            options: ['A scientific law', 'A fact', 'A misconception', 'A career'],
            correct: 2,
            explanation: 'Ability does not depend on gender.'
        },
        {
            question: 'STEM stands for:',
            options: ['Science, Technology, Engineering and Mathematics', 'Study, Teach, Explain, Memorise', 'Science, Trade, Economics, Music', 'Space, Time, Energy, Mass'],
            correct: 0,
            explanation: 'This is the standard meaning.'
        },
        {
            question: 'A civil engineer mainly designs:',
            options: ['Spectacles', 'Weather forecasts', 'Radio programmes', 'Roads, bridges and buildings'],
            correct: 3,
            explanation: 'Civil engineers design infrastructure.'
        },
        {
            question: 'An optometrist works with:',
            options: ['Eyes and lenses', 'Engines', 'Power lines', 'Satellites'],
            correct: 0,
            explanation: 'Optometry uses optics.'
        },
        {
            question: 'Which career installs solar systems?',
            options: ['Lawyer', 'Accountant', 'Chef', 'Renewable energy technician'],
            correct: 3,
            explanation: 'They work with solar and other renewable systems.'
        },
        {
            question: 'Success in Physics depends mainly on:',
            options: ['Gender', 'Practice, curiosity and study habits', 'Luck', 'Being a genius'],
            correct: 1,
            explanation: 'Effort and habits matter most.'
        },
        {
            question: 'A geophysicist may help to find:',
            options: ['Lost phones', 'Groundwater and geothermal resources', 'Football scores', 'Clothes'],
            correct: 1,
            explanation: 'Geophysics locates Earth resources.'
        },
        {
            question: 'Telecommunications engineers work with:',
            options: ['Soil only', 'Waves and electronics for networks', 'Animals', 'Paint'],
            correct: 1,
            explanation: 'They build communication networks.'
        }
    ]
},
{
    name: '1.1 Quiz: Introduction to Physics',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📝 Quiz — Introduction to Physics</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.1.1, 1.1.2 and 1.1.3.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Meaning of Physics and the scientific method</li>
    <li>Branches of Physics</li>
    <li>Importance of Physics and links to other fields</li>
    <li>Careers related to Physics</li>
    <li>Myths and misconceptions</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #f97316;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">📝 Exam Tip</p>
    <div>For branch questions, ask “What is the main idea — force, heat, waves, electricity or atoms?”</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Physics is the study of:',
            options: ['Plants', 'Matter, energy and their interactions', 'Rocks only', 'History'],
            correct: 1,
            explanation: 'This is the definition of Physics.'
        },
        {
            question: 'Which branch explains echoes?',
            options: ['Thermal physics', 'Nuclear physics', 'Waves (sound)', 'Mechanics only'],
            correct: 2,
            explanation: 'Echoes are reflected sound waves.'
        },
        {
            question: 'The variable you measure is the:',
            options: ['Independent variable', 'Dependent variable', 'Control variable', 'Hypothesis'],
            correct: 1,
            explanation: 'It depends on what you change.'
        },
        {
            question: 'A fair test changes:',
            options: ['All variables', 'No variables', 'Only one variable at a time', 'Two variables'],
            correct: 2,
            explanation: 'One variable keeps the test fair.'
        },
        {
            question: 'Which is a renewable energy source used in Kenya?',
            options: ['Geothermal', 'Coal', 'Diesel', 'Petrol'],
            correct: 0,
            explanation: 'Geothermal heat is naturally replaced.'
        },
        {
            question: 'Medical imaging links Physics with:',
            options: ['Music only', 'Literature', 'Biology and medicine', 'History'],
            correct: 2,
            explanation: 'Imaging reveals body structures.'
        },
        {
            question: 'Mathematics helps Physics by:',
            options: ['Replacing experiments', 'Avoiding units', 'Making Physics harder', 'Expressing laws as equations and graphs'],
            correct: 3,
            explanation: 'Maths is Physics’ language.'
        },
        {
            question: 'Which career uses optics?',
            options: ['Meteorologist', 'Civil engineer', 'Optometrist', 'Geophysicist'],
            correct: 2,
            explanation: 'Optometrists use lenses.'
        },
        {
            question: 'A meteorologist studies:',
            options: ['Meteors only', 'Weather and climate', 'Metals', 'Medicine'],
            correct: 1,
            explanation: 'Meteorology is weather science.'
        },
        {
            question: '“Physics is only formulae” is:',
            options: ['True', 'A law', 'A branch', 'A misconception'],
            correct: 3,
            explanation: 'Physics is about understanding nature.'
        },
        {
            question: 'The first step of the scientific method is:',
            options: ['Concluding', 'Observing and asking a question', 'Communicating', 'Publishing'],
            correct: 1,
            explanation: 'Science starts with observation.'
        },
        {
            question: 'Electric motors are studied under:',
            options: ['Electricity and magnetism', 'Optics', 'Thermal physics', 'Space physics'],
            correct: 0,
            explanation: 'Motors use electromagnetism.'
        },
        {
            question: 'Which device uses electronics?',
            options: ['A mobile phone', 'A stone', 'A wooden spoon', 'A rope'],
            correct: 0,
            explanation: 'Phones use electronic circuits.'
        },
        {
            question: 'Why should results be communicated?',
            options: ['To keep them secret', 'To change them', 'Because they are wrong', 'So others can check and use them'],
            correct: 3,
            explanation: 'Sharing allows verification.'
        },
        {
            question: 'Which career designs engines?',
            options: ['Optometrist', 'Radiographer', 'Meteorologist', 'Mechanical engineer'],
            correct: 3,
            explanation: 'Mechanical engineers design machines and engines.'
        }
    ]
},
{
    name: '1.1 Assignment: Physics in My Community — Career and Application Portfolio',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📂 Physics in My Community — Career and Application Portfolio</h2>
    <p style="font-size:16px;">You will document how Physics is used in your community and interview a person whose work uses Physics, then present your findings as a short portfolio.</p>
    <p style="margin:6px 0 0 0;color:#ffedd5;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your school is holding a STEM Day. Each learner will contribute a page showing how Physics serves the local community and the careers behind it.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Identify six places or activities in your community where Physics is used (e.g. a posho mill, a jua kali workshop, a clinic, a borehole pump, a phone repair shop, solar lights).</li>
    <li>For each, write the Physics principle involved and the branch of Physics.</li>
    <li>With permission, interview one worker (e.g. an electrician, mechanic, nurse, technician) about how they use Physics, their training and advice for learners.</li>
    <li>Write a career profile of the person (150–200 words).</li>
    <li>Design a one-page poster titled “Physics Serves Our Community”.</li>
    <li>Reflect on how this has influenced your career thinking.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Table of six applications with principles and branches</li>
    <li>Interview notes</li>
    <li>Career profile (150–200 words)</li>
    <li>One-page poster</li>
    <li>Reflection (100 words)</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Applications and branches</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Six accurate applications with principles and branches explained extensively</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Six accurate applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial or some inaccuracies</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few applications, needing hints</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interview and career profile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detailed, accurate profile with Physics clearly explained</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate profile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial profile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited profile</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poster</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creative, accurate and well organised</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate and clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors or unclear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incomplete</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful link to own career plans</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear link to career plans</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Basic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little reflection</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Always ask permission before interviews or photos.<br>Use simple, correct Physics terms.<br>Do not touch machines or electrical equipment during visits.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What surprised me about Physics in my community?</li>
    <li>Has my view of Physics careers changed?</li>
    <li>Which skill do I need to develop for my chosen path?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many community applications must you document?',
            options: ['One', 'Twenty', 'None', 'Six'],
            correct: 3,
            explanation: 'The brief asks for six.'
        },
        {
            question: 'Before interviewing a worker, you must:',
            options: ['Record secretly', 'Operate their machines', 'Skip introductions', 'Ask permission'],
            correct: 3,
            explanation: 'Permission is respectful and safe.'
        },
        {
            question: 'The career profile should be about:',
            options: ['150–200 words', '5 words', '2,000 words', 'One drawing'],
            correct: 0,
            explanation: 'The brief sets 150–200 words.'
        },
        {
            question: 'During visits you should not:',
            options: ['Take notes', 'Ask questions', 'Touch machines or electrical equipment', 'Thank people'],
            correct: 2,
            explanation: 'Touching equipment is unsafe.'
        },
        {
            question: 'The poster title is:',
            options: ['My Holiday', 'Physics Serves Our Community', 'Football Stars', 'Cooking Tips'],
            correct: 1,
            explanation: 'This is the title given in the brief.'
        }
    ]
},
{
    name: '1.1 Revision: Introduction to Physics',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🔁 Revision — Introduction to Physics</h2>
    <p style="font-size:16px;">Review the meaning, branches, importance and careers of Physics before starting 1.2 Pressure.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">⚛️ Physics</p>
    <div>The science of matter, energy and their interactions.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🔬 Scientific method</p>
    <div>Observe → hypothesise → experiment → analyse → conclude → communicate. Fair test: one variable at a time.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🌳 Branches</p>
    <div>Mechanics, thermal physics, waves and optics, electricity and magnetism, atomic and nuclear, electronics, environmental and space.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🌍 Importance</p>
    <div>Energy, communication, health, transport, agriculture, construction, environment, home.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🔗 Links</p>
    <div>Mathematics, Chemistry, Biology, Geography, Engineering, Agriculture, Sports, Music.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">💼 Careers</p>
    <div>Engineers, radiographers, meteorologists, pilots, technicians, geophysicists, optometrists, teachers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Device or event</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Branch</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Car jack</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mechanics</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thermos flask</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thermal physics</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spectacles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Optics</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electric motor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electricity and magnetism</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">X-ray</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atomic physics</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Phone circuit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electronics</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define Physics and name five branches.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Science of matter and energy; mechanics, thermal physics, optics, electricity and magnetism, atomic physics (any five).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Explain a fair test using an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Change one variable (e.g. pendulum length), measure another (time), keep others constant (mass, angle).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Give three ways Physics is important in Kenya.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Geothermal and hydro power, mobile communication, medical imaging (and others).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Name three Physics careers and the branch each uses.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Electrical engineer — electricity; optometrist — optics; meteorologist — thermal physics.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Correct the myth “Physics has few careers”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Physics leads to many careers in engineering, health, energy, ICT, aviation and research.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can define Physics and describe the scientific method.</p>
    <p style="margin:6px 0;">☐ I can name branches with examples.</p>
    <p style="margin:6px 0;">☐ I can explain the importance and links of Physics.</p>
    <p style="margin:6px 0;">☐ I can identify careers and challenge myths.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which branch studies heat?',
            options: ['Optics', 'Electronics', 'Nuclear physics', 'Thermal physics'],
            correct: 3,
            explanation: 'Thermal physics deals with heat and temperature.'
        },
        {
            question: 'A hypothesis must be:',
            options: ['Always true', 'Untestable', 'Testable', 'A conclusion'],
            correct: 2,
            explanation: 'Hypotheses are tested by experiment.'
        },
        {
            question: 'Which field links Physics and the human body?',
            options: ['Geophysics', 'Biophysics / medical physics', 'Astrophysics', 'Economics'],
            correct: 1,
            explanation: 'Biophysics studies living systems.'
        },
        {
            question: 'Solar panels convert:',
            options: ['Sound to heat', 'Light energy to electrical energy', 'Electricity to light only', 'Wind to sound'],
            correct: 1,
            explanation: 'Solar cells produce electricity from light.'
        },
        {
            question: 'Which is a control variable in a pendulum test?',
            options: ['Length of string', 'Time for a swing', 'The conclusion', 'Mass of the bob'],
            correct: 3,
            explanation: 'Mass is kept constant.'
        },
        {
            question: 'A pilot mainly uses:',
            options: ['Radioactivity', 'Magnetism only', 'Forces, pressure and motion', 'Optics only'],
            correct: 2,
            explanation: 'Flight depends on mechanics and pressure.'
        },
        {
            question: 'Which is a misconception?',
            options: ['Only boys can do Physics', 'Physics studies energy', 'Experiments test hypotheses', 'Physics has many careers'],
            correct: 0,
            explanation: 'Gender does not decide ability.'
        },
        {
            question: 'Wind turbines at Lake Turkana produce:',
            options: ['Electricity', 'Water', 'Fuel', 'Fertiliser'],
            correct: 0,
            explanation: 'Turbines generate electricity from wind.'
        }
    ]
},
{
    name: '1.1 Summary: Introduction to Physics',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.1 Introduction to Physics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🧾 Summary — Introduction to Physics</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Physics explains how matter and energy behave, using careful experiments; it powers the technology around us, connects with every other science, and opens doors to many careers for everyone.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Physics is the science of matter, energy and their interactions.</li>
    <li>Knowledge is built through the scientific method and fair tests.</li>
    <li>Branches include mechanics, thermal physics, waves and optics, electricity and magnetism, atomic and nuclear physics, electronics, and environmental and space physics.</li>
    <li>Physics is vital in energy, communication, health, transport, agriculture and construction.</li>
    <li>Physics links with Mathematics, Chemistry, Biology, Geography and Engineering.</li>
    <li>Careers include engineering, radiography, meteorology, aviation, telecommunications and renewable energy.</li>
    <li>Myths such as “Physics is only for boys” are false.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Meaning and branches</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition, scientific method, branches</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plan fair tests with one variable</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Importance and links</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Applications in Kenya; links to other fields</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use local examples</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Careers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics careers; myths and misconceptions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Research training paths</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Physics</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">matter</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">energy</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hypothesis</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">variable</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">fair test</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">branch</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">technology</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">interdisciplinary</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">renewable energy</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">career</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">STEM</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Every time you charge a phone, ride in a matatu or see a doctor, Physics is at work — and someone trained in it made it possible.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Pressure explores why sharp knives cut, why dams are thicker at the bottom, and how a small force can lift a car.</div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ explain what Physics is and how it builds knowledge</p>
    <p style="margin:6px 0;">✔️ describe the branches of Physics</p>
    <p style="margin:6px 0;">✔️ explain the importance of Physics and its links to other fields</p>
    <p style="margin:6px 0;">✔️ identify careers related to Physics</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is that Physics:',
            options: ['Is only formulae', 'Is only for scientists', 'Has no real-life use', 'Explains matter and energy and opens many careers'],
            correct: 3,
            explanation: 'Physics is foundational and practical.'
        },
        {
            question: 'Which lesson covered careers?',
            options: ['1.1.1', '1.1.2', '1.2.1', '1.1.3'],
            correct: 3,
            explanation: 'Careers were covered in 1.1.3.'
        },
        {
            question: 'Which term means “involving two or more fields”?',
            options: ['Interdisciplinary', 'Renewable', 'Hypothesis', 'Variable'],
            correct: 0,
            explanation: 'Interdisciplinary combines fields.'
        },
        {
            question: 'What comes next?',
            options: ['1.4 Temperature', '1.2 Pressure', '2.1 Waves', '3.1 Electrostatics'],
            correct: 1,
            explanation: 'Pressure follows in Strand 1.0.'
        },
        {
            question: 'Which is a branch of Physics?',
            options: ['Botany', 'Electronics', 'Grammar', 'Accounting'],
            correct: 1,
            explanation: 'Electronics is a branch of Physics.'
        }
    ]
},
{
    name: '1.2.1 Pressure: Pressure in Solids and Atmospheric Pressure',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Pressure in Solids and Atmospheric Pressure</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will define pressure, calculate it using P = F/A, explain why sharp and wide objects behave so differently, and discover that the air around us presses on everything with a large pressure — atmospheric pressure — which you will demonstrate in simple experiments.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Pressure explains why knives are sharpened, why camels and tractors have wide feet or tyres, why drinking straws work and why your ears “pop” on a drive up a hill.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔪 Knives and needles</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚜 Tractor tyres</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐪 Camel feet</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🥤 Drinking straws</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧲 Rubber suckers</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏔️ High altitudes</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe atmospheric pressure and demonstrate its existence.</li>
    <li>Investigate factors affecting pressure in fluids.</li>
    <li>Apply the fluid pressure equation P = ρgh.</li>
    <li>Demonstrate the transmission of pressure in fluids.</li>
    <li>Appreciate applications of pressure in daily life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define pressure and state its SI unit.</li>
    <li>Calculate pressure using P = F/A.</li>
    <li>Explain applications of high and low pressure in solids.</li>
    <li>Describe and demonstrate atmospheric pressure.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> How do the density of a fluid, acceleration due to gravity and depth below the free surface affect pressure in a fluid?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> You know that force is measured in newtons (N) and that weight = mass × g.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Press the flat end of a pencil into your palm. Now press the sharp end with the <em>same</em> force. Which hurts more? The sharp end — because the same force acts on a much smaller area. That idea is <strong>pressure</strong>.</p>
    <p><strong>Pressure</strong> is the force acting perpendicularly (at right angles) on a unit area of a surface.</p>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Pressure</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">P = F ÷ A</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Pressure equals the perpendicular force divided by the area it acts on.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> F in newtons (N), A in square metres (m²), P in pascals (Pa). 1 Pa = 1 N/m².</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Whenever a force presses on a surface.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Forgetting to convert cm² to m² (1 cm² = 0.0001 m²).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Same force, smaller area → bigger pressure.”</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Pressure tells you how <strong>concentrated</strong> a force is.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Pressure</strong>
    </p>
    <p style="margin:6px 0;">Force acting perpendicularly per unit area.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> P, pascal (Pa) = N/m²</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A sharp knife exerts high pressure.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Force</strong>
    </p>
    <p style="margin:6px 0;">A push or a pull.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> F, newton (N)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Your weight is a force on the floor.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Area</strong>
    </p>
    <p style="margin:6px 0;">The size of a surface.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> A, square metre (m²)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A tractor tyre has a large area of contact.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Weight</strong>
    </p>
    <p style="margin:6px 0;">The force of gravity on a mass (W = mg).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> W, newton (N)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A 60 kg learner weighs about 600 N (g = 10 N/kg).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Atmospheric pressure</strong>
    </p>
    <p style="margin:6px 0;">The pressure exerted by the weight of the air above a surface.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> about 1.01 × 10⁵ Pa at sea level</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Air pressure holds water in an upturned glass covered with a card.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Barometer</strong>
    </p>
    <p style="margin:6px 0;">An instrument for measuring atmospheric pressure.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A mercury barometer reads about 760 mmHg at sea level.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Pressure in Solids</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Need</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Design</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">High pressure</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sharp knives, needles, nails, drawing pins, football studs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small area concentrates the force so it can cut or pierce</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Low pressure</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wide tractor tyres, camel and elephant feet, wide school-bag straps, building foundations, snowshoes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large area spreads the force so it does not sink or hurt</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Pressure under a box</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A box of weight 600 N rests on a floor with a contact area of 0.2 m². Find the pressure on the floor.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Write the formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = F ÷ A</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 600 N ÷ 0.2 m²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 3 000 Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> P = 3 000 Pa (3 000 N/m²)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 2: Maximum and minimum pressure of a brick</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A brick of mass 2 kg measures 20 cm × 10 cm × 5 cm. Taking g = 10 N/kg, find the maximum and minimum pressure it can exert on the ground.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Weight is the same in every position; only the area changes. Smallest area → maximum pressure.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Weight</strong>
    </p>
    <div style="margin:6px 0 0 34px;">F = mg = 2 × 10 = 20 N</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Smallest face</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10 cm × 5 cm = 0.10 m × 0.05 m = 0.005 m²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Maximum pressure</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 20 ÷ 0.005 = 4 000 Pa</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#ffedd5;">Step 4: Largest face</strong>
    </p>
    <div style="margin:6px 0 0 34px;">20 cm × 10 cm = 0.20 m × 0.10 m = 0.02 m²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#ffedd5;">Step 5: Minimum pressure</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 20 ÷ 0.02 = 1 000 Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Maximum pressure = 4 000 Pa (standing on its end); minimum pressure = 1 000 Pa (lying flat).</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using areas in cm² with force in N, which gives pressure in N/cm², not pascals.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Atmospheric Pressure</h3>
    <p>Earth is surrounded by a layer of air, the <strong>atmosphere</strong>, many kilometres thick. Air has mass, so its weight presses down on everything: this is <strong>atmospheric pressure</strong>. At sea level it is about <strong>101 000 Pa</strong> (1.01 × 10⁵ Pa) — the same as about 10 tonnes pressing on every square metre! We do not feel crushed because fluids inside our bodies push outwards with a similar pressure.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Demonstration</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What happens</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Explanation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collapsing can</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A little water is boiled in a metal can, the can is sealed (or its mouth dipped in cold water) and cooled. It crumples.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Steam condenses, leaving low pressure inside; atmospheric pressure outside crushes the can.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Card on an upturned glass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A full glass is covered with a card and turned upside down. The water stays in.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atmospheric pressure pushing up on the card is greater than the water pressure pushing down.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drinking straw</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Liquid rises when you suck.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sucking lowers the pressure in the straw; atmospheric pressure on the liquid surface pushes liquid up.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rubber sucker</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A sucker sticks to smooth glass.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Air is pushed out; atmospheric pressure outside holds it firmly.</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Note</p>
    <div>Atmospheric pressure decreases with altitude because there is less air above. It is lower in Nairobi (about 1 800 m above sea level) than in Mombasa, which is why ears may “pop” when driving up from the coast.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State the SI unit of pressure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The pascal (Pa), equal to 1 N/m².</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why are school-bag straps made wide?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A wide strap has a larger area, so the pressure on the shoulder is lower and more comfortable.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why does a drinking straw work?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Sucking lowers the pressure inside the straw, so atmospheric pressure pushes the drink up.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Demonstrating Atmospheric Pressure</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To show that the atmosphere exerts pressure.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Glass tumbler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stiff card</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Water</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Basin</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Empty metal can with lid (teacher demonstration)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Heat source</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tongs</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Fill the tumbler to the brim with water.</li>
    <li>Place the card flat on the rim, pressing gently so no air enters.</li>
    <li>Holding the card, turn the tumbler upside down over a basin, then remove your hand from the card.</li>
    <li>Observe and explain.</li>
    <li>Teacher demonstration: boil a little water in the can for a minute, remove from heat with tongs, seal it, and pour cold water over it. Observe.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <p>The card stays in place and the water does not pour out. The sealed can crumples as it cools.</p>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The atmosphere exerts a large pressure in all directions, which holds up the water and crushes the can when the inside pressure is reduced.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Only the teacher should heat and handle the hot can, using tongs.</li>
    <li>Wipe up spilt water to prevent slipping.</li>
    <li>Never seal a can while it is being heated.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Engineers design building foundations wide enough so the pressure on the soil does not make the building sink. Medical syringes, vacuum cleaners and weather forecasting all depend on pressure.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Meteorologists track changes in atmospheric pressure: falling pressure often signals rain or storms.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Find the pressure when a force of 50 N acts on 0.01 m².</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: P = F ÷ A.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 50 ÷ 0.01 = 5 000 Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Convert 25 cm² to m².</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 1 cm² = 0.0001 m².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">25 × 0.0001 = 0.0025 m².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why do camels walk easily on sand?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Area and pressure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Their wide feet spread their weight over a large area, giving low pressure so they do not sink.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List five objects at home designed for high pressure and five for low pressure.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Weigh each other’s school bag on a bathroom scale (with permission), estimate the strap area, and calculate the pressure on the shoulder.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Carry out the card-on-the-glass experiment and write a full report.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Look up today’s atmospheric pressure for Nairobi and Mombasa on a weather app or website and compare them.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define pressure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Force acting perpendicularly per unit area.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A force of 200 N acts on 0.5 m². Find the pressure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 200 ÷ 0.5 = 400 Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A girl of mass 50 kg stands on one foot of area 150 cm². Find the pressure (g = 10 N/kg).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">F = 500 N; A = 0.015 m²; P = 500 ÷ 0.015 ≈ 33 333 Pa (3.3 × 10⁴ Pa).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain why a sharp knife cuts better than a blunt one.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Its edge has a smaller area, so the same force produces a greater pressure.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A block of weight 120 N exerts a pressure of 2 400 Pa on a table. Find the area of contact.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A = F ÷ P = 120 ÷ 2 400 = 0.05 m².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why do lorries carrying heavy loads have many wheels?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">More wheels give a larger contact area, reducing pressure on the road and preventing damage or sinking.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Why are we not crushed by atmospheric pressure?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The fluids in our bodies exert a similar pressure outwards, balancing the atmospheric pressure.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Pressure is force per unit area, P = F/A, measured in pascals. Small areas give high pressure (knives, needles); large areas give low pressure (wide tyres, camel feet). The atmosphere exerts a pressure of about 1.01 × 10⁵ Pa at sea level, shown by the collapsing can, card-on-glass, straws and suckers. It decreases with altitude.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>P = F ÷ A; 1 Pa = 1 N/m².</li>
    <li>Small area → high pressure.</li>
    <li>Atmospheric pressure ≈ 1.01 × 10⁵ Pa at sea level.</li>
    <li>Decreases with altitude.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Convert cm² to m² before calculating.</li>
    <li>Weight = mg.</li>
    <li>Maximum pressure uses the smallest area.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using mass instead of weight.</li>
    <li>Mixing cm² and m².</li>
    <li>Thinking we “suck” liquid up — atmospheric pressure pushes it.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Always write P = F ÷ A first.</li>
    <li>Show unit conversions.</li>
    <li>Draw the face that touches the ground.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State units in final answers.</li>
    <li>Explain demonstrations using “pressure inside” vs “pressure outside”.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group experiments and reports.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking pressure readings online.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining designs using pressure.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Love (sharing apparatus safely)</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental education: atmospheric pressure and weather</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Pressure guides the design of tools, vehicles, buildings and weather forecasts.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate the pressure you exert standing on two feet and on one foot (estimate foot area by tracing on squared paper).</li>
    <li>Explain three demonstrations of atmospheric pressure with diagrams.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which demonstration surprised me most?</li>
    <li>Can I now explain why my bag strap is wide?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pressure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force per unit area.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pascal</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SI unit of pressure, 1 N/m².</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Atmospheric pressure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure due to the weight of air.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Barometer</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Instrument measuring atmospheric pressure.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can define pressure and its unit.</p>
    <p style="margin:6px 0;">☐ I can calculate pressure using P = F ÷ A.</p>
    <p style="margin:6px 0;">☐ I can explain high- and low-pressure designs.</p>
    <p style="margin:6px 0;">☐ I can describe and demonstrate atmospheric pressure.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Pressure is defined as:',
            options: ['Force × area', 'Force per unit area', 'Mass per unit volume', 'Area per unit force'],
            correct: 1,
            explanation: 'P = F ÷ A, perpendicular force divided by area.'
        },
        {
            question: 'The SI unit of pressure is the:',
            options: ['Newton', 'Joule', 'Watt', 'Pascal'],
            correct: 3,
            explanation: 'The pascal equals one newton per square metre.'
        },
        {
            question: 'A force of 100 N acts on 0.02 m². The pressure is:',
            options: ['2 Pa', '5 000 Pa', '200 Pa', '50 Pa'],
            correct: 1,
            explanation: 'P = 100 ÷ 0.02 = 5 000 Pa.'
        },
        {
            question: 'Why do tractors have wide tyres?',
            options: ['To increase pressure', 'To go faster', 'To reduce pressure so they do not sink', 'To use less fuel only'],
            correct: 2,
            explanation: 'A larger area lowers pressure on soft ground.'
        },
        {
            question: 'A brick exerts maximum pressure when resting on:',
            options: ['Its largest face', 'Any face equally', 'Its smallest face', 'Its corner only'],
            correct: 2,
            explanation: 'Smallest area gives greatest pressure for the same weight.'
        },
        {
            question: 'Atmospheric pressure at sea level is about:',
            options: ['1.01 × 10⁵ Pa', '10 Pa', '1 000 000 000 Pa', '1 Pa'],
            correct: 0,
            explanation: 'Standard atmospheric pressure is about 101 000 Pa.'
        },
        {
            question: 'Atmospheric pressure is lower in Nairobi than in Mombasa because:',
            options: ['Nairobi is at a higher altitude', 'Nairobi is hotter', 'Mombasa has more people', 'Nairobi is inland'],
            correct: 0,
            explanation: 'There is less air above higher places.'
        },
        {
            question: 'Liquid rises in a drinking straw because:',
            options: ['Atmospheric pressure pushes it up', 'The straw pulls it', 'Gravity pushes it up', 'The liquid is light'],
            correct: 0,
            explanation: 'Sucking lowers pressure inside; outside air pushes liquid up.'
        },
        {
            question: '25 cm² equals:',
            options: ['0.25 m²', '2.5 m²', '0.0025 m²', '0.025 m²'],
            correct: 2,
            explanation: '1 cm² = 0.0001 m², so 25 cm² = 0.0025 m².'
        },
        {
            question: 'An instrument for measuring atmospheric pressure is a:',
            options: ['Thermometer', 'Ammeter', 'Hydrometer', 'Barometer'],
            correct: 3,
            explanation: 'Barometers measure air pressure.'
        }
    ]
},
{
    name: '1.2.2 Pressure: Pressure in Fluids and the Equation P = ρgh',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Pressure in Fluids and the Equation P = ρgh</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will investigate how pressure in a liquid depends on depth, density and gravity, derive the equation P = ρgh, and use it to solve problems about dams, divers, water tanks and barometers.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> This equation explains why dams are thicker at the bottom, why water tanks are raised high, why divers’ ears hurt, and how a mercury barometer measures air pressure.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌊 Dams</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🤿 Diving</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Water towers</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Blood pressure</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛢️ Storage tanks</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Barometers</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe atmospheric pressure and demonstrate its existence.</li>
    <li>Investigate factors affecting pressure in fluids.</li>
    <li>Apply the fluid pressure equation P = ρgh.</li>
    <li>Demonstrate the transmission of pressure in fluids.</li>
    <li>Appreciate applications of pressure in daily life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Investigate the factors affecting pressure in liquids.</li>
    <li>Derive the equation P = ρgh.</li>
    <li>Calculate liquid pressure and total pressure at a depth.</li>
    <li>Explain applications of pressure in liquids.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> How do the density of a fluid, acceleration due to gravity and depth below the free surface affect pressure in a fluid?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> Lesson 1.2.1 — P = F/A and atmospheric pressure; density = mass ÷ volume.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>If you dive to the bottom of a swimming pool, your ears begin to hurt. The deeper you go, the more water there is above you pressing down. Pressure in a liquid <strong>increases with depth</strong>.</p>
    <p>Pressure in a fluid depends on three things: the <strong>depth</strong> (h) below the surface, the <strong>density</strong> (ρ, “rho”) of the fluid, and the <strong>acceleration due to gravity</strong> (g). It does <em>not</em> depend on the shape or width of the container.</p>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Pressure in a fluid</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">P = ρ g h</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Pressure due to a fluid at depth h equals density × acceleration due to gravity × depth.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> ρ in kg/m³, g in N/kg (or m/s²), h in m, P in Pa.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding the pressure due to a liquid (or gas) at a certain depth.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using depth in cm, or forgetting to add atmospheric pressure when asked for total pressure.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Pressure grows with Row-Gee-Aitch.”</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Note</p>
    <div>In this course, take g = 10 N/kg unless a question gives another value. The density of water is 1 000 kg/m³.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Density</strong>
    </p>
    <p style="margin:6px 0;">Mass per unit volume of a substance.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> ρ, kg/m³</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Water: 1 000 kg/m³; mercury: 13 600 kg/m³.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Depth</strong>
    </p>
    <p style="margin:6px 0;">Vertical distance below the free surface of a liquid.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> h, metre (m)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A diver at 5 m depth.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Fluid</strong>
    </p>
    <p style="margin:6px 0;">A substance that can flow — a liquid or a gas.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Water, oil and air are fluids.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Free surface</strong>
    </p>
    <p style="margin:6px 0;">The top surface of a liquid open to the air.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The surface of water in a tank.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Total pressure</strong>
    </p>
    <p style="margin:6px 0;">Atmospheric pressure plus the pressure due to the liquid.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> P_total = P_atm + ρgh</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Pressure on a diver.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Manometer</strong>
    </p>
    <p style="margin:6px 0;">A U-tube containing liquid used to measure pressure differences.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Measuring gas pressure in a lab.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Investigating Factors Affecting Liquid Pressure</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 440 300" width="440" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="40" y="40" width="100" height="130" fill="none" stroke="#fdba74" stroke-width="3"/><rect x="42" y="52" width="96" height="116" fill="#1d4ed8" opacity="0.55"/><text x="90" y="32" fill="#ffedd5" text-anchor="middle" font-size="12">can of water</text><rect x="35" y="170" width="110" height="110" fill="#33415c" stroke="#94a3b8"/><text x="90" y="230" fill="#ffedd5" text-anchor="middle" font-size="12">raised block</text><circle cx="140" cy="75" r="4" fill="#fde68a"/><path d="M140 75 Q 175 78 215 280" fill="none" stroke="#67e8f9" stroke-width="3"/><text x="130" y="79" fill="#fde68a" font-size="12" text-anchor="end">A</text><circle cx="140" cy="115" r="4" fill="#fde68a"/><path d="M140 115 Q 195 118 270 280" fill="none" stroke="#67e8f9" stroke-width="3"/><text x="130" y="119" fill="#fde68a" font-size="12" text-anchor="end">B</text><circle cx="140" cy="155" r="4" fill="#fde68a"/><path d="M140 155 Q 215 158 330 280" fill="none" stroke="#67e8f9" stroke-width="3"/><text x="130" y="159" fill="#fde68a" font-size="12" text-anchor="end">C</text><line x1="20" y1="280" x2="430" y2="280" stroke="#94a3b8" stroke-width="2"/><text x="250" y="60" fill="#ffedd5" font-size="12">Deeper hole → higher pressure</text><text x="250" y="78" fill="#ffedd5" font-size="12">→ water comes out faster</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Factor</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Observation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Conclusion</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Depth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water comes out of lower holes faster (with the can on a raised block, the lowest jet lands furthest).</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure increases with depth.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Density</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At the same depth, salt water or mercury gives a bigger reading on a pressure gauge than fresh water.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure increases with density.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Direction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jets from holes around a can at the same depth are equal.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At a given depth, pressure acts equally in all directions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shape of container</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Liquid stands at the same level in connected vessels of different shapes.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure does not depend on the shape or cross-section of the container.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Deriving P = ρgh</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Imagine a column of liquid of height h and cross-sectional area A.</li>
    <li>Volume of the column = A × h.</li>
    <li>Mass = density × volume = ρAh.</li>
    <li>Weight (force) = mg = ρAhg.</li>
    <li>Pressure = force ÷ area = ρAhg ÷ A = <strong>ρgh</strong>.</li>
    </ol>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>The area cancels out — that is why liquid pressure does not depend on the width or shape of the container.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">3. Worked Examples</h3>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Pressure at the bottom of a tank</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A water tank is filled to a depth of 2.5 m. Find the pressure due to the water at the bottom. (ρ = 1 000 kg/m³, g = 10 N/kg)</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = ρgh</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 1 000 × 10 × 2.5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 25 000 Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> P = 25 000 Pa (2.5 × 10⁴ Pa)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 2: Total pressure on a diver</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A diver is 12 m below the surface of a lake. If atmospheric pressure is 1.0 × 10⁵ Pa, find the total pressure on the diver. (ρ = 1 000 kg/m³, g = 10 N/kg)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Total pressure = atmospheric pressure + pressure due to the water.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Water pressure</strong>
    </p>
    <div style="margin:6px 0 0 34px;">ρgh = 1 000 × 10 × 12 = 120 000 Pa</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Add atmospheric pressure</strong>
    </p>
    <div style="margin:6px 0 0 34px;">120 000 + 100 000 = 220 000 Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Total pressure = 2.2 × 10⁵ Pa</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Giving only ρgh when the question asks for total pressure.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 3: The mercury barometer</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A mercury barometer reads 76 cm. Find the atmospheric pressure. (ρ of mercury = 13 600 kg/m³, g = 10 N/kg)</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Convert height</strong>
    </p>
    <div style="margin:6px 0 0 34px;">76 cm = 0.76 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = ρgh = 13 600 × 10 × 0.76</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P = 103 360 Pa ≈ 1.03 × 10⁵ Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Atmospheric pressure ≈ 1.03 × 10⁵ Pa (with g = 9.8 N/kg this gives about 1.01 × 10⁵ Pa).</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The weight of the mercury column is supported by atmospheric pressure, so the column height measures that pressure.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 4: Finding depth</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> At what depth in sea water (ρ = 1 030 kg/m³) is the pressure due to the water 206 000 Pa? (g = 10 N/kg)</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Rearrange</strong>
    </p>
    <div style="margin:6px 0 0 34px;">h = P ÷ (ρg)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">h = 206 000 ÷ (1 030 × 10)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">h = 20 m</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> h = 20 m</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">4. Applications</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Application</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Physics</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dams are thicker at the bottom</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water pressure is greatest at the bottom.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water tanks and towers are raised high</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A greater height (h) gives greater pressure in the taps below.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divers need special suits; ears hurt at depth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure increases with depth.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drips (IV bags) are hung high above patients</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Height gives enough pressure for fluid to enter a vein.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Submarines have thick hulls</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">They must withstand huge pressure at depth.</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Find the pressure due to water at a depth of 8 m (ρ = 1 000 kg/m³, g = 10 N/kg).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 1 000 × 10 × 8 = 80 000 Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Does the pressure at the bottom of a narrow tube and a wide tank of water of the same depth differ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">No — pressure depends only on depth, density and g, not on shape or width.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why are dams built thicker at the bottom?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Water pressure increases with depth, so the bottom must withstand the greatest pressure.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Pressure Increases with Depth</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To investigate how pressure in a liquid changes with depth.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tall plastic bottle or can</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Nail (to make holes)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Masking tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Water</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Basin or tray</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Make three holes of the same size in a vertical line on the bottle at different heights (teacher may help).</li>
    <li>Cover the holes with tape and fill the bottle with water.</li>
    <li>Stand the bottle on a raised block (e.g. a stack of books) at the edge of a large tray, then remove the tape quickly.</li>
    <li>Observe the speed of each jet and measure how far each lands from the bottle.</li>
    <li>Keep topping up to maintain the water level and repeat.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hole</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Depth below surface (cm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Distance jet lands (cm)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Top</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Middle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bottom</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The jet from the deepest hole comes out fastest, showing that pressure increases with depth.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the nail carefully or let the teacher make the holes.</li>
    <li>Work over a tray and wipe spills immediately.</li>
    <li>Keep water away from electrical sockets.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Kenyan water engineers raise storage tanks on towers so that water flows to homes with enough pressure. Hydroelectric dams such as those on the Tana River are designed with thick bases to resist the great water pressure at the bottom.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Nurses hang drip bags high above patients: the height of the liquid gives the pressure needed to push fluid into a vein.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Find the pressure due to water 3 m deep.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: P = ρgh.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 1 000 × 10 × 3 = 30 000 Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> A liquid of density 800 kg/m³ is 0.5 m deep. Find the pressure at the bottom.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use ρ = 800.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 800 × 10 × 0.5 = 4 000 Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> State two factors that affect pressure in a fluid.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Look at the formula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Depth and density (also g).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find the height of a water tank at home or school and calculate the water pressure at the tap at ground level.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Explain the derivation of P = ρgh to your partner step by step.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Carry out the bottle-jets practical and present your results in a table and graph.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Search how deep the deepest part of Lake Victoria is and calculate the water pressure there.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write the equation for pressure in a fluid.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = ρgh.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is the density of water?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">1 000 kg/m³.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find the pressure due to sea water (1 030 kg/m³) at 50 m.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 1 030 × 10 × 50 = 515 000 Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the total pressure at 5 m in fresh water if atmospheric pressure is 1.0 × 10⁵ Pa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">50 000 + 100 000 = 150 000 Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A mercury barometer at a high-altitude town reads 62 cm. Find the atmospheric pressure (ρ = 13 600 kg/m³, g = 10 N/kg).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 13 600 × 10 × 0.62 = 84 320 Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why should water tanks be placed on raised stands?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Greater height gives greater water pressure at the taps, so water flows well.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Why is mercury used in barometers instead of water?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Mercury is much denser, so the column is short (about 76 cm); a water barometer would need a column over 10 m high.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Pressure in a fluid increases with depth and density and depends on g, but not on the container’s shape. It acts equally in all directions at a given depth. P = ρgh. Total pressure at a depth = atmospheric pressure + ρgh. Applications include dams, water towers, drips, diving and barometers.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>P = ρgh.</li>
    <li>Increases with depth and density.</li>
    <li>Equal in all directions at a depth.</li>
    <li>Independent of container shape.</li>
    <li>Total = P_atm + ρgh.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Depth in metres.</li>
    <li>Water: 1 000 kg/m³; g = 10 N/kg.</li>
    <li>Read whether the question wants total pressure.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using cm for depth.</li>
    <li>Forgetting atmospheric pressure in total pressure.</li>
    <li>Thinking wider tanks give higher pressure.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write ρ, g and h with units before substituting.</li>
    <li>Rearrange formulae before substituting numbers.</li>
    <li>Check answers are sensible.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the formula, substitution and units.</li>
    <li>Explain applications with reference to depth.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving problems with P = ρgh.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Practicals and explanations.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching depths of lakes.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Love (safety in practicals)</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental education (water resources)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-economic issues</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Water supply, dams, diving and medical drips all depend on how pressure changes with depth.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve: pressure due to oil (900 kg/m³) at 4 m; depth in water where pressure is 45 000 Pa.</li>
    <li>Draw and label a mercury barometer and explain how it works.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain why my ears hurt when diving?</li>
    <li>Which part of the derivation was hardest?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Density</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mass per unit volume.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Fluid</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A liquid or gas.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Depth</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical distance below the surface.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Total pressure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atmospheric plus liquid pressure.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state factors affecting fluid pressure.</p>
    <p style="margin:6px 0;">☐ I can derive P = ρgh.</p>
    <p style="margin:6px 0;">☐ I can calculate liquid and total pressure.</p>
    <p style="margin:6px 0;">☐ I can explain applications.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Pressure in a liquid increases with:',
            options: ['Width of the container', 'Depth', 'Shape of the container', 'Colour of the liquid'],
            correct: 1,
            explanation: 'P = ρgh increases with depth h; width and shape do not matter.'
        },
        {
            question: 'The pressure due to water at a depth of 4 m is (ρ = 1 000 kg/m³, g = 10 N/kg):',
            options: ['4 000 Pa', '40 000 Pa', '400 Pa', '400 000 Pa'],
            correct: 1,
            explanation: 'P = 1 000 × 10 × 4 = 40 000 Pa.'
        },
        {
            question: 'In P = ρgh, ρ stands for:',
            options: ['Pressure', 'Density', 'Depth', 'Gravity'],
            correct: 1,
            explanation: 'ρ (rho) is density in kg/m³.'
        },
        {
            question: 'Dams are thicker at the bottom because:',
            options: ['It looks better', 'Water is lighter at the bottom', 'The top must be heavier', 'Water pressure is greatest at the bottom'],
            correct: 3,
            explanation: 'Pressure increases with depth.'
        },
        {
            question: 'Total pressure at a depth equals:',
            options: ['ρgh − atmospheric pressure', 'Atmospheric pressure only', 'Atmospheric pressure + ρgh', 'ρ + g + h'],
            correct: 2,
            explanation: 'Air presses on the liquid surface too.'
        },
        {
            question: 'Pressure at a point in a liquid acts:',
            options: ['Equally in all directions', 'Only downwards', 'Only upwards', 'Only sideways'],
            correct: 0,
            explanation: 'Fluid pressure at a point acts in all directions.'
        },
        {
            question: 'Mercury is used in barometers because it:',
            options: ['Is cheap', 'Is light', 'Is very dense, so the column is short', 'Evaporates quickly'],
            correct: 2,
            explanation: 'High density gives a manageable column height.'
        },
        {
            question: 'A water tower is built tall to:',
            options: ['Cool the water', 'Reduce pressure', 'Store less water', 'Increase water pressure at taps'],
            correct: 3,
            explanation: 'Greater height gives greater pressure below.'
        },
        {
            question: 'Depth at which water pressure is 50 000 Pa (ρ = 1 000, g = 10):',
            options: ['5 m', '50 m', '0.5 m', '500 m'],
            correct: 0,
            explanation: 'h = P ÷ ρg = 50 000 ÷ 10 000 = 5 m.'
        },
        {
            question: 'Pressure at the bottom of a liquid does NOT depend on:',
            options: ['The depth', 'The density', 'The shape of the container', 'g'],
            correct: 2,
            explanation: 'Area cancels out in the derivation.'
        }
    ]
},
{
    name: '1.2.3 Pressure: Transmission of Pressure in Fluids and Applications',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Transmission of Pressure in Fluids and Applications</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will discover that pressure applied to an enclosed liquid is transmitted equally throughout it (Pascal’s principle), use this to explain and calculate forces in hydraulic machines, and explain other applications: syringes, siphons, bicycle pumps and water pumps.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Hydraulic systems let a mechanic lift a car with one hand and let a driver stop a heavy matatu with a light press of the foot. Understanding them is the basis of many engineering careers.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Car jacks</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛑 Hydraulic brakes</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💉 Syringes</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚲 Bicycle pumps</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💧 Water pumps</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Excavators</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe atmospheric pressure and demonstrate its existence.</li>
    <li>Investigate factors affecting pressure in fluids.</li>
    <li>Apply the fluid pressure equation P = ρgh.</li>
    <li>Demonstrate the transmission of pressure in fluids.</li>
    <li>Appreciate applications of pressure in daily life.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State and demonstrate the principle of transmission of pressure (Pascal’s principle).</li>
    <li>Calculate forces in a hydraulic press.</li>
    <li>Explain the working of a hydraulic jack and hydraulic brakes.</li>
    <li>Explain syringes, siphons, bicycle pumps and water pumps using pressure.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> How do the density of a fluid, acceleration due to gravity and depth below the free surface affect pressure in a fluid?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> Lessons 1.2.1 and 1.2.2 — P = F/A, atmospheric pressure and P = ρgh.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Squeeze a plastic bottle full of water with small holes all around it. Water squirts out of <em>every</em> hole, not just the one near your hand. The pressure you apply spreads to every part of the liquid.</p>
    <p><strong>Principle of transmission of pressure (Pascal’s principle):</strong> pressure applied to an enclosed fluid is transmitted equally to all parts of the fluid and to the walls of its container.</p>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Liquids cannot be squashed (they are almost incompressible), so a push on one part is felt everywhere.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Pascal’s principle</strong>
    </p>
    <p style="margin:6px 0;">Pressure applied to an enclosed fluid is transmitted equally throughout it.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Squeezing a bottle with holes makes water squirt from all holes.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Incompressible</strong>
    </p>
    <p style="margin:6px 0;">Cannot be squeezed into a smaller volume.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Liquids such as oil are almost incompressible.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Hydraulic</strong>
    </p>
    <p style="margin:6px 0;">Operated by liquid under pressure.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A hydraulic jack lifts cars.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Piston</strong>
    </p>
    <p style="margin:6px 0;">A sliding disc or cylinder that fits closely inside a tube.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The small piston of a jack.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Siphon</strong>
    </p>
    <p style="margin:6px 0;">A tube used to move liquid from a higher container to a lower one over an obstacle.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Emptying a fish tank with a pipe.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Valve</strong>
    </p>
    <p style="margin:6px 0;">A device that lets fluid flow in one direction only.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The valve in a bicycle tyre.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. The Hydraulic Press</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 520 250" width="520" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><path d="M60 120 L60 210 L460 210 L460 70" fill="none" stroke="#fdba74" stroke-width="3"/><path d="M120 120 L120 175 L360 175 L360 70" fill="none" stroke="#fdba74" stroke-width="3"/><rect x="62" y="122" width="56" height="86" fill="#7c2d12" opacity="0.8"/><rect x="118" y="177" width="340" height="31" fill="#7c2d12" opacity="0.8"/><rect x="362" y="72" width="96" height="136" fill="#7c2d12" opacity="0.8"/><rect x="58" y="108" width="64" height="12" fill="#94a3b8"/><rect x="358" y="58" width="104" height="12" fill="#94a3b8"/><line x1="90" y1="60" x2="90" y2="104" stroke="#fde68a" stroke-width="3"/><polygon points="84,100 96,100 90,110" fill="#fde68a"/><text x="90" y="52" fill="#fde68a" text-anchor="middle">F₁ (small)</text><line x1="410" y1="54" x2="410" y2="14" stroke="#86efac" stroke-width="3"/><polygon points="404,18 416,18 410,8" fill="#86efac"/><text x="460" y="30" fill="#86efac" text-anchor="middle">F₂ (large)</text><text x="90" y="235" fill="#ffedd5" text-anchor="middle" font-size="12">small piston A₁</text><text x="410" y="235" fill="#ffedd5" text-anchor="middle" font-size="12">large piston A₂</text><text x="260" y="198" fill="#ffedd5" text-anchor="middle" font-size="12">oil (incompressible liquid)</text>
    </svg>
    </div>
    <p>A small force F₁ on a small piston of area A₁ creates pressure P = F₁/A₁. This pressure is transmitted through the oil to the large piston of area A₂, producing a large force F₂.</p>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Hydraulic press</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">F₁ ÷ A₁ = F₂ ÷ A₂</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The pressure is the same on both pistons, so the force is multiplied by the ratio of the areas.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Forces in N, areas in m² (or both in cm² — the same unit on both sides).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Hydraulic jacks, presses, brakes and lifts.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Thinking energy is multiplied: the large piston moves a much shorter distance.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> F₂ = F₁ × (A₂ ÷ A₁).</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Lifting a car</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> In a hydraulic jack, the small piston has an area of 0.002 m² and the large piston an area of 0.1 m². What force on the small piston can lift a car of weight 12 000 N?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Equation</strong>
    </p>
    <div style="margin:6px 0 0 34px;">F₁ ÷ A₁ = F₂ ÷ A₂</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Rearrange</strong>
    </p>
    <div style="margin:6px 0 0 34px;">F₁ = F₂ × A₁ ÷ A₂</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">F₁ = 12 000 × 0.002 ÷ 0.1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#ffedd5;">Step 4: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">F₁ = 240 N</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> A force of only 240 N lifts the 12 000 N car.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The large piston has 50 times the area, so the force is multiplied 50 times.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 2: Using diameters</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A hydraulic press has pistons of diameter 2 cm and 20 cm. A force of 50 N is applied to the small piston. Find the force on the large piston.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Area is proportional to diameter squared, so the area ratio is (20 ÷ 2)² = 100.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Area ratio</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A₂ ÷ A₁ = (20 ÷ 2)² = 100</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Force</strong>
    </p>
    <div style="margin:6px 0 0 34px;">F₂ = 50 × 100 = 5 000 N</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> F₂ = 5 000 N</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using the diameter ratio (10) instead of the area ratio (100).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Hydraulic Brakes</h3>
    <p>When the driver presses the brake pedal, a piston in the master cylinder pushes on brake fluid. The pressure is transmitted equally through pipes to wider pistons (slave cylinders) at each wheel, which press the brake pads or shoes against the discs or drums with a large force. All wheels receive equal pressure at the same time.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Air bubbles in brake fluid make brakes “spongy” and dangerous: air is compressible, so the pressure is not transmitted effectively. Brakes must be “bled” to remove air.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">3. Other Applications of Pressure</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Device</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it works</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Syringe</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pulling the plunger lowers the pressure inside the barrel; atmospheric pressure pushes the liquid in. Pushing the plunger raises the pressure and forces liquid out.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Siphon</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A tube full of liquid with its outlet below the surface of the liquid in the upper container. The pressure at the higher end is greater, so liquid keeps flowing out at the lower end. The tube must be full and the outlet lower than the surface.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bicycle pump</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pushing the handle compresses air; when its pressure exceeds the tyre pressure, the tyre valve opens and air enters. On the up-stroke the pump fills with air again.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lift pump</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Atmospheric pressure pushes water up the pipe into the low-pressure region below the rising piston; valves keep water moving one way. It can raise water only about 10 m, because atmospheric pressure supports about a 10 m column of water.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force pump</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Like a lift pump, but water is pushed out under pressure by the piston, so it can raise water much higher.</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State Pascal’s principle.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Pressure applied to an enclosed fluid is transmitted equally to all parts of the fluid and its container.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why is oil used in hydraulic systems rather than air?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Oil is almost incompressible, so pressure is transmitted fully; air is compressible.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why can a lift pump not raise water more than about 10 m?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Atmospheric pressure can only support a column of water about 10 m high.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Transmission of Pressure and a Model Hydraulic Lift</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To demonstrate that pressure is transmitted equally in a liquid and to build a model hydraulic lift.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plastic bottle with several pin-holes around it</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two syringes of different sizes (e.g. 5 mL and 20 mL)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plastic tubing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Water</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small masses or coins</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Fill the bottle with water and squeeze it. Observe the jets from all holes.</li>
    <li>Fill the two syringes and tube with water, removing all air bubbles, and connect them.</li>
    <li>Push the small syringe plunger and observe the large plunger.</li>
    <li>Place coins on the large plunger and find how many can be lifted by a gentle push on the small plunger.</li>
    <li>Compare the distances moved by the two plungers.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <p>Water squirts equally from all holes. A small push on the small plunger lifts a larger load on the large plunger, but the large plunger moves a shorter distance.</p>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Pressure is transmitted equally through a liquid; hydraulic systems multiply force (not energy).</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Never use syringe needles — use syringes without needles only.</li>
    <li>Clean up spilt water immediately.</li>
    <li>Do not squirt water at others.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Hydraulics are everywhere: car jacks in garages, brakes in matatus and lorries, excavators on construction sites, barber and dentist chairs, and the lifts in vehicle-service bays. Bicycle pumps and borehole pumps are part of daily life in Kenya.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Mechanics, hydraulic engineers and heavy-machinery operators use Pascal’s principle every day.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> A press has A₁ = 0.01 m², A₂ = 0.5 m². What force on the large piston results from 100 N on the small?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: F₂ = F₁ × A₂ ÷ A₁.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">F₂ = 100 × 0.5 ÷ 0.01 = 5 000 N.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Give two conditions for a siphon to work.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think about starting a siphon.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The tube must be full of liquid; the outlet must be lower than the liquid surface in the upper container.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why must air be removed from brake fluid?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Compressible vs incompressible.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Air is compressible, so it absorbs pressure and the brakes do not work properly.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw and label a hydraulic jack and write a step-by-step explanation of how it works.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Explain to your partner how a syringe draws in liquid, using “pressure inside” and “pressure outside”.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Build the model hydraulic lift with syringes and demonstrate it to the class.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Watch an animation of hydraulic brakes and list the parts the pressure passes through.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State Pascal’s principle.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Pressure applied to an enclosed fluid is transmitted equally throughout it.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name three devices that use hydraulics.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Car jack, hydraulic brakes, excavator (also hydraulic press, barber chair).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A force of 20 N acts on a piston of area 4 cm². The large piston is 200 cm². Find the force on it.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">F₂ = 20 × 200 ÷ 4 = 1 000 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain how a bicycle pump inflates a tyre.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Pushing compresses air until its pressure exceeds tyre pressure; the valve opens and air enters the tyre.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Pistons of a hydraulic press have diameters 3 cm and 30 cm. What force on the small piston lifts a load of 9 000 N?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Area ratio = (30 ÷ 3)² = 100; F₁ = 9 000 ÷ 100 = 90 N.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why can a hand pump on a borehole only lift water from a shallow depth unless it is a force pump?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A lift pump depends on atmospheric pressure, which supports about 10 m of water; deeper water needs a force pump or submersible pump.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A hydraulic press multiplies force. Does it multiply energy? Explain.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">No — the large piston moves a much smaller distance, so work out ≤ work in (energy is conserved).</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Pressure applied to an enclosed fluid is transmitted equally throughout it (Pascal’s principle). Hydraulic machines use this to multiply force: F₁/A₁ = F₂/A₂. Applications include jacks, brakes and presses. Syringes, siphons, bicycle pumps and water pumps also work through pressure differences.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pascal’s principle.</li>
    <li>F₁ ÷ A₁ = F₂ ÷ A₂.</li>
    <li>Area ratio = (diameter ratio)².</li>
    <li>Liquids are incompressible; air is not.</li>
    <li>Lift pump limit ≈ 10 m.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Same units for both areas.</li>
    <li>Force is multiplied, not energy.</li>
    <li>Siphon: tube full, outlet lower.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using diameter ratio instead of area ratio.</li>
    <li>Saying the jack creates energy.</li>
    <li>Forgetting valves in pumps.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw the system before calculating.</li>
    <li>Label F₁, A₁, F₂, A₂ clearly.</li>
    <li>Explain pumps stroke by stroke.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calculations: formula, substitution, answer with units.</li>
    <li>Explanations: mention transmission of pressure and incompressibility.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a model hydraulic lift.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving hydraulic problems.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group demonstrations.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Love (safe sharing of apparatus)</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (vehicle brakes)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-economic issues (water pumping)</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From garages to construction sites to boreholes, pressure makes heavy work possible.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve three hydraulic-press problems of your own and swap with a classmate.</li>
    <li>Explain, with diagrams, how a siphon works and its two conditions.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I now explain how a car jack works?</li>
    <li>Which application of pressure do I use most often?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pascal’s principle</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equal transmission of pressure in enclosed fluids.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hydraulic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Worked by liquid pressure.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Siphon</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tube that moves liquid over an obstacle to a lower level.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Valve</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One-way flow device.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state and demonstrate Pascal’s principle.</p>
    <p style="margin:6px 0;">☐ I can calculate forces in a hydraulic press.</p>
    <p style="margin:6px 0;">☐ I can explain hydraulic brakes.</p>
    <p style="margin:6px 0;">☐ I can explain syringes, siphons and pumps.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Pascal’s principle states that pressure in an enclosed fluid is:',
            options: ['Lost at the walls', 'Transmitted equally throughout', 'Greatest at the top', 'Only transmitted downwards'],
            correct: 1,
            explanation: 'Pressure applied to an enclosed fluid spreads equally everywhere.'
        },
        {
            question: 'In a hydraulic press, F₁ ÷ A₁ equals:',
            options: ['F₂ × A₂', 'A₂ ÷ F₂', 'F₂ ÷ A₂', 'F₁ × A₂'],
            correct: 2,
            explanation: 'The pressure is equal on both pistons.'
        },
        {
            question: 'A₁ = 0.002 m², A₂ = 0.1 m², F₂ = 12 000 N. F₁ is:',
            options: ['240 N', '600 000 N', '24 N', '2 400 N'],
            correct: 0,
            explanation: 'F₁ = 12 000 × 0.002 ÷ 0.1 = 240 N.'
        },
        {
            question: 'Pistons of diameters 2 cm and 20 cm have an area ratio of:',
            options: ['10', '100', '20', '40'],
            correct: 1,
            explanation: 'Area ratio = (20 ÷ 2)² = 100.'
        },
        {
            question: 'Oil is used in hydraulic systems because it is:',
            options: ['Compressible', 'Almost incompressible', 'A gas', 'Very light'],
            correct: 1,
            explanation: 'Incompressible fluids transmit pressure fully.'
        },
        {
            question: 'Air in brake fluid makes brakes:',
            options: ['Stronger', 'Faster', 'Spongy and less effective', 'Quieter'],
            correct: 2,
            explanation: 'Air compresses, absorbing pressure.'
        },
        {
            question: 'A syringe draws in liquid because:',
            options: ['The plunger sucks', 'Gravity pulls it', 'The liquid is light', 'Atmospheric pressure pushes liquid into the low-pressure barrel'],
            correct: 3,
            explanation: 'Pulling the plunger lowers inside pressure.'
        },
        {
            question: 'A siphon works only if:',
            options: ['The tube is full and the outlet is below the upper liquid surface', 'The tube is empty', 'The outlet is higher', 'The liquid is hot'],
            correct: 0,
            explanation: 'These two conditions keep the flow going.'
        },
        {
            question: 'A lift pump cannot raise water more than about:',
            options: ['10 m', '100 m', '1 m', '1 000 m'],
            correct: 0,
            explanation: 'Atmospheric pressure supports roughly a 10 m column of water.'
        },
        {
            question: 'A hydraulic jack multiplies:',
            options: ['Energy', 'Mass', 'Force, not energy', 'Time'],
            correct: 2,
            explanation: 'The large piston moves a shorter distance, conserving energy.'
        }
    ]
},
{
    name: '1.2 Quiz: Pressure',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📝 Quiz — Pressure</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.2.1, 1.2.2 and 1.2.3. Take g = 10 N/kg and the density of water as 1 000 kg/m³.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pressure in solids, P = F/A</li>
    <li>Atmospheric pressure and its demonstrations</li>
    <li>Factors affecting fluid pressure and P = ρgh</li>
    <li>Pascal’s principle and hydraulic machines</li>
    <li>Syringes, siphons, bicycle pumps and water pumps</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #f97316;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">📝 Exam Tip</p>
    <div>Before calculating, write the formula and convert all lengths to metres and areas to m² (unless both areas in a hydraulic problem are in the same unit).</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A force of 300 N acts on 0.06 m². The pressure is:',
            options: ['18 Pa', '5 000 Pa', '500 Pa', '50 Pa'],
            correct: 1,
            explanation: 'P = 300 ÷ 0.06 = 5 000 Pa.'
        },
        {
            question: 'Which design gives LOW pressure?',
            options: ['Wide tractor tyres', 'Sharp knife', 'Needle', 'Drawing pin'],
            correct: 0,
            explanation: 'A large area spreads the force.'
        },
        {
            question: 'A 2 kg brick (20 cm × 10 cm × 5 cm) has minimum pressure of:',
            options: ['4 000 Pa', '2 000 Pa', '20 Pa', '1 000 Pa'],
            correct: 3,
            explanation: 'Largest face 0.02 m²; P = 20 ÷ 0.02 = 1 000 Pa.'
        },
        {
            question: 'Atmospheric pressure decreases with:',
            options: ['Increasing depth in water', 'Increasing temperature only', 'Decreasing altitude', 'Increasing altitude'],
            correct: 3,
            explanation: 'Less air above at higher places.'
        },
        {
            question: 'The card stays on an upturned glass of water because:',
            options: ['Water is sticky', 'Glass attracts card', 'Gravity is weak', 'Atmospheric pressure pushes up on it'],
            correct: 3,
            explanation: 'Air pressure below supports the water.'
        },
        {
            question: 'Pressure due to water at 6 m depth is:',
            options: ['6 000 Pa', '60 000 Pa', '600 Pa', '600 000 Pa'],
            correct: 1,
            explanation: 'P = 1 000 × 10 × 6 = 60 000 Pa.'
        },
        {
            question: 'Liquid pressure does NOT depend on:',
            options: ['Depth', 'Density', 'g', 'Shape of the container'],
            correct: 3,
            explanation: 'Area cancels in the derivation.'
        },
        {
            question: 'Total pressure at 10 m in water with P_atm = 1.0 × 10⁵ Pa is:',
            options: ['1.0 × 10⁵ Pa', '1.0 × 10⁴ Pa', '2.0 × 10⁵ Pa', '1.1 × 10⁵ Pa'],
            correct: 2,
            explanation: 'ρgh = 100 000 Pa; add 100 000 Pa.'
        },
        {
            question: 'A mercury barometer reading of 0.75 m gives (ρ = 13 600 kg/m³):',
            options: ['10 200 Pa', '1 020 Pa', '102 000 Pa', '1 020 000 Pa'],
            correct: 2,
            explanation: '13 600 × 10 × 0.75 = 102 000 Pa.'
        },
        {
            question: 'Pascal’s principle applies to:',
            options: ['Enclosed fluids', 'Solids only', 'Open air only', 'Vacuums'],
            correct: 0,
            explanation: 'Pressure is transmitted in enclosed fluids.'
        },
        {
            question: 'F₁ = 50 N, A₁ = 5 cm², A₂ = 250 cm². F₂ is:',
            options: ['2 500 N', '1 N', '250 N', '25 000 N'],
            correct: 0,
            explanation: 'F₂ = 50 × 250 ÷ 5 = 2 500 N.'
        },
        {
            question: 'Air in a hydraulic system is a problem because air is:',
            options: ['Incompressible', 'Compressible', 'Too heavy', 'A liquid'],
            correct: 1,
            explanation: 'Compressible air absorbs the applied pressure.'
        },
        {
            question: 'In a bicycle pump, air enters the tyre when:',
            options: ['Pump pressure exceeds tyre pressure', 'The handle is pulled up', 'The tyre is full', 'The valve is closed'],
            correct: 0,
            explanation: 'The valve opens when pressure behind it is greater.'
        },
        {
            question: 'Dams are thickest at the base because:',
            options: ['Concrete is cheap', 'Water is less dense at the bottom', 'Pressure increases with depth', 'Fish live there'],
            correct: 2,
            explanation: 'Greatest pressure is at the bottom.'
        },
        {
            question: 'A siphon will stop working if:',
            options: ['The outlet is lower than the surface', 'Air enters the tube', 'The tube is full', 'The liquid is water'],
            correct: 1,
            explanation: 'The tube must remain full of liquid.'
        }
    ]
},
{
    name: '1.2 Assignment: Design and Test a Hydraulic Model',
    type: 'lesson',
    duration: '80 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📂 Design and Test a Hydraulic Model</h2>
    <p style="font-size:16px;">In groups, you will design, build and test a working hydraulic model (lift, arm or jack) using syringes and tubing, then write a report applying Pascal’s principle and pressure calculations.</p>
    <p style="margin:6px 0 0 0;color:#ffedd5;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🎬 The Task in Context</h3>
    <p>A local jua kali workshop wants a simple teaching model to explain to apprentices how hydraulic jacks and excavator arms work. Your group has been asked to design one from low-cost materials.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Research how hydraulic jacks or excavator arms work (print or digital media).</li>
    <li>Sketch a design using at least two syringes of different sizes, tubing, water, and a frame made of cardboard, wood or plastic.</li>
    <li>Build the model. Fill it with water and remove all air bubbles.</li>
    <li>Measure the diameters of both syringes and calculate the area ratio and the theoretical force multiplication.</li>
    <li>Test: find the largest load the model can lift with a gentle push; measure the distances moved by both plungers.</li>
    <li>Compare the measured distance ratio with the area ratio and explain any differences (friction, leaks, air).</li>
    <li>Write a report (2–3 pages) with diagram, calculations, results table, explanation using Pascal’s principle, and improvements.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Labelled design sketch</li>
    <li>Working model</li>
    <li>Calculations and results table</li>
    <li>Group report (2–3 pages)</li>
    <li>Short demonstration to the class</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Determining pressure and forces</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, consistent calculations of areas, pressure and forces</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations only with prompts</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate and comprehensive explanation linking model to real machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explanation only with cues</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Model design and function</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creative, well-built, works reliably</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Works as intended</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Works partly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Does not work</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork and safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All members contribute; excellent safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Good teamwork and safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some members inactive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poor teamwork or unsafe</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use syringes without needles only.<br>Remove air bubbles carefully — they spoil the model.<br>Coloured water makes the demonstration easier to see.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did the model teach us about real hydraulic machines?</li>
    <li>Why was the force multiplication less than calculated?</li>
    <li>How could our model be improved?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'What liquid is used in the model?',
            options: ['Petrol', 'Mercury', 'Water', 'Air'],
            correct: 2,
            explanation: 'Water is safe and nearly incompressible.'
        },
        {
            question: 'Why must air bubbles be removed?',
            options: ['Air is too heavy', 'Air changes colour', 'Air is a solid', 'Air is compressible and spoils the transmission of pressure'],
            correct: 3,
            explanation: 'Air compresses instead of passing on the pressure.'
        },
        {
            question: 'The theoretical force multiplication equals the:',
            options: ['Length of the tube', 'Volume of water', 'Area ratio of the syringes', 'Mass of the model'],
            correct: 2,
            explanation: 'The force ratio F₂/F₁ equals the area ratio A₂/A₁ when friction is ignored.'
        },
        {
            question: 'Syringes must be used:',
            options: ['Without needles', 'With needles', 'Filled with air', 'Heated'],
            correct: 0,
            explanation: 'Needles are a safety hazard.'
        },
        {
            question: 'Measured force multiplication is usually less than calculated because of:',
            options: ['Gravity', 'Friction, leaks and air', 'Colour of water', 'Size of the report'],
            correct: 1,
            explanation: 'Real systems lose some effectiveness.'
        }
    ]
},
{
    name: '1.2 Revision: Pressure',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🔁 Revision — Pressure</h2>
    <p style="font-size:16px;">Review pressure in solids, the atmosphere and fluids, and hydraulic applications before moving on to 1.3.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">📐 Pressure in solids</p>
    <div>P = F ÷ A (Pa = N/m²). Small area → high pressure; large area → low pressure.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🌍 Atmospheric pressure</p>
    <div>≈ 1.01 × 10⁵ Pa at sea level; decreases with altitude. Demonstrations: crushing can, card on glass, straw, sucker. Measured by barometer.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🌊 Fluid pressure</p>
    <div>P = ρgh. Increases with depth and density; equal in all directions; independent of shape. Total = P_atm + ρgh.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🔁 Pascal’s principle</p>
    <div>Pressure in an enclosed fluid is transmitted equally. F₁ ÷ A₁ = F₂ ÷ A₂.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🛠️ Applications</p>
    <div>Jacks, brakes, syringes, siphons, bicycle pumps, lift and force pumps, dams, water towers, drips.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Formula</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Units</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P = F ÷ A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure from a force</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">N, m², Pa</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P = ρgh</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pressure in a fluid</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kg/m³, N/kg, m, Pa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P_total = P_atm + ρgh</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Total pressure at a depth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pa</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F₁ ÷ A₁ = F₂ ÷ A₂</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hydraulic machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">N, m² (same units)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A 40 kg learner stands on two feet of total area 0.04 m². Find the pressure (g = 10 N/kg).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">P = 400 ÷ 0.04 = 10 000 Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the pressure due to water at 15 m and the total pressure if P_atm = 1.0 × 10⁵ Pa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">ρgh = 150 000 Pa; total = 250 000 Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Pistons of a hydraulic press have areas 0.005 m² and 0.2 m². What force lifts 8 000 N?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">F₁ = 8 000 × 0.005 ÷ 0.2 = 200 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain why a drinking straw works.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Sucking lowers the pressure in the straw; atmospheric pressure on the liquid surface pushes liquid up.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> State two conditions for a siphon to work.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Tube full of liquid; outlet below the surface of the liquid in the upper container.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can calculate pressure in solids.</p>
    <p style="margin:6px 0;">☐ I can explain atmospheric pressure.</p>
    <p style="margin:6px 0;">☐ I can apply P = ρgh.</p>
    <p style="margin:6px 0;">☐ I can explain and calculate hydraulic systems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '1 Pa equals:',
            options: ['1 N/m²', '1 N/cm²', '1 kg/m³', '1 J/s'],
            correct: 0,
            explanation: 'The pascal is one newton per square metre.'
        },
        {
            question: 'Which increases pressure in a liquid?',
            options: ['A wider container', 'A narrower container', 'Greater depth', 'A different shape'],
            correct: 2,
            explanation: 'Only depth, density and g matter.'
        },
        {
            question: 'Atmospheric pressure is measured with a:',
            options: ['Manometer only', 'Thermometer', 'Voltmeter', 'Barometer'],
            correct: 3,
            explanation: 'A barometer measures air pressure.'
        },
        {
            question: 'In hydraulic brakes, the fluid transmits:',
            options: ['Heat', 'Pressure', 'Light', 'Electricity'],
            correct: 1,
            explanation: 'Pressure is transmitted through the brake fluid.'
        },
        {
            question: 'Why does a sharp needle pierce skin easily?',
            options: ['Large area gives high pressure', 'It is heavy', 'It is hot', 'Small area gives high pressure'],
            correct: 3,
            explanation: 'Force concentrated on a tiny area.'
        },
        {
            question: 'A force pump differs from a lift pump because it:',
            options: ['Pushes water out under pressure and can lift higher', 'Has no valves', 'Uses no piston', 'Only works with air'],
            correct: 0,
            explanation: 'Force pumps are not limited to about 10 m.'
        },
        {
            question: 'Pressure at a depth in a liquid acts:',
            options: ['Only downwards', 'Only upwards', 'Equally in all directions', 'Not at all'],
            correct: 2,
            explanation: 'Fluid pressure acts in all directions.'
        },
        {
            question: 'P = ρgh was derived by dividing the weight of a liquid column by its:',
            options: ['Volume', 'Area', 'Height', 'Mass'],
            correct: 1,
            explanation: 'Pressure = weight ÷ area; area cancels.'
        }
    ]
},
{
    name: '1.2 Summary: Pressure',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.2 Pressure</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🧾 Summary — Pressure</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Pressure is how concentrated a force is; in fluids it grows with depth and density, the atmosphere presses on everything, and enclosed liquids pass pressure on equally — which lets small forces do big jobs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Pressure = force ÷ area, measured in pascals (N/m²).</li>
    <li>Small areas give high pressure; large areas give low pressure.</li>
    <li>The atmosphere exerts about 1.01 × 10⁵ Pa at sea level, less at higher altitudes.</li>
    <li>Pressure in a fluid: P = ρgh — increases with depth and density, equal in all directions, independent of container shape.</li>
    <li>Total pressure at a depth = atmospheric pressure + ρgh.</li>
    <li>Pascal’s principle: pressure in an enclosed fluid is transmitted equally.</li>
    <li>Hydraulic machines multiply force: F₁ ÷ A₁ = F₂ ÷ A₂.</li>
    <li>Syringes, straws, siphons, bicycle pumps and water pumps work by pressure differences.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Pressure and the atmosphere</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P = F/A; high and low pressure designs; atmospheric pressure</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Convert cm² to m²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 P = ρgh</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factors affecting fluid pressure; derivation; dams, divers, barometers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add P_atm for total pressure</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Transmission of pressure</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pascal’s principle; hydraulics; syringes, siphons, pumps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the area ratio, not the diameter ratio</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">pressure</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">pascal</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">atmospheric pressure</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">barometer</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">density</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">depth</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">fluid</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pascal’s principle</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hydraulic</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">incompressible</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">siphon</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">valve</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From the shape of a knife to the brakes of a matatu and the water tower in your town, pressure is everywhere.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Mechanical Properties of Materials explains why steel is used in bridges, why rubber stretches and why a string snaps but a spring does not.</div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ describe and demonstrate atmospheric pressure</p>
    <p style="margin:6px 0;">✔️ investigate factors affecting pressure in fluids</p>
    <p style="margin:6px 0;">✔️ apply P = ρgh</p>
    <p style="margin:6px 0;">✔️ demonstrate transmission of pressure and explain its applications</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is that pressure:',
            options: ['Measures how concentrated a force is and is transmitted in fluids', 'Is the same as force', 'Only exists in gases', 'Cannot be measured'],
            correct: 0,
            explanation: 'Pressure is force per area and behaves predictably in fluids.'
        },
        {
            question: 'Which lesson covered hydraulic machines?',
            options: ['1.2.1', '1.2.2', '1.1.2', '1.2.3'],
            correct: 3,
            explanation: 'Transmission of pressure and hydraulics were in 1.2.3.'
        },
        {
            question: 'Which formula is used for fluid pressure?',
            options: ['P = mv', 'P = ρgh', 'P = IV', 'P = W/t'],
            correct: 1,
            explanation: 'P = ρgh gives pressure in a fluid.'
        },
        {
            question: 'What comes next?',
            options: ['1.1 Introduction to Physics', '2.1 Properties of Waves', '1.6 Machines', '1.3 Mechanical Properties of Materials'],
            correct: 3,
            explanation: 'Mechanical properties follow pressure.'
        },
        {
            question: 'Which term means “cannot be squashed”?',
            options: ['Elastic', 'Incompressible', 'Ductile', 'Brittle'],
            correct: 1,
            explanation: 'Liquids are nearly incompressible.'
        }
    ]
},
{
    name: '1.3.1 Mechanical Properties of Materials: Types of Mechanical Properties',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.3.1: Types of Mechanical Properties</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what mechanical properties are and explore strength, stiffness, hardness, toughness, elasticity, plasticity, ductility, malleability and brittleness, demonstrating them with materials found around you.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Choosing the wrong material can be dangerous: a brittle ladder can snap, a soft bolt can bend. Builders, mechanics, tailors and engineers choose materials by their mechanical properties.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Construction</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Vehicle parts</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚡ Electrical wiring</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧵 Ropes and fabrics</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔨 Jua kali workshops</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏏 Sports equipment</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain mechanical properties of materials.</li>
    <li>Demonstrate mechanical properties using locally available materials.</li>
    <li>Determine tensile stress, tensile strain and the modulus of elasticity using formulae.</li>
    <li>Describe industrial and everyday applications of mechanical properties.</li>
    <li>Appreciate the importance of mechanical properties of materials.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define mechanical properties of materials.</li>
    <li>Explain at least eight mechanical properties.</li>
    <li>Demonstrate properties using locally available materials.</li>
    <li>Match materials to uses based on their properties.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> Why does a string snap easily as compared to a spring?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> You know that forces can change the shape of objects (Junior School Integrated Science).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Why are electric cables made of copper, bridges of steel, rubber bands of rubber and chalk not used for building? The answer lies in how each material responds when a force acts on it — its <strong>mechanical properties</strong>.</p>
    <p><strong>Mechanical properties</strong> describe how a material behaves when forces (pulling, pushing, bending, twisting or striking) act on it.</p>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Mechanical properties answer: “What happens to this material when I pull, press, bend or hit it?”</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Strength</strong>
    </p>
    <p style="margin:6px 0;">The ability of a material to withstand a large force without breaking.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> measured as breaking stress (Pa)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Steel cables are strong.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Elasticity</strong>
    </p>
    <p style="margin:6px 0;">The ability to return to the original shape and size after the force is removed.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A rubber band springs back.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Plasticity</strong>
    </p>
    <p style="margin:6px 0;">The ability to be permanently deformed without breaking.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Plasticine keeps its new shape.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Ductility</strong>
    </p>
    <p style="margin:6px 0;">The ability to be drawn (pulled) into thin wires.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Copper is drawn into electrical wire.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Malleability</strong>
    </p>
    <p style="margin:6px 0;">The ability to be hammered or rolled into thin sheets.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Aluminium is rolled into foil; iron into mabati.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Brittleness</strong>
    </p>
    <p style="margin:6px 0;">The tendency to break suddenly without much deformation.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Glass and chalk are brittle.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Hardness</strong>
    </p>
    <p style="margin:6px 0;">The ability to resist scratching, cutting or denting.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Diamond is the hardest natural material.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Stiffness</strong>
    </p>
    <p style="margin:6px 0;">The ability to resist bending or stretching.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A steel ruler is stiffer than a plastic one.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Toughness</strong>
    </p>
    <p style="margin:6px 0;">The ability to absorb energy without breaking when struck.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Rubber soles and steel are tough.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Mechanical Properties and Their Uses</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example materials</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Everyday use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strength</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Steel, nylon rope</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bridges, cables, lifting ropes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elasticity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rubber, steel springs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Catapults, mattresses, shock absorbers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plasticity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clay, plasticine, hot metals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pottery, moulding car bodies</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ductility</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copper, aluminium, gold</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrical wires</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Malleability</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron, aluminium, gold</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Iron sheets (mabati), sufurias, foil, jewellery</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brittleness</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Glass, chalk, cast iron, clay pots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Avoided where impacts occur</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hardness</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Diamond, hardened steel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drill bits, cutting tools</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stiffness</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Steel, hardwood</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building frames, beams</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Toughness</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mild steel, rubber, leather</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hammers, shoe soles, tyres</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Confusing strength with hardness. Glass is hard (difficult to scratch) but not tough — it shatters when struck. A rope is strong when pulled but not hard.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Choosing Materials</h3>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Matching material to use</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Explain which property is most important and suggest a suitable material for: (a) electrical wiring (b) roofing sheets (c) a catapult band (d) a drill bit.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: (a) Wiring</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Ductility (and good conductivity) → copper.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: (b) Roofing</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Malleability and strength → galvanised iron (mabati) or aluminium.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: (c) Catapult</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Elasticity → rubber.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#ffedd5;">Step 4: (d) Drill bit</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Hardness → hardened steel or tungsten carbide.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> (a) copper — ductile (b) iron/aluminium sheet — malleable (c) rubber — elastic (d) hardened steel — hard.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 2: Answering the key inquiry question</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Why does a string snap more easily than a spring when both are pulled?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Think about elasticity and how each material stores the stretch.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: String</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A cotton string is not very elastic; it stretches little before reaching its breaking point, so it snaps.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Spring</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A steel spring is coiled, so it extends a lot by bending the coils, and steel is elastic and strong.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Conclusion</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The spring can stretch and return; the string reaches its limit quickly.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> A spring is made of strong, elastic steel and its coiled shape allows large extension without damage; a string has low elasticity and strength, so it quickly reaches breaking point.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Name a ductile material and its use.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Copper — electrical wires.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why is glass not used for car tyres?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">It is brittle and not elastic or tough; it would shatter.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is the difference between elasticity and plasticity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Elastic materials return to their shape; plastic materials stay permanently deformed.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Testing Properties of Local Materials</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To demonstrate mechanical properties using locally available materials.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rubber band</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plasticine or clay</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Thin copper wire</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Aluminium foil or a soft drink can</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Chalk</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Steel and plastic rulers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hammer (teacher use)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety goggles</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Stretch a rubber band gently and release it. Observe whether it returns to its shape (elasticity).</li>
    <li>Press and mould plasticine. Does it keep its new shape (plasticity)?</li>
    <li>Bend and stretch a copper wire. Does it bend without breaking (ductility)?</li>
    <li>Teacher hammers a piece of aluminium flat. Does it spread into a sheet (malleability)?</li>
    <li>Bend a piece of chalk gently. Does it snap suddenly (brittleness)?</li>
    <li>Bend a steel ruler and a plastic ruler with the same force. Which bends less (stiffness)?</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Material</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Test</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Observation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property shown</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rubber band</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stretch and release</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plasticine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mould</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copper wire</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bend/stretch</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aluminium</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hammer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chalk</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bend</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rulers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bend</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Different materials respond differently to forces; their mechanical properties decide what they are used for.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear goggles when bending or breaking brittle materials.</li>
    <li>Do not over-stretch rubber bands towards faces.</li>
    <li>Only the teacher uses the hammer.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Jua kali artisans choose metal sheets for their malleability when making sufurias and boxes. Electricians use ductile copper; builders use stiff, strong steel reinforcement in concrete; shoemakers use tough leather and rubber.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Materials scientists and engineers test materials so that bridges, buildings and vehicles are safe.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Define malleability.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of mabati.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The ability to be hammered or rolled into thin sheets.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which property makes rubber suitable for catapults?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It returns to shape.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Elasticity.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Classify chalk.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It snaps suddenly.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Brittle.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find ten objects at home and name the main mechanical property each material needs.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Quiz each other: one names a property; the other names a material and a use.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Carry out the testing practical and present a completed observation table.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research why steel bars are placed inside concrete (reinforced concrete).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What are mechanical properties?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">How a material behaves when forces act on it.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give an example of a brittle material.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Glass, chalk, cast iron or clay pots.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Distinguish between ductility and malleability.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Ductility: drawn into wires; malleability: hammered or rolled into sheets.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why is copper used for electrical wires?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">It is ductile (and a good electrical conductor).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why concrete is reinforced with steel bars.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Concrete is strong in compression but weak in tension; steel is strong in tension, so together they resist both.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A builder must choose a material for a ladder. Which properties are needed and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Strength (support weight), stiffness (not bend), toughness (not shatter); e.g. aluminium or seasoned hardwood.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Can a material be both hard and brittle? Give an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Yes — glass is hard (resists scratching) but brittle (shatters on impact).</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Mechanical properties describe how materials respond to forces: strength, stiffness, hardness, toughness, elasticity, plasticity, ductility, malleability and brittleness. Materials are chosen for uses based on these properties.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Strength — resists breaking.</li>
    <li>Elasticity — returns to shape.</li>
    <li>Plasticity — permanent change.</li>
    <li>Ductility — wires; malleability — sheets.</li>
    <li>Brittleness — snaps suddenly.</li>
    <li>Hardness, stiffness, toughness.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Hard ≠ tough.</li>
    <li>Strong ≠ stiff.</li>
    <li>Use local examples.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing ductile and malleable.</li>
    <li>Calling glass tough.</li>
    <li>Mixing strength and hardness.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Learn each property with a material and a use.</li>
    <li>Test properties safely with everyday items.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define the property, then give an example.</li>
    <li>Explain material choices by naming the property.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group testing and presentations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing materials for uses.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility (caring for apparatus)</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity (reporting genuine results)</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety in choosing materials</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-economic issues (jua kali industry)</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every building, vehicle and tool depends on choosing the right material.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Make a table of eight properties with two materials and one use each.</li>
    <li>Explain the key inquiry question in your own words with a diagram.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which property surprised me?</li>
    <li>Which objects at home could be made of a better material?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ductile</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Can be drawn into wires.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Malleable</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Can be hammered into sheets.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Brittle</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Breaks suddenly.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Elastic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Returns to original shape.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Plastic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stays deformed.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can define mechanical properties.</p>
    <p style="margin:6px 0;">☐ I can explain eight properties.</p>
    <p style="margin:6px 0;">☐ I can demonstrate them.</p>
    <p style="margin:6px 0;">☐ I can match materials to uses.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The ability to be drawn into wires is called:',
            options: ['Malleability', 'Brittleness', 'Ductility', 'Hardness'],
            correct: 2,
            explanation: 'Ductile materials such as copper can be drawn into wires.'
        },
        {
            question: 'Iron sheets (mabati) are made using the property of:',
            options: ['Ductility', 'Malleability', 'Brittleness', 'Elasticity'],
            correct: 1,
            explanation: 'Malleable metals can be rolled into sheets.'
        },
        {
            question: 'A rubber band returning to shape shows:',
            options: ['Plasticity', 'Brittleness', 'Hardness', 'Elasticity'],
            correct: 3,
            explanation: 'Returning to shape is elasticity.'
        },
        {
            question: 'Plasticine keeping a new shape shows:',
            options: ['Elasticity', 'Ductility', 'Stiffness', 'Plasticity'],
            correct: 3,
            explanation: 'Permanent deformation is plasticity.'
        },
        {
            question: 'Glass shattering when dropped shows:',
            options: ['Brittleness', 'Toughness', 'Ductility', 'Elasticity'],
            correct: 0,
            explanation: 'Brittle materials break suddenly.'
        },
        {
            question: 'Which material is best for a drill bit?',
            options: ['Rubber', 'Plasticine', 'Chalk', 'Hardened steel'],
            correct: 3,
            explanation: 'Drill bits need hardness.'
        },
        {
            question: 'Copper is used for wires because it is:',
            options: ['Brittle', 'Elastic', 'Ductile and a good conductor', 'Hard'],
            correct: 2,
            explanation: 'Ductility allows wire drawing.'
        },
        {
            question: 'A steel ruler bends less than a plastic one because steel is:',
            options: ['Stiffer', 'More brittle', 'More plastic', 'Lighter'],
            correct: 0,
            explanation: 'Stiffness resists bending.'
        },
        {
            question: 'Toughness is the ability to:',
            options: ['Resist scratching', 'Absorb energy without breaking when struck', 'Return to shape', 'Be drawn into wires'],
            correct: 1,
            explanation: 'Tough materials withstand impacts.'
        },
        {
            question: 'A spring stretches more than a string without breaking because steel is:',
            options: ['Strong and elastic, and coiled', 'Brittle', 'Plastic', 'Soft'],
            correct: 0,
            explanation: 'Elastic steel in a coil can extend a lot and return.'
        }
    ]
},
{
    name: '1.3.2 Mechanical Properties of Materials: Force, Extension and the Spring Constant',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.3.2: Force, Extension and the Spring Constant</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will investigate how the extension of a spring depends on the stretching force, learn Hooke’s law, find the spring constant from a graph, and identify the elastic limit.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Spring balances, weighing scales, vehicle suspensions and mattresses all depend on predictable stretching. Engineers must know how much a spring or wire will stretch — and when it will stop returning to shape.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Spring balances</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Vehicle suspension</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛏️ Mattresses</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🖊️ Retractable pens</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏋️ Exercise equipment</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧲 Door closers</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain mechanical properties of materials.</li>
    <li>Demonstrate mechanical properties using locally available materials.</li>
    <li>Determine tensile stress, tensile strain and the modulus of elasticity using formulae.</li>
    <li>Describe industrial and everyday applications of mechanical properties.</li>
    <li>Appreciate the importance of mechanical properties of materials.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Investigate the relationship between force and extension.</li>
    <li>State Hooke’s law.</li>
    <li>Determine the spring constant from a graph and by calculation.</li>
    <li>Identify the elastic limit and plastic deformation.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> Why does a string snap easily as compared to a spring?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> Lesson 1.3.1 — elasticity and plasticity; plotting straight-line graphs in Mathematics.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>Hang a 100 g mass on a spring and it stretches by, say, 2 cm. Hang 200 g and it stretches by 4 cm. Double the force, double the extension. This simple pattern was discovered by Robert Hooke in the 17th century.</p>
    <p><strong>Extension</strong> is the increase in length: <em>e = stretched length − original length</em>.</p>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Hooke’s law</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">F = k e</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The extension of a spring is directly proportional to the stretching force, provided the limit of proportionality (elastic limit) is not exceeded. k is the spring constant.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> F in N, e in m, k in N/m.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Springs and wires stretched within their elastic limit.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using the total length instead of the extension.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> k is the force needed for 1 m of extension: a stiffer spring has a bigger k.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Within the limit: <strong>double the force → double the stretch</strong>.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Extension</strong>
    </p>
    <p style="margin:6px 0;">The increase in length of a spring or wire when stretched.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> e, metre (m)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Length goes from 10 cm to 13 cm: extension = 3 cm.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Hooke’s law</strong>
    </p>
    <p style="margin:6px 0;">Extension is directly proportional to force within the elastic limit.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> F = ke</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Spring balances work by Hooke’s law.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Spring constant</strong>
    </p>
    <p style="margin:6px 0;">The force per unit extension of a spring; a measure of stiffness.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> k, N/m</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A stiff car spring has a large k.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Elastic limit</strong>
    </p>
    <p style="margin:6px 0;">The maximum force (or stress) beyond which a material will not return to its original shape.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Overloading a spring stretches it permanently.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Limit of proportionality</strong>
    </p>
    <p style="margin:6px 0;">The point beyond which force and extension are no longer proportional.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The graph stops being a straight line.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Plastic deformation</strong>
    </p>
    <p style="margin:6px 0;">Permanent change in shape after the elastic limit.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>An over-stretched spring stays longer.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Force–Extension Graph</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 440 280" width="440" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="60" y1="240" x2="410" y2="240" stroke="#94a3b8" stroke-width="2"/><line x1="60" y1="240" x2="60" y2="20" stroke="#94a3b8" stroke-width="2"/><text x="235" y="270" fill="#ffedd5" text-anchor="middle" font-size="13">Extension, e (m)</text><text x="22" y="130" fill="#ffedd5" font-size="13" transform="rotate(-90 22 130)" text-anchor="middle">Force, F (N)</text><line x1="60" y1="240" x2="230" y2="90" stroke="#fb923c" stroke-width="3"/><path d="M230 90 Q 280 50 340 45 L 380 52" fill="none" stroke="#fb923c" stroke-width="3" stroke-dasharray="6 4"/><circle cx="230" cy="90" r="5" fill="#fde68a"/><text x="236" y="112" fill="#fde68a" font-size="12">P: limit of proportionality / elastic limit</text><circle cx="380" cy="52" r="5" fill="#f87171"/><text x="372" y="40" fill="#f87171" font-size="12" text-anchor="end">breaking point</text><text x="120" y="160" fill="#86efac" font-size="12" transform="rotate(-41 120 160)">Hooke’s law region: F = ke</text>
    </svg>
    </div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Up to point P, the graph is a <strong>straight line through the origin</strong>: F ∝ e (Hooke’s law).</li>
    <li>The <strong>gradient</strong> of the straight part = F ÷ e = <strong>k</strong>.</li>
    <li>Beyond the elastic limit, the material deforms plastically: it will not return to its original length.</li>
    <li>Eventually it reaches the <strong>breaking point</strong>.</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Worked Examples</h3>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Finding the spring constant</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A force of 4 N stretches a spring by 2 cm. Find the spring constant.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Convert</strong>
    </p>
    <div style="margin:6px 0 0 34px;">e = 2 cm = 0.02 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">k = F ÷ e</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">k = 4 ÷ 0.02 = 200 N/m</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> k = 200 N/m</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 2: Predicting length</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The same spring (k = 200 N/m) has a natural length of 10 cm. Find its length when a 6 N load hangs from it (within the elastic limit).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Extension</strong>
    </p>
    <div style="margin:6px 0 0 34px;">e = F ÷ k = 6 ÷ 200 = 0.03 m = 3 cm</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: New length</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10 cm + 3 cm = 13 cm</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Length = 13 cm</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Giving 3 cm (the extension) as the answer when the question asks for the length.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 3: Using a graph</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A learner’s results: 0 N → 0 mm; 1 N → 5 mm; 2 N → 10 mm; 3 N → 15 mm; 4 N → 20 mm; 5 N → 27 mm. Find k and the force at which Hooke’s law stops being obeyed.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Check where the extension stops increasing by equal steps.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Look for equal steps</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Each 1 N adds 5 mm up to 4 N; from 4 N to 5 N it adds 7 mm.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Spring constant</strong>
    </p>
    <div style="margin:6px 0 0 34px;">k = 4 N ÷ 0.020 m = 200 N/m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Limit</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Proportionality fails between 4 N and 5 N.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> k = 200 N/m; Hooke’s law is obeyed up to about 4 N.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">3. Why a String Snaps but a Spring Stretches</h3>
    <p>A coiled steel spring has a low spring constant compared with a straight wire and a large elastic range: the coils bend and twist, giving large extensions with small strain in the steel. A cotton or nylon string stretches very little before reaching its breaking point. So for the same pull, the string reaches its limit first and snaps.</p>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State Hooke’s law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The extension of a spring is directly proportional to the stretching force, provided the elastic limit is not exceeded.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> A spring of k = 50 N/m is stretched by 0.1 m. Find the force.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">F = ke = 50 × 0.1 = 5 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What happens if a spring is stretched beyond its elastic limit?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">It deforms permanently (plastic deformation) and does not return to its original length.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Verifying Hooke’s Law and Finding k</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To investigate the relationship between force and extension of a spring and determine its spring constant.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Helical spring</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Retort stand, boss and clamp</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pointer (pin)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Slotted masses (10 × 100 g)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mass hanger</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Hang the spring from the clamp and attach the pointer at its lower end. Record the initial pointer reading against the vertical metre rule.</li>
    <li>Add 100 g (weight 1 N, with g = 10 N/kg) and record the new reading.</li>
    <li>Continue adding 100 g masses up to 600 g, recording each reading.</li>
    <li>Remove the masses one at a time and record readings again; check that the spring returns to its original length.</li>
    <li>Calculate extension for each load and plot force (y-axis) against extension (x-axis).</li>
    <li>Find the gradient of the straight-line part: this is k.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mass (g)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Force (N)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reading (cm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Extension (cm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Extension (m)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">200</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">300</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">400</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">500</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">600</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Force against extension gives a straight line through the origin, so extension is proportional to force (Hooke’s law); the gradient gives k.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Clamp the stand firmly and place a tray below the masses.</li>
    <li>Do not overload the spring.</li>
    <li>Keep feet away from hanging masses.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Spring balances, kitchen and bathroom scales, vehicle shock absorbers, bed springs, door closers and trampolines all use Hooke’s law. Engineers choose springs with suitable k values for each job.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Overloaded vehicles can permanently damage their suspension springs — they are stretched (compressed) beyond the elastic limit.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> A 10 N force extends a spring by 5 cm. Find k.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Convert cm to m.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">k = 10 ÷ 0.05 = 200 N/m.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Find the extension of a spring (k = 400 N/m) under 8 N.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: e = F ÷ k.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">e = 8 ÷ 400 = 0.02 m = 2 cm.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What does the gradient of a force–extension graph represent?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Gradient = F ÷ e.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The spring constant k.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a simple spring balance from a rubber band, a paper clip and a ruler; calibrate it with known masses.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Swap results tables from the practical and calculate each other’s k.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Carry out the Hooke’s law practical, plot the graph and present k with your conclusion.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a free online graph plotter to plot your results and find the gradient.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is extension?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The increase in length of a stretched spring or wire.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write Hooke’s law as an equation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">F = ke.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A spring of natural length 15 cm extends to 18 cm under 6 N. Find k.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">e = 3 cm = 0.03 m; k = 6 ÷ 0.03 = 200 N/m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the length of the same spring under 10 N.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">e = 10 ÷ 200 = 0.05 m = 5 cm; length = 20 cm.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Two springs A (k = 100 N/m) and B (k = 300 N/m) carry the same load of 6 N. Which extends more, and by how much more?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A: 0.06 m; B: 0.02 m. A extends 0.04 m (4 cm) more.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why do spring balances have a maximum reading marked on them?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">To prevent stretching beyond the elastic limit, which would damage the spring and make readings wrong.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Why is the force–extension graph of rubber not a straight line?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Rubber does not obey Hooke’s law over most of its range; its extension is not proportional to force.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Extension is the increase in length. Hooke’s law: F = ke within the limit of proportionality (elastic limit). The spring constant k (N/m) is the gradient of a force–extension graph. Beyond the elastic limit, plastic deformation occurs, and eventually the material breaks.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>e = new length − original length.</li>
    <li>F = ke.</li>
    <li>k = gradient of F–e graph.</li>
    <li>Elastic limit → plastic deformation → breaking.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use metres for extension.</li>
    <li>Length ≠ extension.</li>
    <li>Stiffer spring → larger k.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using total length instead of extension.</li>
    <li>Forgetting to convert cm to m.</li>
    <li>Drawing a curve through the straight-line region.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Put force on the y-axis to make gradient = k.</li>
    <li>Take readings while loading and unloading.</li>
    <li>Use a large triangle to find the gradient.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State Hooke’s law with its condition (“provided the elastic limit is not exceeded”).</li>
    <li>Show gradient calculations clearly.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analysing graphs and finding k.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group practicals.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility (caring for apparatus)</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity (genuine results)</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (not overloading equipment)</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Weighing scales, suspensions and many machines rely on springs that obey Hooke’s law.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Plot a graph from the data in Worked Example 3 and find k.</li>
    <li>Explain with a diagram what happens when a spring is overloaded.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Did my graph give a straight line? Why or why not?</li>
    <li>How confident am I with F = ke problems?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hooke’s law</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F ∝ e within the elastic limit.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Spring constant</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force per unit extension.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Elastic limit</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limit beyond which permanent deformation occurs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Extension</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Increase in length.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can investigate force and extension.</p>
    <p style="margin:6px 0;">☐ I can state Hooke’s law.</p>
    <p style="margin:6px 0;">☐ I can find k from a graph and calculation.</p>
    <p style="margin:6px 0;">☐ I can explain the elastic limit.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Hooke’s law states that extension is directly proportional to force:',
            options: ['Provided the elastic limit is not exceeded', 'Always', 'Only for rubber', 'Only beyond the elastic limit'],
            correct: 0,
            explanation: 'The law holds only within the limit of proportionality.'
        },
        {
            question: 'A force of 6 N extends a spring by 3 cm. The spring constant is:',
            options: ['2 N/m', '18 N/m', '0.5 N/m', '200 N/m'],
            correct: 3,
            explanation: 'k = 6 ÷ 0.03 = 200 N/m.'
        },
        {
            question: 'The unit of the spring constant is:',
            options: ['N', 'N/m', 'm', 'Pa'],
            correct: 1,
            explanation: 'k = F ÷ e, newtons per metre.'
        },
        {
            question: 'The gradient of a force–extension graph gives:',
            options: ['The spring constant', 'The extension', 'The mass', 'The breaking stress'],
            correct: 0,
            explanation: 'Gradient = F ÷ e = k.'
        },
        {
            question: 'A spring (k = 100 N/m) under 5 N extends by:',
            options: ['500 m', '20 m', '0.05 m', '0.5 m'],
            correct: 2,
            explanation: 'e = 5 ÷ 100 = 0.05 m.'
        },
        {
            question: 'Beyond the elastic limit, a spring:',
            options: ['Returns to its shape', 'Becomes shorter', 'Is permanently deformed', 'Obeys Hooke’s law better'],
            correct: 2,
            explanation: 'Plastic deformation is permanent.'
        },
        {
            question: 'Extension is calculated as:',
            options: ['Original length + stretched length', 'Force × length', 'Length ÷ force', 'Stretched length − original length'],
            correct: 3,
            explanation: 'Extension is the increase in length.'
        },
        {
            question: 'A spring of natural length 10 cm and k = 200 N/m carries 4 N. Its length is:',
            options: ['2 cm', '14 cm', '12 cm', '8 cm'],
            correct: 2,
            explanation: 'e = 4 ÷ 200 = 0.02 m = 2 cm; length = 12 cm.'
        },
        {
            question: 'A stiffer spring has:',
            options: ['A larger spring constant', 'A smaller spring constant', 'No spring constant', 'A negative spring constant'],
            correct: 0,
            explanation: 'More force is needed per metre of extension.'
        },
        {
            question: 'A string snaps before a spring mainly because the string:',
            options: ['Is heavier', 'Is longer', 'Obeys Hooke’s law better', 'Has low elasticity and reaches its breaking point quickly'],
            correct: 3,
            explanation: 'The string cannot stretch much before breaking.'
        }
    ]
},
{
    name: '1.3.3 Mechanical Properties of Materials: Stress, Strain and Young’s Modulus',
    type: 'lesson',
    duration: '40 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📘 Lesson 1.3.3: Stress, Strain and Young’s Modulus</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will define and calculate tensile stress, tensile strain, breaking stress and the modulus of elasticity (Young’s modulus), and use them to compare materials and explain industrial applications.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Engineers use stress and Young’s modulus to choose cables for bridges and lifts, steel for buildings and ropes for lifting — so that structures are safe and do not stretch or break.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌉 Suspension bridges</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Cranes and lifts</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚡ Power cables</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧗 Climbing ropes</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏢 Steel frames</span><span style="background:#0b1a2e;border:1px solid #fdba74;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎸 Guitar strings</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#ffedd5;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain mechanical properties of materials.</li>
    <li>Demonstrate mechanical properties using locally available materials.</li>
    <li>Determine tensile stress, tensile strain and the modulus of elasticity using formulae.</li>
    <li>Describe industrial and everyday applications of mechanical properties.</li>
    <li>Appreciate the importance of mechanical properties of materials.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#ffedd5;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define tensile stress, tensile strain and Young’s modulus.</li>
    <li>Calculate stress, strain, breaking stress and Young’s modulus.</li>
    <li>Compare materials using Young’s modulus.</li>
    <li>Describe industrial applications of mechanical properties.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">❓ Key inquiry question:</strong> Why is it important to study the mechanical properties of materials?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#ffedd5;">🧰 What you already know:</strong> Lesson 1.3.2 — Hooke’s law; lesson 1.2.1 — P = F/A; area of a circle = πr².</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">👩🏾‍🏫 Teacher Explanation</h3>
    <p>A thick rope and a thin thread are pulled with the same force. The thread snaps first. It is not just the <em>force</em> that matters but the force on each square metre of cross-section — the <strong>stress</strong>. And it is not just the extension that matters but the extension compared with the original length — the <strong>strain</strong>.</p>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Tensile stress</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">stress (σ) = F ÷ A</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Tensile force per unit cross-sectional area.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> N/m² = Pa</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Comparing how hard materials of different thickness are being pulled.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using the length instead of the cross-sectional area; forgetting A = πr² for a wire.</div>
    </div>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Tensile strain</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">strain (ε) = ΔL ÷ L₀</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Extension divided by original length.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> No units (a ratio).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Comparing stretch of samples of different lengths.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using different units for ΔL and L₀.</div>
    </div>
    <div style="background:#0b1a2e;border:1px solid #f97316;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#fdba74;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Young’s modulus</p>
    <div style="color:#ffedd5;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">E = stress ÷ strain = (F × L₀) ÷ (A × ΔL)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> A measure of stiffness of the material itself (not the sample’s shape).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Pa (N/m²)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Within the elastic limit.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> High E → very stiff (steel); low E → easily stretched (rubber).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Tensile stress</strong>
    </p>
    <p style="margin:6px 0;">Tensile force per unit cross-sectional area.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> σ, Pa</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Stress in a lift cable.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Tensile strain</strong>
    </p>
    <p style="margin:6px 0;">Extension per unit original length.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> ε, no units</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A 2 m wire extending 2 mm has strain 0.001.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Young’s modulus</strong>
    </p>
    <p style="margin:6px 0;">Ratio of tensile stress to tensile strain within the elastic limit.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> E (or Y), Pa</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Steel ≈ 2 × 10¹¹ Pa.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Breaking stress</strong>
    </p>
    <p style="margin:6px 0;">The stress at which a material breaks (its ultimate strength).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> Pa</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Used to set safe loads for cables.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Cross-sectional area</strong>
    </p>
    <p style="margin:6px 0;">The area of the face you see when you cut a wire across.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> A, m²</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>For a wire, A = πr².</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #fb923c;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Tensile force</strong>
    </p>
    <p style="margin:6px 0;">A pulling (stretching) force.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fed7aa;">📏 Symbol / unit:</span> F, N</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The tension in a rope.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">1. Worked Examples</h3>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 1: Stress in a wire</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A wire of diameter 0.5 mm carries a load of 40 N. Find the tensile stress. (π = 3.142)</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Radius in metres</strong>
    </p>
    <div style="margin:6px 0 0 34px;">r = 0.25 mm = 2.5 × 10⁻⁴ m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Area</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A = πr² = 3.142 × (2.5 × 10⁻⁴)² ≈ 1.96 × 10⁻⁷ m²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Stress</strong>
    </p>
    <div style="margin:6px 0 0 34px;">σ = F ÷ A = 40 ÷ 1.96 × 10⁻⁷ ≈ 2.04 × 10⁸ Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Stress ≈ 2.0 × 10⁸ Pa</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using the diameter instead of the radius in πr².</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 2: Strain and Young’s modulus</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The same wire is 2.0 m long and extends by 2.0 mm under the 40 N load. Find the strain and Young’s modulus.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Strain</strong>
    </p>
    <div style="margin:6px 0 0 34px;">ε = ΔL ÷ L₀ = 0.002 m ÷ 2.0 m = 0.001</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Young’s modulus</strong>
    </p>
    <div style="margin:6px 0 0 34px;">E = stress ÷ strain = 2.04 × 10⁸ ÷ 0.001 = 2.04 × 10¹¹ Pa</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#ffedd5;">Step 3: Interpret</strong>
    </p>
    <div style="margin:6px 0 0 34px;">This is close to the value for steel, so the wire is probably steel.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Strain = 1.0 × 10⁻³; E ≈ 2.0 × 10¹¹ Pa</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #f97316;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#fdba74;font-weight:bold;">✏️ Worked Example 3: Breaking stress</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A nylon fishing line of cross-sectional area 2.0 × 10⁻⁷ m² breaks under a force of 80 N. Find its breaking stress.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#ffedd5;">Step 1: Formula</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Breaking stress = breaking force ÷ area</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#f97316;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#ffedd5;">Step 2: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">80 ÷ 2.0 × 10⁻⁷ = 4.0 × 10⁸ Pa</div>
    </div>
    <div style="background:#2a1708;border:1px solid #f97316;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#fdba74;">✅ Model answer:</strong> Breaking stress = 4.0 × 10⁸ Pa</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">2. Comparing Materials</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Material</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approximate Young’s modulus (Pa)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Steel</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 × 10¹¹</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very stiff — used in bridges and buildings</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 × 10¹¹</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stiff and ductile — wires</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Aluminium</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 × 10¹⁰</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Light and fairly stiff — aircraft, power lines</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wood (along grain)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">about 1 × 10¹⁰</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moderately stiff — furniture, roof timber</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nylon</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">about 3 × 10⁹</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flexible — ropes, fishing lines</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rubber</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">about 1 × 10⁶ to 1 × 10⁷</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very easily stretched — bands, tyres</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Note</p>
    <div>Young’s modulus belongs to the <strong>material</strong>, while the spring constant belongs to a particular <strong>object</strong> (it depends on its length and thickness too).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">3. Industrial and Everyday Applications</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li><strong>Construction:</strong> steel reinforcement bars and beams are chosen for high strength and Young’s modulus.</li>
    <li><strong>Cranes, lifts and bridges:</strong> cables are designed so that working stress is well below breaking stress (a safety factor).</li>
    <li><strong>Power lines:</strong> aluminium cables with steel cores combine conductivity, lightness and strength.</li>
    <li><strong>Ropes and safety harnesses:</strong> nylon’s elasticity absorbs shock.</li>
    <li><strong>Vehicles:</strong> chassis, springs and tyres use materials with suitable stiffness and toughness.</li>
    </ul>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fed7aa;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Define tensile strain and state its unit.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Extension divided by original length; it has no units.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> A rod of area 4 × 10⁻⁶ m² carries 2 000 N. Find the stress.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">σ = 2 000 ÷ 4 × 10⁻⁶ = 5 × 10⁸ Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why are cables designed to work far below their breaking stress?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">For safety — to allow for extra loads, wear, corrosion and uncertainties.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🔬 Practical Investigation: Stress and Strain in a Wire (Teacher Demonstration)</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To determine the tensile stress, strain and Young’s modulus of a thin wire.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Long thin copper or steel wire (2 m)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Fixed support (clamp at the ceiling or bench end)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule and millimetre scale or vernier</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Micrometer screw gauge</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Slotted masses</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety goggles</span>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Measure the wire’s diameter at several points with a micrometer and find the average; calculate A = πr².</li>
    <li>Measure the original length L₀ from the support to the marker.</li>
    <li>Add masses in steps and record the extension for each load.</li>
    <li>Calculate stress and strain for each load and plot stress against strain.</li>
    <li>Find Young’s modulus from the gradient of the straight-line region.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observations and results:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Load (N)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Extension ΔL (m)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stress (Pa)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Strain</th>
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
    </table>
    </div>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Stress is proportional to strain within the elastic limit; the gradient gives the material’s Young’s modulus.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wear goggles: a snapping wire can whip.</li>
    <li>Place a box of sand or soft material under the masses.</li>
    <li>Do not stand directly below the load.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #fb923c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Physics in Action: Applications and Careers</h3>
    <p>Kenyan civil engineers specify steel grades for bridges and high-rise buildings using stress calculations. Power distribution companies use aluminium-conductor steel-reinforced (ACSR) cables. Lift and crane cables are inspected regularly because wear reduces their safe working stress.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Materials engineers, civil engineers and quality inspectors work daily with stress, strain and Young’s modulus.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Find the strain when a 1.5 m wire extends by 3 mm.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use the same units.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">ε = 0.003 ÷ 1.5 = 0.002.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Find stress when 500 N acts on 2.5 × 10⁻⁶ m².</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: σ = F ÷ A.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">σ = 500 ÷ 2.5 × 10⁻⁶ = 2 × 10⁸ Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Find E if stress = 1.0 × 10⁸ Pa and strain = 5 × 10⁻⁴.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: E = stress ÷ strain.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">E = 1.0 × 10⁸ ÷ 5 × 10⁻⁴ = 2 × 10¹¹ Pa.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a revision card of the three formulae with units and one worked example each.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Set each other three stress–strain problems and swap solutions.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Research a Kenyan bridge or high-rise building and present the materials used and why.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online materials database to compare Young’s modulus of five materials and present a bar chart.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Practice Exercises</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define tensile stress.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Tensile force per unit cross-sectional area.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is the unit of Young’s modulus?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Pascal (N/m²).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A 3 m wire extends by 1.5 mm. Find the strain.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">ε = 0.0015 ÷ 3 = 5 × 10⁻⁴.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A wire of area 1 × 10⁻⁶ m² breaks under 600 N. Find its breaking stress.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">6 × 10⁸ Pa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A steel wire (E = 2 × 10¹¹ Pa), length 4 m, area 2 × 10⁻⁶ m², carries 100 N. Find its extension.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">ΔL = FL₀ ÷ (AE) = 100 × 4 ÷ (2 × 10⁻⁶ × 2 × 10¹¹) = 1 × 10⁻³ m = 1 mm.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why are power cables made of aluminium with a steel core?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Aluminium is light and conducts well; the steel core adds strength and stiffness so the cable does not stretch or break.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> From 1.3.2: a spring has k = 250 N/m. Find the extension under 5 N.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">e = 5 ÷ 250 = 0.02 m.</div>
    </details>
    </div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Tensile stress = F ÷ A (Pa); tensile strain = ΔL ÷ L₀ (no units); Young’s modulus E = stress ÷ strain (Pa), a measure of the stiffness of a material. Breaking stress is the stress at which a material breaks. Engineers use these quantities to choose safe materials for buildings, bridges, cables and vehicles.</p>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>σ = F ÷ A.</li>
    <li>Strain is the extension divided by the original length, ε = ΔL ÷ L₀.</li>
    <li>E = σ ÷ ε = FL₀ ÷ AΔL.</li>
    <li>A = πr² for wires.</li>
    <li>Work well below breaking stress.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Convert mm to m.</li>
    <li>Use the radius, not the diameter.</li>
    <li>Strain has no units.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Mistakes</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using diameter in πr².</li>
    <li>Mixing mm and m in strain.</li>
    <li>Confusing spring constant with Young’s modulus.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write values in standard form.</li>
    <li>Check the size of E: metals ~10¹⁰–10¹¹ Pa.</li>
    <li>Keep units in every step.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #f97316;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the area calculation fully.</li>
    <li>State the condition: within the elastic limit.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking and problem solving</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculating and comparing material properties.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Research presentations.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity (genuine results)</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#fed7aa;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security in choosing materials</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Socio-economic issues (construction)</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Safe bridges, lifts, buildings and power lines depend on correct stress and Young’s modulus calculations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve: stress, strain and E for a 2.5 m wire, diameter 0.8 mm, load 60 N, extension 1.2 mm.</li>
    <li>Write a paragraph answering: “Why is it important to study the mechanical properties of materials?”</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain the difference between k and E?</li>
    <li>Which calculation step do I most often get wrong?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Stress</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force per unit area.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Strain</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Extension per unit length.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Young’s modulus</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stress ÷ strain.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Breaking stress</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stress at which a material breaks.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can define stress, strain and Young’s modulus.</p>
    <p style="margin:6px 0;">☐ I can calculate them.</p>
    <p style="margin:6px 0;">☐ I can compare materials.</p>
    <p style="margin:6px 0;">☐ I can describe industrial applications.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Tensile stress is defined as:',
            options: ['Extension ÷ length', 'Force × extension', 'Force ÷ cross-sectional area', 'Length ÷ area'],
            correct: 2,
            explanation: 'Tensile stress is the tensile force divided by the cross-sectional area.'
        },
        {
            question: 'Tensile strain has the unit:',
            options: ['None (it is a ratio)', 'Pa', 'N', 'm'],
            correct: 0,
            explanation: 'Strain is length ÷ length.'
        },
        {
            question: 'Young’s modulus equals:',
            options: ['Stress ÷ strain', 'Strain ÷ stress', 'Force ÷ extension', 'Stress × strain'],
            correct: 0,
            explanation: 'E = stress ÷ strain.'
        },
        {
            question: 'A 2 m wire extends by 2 mm. The strain is:',
            options: ['1', '0.001', '0.1', '1 000'],
            correct: 1,
            explanation: 'ε = 0.002 ÷ 2 = 0.001.'
        },
        {
            question: 'Stress when 400 N acts on 2 × 10⁻⁶ m² is:',
            options: ['8 × 10⁻⁴ Pa', '2 × 10⁴ Pa', '2 × 10⁸ Pa', '8 × 10⁸ Pa'],
            correct: 2,
            explanation: '400 ÷ 2 × 10⁻⁶ = 2 × 10⁸ Pa.'
        },
        {
            question: 'Steel has a Young’s modulus of about:',
            options: ['2 × 10³ Pa', '2 × 10¹¹ Pa', '2 Pa', '2 × 10⁶ Pa'],
            correct: 1,
            explanation: 'Steel is very stiff, around 200 GPa.'
        },
        {
            question: 'The area of a wire of radius r is:',
            options: ['2πr', 'πd', 'πr²', 'r²'],
            correct: 2,
            explanation: 'Cross-section is a circle.'
        },
        {
            question: 'Breaking stress is the stress at which a material:',
            options: ['Starts to stretch', 'Returns to shape', 'Melts', 'Breaks'],
            correct: 3,
            explanation: 'It is the ultimate strength.'
        },
        {
            question: 'Cables are designed to work well below breaking stress for:',
            options: ['Decoration', 'Lower cost only', 'Faster speed', 'Safety'],
            correct: 3,
            explanation: 'A safety margin prevents failure.'
        },
        {
            question: 'Young’s modulus depends on:',
            options: ['The length of the sample', 'The colour', 'The load only', 'The material'],
            correct: 3,
            explanation: 'It is a property of the material, unlike the spring constant.'
        }
    ]
},
{
    name: '1.3 Quiz: Mechanical Properties of Materials',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📝 Quiz — Mechanical Properties of Materials</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.3.1, 1.3.2 and 1.3.3.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mechanical properties and their uses</li>
    <li>Hooke’s law and the spring constant</li>
    <li>Elastic limit and plastic deformation</li>
    <li>Tensile stress, strain, breaking stress and Young’s modulus</li>
    <li>Applications in industry</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #f97316;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">📝 Exam Tip</p>
    <div>Convert every length to metres and every area to m² before substituting. For wires, find the radius first.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Copper is drawn into wires because it is:',
            options: ['Brittle', 'Malleable only', 'Hard', 'Ductile'],
            correct: 3,
            explanation: 'Ductility allows wire drawing.'
        },
        {
            question: 'Which material is brittle?',
            options: ['Chalk', 'Rubber', 'Copper', 'Plasticine'],
            correct: 0,
            explanation: 'Chalk snaps suddenly.'
        },
        {
            question: 'Hammering a metal into a sheet uses its:',
            options: ['Malleability', 'Ductility', 'Elasticity', 'Brittleness'],
            correct: 0,
            explanation: 'Malleable metals form sheets.'
        },
        {
            question: 'Hooke’s law: F = ke. Here k is the:',
            options: ['Extension', 'Spring constant', 'Force', 'Elastic limit'],
            correct: 1,
            explanation: 'k is force per unit extension.'
        },
        {
            question: 'A spring extends 4 cm under 8 N. k is:',
            options: ['2 N/m', '32 N/m', '0.5 N/m', '200 N/m'],
            correct: 3,
            explanation: 'k = 8 ÷ 0.04 = 200 N/m.'
        },
        {
            question: 'Beyond the elastic limit, a material shows:',
            options: ['Perfect elasticity', 'No change', 'Plastic deformation', 'Shrinking'],
            correct: 2,
            explanation: 'Changes become permanent.'
        },
        {
            question: 'A spring of natural length 12 cm and k = 100 N/m carries 3 N. Its length is:',
            options: ['3 cm', '9 cm', '15 cm', '12 cm'],
            correct: 2,
            explanation: 'e = 0.03 m = 3 cm; 12 + 3 = 15 cm.'
        },
        {
            question: 'Tensile stress unit is:',
            options: ['N/m', 'Pa', 'No unit', 'm'],
            correct: 1,
            explanation: 'Stress is force per area, N/m², which is the pascal (Pa).'
        },
        {
            question: 'A 5 m wire stretched by 5 mm has strain:',
            options: ['1', '0.01', '25', '0.001'],
            correct: 3,
            explanation: 'ε = 0.005 ÷ 5 = 0.001.'
        },
        {
            question: 'Stress = 3 × 10⁸ Pa, strain = 1.5 × 10⁻³. E is:',
            options: ['4.5 × 10⁵ Pa', '2 × 10¹¹ Pa', '2 × 10⁵ Pa', '5 × 10⁻¹² Pa'],
            correct: 1,
            explanation: 'E = 3 × 10⁸ ÷ 1.5 × 10⁻³ = 2 × 10¹¹ Pa.'
        },
        {
            question: 'For a wire of diameter d, the area is:',
            options: ['π(d/2)²', 'πd²', '2πd', 'd²'],
            correct: 0,
            explanation: 'The cross-section is a circle of radius d/2, so A = π(d/2)².'
        },
        {
            question: 'Glass is hard but not:',
            options: ['Tough', 'Brittle', 'Transparent', 'Solid'],
            correct: 0,
            explanation: 'Glass resists scratching but shatters on impact.'
        },
        {
            question: 'The gradient of a force–extension graph equals:',
            options: ['Young’s modulus', 'Stress', 'k', 'Strain'],
            correct: 2,
            explanation: 'Gradient = F ÷ e = k.'
        },
        {
            question: 'Steel bars are put in concrete because steel is strong in:',
            options: ['Colour', 'Heat only', 'Sound', 'Tension'],
            correct: 3,
            explanation: 'Concrete is weak in tension; steel resists pulling.'
        },
        {
            question: 'Young’s modulus is a property of the:',
            options: ['Shape only', 'Length only', 'Material', 'Load'],
            correct: 2,
            explanation: 'It does not depend on sample dimensions.'
        }
    ]
},
{
    name: '1.3 Assignment: Materials Testing Report — Which Is Best for the Job?',
    type: 'lesson',
    duration: '80 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">📂 Materials Testing Report — Which Is Best for the Job?</h2>
    <p style="font-size:16px;">You will test the stretching of three locally available materials (e.g. rubber band, nylon thread, cotton string or thin copper wire), analyse your data using Hooke’s law and stress/strain, and recommend the best material for a given job.</p>
    <p style="margin:6px 0 0 0;color:#ffedd5;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🎬 The Task in Context</h3>
    <p>A small business making school-bag straps and washing lines wants to know which locally available material stretches least and carries the greatest load safely. Your group will run fair tests and write a professional report.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose three materials of similar length (about 50 cm). Measure each original length and estimate its cross-sectional area (measure diameter).</li>
    <li>Fix each sample to a support and add equal loads step by step, recording the extension each time (stop before it is likely to snap; use a sand tray below).</li>
    <li>Plot force–extension graphs for all three materials on the same axes.</li>
    <li>Identify which samples obey Hooke’s law and where the elastic limit appears.</li>
    <li>Calculate stress and strain at one chosen load and estimate Young’s modulus where the graph is straight.</li>
    <li>Recommend the best material for (a) a washing line and (b) a bag strap, with reasons.</li>
    <li>Write a 2–3 page report: aim, method, results tables, graphs, calculations, discussion, recommendations and safety.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Results tables and force–extension graphs</li>
    <li>Stress, strain and Young’s modulus calculations</li>
    <li>Written report (2–3 pages)</li>
    <li>Short oral presentation of recommendations</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Determining stress, strain and Young’s modulus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate and systematic calculations for all materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some steps omitted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations only with cues</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describing applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, extensive recommendations linked to data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recommendations only with prompts</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Practical skills and data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Careful fair tests, complete tables, well-drawn graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fair tests and complete data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some data missing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little reliable data</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integrity and safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Genuine results honestly reported; all safety rules followed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Genuine results; safety followed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minor lapses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unsafe or invented data</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Change only the material; keep length and loading steps the same.<br>Wear goggles — samples may snap.<br>Report what you actually observed, even if unexpected.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which material surprised us and why?</li>
    <li>How could our tests be made more accurate?</li>
    <li>How do real factories test materials?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'To make the tests fair, the groups should keep the same:',
            options: ['Material', 'Results', 'Conclusion', 'Original length and loading steps'],
            correct: 3,
            explanation: 'Only the material should change.'
        },
        {
            question: 'Why place a sand tray below the samples?',
            options: ['To measure extension', 'To add weight', 'For decoration', 'To catch falling masses safely'],
            correct: 3,
            explanation: 'It prevents damage and injury.'
        },
        {
            question: 'A straight-line force–extension graph shows the material:',
            options: ['Is brittle', 'Is broken', 'Obeys Hooke’s law', 'Has no extension'],
            correct: 2,
            explanation: 'Proportionality gives a straight line.'
        },
        {
            question: 'Reporting results you actually observed shows:',
            options: ['Integrity', 'Laziness', 'Bias', 'Carelessness'],
            correct: 0,
            explanation: 'Honest reporting is integrity.'
        },
        {
            question: 'Young’s modulus can be estimated from:',
            options: ['The breaking point only', 'The straight part of a stress–strain graph', 'The colour of the sample', 'The mass of the sample'],
            correct: 1,
            explanation: 'E is the gradient in the elastic region.'
        }
    ]
},
{
    name: '1.3 Revision: Mechanical Properties of Materials',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🔁 Revision — Mechanical Properties of Materials</h2>
    <p style="font-size:16px;">Review properties, Hooke’s law and stress–strain before moving on to 1.4 Temperature and Thermal Expansion.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🧱 Properties</p>
    <div>Strength, stiffness, hardness, toughness, elasticity, plasticity, ductility (wires), malleability (sheets), brittleness.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🌀 Hooke’s law</p>
    <div>F = ke within the elastic limit. k (N/m) = gradient of the F–e graph.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">📈 Beyond the limit</p>
    <div>Limit of proportionality / elastic limit → plastic deformation → breaking point.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">📐 Stress and strain</p>
    <div>σ = F ÷ A (Pa); ε = ΔL ÷ L₀ (no unit); breaking stress = breaking force ÷ area.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fb923c;">
    <p style="margin:0 0 4px 0;color:#fdba74;font-weight:bold;">🏗️ Young’s modulus</p>
    <div>E = σ ÷ ε (Pa). Material property: steel ≈ 2 × 10¹¹ Pa, rubber ≈ 10⁶–10⁷ Pa.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Quantity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Formula</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unit</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Extension</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">e = new length − original length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spring constant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">k = F ÷ e</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">N/m</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tensile stress</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">σ = F ÷ A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pa</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tensile strain</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ε = ΔL ÷ L₀</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Young’s modulus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">E = σ ÷ ε</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pa</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Give one use each of a ductile, a malleable and an elastic material.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">Copper wire; iron roofing sheets; rubber catapult band.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A 0.2 m spring extends to 0.25 m under 10 N. Find k.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">e = 0.05 m; k = 10 ÷ 0.05 = 200 N/m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A wire of radius 0.5 mm carries 157 N. Find the stress (π = 3.14).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">A = 3.14 × (5 × 10⁻⁴)² = 7.85 × 10⁻⁷ m²; σ = 157 ÷ 7.85 × 10⁻⁷ = 2 × 10⁸ Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find E if a 2 m wire extends by 1 mm under stress 1 × 10⁸ Pa.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">ε = 0.001 ÷ 2 = 5 × 10⁻⁴; E = 2 × 10¹¹ Pa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does a string snap before a spring under the same pull?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fed7aa;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#ffedd5;">The string has low elasticity and reaches breaking point quickly; the coiled steel spring extends a lot elastically.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #f97316;margin-bottom:20px;">
    <h3 style="color:#fdba74;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can explain and demonstrate mechanical properties.</p>
    <p style="margin:6px 0;">☐ I can apply Hooke’s law.</p>
    <p style="margin:6px 0;">☐ I can calculate stress, strain and Young’s modulus.</p>
    <p style="margin:6px 0;">☐ I can describe applications.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which property describes resistance to scratching?',
            options: ['Toughness', 'Ductility', 'Hardness', 'Elasticity'],
            correct: 2,
            explanation: 'Hardness resists scratching and denting.'
        },
        {
            question: 'A spring constant of 300 N/m means:',
            options: ['1 N stretches it by 300 m', 'It breaks at 300 N', '300 N stretches it by 1 m', 'It weighs 300 N'],
            correct: 2,
            explanation: 'k is force per metre of extension.'
        },
        {
            question: 'Strain is calculated as:',
            options: ['Force ÷ area', 'Extension ÷ original length', 'Stress × strain', 'Length × force'],
            correct: 1,
            explanation: 'Strain is the extension divided by the original length, ε = ΔL ÷ L₀.'
        },
        {
            question: 'A material that stays deformed is showing:',
            options: ['Plasticity', 'Elasticity', 'Brittleness', 'Hardness'],
            correct: 0,
            explanation: 'Plastic deformation is permanent.'
        },
        {
            question: 'Rubber has a Young’s modulus that is:',
            options: ['Higher than steel', 'Equal to steel', 'Zero', 'Much lower than steel'],
            correct: 3,
            explanation: 'Rubber stretches easily.'
        },
        {
            question: 'The point beyond which F and e are no longer proportional is the:',
            options: ['Limit of proportionality', 'Breaking point', 'Origin', 'Gradient'],
            correct: 0,
            explanation: 'The graph stops being straight.'
        },
        {
            question: 'Malleable metals are used to make:',
            options: ['Wires only', 'Sheets such as mabati', 'Glass', 'Rubber bands'],
            correct: 1,
            explanation: 'Malleability allows sheet forming.'
        },
        {
            question: 'Breaking stress is used by engineers to:',
            options: ['Paint bridges', 'Measure temperature', 'Count bolts', 'Set safe working loads'],
            correct: 3,
            explanation: 'Working stress is kept well below breaking stress.'
        }
    ]
},
{
    name: '1.3 Summary: Mechanical Properties of Materials',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #7c2d12, #1e1b4b); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #fb923c;">
    <p style="margin:0;color:#ffedd5;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics and Thermal Physics · Sub-strand 1.3 Mechanical Properties of Materials</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #fb923c;color:#ffedd5;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#ffedd5;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#ffedd5;margin:8px 0 10px 0;">🧾 Summary — Mechanical Properties of Materials</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Materials respond to forces in predictable ways; by measuring stretch, stress and strain we can choose the right material for every job and keep structures safe.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Mechanical properties: strength, stiffness, hardness, toughness, elasticity, plasticity, ductility, malleability, brittleness.</li>
    <li>Materials are chosen for uses according to these properties.</li>
    <li>Hooke’s law: F = ke within the elastic limit; k is the gradient of the F–e graph.</li>
    <li>Beyond the elastic limit, materials deform permanently and eventually break.</li>
    <li>Tensile stress = F ÷ A; tensile strain = ΔL ÷ L₀.</li>
    <li>Young’s modulus E = stress ÷ strain measures the stiffness of a material.</li>
    <li>A string snaps more easily than a spring because it has little elastic range, while a coiled steel spring stretches a lot elastically.</li>
    <li>Engineers keep working stress well below breaking stress for safety.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3.1 Properties</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nine mechanical properties; testing local materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learn each with a material and a use</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3.2 Hooke’s law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F = ke; spring constant; elastic limit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use extension, not length</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3.3 Stress and strain</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stress, strain, breaking stress, Young’s modulus; applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use radius in πr²</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#fdba74;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">strength</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">elasticity</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">plasticity</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ductility</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">malleability</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">brittleness</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hardness</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stiffness</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">toughness</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hooke’s law</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">spring constant</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">elastic limit</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stress</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">strain</span><span style="background:#0b1a2e;border:1px solid #fed7aa;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Young’s modulus</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Every safe bridge, lift, cable and tool you use was designed using the ideas in this sub-strand.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffedd5;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.4 Temperature and Thermal Expansion explores how heat makes materials expand — and why the lid of a sufuria is made wider.</div>
    </div>
    <div style="background:#3b1d0b;padding:20px;border-radius:12px;border:1px solid #fb923c;margin-bottom:20px;">
    <h3 style="color:#ffedd5;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ explain and demonstrate mechanical properties of materials</p>
    <p style="margin:6px 0;">✔️ determine tensile stress, strain and Young’s modulus</p>
    <p style="margin:6px 0;">✔️ describe applications of mechanical properties</p>
    <p style="margin:6px 0;">✔️ explain why a string snaps more easily than a spring</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.3 is that:',
            options: ['All materials behave the same', 'Only metals have properties', 'Stress has no use', 'Materials respond predictably to forces, guiding safe material choices'],
            correct: 3,
            explanation: 'Measuring properties lets engineers choose materials.'
        },
        {
            question: 'Which lesson introduced Young’s modulus?',
            options: ['1.3.1', '1.3.3', '1.3.2', '1.2.3'],
            correct: 1,
            explanation: 'Stress, strain and Young’s modulus were in 1.3.3.'
        },
        {
            question: 'Which term means “drawn into wires”?',
            options: ['Malleable', 'Brittle', 'Ductile', 'Tough'],
            correct: 2,
            explanation: 'Ductility is about wires.'
        },
        {
            question: 'What comes next?',
            options: ['1.5 Moments', '1.4 Temperature and Thermal Expansion', '2.1 Waves', '1.2 Pressure'],
            correct: 1,
            explanation: 'Thermal expansion follows in Strand 1.0.'
        },
        {
            question: 'Hooke’s law applies:',
            options: ['Within the elastic limit', 'Beyond the breaking point', 'Only to liquids', 'Only to gases'],
            correct: 0,
            explanation: 'It holds only up to the limit of proportionality.'
        }
    ]
}
],
          stats:{lessons:23,exercises:168,quizzes:24,projects:3,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Physics is best defined as the science of:',
                  options: ['Living things', 'Chemical reactions only', 'Rocks and soils', 'Matter, energy and their interactions'],
                  correct: 3,
                  explanation: 'Physics studies matter and energy; Biology studies living things and Chemistry studies reactions.'
              },
              {
                  question: 'In a fair test, the variable you deliberately change is the:',
                  options: ['Dependent variable', 'Independent variable', 'Control variable', 'Hypothesis'],
                  correct: 1,
                  explanation: 'The independent variable is the one you choose to change.'
              },
              {
                  question: 'Which career mainly uses optics?',
                  options: ['Meteorologist', 'Civil engineer', 'Geophysicist', 'Optometrist'],
                  correct: 3,
                  explanation: 'Optometrists test eyes and prescribe lenses, which is optics.'
              },
              {
                  question: 'A force of 300 N acts on an area of 0.06 m². The pressure is:',
                  options: ['18 Pa', '5 000 Pa', '500 Pa', '50 Pa'],
                  correct: 1,
                  explanation: 'P = F ÷ A = 300 ÷ 0.06 = 5 000 Pa.'
              },
              {
                  question: 'Liquid rises in a drinking straw because:',
                  options: ['Atmospheric pressure pushes it up', 'The straw pulls it', 'Gravity pushes it up', 'The liquid is light'],
                  correct: 0,
                  explanation: 'Sucking lowers the pressure in the straw, so atmospheric pressure on the liquid surface pushes it up.'
              },
              {
                  question: 'The pressure due to water at a depth of 6 m (ρ = 1 000 kg/m³, g = 10 N/kg) is:',
                  options: ['60 000 Pa', '600 Pa', '6 000 Pa', '600 000 Pa'],
                  correct: 0,
                  explanation: 'P = ρgh = 1 000 × 10 × 6 = 60 000 Pa.'
              },
              {
                  question: 'Pressure at the bottom of a liquid does NOT depend on:',
                  options: ['The shape of the container', 'The depth', 'The density', 'The value of g'],
                  correct: 0,
                  explanation: 'In the derivation of P = ρgh the area cancels, so shape does not matter.'
              },
              {
                  question: 'In a hydraulic jack, A₁ = 0.002 m², A₂ = 0.1 m² and the load is 12 000 N. The effort needed is:',
                  options: ['24 N', '2 400 N', '240 N', '600 000 N'],
                  correct: 2,
                  explanation: 'F₁ = F₂ × A₁ ÷ A₂ = 12 000 × 0.002 ÷ 0.1 = 240 N.'
              },
              {
                  question: 'Oil is used in hydraulic brakes because it is:',
                  options: ['Compressible', 'A gas', 'Almost incompressible', 'Very light'],
                  correct: 2,
                  explanation: 'An incompressible liquid transmits pressure fully; air would compress.'
              },
              {
                  question: 'Iron roofing sheets (mabati) are made using the property of:',
                  options: ['Ductility', 'Brittleness', 'Malleability', 'Elasticity'],
                  correct: 2,
                  explanation: 'Malleable metals can be rolled or hammered into sheets.'
              },
              {
                  question: 'A force of 6 N extends a spring by 3 cm. The spring constant is:',
                  options: ['2 N/m', '18 N/m', '0.5 N/m', '200 N/m'],
                  correct: 3,
                  explanation: 'k = F ÷ e = 6 ÷ 0.03 = 200 N/m.'
              },
              {
                  question: 'Hooke’s law applies only:',
                  options: ['Beyond the breaking point', 'To liquids', 'To gases', 'Within the elastic limit'],
                  correct: 3,
                  explanation: 'Extension is proportional to force only up to the limit of proportionality.'
              },
              {
                  question: 'A 2 m wire extends by 2 mm. Its strain is:',
                  options: ['1', '0.1', '0.001', '1 000'],
                  correct: 2,
                  explanation: 'Strain = ΔL ÷ L₀ = 0.002 ÷ 2 = 0.001.'
              },
              {
                  question: 'Young’s modulus equals:',
                  options: ['Strain ÷ stress', 'Stress ÷ strain', 'Force × extension', 'Stress × strain'],
                  correct: 1,
                  explanation: 'E = stress ÷ strain, a measure of a material’s stiffness.'
              },
              {
                  question: 'Why does a string snap more easily than a spring?',
                  options: ['The string is heavier', 'The string has little elastic range and reaches breaking point quickly', 'The spring is longer', 'The string obeys Hooke’s law better'],
                  correct: 1,
                  explanation: 'A coiled steel spring can stretch a lot elastically; a string cannot.'
              }
          ]}
);