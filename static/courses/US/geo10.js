// Eschool course: Geometry (USA, high school, Common Core aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'geometry-us', name:'Geometry', code:'GEO 1', level:'grade-10', iconStyle:'fas', icon:'fa-drafting-compass', color:'#00695c',
          category:'Mathematics',
          description:'Build the language and logic of geometry: points, lines and planes, segment and angle measure, the distance and midpoint formulas, compass-and-straightedge constructions, conditional statements, and your first two-column proofs.',
          longDescription:'Geometry is a high-school mathematics course aligned to the Common Core State Standards for Mathematics (High School Geometry). Unit 1, Tools of Geometry and Reasoning, covers undefined terms and precise definitions (G-CO.1), segment and angle measure, the distance and midpoint formulas on the coordinate plane (G-GPE.4, G-GPE.6, G-GPE.7), formal constructions with compass and straightedge (G-CO.12), inductive and deductive reasoning, conditional statements, algebraic and two-column proofs, and proofs of theorems about lines and angles such as the Vertical Angles Theorem (G-CO.9). Later units cover transformations and congruence, parallel and perpendicular lines, triangles, similarity, right-triangle trigonometry, quadrilaterals, circles, and area and volume. Every lesson includes worked examples, guided practice, leveled practice questions, a math investigation, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Tools of Geometry and Reasoning — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Tools of Geometry and Reasoning</h2>
    <p style="font-size:16px;">Welcome to Geometry — the mathematics of shape, size, position and space. Architects, engineers, game designers, surveyors and artists use it every day.</p>
    <p style="font-size:16px;">Geometry is also a course in logical thinking. In this first unit you will learn the basic building blocks — points, lines, planes, segments and angles — and then learn to prove why things are true, step by step.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How do we use precise definitions and logical reasoning to discover and prove geometric truths?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>Geometry, as taught in most U.S. high schools, follows the approach of the Greek mathematician Euclid, who around 300 BCE built a whole system of geometry from a few basic assumptions. You will do the same: start with undefined terms and postulates, then use them to prove theorems.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Common Core standards</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Tools of Geometry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Points, lines and planes; segment measure, distance and midpoint; angles and angle pairs; constructions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">G-CO.1, G-CO.12, G-GPE.4, G-GPE.6, G-GPE.7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Reasoning and Proof</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inductive and deductive reasoning; conditional statements; algebraic and two-column proofs; proving angle theorems</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">G-CO.9, MP3</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, a math investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Tools of Geometry <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Measuring Our World</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Points, Lines and Planes</li>
    <li>1.1.2 Segments, Distance and Midpoint</li>
    <li>1.1.3 Angles and Angle Pairs</li>
    <li>🧭 Investigation: Compass-and-Straightedge Constructions</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Reasoning and Proof <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: The Logic of Proof</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Inductive Reasoning and Conditional Statements</li>
    <li>1.2.2 Deductive Reasoning and Algebraic Proof</li>
    <li>1.2.3 Proving Segment and Angle Theorems</li>
    <li>🧭 Investigation: Proof Puzzles</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Attend to precision (MP6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using exact vocabulary, notation and units.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Construct arguments (MP3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing proofs and critiquing the reasoning of others.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use tools strategically (MP5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using compass, straightedge, protractor and geometry software.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Look for structure (MP7)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeing angle relationships and patterns in figures.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reason abstractly (MP2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing and solving equations from geometric relationships.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Logical thinking</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty in reasoning</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Architecture and design</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Engineering</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Maps and navigation</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a geometry notebook with three sections: vocabulary (with a sketch for every term), postulates and theorems (numbered as you learn them), and practice. Always draw and label a diagram before solving.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Geometry is the study of:',
            options: ['Living organisms', 'Historical events', 'Chemical reactions', 'Shape, size, position and space'],
            correct: 3,
            explanation: 'Geometry means “earth measurement.”'
        },
        {
            question: 'The Greek mathematician who organized geometry from basic assumptions was:',
            options: ['Newton', 'Einstein', 'Euclid', 'Pascal'],
            correct: 2,
            explanation: 'Euclid wrote the Elements around 300 BCE.'
        },
        {
            question: 'Topic 1.2 of this unit focuses on:',
            options: ['Reasoning and proof', 'Trigonometry', 'Circles', 'Volume'],
            correct: 0,
            explanation: 'It teaches logical reasoning and proofs.'
        },
        {
            question: 'Mathematical Practice 3 (MP3) is about:',
            options: ['Using a calculator', 'Memorizing formulas', 'Graphing data', 'Constructing arguments and critiquing reasoning'],
            correct: 3,
            explanation: 'The answer is Constructing arguments and critiquing reasoning. Proofs are arguments.'
        },
        {
            question: 'What should you do before solving a geometry problem?',
            options: ['Draw and label a diagram', 'Guess the answer', 'Skip the given information', 'Use a calculator first'],
            correct: 0,
            explanation: 'Diagrams organize information.'
        },
        {
            question: 'Statements accepted as true without proof are called:',
            options: ['Theorems', 'Conjectures', 'Postulates', 'Counterexamples'],
            correct: 2,
            explanation: 'Postulates (axioms) are the starting assumptions.'
        }
    ]
},
{
    name: '1.0 Tools of Geometry and Reasoning — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives come from the Common Core State Standards for Mathematics (High School Geometry). Check them at the start and end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Know precise definitions of angle, circle, perpendicular and parallel lines and line segment, based on the undefined notions of point, line and plane. (G-CO.1)</li>
    <li>Use the Segment and Angle Addition Postulates to find measures.</li>
    <li>Use coordinates to find distances and midpoints, and to compute perimeters. (G-GPE.4, G-GPE.6, G-GPE.7)</li>
    <li>Make formal geometric constructions with a compass and straightedge. (G-CO.12)</li>
    <li>Write conditional statements, their converses, inverses and contrapositives, and use deductive reasoning.</li>
    <li>Prove theorems about lines and angles, including that vertical angles are congruent. (G-CO.9)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Tools of Geometry</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name and sketch points, lines, planes, segments and rays. (G-CO.1)</li>
    <li>Find segment lengths, distances and midpoints. (G-GPE.4, G-GPE.6)</li>
    <li>Classify angles and use angle-pair relationships to solve for unknowns.</li>
    <li>Construct congruent segments, angles, perpendicular bisectors and angle bisectors. (G-CO.12)</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How can we measure and describe the figures around us precisely?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Reasoning and Proof</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use inductive reasoning to make conjectures and counterexamples to disprove them.</li>
    <li>Write and evaluate conditional, converse, inverse, contrapositive and biconditional statements.</li>
    <li>Justify algebraic steps with the properties of equality.</li>
    <li>Write two-column proofs of segment and angle theorems. (G-CO.9)</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do we know that something is always true?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You solve accurately, use precise vocabulary and notation, and write complete, logical proofs with every reason stated.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You solve accurately and write proofs with correct statements and reasons, with minor slips.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You use correct methods but make errors or leave gaps in your reasoning.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You attempt problems, but your setup or reasoning is mostly incorrect.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>In Geometry, every statement in a proof needs a reason. “It looks like it” is never a reason.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'G-CO.1 is about:',
            options: ['Volume of solids', 'Probability', 'Trigonometric ratios', 'Precise definitions based on undefined terms'],
            correct: 3,
            explanation: 'G-CO.1 builds definitions from point, line and plane.'
        },
        {
            question: 'G-CO.12 is about:',
            options: ['Solving quadratics', 'Graphing functions', 'Formal geometric constructions', 'Statistics'],
            correct: 2,
            explanation: 'Constructions with compass and straightedge.'
        },
        {
            question: 'G-CO.9 asks you to prove theorems about:',
            options: ['Circles only', 'Data sets', 'Lines and angles', 'Polynomials'],
            correct: 2,
            explanation: 'The answer is Lines and angles. Including vertical angles.'
        },
        {
            question: 'At the Proficient (3) level, your proofs have:',
            options: ['Correct statements and reasons with minor slips', 'No reasons', 'Only diagrams', 'Only the final answer'],
            correct: 0,
            explanation: 'Proficient proofs are mostly complete.'
        },
        {
            question: 'Which is NEVER a valid reason in a proof?',
            options: ['A definition', 'A postulate', 'A theorem', '“It looks like it.”'],
            correct: 3,
            explanation: 'The answer is “It looks like it.”. Appearance is not proof.'
        },
        {
            question: 'G-GPE.4 to G-GPE.7 deal with:',
            options: ['Constructions only', 'Coordinates, distance and midpoints', 'Logic only', 'Area of circles'],
            correct: 1,
            explanation: 'The answer is Coordinates, distance and midpoints. Geometry with coordinates.'
        }
    ]
},
{
    name: '1.0 Tools of Geometry and Reasoning — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: Seeing the World Geometrically</h2>
    <p style="font-size:16px;">Look around your room. The corner where two walls meet the floor is a point where three planes meet. The edge of your desk is part of a line. The hands of a clock form an angle that changes every minute.</p>
    <p style="font-size:16px;">Geometry gives us precise words for these ideas — and a way of reasoning that lets us be certain about them.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📐 Your Geometry Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">point</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">line</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">plane</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">segment</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ray</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">angle</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">midpoint</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">bisector</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">postulate</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">theorem</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">conditional</span><span style="background:#0b1a2e;border:1px solid #80cbc4;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">proof</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Tools You Will Need</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tool</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Used for</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compass</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing circles and arcs; copying lengths</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straightedge (unmarked)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing straight lines in constructions</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Protractor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measuring angles in degrees</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ruler</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measuring lengths</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph paper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Working on the coordinate plane</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geometry software</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exploring figures and testing conjectures</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Warm-Up (5 minutes)</h3>
    <p>Solve: (a) 3x + 10 = 5x − 30  (b) (2x + 15) + (4x − 3) = 180  (c) √(6² + 8²). <em>Answers: x = 20; x = 28; 10.</em> You will use all three skills in Topic 1.1.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔤 Notation Matters</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Notation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB with a line symbol over it</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line AB</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB with a segment bar over it</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Segment AB</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB (no symbol)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The length of segment AB</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∠ABC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Angle ABC, with vertex B</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠ABC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The measure of angle ABC</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">≅</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is congruent to</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Bring a compass, protractor, ruler and pencil to every lesson. In geometry, a neat, labeled diagram is half of the solution.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which tool is used to draw arcs and copy lengths?',
            options: ['Protractor', 'Calculator', 'Compass', 'Eraser'],
            correct: 2,
            explanation: 'A compass draws circles and arcs.'
        },
        {
            question: 'A protractor measures:',
            options: ['Lengths', 'Areas', 'Volumes', 'Angles'],
            correct: 3,
            explanation: 'Protractors measure angles in degrees.'
        },
        {
            question: 'In ∠ABC, the vertex is:',
            options: ['A', 'C', 'AB', 'B'],
            correct: 3,
            explanation: 'The middle letter names the vertex.'
        },
        {
            question: 'The symbol ≅ means:',
            options: ['Is equal to', 'Is parallel to', 'Is congruent to', 'Is perpendicular to'],
            correct: 2,
            explanation: 'Congruent figures have the same size and shape.'
        },
        {
            question: 'm∠ABC means:',
            options: ['The measure of angle ABC', 'The midpoint of ABC', 'A line through A, B and C', 'The length of AB'],
            correct: 0,
            explanation: 'The answer is The measure of angle ABC. “m” stands for measure.'
        },
        {
            question: 'Solve 3x + 10 = 5x − 30.',
            options: ['x = 10', 'x = 20', 'x = −20', 'x = 40'],
            correct: 1,
            explanation: 'The answer is x = 20. 40 = 2x, so x = 20.'
        }
    ]
},
{
    name: '1.1.1 Points, Lines and Planes',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Measuring Our World</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Points, Lines and Planes</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the three undefined terms of geometry, how to name and sketch points, lines, planes, segments and rays, and the basic postulates about how they intersect.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every figure in geometry — triangles, circles, cubes — is built from points, lines and planes. Precise words and notation let mathematicians, engineers and designers communicate without confusion.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Architecture</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗺️ GPS and maps</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 3D game design</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✈️ Flight paths</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🖨️ 3D printing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📐 Drafting</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name and describe points, lines, planes, segments and rays using precise definitions. (G-CO.1)</li>
    <li>Find segment lengths, distances and midpoints, including on the coordinate plane. (G-GPE.4, G-GPE.6, G-GPE.7)</li>
    <li>Classify angles and use angle-pair relationships to find unknown measures.</li>
    <li>Make formal constructions with a compass and straightedge. (G-CO.12)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the undefined terms point, line and plane.</li>
    <li>Name and sketch segments, rays and opposite rays.</li>
    <li>Identify collinear and coplanar points.</li>
    <li>Apply basic postulates about intersections of lines and planes.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why do we need a few words that are never defined?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In middle school you drew lines, segments and angles. Now you will use precise geometric language and notation.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Try to define “point” without using a word that needs its own definition. It is almost impossible! That is why geometry starts with three <strong>undefined terms</strong>: <strong>point</strong>, <strong>line</strong> and <strong>plane</strong>. We describe them and agree on what they mean, then use them to define everything else.</p>
    <p>A <strong>point</strong> has no size — it only marks a location. A <strong>line</strong> is straight, has no thickness and extends forever in both directions. A <strong>plane</strong> is a flat surface with no thickness that extends forever in all directions.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Point = a location. Line = a straight path that never ends. Plane = a flat surface that never ends.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Euclid’s <em>Elements</em>, written in Greece around 300 BCE, begins with definitions and a few <strong>postulates</strong> — statements accepted without proof. From these, Euclid proved hundreds of <strong>theorems</strong>. The <em>Elements</em> became one of the most widely studied mathematics books in history.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">point</strong>
    </p>
    <p style="margin:6px 0;">A location in space with no size.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> capital letter, e.g. A</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The corner of a room is modeled by a point.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">line</strong>
    </p>
    <p style="margin:6px 0;">A straight path of points with no thickness that extends without end in two directions.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> line AB or line ℓ</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Two points determine exactly one line.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">plane</strong>
    </p>
    <p style="margin:6px 0;">A flat surface with no thickness that extends without end in all directions.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> plane P or plane ABC</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A tabletop models part of a plane.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">segment</strong>
    </p>
    <p style="margin:6px 0;">Part of a line made of two endpoints and all points between them.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> segment AB</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The edge of a book is a segment.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">ray</strong>
    </p>
    <p style="margin:6px 0;">Part of a line with one endpoint that extends without end in one direction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ray AB (endpoint A)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A flashlight beam models a ray.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">collinear</strong>
    </p>
    <p style="margin:6px 0;">Points that lie on the same line.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Any two points are always collinear.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Naming Geometric Figures</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">The Building Blocks of Geometry</text><circle cx="80" cy="110" r="5" fill="#fde68a"/><text x="80" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="80" y="160" fill="#80cbc4" font-size="13" font-weight="bold" text-anchor="middle">Point A</text><line x1="150" y1="110" x2="320" y2="110" stroke="#80cbc4" stroke-width="3"/><polygon points="334,110 323.0,115.0 323.0,105.0" fill="#80cbc4"/><polygon points="136,110 147.0,105.0 147.0,115.0" fill="#80cbc4"/><circle cx="185" cy="110" r="5" fill="#fde68a"/><text x="185" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">B</text><circle cx="285" cy="110" r="5" fill="#fde68a"/><text x="285" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">C</text><text x="235" y="160" fill="#80cbc4" font-size="13" font-weight="bold" text-anchor="middle">Line BC</text><line x1="385" y1="110" x2="505" y2="110" stroke="#80cbc4" stroke-width="3"/><circle cx="385" cy="110" r="5" fill="#fde68a"/><text x="385" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">D</text><circle cx="505" cy="110" r="5" fill="#fde68a"/><text x="505" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">E</text><text x="445" y="160" fill="#80cbc4" font-size="13" font-weight="bold" text-anchor="middle">Segment DE</text><line x1="560" y1="110" x2="660" y2="110" stroke="#80cbc4" stroke-width="3"/><polygon points="674,110 663.0,115.0 663.0,105.0" fill="#80cbc4"/><circle cx="560" cy="110" r="5" fill="#fde68a"/><text x="560" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">F</text><circle cx="620" cy="110" r="5" fill="#fde68a"/><text x="620" y="100" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">G</text><text x="615" y="160" fill="#80cbc4" font-size="13" font-weight="bold" text-anchor="middle">Ray FG</text><polygon points="230,200 560,200 490,280 160,280" fill="#123532" stroke="#80cbc4" stroke-width="2"/><circle cx="260" cy="245" r="5" fill="#fde68a"/><text x="260" y="235" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">H</text><circle cx="360" cy="230" r="5" fill="#fde68a"/><text x="360" y="220" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">J</text><circle cx="430" cy="262" r="5" fill="#fde68a"/><text x="430" y="252" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">K</text><text x="470" y="222" fill="#80cbc4" font-size="14" font-weight="bold">Plane P</text><text x="350" y="296" fill="#cbd5e1" font-size="12" text-anchor="middle">H, J and K are coplanar (in the same plane). A plane extends forever in all directions.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Figure</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How to name it</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Notes</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Point</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A capital letter: A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Has no size</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two points on it (line AB) or a lowercase script letter (line ℓ)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line AB is the same as line BA</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Segment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Its two endpoints: segment AB</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Segment AB is the same as segment BA</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ray</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Endpoint first, then another point: ray AB</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ray AB is NOT the same as ray BA</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plane</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One capital letter (plane P) or three noncollinear points (plane ABC)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Extends forever</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>The order of letters matters for rays. Ray AB starts at A and goes through B; ray BA starts at B and goes through A — they point in opposite directions.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Collinear, Coplanar and Opposite Rays</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collinear points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lie on the same line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B and C on line BC</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coplanar points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lie in the same plane</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">H, J and K in plane P</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Opposite rays</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two rays with the same endpoint that form a line</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If B is between A and C, rays BA and BC are opposite</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intersection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The set of points two or more figures share</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two lines can intersect in a point</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Identifying collinear and coplanar points</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Points A, B and C lie on line m. Point D is not on line m. Are A, B and D collinear? Are A, B, C and D coplanar?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Collinear means on one line. Coplanar means in one plane. Any three noncollinear points determine a plane.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Collinear?</strong>
    </p>
    <div style="margin:6px 0 0 34px;">D is not on line m, and A and B determine only line m, so A, B and D are not collinear.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Coplanar?</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Line m and point D determine exactly one plane, which contains A, B, C and D.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> A, B and D are not collinear, but A, B, C and D are coplanar.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A line and a point not on it always lie in exactly one plane.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Basic Postulates</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Postulate</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statement</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Through any two points there is exactly one line.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Through any three noncollinear points there is exactly one plane.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line in a plane</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If two points lie in a plane, the line containing them lies in the plane.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intersecting lines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If two lines intersect, their intersection is exactly one point.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intersecting planes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If two planes intersect, their intersection is a line.</td>
    </tr>
    </table>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>A three-legged stool never wobbles because its three feet are noncollinear points, which always determine one plane. A four-legged chair can wobble if one leg is shorter.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> How many lines pass through two points?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Exactly one.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the intersection of two planes?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A line.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Are ray AB and ray BA the same?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — they have different endpoints and point in opposite directions.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect classmates’ ideas and methods — there is often more than one way to solve a problem.</li>
    <li>Show all your work so that you and others can follow and check your reasoning.</li>
    <li>Use calculators and graphing apps only when the task allows them.</li>
    <li>Use only school-approved websites and apps for online practice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Math Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Precise vocabulary and notation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 Seeing structure in figures</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sketching figures</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying postulates</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Spatial reasoning</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Many geometry errors come from imprecise language. Saying “line AB” when you mean “segment AB” changes the meaning completely, because a line goes on forever and a segment does not. Train yourself to use exact names and symbols — this precision is what makes proofs possible later in the unit.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Can three points ever fail to determine a plane? (Hint: think about collinear points.)</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80cbc4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Geometry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Architects and engineers model walls as planes, beams as segments and corners as points when they design buildings with computer-aided design (CAD) software.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Surveyors use points and lines to map land boundaries and plan parks, roads and conservation areas.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> 3D animators, video-game designers and engineers build complex shapes from millions of points and flat polygons.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Name a ray with endpoint F that passes through G.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Endpoint first.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Ray FG.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Are any two points always collinear?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use the postulate.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — through any two points there is exactly one line.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is the intersection of two different lines that cross?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of an X.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Exactly one point.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find ten objects in your home that model a point, line, segment, ray or plane, and sketch each one with correct notation.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner describes a figure in words (e.g., “two planes intersecting in line ℓ”); the other sketches it. Switch and compare.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Use string and cardboard to build a 3D model of two intersecting planes and a line crossing them. Label points and intersections.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use free geometry software such as GeoGebra to create and label points, lines, segments and rays, then move points to see what stays true.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the three undefined terms of geometry.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Point, line and plane.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is a segment?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Part of a line with two endpoints and all points between them.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why line AB and line BA are the same, but ray AB and ray BA are not.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A line has no endpoints, so the order does not matter; a ray starts at its first letter, so the order changes the endpoint and direction.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How many planes contain three noncollinear points?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Exactly one.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80cbc4;">
    <p style="margin:0 0 6px 0;color:#80cbc4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Can two planes intersect in exactly one point? Explain.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No. By postulate, if two planes intersect, their intersection is a line, which contains infinitely many points.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Why does a camera tripod stand steady on uneven ground?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its three feet are noncollinear points, which always determine exactly one plane.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> G-CO.1: Use the undefined terms to write a precise definition of a ray.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A ray is the part of a line consisting of one endpoint and all points on the line on one side of that endpoint.</div>
    </details>
    </div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Geometry begins with three undefined terms: point, line and plane. From them we define segments, rays, opposite rays and collinear and coplanar points. Postulates such as “two points determine exactly one line” and “two planes intersect in a line” are accepted without proof and used to prove theorems.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Undefined terms: point, line, plane.</li>
    <li>Segment: two endpoints. Ray: one endpoint.</li>
    <li>Collinear = same line; coplanar = same plane.</li>
    <li>Two planes intersect in a line.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ray names start with the endpoint.</li>
    <li>Three noncollinear points determine a plane.</li>
    <li>Postulates are accepted without proof.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing lines and segments.</li>
    <li>Reversing letters in a ray name.</li>
    <li>Thinking planes have edges.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw arrows on lines and rays.</li>
    <li>Sketch 3D figures with dashed hidden lines.</li>
    <li>Say the notation aloud as you write it.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use correct notation in every answer.</li>
    <li>Cite the postulate when explaining an intersection.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using exact names and symbols.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP7 Structure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeing how figures relate.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">G-CO.1</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building definitions from undefined terms.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Clear communication</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Architecture</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and design</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From buildings to video games, precise geometric language turns ideas into real structures.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sketch and label six figures using correct notation.</li>
    <li>Write the five basic postulates from memory.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which notation do I mix up most?</li>
    <li>Where do I see planes in everyday life?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A location with no size.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Line</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight, endless in two directions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Plane</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flat, endless surface.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Postulate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accepted without proof.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe the undefined terms.</p>
    <p style="margin:6px 0;">☐ I can name segments and rays correctly.</p>
    <p style="margin:6px 0;">☐ I can identify collinear and coplanar points.</p>
    <p style="margin:6px 0;">☐ I can apply the basic postulates.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is an undefined term?',
            options: ['Plane', 'Segment', 'Ray', 'Angle'],
            correct: 0,
            explanation: 'Point, line and plane are undefined.'
        },
        {
            question: 'A figure with two endpoints is a:',
            options: ['Ray', 'Line', 'Segment', 'Plane'],
            correct: 2,
            explanation: 'The answer is Segment. Segments have two endpoints.'
        },
        {
            question: 'Ray AB has its endpoint at:',
            options: ['B', 'A', 'Both A and B', 'Neither'],
            correct: 1,
            explanation: 'The first letter is the endpoint.'
        },
        {
            question: 'Points on the same line are:',
            options: ['Coplanar only', 'Opposite', 'Skew', 'Collinear'],
            correct: 3,
            explanation: 'The answer is Collinear. Collinear means on one line.'
        },
        {
            question: 'Through any two points there is exactly one:',
            options: ['Plane', 'Ray', 'Line', 'Angle'],
            correct: 2,
            explanation: 'The answer is Line. This is a basic postulate.'
        },
        {
            question: 'Two different planes that intersect meet in a:',
            options: ['Point', 'Line', 'Ray', 'Segment'],
            correct: 1,
            explanation: 'The intersection of two planes is a line.'
        },
        {
            question: 'How many points are needed to name a plane by points?',
            options: ['Three noncollinear points', 'Two points', 'One point', 'Four collinear points'],
            correct: 0,
            explanation: 'Three noncollinear points determine a plane.'
        },
        {
            question: 'If B is between A and C, rays BA and BC are:',
            options: ['The same ray', 'Parallel lines', 'Segments', 'Opposite rays'],
            correct: 3,
            explanation: 'They share endpoint B and form a line.'
        },
        {
            question: 'Why does a three-legged stool not wobble?',
            options: ['It is lighter', 'It has longer legs', 'Its legs are collinear', 'Three noncollinear points determine one plane'],
            correct: 3,
            explanation: 'Three feet always lie in one plane.'
        },
        {
            question: 'A statement accepted as true without proof is a:',
            options: ['Postulate', 'Theorem', 'Conjecture', 'Definition only'],
            correct: 0,
            explanation: 'Postulates are starting assumptions.'
        }
    ]
},
{
    name: '1.1.2 Segments, Distance and Midpoint',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Measuring Our World</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Segments, Distance and Midpoint</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will use the Segment Addition Postulate, identify congruent segments and midpoints, and use the distance and midpoint formulas on the coordinate plane.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Measuring distance is one of the most practical uses of geometry — from GPS apps finding the shortest route to engineers placing a support beam exactly halfway across a bridge.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📍 GPS and maps</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Construction</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game programming</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✈️ Navigation</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Sports analytics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Touch-screen design</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name and describe points, lines, planes, segments and rays using precise definitions. (G-CO.1)</li>
    <li>Find segment lengths, distances and midpoints, including on the coordinate plane. (G-GPE.4, G-GPE.6, G-GPE.7)</li>
    <li>Classify angles and use angle-pair relationships to find unknown measures.</li>
    <li>Make formal constructions with a compass and straightedge. (G-CO.12)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the Segment Addition Postulate to find lengths.</li>
    <li>Identify congruent segments, midpoints and segment bisectors.</li>
    <li>Use the distance formula on the coordinate plane.</li>
    <li>Use the midpoint formula to find a midpoint or an endpoint.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we measure distances we cannot reach with a ruler?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Algebra I you solved equations and worked with the coordinate plane. You also know the Pythagorean Theorem from middle school.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>If you walk from your home to a friend’s house and then to school, and all three are on the same straight road, the total distance from home to school equals the two parts added together. This simple idea is the <strong>Segment Addition Postulate</strong>.</p>
    <p>On a map grid, you often cannot measure directly. Instead, you can calculate distance from coordinates using the <strong>distance formula</strong>, which comes from the Pythagorean Theorem.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Parts add up to the whole. The distance formula is the Pythagorean Theorem on a grid.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Using coordinates to study geometry is called <strong>coordinate geometry</strong> or analytic geometry. It was developed in the 1600s by the French mathematician René Descartes, which is why the coordinate plane is also called the Cartesian plane. It joined algebra and geometry into one powerful tool.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Segment Addition Postulate</strong>
    </p>
    <p style="margin:6px 0;">If B is between A and C, then AB + BC = AC.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> AB + BC = AC</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>If AB = 7 and BC = 5, then AC = 12.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">congruent segments</strong>
    </p>
    <p style="margin:6px 0;">Segments that have the same length.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> segment AB ≅ segment CD</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Tick marks show congruent segments.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">midpoint</strong>
    </p>
    <p style="margin:6px 0;">The point that divides a segment into two congruent segments.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> M</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The midpoint of a 10 cm segment is 5 cm from each end.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">segment bisector</strong>
    </p>
    <p style="margin:6px 0;">A point, ray, line, segment or plane that passes through a segment’s midpoint.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A perpendicular bisector cuts a segment in half at a right angle.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">distance formula</strong>
    </p>
    <p style="margin:6px 0;">The formula for the distance between two points.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> d = √((x₂ − x₁)² + (y₂ − y₁)²)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The distance from (0, 0) to (3, 4) is 5.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">midpoint formula</strong>
    </p>
    <p style="margin:6px 0;">The formula for the midpoint of a segment.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The midpoint of (0, 0) and (6, 4) is (3, 2).</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Segment Addition Postulate</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Solving with segment addition</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> B is between A and C. AB = 3x + 1, BC = 2x − 4 and AC = 37. Find x, AB and BC.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Write AB + BC = AC, then solve the equation.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write the equation</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(3x + 1) + (2x − 4) = 37</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Combine like terms</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5x − 3 = 37</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5x = 40, so x = 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">AB = 3(8) + 1 = 25; BC = 2(8) − 4 = 12</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">25 + 12 = 37 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 8, AB = 25 and BC = 12.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Stopping at x = 8. The question asks for the segment lengths too.</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Using a midpoint</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> M is the midpoint of segment PQ. PM = 4x − 5 and MQ = 2x + 9. Find PQ.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Midpoint means equal parts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4x − 5 = 2x + 9</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x = 14, so x = 7</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Find each part</strong>
    </p>
    <div style="margin:6px 0 0 34px;">PM = 4(7) − 5 = 23</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Find the whole</strong>
    </p>
    <div style="margin:6px 0 0 34px;">PQ = 2 × 23 = 46</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> PQ = 46.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. The Distance and Midpoint Formulas</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 345" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="20" fill="#e3f2fd" font-size="16" font-weight="bold" text-anchor="middle">Distance and Midpoint on the Coordinate Plane</text><line x1="56" y1="326" x2="56" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="82" y1="326" x2="82" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="108" y1="326" x2="108" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="134" y1="326" x2="134" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="160" y1="326" x2="160" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="186" y1="326" x2="186" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="212" y1="326" x2="212" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="238" y1="326" x2="238" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="264" y1="326" x2="264" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="290" y1="326" x2="290" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="316" y1="326" x2="316" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="342" y1="326" x2="342" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="326" x2="342" y2="326" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="300" x2="342" y2="300" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="274" x2="342" y2="274" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="248" x2="342" y2="248" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="222" x2="342" y2="222" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="196" x2="342" y2="196" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="170" x2="342" y2="170" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="144" x2="342" y2="144" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="118" x2="342" y2="118" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="92" x2="342" y2="92" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="66" x2="342" y2="66" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="40" x2="342" y2="40" stroke="#1e293b" stroke-width="1"/><line x1="56" y1="300" x2="342" y2="300" stroke="#64748b" stroke-width="2"/><line x1="160" y1="326" x2="160" y2="40" stroke="#64748b" stroke-width="2"/><line x1="108" y1="274" x2="264" y2="274" stroke="#67e8f9" stroke-width="2" stroke-dasharray="6 4"/><line x1="264" y1="274" x2="264" y2="66" stroke="#67e8f9" stroke-width="2" stroke-dasharray="6 4"/><line x1="108" y1="274" x2="264" y2="66" stroke="#fde68a" stroke-width="3"/><circle cx="108" cy="274" r="5" fill="#fde68a"/><text x="98" y="296" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">A(−2, 1)</text><circle cx="264" cy="66" r="5" fill="#fde68a"/><text x="310" y="70" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">B(4, 9)</text><circle cx="186" cy="170" r="5" fill="#86efac"/><text x="144" y="160" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">M(1, 5)</text><text x="186" y="294" fill="#67e8f9" font-size="13" text-anchor="middle">run = 6</text><text x="274" y="170" fill="#67e8f9" font-size="13">rise = 8</text><text x="530" y="120" fill="#e2e8f0" font-size="13">AB = √(6² + 8²)</text><text x="530" y="140" fill="#e2e8f0" font-size="13">AB = √100 = 10</text><text x="530" y="180" fill="#86efac" font-size="13">M = ((−2 + 4)/2,</text><text x="530" y="198" fill="#86efac" font-size="13">(1 + 9)/2) = (1, 5)</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Distance formula</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">d = √((x₂ − x₁)² + (y₂ − y₁)²)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The length of the segment joining (x₁, y₁) and (x₂, y₂).</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding lengths or perimeters on the coordinate plane.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Forgetting to square negative differences, or adding before squaring.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Draw the right triangle: the horizontal and vertical legs are the differences in x and y.</div>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Midpoint formula</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">M = ((x₁ + x₂)/2, (y₁ + y₂)/2)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The point halfway between two endpoints.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding the center of a segment.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Subtracting instead of adding the coordinates.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> The midpoint is the average of the x-values and the average of the y-values.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Using both formulas</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Find the length and midpoint of the segment from A(−2, 1) to B(4, 9).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Differences</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x: 4 − (−2) = 6; y: 9 − 1 = 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Distance</strong>
    </p>
    <div style="margin:6px 0 0 34px;">d = √(6² + 8²) = √(36 + 64) = √100 = 10</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Midpoint</strong>
    </p>
    <div style="margin:6px 0 0 34px;">M = ((−2 + 4)/2, (1 + 9)/2) = (1, 5)</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> AB = 10 units; the midpoint is M(1, 5).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Finding a Missing Endpoint</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: Working backward from the midpoint</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> M(3, −1) is the midpoint of segment AB, and A is (1, 4). Find B.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> The midpoint is the average, so the change from A to M equals the change from M to B.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Change in x from A to M</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 − 1 = 2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Change in y from A to M</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−1 − 4 = −5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Apply the same change from M</strong>
    </p>
    <div style="margin:6px 0 0 34px;">B = (3 + 2, −1 + (−5)) = (5, −6)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">((1 + 5)/2, (4 + (−6))/2) = (3, −1) ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> B is (5, −6).</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> B is between A and C, AB = 9 and AC = 15. Find BC.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Find the distance between (0, 0) and (5, 12).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">13</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Find the midpoint of (−4, 6) and (8, −2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(2, 2)</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect classmates’ ideas and methods — there is often more than one way to solve a problem.</li>
    <li>Show all your work so that you and others can follow and check your reasoning.</li>
    <li>Use calculators and graphing apps only when the task allows them.</li>
    <li>Use only school-approved websites and apps for online practice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Math Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP2 Reason abstractly</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Precise calculation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 Seeing the right triangle</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Solving equations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Coordinate geometry</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>The distance formula is not a new idea — it is the Pythagorean Theorem, a² + b² = c², written with coordinates. The horizontal leg is the difference in x-values and the vertical leg is the difference in y-values. If you ever forget the formula, draw the right triangle and use Pythagoras instead.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student finds the distance from (1, 2) to (4, 6) as √(3 + 4) = √7. What went wrong? <em>Answer: the differences must be squared first: √(3² + 4²) = √25 = 5.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80cbc4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Geometry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Map and ride-sharing apps use coordinate distance calculations, combined with road data, to estimate how far away a destination is.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Ecologists use coordinates and the distance formula to measure how far animals travel when tracking their migration with GPS collars.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Game developers use the distance formula constantly — for example, to check whether a character is close enough to an object to interact with it.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> If AB = 5 and BC = 8 with B between A and C, find AC.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Add the parts.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">13</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Find the midpoint of (2, 3) and (8, 7).</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Average each coordinate.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(5, 5)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Find the distance between (−1, −1) and (2, 3).</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Differences 3 and 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Plot five pairs of points on graph paper and find the length and midpoint of each segment.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Treasure hunt: one partner hides a “treasure” at the midpoint of two coordinates; the other must find it using the midpoint formula.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Map challenge: on a grid map of your school or neighborhood, choose three locations and calculate the straight-line distance between each pair.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>In GeoGebra, plot two points, draw the segment, and use the distance tool to check your calculations.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> B is between A and C. AB = 12 and BC = 7. Find AC.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">19</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the midpoint of (0, 0) and (10, 6).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(5, 3)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find the distance between (−3, 2) and (5, −4).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">√(8² + 6²) = √100 = 10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> M is the midpoint of PQ. PM = 3x + 2 and MQ = 5x − 6. Find x and PQ.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3x + 2 = 5x − 6, x = 4; PM = 14, so PQ = 28</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80cbc4;">
    <p style="margin:0 0 6px 0;color:#80cbc4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> M(−1, 4) is the midpoint of AB and A is (3, 7). Find B.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Change from A to M: (−4, −3); B = (−1 − 4, 4 − 3) = (−5, 1)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> On a city grid where each unit is one block, a café is at (2, 3) and a library is at (8, 11). How far apart are they in a straight line?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">√(6² + 8²) = 10 blocks</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> G-GPE.7: Find the perimeter of the triangle with vertices (0, 0), (6, 0) and (6, 8).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Sides: 6, 8 and √(6² + 8²) = 10; perimeter = 24 units</div>
    </details>
    </div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Segment Addition Postulate says that if B is between A and C, then AB + BC = AC. A midpoint divides a segment into two congruent parts. On the coordinate plane, the distance formula, d = √((x₂ − x₁)² + (y₂ − y₁)²), comes from the Pythagorean Theorem, and the midpoint formula averages the coordinates of the endpoints.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>AB + BC = AC.</li>
    <li>Midpoint → two equal parts.</li>
    <li>Distance = √(Δx² + Δy²).</li>
    <li>Midpoint = average of coordinates.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Square the differences before adding.</li>
    <li>Answer every part of the question.</li>
    <li>Check endpoints by recomputing the midpoint.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Subtracting in the midpoint formula.</li>
    <li>Forgetting the square root.</li>
    <li>Mixing up x- and y-coordinates.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sketch the points first.</li>
    <li>Label (x₁, y₁) and (x₂, y₂).</li>
    <li>Use the right-triangle picture.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the substitution step.</li>
    <li>Leave answers in simplest radical form unless told to round.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP2 Abstract reasoning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing equations from segment relationships.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">G-GPE.4–7</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coordinates, distance and midpoint.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate calculation.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Accuracy</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Persistence</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Navigation and maps</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every time an app tells you how far away something is, coordinate geometry is at work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten distance and midpoint problems.</li>
    <li>Find the coordinates of three places on a local map grid and calculate the distances between them.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain the link between the distance formula and Pythagoras?</li>
    <li>Which formula do I find easier, and why?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Segment Addition Postulate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parts add to the whole.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Midpoint</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divides a segment equally.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Distance formula</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√(Δx² + Δy²).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Congruent</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same size and shape.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can use the Segment Addition Postulate.</p>
    <p style="margin:6px 0;">☐ I can use midpoints to find lengths.</p>
    <p style="margin:6px 0;">☐ I can use the distance formula.</p>
    <p style="margin:6px 0;">☐ I can use the midpoint formula and find a missing endpoint.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'B is between A and C. AB = 12 and BC = 7. AC =',
            options: ['5', '19', '84', '12'],
            correct: 1,
            explanation: 'The answer is 19. AB + BC = AC.'
        },
        {
            question: 'A midpoint divides a segment into:',
            options: ['Three equal parts', 'Two congruent segments', 'Two unequal parts', 'A ray and a line'],
            correct: 1,
            explanation: 'Midpoints split segments equally.'
        },
        {
            question: 'Find the distance between (0, 0) and (3, 4).',
            options: ['7', '25', '5', '√7'],
            correct: 2,
            explanation: 'The answer is 5. √(9 + 16) = 5.'
        },
        {
            question: 'Find the midpoint of (2, 3) and (8, 7).',
            options: ['(6, 4)', '(5, 5)', '(10, 10)', '(3, 2)'],
            correct: 1,
            explanation: 'The answer is (5, 5). Average: (10/2, 10/2).'
        },
        {
            question: 'The distance formula is based on:',
            options: ['The Segment Addition Postulate', 'The midpoint formula', 'The Pythagorean Theorem', 'The area of a circle'],
            correct: 2,
            explanation: 'The answer is The Pythagorean Theorem. It uses a² + b² = c².'
        },
        {
            question: 'AB = 3x + 1, BC = 2x − 4, AC = 37. Find x.',
            options: ['7', '6', '40', '8'],
            correct: 3,
            explanation: 'The answer is 8. 5x − 3 = 37, so x = 8.'
        },
        {
            question: 'M is the midpoint of PQ with PM = 4x − 5 and MQ = 2x + 9. PQ =',
            options: ['46', '23', '14', '7'],
            correct: 0,
            explanation: 'The answer is 46. x = 7, PM = 23, PQ = 46.'
        },
        {
            question: 'M(3, −1) is the midpoint of AB and A is (1, 4). B is:',
            options: ['(2, 1.5)', '(4, 3)', '(−1, 6)', '(5, −6)'],
            correct: 3,
            explanation: 'The answer is (5, −6). Apply the same change from M.'
        },
        {
            question: 'Find the distance between (−3, 2) and (5, −4).',
            options: ['14', '√28', '8', '10'],
            correct: 3,
            explanation: 'The answer is 10. √(64 + 36) = 10.'
        },
        {
            question: 'Segments with the same length are:',
            options: ['Congruent', 'Collinear', 'Coplanar', 'Opposite'],
            correct: 0,
            explanation: 'Congruent segments are equal in length.'
        }
    ]
},
{
    name: '1.1.3 Angles and Angle Pairs',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Measuring Our World</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Angles and Angle Pairs</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will name, measure and classify angles, use the Angle Addition Postulate and angle bisectors, and solve problems with complementary, supplementary, linear-pair and vertical angles.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Angles describe direction and turning. Builders, pilots, athletes and designers all need to measure and reason about angles accurately.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Roof pitch</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Shooting angles</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛫 Flight headings</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛹 Skate ramps</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🪚 Carpentry cuts</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎨 Perspective drawing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name and describe points, lines, planes, segments and rays using precise definitions. (G-CO.1)</li>
    <li>Find segment lengths, distances and midpoints, including on the coordinate plane. (G-GPE.4, G-GPE.6, G-GPE.7)</li>
    <li>Classify angles and use angle-pair relationships to find unknown measures.</li>
    <li>Make formal constructions with a compass and straightedge. (G-CO.12)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name, measure and classify angles.</li>
    <li>Use the Angle Addition Postulate and angle bisectors.</li>
    <li>Identify complementary, supplementary, adjacent and vertical angles and linear pairs.</li>
    <li>Write and solve equations using angle-pair relationships.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> What relationships always exist between angles formed by intersecting lines?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.2 you used segment addition. Angle addition works the same way.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>An <strong>angle</strong> is formed by two rays that share an endpoint, called the <strong>vertex</strong>. We measure angles in degrees with a protractor. A full turn is 360°, a straight angle is 180° and a right angle is 90°.</p>
    <p>When two lines cross, they form four angles with special relationships. Angles across from each other are <strong>vertical angles</strong>, and they are always equal. Angles next to each other form a <strong>linear pair</strong>, and they always add up to 180°. These facts let us find unknown angles without measuring.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Complementary = 90°. Supplementary = 180°. Vertical angles = equal.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The system of dividing a circle into 360 degrees goes back to ancient Babylonian astronomers, who used a number system based on 60. The number 360 is easy to divide evenly by many numbers — 2, 3, 4, 5, 6, 8, 9, 10, 12 and more — which makes it practical for measuring.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">angle</strong>
    </p>
    <p style="margin:6px 0;">A figure formed by two rays with a common endpoint.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∠ABC; measure m∠ABC</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The hands of a clock form an angle.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertex</strong>
    </p>
    <p style="margin:6px 0;">The common endpoint of the two rays of an angle.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> middle letter, e.g. B in ∠ABC</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>B is the vertex of ∠ABC.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">angle bisector</strong>
    </p>
    <p style="margin:6px 0;">A ray that divides an angle into two congruent angles.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A bisector of a 70° angle makes two 35° angles.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">complementary angles</strong>
    </p>
    <p style="margin:6px 0;">Two angles whose measures add to 90°.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>30° and 60° are complementary.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">supplementary angles</strong>
    </p>
    <p style="margin:6px 0;">Two angles whose measures add to 180°.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>110° and 70° are supplementary.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertical angles</strong>
    </p>
    <p style="margin:6px 0;">Two nonadjacent angles formed by two intersecting lines.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Vertical angles are congruent.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Classifying and Adding Angles</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Measure</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Between 0° and 90°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45°</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exactly 90° (marked with a small square)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The corner of a page</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Obtuse</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Between 90° and 180°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">120°</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exactly 180° (opposite rays)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A straight line</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Angle Addition Postulate</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">If P is in the interior of ∠RST, then m∠RSP + m∠PST = m∠RST</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The two smaller angles add up to the whole angle.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> An angle is split into parts by a ray.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Adding angles that do not share a side and vertex.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> It works just like segment addition: part + part = whole.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Using an angle bisector</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Ray BD bisects ∠ABC. m∠ABD = 5x − 6 and m∠DBC = 3x + 10. Find m∠ABC.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Bisector means equal parts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5x − 6 = 3x + 10</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x = 16, so x = 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Find one part</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m∠ABD = 5(8) − 6 = 34°</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Find the whole</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m∠ABC = 2 × 34° = 68°</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> m∠ABC = 68°.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Special Angle Pairs</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 280" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Angle Pairs Formed by Two Intersecting Lines</text><line x1="120" y1="230" x2="460" y2="80" stroke="#80cbc4" stroke-width="3"/><polygon points="474,74 466.0,83.0 461.9,73.9" fill="#80cbc4"/><polygon points="106,236 114.0,227.0 118.1,236.1" fill="#80cbc4"/><line x1="140" y1="90" x2="440" y2="220" stroke="#80cbc4" stroke-width="3"/><polygon points="454,226 441.9,226.2 445.9,217.0" fill="#80cbc4"/><polygon points="126,84 138.1,83.8 134.1,93.0" fill="#80cbc4"/><circle cx="290" cy="155" r="5" fill="#fde68a"/><text x="290" y="128" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">1</text><text x="340" y="160" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">2</text><text x="290" y="192" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">3</text><text x="240" y="160" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">4</text><text x="510" y="110" fill="#e2e8f0" font-size="13">Vertical angles:</text><text x="510" y="128" fill="#86efac" font-size="13">∠1 and ∠3; ∠2 and ∠4</text><text x="510" y="164" fill="#e2e8f0" font-size="13">Linear pairs:</text><text x="510" y="182" fill="#86efac" font-size="13">∠1 and ∠2; ∠2 and ∠3;</text><text x="510" y="200" fill="#86efac" font-size="13">∠3 and ∠4; ∠4 and ∠1</text><text x="350" y="266" fill="#cbd5e1" font-size="12" text-anchor="middle">Vertical angles are congruent. The angles in a linear pair add to 180°.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Pair</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Definition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key fact</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adjacent angles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share a vertex and a side, with no interior points in common</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Can be added with the Angle Addition Postulate</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complementary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two angles that add to 90°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complement of x° is (90 − x)°</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supplementary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two angles that add to 180°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supplement of x° is (180 − x)°</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear pair</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adjacent angles whose noncommon sides are opposite rays</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Always supplementary</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical angles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nonadjacent angles formed by two intersecting lines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Always congruent</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Complementary and supplementary angles do not have to be adjacent. Any two angles that add to 90° are complementary, even if they are far apart.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Solving with Angle Pairs</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Vertical angles</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Two vertical angles measure (3x + 10)° and (5x − 30)°. Find x and the angle measure.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Vertical angles are congruent</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x + 10 = 5x − 30</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">40 = 2x, so x = 20</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Find the measure</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3(20) + 10 = 70°</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 20; each angle measures 70°.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: A linear pair</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Two angles form a linear pair and measure (2x + 15)° and (4x − 3)°. Find both measures.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: A linear pair is supplementary</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(2x + 15) + (4x − 3) = 180</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Combine and solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">6x + 12 = 180, so 6x = 168 and x = 28</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Find the measures</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2(28) + 15 = 71°; 4(28) − 3 = 109°</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">71 + 109 = 180 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The angles measure 71° and 109°.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Find the complement and supplement of a 37° angle.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Complement 53°; supplement 143°.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> If m∠1 = 115° in the diagram, find m∠2, m∠3 and m∠4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">m∠2 = 65°, m∠3 = 115°, m∠4 = 65°.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Can two obtuse angles be supplementary?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — two angles greater than 90° add to more than 180°.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect classmates’ ideas and methods — there is often more than one way to solve a problem.</li>
    <li>Show all your work so that you and others can follow and check your reasoning.</li>
    <li>Use calculators and graphing apps only when the task allows them.</li>
    <li>Use only school-approved websites and apps for online practice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Math Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP5 Using a protractor</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 Seeing angle relationships</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP2 Writing equations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classifying angles</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Problem solving</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Once you know one angle formed by two intersecting lines, you know all four: the vertical angle is equal, and each adjacent angle is its supplement. This is a powerful example of structure in geometry (MP7). In the next topic, you will prove why vertical angles are always congruent instead of just observing it.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>If two intersecting lines form one right angle, what are the other three angles? What does this tell you about the lines?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80cbc4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Geometry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Carpenters cutting a picture frame use 45° angles at each corner so that two pieces form a 90° angle — complementary angles in action.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Solar panels are tilted at angles chosen for their location to capture more sunlight and produce more clean energy.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Pilots, engineers, surveyors and physical therapists measure and calculate angles in their daily work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Classify a 135° angle.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Between 90° and 180°.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Obtuse.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Find the supplement of 64°.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Subtract from 180.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">116°</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Vertical angles measure 4x° and 100°. Find x.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Vertical angles are equal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 25</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Use a protractor to measure and classify ten angles you find in classroom objects or pictures.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Draw two intersecting lines. Measure one angle, then predict the other three before measuring them. Compare predictions with measurements.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Angle scavenger hunt: photograph examples of acute, right, obtuse and straight angles, a linear pair and vertical angles around your school.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>In GeoGebra, draw two intersecting lines and display all four angle measures. Drag the lines and record what always stays true.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Classify a 90° angle and a 150° angle.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Right; obtuse.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the complement of 28°.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">62°</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Ray BD bisects ∠ABC and m∠ABC = 84°. Find m∠ABD.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">42°</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Two vertical angles measure (6x − 8)° and (4x + 12)°. Find x and the measure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6x − 8 = 4x + 12, x = 10; measure = 52°</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80cbc4;">
    <p style="margin:0 0 6px 0;color:#80cbc4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> An angle is 20° more than three times its complement. Find both angles.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Let x be the complement: x + (3x + 20) = 90, so 4x = 70, x = 17.5°; the angle is 72.5°.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A ladder leaning against a wall makes a 70° angle with the ground. What angle does it make with the wall (assuming the wall is vertical)?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">20°, since the two angles are complementary in the right triangle.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> G-CO.1: Define vertical angles using the undefined terms and earlier definitions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vertical angles are two nonadjacent angles formed by two intersecting lines; their sides form two pairs of opposite rays.</div>
    </details>
    </div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Angles are formed by two rays with a common vertex and are classified as acute, right, obtuse or straight. The Angle Addition Postulate says parts add to the whole, and an angle bisector creates two congruent angles. Complementary angles add to 90°, supplementary angles add to 180°, angles in a linear pair are supplementary, and vertical angles are congruent.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Acute, right, obtuse, straight.</li>
    <li>Part + part = whole angle.</li>
    <li>Complementary 90°; supplementary 180°.</li>
    <li>Linear pair = supplementary; vertical = congruent.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The vertex is the middle letter.</li>
    <li>Angle pairs need not be adjacent to be complementary or supplementary.</li>
    <li>Always check that answers make sense.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing complementary and supplementary.</li>
    <li>Setting vertical angles to add to 180°.</li>
    <li>Forgetting to find the angle after solving for x.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>“C” comes before “S,” and 90 before 180.</li>
    <li>Mark diagrams with known angles.</li>
    <li>Check sums at the end.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the relationship you use (e.g., “vertical angles are congruent”).</li>
    <li>Show the equation before solving.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP7 Structure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeing angle-pair relationships.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP5 Tools</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measuring with a protractor.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP2 Reasoning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing angle equations.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Patience</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Teamwork</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Construction and design</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Renewable energy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Angles are everywhere — from the slope of a ramp to the tilt of a solar panel — and now you can calculate them.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten angle-pair problems.</li>
    <li>Photograph and label three angle pairs at home.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which angle relationship do I find easiest to see?</li>
    <li>How did I check my answers?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vertex</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Common endpoint of an angle.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Complementary</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sum of 90°.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Supplementary</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sum of 180°.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vertical angles</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Opposite angles at an intersection.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can classify angles.</p>
    <p style="margin:6px 0;">☐ I can use the Angle Addition Postulate.</p>
    <p style="margin:6px 0;">☐ I can identify angle pairs.</p>
    <p style="margin:6px 0;">☐ I can solve problems with angle pairs.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'An angle measuring 120° is:',
            options: ['Acute', 'Right', 'Obtuse', 'Straight'],
            correct: 2,
            explanation: 'The answer is Obtuse. Between 90° and 180°.'
        },
        {
            question: 'The complement of a 37° angle is:',
            options: ['143°', '63°', '53°', '37°'],
            correct: 2,
            explanation: 'The answer is 53°. 90 − 37 = 53.'
        },
        {
            question: 'The supplement of a 64° angle is:',
            options: ['116°', '26°', '296°', '64°'],
            correct: 0,
            explanation: 'The answer is 116°. 180 − 64 = 116.'
        },
        {
            question: 'Vertical angles are:',
            options: ['Congruent', 'Supplementary', 'Complementary', 'Adjacent'],
            correct: 0,
            explanation: 'The answer is Congruent. They are always equal.'
        },
        {
            question: 'Angles in a linear pair are:',
            options: ['Complementary', 'Supplementary', 'Congruent', 'Vertical'],
            correct: 1,
            explanation: 'The answer is Supplementary. They add to 180°.'
        },
        {
            question: 'Vertical angles measure (3x + 10)° and (5x − 30)°. Each measures:',
            options: ['20°', '70°', '110°', '40°'],
            correct: 1,
            explanation: 'The answer is 70°. x = 20, so 3(20) + 10 = 70.'
        },
        {
            question: 'A linear pair measures (2x + 15)° and (4x − 3)°. The larger angle is:',
            options: ['71°', '109°', '90°', '28°'],
            correct: 1,
            explanation: 'The answer is 109°. x = 28, so 4(28) − 3 = 109.'
        },
        {
            question: 'Ray BD bisects ∠ABC, which measures 84°. m∠ABD =',
            options: ['42°', '84°', '168°', '21°'],
            correct: 0,
            explanation: 'The answer is 42°. A bisector halves the angle.'
        },
        {
            question: 'In ∠XYZ, the vertex is:',
            options: ['X', 'Z', 'Y', 'XZ'],
            correct: 2,
            explanation: 'The middle letter is the vertex.'
        },
        {
            question: 'If m∠1 = 115° where two lines intersect, the angle adjacent to it measures:',
            options: ['115°', '25°', '245°', '65°'],
            correct: 3,
            explanation: 'Adjacent angles there form a linear pair.'
        }
    ]
},
{
    name: '1.1 Activity: Compass-and-Straightedge Constructions',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Compass-and-Straightedge Constructions</h2>
    <p style="font-size:16px;">For more than 2,000 years, mathematicians have created exact geometric figures using only a compass and an unmarked straightedge — no measuring. In this investigation you will perform four classic constructions and explain why they work (G-CO.12).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Classroom Expectations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compass points are sharp: keep them pointed down and store them safely.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use a sharp pencil and keep the compass width fixed when the steps say to.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check a partner’s construction by measuring after it is finished.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Honesty</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not use the ruler’s markings during the construction — only to check afterward.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Math Investigation: Four Classic Constructions</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To construct a congruent segment, a perpendicular bisector, an angle bisector and a congruent angle using only a compass and a straightedge.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Compass</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Straightedge (unmarked ruler)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sharp pencil</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Protractor and ruler (for checking only)</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unlined paper</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Construction step cards</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Optional: GeoGebra construction tools</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep compass points away from faces.</li>
    <li>Press lightly to avoid tearing paper.</li>
    <li>Return tools when finished.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Copy a segment: draw a ray, set the compass to the length of the given segment, and mark that length on the ray.</li>
    <li>Perpendicular bisector: from each endpoint of segment AB, draw arcs with the same radius (more than half of AB) above and below. Join the two intersection points.</li>
    <li>Angle bisector: from the vertex, draw an arc crossing both sides. From those two points, draw equal arcs that cross inside the angle. Draw a ray from the vertex through the crossing point.</li>
    <li>Copy an angle: draw a ray; using the same compass width, draw matching arcs on the original angle and the new ray; copy the distance between the arc points, then draw the new side.</li>
    <li>Label every construction and leave all arcs visible — they are your “proof” of the method.</li>
    <li>Check each construction with a ruler or protractor and record the results.</li>
    <li>Explain in one sentence why each construction works.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Construction</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Checked measurement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Accurate? (Y/N)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why it works</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copy a segment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Perpendicular bisector</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Angle bisector</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Copy an angle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Constructing the Perpendicular Bisector of AB</text><line x1="230" y1="160" x2="470" y2="160" stroke="#80cbc4" stroke-width="3"/><circle cx="230" cy="160" r="5" fill="#fde68a"/><text x="216" y="165" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">A</text><circle cx="470" cy="160" r="5" fill="#fde68a"/><text x="484" y="165" fill="#e2e8f0" font-size="14" font-weight="bold" text-anchor="middle">B</text><path d="M 324.0 30.6 A 160 160 0 0 1 368.6 80.0" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="5 4"/><path d="M 368.6 240.0 A 160 160 0 0 1 324.0 289.4" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="5 4"/><path d="M 376.0 30.6 A 160 160 0 0 0 331.4 80.0" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="5 4"/><path d="M 331.4 240.0 A 160 160 0 0 0 376.0 289.4" fill="none" stroke="#c4b5fd" stroke-width="2" stroke-dasharray="5 4"/><line x1="350" y1="40" x2="350" y2="282" stroke="#fde68a" stroke-width="3"/><circle cx="350" cy="54" r="4" fill="#c4b5fd"/><circle cx="350" cy="266" r="4" fill="#c4b5fd"/><circle cx="350" cy="160" r="5" fill="#86efac"/><text x="364" y="182" fill="#86efac" font-size="14" font-weight="bold">M</text><rect x="350" y="146" width="14" height="14" fill="none" stroke="#86efac" stroke-width="1.5"/><text x="520" y="90" fill="#e2e8f0" font-size="13">1. Arcs from A and B,</text><text x="520" y="108" fill="#e2e8f0" font-size="13">same radius (more</text><text x="520" y="126" fill="#e2e8f0" font-size="13">than half of AB).</text><text x="520" y="164" fill="#e2e8f0" font-size="13">2. Join the two points</text><text x="520" y="182" fill="#e2e8f0" font-size="13">where the arcs cross.</text><text x="520" y="220" fill="#86efac" font-size="13">M is the midpoint;</text><text x="520" y="238" fill="#86efac" font-size="13">the line is ⟂ to AB.</text>
    </svg>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why must the compass width be more than half of AB for the perpendicular bisector?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If it is less than half, the arcs from A and B will not meet, so there are no intersection points to join.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does the perpendicular bisector pass through the midpoint?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Every point where the arcs cross is the same distance from A and B, and the line through such points meets AB at the point equidistant from both ends — the midpoint — at a right angle.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why are constructions more exact than measuring?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They rely on geometric relationships, such as equal radii, rather than on reading a scale, so they avoid measurement error.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Using only a compass and straightedge, we can copy segments and angles and bisect them exactly, because constructions are based on equal distances rather than measurement.</p>
    <p><strong style="color:#fde68a;">Why it works:</strong> A compass keeps a fixed distance. Points that are the same distance from two endpoints lie on the perpendicular bisector — a fact you will prove later in the course.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Letting the compass width slip.</li>
    <li>Erasing construction arcs.</li>
    <li>Using ruler markings during the construction.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Drafters, engineers and designers used constructions like these for centuries, and modern CAD software still uses the same geometric logic.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Compare your checked measurements with your partner’s. Which construction was most accurate? Which was hardest? Discuss how small errors in compass width affect the final result.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>In a construction, the arcs are part of the answer. Never erase them.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Which two tools are allowed in a formal construction?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A compass and an unmarked straightedge.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What does a perpendicular bisector do?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It passes through the midpoint of a segment at a right angle.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> What does an angle bisector do?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It divides an angle into two congruent angles.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should construction arcs be left visible?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They show the method used and allow others to check the construction.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How could you construct a 45° angle?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Construct a perpendicular bisector to make a 90° angle, then bisect that right angle.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Up Your Investigation</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>The question you investigated</li>
    <li>Your data, table or graph</li>
    <li>The equation or model you wrote</li>
    <li>How you solved it, step by step</li>
    <li>How you checked your answer</li>
    <li>What your answer means in the real situation</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Formal constructions use:',
            options: ['A protractor only', 'A compass and an unmarked straightedge', 'A calculator', 'A marked ruler'],
            correct: 1,
            explanation: 'The answer is A compass and an unmarked straightedge. No measuring is allowed.'
        },
        {
            question: 'A perpendicular bisector meets a segment:',
            options: ['At an endpoint', 'At any point', 'At its midpoint, at a right angle', 'Never'],
            correct: 2,
            explanation: 'It bisects and is perpendicular.'
        },
        {
            question: 'When constructing a perpendicular bisector, the compass width must be:',
            options: ['More than half the segment’s length', 'Exactly half', 'Less than half', 'Zero'],
            correct: 0,
            explanation: 'Otherwise the arcs will not meet.'
        },
        {
            question: 'An angle bisector divides an angle into:',
            options: ['Three angles', 'A right angle and a straight angle', 'Two supplementary angles', 'Two congruent angles'],
            correct: 3,
            explanation: 'The answer is Two congruent angles. Bisect means cut in half.'
        },
        {
            question: 'Why leave construction arcs visible?',
            options: ['They look nice', 'They are required for coloring', 'They make the line longer', 'They show the method'],
            correct: 3,
            explanation: 'The arcs justify the construction.'
        },
        {
            question: 'How can you construct a 45° angle?',
            options: ['Bisect a constructed right angle', 'Measure with a ruler', 'Bisect a 60° angle', 'Copy a 30° angle'],
            correct: 0,
            explanation: 'The answer is Bisect a constructed right angle. Bisecting 90° gives 45°.'
        }
    ]
},
{
    name: '1.1 Quiz: Tools of Geometry',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Tools of Geometry</h2>
    <p style="font-size:16px;">Test your understanding of points, lines, planes, segments, distance, midpoint, angles and constructions from Topic 1.1.</p>
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
    <li>Undefined terms and notation</li>
    <li>Postulates about lines and planes</li>
    <li>Segment Addition Postulate and midpoints</li>
    <li>Distance and midpoint formulas</li>
    <li>Classifying angles and angle pairs</li>
    <li>Constructions</li>
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
    <div>Draw a quick sketch for every question, even if one is given. Label what you know and what you need to find.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which figure extends forever in two directions?',
            options: ['A segment', 'A ray', 'A line', 'A point'],
            correct: 2,
            explanation: 'The answer is A line. Lines have no endpoints.'
        },
        {
            question: 'Points that lie in the same plane are:',
            options: ['Collinear only', 'Congruent', 'Vertical', 'Coplanar'],
            correct: 3,
            explanation: 'The answer is Coplanar. Coplanar means in one plane.'
        },
        {
            question: 'B is between A and C. AC = 30 and AB = 18. BC =',
            options: ['12', '48', '18', '540'],
            correct: 0,
            explanation: 'The answer is 12. 30 − 18 = 12.'
        },
        {
            question: 'Find the distance between (1, 2) and (4, 6).',
            options: ['7', '√7', '5', '25'],
            correct: 2,
            explanation: 'The answer is 5. √(9 + 16) = 5.'
        },
        {
            question: 'Find the midpoint of (−4, 6) and (8, −2).',
            options: ['(6, 4)', '(2, 2)', '(4, 4)', '(−6, 4)'],
            correct: 1,
            explanation: 'The answer is (2, 2). Average: (4/2, 4/2).'
        },
        {
            question: 'An angle measuring exactly 180° is:',
            options: ['Obtuse', 'Right', 'Acute', 'Straight'],
            correct: 3,
            explanation: 'The answer is Straight. Its sides are opposite rays.'
        },
        {
            question: 'The supplement of a 98° angle is:',
            options: ['82°', '8°', '262°', '98°'],
            correct: 0,
            explanation: 'The answer is 82°. 180 − 98.'
        },
        {
            question: 'Two angles are complementary and one is 3 times the other. The smaller angle is:',
            options: ['30°', '22.5°', '45°', '67.5°'],
            correct: 1,
            explanation: 'The answer is 22.5°. x + 3x = 90, x = 22.5.'
        },
        {
            question: 'Vertical angles measure (6x − 8)° and (4x + 12)°. x =',
            options: ['10', '2', '20', '52'],
            correct: 0,
            explanation: 'The answer is 10. 2x = 20, so x = 10.'
        },
        {
            question: 'Which construction finds the midpoint of a segment?',
            options: ['Copying an angle', 'Bisecting an angle', 'The perpendicular bisector', 'Copying a segment'],
            correct: 2,
            explanation: 'It crosses the segment at its midpoint.'
        }
    ]
},
{
    name: '1.1 Assignment: Geometry in My Neighborhood',
    type: 'lesson',
    duration: '90 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 90 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Geometry in My Neighborhood</h2>
    <p style="font-size:16px;">Create a labeled “geometry map” of a real place you know — your neighborhood, school or a park — and use the tools of this topic to measure and analyze it.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 90 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Task:</strong> Draw a map of a real place on a coordinate grid. Place at least five landmarks at points with integer coordinates. Use the distance and midpoint formulas to answer real questions about the place, and identify geometric figures and angle pairs you can find there.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Use a public place such as a school, park or shopping street. Do not include your home address or any private information on your map.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sketch your place and choose a scale (for example, 1 unit = 1 block or 10 meters).</li>
    <li>Draw it on a coordinate grid and place at least five landmarks at integer coordinates.</li>
    <li>Calculate the straight-line distance between at least three pairs of landmarks.</li>
    <li>Find the midpoint between two landmarks and suggest something useful to place there (a bench, a bus stop).</li>
    <li>Identify and label at least two examples each of segments, rays or lines, and one pair of vertical angles or a linear pair (for example, where two roads cross).</li>
    <li>Write a short explanation (100–150 words) of how you used geometry to analyze the place.</li>
    <li>Check all calculations with a partner, then submit.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your coordinate map with a scale and key</li>
    <li>All distance and midpoint calculations, with work shown</li>
    <li>Labeled geometric figures and angle pairs</li>
    <li>Your written explanation</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mathematical accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All calculations correct with work shown</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little correct work</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use of formulas</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance and midpoint formulas applied correctly and appropriately</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formulas applied correctly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formulas applied with errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formulas not used</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Geometric vocabulary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Figures and angle pairs labeled precisely with correct notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct labels and notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some incorrect terms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vocabulary missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Map and presentation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, accurate, with scale and key</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear with scale</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat unclear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disorganized</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful explanation connecting geometry to the real place</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brief explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use integer coordinates to keep calculations manageable.<br>Remember that real streets may not be straight lines — explain any simplifications.<br>Show the substitution step in every formula.<br>Use color to make figures stand out.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did geometry reveal about this place that you had not noticed?</li>
    <li>Which calculation was most useful?</li>
    <li>How could a city planner use a map like yours?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many landmarks must the map include?',
            options: ['At least five', 'One', 'Two', 'Exactly ten'],
            correct: 0,
            explanation: 'The answer is At least five. At least five landmarks.'
        },
        {
            question: 'A map scale tells you:',
            options: ['The color of each landmark', 'What one grid unit represents in real life', 'The time of day', 'The number of people'],
            correct: 1,
            explanation: 'Scale converts grid units to real distances.'
        },
        {
            question: 'Where two straight roads cross, you can find:',
            options: ['Only parallel lines', 'Only circles', 'Vertical angles and linear pairs', 'No angles'],
            correct: 2,
            explanation: 'Intersecting lines form angle pairs.'
        },
        {
            question: 'Why must you not include your home address?',
            options: ['It is too long', 'To protect your privacy', 'It is not on a grid', 'It has no coordinates'],
            correct: 1,
            explanation: 'Keep personal information private.'
        },
        {
            question: 'To find a fair meeting point between two landmarks, use:',
            options: ['The distance formula only', 'A protractor', 'The Angle Addition Postulate', 'The midpoint formula'],
            correct: 3,
            explanation: 'The midpoint is equidistant from both.'
        },
        {
            question: 'The straight-line distance between two landmarks is found with:',
            options: ['The midpoint formula', 'The Angle Addition Postulate', 'A construction', 'The distance formula'],
            correct: 3,
            explanation: 'The answer is The distance formula. d = √(Δx² + Δy²).'
        }
    ]
},
{
    name: '1.1 Review: Tools of Geometry',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Tools of Geometry</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before moving on to reasoning and proof.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Points, Lines and Planes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Undefined terms: point, line, plane.</li>
    <li>Segment: two endpoints; ray: one endpoint.</li>
    <li>Two points → one line; two planes → a line.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Segments and Coordinates</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>AB + BC = AC.</li>
    <li>Distance = √((x₂ − x₁)² + (y₂ − y₁)²).</li>
    <li>Midpoint = ((x₁ + x₂)/2, (y₁ + y₂)/2).</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Angles</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Acute, right, obtuse, straight.</li>
    <li>Angle Addition Postulate; angle bisector.</li>
    <li>Complementary 90°, supplementary 180°, vertical angles congruent.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Constructions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Compass and unmarked straightedge only.</li>
    <li>Copy segments and angles; bisect segments and angles.</li>
    <li>Leave arcs visible.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Segment addition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB + BC = AC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 + 5 = 12</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√(Δx² + Δy²)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2, 1) to (4, 9): 10</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Midpoint formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Average the coordinates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2, 1) and (4, 9): (1, 5)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complementary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sum is 90°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">37° and 53°</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear pair</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sum is 180°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">71° and 109°</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical angles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Congruent</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">70° and 70°</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the intersection of two planes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A line.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> B is between A and C. AB = 2x + 3, BC = x + 6, AC = 24. Find x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3x + 9 = 24, x = 5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find the distance between (2, −3) and (−4, 5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">√(36 + 64) = 10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> M(0, 2) is the midpoint of AB and A is (−3, 5). Find B.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(3, −1)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find the supplement of an angle that measures (x + 20)°.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(160 − x)°</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Two vertical angles measure (7x − 4)° and (5x + 16)°. Find the measure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 10; 66°</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can name and sketch figures with correct notation.</p>
    <p style="margin:6px 0;">☐ I can use segment addition and midpoints.</p>
    <p style="margin:6px 0;">☐ I can use the distance and midpoint formulas.</p>
    <p style="margin:6px 0;">☐ I can solve angle-pair problems.</p>
    <p style="margin:6px 0;">☐ I can perform basic constructions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'AB = 2x + 3, BC = x + 6, AC = 24. x =',
            options: ['3', '7', '9', '5'],
            correct: 3,
            explanation: 'The answer is 5. 3x + 9 = 24.'
        },
        {
            question: 'Find the distance between (2, −3) and (−4, 5).',
            options: ['14', '10', '√20', '8'],
            correct: 1,
            explanation: 'The answer is 10. √(36 + 64) = 10.'
        },
        {
            question: 'M(0, 2) is the midpoint of AB and A is (−3, 5). B is:',
            options: ['(−1.5, 3.5)', '(3, −1)', '(−6, 8)', '(3, 7)'],
            correct: 1,
            explanation: 'The answer is (3, −1). Apply the same change from M.'
        },
        {
            question: 'Vertical angles measure (7x − 4)° and (5x + 16)°. The measure is:',
            options: ['66°', '10°', '114°', '76°'],
            correct: 0,
            explanation: 'The answer is 66°. x = 10, 7(10) − 4 = 66.'
        },
        {
            question: 'Which pair is always supplementary?',
            options: ['A linear pair', 'Vertical angles', 'Two acute angles', 'Two obtuse angles'],
            correct: 0,
            explanation: 'The answer is A linear pair. Linear pairs add to 180°.'
        },
        {
            question: 'Which tool is NOT allowed during a formal construction?',
            options: ['A compass', 'A straightedge', 'A pencil', 'A protractor'],
            correct: 3,
            explanation: 'No measuring tools during constructions.'
        }
    ]
},
{
    name: '1.1 Summary: Tools of Geometry',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.1 Tools of Geometry</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Tools of Geometry</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Geometry starts with a few undefined terms and postulates. From them, we can measure segments and angles, calculate distances and midpoints on the coordinate plane, find unknown angles using angle pairs, and construct exact figures.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Point, line and plane are undefined; segments, rays and other figures are defined from them.</li>
    <li>Postulates such as “two points determine one line” are accepted without proof.</li>
    <li>The Segment and Angle Addition Postulates say that parts add up to the whole.</li>
    <li>The distance formula comes from the Pythagorean Theorem; the midpoint formula averages coordinates.</li>
    <li>Complementary angles add to 90°, supplementary angles to 180°; linear pairs are supplementary and vertical angles are congruent.</li>
    <li>Compass-and-straightedge constructions create exact figures without measuring.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Points, Lines and Planes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Undefined terms, notation, collinear and coplanar points, postulates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Name rays endpoint first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Segments, Distance and Midpoint</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Segment addition, midpoints, distance and midpoint formulas</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square differences before adding</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Angles and Angle Pairs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Classifying angles, angle addition, angle pairs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">State the relationship before solving</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">point</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">line</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">plane</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">segment</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ray</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">collinear</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">coplanar</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">postulate</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">midpoint</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">distance formula</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">angle</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertex</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">complementary</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">supplementary</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertical angles</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Builders, designers, navigators and programmers use these tools every day to measure, plan and create.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will learn how mathematicians prove that something is always true — and you will prove the Vertical Angles Theorem yourself.</div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can use precise geometric vocabulary and notation.</p>
    <p style="margin:6px 0;">✔️ I can find segment lengths, distances and midpoints.</p>
    <p style="margin:6px 0;">✔️ I can classify angles and solve angle-pair problems.</p>
    <p style="margin:6px 0;">✔️ I can perform compass-and-straightedge constructions.</p>
    <p style="margin:6px 0;">✔️ I can apply basic postulates.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that geometry builds from:',
            options: ['Undefined terms and postulates', 'Random guesses', 'Measurements only', 'Calculators'],
            correct: 0,
            explanation: 'Definitions and postulates come first.'
        },
        {
            question: 'Topic 1.2 will focus on:',
            options: ['Circles', 'Volume', 'Probability', 'Reasoning and proof'],
            correct: 3,
            explanation: 'You will learn to write proofs.'
        },
        {
            question: 'The midpoint formula finds:',
            options: ['The length of a segment', 'An angle measure', 'The point halfway between two points', 'The slope'],
            correct: 2,
            explanation: 'The answer is The point halfway between two points. It averages the coordinates.'
        },
        {
            question: 'Angles that add to 90° are:',
            options: ['Complementary', 'Supplementary', 'Vertical', 'Straight'],
            correct: 0,
            explanation: 'The answer is Complementary. Complementary sums to 90°.'
        },
        {
            question: 'The distance formula is a form of:',
            options: ['The Angle Addition Postulate', 'The Pythagorean Theorem', 'The midpoint formula', 'A construction'],
            correct: 1,
            explanation: 'The answer is The Pythagorean Theorem. a² + b² = c² on a grid.'
        },
        {
            question: 'Which figure has exactly one endpoint?',
            options: ['Segment', 'Line', 'Plane', 'Ray'],
            correct: 3,
            explanation: 'The answer is Ray. Rays start at one endpoint.'
        }
    ]
},
{
    name: '1.2.1 Inductive Reasoning and Conditional Statements',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Logic of Proof</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Inductive Reasoning and Conditional Statements</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will use inductive reasoning to make conjectures, find counterexamples, and write conditional statements with their converse, inverse, contrapositive and biconditional forms.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Conditional statements are the language of logic — used in math proofs, computer code (“if… then…”), legal contracts and everyday arguments. Knowing which forms are true prevents faulty reasoning.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Coding (if–then statements)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Laws and contracts</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Scientific hypotheses</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🕵️ Detective reasoning</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📋 Rules and policies</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎯 Strategy games</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use inductive reasoning to make conjectures and counterexamples to test them. (MP3)</li>
    <li>Write and evaluate conditional, converse, inverse, contrapositive and biconditional statements.</li>
    <li>Use deductive reasoning and the properties of equality to justify steps. (MP3)</li>
    <li>Write two-column proofs of theorems about segments, lines and angles. (G-CO.9)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Make conjectures using inductive reasoning.</li>
    <li>Disprove conjectures with counterexamples.</li>
    <li>Identify the hypothesis and conclusion of a conditional.</li>
    <li>Write and evaluate the converse, inverse, contrapositive and biconditional.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we tell whether a pattern is always true?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Topic 1.1 you learned definitions and postulates. Definitions are written as biconditional statements, which you will learn about today.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Suppose you notice that the sun has risen in the east every morning of your life. You conclude that it will rise in the east tomorrow. Reasoning from patterns and examples to a general rule is called <strong>inductive reasoning</strong>, and the rule you guess is a <strong>conjecture</strong>.</p>
    <p>Inductive reasoning is useful, but it does not <em>prove</em> anything. One <strong>counterexample</strong> — a single case where the conjecture is false — is enough to disprove it. To be certain, mathematicians use logical statements called <strong>conditionals</strong>, written “If p, then q.”</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Examples can suggest a rule. Only one counterexample can break it. Proof makes it certain.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Logic as a formal subject was developed by the Greek philosopher Aristotle in the 300s BCE. Today the same logic powers computers: every “if… then…” instruction in a program is a conditional statement, and computer circuits are built from logical operations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">inductive reasoning</strong>
    </p>
    <p style="margin:6px 0;">Reasoning that uses patterns or examples to reach a general conclusion.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Noticing 2, 4, 6, 8 and predicting 10.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">conjecture</strong>
    </p>
    <p style="margin:6px 0;">An unproven statement based on observations.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“The sum of two odd numbers is even.”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">counterexample</strong>
    </p>
    <p style="margin:6px 0;">An example that shows a conjecture is false.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>2 is a counterexample to “all primes are odd.”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">conditional statement</strong>
    </p>
    <p style="margin:6px 0;">A statement in “if p, then q” form.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> p → q</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“If it rains, then the ground is wet.”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">hypothesis</strong>
    </p>
    <p style="margin:6px 0;">The “if” part of a conditional.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> p</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“it rains”</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">conclusion</strong>
    </p>
    <p style="margin:6px 0;">The “then” part of a conditional.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> q</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>“the ground is wet”</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Inductive Reasoning and Counterexamples</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Making a conjecture</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Look at the pattern 3, 6, 12, 24, … Make a conjecture about the next number and the rule.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Compare terms</strong>
    </p>
    <div style="margin:6px 0 0 34px;">6 = 3 × 2, 12 = 6 × 2, 24 = 12 × 2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: State the rule</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Each term is twice the one before.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Predict</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The next term is 48.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Conjecture: each term doubles; the next term is 48.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Finding a counterexample</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Conjecture: “The square of any number is greater than the number.” Is it true?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Try different kinds of numbers: positive, negative, zero, fractions.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Test 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3² = 9, and 9 is greater than 3 ✓</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Test 1/2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(1/2)² = 1/4, which is LESS than 1/2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Conclude</strong>
    </p>
    <div style="margin:6px 0 0 34px;">One counterexample is enough to disprove the conjecture.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> False. Counterexample: (1/2)² = 1/4, which is smaller than 1/2. (Also 1² = 1 and 0² = 0.)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Testing only whole numbers. Always try zero, negatives and fractions.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Conditional Statements and Related Forms</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 260" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Picturing a Conditional: If p, then q</text><ellipse cx="250" cy="145" rx="190" ry="95" fill="#123532" stroke="#80cbc4" stroke-width="2"/><ellipse cx="200" cy="150" rx="85" ry="52" fill="#1a1f3d" stroke="#fde68a" stroke-width="2"/><text x="200" y="148" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">dogs (p)</text><text x="200" y="168" fill="#cbd5e1" font-size="12" text-anchor="middle">hypothesis</text><text x="350" y="96" fill="#80cbc4" font-size="15" font-weight="bold" text-anchor="middle">mammals (q)</text><text x="350" y="116" fill="#cbd5e1" font-size="12" text-anchor="middle">conclusion</text><text x="350" y="186" fill="#cbd5e1" font-size="12" text-anchor="middle">cats, whales…</text><text x="470" y="120" fill="#e2e8f0" font-size="13">Every dog is inside</text><text x="470" y="138" fill="#e2e8f0" font-size="13">the mammal region,</text><text x="470" y="156" fill="#e2e8f0" font-size="13">so p → q is true.</text><text x="470" y="186" fill="#fca5a5" font-size="13">But not every mammal</text><text x="470" y="204" fill="#fca5a5" font-size="13">is a dog: q → p is false.</text><text x="350" y="252" fill="#86efac" font-size="12" text-anchor="middle">A conditional and its contrapositive are always both true or both false.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Form</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbols</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">True?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conditional</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">p → q</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If an animal is a dog, then it is a mammal.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">True</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Converse</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">q → p</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If an animal is a mammal, then it is a dog.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">False (a cat)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inverse</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">~p → ~q</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If an animal is not a dog, then it is not a mammal.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">False (a cat)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contrapositive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">~q → ~p</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If an animal is not a mammal, then it is not a dog.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">True</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A conditional and its contrapositive always have the same truth value. The converse and inverse always have the same truth value as each other. (~ means “not.”)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Writing all four forms</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write the converse, inverse and contrapositive of “If two angles are vertical angles, then they are congruent,” and decide which are true.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Converse</strong>
    </p>
    <div style="margin:6px 0 0 34px;">If two angles are congruent, then they are vertical angles. — False (two 40° angles in different places).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Inverse</strong>
    </p>
    <div style="margin:6px 0 0 34px;">If two angles are not vertical angles, then they are not congruent. — False.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Contrapositive</strong>
    </p>
    <div style="margin:6px 0 0 34px;">If two angles are not congruent, then they are not vertical angles. — True.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The original and contrapositive are true; the converse and inverse are false.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Biconditionals and Definitions</h3>
    <p>When a conditional <em>and</em> its converse are both true, they can be combined into a <strong>biconditional</strong> using “if and only if” (p ↔ q). Every good definition can be written as a biconditional.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Biconditional</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If two angles are complementary, their measures add to 90°. (True; converse also true)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two angles are complementary if and only if their measures add to 90°.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If an angle is a right angle, it measures 90°. (True; converse also true)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An angle is a right angle if and only if it measures 90°.</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is the hypothesis of “If x = 3, then 2x = 6”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Write the converse of “If x = 3, then 2x = 6.” Is it true?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">“If 2x = 6, then x = 3.” True.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Find a counterexample to “All rectangles are squares.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A rectangle with sides 2 and 5.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect classmates’ ideas and methods — there is often more than one way to solve a problem.</li>
    <li>Show all your work so that you and others can follow and check your reasoning.</li>
    <li>Use calculators and graphing apps only when the task allows them.</li>
    <li>Use only school-approved websites and apps for online practice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Math Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP3 Constructing arguments</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 Looking for patterns</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Making conjectures</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Finding counterexamples</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Logical analysis</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Inductive reasoning is how mathematicians and scientists discover ideas; deductive reasoning is how they prove them. A famous warning: if you place points on a circle and connect them, the number of regions formed goes 1, 2, 4, 8, 16 for 1 to 5 points — but with 6 points you get 31, not 32. Patterns can fool us, which is why proof matters.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why do you think a single counterexample can disprove a statement, but a thousand examples cannot prove it?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80cbc4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Geometry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Every “if… then…” rule in a video game, an app or a school policy is a conditional statement — and its converse is often false.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists studying climate make conjectures from data patterns, then test them carefully, because a single strong counterexample can overturn a hypothesis.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Programmers, lawyers, detectives and scientists use conditional logic every day to reason precisely.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Predict the next number: 1, 4, 9, 16, …</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Square 1, 2, 3, 4, 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">25 (perfect squares).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Identify p and q in “If it is a triangle, then it has three sides.”</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: If-part and then-part.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">p: it is a triangle; q: it has three sides.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which form always has the same truth value as the conditional?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Switch and negate.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The contrapositive.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write five conditional statements about school life. Then write the converse of each and decide whether it is true.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Counterexample challenge: each partner writes three conjectures; the other tries to find a counterexample for each.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a poster showing one conditional with all four forms, an Euler diagram and truth values.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Write a short “if–then” rule in a block-coding tool or a spreadsheet (e.g., IF(score≥70,"pass","retry")) and explain its hypothesis and conclusion.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define counterexample.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An example that shows a conjecture is false.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write in if–then form: “All squares are rectangles.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If a figure is a square, then it is a rectangle.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Write the converse, inverse and contrapositive of “If a figure is a square, then it is a rectangle.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Converse: if rectangle, then square (false). Inverse: if not square, then not rectangle (false). Contrapositive: if not rectangle, then not square (true).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find a counterexample: “If x² = 16, then x = 4.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = −4.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80cbc4;">
    <p style="margin:0 0 6px 0;color:#80cbc4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Can a conditional be false while its converse is true? Give an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes. “If an animal is a mammal, then it is a dog” is false, but its converse, “If an animal is a dog, then it is a mammal,” is true.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A sign says, “If you are under 12, then you get a discount.” Write the converse and explain whether it must be true.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">“If you get a discount, then you are under 12.” Not necessarily — seniors or students might also get discounts.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> MP3: Write the definition of a midpoint as a biconditional.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A point is the midpoint of a segment if and only if it divides the segment into two congruent segments.</div>
    </details>
    </div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Inductive reasoning uses patterns to make conjectures, and one counterexample can disprove a conjecture. A conditional statement has the form “if p, then q.” Its converse switches p and q, its inverse negates both, and its contrapositive switches and negates. A conditional and its contrapositive are logically equivalent. When a conditional and its converse are both true, they form a biconditional — the form of every good definition.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Inductive: examples → conjecture.</li>
    <li>Counterexample disproves.</li>
    <li>Converse q→p; inverse ~p→~q; contrapositive ~q→~p.</li>
    <li>Biconditional: p if and only if q.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Contrapositive = same truth value.</li>
    <li>Converse = may be false.</li>
    <li>Definitions are biconditionals.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Assuming the converse is true.</li>
    <li>Thinking examples prove a rule.</li>
    <li>Mixing up inverse and contrapositive.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Underline p and circle q.</li>
    <li>Draw an Euler diagram.</li>
    <li>Test zero, negatives and fractions for counterexamples.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Label each form clearly.</li>
    <li>Give a specific counterexample for false statements.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP3 Arguments</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using logic precisely.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP7 Patterns</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making conjectures.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Computational thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linking conditionals to code.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Logical thinking</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Skepticism</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and coding</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Law and rules</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Understanding conditionals helps you read rules, contracts and code — and avoid assuming that a converse is true.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write all four forms of three conditionals and determine their truth values.</li>
    <li>Find a counterexample to a common saying or rule.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When have I assumed a converse was true?</li>
    <li>Do I prefer inductive or deductive reasoning? Why?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Conjecture</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An unproven statement.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Counterexample</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proof that a statement is false.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Converse</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Switch hypothesis and conclusion.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Contrapositive</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Switch and negate.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can make conjectures from patterns.</p>
    <p style="margin:6px 0;">☐ I can find counterexamples.</p>
    <p style="margin:6px 0;">☐ I can identify the hypothesis and conclusion.</p>
    <p style="margin:6px 0;">☐ I can write and evaluate the four forms and biconditionals.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Reasoning from patterns to a general rule is:',
            options: ['Deductive reasoning', 'A proof', 'A postulate', 'Inductive reasoning'],
            correct: 3,
            explanation: 'The answer is Inductive reasoning. Induction uses examples.'
        },
        {
            question: 'An unproven statement based on observations is a:',
            options: ['Theorem', 'Conjecture', 'Postulate', 'Definition'],
            correct: 1,
            explanation: 'The answer is Conjecture. Conjectures must be tested.'
        },
        {
            question: 'Which number is a counterexample to “All prime numbers are odd”?',
            options: ['3', '2', '9', '15'],
            correct: 1,
            explanation: 'The answer is 2. 2 is prime and even.'
        },
        {
            question: 'In “If p, then q,” p is the:',
            options: ['Conclusion', 'Converse', 'Hypothesis', 'Counterexample'],
            correct: 2,
            explanation: 'The answer is Hypothesis. The “if” part.'
        },
        {
            question: 'The converse of “If p, then q” is:',
            options: ['If q, then p', 'If not p, then not q', 'If not q, then not p', 'p if and only if q'],
            correct: 0,
            explanation: 'The answer is If q, then p. Switch the parts.'
        },
        {
            question: 'The contrapositive of “If p, then q” is:',
            options: ['If q, then p', 'If not q, then not p', 'If not p, then not q', 'If p, then not q'],
            correct: 1,
            explanation: 'The answer is If not q, then not p. Switch and negate.'
        },
        {
            question: 'Which form always has the same truth value as the conditional?',
            options: ['Converse', 'Inverse', 'Negation', 'Contrapositive'],
            correct: 3,
            explanation: 'They are logically equivalent.'
        },
        {
            question: '“If an animal is a mammal, then it is a dog” is:',
            options: ['True', 'A definition', 'False', 'A biconditional'],
            correct: 2,
            explanation: 'The answer is False. A cat is a counterexample.'
        },
        {
            question: 'A statement using “if and only if” is a:',
            options: ['Converse', 'Conjecture', 'Biconditional', 'Counterexample'],
            correct: 2,
            explanation: 'The answer is Biconditional. p ↔ q.'
        },
        {
            question: 'Next term of 3, 6, 12, 24, …?',
            options: ['36', '30', '27', '48'],
            correct: 3,
            explanation: 'The answer is 48. Each term doubles.'
        }
    ]
},
{
    name: '1.2.2 Deductive Reasoning and Algebraic Proof',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Logic of Proof</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Deductive Reasoning and Algebraic Proof</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will use the Laws of Detachment and Syllogism, learn the properties of equality and congruence, and write two-column algebraic and segment proofs.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Deductive reasoning gives certainty: if the starting facts are true and the logic is valid, the conclusion must be true. This is how mathematics, law and science build reliable knowledge.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Courtroom arguments</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Debugging code</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔬 Scientific conclusions</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Medical diagnosis</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧩 Logic puzzles</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📜 Contracts</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use inductive reasoning to make conjectures and counterexamples to test them. (MP3)</li>
    <li>Write and evaluate conditional, converse, inverse, contrapositive and biconditional statements.</li>
    <li>Use deductive reasoning and the properties of equality to justify steps. (MP3)</li>
    <li>Write two-column proofs of theorems about segments, lines and angles. (G-CO.9)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the Law of Detachment and the Law of Syllogism.</li>
    <li>Name the properties of equality and congruence.</li>
    <li>Justify each step of an algebraic solution.</li>
    <li>Write a two-column proof involving segment lengths.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can we be certain that a conclusion is true?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you wrote conditionals. In Algebra I you justified steps with the properties of equality.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A detective knows: “If the suspect was in Chicago at 9 p.m., then the suspect could not have been in Boston at 9 p.m.” A receipt proves the suspect was in Chicago at 9 p.m. So the detective concludes the suspect was not in Boston. This is <strong>deductive reasoning</strong>: using facts, definitions and accepted rules to reach a conclusion that <em>must</em> be true.</p>
    <p>In geometry, deductive arguments are written as <strong>proofs</strong>. A <strong>two-column proof</strong> lists numbered statements in one column and the reason for each in the other. Reasons can be given information, definitions, properties, postulates or previously proven theorems.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Inductive reasoning guesses. Deductive reasoning proves.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The two-column proof format became standard in U.S. geometry textbooks in the early 1900s as a clear way to show every step of a logical argument. Other formats — paragraph proofs and flowchart proofs — express the same logic in different ways.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">deductive reasoning</strong>
    </p>
    <p style="margin:6px 0;">Using facts, definitions, rules and properties to reach a logical conclusion.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Concluding x = 7 from 2x = 14.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Law of Detachment</strong>
    </p>
    <p style="margin:6px 0;">If p → q is true and p is true, then q is true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> p → q; p; so q</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>If it rains, the game is canceled. It rains. So the game is canceled.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Law of Syllogism</strong>
    </p>
    <p style="margin:6px 0;">If p → q and q → r are true, then p → r is true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> p → q, q → r ⇒ p → r</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Chaining two conditionals.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">proof</strong>
    </p>
    <p style="margin:6px 0;">A logical argument showing a statement is true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A two-column proof lists statements and reasons.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">theorem</strong>
    </p>
    <p style="margin:6px 0;">A statement that has been proven to be true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Vertical Angles Theorem.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Reflexive Property</strong>
    </p>
    <p style="margin:6px 0;">Any quantity is equal (or congruent) to itself.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> a = a</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>BC = BC</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Laws of Logic</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Law</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Pattern</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detachment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">p → q is true; p is true; therefore q is true</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If two angles form a linear pair, they are supplementary. ∠1 and ∠2 form a linear pair. So ∠1 and ∠2 are supplementary.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Syllogism</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">p → q and q → r are true; therefore p → r is true</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">See the diagram below.</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 170" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">The Law of Syllogism: Chaining Conditionals</text><rect x="20" y="50" width="200" height="76" rx="12" fill="#10233d" stroke="#80cbc4" stroke-width="2"/><text x="120" y="82" fill="#fde68a" font-size="13" text-anchor="middle">If you study,</text><text x="120" y="104" fill="#e2e8f0" font-size="13" text-anchor="middle">you understand the lesson.</text><line x1="222" y1="88" x2="238" y2="88" stroke="#94a3b8" stroke-width="2"/><polygon points="248,88 237.0,93.0 237.0,83.0" fill="#94a3b8"/><rect x="250" y="50" width="200" height="76" rx="12" fill="#10233d" stroke="#80cbc4" stroke-width="2"/><text x="350" y="82" fill="#fde68a" font-size="13" text-anchor="middle">If you understand the lesson,</text><text x="350" y="104" fill="#e2e8f0" font-size="13" text-anchor="middle">you pass the quiz.</text><line x1="452" y1="88" x2="468" y2="88" stroke="#94a3b8" stroke-width="2"/><polygon points="478,88 467.0,93.0 467.0,83.0" fill="#94a3b8"/><rect x="480" y="50" width="200" height="76" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="580" y="82" fill="#fde68a" font-size="13" text-anchor="middle">So: if you study,</text><text x="580" y="104" fill="#e2e8f0" font-size="13" text-anchor="middle">you pass the quiz.</text><text x="350" y="156" fill="#cbd5e1" font-size="12" text-anchor="middle">If p → q and q → r are true, then p → r is true.</text>
    </svg>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>“If it rains, the ground is wet. The ground is wet. So it rained.” This is NOT valid — it uses the converse. The ground might be wet from a sprinkler.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Properties of Equality and Congruence</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equality</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Congruence</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflexive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a = a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB ≅ AB</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Symmetric</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then b = a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If ∠A ≅ ∠B, then ∠B ≅ ∠A</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transitive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b and b = c, then a = c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If AB ≅ CD and CD ≅ EF, then AB ≅ EF</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition / Subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then a ± c = b ± c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication / Division</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then ac = bc and a/c = b/c (c ≠ 0)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Substitution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then b can replace a in any expression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distributive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a(b + c) = ab + ac</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: An algebraic proof</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Given 2(x − 3) = 8. Prove x = 7.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Statement 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2(x − 3) = 8 — Given</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Statement 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x − 6 = 8 — Distributive Property</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Statement 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x = 14 — Addition Property of Equality</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Statement 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 7 — Division Property of Equality</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">#</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statements</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reasons</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2(x − 3) = 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Given</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2x − 6 = 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distributive Property</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2x = 14</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition Property of Equality</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Division Property of Equality</td>
    </tr>
    </table>
    </div>
    </div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Every step is justified by a property. This is exactly what A-REI.1 in Algebra I asked for — now written as a formal proof.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. A Segment Proof</h3>
    <p><strong>Given:</strong> Points A, B, C and D lie on a line in that order, and AB = CD. <strong>Prove:</strong> AC = BD.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">#</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statements</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reasons</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB = CD</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Given</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">BC = BC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflexive Property of Equality</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB + BC = CD + BC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition Property of Equality</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB + BC = AC and BC + CD = BD</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Segment Addition Postulate</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AC = BD</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Substitution Property of Equality</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A proof starts with the “Given” and ends with the “Prove” statement. Every line in between needs a reason.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which property says “If AB = CD, then CD = AB”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Symmetric Property of Equality.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Use the Law of Syllogism: If a figure is a square, it is a rhombus. If it is a rhombus, it is a parallelogram.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If a figure is a square, then it is a parallelogram.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What reason justifies “BC = BC”?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Reflexive Property of Equality.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect classmates’ ideas and methods — there is often more than one way to solve a problem.</li>
    <li>Show all your work so that you and others can follow and check your reasoning.</li>
    <li>Use calculators and graphing apps only when the task allows them.</li>
    <li>Use only school-approved websites and apps for online practice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Math Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP3 Constructing arguments</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Precise reasons</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying laws of logic</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Writing two-column proofs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Justifying steps</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>The most common mistake in proofs is skipping a step because it “seems obvious.” In a proof, nothing is obvious — each statement must follow from earlier statements by a stated reason. Another frequent error is using the property of equality when the statement is about congruence, or the reverse. Lengths and measures are equal (=); figures are congruent (≅).</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student writes: “1. AB = CD — Given. 2. AC = BD — Segment Addition Postulate.” What is missing? <em>Answer: the steps that add BC to both sides and substitute; the conclusion does not follow in one step.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80cbc4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Geometry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Lawyers build cases step by step from evidence and laws, just as a proof builds from givens and postulates.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Environmental scientists use deductive reasoning to predict effects: if a pollutant harms fish, and a river contains the pollutant, fish in the river are at risk.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Software engineers prove that critical programs (such as those in airplanes and medical devices) always behave correctly using formal logic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Name the property: if m∠A = m∠B and m∠B = m∠C, then m∠A = m∠C.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Passing equality along.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Transitive Property of Equality.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Use the Law of Detachment: If x = 4, then x² = 16. x = 4.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: p is true, so q is true.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x² = 16.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is the first reason in most proofs?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Start with what you know.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Given.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write a two-column proof for “Given 5x + 3 = 28, prove x = 5.”</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner writes the statements of a proof; the other supplies the reasons. Then switch with a new proof.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Logic chain: each student writes a conditional on a card. The group arranges cards into the longest valid syllogism chain.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Try an online logic-puzzle or proof game and record one deductive step you used and its reason.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the Law of Detachment.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If p → q is true and p is true, then q is true.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Name the property: a = a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Reflexive Property.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Write a two-column proof: Given 3x − 4 = 11, prove x = 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1. 3x − 4 = 11 (Given); 2. 3x = 15 (Addition Property); 3. x = 5 (Division Property).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Is this valid? “If you live in Texas, you live in the U.S. Sam lives in the U.S. So Sam lives in Texas.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — it assumes the converse.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80cbc4;">
    <p style="margin:0 0 6px 0;color:#80cbc4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Given: AC = BD with A, B, C and D on a line in that order. Prove: AB = CD.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1. AC = BD (Given); 2. AB + BC = AC, BC + CD = BD (Segment Addition); 3. AB + BC = BC + CD (Substitution); 4. AB = CD (Subtraction Property).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Use the Law of Syllogism: If you practice daily, you improve. If you improve, you make the team. What can you conclude?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If you practice daily, you make the team.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> MP3: Explain why deductive reasoning is stronger than inductive reasoning for proving a statement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Deductive reasoning uses accepted facts and valid logic, so its conclusions must be true; inductive reasoning only suggests a pattern that could have counterexamples.</div>
    </details>
    </div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Deductive reasoning uses facts, definitions, properties and postulates to reach certain conclusions. The Law of Detachment and the Law of Syllogism are valid patterns of logic. The properties of equality and congruence — reflexive, symmetric, transitive, addition, subtraction, multiplication, division, substitution and distributive — justify the steps of two-column proofs.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Detachment: p → q, p ⇒ q.</li>
    <li>Syllogism: p → q, q → r ⇒ p → r.</li>
    <li>Reflexive, symmetric, transitive, substitution.</li>
    <li>Two-column proof: statements + reasons.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Every statement needs a reason.</li>
    <li>Use = for measures, ≅ for figures.</li>
    <li>Never reason from the converse.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Skipping steps.</li>
    <li>Using the converse as if it were true.</li>
    <li>Confusing symmetric and transitive.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write the Given and Prove first.</li>
    <li>Work backward from the Prove statement.</li>
    <li>Keep a list of properties handy.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Number each statement and reason.</li>
    <li>End with the exact Prove statement.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP3 Arguments</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing valid proofs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Naming exact properties.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Logical reasoning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using laws of logic.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty in reasoning</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Patience</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Law and justice</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Deductive reasoning helps you build arguments that others cannot easily break — in math, debate and life.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write two algebraic proofs and one segment proof.</li>
    <li>Create a three-step syllogism about your daily routine.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which property do I mix up most?</li>
    <li>How does writing reasons change how I solve equations?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Deductive reasoning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reasoning from accepted facts.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Proof</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A logical argument.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Theorem</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A proven statement.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Transitive Property</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b and b = c, then a = c.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can use the laws of logic.</p>
    <p style="margin:6px 0;">☐ I can name the properties of equality and congruence.</p>
    <p style="margin:6px 0;">☐ I can write algebraic proofs.</p>
    <p style="margin:6px 0;">☐ I can write a segment proof.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Reasoning from accepted facts to a certain conclusion is:',
            options: ['Deductive reasoning', 'Inductive reasoning', 'A conjecture', 'A counterexample'],
            correct: 0,
            explanation: 'The answer is Deductive reasoning. Deduction gives certainty.'
        },
        {
            question: 'If p → q is true and p is true, then q is true. This is the Law of:',
            options: ['Syllogism', 'Contrapositive', 'Detachment', 'Reflexive'],
            correct: 2,
            explanation: 'The answer is Detachment. Detachment separates q.'
        },
        {
            question: 'If p → q and q → r, then p → r. This is the Law of:',
            options: ['Detachment', 'Substitution', 'Distribution', 'Syllogism'],
            correct: 3,
            explanation: 'Syllogism chains conditionals.'
        },
        {
            question: '“BC = BC” is justified by the:',
            options: ['Reflexive Property', 'Symmetric Property', 'Transitive Property', 'Substitution Property'],
            correct: 0,
            explanation: 'The answer is Reflexive Property. Anything equals itself.'
        },
        {
            question: '“If m∠A = m∠B, then m∠B = m∠A” uses the:',
            options: ['Reflexive Property', 'Transitive Property', 'Symmetric Property', 'Addition Property'],
            correct: 2,
            explanation: 'The answer is Symmetric Property. Equality works both ways.'
        },
        {
            question: '“If a = b and b = c, then a = c” is the:',
            options: ['Symmetric Property', 'Transitive Property', 'Reflexive Property', 'Distributive Property'],
            correct: 1,
            explanation: 'The answer is Transitive Property. Equality passes along.'
        },
        {
            question: 'Going from 2(x − 3) = 8 to 2x − 6 = 8 uses the:',
            options: ['Addition Property', 'Reflexive Property', 'Distributive Property', 'Division Property'],
            correct: 2,
            explanation: 'The answer is Distributive Property. Multiply 2 by each term.'
        },
        {
            question: 'Which argument is NOT valid?',
            options: ['If it rains, the ground is wet. It rained. So the ground is wet.', 'If p then q; if q then r; so if p then r.', 'If x = 2, then 3x = 6. x = 2. So 3x = 6.', 'If it rains, the ground is wet. The ground is wet. So it rained.'],
            correct: 3,
            explanation: 'The answer is If it rains, the ground is wet. The ground is wet. So it rained.. It reasons from the converse.'
        },
        {
            question: 'The first statement of a proof is usually justified by:',
            options: ['Substitution', 'Given', 'Transitive Property', 'A theorem'],
            correct: 1,
            explanation: 'Start with the given information.'
        },
        {
            question: 'A statement that has been proven is a:',
            options: ['Theorem', 'Postulate', 'Conjecture', 'Hypothesis'],
            correct: 0,
            explanation: 'The answer is Theorem. Theorems are proven.'
        }
    ]
},
{
    name: '1.2.3 Proving Segment and Angle Theorems',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: The Logic of Proof</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Proving Segment and Angle Theorems</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will prove the Vertical Angles Theorem, the Congruent Supplements and Complements Theorems and the Right Angle Congruence Theorem, and use them to solve problems.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Proving a theorem means it is true in every case — not just the ones you measured. Once proven, a theorem becomes a tool you can use in all later proofs.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Structural engineering</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗺️ Surveying</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Computer graphics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">✂️ Pattern design</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 College mathematics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧠 Logical thinking</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use inductive reasoning to make conjectures and counterexamples to test them. (MP3)</li>
    <li>Write and evaluate conditional, converse, inverse, contrapositive and biconditional statements.</li>
    <li>Use deductive reasoning and the properties of equality to justify steps. (MP3)</li>
    <li>Write two-column proofs of theorems about segments, lines and angles. (G-CO.9)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the Linear Pair Postulate in proofs.</li>
    <li>Prove the Vertical Angles Theorem. (G-CO.9)</li>
    <li>State and apply the Congruent Supplements, Congruent Complements and Right Angle Congruence Theorems.</li>
    <li>Write two-column proofs about angles.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Why are vertical angles always congruent?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.3 you observed that vertical angles are equal. In Lesson 1.2.2 you learned to write two-column proofs. Now you will prove it.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>In Lesson 1.1.3 you measured vertical angles and saw that they were equal. But measuring a few examples is inductive reasoning — it does not prove that vertical angles are <em>always</em> equal. To be certain, we need a deductive proof that works for every pair of intersecting lines.</p>
    <p>The key idea is the <strong>Linear Pair Postulate</strong>: if two angles form a linear pair, they are supplementary. Each vertical angle forms a linear pair with the same neighboring angle — and that is enough to prove they are equal.</p>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Two angles that are each supplementary to the same angle must be equal to each other.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The Vertical Angles Theorem appears in Euclid’s <em>Elements</em> (Book I, Proposition 15). The ancient Greek mathematician Thales of Miletus, who lived around 600 BCE, is often credited with first proving it, making it one of the oldest known geometric proofs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Linear Pair Postulate</strong>
    </p>
    <p style="margin:6px 0;">If two angles form a linear pair, then they are supplementary.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>m∠1 + m∠2 = 180°</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Vertical Angles Theorem</strong>
    </p>
    <p style="margin:6px 0;">Vertical angles are congruent.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∠1 ≅ ∠3</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Proved from linear pairs.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Congruent Supplements Theorem</strong>
    </p>
    <p style="margin:6px 0;">If two angles are supplementary to the same angle (or congruent angles), they are congruent.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Used to prove the Vertical Angles Theorem.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Congruent Complements Theorem</strong>
    </p>
    <p style="margin:6px 0;">If two angles are complementary to the same angle (or congruent angles), they are congruent.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Two angles each complementary to 40° are both 50°.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Right Angle Congruence Theorem</strong>
    </p>
    <p style="margin:6px 0;">All right angles are congruent.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Every right angle measures 90°.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #80cbc4;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">definition of congruent angles</strong>
    </p>
    <p style="margin:6px 0;">Two angles are congruent if and only if they have equal measures.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∠A ≅ ∠B ⟺ m∠A = m∠B</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Lets you switch between = and ≅.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Proving the Vertical Angles Theorem</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 230" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Given: ∠1 and ∠3 are vertical angles</text><line x1="160" y1="200" x2="540" y2="50" stroke="#80cbc4" stroke-width="3"/><polygon points="554,44 545.6,52.7 541.9,43.4" fill="#80cbc4"/><polygon points="146,206 154.4,197.3 158.1,206.6" fill="#80cbc4"/><line x1="170" y1="56" x2="530" y2="196" stroke="#80cbc4" stroke-width="3"/><polygon points="544,201 531.9,201.7 535.6,192.4" fill="#80cbc4"/><polygon points="156,51 168.1,50.3 164.4,59.6" fill="#80cbc4"/><circle cx="350" cy="125" r="5" fill="#fde68a"/><text x="350" y="100" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">1</text><text x="404" y="131" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">2</text><text x="350" y="160" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">3</text><text x="296" y="131" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">4</text><text x="350" y="222" fill="#86efac" font-size="13" text-anchor="middle">Prove: ∠1 ≅ ∠3 (use the linear pairs ∠1 and ∠2, and ∠2 and ∠3)</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">#</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statements</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reasons</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∠1 and ∠3 are vertical angles.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Given</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∠1 and ∠2 form a linear pair; ∠2 and ∠3 form a linear pair.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition of linear pair (from the diagram)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 + m∠2 = 180°; m∠2 + m∠3 = 180°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear Pair Postulate</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 + m∠2 = m∠2 + m∠3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Substitution (or Transitive) Property of Equality</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 = m∠3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction Property of Equality</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∠1 ≅ ∠3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition of congruent angles</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Notice how the proof switches between measures (m∠1 = m∠3) and figures (∠1 ≅ ∠3) using the definition of congruent angles.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. More Angle Theorems</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Theorem</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statement</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why it is true</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Congruent Supplements Theorem</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two angles supplementary to the same angle are congruent.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both equal 180° minus the same measure.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Congruent Complements Theorem</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two angles complementary to the same angle are congruent.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both equal 90° minus the same measure.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right Angle Congruence Theorem</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All right angles are congruent.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every right angle measures 90°.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical Angles Theorem</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical angles are congruent.</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both are supplementary to the same angle.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Proving the Congruent Complements Theorem</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Given: ∠1 and ∠2 are complementary; ∠3 and ∠2 are complementary. Prove: ∠1 ≅ ∠3.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">∠1 and ∠2 are complementary; ∠3 and ∠2 are complementary — Given</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m∠1 + m∠2 = 90°; m∠3 + m∠2 = 90° — Definition of complementary angles</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m∠1 + m∠2 = m∠3 + m∠2 — Substitution Property</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m∠1 = m∠3 — Subtraction Property</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: 5</strong>
    </p>
    <div style="margin:6px 0 0 34px;">∠1 ≅ ∠3 — Definition of congruent angles</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">#</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statements</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reasons</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∠1 and ∠2 are complementary; ∠3 and ∠2 are complementary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Given</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 + m∠2 = 90°; m∠3 + m∠2 = 90°</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition of complementary angles</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 + m∠2 = m∠3 + m∠2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Substitution Property of Equality</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 = m∠3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction Property of Equality</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∠1 ≅ ∠3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition of congruent angles</td>
    </tr>
    </table>
    </div>
    </div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The structure is the same as the Vertical Angles proof, using 90° instead of 180°.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Using Theorems to Solve Problems</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Combining theorems</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Two lines intersect. One angle measures (4x + 6)° and its vertical angle measures (6x − 20)°. Find all four angles.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Vertical Angles Theorem</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4x + 6 = 6x − 20</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">26 = 2x, so x = 13</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Find the angle</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4(13) + 6 = 58°</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Linear Pair Postulate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Each adjacent angle = 180° − 58° = 122°</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The four angles measure 58°, 122°, 58° and 122°.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What postulate is the key to proving the Vertical Angles Theorem?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Linear Pair Postulate.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> ∠A and ∠B are both supplementary to a 70° angle. What can you conclude?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">∠A ≅ ∠B (each measures 110°) — Congruent Supplements Theorem.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why are all right angles congruent?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They all measure 90°, and angles with equal measures are congruent.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect classmates’ ideas and methods — there is often more than one way to solve a problem.</li>
    <li>Show all your work so that you and others can follow and check your reasoning.</li>
    <li>Use calculators and graphing apps only when the task allows them.</li>
    <li>Use only school-approved websites and apps for online practice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Math Practices You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP3 Proving theorems</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 Seeing structure</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Precise reasons</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Switching between = and ≅</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Applying theorems</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Once a theorem is proven, you can use it as a reason in future proofs. This is how geometry grows: a few postulates lead to simple theorems, which lead to more powerful theorems. Every proof you write in this course will build on the ones in this lesson.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student’s reason for “m∠1 + m∠2 = 180°” is “Vertical Angles Theorem.” What is wrong? <em>Answer: ∠1 and ∠2 form a linear pair, so the reason is the Linear Pair Postulate. Vertical angles are congruent, not supplementary.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #80cbc4;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Geometry in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> When you cut a slice of pizza along two straight lines through the center, the opposite slices have equal angles — the Vertical Angles Theorem.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Surveyors use angle theorems to measure land and plan roads and protected areas without walking every boundary.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Engineers rely on proven angle relationships when designing bridges, trusses and machine parts.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Two angles are each complementary to a 25° angle. What do they measure?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Congruent Complements Theorem.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">65° each.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is the reason for “∠1 ≅ ∠3” after proving m∠1 = m∠3?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Switch = to ≅.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Definition of congruent angles.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> One angle at an intersection is 90°. What are the other three?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Vertical angles and linear pairs.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All 90°.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Rewrite the Vertical Angles proof from memory, then check every reason against the lesson.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write a paragraph proof of the Congruent Supplements Theorem, then convert your partner’s paragraph proof into a two-column proof.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Theorem tree: create a poster showing how the Linear Pair Postulate leads to the Congruent Supplements Theorem and the Vertical Angles Theorem.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>In GeoGebra, construct intersecting lines and display angle measures. Drag the lines and explain how the proof guarantees what you see.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the Vertical Angles Theorem.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vertical angles are congruent.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> State the Linear Pair Postulate.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If two angles form a linear pair, then they are supplementary.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Vertical angles measure (4x + 6)° and (6x − 20)°. Find all four angles.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 13; angles are 58°, 122°, 58°, 122°.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> ∠A and ∠B are complementary to ∠C, and m∠C = 35°. Find m∠A and m∠B.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Both 55° (Congruent Complements Theorem).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #80cbc4;">
    <p style="margin:0 0 6px 0;color:#80cbc4;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Write a two-column proof of the Congruent Supplements Theorem: Given ∠1 and ∠2 are supplementary and ∠3 and ∠2 are supplementary, prove ∠1 ≅ ∠3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1. Given; 2. m∠1 + m∠2 = 180°, m∠3 + m∠2 = 180° (Def. of supplementary); 3. m∠1 + m∠2 = m∠3 + m∠2 (Substitution); 4. m∠1 = m∠3 (Subtraction); 5. ∠1 ≅ ∠3 (Def. of congruent angles).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Explain why the opposite angles formed by the crossed blades of open scissors are equal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The blades form two intersecting lines, so the opposite angles are vertical angles, which are congruent.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> G-CO.9: Explain why the Vertical Angles Theorem must be proved instead of just measured.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Measurement shows only specific cases and has error; a proof shows that vertical angles are congruent for every pair of intersecting lines.</div>
    </details>
    </div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Linear Pair Postulate states that angles in a linear pair are supplementary. Using it, we proved the Vertical Angles Theorem: vertical angles are congruent. Related theorems — Congruent Supplements, Congruent Complements and Right Angle Congruence — follow the same pattern. Proven theorems become reasons we can use in future proofs.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Linear Pair Postulate: linear pair → supplementary.</li>
    <li>Vertical Angles Theorem: vertical angles ≅.</li>
    <li>Congruent Supplements/Complements Theorems.</li>
    <li>All right angles are congruent.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the definition of congruent angles to switch = and ≅.</li>
    <li>Vertical angles are congruent, not supplementary.</li>
    <li>Proven theorems can be used as reasons.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Citing the wrong theorem.</li>
    <li>Skipping the subtraction step.</li>
    <li>Ending with m∠1 = m∠3 when the Prove statement uses ≅.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mark known angles on the diagram.</li>
    <li>Look for linear pairs first.</li>
    <li>Compare each proof with the Vertical Angles proof structure.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Make your final statement match the Prove statement exactly.</li>
    <li>Use theorem names, not descriptions.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">G-CO.9</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proving theorems about lines and angles.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP3 Arguments</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing complete proofs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP7 Structure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recognizing proof patterns.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rigor</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Intellectual honesty</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Engineering</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Logical thinking</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Proof gives certainty — the same certainty engineers depend on when lives depend on their designs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write two-column proofs of the Congruent Supplements and Right Angle Congruence Theorems.</li>
    <li>Solve five problems using the angle theorems.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How does proving a theorem change how confident I am in it?</li>
    <li>Which step in angle proofs do I find hardest?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Linear Pair Postulate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear pairs are supplementary.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vertical Angles Theorem</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical angles are congruent.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Congruent Supplements Theorem</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supplements of the same angle are congruent.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Right Angle Congruence Theorem</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All right angles are congruent.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can use the Linear Pair Postulate.</p>
    <p style="margin:6px 0;">☐ I can prove the Vertical Angles Theorem.</p>
    <p style="margin:6px 0;">☐ I can apply the related angle theorems.</p>
    <p style="margin:6px 0;">☐ I can write two-column angle proofs.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The Linear Pair Postulate says angles in a linear pair are:',
            options: ['Complementary', 'Congruent', 'Right angles', 'Supplementary'],
            correct: 3,
            explanation: 'The answer is Supplementary. They add to 180°.'
        },
        {
            question: 'The Vertical Angles Theorem states that vertical angles are:',
            options: ['Congruent', 'Supplementary', 'Complementary', 'Adjacent'],
            correct: 0,
            explanation: 'The answer is Congruent. They have equal measures.'
        },
        {
            question: 'In the vertical angles proof, m∠1 = m∠3 follows from m∠1 + m∠2 = m∠2 + m∠3 by the:',
            options: ['Reflexive Property', 'Subtraction Property of Equality', 'Distributive Property', 'Linear Pair Postulate'],
            correct: 1,
            explanation: 'The answer is Subtraction Property of Equality. Subtract m∠2 from both sides.'
        },
        {
            question: 'The last step “∠1 ≅ ∠3” is justified by the:',
            options: ['Given', 'Linear Pair Postulate', 'Definition of congruent angles', 'Segment Addition Postulate'],
            correct: 2,
            explanation: 'Equal measures mean congruent angles.'
        },
        {
            question: 'Two angles each supplementary to a 70° angle are:',
            options: ['Congruent (110° each)', 'Complementary', 'Vertical', 'Right angles'],
            correct: 0,
            explanation: 'Congruent Supplements Theorem.'
        },
        {
            question: 'All right angles are congruent by the:',
            options: ['Vertical Angles Theorem', 'Linear Pair Postulate', 'Right Angle Congruence Theorem', 'Transitive Property'],
            correct: 2,
            explanation: 'The answer is Right Angle Congruence Theorem. Every right angle is 90°.'
        },
        {
            question: 'Vertical angles measure (4x + 6)° and (6x − 20)°. Each measures:',
            options: ['13°', '58°', '122°', '64°'],
            correct: 1,
            explanation: 'The answer is 58°. x = 13, so 4(13) + 6 = 58.'
        },
        {
            question: 'Who is often credited with first proving the Vertical Angles Theorem?',
            options: ['Thales of Miletus', 'Isaac Newton', 'René Descartes', 'Albert Einstein'],
            correct: 0,
            explanation: 'The answer is Thales of Miletus. Around 600 BCE.'
        },
        {
            question: 'Two angles each complementary to a 25° angle measure:',
            options: ['155° each', '25° each', '90° each', '65° each'],
            correct: 3,
            explanation: 'Congruent Complements Theorem.'
        },
        {
            question: 'Why must the Vertical Angles Theorem be proved rather than measured?',
            options: ['Measuring is not allowed', 'Protractors are inaccurate always', 'It is a postulate', 'A proof shows it is true in every case'],
            correct: 3,
            explanation: 'The answer is A proof shows it is true in every case. Proof covers all cases.'
        }
    ]
},
{
    name: '1.2 Activity: Proof Puzzles',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Proof Puzzles</h2>
    <p style="font-size:16px;">In this investigation your group receives proofs cut into separate statement and reason strips. Your task is to rebuild each proof in a logical order, find a “trap” strip that does not belong, and then write a proof of your own.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Classroom Expectations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotate roles: organizer, checker, recorder and presenter.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">For every step you place, say aloud why it follows from earlier steps.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If you disagree, explain your logic — do not just move the strip.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep each proof’s strips in its own envelope.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Math Investigation: Rebuild the Proof</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To understand the logical structure of proofs by arranging statements and reasons in a valid order.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Proof strip envelopes</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Glue stick or tape</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Two-column proof template</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Colored pens</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Envelope 1: algebraic proof (Given 2(x − 3) = 8, prove x = 7)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Envelope 2: segment proof (Given AB = CD, prove AC = BD)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Envelope 3: Vertical Angles Theorem proof</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Envelope 4: Congruent Complements Theorem proof</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle scissors carefully if cutting your own strips.</li>
    <li>Keep the workspace tidy.</li>
    <li>Return all envelopes.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Open Envelope 1. Find the “Given” and “Prove” strips and place them first and last.</li>
    <li>Arrange the remaining statements so that each follows from the ones before.</li>
    <li>Match each statement with its correct reason.</li>
    <li>Identify the one “trap” strip that does not belong, and explain why.</li>
    <li>Repeat for Envelopes 2–4, timing how long each takes.</li>
    <li>Glue your completed proofs onto the template.</li>
    <li>Write your own proof: Given m∠1 + m∠2 = 90° and m∠1 = 40°, prove m∠2 = 50°.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Envelope</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time taken</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Trap strip found</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why it does not belong</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
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
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> How did you decide which statement came next?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">By checking which statement could be justified using only the given information and earlier statements.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does the trap strip “Vertical Angles Theorem” not belong in the Vertical Angles proof?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">You cannot use a theorem to prove itself — that would be circular reasoning.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which proof was hardest to rebuild, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Answers vary; the Vertical Angles proof often is, because it combines linear pairs, substitution and the definition of congruent angles.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A proof is a chain of logic: each statement must be justified by the given information, definitions, properties, postulates or earlier theorems, and the chain must end with the Prove statement.</p>
    <p><strong style="color:#fde68a;">Why it works:</strong> Rebuilding proofs reveals their structure, which makes it easier to write new proofs independently.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using a statement before it has been justified.</li>
    <li>Mixing up equality and congruence properties.</li>
    <li>Circular reasoning — using what you are trying to prove.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Software engineers and auditors check that every step in a process follows logically from the one before — the same skill used in proofs.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Share your own proof with another group. Check that every statement has a reason and that the final statement matches the Prove statement. Discuss any differences in the order of steps — more than one valid order is sometimes possible.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>You cannot use the statement you are trying to prove as a reason. That is circular reasoning.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What goes first in a two-column proof?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The given information, with the reason “Given.”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is circular reasoning?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Using the statement you are trying to prove as a reason in its own proof.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Write the proof: Given m∠1 + m∠2 = 90° and m∠1 = 40°, prove m∠2 = 50°.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1. m∠1 + m∠2 = 90°, m∠1 = 40° (Given); 2. 40° + m∠2 = 90° (Substitution); 3. m∠2 = 50° (Subtraction).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Can a proof have more than one correct order of steps?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes, as long as every statement is justified by earlier statements.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is timing yourself useful?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows improvement as you become familiar with proof structures.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Up Your Investigation</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>The question you investigated</li>
    <li>Your data, table or graph</li>
    <li>The equation or model you wrote</li>
    <li>How you solved it, step by step</li>
    <li>How you checked your answer</li>
    <li>What your answer means in the real situation</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The first strip in most proofs is the:',
            options: ['Prove statement', 'Given', 'Trap strip', 'Last reason'],
            correct: 1,
            explanation: 'The answer is Given. Start with what is given.'
        },
        {
            question: 'Using the statement you are proving as a reason is:',
            options: ['Circular reasoning', 'Deductive reasoning', 'The Law of Syllogism', 'Valid'],
            correct: 0,
            explanation: 'It assumes what it should prove.'
        },
        {
            question: 'Each statement in a proof must be:',
            options: ['Guessed', 'Measured', 'Justified by earlier statements or accepted facts', 'Drawn only'],
            correct: 2,
            explanation: 'The answer is Justified by earlier statements or accepted facts. Every step needs a reason.'
        },
        {
            question: 'Can there be more than one valid order of steps?',
            options: ['No, never', 'Only in algebra', 'Yes, if every step is justified', 'Only for postulates'],
            correct: 2,
            explanation: 'The answer is Yes, if every step is justified. Some steps can be reordered.'
        },
        {
            question: 'Given m∠1 + m∠2 = 90° and m∠1 = 40°, m∠2 =',
            options: ['50°', '40°', '130°', '90°'],
            correct: 0,
            explanation: 'The answer is 50°. Substitute and subtract.'
        },
        {
            question: 'The final statement of a proof must match the:',
            options: ['Given', 'Prove statement', 'First reason', 'Diagram title'],
            correct: 1,
            explanation: 'End with what you set out to prove.'
        }
    ]
},
{
    name: '1.2 Quiz: Reasoning and Proof',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Reasoning and Proof</h2>
    <p style="font-size:16px;">Test your understanding of inductive and deductive reasoning, conditional statements, properties and proofs from Topic 1.2.</p>
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
    <li>Conjectures and counterexamples</li>
    <li>Conditional, converse, inverse, contrapositive and biconditional</li>
    <li>Laws of Detachment and Syllogism</li>
    <li>Properties of equality and congruence</li>
    <li>Two-column proofs</li>
    <li>Vertical angles and related theorems</li>
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
    <div>For logic questions, underline the hypothesis and conclusion first. For proof questions, ask which reason connects the statement to the one before.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a counterexample to “All odd numbers are prime”?',
            options: ['3', '5', '9', '7'],
            correct: 2,
            explanation: 'The answer is 9. 9 is odd but not prime.'
        },
        {
            question: 'The inverse of “If p, then q” is:',
            options: ['If q, then p', 'If not q, then not p', 'p if and only if q', 'If not p, then not q'],
            correct: 3,
            explanation: 'The answer is If not p, then not q. Negate both parts.'
        },
        {
            question: '“If it is a square, it has four sides” — its converse is:',
            options: ['If it is not a square, it does not have four sides', 'If it has four sides, it is a square', 'If it does not have four sides, it is not a square', 'It is a square if it has four sides only'],
            correct: 1,
            explanation: 'Switch hypothesis and conclusion.'
        },
        {
            question: 'The converse in the previous question is:',
            options: ['True', 'A definition', 'Always true', 'False'],
            correct: 3,
            explanation: 'A rectangle is a counterexample.'
        },
        {
            question: 'If p → q is true and p is true, you can conclude:',
            options: ['p is false', 'q is true', 'q is false', 'Nothing'],
            correct: 1,
            explanation: 'The answer is q is true. Law of Detachment.'
        },
        {
            question: '“If m∠1 = m∠2 and m∠2 = m∠3, then m∠1 = m∠3” uses the:',
            options: ['Transitive Property', 'Symmetric Property', 'Reflexive Property', 'Distributive Property'],
            correct: 0,
            explanation: 'The answer is Transitive Property. Equality passes along.'
        },
        {
            question: 'In a proof, going from 3x = 15 to x = 5 uses the:',
            options: ['Division Property of Equality', 'Addition Property', 'Substitution Property', 'Reflexive Property'],
            correct: 0,
            explanation: 'The answer is Division Property of Equality. Divide both sides by 3.'
        },
        {
            question: 'The Vertical Angles Theorem is proved using the:',
            options: ['Segment Addition Postulate', 'Distance formula', 'Linear Pair Postulate', 'Midpoint formula'],
            correct: 2,
            explanation: 'Each vertical angle forms a linear pair with the same angle.'
        },
        {
            question: 'Two angles each complementary to ∠X are:',
            options: ['Supplementary', 'Vertical', 'Obtuse', 'Congruent'],
            correct: 3,
            explanation: 'Congruent Complements Theorem.'
        },
        {
            question: 'Which is a valid reason in a proof?',
            options: ['“It looks equal”', '“I measured it”', 'Definition of congruent angles', '“My partner said so”'],
            correct: 2,
            explanation: 'Only definitions, properties, postulates and theorems count.'
        }
    ]
},
{
    name: '1.2 Assignment: Proof Portfolio',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Proof Portfolio</h2>
    <p style="font-size:16px;">Build a proof portfolio that shows your growth in logical reasoning: conditional statements, a logic chain, and three complete proofs of increasing difficulty.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Your portfolio must include:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A real-life conditional statement with its converse, inverse, contrapositive and truth values, and an Euler diagram.</li>
    <li>A three-statement Law of Syllogism chain about a real topic.</li>
    <li>An algebraic proof (Given 4(x + 2) − 3 = 25, prove x = 5).</li>
    <li>A segment proof (Given: A, B, C, D on a line in that order and AC = BD; prove AB = CD).</li>
    <li>An angle proof (prove the Congruent Supplements Theorem).</li>
    </ol>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>For each proof, include a labeled diagram (where relevant), the Given and Prove statements, and a short paragraph explaining the key idea in your own words.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose a real-life conditional and complete all four forms with truth values.</li>
    <li>Draw an Euler diagram for your conditional.</li>
    <li>Write a three-step syllogism and state the final conclusion.</li>
    <li>Complete the algebraic proof with every reason.</li>
    <li>Draw a diagram and complete the segment proof.</li>
    <li>Draw a diagram and complete the Congruent Supplements proof.</li>
    <li>Write a reflection on which proof was hardest and how you solved it, then submit.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Conditional statements page with an Euler diagram</li>
    <li>Syllogism chain</li>
    <li>Three complete two-column proofs with diagrams</li>
    <li>Reflection (100–150 words)</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Logic statements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All four forms correct with justified truth values and a clear diagram</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forms and truth values correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors or missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proof accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All statements and reasons correct and complete</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minor errors in one proof</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Errors in several proofs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proofs incomplete</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Logical order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every step follows clearly; final step matches the Prove statement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly logical order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some steps out of order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little logical structure</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Diagrams and notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, labeled diagrams and precise notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some notation errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful reflection on reasoning and growth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear reflection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brief reflection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Work backward from the Prove statement to plan each proof.<br>Use = for measures and lengths, ≅ for figures.<br>Check that you never use what you are proving as a reason.<br>Ask a partner to check one proof before submitting.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which proof required the most thinking, and why?</li>
    <li>How has your understanding of “proof” changed?</li>
    <li>Where else could logical reasoning help you?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many complete proofs must the portfolio include?',
            options: ['Three', 'One', 'Five', 'None'],
            correct: 0,
            explanation: 'Algebraic, segment and angle proofs.'
        },
        {
            question: 'In the algebraic proof 4(x + 2) − 3 = 25, the first step after Given uses the:',
            options: ['Reflexive Property', 'Distributive Property', 'Transitive Property', 'Linear Pair Postulate'],
            correct: 1,
            explanation: 'The answer is Distributive Property. 4x + 8 − 3 = 25.'
        },
        {
            question: 'Solving 4(x + 2) − 3 = 25 gives:',
            options: ['x = 7', 'x = 4', 'x = 5', 'x = 6'],
            correct: 2,
            explanation: 'The answer is x = 5. 4x + 5 = 25, so x = 5.'
        },
        {
            question: 'An Euler diagram for p → q shows:',
            options: ['The q region inside the p region', 'Separate regions', 'No regions', 'The p region inside the q region'],
            correct: 3,
            explanation: 'The answer is The p region inside the q region. Every p is also q.'
        },
        {
            question: 'Working backward from the Prove statement helps you:',
            options: ['Skip reasons', 'Avoid diagrams', 'Change the Given', 'Plan the steps of a proof'],
            correct: 3,
            explanation: 'It shows what you need to reach.'
        },
        {
            question: 'Which symbol is used for congruent figures?',
            options: ['=', '≈', '≅', '∥'],
            correct: 2,
            explanation: 'The answer is ≅. ≅ means congruent.'
        }
    ]
},
{
    name: '1.2 Review: Reasoning and Proof',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Reasoning and Proof</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and the whole unit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Inductive Reasoning</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Patterns → conjecture.</li>
    <li>One counterexample disproves a conjecture.</li>
    <li>Examples alone never prove.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Conditional Statements</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Conditional p → q; converse q → p.</li>
    <li>Inverse ~p → ~q; contrapositive ~q → ~p.</li>
    <li>Conditional ≡ contrapositive; biconditional = p ↔ q.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Deductive Reasoning</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Detachment: p → q, p ⇒ q.</li>
    <li>Syllogism: p → q, q → r ⇒ p → r.</li>
    <li>Properties: reflexive, symmetric, transitive, substitution.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #80cbc4;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Angle Theorems</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Linear Pair Postulate: supplementary.</li>
    <li>Vertical Angles Theorem: congruent.</li>
    <li>Congruent Supplements/Complements; all right angles congruent.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Counterexample</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One false case disproves</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 disproves “all primes are odd”</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contrapositive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">~q → ~p</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If not a mammal, then not a dog</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Law of Detachment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">p → q, p ⇒ q</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear pair → supplementary</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transitive Property</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a = b, b = c ⇒ a = c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m∠1 = m∠2 = m∠3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical Angles Theorem</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical angles ≅</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">58° and 58°</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right Angle Congruence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All right angles ≅</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">90° = 90°</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find a counterexample: “If a number is divisible by 2, it is divisible by 4.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write the contrapositive of “If a shape is a triangle, it has three angles.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If a shape does not have three angles, then it is not a triangle.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Use the Law of Syllogism: If you exercise, you sleep well. If you sleep well, you focus better.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If you exercise, you focus better.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Name the property: If AB ≅ CD, then CD ≅ AB.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Symmetric Property of Congruence.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Two vertical angles measure (5x − 12)° and (3x + 20)°. Find the measure.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 16; 68°</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> State the reason that justifies m∠1 + m∠2 = 180° when ∠1 and ∠2 form a linear pair.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Linear Pair Postulate.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can make conjectures and find counterexamples.</p>
    <p style="margin:6px 0;">☐ I can write and evaluate the four forms of a conditional.</p>
    <p style="margin:6px 0;">☐ I can use the laws of logic.</p>
    <p style="margin:6px 0;">☐ I can name properties and write two-column proofs.</p>
    <p style="margin:6px 0;">☐ I can prove and apply angle theorems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a counterexample to “If a number is divisible by 2, it is divisible by 4”?',
            options: ['8', '12', '16', '6'],
            correct: 3,
            explanation: '6 is divisible by 2 but not by 4.'
        },
        {
            question: 'A conditional is logically equivalent to its:',
            options: ['Converse', 'Inverse', 'Contrapositive', 'Negation'],
            correct: 2,
            explanation: 'They always share truth values.'
        },
        {
            question: '“If AB ≅ CD, then CD ≅ AB” is the:',
            options: ['Transitive Property', 'Reflexive Property', 'Substitution Property', 'Symmetric Property'],
            correct: 3,
            explanation: 'The answer is Symmetric Property. Congruence works both ways.'
        },
        {
            question: 'Vertical angles measure (5x − 12)° and (3x + 20)°. Each measures:',
            options: ['68°', '16°', '112°', '58°'],
            correct: 0,
            explanation: 'The answer is 68°. x = 16, 5(16) − 12 = 68.'
        },
        {
            question: 'The Law of Syllogism lets you:',
            options: ['Reverse a conditional', 'Chain two conditionals', 'Prove the converse', 'Find counterexamples'],
            correct: 1,
            explanation: 'The answer is Chain two conditionals. p → q and q → r give p → r.'
        },
        {
            question: 'Which reason is NOT valid in a proof?',
            options: ['Given', 'Definition of supplementary angles', '“It looks congruent”', 'Linear Pair Postulate'],
            correct: 2,
            explanation: 'The answer is “It looks congruent”. Appearance is not a reason.'
        }
    ]
},
{
    name: '1.2 Summary: Reasoning and Proof',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #00695c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #80cbc4;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Tools of Geometry and Reasoning · Topic 1.2 Reasoning and Proof</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #80cbc4;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Reasoning and Proof</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Inductive reasoning helps us discover patterns, but only deductive reasoning — step-by-step logic from definitions, postulates and properties — can prove that something is always true. Proven theorems then become tools for proving more.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Inductive reasoning makes conjectures; a single counterexample disproves one.</li>
    <li>A conditional and its contrapositive are equivalent; the converse and inverse may be false.</li>
    <li>Definitions are biconditionals: “if and only if.”</li>
    <li>The Laws of Detachment and Syllogism are valid forms of deductive reasoning.</li>
    <li>Properties of equality and congruence justify the steps of two-column proofs.</li>
    <li>The Linear Pair Postulate proves the Vertical Angles Theorem and related angle theorems.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Inductive Reasoning and Conditionals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conjectures, counterexamples, four forms, biconditionals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never assume the converse is true</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Deductive Reasoning and Algebraic Proof</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laws of logic, properties, two-column proofs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Give a reason for every step</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Proving Segment and Angle Theorems</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear Pair Postulate, Vertical Angles Theorem and more</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Match the final step to the Prove statement</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inductive reasoning</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">conjecture</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">counterexample</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">conditional</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">converse</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inverse</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">contrapositive</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">biconditional</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">deductive reasoning</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Law of Detachment</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Law of Syllogism</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">proof</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">theorem</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Linear Pair Postulate</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Vertical Angles Theorem</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Logical reasoning is a life skill: it helps you evaluate claims, follow rules precisely, write code and build arguments others can trust.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #80cbc4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Tools of Geometry and Reasoning. In Unit 2.0 you will study transformations — translations, reflections and rotations — and use them to define congruence.</div>
    </div>
    <div style="background:#123532;padding:20px;border-radius:12px;border:1px solid #80cbc4;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can make and test conjectures.</p>
    <p style="margin:6px 0;">✔️ I can write and evaluate conditional statements.</p>
    <p style="margin:6px 0;">✔️ I can use the Laws of Detachment and Syllogism.</p>
    <p style="margin:6px 0;">✔️ I can write two-column proofs with correct reasons.</p>
    <p style="margin:6px 0;">✔️ I can prove the Vertical Angles Theorem.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.2 is that proof requires:',
            options: ['Only examples', 'Measurement', 'Guessing', 'Deductive reasoning'],
            correct: 3,
            explanation: 'The answer is Deductive reasoning. Deduction gives certainty.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['Statistics', 'Transformations and congruence', 'Quadratics', 'Probability'],
            correct: 1,
            explanation: 'Translations, reflections and rotations.'
        },
        {
            question: 'A definition can always be written as a:',
            options: ['Counterexample', 'Conjecture', 'Biconditional', 'Converse only'],
            correct: 2,
            explanation: 'The answer is Biconditional. Definitions work both ways.'
        },
        {
            question: 'Which theorem says vertical angles are congruent?',
            options: ['Linear Pair Postulate', 'Vertical Angles Theorem', 'Right Angle Congruence Theorem', 'Segment Addition Postulate'],
            correct: 1,
            explanation: 'It was proved in Lesson 1.2.3.'
        },
        {
            question: 'One counterexample is enough to:',
            options: ['Prove a conjecture', 'Create a postulate', 'Write a definition', 'Disprove a conjecture'],
            correct: 3,
            explanation: 'A single false case breaks a general rule.'
        },
        {
            question: 'A proven statement is called a:',
            options: ['Postulate', 'Conjecture', 'Theorem', 'Hypothesis'],
            correct: 2,
            explanation: 'The answer is Theorem. Theorems are proven.'
        }
    ]
}
],
          stats:{lessons:19,exercises:128,quizzes:20,projects:2,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Which three terms are undefined in geometry?',
                  options: ['Ray, segment and angle', 'Circle, square and triangle', 'Point, line and plane', 'Midpoint, bisector and vertex'],
                  correct: 2,
                  explanation: 'Point, line and plane are described, not defined.'
              },
              {
                  question: 'Points that lie on the same line are:',
                  options: ['Coplanar only', 'Collinear', 'Congruent', 'Perpendicular'],
                  correct: 1,
                  explanation: 'Collinear means on one line.'
              },
              {
                  question: 'B is between A and C. AB = 7 and BC = 5. What is AC?',
                  options: ['12', '2', '35', '7'],
                  correct: 0,
                  explanation: 'Segment Addition Postulate: AB + BC = AC.'
              },
              {
                  question: 'Find the distance between (−2, 1) and (4, 9).',
                  options: ['10', '14', '√28', '8'],
                  correct: 0,
                  explanation: '√(6² + 8²) = √100 = 10.'
              },
              {
                  question: 'Find the midpoint of (−2, 1) and (4, 9).',
                  options: ['(3, 8)', '(1, 5)', '(2, 10)', '(6, 8)'],
                  correct: 1,
                  explanation: 'Average the coordinates: ((−2 + 4)/2, (1 + 9)/2).'
              },
              {
                  question: 'The complement of a 37° angle measures:',
                  options: ['143°', '37°', '63°', '53°'],
                  correct: 3,
                  explanation: 'Complementary angles add to 90°.'
              },
              {
                  question: 'Two angles form a linear pair. One measures 71°. The other measures:',
                  options: ['19°', '109°', '71°', '289°'],
                  correct: 1,
                  explanation: 'A linear pair is supplementary: 180 − 71.'
              },
              {
                  question: 'Vertical angles are always:',
                  options: ['Supplementary', 'Complementary', 'Right angles', 'Congruent'],
                  correct: 3,
                  explanation: 'This is the Vertical Angles Theorem.'
              },
              {
                  question: 'The converse of “If p, then q” is:',
                  options: ['If not p, then not q', 'If not q, then not p', 'If q, then p', 'p and q'],
                  correct: 2,
                  explanation: 'The converse switches the hypothesis and conclusion.'
              },
              {
                  question: 'Which statement is always logically equivalent to a conditional?',
                  options: ['Its converse', 'Its inverse', 'Its negation', 'Its contrapositive'],
                  correct: 3,
                  explanation: 'A conditional and its contrapositive have the same truth value.'
              },
              {
                  question: '“If AB = CD, then CD = AB” uses the:',
                  options: ['Symmetric Property', 'Reflexive Property', 'Transitive Property', 'Distributive Property'],
                  correct: 0,
                  explanation: 'Symmetric: if a = b, then b = a.'
              },
              {
                  question: 'Which tools are used for formal geometric constructions?',
                  options: ['A protractor and a ruler with marks', 'A calculator only', 'A compass and a straightedge', 'Graph paper only'],
                  correct: 2,
                  explanation: 'Classical constructions use only a compass and an unmarked straightedge.'
              }
          ]}
);