// Eschool course: Physics (USA, high school, NGSS aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'physics-us', name:'Physics', code:'PHYS', level:'grade-11', iconStyle:'fas', icon:'fa-atom', color:'#00838f',
          category:'Sciences',
          description:'Describe and predict motion like a physicist: units and vectors, displacement and velocity, motion graphs, acceleration, the kinematic equations and free fall — with hands-on labs you can do with simple equipment.',
          longDescription:'Physics is a high-school laboratory science course, usually taken in Grade 11, aligned to the Next Generation Science Standards. Unit 1, Motion in One Dimension, builds the tools of physics — SI units, unit conversion, significant figures, scalars and vectors — and uses them to describe motion with distance, displacement, speed and velocity. Students read and draw position–time and velocity–time graphs, define acceleration, solve problems with the four kinematic equations and analyze free fall, including Galileo’s experiments and the Apollo 15 hammer-and-feather demonstration. Labs include a constant-velocity investigation and a reaction-time free-fall lab, and the unit ends with a stopping-distance analysis that connects physics to road safety. The kinematics in this unit prepares students for forces and Newton’s laws (HS-PS2-1). Later units cover forces, two-dimensional and circular motion, momentum, energy, waves and sound, light, electricity and magnetism, and modern physics. Every lesson has worked examples, common-error warnings, leveled practice with answers, a lab, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Motion in One Dimension — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Motion in One Dimension</h2>
    <p style="font-size:16px;">Welcome to Physics — the science of matter, energy, motion and force. Physics explains why a ball curves, how a phone screen works, why a car needs space to stop and how rockets reach orbit.</p>
    <p style="font-size:16px;">Every physics course begins with motion. In this unit you will learn to describe motion precisely — where something is, how fast it is moving, in which direction and how its speed is changing — using words, numbers, graphs and equations. By the end you will be able to predict how far a car travels before it stops, and you will measure the acceleration of gravity yourself.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How can we describe and predict the motion of objects using words, graphs and equations?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>Topic 1.1 builds the language of motion: units, vectors, displacement, velocity and position–time graphs. Topic 1.2 adds acceleration, velocity–time graphs, the kinematic equations and free fall.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Labs</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Describing Motion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SI units and conversions, scalars and vectors, distance and displacement, speed and velocity, position–time graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constant-Velocity Lab</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Acceleration and Free Fall</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration, velocity–time graphs, kinematic equations, free fall</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reaction-Time Free-Fall Lab</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>The labs in this unit use simple equipment: a meterstick, a stopwatch or phone timer, a toy car or a walking student, and a ruler. A free motion-graph simulation (such as those from PhET at the University of Colorado Boulder) is a helpful extra.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, a lab, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Describing Motion <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Where, How Fast and Which Way</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 The Tools of Physics: Units and Vectors</li>
    <li>1.1.2 Distance, Displacement, Speed and Velocity</li>
    <li>1.1.3 Position–Time Graphs</li>
    <li>🧪 Lab: Constant-Velocity Motion</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Acceleration and Free Fall <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Speeding Up and Slowing Down</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Acceleration and Velocity–Time Graphs</li>
    <li>1.2.2 The Kinematic Equations</li>
    <li>1.2.3 Free Fall</li>
    <li>🧪 Lab: Measuring Reaction Time with Free Fall</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing and interpreting data (SEP 4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using motion graphs and tables to find patterns.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using mathematics (SEP 5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving kinematics problems with units and significant figures.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planning and carrying out investigations (SEP 3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measuring position, time and acceleration in labs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing and using models (SEP 2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using graphs and equations as models of motion.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Foundation for HS-PS2-1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kinematics prepares you to connect force, mass and acceleration.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Crosscutting concept: patterns</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recognizing constant-velocity and constant-acceleration patterns.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Teamwork</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sports and fitness</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Space exploration</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a physics notebook with three sections: vocabulary, worked problems (always write the knowns, unknown, equation, substitution with units and answer), and lab data.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Physics begins with the study of:',
            options: ['Motion', 'Cells', 'Poetry', 'Elections'],
            correct: 0,
            explanation: 'Kinematics is the starting point.'
        },
        {
            question: 'Topic 1.2 studies:',
            options: ['Electricity', 'Light only', 'Acceleration and free fall', 'Atoms'],
            correct: 2,
            explanation: 'The answer is Acceleration and free fall. Speeding up and slowing down.'
        },
        {
            question: 'SEP 5 is about:',
            options: ['Writing poems', 'Using mathematics and computational thinking', 'Drawing maps', 'Debating'],
            correct: 1,
            explanation: 'The answer is Using mathematics and computational thinking. Math in science.'
        },
        {
            question: 'The unit’s labs need mainly:',
            options: ['A particle accelerator', 'Simple equipment such as metersticks and timers', 'Chemicals', 'A telescope'],
            correct: 1,
            explanation: 'The answer is Simple equipment such as metersticks and timers. Low-cost tools.'
        },
        {
            question: 'A good worked problem lists:',
            options: ['Only the answer', 'Only the equation', 'Knowns, unknown, equation, substitution with units and answer', 'A guess'],
            correct: 2,
            explanation: 'The answer is Knowns, unknown, equation, substitution with units and answer. Show your reasoning.'
        },
        {
            question: 'Kinematics prepares you for:',
            options: ['Poetry analysis', 'Cell biology', 'Geography', 'Forces and Newton’s laws'],
            correct: 3,
            explanation: 'The answer is Forces and Newton’s laws. HS-PS2-1.'
        }
    ]
},
{
    name: '1.0 Motion in One Dimension — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives connect to the Next Generation Science Standards and its science and engineering practices. Read them now and check your progress at the end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, unit conversions and significant figures correctly in calculations. (SEP 5)</li>
    <li>Distinguish scalars from vectors, distance from displacement and speed from velocity.</li>
    <li>Create and interpret position–time and velocity–time graphs. (SEP 4)</li>
    <li>Define acceleration and calculate it from data and graphs.</li>
    <li>Solve one-dimensional motion problems with the kinematic equations, including free fall. (SEP 5)</li>
    <li>Plan and carry out investigations of motion and evaluate sources of error. (SEP 3)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Describing Motion</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Convert units using dimensional analysis.</li>
    <li>Calculate distance, displacement, speed and velocity.</li>
    <li>Interpret the slope of a position–time graph.</li>
    <li>Collect and graph constant-velocity data.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do we describe where something is and how fast it moves?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Acceleration and Free Fall</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calculate acceleration and interpret its sign.</li>
    <li>Use slope and area on velocity–time graphs.</li>
    <li>Choose and use the correct kinematic equation.</li>
    <li>Analyze free fall and measure reaction time.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How can we predict where a moving object will be in the future?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You move fluently between words, graphs and equations, choose methods strategically and explain your reasoning with correct units.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You solve motion problems accurately with correct units and interpret graphs correctly.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You solve familiar problems but confuse vectors and scalars or misread graphs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You can define terms but struggle to apply them.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A number without a unit is not an answer in physics. Always write units, and check that they make sense.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'SEP 4 involves:',
            options: ['Writing essays', 'Analyzing and interpreting data', 'Drawing cells', 'Reading poems'],
            correct: 1,
            explanation: 'The answer is Analyzing and interpreting data. Graphs and data.'
        },
        {
            question: 'Topic 1.1’s essential question is about:',
            options: ['Chemical reactions', 'Elections', 'Cell division', 'Describing where something is and how fast it moves'],
            correct: 3,
            explanation: 'The answer is Describing where something is and how fast it moves. Describing motion.'
        },
        {
            question: 'At the Proficient (3) level, you:',
            options: ['Solve problems accurately with correct units', 'Guess answers', 'Ignore units', 'Avoid graphs'],
            correct: 0,
            explanation: 'The answer is Solve problems accurately with correct units. Accuracy and units.'
        },
        {
            question: 'A physics answer must include:',
            options: ['A color', 'A unit', 'A picture', 'A rhyme'],
            correct: 1,
            explanation: 'The answer is A unit. Units give meaning.'
        },
        {
            question: 'SEP 3 involves:',
            options: ['Memorizing dates', 'Writing poetry', 'Planning and carrying out investigations', 'Map reading'],
            correct: 2,
            explanation: 'The answer is Planning and carrying out investigations. Labs.'
        },
        {
            question: 'Topic 1.2’s essential question is about:',
            options: ['Classifying rocks', 'Writing laws', 'Reading maps', 'Predicting future positions'],
            correct: 3,
            explanation: 'The answer is Predicting future positions. Prediction with kinematics.'
        }
    ]
},
{
    name: '1.0 Motion in One Dimension — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: Everything Moves</h2>
    <p style="font-size:16px;">A sprinter explodes from the blocks. A car brakes at a red light. A phone slips off a table. An elevator starts upward. Each of these is motion — and each can be described with just a few quantities: position, velocity, acceleration and time.</p>
    <p style="font-size:16px;">About 400 years ago, Galileo Galilei rolled balls down ramps and discovered that falling objects speed up in a regular pattern. His idea — that motion can be measured and described with mathematics — started modern physics. In this unit you will follow in his footsteps.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 The Four Key Quantities</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Quantity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbol</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">SI unit</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Position / displacement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x, Δx</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">meter (m)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Time</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">second (s)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Velocity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">meters per second (m/s)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">meters per second squared (m/s²)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Your Physics Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SI units</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dimensional analysis</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scalar</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vector</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">displacement</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">velocity</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">slope</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">acceleration</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">area under a graph</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">kinematic equations</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">free fall</span><span style="background:#0b1a2e;border:1px solid #80deea;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">g = 9.8 m/s²</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Predict (5 minutes)</h3>
    <p>If you drop a basketball and a tennis ball from the same height at the same time, which lands first? Write your prediction and your reason. You will test it in Topic 1.2.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏃 Try It</h3>
    <p>Walk across the room slowly, then quickly, then speed up as you go. Describe each walk in words. What would you need to measure to describe each one exactly?</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Bring a calculator, a ruler and your physics notebook. If possible, explore a free motion-graph simulation before Lesson 1.1.3.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The SI unit of velocity is:',
            options: ['m', 's', 'm/s', 'm/s²'],
            correct: 2,
            explanation: 'The answer is m/s. Meters per second.'
        },
        {
            question: 'Galileo studied motion by:',
            options: ['Launching rockets', 'Using computers', 'Watching television', 'Rolling balls down ramps'],
            correct: 3,
            explanation: 'The answer is Rolling balls down ramps. Careful experiments.'
        },
        {
            question: 'The symbol for acceleration is:',
            options: ['v', 'a', 'x', 't'],
            correct: 1,
            explanation: 'Acceleration is written with the letter a.'
        },
        {
            question: 'Δx stands for:',
            options: ['Acceleration', 'Time', 'Displacement (change in position)', 'Speed'],
            correct: 2,
            explanation: 'The answer is Displacement (change in position). Δ means change.'
        },
        {
            question: 'Galileo’s key idea was that motion can be:',
            options: ['Measured and described with mathematics', 'Never predicted', 'Only described in words', 'Ignored'],
            correct: 0,
            explanation: 'The answer is Measured and described with mathematics. The start of modern physics.'
        },
        {
            question: 'The SI unit of time is the:',
            options: ['Minute', 'Hour', 'Day', 'Second'],
            correct: 3,
            explanation: 'The answer is Second. s.'
        }
    ]
},
{
    name: '1.1.1 The Tools of Physics: Units and Vectors',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Where, How Fast and Which Way</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: The Tools of Physics: Units and Vectors</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the SI system of units, convert units with dimensional analysis, use scientific notation and significant figures, and distinguish scalar from vector quantities.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Physics depends on careful measurement. A wrong unit can be a costly mistake: in 1999, NASA lost its Mars Climate Orbiter partly because one team used U.S. customary units while another used metric units.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Space missions</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💊 Medicine dosages</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏎️ Car speedometers</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Engineering plans</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌍 Weather data</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Sports timing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, unit conversion and significant figures in calculations. (SEP 5)</li>
    <li>Distinguish scalars from vectors and distance from displacement.</li>
    <li>Calculate average speed and average velocity.</li>
    <li>Create and interpret position–time graphs. (SEP 4)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify SI base units and common prefixes.</li>
    <li>Convert units using dimensional analysis.</li>
    <li>Use scientific notation and significant figures.</li>
    <li>Distinguish scalars and vectors and use signs for direction.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why do scientists around the world need one shared system of measurement?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In earlier science and math courses you measured length, mass and time and used the metric system. Here you will use these tools with the precision physics requires.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Physicists around the world use the <strong>International System of Units (SI)</strong>. In mechanics, the three most important base units are the <strong>meter (m)</strong> for length, the <strong>kilogram (kg)</strong> for mass and the <strong>second (s)</strong> for time. Other units, such as meters per second (m/s), are built from these.</p>
    <p>Quantities in physics are either <strong>scalars</strong> or <strong>vectors</strong>. A scalar has only size (magnitude), such as 5 seconds or 20 kilograms. A vector has size <em>and</em> direction, such as 5 meters east. In one-dimensional motion, we show direction with a <strong>sign</strong>: positive for one direction (usually right, east or up) and negative for the opposite.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Scalar = how much. Vector = how much and which way.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The metric system was created in France in the 1790s. In 2019, scientists redefined all SI base units using fixed constants of nature — for example, the meter is now defined by the speed of light, exactly 299,792,458 meters per second — so that the units can be reproduced anywhere in the universe.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">SI unit</strong>
    </p>
    <p style="margin:6px 0;">A unit in the International System of Units.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> m, kg, s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The SI unit of length is the meter.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">dimensional analysis</strong>
    </p>
    <p style="margin:6px 0;">Converting units by multiplying by fractions equal to 1.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> conversion factor</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1000 m / 1 km</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">scientific notation</strong>
    </p>
    <p style="margin:6px 0;">Writing a number as a × 10ⁿ, where a is at least 1 and less than 10.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> a × 10ⁿ</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>3.00 × 10⁸ m/s</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">significant figures</strong>
    </p>
    <p style="margin:6px 0;">The digits in a measurement that are known reliably, plus one estimated digit.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> sig figs</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>4.50 m has three significant figures.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">scalar</strong>
    </p>
    <p style="margin:6px 0;">A quantity with magnitude only.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> time, mass, distance, speed</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>12 s</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vector</strong>
    </p>
    <p style="margin:6px 0;">A quantity with magnitude and direction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> displacement, velocity, acceleration</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>12 m/s north</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. SI Units and Prefixes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Prefix</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbol</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Factor</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kilo</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">k</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10³ = 1000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 km = 1000 m</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">centi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10⁻² = 0.01</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 cm = 0.01 m</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">milli</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10⁻³ = 0.001</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 ms = 0.001 s</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">micro</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">μ</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10⁻⁶</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 μm = 0.000001 m</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Dimensional analysis</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">quantity × (new unit / old unit) = quantity in new unit</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Each conversion factor equals 1, so the value does not change — only the unit does.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Converting between units, such as km/h to m/s.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Putting the conversion factor upside down so the units do not cancel.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Write the units every time and cross them out as they cancel.</div>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 190" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Dimensional Analysis: Converting 72 km/h to m/s</text><rect x="40" y="52" width="140" height="86" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="110" y="84" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">72 km</text><line x1="64" y1="95" x2="156" y2="95" stroke="#e2e8f0" stroke-width="2"/><text x="110" y="120" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">1 h</text><text x="192" y="102" fill="#e2e8f0" font-size="20" text-anchor="middle">×</text><rect x="205" y="52" width="140" height="86" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="275" y="84" fill="#86efac" font-size="16" font-weight="bold" text-anchor="middle">1000 m</text><line x1="229" y1="95" x2="321" y2="95" stroke="#e2e8f0" stroke-width="2"/><text x="275" y="120" fill="#86efac" font-size="16" font-weight="bold" text-anchor="middle">1 km</text><text x="357" y="102" fill="#e2e8f0" font-size="20" text-anchor="middle">×</text><rect x="370" y="52" width="140" height="86" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="440" y="84" fill="#67e8f9" font-size="16" font-weight="bold" text-anchor="middle">1 h</text><line x1="394" y1="95" x2="486" y2="95" stroke="#e2e8f0" stroke-width="2"/><text x="440" y="120" fill="#67e8f9" font-size="16" font-weight="bold" text-anchor="middle">3600 s</text><rect x="535" y="52" width="140" height="86" rx="12" fill="#10233d" stroke="#f9a8d4" stroke-width="2"/><text x="605" y="102" fill="#f9a8d4" font-size="18" font-weight="bold" text-anchor="middle">= 20 m/s</text><text x="350" y="172" fill="#86efac" font-size="12" text-anchor="middle">Each fraction equals 1, so the value is unchanged; units cancel diagonally until only m/s remain.</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Converting a highway speed</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A speed limit is 65 miles per hour. Convert it to meters per second (1 mile = 1609 m).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Set up</strong>
    </p>
    <div style="margin:6px 0 0 34px;">65 mi/h × (1609 m / 1 mi) × (1 h / 3600 s)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Cancel units</strong>
    </p>
    <div style="margin:6px 0 0 34px;">mi and h cancel, leaving m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">65 × 1609 ÷ 3600 = 29.05…</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Round</strong>
    </p>
    <div style="margin:6px 0 0 34px;">About 29 m/s</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 65 mi/h ≈ 29 m/s.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying by 3600 instead of dividing. Check: a speed in m/s should be smaller than the same speed in mi/h or km/h.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Scientific Notation and Significant Figures</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Significant figures</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All nonzero digits count</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">345 m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zeros between nonzero digits count</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.07 s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leading zeros do not count</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.0045 kg</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trailing zeros after a decimal point count</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.50 m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>When multiplying or dividing, round your answer to the same number of significant figures as the measurement with the fewest. When adding or subtracting, round to the fewest decimal places. Measuring 12.0 m in 3.2 s gives 12.0 ÷ 3.2 = 3.75, which rounds to 3.8 m/s (two significant figures).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Scalars, Vectors and Signs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Scalar</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Vector partner</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">distance (m)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">displacement (m, with direction)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">speed (m/s)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">velocity (m/s, with direction)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">time (s)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">— (time has no direction)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">mass (kg)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">— (mass has no direction)</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Using signs for direction</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Taking east as positive, write each as a signed number: (a) 8 m east, (b) 5 m/s west, (c) 3 m/s² east.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: (a)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">+8 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: (b)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−5 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: (c)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">+3 m/s²</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> +8 m, −5 m/s and +3 m/s².</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> In one dimension, the sign is the direction. Always state which direction you chose as positive.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Convert 2.5 km to meters.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2500 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> How many significant figures are in 0.0300 m?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Three.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Is “25 m/s north” a scalar or a vector?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A vector (a velocity).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep walkways clear and work only in the area your teacher assigns, especially when carts, balls or other objects are moving.</li>
    <li>Never stand under or in the path of a falling or launched object, and catch or stop objects only as instructed.</li>
    <li>Wear safety goggles whenever objects are launched, dropped from a height or under tension (springs, rubber bands).</li>
    <li>Report any damaged equipment, spills or injuries to your teacher at once, and return all equipment when finished.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using mathematics (SEP 5)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Attention to precision</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Dimensional analysis</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Choosing a sign convention</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating reasonableness</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Units are a built-in error check. If you are calculating a speed and your units come out as m·s instead of m/s, you know you multiplied when you should have divided. Professional scientists and engineers check units at every step for exactly this reason.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might a team of engineers in different countries agree to use only SI units on a shared project?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80deea;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Physics in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Nutrition labels, medicine doses and car speedometers all depend on correct units and conversions.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Climate scientists use SI units and scientific notation to report quantities such as billions of tonnes of carbon dioxide.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Engineers, pilots, nurses, pharmacists and lab technicians convert units every day — and errors can be dangerous.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is the SI unit of mass?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Not the gram.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The kilogram (kg).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Write 0.00052 s in scientific notation.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Move the decimal 4 places.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5.2 × 10⁻⁴ s</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Is speed a scalar or a vector?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: No direction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A scalar.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Measure the length of your desk in centimeters and convert it to meters and millimeters.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Give each other five quantities and classify each as a scalar or a vector.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Research the Mars Climate Orbiter loss (1999) and present how a unit error contributed to it.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online unit converter to check three conversions you did by hand with dimensional analysis.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Convert 350 cm to meters.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3.50 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name the SI base unit of time.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The second (s).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Convert 90 km/h to m/s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">90 × 1000 ÷ 3600 = 25 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How many significant figures are in 4.020 kg?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Four.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80deea;">
    <p style="margin:0 0 6px 0;color:#80deea;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A runner covers 100.0 m in 9.85 s. Calculate the average speed with correct significant figures.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">100.0 ÷ 9.85 = 10.152… → 10.2 m/s (three significant figures).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A recipe needs 0.25 kg of flour. How many grams is that?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">250 g.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 5: Explain why units should be written at every step of a calculation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Units show whether the operations are correct, prevent conversion mistakes and give the answer physical meaning.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Physics uses SI units — the meter, kilogram and second — with prefixes such as kilo, centi and milli. Dimensional analysis converts units by multiplying by fractions equal to 1, and scientific notation and significant figures show the size and precision of measurements. Scalars have only magnitude; vectors have magnitude and direction, which in one dimension we show with a positive or negative sign.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>SI: m, kg, s.</li>
    <li>k = 10³, c = 10⁻², m = 10⁻³.</li>
    <li>Dimensional analysis: cancel units.</li>
    <li>Scalar vs. vector; sign = direction.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write units every time.</li>
    <li>State your positive direction.</li>
    <li>Round to the right significant figures.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Upside-down conversion factors.</li>
    <li>Ignoring direction for vectors.</li>
    <li>Keeping too many digits.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cross out units as they cancel.</li>
    <li>Check that answers are reasonable.</li>
    <li>Use scientific notation for very large or small numbers.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show conversion steps.</li>
    <li>Give answers with units and direction.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Units and conversions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Significant figures.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalars and vectors.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty in measurement</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Teamwork</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Space exploration</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Careful units and measurements keep bridges standing, medicines safe and spacecraft on course.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten unit conversions using dimensional analysis.</li>
    <li>Classify fifteen quantities as scalars or vectors.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which unit conversion is hardest for me?</li>
    <li>Why does direction matter in physics?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Dimensional analysis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unit conversion method.</td>
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
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can use SI units and prefixes.</p>
    <p style="margin:6px 0;">☐ I can convert units.</p>
    <p style="margin:6px 0;">☐ I can use significant figures.</p>
    <p style="margin:6px 0;">☐ I can distinguish scalars and vectors.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The SI unit of length is the:',
            options: ['Foot', 'Mile', 'Inch', 'Meter'],
            correct: 3,
            explanation: 'The answer is Meter. m.'
        },
        {
            question: '1 km equals:',
            options: ['100 m', '10 m', '0.001 m', '1000 m'],
            correct: 3,
            explanation: 'The answer is 1000 m. kilo = 1000.'
        },
        {
            question: 'Convert 36 km/h to m/s.',
            options: ['10 m/s', '36 m/s', '3.6 m/s', '100 m/s'],
            correct: 0,
            explanation: 'The answer is 10 m/s. 36 × 1000 ÷ 3600.'
        },
        {
            question: 'How many significant figures are in 0.00710?',
            options: ['2', '5', '3', '6'],
            correct: 2,
            explanation: 'Leading zeros do not count; the trailing zero does.'
        },
        {
            question: 'Which is a vector?',
            options: ['Distance', 'Mass', 'Time', 'Displacement'],
            correct: 3,
            explanation: 'The answer is Displacement. It has direction.'
        },
        {
            question: 'Which is a scalar?',
            options: ['Velocity', 'Speed', 'Displacement', 'Acceleration'],
            correct: 1,
            explanation: 'The answer is Speed. No direction.'
        },
        {
            question: '3.0 × 10⁸ m/s written out is:',
            options: ['3,000 m/s', '30,000,000 m/s', '300,000,000 m/s', '0.000000003 m/s'],
            correct: 2,
            explanation: 'Move the decimal 8 places right.'
        },
        {
            question: 'If east is positive, 6 m/s west is written:',
            options: ['+6 m/s', '−6 m/s', '6 m/s²', '0 m/s'],
            correct: 1,
            explanation: 'Opposite direction is negative.'
        },
        {
            question: 'In dimensional analysis, each conversion factor equals:',
            options: ['10', '0', '1', '1000'],
            correct: 2,
            explanation: 'The answer is 1. So the value does not change.'
        },
        {
            question: 'The 1999 Mars Climate Orbiter loss involved:',
            options: ['A mix-up between U.S. customary and metric units', 'A computer virus', 'A collision with a moon', 'A missing battery'],
            correct: 0,
            explanation: 'The answer is A mix-up between U.S. customary and metric units. A unit error.'
        }
    ]
},
{
    name: '1.1.2 Distance, Displacement, Speed and Velocity',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Where, How Fast and Which Way</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Distance, Displacement, Speed and Velocity</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the difference between distance and displacement and between speed and velocity, and calculate average speed and average velocity.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> A GPS app that told you only how far you walked, but not where you ended up, would not be very useful. Direction matters for navigation, sports, flight and space travel.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗺️ GPS navigation</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✈️ Flight paths</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Running and fitness apps</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Sports analysis</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Speedometers</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌀 Storm tracking</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, unit conversion and significant figures in calculations. (SEP 5)</li>
    <li>Distinguish scalars from vectors and distance from displacement.</li>
    <li>Calculate average speed and average velocity.</li>
    <li>Create and interpret position–time graphs. (SEP 4)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish distance from displacement.</li>
    <li>Distinguish speed from velocity.</li>
    <li>Calculate average speed and average velocity.</li>
    <li>Explain the difference between average and instantaneous speed.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why can you run very fast and still have an average velocity of zero?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned the difference between scalars and vectors. Distance and speed are scalars; displacement and velocity are their vector partners.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Distance</strong> is how much ground an object covers — the total length of its path. <strong>Displacement</strong> is the change in position: how far, and in which direction, the object ends up from where it started. If you walk 3 km east and then 1 km west, your distance is 4 km, but your displacement is 2 km east.</p>
    <p><strong>Average speed</strong> is distance divided by time. <strong>Average velocity</strong> is displacement divided by time, so it has a direction. A runner who completes one lap of a 400 m track and returns to the start has run 400 m, but her displacement — and her average velocity — is zero.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Distance and speed ask “how much?” Displacement and velocity also ask “which way, from start to finish?”</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The Greek letter Δ (delta) means “change in.” So Δx = x<sub>final</sub> − x<sub>initial</sub> is the change in position (displacement), and Δt = t<sub>final</sub> − t<sub>initial</sub> is the change in time. You will see Δ throughout physics.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">position</strong>
    </p>
    <p style="margin:6px 0;">Where an object is relative to a chosen origin.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> x (m)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x = 5 m means 5 m from the origin in the positive direction.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">distance</strong>
    </p>
    <p style="margin:6px 0;">The total length of the path traveled (a scalar).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> d (m)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A 400 m lap has a distance of 400 m.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">displacement</strong>
    </p>
    <p style="margin:6px 0;">The change in position (a vector).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> Δx = x_f − x_i</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Ending 2 km east of the start.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">average speed</strong>
    </p>
    <p style="margin:6px 0;">Distance divided by time (a scalar).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> d / Δt (m/s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>400 m ÷ 80 s = 5 m/s</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">average velocity</strong>
    </p>
    <p style="margin:6px 0;">Displacement divided by time (a vector).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v_avg = Δx / Δt (m/s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>0 m ÷ 80 s = 0 m/s</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">instantaneous speed</strong>
    </p>
    <p style="margin:6px 0;">The speed at one moment, such as a speedometer reading.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v (m/s)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The speedometer shows 25 m/s.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Distance and Displacement</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 230" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Distance vs. Displacement: 3 km East, Then 1 km West</text><line x1="40" y1="170" x2="660" y2="170" stroke="#94a3b8" stroke-width="2"/><line x1="70" y1="164" x2="70" y2="176" stroke="#94a3b8"/><text x="70" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text><line x1="126" y1="164" x2="126" y2="176" stroke="#94a3b8"/><text x="126" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">-0.5</text><line x1="182" y1="164" x2="182" y2="176" stroke="#94a3b8"/><text x="182" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">0</text><line x1="238" y1="164" x2="238" y2="176" stroke="#94a3b8"/><text x="238" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">0.5</text><line x1="294" y1="164" x2="294" y2="176" stroke="#94a3b8"/><text x="294" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><line x1="350" y1="164" x2="350" y2="176" stroke="#94a3b8"/><text x="350" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">1.5</text><line x1="406" y1="164" x2="406" y2="176" stroke="#94a3b8"/><text x="406" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><line x1="462" y1="164" x2="462" y2="176" stroke="#94a3b8"/><text x="462" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">2.5</text><line x1="518" y1="164" x2="518" y2="176" stroke="#94a3b8"/><text x="518" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><line x1="574" y1="164" x2="574" y2="176" stroke="#94a3b8"/><text x="574" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">3.5</text><line x1="630" y1="164" x2="630" y2="176" stroke="#94a3b8"/><text x="630" y="194" fill="#94a3b8" font-size="11" text-anchor="middle">4</text><text x="660" y="214" fill="#94a3b8" font-size="11" text-anchor="end">position (km); east is positive</text><line x1="182" y1="80" x2="506.0" y2="80.0" stroke="#fde68a" stroke-width="3"/><polygon points="518,80 506.0,86.0 506.0,74.0" fill="#fde68a"/><text x="350" y="70" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">walk 1: +3 km</text><line x1="518" y1="110" x2="418.0" y2="110.0" stroke="#f9a8d4" stroke-width="3"/><polygon points="406,110 418.0,104.0 418.0,116.0" fill="#f9a8d4"/><text x="462" y="132" fill="#f9a8d4" font-size="13" font-weight="bold" text-anchor="middle">walk 2: −1 km</text><line x1="182" y1="150" x2="394.0" y2="150.0" stroke="#86efac" stroke-width="4"/><polygon points="406,150 394.0,156.0 394.0,144.0" fill="#86efac"/><text x="190" y="144" fill="#86efac" font-size="12" font-weight="bold">displacement +2 km</text><circle cx="182" cy="170" r="6" fill="#e3f2fd"/><text x="182" y="214" fill="#e3f2fd" font-size="11" text-anchor="middle">start</text><text x="607.6" y="96" fill="#e2e8f0" font-size="12" text-anchor="middle">distance = 4 km</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Displacement</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Δx = x_f − x_i</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> x_f is the final position and x_i is the initial position.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> meters (m)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding how far and in which direction an object moved overall.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Adding all the path lengths, which gives distance, not displacement.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Only the start and end points matter for displacement.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Speed and Velocity</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Average speed and average velocity</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">average speed = d / Δt;   v_avg = Δx / Δt</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> d is distance, Δx is displacement and Δt is the time taken.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m/s</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Describing how fast and in which direction an object moved on average.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using distance in the velocity formula.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Velocity “inherits” the sign of the displacement.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: A walk with a turn-around</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A student walks 3.0 km east and then 1.0 km west in a total of 1.0 hour. Find the distance, displacement, average speed and average velocity.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Distance</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3.0 + 1.0 = 4.0 km</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Displacement</strong>
    </p>
    <div style="margin:6px 0 0 34px;">+3.0 − 1.0 = +2.0 km (2.0 km east)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Average speed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4.0 km ÷ 1.0 h = 4.0 km/h</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Average velocity</strong>
    </p>
    <div style="margin:6px 0 0 34px;">+2.0 km ÷ 1.0 h = +2.0 km/h (east)</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Distance 4.0 km; displacement 2.0 km east; average speed 4.0 km/h; average velocity 2.0 km/h east.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Speed and velocity differ whenever the motion changes direction.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: One lap of a track</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A runner completes one 400 m lap in 80 s and finishes where she started. Find her average speed and average velocity.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Average speed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">400 m ÷ 80 s = 5.0 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Displacement</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 m (same start and finish)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Average velocity</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 m ÷ 80 s = 0 m/s</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Average speed 5.0 m/s; average velocity 0 m/s.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Thinking zero average velocity means she never moved.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Average vs. Instantaneous</h3>
    <p>A car trip of 120 km in 2.0 hours has an average speed of 60 km/h, but the car may have stopped at traffic lights and sped up to 100 km/h on the highway. The speedometer shows the <strong>instantaneous speed</strong> — the speed at a single moment.</p>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> A ball rolls 6 m forward and 2 m back. What are its distance and displacement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Distance 8 m; displacement 4 m forward.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Can average speed be greater than the size of average velocity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — whenever the path changes direction.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What does a speedometer measure?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Instantaneous speed.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep walkways clear and work only in the area your teacher assigns, especially when carts, balls or other objects are moving.</li>
    <li>Never stand under or in the path of a falling or launched object, and catch or stop objects only as instructed.</li>
    <li>Wear safety goggles whenever objects are launched, dropped from a height or under tension (springs, rubber bands).</li>
    <li>Report any damaged equipment, spills or injuries to your teacher at once, and return all equipment when finished.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using mathematics (SEP 5)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Distinguishing scalars and vectors</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Choosing a reference point</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting signs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking reasonableness</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Many errors come from not choosing an origin and a positive direction before starting. Draw a quick number line, mark the start, label the positive direction and then track positions. This simple diagram prevents most sign errors in kinematics.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>A plane flies from New York to London and back. Which is larger, its average speed or the magnitude of its average velocity? Why?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80deea;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Physics in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Fitness apps report distance run (a scalar), while navigation apps care about displacement — where you end up.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Meteorologists track a hurricane’s velocity, not just its speed, because its direction determines which coasts are at risk.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Pilots, ship navigators, sports analysts and robotics engineers work with displacement and velocity vectors.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What does Δx mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Δ = change.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Change in position (displacement).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> A car goes 150 km in 2.5 h. Find its average speed.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Distance ÷ time.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">60 km/h.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which depends on the path: distance or displacement?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Total length traveled.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Distance.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Walk a path around your home or school, measuring the distance and the straight-line displacement from start to finish.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write three “motion stories” in which distance and displacement are different; your partner calculates both.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Measure a classmate walking across the room and back, and calculate the average speed and average velocity.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a map app’s measuring tool to compare the walking distance and the straight-line displacement between two places.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define displacement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The change in position, with direction.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A cyclist travels 30 km in 1.5 h. Find the average speed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">20 km/h.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A dog runs 12 m east, then 20 m west in 8.0 s. Find its average velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Δx = −8 m; v_avg = −1.0 m/s (1.0 m/s west).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why is the average velocity for a full lap zero?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The start and finish positions are the same, so the displacement is zero.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80deea;">
    <p style="margin:0 0 6px 0;color:#80deea;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A car travels 60 km north in 1.0 h and then returns 60 km south in 1.5 h. Find the average speed and average velocity for the whole trip.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Average speed = 120 km ÷ 2.5 h = 48 km/h; average velocity = 0.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A swimmer swims 4 lengths of a 50 m pool in 2 minutes. What are the distance and displacement?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Distance 200 m; displacement 0 m (back at the start).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 5: Explain why average speed and average velocity can differ for the same trip.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Speed uses total distance, while velocity uses displacement; if the path changes direction, distance is larger than the size of the displacement.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Distance is the total path length; displacement Δx = x_f − x_i is the change in position, with direction. Average speed is distance divided by time; average velocity is displacement divided by time, so it has a direction. When an object changes direction, its distance is greater than its displacement, and its average speed is greater than the size of its average velocity. A speedometer shows instantaneous speed.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distance = path length (scalar).</li>
    <li>Displacement = Δx (vector).</li>
    <li>Speed = d/Δt; velocity = Δx/Δt.</li>
    <li>Full lap: velocity = 0.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Choose an origin and positive direction.</li>
    <li>Only start and finish matter for displacement.</li>
    <li>Velocity has a sign.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using distance for velocity.</li>
    <li>Forgetting direction.</li>
    <li>Confusing average and instantaneous speed.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw a number line.</li>
    <li>Label positions.</li>
    <li>Check signs at the end.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State direction with every vector answer.</li>
    <li>Show Δx = x_f − x_i.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speed and velocity calculations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number lines and signs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Crosscutting: patterns</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing motions.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Clear thinking</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Navigation</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sports and fitness</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every navigation system, from a phone map to a spacecraft, depends on displacement and velocity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve eight distance, displacement, speed and velocity problems.</li>
    <li>Describe a trip you took using both distance and displacement.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When does the difference between speed and velocity matter?</li>
    <li>Did choosing a positive direction help me?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Distance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Path length.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Displacement</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change in position.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Speed</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance per time.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Velocity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Displacement per time.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can distinguish distance and displacement.</p>
    <p style="margin:6px 0;">☐ I can distinguish speed and velocity.</p>
    <p style="margin:6px 0;">☐ I can calculate averages.</p>
    <p style="margin:6px 0;">☐ I can explain instantaneous speed.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Distance is a:',
            options: ['Vector', 'Unit', 'Scalar', 'Acceleration'],
            correct: 2,
            explanation: 'The answer is Scalar. No direction.'
        },
        {
            question: 'Displacement is:',
            options: ['The total path length', 'The time taken', 'The speed', 'The change in position'],
            correct: 3,
            explanation: 'The answer is The change in position. Δx = x_f − x_i.'
        },
        {
            question: 'A person walks 5 m north and 5 m south. The displacement is:',
            options: ['10 m', '5 m north', '0 m', '5 m south'],
            correct: 2,
            explanation: 'The answer is 0 m. Back at the start.'
        },
        {
            question: 'Average speed equals:',
            options: ['Displacement ÷ time', 'Time ÷ distance', 'Distance × time', 'Distance ÷ time'],
            correct: 3,
            explanation: 'The answer is Distance ÷ time. A scalar ratio.'
        },
        {
            question: 'Average velocity equals:',
            options: ['Displacement ÷ time', 'Distance ÷ time', 'Speed × time', 'Time ÷ displacement'],
            correct: 0,
            explanation: 'The answer is Displacement ÷ time. A vector ratio.'
        },
        {
            question: 'A runner finishes a 400 m lap in 80 s. Her average speed is:',
            options: ['0 m/s', '5.0 m/s', '320 m/s', '0.2 m/s'],
            correct: 1,
            explanation: 'The answer is 5.0 m/s. 400 ÷ 80.'
        },
        {
            question: 'A speedometer shows:',
            options: ['Average velocity', 'Displacement', 'Instantaneous speed', 'Distance'],
            correct: 2,
            explanation: 'The answer is Instantaneous speed. Speed at one moment.'
        },
        {
            question: 'A car travels 3 km east then 1 km west in 0.5 h. Its average velocity is:',
            options: ['4 km/h east', '8 km/h east', '2 km/h east', '4 km/h west'],
            correct: 0,
            explanation: 'The answer is 4 km/h east. +2 km ÷ 0.5 h.'
        },
        {
            question: 'Δ means:',
            options: ['Total of', 'Change in', 'Average of', 'Direction of'],
            correct: 1,
            explanation: 'The answer is Change in. Delta.'
        },
        {
            question: 'When can distance equal the size of displacement?',
            options: ['When motion is in one direction without turning back', 'Never', 'Only at rest', 'Only in circles'],
            correct: 0,
            explanation: 'The answer is When motion is in one direction without turning back. No reversal.'
        }
    ]
},
{
    name: '1.1.3 Position–Time Graphs',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Where, How Fast and Which Way</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Position–Time Graphs</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn to draw and interpret position–time graphs, find velocity from the slope, and describe motion stories from graphs and graphs from motion stories.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Graphs let scientists see motion at a glance. Coaches, engineers and self-driving cars all use motion graphs to analyze and predict movement.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Sports performance</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Self-driving cars</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Fitness trackers</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚆 Train timetables</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game physics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Lab experiments</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SI units, unit conversion and significant figures in calculations. (SEP 5)</li>
    <li>Distinguish scalars from vectors and distance from displacement.</li>
    <li>Calculate average speed and average velocity.</li>
    <li>Create and interpret position–time graphs. (SEP 4)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Plot position–time data.</li>
    <li>Find velocity from the slope of a position–time graph.</li>
    <li>Interpret flat, steep and negative slopes.</li>
    <li>Translate between motion stories and graphs.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> What can the shape of a position–time graph tell us about motion?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Algebra you learned that slope = rise ÷ run. On a position–time graph, the rise is a displacement and the run is a time, so the slope is a velocity.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>position–time graph</strong> (x–t graph) shows where an object is at each moment. Time goes on the horizontal axis and position on the vertical axis. Because slope = rise ÷ run = Δx ÷ Δt, <strong>the slope of a position–time graph is the velocity</strong>.</p>
    <p>A straight line means constant velocity. A steeper line means a greater speed. A horizontal line means the object is at rest. A line sloping downward means the object is moving in the negative direction. A curved line means the velocity is changing — the object is accelerating.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>On an x–t graph: slope = velocity. Flat = stopped; steep = fast; downhill = going backward; curved = speeding up or slowing down.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>Motion detectors in school labs send out ultrasonic pulses and time their echoes, the same principle bats and parking sensors use. A computer converts each echo time into a position and draws a position–time graph in real time.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">position–time graph</strong>
    </p>
    <p style="margin:6px 0;">A graph of position versus time.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> x–t graph</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The slope gives velocity.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">slope</strong>
    </p>
    <p style="margin:6px 0;">Rise over run; on an x–t graph, Δx ÷ Δt.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> m/s</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A slope of 3 m/s.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">constant velocity</strong>
    </p>
    <p style="margin:6px 0;">Moving at the same speed in the same direction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> straight line on x–t</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A car on cruise control.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">at rest</strong>
    </p>
    <p style="margin:6px 0;">Not moving; position does not change.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> horizontal line</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Waiting at a light.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">origin</strong>
    </p>
    <p style="margin:6px 0;">The reference point where position is zero.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> x = 0</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The starting line.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">acceleration (preview)</strong>
    </p>
    <p style="margin:6px 0;">A change in velocity; shown by a curved x–t graph.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> curve</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A car pulling away from a light.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Reading Position–Time Graphs</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="22" fill="#e3f2fd" font-size="16" font-weight="bold" text-anchor="middle">Position–Time Graph of a Walker</text><line x1="56" y1="40" x2="56" y2="290" stroke="#1e293b"/><text x="56" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">0</text><line x1="118.4" y1="40" x2="118.4" y2="290" stroke="#1e293b"/><text x="118.4" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><line x1="180.8" y1="40" x2="180.8" y2="290" stroke="#1e293b"/><text x="180.8" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><line x1="243.2" y1="40" x2="243.2" y2="290" stroke="#1e293b"/><text x="243.2" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><line x1="305.6" y1="40" x2="305.6" y2="290" stroke="#1e293b"/><text x="305.6" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">4</text><line x1="368" y1="40" x2="368" y2="290" stroke="#1e293b"/><text x="368" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">5</text><line x1="430.4" y1="40" x2="430.4" y2="290" stroke="#1e293b"/><text x="430.4" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">6</text><line x1="492.79999999999995" y1="40" x2="492.79999999999995" y2="290" stroke="#1e293b"/><text x="492.79999999999995" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">7</text><line x1="555.2" y1="40" x2="555.2" y2="290" stroke="#1e293b"/><text x="555.2" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">8</text><line x1="617.6" y1="40" x2="617.6" y2="290" stroke="#1e293b"/><text x="617.6" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">9</text><line x1="680" y1="40" x2="680" y2="290" stroke="#1e293b"/><text x="680" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">10</text><line x1="56" y1="290" x2="680" y2="290" stroke="#1e293b"/><text x="50" y="294" fill="#94a3b8" font-size="11" text-anchor="end">0</text><line x1="56" y1="258.75" x2="680" y2="258.75" stroke="#1e293b"/><text x="50" y="262.75" fill="#94a3b8" font-size="11" text-anchor="end">2</text><line x1="56" y1="227.5" x2="680" y2="227.5" stroke="#1e293b"/><text x="50" y="231.5" fill="#94a3b8" font-size="11" text-anchor="end">4</text><line x1="56" y1="196.25" x2="680" y2="196.25" stroke="#1e293b"/><text x="50" y="200.25" fill="#94a3b8" font-size="11" text-anchor="end">6</text><line x1="56" y1="165" x2="680" y2="165" stroke="#1e293b"/><text x="50" y="169" fill="#94a3b8" font-size="11" text-anchor="end">8</text><line x1="56" y1="133.75" x2="680" y2="133.75" stroke="#1e293b"/><text x="50" y="137.75" fill="#94a3b8" font-size="11" text-anchor="end">10</text><line x1="56" y1="102.5" x2="680" y2="102.5" stroke="#1e293b"/><text x="50" y="106.5" fill="#94a3b8" font-size="11" text-anchor="end">12</text><line x1="56" y1="71.25" x2="680" y2="71.25" stroke="#1e293b"/><text x="50" y="75.25" fill="#94a3b8" font-size="11" text-anchor="end">14</text><line x1="56" y1="40" x2="680" y2="40" stroke="#1e293b"/><text x="50" y="44" fill="#94a3b8" font-size="11" text-anchor="end">16</text><line x1="56" y1="290" x2="680" y2="290" stroke="#94a3b8" stroke-width="1.5"/><line x1="56" y1="40" x2="56" y2="290" stroke="#94a3b8" stroke-width="1.5"/><text x="368" y="324" fill="#94a3b8" font-size="12" text-anchor="middle">time (s)</text><text x="16" y="165" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90 16 165)">position (m)</text><polyline points="56.0,258.8 305.6,71.3" fill="none" stroke="#86efac" stroke-width="3"/><polyline points="305.6,71.3 430.4,71.3" fill="none" stroke="#fde68a" stroke-width="3"/><polyline points="430.4,71.3 680.0,196.3" fill="none" stroke="#f9a8d4" stroke-width="3"/><circle cx="56" cy="258.75" r="5" fill="#e3f2fd"/><circle cx="305.6" cy="71.25" r="5" fill="#e3f2fd"/><circle cx="430.4" cy="71.25" r="5" fill="#e3f2fd"/><circle cx="680" cy="196.25" r="5" fill="#e3f2fd"/><text x="149.6" y="110.3125" fill="#86efac" font-size="12" font-weight="bold" text-anchor="middle">A: v = +3 m/s</text><text x="368" y="52.500000000000014" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">B: at rest</text><text x="592.64" y="96.25" fill="#f9a8d4" font-size="12" font-weight="bold" text-anchor="middle">C: v = −2 m/s</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Segment</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Slope</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0–4 s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(14 − 2) ÷ 4 = +3 m/s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moving in the positive direction at 3 m/s</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4–6 s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 m/s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At rest at 14 m</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6–10 s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(6 − 14) ÷ 4 = −2 m/s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moving back toward the origin at 2 m/s</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Calculating from a Graph</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Velocity from an x–t graph</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">v = slope = Δx / Δt = (x₂ − x₁) / (t₂ − t₁)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Choose two points on a straight segment.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m/s</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding the velocity during a straight segment of an x–t graph.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Reading the position value at a point and calling it the velocity.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Velocity is the steepness, not the height, of the graph.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Whole-trip analysis (SEP 4)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Using the walker’s graph, find the total distance, the displacement and the average velocity for 0–10 s.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Distance</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A: 12 m; B: 0 m; C: 8 m. Total = 20 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Displacement</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x_f − x_i = 6 − 2 = +4 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Average velocity</strong>
    </p>
    <div style="margin:6px 0 0 34px;">+4 m ÷ 10 s = +0.4 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Average speed</strong>
    </p>
    <div style="margin:6px 0 0 34px;">20 m ÷ 10 s = 2.0 m/s</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Distance 20 m; displacement +4 m; average velocity +0.4 m/s; average speed 2.0 m/s.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The graph shows every position, so you can find both distance (all the movement) and displacement (start to finish).</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Confusing “higher on the graph” with “faster.” Height is position; steepness is speed.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. From Stories to Graphs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Motion story</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Shape of the x–t graph</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Standing still</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal line</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Walking away slowly at a steady pace</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight line with a small positive slope</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Running away quickly at a steady pace</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight line with a large positive slope</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Walking back toward the start</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight line with a negative slope</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speeding up while moving away</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Curve that gets steeper</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slowing down while moving away</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Curve that gets flatter</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does a horizontal x–t line mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The object is at rest.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> On an x–t graph, a line goes from (0 s, 10 m) to (5 s, 0 m). Find the velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−2 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What does a curved x–t graph show?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The velocity is changing (acceleration).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep walkways clear and work only in the area your teacher assigns, especially when carts, balls or other objects are moving.</li>
    <li>Never stand under or in the path of a falling or launched object, and catch or stop objects only as instructed.</li>
    <li>Wear safety goggles whenever objects are launched, dropped from a height or under tension (springs, rubber bands).</li>
    <li>Report any damaged equipment, spills or injuries to your teacher at once, and return all equipment when finished.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analyzing and interpreting data (SEP 4)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using mathematics (SEP 5)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graphing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modeling motion</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Translating representations</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>A common misconception is to read an x–t graph as a picture of the path — for example, thinking a line that goes up means the object climbed a hill. The graph shows position over time, not the shape of the road. Always read the axes before interpreting a graph.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Can a position–time graph ever be a vertical line? What would that mean, and why is it impossible?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80deea;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Physics in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Train and bus timetables can be drawn as position–time graphs; steeper sections show faster travel.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Glaciologists plot a glacier’s position over years to measure how fast it is moving.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Sports scientists, transport planners and robotics engineers analyze position–time data to improve performance and safety.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is on the horizontal axis of an x–t graph?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: t.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Time.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What does the slope of an x–t graph equal?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Δx/Δt.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Velocity.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What does a negative slope mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Going back.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Motion in the negative direction.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw an x–t graph of your trip to school, including any stops.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner draws an x–t graph; the other acts out the motion. Swap roles.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Use a motion detector or phone app (if available) to make your walk match a target x–t graph.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a free motion-graph simulation to move an object and watch its x–t graph form. Try to create a graph with all three segment types.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What does a steeper straight line on an x–t graph mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A greater speed.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the velocity for a line from (0 s, 0 m) to (4 s, 20 m).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5 m/s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Describe the motion for a line from (2 s, 8 m) to (6 s, 8 m).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">At rest at 8 m for 4 s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A line goes from (0 s, 30 m) to (6 s, 12 m). Find the velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−3 m/s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80deea;">
    <p style="margin:0 0 6px 0;color:#80deea;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> An object moves at +4 m/s for 3 s from x = 0, rests for 2 s, then moves at −6 m/s for 2 s. Find its final position and draw the graph.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0 → 12 m, stays at 12 m, then 12 − 12 = 0 m; graph: rising line, flat line, falling line.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A bus timetable shows it travels 18 km in 30 minutes, waits 10 minutes, then travels 12 km in 20 minutes. What is its speed on each moving part in km/h?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">36 km/h and 36 km/h.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 4: Explain how to tell which of two walkers is faster from their x–t graphs.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The walker whose straight-line graph is steeper has the greater speed.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>A position–time graph shows where an object is at each moment. Its slope, Δx/Δt, is the velocity: a straight line means constant velocity, steeper means faster, horizontal means at rest, a negative slope means moving in the negative direction, and a curve means the velocity is changing. From an x–t graph you can find distance, displacement, average speed and average velocity.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Slope of x–t = velocity.</li>
    <li>Flat = rest; steep = fast; downhill = negative direction.</li>
    <li>Curve = acceleration.</li>
    <li>Read the axes first.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Height = position, not speed.</li>
    <li>Graphs are not pictures of the path.</li>
    <li>Use two points for slope.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reading position as velocity.</li>
    <li>Thinking up means uphill.</li>
    <li>Ignoring units on axes.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Label each segment.</li>
    <li>Calculate slope with units.</li>
    <li>Act out graphs to check them.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show slope calculations.</li>
    <li>Describe motion in words with direction.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpreting graphs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 5 Mathematics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slope as velocity.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphs as models.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Clear communication</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Transport</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sports and technology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Reading motion graphs is the first step to understanding how cars, athletes and spacecraft move.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Analyze three x–t graphs from your teacher.</li>
    <li>Write a motion story and draw its matching graph.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which graph shape is hardest for me to interpret?</li>
    <li>How does slope connect algebra and physics?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">x–t graph</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Position vs. time.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Slope</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Velocity on x–t.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">At rest</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flat line.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Constant velocity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight line.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can plot x–t data.</p>
    <p style="margin:6px 0;">☐ I can find velocity from slope.</p>
    <p style="margin:6px 0;">☐ I can interpret graph shapes.</p>
    <p style="margin:6px 0;">☐ I can match stories and graphs.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The slope of a position–time graph equals:',
            options: ['Velocity', 'Acceleration', 'Position', 'Distance'],
            correct: 0,
            explanation: 'The answer is Velocity. Δx/Δt.'
        },
        {
            question: 'A horizontal line on an x–t graph means:',
            options: ['Constant acceleration', 'At rest', 'Very fast motion', 'Moving backward'],
            correct: 1,
            explanation: 'The answer is At rest. Position is not changing.'
        },
        {
            question: 'A line from (0 s, 0 m) to (5 s, 15 m) shows a velocity of:',
            options: ['15 m/s', '75 m/s', '0.33 m/s', '3 m/s'],
            correct: 3,
            explanation: 'The answer is 3 m/s. 15 ÷ 5.'
        },
        {
            question: 'A negative slope on an x–t graph means the object:',
            options: ['Moves in the negative direction', 'Is at rest', 'Is speeding up', 'Has zero velocity'],
            correct: 0,
            explanation: 'The answer is Moves in the negative direction. Position decreases.'
        },
        {
            question: 'A curved x–t graph shows:',
            options: ['Constant velocity', 'Changing velocity', 'Rest', 'Zero displacement'],
            correct: 1,
            explanation: 'The answer is Changing velocity. Acceleration.'
        },
        {
            question: 'Which line shows the fastest constant speed?',
            options: ['A horizontal line', 'The steepest straight line', 'The flattest line', 'A vertical line'],
            correct: 1,
            explanation: 'The answer is The steepest straight line. Steepness = speed.'
        },
        {
            question: 'For the walker, the displacement from 0 to 10 s is:',
            options: ['+20 m', '−4 m', '0 m', '+4 m'],
            correct: 3,
            explanation: 'The answer is +4 m. 6 − 2.'
        },
        {
            question: 'For the walker, the total distance from 0 to 10 s is:',
            options: ['4 m', '14 m', '20 m', '6 m'],
            correct: 2,
            explanation: 'The answer is 20 m. 12 + 0 + 8.'
        },
        {
            question: 'A higher point on an x–t graph means the object is:',
            options: ['Farther from the origin in the positive direction', 'Faster', 'Accelerating', 'Uphill'],
            correct: 0,
            explanation: 'The answer is Farther from the origin in the positive direction. Height is position.'
        },
        {
            question: 'Why can an x–t graph not be vertical?',
            options: ['Graphs must be curved', 'Time stops', 'It is too steep to draw', 'An object cannot be at two positions at one time'],
            correct: 3,
            explanation: 'That would need infinite speed.'
        }
    ]
},
{
    name: '1.1 Lab: Constant-Velocity Motion',
    type: 'lesson',
    duration: '55 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lab</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Lab: Constant-Velocity Motion</h2>
    <p style="font-size:16px;">In this lab you will measure the position of a battery-powered toy car (or a student walking at a steady pace) at regular time intervals, graph position versus time and use the slope to find its velocity.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Space</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use a clear, flat floor area away from doors and walkways.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moving objects</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stop the car by hand only at the end of the track; never step on it.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Batteries</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Switch the car off when not in use and report any hot or damaged batteries.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Assign roles: releaser, timer(s), recorder and data checker.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Lab Investigation: Measuring Constant Velocity</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To determine whether a toy car moves with constant velocity and to find its velocity from the slope of a position–time graph.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Battery-powered toy car (or student walker)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Meterstick or measuring tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Masking tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatches or phone timers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper or spreadsheet</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">A straight 5 m track marked every 1.0 m with tape</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Several timers stationed at the marks</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep the track clear.</li>
    <li>Do not run in the classroom.</li>
    <li>Return all equipment.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a hypothesis: if the car moves at a constant velocity, then its position–time graph will be a straight line, because it covers equal distances in equal times.</li>
    <li>Mark positions 0.0 m to 5.0 m on the floor every 1.0 m.</li>
    <li>Station a timer at each mark. All timers start when the car passes the 0.0 m mark.</li>
    <li>Release the car a little behind the 0.0 m mark so it is already moving steadily at the start.</li>
    <li>Each timer stops their watch as the car passes their mark. Record the times.</li>
    <li>Repeat for three trials and average the times at each mark.</li>
    <li>Plot position (vertical axis) against average time (horizontal axis), draw a best-fit line and calculate its slope.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Position (m)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">0.0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">1.0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2.0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">3.0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">4.0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">5.0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trial 1 time (s)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trial 2 time (s)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trial 3 time (s)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Average time (s)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sample data (s)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.0</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="22" fill="#e3f2fd" font-size="16" font-weight="bold" text-anchor="middle">Sample Constant-Velocity Data</text><line x1="56" y1="40" x2="56" y2="260" stroke="#1e293b"/><text x="56" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">0</text><line x1="125.33333333333333" y1="40" x2="125.33333333333333" y2="260" stroke="#1e293b"/><text x="125.33333333333333" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">0.5</text><line x1="194.66666666666666" y1="40" x2="194.66666666666666" y2="260" stroke="#1e293b"/><text x="194.66666666666666" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><line x1="264" y1="40" x2="264" y2="260" stroke="#1e293b"/><text x="264" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">1.5</text><line x1="333.3333333333333" y1="40" x2="333.3333333333333" y2="260" stroke="#1e293b"/><text x="333.3333333333333" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><line x1="402.6666666666667" y1="40" x2="402.6666666666667" y2="260" stroke="#1e293b"/><text x="402.6666666666667" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">2.5</text><line x1="472" y1="40" x2="472" y2="260" stroke="#1e293b"/><text x="472" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><line x1="541.3333333333333" y1="40" x2="541.3333333333333" y2="260" stroke="#1e293b"/><text x="541.3333333333333" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">3.5</text><line x1="610.6666666666666" y1="40" x2="610.6666666666666" y2="260" stroke="#1e293b"/><text x="610.6666666666666" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">4</text><line x1="680" y1="40" x2="680" y2="260" stroke="#1e293b"/><text x="680" y="275" fill="#94a3b8" font-size="11" text-anchor="middle">4.5</text><line x1="56" y1="260" x2="680" y2="260" stroke="#1e293b"/><text x="50" y="264" fill="#94a3b8" font-size="11" text-anchor="end">0</text><line x1="56" y1="223.33333333333334" x2="680" y2="223.33333333333334" stroke="#1e293b"/><text x="50" y="227.33333333333334" fill="#94a3b8" font-size="11" text-anchor="end">1</text><line x1="56" y1="186.66666666666666" x2="680" y2="186.66666666666666" stroke="#1e293b"/><text x="50" y="190.66666666666666" fill="#94a3b8" font-size="11" text-anchor="end">2</text><line x1="56" y1="150" x2="680" y2="150" stroke="#1e293b"/><text x="50" y="154" fill="#94a3b8" font-size="11" text-anchor="end">3</text><line x1="56" y1="113.33333333333333" x2="680" y2="113.33333333333333" stroke="#1e293b"/><text x="50" y="117.33333333333333" fill="#94a3b8" font-size="11" text-anchor="end">4</text><line x1="56" y1="76.66666666666666" x2="680" y2="76.66666666666666" stroke="#1e293b"/><text x="50" y="80.66666666666666" fill="#94a3b8" font-size="11" text-anchor="end">5</text><line x1="56" y1="40" x2="680" y2="40" stroke="#1e293b"/><text x="50" y="44" fill="#94a3b8" font-size="11" text-anchor="end">6</text><line x1="56" y1="260" x2="680" y2="260" stroke="#94a3b8" stroke-width="1.5"/><line x1="56" y1="40" x2="56" y2="260" stroke="#94a3b8" stroke-width="1.5"/><text x="368" y="294" fill="#94a3b8" font-size="12" text-anchor="middle">time (s)</text><text x="16" y="150" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90 16 150)">position (m)</text><polyline points="56.0,260.0 666.1,58.3" fill="none" stroke="#80deea" stroke-width="3"/><circle cx="56" cy="260" r="5" fill="#fde68a"/><circle cx="166.93333333333334" cy="223.33333333333334" r="5" fill="#fde68a"/><circle cx="277.8666666666667" cy="186.66666666666666" r="5" fill="#fde68a"/><circle cx="388.8" cy="150" r="5" fill="#fde68a"/><circle cx="499.73333333333335" cy="113.33333333333333" r="5" fill="#fde68a"/><circle cx="610.6666666666666" cy="76.66666666666666" r="5" fill="#fde68a"/><text x="250.13333333333333" y="98.66666666666666" fill="#80deea" font-size="12" font-weight="bold" text-anchor="middle">slope = 5.0 m ÷ 4.0 s = 1.25 m/s</text>
    </svg>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Using the sample data, what is the car’s velocity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Slope = 5.0 m ÷ 4.0 s = 1.25 m/s, about 1.3 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Does the data support the hypothesis?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — the points lie on a straight line, so the velocity is constant.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why release the car before the 0.0 m mark?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">So it has reached a steady speed and is not still speeding up at the start.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The car’s position–time graph is a straight line, so it moves with constant velocity; the slope of the best-fit line gives its velocity, about 1.25 m/s for the sample data.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Equal distances are covered in equal time intervals, so the ratio Δx/Δt stays the same — the definition of constant velocity.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Human reaction time when starting and stopping timers (often about 0.2 s).</li>
    <li>The car drifting off a straight line.</li>
    <li>Weakening batteries slowing the car between trials.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Engineers test vehicles and conveyor belts in the same way to check that they move at the designed speed.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Write a lab report with your hypothesis, data table, graph, slope calculation and conclusion. Explain how reaction time affected your data and how using several trials helped.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A best-fit line does not have to pass through every point; it shows the overall trend in the data.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Lab Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What does the slope of your graph represent?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The car’s velocity.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What shape shows constant velocity?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A straight line.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why average three trials?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To reduce the effect of random errors, such as reaction time.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How could you reduce timing errors?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Use a video recording with a timer, light gates or a motion detector.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How would the graph change for a faster car?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The line would be steeper.</div>
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
            question: 'The purpose of the lab is to:',
            options: ['Determine whether the car moves at constant velocity', 'Measure the car’s mass', 'Test battery voltage', 'Measure friction'],
            correct: 0,
            explanation: 'The answer is Determine whether the car moves at constant velocity. Constant velocity.'
        },
        {
            question: 'On the position–time graph, the car’s velocity equals the:',
            options: ['Slope', 'y-intercept', 'Area', 'Highest point'],
            correct: 0,
            explanation: 'The answer is Slope. Δx/Δt.'
        },
        {
            question: 'Using the sample data, the velocity is about:',
            options: ['4.0 m/s', '1.25 m/s', '0.8 m/s', '5.0 m/s'],
            correct: 1,
            explanation: 'The answer is 1.25 m/s. 5.0 ÷ 4.0.'
        },
        {
            question: 'A main source of error is:',
            options: ['The color of the car', 'The tape color', 'Reaction time of the timers', 'The room temperature'],
            correct: 2,
            explanation: 'The answer is Reaction time of the timers. Human timing.'
        },
        {
            question: 'A straight-line position–time graph shows:',
            options: ['Increasing speed', 'Rest', 'Constant velocity', 'Decreasing speed'],
            correct: 2,
            explanation: 'Equal distances in equal times.'
        },
        {
            question: 'Repeating trials helps to:',
            options: ['Make the car faster', 'Avoid graphing', 'Change the hypothesis', 'Reduce random error'],
            correct: 3,
            explanation: 'The answer is Reduce random error. Averages are more reliable.'
        }
    ]
},
{
    name: '1.1 Quiz: Describing Motion',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Describing Motion</h2>
    <p style="font-size:16px;">Test your understanding of units, vectors, displacement, velocity and position–time graphs from Topic 1.1.</p>
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
    <li>SI units and dimensional analysis</li>
    <li>Significant figures</li>
    <li>Scalars and vectors</li>
    <li>Distance and displacement</li>
    <li>Speed and velocity</li>
    <li>Position–time graphs</li>
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
    <div>Draw a number line and choose a positive direction before solving any displacement or velocity problem.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Convert 54 km/h to m/s.',
            options: ['54 m/s', '15 m/s', '5.4 m/s', '150 m/s'],
            correct: 1,
            explanation: 'The answer is 15 m/s. 54 × 1000 ÷ 3600.'
        },
        {
            question: 'How many significant figures are in 6.020 m?',
            options: ['3', '4', '2', '5'],
            correct: 1,
            explanation: 'All digits count, including the trailing zero.'
        },
        {
            question: 'Which pair is scalar then vector?',
            options: ['Velocity, speed', 'Displacement, distance', 'Speed, velocity', 'Acceleration, time'],
            correct: 2,
            explanation: 'The answer is Speed, velocity. Speed has no direction.'
        },
        {
            question: 'A car drives 8 km east and then 3 km west. Its displacement is:',
            options: ['11 km east', '5 km west', '11 km west', '5 km east'],
            correct: 3,
            explanation: 'The answer is 5 km east. +8 − 3.'
        },
        {
            question: 'For the same trip, the distance is:',
            options: ['5 km', '3 km', '11 km', '8 km'],
            correct: 2,
            explanation: 'The answer is 11 km. 8 + 3.'
        },
        {
            question: 'A swimmer swims 100 m in 50 s and ends at the start. Her average velocity is:',
            options: ['2 m/s', '5,000 m/s', '0.5 m/s', '0 m/s'],
            correct: 3,
            explanation: 'The answer is 0 m/s. Zero displacement.'
        },
        {
            question: 'On an x–t graph, a line from (0 s, 4 m) to (2 s, 10 m) gives a velocity of:',
            options: ['5 m/s', '3 m/s', '6 m/s', '2 m/s'],
            correct: 1,
            explanation: 'The answer is 3 m/s. 6 ÷ 2.'
        },
        {
            question: 'A flat segment on an x–t graph means:',
            options: ['The object is at rest', 'The object moves fastest', 'The object accelerates', 'The object reverses'],
            correct: 0,
            explanation: 'The answer is The object is at rest. No change in position.'
        },
        {
            question: 'Which shows an object moving in the negative direction?',
            options: ['A downward-sloping x–t line', 'An upward-sloping x–t line', 'A horizontal x–t line', 'Any curved line'],
            correct: 0,
            explanation: 'The answer is A downward-sloping x–t line. Negative slope.'
        },
        {
            question: 'The prefix “milli” means:',
            options: ['10³', '10⁻²', '10⁶', '10⁻³'],
            correct: 3,
            explanation: 'The answer is 10⁻³. One thousandth.'
        }
    ]
},
{
    name: '1.1 Assignment: Motion Graph Story',
    type: 'lesson',
    duration: '100 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 100 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Motion Graph Story</h2>
    <p style="font-size:16px;">Create an illustrated “motion story” of a real or imagined journey with at least five parts, and present it with a matching position–time graph, calculations and a written analysis.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 100 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Physicists move constantly between words, numbers and graphs. In this assignment you will tell a story of a journey — a trip to a shop, a race or a delivery robot’s route — and represent it precisely with a position–time graph and calculations.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Choose a positive direction and an origin at the start, and state them clearly on your graph.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a story of a journey with at least five parts, including at least one stop and one part moving in the negative direction.</li>
    <li>Give each part a time interval and a constant velocity, with units.</li>
    <li>Calculate the position at the end of each part and make a data table.</li>
    <li>Draw an accurate position–time graph with labeled axes, units and segments.</li>
    <li>Calculate the slope of each segment and check that it matches your story.</li>
    <li>Calculate the total distance, the displacement, the average speed and the average velocity.</li>
    <li>Write a short analysis explaining what the graph shows and why average speed and average velocity differ.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your motion story</li>
    <li>Your data table</li>
    <li>Your position–time graph</li>
    <li>Your calculations and analysis</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Story and data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creative story with five or more parts and accurate data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Five parts with mostly accurate data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fewer parts or some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incomplete</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, labeled graph with correct slopes and units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly accurate graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors in scale or labels</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing or incorrect</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All slopes, distances and averages correct with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few calculations</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analysis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, precise explanation of graph features and speed vs. velocity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brief explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Neat, organized and well illustrated</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat disorganized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disorganized</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use a ruler for graph lines.<br>Choose a sensible scale.<br>Check that each slope matches its velocity.<br>Include units everywhere.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which part of my story was hardest to graph?</li>
    <li>How did the graph help me check my calculations?</li>
    <li>What did I learn about speed and velocity?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The motion story must have at least:',
            options: ['One part', 'Two parts', 'Five parts', 'Twenty parts'],
            correct: 2,
            explanation: 'The answer is Five parts. As stated.'
        },
        {
            question: 'The story must include at least one:',
            options: ['Stop', 'Acceleration curve', 'Circle', 'Collision'],
            correct: 0,
            explanation: 'And one negative-direction part.'
        },
        {
            question: 'Each segment’s slope should equal its:',
            options: ['Time', 'Position', 'Distance', 'Velocity'],
            correct: 3,
            explanation: 'The answer is Velocity. Slope = velocity.'
        },
        {
            question: 'Average velocity uses:',
            options: ['Displacement', 'Total distance', 'Speed only', 'Time only'],
            correct: 0,
            explanation: 'The answer is Displacement. Δx/Δt.'
        },
        {
            question: 'Your graph must state the:',
            options: ['Weather', 'Origin and positive direction', 'Color of the vehicle', 'Driver’s name'],
            correct: 1,
            explanation: 'The answer is Origin and positive direction. Reference choices.'
        },
        {
            question: 'Why might average speed and velocity differ in your story?',
            options: ['Because of the colors used', 'Because of the scale', 'They never differ', 'Because the object changes direction'],
            correct: 3,
            explanation: 'Distance exceeds displacement.'
        }
    ]
},
{
    name: '1.1 Review: Describing Motion',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Describing Motion</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before studying acceleration in Topic 1.2.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Units and Precision</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>SI: m, kg, s; prefixes k, c, m, μ.</li>
    <li>Dimensional analysis: multiply by factors equal to 1.</li>
    <li>Significant figures show precision.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Scalars and Vectors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Scalar: magnitude only (distance, speed, time).</li>
    <li>Vector: magnitude and direction (displacement, velocity).</li>
    <li>In 1-D, sign = direction.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Displacement and Velocity</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Δx = x_f − x_i.</li>
    <li>Average speed = d/Δt; average velocity = Δx/Δt.</li>
    <li>Full lap: velocity 0, speed not 0.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Position–Time Graphs</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Slope = velocity.</li>
    <li>Flat = rest; steep = fast; downhill = negative direction.</li>
    <li>Curve = changing velocity.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Quantity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbol</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unit</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Scalar or vector</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">d</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Displacement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vector</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m/s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Velocity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m/s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vector</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Time</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Convert 120 km/h to m/s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">120 × 1000 ÷ 3600 ≈ 33 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A cat walks 5 m right and 9 m left. Find distance and displacement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Distance 14 m; displacement 4 m left (−4 m).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A car travels 240 km in 3.0 h. Find the average speed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">80 km/h.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the velocity on an x–t line from (1 s, 2 m) to (5 s, 22 m).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">20 ÷ 4 = 5 m/s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Describe the x–t graph of an object at rest at 3 m.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A horizontal line at x = 3 m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> How many significant figures are in 0.050 s?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Two.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can use units and conversions.</p>
    <p style="margin:6px 0;">☐ I can use significant figures.</p>
    <p style="margin:6px 0;">☐ I can distinguish scalars and vectors.</p>
    <p style="margin:6px 0;">☐ I can calculate displacement and velocity.</p>
    <p style="margin:6px 0;">☐ I can interpret position–time graphs.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '18 km/h equals:',
            options: ['5 m/s', '18 m/s', '1.8 m/s', '50 m/s'],
            correct: 0,
            explanation: 'The answer is 5 m/s. 18 × 1000 ÷ 3600.'
        },
        {
            question: 'Velocity differs from speed because velocity:',
            options: ['Has direction', 'Is always larger', 'Has no units', 'Is a scalar'],
            correct: 0,
            explanation: 'The answer is Has direction. Vectors have direction.'
        },
        {
            question: 'Displacement for a round trip is:',
            options: ['Double the distance', 'Equal to the distance', 'Always negative', 'Zero'],
            correct: 3,
            explanation: 'The answer is Zero. Same start and end.'
        },
        {
            question: 'The slope of an x–t graph gives:',
            options: ['Position', 'Velocity', 'Acceleration', 'Mass'],
            correct: 1,
            explanation: 'The answer is Velocity. Δx/Δt.'
        },
        {
            question: 'A curved x–t graph means:',
            options: ['Velocity is constant', 'The object is at rest', 'The object is a vector', 'Velocity is changing'],
            correct: 3,
            explanation: 'The answer is Velocity is changing. Acceleration.'
        },
        {
            question: 'Which is the SI unit of mass?',
            options: ['Gram', 'Pound', 'Kilogram', 'Newton'],
            correct: 2,
            explanation: 'The answer is Kilogram. kg.'
        }
    ]
},
{
    name: '1.1 Summary: Describing Motion',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.1 Describing Motion</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Describing Motion</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> To describe motion precisely, physicists use careful units, distinguish scalars from vectors, and represent motion with numbers, signs and position–time graphs whose slope is velocity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>SI units (m, kg, s), dimensional analysis and significant figures make measurements precise and comparable.</li>
    <li>Scalars have magnitude; vectors have magnitude and direction, shown by sign in one dimension.</li>
    <li>Distance is total path length; displacement is the change in position.</li>
    <li>Average speed uses distance; average velocity uses displacement.</li>
    <li>The slope of a position–time graph is the velocity; curves show changing velocity.</li>
    <li>A constant-velocity object produces a straight-line position–time graph.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 The Tools of Physics: Units and Vectors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SI units, conversions, significant figures, scalars and vectors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write units at every step</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Distance, Displacement, Speed and Velocity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx, average speed, average velocity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choose an origin and positive direction</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Position–Time Graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slope as velocity; graph shapes; stories and graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Height is position; steepness is speed</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">SI unit</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dimensional analysis</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scientific notation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">significant figures</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scalar</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vector</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">position</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">distance</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">displacement</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">average speed</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">average velocity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">instantaneous speed</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">position–time graph</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">slope</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">constant velocity</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From GPS to sports analysis, describing motion precisely is the foundation of navigation, engineering and science.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will study acceleration — how velocity changes — using velocity–time graphs, the kinematic equations and free fall.</div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can use SI units and convert units.</p>
    <p style="margin:6px 0;">✔️ I can distinguish scalars and vectors.</p>
    <p style="margin:6px 0;">✔️ I can calculate displacement, speed and velocity.</p>
    <p style="margin:6px 0;">✔️ I can interpret position–time graphs.</p>
    <p style="margin:6px 0;">✔️ I can collect and graph constant-velocity data.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is describing motion with:',
            options: ['Only words', 'Only colors', 'Guesses', 'Units, vectors and graphs'],
            correct: 3,
            explanation: 'The answer is Units, vectors and graphs. Precise tools.'
        },
        {
            question: 'Topic 1.2 will study:',
            options: ['Electricity', 'Waves', 'Atoms', 'Acceleration and free fall'],
            correct: 3,
            explanation: 'The answer is Acceleration and free fall. Changing velocity.'
        },
        {
            question: 'Average velocity is:',
            options: ['Displacement ÷ time', 'Distance ÷ time', 'Time ÷ distance', 'Speed × time'],
            correct: 0,
            explanation: 'The answer is Displacement ÷ time. A vector.'
        },
        {
            question: 'A straight x–t line shows:',
            options: ['Acceleration', 'Constant velocity', 'Free fall', 'No motion ever'],
            correct: 1,
            explanation: 'The answer is Constant velocity. Uniform motion.'
        },
        {
            question: 'Which is a vector?',
            options: ['Speed', 'Velocity', 'Time', 'Distance'],
            correct: 1,
            explanation: 'The answer is Velocity. Direction included.'
        },
        {
            question: 'Dimensional analysis is used to:',
            options: ['Measure mass', 'Draw vectors', 'Convert units', 'Find direction'],
            correct: 2,
            explanation: 'The answer is Convert units. Factors equal to 1.'
        }
    ]
},
{
    name: '1.2.1 Acceleration and Velocity–Time Graphs',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Speeding Up and Slowing Down</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Acceleration and Velocity–Time Graphs</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will define acceleration, calculate it from changes in velocity, interpret its sign, and use velocity–time graphs to find acceleration (slope) and displacement (area).</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Acceleration is what you feel in a car, an elevator or a roller coaster. Engineers design vehicles, rides and safety systems around acceleration because it is closely linked to the forces on our bodies.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Car performance</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎢 Roller coasters</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛗 Elevators</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Rocket launches</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Sprint starts</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛡️ Airbags and crash tests</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define acceleration and calculate it from data and graphs. (SEP 5)</li>
    <li>Interpret the slope and area of velocity–time graphs. (SEP 4)</li>
    <li>Solve problems with the kinematic equations. (SEP 5)</li>
    <li>Analyze free fall and carry out a free-fall investigation. (SEP 3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define and calculate average acceleration.</li>
    <li>Interpret positive and negative acceleration.</li>
    <li>Find acceleration from the slope of a velocity–time graph.</li>
    <li>Find displacement from the area under a velocity–time graph.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do we measure how quickly velocity changes?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Topic 1.1 you studied objects moving at constant velocity. Now velocity will change — that change is acceleration.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Acceleration</strong> is the rate at which velocity changes. If a car goes from 0 to 27 m/s in 9.0 seconds, its velocity increases by 27 m/s in 9.0 s, so its average acceleration is 27 ÷ 9.0 = 3.0 m/s² — it gains 3.0 m/s of velocity every second.</p>
    <p>Acceleration is a vector. Its sign tells us its direction, not simply “speeding up” or “slowing down.” An object <strong>speeds up</strong> when its velocity and acceleration have the <strong>same sign</strong>, and <strong>slows down</strong> when they have <strong>opposite signs</strong>.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Acceleration = change in velocity ÷ time. Same signs → speeding up; opposite signs → slowing down.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The unit m/s² can look strange. Read it as “meters per second, per second”: the velocity changes by a certain number of meters per second during each second. A family car might accelerate at about 3 m/s², while a sprinter leaving the blocks can briefly exceed that.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">acceleration</strong>
    </p>
    <p style="margin:6px 0;">The rate of change of velocity.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> a = Δv / Δt (m/s²)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>a = 3.0 m/s²</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">initial velocity</strong>
    </p>
    <p style="margin:6px 0;">The velocity at the start of a time interval.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v₀ or vᵢ</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>v₀ = 0 m/s from rest</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">final velocity</strong>
    </p>
    <p style="margin:6px 0;">The velocity at the end of a time interval.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v or v_f</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>v = 27 m/s</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">deceleration</strong>
    </p>
    <p style="margin:6px 0;">An everyday word for slowing down (acceleration opposite to velocity).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> opposite signs</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Braking produces deceleration.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">velocity–time graph</strong>
    </p>
    <p style="margin:6px 0;">A graph of velocity versus time.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v–t graph</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The slope gives acceleration.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">area under a graph</strong>
    </p>
    <p style="margin:6px 0;">On a v–t graph, the area between the line and the time axis.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> displacement (m)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>½ × 4 s × 12 m/s = 24 m</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Calculating Acceleration</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Average acceleration</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">a = Δv / Δt = (v − v₀) / t</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> v₀ is the initial velocity, v the final velocity and t the time taken.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m/s²</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding how quickly velocity changes.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Dividing the final velocity by time without subtracting the initial velocity.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Always find the change in velocity first.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Speeding up and slowing down</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> (a) A car goes from 0 to 27 m/s in 9.0 s. (b) A bus moving at +20 m/s brakes to a stop in 4.0 s. Find each acceleration.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: (a) Δv</strong>
    </p>
    <div style="margin:6px 0 0 34px;">27 − 0 = 27 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: (a) a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">27 ÷ 9.0 = +3.0 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: (b) Δv</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 − 20 = −20 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: (b) a</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−20 ÷ 4.0 = −5.0 m/s²</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> (a) +3.0 m/s², speeding up; (b) −5.0 m/s², slowing down because acceleration is opposite to the positive velocity.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The negative sign shows direction, not that acceleration is “less than zero” in size.</p>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Velocity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Acceleration</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speeding up in + direction</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slowing down while moving in + direction</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speeding up in − direction</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slowing down while moving in − direction</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Velocity–Time Graphs</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="22" fill="#e3f2fd" font-size="16" font-weight="bold" text-anchor="middle">Velocity–Time Graph: Speed Up, Cruise, Brake</text><polygon points="56.0,290.0 305.6,75.7 305.6,290.0" fill="#86efac" opacity="0.28"/><polygon points="305.6,290.0 305.6,75.7 555.2,75.7 555.2,290.0" fill="#fde68a" opacity="0.28"/><polygon points="555.2,290.0 555.2,75.7 680.0,290.0" fill="#f9a8d4" opacity="0.28"/><line x1="56" y1="40" x2="56" y2="290" stroke="#1e293b"/><text x="56" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">0</text><line x1="118.4" y1="40" x2="118.4" y2="290" stroke="#1e293b"/><text x="118.4" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><line x1="180.8" y1="40" x2="180.8" y2="290" stroke="#1e293b"/><text x="180.8" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><line x1="243.2" y1="40" x2="243.2" y2="290" stroke="#1e293b"/><text x="243.2" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><line x1="305.6" y1="40" x2="305.6" y2="290" stroke="#1e293b"/><text x="305.6" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">4</text><line x1="368" y1="40" x2="368" y2="290" stroke="#1e293b"/><text x="368" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">5</text><line x1="430.4" y1="40" x2="430.4" y2="290" stroke="#1e293b"/><text x="430.4" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">6</text><line x1="492.79999999999995" y1="40" x2="492.79999999999995" y2="290" stroke="#1e293b"/><text x="492.79999999999995" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">7</text><line x1="555.2" y1="40" x2="555.2" y2="290" stroke="#1e293b"/><text x="555.2" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">8</text><line x1="617.6" y1="40" x2="617.6" y2="290" stroke="#1e293b"/><text x="617.6" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">9</text><line x1="680" y1="40" x2="680" y2="290" stroke="#1e293b"/><text x="680" y="305" fill="#94a3b8" font-size="11" text-anchor="middle">10</text><line x1="56" y1="290" x2="680" y2="290" stroke="#1e293b"/><text x="50" y="294" fill="#94a3b8" font-size="11" text-anchor="end">0</text><line x1="56" y1="254.28571428571428" x2="680" y2="254.28571428571428" stroke="#1e293b"/><text x="50" y="258.2857142857143" fill="#94a3b8" font-size="11" text-anchor="end">2</text><line x1="56" y1="218.57142857142858" x2="680" y2="218.57142857142858" stroke="#1e293b"/><text x="50" y="222.57142857142858" fill="#94a3b8" font-size="11" text-anchor="end">4</text><line x1="56" y1="182.85714285714286" x2="680" y2="182.85714285714286" stroke="#1e293b"/><text x="50" y="186.85714285714286" fill="#94a3b8" font-size="11" text-anchor="end">6</text><line x1="56" y1="147.14285714285714" x2="680" y2="147.14285714285714" stroke="#1e293b"/><text x="50" y="151.14285714285714" fill="#94a3b8" font-size="11" text-anchor="end">8</text><line x1="56" y1="111.42857142857143" x2="680" y2="111.42857142857143" stroke="#1e293b"/><text x="50" y="115.42857142857143" fill="#94a3b8" font-size="11" text-anchor="end">10</text><line x1="56" y1="75.71428571428572" x2="680" y2="75.71428571428572" stroke="#1e293b"/><text x="50" y="79.71428571428572" fill="#94a3b8" font-size="11" text-anchor="end">12</text><line x1="56" y1="40" x2="680" y2="40" stroke="#1e293b"/><text x="50" y="44" fill="#94a3b8" font-size="11" text-anchor="end">14</text><line x1="56" y1="290" x2="680" y2="290" stroke="#94a3b8" stroke-width="1.5"/><line x1="56" y1="40" x2="56" y2="290" stroke="#94a3b8" stroke-width="1.5"/><text x="368" y="324" fill="#94a3b8" font-size="12" text-anchor="middle">time (s)</text><text x="16" y="165" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90 16 165)">velocity (m/s)</text><polyline points="56.0,290.0 305.6,75.7 555.2,75.7 680.0,290.0" fill="none" stroke="#80deea" stroke-width="3"/><text x="180.8" y="54.2857142857143" fill="#86efac" font-size="12" font-weight="bold" text-anchor="middle">a = +3 m/s²</text><text x="430.4" y="54.2857142857143" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">a = 0</text><text x="636.32" y="54.2857142857143" fill="#f9a8d4" font-size="12" font-weight="bold" text-anchor="middle">a = −6 m/s²</text><text x="236.95999999999998" y="232.85714285714286" fill="#e3f2fd" font-size="12" font-weight="bold" text-anchor="middle">24 m</text><text x="430.4" y="182.85714285714286" fill="#e3f2fd" font-size="12" font-weight="bold" text-anchor="middle">48 m</text><text x="595.76" y="232.85714285714286" fill="#e3f2fd" font-size="12" font-weight="bold" text-anchor="middle">12 m</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature of v–t graph</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slope</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constant velocity (zero acceleration)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line on the time axis (v = 0)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At rest</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Area between line and time axis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Displacement</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line crossing the time axis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The object changes direction</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Slope and area (SEP 4)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Using the graph, find the acceleration in each stage and the total displacement for 0–10 s.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 0–4 s slope</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(12 − 0) ÷ 4 = +3 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 4–8 s slope</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: 8–10 s slope</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(0 − 12) ÷ 2 = −6 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Areas</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Triangle ½ × 4 × 12 = 24 m; rectangle 4 × 12 = 48 m; triangle ½ × 2 × 12 = 12 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Total</strong>
    </p>
    <div style="margin:6px 0 0 34px;">24 + 48 + 12 = 84 m</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Accelerations +3, 0 and −6 m/s²; total displacement 84 m.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Reading the velocity value as the acceleration. On a v–t graph, acceleration is the slope.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Comparing x–t and v–t Graphs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Motion</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">x–t graph</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">v–t graph</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At rest</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line on the time axis (v = 0)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constant velocity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight sloped line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal line</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constant acceleration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Curve (parabola)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight sloped line</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> A cyclist goes from 4 m/s to 10 m/s in 3.0 s. Find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2.0 m/s²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> On a v–t graph, what is the slope?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Acceleration.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> If v is negative and a is positive, is the object speeding up or slowing down?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Slowing down.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep walkways clear and work only in the area your teacher assigns, especially when carts, balls or other objects are moving.</li>
    <li>Never stand under or in the path of a falling or launched object, and catch or stop objects only as instructed.</li>
    <li>Wear safety goggles whenever objects are launched, dropped from a height or under tension (springs, rubber bands).</li>
    <li>Report any damaged equipment, spills or injuries to your teacher at once, and return all equipment when finished.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using mathematics (SEP 5)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analyzing graphs (SEP 4)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting signs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing representations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modeling motion</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>The most common mistake is confusing velocity and acceleration. An object can have a large velocity and zero acceleration (a car cruising on a highway) or zero velocity and nonzero acceleration (a ball at the top of its flight). Velocity tells you how fast and which way; acceleration tells you how that is changing.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Can an object have zero velocity and still be accelerating? Think about a ball thrown straight up at its highest point.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80deea;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Physics in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Car reviews report “0 to 60 mph” times, which are a measure of average acceleration.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Electric vehicles can accelerate strongly while producing no tailpipe emissions, and regenerative braking recovers energy while slowing down.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Automotive engineers, ride designers and aerospace engineers analyze acceleration to keep passengers safe and comfortable.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is the unit of acceleration?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Meters per second per second.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">m/s².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> A horizontal v–t line means:</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Slope = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Constant velocity, zero acceleration.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How do you find displacement from a v–t graph?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Base × height.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Find the area under the line.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Sketch the v–t graph of a car that starts from rest, speeds up, cruises and stops at a light.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Match five motion descriptions with five v–t graphs your partner draws.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Use a phone with a free accelerometer app (if available) in an elevator or on a gentle walk and describe the accelerations you see.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a motion-graph simulation to create a v–t graph that matches the one in this lesson, and check its x–t graph.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A runner goes from 0 to 8.0 m/s in 2.0 s. Find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4.0 m/s²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What does a negative slope on a v–t graph mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Negative acceleration.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A train slows from 30 m/s to 10 m/s in 5.0 s. Find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−4.0 m/s²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the displacement for a v–t graph that is constant at 6 m/s for 5 s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">30 m</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80deea;">
    <p style="margin:0 0 6px 0;color:#80deea;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A v–t graph rises from 0 to 10 m/s in 5 s, then falls to 0 at 9 s. Find the total displacement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">½ × 5 × 10 + ½ × 4 × 10 = 25 + 20 = 45 m</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A car goes from 0 to 60 mph (about 27 m/s) in 6.0 s. Find its average acceleration.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">About 4.5 m/s².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 4: Explain how to tell from a v–t graph when an object changes direction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The line crosses the time axis, so the velocity changes sign.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Acceleration is the rate of change of velocity: a = Δv/Δt, in m/s². Its sign shows direction; an object speeds up when velocity and acceleration have the same sign and slows down when they are opposite. On a velocity–time graph, the slope is the acceleration and the area under the line is the displacement. Constant acceleration gives a straight v–t line and a curved x–t graph.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>a = (v − v₀)/t.</li>
    <li>Same signs: speed up; opposite: slow down.</li>
    <li>v–t slope = a; area = Δx.</li>
    <li>Constant a: straight v–t, curved x–t.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Find Δv first.</li>
    <li>Velocity and acceleration are different.</li>
    <li>Areas below the axis are negative displacement.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Dividing v by t without subtracting v₀.</li>
    <li>Reading velocity as acceleration on a v–t graph.</li>
    <li>Thinking negative a always means slowing down.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Label each graph stage.</li>
    <li>Split areas into triangles and rectangles.</li>
    <li>Check units: m/s ÷ s = m/s².</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show Δv and Δt.</li>
    <li>Say whether the object speeds up or slows down.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration calculations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 4 Data</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slope and area.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">HS-PS2-1 foundation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration links to force.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety awareness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Engineering</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Understanding acceleration explains everything from car performance to why seat belts matter.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve eight acceleration problems.</li>
    <li>Analyze two v–t graphs for slope and area.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How is acceleration different from velocity?</li>
    <li>Where did I feel acceleration today?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Acceleration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rate of change of velocity.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">v–t graph</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Velocity vs. time.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Slope (v–t)</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acceleration.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Area (v–t)</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Displacement.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can calculate acceleration.</p>
    <p style="margin:6px 0;">☐ I can interpret its sign.</p>
    <p style="margin:6px 0;">☐ I can find slope on a v–t graph.</p>
    <p style="margin:6px 0;">☐ I can find area on a v–t graph.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Acceleration is the rate of change of:',
            options: ['Position', 'Distance', 'Mass', 'Velocity'],
            correct: 3,
            explanation: 'The answer is Velocity. a = Δv/Δt.'
        },
        {
            question: 'A car goes from 0 to 20 m/s in 5.0 s. Its acceleration is:',
            options: ['100 m/s²', '4.0 m/s²', '0.25 m/s²', '20 m/s²'],
            correct: 1,
            explanation: 'The answer is 4.0 m/s². 20 ÷ 5.0.'
        },
        {
            question: 'A ball slows from +10 m/s to +4 m/s in 2.0 s. Its acceleration is:',
            options: ['+3.0 m/s²', '−7.0 m/s²', '−3.0 m/s²', '+2.0 m/s²'],
            correct: 2,
            explanation: 'The answer is −3.0 m/s². (4 − 10) ÷ 2.0.'
        },
        {
            question: 'An object speeds up when velocity and acceleration:',
            options: ['Have opposite signs', 'Are both zero', 'Are perpendicular', 'Have the same sign'],
            correct: 3,
            explanation: 'The answer is Have the same sign. Same direction.'
        },
        {
            question: 'The slope of a v–t graph equals:',
            options: ['Displacement', 'Position', 'Acceleration', 'Distance'],
            correct: 2,
            explanation: 'The answer is Acceleration. Δv/Δt.'
        },
        {
            question: 'The area under a v–t graph equals:',
            options: ['Acceleration', 'Displacement', 'Time', 'Speed'],
            correct: 1,
            explanation: 'The answer is Displacement. v × t.'
        },
        {
            question: 'A horizontal line on a v–t graph means:',
            options: ['Constant velocity', 'Constant acceleration', 'At rest always', 'Free fall'],
            correct: 0,
            explanation: 'The answer is Constant velocity. Zero acceleration.'
        },
        {
            question: 'For the lesson’s graph, the total displacement is:',
            options: ['84 m', '72 m', '12 m', '120 m'],
            correct: 0,
            explanation: 'The answer is 84 m. 24 + 48 + 12.'
        },
        {
            question: 'Constant acceleration appears on an x–t graph as:',
            options: ['A straight line', 'A curve', 'A horizontal line', 'A vertical line'],
            correct: 1,
            explanation: 'The answer is A curve. A parabola.'
        },
        {
            question: 'Which can have zero velocity but nonzero acceleration?',
            options: ['A car cruising at constant speed', 'A parked car', 'A ball at the top of its flight', 'A train at constant velocity'],
            correct: 2,
            explanation: 'The answer is A ball at the top of its flight. Gravity still acts.'
        }
    ]
},
{
    name: '1.2.2 The Kinematic Equations',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Speeding Up and Slowing Down</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: The Kinematic Equations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the four kinematic equations for constant acceleration, choose the right equation for a problem, and solve multi-step motion problems with a clear problem-solving method.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> These four equations let engineers calculate runway lengths, braking distances, launch speeds and safe following distances — before anything is built or anyone is put at risk.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✈️ Runway design</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Braking distances</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚦 Traffic-light timing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏀 Sports analysis</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚀 Launch planning</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎢 Ride design</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define acceleration and calculate it from data and graphs. (SEP 5)</li>
    <li>Interpret the slope and area of velocity–time graphs. (SEP 4)</li>
    <li>Solve problems with the kinematic equations. (SEP 5)</li>
    <li>Analyze free fall and carry out a free-fall investigation. (SEP 3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the four kinematic equations and when they apply.</li>
    <li>Identify knowns and unknowns in a problem.</li>
    <li>Choose the equation that fits the knowns.</li>
    <li>Solve problems with correct units and significant figures.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we predict exactly where a moving object will be and how fast it will be going?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you used a = Δv/Δt and the area under v–t graphs. The kinematic equations come directly from these ideas.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>When acceleration is <strong>constant</strong>, motion can be described by five quantities: displacement (Δx), initial velocity (v₀), final velocity (v), acceleration (a) and time (t). The four <strong>kinematic equations</strong> link them. Each equation leaves out one of the five quantities, so if you know three, you can find the other two.</p>
    <p>Problem-solving in physics follows a routine: draw a sketch, choose a positive direction, list the knowns and the unknown, choose the equation that contains the unknown and the knowns, substitute with units, solve and check whether the answer makes sense.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Know three of Δx, v₀, v, a, t? Pick the equation that is missing the one you don’t know and don’t need.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>The equations can be derived from a velocity–time graph. The slope gives v = v₀ + at. The area under the line — a rectangle (v₀t) plus a triangle (½at²) — gives Δx = v₀t + ½at². Combining these to remove t gives v² = v₀² + 2aΔx.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">constant acceleration</strong>
    </p>
    <p style="margin:6px 0;">Acceleration that does not change during the motion.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> a = constant</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Free fall near Earth.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">known</strong>
    </p>
    <p style="margin:6px 0;">A quantity given or implied in a problem.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v₀ = 0 if “from rest”</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“Starts from rest” means v₀ = 0.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">unknown</strong>
    </p>
    <p style="margin:6px 0;">The quantity you are asked to find.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> ?</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Find the stopping distance.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">kinematic equation</strong>
    </p>
    <p style="margin:6px 0;">An equation linking Δx, v₀, v, a and t for constant acceleration.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> four equations</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>v = v₀ + at</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">implied value</strong>
    </p>
    <p style="margin:6px 0;">A value stated in words rather than numbers.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> “comes to a stop” → v = 0</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Stops: v = 0</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">reasonableness check</strong>
    </p>
    <p style="margin:6px 0;">Asking whether an answer makes physical sense.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> size, sign, units</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A car cannot stop in −40 m.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Four Equations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Missing quantity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use when you do not know or need…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = v₀ + at</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">the displacement</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx = v₀t + ½at²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">the final velocity</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v² = v₀² + 2aΔx</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">the time</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx = ½(v₀ + v)t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">the acceleration</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Kinematic equations (constant a)</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">v = v₀ + at;   Δx = v₀t + ½at²;   v² = v₀² + 2aΔx;   Δx = ½(v₀ + v)t</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Δx displacement, v₀ initial velocity, v final velocity, a acceleration, t time.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> m, m/s, m/s², s</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Any one-dimensional motion with constant acceleration.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using them when acceleration changes, or mixing signs.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Write the five symbols in a column and fill in what you know.</div>
    </div>
    <div style="background:#241338;border-left:4px solid #ff9800;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">⚡ Quick Trick</p>
    <div>Hidden knowns: “from rest” means v₀ = 0; “comes to a stop” means v = 0; “dropped” means v₀ = 0; free fall means a = −9.8 m/s² (taking up as positive).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Worked Problems</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Braking distance</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car moving at 20 m/s brakes with an acceleration of −5.0 m/s². How far does it travel before stopping, and how long does it take?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Knowns: v₀ = 20 m/s, v = 0, a = −5.0 m/s². Unknowns: Δx and t.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Distance (no t)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v² = v₀² + 2aΔx → 0 = 20² + 2(−5.0)Δx</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 400 − 10Δx → Δx = 40 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v = v₀ + at → 0 = 20 + (−5.0)t → t = 4.0 s</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The car travels 40 m and stops in 4.0 s.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Choosing v² = v₀² + 2aΔx avoids needing the time first.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Airplane takeoff</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A plane starts from rest and accelerates at 3.0 m/s² until it reaches its takeoff speed of 75 m/s. Find the time and the minimum runway length.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Knowns</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v₀ = 0, v = 75 m/s, a = 3.0 m/s²</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">t = (v − v₀) ÷ a = 75 ÷ 3.0 = 25 s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Runway</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Δx = v² ÷ (2a) = 75² ÷ 6.0 = 5625 ÷ 6.0 ≈ 940 m</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> About 25 s and a runway of at least about 940 m.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Speeding up from a moving start</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A cyclist moving at 4.0 m/s accelerates at 0.50 m/s² for 6.0 s. Find her final velocity and displacement.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Final velocity</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v = 4.0 + 0.50(6.0) = 7.0 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Displacement</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Δx = 4.0(6.0) + ½(0.50)(6.0)² = 24 + 9.0 = 33 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Δx = ½(4.0 + 7.0)(6.0) = 33 m ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> v = 7.0 m/s and Δx = 33 m.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Forgetting to square the time in ½at².</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Problem-Solving Routine</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sketch the situation and choose a positive direction.</li>
    <li>List the five quantities: Δx, v₀, v, a, t. Fill in knowns, including hidden ones.</li>
    <li>Circle the unknown.</li>
    <li>Choose the equation that includes the unknown and your three knowns.</li>
    <li>Substitute with units and solve.</li>
    <li>Check: is the size reasonable, is the sign correct and are the units right?</li>
    </ol>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which equation would you use if time is unknown and not needed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">v² = v₀² + 2aΔx</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What does “starts from rest” tell you?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">v₀ = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A ball rolls from rest with a = 2.0 m/s² for 3.0 s. How far does it go?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Δx = ½(2.0)(3.0)² = 9.0 m</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep walkways clear and work only in the area your teacher assigns, especially when carts, balls or other objects are moving.</li>
    <li>Never stand under or in the path of a falling or launched object, and catch or stop objects only as instructed.</li>
    <li>Wear safety goggles whenever objects are launched, dropped from a height or under tension (springs, rubber bands).</li>
    <li>Report any damaged equipment, spills or injuries to your teacher at once, and return all equipment when finished.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using mathematics (SEP 5)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Choosing models strategically</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Problem-solving routines</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking reasonableness</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision with units</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>The kinematic equations work only when acceleration is constant. Real cars and planes do not accelerate perfectly evenly, so the equations give useful estimates rather than exact answers. Engineers add safety margins — for example, real runways are longer than the minimum calculated length.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why does doubling a car’s speed make its braking distance four times longer? Which equation shows this?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80deea;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Physics in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Driving instructors teach safe following distances based on how far a car travels while the driver reacts and brakes.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Smooth acceleration and gentle braking reduce fuel use and emissions, which is why eco-driving tips focus on acceleration.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Airport planners, traffic engineers, accident investigators and sports scientists use kinematic equations daily.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which equation does not contain Δx?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Check each one.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">v = v₀ + at</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What does “comes to a stop” mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Final velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">v = 0</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Find v for v₀ = 2 m/s, a = 3 m/s², t = 4 s.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: v = v₀ + at.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">14 m/s</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write the five kinematic quantities in a column for three practice problems and circle the unknown in each.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write a word problem for your partner; they identify knowns and the best equation before solving.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a “which equation?” card sort: match problem cards to the equation that is missing the unneeded quantity.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Build a spreadsheet that calculates Δx = v₀t + ½at² for t = 0 to 10 s and graph the results.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A car accelerates from rest at 2.0 m/s² for 5.0 s. Find its final velocity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">10 m/s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> For the same car, find the displacement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">½(2.0)(5.0)² = 25 m</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A skateboarder slows from 6.0 m/s to rest over 9.0 m. Find the acceleration.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">a = (0 − 36) ÷ (2 × 9.0) = −2.0 m/s²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A runner speeds from 3.0 m/s to 7.0 m/s in 4.0 s. How far does she run?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Δx = ½(3.0 + 7.0)(4.0) = 20 m</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80deea;">
    <p style="margin:0 0 6px 0;color:#80deea;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A train at 25 m/s must stop within 250 m. What minimum deceleration is needed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">a = −25² ÷ (2 × 250) = −1.25 m/s² (size 1.25 m/s²).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A sprinter reaches 10 m/s in 2.5 s from rest. Find the acceleration and distance covered.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">a = 4.0 m/s²; Δx = ½(4.0)(2.5)² = 12.5 m.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 5: Explain how to choose a kinematic equation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">List the known and unknown quantities and choose the equation that includes them while leaving out the quantity you neither know nor need.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>For constant acceleration, four kinematic equations link displacement, initial velocity, final velocity, acceleration and time: v = v₀ + at, Δx = v₀t + ½at², v² = v₀² + 2aΔx and Δx = ½(v₀ + v)t. Each leaves out one quantity. Solve problems by sketching, choosing a positive direction, listing knowns (including hidden ones), choosing the right equation, substituting with units and checking the answer.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>v = v₀ + at (no Δx).</li>
    <li>Δx = v₀t + ½at² (no v).</li>
    <li>v² = v₀² + 2aΔx (no t).</li>
    <li>Δx = ½(v₀ + v)t (no a).</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Only for constant acceleration.</li>
    <li>Look for hidden knowns.</li>
    <li>Check the sign of every value.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to square t.</li>
    <li>Using the wrong sign for a.</li>
    <li>Applying the equations when a changes.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the five-quantity list.</li>
    <li>Pick the equation missing the unneeded quantity.</li>
    <li>Check answers with a second equation.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write the equation before substituting.</li>
    <li>Include units in the final answer.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving with equations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations as models.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">HS-PS2-1 foundation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Preparing for forces.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Persistence</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road and air safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Engineering design</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> These equations help keep roads and runways safe by predicting how far vehicles need to stop or take off.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve ten kinematic problems using the routine.</li>
    <li>Write and solve one real-world problem of your own.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which equation do I find hardest to use?</li>
    <li>How does the routine help me avoid mistakes?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kinematic equations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Four constant-a equations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Known</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Given value.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Unknown</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Value to find.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hidden known</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Value implied by words.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state the four equations.</p>
    <p style="margin:6px 0;">☐ I can identify knowns and unknowns.</p>
    <p style="margin:6px 0;">☐ I can choose the right equation.</p>
    <p style="margin:6px 0;">☐ I can solve and check problems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which equation has no displacement term?',
            options: ['Δx = v₀t + ½at²', 'v² = v₀² + 2aΔx', 'Δx = ½(v₀ + v)t', 'v = v₀ + at'],
            correct: 3,
            explanation: 'The answer is v = v₀ + at. It links v, v₀, a and t.'
        },
        {
            question: 'Which equation has no time term?',
            options: ['v² = v₀² + 2aΔx', 'v = v₀ + at', 'Δx = v₀t + ½at²', 'Δx = ½(v₀ + v)t'],
            correct: 0,
            explanation: 'The answer is v² = v₀² + 2aΔx. Use it when t is unknown.'
        },
        {
            question: '“Starts from rest” means:',
            options: ['v = 0', 'a = 0', 't = 0 only', 'v₀ = 0'],
            correct: 3,
            explanation: 'The answer is v₀ = 0. Initial velocity is zero.'
        },
        {
            question: 'A car at 20 m/s brakes at −5.0 m/s². Its stopping distance is:',
            options: ['20 m', '100 m', '40 m', '4.0 m'],
            correct: 2,
            explanation: 'The answer is 40 m. 400 ÷ 10.'
        },
        {
            question: 'How long does that car take to stop?',
            options: ['2.0 s', '5.0 s', '4.0 s', '100 s'],
            correct: 2,
            explanation: 'The answer is 4.0 s. 20 ÷ 5.0.'
        },
        {
            question: 'A plane from rest at 3.0 m/s² reaches 75 m/s after:',
            options: ['225 s', '25 s', '78 s', '3.0 s'],
            correct: 1,
            explanation: 'The answer is 25 s. 75 ÷ 3.0.'
        },
        {
            question: 'From rest with a = 4.0 m/s² for 3.0 s, Δx =',
            options: ['12 m', '18 m', '36 m', '6.0 m'],
            correct: 1,
            explanation: 'The answer is 18 m. ½ × 4.0 × 9.0.'
        },
        {
            question: 'The kinematic equations are valid only when:',
            options: ['Velocity is constant', 'Acceleration is constant', 'The object is at rest', 'Time is zero'],
            correct: 1,
            explanation: 'The answer is Acceleration is constant. Constant a.'
        },
        {
            question: 'If speed doubles with the same deceleration, braking distance:',
            options: ['Quadruples', 'Doubles', 'Halves', 'Stays the same'],
            correct: 0,
            explanation: 'The answer is Quadruples. Δx is proportional to v².'
        },
        {
            question: 'The first step in solving a kinematics problem is to:',
            options: ['Sketch and choose a positive direction', 'Guess the answer', 'Use the longest equation', 'Skip units'],
            correct: 0,
            explanation: 'The answer is Sketch and choose a positive direction. Set up carefully.'
        }
    ]
},
{
    name: '1.2.3 Free Fall',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Speeding Up and Slowing Down</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Free Fall</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn that, without air resistance, all objects fall with the same acceleration, g ≈ 9.8 m/s², and use the kinematic equations to analyze dropped and thrown objects.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Free fall explains how long a dive lasts, how high a ball goes and why skydivers open parachutes. It also shows how careful experiments overturned beliefs held for nearly 2,000 years.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏀 Basketball and volleyball</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🪂 Skydiving</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🤿 Diving</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌙 Space exploration</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎢 Drop-tower rides</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Physics experiments</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define acceleration and calculate it from data and graphs. (SEP 5)</li>
    <li>Interpret the slope and area of velocity–time graphs. (SEP 4)</li>
    <li>Solve problems with the kinematic equations. (SEP 5)</li>
    <li>Analyze free fall and carry out a free-fall investigation. (SEP 3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain what free fall means and the value of g.</li>
    <li>Explain why air resistance affects objects differently.</li>
    <li>Solve problems for dropped objects.</li>
    <li>Solve problems for objects thrown upward.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Do heavy objects really fall faster than light ones?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.2 you used the kinematic equations. Free fall is a special case with a known, constant acceleration.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>An object is in <strong>free fall</strong> when gravity is the only force acting on it. Near Earth’s surface, every freely falling object accelerates downward at about <strong>g = 9.8 m/s²</strong> — whether it is a feather or a hammer — as long as air resistance is negligible.</p>
    <p>For nearly 2,000 years, many people followed the Greek philosopher Aristotle’s idea that heavier objects fall faster. In the early 1600s, <strong>Galileo Galilei</strong> tested falling motion by timing balls rolling down ramps and showed that objects gain speed at a steady rate regardless of their weight. (The famous story of him dropping balls from the Leaning Tower of Pisa may not have happened as told.) On August 2, 1971, Apollo 15 astronaut David Scott dropped a hammer and a feather on the airless Moon — and they landed at the same time.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>No air → everything falls together, gaining about 9.8 m/s of speed every second.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Science Background</h3>
    <p>In real life, air resistance pushes against falling objects. It matters a lot for light, spread-out objects such as feathers and paper, and very little for compact, dense objects such as a steel ball over short distances. That is why a crumpled sheet of paper falls much faster than a flat one, even though they have the same mass.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 350" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">A Falling Ball Photographed Every 0.1 s</text><line x1="230" y1="70" x2="230" y2="322" stroke="#94a3b8" stroke-width="2"/><line x1="224" y1="70" x2="236" y2="70" stroke="#94a3b8"/><text x="216" y="74" fill="#94a3b8" font-size="11" text-anchor="end">0.00 m</text><line x1="224" y1="120" x2="236" y2="120" stroke="#94a3b8"/><text x="216" y="124" fill="#94a3b8" font-size="11" text-anchor="end">0.25 m</text><line x1="224" y1="170" x2="236" y2="170" stroke="#94a3b8"/><text x="216" y="174" fill="#94a3b8" font-size="11" text-anchor="end">0.50 m</text><line x1="224" y1="220" x2="236" y2="220" stroke="#94a3b8"/><text x="216" y="224" fill="#94a3b8" font-size="11" text-anchor="end">0.75 m</text><line x1="224" y1="270" x2="236" y2="270" stroke="#94a3b8"/><text x="216" y="274" fill="#94a3b8" font-size="11" text-anchor="end">1.00 m</text><line x1="224" y1="320" x2="236" y2="320" stroke="#94a3b8"/><text x="216" y="324" fill="#94a3b8" font-size="11" text-anchor="end">1.25 m</text><circle cx="290" cy="70.0" r="7" fill="#fde68a"/><text x="312" y="58.0" fill="#e2e8f0" font-size="12">t = 0.0 s,  fallen 0.00 m,  v = 0.00 m/s</text><circle cx="290" cy="79.8" r="7" fill="#fde68a"/><text x="312" y="93.8" fill="#e2e8f0" font-size="12">t = 0.1 s,  fallen 0.05 m,  v = 0.98 m/s</text><circle cx="290" cy="109.2" r="7" fill="#fde68a"/><text x="312" y="113.2" fill="#e2e8f0" font-size="12">t = 0.2 s,  fallen 0.20 m,  v = 1.96 m/s</text><circle cx="290" cy="158.2" r="7" fill="#fde68a"/><text x="312" y="162.2" fill="#e2e8f0" font-size="12">t = 0.3 s,  fallen 0.44 m,  v = 2.94 m/s</text><circle cx="290" cy="226.8" r="7" fill="#fde68a"/><text x="312" y="230.8" fill="#e2e8f0" font-size="12">t = 0.4 s,  fallen 0.78 m,  v = 3.92 m/s</text><circle cx="290" cy="315.0" r="7" fill="#fde68a"/><text x="312" y="319.0" fill="#e2e8f0" font-size="12">t = 0.5 s,  fallen 1.23 m,  v = 4.90 m/s</text><text x="350" y="342" fill="#86efac" font-size="12" text-anchor="middle">The gaps grow each interval because the ball gains 0.98 m/s of speed every 0.1 s.</text>
    </svg>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its symbol or unit. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">free fall</strong>
    </p>
    <p style="margin:6px 0;">Motion when gravity is the only force acting on an object.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> a = −g</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A dropped ball (ignoring air).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">acceleration due to gravity</strong>
    </p>
    <p style="margin:6px 0;">The acceleration of a freely falling object near Earth.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> g ≈ 9.8 m/s²</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>g on the Moon is about 1.6 m/s².</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">air resistance</strong>
    </p>
    <p style="margin:6px 0;">A force from the air that opposes motion through it.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> drag</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A parachute increases air resistance.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">terminal velocity</strong>
    </p>
    <p style="margin:6px 0;">The constant speed reached when air resistance balances gravity.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> maximum falling speed</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Skydivers reach terminal velocity.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">maximum height</strong>
    </p>
    <p style="margin:6px 0;">The highest point of an upward throw, where v = 0.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> v = 0 at the top</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A ball at its peak.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80deea;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">symmetry of flight</strong>
    </p>
    <p style="margin:6px 0;">Without air resistance, the time up equals the time down.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol or unit:</span> t_up = t_down</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1.5 s up, 1.5 s down.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Dropped Objects</h3>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>In this lesson, we take <strong>upward as positive</strong>, so a = −9.8 m/s² for every freely falling object — moving up, moving down or momentarily at rest at the top.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: A dropped object</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A phone is dropped from rest from a height of 20 m. Ignoring air resistance, how long does it take to hit the ground, and how fast is it moving?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Knowns</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v₀ = 0, a = −9.8 m/s², Δx = −20 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Time</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−20 = 0 + ½(−9.8)t² → t² = 40 ÷ 9.8 = 4.08 → t ≈ 2.0 s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Velocity</strong>
    </p>
    <div style="margin:6px 0 0 34px;">v = 0 + (−9.8)(2.02) ≈ −20 m/s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Meaning</strong>
    </p>
    <div style="margin:6px 0 0 34px;">It hits the ground after about 2.0 s, moving at about 20 m/s downward.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> About 2.0 s; about 20 m/s downward.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using Δx = +20 m with a = −9.8 m/s². Keep signs consistent with your chosen positive direction.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Objects Thrown Upward</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: A ball thrown straight up</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A ball is thrown straight up at 15 m/s. Find (a) the time to reach the top, (b) the maximum height and (c) the total time in the air (ignore air resistance).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: (a) At the top v = 0</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 15 + (−9.8)t → t = 15 ÷ 9.8 ≈ 1.5 s</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: (b) Height</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 = 15² + 2(−9.8)Δx → Δx = 225 ÷ 19.6 ≈ 11 m</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: (c) Symmetry</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Time down equals time up, so total ≈ 2 × 1.53 ≈ 3.1 s</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> (a) about 1.5 s; (b) about 11 m; (c) about 3.1 s.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> At the top, the velocity is zero but the acceleration is still −9.8 m/s² — gravity never switches off.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Saying the acceleration is zero at the top.</p>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Point in flight</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Velocity</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Acceleration</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaving the hand</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+15 m/s (up)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−9.8 m/s²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Halfway up</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Smaller, still positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−9.8 m/s²</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At the top</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−9.8 m/s²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Returning to the hand</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−15 m/s (down)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−9.8 m/s²</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Gravity Elsewhere and Air Resistance</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Location</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approximate g (m/s²)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Earth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9.8</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Moon</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.6</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mars</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jupiter (cloud tops)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">24.8</td>
    </tr>
    </table>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Skydivers in a belly-down position reach a terminal velocity of roughly 55 m/s (about 200 km/h). Opening a parachute greatly increases air resistance and reduces the terminal velocity to a safe landing speed of only a few meters per second.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is the acceleration of a ball at the top of its flight?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">9.8 m/s² downward.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does a feather fall slowly on Earth but not on the Moon?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">On Earth, air resistance slows it; the Moon has almost no atmosphere.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A stone is dropped from rest. How fast is it moving after 3.0 s?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">9.8 × 3.0 = 29 m/s downward (ignoring air).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Lab Safety</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep walkways clear and work only in the area your teacher assigns, especially when carts, balls or other objects are moving.</li>
    <li>Never stand under or in the path of a falling or launched object, and catch or stop objects only as instructed.</li>
    <li>Wear safety goggles whenever objects are launched, dropped from a height or under tension (springs, rubber bands).</li>
    <li>Report any damaged equipment, spills or injuries to your teacher at once, and return all equipment when finished.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Science Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using mathematics (SEP 5)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating evidence from history</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Choosing sign conventions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Identifying assumptions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modeling with idealizations</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Analyzing the Evidence</h3>
    <p>Physics often begins with a simplified model — here, “ignore air resistance” — and then asks when the simplification is reasonable. For a dropped stone over a few meters, the model works well. For a feather, a skydiver or a long fall, air resistance is too large to ignore, and the simple model gives wrong answers.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>A coin and a paper circle of the same size are dropped together. Then the paper is placed on top of the coin and dropped. What happens, and why?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80deea;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Physics in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Basketball players’ “hang time” can be estimated from free-fall equations: a jump with 0.8 s of air time reaches a height of only about 0.8 m.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Seeds of plants such as maples and dandelions use shapes that increase air resistance, letting them drift and spread far from the parent plant.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Aerospace engineers, skydiving instructors, sports scientists and safety engineers use free-fall physics.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is g near Earth’s surface?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Downward.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">About 9.8 m/s².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is v at the top of an upward throw?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Momentarily stopped.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0 m/s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Who dropped a hammer and feather on the Moon?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Apollo 15.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Apollo 15 astronaut David Scott, in 1971.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Drop a flat sheet of paper and a crumpled sheet of paper together and record which lands first. Explain the result.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Drop a book and a sheet of paper resting on top of it. Predict and explain what happens.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Estimate a classmate’s jump height from their measured hang time using free-fall equations.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Watch NASA’s archived Apollo 15 hammer-and-feather video and explain what it shows about free fall.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A rock is dropped from rest. How fast is it falling after 2.0 s?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">19.6 ≈ 20 m/s downward.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> How far has it fallen after 2.0 s?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">½(9.8)(2.0)² ≈ 20 m.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A ball is thrown up at 9.8 m/s. How long until it reaches the top?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1.0 s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How high does it go?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">9.8² ÷ (2 × 9.8) = 4.9 m</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80deea;">
    <p style="margin:0 0 6px 0;color:#80deea;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A stone is dropped down a well and the splash is seen 2.5 s later. How deep is the well (ignore sound travel time)?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">½(9.8)(2.5)² ≈ 31 m</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> On the Moon (g = 1.6 m/s²), how long would a hammer take to fall 1.6 m from rest?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">t = √(2 × 1.6 ÷ 1.6) = √2 ≈ 1.4 s</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> SEP 2: Explain when it is reasonable to ignore air resistance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">When the object is compact and dense, moving slowly, or falling a short distance, so air resistance is small compared with gravity.</div>
    </details>
    </div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>In free fall, gravity is the only force, and all objects accelerate downward at g ≈ 9.8 m/s² near Earth, regardless of mass. Galileo’s experiments challenged Aristotle’s idea that heavier objects fall faster, and Apollo 15 confirmed it on the Moon in 1971. Taking up as positive, a = −9.8 m/s² throughout the flight. At the top of an upward throw, the velocity is zero but the acceleration is not. Air resistance makes light, spread-out objects fall more slowly and leads to terminal velocity.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>g ≈ 9.8 m/s² downward.</li>
    <li>Mass does not change free-fall acceleration.</li>
    <li>At the top: v = 0, a = −9.8 m/s².</li>
    <li>Air resistance → terminal velocity.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Choose up or down as positive and be consistent.</li>
    <li>Gravity never switches off.</li>
    <li>Simple models have limits.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking heavier objects fall faster in a vacuum.</li>
    <li>Saying a = 0 at the top.</li>
    <li>Mixing sign conventions.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use symmetry for up-and-down throws.</li>
    <li>Look for v = 0 at the top.</li>
    <li>Check whether air resistance matters.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State your sign convention.</li>
    <li>Give direction with velocities.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Free-fall equations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">SEP 2 Models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ignoring air resistance.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Nature of science</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Galileo and Apollo 15.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Skepticism</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for evidence</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Space exploration</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sports and safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Free-fall physics explains jumps, dives, parachutes and spacecraft — and shows how evidence can overturn old ideas.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve six free-fall problems.</li>
    <li>Explain the Apollo 15 demonstration in a short paragraph.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I believe about falling objects before this lesson?</li>
    <li>What evidence changed my mind?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Free fall</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gravity only.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">g</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9.8 m/s² near Earth.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Air resistance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drag from air.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Terminal velocity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constant falling speed.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain free fall and g.</p>
    <p style="margin:6px 0;">☐ I can explain air resistance.</p>
    <p style="margin:6px 0;">☐ I can solve dropped-object problems.</p>
    <p style="margin:6px 0;">☐ I can solve upward-throw problems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Near Earth’s surface, g is about:',
            options: ['9.8 m/s²', '1.6 m/s²', '98 m/s²', '0.98 m/s²'],
            correct: 0,
            explanation: 'The answer is 9.8 m/s². Downward.'
        },
        {
            question: 'In a vacuum, a heavy and a light ball dropped together:',
            options: ['The heavy one lands first', 'Land together', 'The light one lands first', 'Float'],
            correct: 1,
            explanation: 'The answer is Land together. Same acceleration.'
        },
        {
            question: 'At the top of an upward throw, the ball’s velocity is:',
            options: ['0', '9.8 m/s', 'Maximum', 'Negative 9.8 m/s'],
            correct: 0,
            explanation: 'The answer is 0. Momentarily at rest.'
        },
        {
            question: 'At the top of an upward throw, the acceleration is:',
            options: ['Zero', '9.8 m/s² upward', '9.8 m/s² downward', 'Unknown'],
            correct: 2,
            explanation: 'The answer is 9.8 m/s² downward. Gravity still acts.'
        },
        {
            question: 'A ball dropped from rest falls for 3.0 s. Its speed is about:',
            options: ['9.8 m/s', '44 m/s', '3.3 m/s', '29 m/s'],
            correct: 3,
            explanation: 'The answer is 29 m/s. 9.8 × 3.0.'
        },
        {
            question: 'A ball thrown up at 15 m/s rises about:',
            options: ['15 m', '23 m', '1.5 m', '11 m'],
            correct: 3,
            explanation: 'The answer is 11 m. 225 ÷ 19.6.'
        },
        {
            question: 'Who first showed with experiments that falling objects speed up at a steady rate regardless of weight?',
            options: ['Aristotle', 'Galileo', 'Newton', 'Einstein'],
            correct: 1,
            explanation: 'Ramp experiments in the 1600s.'
        },
        {
            question: 'The hammer-and-feather demonstration was done on:',
            options: ['Mars', 'The Leaning Tower of Pisa', 'The Moon by Apollo 15', 'The International Space Station'],
            correct: 2,
            explanation: 'The answer is The Moon by Apollo 15. In 1971.'
        },
        {
            question: 'A feather falls slowly on Earth mainly because of:',
            options: ['Its color', 'Earth’s rotation', 'Magnetism', 'Air resistance'],
            correct: 3,
            explanation: 'The answer is Air resistance. Drag.'
        },
        {
            question: 'Terminal velocity is reached when:',
            options: ['The object stops', 'Gravity disappears', 'Air resistance balances gravity', 'The object is thrown up'],
            correct: 2,
            explanation: 'The answer is Air resistance balances gravity. No more acceleration.'
        }
    ]
},
{
    name: '1.2 Lab: Measuring Reaction Time with Free Fall',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lab</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Lab: Measuring Reaction Time with Free Fall</h2>
    <p style="font-size:16px;">In this lab you will use the physics of free fall to measure human reaction time: a partner drops a ruler, you catch it, and the distance it falls tells you how long you took to react.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hands</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep fingers open around — not touching — the ruler before it is dropped.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Space</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Work seated or standing in a clear area; drop the ruler only a short distance.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equipment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use a plastic or wooden ruler without sharp edges.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fairness</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The dropper must not give any signal before releasing the ruler.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Lab Investigation: The Ruler-Drop Reaction Test</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To measure reaction time by catching a falling ruler and using the free-fall equation t = √(2d/g).</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">30 cm ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Table edge or chair</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data table</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Free-fall model: d = ½gt², so t = √(2d/g)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">g = 9.8 m/s²</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Convert d from centimeters to meters before calculating</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do not throw the ruler.</li>
    <li>Keep fingers away from the ruler until it drops.</li>
    <li>Return equipment after use.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>The catcher rests their forearm on a table with their hand over the edge, thumb and finger open about 2 cm apart.</li>
    <li>The dropper holds the ruler vertically so the 0 cm mark is level with the catcher’s fingers.</li>
    <li>Without warning, the dropper releases the ruler. The catcher closes their fingers as fast as possible.</li>
    <li>Read the distance d (in cm) at the top of the catcher’s fingers.</li>
    <li>Repeat for five trials, then switch roles.</li>
    <li>Convert each distance to meters and calculate the reaction time with t = √(2d/g).</li>
    <li>Find the average reaction time and compare results with your partner.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 260" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">The Ruler-Drop Reaction Test</text><rect x="120" y="44" width="40" height="200" rx="4" fill="#10233d" stroke="#80deea" stroke-width="2"/><line x1="120" y1="54" x2="136" y2="54" stroke="#80deea"/><text x="142" y="58" fill="#e2e8f0" font-size="10">0</text><line x1="120" y1="84" x2="136" y2="84" stroke="#80deea"/><text x="142" y="88" fill="#e2e8f0" font-size="10">5</text><line x1="120" y1="114" x2="136" y2="114" stroke="#80deea"/><text x="142" y="118" fill="#e2e8f0" font-size="10">10</text><line x1="120" y1="144" x2="136" y2="144" stroke="#80deea"/><text x="142" y="148" fill="#e2e8f0" font-size="10">15</text><line x1="120" y1="174" x2="136" y2="174" stroke="#80deea"/><text x="142" y="178" fill="#e2e8f0" font-size="10">20</text><line x1="120" y1="204" x2="136" y2="204" stroke="#80deea"/><text x="142" y="208" fill="#e2e8f0" font-size="10">25</text><line x1="120" y1="234" x2="136" y2="234" stroke="#80deea"/><text x="142" y="238" fill="#e2e8f0" font-size="10">30</text><text x="140" y="256" fill="#94a3b8" font-size="11" text-anchor="middle">ruler (cm)</text><path d="M 186 54 L 214 54" stroke="#fde68a" stroke-width="3"/><text x="222" y="58" fill="#fde68a" font-size="12">fingers start at 0 cm</text><path d="M 186 144 L 214 144" stroke="#f9a8d4" stroke-width="3"/><text x="222" y="148" fill="#f9a8d4" font-size="12">catch point: d = 15 cm</text><rect x="420" y="50" width="250" height="190" rx="12" fill="#10233d" stroke="#33415c"/><text x="545" y="74" fill="#e3f2fd" font-size="13" font-weight="bold" text-anchor="middle">t = √(2d ÷ g)</text><text x="470" y="104" fill="#fde68a" font-size="13">5 cm</text><text x="560" y="104" fill="#e2e8f0" font-size="13">→  0.10 s</text><text x="470" y="130" fill="#fde68a" font-size="13">10 cm</text><text x="560" y="130" fill="#e2e8f0" font-size="13">→  0.14 s</text><text x="470" y="156" fill="#fde68a" font-size="13">15 cm</text><text x="560" y="156" fill="#e2e8f0" font-size="13">→  0.17 s</text><text x="470" y="182" fill="#fde68a" font-size="13">20 cm</text><text x="560" y="182" fill="#e2e8f0" font-size="13">→  0.20 s</text><text x="470" y="208" fill="#fde68a" font-size="13">25 cm</text><text x="560" y="208" fill="#e2e8f0" font-size="13">→  0.23 s</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Trial</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">3</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">4</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">5</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Average</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance d (cm)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance d (m)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reaction time t (s)</td>
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
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> A catch at 15 cm gives what reaction time?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">t = √(2 × 0.15 ÷ 9.8) = √0.0306 ≈ 0.17 s.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does the ruler work as a timer?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Free fall is predictable: the distance fallen depends only on time, because every object falls with the same acceleration.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why repeat the test several times?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Reaction times vary from trial to trial, so an average is more reliable.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The distance a ruler falls before being caught can be converted into reaction time using free-fall physics; typical school results are roughly 0.15–0.25 s.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Because d = ½gt², the reaction time is t = √(2d/g); a longer fall distance means a longer reaction time.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The catcher anticipating the drop.</li>
    <li>Fingers not lined up with 0 cm at the start.</li>
    <li>Reading the distance at the wrong part of the fingers.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Reaction time is a key part of stopping distance for drivers, and athletes train to improve it.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Write a lab report including your data, calculations, average reaction time and a discussion of errors. Compare your reaction time with the 1.5 s often used for drivers’ reaction time and explain why driving involves a longer reaction than catching a ruler.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Distances must be in meters when you use g = 9.8 m/s².</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Lab Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Which equation links fall distance and time from rest?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">d = ½gt² (so t = √(2d/g)).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Convert 20 cm to meters.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0.20 m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find t for d = 0.20 m.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">t = √(0.40 ÷ 9.8) ≈ 0.20 s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How might distractions such as a phone affect your results?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They would increase reaction time, so the ruler would fall farther before you catch it.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is a driver’s reaction time longer than in this test?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A driver must notice a hazard, decide what to do and move a foot to the brake, while this test only requires closing the fingers on an expected event.</div>
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
            question: 'The ruler-drop test measures:',
            options: ['Mass', 'Temperature', 'Reaction time', 'Speed of sound'],
            correct: 2,
            explanation: 'The answer is Reaction time. Using free fall.'
        },
        {
            question: 'Reaction time is calculated with:',
            options: ['t = d × g', 't = √(2d/g)', 't = g ÷ d', 't = d + g'],
            correct: 1,
            explanation: 'The answer is t = √(2d/g). From d = ½gt².'
        },
        {
            question: 'A longer fall distance means:',
            options: ['A longer reaction time', 'A shorter reaction time', 'No reaction', 'A heavier ruler'],
            correct: 0,
            explanation: 'The answer is A longer reaction time. More time to fall farther.'
        },
        {
            question: 'Distances must be converted to:',
            options: ['Meters', 'Kilometers', 'Inches', 'Feet'],
            correct: 0,
            explanation: 'The answer is Meters. To match g in m/s².'
        },
        {
            question: 'A catch at 5 cm gives a reaction time of about:',
            options: ['0.50 s', '1.0 s', '0.01 s', '0.10 s'],
            correct: 3,
            explanation: 'The answer is 0.10 s. √(0.10 ÷ 9.8).'
        },
        {
            question: 'Why must the dropper give no warning?',
            options: ['To make the ruler heavier', 'To speed up gravity', 'So the catcher cannot anticipate', 'It does not matter'],
            correct: 2,
            explanation: 'The answer is So the catcher cannot anticipate. Fair test.'
        }
    ]
},
{
    name: '1.2 Quiz: Acceleration and Free Fall',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Acceleration and Free Fall</h2>
    <p style="font-size:16px;">Test your understanding of acceleration, velocity–time graphs, the kinematic equations and free fall from Topic 1.2.</p>
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
    <li>Calculating acceleration</li>
    <li>Signs of velocity and acceleration</li>
    <li>Slope and area of v–t graphs</li>
    <li>Choosing and using kinematic equations</li>
    <li>Dropped objects</li>
    <li>Objects thrown upward</li>
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
    <div>List Δx, v₀, v, a and t for every problem, and choose the equation that does not include the quantity you neither know nor need.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A bike goes from 2.0 m/s to 8.0 m/s in 3.0 s. Its acceleration is:',
            options: ['3.3 m/s²', '6.0 m/s²', '18 m/s²', '2.0 m/s²'],
            correct: 3,
            explanation: 'The answer is 2.0 m/s². 6.0 ÷ 3.0.'
        },
        {
            question: 'Velocity is +10 m/s and acceleration is −2 m/s². The object is:',
            options: ['Speeding up', 'At rest', 'Slowing down', 'Moving backward'],
            correct: 2,
            explanation: 'The answer is Slowing down. Opposite signs.'
        },
        {
            question: 'A v–t line rises from 0 to 15 m/s over 5 s. Its slope is:',
            options: ['75 m/s²', '3 m/s²', '15 m/s²', '0.33 m/s²'],
            correct: 1,
            explanation: 'The answer is 3 m/s². 15 ÷ 5.'
        },
        {
            question: 'The displacement for that same 5 s is:',
            options: ['75 m', '15 m', '3 m', '37.5 m'],
            correct: 3,
            explanation: 'The answer is 37.5 m. ½ × 5 × 15.'
        },
        {
            question: 'A car from rest reaches 30 m/s with a = 2.0 m/s². How far does it travel?',
            options: ['15 m', '225 m', '450 m', '60 m'],
            correct: 1,
            explanation: 'The answer is 225 m. 30² ÷ (2 × 2.0).'
        },
        {
            question: 'From rest, an object accelerates at 5.0 m/s² for 4.0 s. Its final velocity is:',
            options: ['40 m/s', '9.0 m/s', '20 m/s', '1.25 m/s'],
            correct: 2,
            explanation: 'The answer is 20 m/s. v = at.'
        },
        {
            question: 'A stone is dropped from rest. After 1.0 s it has fallen about:',
            options: ['9.8 m', '19.6 m', '1.0 m', '4.9 m'],
            correct: 3,
            explanation: 'The answer is 4.9 m. ½ × 9.8 × 1².'
        },
        {
            question: 'A ball is thrown up at 19.6 m/s. Time to the top is:',
            options: ['2.0 s', '1.0 s', '4.0 s', '19.6 s'],
            correct: 0,
            explanation: 'The answer is 2.0 s. 19.6 ÷ 9.8.'
        },
        {
            question: 'Without air resistance, time up equals:',
            options: ['Twice the time down', 'Time down', 'Half the time down', 'Zero'],
            correct: 1,
            explanation: 'The answer is Time down. Symmetry.'
        },
        {
            question: 'On the Moon, free-fall acceleration is about:',
            options: ['1.6 m/s²', '9.8 m/s²', '3.7 m/s²', '0 m/s²'],
            correct: 0,
            explanation: 'The answer is 1.6 m/s². Weaker gravity.'
        }
    ]
},
{
    name: '1.2 Assignment: Stopping-Distance Safety Report',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Stopping-Distance Safety Report</h2>
    <p style="font-size:16px;">Use kinematics to analyze how far a car travels before it stops at different speeds, and write a safety report (with calculations and a graph) recommending safe following distances.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>A car’s total stopping distance has two parts: the <strong>reaction distance</strong>, traveled at constant speed while the driver notices a hazard and moves to the brake, and the <strong>braking distance</strong>, traveled while the car decelerates. In this report, use a reaction time of 1.5 s and a braking deceleration of 7.0 m/s² on a dry road. Real values vary with the driver, the car, the tires and the road.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 250" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Stopping Distance = Reaction Distance + Braking Distance</text><text x="130" y="92" fill="#e3f2fd" font-size="13" font-weight="bold" text-anchor="end">12.5 m/s</text><rect x="140" y="70" width="101.3" height="34" fill="#fde68a"/><rect x="241.3" y="70" width="60.5" height="34" fill="#f9a8d4"/><text x="190.6" y="92" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">18.75 m</text><text x="271.5" y="92" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">11.2 m</text><text x="309.7" y="92" fill="#e2e8f0" font-size="12">total ≈ 30 m</text><text x="130" y="172" fill="#e3f2fd" font-size="13" font-weight="bold" text-anchor="end">25 m/s</text><rect x="140" y="150" width="202.5" height="34" fill="#fde68a"/><rect x="342.5" y="150" width="240.8" height="34" fill="#f9a8d4"/><text x="241.3" y="172" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">37.5 m</text><text x="462.9" y="172" fill="#0f172a" font-size="12" font-weight="bold" text-anchor="middle">44.6 m</text><text x="591.3" y="172" fill="#e2e8f0" font-size="12">total ≈ 82 m</text><rect x="140" y="200" width="14" height="14" fill="#fde68a"/><text x="160" y="212" fill="#e2e8f0" font-size="12">reaction (1.5 s)</text><rect x="290" y="200" width="14" height="14" fill="#f9a8d4"/><text x="310" y="212" fill="#e2e8f0" font-size="12">braking at 7.0 m/s²</text><text x="350" y="240" fill="#86efac" font-size="12" text-anchor="middle">Double the speed → 4× the braking distance</text>
    </svg>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>This is a physics analysis. Always follow local road rules and the guidance of qualified driving instructors.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose at least five speeds between 10 m/s and 35 m/s.</li>
    <li>For each speed, calculate the reaction distance: d_r = v × 1.5 s.</li>
    <li>For each speed, calculate the braking distance: d_b = v² ÷ (2 × 7.0 m/s²).</li>
    <li>Add them to find the total stopping distance and record all values in a table.</li>
    <li>Graph total stopping distance against speed and describe the shape of the graph.</li>
    <li>Repeat the braking calculation for a wet road with a deceleration of 4.0 m/s² and compare.</li>
    <li>Write recommendations about speed, distraction and following distance, supported by your calculations.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your data table</li>
    <li>Your graph</li>
    <li>Your dry vs. wet comparison</li>
    <li>Your written safety recommendations</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All distances correct with units and sensible rounding</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few calculations</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, labeled graph with correct shape described</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Physics explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains clearly why braking distance grows with v²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains the trend</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partial explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No explanation</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparison</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful dry vs. wet analysis with numbers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear comparison</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brief comparison</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specific, evidence-based and responsible</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and supported</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Keep units in every step.<br>Use a spreadsheet to calculate quickly.<br>Notice how much reaction distance depends on attention.<br>Round to two or three significant figures.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What surprised me most about stopping distances?</li>
    <li>How does distraction affect safety in physics terms?</li>
    <li>How will this change the way I think about speed?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Total stopping distance equals:',
            options: ['Braking distance only', 'Reaction distance + braking distance', 'Speed × time only', 'Reaction time × g'],
            correct: 1,
            explanation: 'The answer is Reaction distance + braking distance. Two parts.'
        },
        {
            question: 'At 25 m/s with a 1.5 s reaction time, the reaction distance is:',
            options: ['16.7 m', '25 m', '37.5 m', '1.5 m'],
            correct: 2,
            explanation: 'The answer is 37.5 m. 25 × 1.5.'
        },
        {
            question: 'At 25 m/s braking at 7.0 m/s², the braking distance is about:',
            options: ['25 m', '45 m', '89 m', '3.6 m'],
            correct: 1,
            explanation: 'The answer is 45 m. 625 ÷ 14.'
        },
        {
            question: 'If speed doubles, the reaction distance:',
            options: ['Doubles', 'Quadruples', 'Stays the same', 'Halves'],
            correct: 0,
            explanation: 'The answer is Doubles. d_r = v × t.'
        },
        {
            question: 'On a wet road, braking distance is:',
            options: ['Shorter', 'Unchanged', 'Longer', 'Zero'],
            correct: 2,
            explanation: 'The answer is Longer. Smaller deceleration.'
        },
        {
            question: 'Distraction mainly increases the:',
            options: ['Reaction distance', 'Car’s mass', 'Road friction', 'Value of g'],
            correct: 0,
            explanation: 'The answer is Reaction distance. Longer reaction time.'
        }
    ]
},
{
    name: '1.2 Review: Acceleration and Free Fall',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Acceleration and Free Fall</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and prepare for the end-of-unit assessment.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Acceleration</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>a = (v − v₀)/t, in m/s².</li>
    <li>Same signs → speeding up; opposite → slowing down.</li>
    <li>Velocity and acceleration are different quantities.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Velocity–Time Graphs</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Slope = acceleration.</li>
    <li>Area = displacement.</li>
    <li>Crossing the axis = change of direction.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Kinematic Equations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>v = v₀ + at; Δx = v₀t + ½at².</li>
    <li>v² = v₀² + 2aΔx; Δx = ½(v₀ + v)t.</li>
    <li>Only for constant acceleration.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80deea;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Free Fall</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>a = 9.8 m/s² downward for all objects (no air).</li>
    <li>At the top: v = 0, a ≠ 0.</li>
    <li>Air resistance → terminal velocity.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hidden knowns</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Useful equation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Car brakes to a stop</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v² = v₀² + 2aΔx</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Object dropped</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v₀ = 0, a = −9.8 m/s²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx = ½at²</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ball at maximum height</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = v₀ + at</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Starts from rest</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v₀ = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">v = at</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Average velocity known</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Δx = ½(v₀ + v)t</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> A runner slows from 8.0 m/s to 2.0 m/s in 3.0 s. Find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−2.0 m/s²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the area under a v–t line constant at 5 m/s from 0 to 6 s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">30 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A car from rest accelerates at 3.0 m/s² for 4.0 s. Find v and Δx.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">v = 12 m/s; Δx = 24 m.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A truck at 18 m/s stops in 36 m. Find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">a = −18² ÷ (2 × 36) = −4.5 m/s²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A ball is dropped from 45 m. How long does it fall?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">t = √(90 ÷ 9.8) ≈ 3.0 s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A ball is thrown up at 20 m/s. Find the maximum height.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">400 ÷ 19.6 ≈ 20 m</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can calculate acceleration.</p>
    <p style="margin:6px 0;">☐ I can interpret v–t graphs.</p>
    <p style="margin:6px 0;">☐ I can use the kinematic equations.</p>
    <p style="margin:6px 0;">☐ I can solve free-fall problems.</p>
    <p style="margin:6px 0;">☐ I can measure reaction time with free fall.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The slope of a v–t graph is:',
            options: ['Displacement', 'Position', 'Acceleration', 'Mass'],
            correct: 2,
            explanation: 'The answer is Acceleration. Δv/Δt.'
        },
        {
            question: 'Which equation is best when time is unknown and not needed?',
            options: ['v = v₀ + at', 'v² = v₀² + 2aΔx', 'Δx = v₀t + ½at²', 'a = Δv/Δt'],
            correct: 1,
            explanation: 'The answer is v² = v₀² + 2aΔx. No t.'
        },
        {
            question: 'An object dropped from rest has v₀ =',
            options: ['9.8 m/s', '−9.8 m/s', '0', 'Unknown'],
            correct: 2,
            explanation: 'Dropped means starting at rest.'
        },
        {
            question: 'At the top of a throw, a =',
            options: ['0', '−9.8 m/s² (up positive)', '+9.8 m/s²', 'Infinite'],
            correct: 1,
            explanation: 'The answer is −9.8 m/s² (up positive). Gravity acts throughout.'
        },
        {
            question: 'Braking distance depends on:',
            options: ['The square of speed', 'Speed only linearly', 'Mass only', 'Color'],
            correct: 0,
            explanation: 'The answer is The square of speed. v².'
        },
        {
            question: 'Free-fall acceleration does not depend on:',
            options: ['Mass', 'Location (planet)', 'Air resistance', 'Height above a planet'],
            correct: 0,
            explanation: 'The answer is Mass. All masses fall together.'
        }
    ]
},
{
    name: '1.2 Summary: Acceleration and Free Fall',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00838f, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80deea;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Motion in One Dimension · Topic 1.2 Acceleration and Free Fall</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80deea;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Acceleration and Free Fall</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Acceleration describes how velocity changes; with constant acceleration, four kinematic equations let us predict motion precisely — including free fall, where every object accelerates at the same rate, g.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Acceleration a = Δv/Δt; its sign shows direction, and speeding up or slowing down depends on whether v and a share a sign.</li>
    <li>On a velocity–time graph, slope is acceleration and area is displacement.</li>
    <li>Four kinematic equations link Δx, v₀, v, a and t when acceleration is constant.</li>
    <li>A clear routine — sketch, sign convention, knowns, equation, substitution, check — prevents most errors.</li>
    <li>In free fall all objects accelerate at g ≈ 9.8 m/s² downward, as Galileo argued and Apollo 15 showed.</li>
    <li>Air resistance limits falling speed and explains terminal velocity and parachutes.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Acceleration and Velocity–Time Graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition, sign, slope and area</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find Δv first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 The Kinematic Equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Four equations, hidden knowns, problem routine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pick the equation missing the unneeded quantity</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Free Fall</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">g, upward throws, air resistance, history</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep one sign convention</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">acceleration</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">initial velocity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">final velocity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">deceleration</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">velocity–time graph</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">area under a graph</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">constant acceleration</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">kinematic equation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hidden known</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">free fall</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">acceleration due to gravity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">air resistance</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">terminal velocity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">maximum height</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">reaction time</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Kinematics helps engineers design safer roads, runways and rides — and helps every driver understand why speed and attention matter.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80deea;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Motion in One Dimension. In Unit 2.0 you will discover what causes acceleration — forces — and study Newton’s three laws of motion.</div>
    </div>
    <div style="background:#0f2f33;padding:20px;border-radius:12px;border:1px solid #80deea;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can calculate and interpret acceleration.</p>
    <p style="margin:6px 0;">✔️ I can use slope and area on v–t graphs.</p>
    <p style="margin:6px 0;">✔️ I can choose and use the kinematic equations.</p>
    <p style="margin:6px 0;">✔️ I can solve free-fall problems.</p>
    <p style="margin:6px 0;">✔️ I can measure reaction time using free fall.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.2 is that constant acceleration lets us:',
            options: ['Ignore units', 'Predict motion with equations', 'Avoid graphs', 'Measure mass'],
            correct: 1,
            explanation: 'The answer is Predict motion with equations. Kinematics predicts motion.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['Electric circuits', 'Light', 'Atoms', 'Forces and Newton’s laws'],
            correct: 3,
            explanation: 'The answer is Forces and Newton’s laws. What causes acceleration.'
        },
        {
            question: 'Area under a v–t graph gives:',
            options: ['Displacement', 'Acceleration', 'Time', 'Force'],
            correct: 0,
            explanation: 'The answer is Displacement. v × t.'
        },
        {
            question: 'All objects in free fall near Earth accelerate at about:',
            options: ['1.6 m/s²', '9.8 m/s²', '0 m/s²', '98 m/s²'],
            correct: 1,
            explanation: 'The answer is 9.8 m/s². g.'
        },
        {
            question: 'Which is a hidden known in “a ball is dropped”?',
            options: ['v = 0', 'a = 0', 'v₀ = 0', 't = 0 at the end'],
            correct: 2,
            explanation: 'The answer is v₀ = 0. Dropped from rest.'
        },
        {
            question: 'Speeding up happens when v and a:',
            options: ['Have the same sign', 'Have opposite signs', 'Are both zero', 'Are unrelated'],
            correct: 0,
            explanation: 'The answer is Have the same sign. Same direction.'
        }
    ]
}
],
          stats:{lessons:19,exercises:128,quizzes:20,projects:2,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Which quantity is a vector?',
                  options: ['Speed', 'Distance', 'Velocity', 'Time'],
                  correct: 2,
                  explanation: 'Velocity has size and direction.'
              },
              {
                  question: 'A runner completes one 400 m lap and returns to the start. Her displacement is:',
                  options: ['400 m', '0 m', '200 m', '800 m'],
                  correct: 1,
                  explanation: 'She ends where she began.'
              },
              {
                  question: 'The SI unit of acceleration is:',
                  options: ['m/s²', 'm/s', 'km/h', 'N'],
                  correct: 0,
                  explanation: 'Meters per second per second.'
              },
              {
                  question: 'On a position–time graph, the slope equals the:',
                  options: ['Velocity', 'Acceleration', 'Displacement', 'Time'],
                  correct: 0,
                  explanation: 'Change in position over change in time.'
              },
              {
                  question: 'On a velocity–time graph, the area under the line equals the:',
                  options: ['Acceleration', 'Displacement', 'Speed', 'Mass'],
                  correct: 1,
                  explanation: 'Velocity × time = displacement.'
              },
              {
                  question: 'A car speeds up from 0 to 24 m/s in 8.0 s. Its average acceleration is:',
                  options: ['192 m/s²', '0.33 m/s²', '16 m/s²', '3.0 m/s²'],
                  correct: 3,
                  explanation: '24 ÷ 8.0 = 3.0.'
              },
              {
                  question: 'Near Earth’s surface, the acceleration of a freely falling object is about:',
                  options: ['9.8 m/s upward', '9.8 m/s² downward', '1.6 m/s² downward', '0 m/s²'],
                  correct: 1,
                  explanation: 'g ≈ 9.8 m/s².'
              },
              {
                  question: 'Which equation does NOT include time?',
                  options: ['v = v₀ + at', 'Δx = v₀t + ½at²', 'Δx = ½(v₀ + v)t', 'v² = v₀² + 2aΔx'],
                  correct: 3,
                  explanation: 'Use it when time is unknown.'
              },
              {
                  question: 'A ball is thrown straight up. At its highest point, its velocity is:',
                  options: ['Maximum', '9.8 m/s', 'Zero', 'Equal to its starting velocity'],
                  correct: 2,
                  explanation: 'It momentarily stops.'
              },
              {
                  question: 'Converting 72 km/h to meters per second gives:',
                  options: ['72 m/s', '7.2 m/s', '259 m/s', '20 m/s'],
                  correct: 3,
                  explanation: '72 × 1000 ÷ 3600 = 20.'
              },
              {
                  question: 'If speed doubles, a car’s braking distance (same deceleration):',
                  options: ['Becomes four times as large', 'Doubles', 'Stays the same', 'Halves'],
                  correct: 0,
                  explanation: 'Braking distance depends on v².'
              },
              {
                  question: 'In a vacuum, a hammer and a feather dropped together:',
                  options: ['The hammer lands first', 'The feather lands first', 'Land at the same time', 'Never land'],
                  correct: 2,
                  explanation: 'Shown on the Moon by Apollo 15 in 1971.'
              }
          ]}
);