// Eschool course: Grade 11 Physics (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'physics-grade-11', name:'Grade 11 Physics', code:'PHY 111', level:'grade-11', iconStyle:'fas', icon:'fa-atom', color:'#e65100',
          category:'Sciences',
          description:'Describe and explain motion — distance, displacement, speed, velocity and acceleration, motion graphs, the equations of motion and free fall, then Newton’s laws, momentum, impulse and road safety — with ticker-timer experiments, worked calculations and Kenyan examples.',
          longDescription:'This Grade 11 Physics course opens with Mechanics. Each strand starts with an overview, its learning outcomes and an introduction, and every sub-strand has three lessons, a laboratory activity, a quiz, an assignment, a revision page and a summary. Lessons include a teacher explanation, scientific background, vocabulary cards, diagrams and graphs, formula cards, worked examples, laboratory safety notes, a practical investigation with observation tables, data analysis, real-life, environmental and industrial applications, guided practice, activities, CBC competencies, values and PCIs, common mistakes, exam tips, homework, reflection and a 10-question quiz. Batch 1 covers Linear Motion and Newton’s Laws of Motion.',
          modules:[
{
    name: '1.0 Mechanics — Strand Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🗺️ Strand 1.0: Mechanics</h2>
    <p style="font-size:16px;">Welcome to Grade 11 Physics. In Grade 10 you studied pressure, properties of materials, thermal expansion, moments, and energy, work and machines. Now you will study <strong>motion</strong> — how things move and why.</p>
    <p style="font-size:16px;">A matatu speeding up from a stage, a boda boda braking at a junction, an athlete sprinting at Kasarani, a mango falling from a tree and a rocket leaving the ground all follow the same physical laws. In this strand you will describe motion with numbers and graphs, and explain it using forces and Newton’s laws.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#fff3e0;">❓ Big question for this strand:</strong> How can the motion of bodies be described, predicted and controlled?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>This strand moves from <em>describing</em> motion (kinematics) to <em>explaining</em> it (dynamics).</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Big question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">You will be able to…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Linear Motion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How can the motion of a body in a straight line be described?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use displacement, velocity and acceleration, draw and interpret motion graphs, apply the equations of motion and analyse free fall.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Newton’s Laws of Motion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How do forces change motion?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Apply Newton’s three laws, F = ma, momentum, impulse and conservation of momentum to everyday situations including road safety.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Strand Map</h3>
    <p>This first batch covers 1.1 and 1.2. Each sub-strand has three lessons, a laboratory activity, a quiz, an assignment, a revision page and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0;color:#ffe0b2;font-weight:bold;">1.1 Linear Motion <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Describing Motion</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Distance, displacement, speed, velocity and acceleration</li>
    <li>1.1.2 Motion graphs and the ticker-timer</li>
    <li>1.1.3 Equations of uniformly accelerated motion and free fall</li>
    <li>🔬 Laboratory activity: measuring acceleration with a ticker-timer</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0;color:#ffe0b2;font-weight:bold;">1.2 Newton’s Laws of Motion <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Forces and Motion</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Newton’s first law and inertia</li>
    <li>1.2.2 Newton’s second law, F = ma, momentum and impulse</li>
    <li>1.2.3 Newton’s third law and conservation of momentum</li>
    <li>🔬 Laboratory activity: investigating force, mass and acceleration</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving motion problems with equations and graphs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group experiments and reports.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using spreadsheets and phone sensor apps to analyse motion.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Citizenship</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Road safety and responsible driving.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the correct equation independently.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 PCIs</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health (sports)</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Disaster risk reduction</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Strand</p>
    <div>Work through the modules in order. Learn each formula card, draw neat labelled graphs, and always write the formula, substitute with units and give the answer with units.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which sub-strand covers motion graphs?',
            options: ['1.1 Linear Motion', '1.2 Newton’s Laws of Motion', '2.1', '3.1'],
            correct: 0,
            explanation: 'The answer is “1.1 Linear Motion”. Graphs describe motion.'
        },
        {
            question: 'Which sub-strand covers momentum?',
            options: ['1.1 Linear Motion', '2.2', '1.2 Newton’s Laws of Motion', '3.2'],
            correct: 2,
            explanation: 'The answer is “1.2 Newton’s Laws of Motion”. Momentum is linked to force.'
        },
        {
            question: 'Describing motion without asking why is called:',
            options: ['Dynamics', 'Optics', 'Electrostatics', 'Kinematics'],
            correct: 3,
            explanation: 'The answer is “Kinematics”. Dynamics explains motion using forces.'
        },
        {
            question: 'Which PCI links to braking distance?',
            options: ['Financial literacy', 'Child rights', 'Gender', 'Road safety'],
            correct: 3,
            explanation: 'Speed and stopping are road safety issues.'
        },
        {
            question: 'When solving problems you should:',
            options: ['Write only the answer', 'Skip units', 'Write the formula, substitute with units and state units', 'Guess'],
            correct: 2,
            explanation: 'The answer is “Write the formula, substitute with units and state units”. Clear working earns marks.'
        }
    ]
},
{
    name: '1.0 Mechanics — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🎯 Learning Outcomes for Strand 1.0</h2>
    <p style="font-size:16px;">These are the outcomes you should achieve in this strand. Come back after each sub-strand and tick what you can now do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌟 General Learning Outcomes for the Strand</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Describe and analyse the motion of bodies using appropriate quantities, graphs and equations.</li>
    <li>Explain the effects of forces on motion using Newton’s laws.</li>
    <li>Carry out experiments safely and analyse data to draw conclusions.</li>
    <li>Apply mechanics to safety, sports, transport and technology.</li>
    <li>Appreciate the role of physics in solving everyday problems.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0;color:#ffe0b2;font-weight:bold;">1.1 Linear Motion</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish between distance and displacement, speed and velocity.</li>
    <li>Determine velocity and acceleration from experiments and graphs.</li>
    <li>Interpret displacement–time and velocity–time graphs.</li>
    <li>Apply the equations of uniformly accelerated motion.</li>
    <li>Analyse the motion of freely falling bodies.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How can the motion of a body in a straight line be described?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0;color:#ffe0b2;font-weight:bold;">1.2 Newton’s Laws of Motion</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State and explain Newton’s three laws of motion.</li>
    <li>Investigate the relationship between force, mass and acceleration.</li>
    <li>Calculate momentum and impulse.</li>
    <li>Apply the law of conservation of momentum to collisions and explosions.</li>
    <li>Explain safety devices using Newton’s laws.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do forces change motion?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your teacher (and this course) will use the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Strand 1.0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves multi-step motion and momentum problems accurately, interprets graphs in depth and explains real situations clearly using Newton’s laws.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves motion and momentum problems correctly and interprets graphs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves simple problems with minor errors in units or graph reading.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makes major errors in using equations and interpreting graphs.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Physics is assessed through written tests, practical work, laboratory reports, projects, observation and portfolios. Always include units and show your working.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Applying the equations of motion is an outcome of:',
            options: ['1.2', '1.1', '2.1', '3.1'],
            correct: 1,
            explanation: 'The answer is “1.1”. It belongs to Linear Motion.'
        },
        {
            question: 'Applying conservation of momentum is an outcome of:',
            options: ['1.1', '2.2', '1.2', '3.2'],
            correct: 2,
            explanation: 'The answer is “1.2”. It belongs to Newton’s Laws.'
        },
        {
            question: 'Minor errors in units are at which level?',
            options: ['Exceeds Expectations', 'Meets Expectations', 'Approaches Expectations', 'Below Expectations'],
            correct: 2,
            explanation: 'The answer is “Approaches Expectations”. Minor errors show AE.'
        },
        {
            question: 'A laboratory report is an example of:',
            options: ['Oral reading', 'Map work', 'Sports', 'Practical assessment'],
            correct: 3,
            explanation: 'The answer is “Practical assessment”. It records experiments.'
        },
        {
            question: 'Which is a general outcome of this strand?',
            options: ['Compose poems', 'Draw maps', 'Balance chemical equations', 'Explain the effects of forces on motion'],
            correct: 3,
            explanation: 'The answer is “Explain the effects of forces on motion”. Forces and motion are central.'
        }
    ]
},
{
    name: '1.0 Mechanics — Introduction',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🚪 Introduction: Everything Moves</h2>
    <p style="font-size:16px;">Kenyan athletes are famous for their speed over long distances. A marathon runner covers 42.2 km in just over two hours — an average speed of about 5.7 metres every second. How can we measure speed accurately, and how do coaches use motion data to improve performance?</p>
    <p style="font-size:16px;">On the roads, a matatu travelling at 80 km/h needs many metres to stop. Understanding motion and forces explains why speed limits, seat belts and safe following distances save lives.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏃 Motion Around You</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Runners accelerating at the start of a race.</li>
    <li>Vehicles speeding up and braking.</li>
    <li>Fruits falling from trees.</li>
    <li>Footballs kicked and caught.</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📏 Quantities You Will Use</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Quantity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unit</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Displacement (s)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">metre (m)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Velocity (v, u)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">metre per second (m/s)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration (a)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m/s²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force (F)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">newton (N)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Momentum (p)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kg m/s</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔬 Apparatus You Will Use</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Apparatus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ticker-timer and tape</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measuring velocity and acceleration</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trolley and runway</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Motion experiments</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stopwatch and metre rule</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Timing and measuring</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spring balance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measuring force</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">⚠️ Safety First</h3>
    <p>Place a stop or catch-box at the end of runways so trolleys do not fall. Keep feet away from falling masses. Use low-voltage supplies for ticker-timers and never touch exposed wires.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Keep separate pages for (1) definitions and units, (2) formula cards, (3) graphs, and (4) worked examples and practice.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The SI unit of acceleration is:',
            options: ['m/s', 'N', 'm/s²', 'kg'],
            correct: 2,
            explanation: 'The answer is “m/s²”. Change in velocity per second.'
        },
        {
            question: 'A ticker-timer is used to measure:',
            options: ['Mass', 'Temperature', 'Voltage only', 'Velocity and acceleration'],
            correct: 3,
            explanation: 'The answer is “Velocity and acceleration”. Dots mark equal time intervals.'
        },
        {
            question: 'The unit of momentum is:',
            options: ['N', 'J', 'W', 'kg m/s'],
            correct: 3,
            explanation: 'The answer is “kg m/s”. Mass × velocity.'
        },
        {
            question: 'To stop trolleys falling off a runway use:',
            options: ['A heavier trolley', 'More speed', 'A stop or catch-box', 'No barrier'],
            correct: 2,
            explanation: 'The answer is “A stop or catch-box”. Safety first.'
        },
        {
            question: 'A marathon runner covering 42 200 m in 7 400 s has an average speed of about:',
            options: ['57 m/s', '5.7 m/s', '0.57 m/s', '42 m/s'],
            correct: 1,
            explanation: 'The answer is “5.7 m/s”. 42 200 ÷ 7 400.'
        }
    ]
},
{
    name: '1.1.1 Linear Motion: Distance, Displacement, Speed, Velocity and Acceleration',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Distance, Displacement, Speed, Velocity and Acceleration</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the difference between scalar and vector quantities, distance and displacement, speed and velocity, and the meaning of acceleration and deceleration, with calculations and unit conversions.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Drivers, pilots, athletes and engineers all describe motion with these quantities. Speed cameras, GPS navigation and sports timing depend on them.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Speedometers</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Athletics timing</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📍 GPS apps</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✈️ Aviation</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚆 SGR train schedules</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏍️ Boda boda safety</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#fff3e0;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish between distance and displacement, speed and velocity.</li>
    <li>Determine velocity and acceleration from experiments and graphs.</li>
    <li>Interpret displacement–time and velocity–time graphs.</li>
    <li>Apply the equations of uniformly accelerated motion.</li>
    <li>Analyse the motion of freely falling bodies.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fff3e0;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish scalars and vectors.</li>
    <li>Distinguish distance and displacement.</li>
    <li>Calculate speed and velocity.</li>
    <li>Calculate acceleration.</li>
    <li>Convert km/h to m/s.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">❓ Key inquiry question:</strong> How can the motion of a body in a straight line be described?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">🧰 What you already know:</strong> Grade 10 Physics: physical quantities, SI units and measurement.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>scalar</strong> has size (magnitude) only, such as distance, speed, mass and time. A <strong>vector</strong> has size and direction, such as displacement, velocity, acceleration and force. <strong>Distance</strong> is the total length of the path travelled; <strong>displacement</strong> is the straight-line distance in a stated direction from the start to the finish.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 660 230" width="660" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><circle cx="80" cy="170" r="8" fill="#fde68a"/><text x="80" y="200" fill="#fff3e0" font-size="12" text-anchor="middle">Home (A)</text><circle cx="380" cy="170" r="8" fill="#fde68a"/><text x="380" y="200" fill="#fff3e0" font-size="12" text-anchor="middle">Shop (B)</text><circle cx="380" cy="50" r="8" fill="#fde68a"/><text x="380" y="36" fill="#fff3e0" font-size="12" text-anchor="middle">School (C)</text><line x1="88" y1="170" x2="363.0" y2="170.0" stroke="#fb923c" stroke-width="2.5"/><polygon points="372,170 363.0,165.0 363.0,175.0" fill="#fb923c"/><text x="230" y="162" fill="#fdba74" font-size="12" text-anchor="middle">400 m east</text><line x1="380" y1="162" x2="380.0" y2="67.0" stroke="#fb923c" stroke-width="2.5"/><polygon points="380,58 375.0,67.0 385.0,67.0" fill="#fb923c"/><text x="390" y="115" fill="#fdba74" font-size="12">300 m north</text><line x1="86" y1="165" x2="365.6" y2="57.2" stroke="#22d3ee" stroke-width="2.5"/><polygon points="374,54 363.8,52.6 367.4,61.9" fill="#22d3ee"/><text x="200" y="95" fill="#67e8f9" font-size="12" text-anchor="middle">displacement 500 m</text><text x="470" y="140" fill="#fff3e0" font-size="13">Distance = 700 m</text><text x="470" y="162" fill="#67e8f9" font-size="13">Displacement = 500 m</text><text x="470" y="184" fill="#67e8f9" font-size="12">(north-east)</text>
    </svg>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Speed tells you how fast. Velocity tells you how fast and which way. Acceleration tells you how quickly the velocity changes.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 Scientific Background</h3>
    <p>Average speed = total distance ÷ total time, while <strong>velocity</strong> = displacement ÷ time. A body moving in a circle at constant speed has a changing velocity because its direction keeps changing. <strong>Acceleration</strong> is the rate of change of velocity. If velocity decreases, the acceleration is negative and is called <strong>deceleration</strong> or retardation. To convert km/h to m/s, multiply by 1 000 and divide by 3 600 (or divide by 3.6).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Scalar</strong>
    </p>
    <p style="margin:6px 0;">Quantity with magnitude only.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Speed, mass</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Vector</strong>
    </p>
    <p style="margin:6px 0;">Quantity with magnitude and direction.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Velocity, force</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Displacement</strong>
    </p>
    <p style="margin:6px 0;">Distance in a stated direction from start to finish.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> s (m)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>500 m north-east</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Velocity</strong>
    </p>
    <p style="margin:6px 0;">Rate of change of displacement.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> v (m/s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>20 m/s east</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Acceleration</strong>
    </p>
    <p style="margin:6px 0;">Rate of change of velocity.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> a (m/s²)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>2 m/s²</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Deceleration</strong>
    </p>
    <p style="margin:6px 0;">Negative acceleration (slowing down).</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−4 m/s²</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">1. Speed and Velocity</h3>
    <div style="background:#0b1a2e;border:1px solid #fb8c00;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#ffe0b2;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Speed and velocity</p>
    <div style="color:#fff3e0;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Average speed = total distance ÷ total time;  velocity = displacement ÷ time</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> How fast a body moves (and in which direction for velocity).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m/s (or km/h)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Describing motion.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> km/h ÷ 3.6 = m/s.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 1: Distance and displacement</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A learner walks 400 m east to a shop and then 300 m north to school in 10 minutes. Find the average speed and the average velocity.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Distance is the path; displacement is the straight line (Pythagoras).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Distance</strong>
    </p>
    <div style="margin:6px 0 0 34px;">400 + 300 = 700 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Displacement</strong>
    </p>
    <div style="margin:6px 0 0 34px;">√(400² + 300²) = 500 m north-east</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10 min = 600 s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#fff3e0;">Step 4: Average speed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">700 ÷ 600 ≈ 1.17 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#fff3e0;">Step 5: Average velocity</strong>
    </p>
    <div style="margin:6px 0 0 34px;">500 ÷ 600 ≈ 0.83 m/s north-east</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> Speed ≈ 1.17 m/s; velocity ≈ 0.83 m/s north-east</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 2: Unit conversion</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 90 km/h to m/s and 15 m/s to km/h.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Use 1 000 m per km and 3 600 s per hour.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: 90 km/h</strong>
    </p>
    <div style="margin:6px 0 0 34px;">90 × 1 000 ÷ 3 600 = 25 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: 15 m/s</strong>
    </p>
    <div style="margin:6px 0 0 34px;">15 × 3.6 = 54 km/h</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 25 m/s; 54 km/h</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">2. Acceleration</h3>
    <div style="background:#0b1a2e;border:1px solid #fb8c00;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#ffe0b2;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Acceleration</p>
    <div style="color:#fff3e0;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">a = (v − u) ÷ t</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Change in velocity per unit time; u = initial, v = final velocity.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m/s²</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Velocity changes.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Subtracting in the wrong order (u − v).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Final minus initial.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 3: Accelerating matatu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A matatu starts from rest and reaches 20 m/s in 8 s. Find its acceleration.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> u = 0.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(20 − 0) ÷ 8 = 2.5 m/s²</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 2.5 m/s²</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 4: Braking</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car moving at 72 km/h brakes uniformly and stops in 5 s. Find its acceleration.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Convert to m/s first.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: u</strong>
    </p>
    <div style="margin:6px 0 0 34px;">72 ÷ 3.6 = 20 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(0 − 20) ÷ 5 = −4 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: Meaning</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Deceleration of 4 m/s²</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> −4 m/s² (a deceleration of 4 m/s²)</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fff3e0;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is speed a scalar or a vector?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Scalar.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> A runner completes one 400 m lap and returns to the start. What is the displacement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Zero.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Find a when velocity rises from 5 m/s to 25 m/s in 4 s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">5 m/s².</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When timing motion outdoors, stay off roads and away from moving vehicles.</li>
    <li>Use a clear, flat area free of obstacles for running tests.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Measuring distance and time</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unit conversion</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Vector diagrams</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Measuring Average Speed of Learners</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To measure the average speed of learners walking and running over a measured distance.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Measuring tape (50 m)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatches</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Markers (cones or stones)</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recording sheet</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the school field; warm up before running.</li>
    <li>Do not run on wet or uneven ground.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Mark out a 50 m straight track.</li>
    <li>Time each learner walking and then running the 50 m.</li>
    <li>Repeat each run twice and find the mean time.</li>
    <li>Calculate average speed in m/s and km/h.</li>
    <li>Compare walking and running speeds in a table.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Learner</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Walking time (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Walking speed (m/s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Running time (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Running speed (m/s)</th>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why repeat each timing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">To reduce random errors in starting and stopping the watch.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Is the calculated speed the speed at every moment?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">No — it is an average; runners speed up at the start.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Average speed is found by dividing distance by time; running speeds are several times walking speeds.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Reaction time causes timing errors, so repeats improve reliability.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reaction time of the timer.</li>
    <li>Measuring the track inaccurately.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Athletics officials use electronic timing to remove reaction-time errors.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>A learner ran 50 m in 8.0 s. The timer’s reaction time may be ±0.2 s. Calculate the speed for 7.8 s and 8.2 s and explain how timing error affects the result.</p>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 5: Effect of timing error</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Find the speed range.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Speed = 50 ÷ time.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: 7.8 s</strong>
    </p>
    <div style="margin:6px 0 0 34px;">6.41 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: 8.2 s</strong>
    </p>
    <div style="margin:6px 0 0 34px;">6.10 m/s</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> Speed lies between about 6.1 and 6.4 m/s.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffb74d;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Physics in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Speedometers show speed; GPS apps show velocity and direction.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Smooth driving with gentle acceleration saves fuel and reduces pollution.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Traffic engineers, pilots and sports scientists measure motion daily.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Give two vector quantities.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Direction matters.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Displacement and velocity (also acceleration, force).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Convert 36 km/h to m/s.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Divide by 3.6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">10 m/s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> A body slows from 12 m/s to 4 m/s in 2 s. Find a.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Final minus initial.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">−4 m/s².</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a table of five scalars and five vectors.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Measure each other’s walking speed along a corridor.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Plan a route around the school and compare its distance and displacement.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a phone GPS app to record speed on a walk (with permission).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Distinguish between speed and velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Speed is distance per unit time (scalar); velocity is displacement per unit time (vector).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A bus travels 90 km in 1 h 30 min. Find its average speed in km/h and m/s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">60 km/h ≈ 16.7 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A cyclist accelerates from 4 m/s to 10 m/s in 3 s. Find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">2 m/s².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why mark the track with cones?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">To show the exact start and finish.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Can a body have constant speed but changing velocity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Yes — in circular motion the direction keeps changing.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Scalars have magnitude only; vectors also have direction. Distance is the path length; displacement is the straight-line distance in a direction. Speed = distance ÷ time; velocity = displacement ÷ time. Acceleration a = (v − u) ÷ t in m/s²; negative acceleration is deceleration. Convert km/h to m/s by dividing by 3.6.</p>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Scalars and vectors.</li>
    <li>Distance vs displacement.</li>
    <li>Speed vs velocity.</li>
    <li>Acceleration.</li>
    <li>Conversions.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>÷ 3.6 for m/s.</li>
    <li>Final minus initial.</li>
    <li>Displacement can be zero.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using distance instead of displacement for velocity.</li>
    <li>Forgetting to convert km/h.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw a sketch with arrows.</li>
    <li>Write units at every step.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #fb8c00;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State direction for vectors.</li>
    <li>Show formula and substitution.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing quantities.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Timing activities.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">GPS apps.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every speed limit sign is about rates of motion.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A car travels 30 km north then 40 km east in 1 h. Find distance, displacement, speed and velocity.</li>
    <li>Convert 120 km/h to m/s.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain displacement to a friend?</li>
    <li>Where do I see acceleration daily?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Scalar</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnitude only.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vector</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnitude and direction.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Displacement</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight-line change in position.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Acceleration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rate of change of velocity.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can distinguish scalars and vectors.</p>
    <p style="margin:6px 0;">☐ I can calculate speed and velocity.</p>
    <p style="margin:6px 0;">☐ I can calculate acceleration.</p>
    <p style="margin:6px 0;">☐ I can convert units.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a scalar quantity?',
            options: ['Velocity', 'Displacement', 'Speed', 'Force'],
            correct: 2,
            explanation: 'The answer is “Speed”. Speed has no direction.'
        },
        {
            question: 'Displacement is:',
            options: ['Total path length', 'Speed per second', 'Time taken', 'Distance in a stated direction'],
            correct: 3,
            explanation: 'The answer is “Distance in a stated direction”. It is a vector.'
        },
        {
            question: 'A body walks 3 m east then 4 m north. Its displacement is:',
            options: ['7 m', '1 m', '12 m', '5 m'],
            correct: 3,
            explanation: 'The answer is “5 m”. √(9 + 16).'
        },
        {
            question: '54 km/h equals:',
            options: ['54 m/s', '5.4 m/s', '15 m/s', '194 m/s'],
            correct: 2,
            explanation: 'The answer is “15 m/s”. 54 ÷ 3.6.'
        },
        {
            question: '20 m/s equals:',
            options: ['20 km/h', '72 km/h', '5.6 km/h', '200 km/h'],
            correct: 1,
            explanation: 'The answer is “72 km/h”. 20 × 3.6.'
        },
        {
            question: 'Acceleration is measured in:',
            options: ['m/s²', 'm/s', 'm', 'N'],
            correct: 0,
            explanation: 'The answer is “m/s²”. Velocity change per second.'
        },
        {
            question: 'A car goes from 0 to 30 m/s in 10 s. Its acceleration is:',
            options: ['300 m/s²', '0.33 m/s²', '3 m/s²', '30 m/s²'],
            correct: 2,
            explanation: 'The answer is “3 m/s²”. 30 ÷ 10.'
        },
        {
            question: 'A negative acceleration means the body is:',
            options: ['Speeding up', 'At rest', 'Moving in a circle', 'Slowing down'],
            correct: 3,
            explanation: 'The answer is “Slowing down”. Deceleration.'
        },
        {
            question: 'After one complete lap of a circular track, the displacement is:',
            options: ['Zero', '400 m', 'Equal to the distance', 'Infinite'],
            correct: 0,
            explanation: 'The answer is “Zero”. Start and finish are the same.'
        },
        {
            question: 'A body moving in a circle at constant speed has:',
            options: ['Changing velocity', 'Constant velocity', 'Zero speed', 'No acceleration'],
            correct: 0,
            explanation: 'The answer is “Changing velocity”. Direction changes.'
        }
    ]
},
{
    name: '1.1.2 Linear Motion: Motion Graphs and the Ticker-Timer',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Motion Graphs and the Ticker-Timer</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how to draw and interpret displacement–time and velocity–time graphs, find velocity from the gradient of a displacement–time graph, find acceleration from the gradient and displacement from the area of a velocity–time graph, and use ticker-tape to measure velocity and acceleration.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Graphs show at a glance how a vehicle, athlete or object moves. Engineers use them to design safe roads, and accident investigators use them to reconstruct crashes.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📈 Sports analysis</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚦 Traffic studies</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Rocket launches</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚆 Train timetables</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Laboratory experiments</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏎️ Motor racing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#fff3e0;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish between distance and displacement, speed and velocity.</li>
    <li>Determine velocity and acceleration from experiments and graphs.</li>
    <li>Interpret displacement–time and velocity–time graphs.</li>
    <li>Apply the equations of uniformly accelerated motion.</li>
    <li>Analyse the motion of freely falling bodies.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fff3e0;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw and interpret s–t graphs.</li>
    <li>Draw and interpret v–t graphs.</li>
    <li>Find acceleration from gradients.</li>
    <li>Find displacement from areas.</li>
    <li>Analyse ticker-tapes.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">❓ Key inquiry question:</strong> How can the motion of a body in a straight line be described?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">🧰 What you already know:</strong> Lesson 1.1.1 and gradients from Mathematics.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>On a <strong>displacement–time graph</strong>, the <strong>gradient</strong> equals velocity: a straight line means uniform velocity, a horizontal line means the body is at rest, and a curve means the velocity is changing. On a <strong>velocity–time graph</strong>, the <strong>gradient</strong> equals acceleration and the <strong>area under the graph</strong> equals displacement.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 210" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="20" y1="170" x2="180" y2="170" stroke="#94a3b8" stroke-width="2"/><line x1="20" y1="170" x2="20" y2="40" stroke="#94a3b8" stroke-width="2"/><text x="180" y="162" fill="#fff3e0" font-size="11" text-anchor="end">t</text><text x="16" y="34" fill="#fff3e0" font-size="11">v</text><path d="M40 90 L180 90" fill="none" stroke="#fb923c" stroke-width="3"/><text x="100" y="22" fill="#fde68a" font-size="12" text-anchor="middle">Uniform velocity</text><text x="100" y="196" fill="#ffe0b2" font-size="11" text-anchor="middle">gradient = 0 (a = 0)</text><line x1="230" y1="170" x2="390" y2="170" stroke="#94a3b8" stroke-width="2"/><line x1="230" y1="170" x2="230" y2="40" stroke="#94a3b8" stroke-width="2"/><text x="390" y="162" fill="#fff3e0" font-size="11" text-anchor="end">t</text><text x="226" y="34" fill="#fff3e0" font-size="11">v</text><path d="M250 160 L390 60" fill="none" stroke="#fb923c" stroke-width="3"/><text x="310" y="22" fill="#fde68a" font-size="12" text-anchor="middle">Uniform acceleration</text><text x="310" y="196" fill="#ffe0b2" font-size="11" text-anchor="middle">straight line, constant a</text><line x1="440" y1="170" x2="600" y2="170" stroke="#94a3b8" stroke-width="2"/><line x1="440" y1="170" x2="440" y2="40" stroke="#94a3b8" stroke-width="2"/><text x="600" y="162" fill="#fff3e0" font-size="11" text-anchor="end">t</text><text x="436" y="34" fill="#fff3e0" font-size="11">v</text><path d="M460 60 L600 160" fill="none" stroke="#fb923c" stroke-width="3"/><text x="520" y="22" fill="#fde68a" font-size="12" text-anchor="middle">Uniform deceleration</text><text x="520" y="196" fill="#ffe0b2" font-size="11" text-anchor="middle">negative gradient</text>
    </svg>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 170" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="40" width="600" height="40" fill="#f5f5f4" rx="3"/><circle cx="30" cy="60" r="3" fill="#1c1917"/><circle cx="50" cy="60" r="3" fill="#1c1917"/><circle cx="75" cy="60" r="3" fill="#1c1917"/><circle cx="105" cy="60" r="3" fill="#1c1917"/><circle cx="140" cy="60" r="3" fill="#1c1917"/><circle cx="180" cy="60" r="3" fill="#1c1917"/><circle cx="225" cy="60" r="3" fill="#1c1917"/><circle cx="275" cy="60" r="3" fill="#1c1917"/><circle cx="330" cy="60" r="3" fill="#1c1917"/><circle cx="390" cy="60" r="3" fill="#1c1917"/><circle cx="455" cy="60" r="3" fill="#1c1917"/><circle cx="525" cy="60" r="3" fill="#1c1917"/><circle cx="600" cy="60" r="3" fill="#1c1917"/><text x="320" y="30" fill="#fde68a" font-size="12" text-anchor="middle">Increasing spacing → the trolley is accelerating</text><rect x="20" y="110" width="600" height="40" fill="#f5f5f4" rx="3"/><circle cx="30" cy="130" r="3" fill="#1c1917"/><circle cx="80" cy="130" r="3" fill="#1c1917"/><circle cx="130" cy="130" r="3" fill="#1c1917"/><circle cx="180" cy="130" r="3" fill="#1c1917"/><circle cx="230" cy="130" r="3" fill="#1c1917"/><circle cx="280" cy="130" r="3" fill="#1c1917"/><circle cx="330" cy="130" r="3" fill="#1c1917"/><circle cx="380" cy="130" r="3" fill="#1c1917"/><circle cx="430" cy="130" r="3" fill="#1c1917"/><circle cx="480" cy="130" r="3" fill="#1c1917"/><circle cx="530" cy="130" r="3" fill="#1c1917"/><circle cx="580" cy="130" r="3" fill="#1c1917"/><text x="320" y="104" fill="#fde68a" font-size="12" text-anchor="middle">Equal spacing → uniform velocity</text><text x="320" y="166" fill="#ffe0b2" font-size="11" text-anchor="middle">A 50 Hz ticker-timer makes 50 dots per second: one “tick” = 0.02 s</text>
    </svg>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">🗣️ In Simple Words</p>
    <div>s–t graph: slope = velocity. v–t graph: slope = acceleration; area = distance travelled.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 Scientific Background</h3>
    <p>A <strong>ticker-timer</strong> has a vibrating arm that strikes a carbon disc and marks dots on a paper tape pulled by a moving trolley. With a 50 Hz mains supply, it makes 50 dots per second, so the time between successive dots (one tick) is 0.02 s. A length of tape containing 5 ticks represents 0.1 s. By measuring the length of each 5-tick section, you can find the average velocity in each 0.1 s interval and then the acceleration.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Gradient</strong>
    </p>
    <p style="margin:6px 0;">Steepness of a graph: change in y ÷ change in x.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Displacement–time graph</strong>
    </p>
    <p style="margin:6px 0;">Graph of displacement against time.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> s–t</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Velocity–time graph</strong>
    </p>
    <p style="margin:6px 0;">Graph of velocity against time.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> v–t</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Tick</strong>
    </p>
    <p style="margin:6px 0;">Time between two successive dots on a ticker-tape.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> 0.02 s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Uniform acceleration</strong>
    </p>
    <p style="margin:6px 0;">Velocity changes by equal amounts in equal times.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Tape chart</strong>
    </p>
    <p style="margin:6px 0;">Strips of tape pasted side by side to show velocity changes.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">1. Reading Velocity–Time Graphs</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 260" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="60" y1="220" x2="500" y2="220" stroke="#94a3b8" stroke-width="2"/><line x1="60" y1="220" x2="60" y2="30" stroke="#94a3b8" stroke-width="2"/><text x="500" y="212" fill="#fff3e0" font-size="11" text-anchor="end">time (s)</text><text x="56" y="24" fill="#fff3e0" font-size="11">velocity (m/s)</text><polygon points="60,220 160,100 360,100 460,220" fill="#fb923c" opacity="0.25"/><polyline points="60,220 160,100 360,100 460,220" fill="none" stroke="#fb923c" stroke-width="3"/><text x="60" y="238" fill="#fff3e0" font-size="11" text-anchor="middle">0</text><text x="160" y="238" fill="#fff3e0" font-size="11" text-anchor="middle">5</text><text x="360" y="238" fill="#fff3e0" font-size="11" text-anchor="middle">15</text><text x="460" y="238" fill="#fff3e0" font-size="11" text-anchor="middle">20</text><text x="52" y="104" fill="#fff3e0" font-size="11" text-anchor="end">12</text><line x1="60" y1="100" x2="160" y2="100" stroke="#fde68a" stroke-dasharray="4,4"/><text x="110" y="200" fill="#fde68a" font-size="14" text-anchor="middle">A</text><text x="260" y="170" fill="#fde68a" font-size="14" text-anchor="middle">B</text><text x="410" y="200" fill="#fde68a" font-size="14" text-anchor="middle">C</text><text x="300" y="40" fill="#fde68a" font-size="12" text-anchor="middle">Area under graph = displacement</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 1: Journey of a matatu</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The graph shows a matatu accelerating from rest to 12 m/s in 5 s, moving steadily for 10 s, then stopping in 5 s. Find (a) the initial acceleration (b) the deceleration (c) the total distance (d) the average speed.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Gradients give accelerations; areas give distance.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: (a) Gradient A</strong>
    </p>
    <div style="margin:6px 0 0 34px;">12 ÷ 5 = 2.4 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: (b) Gradient C</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(0 − 12) ÷ 5 = −2.4 m/s² (deceleration 2.4 m/s²)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: (c) Areas</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A: ½ × 5 × 12 = 30 m; B: 10 × 12 = 120 m; C: ½ × 5 × 12 = 30 m; total 180 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#fff3e0;">Step 4: (d) Average speed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">180 ÷ 20 = 9 m/s</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 2.4 m/s²; 2.4 m/s² deceleration; 180 m; 9 m/s</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">2. Analysing Ticker-Tape</h3>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 2: Acceleration from tape</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A tape from a 50 Hz ticker-timer is cut into 5-tick strips. The first strip is 2.0 cm long and the fifth is 6.0 cm long. Find the acceleration.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Each 5-tick strip lasts 0.1 s. The time between the middles of strip 1 and strip 5 is 4 × 0.1 s.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: u</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2.0 cm ÷ 0.1 s = 20 cm/s = 0.20 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: v</strong>
    </p>
    <div style="margin:6px 0 0 34px;">6.0 cm ÷ 0.1 s = 60 cm/s = 0.60 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 × 0.1 = 0.4 s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#fff3e0;">Step 4: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(0.60 − 0.20) ÷ 0.4 = 1.0 m/s²</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 1.0 m/s²</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Using the number of dots instead of the number of ticks. Five spaces between six dots is five ticks (0.1 s).</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fff3e0;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does the gradient of a displacement–time graph give?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Velocity.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What does the area under a velocity–time graph give?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Displacement (distance travelled).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> How long is one tick on a 50 Hz timer?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">0.02 s.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ticker-timers use mains or low-voltage supplies — check cables are not damaged and keep water away.</li>
    <li>Place a catch-box at the end of the runway.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plotting graphs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating gradients and areas</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using a ticker-timer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting data</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Velocity of a Trolley Using Ticker-Tape</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To determine the velocity of a trolley moving down a runway using a ticker-timer.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ticker-timer and power supply</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ticker-tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Trolley</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Runway and wooden block</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Scissors and glue</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Switch off the timer when not in use.</li>
    <li>Catch the trolley at the end of the runway.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Raise one end of the runway slightly so the trolley moves when pushed.</li>
    <li>Attach the tape to the trolley and thread it through the timer.</li>
    <li>Switch on the timer and release the trolley.</li>
    <li>Mark off 5-tick sections and cut the tape into strips.</li>
    <li>Paste the strips side by side to make a tape chart and measure each length.</li>
    <li>Calculate the velocity for each strip and plot a velocity–time graph.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Strip</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Length (cm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time at middle (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Velocity (cm/s)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.05</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.35</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does a tape chart with equal strips show?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Uniform velocity.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What shape of v–t graph shows uniform acceleration?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A straight line with a positive gradient.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The ticker-timer allows velocity to be measured at regular intervals and acceleration to be found from the gradient.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Each strip’s length divided by 0.1 s gives the average velocity in that interval.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Friction between tape and timer.</li>
    <li>Starting the count at the wrong dot.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Modern light gates and data loggers do the same job electronically.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Plot your velocity values against time and draw the best straight line. Find the acceleration from the gradient and state whether the motion is uniform.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffb74d;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Physics in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Car dashboards and fitness apps show speed–time data.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Traffic flow graphs help plan roads to reduce jams and pollution.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Railway and aviation engineers use motion graphs in design and testing.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> A horizontal line on an s–t graph means…</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: No change in position.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">The body is at rest.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> A horizontal line on a v–t graph means…</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Velocity constant.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Uniform velocity (zero acceleration).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Area of a triangle under a v–t graph with base 4 s and height 8 m/s?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: ½ × base × height.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">16 m.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Sketch s–t and v–t graphs for a learner walking to school, stopping and walking again.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Give your partner a v–t graph; they describe the motion in words.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a tape chart from a ticker-timer experiment.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Plot motion data in a spreadsheet and add a trend line.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Sketch the v–t graph of a body accelerating uniformly from rest, moving at constant velocity, then decelerating to rest.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A rising line, a horizontal line, then a falling line to zero.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A body accelerates from 0 to 10 m/s in 4 s then moves steadily for 6 s. Find the total distance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">20 + 60 = 80 m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A 5-tick strip is 3.5 cm long. Find the velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">35 cm/s = 0.35 m/s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why cut the tape into 5-tick strips?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Each strip then represents an equal time of 0.1 s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What does a curved s–t graph getting steeper show?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">The velocity is increasing — the body is accelerating.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🧠 Lesson Summary</h3>
    <p>On a displacement–time graph, gradient = velocity. On a velocity–time graph, gradient = acceleration and area = displacement. A ticker-timer at 50 Hz makes dots every 0.02 s; 5-tick strips each last 0.1 s, so strip length ÷ 0.1 s gives velocity, and changes in velocity give acceleration.</p>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>s–t graphs.</li>
    <li>v–t graphs.</li>
    <li>Gradients and areas.</li>
    <li>Ticker-tape.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>s–t slope = v.</li>
    <li>v–t slope = a.</li>
    <li>v–t area = s.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing s–t and v–t graphs.</li>
    <li>Counting dots instead of ticks.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Label axes with units.</li>
    <li>Split areas into shapes.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #fb8c00;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show gradient triangles.</li>
    <li>State units.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpreting graphs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spreadsheets.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tape charts.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Accident investigators read motion from skid marks and video data.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw a v–t graph for a bus journey and calculate its distance.</li>
    <li>Explain how a tape chart shows acceleration.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which graph do I find easier to read?</li>
    <li>How could I measure motion without a ticker-timer?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Gradient</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slope.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tick</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.02 s interval.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tape chart</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strips showing velocity.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Uniform acceleration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equal velocity changes in equal times.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can read s–t graphs.</p>
    <p style="margin:6px 0;">☐ I can read v–t graphs.</p>
    <p style="margin:6px 0;">☐ I can use gradients and areas.</p>
    <p style="margin:6px 0;">☐ I can analyse ticker-tape.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The gradient of a displacement–time graph gives:',
            options: ['Acceleration', 'Distance', 'Velocity', 'Force'],
            correct: 2,
            explanation: 'The answer is “Velocity”. Change in displacement per unit time.'
        },
        {
            question: 'The gradient of a velocity–time graph gives:',
            options: ['Displacement', 'Speed', 'Mass', 'Acceleration'],
            correct: 3,
            explanation: 'The answer is “Acceleration”. Change in velocity per unit time.'
        },
        {
            question: 'The area under a velocity–time graph gives:',
            options: ['Acceleration', 'Displacement', 'Time', 'Momentum'],
            correct: 1,
            explanation: 'The answer is “Displacement”. Velocity × time.'
        },
        {
            question: 'A horizontal line on a displacement–time graph shows the body is:',
            options: ['Accelerating', 'Decelerating', 'At rest', 'Moving at constant velocity'],
            correct: 2,
            explanation: 'The answer is “At rest”. Displacement does not change.'
        },
        {
            question: 'A 50 Hz ticker-timer makes a dot every:',
            options: ['0.1 s', '0.02 s', '0.5 s', '1 s'],
            correct: 1,
            explanation: 'The answer is “0.02 s”. 1 ÷ 50.'
        },
        {
            question: 'A 5-tick strip represents:',
            options: ['0.1 s', '0.02 s', '0.5 s', '5 s'],
            correct: 0,
            explanation: 'The answer is “0.1 s”. 5 × 0.02.'
        },
        {
            question: 'Increasing spacing between dots shows:',
            options: ['Deceleration', 'Acceleration', 'Rest', 'Uniform velocity'],
            correct: 1,
            explanation: 'The answer is “Acceleration”. Distance per tick increases.'
        },
        {
            question: 'A body accelerates from rest to 8 m/s in 4 s. The distance covered is:',
            options: ['32 m', '2 m', '8 m', '16 m'],
            correct: 3,
            explanation: 'The answer is “16 m”. ½ × 4 × 8.'
        },
        {
            question: 'A straight line sloping downwards on a v–t graph shows:',
            options: ['Uniform acceleration', 'Rest', 'Increasing velocity', 'Uniform deceleration'],
            correct: 3,
            explanation: 'The answer is “Uniform deceleration”. Negative gradient.'
        },
        {
            question: 'Strip lengths 2 cm and 6 cm, four strips apart (0.4 s), give an acceleration of:',
            options: ['1.0 m/s²', '10 m/s²', '0.1 m/s²', '4 m/s²'],
            correct: 0,
            explanation: 'The answer is “1.0 m/s²”. (0.6 − 0.2) ÷ 0.4.'
        }
    ]
},
{
    name: '1.1.3 Linear Motion: Equations of Uniformly Accelerated Motion and Free Fall',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Equations of Uniformly Accelerated Motion and Free Fall</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the three equations of uniformly accelerated motion, how to choose the right one, how to apply them to vehicles and falling bodies, the acceleration due to gravity, and how to calculate stopping distances.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The equations let you predict how far a car travels before stopping, how long a stone takes to fall into a well, and how high a ball rises — calculations used in road safety, sports and engineering.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛑 Braking distances</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🪨 Falling objects</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Kicked balls</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🪂 Parachutes</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Construction safety</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Rockets</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#fff3e0;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish between distance and displacement, speed and velocity.</li>
    <li>Determine velocity and acceleration from experiments and graphs.</li>
    <li>Interpret displacement–time and velocity–time graphs.</li>
    <li>Apply the equations of uniformly accelerated motion.</li>
    <li>Analyse the motion of freely falling bodies.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fff3e0;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the three equations of motion.</li>
    <li>Choose and apply the correct equation.</li>
    <li>Explain free fall.</li>
    <li>Calculate stopping distances.</li>
    <li>Determine g experimentally.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">❓ Key inquiry question:</strong> How can the motion of a body in a straight line be described?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">🧰 What you already know:</strong> Lessons 1.1.1 and 1.1.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>For a body moving in a straight line with <strong>uniform acceleration</strong>, five quantities are linked: initial velocity <strong>u</strong>, final velocity <strong>v</strong>, acceleration <strong>a</strong>, time <strong>t</strong> and displacement <strong>s</strong>. Three equations connect them:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Missing quantity</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = u + at</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s = ut + ½at²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v² = u² + 2as</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">t</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">🗣️ In Simple Words</p>
    <div>List what you know and what you want. Pick the equation that contains those and leaves out the one you don’t need.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 Scientific Background</h3>
    <p>The equations come from the velocity–time graph: the gradient gives v = u + at, and the area of the trapezium under the line gives s = ½(u + v)t, which leads to the other two equations. Near the Earth’s surface, all bodies falling freely (with negligible air resistance) have the same acceleration, <strong>g ≈ 9.8 m/s²</strong>, usually taken as 10 m/s². For a body thrown upwards, take upward as positive so a = −10 m/s²; at the highest point v = 0.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Uniform acceleration</strong>
    </p>
    <p style="margin:6px 0;">Constant acceleration.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> a</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Free fall</strong>
    </p>
    <p style="margin:6px 0;">Motion under gravity alone.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> g</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Acceleration due to gravity</strong>
    </p>
    <p style="margin:6px 0;">Acceleration of a freely falling body.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> g ≈ 9.8 m/s²</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Thinking distance</strong>
    </p>
    <p style="margin:6px 0;">Distance travelled during the driver’s reaction time.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Braking distance</strong>
    </p>
    <p style="margin:6px 0;">Distance travelled while the brakes slow the vehicle.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Stopping distance</strong>
    </p>
    <p style="margin:6px 0;">Thinking distance + braking distance.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">1. Using the Equations</h3>
    <div style="background:#0b1a2e;border:1px solid #fb8c00;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#ffe0b2;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Equations of motion</p>
    <div style="color:#fff3e0;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">v = u + at;  s = ut + ½at²;  v² = u² + 2as;  s = ½(u + v)t</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Link u, v, a, t and s for uniform acceleration.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m, m/s, m/s², s</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Acceleration is constant.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using them when acceleration changes.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> List knowns and unknown first.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 1: Accelerating car</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car moving at 10 m/s accelerates at 2 m/s² for 5 s. Find its final velocity and the distance covered.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> u = 10, a = 2, t = 5.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: v</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v = 10 + 2 × 5 = 20 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: s</strong>
    </p>
    <div style="margin:6px 0 0 34px;">s = 10 × 5 + ½ × 2 × 25 = 50 + 25 = 75 m</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> v = 20 m/s; s = 75 m</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 2: Braking distance</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car moving at 25 m/s brakes with a deceleration of 5 m/s². Find its braking distance.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> v = 0, no time given → v² = u² + 2as.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 25² + 2(−5)s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10s = 625, so s = 62.5 m</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 62.5 m</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">2. Free Fall and Stopping Distance</h3>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 3: Stone dropped into a well</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A stone is dropped into a well and hits the water after 2.5 s. How deep is the well, and how fast is the stone moving? (g = 10 m/s²)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> u = 0, a = 10, t = 2.5.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Depth</strong>
    </p>
    <div style="margin:6px 0 0 34px;">s = 0 + ½ × 10 × 2.5² = 31.25 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Speed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v = 0 + 10 × 2.5 = 25 m/s</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> About 31 m deep; 25 m/s</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 4: Ball thrown upwards</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A ball is thrown vertically upwards at 20 m/s. Find the maximum height and the time to reach it. (g = 10 m/s²)</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> At the top v = 0; a = −10 m/s².</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Height</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 20² − 2 × 10 × s → s = 20 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 20 − 10t → t = 2 s</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 20 m; 2 s</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 5: Stopping distance</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A driver travelling at 20 m/s has a reaction time of 0.7 s. The car then decelerates at 8 m/s². Find the total stopping distance.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Thinking distance at constant speed, then braking distance.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Thinking</strong>
    </p>
    <div style="margin:6px 0 0 34px;">20 × 0.7 = 14 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Braking</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 20² − 2 × 8 × s → s = 25 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: Total</strong>
    </p>
    <div style="margin:6px 0 0 34px;">14 + 25 = 39 m</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 39 m</div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Alcohol, drugs, tiredness and using a phone increase reaction time, and worn tyres or wet roads increase braking distance — this is why NTSA road safety rules matter.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fff3e0;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which equation has no time in it?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">v² = u² + 2as.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the velocity of a ball at its highest point?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Zero.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A body falls from rest for 3 s (g = 10 m/s²). How far does it fall?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">45 m.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Drop only soft or light objects in free-fall experiments and keep clear of the landing area.</li>
    <li>Do not stand on unstable chairs or tables to drop objects — use a fixed safe height.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Choosing equations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rearranging formulae</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Timing falls</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating g</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Determining g by Free Fall</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To determine the acceleration due to gravity by timing a falling ball.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small heavy ball (e.g. steel or a tightly wrapped stone)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule or measuring tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatch or phone slow-motion video</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Soft landing tray</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recording sheet</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Drop from a safe, fixed height such as a balcony rail with supervision.</li>
    <li>Keep everyone clear of the landing tray.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Measure heights of 1.0, 1.5 and 2.0 m above the tray.</li>
    <li>Drop the ball from rest from each height and time the fall.</li>
    <li>Repeat each drop five times and find the mean time.</li>
    <li>Calculate g using s = ½gt², so g = 2s ÷ t².</li>
    <li>Plot s against t² and find g from the gradient (gradient = g ÷ 2).</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Height s (m)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mean time t (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">t² (s²)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">g = 2s ÷ t² (m/s²)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.0</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why are hand-timed values often too small or too large?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Reaction time is large compared with fall times of under one second.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why use a heavy, small ball?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Air resistance has less effect.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The measured value of g should be close to 9.8 m/s².</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> All bodies fall with the same acceleration when air resistance is negligible.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reaction time.</li>
    <li>Measuring height inaccurately.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Slow-motion video and light gates give much more accurate timing.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Plot s against t². Explain why the graph should be a straight line through the origin, and find g from the gradient. Compare your value with 9.8 m/s² and calculate the percentage error.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffb74d;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Physics in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Speed limits near schools reduce stopping distances.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Smooth acceleration and braking save fuel.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Engineers design brakes, lifts and parachutes using these equations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which equation would you use to find v given u, a and t?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: No s needed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">v = u + at.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Value of g used in calculations?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Near Earth.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">10 m/s² (more accurately 9.8 m/s²).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Thinking distance at 15 m/s with 0.6 s reaction time?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Speed × time.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">9 m.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write each equation and the quantity it leaves out.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Measure each other’s reaction time with a falling ruler and calculate it using s = ½gt².</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a road-safety poster showing stopping distances at different speeds.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a phone slow-motion video to time a falling ball.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A train accelerates from 5 m/s to 25 m/s over 200 m. Find its acceleration.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">a = (625 − 25) ÷ 400 = 1.5 m/s².</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A stone is dropped from a 45 m cliff. Find the time to reach the ground and its final speed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">3 s; 30 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain three factors that increase stopping distance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Higher speed; longer reaction time (alcohol, tiredness); wet roads or worn tyres.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why repeat each drop five times?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">To reduce random timing errors.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does doubling speed more than double braking distance?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Braking distance is proportional to u², so it becomes four times larger.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🧠 Lesson Summary</h3>
    <p>For uniform acceleration: v = u + at, s = ut + ½at², v² = u² + 2as, s = ½(u + v)t. Choose the equation that contains the known and unknown quantities. Free-falling bodies accelerate at g ≈ 9.8 m/s² (10 m/s²). Stopping distance = thinking distance + braking distance; braking distance increases with the square of the speed.</p>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Equations.</li>
    <li>Choosing equations.</li>
    <li>Free fall.</li>
    <li>Stopping distance.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>At top, v = 0.</li>
    <li>g ≈ 10 m/s².</li>
    <li>Braking distance ∝ u².</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Wrong signs for upward motion.</li>
    <li>Using equations when a is not constant.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>List u, v, a, s, t.</li>
    <li>Take one direction as positive.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #fb8c00;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write the equation before substituting.</li>
    <li>Include units.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing equations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Road safety.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Video timing.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every metre of stopping distance can be the difference between safety and an accident.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate stopping distances at 10, 20 and 30 m/s with 0.7 s reaction time and 7 m/s² deceleration.</li>
    <li>Derive v² = u² + 2as from the other equations.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which equation do I use most?</li>
    <li>How will I drive or ride safely?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Free fall</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Motion under gravity alone.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">g</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration due to gravity.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Thinking distance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reaction distance.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Braking distance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance while braking.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state the equations.</p>
    <p style="margin:6px 0;">☐ I can apply them.</p>
    <p style="margin:6px 0;">☐ I can analyse free fall.</p>
    <p style="margin:6px 0;">☐ I can calculate stopping distance.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which equation does NOT contain displacement?',
            options: ['s = ut + ½at²', 'v² = u² + 2as', 'v = u + at', 's = ½(u + v)t'],
            correct: 2,
            explanation: 'The answer is “v = u + at”. It links v, u, a and t.'
        },
        {
            question: 'Which equation does NOT contain time?',
            options: ['v² = u² + 2as', 'v = u + at', 's = ut + ½at²', 's = ½(u + v)t'],
            correct: 0,
            explanation: 'The answer is “v² = u² + 2as”. Useful when t is unknown.'
        },
        {
            question: 'A car at 10 m/s accelerates at 2 m/s² for 5 s. Its final velocity is:',
            options: ['20 m/s', '12 m/s', '15 m/s', '50 m/s'],
            correct: 0,
            explanation: 'The answer is “20 m/s”. 10 + 2 × 5.'
        },
        {
            question: 'A body starts from rest with a = 4 m/s². Distance in 3 s:',
            options: ['18 m', '12 m', '36 m', '6 m'],
            correct: 0,
            explanation: 'The answer is “18 m”. ½ × 4 × 9.'
        },
        {
            question: 'A car at 25 m/s decelerating at 5 m/s² stops in:',
            options: ['125 m', '5 m', '250 m', '62.5 m'],
            correct: 3,
            explanation: 'The answer is “62.5 m”. 625 ÷ 10.'
        },
        {
            question: 'The acceleration of free fall near the Earth is about:',
            options: ['1 m/s²', '10 m/s²', '100 m/s²', '0.1 m/s²'],
            correct: 1,
            explanation: 'The answer is “10 m/s²”. g ≈ 9.8 m/s².'
        },
        {
            question: 'A stone dropped from rest falls for 2 s. Its speed is:',
            options: ['10 m/s', '20 m/s', '40 m/s', '5 m/s'],
            correct: 1,
            explanation: 'The answer is “20 m/s”. v = gt.'
        },
        {
            question: 'A ball thrown up at 20 m/s reaches a maximum height of:',
            options: ['40 m', '10 m', '20 m', '200 m'],
            correct: 2,
            explanation: 'The answer is “20 m”. u² ÷ 2g.'
        },
        {
            question: 'Stopping distance equals:',
            options: ['Braking distance only', 'Speed × mass', 'Reaction time only', 'Thinking distance + braking distance'],
            correct: 3,
            explanation: 'The answer is “Thinking distance + braking distance”. Both stages.'
        },
        {
            question: 'Doubling speed makes braking distance:',
            options: ['Twice as large', 'Four times larger', 'Half', 'The same'],
            correct: 1,
            explanation: 'The answer is “Four times larger”. It depends on u².'
        }
    ]
},
{
    name: '1.1 Laboratory Activity: Measuring Acceleration with a Ticker-Timer',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🧪 Measuring Acceleration with a Ticker-Timer</h2>
    <p style="font-size:16px;">You will investigate how the slope of a runway affects the acceleration of a trolley, using a ticker-timer and tape charts.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#ffe0b2;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electricity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the correct supply for the ticker-timer; keep water away; check cables.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moving trolley</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use a catch-box or stop at the end of the runway.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lifting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Raise runways carefully on stable blocks.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tidy bench</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep tapes and cables off the floor to avoid tripping.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Slope and Acceleration</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To investigate the effect of the height of a runway on the acceleration of a trolley.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ticker-timer and power supply</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ticker-tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Trolley</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Runway</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Blocks to raise the runway</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Scissors, glue, graph paper</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Carbon discs for the timer</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Catch the trolley each run.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Raise one end of the runway to a height h = 5 cm.</li>
    <li>Release the trolley from rest with the tape attached and the timer running.</li>
    <li>Cut the tape into 5-tick strips, make a tape chart and calculate velocities.</li>
    <li>Plot a v–t graph and find the acceleration from the gradient.</li>
    <li>Repeat for h = 10, 15 and 20 cm.</li>
    <li>Plot acceleration against height.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Height h (cm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Acceleration (m/s²)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> How does acceleration change with height?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">It increases as the runway gets steeper.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does the graph not pass exactly through the origin?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Friction must be overcome before the trolley moves.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The steeper the runway, the greater the acceleration of the trolley.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> A greater component of the trolley’s weight acts down the slope.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Friction varies along the runway.</li>
    <li>Tape drags in the timer.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Road designers limit gradients so vehicles do not run away on steep hills.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Plot acceleration against height. Describe the relationship and use the graph to predict the acceleration at h = 25 cm.</p>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 6: Acceleration from tape chart</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Strips 1 and 6 are 1.5 cm and 4.0 cm long. Find the acceleration.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Velocities and time between strip middles (5 × 0.1 s).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: u</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1.5 ÷ 0.1 = 15 cm/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: v</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4.0 ÷ 0.1 = 40 cm/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(40 − 15) ÷ 0.5 = 50 cm/s² = 0.5 m/s²</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 0.5 m/s²</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is the time for a 5-tick strip?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">0.1 s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> How do you find acceleration from a v–t graph?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">From the gradient.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> State one way to reduce friction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Use a smooth runway or friction-compensate by tilting slightly.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why release the trolley from rest?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">So the initial velocity is zero for each run.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why use the same trolley each time?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">To keep mass constant (fair test).</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'Increasing the runway height makes the acceleration:',
            options: ['Decrease', 'Stay zero', 'Increase', 'Negative'],
            correct: 2,
            explanation: 'The answer is “Increase”. More of the weight acts down the slope.'
        },
        {
            question: 'Each 5-tick strip represents:',
            options: ['0.1 s', '0.02 s', '1 s', '5 s'],
            correct: 0,
            explanation: 'The answer is “0.1 s”. 5 × 0.02 s.'
        },
        {
            question: 'A strip 4.0 cm long represents a velocity of:',
            options: ['40 cm/s', '4 cm/s', '0.4 cm/s', '400 cm/s'],
            correct: 0,
            explanation: 'The answer is “40 cm/s”. 4.0 ÷ 0.1.'
        },
        {
            question: 'The controlled variable in this experiment is:',
            options: ['Height of the runway', 'Acceleration', 'Mass of the trolley', 'Tape length'],
            correct: 2,
            explanation: 'The answer is “Mass of the trolley”. Kept constant.'
        },
        {
            question: 'Friction makes the measured acceleration:',
            options: ['Larger', 'Exactly zero', 'Infinite', 'Smaller'],
            correct: 3,
            explanation: 'The answer is “Smaller”. It opposes motion.'
        }
    ]
},
{
    name: '1.1 Quiz: Linear Motion',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📝 Quiz — Linear Motion</h2>
    <p style="font-size:16px;">This quiz checks lessons 1.1.1–1.1.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Scalars and vectors</li>
    <li>Speed, velocity, acceleration</li>
    <li>Motion graphs</li>
    <li>Ticker-tape</li>
    <li>Equations of motion</li>
    <li>Free fall and stopping distance</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #fb8c00;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffe0b2;font-weight:bold;">📝 Exam Tip</p>
    <div>Convert units first, list u, v, a, s and t, then choose the equation.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a vector?',
            options: ['Mass', 'Acceleration', 'Time', 'Distance'],
            correct: 1,
            explanation: 'The answer is “Acceleration”. It has direction.'
        },
        {
            question: 'A runner covers 100 m in 12.5 s. Average speed:',
            options: ['12.5 m/s', '1 250 m/s', '8 m/s', '0.125 m/s'],
            correct: 2,
            explanation: 'The answer is “8 m/s”. 100 ÷ 12.5.'
        },
        {
            question: '108 km/h equals:',
            options: ['108 m/s', '10.8 m/s', '30 m/s', '389 m/s'],
            correct: 2,
            explanation: 'The answer is “30 m/s”. 108 ÷ 3.6.'
        },
        {
            question: '6 km east then 8 km north gives a displacement of:',
            options: ['10 km', '14 km', '2 km', '48 km'],
            correct: 0,
            explanation: 'The answer is “10 km”. √(36 + 64).'
        },
        {
            question: 'A body slows from 30 m/s to 10 m/s in 4 s. Acceleration:',
            options: ['5 m/s²', '−5 m/s²', '−10 m/s²', '−20 m/s²'],
            correct: 1,
            explanation: 'The answer is “−5 m/s²”. (10 − 30) ÷ 4.'
        },
        {
            question: 'A straight sloping line on an s–t graph shows:',
            options: ['Uniform velocity', 'Uniform acceleration', 'Rest', 'Deceleration'],
            correct: 0,
            explanation: 'The answer is “Uniform velocity”. Constant gradient = constant velocity.'
        },
        {
            question: 'The area under a v–t graph of 10 m/s for 6 s is:',
            options: ['16 m', '60 m', '0.6 m', '600 m'],
            correct: 1,
            explanation: 'The answer is “60 m”. 10 × 6.'
        },
        {
            question: 'On a 50 Hz ticker-tape, 10 ticks take:',
            options: ['0.02 s', '0.5 s', '0.2 s', '2 s'],
            correct: 2,
            explanation: 'The answer is “0.2 s”. 10 × 0.02.'
        },
        {
            question: 'Equal spacing of dots on ticker-tape shows:',
            options: ['Acceleration', 'Deceleration', 'Rest', 'Uniform velocity'],
            correct: 3,
            explanation: 'The answer is “Uniform velocity”. Equal distances in equal times.'
        },
        {
            question: 'From rest with a = 3 m/s² for 4 s, final velocity:',
            options: ['7 m/s', '24 m/s', '0.75 m/s', '12 m/s'],
            correct: 3,
            explanation: 'The answer is “12 m/s”. v = at.'
        },
        {
            question: 'From 10 m/s to 30 m/s with a = 4 m/s², distance:',
            options: ['50 m', '200 m', '400 m', '100 m'],
            correct: 3,
            explanation: 'The answer is “100 m”. (900 − 100) ÷ 8.'
        },
        {
            question: 'A stone falls from rest for 4 s (g = 10 m/s²). Distance:',
            options: ['80 m', '40 m', '160 m', '20 m'],
            correct: 0,
            explanation: 'The answer is “80 m”. ½ × 10 × 16.'
        },
        {
            question: 'A ball thrown up at 30 m/s takes how long to reach the top?',
            options: ['30 s', '3 s', '0.3 s', '6 s'],
            correct: 1,
            explanation: 'The answer is “3 s”. t = u ÷ g.'
        },
        {
            question: 'Thinking distance at 25 m/s with 0.8 s reaction time:',
            options: ['20 m', '31 m', '3.2 m', '200 m'],
            correct: 0,
            explanation: 'The answer is “20 m”. 25 × 0.8.'
        },
        {
            question: 'Alcohol increases stopping distance mainly by increasing:',
            options: ['Car mass', 'Road friction', 'Reaction time', 'Braking force'],
            correct: 2,
            explanation: 'The answer is “Reaction time”. Slower responses.'
        }
    ]
},
{
    name: '1.1 Assignment: Road Safety Speed Study Near the School',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📂 Road Safety Speed Study Near the School</h2>
    <p style="font-size:16px;">In groups, you will safely estimate the speeds of vehicles passing near the school, calculate their stopping distances and make recommendations for road safety.</p>
    <p style="margin:6px 0 0 0;color:#fff3e0;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school board of management is concerned about vehicles speeding past the school gate. Your group will collect evidence and present it to the board.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>With your teacher, choose a safe spot well away from the road edge and mark two points 50 m apart along the roadside (measured beforehand).</li>
    <li>Time at least 10 vehicles passing between the two points.</li>
    <li>Calculate each vehicle’s speed in m/s and km/h.</li>
    <li>Calculate the stopping distance of each vehicle, assuming 0.7 s reaction time and a deceleration of 7 m/s².</li>
    <li>Compare speeds with the speed limit near schools.</li>
    <li>Present results in a table and graph, with three recommendations (e.g. bumps, signs, crossing guards).</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Data table of times, speeds and stopping distances</li>
    <li>Graph</li>
    <li>Comparison with the speed limit</li>
    <li>Recommendations</li>
    <li>Individual reflections</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data collection and safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate data for 10+ vehicles collected safely</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data for 10 vehicles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data for fewer vehicles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little or unsafe data</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All speeds and stopping distances correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three practical, evidence-based recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One recommendation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">None</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation and teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and persuasive; all contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear; most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some disorganisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poor</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Never stand on the road.<br>Speed = 50 ÷ time.<br>Braking distance = u² ÷ (2 × 7).</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did the data show about driver behaviour?</li>
    <li>How did we stay safe?</li>
    <li>Which recommendation is most important?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A vehicle takes 4 s to cover 50 m. Its speed is:',
            options: ['12.5 m/s', '200 m/s', '4 m/s', '54 m/s'],
            correct: 0,
            explanation: 'The answer is “12.5 m/s”. 50 ÷ 4.'
        },
        {
            question: '12.5 m/s in km/h is:',
            options: ['12.5 km/h', '45 km/h', '3.5 km/h', '125 km/h'],
            correct: 1,
            explanation: 'The answer is “45 km/h”. 12.5 × 3.6.'
        },
        {
            question: 'Braking distance at 14 m/s with a = 7 m/s² is:',
            options: ['7 m', '28 m', '14 m', '98 m'],
            correct: 2,
            explanation: 'The answer is “14 m”. 196 ÷ 14.'
        },
        {
            question: 'During the study you must:',
            options: ['Stand in the road', 'Stop vehicles', 'Run across the road', 'Stay off the road and with your teacher'],
            correct: 3,
            explanation: 'The answer is “Stay off the road and with your teacher”. Safety first.'
        },
        {
            question: 'Speed bumps reduce accidents because they:',
            options: ['Increase speeds', 'Increase reaction time', 'Remove brakes', 'Lower vehicle speeds'],
            correct: 3,
            explanation: 'Lower speeds mean shorter stopping distances.'
        }
    ]
},
{
    name: '1.1 Revision: Linear Motion',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🔁 Revision — Linear Motion</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.1 before moving on to 1.2 Newton’s Laws of Motion.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">➡️ Scalars and vectors</p>
    <div>Speed, distance (scalars); velocity, displacement, acceleration (vectors).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">🏃 Speed and velocity</p>
    <div>Distance ÷ time; displacement ÷ time; ÷ 3.6 for m/s.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">⚡ Acceleration</p>
    <div>a = (v − u) ÷ t; negative = deceleration.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">📈 s–t graphs</p>
    <div>Gradient = velocity.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">📉 v–t graphs</p>
    <div>Gradient = acceleration; area = displacement.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">🎞️ Ticker-tape</p>
    <div>1 tick = 0.02 s; 5-tick strip = 0.1 s.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">🧮 Equations</p>
    <div>v = u + at; s = ut + ½at²; v² = u² + 2as.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">🪨 Free fall and safety</p>
    <div>g ≈ 10 m/s²; stopping = thinking + braking.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use when you don’t know</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = u + at</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s = ut + ½at²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v² = u² + 2as</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">t</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s = ½(u + v)t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A car accelerates from 15 m/s to 35 m/s in 5 s. Find a and s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">a = 4 m/s²; s = 125 m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A body falls 20 m from rest. Find its final speed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">20 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> From a v–t graph: 0 to 20 m/s in 10 s, then constant for 20 s. Total distance?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">100 + 400 = 500 m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A 5-tick strip is 7 cm long. Velocity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">70 cm/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does tiredness increase stopping distance?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">It increases reaction time, so thinking distance increases.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can describe motion with the correct quantities.</p>
    <p style="margin:6px 0;">☐ I can read motion graphs.</p>
    <p style="margin:6px 0;">☐ I can use the equations of motion.</p>
    <p style="margin:6px 0;">☐ I can explain free fall and stopping distance.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Distance travelled per unit time is:',
            options: ['Velocity', 'Acceleration', 'Displacement', 'Speed'],
            correct: 3,
            explanation: 'The answer is “Speed”. A scalar rate.'
        },
        {
            question: 'Velocity changes when:',
            options: ['Speed or direction changes', 'Only mass changes', 'Time stops', 'Nothing changes'],
            correct: 0,
            explanation: 'The answer is “Speed or direction changes”. It is a vector.'
        },
        {
            question: 'A curved s–t graph getting steeper shows:',
            options: ['Rest', 'Acceleration', 'Uniform velocity', 'Deceleration'],
            correct: 1,
            explanation: 'The answer is “Acceleration”. Gradient increasing.'
        },
        {
            question: 'v = u + at gives v when u = 5, a = 3, t = 4 as:',
            options: ['12 m/s', '60 m/s', '9 m/s', '17 m/s'],
            correct: 3,
            explanation: 'The answer is “17 m/s”. 5 + 12.'
        },
        {
            question: 'A body dropped from rest reaches 30 m/s after:',
            options: ['30 s', '3 s', '0.3 s', '300 s'],
            correct: 1,
            explanation: 'The answer is “3 s”. t = v ÷ g.'
        },
        {
            question: 'Area under a v–t triangle of base 6 s and height 10 m/s:',
            options: ['30 m', '60 m', '16 m', '3 m'],
            correct: 0,
            explanation: 'The answer is “30 m”. ½ × 6 × 10.'
        },
        {
            question: 'Braking distance depends strongly on:',
            options: ['Driver’s height', 'Colour of car', 'Initial speed', 'Radio volume'],
            correct: 2,
            explanation: 'The answer is “Initial speed”. It varies with u².'
        },
        {
            question: 'In free fall without air resistance, heavy and light bodies:',
            options: ['Heavy ones fall faster', 'Light ones fall faster', 'Fall with the same acceleration', 'Do not fall'],
            correct: 2,
            explanation: 'The answer is “Fall with the same acceleration”. All accelerate at g.'
        }
    ]
},
{
    name: '1.1 Summary: Linear Motion',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.1 Linear Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🧾 Summary — Linear Motion</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Straight-line motion can be fully described using displacement, velocity, acceleration and time — through numbers, graphs and the equations of motion — allowing us to predict where a moving body will be and how quickly it can stop.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Scalars have size only; vectors have size and direction.</li>
    <li>Velocity is the rate of change of displacement; acceleration is the rate of change of velocity.</li>
    <li>On s–t graphs, gradient = velocity; on v–t graphs, gradient = acceleration and area = displacement.</li>
    <li>A 50 Hz ticker-timer marks dots every 0.02 s.</li>
    <li>The equations of motion apply when acceleration is uniform.</li>
    <li>Freely falling bodies accelerate at about 10 m/s².</li>
    <li>Stopping distance = thinking distance + braking distance.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Quantities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance, displacement, speed, velocity, acceleration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">÷ 3.6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s–t, v–t graphs and ticker-tape</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slope and area</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations of motion, free fall, stopping distance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">List u, v, a, s, t</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration on a runway</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tape charts</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scalar</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vector</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">displacement</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">velocity</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">acceleration</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">deceleration</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">gradient</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">tick</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">tape chart</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">free fall</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">g</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">thinking distance</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">braking distance</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From athletics to road safety, describing motion accurately keeps people safe and improves performance.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Newton’s Laws of Motion explains why bodies move as they do.</div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ distinguish scalars and vectors</p>
    <p style="margin:6px 0;">✔️ calculate speed, velocity and acceleration</p>
    <p style="margin:6px 0;">✔️ interpret motion graphs and ticker-tape</p>
    <p style="margin:6px 0;">✔️ apply the equations of motion</p>
    <p style="margin:6px 0;">✔️ analyse free fall and stopping distance</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is that motion can be:',
            options: ['Never measured', 'Described and predicted using quantities, graphs and equations', 'Only guessed', 'Only described in words'],
            correct: 1,
            explanation: 'The answer is “Described and predicted using quantities, graphs and equations”. Kinematics.'
        },
        {
            question: 'Which lesson covered ticker-tape?',
            options: ['1.1.1', '1.1.3', '1.2.1', '1.1.2'],
            correct: 3,
            explanation: 'The answer is “1.1.2”. Graphs and ticker-timer.'
        },
        {
            question: 'Which lesson covered free fall?',
            options: ['1.1.1', '1.1.2', '1.2.2', '1.1.3'],
            correct: 3,
            explanation: 'The answer is “1.1.3”. Equations of motion.'
        },
        {
            question: 'What comes next?',
            options: ['1.2 Newton’s Laws of Motion', '2.1 Waves', '1.1 again', '3.1 Electricity'],
            correct: 0,
            explanation: 'The answer is “1.2 Newton’s Laws of Motion”. Forces explain motion.'
        },
        {
            question: 'The area under a v–t graph gives:',
            options: ['Acceleration', 'Displacement', 'Force', 'Time'],
            correct: 1,
            explanation: 'The answer is “Displacement”. Velocity × time.'
        }
    ]
},
{
    name: '1.2.1 Newton’s Laws of Motion: Newton’s First Law and Inertia',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Newton’s First Law and Inertia</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the meaning of force, balanced and unbalanced forces, resultant force, free-body diagrams, Newton’s first law of motion, inertia and its link to mass, and how seat belts and headrests protect passengers.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Passengers lurch forward when a matatu brakes suddenly and backwards when it speeds off. Newton’s first law explains these everyday experiences and is the reason seat belts are required by law.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚌 Sudden braking</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🪢 Seat belts</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏏 Shaking water off clothes</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧺 Loads on lorries</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Spacecraft</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛞 Skidding vehicles</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#fff3e0;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State and explain Newton’s three laws of motion.</li>
    <li>Investigate the relationship between force, mass and acceleration.</li>
    <li>Calculate momentum and impulse.</li>
    <li>Apply the law of conservation of momentum to collisions and explosions.</li>
    <li>Explain safety devices using Newton’s laws.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fff3e0;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define force and resultant force.</li>
    <li>Draw free-body diagrams.</li>
    <li>State Newton’s first law.</li>
    <li>Explain inertia.</li>
    <li>Relate inertia to safety.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">❓ Key inquiry question:</strong> How do forces change motion?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">🧰 What you already know:</strong> Lesson 1.1 linear motion and Grade 10 forces and moments.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>force</strong> is a push or pull that can change the speed, direction or shape of a body. When several forces act, their combined effect is the <strong>resultant force</strong>. If the forces are <strong>balanced</strong>, the resultant is zero; if <strong>unbalanced</strong>, there is a resultant that changes the motion.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 280" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="220" y="100" width="160" height="60" rx="10" fill="#2a1708" stroke="#ffb74d" stroke-width="2"/><circle cx="255" cy="165" r="14" fill="#475569"/><circle cx="345" cy="165" r="14" fill="#475569"/><line x1="40" y1="180" x2="560" y2="180" stroke="#94a3b8" stroke-width="2"/><line x1="380" y1="130" x2="490.0" y2="130.0" stroke="#22c55e" stroke-width="3"/><polygon points="500,130 490.0,124.0 490.0,136.0" fill="#22c55e"/><text x="440" y="118" fill="#86efac" font-size="12">driving force</text><text x="440" y="152" fill="#86efac" font-size="12">3 000 N</text><line x1="220" y1="130" x2="130.0" y2="130.0" stroke="#f87171" stroke-width="3"/><polygon points="120,130 130.0,136.0 130.0,124.0" fill="#f87171"/><text x="20" y="120" fill="#fca5a5" font-size="12">friction + drag</text><text x="20" y="136" fill="#fca5a5" font-size="12">1 000 N</text><line x1="300" y1="160" x2="300.0" y2="235.0" stroke="#93c5fd" stroke-width="3"/><polygon points="300,245 306.0,235.0 294.0,235.0" fill="#93c5fd"/><text x="310" y="240" fill="#93c5fd" font-size="12">weight</text><line x1="300" y1="100" x2="300.0" y2="30.0" stroke="#fde68a" stroke-width="3"/><polygon points="300,20 294.0,30.0 306.0,30.0" fill="#fde68a"/><text x="310" y="30" fill="#fde68a" font-size="12">normal reaction</text><text x="330" y="272" fill="#fde68a" font-size="12">Resultant = 3 000 − 1 000 = 2 000 N forward</text>
    </svg>
    </div>
    <p><strong>Newton’s first law:</strong> a body continues in its state of rest or of uniform motion in a straight line unless acted on by an external resultant force.</p>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">🗣️ In Simple Words</p>
    <div>No resultant force → no change in motion. A moving body keeps moving; a resting body stays at rest.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 Scientific Background</h3>
    <p><strong>Inertia</strong> is the tendency of a body to resist a change in its state of rest or motion. The greater the mass, the greater the inertia — a loaded lorry is harder to start and to stop than a bicycle. Because of inertia, passengers keep moving forward when a vehicle stops suddenly; seat belts supply the force needed to stop them safely with the vehicle. Headrests protect the neck when a vehicle is hit from behind and the body is pushed forward while the head tends to stay behind.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Force</strong>
    </p>
    <p style="margin:6px 0;">A push or pull that changes motion or shape.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> F (N)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Resultant force</strong>
    </p>
    <p style="margin:6px 0;">Single force with the same effect as all the forces acting.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Balanced forces</strong>
    </p>
    <p style="margin:6px 0;">Forces whose resultant is zero.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Free-body diagram</strong>
    </p>
    <p style="margin:6px 0;">Diagram showing all forces acting on one body.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Inertia</strong>
    </p>
    <p style="margin:6px 0;">Resistance of a body to a change in its motion.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Newton</strong>
    </p>
    <p style="margin:6px 0;">SI unit of force.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> N</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">1. Resultant Force and Free-Body Diagrams</h3>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 1: Finding the resultant</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car’s engine provides a forward force of 3 000 N while friction and air resistance total 1 000 N. Find the resultant force. What happens to the car?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Forces in opposite directions subtract.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Resultant</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 000 − 1 000 = 2 000 N forward</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Effect</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The car accelerates forwards.</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 2 000 N forward; the car accelerates.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 2: Constant velocity</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A cyclist moves at a steady 6 m/s on a level road. The forward force is 40 N. What is the total resistive force?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Constant velocity means zero resultant.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: First law</strong>
    </p>
    <div style="margin:6px 0 0 34px;">No change in motion → balanced forces</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Resistance</strong>
    </p>
    <div style="margin:6px 0 0 34px;">40 N backwards</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 40 N</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Thinking a force is needed to keep a body moving. A force is needed only to change motion; on a frictionless surface a moving body would keep moving forever.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">2. Inertia in Daily Life</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Explanation using inertia</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Passengers lurch forward when a bus brakes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Their bodies tend to keep moving forward</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Passengers lean back when a bus starts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Their bodies tend to stay at rest</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dust leaves a carpet when it is beaten</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The carpet moves but the dust tends to stay at rest</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A coin on a card drops into a glass when the card is flicked</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The coin stays at rest while the card moves away</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unsecured loads fall off a lorry when it turns</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The load tends to keep moving in a straight line</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fff3e0;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State Newton’s first law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A body remains at rest or in uniform motion in a straight line unless acted on by a resultant external force.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which has more inertia: a bicycle or a lorry?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A lorry — it has more mass.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why do seat belts save lives?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">They provide the force that stops passengers moving forward when the vehicle stops.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use a soft cushion or tray when demonstrating inertia with coins and cards.</li>
    <li>Do not flick objects towards other people.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Drawing free-body diagrams</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating resultant forces</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observing and explaining</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying concepts to safety</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Demonstrating Inertia</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To demonstrate inertia using everyday objects.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Glass or beaker</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stiff card</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Coin</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stack of five wooden blocks or coins</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Trolley with a block on top</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Barrier</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">None</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep glassware on a stable bench.</li>
    <li>Roll the trolley slowly into the barrier.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Place the card on the glass and the coin on the card. Flick the card sharply sideways and observe the coin.</li>
    <li>Strike the bottom block of a stack quickly with a ruler and observe the others.</li>
    <li>Place a block loosely on a trolley and roll the trolley into a barrier; observe the block.</li>
    <li>Repeat the trolley test with the block tied on with a rubber band.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Demonstration</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Observation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Explanation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coin and card</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stack of blocks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Loose block on trolley</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tied block on trolley</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why does the coin fall into the glass?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Its inertia keeps it at rest while the card moves away; gravity then pulls it down.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What does the rubber band represent?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A seat belt.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Bodies resist changes in motion; restraints supply the force that changes a passenger’s motion safely.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Inertia depends on mass; a quick force acts too briefly to move the coin or upper blocks.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Flicking the card too slowly.</li>
    <li>Uneven surface for the trolley.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Seat belts, child car seats and cargo straps all use these ideas.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Draw free-body diagrams for (a) a book resting on a table (b) a parachutist falling at constant velocity (c) a car accelerating. For each, state whether the forces are balanced.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffb74d;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Physics in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Seat belts and helmets are required by NTSA road rules.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Less braking and acceleration saves fuel.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Vehicle designers test crumple zones and restraints.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> A body moves at constant velocity. What is the resultant force?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: First law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Zero.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is the SI unit of force?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: After Isaac Newton.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Newton (N).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why is it harder to stop a loaded lorry than an empty one?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Mass.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">It has more mass and so more inertia.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List five examples of inertia at home or on the road.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Draw free-body diagrams for a ball thrown upwards at its highest point.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Make a short skit showing why seat belts are needed.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Watch a crash-test video and explain what happens to the dummies.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain why passengers fall forward when a bus brakes suddenly.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Their bodies tend to continue moving forward (inertia) while the bus stops.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A box is pushed with 50 N against friction of 20 N. Find the resultant.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">30 N in the direction of the push.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why must loads on lorries be tied down?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Because of inertia, they continue moving when the lorry turns or stops.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why must the card be flicked quickly?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">So friction acts on the coin for too short a time to move it.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How does a spacecraft keep moving in space without engines?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">With no resultant force, it continues in uniform motion (first law).</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🧠 Lesson Summary</h3>
    <p>A force is a push or pull that can change motion or shape. The resultant of balanced forces is zero; unbalanced forces produce a resultant that changes motion. Newton’s first law: a body stays at rest or in uniform straight-line motion unless a resultant external force acts. Inertia is resistance to changes in motion and increases with mass; seat belts and headrests protect passengers from the effects of inertia.</p>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Force and resultant.</li>
    <li>Free-body diagrams.</li>
    <li>First law.</li>
    <li>Inertia.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Zero resultant → no change in motion.</li>
    <li>More mass → more inertia.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking motion needs a force.</li>
    <li>Missing forces in diagrams.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw arrows from the body.</li>
    <li>Label every force.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #fb8c00;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the word “inertia” in explanations.</li>
    <li>State the law fully.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining motion.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Road safety.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Skits.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Buckling up is physics in action.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain three examples of inertia.</li>
    <li>Draw a free-body diagram for a hanging lamp.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I always wear a seat belt?</li>
    <li>Where have I felt inertia?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Inertia</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Resistance to change in motion.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Resultant</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Net force.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Balanced</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zero resultant.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Free-body diagram</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forces on one body.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can find resultant forces.</p>
    <p style="margin:6px 0;">☐ I can draw free-body diagrams.</p>
    <p style="margin:6px 0;">☐ I can state the first law.</p>
    <p style="margin:6px 0;">☐ I can explain inertia.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Newton’s first law is also called the law of:',
            options: ['Momentum', 'Gravitation', 'Inertia', 'Action'],
            correct: 2,
            explanation: 'The answer is “Inertia”. It describes inertia.'
        },
        {
            question: 'When forces on a body are balanced, the body:',
            options: ['Must accelerate', 'Must stop', 'Remains at rest or moves at constant velocity', 'Changes direction'],
            correct: 2,
            explanation: 'The answer is “Remains at rest or moves at constant velocity”. No resultant force.'
        },
        {
            question: 'A forward force of 500 N and friction of 200 N give a resultant of:',
            options: ['700 N', '300 N forward', '200 N backward', 'Zero'],
            correct: 1,
            explanation: 'The answer is “300 N forward”. 500 − 200.'
        },
        {
            question: 'Inertia depends on:',
            options: ['Colour', 'Temperature', 'Mass', 'Shape only'],
            correct: 2,
            explanation: 'The answer is “Mass”. More mass, more inertia.'
        },
        {
            question: 'Passengers lurch forward when a bus brakes because of:',
            options: ['Gravity', 'Friction only', 'Air pressure', 'Inertia'],
            correct: 3,
            explanation: 'The answer is “Inertia”. They tend to keep moving.'
        },
        {
            question: 'A body moving at constant velocity has a resultant force of:',
            options: ['Zero', 'Its weight', 'Infinite', 'Its mass'],
            correct: 0,
            explanation: 'The answer is “Zero”. First law.'
        },
        {
            question: 'Seat belts protect passengers by:',
            options: ['Providing a force to stop them with the car', 'Increasing their speed', 'Reducing their mass', 'Removing inertia'],
            correct: 0,
            explanation: 'They change the passenger’s motion safely.'
        },
        {
            question: 'The SI unit of force is the:',
            options: ['Joule', 'Newton', 'Watt', 'Pascal'],
            correct: 1,
            explanation: 'The answer is “Newton”. N.'
        },
        {
            question: 'A coin on a card falls into a glass when the card is flicked because:',
            options: ['The card pulls it', 'The coin’s inertia keeps it at rest', 'Air pushes it', 'The glass attracts it'],
            correct: 1,
            explanation: 'The answer is “The coin’s inertia keeps it at rest”. Inertia.'
        },
        {
            question: 'Headrests protect mainly against injury when a car is:',
            options: ['Parked', 'Turning slowly', 'Being refuelled', 'Hit from behind'],
            correct: 3,
            explanation: 'The answer is “Hit from behind”. The head tends to stay behind.'
        }
    ]
},
{
    name: '1.2.2 Newton’s Laws of Motion: Newton’s Second Law, F = ma, Momentum and Impulse',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Newton’s Second Law, F = ma, Momentum and Impulse</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the meaning of momentum, Newton’s second law, how it leads to F = ma, the definition of the newton, impulse and its link to change in momentum, and how crumple zones, airbags and helmets reduce injury.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> F = ma lets engineers calculate the forces in cars, aircraft and bridges. Understanding impulse explains why landing with bent knees, catching an egg gently and wearing a helmet all reduce harm.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Crumple zones</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎈 Airbags</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⛑️ Helmets</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Kicking a ball</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏏 Follow-through in sports</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Rocket engines</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#fff3e0;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State and explain Newton’s three laws of motion.</li>
    <li>Investigate the relationship between force, mass and acceleration.</li>
    <li>Calculate momentum and impulse.</li>
    <li>Apply the law of conservation of momentum to collisions and explosions.</li>
    <li>Explain safety devices using Newton’s laws.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fff3e0;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define momentum.</li>
    <li>State Newton’s second law.</li>
    <li>Apply F = ma.</li>
    <li>Define and calculate impulse.</li>
    <li>Explain safety devices.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">❓ Key inquiry question:</strong> How do forces change motion?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">🧰 What you already know:</strong> Lesson 1.2.1 and equations of motion (1.1.3).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Momentum</strong> is the product of mass and velocity: <strong>p = mv</strong>, measured in kg m/s. It is a vector. <strong>Newton’s second law:</strong> the rate of change of momentum of a body is directly proportional to the resultant force acting on it and takes place in the direction of the force.</p>
    <p>For a constant mass this gives <strong>F = ma</strong>. One <strong>newton</strong> is the force that gives a mass of 1 kg an acceleration of 1 m/s².</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 600 230" width="600" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="40" y1="190" x2="260" y2="190" stroke="#94a3b8" stroke-width="2"/><line x1="40" y1="190" x2="40" y2="30" stroke="#94a3b8" stroke-width="2"/><text x="260" y="208" fill="#fff3e0" font-size="11" text-anchor="end">force F</text><text x="40" y="22" fill="#fff3e0" font-size="11">acceleration a</text><line x1="40" y1="190" x2="240" y2="50" stroke="#fb923c" stroke-width="3"/><text x="150" y="226" fill="#fde68a" font-size="12" text-anchor="middle">a ∝ F (mass constant)</text><line x1="330" y1="190" x2="550" y2="190" stroke="#94a3b8" stroke-width="2"/><line x1="330" y1="190" x2="330" y2="30" stroke="#94a3b8" stroke-width="2"/><text x="550" y="208" fill="#fff3e0" font-size="11" text-anchor="end">1 ÷ mass</text><text x="330" y="22" fill="#fff3e0" font-size="11">acceleration a</text><line x1="330" y1="190" x2="530" y2="60" stroke="#fb923c" stroke-width="3"/><text x="440" y="226" fill="#fde68a" font-size="12" text-anchor="middle">a ∝ 1/m (force constant)</text>
    </svg>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Bigger force → bigger acceleration. Bigger mass → smaller acceleration. F = ma.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 Scientific Background</h3>
    <p>From F = (mv − mu) ÷ t we get <strong>Ft = mv − mu</strong>. The product Ft is called the <strong>impulse</strong>; it equals the change in momentum. For a fixed change in momentum, increasing the time of impact reduces the force. Crumple zones, airbags, helmets, padded dashboards, soft landing mats and bending the knees when landing all increase the stopping time and so reduce the force on the body. Weight is also a force given by F = ma: W = mg.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Momentum</strong>
    </p>
    <p style="margin:6px 0;">Product of mass and velocity.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> p = mv (kg m/s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Newton’s second law</strong>
    </p>
    <p style="margin:6px 0;">Rate of change of momentum ∝ resultant force.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Newton</strong>
    </p>
    <p style="margin:6px 0;">Force giving 1 kg an acceleration of 1 m/s².</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> N</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Impulse</strong>
    </p>
    <p style="margin:6px 0;">Force × time; equals change in momentum.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> Ft (N s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Crumple zone</strong>
    </p>
    <p style="margin:6px 0;">Part of a car designed to collapse slowly in a crash.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Weight</strong>
    </p>
    <p style="margin:6px 0;">Force of gravity on a mass.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#fff3e0;">📏 Symbol / unit:</span> W = mg</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">1. F = ma</h3>
    <div style="background:#0b1a2e;border:1px solid #fb8c00;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#ffe0b2;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Newton’s second law</p>
    <div style="color:#fff3e0;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">F = ma;  F = (mv − mu) ÷ t;  W = mg</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Resultant force equals mass × acceleration (or rate of change of momentum).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> F in N, m in kg, a in m/s²</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> A resultant force acts.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using one force instead of the resultant.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Always find the resultant first.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 1: Accelerating car</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car of mass 1 000 kg has a driving force of 3 000 N and resistive forces of 1 000 N. Find its acceleration.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Resultant first.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Resultant</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 000 − 1 000 = 2 000 N</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 000 ÷ 1 000 = 2 m/s²</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 2 m/s²</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 2: Braking force</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 1 200 kg car moving at 20 m/s is brought to rest in 4 s. Find the braking force.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Find a, then F.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(0 − 20) ÷ 4 = −5 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: F</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 200 × (−5) = −6 000 N (opposite to motion)</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 6 000 N</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">2. Momentum and Impulse</h3>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 3: Momentum</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Find the momentum of (a) a 70 kg athlete running at 8 m/s (b) a 0.45 kg football at 20 m/s.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> p = mv.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: (a)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">70 × 8 = 560 kg m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: (b)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.45 × 20 = 9 kg m/s</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 560 kg m/s; 9 kg m/s</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 4: Impulse on a ball</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 0.45 kg ball at rest is kicked and leaves the foot at 20 m/s. The foot is in contact for 0.05 s. Find the impulse and the average force.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Impulse = change in momentum.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Impulse</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.45 × 20 − 0 = 9 N s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Force</strong>
    </p>
    <div style="margin:6px 0 0 34px;">9 ÷ 0.05 = 180 N</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> Impulse 9 N s; force 180 N</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 5: Why airbags help</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 60 kg passenger moving at 15 m/s is stopped in a crash. Compare the force if stopped in 0.02 s (hitting the dashboard) and in 0.3 s (airbag).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Same change in momentum; different time.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Change in momentum</strong>
    </p>
    <div style="margin:6px 0 0 34px;">60 × 15 = 900 kg m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Dashboard</strong>
    </p>
    <div style="margin:6px 0 0 34px;">900 ÷ 0.02 = 45 000 N</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: Airbag</strong>
    </p>
    <div style="margin:6px 0 0 34px;">900 ÷ 0.3 = 3 000 N</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> The airbag reduces the force fifteen times.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fff3e0;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Write the formula for momentum.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">p = mv.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What force gives a 5 kg mass an acceleration of 3 m/s²?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">15 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why do athletes bend their knees when landing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">To increase the stopping time and reduce the force.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep fingers clear when trolleys collide or are stopped.</li>
    <li>Use soft materials when dropping objects to study impact.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying F = ma</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating momentum and impulse</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Explaining safety design</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analysing graphs</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: The Egg Drop Challenge — Impulse</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To show how increasing the stopping time reduces the impact force.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Raw eggs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plastic bags</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Paper, straws, sponges, cotton wool</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Measuring tape</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Newspaper for the landing area</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Drop from a fixed safe height with the teacher.</li>
    <li>Clean up broken eggs and wash hands.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Design a container to protect an egg dropped from 2 m.</li>
    <li>Build the container using the materials provided.</li>
    <li>Drop each container from 2 m onto the newspaper.</li>
    <li>Record whether the egg survived.</li>
    <li>Explain your design using impulse.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Group</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Design features</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Egg survived?</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Explanation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
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
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why did soft packing protect the egg?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">It increased the stopping time, reducing the force.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does the height matter?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A greater height gives a greater speed and momentum.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Increasing the time of impact reduces the force for the same change in momentum.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> F = change in momentum ÷ time.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Different drop heights.</li>
    <li>Containers of very different masses.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Helmets and car crumple zones use the same principle.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>An egg of mass 0.06 kg hits the floor at 6 m/s. Calculate the force if it stops in 0.002 s (bare floor) and in 0.06 s (sponge). Explain the result.</p>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 6: Egg forces</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Calculate both forces.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Change in momentum = 0.36 kg m/s.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Bare floor</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.36 ÷ 0.002 = 180 N</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Sponge</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.36 ÷ 0.06 = 6 N</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 180 N vs 6 N — the sponge reduces the force thirty times.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffb74d;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Physics in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Helmets reduce head injuries for boda boda riders.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Lighter vehicles need less force and fuel to accelerate.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Car makers design crumple zones and airbags using impulse.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Unit of impulse?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Force × time.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">N s (same as kg m/s).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Weight of a 50 kg learner (g = 10 N/kg)?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: W = mg.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">500 N.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Acceleration of 2 kg under 10 N?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: a = F ÷ m.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">5 m/s².</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Calculate the momentum of five moving things around you.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Explain to your partner why a cricket player draws the hands back when catching.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Run the egg drop challenge.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research how crumple zones are tested.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State Newton’s second law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Rate of change of momentum is proportional to the resultant force and in its direction.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A 1 500 kg car accelerates from 10 m/s to 25 m/s in 5 s. Find the resultant force.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">a = 3 m/s²; F = 4 500 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A 0.2 kg ball hits a wall at 10 m/s and bounces back at 8 m/s. Find the change in momentum.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">0.2 × (8 − (−10)) = 3.6 kg m/s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why drop all containers from the same height?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">So each egg hits with the same speed.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is it dangerous to carry heavy loads on a boda boda?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Greater mass gives greater momentum, so stopping needs more force and distance.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Momentum p = mv (kg m/s). Newton’s second law: the rate of change of momentum is proportional to the resultant force; for constant mass F = ma. One newton gives 1 kg an acceleration of 1 m/s². Impulse Ft = mv − mu. Increasing impact time reduces the force, which is why airbags, crumple zones, helmets and bent knees reduce injury.</p>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Momentum.</li>
    <li>Second law.</li>
    <li>F = ma.</li>
    <li>Impulse.</li>
    <li>Safety devices.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>p = mv.</li>
    <li>F = ma.</li>
    <li>Ft = Δp.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ignoring direction in momentum changes.</li>
    <li>Using one force instead of resultant.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Take one direction as positive.</li>
    <li>Convert grams to kg.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #fb8c00;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show substitution.</li>
    <li>Explain safety with impulse.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Design challenge.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Egg container.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Citizenship</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Safety devices.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety and security</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every airbag and helmet is designed using impulse.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Calculate the force needed to stop a 2 000 kg lorry from 15 m/s in 6 s.</li>
    <li>Explain how a crumple zone works.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How can I use impulse to stay safe in sports?</li>
    <li>Which calculation was hardest?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Momentum</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mass × velocity.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Impulse</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Force × time.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Newton</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unit of force.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Crumple zone</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collapsing car section.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can calculate momentum.</p>
    <p style="margin:6px 0;">☐ I can apply F = ma.</p>
    <p style="margin:6px 0;">☐ I can calculate impulse.</p>
    <p style="margin:6px 0;">☐ I can explain safety devices.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Momentum is calculated as:',
            options: ['Mass × acceleration', 'Mass × velocity', 'Force × distance', 'Mass ÷ volume'],
            correct: 1,
            explanation: 'The answer is “Mass × velocity”. p = mv.'
        },
        {
            question: 'The unit of momentum is:',
            options: ['kg m/s', 'N', 'J', 'm/s²'],
            correct: 0,
            explanation: 'The answer is “kg m/s”. kg × m/s.'
        },
        {
            question: 'A resultant force of 20 N on a 4 kg mass gives an acceleration of:',
            options: ['80 m/s²', '24 m/s²', '5 m/s²', '0.2 m/s²'],
            correct: 2,
            explanation: 'The answer is “5 m/s²”. 20 ÷ 4.'
        },
        {
            question: 'One newton gives a 1 kg mass an acceleration of:',
            options: ['10 m/s²', '9.8 m/s²', '0.1 m/s²', '1 m/s²'],
            correct: 3,
            explanation: 'The answer is “1 m/s²”. Definition.'
        },
        {
            question: 'Impulse equals:',
            options: ['Mass × acceleration', 'Work done', 'Power', 'Change in momentum'],
            correct: 3,
            explanation: 'The answer is “Change in momentum”. Ft = mv − mu.'
        },
        {
            question: 'A 0.5 kg ball kicked from rest to 20 m/s receives an impulse of:',
            options: ['40 N s', '10 N s', '20 N s', '0.5 N s'],
            correct: 1,
            explanation: 'The answer is “10 N s”. 0.5 × 20.'
        },
        {
            question: 'Airbags reduce injury by:',
            options: ['Increasing the stopping time', 'Increasing speed', 'Increasing mass', 'Increasing momentum'],
            correct: 0,
            explanation: 'The answer is “Increasing the stopping time”. Smaller force for same Δp.'
        },
        {
            question: 'The weight of a 60 kg person (g = 10 N/kg) is:',
            options: ['60 N', '6 N', '600 N', '6 000 N'],
            correct: 2,
            explanation: 'The answer is “600 N”. W = mg.'
        },
        {
            question: 'A 1 200 kg car stopped from 20 m/s in 4 s needs a force of:',
            options: ['4 800 N', '6 000 N', '24 000 N', '300 N'],
            correct: 1,
            explanation: 'The answer is “6 000 N”. 1 200 × 5.'
        },
        {
            question: 'For the same force, doubling the mass makes the acceleration:',
            options: ['Double', 'The same', 'Half', 'Four times'],
            correct: 2,
            explanation: 'The answer is “Half”. a ∝ 1/m.'
        }
    ]
},
{
    name: '1.2.3 Newton’s Laws of Motion: Newton’s Third Law and Conservation of Momentum',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Newton’s Third Law and Conservation of Momentum</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn Newton’s third law and how to identify action–reaction pairs, the law of conservation of momentum, and how to apply it to collisions (elastic and inelastic) and explosions such as the recoil of a gun and rocket propulsion.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Walking, swimming, rowing, jet engines and rockets all depend on Newton’s third law. Conservation of momentum helps police reconstruct road accidents and engineers design safer vehicles.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚶 Walking</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏊 Swimming</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚣 Rowing</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Rockets</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔫 Recoil of guns</span><span style="background:#0b1a2e;border:1px solid #ffe0b2;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Accident reconstruction</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#fff3e0;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State and explain Newton’s three laws of motion.</li>
    <li>Investigate the relationship between force, mass and acceleration.</li>
    <li>Calculate momentum and impulse.</li>
    <li>Apply the law of conservation of momentum to collisions and explosions.</li>
    <li>Explain safety devices using Newton’s laws.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fff3e0;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State Newton’s third law.</li>
    <li>Identify action–reaction pairs.</li>
    <li>State the law of conservation of momentum.</li>
    <li>Solve collision and explosion problems.</li>
    <li>Explain rocket propulsion.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">❓ Key inquiry question:</strong> How do forces change motion?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#fff3e0;">🧰 What you already know:</strong> Lessons 1.2.1 and 1.2.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Newton’s third law:</strong> if body A exerts a force on body B, then body B exerts an equal and opposite force on body A. These two forces form an <strong>action–reaction pair</strong>. They act on <strong>different bodies</strong>, so they do not cancel each other.</p>
    <p><strong>Law of conservation of momentum:</strong> when no external resultant force acts on a system, the total momentum before an interaction equals the total momentum after it.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 230" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="160" y="24" fill="#fde68a" font-size="13" text-anchor="middle">Before</text><text x="480" y="24" fill="#fde68a" font-size="13" text-anchor="middle">After (stick together)</text><line x1="320" y1="10" x2="320" y2="220" stroke="#475569" stroke-dasharray="5,5"/><rect x="30" y="80" width="90" height="50" rx="8" fill="#2a1708" stroke="#ffb74d" stroke-width="2"/><text x="75" y="110" fill="#fff3e0" font-size="13" text-anchor="middle">2 kg</text><line x1="122" y1="105" x2="170.0" y2="105.0" stroke="#22c55e" stroke-width="3"/><polygon points="180,105 170.0,99.0 170.0,111.0" fill="#22c55e"/><text x="150" y="95" fill="#86efac" font-size="12" text-anchor="middle">6 m/s</text><rect x="200" y="80" width="90" height="50" rx="8" fill="#2a1708" stroke="#ffb74d" stroke-width="2"/><text x="245" y="110" fill="#fff3e0" font-size="13" text-anchor="middle">1 kg</text><text x="245" y="150" fill="#ffe0b2" font-size="12" text-anchor="middle">at rest</text><rect x="380" y="80" width="180" height="50" rx="8" fill="#2a1708" stroke="#ffb74d" stroke-width="2"/><text x="470" y="110" fill="#fff3e0" font-size="13" text-anchor="middle">3 kg</text><line x1="562" y1="105" x2="610.0" y2="105.0" stroke="#22c55e" stroke-width="3"/><polygon points="620,105 610.0,99.0 610.0,111.0" fill="#22c55e"/><text x="590" y="95" fill="#86efac" font-size="12" text-anchor="middle">v = ?</text><text x="160" y="190" fill="#fff3e0" font-size="12" text-anchor="middle">p = 2 × 6 + 1 × 0 = 12 kg m/s</text><text x="480" y="190" fill="#fff3e0" font-size="12" text-anchor="middle">3v = 12, so v = 4 m/s</text><text x="320" y="222" fill="#fde68a" font-size="12" text-anchor="middle">Total momentum before = total momentum after</text>
    </svg>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Push on something and it pushes back just as hard. In any crash or explosion, the total momentum stays the same.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔭 Scientific Background</h3>
    <p>In a collision, each body exerts an equal and opposite force on the other for the same time, so the impulses are equal and opposite and the total momentum is unchanged. In an <strong>elastic collision</strong>, kinetic energy is also conserved (e.g. ideal snooker balls); in an <strong>inelastic collision</strong>, some kinetic energy changes to heat, sound and deformation (e.g. car crashes). In an <strong>explosion</strong>, bodies start at rest (total momentum zero) and fly apart with equal and opposite momenta — which explains the recoil of a gun and the thrust of a rocket, which pushes hot gases backwards and is pushed forwards.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Action–reaction pair</strong>
    </p>
    <p style="margin:6px 0;">Equal and opposite forces acting on two different bodies.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">System</strong>
    </p>
    <p style="margin:6px 0;">A group of interacting bodies.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Conservation of momentum</strong>
    </p>
    <p style="margin:6px 0;">Total momentum stays constant without external forces.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Elastic collision</strong>
    </p>
    <p style="margin:6px 0;">Collision in which kinetic energy is conserved.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Inelastic collision</strong>
    </p>
    <p style="margin:6px 0;">Collision in which kinetic energy is lost.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Bodies sticking together</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffb74d;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Recoil</strong>
    </p>
    <p style="margin:6px 0;">Backward motion of a gun when fired.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em></em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">1. Action and Reaction</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Action</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reaction</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Foot pushes ground backwards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ground pushes foot forwards (walking)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Swimmer pushes water backwards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Water pushes swimmer forwards</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rocket pushes exhaust gases down</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gases push the rocket up</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Earth pulls you down (weight)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You pull the Earth up</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gun pushes bullet forwards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bullet pushes gun backwards (recoil)</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Thinking the weight of a book and the normal reaction from the table are an action–reaction pair. Both act on the book; the real pair of the weight is the book’s pull on the Earth.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">2. Collisions and Explosions</h3>
    <div style="background:#0b1a2e;border:1px solid #fb8c00;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#ffe0b2;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Conservation of momentum</p>
    <div style="color:#fff3e0;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Total momentum before = total momentum after.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> kg m/s</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> No external resultant force.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Ignoring the sign of velocities in opposite directions.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Choose one direction as positive.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 1: Bodies sticking together</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 2 kg trolley moving at 6 m/s collides with a stationary 1 kg trolley and they move off together. Find their common velocity.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Total momentum before = after.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Before</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 × 6 + 1 × 0 = 12 kg m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: After</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(2 + 1)v = 12</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: v</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 m/s</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 4 m/s in the original direction</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 2: Head-on collision</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 1 000 kg car moving east at 20 m/s collides head-on with a 1 500 kg car moving west at 10 m/s. They lock together. Find their velocity just after.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Take east as positive.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Before</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 000 × 20 + 1 500 × (−10) = 20 000 − 15 000 = 5 000 kg m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: After</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 500 v = 5 000</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: v</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 m/s east</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 2 m/s east</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 3: Recoil</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A 4 kg rifle fires a 0.02 kg bullet at 400 m/s. Find the recoil velocity of the rifle.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Total momentum before is zero.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Bullet momentum</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.02 × 400 = 8 kg m/s forward</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: Rifle</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 × v = −8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#fff3e0;">Step 3: v</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−2 m/s (2 m/s backwards)</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 2 m/s backwards</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#fff3e0;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State Newton’s third law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">For every action there is an equal and opposite reaction acting on a different body.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why don’t action and reaction cancel out?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">They act on different bodies.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A 3 kg body at 4 m/s hits and sticks to a 1 kg body at rest. Find v.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">3 m/s.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use collision trolleys at low speeds and keep hands away from the impact point.</li>
    <li>Use only water or air in rocket demonstrations, outdoors, under supervision, aimed away from people.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Identifying force pairs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying conservation laws</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using signs for direction</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Experimental verification</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Balloon Rocket</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To demonstrate Newton’s third law and momentum using a balloon rocket.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Long balloon</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Drinking straw</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">String (5 m)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatch</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">None</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do not over-inflate balloons.</li>
    <li>Keep the string at a safe height away from eyes.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Thread the string through the straw and tie it tightly between two supports.</li>
    <li>Blow up the balloon, hold the neck closed and tape it to the straw.</li>
    <li>Release the neck and time the balloon’s travel.</li>
    <li>Measure the distance travelled and calculate the average speed.</li>
    <li>Repeat with the balloon blown up to different sizes.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Balloon size</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Distance (m)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Average speed (m/s)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Medium</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What makes the balloon move forward?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Air pushed backwards out of the balloon pushes the balloon forwards (third law).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does a larger balloon travel further?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">More air is expelled, giving a larger total impulse.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The balloon is pushed forward by the reaction to the air it pushes backwards, as in a rocket.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Momentum of air backwards = momentum of balloon forwards.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>String not tight.</li>
    <li>Friction between straw and string.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Rockets and jet engines work in the same way.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Explain why a rocket can accelerate in space where there is no air to push against. Use both Newton’s third law and conservation of momentum.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffb74d;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Physics in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Police use momentum calculations to estimate speeds before road accidents.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Jet engines are designed to give thrust efficiently, saving fuel.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry:</strong> Aerospace engineers design rockets and jet engines.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> When you push a wall with 50 N, what force does the wall exert on you?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Third law.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">50 N in the opposite direction.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Total momentum before an explosion from rest?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Bodies at rest.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Zero.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> In which collision is kinetic energy lost?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Heat and sound.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">An inelastic collision.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>List five action–reaction pairs.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Stand on skateboards (or slippery floor in socks) and push each other gently; observe.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Build and race balloon rockets.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Watch a rocket launch and explain the forces.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the law of conservation of momentum.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Total momentum of a system remains constant if no external resultant force acts.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A 60 kg skater at rest pushes a 40 kg skater who moves off at 3 m/s. Find the first skater’s velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">60v = −120 → v = −2 m/s (2 m/s in opposite direction).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Distinguish elastic and inelastic collisions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Elastic: kinetic energy conserved; inelastic: kinetic energy lost.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why must the string be tight in the balloon rocket?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">So the balloon moves in a straight line with little friction.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does a heavy gun recoil less than a light gun firing the same bullet?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">The same momentum is shared by a larger mass, giving a smaller velocity.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Newton’s third law: forces come in equal and opposite pairs acting on different bodies. The law of conservation of momentum: with no external resultant force, total momentum before = total momentum after. In collisions momentum is conserved; kinetic energy is conserved only in elastic collisions. In explosions, bodies move apart with equal and opposite momenta (recoil, rockets).</p>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Third law.</li>
    <li>Action–reaction pairs.</li>
    <li>Conservation of momentum.</li>
    <li>Collisions.</li>
    <li>Explosions.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pairs act on different bodies.</li>
    <li>Momentum before = after.</li>
    <li>Signs for direction.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Pairing forces on the same body.</li>
    <li>Forgetting negative signs.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw before-and-after diagrams.</li>
    <li>Choose a positive direction.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #fb8c00;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the law before using it.</li>
    <li>Give direction with answers.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Problem solving.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balloon rockets.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group races.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#fff3e0;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and innovation</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every step you take uses Newton’s third law.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A 5 kg ball at 4 m/s hits a 3 kg ball at rest. The 5 kg ball stops. Find the 3 kg ball’s velocity.</li>
    <li>Explain how a jet engine works using the third law.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which law is most useful to me?</li>
    <li>How do I use the third law when walking?</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Action–reaction</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equal, opposite pair.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Elastic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">KE conserved.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Inelastic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">KE lost.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Recoil</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Backward kick.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state the third law.</p>
    <p style="margin:6px 0;">☐ I can identify pairs.</p>
    <p style="margin:6px 0;">☐ I can use conservation of momentum.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Newton’s third law states that for every action there is:',
            options: ['An equal and opposite reaction', 'A larger reaction', 'No reaction', 'A reaction in the same direction'],
            correct: 0,
            explanation: 'The answer is “An equal and opposite reaction”. Equal and opposite.'
        },
        {
            question: 'Action and reaction forces act on:',
            options: ['The same body', 'No body', 'Different bodies', 'Only the Earth'],
            correct: 2,
            explanation: 'The answer is “Different bodies”. So they do not cancel.'
        },
        {
            question: 'When walking, the ground pushes your foot:',
            options: ['Backwards', 'Forwards', 'Downwards', 'Not at all'],
            correct: 1,
            explanation: 'The answer is “Forwards”. Reaction to your push.'
        },
        {
            question: 'Total momentum is conserved when:',
            options: ['No external resultant force acts', 'Friction is large', 'Bodies are heavy', 'Bodies stop'],
            correct: 0,
            explanation: 'The answer is “No external resultant force acts”. Closed system.'
        },
        {
            question: '2 kg at 6 m/s sticks to 1 kg at rest. Common velocity:',
            options: ['6 m/s', '4 m/s', '3 m/s', '2 m/s'],
            correct: 1,
            explanation: 'The answer is “4 m/s”. 12 ÷ 3.'
        },
        {
            question: 'A 4 kg gun fires a 0.02 kg bullet at 400 m/s. Recoil speed:',
            options: ['8 m/s', '0.2 m/s', '20 m/s', '2 m/s'],
            correct: 3,
            explanation: 'The answer is “2 m/s”. 8 ÷ 4.'
        },
        {
            question: 'In an inelastic collision:',
            options: ['Momentum is lost', 'Both are gained', 'Mass changes', 'Kinetic energy is lost'],
            correct: 3,
            explanation: 'The answer is “Kinetic energy is lost”. Some KE becomes heat and sound.'
        },
        {
            question: 'A rocket moves forward because:',
            options: ['It pushes on air', 'Gravity pulls it up', 'It is light', 'It pushes gases backwards'],
            correct: 3,
            explanation: 'The answer is “It pushes gases backwards”. Third law.'
        },
        {
            question: 'Before an explosion from rest, the total momentum is:',
            options: ['Large', 'Zero', 'Negative', 'Equal to mass'],
            correct: 1,
            explanation: 'The answer is “Zero”. Nothing is moving.'
        },
        {
            question: '1 000 kg at 20 m/s east hits 1 500 kg at 10 m/s west; they lock. Velocity:',
            options: ['2 m/s west', '14 m/s east', '2 m/s east', '0'],
            correct: 2,
            explanation: 'The answer is “2 m/s east”. 5 000 ÷ 2 500.'
        }
    ]
},
{
    name: '1.2 Laboratory Activity: Investigating Force, Mass and Acceleration',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🧪 Investigating Force, Mass and Acceleration</h2>
    <p style="font-size:16px;">You will use a trolley, a friction-compensated runway, a ticker-timer and a pulling force to verify Newton’s second law: a ∝ F when mass is constant and a ∝ 1/m when force is constant.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#ffe0b2;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electricity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the correct supply for the ticker-timer.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Falling masses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Place a soft box under hanging masses; keep feet clear.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moving trolley</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use a stop at the end of the runway.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Elastic cords</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not over-stretch; wear goggles.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Verifying F = ma</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To investigate how acceleration depends on force and mass.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Trolleys (identical, stackable)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Runway tilted to compensate for friction</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ticker-timer and tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Identical elastic cords (or pulley and slotted masses)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Metre rule</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fb8c00;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Catch trolleys at the end.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Tilt the runway slightly until a trolley pushed gently moves at constant velocity (friction compensated).</li>
    <li>Pull one trolley with one elastic cord stretched to a fixed length; record the tape and find a.</li>
    <li>Repeat with two and three cords side by side (2F, 3F), same mass.</li>
    <li>Now keep one cord and use one, two and three stacked trolleys (m, 2m, 3m).</li>
    <li>Find a for each run and plot a against F and a against 1/m.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Run</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Force (cords)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mass (trolleys)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Acceleration (m/s²)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does a straight line through the origin for a against F show?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Acceleration is directly proportional to force.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why compensate for friction?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">So the cord force is the resultant force.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Acceleration is directly proportional to resultant force and inversely proportional to mass: F = ma.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Newton’s second law for constant mass.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cords not stretched equally.</li>
    <li>Incomplete friction compensation.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Engineers use F = ma to size engines for vehicles of different masses.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Plot a against F and a against 1/m. Describe both graphs and explain what they show.</p>
    <div style="background:#0b1a2e;border-left:4px solid #fb8c00;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#ffe0b2;font-weight:bold;">✏️ Worked Example 4: Using results</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> One cord gives 0.4 m/s² to one trolley. Predict a for 3 cords and 2 trolleys.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> a ∝ F/m.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#fff3e0;">Step 1: Factor</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 ÷ 2 = 1.5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#fb8c00;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#fff3e0;">Step 2: a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.4 × 1.5 = 0.6 m/s²</div>
    </div>
    <div style="background:#2a1708;border:1px solid #fb8c00;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#ffe0b2;">✅ Model answer:</strong> 0.6 m/s²</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is meant by friction-compensated runway?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A runway tilted so the trolley moves at constant velocity without a pull.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Why use identical cords stretched to the same length?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Each provides the same force.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> What shape is the graph of a against m?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">A curve (a decreases as m increases).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Which variable was kept constant in runs 1–3?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Mass.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why stack identical trolleys?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">To double and triple mass accurately.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'Doubling the force on the same mass makes the acceleration:',
            options: ['Half', 'Double', 'The same', 'Four times'],
            correct: 1,
            explanation: 'The answer is “Double”. a ∝ F.'
        },
        {
            question: 'Doubling the mass with the same force makes the acceleration:',
            options: ['Double', 'Half', 'The same', 'Zero'],
            correct: 1,
            explanation: 'The answer is “Half”. a ∝ 1/m.'
        },
        {
            question: 'A graph of a against 1/m is:',
            options: ['A straight line through the origin', 'A curve', 'Horizontal', 'Vertical'],
            correct: 0,
            explanation: 'The answer is “A straight line through the origin”. Direct proportion.'
        },
        {
            question: 'Friction compensation makes the cord force equal to the:',
            options: ['Weight', 'Mass', 'Resultant force', 'Momentum'],
            correct: 2,
            explanation: 'The answer is “Resultant force”. Friction is cancelled.'
        },
        {
            question: 'If 1 cord gives 0.4 m/s² to 1 trolley, 2 cords on 1 trolley give:',
            options: ['0.8 m/s²', '0.2 m/s²', '0.4 m/s²', '1.6 m/s²'],
            correct: 0,
            explanation: 'The answer is “0.8 m/s²”. Double force.'
        }
    ]
},
{
    name: '1.2 Quiz: Newton’s Laws of Motion',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📝 Quiz — Newton’s Laws of Motion</h2>
    <p style="font-size:16px;">This quiz checks lessons 1.2.1–1.2.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Resultant force and free-body diagrams</li>
    <li>First law and inertia</li>
    <li>Second law and F = ma</li>
    <li>Momentum and impulse</li>
    <li>Third law</li>
    <li>Conservation of momentum</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #fb8c00;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffe0b2;font-weight:bold;">📝 Exam Tip</p>
    <div>Find the resultant force first, take one direction as positive, and remember action–reaction pairs act on different bodies.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A body at rest stays at rest unless:',
            options: ['A resultant force acts', 'It is heavy', 'It is cold', 'Time passes'],
            correct: 0,
            explanation: 'The answer is “A resultant force acts”. First law.'
        },
        {
            question: 'Forces of 8 N east and 5 N west give a resultant of:',
            options: ['3 N east', '13 N east', '3 N west', 'Zero'],
            correct: 0,
            explanation: 'The answer is “3 N east”. 8 − 5.'
        },
        {
            question: 'Which has the most inertia?',
            options: ['A bicycle', 'A loaded lorry', 'A football', 'A pencil'],
            correct: 1,
            explanation: 'The answer is “A loaded lorry”. Most mass.'
        },
        {
            question: 'F = 30 N, m = 6 kg. a =',
            options: ['180 m/s²', '36 m/s²', '0.2 m/s²', '5 m/s²'],
            correct: 3,
            explanation: 'The answer is “5 m/s²”. 30 ÷ 6.'
        },
        {
            question: 'Force needed to accelerate 800 kg at 1.5 m/s²:',
            options: ['533 N', '1 200 N', '801.5 N', '120 N'],
            correct: 1,
            explanation: 'The answer is “1 200 N”. 800 × 1.5.'
        },
        {
            question: 'Momentum of a 50 kg cyclist at 6 m/s:',
            options: ['56 kg m/s', '8.3 kg m/s', '300 kg m/s', '3 000 kg m/s'],
            correct: 2,
            explanation: 'The answer is “300 kg m/s”. 50 × 6.'
        },
        {
            question: 'Impulse is measured in:',
            options: ['N s', 'N/s', 'J', 'W'],
            correct: 0,
            explanation: 'The answer is “N s”. Force × time.'
        },
        {
            question: 'A force of 200 N acts for 0.1 s. Impulse:',
            options: ['20 N s', '2 000 N s', '200 N s', '2 N s'],
            correct: 0,
            explanation: 'The answer is “20 N s”. 200 × 0.1.'
        },
        {
            question: 'Catching a ball with hands moving back reduces:',
            options: ['The momentum change', 'The ball’s mass', 'Gravity', 'The force on the hands'],
            correct: 3,
            explanation: 'The answer is “The force on the hands”. Longer time, smaller force.'
        },
        {
            question: 'The reaction to the Earth pulling a book down is:',
            options: ['The table pushing the book up', 'Air resistance', 'The book pulling the Earth up', 'Friction'],
            correct: 2,
            explanation: 'The answer is “The book pulling the Earth up”. Pair acts on the Earth.'
        },
        {
            question: 'Swimmers move forward by:',
            options: ['Pulling water forwards', 'Floating only', 'Pushing water backwards', 'Gravity'],
            correct: 2,
            explanation: 'The answer is “Pushing water backwards”. Third law.'
        },
        {
            question: '3 kg at 4 m/s sticks to 1 kg at rest. Common velocity:',
            options: ['4 m/s', '3 m/s', '12 m/s', '1 m/s'],
            correct: 1,
            explanation: 'The answer is “3 m/s”. 12 ÷ 4.'
        },
        {
            question: 'A 2 kg gun fires a 0.01 kg bullet at 300 m/s. Recoil speed:',
            options: ['3 m/s', '1.5 m/s', '0.15 m/s', '15 m/s'],
            correct: 1,
            explanation: 'The answer is “1.5 m/s”. 3 ÷ 2.'
        },
        {
            question: 'In an elastic collision, which is conserved besides momentum?',
            options: ['Heat', 'Sound', 'Deformation', 'Kinetic energy'],
            correct: 3,
            explanation: 'The answer is “Kinetic energy”. No KE lost.'
        },
        {
            question: 'Weight of a 2 kg bag (g = 10 N/kg):',
            options: ['2 N', '0.2 N', '200 N', '20 N'],
            correct: 3,
            explanation: 'The answer is “20 N”. W = mg.'
        }
    ]
},
{
    name: '1.2 Assignment: Designing a Vehicle Safety Campaign Using Newton’s Laws',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">📂 Designing a Vehicle Safety Campaign Using Newton’s Laws</h2>
    <p style="font-size:16px;">In groups, you will explain how seat belts, airbags, crumple zones, helmets and speed limits work using Newton’s laws and momentum, and design a road safety campaign for your community.</p>
    <p style="margin:6px 0 0 0;color:#fff3e0;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🎬 The Task in Context</h3>
    <p>Many road accidents in Kenya involve passengers without seat belts, overloaded vehicles and riders without helmets. The county road safety committee has asked schools to produce science-based awareness materials.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Explain how each safety device works using Newton’s first and second laws and impulse.</li>
    <li>Calculate the force on a 70 kg passenger moving at 20 m/s who stops in 0.05 s (no belt) and 0.4 s (belt and airbag).</li>
    <li>Calculate how overloading a 1 500 kg matatu with an extra 500 kg changes its momentum at 20 m/s and its required braking force to stop in 5 s.</li>
    <li>Design a poster, leaflet or radio message with three key messages.</li>
    <li>Present your campaign to the class.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explanations of five safety devices</li>
    <li>Force and momentum calculations</li>
    <li>Campaign material</li>
    <li>Presentation</li>
    <li>Individual reflections</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics explanations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate use of all three laws and impulse for each device</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate for most devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inaccurate</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All correct with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Campaign quality</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, persuasive, accurate messages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear messages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unclear messages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All members contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One member only</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use F = Δp ÷ t.<br>Momentum = mass × velocity.<br>Keep messages short and positive.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which calculation surprised me most?</li>
    <li>How will I behave differently on the road?</li>
    <li>How did our group share tasks?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Force on a 70 kg passenger stopping from 20 m/s in 0.05 s:',
            options: ['1 400 N', '28 000 N', '3 500 N', '70 N'],
            correct: 1,
            explanation: 'The answer is “28 000 N”. 1 400 ÷ 0.05.'
        },
        {
            question: 'With a belt and airbag (0.4 s) the force becomes:',
            options: ['28 000 N', '3 500 N', '560 N', '14 000 N'],
            correct: 1,
            explanation: 'The answer is “3 500 N”. 1 400 ÷ 0.4.'
        },
        {
            question: 'Momentum of a 2 000 kg loaded matatu at 20 m/s:',
            options: ['40 000 kg m/s', '30 000 kg m/s', '2 020 kg m/s', '100 kg m/s'],
            correct: 0,
            explanation: 'The answer is “40 000 kg m/s”. 2 000 × 20.'
        },
        {
            question: 'Overloading a vehicle increases:',
            options: ['Its inertia only slightly', 'Nothing', 'Its fuel efficiency', 'The braking force needed'],
            correct: 3,
            explanation: 'The answer is “The braking force needed”. More mass, more momentum.'
        },
        {
            question: 'Helmets reduce injury mainly by:',
            options: ['Increasing impact time', 'Increasing speed', 'Reducing mass', 'Adding momentum'],
            correct: 0,
            explanation: 'The answer is “Increasing impact time”. Impulse principle.'
        }
    ]
},
{
    name: '1.2 Revision: Newton’s Laws of Motion',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🔁 Revision — Newton’s Laws of Motion</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.2 before moving on to the next sub-strand.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">⚖️ Resultant force</p>
    <div>Add forces in the same direction; subtract opposite ones.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">1️⃣ First law</p>
    <div>No resultant force → no change in motion; inertia ∝ mass.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">2️⃣ Second law</p>
    <div>Rate of change of momentum ∝ force; F = ma.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">💨 Momentum</p>
    <div>p = mv (kg m/s), a vector.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">⏱️ Impulse</p>
    <div>Ft = mv − mu; longer time → smaller force.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">3️⃣ Third law</p>
    <div>Equal, opposite forces on different bodies.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">💥 Conservation</p>
    <div>Momentum before = momentum after.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffb74d;">
    <p style="margin:0 0 4px 0;color:#ffe0b2;font-weight:bold;">🚗 Safety</p>
    <div>Seat belts, airbags, crumple zones, helmets.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Law</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">First</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Body keeps its motion unless a resultant force acts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Passengers lurch forward</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Second</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F = ma (rate of change of momentum)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Engine force accelerates a car</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Third</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every action has an equal, opposite reaction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rocket propulsion</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A 900 kg car accelerates at 2 m/s² against 600 N of friction. Find the driving force.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">F − 600 = 1 800 → F = 2 400 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A 0.15 kg ball at 30 m/s is caught and stopped in 0.1 s. Find the force.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">45 N.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A 40 kg learner jumps off a 60 kg boat at 3 m/s. Find the boat’s recoil speed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">2 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why does a parachutist reach a constant speed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">Air resistance increases until it equals the weight, so the resultant is zero (first law).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Name the reaction to a foot pushing back on the ground.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#fff3e0;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#fff3e0;">The ground pushing the foot forward.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1708;padding:20px;border-radius:12px;border:1px solid #fb8c00;margin-bottom:20px;">
    <h3 style="color:#ffe0b2;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can state and apply all three laws.</p>
    <p style="margin:6px 0;">☐ I can calculate momentum and impulse.</p>
    <p style="margin:6px 0;">☐ I can solve collision and explosion problems.</p>
    <p style="margin:6px 0;">☐ I can explain safety devices.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A parachutist at constant velocity has:',
            options: ['Balanced forces', 'Unbalanced forces', 'No weight', 'Increasing speed'],
            correct: 0,
            explanation: 'The answer is “Balanced forces”. Zero resultant.'
        },
        {
            question: 'F = ma applies to:',
            options: ['Any single force', 'The resultant force', 'Only weight', 'Only friction'],
            correct: 1,
            explanation: 'The answer is “The resultant force”. Net force.'
        },
        {
            question: 'The change in momentum of a 2 kg body from 3 m/s to 8 m/s is:',
            options: ['10 kg m/s', '16 kg m/s', '6 kg m/s', '22 kg m/s'],
            correct: 0,
            explanation: 'The answer is “10 kg m/s”. 2 × 5.'
        },
        {
            question: 'A long follow-through in hitting a ball:',
            options: ['Reduces impulse', 'Has no effect', 'Reduces mass', 'Increases impulse'],
            correct: 3,
            explanation: 'The answer is “Increases impulse”. Force acts for longer.'
        },
        {
            question: 'The weight of a book and the normal reaction are:',
            options: ['An action–reaction pair', 'Always unequal', 'Not an action–reaction pair', 'Both on the table'],
            correct: 2,
            explanation: 'The answer is “Not an action–reaction pair”. Both act on the book.'
        },
        {
            question: 'When two bodies collide, the forces on each other are:',
            options: ['Unequal', 'In the same direction', 'Equal and opposite', 'Zero'],
            correct: 2,
            explanation: 'The answer is “Equal and opposite”. Third law.'
        },
        {
            question: 'Total momentum after an explosion from rest is:',
            options: ['Positive', 'Zero', 'Negative', 'Doubled'],
            correct: 1,
            explanation: 'The answer is “Zero”. Conserved.'
        },
        {
            question: 'Crumple zones work by:',
            options: ['Increasing car speed', 'Making cars heavier', 'Reducing friction', 'Increasing collision time'],
            correct: 3,
            explanation: 'The answer is “Increasing collision time”. Lower force.'
        }
    ]
},
{
    name: '1.2 Summary: Newton’s Laws of Motion',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4a148c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffb74d;">
    <p style="margin:0;color:#fff3e0;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Mechanics · Sub-strand 1.2 Newton’s Laws of Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#2a1708;border:1px solid #ffb74d;color:#fff3e0;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#fff3e0;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#fff3e0;margin:8px 0 10px 0;">🧾 Summary — Newton’s Laws of Motion</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Forces change motion: a body keeps its motion unless a resultant force acts, the force needed depends on mass and acceleration, every force has an equal and opposite partner, and total momentum is always conserved in interactions.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Resultant force determines whether motion changes.</li>
    <li>Newton’s first law describes inertia, which increases with mass.</li>
    <li>Newton’s second law gives F = ma and links force to change in momentum.</li>
    <li>Momentum p = mv; impulse Ft = change in momentum.</li>
    <li>Increasing impact time reduces force — the principle behind safety devices.</li>
    <li>Newton’s third law: forces come in equal and opposite pairs on different bodies.</li>
    <li>Momentum is conserved in collisions and explosions.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 First law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Resultant force, free-body diagrams, inertia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No resultant → no change</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Second law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F = ma, momentum, impulse</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ft = Δp</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Third law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Action–reaction, conservation of momentum</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Before = after</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verifying F = ma</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compensate friction</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#ffe0b2;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">force</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">resultant force</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">free-body diagram</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inertia</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">momentum</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">impulse</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">newton</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">action–reaction pair</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">conservation of momentum</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">elastic collision</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inelastic collision</span><span style="background:#0b1a2e;border:1px solid #fff3e0;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">recoil</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From walking to rockets and from seat belts to accident investigation, Newton’s laws shape the world around us.</div>
    </div>
    <div style="background:#2a1708;border-left:4px solid #ffb74d;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fff3e0;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>The next sub-strand continues Mechanics in a later batch.</div>
    </div>
    <div style="background:#2e1065;padding:20px;border-radius:12px;border:1px solid #ffb74d;margin-bottom:20px;">
    <h3 style="color:#fff3e0;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ state and apply Newton’s three laws</p>
    <p style="margin:6px 0;">✔️ use F = ma</p>
    <p style="margin:6px 0;">✔️ calculate momentum and impulse</p>
    <p style="margin:6px 0;">✔️ apply conservation of momentum</p>
    <p style="margin:6px 0;">✔️ explain safety devices</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is that:',
            options: ['Forces change motion according to Newton’s laws', 'Motion needs no explanation', 'Forces never act in pairs', 'Momentum is always lost'],
            correct: 0,
            explanation: 'The answer is “Forces change motion according to Newton’s laws”. Dynamics.'
        },
        {
            question: 'Which lesson covered impulse?',
            options: ['1.2.1', '1.2.2', '1.2.3', '1.1.3'],
            correct: 1,
            explanation: 'The answer is “1.2.2”. Second law lesson.'
        },
        {
            question: 'Which lesson covered recoil?',
            options: ['1.2.1', '1.2.3', '1.2.2', '1.1.2'],
            correct: 1,
            explanation: 'The answer is “1.2.3”. Conservation of momentum.'
        },
        {
            question: 'Which lesson covered inertia?',
            options: ['1.2.2', '1.2.3', '1.2.1', '1.1.1'],
            correct: 2,
            explanation: 'The answer is “1.2.1”. First law.'
        },
        {
            question: 'F = ma gives the force needed to accelerate 2 kg at 3 m/s² as:',
            options: ['1.5 N', '5 N', '0.67 N', '6 N'],
            correct: 3,
            explanation: 'The answer is “6 N”. 2 × 3.'
        }
    ]
}
],
          stats:{lessons:19,exercises:116,quizzes:20,projects:2,duration:'13 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Which of these is a vector quantity?',
                  options: ['Speed', 'Distance', 'Velocity', 'Time'],
                  correct: 2,
                  explanation: 'Velocity has both size and direction.'
              },
              {
                  question: 'A car travels 120 km in 1.5 h. Its average speed is:',
                  options: ['180 km/h', '80 km/h', '120 km/h', '60 km/h'],
                  correct: 1,
                  explanation: '120 ÷ 1.5 = 80 km/h.'
              },
              {
                  question: '72 km/h expressed in m/s is:',
                  options: ['20 m/s', '72 m/s', '7.2 m/s', '259 m/s'],
                  correct: 0,
                  explanation: '72 × 1 000 ÷ 3 600 = 20 m/s.'
              },
              {
                  question: 'A body accelerates from rest to 30 m/s in 6 s. Its acceleration is:',
                  options: ['5 m/s²', '180 m/s²', '0.2 m/s²', '36 m/s²'],
                  correct: 0,
                  explanation: 'a = (30 − 0) ÷ 6 = 5 m/s².'
              },
              {
                  question: 'The area under a velocity–time graph gives:',
                  options: ['Acceleration', 'Displacement', 'Force', 'Mass'],
                  correct: 1,
                  explanation: 'Velocity × time = displacement.'
              },
              {
                  question: 'Using v² = u² + 2as, a body starting at rest with a = 2 m/s² over 25 m reaches:',
                  options: ['50 m/s', '5 m/s', '100 m/s', '10 m/s'],
                  correct: 3,
                  explanation: 'v² = 0 + 2 × 2 × 25 = 100, so v = 10 m/s.'
              },
              {
                  question: 'Ignoring air resistance, all bodies falling freely near the Earth have an acceleration of about:',
                  options: ['1 m/s²', '10 m/s²', '0 m/s²', '100 m/s²'],
                  correct: 1,
                  explanation: 'g ≈ 9.8 m/s², usually taken as 10 m/s².'
              },
              {
                  question: 'Newton’s first law is also called the law of:',
                  options: ['Momentum', 'Gravitation', 'Reflection', 'Inertia'],
                  correct: 3,
                  explanation: 'A body keeps its state of rest or uniform motion unless a resultant force acts.'
              },
              {
                  question: 'A resultant force of 12 N acts on a 3 kg mass. Its acceleration is:',
                  options: ['36 m/s²', '15 m/s²', '4 m/s²', '0.25 m/s²'],
                  correct: 2,
                  explanation: 'a = F ÷ m = 12 ÷ 3 = 4 m/s².'
              },
              {
                  question: 'The momentum of a 1 200 kg car moving at 15 m/s is:',
                  options: ['80 kg m/s', '1 215 kg m/s', '180 kg m/s', '18 000 kg m/s'],
                  correct: 3,
                  explanation: 'p = mv = 1 200 × 15.'
              },
              {
                  question: 'Seat belts and airbags reduce injury mainly by:',
                  options: ['Increasing the time taken to stop', 'Increasing the speed', 'Reducing the mass', 'Increasing momentum'],
                  correct: 0,
                  explanation: 'A longer stopping time means a smaller force for the same change in momentum.'
              },
              {
                  question: 'When a gun is fired, it recoils because of:',
                  options: ['Friction', 'Gravity only', 'Conservation of momentum', 'Air pressure'],
                  correct: 2,
                  explanation: 'Total momentum before (zero) equals total momentum after.'
              }
          ]}
);