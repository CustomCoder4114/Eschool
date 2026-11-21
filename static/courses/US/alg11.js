// Eschool course: Algebra II (USA, high school, Common Core aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'algebra-2-us', name:'Algebra II', code:'ALG 2', level:'grade-11', iconStyle:'fas', icon:'fa-wave-square', color:'#ad1457',
          category:'Mathematics',
          description:'Think in functions: learn function notation, domain and range, the parent function families and how to transform them, then model the real world with linear, absolute value and piecewise functions.',
          longDescription:'Algebra II is a high-school mathematics course, usually taken in Grade 11, aligned to the Common Core State Standards for Mathematics. Unit 1, Functions and Transformations, builds the language of functions — function notation, domain and range in interval notation, and key features of graphs (F-IF.1, F-IF.2, F-IF.4, F-IF.5) — and studies the parent functions and how translations, reflections, stretches and compressions change them (F-BF.3). Topic 1.2 models real situations with linear functions and lines of best fit (F-LE.2, S-ID.6), solves absolute value equations and inequalities, and writes and graphs piecewise and step functions (F-IF.7b). Later units cover quadratic functions and complex numbers, polynomial functions, radical and rational functions, exponential and logarithmic functions, trigonometric functions, sequences and series, and statistics. Every lesson has worked examples, common-error warnings, leveled practice with answers, an investigation, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Functions and Transformations — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Functions and Transformations</h2>
    <p style="font-size:16px;">Welcome to Algebra II. In Algebra I you learned to solve equations and graph lines. This year you will study many kinds of functions — quadratic, polynomial, exponential, logarithmic and more — and use them to model the real world.</p>
    <p style="font-size:16px;">This first unit gives you the tools for the whole year. You will learn the language of functions, meet the “parent functions” that every other function grows from, and discover that a handful of simple moves — shifts, reflections, stretches and compressions — can turn one graph into thousands of others. Then you will use linear, absolute value and piecewise functions to model real situations.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How can a few basic functions and a few simple transformations describe so many real-world patterns?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>Topic 1.1 builds the language of functions and the idea of transformations. Topic 1.2 applies these ideas to linear, absolute value and piecewise models.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key standards</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Functions and Parent Functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Function notation, domain and range, key features of graphs, parent functions, transformations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F-IF.1, F-IF.2, F-IF.4, F-IF.5, F-BF.3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Linear, Absolute Value and Piecewise Functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modeling with linear functions and lines of best fit; absolute value equations, inequalities and graphs; piecewise and step functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F-LE.2, S-ID.6, A-CED.1, F-IF.7b</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>A free graphing calculator such as Desmos or GeoGebra is very helpful in this unit. You will use it to test predictions about transformations — but you should also be able to sketch graphs by hand.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, an investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Functions and Parent Functions <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Families of Functions</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Functions, Domain and Range</li>
    <li>1.1.2 Parent Functions and Key Features</li>
    <li>1.1.3 Transformations of Functions</li>
    <li>🧭 Investigation: Transformation Explorer</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Linear, Absolute Value and Piecewise Functions <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Modeling Change</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Modeling with Linear Functions</li>
    <li>1.2.2 Absolute Value Functions, Equations and Inequalities</li>
    <li>1.2.3 Piecewise and Step Functions</li>
    <li>🧭 Investigation: Which Plan Is Best?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Understanding functions (F-IF.1, F-IF.2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using function notation and evaluating functions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpreting key features (F-IF.4, F-IF.5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describing intercepts, intervals of increase and decrease, maximums, minimums and domain in context.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building new functions (F-BF.3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifying the effect of replacing f(x) by f(x) + k, k·f(x), f(kx) and f(x + k).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear models (F-LE.2, S-ID.6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing linear functions and fitting lines to data.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphing special functions (F-IF.7b)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphing absolute value, piecewise and step functions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mathematical practices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modeling with mathematics, looking for structure and using tools strategically.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Collaboration</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data and technology</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Problem solving</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a “function family album”: one page per parent function, with its graph, domain, range, key points and a real-world example. You will add new families all year.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The main focus of this unit is:',
            options: ['Functions and how to transform them', 'Proving triangle congruence', 'Balancing chemical equations', 'Writing essays'],
            correct: 0,
            explanation: 'Functions and transformations.'
        },
        {
            question: 'Topic 1.2 studies:',
            options: ['Only quadratic functions', 'Linear, absolute value and piecewise functions', 'Trigonometry only', 'Probability only'],
            correct: 1,
            explanation: 'The answer is Linear, absolute value and piecewise functions. Three types of models.'
        },
        {
            question: 'F-BF.3 is about:',
            options: ['The effect of transformations on graphs', 'Spelling', 'Map reading', 'Cell biology'],
            correct: 0,
            explanation: 'Building new functions from old.'
        },
        {
            question: 'A graphing tool such as Desmos helps you:',
            options: ['Avoid learning', 'Test predictions about graphs', 'Write essays', 'Skip sketching'],
            correct: 1,
            explanation: 'Use it to check your thinking.'
        },
        {
            question: 'The function family album records:',
            options: ['Your test scores', 'Your favorite songs', 'Book titles', 'Each parent function’s graph and features'],
            correct: 3,
            explanation: 'The answer is Each parent function’s graph and features. One page per family.'
        },
        {
            question: 'This unit prepares you for:',
            options: ['Only Geometry', 'Only Chemistry', 'All the function families studied later this year', 'Nothing else'],
            correct: 2,
            explanation: 'It is the foundation of Algebra II.'
        }
    ]
},
{
    name: '1.0 Functions and Transformations — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives come from the Common Core State Standards for Mathematics for high school. Read them now and check your progress at the end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Understand that a function assigns exactly one output to each input, and use function notation. (F-IF.1, F-IF.2)</li>
    <li>Interpret key features of graphs and tables in terms of quantities, and relate domain to context. (F-IF.4, F-IF.5)</li>
    <li>Identify the effect on a graph of replacing f(x) by f(x) + k, k·f(x), f(kx) and f(x + k). (F-BF.3)</li>
    <li>Construct linear functions from graphs, descriptions or tables and fit linear models to data. (F-LE.2, S-ID.6)</li>
    <li>Create and solve equations and inequalities in one variable, including absolute value. (A-CED.1)</li>
    <li>Graph absolute value, piecewise and step functions. (F-IF.7b)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Functions and Parent Functions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Decide whether a relation is a function.</li>
    <li>Evaluate functions and write domain and range in interval notation.</li>
    <li>Identify parent functions and their key features.</li>
    <li>Describe and graph transformations.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How can one graph become many others?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Linear, Absolute Value and Piecewise Functions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write and interpret linear models and lines of best fit.</li>
    <li>Solve absolute value equations and inequalities.</li>
    <li>Graph absolute value functions in vertex form.</li>
    <li>Write and graph piecewise and step functions.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Which function best models a situation — and how do we know?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You move fluently between equations, tables, graphs and words, explain transformations precisely and build accurate models of new situations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You evaluate and graph functions accurately, describe transformations correctly and solve modeling problems.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You can graph and evaluate with support but make errors with direction of shifts or domain.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You can plot points but struggle to connect equations and graphs.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A function can be shown four ways: words, a table, a graph and an equation. Learn to move between all four.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'F-IF.2 involves:',
            options: ['Using and evaluating function notation', 'Graphing circles', 'Solving proofs', 'Writing essays'],
            correct: 0,
            explanation: 'The answer is Using and evaluating function notation. f(x) notation.'
        },
        {
            question: 'F-IF.7b involves graphing:',
            options: ['Only lines', 'Absolute value, piecewise and step functions', 'Only circles', 'Bar charts only'],
            correct: 1,
            explanation: 'The answer is Absolute value, piecewise and step functions. Special functions.'
        },
        {
            question: 'The four representations of a function are:',
            options: ['Only a graph', 'Only an equation', 'Only a table', 'Words, table, graph and equation'],
            correct: 3,
            explanation: 'The answer is Words, table, graph and equation. Move between all four.'
        },
        {
            question: 'At the Proficient (3) level you:',
            options: ['Only plot points', 'Describe transformations correctly', 'Guess answers', 'Avoid graphs'],
            correct: 1,
            explanation: 'The answer is Describe transformations correctly. Accurate work.'
        },
        {
            question: 'Topic 1.2’s essential question asks:',
            options: ['Which function best models a situation', 'Who wrote a poem', 'How cells divide', 'What year a war began'],
            correct: 0,
            explanation: 'The answer is Which function best models a situation. Modeling is central.'
        },
        {
            question: 'S-ID.6 is about:',
            options: ['Spelling', 'Triangle proofs', 'Fitting functions to data', 'Chemistry'],
            correct: 2,
            explanation: 'The answer is Fitting functions to data. Lines of best fit.'
        }
    ]
},
{
    name: '1.0 Functions and Transformations — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: Functions Are Everywhere</h2>
    <p style="font-size:16px;">Your phone bill depends on the data you use. A ride’s cost depends on the distance. The temperature depends on the time of day. Your shipping cost depends on the package’s weight. Each of these is a function: one quantity depends on another.</p>
    <p style="font-size:16px;">Here is the surprising part: most of the graphs you will ever meet are just a few basic shapes — a line, a V, a U, a curve — that have been moved, flipped or stretched. Learn the basic shapes and the moves, and you can read almost any graph.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔁 Input → Rule → Output</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Input (x)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Output f(x)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 miles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">cost = 2.50 + 1.75 × miles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">$7.75</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 hours</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">pay = 15 × hours</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">$30</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10 °C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">°F = 1.8 × °C + 32</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">50 °F</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Your Function Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">function</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">f(x)</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">domain</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">range</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">interval notation</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">intercept</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">increasing</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">decreasing</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">parent function</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">translation</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">reflection</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stretch</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compression</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertex</span><span style="background:#0b1a2e;border:1px solid #f48fb1;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">piecewise</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Warm-Up (5 minutes)</h3>
    <p>Graph y = x and y = x + 3 on the same axes. What is the same? What is different? Now predict what y = x − 2 will look like before you graph it.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📱 Spot It Now</h3>
    <p>Name three things in your daily life where one quantity depends on another. For each, which is the input and which is the output?</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Open a free graphing calculator (such as Desmos) and keep it ready. Bring graph paper and start your function family album with the line y = x.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'In a function, the output:',
            options: ['Is always zero', 'Is chosen randomly', 'Has no connection to the input', 'Depends on the input'],
            correct: 3,
            explanation: 'One quantity depends on another.'
        },
        {
            question: 'For the ride rule cost = 2.50 + 1.75 × miles, a 3-mile ride costs:',
            options: ['$5.25', '$8.25', '$7.75', '$4.25'],
            correct: 2,
            explanation: 'The answer is $7.75. 2.50 + 5.25 = 7.75.'
        },
        {
            question: 'Compared with y = x, the graph of y = x + 3 is:',
            options: ['Shifted up 3', 'Shifted down 3', 'Steeper', 'Flipped'],
            correct: 0,
            explanation: 'The answer is Shifted up 3. Every output increases by 3.'
        },
        {
            question: 'Most graphs you meet are:',
            options: ['Basic shapes that have been transformed', 'Completely random', 'Always straight lines', 'Impossible to read'],
            correct: 0,
            explanation: 'The answer is Basic shapes that have been transformed. Parent functions plus moves.'
        },
        {
            question: 'Converting 10 °C to Fahrenheit gives:',
            options: ['18 °F', '50 °F', '42 °F', '32 °F'],
            correct: 1,
            explanation: 'The answer is 50 °F. 1.8(10) + 32 = 50.'
        },
        {
            question: 'f(x) is read as:',
            options: ['“f times x”', '“f plus x”', '“f of x”', '“f divided by x”'],
            correct: 2,
            explanation: 'The answer is “f of x”. Function notation.'
        }
    ]
},
{
    name: '1.1.1 Functions, Domain and Range',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Families of Functions</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Functions, Domain and Range</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what makes a relation a function, use function notation to evaluate and interpret functions, and describe domain and range using inequalities and interval notation.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Functions are the main idea of Algebra II and of all higher mathematics. Spreadsheets, apps and scientific models all work by taking inputs and producing outputs.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 App and phone plans</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Weather forecasts</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Spreadsheets and coding</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Fuel and distance</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💰 Wages and taxes</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Science experiments</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Understand functions and use function notation. (F-IF.1, F-IF.2)</li>
    <li>Interpret key features of graphs and relate the domain to its context. (F-IF.4, F-IF.5)</li>
    <li>Identify parent functions and their key features. (F-IF.7)</li>
    <li>Identify the effect of transformations on a graph. (F-BF.3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Decide whether a relation is a function using tables, mapping diagrams and graphs.</li>
    <li>Evaluate and interpret f(x) notation.</li>
    <li>Find the domain and range of a function from a graph.</li>
    <li>Write domain and range in inequality and interval notation.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> What makes a relationship between two quantities a function?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Algebra I you graphed linear equations and worked with tables of values. Now you will describe these relationships with the more general idea of a function.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>relation</strong> is any set of input–output pairs. A <strong>function</strong> is a special relation in which <strong>each input has exactly one output</strong>. A vending machine is a good model: if you press button B4, you should always get the same snack. If pressing B4 sometimes gave chips and sometimes gave a drink, the machine would not be a function.</p>
    <p>We write functions with <strong>function notation</strong>: f(x), read “f of x.” If f(x) = 3x + 2, then f(5) means “the output when the input is 5,” so f(5) = 3(5) + 2 = 17. The set of all possible inputs is the <strong>domain</strong>, and the set of all outputs is the <strong>range</strong>.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Function = one input, one output. Domain = allowed inputs. Range = resulting outputs.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The word “function” was first used in mathematics by Gottfried Wilhelm Leibniz in the 1670s–1690s, and the notation f(x) was popularized by Leonhard Euler in 1734. Today the idea of a function is used in every branch of mathematics and in computer programming, where a “function” takes inputs and returns an output.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">function</strong>
    </p>
    <p style="margin:6px 0;">A relation in which each input has exactly one output.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> f, g, h</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = 2x + 1 is a function.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">function notation</strong>
    </p>
    <p style="margin:6px 0;">A way to name a function and its input.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> f(x)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>f(4) is the output when x = 4.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">domain</strong>
    </p>
    <p style="margin:6px 0;">The set of all possible input values.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x-values</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The domain of f(x) = √x is x ≥ 0.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">range</strong>
    </p>
    <p style="margin:6px 0;">The set of all possible output values.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> y-values</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The range of f(x) = x² is y ≥ 0.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">interval notation</strong>
    </p>
    <p style="margin:6px 0;">A way to write a set of numbers using brackets and parentheses.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> [a, b], (a, b), [a, ∞)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x ≥ 3 is written [3, ∞).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertical line test</strong>
    </p>
    <p style="margin:6px 0;">A graph is a function if no vertical line crosses it more than once.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> graph test</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A circle fails the vertical line test.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Is It a Function?</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 250" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="24" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Function or Not? Mapping Diagrams</text><text x="180" y="52" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">Function ✓</text><ellipse cx="100" cy="140" rx="46" ry="76" fill="#10233d" stroke="#f48fb1" stroke-width="2"/><ellipse cx="260" cy="140" rx="46" ry="76" fill="#10233d" stroke="#f48fb1" stroke-width="2"/><text x="100" y="232" fill="#94a3b8" font-size="11" text-anchor="middle">inputs</text><text x="260" y="232" fill="#94a3b8" font-size="11" text-anchor="middle">outputs</text><text x="100" y="100" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1</text><text x="100" y="140" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">2</text><text x="100" y="180" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">3</text><text x="260" y="100" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">4</text><text x="260" y="140" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">7</text><text x="260" y="180" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">9</text><line x1="114" y1="95" x2="235.0" y2="95.0" stroke="#94a3b8" stroke-width="1.8"/><polygon points="244,95 235.0,99.0 235.0,91.0" fill="#94a3b8"/><line x1="114" y1="135" x2="235.0" y2="135.0" stroke="#94a3b8" stroke-width="1.8"/><polygon points="244,135 235.0,139.0 235.0,131.0" fill="#94a3b8"/><line x1="114" y1="175" x2="235.4" y2="137.6" stroke="#94a3b8" stroke-width="1.8"/><polygon points="244,135 236.6,141.5 234.2,133.8" fill="#94a3b8"/><text x="520" y="52" fill="#fca5a5" font-size="14" font-weight="bold" text-anchor="middle">Not a function ✗</text><ellipse cx="440" cy="140" rx="46" ry="76" fill="#10233d" stroke="#f48fb1" stroke-width="2"/><ellipse cx="600" cy="140" rx="46" ry="76" fill="#10233d" stroke="#f48fb1" stroke-width="2"/><text x="440" y="232" fill="#94a3b8" font-size="11" text-anchor="middle">inputs</text><text x="600" y="232" fill="#94a3b8" font-size="11" text-anchor="middle">outputs</text><text x="440" y="100" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">1</text><text x="440" y="140" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">2</text><text x="440" y="180" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">3</text><text x="600" y="100" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">4</text><text x="600" y="140" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">7</text><text x="600" y="180" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">9</text><line x1="454" y1="95" x2="575.0" y2="95.0" stroke="#94a3b8" stroke-width="1.8"/><polygon points="584,95 575.0,99.0 575.0,91.0" fill="#94a3b8"/><line x1="454" y1="95" x2="576.3" y2="170.3" stroke="#94a3b8" stroke-width="1.8"/><polygon points="584,175 574.2,173.7 578.4,166.9" fill="#94a3b8"/><line x1="454" y1="135" x2="575.0" y2="135.0" stroke="#94a3b8" stroke-width="1.8"/><polygon points="584,135 575.0,139.0 575.0,131.0" fill="#94a3b8"/><line x1="454" y1="175" x2="575.4" y2="137.6" stroke="#94a3b8" stroke-width="1.8"/><polygon points="584,135 576.6,141.5 574.2,133.8" fill="#94a3b8"/>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Representation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How to test</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Table or ordered pairs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check that no input (x) is repeated with a different output (y).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mapping diagram</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Each input has only one arrow leaving it.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the vertical line test.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve for y; if one x can give two y-values (such as y² = x), it is not a function.</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><g transform="translate(0,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Passes the vertical line test</text><line x1="40" y1="40" x2="40" y2="270" stroke="#1e293b"/><line x1="75.5" y1="40" x2="75.5" y2="270" stroke="#1e293b"/><line x1="111" y1="40" x2="111" y2="270" stroke="#1e293b"/><line x1="146.5" y1="40" x2="146.5" y2="270" stroke="#1e293b"/><line x1="182" y1="40" x2="182" y2="270" stroke="#1e293b"/><line x1="217.5" y1="40" x2="217.5" y2="270" stroke="#1e293b"/><line x1="253" y1="40" x2="253" y2="270" stroke="#1e293b"/><line x1="288.5" y1="40" x2="288.5" y2="270" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="270" stroke="#1e293b"/><line x1="40" y1="270" x2="324" y2="270" stroke="#1e293b"/><line x1="40" y1="247" x2="324" y2="247" stroke="#1e293b"/><line x1="40" y1="224" x2="324" y2="224" stroke="#1e293b"/><line x1="40" y1="201" x2="324" y2="201" stroke="#1e293b"/><line x1="40" y1="178" x2="324" y2="178" stroke="#1e293b"/><line x1="40" y1="155" x2="324" y2="155" stroke="#1e293b"/><line x1="40" y1="132" x2="324" y2="132" stroke="#1e293b"/><line x1="40" y1="109" x2="324" y2="109" stroke="#1e293b"/><line x1="40" y1="86" x2="324" y2="86" stroke="#1e293b"/><line x1="40" y1="63" x2="324" y2="63" stroke="#1e293b"/><line x1="40" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="40" y1="224" x2="324" y2="224" stroke="#94a3b8" stroke-width="1.5"/><line x1="182" y1="40" x2="182" y2="270" stroke="#94a3b8" stroke-width="1.5"/><text x="40" y="238" fill="#94a3b8" font-size="10" text-anchor="middle">-4</text><text x="111" y="238" fill="#94a3b8" font-size="10" text-anchor="middle">-2</text><text x="253" y="238" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="324" y="238" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="177" y="273" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="177" y="181" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="177" y="135" fill="#94a3b8" font-size="10" text-anchor="end">4</text><text x="177" y="89" fill="#94a3b8" font-size="10" text-anchor="end">6</text><text x="177" y="43" fill="#94a3b8" font-size="10" text-anchor="end">8</text><polyline points="40.0,40.0 41.4,43.7 42.8,47.3 44.3,50.9 45.7,54.4 47.1,57.9 48.5,61.4 49.9,64.9 51.4,68.3 52.8,71.6 54.2,75.0 55.6,78.3 57.0,81.5 58.5,84.7 59.9,87.9 61.3,91.1 62.7,94.2 64.1,97.2 65.6,100.3 67.0,103.3 68.4,106.2 69.8,109.2 71.2,112.1 72.7,114.9 74.1,117.7 75.5,120.5 76.9,123.2 78.3,125.9 79.8,128.6 81.2,131.2 82.6,133.8 84.0,136.4 85.4,138.9 86.9,141.4 88.3,143.8 89.7,146.3 91.1,148.6 92.5,151.0 94.0,153.3 95.4,155.5 96.8,157.8 98.2,159.9 99.6,162.1 101.1,164.2 102.5,166.3 103.9,168.3 105.3,170.3 106.7,172.3 108.2,174.2 109.6,176.1 111.0,178.0 112.4,179.8 113.8,181.6 115.3,183.4 116.7,185.1 118.1,186.7 119.5,188.4 120.9,190.0 122.4,191.5 123.8,193.1 125.2,194.6 126.6,196.0 128.0,197.4 129.5,198.8 130.9,200.2 132.3,201.5 133.7,202.7 135.1,204.0 136.6,205.2 138.0,206.3 139.4,207.4 140.8,208.5 142.2,209.6 143.7,210.6 145.1,211.6 146.5,212.5 147.9,213.4 149.3,214.3 150.8,215.1 152.2,215.9 153.6,216.6 155.0,217.4 156.4,218.0 157.9,218.7 159.3,219.3 160.7,219.9 162.1,220.4 163.5,220.9 165.0,221.4 166.4,221.8 167.8,222.2 169.2,222.5 170.6,222.8 172.1,223.1 173.5,223.3 174.9,223.5 176.3,223.7 177.7,223.8 179.2,223.9 180.6,224.0 182.0,224.0 183.4,224.0 184.8,223.9 186.3,223.8 187.7,223.7 189.1,223.5 190.5,223.3 191.9,223.1 193.4,222.8 194.8,222.5 196.2,222.2 197.6,221.8 199.0,221.4 200.5,220.9 201.9,220.4 203.3,219.9 204.7,219.3 206.1,218.7 207.6,218.0 209.0,217.4 210.4,216.6 211.8,215.9 213.2,215.1 214.7,214.3 216.1,213.4 217.5,212.5 218.9,211.6 220.3,210.6 221.8,209.6 223.2,208.5 224.6,207.4 226.0,206.3 227.4,205.2 228.9,204.0 230.3,202.7 231.7,201.5 233.1,200.2 234.5,198.8 236.0,197.4 237.4,196.0 238.8,194.6 240.2,193.1 241.6,191.5 243.1,190.0 244.5,188.4 245.9,186.7 247.3,185.1 248.7,183.4 250.2,181.6 251.6,179.8 253.0,178.0 254.4,176.1 255.8,174.2 257.3,172.3 258.7,170.3 260.1,168.3 261.5,166.3 262.9,164.2 264.4,162.1 265.8,159.9 267.2,157.8 268.6,155.5 270.0,153.3 271.5,151.0 272.9,148.6 274.3,146.3 275.7,143.8 277.1,141.4 278.6,138.9 280.0,136.4 281.4,133.8 282.8,131.2 284.2,128.6 285.7,125.9 287.1,123.2 288.5,120.5 289.9,117.7 291.3,114.9 292.8,112.1 294.2,109.2 295.6,106.2 297.0,103.3 298.4,100.3 299.9,97.2 301.3,94.2 302.7,91.1 304.1,87.9 305.5,84.7 307.0,81.5 308.4,78.3 309.8,75.0 311.2,71.6 312.6,68.3 314.1,64.9 315.5,61.4 316.9,57.9 318.3,54.4 319.7,50.9 321.2,47.3 322.6,43.7 324.0,40.0" fill="none" stroke="#86efac" stroke-width="3"/></g><line x1="217.5" y1="40" x2="217.5" y2="270" stroke="#fde68a" stroke-width="2" stroke-dasharray="6 4"/><g transform="translate(360,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Fails the vertical line test</text><line x1="40" y1="40" x2="40" y2="270" stroke="#1e293b"/><line x1="71.55555555555556" y1="40" x2="71.55555555555556" y2="270" stroke="#1e293b"/><line x1="103.11111111111111" y1="40" x2="103.11111111111111" y2="270" stroke="#1e293b"/><line x1="134.66666666666666" y1="40" x2="134.66666666666666" y2="270" stroke="#1e293b"/><line x1="166.22222222222223" y1="40" x2="166.22222222222223" y2="270" stroke="#1e293b"/><line x1="197.77777777777777" y1="40" x2="197.77777777777777" y2="270" stroke="#1e293b"/><line x1="229.33333333333331" y1="40" x2="229.33333333333331" y2="270" stroke="#1e293b"/><line x1="260.8888888888889" y1="40" x2="260.8888888888889" y2="270" stroke="#1e293b"/><line x1="292.44444444444446" y1="40" x2="292.44444444444446" y2="270" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="270" stroke="#1e293b"/><line x1="40" y1="270" x2="324" y2="270" stroke="#1e293b"/><line x1="40" y1="241.25" x2="324" y2="241.25" stroke="#1e293b"/><line x1="40" y1="212.5" x2="324" y2="212.5" stroke="#1e293b"/><line x1="40" y1="183.75" x2="324" y2="183.75" stroke="#1e293b"/><line x1="40" y1="155" x2="324" y2="155" stroke="#1e293b"/><line x1="40" y1="126.25" x2="324" y2="126.25" stroke="#1e293b"/><line x1="40" y1="97.5" x2="324" y2="97.5" stroke="#1e293b"/><line x1="40" y1="68.75" x2="324" y2="68.75" stroke="#1e293b"/><line x1="40" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="40" y1="155" x2="324" y2="155" stroke="#94a3b8" stroke-width="1.5"/><line x1="71.55555555555556" y1="40" x2="71.55555555555556" y2="270" stroke="#94a3b8" stroke-width="1.5"/><text x="134.66666666666666" y="169" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="197.77777777777777" y="169" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="260.8888888888889" y="169" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="324" y="169" fill="#94a3b8" font-size="10" text-anchor="middle">8</text><text x="66.55555555555556" y="273" fill="#94a3b8" font-size="10" text-anchor="end">-4</text><text x="66.55555555555556" y="215.5" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="66.55555555555556" y="100.5" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="66.55555555555556" y="43" fill="#94a3b8" font-size="10" text-anchor="end">4</text><polyline points="71.6,155.0 72.8,149.3 74.1,146.9 75.3,145.0 76.6,143.5 77.9,142.1 79.1,140.9 80.4,139.8 81.7,138.7 82.9,137.8 84.2,136.8 85.4,135.9 86.7,135.1 88.0,134.3 89.2,133.5 90.5,132.7 91.8,132.0 93.0,131.3 94.3,130.6 95.5,129.9 96.8,129.3 98.1,128.7 99.3,128.0 100.6,127.4 101.8,126.8 103.1,126.3 104.4,125.7 105.6,125.1 106.9,124.6 108.2,124.0 109.4,123.5 110.7,123.0 111.9,122.5 113.2,122.0 114.5,121.5 115.7,121.0 117.0,120.5 118.3,120.0 119.5,119.6 120.8,119.1 122.0,118.6 123.3,118.2 124.6,117.7 125.8,117.3 127.1,116.9 128.4,116.4 129.6,116.0 130.9,115.6 132.1,115.2 133.4,114.8 134.7,114.3 135.9,113.9 137.2,113.5 138.5,113.1 139.7,112.7 141.0,112.4 142.2,112.0 143.5,111.6 144.8,111.2 146.0,110.8 147.3,110.5 148.6,110.1 149.8,109.7 151.1,109.4 152.3,109.0 153.6,108.6 154.9,108.3 156.1,107.9 157.4,107.6 158.6,107.2 159.9,106.9 161.2,106.5 162.4,106.2 163.7,105.9 165.0,105.5 166.2,105.2 167.5,104.9 168.7,104.5 170.0,104.2 171.3,103.9 172.5,103.6 173.8,103.3 175.1,102.9 176.3,102.6 177.6,102.3 178.8,102.0 180.1,101.7 181.4,101.4 182.6,101.1 183.9,100.8 185.2,100.5 186.4,100.1 187.7,99.8 188.9,99.5 190.2,99.3 191.5,99.0 192.7,98.7 194.0,98.4 195.3,98.1 196.5,97.8 197.8,97.5 199.0,97.2 200.3,96.9 201.6,96.6 202.8,96.4 204.1,96.1 205.4,95.8 206.6,95.5 207.9,95.2 209.1,95.0 210.4,94.7 211.7,94.4 212.9,94.1 214.2,93.9 215.4,93.6 216.7,93.3 218.0,93.1 219.2,92.8 220.5,92.5 221.8,92.3 223.0,92.0 224.3,91.8 225.5,91.5 226.8,91.2 228.1,91.0 229.3,90.7 230.6,90.5 231.9,90.2 233.1,89.9 234.4,89.7 235.6,89.4 236.9,89.2 238.2,88.9 239.4,88.7 240.7,88.4 242.0,88.2 243.2,87.9 244.5,87.7 245.7,87.5 247.0,87.2 248.3,87.0 249.5,86.7 250.8,86.5 252.1,86.2 253.3,86.0 254.6,85.8 255.8,85.5 257.1,85.3 258.4,85.0 259.6,84.8 260.9,84.6 262.2,84.3 263.4,84.1 264.7,83.9 265.9,83.6 267.2,83.4 268.5,83.2 269.7,83.0 271.0,82.7 272.2,82.5 273.5,82.3 274.8,82.0 276.0,81.8 277.3,81.6 278.6,81.4 279.8,81.1 281.1,80.9 282.3,80.7 283.6,80.5 284.9,80.3 286.1,80.0 287.4,79.8 288.7,79.6 289.9,79.4 291.2,79.2 292.4,78.9 293.7,78.7 295.0,78.5 296.2,78.3 297.5,78.1 298.8,77.9 300.0,77.6 301.3,77.4 302.5,77.2 303.8,77.0 305.1,76.8 306.3,76.6 307.6,76.4 308.9,76.2 310.1,76.0 311.4,75.7 312.6,75.5 313.9,75.3 315.2,75.1 316.4,74.9 317.7,74.7 319.0,74.5 320.2,74.3 321.5,74.1 322.7,73.9 324.0,73.7" fill="none" stroke="#fca5a5" stroke-width="3"/><polyline points="71.6,155.0 72.8,160.8 74.1,163.1 75.3,165.0 76.6,166.5 77.9,167.9 79.1,169.1 80.4,170.2 81.7,171.3 82.9,172.3 84.2,173.2 85.4,174.1 86.7,174.9 88.0,175.7 89.2,176.5 90.5,177.3 91.8,178.0 93.0,178.7 94.3,179.4 95.5,180.1 96.8,180.7 98.1,181.3 99.3,182.0 100.6,182.6 101.8,183.2 103.1,183.8 104.4,184.3 105.6,184.9 106.9,185.4 108.2,186.0 109.4,186.5 110.7,187.0 111.9,187.5 113.2,188.0 114.5,188.5 115.7,189.0 117.0,189.5 118.3,190.0 119.5,190.4 120.8,190.9 122.0,191.4 123.3,191.8 124.6,192.3 125.8,192.7 127.1,193.1 128.4,193.6 129.6,194.0 130.9,194.4 132.1,194.8 133.4,195.3 134.7,195.7 135.9,196.1 137.2,196.5 138.5,196.9 139.7,197.3 141.0,197.6 142.2,198.0 143.5,198.4 144.8,198.8 146.0,199.2 147.3,199.5 148.6,199.9 149.8,200.3 151.1,200.6 152.3,201.0 153.6,201.4 154.9,201.7 156.1,202.1 157.4,202.4 158.6,202.8 159.9,203.1 161.2,203.5 162.4,203.8 163.7,204.1 165.0,204.5 166.2,204.8 167.5,205.1 168.7,205.5 170.0,205.8 171.3,206.1 172.5,206.4 173.8,206.8 175.1,207.1 176.3,207.4 177.6,207.7 178.8,208.0 180.1,208.3 181.4,208.6 182.6,208.9 183.9,209.2 185.2,209.5 186.4,209.9 187.7,210.2 188.9,210.5 190.2,210.7 191.5,211.0 192.7,211.3 194.0,211.6 195.3,211.9 196.5,212.2 197.8,212.5 199.0,212.8 200.3,213.1 201.6,213.4 202.8,213.6 204.1,213.9 205.4,214.2 206.6,214.5 207.9,214.8 209.1,215.0 210.4,215.3 211.7,215.6 212.9,215.9 214.2,216.1 215.4,216.4 216.7,216.7 218.0,216.9 219.2,217.2 220.5,217.5 221.8,217.7 223.0,218.0 224.3,218.3 225.5,218.5 226.8,218.8 228.1,219.0 229.3,219.3 230.6,219.5 231.9,219.8 233.1,220.1 234.4,220.3 235.6,220.6 236.9,220.8 238.2,221.1 239.4,221.3 240.7,221.6 242.0,221.8 243.2,222.1 244.5,222.3 245.7,222.5 247.0,222.8 248.3,223.0 249.5,223.3 250.8,223.5 252.1,223.8 253.3,224.0 254.6,224.2 255.8,224.5 257.1,224.7 258.4,225.0 259.6,225.2 260.9,225.4 262.2,225.7 263.4,225.9 264.7,226.1 265.9,226.4 267.2,226.6 268.5,226.8 269.7,227.0 271.0,227.3 272.2,227.5 273.5,227.7 274.8,228.0 276.0,228.2 277.3,228.4 278.6,228.6 279.8,228.9 281.1,229.1 282.3,229.3 283.6,229.5 284.9,229.8 286.1,230.0 287.4,230.2 288.7,230.4 289.9,230.6 291.2,230.8 292.4,231.1 293.7,231.3 295.0,231.5 296.2,231.7 297.5,231.9 298.8,232.1 300.0,232.4 301.3,232.6 302.5,232.8 303.8,233.0 305.1,233.2 306.3,233.4 307.6,233.6 308.9,233.8 310.1,234.0 311.4,234.3 312.6,234.5 313.9,234.7 315.2,234.9 316.4,235.1 317.7,235.3 319.0,235.5 320.2,235.7 321.5,235.9 322.7,236.1 324.0,236.3" fill="none" stroke="#fca5a5" stroke-width="3"/></g><line x1="557.7777777777778" y1="40" x2="557.7777777777778" y2="270" stroke="#fde68a" stroke-width="2" stroke-dasharray="6 4"/>
    </svg>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Two different inputs may share the same output — that is still a function. The problem is one input with two outputs.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Function Notation</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Function notation</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">f(x) = rule;   f(a) = output when x = a</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> f names the function; x is the input; f(x) is the output.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Evaluating, comparing and interpreting functions.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Reading f(x) as “f times x.” It means “f of x.”</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Replace every x in the rule with the input, in parentheses.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Evaluating and interpreting (F-IF.2)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A streaming service charges C(m) = 12m + 5 dollars for m months, including a one-time $5 setup fee. Find C(6) and explain its meaning. Then solve C(m) = 101.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Evaluate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">C(6) = 12(6) + 5 = 72 + 5 = 77</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Interpret</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Six months of service cost $77 in total.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Set up</strong>
    </p>
    <div style="margin:6px 0 0 34px;">12m + 5 = 101</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">12m = 96, so m = 8</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> C(6) = 77, so six months cost $77; C(m) = 101 when m = 8, so $101 buys eight months.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> f(a) asks for an output; f(x) = b asks for the input that gives a certain output.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Confusing “find C(6)” (substitute 6) with “find m when C(m) = 6” (solve).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Domain and Range</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Words</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inequality</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Interval notation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All real numbers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−∞ … ∞</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x is at least 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≥ 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[3, ∞)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x is greater than −2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x &gt; −2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2, ∞)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x is between 0 and 5, including both</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 ≤ x ≤ 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[0, 5]</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x is between 1 and 4, including 1 but not 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 ≤ x &lt; 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[1, 4)</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Square brackets [ ] mean the endpoint is included; parentheses ( ) mean it is not. Infinity always gets a parenthesis, because it is not a number you can reach.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Domain in context (F-IF.5)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A school club sells T-shirts for $15 each and has 40 shirts. Let R(n) = 15n be the revenue for n shirts sold. What is a reasonable domain and range?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Inputs</strong>
    </p>
    <div style="margin:6px 0 0 34px;">n must be a whole number from 0 to 40.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Domain</strong>
    </p>
    <div style="margin:6px 0 0 34px;">{0, 1, 2, …, 40}</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Outputs</strong>
    </p>
    <div style="margin:6px 0 0 34px;">R goes from 15(0) = 0 to 15(40) = 600 in steps of 15.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Range</strong>
    </p>
    <div style="margin:6px 0 0 34px;">{0, 15, 30, …, 600}</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Domain: whole numbers 0 to 40; range: multiples of 15 from 0 to 600.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> In real situations, the domain is limited by what makes sense — you cannot sell 2.5 shirts or −3 shirts.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is {(1, 2), (2, 3), (1, 5)} a function?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — the input 1 has two outputs.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> If g(x) = x² − 4, find g(−3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(−3)² − 4 = 9 − 4 = 5.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Write x ≤ 7 in interval notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(−∞, 7]</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using precise notation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Testing definitions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting in context</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Moving between representations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Attending to precision</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>The most common errors with functions are notation errors: treating f(x) as multiplication, forgetting parentheses when substituting negative numbers, and mixing up brackets and parentheses in interval notation. Another common error is giving a mathematical domain (all real numbers) when the context limits it, such as time that cannot be negative.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Can a function have the same output for every input? Can it have a different output for every input? Give an example of each.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #f48fb1;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> A spreadsheet formula such as =15*A2 is a function: each input in column A produces exactly one output.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists model the amount of carbon dioxide in the air as a function of time, using measurements recorded since 1958 at Mauna Loa, Hawaii.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Programmers write functions that take inputs and return outputs; engineers and economists model costs, forces and demand as functions.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> If f(x) = 4 − 2x, find f(3).</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Substitute 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4 − 6 = −2.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is the domain of f(x) = 1/x?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: You cannot divide by zero.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All real numbers except 0.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Write −1 ≤ x ≤ 6 in interval notation.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Both endpoints included.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">[−1, 6]</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a list of five real-life relations and decide whether each is a function (for example, “student → birthday” and “birthday → student”).</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each partner draws three graphs; the other uses the vertical line test to decide which are functions.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a “function machine” card game: one student chooses a secret rule, others give inputs and guess the rule from the outputs.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>In a graphing calculator, type f(x) = x² − 3 and then type f(2), f(−2) and f(0.5). Check the outputs by hand.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Is y = 3x − 7 a function?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — every x gives exactly one y.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> If h(x) = x + 9, find h(−4).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find the domain and range of f(x) = √(x − 2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Domain [2, ∞); range [0, ∞).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> If f(x) = 2x² − x, find f(−1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2(1) − (−1) = 3.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f48fb1;">
    <p style="margin:0 0 6px 0;color:#f48fb1;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> If f(x) = 5x − 8 and f(a) = 17, find a.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5a − 8 = 17, so a = 5.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A taxi charges T(d) = 3.50 + 2.25d dollars for d miles. Find T(8) and interpret it.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">T(8) = 3.50 + 18 = $21.50, the cost of an 8-mile ride.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> F-IF.5: A phone battery lasts at most 20 hours. If P(t) is the percent remaining after t hours, what is a reasonable domain?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0 ≤ t ≤ 20, or [0, 20].</div>
    </details>
    </div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>A function assigns exactly one output to each input. You can test for a function with tables, mapping diagrams and the vertical line test. Function notation f(x) names the output for input x; f(a) is found by substitution. The domain is the set of inputs and the range is the set of outputs, written with inequalities or interval notation, where [ ] includes an endpoint and ( ) excludes it. In real situations the context limits the domain.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>One input → one output.</li>
    <li>Vertical line test.</li>
    <li>f(a): substitute; f(x) = b: solve.</li>
    <li>[ ] includes, ( ) excludes, ∞ always ( ).</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Different inputs may share an output.</li>
    <li>Use parentheses when substituting negatives.</li>
    <li>Context limits the domain.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reading f(x) as multiplication.</li>
    <li>Using [ with ∞.</li>
    <li>Ignoring the context’s domain.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw the vertical line test quickly with a ruler.</li>
    <li>Check outputs with a graphing tool.</li>
    <li>Say “f of x” aloud.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show substitution steps.</li>
    <li>Write domains in the form asked.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.1 Functions</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One input, one output.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.2 Notation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluate f(x).</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.5 Domain</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Domain in context.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Logical reasoning</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and coding</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every time an app calculates something from your input, it is using a function.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten function-notation problems from your teacher.</li>
    <li>Find the domain and range of three graphs and write them in interval notation.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which part of function notation is still confusing?</li>
    <li>Where did I see a function today?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Function</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One output per input.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Domain</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All inputs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Range</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All outputs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Interval notation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brackets and parentheses for sets.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can identify functions.</p>
    <p style="margin:6px 0;">☐ I can evaluate f(x).</p>
    <p style="margin:6px 0;">☐ I can find domain and range.</p>
    <p style="margin:6px 0;">☐ I can write interval notation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which relation is a function?',
            options: ['{(1, 4), (1, 5), (2, 6)}', '{(2, 3), (2, 4), (2, 5)}', '{(1, 4), (2, 5), (3, 5)}', '{(0, 1), (0, 2), (1, 3)}'],
            correct: 2,
            explanation: 'No input repeats with a different output.'
        },
        {
            question: 'If f(x) = 3x − 5, then f(−2) =',
            options: ['−11', '1', '−1', '11'],
            correct: 0,
            explanation: 'The answer is −11. 3(−2) − 5 = −11.'
        },
        {
            question: 'The vertical line test checks whether:',
            options: ['Each output has only one input', 'Each input has only one output', 'The graph is straight', 'The graph has an intercept'],
            correct: 1,
            explanation: 'The answer is Each input has only one output. One input, one output.'
        },
        {
            question: 'x ≥ −4 in interval notation is:',
            options: ['(−4, ∞)', '[−4, ∞)', '(−∞, −4]', '[−4, ∞]'],
            correct: 1,
            explanation: 'Included endpoint; ∞ uses a parenthesis.'
        },
        {
            question: 'The domain of f(x) = √x is:',
            options: ['[0, ∞)', '(−∞, ∞)', '(0, ∞)', '(−∞, 0]'],
            correct: 0,
            explanation: 'The square root of a negative is not real.'
        },
        {
            question: 'If f(x) = 2x + 1 and f(a) = 9, then a =',
            options: ['19', '5', '4', '8'],
            correct: 2,
            explanation: 'The answer is 4. 2a + 1 = 9.'
        },
        {
            question: 'The range of f(x) = x² is:',
            options: ['[0, ∞)', '(−∞, ∞)', '(−∞, 0]', '(0, ∞)'],
            correct: 0,
            explanation: 'The answer is [0, ∞). Squares are never negative.'
        },
        {
            question: 'A circle graphed on the coordinate plane is:',
            options: ['Always a function', 'A linear function', 'Not a function', 'A constant function'],
            correct: 2,
            explanation: 'A vertical line can cross it twice.'
        },
        {
            question: 'f(x) is read as:',
            options: ['f times x', 'f plus x', 'f over x', 'f of x'],
            correct: 3,
            explanation: 'The answer is f of x. Function notation.'
        },
        {
            question: 'For C(m) = 12m + 5, what does 12 represent?',
            options: ['The setup fee', 'The number of months', 'The total cost', 'The cost per month'],
            correct: 3,
            explanation: 'The answer is The cost per month. It is multiplied by m.'
        }
    ]
},
{
    name: '1.1.2 Parent Functions and Key Features',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Families of Functions</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Parent Functions and Key Features</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn six parent functions — constant, linear, absolute value, quadratic, square root and cubic — and describe their key features: intercepts, domain and range, intervals of increase and decrease, maximum and minimum points, symmetry and end behavior.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Recognizing a graph’s family lets you predict its shape and behavior instantly. Analysts read key features of graphs to make decisions about profits, populations and performance.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📈 Business profit graphs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏀 Ball trajectories</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Stopping distances</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌱 Plant growth</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📊 Data dashboards</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎢 Roller-coaster design</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Understand functions and use function notation. (F-IF.1, F-IF.2)</li>
    <li>Interpret key features of graphs and relate the domain to its context. (F-IF.4, F-IF.5)</li>
    <li>Identify parent functions and their key features. (F-IF.7)</li>
    <li>Identify the effect of transformations on a graph. (F-BF.3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify six parent functions from equations and graphs.</li>
    <li>State the domain and range of each parent function.</li>
    <li>Describe intercepts, increasing and decreasing intervals, and extrema.</li>
    <li>Describe symmetry and end behavior.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> What can the shape of a graph tell us about the relationship it shows?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned about domain and range. Now you will describe the full set of features that make each function family unique.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>function family</strong> is a group of functions with the same basic shape. The simplest member of each family is called the <strong>parent function</strong>. For example, every absolute value function makes a V shape, and the parent is f(x) = |x|. Every quadratic function makes a U-shaped <strong>parabola</strong>, and the parent is f(x) = x².</p>
    <p>To describe any graph, we use its <strong>key features</strong>: where it crosses the axes (intercepts), where it rises or falls (increasing or decreasing intervals), its highest or lowest point (maximum or minimum), whether it is symmetric, and what happens at the far left and far right (<strong>end behavior</strong>).</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Know the parents, and you will recognize their children — every transformed graph in this unit comes from one of these six.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Graphs became a standard way to show relationships after René Descartes connected algebra and geometry with the coordinate plane in 1637. Today, graphing technology lets us see a function’s shape instantly, but recognizing a family and its features by sight is still an essential skill for checking that a model makes sense.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">parent function</strong>
    </p>
    <p style="margin:6px 0;">The simplest function in a family.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> f(x) = x², f(x) = |x|</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = x² is the quadratic parent.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">x-intercept</strong>
    </p>
    <p style="margin:6px 0;">A point where a graph crosses the x-axis (y = 0); also called a zero.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> (a, 0)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = x − 3 has x-intercept (3, 0).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">y-intercept</strong>
    </p>
    <p style="margin:6px 0;">The point where a graph crosses the y-axis (x = 0).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> (0, b)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = 2x + 5 has y-intercept (0, 5).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">increasing interval</strong>
    </p>
    <p style="margin:6px 0;">An interval where the y-values rise as x increases.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> left to right, uphill</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>|x| increases on (0, ∞).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">minimum / maximum</strong>
    </p>
    <p style="margin:6px 0;">The lowest / highest point of a graph, if one exists.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> vertex</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x² has a minimum at (0, 0).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">end behavior</strong>
    </p>
    <p style="margin:6px 0;">What happens to f(x) as x goes to ∞ or −∞.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x → ∞, f(x) → ∞</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>For x³, as x → −∞, f(x) → −∞.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Six Parent Functions</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 470" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="22" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Six Parent Functions</text><rect x="10" y="34" width="220" height="210" rx="10" fill="#10233d" stroke="#33415c"/><text x="120" y="54" fill="#86efac" font-size="13" font-weight="bold" text-anchor="middle">Linear</text><text x="120" y="70" fill="#e2e8f0" font-size="12" text-anchor="middle">f(x) = x</text><line x1="30" y1="144" x2="210" y2="144" stroke="#64748b"/><line x1="120" y1="214" x2="120" y2="74" stroke="#64748b"/><polyline points="30.0,214.0 31.1,213.1 32.3,212.3 33.4,211.4 34.5,210.5 35.6,209.6 36.8,208.8 37.9,207.9 39.0,207.0 40.1,206.1 41.3,205.3 42.4,204.4 43.5,203.5 44.6,202.6 45.8,201.8 46.9,200.9 48.0,200.0 49.1,199.1 50.3,198.3 51.4,197.4 52.5,196.5 53.6,195.6 54.8,194.8 55.9,193.9 57.0,193.0 58.1,192.1 59.3,191.3 60.4,190.4 61.5,189.5 62.6,188.6 63.8,187.8 64.9,186.9 66.0,186.0 67.1,185.1 68.3,184.3 69.4,183.4 70.5,182.5 71.6,181.6 72.8,180.8 73.9,179.9 75.0,179.0 76.1,178.1 77.3,177.3 78.4,176.4 79.5,175.5 80.6,174.6 81.8,173.8 82.9,172.9 84.0,172.0 85.1,171.1 86.3,170.3 87.4,169.4 88.5,168.5 89.6,167.6 90.8,166.8 91.9,165.9 93.0,165.0 94.1,164.1 95.3,163.3 96.4,162.4 97.5,161.5 98.6,160.6 99.8,159.8 100.9,158.9 102.0,158.0 103.1,157.1 104.3,156.3 105.4,155.4 106.5,154.5 107.6,153.6 108.8,152.8 109.9,151.9 111.0,151.0 112.1,150.1 113.3,149.3 114.4,148.4 115.5,147.5 116.6,146.6 117.8,145.8 118.9,144.9 120.0,144.0 121.1,143.1 122.2,142.3 123.4,141.4 124.5,140.5 125.6,139.6 126.8,138.8 127.9,137.9 129.0,137.0 130.1,136.1 131.3,135.3 132.4,134.4 133.5,133.5 134.6,132.6 135.8,131.8 136.9,130.9 138.0,130.0 139.1,129.1 140.3,128.3 141.4,127.4 142.5,126.5 143.6,125.6 144.8,124.8 145.9,123.9 147.0,123.0 148.1,122.1 149.3,121.3 150.4,120.4 151.5,119.5 152.6,118.6 153.8,117.8 154.9,116.9 156.0,116.0 157.1,115.1 158.3,114.3 159.4,113.4 160.5,112.5 161.6,111.6 162.8,110.8 163.9,109.9 165.0,109.0 166.1,108.1 167.3,107.3 168.4,106.4 169.5,105.5 170.6,104.6 171.8,103.8 172.9,102.9 174.0,102.0 175.1,101.1 176.3,100.3 177.4,99.4 178.5,98.5 179.6,97.6 180.8,96.8 181.9,95.9 183.0,95.0 184.1,94.1 185.3,93.3 186.4,92.4 187.5,91.5 188.6,90.6 189.8,89.8 190.9,88.9 192.0,88.0 193.1,87.1 194.3,86.3 195.4,85.4 196.5,84.5 197.6,83.6 198.8,82.8 199.9,81.9 201.0,81.0 202.1,80.1 203.3,79.3 204.4,78.4 205.5,77.5 206.6,76.6 207.8,75.8 208.9,74.9 210.0,74.0" fill="none" stroke="#86efac" stroke-width="3"/><rect x="240" y="34" width="220" height="210" rx="10" fill="#10233d" stroke="#33415c"/><text x="350" y="54" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Absolute value</text><text x="350" y="70" fill="#e2e8f0" font-size="12" text-anchor="middle">f(x) = |x|</text><line x1="260" y1="144" x2="440" y2="144" stroke="#64748b"/><line x1="350" y1="214" x2="350" y2="74" stroke="#64748b"/><polyline points="260.0,74.0 261.1,74.9 262.3,75.8 263.4,76.6 264.5,77.5 265.6,78.4 266.8,79.3 267.9,80.1 269.0,81.0 270.1,81.9 271.3,82.8 272.4,83.6 273.5,84.5 274.6,85.4 275.8,86.3 276.9,87.1 278.0,88.0 279.1,88.9 280.3,89.8 281.4,90.6 282.5,91.5 283.6,92.4 284.8,93.3 285.9,94.1 287.0,95.0 288.1,95.9 289.3,96.8 290.4,97.6 291.5,98.5 292.6,99.4 293.8,100.3 294.9,101.1 296.0,102.0 297.1,102.9 298.3,103.8 299.4,104.6 300.5,105.5 301.6,106.4 302.8,107.3 303.9,108.1 305.0,109.0 306.1,109.9 307.3,110.8 308.4,111.6 309.5,112.5 310.6,113.4 311.8,114.3 312.9,115.1 314.0,116.0 315.1,116.9 316.3,117.8 317.4,118.6 318.5,119.5 319.6,120.4 320.8,121.3 321.9,122.1 323.0,123.0 324.1,123.9 325.3,124.8 326.4,125.6 327.5,126.5 328.6,127.4 329.8,128.3 330.9,129.1 332.0,130.0 333.1,130.9 334.3,131.8 335.4,132.6 336.5,133.5 337.6,134.4 338.8,135.3 339.9,136.1 341.0,137.0 342.1,137.9 343.3,138.8 344.4,139.6 345.5,140.5 346.6,141.4 347.8,142.3 348.9,143.1 350.0,144.0 351.1,143.1 352.3,142.3 353.4,141.4 354.5,140.5 355.6,139.6 356.8,138.8 357.9,137.9 359.0,137.0 360.1,136.1 361.3,135.3 362.4,134.4 363.5,133.5 364.6,132.6 365.8,131.8 366.9,130.9 368.0,130.0 369.1,129.1 370.3,128.3 371.4,127.4 372.5,126.5 373.6,125.6 374.8,124.8 375.9,123.9 377.0,123.0 378.1,122.1 379.3,121.3 380.4,120.4 381.5,119.5 382.6,118.6 383.8,117.8 384.9,116.9 386.0,116.0 387.1,115.1 388.3,114.3 389.4,113.4 390.5,112.5 391.6,111.6 392.8,110.8 393.9,109.9 395.0,109.0 396.1,108.1 397.3,107.3 398.4,106.4 399.5,105.5 400.6,104.6 401.8,103.8 402.9,102.9 404.0,102.0 405.1,101.1 406.3,100.3 407.4,99.4 408.5,98.5 409.6,97.6 410.8,96.8 411.9,95.9 413.0,95.0 414.1,94.1 415.3,93.3 416.4,92.4 417.5,91.5 418.6,90.6 419.8,89.8 420.9,88.9 422.0,88.0 423.1,87.1 424.3,86.3 425.4,85.4 426.5,84.5 427.6,83.6 428.8,82.8 429.9,81.9 431.0,81.0 432.1,80.1 433.3,79.3 434.4,78.4 435.5,77.5 436.6,76.6 437.8,75.8 438.9,74.9 440.0,74.0" fill="none" stroke="#fde68a" stroke-width="3"/><rect x="470" y="34" width="220" height="210" rx="10" fill="#10233d" stroke="#33415c"/><text x="580" y="54" fill="#f48fb1" font-size="13" font-weight="bold" text-anchor="middle">Quadratic</text><text x="580" y="70" fill="#e2e8f0" font-size="12" text-anchor="middle">f(x) = x²</text><line x1="490" y1="144" x2="670" y2="144" stroke="#64748b"/><line x1="580" y1="214" x2="580" y2="74" stroke="#64748b"/><polyline points="535.0,74.0 536.1,77.5 537.3,80.8 538.4,84.1 539.5,87.3 540.6,90.4 541.8,93.4 542.9,96.4 544.0,99.2 545.1,102.0 546.3,104.6 547.4,107.2 548.5,109.7 549.6,112.1 550.8,114.4 551.9,116.7 553.0,118.8 554.1,120.9 555.3,122.8 556.4,124.7 557.5,126.5 558.6,128.2 559.8,129.8 560.9,131.4 562.0,132.8 563.1,134.2 564.3,135.4 565.4,136.6 566.5,137.7 567.6,138.7 568.8,139.6 569.9,140.5 571.0,141.2 572.1,141.9 573.3,142.4 574.4,142.9 575.5,143.3 576.6,143.6 577.8,143.8 578.9,144.0 580.0,144.0 581.1,144.0 582.3,143.8 583.4,143.6 584.5,143.3 585.6,142.9 586.8,142.4 587.9,141.9 589.0,141.2 590.1,140.5 591.3,139.6 592.4,138.7 593.5,137.7 594.6,136.6 595.8,135.4 596.9,134.2 598.0,132.8 599.1,131.4 600.3,129.8 601.4,128.2 602.5,126.5 603.6,124.7 604.8,122.8 605.9,120.9 607.0,118.8 608.1,116.7 609.3,114.4 610.4,112.1 611.5,109.7 612.6,107.2 613.8,104.6 614.9,102.0 616.0,99.2 617.1,96.4 618.3,93.4 619.4,90.4 620.5,87.3 621.6,84.1 622.8,80.8 623.9,77.5 625.0,74.0" fill="none" stroke="#f48fb1" stroke-width="3"/><rect x="10" y="252" width="220" height="210" rx="10" fill="#10233d" stroke="#33415c"/><text x="120" y="272" fill="#67e8f9" font-size="13" font-weight="bold" text-anchor="middle">Square root</text><text x="120" y="288" fill="#e2e8f0" font-size="12" text-anchor="middle">f(x) = √x</text><line x1="30" y1="362" x2="210" y2="362" stroke="#64748b"/><line x1="120" y1="432" x2="120" y2="292" stroke="#64748b"/><polyline points="120.0,362.0 121.1,358.1 122.2,356.5 123.4,355.2 124.5,354.2 125.6,353.3 126.8,352.4 127.9,351.6 129.0,350.9 130.1,350.3 131.3,349.6 132.4,349.0 133.5,348.4 134.6,347.9 135.8,347.4 136.9,346.8 138.0,346.3 139.1,345.9 140.3,345.4 141.4,344.9 142.5,344.5 143.6,344.1 144.8,343.6 145.9,343.2 147.0,342.8 148.1,342.4 149.3,342.0 150.4,341.7 151.5,341.3 152.6,340.9 153.8,340.6 154.9,340.2 156.0,339.9 157.1,339.5 158.3,339.2 159.4,338.8 160.5,338.5 161.6,338.2 162.8,337.9 163.9,337.6 165.0,337.3 166.1,336.9 167.3,336.6 168.4,336.3 169.5,336.0 170.6,335.8 171.8,335.5 172.9,335.2 174.0,334.9 175.1,334.6 176.3,334.3 177.4,334.1 178.5,333.8 179.6,333.5 180.8,333.2 181.9,333.0 183.0,332.7 184.1,332.5 185.3,332.2 186.4,331.9 187.5,331.7 188.6,331.4 189.8,331.2 190.9,330.9 192.0,330.7 193.1,330.5 194.3,330.2 195.4,330.0 196.5,329.7 197.6,329.5 198.8,329.3 199.9,329.0 201.0,328.8 202.1,328.6 203.3,328.3 204.4,328.1 205.5,327.9 206.6,327.7 207.8,327.4 208.9,327.2 210.0,327.0" fill="none" stroke="#67e8f9" stroke-width="3"/><rect x="240" y="252" width="220" height="210" rx="10" fill="#10233d" stroke="#33415c"/><text x="350" y="272" fill="#c4b5fd" font-size="13" font-weight="bold" text-anchor="middle">Cubic</text><text x="350" y="288" fill="#e2e8f0" font-size="12" text-anchor="middle">f(x) = x³</text><line x1="260" y1="362" x2="440" y2="362" stroke="#64748b"/><line x1="350" y1="432" x2="350" y2="292" stroke="#64748b"/><polyline points="314.0,433.7 315.1,427.2 316.3,421.1 317.4,415.4 318.5,410.0 319.6,405.1 320.8,400.4 321.9,396.2 323.0,392.2 324.1,388.6 325.3,385.3 326.4,382.3 327.5,379.5 328.6,377.0 329.8,374.8 330.9,372.7 332.0,371.0 333.1,369.4 334.3,368.0 335.4,366.8 336.5,365.8 337.6,364.9 338.8,364.2 339.9,363.6 341.0,363.1 342.1,362.8 343.3,362.5 344.4,362.3 345.5,362.1 346.6,362.1 347.8,362.0 348.9,362.0 350.0,362.0 351.1,362.0 352.3,362.0 353.4,361.9 354.5,361.9 355.6,361.7 356.8,361.5 357.9,361.2 359.0,360.9 360.1,360.4 361.3,359.8 362.4,359.1 363.5,358.2 364.6,357.2 365.8,356.0 366.9,354.6 368.0,353.0 369.1,351.3 370.3,349.2 371.4,347.0 372.5,344.5 373.6,341.7 374.8,338.7 375.9,335.4 377.0,331.8 378.1,327.8 379.3,323.6 380.4,318.9 381.5,314.0 382.6,308.6 383.8,302.9 384.9,296.8 386.0,290.3" fill="none" stroke="#c4b5fd" stroke-width="3"/><rect x="470" y="252" width="220" height="210" rx="10" fill="#10233d" stroke="#33415c"/><text x="580" y="272" fill="#fdba74" font-size="13" font-weight="bold" text-anchor="middle">Constant</text><text x="580" y="288" fill="#e2e8f0" font-size="12" text-anchor="middle">f(x) = 2</text><line x1="490" y1="362" x2="670" y2="362" stroke="#64748b"/><line x1="580" y1="432" x2="580" y2="292" stroke="#64748b"/><polyline points="490.0,327.0 491.1,327.0 492.3,327.0 493.4,327.0 494.5,327.0 495.6,327.0 496.8,327.0 497.9,327.0 499.0,327.0 500.1,327.0 501.3,327.0 502.4,327.0 503.5,327.0 504.6,327.0 505.8,327.0 506.9,327.0 508.0,327.0 509.1,327.0 510.3,327.0 511.4,327.0 512.5,327.0 513.6,327.0 514.8,327.0 515.9,327.0 517.0,327.0 518.1,327.0 519.3,327.0 520.4,327.0 521.5,327.0 522.6,327.0 523.8,327.0 524.9,327.0 526.0,327.0 527.1,327.0 528.3,327.0 529.4,327.0 530.5,327.0 531.6,327.0 532.8,327.0 533.9,327.0 535.0,327.0 536.1,327.0 537.3,327.0 538.4,327.0 539.5,327.0 540.6,327.0 541.8,327.0 542.9,327.0 544.0,327.0 545.1,327.0 546.3,327.0 547.4,327.0 548.5,327.0 549.6,327.0 550.8,327.0 551.9,327.0 553.0,327.0 554.1,327.0 555.3,327.0 556.4,327.0 557.5,327.0 558.6,327.0 559.8,327.0 560.9,327.0 562.0,327.0 563.1,327.0 564.3,327.0 565.4,327.0 566.5,327.0 567.6,327.0 568.8,327.0 569.9,327.0 571.0,327.0 572.1,327.0 573.3,327.0 574.4,327.0 575.5,327.0 576.6,327.0 577.8,327.0 578.9,327.0 580.0,327.0 581.1,327.0 582.3,327.0 583.4,327.0 584.5,327.0 585.6,327.0 586.8,327.0 587.9,327.0 589.0,327.0 590.1,327.0 591.3,327.0 592.4,327.0 593.5,327.0 594.6,327.0 595.8,327.0 596.9,327.0 598.0,327.0 599.1,327.0 600.3,327.0 601.4,327.0 602.5,327.0 603.6,327.0 604.8,327.0 605.9,327.0 607.0,327.0 608.1,327.0 609.3,327.0 610.4,327.0 611.5,327.0 612.6,327.0 613.8,327.0 614.9,327.0 616.0,327.0 617.1,327.0 618.3,327.0 619.4,327.0 620.5,327.0 621.6,327.0 622.8,327.0 623.9,327.0 625.0,327.0 626.1,327.0 627.3,327.0 628.4,327.0 629.5,327.0 630.6,327.0 631.8,327.0 632.9,327.0 634.0,327.0 635.1,327.0 636.3,327.0 637.4,327.0 638.5,327.0 639.6,327.0 640.8,327.0 641.9,327.0 643.0,327.0 644.1,327.0 645.3,327.0 646.4,327.0 647.5,327.0 648.6,327.0 649.8,327.0 650.9,327.0 652.0,327.0 653.1,327.0 654.3,327.0 655.4,327.0 656.5,327.0 657.6,327.0 658.8,327.0 659.9,327.0 661.0,327.0 662.1,327.0 663.3,327.0 664.4,327.0 665.5,327.0 666.6,327.0 667.8,327.0 668.9,327.0 670.0,327.0" fill="none" stroke="#fdba74" stroke-width="3"/>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Parent</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Domain</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Range</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key point</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) = c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">{c}</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal line</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) = x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Passes through (0, 0)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absolute value</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) = |x|</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[0, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertex (0, 0)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quadratic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) = x²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[0, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertex (0, 0)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square root</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) = √x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[0, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">[0, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Starts at (0, 0)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cubic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) = x³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−∞, ∞)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Passes through (0, 0)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Key Features of a Graph</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Question to ask</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example: f(x) = |x|</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intercepts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where does it cross the axes?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both at (0, 0)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Increasing / decreasing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where does it go up or down from left to right?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Decreasing on (−∞, 0); increasing on (0, ∞)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maximum / minimum</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is there a highest or lowest point?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minimum 0 at (0, 0); no maximum</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Symmetry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Is it a mirror image across the y-axis or through the origin?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Symmetric about the y-axis</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">End behavior</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What happens far left and far right?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">As x → −∞, f(x) → ∞; as x → ∞, f(x) → ∞</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Functions symmetric about the y-axis, such as x² and |x|, are called <strong>even functions</strong>: f(−x) = f(x). Functions symmetric through the origin, such as x and x³, are called <strong>odd functions</strong>: f(−x) = −f(x).</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Describing key features (F-IF.4)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Describe the key features of f(x) = √x.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Domain and range</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Domain [0, ∞); range [0, ∞).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Intercepts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Both at (0, 0).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Increasing / decreasing</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Increasing on (0, ∞); never decreasing.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Minimum</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Minimum value 0 at (0, 0).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: End behavior</strong>
    </p>
    <div style="margin:6px 0 0 34px;">As x → ∞, f(x) → ∞, but slowly. The left end does not exist because the domain starts at 0.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> f(x) = √x starts at the origin, increases slowly forever, has a minimum of 0 and is defined only for x ≥ 0.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A full description uses every feature, written with correct notation.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Features in Context</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Interpreting a graph in context (F-IF.4)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The height of a ball t seconds after it is thrown is modeled by a parabola that rises to a maximum of 25 feet at t = 1.25 seconds and hits the ground at t = 2.5 seconds. Interpret the key features.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Increasing</strong>
    </p>
    <div style="margin:6px 0 0 34px;">From t = 0 to 1.25 seconds, the ball is rising.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Maximum</strong>
    </p>
    <div style="margin:6px 0 0 34px;">At 1.25 seconds, the ball reaches its highest point, 25 feet.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Decreasing</strong>
    </p>
    <div style="margin:6px 0 0 34px;">From 1.25 to 2.5 seconds, the ball is falling.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: x-intercept</strong>
    </p>
    <div style="margin:6px 0 0 34px;">At t = 2.5 seconds, the height is 0: the ball lands.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Domain in context</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 ≤ t ≤ 2.5</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The ball rises for 1.25 seconds to a maximum height of 25 feet, then falls and lands after 2.5 seconds.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Key features have real meanings: a maximum might be the highest point, the greatest profit or the peak temperature.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which parent function has a V shape?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The absolute value function, f(x) = |x|.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is the range of f(x) = x³?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(−∞, ∞)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Where is f(x) = x² decreasing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">On (−∞, 0).</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recognizing structure</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Describing graphs precisely</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting features in context</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using notation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using graphing tools</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>When describing increasing and decreasing intervals, always use the <strong>x-values</strong>, read from left to right — not the y-values. Students also often say a parabola is “increasing” everywhere because it goes up on the right side; a function can increase on one interval and decrease on another.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Which parent functions have a minimum but no maximum? Which have neither? Why?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #f48fb1;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Business analysts look for the maximum of a profit graph to choose the best price.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Ecologists describe population graphs by when they increase, when they level off and whether they have a maximum.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Engineers use parabolas for bridge arches and satellite dishes, and square-root relationships appear in physics formulas such as the speed of a falling object.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Name the parent function of y = (x − 4)².</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It has a square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Quadratic, f(x) = x².</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What is the domain of f(x) = √x?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: No negatives.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">[0, ∞)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Is f(x) = |x| even or odd?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Mirror image.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Even — symmetric about the y-axis.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Start your function family album: draw each of the six parent functions with its domain, range and three key points.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner describes a parent function’s features without naming it; the other guesses which it is.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Sort a set of real-world graph cards (for example, a ball’s height or a constant price) by parent function family.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Graph all six parent functions in different colors in a graphing calculator. Zoom out and compare their end behavior.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is the parent function of y = 2x + 7?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Linear, f(x) = x.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give the range of f(x) = |x|.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">[0, ∞)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Describe the end behavior of f(x) = x³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">As x → −∞, f(x) → −∞; as x → ∞, f(x) → ∞.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Where is f(x) = |x| increasing and decreasing?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Decreasing on (−∞, 0); increasing on (0, ∞).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f48fb1;">
    <p style="margin:0 0 6px 0;color:#f48fb1;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Show algebraically that f(x) = x² is even.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">f(−x) = (−x)² = x² = f(x).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A company’s profit graph is a parabola with a maximum at a price of $40. What does this mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Profit is greatest when the price is $40; higher or lower prices give less profit.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> F-IF.4: A graph of temperature over a day increases from 6 a.m. to 3 p.m. and decreases after. Interpret the maximum.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The highest temperature of the day occurs at about 3 p.m.</div>
    </details>
    </div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Each function family has a parent function: constant, linear (x), absolute value (|x|), quadratic (x²), square root (√x) and cubic (x³). Key features describe any graph: intercepts, domain and range, increasing and decreasing intervals, maximum and minimum, symmetry (even or odd) and end behavior. In real situations these features have meaning, such as the highest point of a ball’s path.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Six parents: constant, x, |x|, x², √x, x³.</li>
    <li>Intercepts, intervals, extrema.</li>
    <li>Even: y-axis symmetry; odd: origin symmetry.</li>
    <li>End behavior: x → ±∞.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Intervals use x-values.</li>
    <li>Read graphs left to right.</li>
    <li>Features have real meanings.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using y-values for increasing intervals.</li>
    <li>Forgetting √x’s restricted domain.</li>
    <li>Saying a parabola increases everywhere.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Memorize the six shapes.</li>
    <li>Use a table of features.</li>
    <li>Check with a graphing tool.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use interval notation for intervals.</li>
    <li>Interpret features in context.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.4 Key features</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpret graphs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.7 Graphing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parent functions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP.7 Structure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recognize families.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observation</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data literacy</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science and engineering</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Reading a graph’s key features lets you make decisions from data quickly and confidently.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete your function family album pages.</li>
    <li>Describe the key features of three graphs from your teacher.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which parent function is easiest for me to recognize?</li>
    <li>Which feature do I still find confusing?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Parent function</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simplest member of a family.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Intercept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where a graph crosses an axis.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">End behavior</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph’s far ends.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Even function</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(−x) = f(x).</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can identify six parent functions.</p>
    <p style="margin:6px 0;">☐ I can state domain and range.</p>
    <p style="margin:6px 0;">☐ I can describe intervals and extrema.</p>
    <p style="margin:6px 0;">☐ I can describe symmetry and end behavior.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The parent function of a V-shaped graph is:',
            options: ['f(x) = x²', 'f(x) = √x', 'f(x) = |x|', 'f(x) = x³'],
            correct: 2,
            explanation: 'The answer is f(x) = |x|. Absolute value makes a V.'
        },
        {
            question: 'The domain of f(x) = √x is:',
            options: ['[0, ∞)', '(−∞, ∞)', '(0, ∞)', '[1, ∞)'],
            correct: 0,
            explanation: 'The answer is [0, ∞). No negative inputs.'
        },
        {
            question: 'Which parent function has range (−∞, ∞)?',
            options: ['f(x) = x³', 'f(x) = x²', 'f(x) = |x|', 'f(x) = √x'],
            correct: 0,
            explanation: 'Cubic outputs every real number.'
        },
        {
            question: 'f(x) = x² is decreasing on:',
            options: ['(0, ∞)', '(−∞, ∞)', 'Nowhere', '(−∞, 0)'],
            correct: 3,
            explanation: 'The answer is (−∞, 0). Left side goes downhill.'
        },
        {
            question: 'The minimum point of f(x) = |x| is:',
            options: ['(1, 1)', '(0, 0)', '(0, 1)', 'There is none'],
            correct: 1,
            explanation: 'The answer is (0, 0). The vertex.'
        },
        {
            question: 'An even function is symmetric about:',
            options: ['The x-axis', 'The y-axis', 'The line y = x', 'The point (1, 1)'],
            correct: 1,
            explanation: 'The answer is The y-axis. f(−x) = f(x).'
        },
        {
            question: 'Which is an odd function?',
            options: ['f(x) = x²', 'f(x) = |x|', 'f(x) = x³', 'f(x) = 5'],
            correct: 2,
            explanation: 'The answer is f(x) = x³. Origin symmetry.'
        },
        {
            question: 'As x → ∞, f(x) = x³ approaches:',
            options: ['−∞', '0', '1', '∞'],
            correct: 3,
            explanation: 'Cubes of large positives are large.'
        },
        {
            question: 'Intervals of increase are written using:',
            options: ['y-values', 'x-values', 'Both at once', 'Neither'],
            correct: 1,
            explanation: 'Read left to right on the x-axis.'
        },
        {
            question: 'The graph of f(x) = 4 is a:',
            options: ['Vertical line', 'Parabola', 'Horizontal line', 'V shape'],
            correct: 2,
            explanation: 'The answer is Horizontal line. A constant function.'
        }
    ]
},
{
    name: '1.1.3 Transformations of Functions',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Families of Functions</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Transformations of Functions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how translations, reflections, vertical stretches and compressions, and horizontal stretches and compressions change the graph of a parent function, and how to write and graph transformed functions.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Transformations let you graph complicated functions quickly from simple ones, and they explain how changing one number in a model changes the whole picture — a key idea in science, finance and animation.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Video game animation</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📊 Adjusting data models</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎨 Graphic design</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎵 Sound waves</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Engineering curves</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Photo editing</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Understand functions and use function notation. (F-IF.1, F-IF.2)</li>
    <li>Interpret key features of graphs and relate the domain to its context. (F-IF.4, F-IF.5)</li>
    <li>Identify parent functions and their key features. (F-IF.7)</li>
    <li>Identify the effect of transformations on a graph. (F-BF.3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe vertical and horizontal translations.</li>
    <li>Describe reflections over the x- and y-axes.</li>
    <li>Describe vertical and horizontal stretches and compressions.</li>
    <li>Write and graph a function with several transformations.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can changing a single number move, flip or stretch an entire graph?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.2 you learned the parent functions. Now you will transform them into new members of each family.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>transformation</strong> changes a graph’s position, size or orientation. A <strong>translation</strong> slides the graph without changing its shape. A <strong>reflection</strong> flips it over a line. A <strong>stretch</strong> or <strong>compression</strong> pulls it away from or squeezes it toward an axis.</p>
    <p>Changes <strong>outside</strong> the function, such as f(x) + k or a·f(x), affect the <strong>y-values</strong> and behave as you expect. Changes <strong>inside</strong> the function, such as f(x − h) or f(bx), affect the <strong>x-values</strong> and behave the opposite way: f(x − 3) moves the graph 3 units <em>right</em>, not left.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Outside = vertical, as expected. Inside = horizontal, the opposite of what you expect.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Why does f(x − 3) move right? Think about the vertex of |x − 3|. The output is 0 when the inside equals 0, which happens at x = 3. So the point that used to be at x = 0 is now at x = 3 — three units to the right. Every inside change works this way: you must solve to find where the new graph’s key points are.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">transformation</strong>
    </p>
    <p style="margin:6px 0;">A change in a graph’s position, size or orientation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> shift, flip, stretch</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = |x| + 2 is a transformation of |x|.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">translation</strong>
    </p>
    <p style="margin:6px 0;">A slide up, down, left or right.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> f(x) + k, f(x − h)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>f(x) − 4 moves down 4.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">reflection</strong>
    </p>
    <p style="margin:6px 0;">A flip over a line.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> −f(x), f(−x)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−f(x) reflects over the x-axis.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertical stretch</strong>
    </p>
    <p style="margin:6px 0;">Pulling a graph away from the x-axis (|a| &gt; 1).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> a·f(x)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>3|x| is narrower than |x|.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertical compression</strong>
    </p>
    <p style="margin:6px 0;">Squeezing a graph toward the x-axis (0 &lt; |a| &lt; 1).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> a·f(x)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>½|x| is wider than |x|.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertex form</strong>
    </p>
    <p style="margin:6px 0;">An equation that shows the vertex of a graph.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> y = a|x − h| + k</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = 2|x − 1| + 3 has vertex (1, 3).</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Translations and Reflections</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><g transform="translate(0,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Translations of f(x) = |x|</text><line x1="40" y1="40" x2="40" y2="290" stroke="#1e293b"/><line x1="63.666666666666664" y1="40" x2="63.666666666666664" y2="290" stroke="#1e293b"/><line x1="87.33333333333333" y1="40" x2="87.33333333333333" y2="290" stroke="#1e293b"/><line x1="111" y1="40" x2="111" y2="290" stroke="#1e293b"/><line x1="134.66666666666666" y1="40" x2="134.66666666666666" y2="290" stroke="#1e293b"/><line x1="158.33333333333334" y1="40" x2="158.33333333333334" y2="290" stroke="#1e293b"/><line x1="182" y1="40" x2="182" y2="290" stroke="#1e293b"/><line x1="205.66666666666669" y1="40" x2="205.66666666666669" y2="290" stroke="#1e293b"/><line x1="229.33333333333331" y1="40" x2="229.33333333333331" y2="290" stroke="#1e293b"/><line x1="253" y1="40" x2="253" y2="290" stroke="#1e293b"/><line x1="276.6666666666667" y1="40" x2="276.6666666666667" y2="290" stroke="#1e293b"/><line x1="300.3333333333333" y1="40" x2="300.3333333333333" y2="290" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="290" stroke="#1e293b"/><line x1="40" y1="290" x2="324" y2="290" stroke="#1e293b"/><line x1="40" y1="265" x2="324" y2="265" stroke="#1e293b"/><line x1="40" y1="240" x2="324" y2="240" stroke="#1e293b"/><line x1="40" y1="215" x2="324" y2="215" stroke="#1e293b"/><line x1="40" y1="190" x2="324" y2="190" stroke="#1e293b"/><line x1="40" y1="165" x2="324" y2="165" stroke="#1e293b"/><line x1="40" y1="140" x2="324" y2="140" stroke="#1e293b"/><line x1="40" y1="115" x2="324" y2="115" stroke="#1e293b"/><line x1="40" y1="90" x2="324" y2="90" stroke="#1e293b"/><line x1="40" y1="65" x2="324" y2="65" stroke="#1e293b"/><line x1="40" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="40" y1="190" x2="324" y2="190" stroke="#94a3b8" stroke-width="1.5"/><line x1="182" y1="40" x2="182" y2="290" stroke="#94a3b8" stroke-width="1.5"/><text x="40" y="204" fill="#94a3b8" font-size="10" text-anchor="middle">-6</text><text x="87.33333333333333" y="204" fill="#94a3b8" font-size="10" text-anchor="middle">-4</text><text x="134.66666666666666" y="204" fill="#94a3b8" font-size="10" text-anchor="middle">-2</text><text x="229.33333333333331" y="204" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="276.6666666666667" y="204" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="324" y="204" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="177" y="293" fill="#94a3b8" font-size="10" text-anchor="end">-4</text><text x="177" y="243" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="177" y="143" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="177" y="93" fill="#94a3b8" font-size="10" text-anchor="end">4</text><text x="177" y="43" fill="#94a3b8" font-size="10" text-anchor="end">6</text><polyline points="40.0,40.0 41.4,41.5 42.8,43.0 44.3,44.5 45.7,46.0 47.1,47.5 48.5,49.0 49.9,50.5 51.4,52.0 52.8,53.5 54.2,55.0 55.6,56.5 57.0,58.0 58.5,59.5 59.9,61.0 61.3,62.5 62.7,64.0 64.1,65.5 65.6,67.0 67.0,68.5 68.4,70.0 69.8,71.5 71.2,73.0 72.7,74.5 74.1,76.0 75.5,77.5 76.9,79.0 78.3,80.5 79.8,82.0 81.2,83.5 82.6,85.0 84.0,86.5 85.4,88.0 86.9,89.5 88.3,91.0 89.7,92.5 91.1,94.0 92.5,95.5 94.0,97.0 95.4,98.5 96.8,100.0 98.2,101.5 99.6,103.0 101.1,104.5 102.5,106.0 103.9,107.5 105.3,109.0 106.7,110.5 108.2,112.0 109.6,113.5 111.0,115.0 112.4,116.5 113.8,118.0 115.3,119.5 116.7,121.0 118.1,122.5 119.5,124.0 120.9,125.5 122.4,127.0 123.8,128.5 125.2,130.0 126.6,131.5 128.0,133.0 129.5,134.5 130.9,136.0 132.3,137.5 133.7,139.0 135.1,140.5 136.6,142.0 138.0,143.5 139.4,145.0 140.8,146.5 142.2,148.0 143.7,149.5 145.1,151.0 146.5,152.5 147.9,154.0 149.3,155.5 150.8,157.0 152.2,158.5 153.6,160.0 155.0,161.5 156.4,163.0 157.9,164.5 159.3,166.0 160.7,167.5 162.1,169.0 163.5,170.5 165.0,172.0 166.4,173.5 167.8,175.0 169.2,176.5 170.6,178.0 172.1,179.5 173.5,181.0 174.9,182.5 176.3,184.0 177.7,185.5 179.2,187.0 180.6,188.5 182.0,190.0 183.4,188.5 184.8,187.0 186.3,185.5 187.7,184.0 189.1,182.5 190.5,181.0 191.9,179.5 193.4,178.0 194.8,176.5 196.2,175.0 197.6,173.5 199.0,172.0 200.5,170.5 201.9,169.0 203.3,167.5 204.7,166.0 206.1,164.5 207.6,163.0 209.0,161.5 210.4,160.0 211.8,158.5 213.2,157.0 214.7,155.5 216.1,154.0 217.5,152.5 218.9,151.0 220.3,149.5 221.8,148.0 223.2,146.5 224.6,145.0 226.0,143.5 227.4,142.0 228.9,140.5 230.3,139.0 231.7,137.5 233.1,136.0 234.5,134.5 236.0,133.0 237.4,131.5 238.8,130.0 240.2,128.5 241.6,127.0 243.1,125.5 244.5,124.0 245.9,122.5 247.3,121.0 248.7,119.5 250.2,118.0 251.6,116.5 253.0,115.0 254.4,113.5 255.8,112.0 257.3,110.5 258.7,109.0 260.1,107.5 261.5,106.0 262.9,104.5 264.4,103.0 265.8,101.5 267.2,100.0 268.6,98.5 270.0,97.0 271.5,95.5 272.9,94.0 274.3,92.5 275.7,91.0 277.1,89.5 278.6,88.0 280.0,86.5 281.4,85.0 282.8,83.5 284.2,82.0 285.7,80.5 287.1,79.0 288.5,77.5 289.9,76.0 291.3,74.5 292.8,73.0 294.2,71.5 295.6,70.0 297.0,68.5 298.4,67.0 299.9,65.5 301.3,64.0 302.7,62.5 304.1,61.0 305.5,59.5 307.0,58.0 308.4,56.5 309.8,55.0 311.2,53.5 312.6,52.0 314.1,50.5 315.5,49.0 316.9,47.5 318.3,46.0 319.7,44.5 321.2,43.0 322.6,41.5 324.0,40.0" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6 4"/><text x="82.6" y="130" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">y = |x|</text><polyline points="75.5,27.5 76.9,29.0 78.3,30.5 79.8,32.0 81.2,33.5 82.6,35.0 84.0,36.5 85.4,38.0 86.9,39.5 88.3,41.0 89.7,42.5 91.1,44.0 92.5,45.5 94.0,47.0 95.4,48.5 96.8,50.0 98.2,51.5 99.6,53.0 101.1,54.5 102.5,56.0 103.9,57.5 105.3,59.0 106.7,60.5 108.2,62.0 109.6,63.5 111.0,65.0 112.4,66.5 113.8,68.0 115.3,69.5 116.7,71.0 118.1,72.5 119.5,74.0 120.9,75.5 122.4,77.0 123.8,78.5 125.2,80.0 126.6,81.5 128.0,83.0 129.5,84.5 130.9,86.0 132.3,87.5 133.7,89.0 135.1,90.5 136.6,92.0 138.0,93.5 139.4,95.0 140.8,96.5 142.2,98.0 143.7,99.5 145.1,101.0 146.5,102.5 147.9,104.0 149.3,105.5 150.8,107.0 152.2,108.5 153.6,110.0 155.0,111.5 156.4,113.0 157.9,114.5 159.3,116.0 160.7,117.5 162.1,119.0 163.5,120.5 165.0,122.0 166.4,123.5 167.8,125.0 169.2,126.5 170.6,128.0 172.1,129.5 173.5,131.0 174.9,132.5 176.3,134.0 177.7,135.5 179.2,137.0 180.6,138.5 182.0,140.0 183.4,138.5 184.8,137.0 186.3,135.5 187.7,134.0 189.1,132.5 190.5,131.0 191.9,129.5 193.4,128.0 194.8,126.5 196.2,125.0 197.6,123.5 199.0,122.0 200.5,120.5 201.9,119.0 203.3,117.5 204.7,116.0 206.1,114.5 207.6,113.0 209.0,111.5 210.4,110.0 211.8,108.5 213.2,107.0 214.7,105.5 216.1,104.0 217.5,102.5 218.9,101.0 220.3,99.5 221.8,98.0 223.2,96.5 224.6,95.0 226.0,93.5 227.4,92.0 228.9,90.5 230.3,89.0 231.7,87.5 233.1,86.0 234.5,84.5 236.0,83.0 237.4,81.5 238.8,80.0 240.2,78.5 241.6,77.0 243.1,75.5 244.5,74.0 245.9,72.5 247.3,71.0 248.7,69.5 250.2,68.0 251.6,66.5 253.0,65.0 254.4,63.5 255.8,62.0 257.3,60.5 258.7,59.0 260.1,57.5 261.5,56.0 262.9,54.5 264.4,53.0 265.8,51.5 267.2,50.0 268.6,48.5 270.0,47.0 271.5,45.5 272.9,44.0 274.3,42.5 275.7,41.0 277.1,39.5 278.6,38.0 280.0,36.5 281.4,35.0 282.8,33.5 284.2,32.0 285.7,30.5 287.1,29.0 288.5,27.5" fill="none" stroke="#86efac" stroke-width="3"/><text x="210.4" y="54.99999999999999" fill="#86efac" font-size="12" font-weight="bold" text-anchor="middle">|x| + 2</text><polyline points="99.6,28.0 101.1,29.5 102.5,31.0 103.9,32.5 105.3,34.0 106.7,35.5 108.2,37.0 109.6,38.5 111.0,40.0 112.4,41.5 113.8,43.0 115.3,44.5 116.7,46.0 118.1,47.5 119.5,49.0 120.9,50.5 122.4,52.0 123.8,53.5 125.2,55.0 126.6,56.5 128.0,58.0 129.5,59.5 130.9,61.0 132.3,62.5 133.7,64.0 135.1,65.5 136.6,67.0 138.0,68.5 139.4,70.0 140.8,71.5 142.2,73.0 143.7,74.5 145.1,76.0 146.5,77.5 147.9,79.0 149.3,80.5 150.8,82.0 152.2,83.5 153.6,85.0 155.0,86.5 156.4,88.0 157.9,89.5 159.3,91.0 160.7,92.5 162.1,94.0 163.5,95.5 165.0,97.0 166.4,98.5 167.8,100.0 169.2,101.5 170.6,103.0 172.1,104.5 173.5,106.0 174.9,107.5 176.3,109.0 177.7,110.5 179.2,112.0 180.6,113.5 182.0,115.0 183.4,116.5 184.8,118.0 186.3,119.5 187.7,121.0 189.1,122.5 190.5,124.0 191.9,125.5 193.4,127.0 194.8,128.5 196.2,130.0 197.6,131.5 199.0,133.0 200.5,134.5 201.9,136.0 203.3,137.5 204.7,139.0 206.1,140.5 207.6,142.0 209.0,143.5 210.4,145.0 211.8,146.5 213.2,148.0 214.7,149.5 216.1,151.0 217.5,152.5 218.9,154.0 220.3,155.5 221.8,157.0 223.2,158.5 224.6,160.0 226.0,161.5 227.4,163.0 228.9,164.5 230.3,166.0 231.7,167.5 233.1,169.0 234.5,170.5 236.0,172.0 237.4,173.5 238.8,175.0 240.2,176.5 241.6,178.0 243.1,179.5 244.5,181.0 245.9,182.5 247.3,184.0 248.7,185.5 250.2,187.0 251.6,188.5 253.0,190.0 254.4,188.5 255.8,187.0 257.3,185.5 258.7,184.0 260.1,182.5 261.5,181.0 262.9,179.5 264.4,178.0 265.8,176.5 267.2,175.0 268.6,173.5 270.0,172.0 271.5,170.5 272.9,169.0 274.3,167.5 275.7,166.0 277.1,164.5 278.6,163.0 280.0,161.5 281.4,160.0 282.8,158.5 284.2,157.0 285.7,155.5 287.1,154.0 288.5,152.5 289.9,151.0 291.3,149.5 292.8,148.0 294.2,146.5 295.6,145.0 297.0,143.5 298.4,142.0 299.9,140.5 301.3,139.0 302.7,137.5 304.1,136.0 305.5,134.5 307.0,133.0 308.4,131.5 309.8,130.0 311.2,128.5 312.6,127.0 314.1,125.5 315.5,124.0 316.9,122.5 318.3,121.0 319.7,119.5 321.2,118.0 322.6,116.5 324.0,115.0" fill="none" stroke="#fde68a" stroke-width="3"/><text x="295.6" y="175" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">|x − 3|</text></g><g transform="translate(360,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Reflections and stretches</text><line x1="40" y1="40" x2="40" y2="290" stroke="#1e293b"/><line x1="63.666666666666664" y1="40" x2="63.666666666666664" y2="290" stroke="#1e293b"/><line x1="87.33333333333333" y1="40" x2="87.33333333333333" y2="290" stroke="#1e293b"/><line x1="111" y1="40" x2="111" y2="290" stroke="#1e293b"/><line x1="134.66666666666666" y1="40" x2="134.66666666666666" y2="290" stroke="#1e293b"/><line x1="158.33333333333334" y1="40" x2="158.33333333333334" y2="290" stroke="#1e293b"/><line x1="182" y1="40" x2="182" y2="290" stroke="#1e293b"/><line x1="205.66666666666669" y1="40" x2="205.66666666666669" y2="290" stroke="#1e293b"/><line x1="229.33333333333331" y1="40" x2="229.33333333333331" y2="290" stroke="#1e293b"/><line x1="253" y1="40" x2="253" y2="290" stroke="#1e293b"/><line x1="276.6666666666667" y1="40" x2="276.6666666666667" y2="290" stroke="#1e293b"/><line x1="300.3333333333333" y1="40" x2="300.3333333333333" y2="290" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="290" stroke="#1e293b"/><line x1="40" y1="290" x2="324" y2="290" stroke="#1e293b"/><line x1="40" y1="265" x2="324" y2="265" stroke="#1e293b"/><line x1="40" y1="240" x2="324" y2="240" stroke="#1e293b"/><line x1="40" y1="215" x2="324" y2="215" stroke="#1e293b"/><line x1="40" y1="190" x2="324" y2="190" stroke="#1e293b"/><line x1="40" y1="165" x2="324" y2="165" stroke="#1e293b"/><line x1="40" y1="140" x2="324" y2="140" stroke="#1e293b"/><line x1="40" y1="115" x2="324" y2="115" stroke="#1e293b"/><line x1="40" y1="90" x2="324" y2="90" stroke="#1e293b"/><line x1="40" y1="65" x2="324" y2="65" stroke="#1e293b"/><line x1="40" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="40" y1="165" x2="324" y2="165" stroke="#94a3b8" stroke-width="1.5"/><line x1="182" y1="40" x2="182" y2="290" stroke="#94a3b8" stroke-width="1.5"/><text x="40" y="179" fill="#94a3b8" font-size="10" text-anchor="middle">-6</text><text x="87.33333333333333" y="179" fill="#94a3b8" font-size="10" text-anchor="middle">-4</text><text x="134.66666666666666" y="179" fill="#94a3b8" font-size="10" text-anchor="middle">-2</text><text x="229.33333333333331" y="179" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="276.6666666666667" y="179" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="324" y="179" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="177" y="268" fill="#94a3b8" font-size="10" text-anchor="end">-4</text><text x="177" y="218" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="177" y="118" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="177" y="68" fill="#94a3b8" font-size="10" text-anchor="end">4</text><polyline points="52.8,28.5 54.2,30.0 55.6,31.5 57.0,33.0 58.5,34.5 59.9,36.0 61.3,37.5 62.7,39.0 64.1,40.5 65.6,42.0 67.0,43.5 68.4,45.0 69.8,46.5 71.2,48.0 72.7,49.5 74.1,51.0 75.5,52.5 76.9,54.0 78.3,55.5 79.8,57.0 81.2,58.5 82.6,60.0 84.0,61.5 85.4,63.0 86.9,64.5 88.3,66.0 89.7,67.5 91.1,69.0 92.5,70.5 94.0,72.0 95.4,73.5 96.8,75.0 98.2,76.5 99.6,78.0 101.1,79.5 102.5,81.0 103.9,82.5 105.3,84.0 106.7,85.5 108.2,87.0 109.6,88.5 111.0,90.0 112.4,91.5 113.8,93.0 115.3,94.5 116.7,96.0 118.1,97.5 119.5,99.0 120.9,100.5 122.4,102.0 123.8,103.5 125.2,105.0 126.6,106.5 128.0,108.0 129.5,109.5 130.9,111.0 132.3,112.5 133.7,114.0 135.1,115.5 136.6,117.0 138.0,118.5 139.4,120.0 140.8,121.5 142.2,123.0 143.7,124.5 145.1,126.0 146.5,127.5 147.9,129.0 149.3,130.5 150.8,132.0 152.2,133.5 153.6,135.0 155.0,136.5 156.4,138.0 157.9,139.5 159.3,141.0 160.7,142.5 162.1,144.0 163.5,145.5 165.0,147.0 166.4,148.5 167.8,150.0 169.2,151.5 170.6,153.0 172.1,154.5 173.5,156.0 174.9,157.5 176.3,159.0 177.7,160.5 179.2,162.0 180.6,163.5 182.0,165.0 183.4,163.5 184.8,162.0 186.3,160.5 187.7,159.0 189.1,157.5 190.5,156.0 191.9,154.5 193.4,153.0 194.8,151.5 196.2,150.0 197.6,148.5 199.0,147.0 200.5,145.5 201.9,144.0 203.3,142.5 204.7,141.0 206.1,139.5 207.6,138.0 209.0,136.5 210.4,135.0 211.8,133.5 213.2,132.0 214.7,130.5 216.1,129.0 217.5,127.5 218.9,126.0 220.3,124.5 221.8,123.0 223.2,121.5 224.6,120.0 226.0,118.5 227.4,117.0 228.9,115.5 230.3,114.0 231.7,112.5 233.1,111.0 234.5,109.5 236.0,108.0 237.4,106.5 238.8,105.0 240.2,103.5 241.6,102.0 243.1,100.5 244.5,99.0 245.9,97.5 247.3,96.0 248.7,94.5 250.2,93.0 251.6,91.5 253.0,90.0 254.4,88.5 255.8,87.0 257.3,85.5 258.7,84.0 260.1,82.5 261.5,81.0 262.9,79.5 264.4,78.0 265.8,76.5 267.2,75.0 268.6,73.5 270.0,72.0 271.5,70.5 272.9,69.0 274.3,67.5 275.7,66.0 277.1,64.5 278.6,63.0 280.0,61.5 281.4,60.0 282.8,58.5 284.2,57.0 285.7,55.5 287.1,54.0 288.5,52.5 289.9,51.0 291.3,49.5 292.8,48.0 294.2,46.5 295.6,45.0 297.0,43.5 298.4,42.0 299.9,40.5 301.3,39.0 302.7,37.5 304.1,36.0 305.5,34.5 307.0,33.0 308.4,31.5 309.8,30.0 311.2,28.5" fill="none" stroke="#94a3b8" stroke-width="3" stroke-dasharray="6 4"/><text x="77.86666666666666" y="109.99999999999999" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">y = |x|</text><polyline points="52.8,301.5 54.2,300.0 55.6,298.5 57.0,297.0 58.5,295.5 59.9,294.0 61.3,292.5 62.7,291.0 64.1,289.5 65.6,288.0 67.0,286.5 68.4,285.0 69.8,283.5 71.2,282.0 72.7,280.5 74.1,279.0 75.5,277.5 76.9,276.0 78.3,274.5 79.8,273.0 81.2,271.5 82.6,270.0 84.0,268.5 85.4,267.0 86.9,265.5 88.3,264.0 89.7,262.5 91.1,261.0 92.5,259.5 94.0,258.0 95.4,256.5 96.8,255.0 98.2,253.5 99.6,252.0 101.1,250.5 102.5,249.0 103.9,247.5 105.3,246.0 106.7,244.5 108.2,243.0 109.6,241.5 111.0,240.0 112.4,238.5 113.8,237.0 115.3,235.5 116.7,234.0 118.1,232.5 119.5,231.0 120.9,229.5 122.4,228.0 123.8,226.5 125.2,225.0 126.6,223.5 128.0,222.0 129.5,220.5 130.9,219.0 132.3,217.5 133.7,216.0 135.1,214.5 136.6,213.0 138.0,211.5 139.4,210.0 140.8,208.5 142.2,207.0 143.7,205.5 145.1,204.0 146.5,202.5 147.9,201.0 149.3,199.5 150.8,198.0 152.2,196.5 153.6,195.0 155.0,193.5 156.4,192.0 157.9,190.5 159.3,189.0 160.7,187.5 162.1,186.0 163.5,184.5 165.0,183.0 166.4,181.5 167.8,180.0 169.2,178.5 170.6,177.0 172.1,175.5 173.5,174.0 174.9,172.5 176.3,171.0 177.7,169.5 179.2,168.0 180.6,166.5 182.0,165.0 183.4,166.5 184.8,168.0 186.3,169.5 187.7,171.0 189.1,172.5 190.5,174.0 191.9,175.5 193.4,177.0 194.8,178.5 196.2,180.0 197.6,181.5 199.0,183.0 200.5,184.5 201.9,186.0 203.3,187.5 204.7,189.0 206.1,190.5 207.6,192.0 209.0,193.5 210.4,195.0 211.8,196.5 213.2,198.0 214.7,199.5 216.1,201.0 217.5,202.5 218.9,204.0 220.3,205.5 221.8,207.0 223.2,208.5 224.6,210.0 226.0,211.5 227.4,213.0 228.9,214.5 230.3,216.0 231.7,217.5 233.1,219.0 234.5,220.5 236.0,222.0 237.4,223.5 238.8,225.0 240.2,226.5 241.6,228.0 243.1,229.5 244.5,231.0 245.9,232.5 247.3,234.0 248.7,235.5 250.2,237.0 251.6,238.5 253.0,240.0 254.4,241.5 255.8,243.0 257.3,244.5 258.7,246.0 260.1,247.5 261.5,249.0 262.9,250.5 264.4,252.0 265.8,253.5 267.2,255.0 268.6,256.5 270.0,258.0 271.5,259.5 272.9,261.0 274.3,262.5 275.7,264.0 277.1,265.5 278.6,267.0 280.0,268.5 281.4,270.0 282.8,271.5 284.2,273.0 285.7,274.5 287.1,276.0 288.5,277.5 289.9,279.0 291.3,280.5 292.8,282.0 294.2,283.5 295.6,285.0 297.0,286.5 298.4,288.0 299.9,289.5 301.3,291.0 302.7,292.5 304.1,294.0 305.5,295.5 307.0,297.0 308.4,298.5 309.8,300.0 311.2,301.5" fill="none" stroke="#fca5a5" stroke-width="3"/><text x="267.2" y="275" fill="#fca5a5" font-size="12" font-weight="bold" text-anchor="middle">−|x|</text><polyline points="139.4,30.0 140.8,34.5 142.2,39.0 143.7,43.5 145.1,48.0 146.5,52.5 147.9,57.0 149.3,61.5 150.8,66.0 152.2,70.5 153.6,75.0 155.0,79.5 156.4,84.0 157.9,88.5 159.3,93.0 160.7,97.5 162.1,102.0 163.5,106.5 165.0,111.0 166.4,115.5 167.8,120.0 169.2,124.5 170.6,129.0 172.1,133.5 173.5,138.0 174.9,142.5 176.3,147.0 177.7,151.5 179.2,156.0 180.6,160.5 182.0,165.0 183.4,160.5 184.8,156.0 186.3,151.5 187.7,147.0 189.1,142.5 190.5,138.0 191.9,133.5 193.4,129.0 194.8,124.5 196.2,120.0 197.6,115.5 199.0,111.0 200.5,106.5 201.9,102.0 203.3,97.5 204.7,93.0 206.1,88.5 207.6,84.0 209.0,79.5 210.4,75.0 211.8,70.5 213.2,66.0 214.7,61.5 216.1,57.0 217.5,52.5 218.9,48.0 220.3,43.5 221.8,39.0 223.2,34.5 224.6,30.0" fill="none" stroke="#67e8f9" stroke-width="3"/><text x="238.8" y="50.00000000000001" fill="#67e8f9" font-size="12" font-weight="bold" text-anchor="middle">3|x|</text></g>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Transformation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Effect on the graph</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical translation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x) + k</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Up k units if k is positive; down if k is negative</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal translation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(x − h)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right h units if h is positive; left if h is negative</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflection over the x-axis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−f(x)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flips the graph upside down</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflection over the y-axis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(−x)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flips the graph left to right</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>f(x + 2) moves the graph 2 units LEFT, because f(x + 2) = f(x − (−2)), so h = −2.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Stretches and Compressions</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Transformation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Effect</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical stretch</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a·f(x), |a| &gt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph pulled away from the x-axis; looks narrower</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical compression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a·f(x), 0 &lt; |a| &lt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph squeezed toward the x-axis; looks wider</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal compression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(bx), |b| &gt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph squeezed toward the y-axis by a factor of 1/b</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Horizontal stretch</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">f(bx), 0 &lt; |b| &lt; 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph pulled away from the y-axis by a factor of 1/b</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · General transformed function</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">g(x) = a · f(x − h) + k</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> a = vertical stretch, compression or reflection; h = horizontal shift; k = vertical shift.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Writing or graphing any transformation of a parent function.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Shifting the wrong way horizontally: x − h moves right when h is positive.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> For absolute value and quadratics, the vertex moves from (0, 0) to (h, k).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Combining Transformations</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Describing and graphing (F-BF.3)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Describe how g(x) = −2|x + 1| + 3 is related to f(x) = |x|, and find its vertex.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write in a·f(x − h) + k form</strong>
    </p>
    <div style="margin:6px 0 0 34px;">g(x) = −2|x − (−1)| + 3, so a = −2, h = −1, k = 3.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: a = −2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Vertical stretch by a factor of 2 and reflection over the x-axis.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: h = −1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Shift 1 unit left.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: k = 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Shift 3 units up.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Vertex</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(h, k) = (−1, 3); the V opens downward.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> g is |x| stretched vertically by 2, reflected over the x-axis, shifted 1 left and 3 up, with vertex (−1, 3), opening down.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Writing the equation in a·f(x − h) + k form makes every transformation visible.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Reading h as +1 because of the “+1” inside. Rewrite x + 1 as x − (−1).</p>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Writing a transformed function</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write a function for the square root parent graph shifted 4 units right and 2 units down.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Parent</strong>
    </p>
    <div style="margin:6px 0 0 34px;">f(x) = √x</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Right 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">√(x − 4)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Down 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">√(x − 4) − 2</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> g(x) = √(x − 4) − 2, which starts at (4, −2).</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Describe y = x² − 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The parabola shifted 5 units down.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Describe y = (x − 2)².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Shifted 2 units right.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What does a = ½ do to |x|?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vertical compression by a factor of ½ (a wider V).</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Looking for structure</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Predicting graphs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using technology to verify</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Writing equations from graphs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precise description</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>A reliable method for graphing transformations is to transform a few <strong>key points</strong>. For |x|, use (−1, 1), (0, 0) and (1, 1). For g(x) = a|x − h| + k, each point (x, y) moves to (x + h, a·y + k). Plotting the new points and connecting them is faster and more accurate than guessing the shape.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why does a negative value of a flip the graph, while a negative h only moves it?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #f48fb1;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Video game designers move and resize characters on screen using the same translation, reflection and scaling rules.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists adjust a model’s parameters — like shifting a temperature curve up for a warmer year — using transformations.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Animators, graphic designers, audio engineers and data scientists use transformations every day.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Describe y = |x| + 4.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Outside, vertical.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Shift up 4.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Describe y = |x + 6|.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Inside is opposite.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Shift left 6.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Describe y = −x².</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Outputs change sign.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Reflection over the x-axis.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Transform the key points (−1, 1), (0, 0), (1, 1) of |x| for g(x) = 3|x − 2| − 1 and graph the result.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner writes a transformed function; the other describes it in words and sketches it, then you swap.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Play “transformation charades”: act out a shift, reflection or stretch with your arms while others write the equation.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>In a graphing calculator, type y = a|x − h| + k and add sliders for a, h and k. Record what each slider does.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Describe y = x² + 7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Shift up 7.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe y = √(x + 3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Shift left 3.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find the vertex of y = |x − 5| − 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(5, −2)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Write the function for |x| reflected over the x-axis and shifted up 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">y = −|x| + 4</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f48fb1;">
    <p style="margin:0 0 6px 0;color:#f48fb1;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Describe g(x) = ½(x + 3)² − 6 relative to f(x) = x², and give its vertex.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vertical compression by ½, shift left 3 and down 6; vertex (−3, −6).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A company’s cost graph C(x) shifts up by $500 because of a new fee. Write the new function.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">C(x) + 500</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> F-BF.3: Explain the effect of replacing f(x) with f(x) − 3 and with f(x − 3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">f(x) − 3 shifts the graph down 3; f(x − 3) shifts it right 3.</div>
    </details>
    </div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Transformations change parent graphs. For g(x) = a·f(x − h) + k: k shifts the graph up or down; h shifts it right (positive h) or left (negative h); a stretches (|a| &gt; 1) or compresses (|a| between 0 and 1) it vertically, and a negative a reflects it over the x-axis. f(−x) reflects over the y-axis, and f(bx) compresses or stretches horizontally. Inside changes act horizontally and in the opposite direction; outside changes act vertically as expected.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>g(x) = a·f(x − h) + k.</li>
    <li>k: up/down; h: right/left (opposite sign).</li>
    <li>a: stretch, compress, reflect.</li>
    <li>Vertex moves to (h, k).</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rewrite x + h as x − (−h).</li>
    <li>Transform key points.</li>
    <li>Check with technology.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Shifting the wrong way horizontally.</li>
    <li>Confusing stretch and compression.</li>
    <li>Forgetting the reflection from a negative a.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use three key points.</li>
    <li>Describe transformations in order: reflect/stretch, then shift.</li>
    <li>Use sliders to explore.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State a, h and k first.</li>
    <li>Label the vertex on your sketch.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-BF.3 Transformations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Effects of k, a, h and b.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.7 Graphing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sketching transformed graphs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP.5 Tools</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphing sliders.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Persistence</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and design</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mathematical modeling</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Transformations are how computers move, resize and flip everything you see on a screen.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Graph five transformed functions using key points.</li>
    <li>Write equations for three graphs your teacher provides.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Why do inside changes move graphs the opposite way?</li>
    <li>Which transformation is hardest for me?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Translation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slide.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Reflection</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flip.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Stretch</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pull away from an axis.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Compression</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Squeeze toward an axis.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe translations.</p>
    <p style="margin:6px 0;">☐ I can describe reflections.</p>
    <p style="margin:6px 0;">☐ I can describe stretches and compressions.</p>
    <p style="margin:6px 0;">☐ I can write and graph transformed functions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The graph of y = |x| − 6 is the graph of |x| shifted:',
            options: ['Up 6', 'Down 6', 'Left 6', 'Right 6'],
            correct: 1,
            explanation: 'The answer is Down 6. Outside change, vertical.'
        },
        {
            question: 'The graph of y = (x + 4)² is the parent shifted:',
            options: ['Left 4', 'Right 4', 'Up 4', 'Down 4'],
            correct: 0,
            explanation: 'Inside change, opposite direction.'
        },
        {
            question: 'y = −f(x) is a reflection over the:',
            options: ['y-axis', 'line y = x', 'origin only', 'x-axis'],
            correct: 3,
            explanation: 'The answer is x-axis. Outputs change sign.'
        },
        {
            question: 'y = f(−x) is a reflection over the:',
            options: ['x-axis', 'y-axis', 'line y = x', 'line y = 1'],
            correct: 1,
            explanation: 'The answer is y-axis. Inputs change sign.'
        },
        {
            question: 'y = 4|x| compared with |x| is:',
            options: ['A vertical compression', 'A vertical stretch', 'A shift up 4', 'A shift right 4'],
            correct: 1,
            explanation: 'The answer is A vertical stretch. Outputs multiplied by 4.'
        },
        {
            question: 'y = ⅓x² compared with x² is:',
            options: ['A vertical stretch', 'A reflection', 'A shift down', 'A vertical compression'],
            correct: 3,
            explanation: 'The answer is A vertical compression. The parabola looks wider.'
        },
        {
            question: 'The vertex of y = |x − 2| + 7 is:',
            options: ['(2, 7)', '(−2, 7)', '(2, −7)', '(7, 2)'],
            correct: 0,
            explanation: 'The answer is (2, 7). (h, k).'
        },
        {
            question: 'Which function is √x shifted right 1 and up 5?',
            options: ['√(x − 1) + 5', '√(x + 1) + 5', '√(x − 5) + 1', '√x + 6'],
            correct: 0,
            explanation: 'The answer is √(x − 1) + 5. Inside −1, outside +5.'
        },
        {
            question: 'In g(x) = −3|x + 2| − 1, the value of h is:',
            options: ['2', '−3', '−2', '−1'],
            correct: 2,
            explanation: 'The answer is −2. x + 2 = x − (−2).'
        },
        {
            question: 'Which transformation does NOT change a graph’s shape?',
            options: ['Vertical stretch', 'Vertical compression', 'Translation', 'Horizontal compression'],
            correct: 2,
            explanation: 'The answer is Translation. Translations only slide.'
        }
    ]
},
{
    name: '1.1 Activity: Transformation Explorer',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Transformation Explorer</h2>
    <p style="font-size:16px;">In this investigation you will use a graphing calculator with sliders to discover the rules for transformations yourself, then test your rules on a new parent function you have not yet transformed.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotate roles: slider operator, recorder, predictor and checker.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Predict first</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Always write a prediction before moving a slider.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use Desmos, GeoGebra or a graphing calculator; sketch results on paper too.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share discoveries; wrong predictions are part of learning.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Math Investigation: Discovering the Rules</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To discover how a, h and k in g(x) = a·f(x − h) + k transform a parent graph, and to test the rules on a new parent function.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graphing calculator or graphing website</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Colored pencils</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recording sheet</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Parent 1: f(x) = |x|</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Parent 2: f(x) = x²</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Test parent: f(x) = √x</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Slider ranges: a from −3 to 3; h and k from −5 to 5</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep devices on the desk.</li>
    <li>Save your graph link.</li>
    <li>Share the screen so everyone can see.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Graph y = |x| and add y = |x| + k with a slider for k. Predict, then move k. Record the rule.</li>
    <li>Replace with y = |x − h| and a slider for h. Predict which way the graph moves when h = 3. Record the rule.</li>
    <li>Replace with y = a|x| and a slider for a. Try a = 2, a = 0.5 and a = −1. Record what happens.</li>
    <li>Combine all three: y = a|x − h| + k. Find the vertex for several settings and write a rule for the vertex.</li>
    <li>Repeat steps 1–4 with y = x² to check that the same rules hold.</li>
    <li>Test your rules on y = √x: predict the graph of y = −√(x + 2) + 4 on paper, then check with technology.</li>
    <li>Write your three rules in your own words and give one example of each.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Prediction</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Actual result</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule discovered</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|x| + 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Up 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">k moves up/down</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|x − 3|</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">h moves opposite to the sign</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2|x|</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Narrower</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a stretches</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−|x|</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flipped</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">negative a reflects</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−√(x + 2) + 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Starts at (−2, 4), goes down</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rules hold for √x</td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why does |x − 3| move right instead of left?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The vertex is where x − 3 = 0, which is x = 3, three units right of the origin.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What happens when a is between 0 and 1?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The graph is compressed vertically and looks wider.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Did the rules work for √x?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — the same a, h and k rules apply to every parent function.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> For any parent function written as a·f(x − h) + k, k shifts the graph up or down, a positive h shifts it right and a negative h shifts it left, and a stretches, compresses or reflects it vertically.</p>
    <p><strong style="color:#fde68a;">Why it works:</strong> The rules are the same for every parent because they act on the inputs and outputs, not on the particular shape.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Moving sliders without predicting first.</li>
    <li>Recording h with the wrong sign.</li>
    <li>Testing only one parent function.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Engineers and data scientists use sliders and parameter changes to fit models to real data.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Write a short report explaining your three rules for a, h and k, with a sketch for each, and describe how you tested them on √x.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Predict, test, then explain — that is how mathematicians discover rules.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What does k = −4 do to a graph?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Shifts it down 4.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is the vertex of y = a|x − h| + k?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(h, k)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Where does y = −√(x + 2) + 4 start?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">At (−2, 4).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How could you show that a reflection and a shift can be done in either order or not?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Test both orders with sliders: reflecting then shifting up can differ from shifting up then reflecting.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Which parent function would you test next, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Answers vary; e.g. x³ to see whether the rules hold for an odd function.</div>
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
            question: 'The goal of the investigation is to:',
            options: ['Memorize answers', 'Avoid graphing', 'Discover transformation rules', 'Measure angles'],
            correct: 2,
            explanation: 'The answer is Discover transformation rules. Discovery through testing.'
        },
        {
            question: 'Before moving a slider you should:',
            options: ['Close the program', 'Guess randomly', 'Write a prediction', 'Skip the step'],
            correct: 2,
            explanation: 'The answer is Write a prediction. Predict first.'
        },
        {
            question: 'A slider for k moves the graph:',
            options: ['Left or right', 'Narrower only', 'Upside down only', 'Up or down'],
            correct: 3,
            explanation: 'The answer is Up or down. k is vertical.'
        },
        {
            question: 'When a = −1, the graph is:',
            options: ['Reflected over the x-axis', 'Shifted left', 'Stretched horizontally', 'Unchanged'],
            correct: 0,
            explanation: 'The answer is Reflected over the x-axis. Outputs change sign.'
        },
        {
            question: 'The test parent function in this investigation is:',
            options: ['x³', '1/x', 'A constant', '√x'],
            correct: 3,
            explanation: 'The answer is √x. Square root.'
        },
        {
            question: 'The transformation rules apply to:',
            options: ['Only |x|', 'Every parent function', 'Only x²', 'Only lines'],
            correct: 1,
            explanation: 'They act on inputs and outputs.'
        }
    ]
},
{
    name: '1.1 Quiz: Functions and Parent Functions',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Functions and Parent Functions</h2>
    <p style="font-size:16px;">Test your understanding of functions, notation, domain and range, parent functions, key features and transformations from Topic 1.1.</p>
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
    <li>Identifying functions</li>
    <li>Function notation</li>
    <li>Domain and range in interval notation</li>
    <li>Parent functions and key features</li>
    <li>Translations and reflections</li>
    <li>Stretches and compressions</li>
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
    <div>For transformations, rewrite the function in the form a·f(x − h) + k before deciding which way it moves.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is NOT a function?',
            options: ['{(1, 1), (2, 1), (3, 1)}', '{(0, 5), (1, 6), (2, 7)}', '{(3, 1), (3, 2), (4, 5)}', '{(−1, 0), (0, 1), (1, 2)}'],
            correct: 2,
            explanation: 'The answer is {(3, 1), (3, 2), (4, 5)}. Input 3 has two outputs.'
        },
        {
            question: 'If f(x) = x² − 2x, then f(3) =',
            options: ['15', '9', '−3', '3'],
            correct: 3,
            explanation: 'The answer is 3. 9 − 6 = 3.'
        },
        {
            question: 'The interval (−3, 5] means:',
            options: ['Both endpoints included', 'Both excluded', '−3 is excluded and 5 is included', '5 is excluded'],
            correct: 2,
            explanation: 'The answer is −3 is excluded and 5 is included. ( excludes, ] includes.'
        },
        {
            question: 'The parent function of y = √(x − 1) + 2 is:',
            options: ['f(x) = x²', 'f(x) = √x', 'f(x) = |x|', 'f(x) = x'],
            correct: 1,
            explanation: 'The answer is f(x) = √x. Square root family.'
        },
        {
            question: 'Which parent function has domain [0, ∞)?',
            options: ['f(x) = |x|', 'f(x) = x³', 'f(x) = x', 'f(x) = √x'],
            correct: 3,
            explanation: 'The answer is f(x) = √x. No negative inputs.'
        },
        {
            question: 'f(x) = |x| is increasing on:',
            options: ['(−∞, 0)', '(−∞, ∞)', 'Nowhere', '(0, ∞)'],
            correct: 3,
            explanation: 'The answer is (0, ∞). Right side rises.'
        },
        {
            question: 'y = (x − 6)² + 1 has vertex:',
            options: ['(−6, 1)', '(6, −1)', '(6, 1)', '(1, 6)'],
            correct: 2,
            explanation: 'The answer is (6, 1). (h, k) = (6, 1).'
        },
        {
            question: 'y = 0.25|x| compared with |x| is:',
            options: ['A vertical stretch', 'A vertical compression', 'A reflection', 'A shift down'],
            correct: 1,
            explanation: 'The answer is A vertical compression. Factor between 0 and 1.'
        },
        {
            question: 'Which describes y = −|x − 1|?',
            options: ['Reflected over the x-axis and shifted right 1', 'Shifted left 1', 'Shifted up 1', 'Reflected over the y-axis only'],
            correct: 0,
            explanation: 'The answer is Reflected over the x-axis and shifted right 1. Negative a and h = 1.'
        },
        {
            question: 'An even function satisfies:',
            options: ['f(−x) = −f(x)', 'f(−x) = f(x)', 'f(x) = 0', 'f(x) = x'],
            correct: 1,
            explanation: 'The answer is f(−x) = f(x). y-axis symmetry.'
        }
    ]
},
{
    name: '1.1 Assignment: Function Family Portfolio',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Function Family Portfolio</h2>
    <p style="font-size:16px;">Create a portfolio page for each of the six parent functions, plus two transformed “children” of each, showing that you can describe and graph functions in every representation.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your portfolio will become a reference you use for the rest of Algebra II. For each parent function, show its graph, equation, table, key features and a real-world example. Then create two transformed versions and explain exactly how each one differs from its parent.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Sketch graphs by hand on a grid, then check them with a graphing tool. Label key points and intercepts.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>For each of the six parent functions, draw an accurate graph and make a table with at least five points.</li>
    <li>List its domain, range, intercepts, intervals of increase and decrease, minimum or maximum, symmetry and end behavior.</li>
    <li>Give one real-world situation the family could model.</li>
    <li>Write two transformed functions for each parent, using at least one reflection and one stretch or compression in the whole portfolio.</li>
    <li>Graph each transformed function using key points and describe its transformations in words.</li>
    <li>Check every graph with technology and correct any errors.</li>
    <li>Write a one-paragraph reflection on which transformation rule is most important to remember and why.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Six parent function pages</li>
    <li>Twelve transformed functions with graphs and descriptions</li>
    <li>A reflection paragraph</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, labeled graphs with key points for all functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate graphs with minor labeling gaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some inaccurate graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many missing or incorrect graphs</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Key features</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete, correct features in proper notation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly complete and correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors or omissions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little attempt</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transformations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Precise descriptions matching every equation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct descriptions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some sign or direction errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incorrect or missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Real-world connections</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thoughtful, realistic example for each family</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reasonable examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation and reflection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized, clear and insightful</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized and clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat disorganized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disorganized</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use the same scale on every grid.<br>Label vertices and starting points.<br>Write transformations in a, h, k order.<br>Check signs carefully.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which parent function do I understand best?</li>
    <li>Which transformation did I get wrong first, and how did I fix it?</li>
    <li>How will this portfolio help me later this year?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many parent functions does the portfolio include?',
            options: ['Three', 'Two', 'Ten', 'Six'],
            correct: 3,
            explanation: 'The answer is Six. One page each.'
        },
        {
            question: 'How many transformed functions per parent?',
            options: ['One', 'Five', 'Two', 'None'],
            correct: 2,
            explanation: 'The answer is Two. Two children each.'
        },
        {
            question: 'Graphs should first be:',
            options: ['Only made with technology', 'Sketched by hand, then checked with technology', 'Copied from a book', 'Skipped'],
            correct: 1,
            explanation: 'The answer is Sketched by hand, then checked with technology. Both skills matter.'
        },
        {
            question: 'Each page lists the function’s:',
            options: ['Price', 'Key features', 'Inventor only', 'Color'],
            correct: 1,
            explanation: 'Domain, range, intervals and more.'
        },
        {
            question: 'The portfolio must include at least one:',
            options: ['Circle', 'Triangle', 'Reflection', 'Statistic'],
            correct: 2,
            explanation: 'And one stretch or compression.'
        },
        {
            question: 'The reflection paragraph is about:',
            options: ['Your favorite color', 'Another subject', 'Nothing', 'The most important transformation rule'],
            correct: 3,
            explanation: 'The answer is The most important transformation rule. Think about your learning.'
        }
    ]
},
{
    name: '1.1 Review: Functions and Parent Functions',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Functions and Parent Functions</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before moving on to modeling in Topic 1.2.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Functions and Notation</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>One input → exactly one output; vertical line test.</li>
    <li>f(a): substitute a; f(x) = b: solve.</li>
    <li>Domain = inputs; range = outputs.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Interval Notation</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>[ ] includes; ( ) excludes.</li>
    <li>∞ always uses ( ).</li>
    <li>x ≥ 3 → [3, ∞).</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Parent Functions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Constant, x, |x|, x², √x, x³.</li>
    <li>Key features: intercepts, intervals, extrema, symmetry, end behavior.</li>
    <li>Even: f(−x) = f(x); odd: f(−x) = −f(x).</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Transformations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>g(x) = a·f(x − h) + k.</li>
    <li>k: up/down; h: right/left (opposite sign); a: stretch/compress/reflect.</li>
    <li>Vertex moves to (h, k).</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Parent</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Transformations</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = |x| + 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|x|</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Up 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = (x − 2)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right 2</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = −√x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflect over x-axis</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = 2|x + 1| − 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|x|</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stretch by 2, left 1, down 4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = ½x³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertical compression by ½</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Is {(2, 3), (4, 3), (6, 3)} a function?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes — each input has one output.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> If g(x) = 4x − 1, find g(−2) and solve g(x) = 11.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">g(−2) = −9; 4x − 1 = 11 gives x = 3.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Write 2 ≤ x ≤ 9 in interval notation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">[2, 9]</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Describe the end behavior of f(x) = x².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">As x → ±∞, f(x) → ∞.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Describe y = −(x + 3)² + 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Reflect over x-axis, left 3, up 2; vertex (−3, 2).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Write the function: |x| shifted right 4 and stretched by 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">y = 3|x − 4|</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can identify functions.</p>
    <p style="margin:6px 0;">☐ I can use function notation.</p>
    <p style="margin:6px 0;">☐ I can write domain and range.</p>
    <p style="margin:6px 0;">☐ I can describe parent functions.</p>
    <p style="margin:6px 0;">☐ I can describe and graph transformations.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'f(x) = −2x + 6. Find f(3).',
            options: ['12', '−12', '0', '3'],
            correct: 2,
            explanation: 'The answer is 0. −6 + 6 = 0.'
        },
        {
            question: 'Which interval is “all numbers less than or equal to 1”?',
            options: ['(−∞, 1)', '(−∞, 1]', '[1, ∞)', '(1, ∞)'],
            correct: 1,
            explanation: 'The answer is (−∞, 1]. Included endpoint 1.'
        },
        {
            question: 'The parent function with a U shape is:',
            options: ['|x|', '√x', 'x²', 'x³'],
            correct: 2,
            explanation: 'The answer is x². A parabola.'
        },
        {
            question: 'y = |x + 5| shifts |x|:',
            options: ['Left 5', 'Right 5', 'Up 5', 'Down 5'],
            correct: 0,
            explanation: 'The answer is Left 5. Inside, opposite.'
        },
        {
            question: 'y = 5x² compared with x² is:',
            options: ['Wider (compressed)', 'Narrower (stretched)', 'Shifted up 5', 'Reflected'],
            correct: 1,
            explanation: 'The answer is Narrower (stretched). a = 5.'
        },
        {
            question: 'The vertex of y = −|x − 4| + 1 is:',
            options: ['(−4, 1)', '(4, −1)', '(1, 4)', '(4, 1)'],
            correct: 3,
            explanation: 'The answer is (4, 1). (h, k).'
        }
    ]
},
{
    name: '1.1 Summary: Functions and Parent Functions',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.1 Functions and Parent Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Functions and Parent Functions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> A function gives exactly one output for each input; a few parent functions and a few transformations — shifts, reflections, stretches and compressions — can describe a huge variety of graphs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A function assigns one output to each input; the vertical line test checks graphs.</li>
    <li>Function notation f(x) names outputs; f(a) is found by substitution.</li>
    <li>Domain and range describe inputs and outputs, written with inequalities or interval notation.</li>
    <li>Six parent functions — constant, linear, absolute value, quadratic, square root and cubic — each have recognizable key features.</li>
    <li>In g(x) = a·f(x − h) + k, a stretches, compresses or reflects; h shifts horizontally; k shifts vertically.</li>
    <li>Inside changes act horizontally and opposite to their sign; outside changes act vertically.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Functions, Domain and Range</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Definition of a function, notation, domain and range</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Substitute carefully; use correct brackets</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Parent Functions and Key Features</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Six parents; intercepts, intervals, extrema, symmetry, end behavior</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Read graphs left to right</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Transformations of Functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Translations, reflections, stretches, compressions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rewrite as a·f(x − h) + k</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">function</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">function notation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">domain</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">range</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">interval notation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertical line test</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">parent function</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">x-intercept</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">end behavior</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">even function</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">odd function</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">translation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">reflection</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertical stretch</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertex form</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Whenever you see a graph — in the news, a science class or an app — recognizing its family and transformations helps you understand it instantly.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will use linear, absolute value and piecewise functions to model real situations, from phone plans to shipping costs.</div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can identify functions and use function notation.</p>
    <p style="margin:6px 0;">✔️ I can state domain and range in interval notation.</p>
    <p style="margin:6px 0;">✔️ I can describe the six parent functions.</p>
    <p style="margin:6px 0;">✔️ I can describe and graph transformations.</p>
    <p style="margin:6px 0;">✔️ I can write a transformed function from a description.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that:',
            options: ['Every graph is unique and unrelated', 'A few parents and transformations describe many graphs', 'Only lines matter', 'Functions are always linear'],
            correct: 1,
            explanation: 'The answer is A few parents and transformations describe many graphs. Families and transformations.'
        },
        {
            question: 'Topic 1.2 will study:',
            options: ['Linear, absolute value and piecewise models', 'Trigonometry', 'Probability only', 'Circles'],
            correct: 0,
            explanation: 'The answer is Linear, absolute value and piecewise models. Modeling change.'
        },
        {
            question: 'In g(x) = a·f(x − h) + k, k causes a:',
            options: ['Horizontal shift', 'Vertical shift', 'Reflection over the y-axis', 'Horizontal stretch'],
            correct: 1,
            explanation: 'The answer is Vertical shift. Outside change.'
        },
        {
            question: 'Which parent function is odd?',
            options: ['x²', '|x|', 'x³', 'A constant 3'],
            correct: 2,
            explanation: 'The answer is x³. Origin symmetry.'
        },
        {
            question: '[−2, 6) includes:',
            options: ['6 but not −2', 'Both', '−2 but not 6', 'Neither'],
            correct: 2,
            explanation: 'Bracket includes; parenthesis excludes.'
        },
        {
            question: 'A function assigns to each input:',
            options: ['Two outputs', 'No outputs', 'Any number of outputs', 'Exactly one output'],
            correct: 3,
            explanation: 'The answer is Exactly one output. Definition of a function.'
        }
    ]
},
{
    name: '1.2.1 Modeling with Linear Functions',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Modeling Change</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Modeling with Linear Functions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will write linear functions from two points, a slope and a point, or a description; interpret slope and intercept in context; and fit a line of best fit to data using the correlation coefficient.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Linear models are the most widely used models in the world. Businesses, scientists and governments use them to estimate costs, predict trends and test whether two quantities are related.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💰 Cost and revenue</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📈 Business trends</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Climate data</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏃 Fitness tracking</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Rent and utilities</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📊 Sports statistics</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Construct linear functions from graphs, descriptions or data. (F-LE.2)</li>
    <li>Fit a linear function to data and interpret slope, intercept and correlation. (S-ID.6, S-ID.7, S-ID.8)</li>
    <li>Create and solve absolute value equations and inequalities. (A-CED.1, A-REI.3)</li>
    <li>Graph absolute value, piecewise and step functions. (F-IF.7b)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write a linear function in slope-intercept and point-slope form.</li>
    <li>Interpret slope and y-intercept in context.</li>
    <li>Find and use a line of best fit.</li>
    <li>Interpret the correlation coefficient and distinguish correlation from causation.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> When is a straight line a good model for real-world data?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Algebra I you graphed lines and found slope. In Topic 1.1 you learned that linear functions are a family with parent f(x) = x.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>linear function</strong> has a constant <strong>rate of change</strong>: every time x increases by 1, y changes by the same amount, the <strong>slope</strong> m. If you know two points, you can find the slope with m = (y₂ − y₁) / (x₂ − x₁), then write the equation in <strong>point-slope form</strong>, y − y₁ = m(x − x₁), or <strong>slope-intercept form</strong>, y = mx + b.</p>
    <p>Real data rarely fit a line perfectly. A <strong>line of best fit</strong> (or regression line) is the line that comes closest to the points. The <strong>correlation coefficient</strong>, r, measures how strong the linear relationship is, from −1 to 1.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Slope = rate of change. Intercept = starting value. r = how closely the data follow a line.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The method most calculators use to find a line of best fit is called <strong>least-squares regression</strong>. It was published by the French mathematician Adrien-Marie Legendre in 1805 and developed further by Carl Friedrich Gauss. It chooses the line that makes the total of the squared vertical distances from the points to the line as small as possible.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">slope</strong>
    </p>
    <p style="margin:6px 0;">The constant rate of change of a linear function.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> m = Δy / Δx</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A slope of 35 means $35 more per day.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">y-intercept</strong>
    </p>
    <p style="margin:6px 0;">The value of y when x = 0; often a starting value or fixed fee.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> b in y = mx + b</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A $40 deposit is the intercept.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">point-slope form</strong>
    </p>
    <p style="margin:6px 0;">A linear equation using one point and the slope.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> y − y₁ = m(x − x₁)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y − 110 = 35(x − 2)</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">line of best fit</strong>
    </p>
    <p style="margin:6px 0;">The line that best models a set of data.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ŷ = mx + b</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>ŷ ≈ 4.29x + 57.7</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">correlation coefficient</strong>
    </p>
    <p style="margin:6px 0;">A number from −1 to 1 that measures the strength and direction of a linear relationship.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> r</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>r = 0.997 is very strong and positive.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">extrapolation</strong>
    </p>
    <p style="margin:6px 0;">Predicting outside the range of the data.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> beyond the data</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Predicting a score for 20 hours of study is extrapolation.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Writing Linear Models</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Slope and point-slope form</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">m = (y₂ − y₁) / (x₂ − x₁);   y − y₁ = m(x − x₁)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> m is the rate of change; (x₁, y₁) is any known point.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Writing a line from two points or from a rate and one data point.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Subtracting the x-values and y-values in different orders.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Label the points (x₁, y₁) and (x₂, y₂) before substituting.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Writing a model from two data points (F-LE.2)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A car rental costs $110 for 2 days and $215 for 5 days. Assuming a linear model, write the cost C as a function of days d, and interpret the slope and intercept.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Slope</strong>
    </p>
    <div style="margin:6px 0 0 34px;">m = (215 − 110) / (5 − 2) = 105 / 3 = 35</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Point-slope form</strong>
    </p>
    <div style="margin:6px 0 0 34px;">C − 110 = 35(d − 2)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Slope-intercept form</strong>
    </p>
    <div style="margin:6px 0 0 34px;">C = 35d − 70 + 110 = 35d + 40</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Interpret</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The rental costs $35 per day plus a $40 fixed fee.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">C(5) = 35(5) + 40 = 215 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> C(d) = 35d + 40, where 35 is the daily rate and 40 is a one-time fee.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Interpreting slope and intercept turns an equation back into a real-world statement.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Calling the y-intercept the “cost per day.” The rate is the slope.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Lines of Best Fit and Correlation</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="20" fill="#e3f2fd" font-size="16" font-weight="bold" text-anchor="middle">Study Time and Test Scores: Line of Best Fit</text><g transform="translate(0,6)"><text x="350" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle"></text><line x1="44" y1="40" x2="44" y2="286" stroke="#1e293b"/><line x1="124" y1="40" x2="124" y2="286" stroke="#1e293b"/><line x1="204" y1="40" x2="204" y2="286" stroke="#1e293b"/><line x1="284" y1="40" x2="284" y2="286" stroke="#1e293b"/><line x1="364" y1="40" x2="364" y2="286" stroke="#1e293b"/><line x1="444" y1="40" x2="444" y2="286" stroke="#1e293b"/><line x1="524" y1="40" x2="524" y2="286" stroke="#1e293b"/><line x1="604" y1="40" x2="604" y2="286" stroke="#1e293b"/><line x1="684" y1="40" x2="684" y2="286" stroke="#1e293b"/><line x1="44" y1="286" x2="684" y2="286" stroke="#1e293b"/><line x1="44" y1="255.25" x2="684" y2="255.25" stroke="#1e293b"/><line x1="44" y1="224.5" x2="684" y2="224.5" stroke="#1e293b"/><line x1="44" y1="193.75" x2="684" y2="193.75" stroke="#1e293b"/><line x1="44" y1="163" x2="684" y2="163" stroke="#1e293b"/><line x1="44" y1="132.25" x2="684" y2="132.25" stroke="#1e293b"/><line x1="44" y1="101.5" x2="684" y2="101.5" stroke="#1e293b"/><line x1="44" y1="70.75" x2="684" y2="70.75" stroke="#1e293b"/><line x1="44" y1="40" x2="684" y2="40" stroke="#1e293b"/><line x1="44" y1="286" x2="684" y2="286" stroke="#94a3b8" stroke-width="1.5"/><line x1="44" y1="40" x2="44" y2="286" stroke="#94a3b8" stroke-width="1.5"/><text x="124" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">1</text><text x="204" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="284" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">3</text><text x="364" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="444" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">5</text><text x="524" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="604" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">7</text><text x="684" y="300" fill="#94a3b8" font-size="10" text-anchor="middle">8</text><text x="39" y="258.25" fill="#94a3b8" font-size="10" text-anchor="end">60</text><text x="39" y="227.5" fill="#94a3b8" font-size="10" text-anchor="end">65</text><text x="39" y="196.75" fill="#94a3b8" font-size="10" text-anchor="end">70</text><text x="39" y="166" fill="#94a3b8" font-size="10" text-anchor="end">75</text><text x="39" y="135.25" fill="#94a3b8" font-size="10" text-anchor="end">80</text><text x="39" y="104.5" fill="#94a3b8" font-size="10" text-anchor="end">85</text><text x="39" y="73.75" fill="#94a3b8" font-size="10" text-anchor="end">90</text><text x="39" y="43" fill="#94a3b8" font-size="10" text-anchor="end">95</text><text x="364" y="316" fill="#94a3b8" font-size="11" text-anchor="middle">hours studied (x)</text><text x="12" y="163" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 12 163)">test score (y)</text><polyline points="44.0,269.4 47.2,268.3 50.4,267.3 53.6,266.2 56.8,265.2 60.0,264.1 63.2,263.1 66.4,262.0 69.6,261.0 72.8,259.9 76.0,258.8 79.2,257.8 82.4,256.7 85.6,255.7 88.8,254.6 92.0,253.6 95.2,252.5 98.4,251.5 101.6,250.4 104.8,249.3 108.0,248.3 111.2,247.2 114.4,246.2 117.6,245.1 120.8,244.1 124.0,243.0 127.2,242.0 130.4,240.9 133.6,239.8 136.8,238.8 140.0,237.7 143.2,236.7 146.4,235.6 149.6,234.6 152.8,233.5 156.0,232.5 159.2,231.4 162.4,230.3 165.6,229.3 168.8,228.2 172.0,227.2 175.2,226.1 178.4,225.1 181.6,224.0 184.8,223.0 188.0,221.9 191.2,220.8 194.4,219.8 197.6,218.7 200.8,217.7 204.0,216.6 207.2,215.6 210.4,214.5 213.6,213.5 216.8,212.4 220.0,211.4 223.2,210.3 226.4,209.2 229.6,208.2 232.8,207.1 236.0,206.1 239.2,205.0 242.4,204.0 245.6,202.9 248.8,201.9 252.0,200.8 255.2,199.7 258.4,198.7 261.6,197.6 264.8,196.6 268.0,195.5 271.2,194.5 274.4,193.4 277.6,192.4 280.8,191.3 284.0,190.2 287.2,189.2 290.4,188.1 293.6,187.1 296.8,186.0 300.0,185.0 303.2,183.9 306.4,182.9 309.6,181.8 312.8,180.7 316.0,179.7 319.2,178.6 322.4,177.6 325.6,176.5 328.8,175.5 332.0,174.4 335.2,173.4 338.4,172.3 341.6,171.2 344.8,170.2 348.0,169.1 351.2,168.1 354.4,167.0 357.6,166.0 360.8,164.9 364.0,163.9 367.2,162.8 370.4,161.8 373.6,160.7 376.8,159.6 380.0,158.6 383.2,157.5 386.4,156.5 389.6,155.4 392.8,154.4 396.0,153.3 399.2,152.3 402.4,151.2 405.6,150.1 408.8,149.1 412.0,148.0 415.2,147.0 418.4,145.9 421.6,144.9 424.8,143.8 428.0,142.8 431.2,141.7 434.4,140.6 437.6,139.6 440.8,138.5 444.0,137.5 447.2,136.4 450.4,135.4 453.6,134.3 456.8,133.3 460.0,132.2 463.2,131.1 466.4,130.1 469.6,129.0 472.8,128.0 476.0,126.9 479.2,125.9 482.4,124.8 485.6,123.8 488.8,122.7 492.0,121.6 495.2,120.6 498.4,119.5 501.6,118.5 504.8,117.4 508.0,116.4 511.2,115.3 514.4,114.3 517.6,113.2 520.8,112.1 524.0,111.1 527.2,110.0 530.4,109.0 533.6,107.9 536.8,106.9 540.0,105.8 543.2,104.8 546.4,103.7 549.6,102.7 552.8,101.6 556.0,100.5 559.2,99.5 562.4,98.4 565.6,97.4 568.8,96.3 572.0,95.3 575.2,94.2 578.4,93.2 581.6,92.1 584.8,91.0 588.0,90.0 591.2,88.9 594.4,87.9 597.6,86.8 600.8,85.8 604.0,84.7 607.2,83.7 610.4,82.6 613.6,81.5 616.8,80.5 620.0,79.4 623.2,78.4 626.4,77.3 629.6,76.3 632.8,75.2 636.0,74.2 639.2,73.1 642.4,72.0 645.6,71.0 648.8,69.9 652.0,68.9 655.2,67.8 658.4,66.8 661.6,65.7 664.8,64.7 668.0,63.6 671.2,62.5 674.4,61.5 677.6,60.4 680.8,59.4 684.0,58.3" fill="none" stroke="#f48fb1" stroke-width="3"/><text x="300" y="76.9" fill="#f48fb1" font-size="12" font-weight="bold" text-anchor="middle">ŷ ≈ 4.29x + 57.7   (r ≈ 0.997)</text><circle cx="124" cy="242.95" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="204" cy="218.35" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="284" cy="187.6" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="364" cy="169.15" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="444" cy="132.25" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="524" cy="113.8" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="604" cy="84.89499999999998" r="5" fill="#86efac" stroke="#86efac" stroke-width="2"/><text x="564" y="74.89499999999998" fill="#86efac" font-size="11" text-anchor="middle">prediction for 7 h ≈ 88</text></g>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hours studied (x)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">3</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">4</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">5</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">6</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Test score (y)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">62</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">66</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">71</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">74</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">83</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Using a regression line (S-ID.6, S-ID.7)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A graphing calculator gives the line of best fit ŷ ≈ 4.29x + 57.7 with r ≈ 0.997 for the data above. Interpret the slope, the intercept and r, and predict the score for 7 hours of study.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Slope</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Each extra hour of study is associated with about 4.3 more points.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Intercept</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A student who studies 0 hours would be predicted to score about 58 — outside the data, so use with caution.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: r</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.997 is very close to 1: a very strong positive linear relationship.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Prediction</strong>
    </p>
    <div style="margin:6px 0 0 34px;">ŷ ≈ 4.29(7) + 57.7 ≈ 87.7, so about 88 points.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> About 4.3 points per hour; a predicted 88 points for 7 hours; the linear model fits these data very well.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Interpreting a regression line always means describing an association, not a guarantee.</p>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Value of r</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">close to 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strong positive linear relationship</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">close to −1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strong negative linear relationship</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">close to 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little or no linear relationship</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Correlation Is Not Causation</h3>
    <p>A strong correlation does not prove that one variable <em>causes</em> the other. In many towns, ice cream sales and swimming accidents rise together — not because ice cream causes accidents, but because both increase in hot weather. The hidden factor (temperature) is called a <strong>lurking variable</strong>.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Predicting far outside your data — extrapolation — can give nonsense. The study model predicts a score of 143 for 20 hours of study, which is impossible on a 100-point test.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Find the slope through (2, 9) and (6, 21).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(21 − 9) / (6 − 2) = 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What does r = −0.85 mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A strong negative linear relationship.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is a lurking variable?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A hidden factor that affects both variables.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modeling with mathematics</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting parameters in context</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using technology for regression</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reasoning about data</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Critiquing claims</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>A good model must make sense in context. Check the units of the slope (for example, dollars per day), check that the intercept is reasonable, and be cautious about predictions far outside the data. A correlation close to 1 or −1 tells you a line fits well; it does not tell you why.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might two variables show a strong correlation even though neither causes the other? Give your own example.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #f48fb1;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Car rentals, ride-share fares and phone plans often have a fixed fee plus a rate — a linear model.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists fit lines to temperature and sea-level data to estimate rates of change over time.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Economists, data analysts, engineers and sports analysts use regression lines to find and test relationships.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Write the line with slope 4 through (1, 7) in point-slope form.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: y − y₁ = m(x − x₁).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">y − 7 = 4(x − 1)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> A plan costs C = 20 + 0.10t for t texts. What does 0.10 mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: The rate.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">$0.10 per text.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Is r = 0.15 strong or weak?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Close to 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Weak.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Collect a small data set (for example, arm span and height for five family members) and plot it.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Write a linear model for a real service with a fee and a rate, and explain your slope and intercept to your partner.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Find three examples of correlations reported in the news and identify possible lurking variables.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Enter the study-time data into a graphing calculator, run linear regression, and confirm the line and r value.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find the slope through (0, 4) and (3, 13).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write y = mx + b with m = −2 and b = 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">y = −2x + 9</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A plumber charges $160 for 2 hours and $280 for 4 hours. Write a linear model.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">m = 60; C = 60h + 40.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Interpret r = −0.93 for “hours of screen time” and “hours of sleep.”</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A strong negative relationship: more screen time is associated with less sleep.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f48fb1;">
    <p style="margin:0 0 6px 0;color:#f48fb1;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Using ŷ ≈ 4.29x + 57.7, explain why predicting a score for 15 hours of study is unreliable.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It is extrapolation; the model predicts about 122, which is impossible on a 100-point test.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A gym charges $25 to join and $30 per month. Write and use a model to find the cost of a year.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">C = 30m + 25; C(12) = $385.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> S-ID.7: In C = 35d + 40, interpret the slope and intercept.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The slope 35 is the cost per day; the intercept 40 is the fixed fee.</div>
    </details>
    </div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Linear functions have a constant rate of change, the slope. You can write them from two points using m = (y₂ − y₁)/(x₂ − x₁) and point-slope form, and interpret slope as a rate and the intercept as a starting value. A line of best fit models real data, and the correlation coefficient r (from −1 to 1) measures how strong and in which direction the linear relationship is. Correlation does not prove causation, and extrapolation can be unreliable.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>m = (y₂ − y₁)/(x₂ − x₁).</li>
    <li>Point-slope: y − y₁ = m(x − x₁).</li>
    <li>r near ±1 = strong.</li>
    <li>Correlation ≠ causation.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give slope units.</li>
    <li>Check the intercept makes sense.</li>
    <li>Avoid wild extrapolation.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mixing up subtraction order.</li>
    <li>Calling the intercept the rate.</li>
    <li>Saying correlation proves causation.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check models with a known point.</li>
    <li>Use technology for regression.</li>
    <li>Look for lurking variables.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Interpret slope with units.</li>
    <li>Round predictions sensibly.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-LE.2 Linear models</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write from points and descriptions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">S-ID.6 Fit</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lines of best fit.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">S-ID.8/9 Correlation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">r and causation.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with data</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Critical thinking</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data literacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Understanding linear models helps you compare prices, read data in the news and spot misleading claims.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write three linear models from real price descriptions.</li>
    <li>Find a data set online, fit a line and interpret it.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When is a linear model not a good choice?</li>
    <li>Where have I seen correlation confused with causation?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Slope</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rate of change.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Intercept</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Starting value.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Regression</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fitting a line to data.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Correlation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strength of linear relationship.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can write linear models.</p>
    <p style="margin:6px 0;">☐ I can interpret slope and intercept.</p>
    <p style="margin:6px 0;">☐ I can use a line of best fit.</p>
    <p style="margin:6px 0;">☐ I can interpret r and avoid causation errors.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The slope through (1, 3) and (5, 15) is:',
            options: ['3', '4', '12', '1/3'],
            correct: 0,
            explanation: 'The answer is 3. 12 ÷ 4 = 3.'
        },
        {
            question: 'In C = 35d + 40, the fixed fee is:',
            options: ['$40', '$35', '$75', '$5'],
            correct: 0,
            explanation: 'The answer is $40. The intercept.'
        },
        {
            question: 'Point-slope form is:',
            options: ['y − y₁ = m(x − x₁)', 'y = mx + b', 'Ax + By = C', 'x = my + b'],
            correct: 0,
            explanation: 'The answer is y − y₁ = m(x − x₁). Uses one point and the slope.'
        },
        {
            question: 'r = 0.98 shows:',
            options: ['A weak relationship', 'A strong negative relationship', 'A strong positive linear relationship', 'No relationship'],
            correct: 2,
            explanation: 'The answer is A strong positive linear relationship. Close to 1.'
        },
        {
            question: 'r = −0.05 shows:',
            options: ['A strong negative relationship', 'A perfect fit', 'Almost no linear relationship', 'A strong positive relationship'],
            correct: 2,
            explanation: 'The answer is Almost no linear relationship. Close to 0.'
        },
        {
            question: 'Predicting far outside the data range is:',
            options: ['Interpolation', 'Correlation', 'Regression', 'Extrapolation'],
            correct: 3,
            explanation: 'The answer is Extrapolation. It can be unreliable.'
        },
        {
            question: 'A hidden factor that affects two variables is a:',
            options: ['Slope', 'Residual', 'Lurking variable', 'Domain'],
            correct: 2,
            explanation: 'Like temperature for ice cream and swimming.'
        },
        {
            question: 'Using ŷ ≈ 4.29x + 57.7, the predicted score for 5 hours is about:',
            options: ['75', '79', '83', '62'],
            correct: 1,
            explanation: 'The answer is 79. 4.29(5) + 57.7 ≈ 79.2.'
        },
        {
            question: 'A strong correlation proves:',
            options: ['That one variable causes the other', 'Nothing at all', 'The data are wrong', 'An association, not necessarily causation'],
            correct: 3,
            explanation: 'The answer is An association, not necessarily causation. Correlation is not causation.'
        },
        {
            question: 'The least-squares method was published by:',
            options: ['Newton in 1687', 'Legendre in 1805', 'Euclid in 300 BCE', 'Descartes in 1637'],
            correct: 1,
            explanation: 'The answer is Legendre in 1805. Later developed by Gauss.'
        }
    ]
},
{
    name: '1.2.2 Absolute Value Functions, Equations and Inequalities',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Modeling Change</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Absolute Value Functions, Equations and Inequalities</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will graph absolute value functions in vertex form, solve absolute value equations (checking for extraneous solutions), and solve absolute value inequalities that model tolerances and acceptable ranges.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Absolute value measures distance and error. Manufacturers, doctors and scientists use absolute value inequalities to decide whether a measurement is within an acceptable range.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏭 Manufacturing tolerances</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Body temperature ranges</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎯 Target accuracy</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📏 Measurement error</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🗳️ Poll margins of error</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Speed limits</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Construct linear functions from graphs, descriptions or data. (F-LE.2)</li>
    <li>Fit a linear function to data and interpret slope, intercept and correlation. (S-ID.6, S-ID.7, S-ID.8)</li>
    <li>Create and solve absolute value equations and inequalities. (A-CED.1, A-REI.3)</li>
    <li>Graph absolute value, piecewise and step functions. (F-IF.7b)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Graph y = a|x − h| + k and identify the vertex and intercepts.</li>
    <li>Solve absolute value equations.</li>
    <li>Identify extraneous solutions.</li>
    <li>Solve and graph absolute value inequalities.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can absolute value describe how far something is from a target?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.3 you transformed f(x) = |x|. Now you will solve equations and inequalities involving absolute value.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>The <strong>absolute value</strong> of a number is its distance from 0 on the number line, so it is never negative: |5| = 5 and |−5| = 5. This means an equation such as |x| = 5 has <strong>two solutions</strong>, x = 5 and x = −5, because both are 5 units from 0.</p>
    <p>More generally, |x − a| is the distance between x and a. So |x − 50| ≤ 0.2 means “x is within 0.2 of 50.” This is exactly how engineers describe a part that must be 50 mm long, give or take 0.2 mm.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>|x − a| = distance from x to a. “Less than” keeps you close (and); “greater than” pushes you away (or).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Absolute value graphs form a V because distance decreases toward the vertex and increases after it. In vertex form, y = a|x − h| + k, the vertex is (h, k), a controls how steep and which direction the V opens, and the graph is symmetric about the vertical line x = h.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">absolute value</strong>
    </p>
    <p style="margin:6px 0;">The distance of a number from 0; never negative.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> |x|</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>|−7| = 7</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">vertex</strong>
    </p>
    <p style="margin:6px 0;">The point where an absolute value graph changes direction.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> (h, k)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>y = |x − 2| − 3 has vertex (2, −3).</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">axis of symmetry</strong>
    </p>
    <p style="margin:6px 0;">The vertical line through the vertex that divides the graph into mirror images.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x = h</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x = 2</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">extraneous solution</strong>
    </p>
    <p style="margin:6px 0;">A value found while solving that does not satisfy the original equation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> check every answer</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x = 1 is extraneous for |x + 1| = 2x − 4.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">compound inequality</strong>
    </p>
    <p style="margin:6px 0;">Two inequalities joined by “and” or “or.”</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> a ≤ x ≤ b; x ≤ a or x ≥ b</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1 ≤ x ≤ 5</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">tolerance</strong>
    </p>
    <p style="margin:6px 0;">The acceptable amount of variation from a target.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ± value</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A bolt of 50 ± 0.2 mm.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Graphing Absolute Value Functions</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 320" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><g transform="translate(0,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">y = |x − 2| − 3</text><line x1="44" y1="40" x2="44" y2="276" stroke="#1e293b"/><line x1="67.33333333333333" y1="40" x2="67.33333333333333" y2="276" stroke="#1e293b"/><line x1="90.66666666666666" y1="40" x2="90.66666666666666" y2="276" stroke="#1e293b"/><line x1="114" y1="40" x2="114" y2="276" stroke="#1e293b"/><line x1="137.33333333333331" y1="40" x2="137.33333333333331" y2="276" stroke="#1e293b"/><line x1="160.66666666666669" y1="40" x2="160.66666666666669" y2="276" stroke="#1e293b"/><line x1="184" y1="40" x2="184" y2="276" stroke="#1e293b"/><line x1="207.33333333333334" y1="40" x2="207.33333333333334" y2="276" stroke="#1e293b"/><line x1="230.66666666666666" y1="40" x2="230.66666666666666" y2="276" stroke="#1e293b"/><line x1="254" y1="40" x2="254" y2="276" stroke="#1e293b"/><line x1="277.33333333333337" y1="40" x2="277.33333333333337" y2="276" stroke="#1e293b"/><line x1="300.66666666666663" y1="40" x2="300.66666666666663" y2="276" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="276" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="254.54545454545453" x2="324" y2="254.54545454545453" stroke="#1e293b"/><line x1="44" y1="233.0909090909091" x2="324" y2="233.0909090909091" stroke="#1e293b"/><line x1="44" y1="211.63636363636365" x2="324" y2="211.63636363636365" stroke="#1e293b"/><line x1="44" y1="190.1818181818182" x2="324" y2="190.1818181818182" stroke="#1e293b"/><line x1="44" y1="168.72727272727272" x2="324" y2="168.72727272727272" stroke="#1e293b"/><line x1="44" y1="147.27272727272725" x2="324" y2="147.27272727272725" stroke="#1e293b"/><line x1="44" y1="125.81818181818183" x2="324" y2="125.81818181818183" stroke="#1e293b"/><line x1="44" y1="104.36363636363636" x2="324" y2="104.36363636363636" stroke="#1e293b"/><line x1="44" y1="82.9090909090909" x2="324" y2="82.9090909090909" stroke="#1e293b"/><line x1="44" y1="61.45454545454545" x2="324" y2="61.45454545454545" stroke="#1e293b"/><line x1="44" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="44" y1="168.72727272727272" x2="324" y2="168.72727272727272" stroke="#94a3b8" stroke-width="1.5"/><line x1="137.33333333333331" y1="40" x2="137.33333333333331" y2="276" stroke="#94a3b8" stroke-width="1.5"/><text x="44" y="182.72727272727272" fill="#94a3b8" font-size="10" text-anchor="middle">-4</text><text x="90.66666666666666" y="182.72727272727272" fill="#94a3b8" font-size="10" text-anchor="middle">-2</text><text x="184" y="182.72727272727272" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="230.66666666666666" y="182.72727272727272" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="277.33333333333337" y="182.72727272727272" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="324" y="182.72727272727272" fill="#94a3b8" font-size="10" text-anchor="middle">8</text><text x="132.33333333333331" y="257.5454545454545" fill="#94a3b8" font-size="10" text-anchor="end">-4</text><text x="132.33333333333331" y="214.63636363636365" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="132.33333333333331" y="128.8181818181818" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="132.33333333333331" y="85.9090909090909" fill="#94a3b8" font-size="10" text-anchor="end">4</text><text x="132.33333333333331" y="43" fill="#94a3b8" font-size="10" text-anchor="end">6</text><polyline points="44.0,104.4 45.4,105.7 46.8,106.9 48.2,108.2 49.6,109.5 51.0,110.8 52.4,112.1 53.8,113.4 55.2,114.7 56.6,115.9 58.0,117.2 59.4,118.5 60.8,119.8 62.2,121.1 63.6,122.4 65.0,123.7 66.4,125.0 67.8,126.2 69.2,127.5 70.6,128.8 72.0,130.1 73.4,131.4 74.8,132.7 76.2,134.0 77.6,135.3 79.0,136.5 80.4,137.8 81.8,139.1 83.2,140.4 84.6,141.7 86.0,143.0 87.4,144.3 88.8,145.6 90.2,146.8 91.6,148.1 93.0,149.4 94.4,150.7 95.8,152.0 97.2,153.3 98.6,154.6 100.0,155.9 101.4,157.1 102.8,158.4 104.2,159.7 105.6,161.0 107.0,162.3 108.4,163.6 109.8,164.9 111.2,166.2 112.6,167.4 114.0,168.7 115.4,170.0 116.8,171.3 118.2,172.6 119.6,173.9 121.0,175.2 122.4,176.5 123.8,177.7 125.2,179.0 126.6,180.3 128.0,181.6 129.4,182.9 130.8,184.2 132.2,185.5 133.6,186.7 135.0,188.0 136.4,189.3 137.8,190.6 139.2,191.9 140.6,193.2 142.0,194.5 143.4,195.8 144.8,197.0 146.2,198.3 147.6,199.6 149.0,200.9 150.4,202.2 151.8,203.5 153.2,204.8 154.6,206.1 156.0,207.3 157.4,208.6 158.8,209.9 160.2,211.2 161.6,212.5 163.0,213.8 164.4,215.1 165.8,216.4 167.2,217.6 168.6,218.9 170.0,220.2 171.4,221.5 172.8,222.8 174.2,224.1 175.6,225.4 177.0,226.7 178.4,227.9 179.8,229.2 181.2,230.5 182.6,231.8 184.0,233.1 185.4,231.8 186.8,230.5 188.2,229.2 189.6,227.9 191.0,226.7 192.4,225.4 193.8,224.1 195.2,222.8 196.6,221.5 198.0,220.2 199.4,218.9 200.8,217.6 202.2,216.4 203.6,215.1 205.0,213.8 206.4,212.5 207.8,211.2 209.2,209.9 210.6,208.6 212.0,207.3 213.4,206.1 214.8,204.8 216.2,203.5 217.6,202.2 219.0,200.9 220.4,199.6 221.8,198.3 223.2,197.0 224.6,195.8 226.0,194.5 227.4,193.2 228.8,191.9 230.2,190.6 231.6,189.3 233.0,188.0 234.4,186.7 235.8,185.5 237.2,184.2 238.6,182.9 240.0,181.6 241.4,180.3 242.8,179.0 244.2,177.7 245.6,176.5 247.0,175.2 248.4,173.9 249.8,172.6 251.2,171.3 252.6,170.0 254.0,168.7 255.4,167.4 256.8,166.2 258.2,164.9 259.6,163.6 261.0,162.3 262.4,161.0 263.8,159.7 265.2,158.4 266.6,157.1 268.0,155.9 269.4,154.6 270.8,153.3 272.2,152.0 273.6,150.7 275.0,149.4 276.4,148.1 277.8,146.8 279.2,145.6 280.6,144.3 282.0,143.0 283.4,141.7 284.8,140.4 286.2,139.1 287.6,137.8 289.0,136.5 290.4,135.3 291.8,134.0 293.2,132.7 294.6,131.4 296.0,130.1 297.4,128.8 298.8,127.5 300.2,126.2 301.6,125.0 303.0,123.7 304.4,122.4 305.8,121.1 307.2,119.8 308.6,118.5 310.0,117.2 311.4,115.9 312.8,114.7 314.2,113.4 315.6,112.1 317.0,110.8 318.4,109.5 319.8,108.2 321.2,106.9 322.6,105.7 324.0,104.4" fill="none" stroke="#f48fb1" stroke-width="3"/><polyline points="44.0,82.9 45.4,84.2 46.8,85.5 48.2,86.8 49.6,88.1 51.0,89.3 52.4,90.6 53.8,91.9 55.2,93.2 56.6,94.5 58.0,95.8 59.4,97.1 60.8,98.4 62.2,99.6 63.6,100.9 65.0,102.2 66.4,103.5 67.8,104.8 69.2,106.1 70.6,107.4 72.0,108.7 73.4,109.9 74.8,111.2 76.2,112.5 77.6,113.8 79.0,115.1 80.4,116.4 81.8,117.7 83.2,119.0 84.6,120.2 86.0,121.5 87.4,122.8 88.8,124.1 90.2,125.4 91.6,126.7 93.0,128.0 94.4,129.3 95.8,130.5 97.2,131.8 98.6,133.1 100.0,134.4 101.4,135.7 102.8,137.0 104.2,138.3 105.6,139.5 107.0,140.8 108.4,142.1 109.8,143.4 111.2,144.7 112.6,146.0 114.0,147.3 115.4,148.6 116.8,149.8 118.2,151.1 119.6,152.4 121.0,153.7 122.4,155.0 123.8,156.3 125.2,157.6 126.6,158.9 128.0,160.1 129.4,161.4 130.8,162.7 132.2,164.0 133.6,165.3 135.0,166.6 136.4,167.9 137.8,168.3 139.2,167.0 140.6,165.7 142.0,164.4 143.4,163.1 144.8,161.9 146.2,160.6 147.6,159.3 149.0,158.0 150.4,156.7 151.8,155.4 153.2,154.1 154.6,152.9 156.0,151.6 157.4,150.3 158.8,149.0 160.2,147.7 161.6,146.4 163.0,145.1 164.4,143.8 165.8,142.6 167.2,141.3 168.6,140.0 170.0,138.7 171.4,137.4 172.8,136.1 174.2,134.8 175.6,133.5 177.0,132.3 178.4,131.0 179.8,129.7 181.2,128.4 182.6,127.1 184.0,125.8 185.4,124.5 186.8,123.2 188.2,122.0 189.6,120.7 191.0,119.4 192.4,118.1 193.8,116.8 195.2,115.5 196.6,114.2 198.0,112.9 199.4,111.7 200.8,110.4 202.2,109.1 203.6,107.8 205.0,106.5 206.4,105.2 207.8,103.9 209.2,102.6 210.6,101.4 212.0,100.1 213.4,98.8 214.8,97.5 216.2,96.2 217.6,94.9 219.0,93.6 220.4,92.3 221.8,91.1 223.2,89.8 224.6,88.5 226.0,87.2 227.4,85.9 228.8,84.6 230.2,83.3 231.6,82.1 233.0,80.8 234.4,79.5 235.8,78.2 237.2,76.9 238.6,75.6 240.0,74.3 241.4,73.0 242.8,71.8 244.2,70.5 245.6,69.2 247.0,67.9 248.4,66.6 249.8,65.3 251.2,64.0 252.6,62.7 254.0,61.5 255.4,60.2 256.8,58.9 258.2,57.6 259.6,56.3 261.0,55.0 262.4,53.7 263.8,52.4 265.2,51.2 266.6,49.9 268.0,48.6 269.4,47.3 270.8,46.0 272.2,44.7 273.6,43.4 275.0,42.1 276.4,40.9" fill="none" stroke="#64748b" stroke-width="3" stroke-dasharray="6 4"/><circle cx="184" cy="233.0909090909091" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><text x="184" y="253.0909090909091" fill="#fde68a" font-size="11" text-anchor="middle">vertex (2, −3)</text><circle cx="114" cy="168.72727272727272" r="5" fill="#86efac" stroke="#86efac" stroke-width="2"/><text x="88" y="188.72727272727272" fill="#86efac" font-size="11" text-anchor="middle">(−1, 0)</text><circle cx="254" cy="168.72727272727272" r="5" fill="#86efac" stroke="#86efac" stroke-width="2"/><text x="278" y="188.72727272727272" fill="#86efac" font-size="11" text-anchor="middle">(5, 0)</text></g><g transform="translate(360,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Solving |x − 3| ≤ 2 on a number line</text><line x1="44" y1="40" x2="44" y2="276" stroke="#1e293b"/><line x1="79" y1="40" x2="79" y2="276" stroke="#1e293b"/><line x1="114" y1="40" x2="114" y2="276" stroke="#1e293b"/><line x1="149" y1="40" x2="149" y2="276" stroke="#1e293b"/><line x1="184" y1="40" x2="184" y2="276" stroke="#1e293b"/><line x1="219" y1="40" x2="219" y2="276" stroke="#1e293b"/><line x1="254" y1="40" x2="254" y2="276" stroke="#1e293b"/><line x1="289" y1="40" x2="289" y2="276" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="276" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="236.66666666666669" x2="324" y2="236.66666666666669" stroke="#1e293b"/><line x1="44" y1="197.33333333333331" x2="324" y2="197.33333333333331" stroke="#1e293b"/><line x1="44" y1="158" x2="324" y2="158" stroke="#1e293b"/><line x1="44" y1="118.66666666666666" x2="324" y2="118.66666666666666" stroke="#1e293b"/><line x1="44" y1="79.33333333333333" x2="324" y2="79.33333333333333" stroke="#1e293b"/><line x1="44" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="44" y1="197.33333333333331" x2="324" y2="197.33333333333331" stroke="#94a3b8" stroke-width="1.5"/><line x1="79" y1="40" x2="79" y2="276" stroke="#94a3b8" stroke-width="1.5"/><text x="149" y="211.33333333333331" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="219" y="211.33333333333331" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="289" y="211.33333333333331" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="74" y="279" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="74" y="121.66666666666666" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="74" y="43" fill="#94a3b8" font-size="10" text-anchor="end">4</text><polyline points="44.0,40.0 45.4,41.6 46.8,43.1 48.2,44.7 49.6,46.3 51.0,47.9 52.4,49.4 53.8,51.0 55.2,52.6 56.6,54.2 58.0,55.7 59.4,57.3 60.8,58.9 62.2,60.5 63.6,62.0 65.0,63.6 66.4,65.2 67.8,66.7 69.2,68.3 70.6,69.9 72.0,71.5 73.4,73.0 74.8,74.6 76.2,76.2 77.6,77.8 79.0,79.3 80.4,80.9 81.8,82.5 83.2,84.1 84.6,85.6 86.0,87.2 87.4,88.8 88.8,90.3 90.2,91.9 91.6,93.5 93.0,95.1 94.4,96.6 95.8,98.2 97.2,99.8 98.6,101.4 100.0,102.9 101.4,104.5 102.8,106.1 104.2,107.7 105.6,109.2 107.0,110.8 108.4,112.4 109.8,113.9 111.2,115.5 112.6,117.1 114.0,118.7 115.4,120.2 116.8,121.8 118.2,123.4 119.6,125.0 121.0,126.5 122.4,128.1 123.8,129.7 125.2,131.3 126.6,132.8 128.0,134.4 129.4,136.0 130.8,137.5 132.2,139.1 133.6,140.7 135.0,142.3 136.4,143.8 137.8,145.4 139.2,147.0 140.6,148.6 142.0,150.1 143.4,151.7 144.8,153.3 146.2,154.9 147.6,156.4 149.0,158.0 150.4,159.6 151.8,161.1 153.2,162.7 154.6,164.3 156.0,165.9 157.4,167.4 158.8,169.0 160.2,170.6 161.6,172.2 163.0,173.7 164.4,175.3 165.8,176.9 167.2,178.5 168.6,180.0 170.0,181.6 171.4,183.2 172.8,184.7 174.2,186.3 175.6,187.9 177.0,189.5 178.4,191.0 179.8,192.6 181.2,194.2 182.6,195.8 184.0,197.3 185.4,195.8 186.8,194.2 188.2,192.6 189.6,191.0 191.0,189.5 192.4,187.9 193.8,186.3 195.2,184.7 196.6,183.2 198.0,181.6 199.4,180.0 200.8,178.5 202.2,176.9 203.6,175.3 205.0,173.7 206.4,172.2 207.8,170.6 209.2,169.0 210.6,167.4 212.0,165.9 213.4,164.3 214.8,162.7 216.2,161.1 217.6,159.6 219.0,158.0 220.4,156.4 221.8,154.9 223.2,153.3 224.6,151.7 226.0,150.1 227.4,148.6 228.8,147.0 230.2,145.4 231.6,143.8 233.0,142.3 234.4,140.7 235.8,139.1 237.2,137.5 238.6,136.0 240.0,134.4 241.4,132.8 242.8,131.3 244.2,129.7 245.6,128.1 247.0,126.5 248.4,125.0 249.8,123.4 251.2,121.8 252.6,120.2 254.0,118.7 255.4,117.1 256.8,115.5 258.2,113.9 259.6,112.4 261.0,110.8 262.4,109.2 263.8,107.7 265.2,106.1 266.6,104.5 268.0,102.9 269.4,101.4 270.8,99.8 272.2,98.2 273.6,96.6 275.0,95.1 276.4,93.5 277.8,91.9 279.2,90.3 280.6,88.8 282.0,87.2 283.4,85.6 284.8,84.1 286.2,82.5 287.6,80.9 289.0,79.3 290.4,77.8 291.8,76.2 293.2,74.6 294.6,73.0 296.0,71.5 297.4,69.9 298.8,68.3 300.2,66.7 301.6,65.2 303.0,63.6 304.4,62.0 305.8,60.5 307.2,58.9 308.6,57.3 310.0,55.7 311.4,54.2 312.8,52.6 314.2,51.0 315.6,49.4 317.0,47.9 318.4,46.3 319.8,44.7 321.2,43.1 322.6,41.6 324.0,40.0" fill="none" stroke="#f48fb1" stroke-width="3"/><text x="285.5" y="55.733333333333334" fill="#f48fb1" font-size="12" font-weight="bold" text-anchor="middle">y = |x − 3|</text><polyline points="44.0,118.7 45.4,118.7 46.8,118.7 48.2,118.7 49.6,118.7 51.0,118.7 52.4,118.7 53.8,118.7 55.2,118.7 56.6,118.7 58.0,118.7 59.4,118.7 60.8,118.7 62.2,118.7 63.6,118.7 65.0,118.7 66.4,118.7 67.8,118.7 69.2,118.7 70.6,118.7 72.0,118.7 73.4,118.7 74.8,118.7 76.2,118.7 77.6,118.7 79.0,118.7 80.4,118.7 81.8,118.7 83.2,118.7 84.6,118.7 86.0,118.7 87.4,118.7 88.8,118.7 90.2,118.7 91.6,118.7 93.0,118.7 94.4,118.7 95.8,118.7 97.2,118.7 98.6,118.7 100.0,118.7 101.4,118.7 102.8,118.7 104.2,118.7 105.6,118.7 107.0,118.7 108.4,118.7 109.8,118.7 111.2,118.7 112.6,118.7 114.0,118.7 115.4,118.7 116.8,118.7 118.2,118.7 119.6,118.7 121.0,118.7 122.4,118.7 123.8,118.7 125.2,118.7 126.6,118.7 128.0,118.7 129.4,118.7 130.8,118.7 132.2,118.7 133.6,118.7 135.0,118.7 136.4,118.7 137.8,118.7 139.2,118.7 140.6,118.7 142.0,118.7 143.4,118.7 144.8,118.7 146.2,118.7 147.6,118.7 149.0,118.7 150.4,118.7 151.8,118.7 153.2,118.7 154.6,118.7 156.0,118.7 157.4,118.7 158.8,118.7 160.2,118.7 161.6,118.7 163.0,118.7 164.4,118.7 165.8,118.7 167.2,118.7 168.6,118.7 170.0,118.7 171.4,118.7 172.8,118.7 174.2,118.7 175.6,118.7 177.0,118.7 178.4,118.7 179.8,118.7 181.2,118.7 182.6,118.7 184.0,118.7 185.4,118.7 186.8,118.7 188.2,118.7 189.6,118.7 191.0,118.7 192.4,118.7 193.8,118.7 195.2,118.7 196.6,118.7 198.0,118.7 199.4,118.7 200.8,118.7 202.2,118.7 203.6,118.7 205.0,118.7 206.4,118.7 207.8,118.7 209.2,118.7 210.6,118.7 212.0,118.7 213.4,118.7 214.8,118.7 216.2,118.7 217.6,118.7 219.0,118.7 220.4,118.7 221.8,118.7 223.2,118.7 224.6,118.7 226.0,118.7 227.4,118.7 228.8,118.7 230.2,118.7 231.6,118.7 233.0,118.7 234.4,118.7 235.8,118.7 237.2,118.7 238.6,118.7 240.0,118.7 241.4,118.7 242.8,118.7 244.2,118.7 245.6,118.7 247.0,118.7 248.4,118.7 249.8,118.7 251.2,118.7 252.6,118.7 254.0,118.7 255.4,118.7 256.8,118.7 258.2,118.7 259.6,118.7 261.0,118.7 262.4,118.7 263.8,118.7 265.2,118.7 266.6,118.7 268.0,118.7 269.4,118.7 270.8,118.7 272.2,118.7 273.6,118.7 275.0,118.7 276.4,118.7 277.8,118.7 279.2,118.7 280.6,118.7 282.0,118.7 283.4,118.7 284.8,118.7 286.2,118.7 287.6,118.7 289.0,118.7 290.4,118.7 291.8,118.7 293.2,118.7 294.6,118.7 296.0,118.7 297.4,118.7 298.8,118.7 300.2,118.7 301.6,118.7 303.0,118.7 304.4,118.7 305.8,118.7 307.2,118.7 308.6,118.7 310.0,118.7 311.4,118.7 312.8,118.7 314.2,118.7 315.6,118.7 317.0,118.7 318.4,118.7 319.8,118.7 321.2,118.7 322.6,118.7 324.0,118.7" fill="none" stroke="#fde68a" stroke-width="3" stroke-dasharray="6 4"/><text x="303" y="142.26666666666665" fill="#fde68a" font-size="12" font-weight="bold" text-anchor="middle">y = 2</text><circle cx="114" cy="118.66666666666666" r="5" fill="#86efac" stroke="#86efac" stroke-width="2"/><text x="114" y="108.66666666666666" fill="#86efac" font-size="11" text-anchor="middle">(1, 2)</text><circle cx="254" cy="118.66666666666666" r="5" fill="#86efac" stroke="#86efac" stroke-width="2"/><text x="254" y="108.66666666666666" fill="#86efac" font-size="11" text-anchor="middle">(5, 2)</text></g><line x1="474" y1="197.33333333333331" x2="614" y2="197.33333333333331" stroke="#86efac" stroke-width="6" opacity="0.8"/><text x="530" y="306" fill="#86efac" font-size="12" text-anchor="middle">Solution: 1 ≤ x ≤ 5 (the graph is on or below y = 2)</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Graphing in vertex form (F-IF.7b)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Graph y = |x − 2| − 3. Find the vertex, axis of symmetry and x-intercepts.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Vertex</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(h, k) = (2, −3)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Axis of symmetry</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: x-intercepts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Solve |x − 2| − 3 = 0, so |x − 2| = 3: x − 2 = 3 or x − 2 = −3, giving x = 5 or x = −1.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Shape</strong>
    </p>
    <div style="margin:6px 0 0 34px;">a = 1, so the V opens up with slopes 1 and −1.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Vertex (2, −3), axis x = 2, x-intercepts (−1, 0) and (5, 0).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Solving Absolute Value Equations</h3>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Solving |A| = b</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">If b ≥ 0: A = b or A = −b.   If b is negative: no solution.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> A is any expression; b is a number.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Solving equations with one absolute value.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Forgetting the negative case, or solving when b is negative.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Isolate the absolute value first, then split into two equations.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Two solutions</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve 3|2x − 3| + 1 = 22.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Isolate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3|2x − 3| = 21, so |2x − 3| = 7</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Split</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x − 3 = 7 or 2x − 3 = −7</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x = 10 → x = 5;   2x = −4 → x = −2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3|7| + 1 = 22 ✓;  3|−7| + 1 = 22 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 5 or x = −2.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Checking for extraneous solutions</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve |x + 1| = 2x − 4.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Case 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x + 1 = 2x − 4 → x = 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Case 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x + 1 = −(2x − 4) → 3x = 3 → x = 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check x = 5</strong>
    </p>
    <div style="margin:6px 0 0 34px;">|6| = 6 and 2(5) − 4 = 6 ✓</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Check x = 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">|2| = 2 but 2(1) − 4 = −2 ✗</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 5 is the only solution; x = 1 is extraneous.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> When a variable appears outside the absolute value, one case may give an answer that makes the right side negative — which an absolute value can never equal.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Skipping the check and keeping both answers.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Solving Absolute Value Inequalities</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inequality (b positive)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Means</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rewrite as</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Graph</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|A| &lt; b  or  |A| ≤ b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Within b of zero</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−b &lt; A &lt; b  (and)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One segment between two points</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|A| &gt; b  or  |A| ≥ b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More than b from zero</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A &lt; −b  or  A &gt; b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two rays pointing outward</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: A manufacturing tolerance (A-CED.1)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A bolt must be 50 mm long with a tolerance of 0.2 mm. Write and solve an inequality for acceptable lengths L.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write</strong>
    </p>
    <div style="margin:6px 0 0 34px;">|L − 50| ≤ 0.2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Rewrite</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−0.2 ≤ L − 50 ≤ 0.2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">49.8 ≤ L ≤ 50.2</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Acceptable bolts are from 49.8 mm to 50.2 mm long, inclusive.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 5: An “or” inequality</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve |x − 3| ≥ 5.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Split</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x − 3 ≤ −5 or x − 3 ≥ 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x ≤ −2 or x ≥ 8</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x ≤ −2 or x ≥ 8: two rays on the number line.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve |x| = 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 9 or x = −9.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve |x − 4| = −2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No solution — absolute value cannot be negative.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Solve |x + 1| ≤ 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−4 ≤ x ≤ 2.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reasoning about distance</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Solving in cases</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking solutions</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modeling tolerances</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Connecting graphs and solutions</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>The graph explains the algebra. The solutions of |x − 3| ≤ 2 are the x-values where the V is on or below the line y = 2 — a single segment between x = 1 and x = 5. The solutions of |x − 3| ≥ 2 are where the V is on or above the line — two separate pieces. If you are unsure whether to use “and” or “or,” sketch the graph.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why can |x − 3| ≤ −1 never have a solution? What would its graph look like?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #f48fb1;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> A normal body temperature is often described as within about 1 °F of 98.6 °F, which can be written as |T − 98.6| ≤ 1.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Environmental agencies set acceptable ranges for water quality, such as pH, that can be written with absolute value inequalities.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Quality-control engineers, pharmacists and pollsters use tolerances and margins of error every day.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is the vertex of y = −|x + 4| + 1?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Rewrite as x − (−4).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(−4, 1)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Solve |x − 2| = 6.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Two cases.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 8 or x = −4.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Does |A| ≤ b become “and” or “or”?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Stay close.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">“And.”</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write and solve an absolute value inequality for a recipe that needs 250 grams of flour, give or take 10 grams.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each partner writes an absolute value equation with an extraneous solution; swap and solve.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Measure an object several times and decide whether each measurement is within a chosen tolerance.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Graph y = |x − 3| and y = 2 in a graphing calculator and find the intersections. Compare with your algebraic solution.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve |x| = 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 12 or x = −12.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the vertex of y = |x − 7| + 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(7, 2)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 2|x + 3| − 4 = 10.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">|x + 3| = 7: x = 4 or x = −10.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve |x − 5| ≥ 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≤ 4 or x ≥ 6.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f48fb1;">
    <p style="margin:0 0 6px 0;color:#f48fb1;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve |2x − 1| = x + 4 and check for extraneous solutions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2x − 1 = x + 4 gives x = 5 (check: 9 = 9 ✓); 2x − 1 = −x − 4 gives x = −1 (check: 3 = 3 ✓). Both are solutions.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A cereal box should hold 500 g with a tolerance of 8 g. Write and solve the inequality.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">|w − 500| ≤ 8, so 492 ≤ w ≤ 508.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A-CED.1: A thermostat keeps a room within 2 °F of 70 °F. Write an inequality and give the range.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">|T − 70| ≤ 2, so 68 ≤ T ≤ 72.</div>
    </details>
    </div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Absolute value measures distance from zero, so |A| = b has two solutions when b is positive, one when b = 0 and none when b is negative. Isolate the absolute value, split into two equations and check for extraneous solutions when the variable also appears outside. |A| ≤ b means −b ≤ A ≤ b (and); |A| ≥ b means A ≤ −b or A ≥ b (or). Absolute value graphs y = a|x − h| + k are V-shaped with vertex (h, k).</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>|A| = b → A = b or A = −b.</li>
    <li>Negative b → no solution.</li>
    <li>Less than → and; greater than → or.</li>
    <li>Vertex form a|x − h| + k.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Isolate first.</li>
    <li>Always check answers.</li>
    <li>Sketch the graph if unsure.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting the negative case.</li>
    <li>Keeping extraneous solutions.</li>
    <li>Using “and” for greater-than inequalities.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Think “distance.”</li>
    <li>Write tolerance problems as |x − target| ≤ tolerance.</li>
    <li>Use number lines.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show both cases.</li>
    <li>State “no solution” clearly when needed.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">A-CED.1 Equations</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Create and solve.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">A-REI.3 Inequalities</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve in one variable.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.7b Graphing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absolute value graphs.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Accuracy</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Carefulness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Logical reasoning</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Quality and safety</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and science</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Whenever something must be “close enough” to a target, absolute value inequalities describe what is acceptable.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve ten absolute value equations and inequalities, checking each.</li>
    <li>Write one tolerance problem from real life and solve it.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How does the graph help me choose “and” or “or”?</li>
    <li>Why do extraneous solutions happen?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Absolute value</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance from zero.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Extraneous</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">False solution.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Tolerance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Allowed variation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Compound inequality</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Joined by and/or.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can graph absolute value functions.</p>
    <p style="margin:6px 0;">☐ I can solve absolute value equations.</p>
    <p style="margin:6px 0;">☐ I can check for extraneous solutions.</p>
    <p style="margin:6px 0;">☐ I can solve absolute value inequalities.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '|−12| equals:',
            options: ['−12', '0', '12', '1/12'],
            correct: 2,
            explanation: 'The answer is 12. Distance from zero.'
        },
        {
            question: 'Solve |x| = 6.',
            options: ['x = 6 or x = −6', 'x = 6 only', 'x = −6 only', 'No solution'],
            correct: 0,
            explanation: 'The answer is x = 6 or x = −6. Two numbers are 6 from 0.'
        },
        {
            question: 'Solve |x + 2| = −5.',
            options: ['x = 3', 'x = −7', 'x = 3 or x = −7', 'No solution'],
            correct: 3,
            explanation: 'Absolute value cannot be negative.'
        },
        {
            question: 'The vertex of y = |x + 3| − 4 is:',
            options: ['(3, −4)', '(−3, 4)', '(3, 4)', '(−3, −4)'],
            correct: 3,
            explanation: 'The answer is (−3, −4). h = −3, k = −4.'
        },
        {
            question: '|x − 1| ≤ 4 is equivalent to:',
            options: ['−3 ≤ x ≤ 5', 'x ≤ −3 or x ≥ 5', '−4 ≤ x ≤ 4', 'x ≤ 5'],
            correct: 0,
            explanation: 'The answer is −3 ≤ x ≤ 5. −4 ≤ x − 1 ≤ 4.'
        },
        {
            question: '|x| ≥ 2 is equivalent to:',
            options: ['−2 ≤ x ≤ 2', 'x ≥ 2 only', 'No solution', 'x ≤ −2 or x ≥ 2'],
            correct: 3,
            explanation: 'The answer is x ≤ −2 or x ≥ 2. Greater than → or.'
        },
        {
            question: 'An extraneous solution is one that:',
            options: ['Does not satisfy the original equation', 'Is always negative', 'Is the vertex', 'Is a whole number'],
            correct: 0,
            explanation: 'The answer is Does not satisfy the original equation. Always check.'
        },
        {
            question: 'Acceptable lengths for 50 ± 0.2 mm are:',
            options: ['49 to 51 mm', '50 to 50.2 mm', '49.8 to 50.2 mm', '49.8 to 50 mm'],
            correct: 2,
            explanation: 'The answer is 49.8 to 50.2 mm. |L − 50| ≤ 0.2.'
        },
        {
            question: 'Solve 2|x| = 10.',
            options: ['x = 10 or x = −10', 'x = 5 or x = −5', 'x = 5 only', 'x = 20'],
            correct: 1,
            explanation: 'The answer is x = 5 or x = −5. Divide by 2 first.'
        },
        {
            question: 'The graph of an absolute value function is shaped like a:',
            options: ['U', 'V', 'Straight line', 'Circle'],
            correct: 1,
            explanation: 'Two rays meeting at the vertex.'
        }
    ]
},
{
    name: '1.2.3 Piecewise and Step Functions',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Modeling Change</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Piecewise and Step Functions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will evaluate, graph and write piecewise functions, including step functions such as the greatest integer function, and use them to model pay, parking and shipping costs.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Many real rules change at certain points: overtime pay starts after 40 hours, shipping costs jump at each pound, and phone plans charge extra after a data limit. Piecewise functions model these rules exactly.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💼 Overtime pay</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📦 Shipping costs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🅿️ Parking fees</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Data plans</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧾 Tax brackets</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚕 Taxi fares</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Construct linear functions from graphs, descriptions or data. (F-LE.2)</li>
    <li>Fit a linear function to data and interpret slope, intercept and correlation. (S-ID.6, S-ID.7, S-ID.8)</li>
    <li>Create and solve absolute value equations and inequalities. (A-CED.1, A-REI.3)</li>
    <li>Graph absolute value, piecewise and step functions. (F-IF.7b)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Evaluate a piecewise function.</li>
    <li>Graph piecewise functions with open and closed endpoints.</li>
    <li>Write a piecewise function from a description or graph.</li>
    <li>Graph and interpret step functions.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can one function follow different rules in different situations?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> An absolute value function is actually a piecewise function: |x| = x when x ≥ 0 and −x when x is negative. Now you will build your own.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>piecewise function</strong> is defined by two or more rules, each used on a different part of the domain. To evaluate it, first decide which piece the input belongs to, then use that piece’s rule.</p>
    <p>A <strong>step function</strong> is a piecewise function whose pieces are horizontal segments, so its graph looks like stairs. The <strong>greatest integer function</strong>, written ⌊x⌋ (also called the floor function), rounds down to the nearest integer: ⌊3.7⌋ = 3 and ⌊−1.2⌋ = −2.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Piecewise = different rules for different inputs. Check the condition first, then use the rule.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>In the United States, the Fair Labor Standards Act of 1938 requires most hourly employees to be paid at least one and a half times their regular rate for hours worked over 40 in a workweek. This rule creates a classic piecewise function: pay grows at one rate up to 40 hours and at a higher rate after that.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">piecewise function</strong>
    </p>
    <p style="margin:6px 0;">A function defined by different rules on different parts of its domain.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> f(x) = { rule 1, condition 1; rule 2, condition 2 }</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Overtime pay is piecewise.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">boundary point</strong>
    </p>
    <p style="margin:6px 0;">The input where the rule changes.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x = a</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>For overtime, the boundary is 40 hours.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">closed dot</strong>
    </p>
    <p style="margin:6px 0;">A filled circle showing an endpoint is included.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ●  for ≤ or ≥</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>● at (1, 5)</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">open dot</strong>
    </p>
    <p style="margin:6px 0;">An empty circle showing an endpoint is not included.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ○  for &lt; or &gt;</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>○ at (1, 3)</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">step function</strong>
    </p>
    <p style="margin:6px 0;">A piecewise function made of horizontal segments.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> stairs</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Parking fees are a step function.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #f48fb1;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">greatest integer function</strong>
    </p>
    <p style="margin:6px 0;">The function that rounds down to the nearest integer.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ⌊x⌋</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>⌊4.9⌋ = 4</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Evaluating and Graphing Piecewise Functions</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">f(x) =</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Condition</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2x + 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">if x &lt; 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−x + 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">if x ≥ 1</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 320" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><g transform="translate(0,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">A piecewise function</text><line x1="44" y1="40" x2="44" y2="276" stroke="#1e293b"/><line x1="72" y1="40" x2="72" y2="276" stroke="#1e293b"/><line x1="100" y1="40" x2="100" y2="276" stroke="#1e293b"/><line x1="128" y1="40" x2="128" y2="276" stroke="#1e293b"/><line x1="156" y1="40" x2="156" y2="276" stroke="#1e293b"/><line x1="184" y1="40" x2="184" y2="276" stroke="#1e293b"/><line x1="212" y1="40" x2="212" y2="276" stroke="#1e293b"/><line x1="240" y1="40" x2="240" y2="276" stroke="#1e293b"/><line x1="268" y1="40" x2="268" y2="276" stroke="#1e293b"/><line x1="296" y1="40" x2="296" y2="276" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="276" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="256.3333333333333" x2="324" y2="256.3333333333333" stroke="#1e293b"/><line x1="44" y1="236.66666666666669" x2="324" y2="236.66666666666669" stroke="#1e293b"/><line x1="44" y1="217" x2="324" y2="217" stroke="#1e293b"/><line x1="44" y1="197.33333333333331" x2="324" y2="197.33333333333331" stroke="#1e293b"/><line x1="44" y1="177.66666666666669" x2="324" y2="177.66666666666669" stroke="#1e293b"/><line x1="44" y1="158" x2="324" y2="158" stroke="#1e293b"/><line x1="44" y1="138.33333333333334" x2="324" y2="138.33333333333334" stroke="#1e293b"/><line x1="44" y1="118.66666666666666" x2="324" y2="118.66666666666666" stroke="#1e293b"/><line x1="44" y1="99" x2="324" y2="99" stroke="#1e293b"/><line x1="44" y1="79.33333333333333" x2="324" y2="79.33333333333333" stroke="#1e293b"/><line x1="44" y1="59.666666666666664" x2="324" y2="59.666666666666664" stroke="#1e293b"/><line x1="44" y1="40" x2="324" y2="40" stroke="#1e293b"/><line x1="44" y1="177.66666666666669" x2="324" y2="177.66666666666669" stroke="#94a3b8" stroke-width="1.5"/><line x1="156" y1="40" x2="156" y2="276" stroke="#94a3b8" stroke-width="1.5"/><text x="44" y="191.66666666666669" fill="#94a3b8" font-size="10" text-anchor="middle">-4</text><text x="100" y="191.66666666666669" fill="#94a3b8" font-size="10" text-anchor="middle">-2</text><text x="212" y="191.66666666666669" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="268" y="191.66666666666669" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="324" y="191.66666666666669" fill="#94a3b8" font-size="10" text-anchor="middle">6</text><text x="151" y="259.3333333333333" fill="#94a3b8" font-size="10" text-anchor="end">-4</text><text x="151" y="220" fill="#94a3b8" font-size="10" text-anchor="end">-2</text><text x="151" y="141.33333333333334" fill="#94a3b8" font-size="10" text-anchor="end">2</text><text x="151" y="102" fill="#94a3b8" font-size="10" text-anchor="end">4</text><text x="151" y="62.666666666666664" fill="#94a3b8" font-size="10" text-anchor="end">6</text><polyline points="72.0,276.0 72.7,275.0 73.4,274.0 74.1,273.0 74.8,272.1 75.5,271.1 76.2,270.1 76.9,269.1 77.6,268.1 78.3,267.1 79.0,266.2 79.7,265.2 80.4,264.2 81.1,263.2 81.8,262.2 82.5,261.3 83.2,260.3 83.9,259.3 84.6,258.3 85.3,257.3 86.0,256.3 86.7,255.3 87.4,254.4 88.1,253.4 88.8,252.4 89.5,251.4 90.2,250.4 90.9,249.5 91.6,248.5 92.3,247.5 93.0,246.5 93.7,245.5 94.4,244.5 95.1,243.5 95.8,242.6 96.5,241.6 97.2,240.6 97.9,239.6 98.6,238.6 99.3,237.7 100.0,236.7 100.7,235.7 101.4,234.7 102.1,233.7 102.8,232.7 103.5,231.8 104.2,230.8 104.9,229.8 105.6,228.8 106.3,227.8 107.0,226.8 107.7,225.8 108.4,224.9 109.1,223.9 109.8,222.9 110.5,221.9 111.2,220.9 111.9,220.0 112.6,219.0 113.3,218.0 114.0,217.0 114.7,216.0 115.4,215.0 116.1,214.0 116.8,213.1 117.5,212.1 118.2,211.1 118.9,210.1 119.6,209.1 120.3,208.2 121.0,207.2 121.7,206.2 122.4,205.2 123.1,204.2 123.8,203.2 124.5,202.3 125.2,201.3 125.9,200.3 126.6,199.3 127.3,198.3 128.0,197.3 128.7,196.3 129.4,195.4 130.1,194.4 130.8,193.4 131.5,192.4 132.2,191.4 132.9,190.5 133.6,189.5 134.3,188.5 135.0,187.5 135.7,186.5 136.4,185.5 137.1,184.5 137.8,183.6 138.5,182.6 139.2,181.6 139.9,180.6 140.6,179.6 141.3,178.7 142.0,177.7 142.7,176.7 143.4,175.7 144.1,174.7 144.8,173.7 145.5,172.8 146.2,171.8 146.9,170.8 147.6,169.8 148.3,168.8 149.0,167.8 149.7,166.8 150.4,165.9 151.1,164.9 151.8,163.9 152.5,162.9 153.2,161.9 153.9,161.0 154.6,160.0 155.3,159.0 156.0,158.0 156.7,157.0 157.4,156.0 158.1,155.1 158.8,154.1 159.5,153.1 160.2,152.1 160.9,151.1 161.6,150.1 162.3,149.2 163.0,148.2 163.7,147.2 164.4,146.2 165.1,145.2 165.8,144.2 166.5,143.3 167.2,142.3 167.9,141.3 168.6,140.3 169.3,139.3 170.0,138.3 170.7,137.3 171.4,136.4 172.1,135.4 172.8,134.4 173.5,133.4 174.2,132.4 174.9,131.4 175.6,130.5 176.3,129.5 177.0,128.5 177.7,127.5 178.4,126.5 179.1,125.5 179.8,124.6 180.5,123.6 181.2,122.6 181.9,121.6 182.6,120.6 183.3,119.7 184.0,118.7" fill="none" stroke="#f48fb1" stroke-width="3"/><text x="122.39999999999999" y="252.4" fill="#f48fb1" font-size="12" font-weight="bold" text-anchor="middle">2x + 1</text><polyline points="184.0,79.3 184.7,79.8 185.4,80.3 186.1,80.8 186.8,81.3 187.5,81.8 188.2,82.3 188.9,82.8 189.6,83.3 190.3,83.8 191.0,84.3 191.7,84.7 192.4,85.2 193.1,85.7 193.8,86.2 194.5,86.7 195.2,87.2 195.9,87.7 196.6,88.2 197.3,88.7 198.0,89.2 198.7,89.7 199.4,90.2 200.1,90.6 200.8,91.1 201.5,91.6 202.2,92.1 202.9,92.6 203.6,93.1 204.3,93.6 205.0,94.1 205.7,94.6 206.4,95.1 207.1,95.6 207.8,96.0 208.5,96.5 209.2,97.0 209.9,97.5 210.6,98.0 211.3,98.5 212.0,99.0 212.7,99.5 213.4,100.0 214.1,100.5 214.8,101.0 215.5,101.5 216.2,102.0 216.9,102.4 217.6,102.9 218.3,103.4 219.0,103.9 219.7,104.4 220.4,104.9 221.1,105.4 221.8,105.9 222.5,106.4 223.2,106.9 223.9,107.4 224.6,107.9 225.3,108.3 226.0,108.8 226.7,109.3 227.4,109.8 228.1,110.3 228.8,110.8 229.5,111.3 230.2,111.8 230.9,112.3 231.6,112.8 232.3,113.3 233.0,113.8 233.7,114.2 234.4,114.7 235.1,115.2 235.8,115.7 236.5,116.2 237.2,116.7 237.9,117.2 238.6,117.7 239.3,118.2 240.0,118.7 240.7,119.2 241.4,119.6 242.1,120.1 242.8,120.6 243.5,121.1 244.2,121.6 244.9,122.1 245.6,122.6 246.3,123.1 247.0,123.6 247.7,124.1 248.4,124.6 249.1,125.1 249.8,125.5 250.5,126.0 251.2,126.5 251.9,127.0 252.6,127.5 253.3,128.0 254.0,128.5 254.7,129.0 255.4,129.5 256.1,130.0 256.8,130.5 257.5,131.0 258.2,131.4 258.9,131.9 259.6,132.4 260.3,132.9 261.0,133.4 261.7,133.9 262.4,134.4 263.1,134.9 263.8,135.4 264.5,135.9 265.2,136.4 265.9,136.9 266.6,137.4 267.3,137.8 268.0,138.3 268.7,138.8 269.4,139.3 270.1,139.8 270.8,140.3 271.5,140.8 272.2,141.3 272.9,141.8 273.6,142.3 274.3,142.8 275.0,143.3 275.7,143.7 276.4,144.2 277.1,144.7 277.8,145.2 278.5,145.7 279.2,146.2 279.9,146.7 280.6,147.2 281.3,147.7 282.0,148.2 282.7,148.7 283.4,149.1 284.1,149.6 284.8,150.1 285.5,150.6 286.2,151.1 286.9,151.6 287.6,152.1 288.3,152.6 289.0,153.1 289.7,153.6 290.4,154.1 291.1,154.6 291.8,155.1 292.5,155.5 293.2,156.0 293.9,156.5 294.6,157.0 295.3,157.5 296.0,158.0 296.7,158.5 297.4,159.0 298.1,159.5 298.8,160.0 299.5,160.5 300.2,161.0 300.9,161.4 301.6,161.9 302.3,162.4 303.0,162.9 303.7,163.4 304.4,163.9 305.1,164.4 305.8,164.9 306.5,165.4 307.2,165.9 307.9,166.4 308.6,166.8 309.3,167.3 310.0,167.8 310.7,168.3 311.4,168.8 312.1,169.3 312.8,169.8 313.5,170.3 314.2,170.8 314.9,171.3 315.6,171.8 316.3,172.3 317.0,172.8 317.7,173.2 318.4,173.7 319.1,174.2 319.8,174.7 320.5,175.2 321.2,175.7 321.9,176.2 322.6,176.7 323.3,177.2 324.0,177.7" fill="none" stroke="#67e8f9" stroke-width="3"/><text x="279.20000000000005" y="106.86666666666666" fill="#67e8f9" font-size="12" font-weight="bold" text-anchor="middle">−x + 6</text><circle cx="184" cy="118.66666666666666" r="5" fill="#0f172a" stroke="#f48fb1" stroke-width="2"/><text x="218" y="138.66666666666666" fill="#f48fb1" font-size="11" text-anchor="middle">open (1, 3)</text><circle cx="184" cy="79.33333333333333" r="5" fill="#67e8f9" stroke="#67e8f9" stroke-width="2"/><text x="184" y="69.33333333333333" fill="#67e8f9" font-size="11" text-anchor="middle">closed (1, 5)</text></g><g transform="translate(360,0)"><text x="170" y="24" fill="#e3f2fd" font-size="14" font-weight="bold" text-anchor="middle">Parking cost: a step function</text><line x1="44" y1="40" x2="44" y2="276" stroke="#1e293b"/><line x1="100" y1="40" x2="100" y2="276" stroke="#1e293b"/><line x1="156" y1="40" x2="156" y2="276" stroke="#1e293b"/><line x1="212" y1="40" x2="212" y2="276" stroke="#1e293b"/><line x1="268" y1="40" x2="268" y2="276" stroke="#1e293b"/><line x1="324" y1="40" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="276" x2="324" y2="276" stroke="#1e293b"/><line x1="44" y1="231.75" x2="324" y2="231.75" stroke="#1e293b"/><line x1="44" y1="187.5" x2="324" y2="187.5" stroke="#1e293b"/><line x1="44" y1="143.25" x2="324" y2="143.25" stroke="#1e293b"/><line x1="44" y1="99" x2="324" y2="99" stroke="#1e293b"/><line x1="44" y1="54.75" x2="324" y2="54.75" stroke="#1e293b"/><line x1="44" y1="276" x2="324" y2="276" stroke="#94a3b8" stroke-width="1.5"/><line x1="44" y1="40" x2="44" y2="276" stroke="#94a3b8" stroke-width="1.5"/><text x="100" y="290" fill="#94a3b8" font-size="10" text-anchor="middle">1</text><text x="156" y="290" fill="#94a3b8" font-size="10" text-anchor="middle">2</text><text x="212" y="290" fill="#94a3b8" font-size="10" text-anchor="middle">3</text><text x="268" y="290" fill="#94a3b8" font-size="10" text-anchor="middle">4</text><text x="324" y="290" fill="#94a3b8" font-size="10" text-anchor="middle">5</text><text x="39" y="234.75" fill="#94a3b8" font-size="10" text-anchor="end">3</text><text x="39" y="190.5" fill="#94a3b8" font-size="10" text-anchor="end">6</text><text x="39" y="146.25" fill="#94a3b8" font-size="10" text-anchor="end">9</text><text x="39" y="102" fill="#94a3b8" font-size="10" text-anchor="end">12</text><text x="39" y="57.75" fill="#94a3b8" font-size="10" text-anchor="end">15</text><text x="184" y="306" fill="#94a3b8" font-size="11" text-anchor="middle">hours parked</text><text x="12" y="158" fill="#94a3b8" font-size="11" text-anchor="middle" transform="rotate(-90 12 158)">cost ($)</text><polyline points="45.7,231.8 46.0,231.8 46.2,231.8 46.5,231.8 46.8,231.8 47.0,231.8 47.3,231.8 47.6,231.8 47.9,231.8 48.1,231.8 48.4,231.8 48.7,231.8 48.9,231.8 49.2,231.8 49.5,231.8 49.8,231.8 50.0,231.8 50.3,231.8 50.6,231.8 50.8,231.8 51.1,231.8 51.4,231.8 51.7,231.8 51.9,231.8 52.2,231.8 52.5,231.8 52.7,231.8 53.0,231.8 53.3,231.8 53.6,231.8 53.8,231.8 54.1,231.8 54.4,231.8 54.6,231.8 54.9,231.8 55.2,231.8 55.5,231.8 55.7,231.8 56.0,231.8 56.3,231.8 56.5,231.8 56.8,231.8 57.1,231.8 57.4,231.8 57.6,231.8 57.9,231.8 58.2,231.8 58.4,231.8 58.7,231.8 59.0,231.8 59.3,231.8 59.5,231.8 59.8,231.8 60.1,231.8 60.3,231.8 60.6,231.8 60.9,231.8 61.2,231.8 61.4,231.8 61.7,231.8 62.0,231.8 62.2,231.8 62.5,231.8 62.8,231.8 63.1,231.8 63.3,231.8 63.6,231.8 63.9,231.8 64.1,231.8 64.4,231.8 64.7,231.8 65.0,231.8 65.2,231.8 65.5,231.8 65.8,231.8 66.1,231.8 66.3,231.8 66.6,231.8 66.9,231.8 67.1,231.8 67.4,231.8 67.7,231.8 68.0,231.8 68.2,231.8 68.5,231.8 68.8,231.8 69.0,231.8 69.3,231.8 69.6,231.8 69.9,231.8 70.1,231.8 70.4,231.8 70.7,231.8 70.9,231.8 71.2,231.8 71.5,231.8 71.8,231.8 72.0,231.8 72.3,231.8 72.6,231.8 72.8,231.8 73.1,231.8 73.4,231.8 73.7,231.8 73.9,231.8 74.2,231.8 74.5,231.8 74.7,231.8 75.0,231.8 75.3,231.8 75.6,231.8 75.8,231.8 76.1,231.8 76.4,231.8 76.6,231.8 76.9,231.8 77.2,231.8 77.5,231.8 77.7,231.8 78.0,231.8 78.3,231.8 78.5,231.8 78.8,231.8 79.1,231.8 79.4,231.8 79.6,231.8 79.9,231.8 80.2,231.8 80.4,231.8 80.7,231.8 81.0,231.8 81.3,231.8 81.5,231.8 81.8,231.8 82.1,231.8 82.3,231.8 82.6,231.8 82.9,231.8 83.2,231.8 83.4,231.8 83.7,231.8 84.0,231.8 84.2,231.8 84.5,231.8 84.8,231.8 85.1,231.8 85.3,231.8 85.6,231.8 85.9,231.8 86.1,231.8 86.4,231.8 86.7,231.8 87.0,231.8 87.2,231.8 87.5,231.8 87.8,231.8 88.0,231.8 88.3,231.8 88.6,231.8 88.9,231.8 89.1,231.8 89.4,231.8 89.7,231.8 90.0,231.8 90.2,231.8 90.5,231.8 90.8,231.8 91.0,231.8 91.3,231.8 91.6,231.8 91.9,231.8 92.1,231.8 92.4,231.8 92.7,231.8 92.9,231.8 93.2,231.8 93.5,231.8 93.8,231.8 94.0,231.8 94.3,231.8 94.6,231.8 94.8,231.8 95.1,231.8 95.4,231.8 95.7,231.8 95.9,231.8 96.2,231.8 96.5,231.8 96.7,231.8 97.0,231.8 97.3,231.8 97.6,231.8 97.8,231.8 98.1,231.8 98.4,231.8 98.6,231.8 98.9,231.8 99.2,231.8 99.5,231.8 99.7,231.8 100.0,231.8" fill="none" stroke="#fde68a" stroke-width="3"/><polyline points="101.7,187.5 102.0,187.5 102.2,187.5 102.5,187.5 102.8,187.5 103.0,187.5 103.3,187.5 103.6,187.5 103.9,187.5 104.1,187.5 104.4,187.5 104.7,187.5 104.9,187.5 105.2,187.5 105.5,187.5 105.8,187.5 106.0,187.5 106.3,187.5 106.6,187.5 106.8,187.5 107.1,187.5 107.4,187.5 107.7,187.5 107.9,187.5 108.2,187.5 108.5,187.5 108.7,187.5 109.0,187.5 109.3,187.5 109.6,187.5 109.8,187.5 110.1,187.5 110.4,187.5 110.6,187.5 110.9,187.5 111.2,187.5 111.5,187.5 111.7,187.5 112.0,187.5 112.3,187.5 112.5,187.5 112.8,187.5 113.1,187.5 113.4,187.5 113.6,187.5 113.9,187.5 114.2,187.5 114.4,187.5 114.7,187.5 115.0,187.5 115.3,187.5 115.5,187.5 115.8,187.5 116.1,187.5 116.3,187.5 116.6,187.5 116.9,187.5 117.2,187.5 117.4,187.5 117.7,187.5 118.0,187.5 118.2,187.5 118.5,187.5 118.8,187.5 119.1,187.5 119.3,187.5 119.6,187.5 119.9,187.5 120.1,187.5 120.4,187.5 120.7,187.5 121.0,187.5 121.2,187.5 121.5,187.5 121.8,187.5 122.0,187.5 122.3,187.5 122.6,187.5 122.9,187.5 123.1,187.5 123.4,187.5 123.7,187.5 124.0,187.5 124.2,187.5 124.5,187.5 124.8,187.5 125.0,187.5 125.3,187.5 125.6,187.5 125.9,187.5 126.1,187.5 126.4,187.5 126.7,187.5 126.9,187.5 127.2,187.5 127.5,187.5 127.8,187.5 128.0,187.5 128.3,187.5 128.6,187.5 128.8,187.5 129.1,187.5 129.4,187.5 129.7,187.5 129.9,187.5 130.2,187.5 130.5,187.5 130.7,187.5 131.0,187.5 131.3,187.5 131.6,187.5 131.8,187.5 132.1,187.5 132.4,187.5 132.6,187.5 132.9,187.5 133.2,187.5 133.5,187.5 133.7,187.5 134.0,187.5 134.3,187.5 134.5,187.5 134.8,187.5 135.1,187.5 135.4,187.5 135.6,187.5 135.9,187.5 136.2,187.5 136.4,187.5 136.7,187.5 137.0,187.5 137.3,187.5 137.5,187.5 137.8,187.5 138.1,187.5 138.3,187.5 138.6,187.5 138.9,187.5 139.2,187.5 139.4,187.5 139.7,187.5 140.0,187.5 140.2,187.5 140.5,187.5 140.8,187.5 141.1,187.5 141.3,187.5 141.6,187.5 141.9,187.5 142.1,187.5 142.4,187.5 142.7,187.5 143.0,187.5 143.2,187.5 143.5,187.5 143.8,187.5 144.0,187.5 144.3,187.5 144.6,187.5 144.9,187.5 145.1,187.5 145.4,187.5 145.7,187.5 146.0,187.5 146.2,187.5 146.5,187.5 146.8,187.5 147.0,187.5 147.3,187.5 147.6,187.5 147.9,187.5 148.1,187.5 148.4,187.5 148.7,187.5 148.9,187.5 149.2,187.5 149.5,187.5 149.8,187.5 150.0,187.5 150.3,187.5 150.6,187.5 150.8,187.5 151.1,187.5 151.4,187.5 151.7,187.5 151.9,187.5 152.2,187.5 152.5,187.5 152.7,187.5 153.0,187.5 153.3,187.5 153.6,187.5 153.8,187.5 154.1,187.5 154.4,187.5 154.6,187.5 154.9,187.5 155.2,187.5 155.5,187.5 155.7,187.5 156.0,187.5" fill="none" stroke="#fde68a" stroke-width="3"/><polyline points="157.7,143.3 158.0,143.3 158.2,143.3 158.5,143.3 158.8,143.3 159.0,143.3 159.3,143.3 159.6,143.3 159.9,143.3 160.1,143.3 160.4,143.3 160.7,143.3 160.9,143.3 161.2,143.3 161.5,143.3 161.8,143.3 162.0,143.3 162.3,143.3 162.6,143.3 162.8,143.3 163.1,143.3 163.4,143.3 163.7,143.3 163.9,143.3 164.2,143.3 164.5,143.3 164.7,143.3 165.0,143.3 165.3,143.3 165.6,143.3 165.8,143.3 166.1,143.3 166.4,143.3 166.6,143.3 166.9,143.3 167.2,143.3 167.5,143.3 167.7,143.3 168.0,143.3 168.3,143.3 168.5,143.3 168.8,143.3 169.1,143.3 169.4,143.3 169.6,143.3 169.9,143.3 170.2,143.3 170.4,143.3 170.7,143.3 171.0,143.3 171.3,143.3 171.5,143.3 171.8,143.3 172.1,143.3 172.3,143.3 172.6,143.3 172.9,143.3 173.2,143.3 173.4,143.3 173.7,143.3 174.0,143.3 174.2,143.3 174.5,143.3 174.8,143.3 175.1,143.3 175.3,143.3 175.6,143.3 175.9,143.3 176.1,143.3 176.4,143.3 176.7,143.3 177.0,143.3 177.2,143.3 177.5,143.3 177.8,143.3 178.0,143.3 178.3,143.3 178.6,143.3 178.9,143.3 179.1,143.3 179.4,143.3 179.7,143.3 180.0,143.3 180.2,143.3 180.5,143.3 180.8,143.3 181.0,143.3 181.3,143.3 181.6,143.3 181.9,143.3 182.1,143.3 182.4,143.3 182.7,143.3 182.9,143.3 183.2,143.3 183.5,143.3 183.8,143.3 184.0,143.3 184.3,143.3 184.6,143.3 184.8,143.3 185.1,143.3 185.4,143.3 185.7,143.3 185.9,143.3 186.2,143.3 186.5,143.3 186.7,143.3 187.0,143.3 187.3,143.3 187.6,143.3 187.8,143.3 188.1,143.3 188.4,143.3 188.6,143.3 188.9,143.3 189.2,143.3 189.5,143.3 189.7,143.3 190.0,143.3 190.3,143.3 190.5,143.3 190.8,143.3 191.1,143.3 191.4,143.3 191.6,143.3 191.9,143.3 192.2,143.3 192.4,143.3 192.7,143.3 193.0,143.3 193.3,143.3 193.5,143.3 193.8,143.3 194.1,143.3 194.3,143.3 194.6,143.3 194.9,143.3 195.2,143.3 195.4,143.3 195.7,143.3 196.0,143.3 196.2,143.3 196.5,143.3 196.8,143.3 197.1,143.3 197.3,143.3 197.6,143.3 197.9,143.3 198.1,143.3 198.4,143.3 198.7,143.3 199.0,143.3 199.2,143.3 199.5,143.3 199.8,143.3 200.0,143.3 200.3,143.3 200.6,143.3 200.9,143.3 201.1,143.3 201.4,143.3 201.7,143.3 202.0,143.3 202.2,143.3 202.5,143.3 202.8,143.3 203.0,143.3 203.3,143.3 203.6,143.3 203.9,143.3 204.1,143.3 204.4,143.3 204.7,143.3 204.9,143.3 205.2,143.3 205.5,143.3 205.8,143.3 206.0,143.3 206.3,143.3 206.6,143.3 206.8,143.3 207.1,143.3 207.4,143.3 207.7,143.3 207.9,143.3 208.2,143.3 208.5,143.3 208.7,143.3 209.0,143.3 209.3,143.3 209.6,143.3 209.8,143.3 210.1,143.3 210.4,143.3 210.6,143.3 210.9,143.3 211.2,143.3 211.5,143.3 211.7,143.3 212.0,143.3" fill="none" stroke="#fde68a" stroke-width="3"/><polyline points="213.7,99.0 214.0,99.0 214.2,99.0 214.5,99.0 214.8,99.0 215.0,99.0 215.3,99.0 215.6,99.0 215.9,99.0 216.1,99.0 216.4,99.0 216.7,99.0 216.9,99.0 217.2,99.0 217.5,99.0 217.8,99.0 218.0,99.0 218.3,99.0 218.6,99.0 218.8,99.0 219.1,99.0 219.4,99.0 219.7,99.0 219.9,99.0 220.2,99.0 220.5,99.0 220.7,99.0 221.0,99.0 221.3,99.0 221.6,99.0 221.8,99.0 222.1,99.0 222.4,99.0 222.6,99.0 222.9,99.0 223.2,99.0 223.5,99.0 223.7,99.0 224.0,99.0 224.3,99.0 224.5,99.0 224.8,99.0 225.1,99.0 225.4,99.0 225.6,99.0 225.9,99.0 226.2,99.0 226.4,99.0 226.7,99.0 227.0,99.0 227.3,99.0 227.5,99.0 227.8,99.0 228.1,99.0 228.3,99.0 228.6,99.0 228.9,99.0 229.2,99.0 229.4,99.0 229.7,99.0 230.0,99.0 230.2,99.0 230.5,99.0 230.8,99.0 231.1,99.0 231.3,99.0 231.6,99.0 231.9,99.0 232.1,99.0 232.4,99.0 232.7,99.0 233.0,99.0 233.2,99.0 233.5,99.0 233.8,99.0 234.0,99.0 234.3,99.0 234.6,99.0 234.9,99.0 235.1,99.0 235.4,99.0 235.7,99.0 236.0,99.0 236.2,99.0 236.5,99.0 236.8,99.0 237.0,99.0 237.3,99.0 237.6,99.0 237.9,99.0 238.1,99.0 238.4,99.0 238.7,99.0 238.9,99.0 239.2,99.0 239.5,99.0 239.8,99.0 240.0,99.0 240.3,99.0 240.6,99.0 240.8,99.0 241.1,99.0 241.4,99.0 241.7,99.0 241.9,99.0 242.2,99.0 242.5,99.0 242.7,99.0 243.0,99.0 243.3,99.0 243.6,99.0 243.8,99.0 244.1,99.0 244.4,99.0 244.6,99.0 244.9,99.0 245.2,99.0 245.5,99.0 245.7,99.0 246.0,99.0 246.3,99.0 246.5,99.0 246.8,99.0 247.1,99.0 247.4,99.0 247.6,99.0 247.9,99.0 248.2,99.0 248.4,99.0 248.7,99.0 249.0,99.0 249.3,99.0 249.5,99.0 249.8,99.0 250.1,99.0 250.3,99.0 250.6,99.0 250.9,99.0 251.2,99.0 251.4,99.0 251.7,99.0 252.0,99.0 252.2,99.0 252.5,99.0 252.8,99.0 253.1,99.0 253.3,99.0 253.6,99.0 253.9,99.0 254.1,99.0 254.4,99.0 254.7,99.0 255.0,99.0 255.2,99.0 255.5,99.0 255.8,99.0 256.0,99.0 256.3,99.0 256.6,99.0 256.9,99.0 257.1,99.0 257.4,99.0 257.7,99.0 258.0,99.0 258.2,99.0 258.5,99.0 258.8,99.0 259.0,99.0 259.3,99.0 259.6,99.0 259.9,99.0 260.1,99.0 260.4,99.0 260.7,99.0 260.9,99.0 261.2,99.0 261.5,99.0 261.8,99.0 262.0,99.0 262.3,99.0 262.6,99.0 262.8,99.0 263.1,99.0 263.4,99.0 263.7,99.0 263.9,99.0 264.2,99.0 264.5,99.0 264.7,99.0 265.0,99.0 265.3,99.0 265.6,99.0 265.8,99.0 266.1,99.0 266.4,99.0 266.6,99.0 266.9,99.0 267.2,99.0 267.5,99.0 267.7,99.0 268.0,99.0" fill="none" stroke="#fde68a" stroke-width="3"/><polyline points="269.7,54.8 270.0,54.8 270.2,54.8 270.5,54.8 270.8,54.8 271.0,54.8 271.3,54.8 271.6,54.8 271.9,54.8 272.1,54.8 272.4,54.8 272.7,54.8 272.9,54.8 273.2,54.8 273.5,54.8 273.8,54.8 274.0,54.8 274.3,54.8 274.6,54.8 274.8,54.8 275.1,54.8 275.4,54.8 275.7,54.8 275.9,54.8 276.2,54.8 276.5,54.8 276.7,54.8 277.0,54.8 277.3,54.8 277.6,54.8 277.8,54.8 278.1,54.8 278.4,54.8 278.6,54.8 278.9,54.8 279.2,54.8 279.5,54.8 279.7,54.8 280.0,54.8 280.3,54.8 280.5,54.8 280.8,54.8 281.1,54.8 281.4,54.8 281.6,54.8 281.9,54.8 282.2,54.8 282.4,54.8 282.7,54.8 283.0,54.8 283.3,54.8 283.5,54.8 283.8,54.8 284.1,54.8 284.3,54.8 284.6,54.8 284.9,54.8 285.2,54.8 285.4,54.8 285.7,54.8 286.0,54.8 286.2,54.8 286.5,54.8 286.8,54.8 287.1,54.8 287.3,54.8 287.6,54.8 287.9,54.8 288.1,54.8 288.4,54.8 288.7,54.8 289.0,54.8 289.2,54.8 289.5,54.8 289.8,54.8 290.0,54.8 290.3,54.8 290.6,54.8 290.9,54.8 291.1,54.8 291.4,54.8 291.7,54.8 292.0,54.8 292.2,54.8 292.5,54.8 292.8,54.8 293.0,54.8 293.3,54.8 293.6,54.8 293.9,54.8 294.1,54.8 294.4,54.8 294.7,54.8 294.9,54.8 295.2,54.8 295.5,54.8 295.8,54.8 296.0,54.8 296.3,54.8 296.6,54.8 296.8,54.8 297.1,54.8 297.4,54.8 297.7,54.8 297.9,54.8 298.2,54.8 298.5,54.8 298.7,54.8 299.0,54.8 299.3,54.8 299.6,54.8 299.8,54.8 300.1,54.8 300.4,54.8 300.6,54.8 300.9,54.8 301.2,54.8 301.5,54.8 301.7,54.8 302.0,54.8 302.3,54.8 302.5,54.8 302.8,54.8 303.1,54.8 303.4,54.8 303.6,54.8 303.9,54.8 304.2,54.8 304.4,54.8 304.7,54.8 305.0,54.8 305.3,54.8 305.5,54.8 305.8,54.8 306.1,54.8 306.3,54.8 306.6,54.8 306.9,54.8 307.2,54.8 307.4,54.8 307.7,54.8 308.0,54.8 308.2,54.8 308.5,54.8 308.8,54.8 309.1,54.8 309.3,54.8 309.6,54.8 309.9,54.8 310.1,54.8 310.4,54.8 310.7,54.8 311.0,54.8 311.2,54.8 311.5,54.8 311.8,54.8 312.0,54.8 312.3,54.8 312.6,54.8 312.9,54.8 313.1,54.8 313.4,54.8 313.7,54.8 314.0,54.8 314.2,54.8 314.5,54.8 314.8,54.8 315.0,54.8 315.3,54.8 315.6,54.8 315.9,54.8 316.1,54.8 316.4,54.8 316.7,54.8 316.9,54.8 317.2,54.8 317.5,54.8 317.8,54.8 318.0,54.8 318.3,54.8 318.6,54.8 318.8,54.8 319.1,54.8 319.4,54.8 319.7,54.8 319.9,54.8 320.2,54.8 320.5,54.8 320.7,54.8 321.0,54.8 321.3,54.8 321.6,54.8 321.8,54.8 322.1,54.8 322.4,54.8 322.6,54.8 322.9,54.8 323.2,54.8 323.5,54.8 323.7,54.8 324.0,54.8" fill="none" stroke="#fde68a" stroke-width="3"/><circle cx="100" cy="231.75" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="156" cy="187.5" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="212" cy="143.25" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="268" cy="99" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="324" cy="54.75" r="5" fill="#fde68a" stroke="#fde68a" stroke-width="2"/><circle cx="44" cy="231.75" r="5" fill="#0f172a" stroke="#fde68a" stroke-width="2"/><circle cx="100" cy="187.5" r="5" fill="#0f172a" stroke="#fde68a" stroke-width="2"/><circle cx="156" cy="143.25" r="5" fill="#0f172a" stroke="#fde68a" stroke-width="2"/><circle cx="212" cy="99" r="5" fill="#0f172a" stroke="#fde68a" stroke-width="2"/><circle cx="268" cy="54.75" r="5" fill="#0f172a" stroke="#fde68a" stroke-width="2"/></g>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Evaluating a piecewise function (F-IF.2)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> For the function above, find f(−2), f(1) and f(4).</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: f(−2)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−2 is less than 1, so use 2x + 1: 2(−2) + 1 = −3</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: f(1)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 satisfies x ≥ 1, so use −x + 6: −1 + 6 = 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: f(4)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 ≥ 1, so −4 + 6 = 2</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> f(−2) = −3, f(1) = 5, f(4) = 2.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> At the boundary x = 1, only the piece whose condition includes 1 (≥) is used.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Plugging the boundary value into both pieces. Only one piece includes it.</p>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>On the graph, the left piece ends with an open dot at (1, 3) because x = 1 is not included, and the right piece begins with a closed dot at (1, 5). A graph may “jump” at a boundary — that is fine, as long as each input has only one output.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Modeling with Piecewise Functions</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Overtime pay (F-IF.7b)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A worker earns $18 per hour for the first 40 hours in a week and time-and-a-half ($27 per hour) for any hours over 40. Write a piecewise function for weekly pay P(h) and find the pay for 45 hours.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Up to 40 hours</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P(h) = 18h for 0 ≤ h ≤ 40</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Over 40 hours</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P(h) = 18(40) + 27(h − 40) = 720 + 27(h − 40)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Evaluate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P(45) = 720 + 27(5) = 720 + 135 = 855</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> P(h) = 18h for 0 ≤ h ≤ 40, and 720 + 27(h − 40) for h over 40; 45 hours pays $855.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The second piece starts at the pay already earned at the boundary ($720), so the graph has no jump.</p>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Greatest integer (floor) function</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">⌊x⌋ = the greatest integer less than or equal to x</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> It rounds down, even for negative numbers.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Modeling situations that count only complete units.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Rounding −1.2 to −1. The floor of −1.2 is −2.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> On a number line, move left to the nearest integer.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Step Functions in Real Life</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: A parking garage</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A garage charges $3 for each hour or part of an hour, up to 5 hours. Find the cost for 0.5, 2 and 2.1 hours, and describe the graph.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 0.5 hours</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Part of the first hour: $3</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 2 hours</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Exactly 2 hours: $6</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: 2.1 hours</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Part of a third hour: $9</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Graph</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Horizontal steps of height 3, each with an open dot on the left and a closed dot on the right.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> $3, $6 and $9; the graph is a staircase that jumps $3 at each whole hour.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> “Each hour or part of an hour” means the cost rounds up, so each step includes its right endpoint.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Find ⌊6.3⌋ and ⌊−2.5⌋.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6 and −3.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> On a graph, what does an open dot mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The endpoint is not included.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Using the overtime model, find P(30).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">18(30) = $540.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Reading conditions carefully</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graphing with precision</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modeling real rules</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking boundaries</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting graphs</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Most errors with piecewise functions happen at the boundaries. Before graphing, find the value of each piece at the boundary and decide which piece includes it (≤ or ≥ gives a closed dot; strict inequalities give an open dot). Then check that no x-value has two closed dots — otherwise it would not be a function.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why does the overtime pay function have no jump at 40 hours, while the parking function jumps at every hour?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #f48fb1;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Phone plans that charge extra after a data limit, and shipping rates that rise at each weight level, are piecewise functions.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Some cities charge water rates in tiers — a lower price for the first units and a higher price after a limit — to encourage saving water.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Payroll specialists, logistics companies, tax preparers and software developers build piecewise rules into their systems.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> If g(x) = x² for x &lt; 0 and 3x for x ≥ 0, find g(−3).</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use the first piece.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">9</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Find g(2) for the same function.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use the second piece.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What is ⌊0.99⌋?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Round down.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find a real price list (shipping, parking or mobile data) and write it as a piecewise function.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each partner graphs a piecewise function from an equation the other writes, then checks the open and closed dots.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Design a fair “allowance plan” with a base amount and bonus rates, write it as a piecewise function and graph it.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Graph a piecewise function in a graphing calculator using curly-brace restrictions, such as y = 2x + 1 {x &lt; 1}.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> For f(x) = x + 4 if x ≤ 2 and 10 − x if x is greater than 2, find f(2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find ⌊8.2⌋.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">8</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> For the same f, find f(5) and f(−1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">f(5) = 5; f(−1) = 3.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Write a piecewise function for |x| without absolute value bars.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">f(x) = x for x ≥ 0; −x for x less than 0.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f48fb1;">
    <p style="margin:0 0 6px 0;color:#f48fb1;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A shipping company charges $6 for packages up to 2 lb and $6 plus $1.50 for each additional pound or part of a pound. Find the cost for a 4.2-lb package.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Additional weight 2.2 lb → 3 parts: 6 + 3(1.50) = $10.50.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Using the overtime model, how many hours must the worker work to earn $990?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">720 + 27(h − 40) = 990, so h − 40 = 10 and h = 50 hours.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> F-IF.7b: Describe the graph of the parking-cost step function.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A staircase of horizontal segments rising $3 at each whole hour, with open dots on the left and closed dots on the right of each step.</div>
    </details>
    </div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>A piecewise function uses different rules on different parts of its domain. To evaluate it, find which condition the input meets, then use that rule. Graphs use closed dots for included endpoints and open dots for excluded ones, and they may jump at boundaries. Step functions, such as parking fees and the greatest integer function ⌊x⌋, have graphs shaped like stairs. Piecewise functions model real rules like overtime pay, shipping rates and tiered prices.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check the condition, then use the rule.</li>
    <li>Closed dot: included; open dot: excluded.</li>
    <li>Step functions look like stairs.</li>
    <li>⌊x⌋ rounds down.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Only one piece includes a boundary.</li>
    <li>The floor of a negative decimal goes more negative.</li>
    <li>Real rules often change at limits.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using both pieces at a boundary.</li>
    <li>Wrong dots at endpoints.</li>
    <li>Rounding ⌊−1.2⌋ to −1.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Evaluate each piece at the boundary first.</li>
    <li>Shade each piece’s domain lightly before graphing.</li>
    <li>Use technology to check.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show which piece you used.</li>
    <li>Label open and closed dots.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.7b Graphing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Piecewise and step functions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">F-IF.2 Evaluating</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using conditions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">A-CED.1 Modeling</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pay and price rules.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Fairness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Practical problem solving</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Workers’ rights and pay</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Reading the “rules that change” in bills, paychecks and prices helps you make better choices with money.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Evaluate and graph four piecewise functions.</li>
    <li>Write a piecewise model for a real price list you find.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which part of graphing piecewise functions is hardest?</li>
    <li>Where have I seen step pricing?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Piecewise function</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiple rules.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Boundary point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where the rule changes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Step function</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Staircase graph.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Floor function</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Round down.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can evaluate piecewise functions.</p>
    <p style="margin:6px 0;">☐ I can graph them with correct dots.</p>
    <p style="margin:6px 0;">☐ I can write piecewise models.</p>
    <p style="margin:6px 0;">☐ I can graph step functions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'To evaluate a piecewise function, you first:',
            options: ['Decide which condition the input meets', 'Add all the pieces', 'Use the first piece always', 'Graph it'],
            correct: 0,
            explanation: 'The answer is Decide which condition the input meets. Check the condition.'
        },
        {
            question: 'An open dot means the endpoint is:',
            options: ['Included', 'The vertex', 'Not included', 'An intercept'],
            correct: 2,
            explanation: 'The answer is Not included. Excluded.'
        },
        {
            question: '⌊5.8⌋ equals:',
            options: ['6', '5.8', '5', '4'],
            correct: 2,
            explanation: 'The answer is 5. Round down.'
        },
        {
            question: '⌊−3.4⌋ equals:',
            options: ['−3', '−4', '3', '4'],
            correct: 1,
            explanation: 'The answer is −4. Round down to −4.'
        },
        {
            question: 'Using the overtime model, P(40) equals:',
            options: ['$1,080', '$720', '$27', '$855'],
            correct: 1,
            explanation: 'The answer is $720. 18 × 40.'
        },
        {
            question: 'Using the overtime model, P(45) equals:',
            options: ['$810', '$1,215', '$720', '$855'],
            correct: 3,
            explanation: 'The answer is $855. 720 + 135.'
        },
        {
            question: 'Parking for 3.2 hours at $3 per hour or part of an hour costs:',
            options: ['$9', '$9.60', '$10', '$12'],
            correct: 3,
            explanation: 'The answer is $12. Four parts of an hour.'
        },
        {
            question: 'The graph of a step function looks like:',
            options: ['A V', 'A U', 'A circle', 'A staircase'],
            correct: 3,
            explanation: 'The answer is A staircase. Horizontal steps.'
        },
        {
            question: 'For f(x) = 2x + 1 when x is less than 1 and −x + 6 when x ≥ 1, f(1) is:',
            options: ['5', '3', '7', '1'],
            correct: 0,
            explanation: 'The answer is 5. Use the second piece.'
        },
        {
            question: 'Which real rule is best modeled by a piecewise function?',
            options: ['Overtime pay after 40 hours', 'A constant price', 'Doubling every day', 'A circle’s area'],
            correct: 0,
            explanation: 'The answer is Overtime pay after 40 hours. The rule changes at 40 hours.'
        }
    ]
},
{
    name: '1.2 Activity: Which Plan Is Best?',
    type: 'lesson',
    duration: '55 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Which Plan Is Best?</h2>
    <p style="font-size:16px;">A phone company offers three monthly data plans. In this investigation you will model each plan with a function — linear, constant and piecewise — graph them together and decide which plan is cheapest for different users.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotate roles: modeler, table-maker, grapher and presenter.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check every table value with a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph by hand first, then confirm with technology.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Groups may reach the answer in different ways; compare methods.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Math Investigation: Comparing Three Data Plans</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To model three pricing plans with linear, constant and piecewise functions and find which is cheapest for different amounts of data.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Colored pencils</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graphing calculator or website</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plan A: $30 per month for up to 5 GB, plus $10 for each GB over 5 GB</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plan B: $45 per month, unlimited data</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Plan C: $15 per month plus $4 per GB</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Data use g from 0 to 10 GB (treat g as any number, not only whole numbers)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Share materials fairly.</li>
    <li>Keep devices on the desk.</li>
    <li>Stay on task.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write Plan B as a constant function: B(g) = 45.</li>
    <li>Write Plan C as a linear function: C(g) = 15 + 4g.</li>
    <li>Write Plan A as a piecewise function: A(g) = 30 for 0 ≤ g ≤ 5, and 30 + 10(g − 5) for g over 5.</li>
    <li>Make a table of costs for g = 0, 2, 4, 5, 6, 7, 8 and 10.</li>
    <li>Graph all three functions on the same axes in different colors.</li>
    <li>Find where the graphs intersect by solving equations: A = C (both pieces), A = B and C = B.</li>
    <li>Write a recommendation for light, medium and heavy data users.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">g (GB)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">4</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">5</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">6</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">7</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">8</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">10</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A(g)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">30</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">30</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">30</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">30</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">50</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B(g)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C(g)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">23</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">31</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">35</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">39</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">43</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">47</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">55</td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> When are Plans A and C equal?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">On the first piece, 30 = 15 + 4g gives g = 3.75. On the second piece, 30 + 10(g − 5) = 15 + 4g gives 6g = 35, so g ≈ 5.83.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> When does Plan C cost the same as Plan B?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">15 + 4g = 45 gives g = 7.5 GB.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which plan is cheapest for each range?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Plan C below 3.75 GB; Plan A from 3.75 to about 5.83 GB; Plan C again from about 5.83 to 7.5 GB; Plan B above 7.5 GB.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> No single plan is always best: Plan C is cheapest for light users, Plan A for moderate users of about 3.75 to 5.83 GB, Plan C again for slightly heavier users up to 7.5 GB, and Plan B for heavy users above 7.5 GB.</p>
    <p><strong style="color:#fde68a;">Why it works:</strong> Each plan has a different structure — a rate, a flat fee or a fee with a limit — and the cheapest choice depends on where the graphs cross.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting that Plan A is piecewise.</li>
    <li>Solving A = C with only one piece.</li>
    <li>Reading intersections from a rough sketch instead of solving.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Comparing plans with functions before signing a contract can save real money on phones, internet, transport and utilities.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Write a recommendation report for a friend who uses about 6 GB a month. Include your functions, your table, your graph and the calculations that support your choice.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>The cheapest plan depends on how much you use. Find where the graphs cross, then compare the pieces in between.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find A(7).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">30 + 10(2) = $50.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find C(7).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">15 + 28 = $43.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Which plan is cheapest for 6 GB?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Plan C ($39), compared with A ($40) and B ($45).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why is Plan A a piecewise function?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its rule changes after the 5 GB limit.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How would a $5 increase to Plan C change your recommendation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Every C value rises by 5, so its crossing points move and Plan A or B becomes best over wider ranges.</div>
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
            question: 'Plan B is modeled by a:',
            options: ['Linear function with slope 4', 'Piecewise function', 'Absolute value function', 'Constant function'],
            correct: 3,
            explanation: 'The answer is Constant function. B(g) = 45.'
        },
        {
            question: 'Plan C is modeled by:',
            options: ['C(g) = 45', 'C(g) = 4 + 15g', 'C(g) = 30 + 10g', 'C(g) = 15 + 4g'],
            correct: 3,
            explanation: 'The answer is C(g) = 15 + 4g. $15 plus $4 per GB.'
        },
        {
            question: 'Plan A costs how much for 4 GB?',
            options: ['$40', '$30', '$34', '$70'],
            correct: 1,
            explanation: 'The answer is $30. Within the 5 GB limit.'
        },
        {
            question: 'Plans B and C cost the same at:',
            options: ['5 GB', '3.75 GB', '7.5 GB', '10 GB'],
            correct: 2,
            explanation: 'The answer is 7.5 GB. 15 + 4g = 45.'
        },
        {
            question: 'For 10 GB, the cheapest plan is:',
            options: ['Plan A', 'Plan C', 'Plan B', 'All equal'],
            correct: 2,
            explanation: 'The answer is Plan B. $45 vs $80 and $55.'
        },
        {
            question: 'For 2 GB, the cheapest plan is:',
            options: ['Plan C', 'Plan A', 'Plan B', 'All equal'],
            correct: 0,
            explanation: 'The answer is Plan C. $23 vs $30 and $45.'
        }
    ]
},
{
    name: '1.2 Quiz: Linear, Absolute Value and Piecewise Functions',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Linear, Absolute Value and Piecewise Functions</h2>
    <p style="font-size:16px;">Test your understanding of linear models, regression, absolute value equations and inequalities, and piecewise and step functions from Topic 1.2.</p>
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
    <li>Writing linear models</li>
    <li>Interpreting slope, intercept and r</li>
    <li>Absolute value graphs and equations</li>
    <li>Absolute value inequalities</li>
    <li>Piecewise functions</li>
    <li>Step functions</li>
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
    <div>For absolute value inequalities, remember: less than → “and” (between); greater than → “or” (outside).</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A tutor charges $90 for 2 hours and $150 for 4 hours. The hourly rate is:',
            options: ['$45', '$37.50', '$60', '$30'],
            correct: 3,
            explanation: 'The answer is $30. (150 − 90) ÷ 2 = 30.'
        },
        {
            question: 'For the tutor model, the fixed fee is:',
            options: ['$30', '$90', '$15', '$0'],
            correct: 0,
            explanation: 'The answer is $30. 90 = 30(2) + b, so b = 30.'
        },
        {
            question: 'Which r value shows the strongest linear relationship?',
            options: ['−0.95', '0.60', '0.10', '−0.40'],
            correct: 0,
            explanation: 'The answer is −0.95. Closest to ±1.'
        },
        {
            question: 'Solve |x − 7| = 2.',
            options: ['x = 9 only', 'x = 5 or x = 9', 'x = −5 or x = 9', 'No solution'],
            correct: 1,
            explanation: 'The answer is x = 5 or x = 9. x − 7 = ±2.'
        },
        {
            question: 'Solve |3x| = 12.',
            options: ['x = 36', 'x = 4 only', 'x = 4 or x = −4', 'x = 9 or x = 15'],
            correct: 2,
            explanation: 'The answer is x = 4 or x = −4. 3x = ±12.'
        },
        {
            question: '|x + 2| ≤ 5 is equivalent to:',
            options: ['−7 ≤ x ≤ 3', 'x ≤ −7 or x ≥ 3', '−3 ≤ x ≤ 7', 'x ≤ 3'],
            correct: 0,
            explanation: 'The answer is −7 ≤ x ≤ 3. −5 ≤ x + 2 ≤ 5.'
        },
        {
            question: 'The vertex of y = 4|x − 1| + 2 is:',
            options: ['(−1, 2)', '(4, 2)', '(1, 4)', '(1, 2)'],
            correct: 3,
            explanation: 'The answer is (1, 2). (h, k).'
        },
        {
            question: 'For f(x) = x² when x is less than 0 and x + 3 when x ≥ 0, f(0) is:',
            options: ['0', '3', '9', '−3'],
            correct: 1,
            explanation: 'The answer is 3. Use the second piece.'
        },
        {
            question: '⌊2.999⌋ equals:',
            options: ['3', '2', '2.999', '1'],
            correct: 1,
            explanation: 'The answer is 2. Round down.'
        },
        {
            question: 'A closed dot at a boundary means:',
            options: ['That point is excluded', 'The graph stops forever', 'The slope is zero', 'That point is included'],
            correct: 3,
            explanation: 'The answer is That point is included. Included endpoint.'
        }
    ]
},
{
    name: '1.2 Assignment: Real-World Function Modeling Report',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Real-World Function Modeling Report</h2>
    <p style="font-size:16px;">Research a real pricing or measurement situation and write a modeling report (with graphs and calculations) that uses at least one linear, one absolute value and one piecewise or step function.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Mathematicians build models to answer real questions. Choose a situation from your life or community — such as transport fares, a utility bill, a delivery service, a manufacturing tolerance or a sports statistic — and model it with functions from this topic. Explain what each part of your model means and use it to answer a question.</p>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Record where your data or prices come from. If you use made-up numbers, say so clearly.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose a situation and write one question your model will answer.</li>
    <li>Write a linear model (from two data points or a rate and a fee) and interpret its slope and intercept.</li>
    <li>Write and solve an absolute value equation or inequality related to the situation, such as an acceptable range.</li>
    <li>Write a piecewise or step function for a rule that changes at a boundary.</li>
    <li>Graph each function accurately, with labeled axes and correct open and closed dots.</li>
    <li>Use your models to answer your question, showing all calculations.</li>
    <li>Write a conclusion that explains your answer and one limitation of your models.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your question and data sources</li>
    <li>Three functions with graphs</li>
    <li>Your calculations</li>
    <li>A conclusion with one limitation</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Models</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three accurate, well-chosen functions that fit the situation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three mostly accurate functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors or a missing type</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little modeling</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every parameter interpreted precisely with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most parameters interpreted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No interpretation</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, labeled graphs with correct dots and scales</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly accurate graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some graphing errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing graphs</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All equations and inequalities solved correctly and checked</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not attempted</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conclusion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear answer, supported by models, with a thoughtful limitation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear answer and limitation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vague conclusion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use units in every interpretation.<br>Check boundary values twice.<br>Graph with a consistent scale.<br>Explain limitations honestly.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which model fit my situation best?</li>
    <li>What surprised me when I graphed the models?</li>
    <li>How could I make my model more realistic?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The report must include at least how many types of functions?',
            options: ['Three', 'One', 'Two', 'Five'],
            correct: 0,
            explanation: 'Linear, absolute value and piecewise or step.'
        },
        {
            question: 'Interpreting a slope means:',
            options: ['Rounding it', 'Ignoring it', 'Squaring it', 'Explaining it as a rate with units'],
            correct: 3,
            explanation: 'The answer is Explaining it as a rate with units. E.g. dollars per hour.'
        },
        {
            question: 'Graphs of piecewise functions must show:',
            options: ['Only one piece', 'No labels', 'Correct open and closed dots', 'Circles'],
            correct: 2,
            explanation: 'The answer is Correct open and closed dots. Boundaries matter.'
        },
        {
            question: 'If you use made-up numbers you should:',
            options: ['Hide it', 'Say so clearly', 'Claim they are real', 'Skip the graph'],
            correct: 1,
            explanation: 'The answer is Say so clearly. Be honest about data.'
        },
        {
            question: 'A limitation of a model is:',
            options: ['Its color', 'Its title', 'Its page number', 'A way it may not match reality'],
            correct: 3,
            explanation: 'The answer is A way it may not match reality. All models have limits.'
        },
        {
            question: 'The absolute value part could model:',
            options: ['An acceptable range or tolerance', 'A data limit only', 'A daily rate only', 'A circle'],
            correct: 0,
            explanation: 'The answer is An acceptable range or tolerance. Distance from a target.'
        }
    ]
},
{
    name: '1.2 Review: Linear, Absolute Value and Piecewise Functions',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Linear, Absolute Value and Piecewise Functions</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and prepare for the end-of-unit assessment.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Linear Models</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>m = (y₂ − y₁)/(x₂ − x₁); point-slope y − y₁ = m(x − x₁).</li>
    <li>Slope = rate; intercept = starting value.</li>
    <li>Line of best fit; r from −1 to 1; correlation ≠ causation.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Absolute Value</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>y = a|x − h| + k: vertex (h, k).</li>
    <li>|A| = b → A = ±b; negative b → no solution.</li>
    <li>Check for extraneous solutions.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Absolute Value Inequalities</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>|A| ≤ b → −b ≤ A ≤ b (and).</li>
    <li>|A| ≥ b → A ≤ −b or A ≥ b (or).</li>
    <li>Tolerance: |x − target| ≤ allowed error.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #f48fb1;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Piecewise and Step Functions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check the condition, then use the rule.</li>
    <li>Open dot excluded; closed dot included.</li>
    <li>Step functions and ⌊x⌋ (round down).</li>
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
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example model</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fee plus rate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C = 35d + 40</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Measurement within a tolerance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Absolute value inequality</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">|L − 50| ≤ 0.2</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Overtime pay</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Piecewise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">18h; 720 + 27(h − 40)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parking by the hour or part</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Step</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">$3 per hour or part</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study time vs. score</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line of best fit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ŷ ≈ 4.29x + 57.7</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write the line through (2, 5) and (6, 17).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">m = 3; y = 3x − 1.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Interpret r = 0.89.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A strong positive linear relationship.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve |2x + 1| = 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 4 or x = −5.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve |x − 10| ≥ 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≤ 7 or x ≥ 13.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> For P(h) = 18h (h ≤ 40) and 720 + 27(h − 40) (h over 40), find P(42).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">720 + 54 = $774.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Find ⌊−0.5⌋.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−1</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can write and interpret linear models.</p>
    <p style="margin:6px 0;">☐ I can use lines of best fit and r.</p>
    <p style="margin:6px 0;">☐ I can solve absolute value equations.</p>
    <p style="margin:6px 0;">☐ I can solve absolute value inequalities.</p>
    <p style="margin:6px 0;">☐ I can evaluate and graph piecewise and step functions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'In y = mx + b, the starting value is:',
            options: ['b', 'm', 'x', 'y'],
            correct: 0,
            explanation: 'The answer is b. The y-intercept.'
        },
        {
            question: 'Correlation does not prove:',
            options: ['Association', 'Direction', 'Strength', 'Causation'],
            correct: 3,
            explanation: 'The answer is Causation. Beware lurking variables.'
        },
        {
            question: '|x| = 0 has:',
            options: ['One solution', 'Two solutions', 'No solution', 'Infinitely many'],
            correct: 0,
            explanation: 'The answer is One solution. Only x = 0.'
        },
        {
            question: '|x − 4| ≤ 1 gives:',
            options: ['x ≤ 3 or x ≥ 5', '3 ≤ x ≤ 5', '−1 ≤ x ≤ 1', 'x ≥ 5'],
            correct: 1,
            explanation: 'The answer is 3 ≤ x ≤ 5. Within 1 of 4.'
        },
        {
            question: 'A piecewise function’s rule changes at a:',
            options: ['Vertex only', 'y-intercept only', 'Boundary point', 'Random point'],
            correct: 2,
            explanation: 'The answer is Boundary point. Where conditions change.'
        },
        {
            question: '⌊7⌋ equals:',
            options: ['6', '8', '0', '7'],
            correct: 3,
            explanation: 'The answer is 7. An integer stays the same.'
        }
    ]
},
{
    name: '1.2 Summary: Linear, Absolute Value and Piecewise Functions',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #ad1457, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #f48fb1;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Functions and Transformations · Topic 1.2 Linear, Absolute Value and Piecewise Functions</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #f48fb1;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Linear, Absolute Value and Piecewise Functions</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Different real-world rules call for different functions: constant rates give linear models, distances from a target give absolute value models, and rules that change at limits give piecewise and step models.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Linear models have a constant rate of change; slope and intercept have real meanings.</li>
    <li>Lines of best fit model data, and r measures the strength and direction of a linear relationship.</li>
    <li>Correlation is not causation, and extrapolation can be unreliable.</li>
    <li>Absolute value equations usually have two cases; always check for extraneous solutions.</li>
    <li>Absolute value inequalities model tolerances: less than gives “and,” greater than gives “or.”</li>
    <li>Piecewise and step functions model rules that change at boundaries, such as overtime pay and parking fees.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Modeling with Linear Functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing lines, interpreting parameters, regression, correlation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Give slopes units; avoid causation errors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Absolute Value Functions, Equations and Inequalities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vertex form, two cases, extraneous solutions, tolerances</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Isolate, split and check</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Piecewise and Step Functions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluating, graphing and writing piecewise rules; floor function</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check conditions and endpoints</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">slope</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">y-intercept</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">point-slope form</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">line of best fit</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">correlation coefficient</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">extrapolation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">absolute value</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vertex</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">extraneous solution</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compound inequality</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">tolerance</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">piecewise function</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">boundary point</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">step function</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">greatest integer function</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>With these models you can compare plans, check whether measurements are acceptable and understand the rules behind your pay and bills.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #f48fb1;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Functions and Transformations. In Unit 2.0 you will study quadratic functions and complex numbers — parabolas, vertex form, factoring, the quadratic formula and numbers that include √−1.</div>
    </div>
    <div style="background:#3a1a2b;padding:20px;border-radius:12px;border:1px solid #f48fb1;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can write and interpret linear models.</p>
    <p style="margin:6px 0;">✔️ I can fit and interpret a line of best fit.</p>
    <p style="margin:6px 0;">✔️ I can solve absolute value equations and inequalities.</p>
    <p style="margin:6px 0;">✔️ I can graph absolute value, piecewise and step functions.</p>
    <p style="margin:6px 0;">✔️ I can choose a function type to model a real situation.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A rule that changes after a limit is best modeled by a:',
            options: ['Constant function', 'Piecewise function', 'Single line', 'Circle'],
            correct: 1,
            explanation: 'Different rules for different inputs.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['Trigonometry only', 'Statistics only', 'Quadratic functions and complex numbers', 'Geometry proofs'],
            correct: 2,
            explanation: 'The answer is Quadratic functions and complex numbers. Parabolas and more.'
        },
        {
            question: 'A tolerance is best written with:',
            options: ['A step function', 'An absolute value inequality', 'A slope only', 'A correlation'],
            correct: 1,
            explanation: 'The answer is An absolute value inequality. |x − target| ≤ error.'
        },
        {
            question: 'r close to −1 means:',
            options: ['No relationship', 'Strong positive relationship', 'Causation', 'Strong negative linear relationship'],
            correct: 3,
            explanation: 'The answer is Strong negative linear relationship. Direction and strength.'
        },
        {
            question: 'When solving |A| = b with a variable outside, you must:',
            options: ['Check for extraneous solutions', 'Skip the negative case', 'Square both sides', 'Graph only'],
            correct: 0,
            explanation: 'The answer is Check for extraneous solutions. One case may fail.'
        },
        {
            question: 'A staircase graph shows a:',
            options: ['Linear function', 'Absolute value function', 'Quadratic function', 'Step function'],
            correct: 3,
            explanation: 'The answer is Step function. Horizontal steps.'
        }
    ]
}
],
          stats:{lessons:19,exercises:128,quizzes:20,projects:2,duration:'15 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'A relation is a function if:',
                  options: ['Each output has exactly one input', 'It is a straight line', 'Each input has exactly one output', 'It passes through the origin'],
                  correct: 2,
                  explanation: 'One input, one output.'
              },
              {
                  question: 'If f(x) = 2x − 3, then f(4) equals:',
                  options: ['11', '5', '−5', '8'],
                  correct: 1,
                  explanation: '2(4) − 3 = 5.'
              },
              {
                  question: 'The domain of f(x) = √x is:',
                  options: ['[0, ∞)', '(−∞, ∞)', '(0, ∞) only for integers', '(−∞, 0]'],
                  correct: 0,
                  explanation: 'You cannot take the square root of a negative real number.'
              },
              {
                  question: 'The parent function of y = |x − 2| + 5 is:',
                  options: ['y = |x|', 'y = x²', 'y = √x', 'y = x'],
                  correct: 0,
                  explanation: 'It is an absolute value function.'
              },
              {
                  question: 'Compared with f(x), the graph of f(x − 3) is shifted:',
                  options: ['3 units left', '3 units right', '3 units up', '3 units down'],
                  correct: 1,
                  explanation: 'Inside the function, the shift is opposite the sign.'
              },
              {
                  question: 'The graph of y = −f(x) is a reflection of f(x) over the:',
                  options: ['y-axis', 'line y = x', 'origin only', 'x-axis'],
                  correct: 3,
                  explanation: 'Every output changes sign.'
              },
              {
                  question: 'The vertex of y = 2|x + 1| − 4 is:',
                  options: ['(1, −4)', '(−1, −4)', '(−1, 4)', '(2, −4)'],
                  correct: 1,
                  explanation: 'y = a|x − h| + k has vertex (h, k), and here h = −1.'
              },
              {
                  question: 'Solve |x − 5| = 3.',
                  options: ['x = 8 only', 'x = −2 or x = 8', 'No solution', 'x = 2 or x = 8'],
                  correct: 3,
                  explanation: 'x − 5 = 3 or x − 5 = −3.'
              },
              {
                  question: 'The slope of the line through (1, 2) and (4, 11) is:',
                  options: ['1/3', '9', '3', '−3'],
                  correct: 2,
                  explanation: '(11 − 2) ÷ (4 − 1) = 3.'
              },
              {
                  question: 'A correlation coefficient of r = −0.92 shows:',
                  options: ['A weak positive relationship', 'No relationship', 'A perfect positive relationship', 'A strong negative linear relationship'],
                  correct: 3,
                  explanation: 'Close to −1 means strong and negative.'
              },
              {
                  question: 'A function defined by different rules on different parts of its domain is a:',
                  options: ['Piecewise function', 'Parent function', 'Constant function', 'Inverse function'],
                  correct: 0,
                  explanation: 'Each piece has its own rule.'
              },
              {
                  question: 'Which describes y = 3f(x)?',
                  options: ['A shift up 3 units', 'A shift right 3 units', 'A vertical stretch by a factor of 3', 'A horizontal stretch by 3'],
                  correct: 2,
                  explanation: 'Outputs are multiplied by 3.'
              }
          ]}
);