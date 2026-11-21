// Eschool course: Algebra I (USA, high school, Common Core aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'algebra-1-us', name:'Algebra I', code:'ALG 1', level:'grade-9', iconStyle:'fas', icon:'fa-square-root-alt', color:'#4527a0',
          category:'Mathematics',
          description:'Build the foundation of high-school math: simplify expressions, solve multi-step and literal equations, model real problems with equations, and solve and graph linear and compound inequalities.',
          longDescription:'Algebra I is a first-year high-school mathematics course aligned to the Common Core State Standards for Mathematics (High School Algebra and Number & Quantity). Unit 1, Expressions, Equations and Inequalities, covers interpreting and simplifying expressions, solving multi-step linear equations, rearranging literal equations and formulas, modeling with equations and units, and writing, solving and graphing linear and compound inequalities. Later units cover functions, linear functions and their graphs, systems of equations, exponents and exponential functions, polynomials and factoring, quadratic functions, and statistics. Every lesson includes worked examples, guided practice, leveled practice questions, a math investigation, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Expressions, Equations and Inequalities — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Expressions, Equations and Inequalities</h2>
    <p style="font-size:16px;">Welcome to Algebra I. Algebra is the language of patterns and relationships. With it, you can describe a situation using symbols, then use rules to find unknown values — from the cost of a phone plan to the time it takes to save for a car.</p>
    <p style="font-size:16px;">This first unit builds the tools you will use for the rest of the course: working with expressions, solving equations and solving inequalities.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How can we use symbols to represent real situations and find unknown values?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>An <strong>expression</strong> is a mathematical phrase such as 3x + 5. An <strong>equation</strong> says two expressions are equal, such as 3x + 5 = 20. An <strong>inequality</strong> compares two expressions using ≤, ≥, “less than” or “greater than.” In this unit you will learn to simplify, solve and model with all three.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Common Core standards</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Expressions and Linear Equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Properties and simplifying, multi-step equations, literal equations and modeling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A-SSE.1, A-REI.1, A-REI.3, A-CED.1, A-CED.4, N-Q.1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Linear Inequalities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing and graphing, solving multi-step inequalities, compound inequalities and constraints</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A-REI.3, A-CED.1, A-CED.3</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>The unit has two topics. Each topic has three lessons, a math investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Expressions and Linear Equations <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Modeling Everyday Costs</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Algebraic Expressions and Properties</li>
    <li>1.1.2 Solving Multi-Step Linear Equations</li>
    <li>1.1.3 Literal Equations and Modeling with Equations</li>
    <li>🧭 Investigation: Which Plan Is the Better Deal?</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Linear Inequalities <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Budgets and Limits</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Writing and Graphing Inequalities</li>
    <li>1.2.2 Solving Multi-Step Inequalities</li>
    <li>1.2.3 Compound Inequalities and Constraints</li>
    <li>🧭 Investigation: Planning a Class Event on a Budget</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Make sense of problems (MP1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reading word problems carefully and planning a solution.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reason abstractly (MP2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turning situations into expressions, equations and inequalities, then interpreting the answers.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Construct arguments (MP3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Justifying each step of a solution with a property.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Model with mathematics (MP4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing equations and inequalities for real costs, savings and limits.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Attend to precision (MP6)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using correct symbols, units and inequality signs.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty in showing work</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Personal finance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Planning and budgeting</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science formulas</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a math notebook. Copy every worked example, then try the next problem before looking at the answer. Write the property or reason beside each step — this habit makes mistakes easy to find.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'An expression is:',
            options: ['A statement that two things are equal', 'A comparison using ≤ or ≥', 'A mathematical phrase with no equal sign', 'A graph'],
            correct: 2,
            explanation: 'Expressions such as 3x + 5 have no equal sign.'
        },
        {
            question: 'Which is an equation?',
            options: ['3x + 5 = 20', '3x + 5', '3x + 5 ≥ 20', 'x'],
            correct: 0,
            explanation: 'An equation contains an equal sign.'
        },
        {
            question: 'Which is an inequality?',
            options: ['2x − 1 ≤ 9', '2x − 1 = 9', '2x − 1', '9'],
            correct: 0,
            explanation: 'Inequalities compare using ≤, ≥, less than or greater than.'
        },
        {
            question: 'Topic 1.2 of this unit is about:',
            options: ['Quadratic equations', 'Geometry proofs', 'Linear inequalities', 'Statistics'],
            correct: 2,
            explanation: 'Topic 1.2 covers linear inequalities.'
        },
        {
            question: 'Mathematical Practice 4 (MP4) is:',
            options: ['Attend to precision', 'Model with mathematics', 'Use tools strategically', 'Look for structure'],
            correct: 1,
            explanation: 'The answer is Model with mathematics. MP4 is modeling.'
        },
        {
            question: 'Why should you write a reason beside each step?',
            options: ['It makes the page longer', 'Teachers require decoration', 'It replaces the answer', 'It makes your reasoning clear and mistakes easy to find'],
            correct: 3,
            explanation: 'The answer is It makes your reasoning clear and mistakes easy to find. Justifying steps is MP3.'
        }
    ]
},
{
    name: '1.0 Expressions, Equations and Inequalities — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives come from the Common Core State Standards for Mathematics (High School). Check them at the start and end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Interpret the parts of an expression, such as terms, factors and coefficients, in context. (A-SSE.1)</li>
    <li>Explain each step in solving an equation using the properties of equality. (A-REI.1)</li>
    <li>Solve linear equations and inequalities in one variable, including those with coefficients represented by letters. (A-REI.3)</li>
    <li>Create equations and inequalities in one variable and use them to solve problems. (A-CED.1)</li>
    <li>Rearrange formulas to highlight a quantity of interest. (A-CED.4)</li>
    <li>Represent constraints with inequalities and interpret solutions as viable or not viable. (A-CED.3)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Expressions and Linear Equations</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the order of operations and the properties of real numbers to evaluate and simplify expressions. (A-SSE.1)</li>
    <li>Solve multi-step equations, including variables on both sides, and identify equations with no solution or infinitely many solutions. (A-REI.1, A-REI.3)</li>
    <li>Solve literal equations and formulas for a given variable. (A-CED.4)</li>
    <li>Write and solve equations that model real situations, using units consistently. (A-CED.1, N-Q.1)</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do we keep an equation balanced while we solve it?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Linear Inequalities</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write inequalities from words and graph them on a number line. (A-CED.1)</li>
    <li>Solve multi-step inequalities, reversing the sign when multiplying or dividing by a negative. (A-REI.3)</li>
    <li>Solve and graph compound inequalities using “and” and “or.” (A-REI.3)</li>
    <li>Model constraints with inequalities and decide whether solutions make sense. (A-CED.3)</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How is solving an inequality like solving an equation — and how is it different?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You solve accurately, justify every step, check your answer and explain what it means in context.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You solve accurately and show clear steps, with only minor slips.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You use correct methods but make errors in calculation or signs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You attempt the problem, but the method or setup is mostly incorrect.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A correct answer with no work shown earns little credit in Algebra. Your steps <em>are</em> your explanation.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A-REI.1 asks you to:',
            options: ['Graph a parabola', 'Explain each step in solving an equation', 'Find the area of a circle', 'Collect survey data'],
            correct: 1,
            explanation: 'A-REI.1 is about justifying steps.'
        },
        {
            question: 'A-CED.4 is about:',
            options: ['Rearranging formulas', 'Graphing inequalities', 'Factoring', 'Probability'],
            correct: 0,
            explanation: 'A-CED.4: rearrange formulas for a quantity of interest.'
        },
        {
            question: '“Constraints” in A-CED.3 are:',
            options: ['Graphs of lines', 'Units of measure', 'Properties of zero', 'Limits or conditions in a situation'],
            correct: 3,
            explanation: 'Constraints are limits such as a budget.'
        },
        {
            question: 'At the Exemplary (4) level, you also:',
            options: ['Skip the steps', 'Check your answer and explain what it means in context', 'Use only mental math', 'Guess and move on'],
            correct: 1,
            explanation: 'Exemplary work includes checking and interpreting.'
        },
        {
            question: 'Which topic teaches reversing the inequality sign?',
            options: ['1.1 Expressions and Linear Equations', 'Neither', '1.2 Linear Inequalities', 'Both equally'],
            correct: 2,
            explanation: 'Sign reversal is a rule for inequalities.'
        },
        {
            question: 'Why does showing work matter in Algebra?',
            options: ['It is only for neatness', 'It slows you down', 'Your steps are your explanation', 'Answers do not matter'],
            correct: 2,
            explanation: 'The answer is Your steps are your explanation. Steps show your reasoning.'
        }
    ]
},
{
    name: '1.0 Expressions, Equations and Inequalities — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: The Language of Algebra</h2>
    <p style="font-size:16px;">Two streaming services: one charges $9 a month, the other charges $5 a month plus $1 for each movie you rent. Which is cheaper? The answer depends on how many movies you watch — and algebra lets you find exactly where the two plans cost the same.</p>
    <p style="font-size:16px;">In this unit, you will learn to turn questions like this into equations and inequalities, and then solve them.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔤 Words to Symbols</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Words</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbols</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a number plus 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n + 7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5 less than a number</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n − 5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">twice a number</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2n</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a number divided by 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n ÷ 4 or n/4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">the sum of a number and 3, times 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6(n + 3)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">is, equals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">=</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>“5 less than a number” is n − 5, not 5 − n. The order matters for subtraction.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Your Algebra Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">variable</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">constant</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">coefficient</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">term</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">like terms</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">expression</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">equation</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inequality</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">solution</span><span style="background:#0b1a2e;border:1px solid #b39ddb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inverse operation</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">⚖️ The Big Idea: Balance</h3>
    <p>An equation is like a balanced scale. Whatever you do to one side, you must do to the other to keep it balanced. This single idea is behind every equation you will solve.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧮 Warm-Up (5 minutes)</h3>
    <p>Without a calculator: (a) 12 − 4 × 2  (b) (12 − 4) × 2  (c) −6 + 9  (d) −3 × −5. <em>Answers: 4, 16, 3, 15.</em> If any of these surprised you, Lesson 1.1.1 will help.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Have a pencil, an eraser and a notebook ready. Calculators are allowed only when a task says so — first build your number sense by hand.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '“Twice a number” is written as:',
            options: ['2n', 'n + 2', 'n²', 'n ÷ 2'],
            correct: 0,
            explanation: 'The answer is 2n. Twice means multiply by 2.'
        },
        {
            question: '“5 less than a number” is:',
            options: ['5 − n', 'n − 5', '5n', 'n + 5'],
            correct: 1,
            explanation: 'Start with the number, then subtract 5.'
        },
        {
            question: 'In the balance idea, if you add 3 to one side you must:',
            options: ['Add 3 to the other side', 'Subtract 3 from the other side', 'Do nothing', 'Multiply the other side by 3'],
            correct: 0,
            explanation: 'The answer is Add 3 to the other side. Keep both sides equal.'
        },
        {
            question: 'What is 12 − 4 × 2?',
            options: ['16', '20', '8', '4'],
            correct: 3,
            explanation: 'The answer is 4. Multiply first: 12 − 8 = 4.'
        },
        {
            question: 'What is −3 × −5?',
            options: ['−15', '15', '8', '−8'],
            correct: 1,
            explanation: 'A negative times a negative is positive.'
        },
        {
            question: 'A letter that stands for an unknown value is a:',
            options: ['Constant', 'Coefficient', 'Variable', 'Term'],
            correct: 2,
            explanation: 'The answer is Variable. Variables represent unknowns.'
        }
    ]
},
{
    name: '1.1.1 Algebraic Expressions and Properties',
    type: 'lesson',
    duration: '50 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Modeling Everyday Costs</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Algebraic Expressions and Properties</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn to name the parts of an expression, follow the order of operations, use the properties of real numbers, combine like terms and evaluate expressions for given values.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every equation you solve this year starts with simplifying expressions. Getting this right prevents most algebra mistakes later.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Shopping totals</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Phone and streaming plans</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏀 Sports statistics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Science formulas</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Spreadsheets and coding</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Construction measurements</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Interpret and simplify expressions using the order of operations and properties of real numbers. (A-SSE.1)</li>
    <li>Solve multi-step linear equations and justify each step. (A-REI.1, A-REI.3)</li>
    <li>Rearrange literal equations and formulas for a given variable. (A-CED.4)</li>
    <li>Write and solve equations that model real situations, using units consistently. (A-CED.1, N-Q.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify terms, coefficients, factors and constants in an expression.</li>
    <li>Evaluate expressions using the order of operations.</li>
    <li>Use the commutative, associative and distributive properties.</li>
    <li>Simplify expressions by combining like terms.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How can two expressions that look different be equal?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In middle school you used variables, worked with integers and practiced the order of operations with numbers.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Suppose a ride-share app charges a $3 booking fee plus $2 per mile. The cost of a trip of m miles is the expression <strong>3 + 2m</strong>. The letter m is a <strong>variable</strong> — it can change from trip to trip. The 2 is a <strong>coefficient</strong>, and the 3 is a <strong>constant</strong>.</p>
    <p>Algebra lets us write one expression that works for every trip. To use it, we substitute a value for m and follow the order of operations. A 7-mile trip costs 3 + 2(7) = 3 + 14 = $17.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>An expression is a recipe. The variables are ingredients you can change; the operations tell you what to do with them.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The word “algebra” comes from the Arabic <em>al-jabr</em>, meaning “restoring” or “reuniting broken parts.” It appears in the title of a book on solving equations by the mathematician Muhammad ibn Musa al-Khwarizmi, written in Baghdad in the 800s. The letters we use for unknowns came later, from European mathematicians such as François Viète and René Descartes in the 1500s and 1600s.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">variable</strong>
    </p>
    <p style="margin:6px 0;">A letter or symbol that represents a number that can change or is unknown.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x, y, n, m</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>In 3 + 2m, m is the variable.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">coefficient</strong>
    </p>
    <p style="margin:6px 0;">The number multiplied by a variable.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> 5 in 5x</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>In −7y, the coefficient is −7.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">constant</strong>
    </p>
    <p style="margin:6px 0;">A term with no variable; its value does not change.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> 8 in 5x + 8</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>In 3 + 2m, 3 is the constant.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">term</strong>
    </p>
    <p style="margin:6px 0;">A number, a variable, or a product of numbers and variables, separated by + or −.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> 5x, −3y, 8</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>5x − 3y + 8 has three terms.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">like terms</strong>
    </p>
    <p style="margin:6px 0;">Terms with the same variables raised to the same powers.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> 4x and −9x</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>3x² and x² are like terms; 3x² and 3x are not.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">distributive property</strong>
    </p>
    <p style="margin:6px 0;">Multiplying a sum by a number is the same as multiplying each term.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> a(b + c) = ab + ac</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>4(x + 6) = 4x + 24</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Parts of an Expression</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Terms</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Coefficients</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Constant</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5x − 3y + 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5x, −3y, 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5, −3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 4x − 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x², 4x, −1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1, 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−1</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 − 0.5t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12, −0.5t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−0.5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>The sign in front of a term belongs to it. In 5x − 3y, the coefficient of y is −3, not 3.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Interpreting an expression in context (A-SSE.1)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A plumber charges 45 + 60h dollars for a job lasting h hours. What do 45 and 60 mean?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> The constant does not depend on h; the coefficient is multiplied by h, so it changes with time.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Constant</strong>
    </p>
    <div style="margin:6px 0 0 34px;">45 is charged no matter how long the job takes — a call-out fee.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Coefficient</strong>
    </p>
    <div style="margin:6px 0 0 34px;">60 is multiplied by the hours — the hourly rate.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 45 is a $45 fixed fee; 60 is the rate of $60 per hour.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Interpreting parts of an expression links the symbols to the real situation.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Order of Operations</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 200" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Order of Operations</text><rect x="24" y="48" width="140" height="110" rx="12" fill="#10233d" stroke="#b39ddb" stroke-width="2"/><text x="94" y="90" fill="#b39ddb" font-size="28" font-weight="bold" text-anchor="middle">P</text><text x="94" y="120" fill="#e2e8f0" font-size="13" text-anchor="middle">Parentheses</text><text x="94" y="140" fill="#94a3b8" font-size="12" text-anchor="middle">and other grouping</text><line x1="168" y1="103" x2="180.0" y2="103.0" stroke="#94a3b8" stroke-width="2"/><polygon points="190,103 180.0,108.0 180.0,98.0" fill="#94a3b8"/><rect x="194" y="48" width="140" height="110" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="264" y="90" fill="#fde68a" font-size="28" font-weight="bold" text-anchor="middle">E</text><text x="264" y="120" fill="#e2e8f0" font-size="13" text-anchor="middle">Exponents</text><text x="264" y="140" fill="#94a3b8" font-size="12" text-anchor="middle">powers and roots</text><line x1="338" y1="103" x2="350.0" y2="103.0" stroke="#94a3b8" stroke-width="2"/><polygon points="360,103 350.0,108.0 350.0,98.0" fill="#94a3b8"/><rect x="364" y="48" width="140" height="110" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="434" y="90" fill="#86efac" font-size="28" font-weight="bold" text-anchor="middle">MD</text><text x="434" y="120" fill="#e2e8f0" font-size="13" text-anchor="middle">Multiply / Divide</text><text x="434" y="140" fill="#94a3b8" font-size="12" text-anchor="middle">left to right</text><line x1="508" y1="103" x2="520.0" y2="103.0" stroke="#94a3b8" stroke-width="2"/><polygon points="530,103 520.0,108.0 520.0,98.0" fill="#94a3b8"/><rect x="534" y="48" width="140" height="110" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="604" y="90" fill="#67e8f9" font-size="28" font-weight="bold" text-anchor="middle">AS</text><text x="604" y="120" fill="#e2e8f0" font-size="13" text-anchor="middle">Add / Subtract</text><text x="604" y="140" fill="#94a3b8" font-size="12" text-anchor="middle">left to right</text><text x="350" y="186" fill="#cbd5e1" font-size="12" text-anchor="middle">Multiplication and division have equal rank; so do addition and subtraction. Work left to right.</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Evaluating an expression</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Evaluate 3x² − 2x + 5 when x = −2.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Substitute −2 in parentheses, then square before multiplying.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3(−2)² − 2(−2) + 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Exponent</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(−2)² = 4, so 3(4) − 2(−2) + 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Multiply</strong>
    </p>
    <div style="margin:6px 0 0 34px;">12 + 4 + 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Add</strong>
    </p>
    <div style="margin:6px 0 0 34px;">21</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 21</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing −2² instead of (−2)². Without parentheses, −2² means −(2²) = −4.</p>
    </div>
    <div style="background:#241338;border-left:4px solid #ff9800;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">⚡ Quick Trick</p>
    <div>Always put a substituted negative number in parentheses.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Properties and Simplifying</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Commutative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a + b = b + a; ab = ba</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 + x = x + 7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Associative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(a + b) + c = a + (b + c); (ab)c = a(bc)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2 · 5)x = 2(5x)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distributive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a(b + c) = ab + ac</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3(x − 4) = −3x + 12</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a + 0 = a; a · 1 = a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x · 1 = x</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inverse</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a + (−a) = 0; a · (1/a) = 1 (a ≠ 0)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 + (−6) = 0</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Distributive property</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">a(b + c) = ab + ac</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The number outside multiplies every term inside the parentheses.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Removing parentheses before combining like terms.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Multiplying only the first term: 4(x + 6) ≠ 4x + 6.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Draw an arrow from the outside number to each inside term.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Simplifying with distribution</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Simplify 4(2x − 3) − 5x + 7.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Distribute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">8x − 12 − 5x + 7</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Group like terms</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(8x − 5x) + (−12 + 7)</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Combine</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x − 5</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 3x − 5</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The commutative and associative properties let us regroup terms; the distributive property removes the parentheses.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Simplify 6a + 2 − a + 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5a + 11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Simplify −2(3x − 5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−6x + 10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which property is shown: x + 9 = 9 + x?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Commutative property of addition.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP2 Reason abstractly</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Attend to precision</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 Look for structure</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Substitution</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Combining like terms</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Most errors in simplifying come from signs. When you distribute a negative, every sign inside changes: −(x − 5) = −x + 5. When you combine like terms, add the coefficients and keep the variable part the same: 3x + 4x = 7x, not 7x².</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student writes 5 − 2(x + 3) = 3(x + 3) = 3x + 9. What went wrong? <em>Answer: they subtracted before multiplying. Correct: 5 − 2x − 6 = −2x − 1.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #b39ddb;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Spreadsheet formulas such as =B2*12+50 are expressions. Understanding the order of operations stops costly mistakes in budgets.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Water bills often use expressions such as a monthly fee plus a cost per gallon, so households can predict how saving water lowers the bill.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Engineers, programmers, accountants and nurses evaluate formulas every day — a dosage or a load calculation must follow the correct order.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Evaluate 10 − 6 ÷ 2 + 1.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Divide first: 10 − 3 + 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">8</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Simplify 3(x + 4) − 2x.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Distribute, then combine x terms.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x + 12</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Name the like terms in 4y + 3 − y + 2y².</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Same variable, same power.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4y and −y</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write three expressions that simplify to 2x + 6. Use the distributive property in at least one.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner writes an expression; the other evaluates it for x = −1 and x = 3. Swap roles and check each other.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Error hunt: each group gets four “student solutions” with mistakes. Find and correct each error, naming the rule that was broken.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a free graphing calculator such as Desmos to check that 4(2x − 3) − 5x + 7 and 3x − 5 give the same graph.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> List the terms, coefficients and constant of 5x − 3y + 8.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Terms: 5x, −3y, 8; coefficients: 5 and −3; constant: 8.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Evaluate 2 + 3 × 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">14</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Simplify 6x + 4 − 2x + 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4x + 13</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Simplify −2(3x − 5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−6x + 10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Evaluate a² − 3a for a = −4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">(−4)² − 3(−4) = 16 + 12 = 28</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #b39ddb;">
    <p style="margin:0 0 6px 0;color:#b39ddb;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Simplify 3(2x + 1) − 2(x − 4).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6x + 3 − 2x + 8 = 4x + 11</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Tickets cost $12 for adults and $8 for children. Write an expression for a adults and c children, then find the cost for 2 adults and 3 children.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">12a + 8c; 12(2) + 8(3) = 24 + 24 = $48</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A-SSE.1: The perimeter of a rectangle is 2l + 2w. Explain what each term represents.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2l is the total of the two lengths and 2w is the total of the two widths; their sum is the distance around the rectangle.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>An expression is made of terms; each term may have a coefficient and a variable, and constants have no variable. Follow the order of operations (parentheses, exponents, multiply/divide left to right, add/subtract left to right). Use the properties of real numbers — especially the distributive property — and combine like terms to simplify.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Terms are separated by + and −; the sign belongs to the term.</li>
    <li>Order of operations: P, E, MD, AS.</li>
    <li>a(b + c) = ab + ac.</li>
    <li>Combine like terms by adding coefficients.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Put substituted negatives in parentheses.</li>
    <li>Distribute to every term inside.</li>
    <li>x² and x are not like terms.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Doing addition before multiplication.</li>
    <li>Forgetting to distribute a negative sign.</li>
    <li>Adding exponents when combining like terms.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Underline like terms in the same color.</li>
    <li>Rewrite subtraction as adding a negative.</li>
    <li>Check by substituting a number.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the distribution step separately.</li>
    <li>Check a simplified expression by evaluating both forms for x = 2.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP7 Look for structure</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seeing terms and factors in an expression.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Handling signs and parentheses carefully.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP3 Arguments</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Naming the property that justifies each step.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Patience</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Personal finance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and spreadsheets</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every cost formula, from a cell-phone bill to a car loan, is an expression you can now read and evaluate.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete ten simplifying problems from your teacher or textbook.</li>
    <li>Find a real price list and write an expression for buying several items.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which property do I find hardest to apply?</li>
    <li>Do I check my answers by substitution?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Variable</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A symbol for a changing or unknown number.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Coefficient</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The number multiplied by a variable.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Like terms</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Terms with the same variable part.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Distributive property</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a(b + c) = ab + ac.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can name the parts of an expression.</p>
    <p style="margin:6px 0;">☐ I can evaluate expressions correctly.</p>
    <p style="margin:6px 0;">☐ I can use the distributive property.</p>
    <p style="margin:6px 0;">☐ I can combine like terms.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'What is 6 + 12 ÷ 3 × 2?',
            options: ['4', '10', '14', '18'],
            correct: 2,
            explanation: '12 ÷ 3 = 4, 4 × 2 = 8, 6 + 8 = 14.'
        },
        {
            question: 'Simplify 5x + 3 − 2x.',
            options: ['6x', '7x + 3', '3x − 3', '3x + 3'],
            correct: 3,
            explanation: '5x − 2x = 3x; the constant 3 stays.'
        },
        {
            question: 'Which is equal to 4(x − 6)?',
            options: ['4x − 24', '4x − 6', 'x − 24', '4x + 24'],
            correct: 0,
            explanation: 'Distribute 4 to both x and −6.'
        },
        {
            question: 'The coefficient in −7y is:',
            options: ['7', '−7', 'y', '−7y'],
            correct: 1,
            explanation: 'The sign belongs to the coefficient.'
        },
        {
            question: 'Which pair are like terms?',
            options: ['3x and 3x²', '3x and 3y', '3x and −8x', '3 and 3x'],
            correct: 2,
            explanation: 'Same variable to the same power.'
        },
        {
            question: 'Evaluate 2x² when x = −3.',
            options: ['−18', '36', '18', '12'],
            correct: 2,
            explanation: 'The answer is 18. (−3)² = 9 and 2 × 9 = 18.'
        },
        {
            question: 'a + b = b + a is the:',
            options: ['Commutative property of addition', 'Associative property', 'Distributive property', 'Identity property'],
            correct: 0,
            explanation: 'Commutative means the order can change.'
        },
        {
            question: 'The constant term in 9m − 4 is:',
            options: ['4', '9', 'm', '−4'],
            correct: 3,
            explanation: 'The constant includes its sign.'
        },
        {
            question: 'Simplify −(x − 5).',
            options: ['−x + 5', '−x − 5', 'x − 5', 'x + 5'],
            correct: 0,
            explanation: 'The answer is −x + 5. Distribute −1 to each term.'
        },
        {
            question: 'In C = 15 + 0.25m (m = minutes), 0.25 represents:',
            options: ['The fixed fee', 'The total cost', 'The number of minutes', 'The cost per minute'],
            correct: 3,
            explanation: 'The coefficient of m is the rate.'
        }
    ]
},
{
    name: '1.1.2 Solving Multi-Step Linear Equations',
    type: 'lesson',
    duration: '55 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Modeling Everyday Costs</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Solving Multi-Step Linear Equations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will solve linear equations that need several steps — including distributing, combining like terms, fractions and variables on both sides — and recognize equations with no solution or infinitely many solutions.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Solving equations is the central skill of Algebra I. You will use it to find break-even points, unknown measurements, times, speeds and prices.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💰 Break-even points</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Travel times</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏪 Sale prices</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚗️ Chemistry mixtures</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📐 Unknown lengths</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game scoring</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Interpret and simplify expressions using the order of operations and properties of real numbers. (A-SSE.1)</li>
    <li>Solve multi-step linear equations and justify each step. (A-REI.1, A-REI.3)</li>
    <li>Rearrange literal equations and formulas for a given variable. (A-CED.4)</li>
    <li>Write and solve equations that model real situations, using units consistently. (A-CED.1, N-Q.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use inverse operations and the properties of equality to solve equations.</li>
    <li>Solve equations with variables on both sides.</li>
    <li>Solve equations involving fractions and the distributive property.</li>
    <li>Identify equations with no solution or infinitely many solutions, and check solutions.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do we keep an equation balanced while we solve it?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned to simplify expressions. Simplifying each side is often the first step in solving an equation.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>An equation such as 3x + 5 = 20 is a statement that two expressions are equal. To <strong>solve</strong> it means to find the value of x that makes the statement true. Think of a balanced scale: if you remove 5 from one side, you must remove 5 from the other side to keep it balanced.</p>
    <p>We use <strong>inverse operations</strong> to undo what has been done to the variable: subtraction undoes addition, and division undoes multiplication. We usually undo operations in the reverse of the order of operations.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Solving an equation is “unwrapping” the variable — take off the last layer first.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The properties of equality say that you can add, subtract, multiply or divide both sides of an equation by the same number (except dividing by zero) and the equation stays true. The equal sign “=” itself was invented by the Welsh mathematician Robert Recorde in 1557, who chose two parallel lines because “no two things can be more equal.”</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">equation</strong>
    </p>
    <p style="margin:6px 0;">A statement that two expressions are equal.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> =</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>3x + 5 = 20</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">solution</strong>
    </p>
    <p style="margin:6px 0;">A value of the variable that makes the equation true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x = 5</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x = 5 is the solution of 3x + 5 = 20.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">inverse operations</strong>
    </p>
    <p style="margin:6px 0;">Operations that undo each other.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> + and −; × and ÷</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Subtract 5 to undo + 5.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">properties of equality</strong>
    </p>
    <p style="margin:6px 0;">Rules that let you do the same operation to both sides.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> if a = b, then a + c = b + c</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Divide both sides by 3.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">identity</strong>
    </p>
    <p style="margin:6px 0;">An equation that is true for every value of the variable.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> infinitely many solutions</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>2(x + 3) = 2x + 6</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">no solution</strong>
    </p>
    <p style="margin:6px 0;">An equation that is never true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∅ (empty set)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x + 1 = x + 4</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Balance Method</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 290" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">An Equation Is a Balanced Scale</text><line x1="150" y1="92" x2="550" y2="92" stroke="#b39ddb" stroke-width="5"/><polygon points="350,92 320,232 380,232" fill="#2a1f4a" stroke="#b39ddb" stroke-width="2"/><rect x="280" y="232" width="140" height="10" rx="3" fill="#b39ddb"/><line x1="150" y1="92" x2="150" y2="132" stroke="#94a3b8" stroke-width="2"/><rect x="70" y="132" width="160" height="40" rx="8" fill="#10233d" stroke="#b39ddb" stroke-width="2"/><text x="150" y="158" fill="#fde68a" font-size="17" font-weight="bold" text-anchor="middle">3x + 5</text><line x1="550" y1="92" x2="550" y2="132" stroke="#94a3b8" stroke-width="2"/><rect x="470" y="132" width="160" height="40" rx="8" fill="#10233d" stroke="#b39ddb" stroke-width="2"/><text x="550" y="158" fill="#fde68a" font-size="17" font-weight="bold" text-anchor="middle">20</text><text x="150" y="200" fill="#cbd5e1" font-size="13" text-anchor="middle">left side</text><text x="550" y="200" fill="#cbd5e1" font-size="13" text-anchor="middle">right side</text><text x="350" y="270" fill="#86efac" font-size="14" text-anchor="middle">Subtract 5 from BOTH sides → 3x = 15 → divide BOTH sides by 3 → x = 5</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Property of equality</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Use it to undo</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then a + c = b + c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then a − c = b − c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b, then ac = bc</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Division</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Division</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If a = b and c ≠ 0, then a ÷ c = b ÷ c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Distribute, combine, then solve</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve 3(x − 4) + 5 = 20.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Simplify the left side first, then undo the operations in reverse order.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Distribute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x − 12 + 5 = 20</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Combine like terms</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x − 7 = 20</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Addition property: add 7</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x = 27</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Division property: divide by 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 9</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3(9 − 4) + 5 = 3(5) + 5 = 20 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 9</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Each step is justified by a property, which is exactly what standard A-REI.1 asks for.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Variables on Both Sides</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Collecting the variable on one side</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve 7x − 5 = 3x + 19.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Move the smaller x-term so the coefficient stays positive.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 3x from both sides</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4x − 5 = 19</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Add 5 to both sides</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4x = 24</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Divide both sides by 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 6</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">7(6) − 5 = 37 and 3(6) + 19 = 37 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 6</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Subtracting 3x from only one side. Every operation must be done to both sides.</p>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">After simplifying</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4(x + 2) = 4x + 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 = 5 (false)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No solution</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3(2x − 1) = 6x − 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 = −3 (true)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Infinitely many solutions (identity)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5x + 1 = 2x + 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exactly one solution</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>If the variables disappear, look at what is left. A false statement means no solution; a true statement means every number is a solution.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Equations with Fractions</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Undoing division</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve x/3 + 4 = 10.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 4</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x/3 = 6</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Multiply both sides by 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 18</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check</strong>
    </p>
    <div style="margin:6px 0 0 34px;">18/3 + 4 = 6 + 4 = 10 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 18</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: Multiplying by the reciprocal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve (2/5)x = 8.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Multiply both sides by 5/2, the reciprocal of 2/5.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Multiply by 5/2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 8 × 5/2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Simplify</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x = 20</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x = 20</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> (5/2)(2/5) = 1, so the coefficient of x becomes 1.</p>
    </div>
    <div style="background:#241338;border-left:4px solid #ff9800;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">⚡ Quick Trick</p>
    <div>To clear all fractions at once, multiply every term on both sides by the least common denominator.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve 2x + 5 = 17.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve 9x − 4 = 5x + 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> How many solutions does x + 4 = x + 4 have?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Infinitely many — it is an identity.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP1 Make sense of problems</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP3 Justify each step</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Attend to precision</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Inverse operations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking solutions</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Always check your solution by substituting it into the <em>original</em> equation, not a later step — an error made early will carry through and still “check” in a later line. Watch especially for sign errors when you move terms and when you divide by a negative coefficient.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student solves −4x + 7 = 31 and writes −4x = 38. What went wrong? <em>Answer: they added 7 instead of subtracting it. Correct: −4x = 24, so x = −6.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #b39ddb;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> A taxi charges $3.50 plus $2 per mile, and your fare was $19.50. Solving 3.50 + 2m = 19.50 shows you traveled 8 miles.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists solve equations to find how long a reservoir will last at a given rate of water use, helping cities plan conservation.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Business owners solve equations to find the break-even point — the number of items they must sell to cover their costs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What is the first step to solve 5x + 9 = 44?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Undo the addition first.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Subtract 9 from both sides.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Solve 5(x + 2) = 35.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Divide by 5 or distribute first.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 5</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Does 2x + 1 = 2x + 7 have a solution?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Subtract 2x from both sides.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — it simplifies to 1 = 7, which is false.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Solve five equations, writing the property of equality you used next to each step.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Partner A solves an equation aloud while Partner B writes the steps and checks each one. Then switch.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Equation relay: each person does one step of a long equation and passes it on. The last person checks the answer in the original equation.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online equation solver only after solving by hand, to check your answer. Note any step where your work differs.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve 2x + 5 = 17.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve x/4 − 3 = 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x/4 = 5, so x = 20</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 5(x + 2) = 35.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x + 2 = 7, so x = 5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve 9x − 4 = 5x + 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4x = 16, so x = 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve 0.5(8x − 6) = 2x + 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4x − 3 = 2x + 9, 2x = 12, x = 6</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #b39ddb;">
    <p style="margin:0 0 6px 0;color:#b39ddb;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve 2(3x − 1) − 4 = 3(x + 5) + 3x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">6x − 6 = 6x + 15, which gives −6 = 15 — false, so there is no solution.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A taxi charges $3.50 plus $2 per mile. Your fare is $19.50. How many miles did you travel?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3.50 + 2m = 19.50, 2m = 16, m = 8 miles</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A-REI.1: Solve 4x + 3 = 23 and name the property used in each step.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Subtraction property of equality: 4x = 20. Division property of equality: x = 5.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>To solve a linear equation, simplify each side (distribute and combine like terms), collect variable terms on one side, then use inverse operations and the properties of equality to isolate the variable. Check the solution in the original equation. If the variables cancel, a false statement means no solution and a true statement means infinitely many solutions.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do the same thing to both sides.</li>
    <li>Undo operations in reverse order.</li>
    <li>Move the smaller variable term.</li>
    <li>Check in the original equation.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Dividing by zero is never allowed.</li>
    <li>False statement = no solution.</li>
    <li>True statement = infinitely many solutions.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Doing an operation to one side only.</li>
    <li>Sign errors when moving terms.</li>
    <li>Checking in a later step instead of the original equation.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Line up equal signs vertically.</li>
    <li>Write the property next to each step.</li>
    <li>Estimate first: is the answer positive or negative?</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show every step; partial credit depends on it.</li>
    <li>Box your final answer and write the check.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Justifying steps with properties.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP1 Perseverance</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Working through multi-step problems.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tracking signs carefully.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Accuracy</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Personal finance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Travel planning</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Whenever you know a total and need to find one missing amount — hours, miles, items — you are solving a linear equation.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve the ten equations assigned by your teacher, checking each one.</li>
    <li>Write one equation with no solution and one with infinitely many solutions.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Where do I make the most mistakes when solving equations?</li>
    <li>Do I always check my solution?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Solution</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A value that makes the equation true.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Inverse operation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An operation that undoes another.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Identity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">True for all values.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">No solution</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Never true.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can solve multi-step equations.</p>
    <p style="margin:6px 0;">☐ I can solve equations with variables on both sides.</p>
    <p style="margin:6px 0;">☐ I can solve equations with fractions.</p>
    <p style="margin:6px 0;">☐ I can identify no solution and infinitely many solutions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Solve 3x + 8 = 29.',
            options: ['x = 12.3', 'x = 21', 'x = 9', 'x = 7'],
            correct: 3,
            explanation: 'Subtract 8: 3x = 21; divide by 3: x = 7.'
        },
        {
            question: 'Solve 2(x − 3) = 14.',
            options: ['x = 4', 'x = 10', 'x = 8.5', 'x = 7'],
            correct: 1,
            explanation: 'The answer is x = 10. x − 3 = 7, so x = 10.'
        },
        {
            question: 'Solve 6x − 4 = 2x + 16.',
            options: ['x = 3', 'x = 2.5', 'x = 5', 'x = 6'],
            correct: 2,
            explanation: 'The answer is x = 5. 4x = 20, so x = 5.'
        },
        {
            question: 'The first step to solve 5x + 9 = 44 is to:',
            options: ['Subtract 9 from both sides', 'Divide both sides by 5', 'Add 9 to both sides', 'Multiply both sides by 5'],
            correct: 0,
            explanation: 'The answer is Subtract 9 from both sides. Undo the addition first.'
        },
        {
            question: 'Which equation has no solution?',
            options: ['2x + 1 = 7', '2x + 1 = 2x + 7', '2x = 0', 'x + 1 = 2x'],
            correct: 1,
            explanation: 'It simplifies to 1 = 7, which is false.'
        },
        {
            question: 'x + 4 = x + 4 has:',
            options: ['No solution', 'One solution', 'Infinitely many solutions', 'Two solutions'],
            correct: 2,
            explanation: 'The answer is Infinitely many solutions. Both sides are always equal.'
        },
        {
            question: 'Solve x/5 = −3.',
            options: ['x = 15', 'x = −0.6', 'x = 2', 'x = −15'],
            correct: 3,
            explanation: 'The answer is x = −15. Multiply both sides by 5.'
        },
        {
            question: 'Going from x − 6 = 10 to x = 16 uses the:',
            options: ['Addition property of equality', 'Division property of equality', 'Distributive property', 'Commutative property'],
            correct: 0,
            explanation: 'The answer is Addition property of equality. You add 6 to both sides.'
        },
        {
            question: 'Is x = 3 a solution of 4x − 1 = 2x + 5?',
            options: ['No, the sides are 11 and 9', 'Yes, both sides equal 11', 'No, the sides are 12 and 6', 'Yes, both sides equal 5'],
            correct: 1,
            explanation: '4(3) − 1 = 11 and 2(3) + 5 = 11.'
        },
        {
            question: 'Solve −4x + 7 = 31.',
            options: ['x = 6', 'x = −9.5', 'x = 9.5', 'x = −6'],
            correct: 3,
            explanation: 'The answer is x = −6. −4x = 24, so x = −6.'
        }
    ]
},
{
    name: '1.1.3 Literal Equations and Modeling with Equations',
    type: 'lesson',
    duration: '55 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Modeling Everyday Costs</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: Literal Equations and Modeling with Equations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will rearrange formulas to solve for a chosen variable, write equations from word problems, and use units to check that your answers make sense.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Real problems do not come with an equation attached. Turning a situation into an equation — and rearranging formulas — is how algebra is used in science, business and everyday life.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Temperature conversions</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Distance, rate and time</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏦 Simple interest</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏠 Area and perimeter</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏋️ Membership costs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📦 Shipping and volume</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Interpret and simplify expressions using the order of operations and properties of real numbers. (A-SSE.1)</li>
    <li>Solve multi-step linear equations and justify each step. (A-REI.1, A-REI.3)</li>
    <li>Rearrange literal equations and formulas for a given variable. (A-CED.4)</li>
    <li>Write and solve equations that model real situations, using units consistently. (A-CED.1, N-Q.1)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Solve a literal equation or formula for a given variable.</li>
    <li>Translate a word problem into an equation.</li>
    <li>Solve consecutive-integer and geometry problems.</li>
    <li>Use units to check that a solution makes sense.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do we turn a real situation into an equation we can solve?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.2 you solved equations with numbers. The same steps work when the equation has several letters.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>The formula d = rt connects distance, rate and time. If you know the distance (150 miles) and the speed (60 mph) and want the time, you could substitute and solve each time — or you could rearrange the formula once to get <strong>t = d/r</strong>. An equation with two or more variables is called a <strong>literal equation</strong>.</p>
    <p><strong>Modeling</strong> means writing an equation that represents a real situation. The steps are: define the variable, write the equation, solve it, and interpret the answer in context — with units.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Solving a literal equation is solving an ordinary equation — you just treat the other letters as if they were numbers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>Formulas are compact summaries of relationships discovered over centuries. The Fahrenheit scale was proposed by Daniel Gabriel Fahrenheit in 1724 and the Celsius scale by Anders Celsius in 1742. Because the United States mainly uses Fahrenheit while most of the world uses Celsius, converting between them is a classic literal-equation problem.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">literal equation</strong>
    </p>
    <p style="margin:6px 0;">An equation with two or more variables.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> d = rt, A = lw</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>P = 2l + 2w is a literal equation.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">formula</strong>
    </p>
    <p style="margin:6px 0;">A literal equation that states a rule relating quantities.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> A = πr²</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The area formula for a circle.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">isolate</strong>
    </p>
    <p style="margin:6px 0;">To get a variable alone on one side of an equation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> t = …</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Isolate t by dividing by r.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">model</strong>
    </p>
    <p style="margin:6px 0;">An equation, graph or table that represents a real situation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> C = 25 + 30m</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The equation models gym costs.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">consecutive integers</strong>
    </p>
    <p style="margin:6px 0;">Integers that follow each other in order.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> n, n + 1, n + 2</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>23, 24 and 25 are consecutive.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">unit analysis</strong>
    </p>
    <p style="margin:6px 0;">Using units to check that a calculation makes sense.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> miles ÷ (miles/hour) = hours</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The answer to d/r is in hours.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Solving Literal Equations</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Distance, rate and time</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve d = rt for t. Then find the time to drive 150 miles at 60 miles per hour.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Divide both sides by r</strong>
    </p>
    <div style="margin:6px 0 0 34px;">d/r = t</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Rewrite</strong>
    </p>
    <div style="margin:6px 0 0 34px;">t = d/r</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">t = 150 ÷ 60 = 2.5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Units</strong>
    </p>
    <div style="margin:6px 0 0 34px;">miles ÷ (miles per hour) = hours</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> t = d/r; the trip takes 2.5 hours.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Perimeter of a rectangle</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve P = 2l + 2w for l.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 2w from both sides</strong>
    </p>
    <div style="margin:6px 0 0 34px;">P − 2w = 2l</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide both sides by 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">(P − 2w)/2 = l</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> l = (P − 2w)/2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only P by 2 and writing l = P/2 − 2w. The 2 must divide the whole expression P − 2w.</p>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Temperature conversion</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">F = (9/5)C + 32   ⟺   C = (5/9)(F − 32)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> F is degrees Fahrenheit; C is degrees Celsius.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> °F and °C</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Converting weather, cooking or science temperatures.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Multiplying by 5/9 before subtracting 32.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Water freezes at 32°F = 0°C and boils at 212°F = 100°C — use these to check.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve A = lw for w.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">w = A/l</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Convert 77°F to Celsius.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">C = (5/9)(77 − 32) = (5/9)(45) = 25°C</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Solve y = x + b for b.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">b = y − x</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Modeling with Equations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Step</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Define</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choose a variable and say what it stands for, with units.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Write</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Translate the words into an equation.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Solve</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the steps from Lesson 1.1.2.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Interpret</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Answer the question in a sentence, with units, and check that it makes sense.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: A membership problem (A-CED.1)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A gym charges a $25 sign-up fee plus $30 per month. You have $205. For how many months can you be a member?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Define</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Let m = number of months.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Write</strong>
    </p>
    <div style="margin:6px 0 0 34px;">25 + 30m = 205</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">30m = 180, so m = 6</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Interpret</strong>
    </p>
    <div style="margin:6px 0 0 34px;">You can be a member for 6 months. Check: 25 + 30(6) = 205 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 6 months</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: Consecutive integers</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> The sum of three consecutive integers is 72. Find the integers.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Define</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Let n be the first integer; the others are n + 1 and n + 2.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Write</strong>
    </p>
    <div style="margin:6px 0 0 34px;">n + (n + 1) + (n + 2) = 72</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3n + 3 = 72, 3n = 69, n = 23</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 23, 24 and 25</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Writing every unknown in terms of one variable gives one equation with one unknown.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Using Units to Check (N-Q.1)</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Units</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result unit</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">d ÷ r</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">miles ÷ (miles/hour)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">hours</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">r × t</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(dollars/hour) × hours</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">dollars</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A ÷ l</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">square feet ÷ feet</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">feet</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>If the units of your answer do not match what the question asks for, your equation is set up wrong.</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP4 Model with mathematics</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP2 Reason abstractly</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Use units precisely</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rearranging formulas</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting solutions</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>A model is only useful if its answer makes sense. A solution of 6.4 people or −3 months must be rounded or rejected based on the context. Always ask: is the answer reasonable, and are the units correct?</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student models “5 less than twice a number is 17” as 5 − 2n = 17. What went wrong? <em>Answer: “5 less than” means subtract 5 from twice the number: 2n − 5 = 17, so n = 11.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #b39ddb;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Travelers convert temperatures, drivers estimate arrival times with t = d/r, and savers use I = Prt to compare accounts.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Ecologists rearrange formulas for population density (D = N/A) to find how many animals an area can support.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Nurses rearrange dosage formulas, engineers rearrange physics formulas, and pharmacists convert units every day.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Solve V = lwh for h.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Divide by both l and w.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">h = V/(lw)</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Write an equation: a number tripled plus 7 is 40.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Tripled means times 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3n + 7 = 40, so n = 11.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What unit is the answer to (dollars) ÷ (dollars per hour)?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Dollars cancel.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Hours.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Rearrange five formulas from science or geometry (for example A = ½bh and I = Prt) for a different variable.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each partner writes a word problem about a real cost. Swap, solve, and check each other’s equation and units.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Formula poster: each group picks a real formula, solves it for every variable, and shows one real use of each version.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Create a simple spreadsheet that converts Fahrenheit to Celsius using =(5/9)*(A2-32). Test it with 32, 77 and 212.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve A = lw for l.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">l = A/w</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve y = x + b for b.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">b = y − x</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve V = lwh for h.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">h = V/(lw)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A number tripled plus 7 is 40. Find the number.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3n + 7 = 40, 3n = 33, n = 11</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #b39ddb;">
    <p style="margin:0 0 6px 0;color:#b39ddb;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve ax + b = c for x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = (c − b)/a, where a ≠ 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve A = ½bh for h.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">h = 2A/b</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A rectangular garden has a perimeter of 56 ft. Its length is 4 ft more than its width. Find the dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2w + 2(w + 4) = 56, 4w + 8 = 56, w = 12 ft, l = 16 ft</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A-CED.4: Solve I = Prt for r. Then find r when I = $90, P = $1,500 and t = 2 years.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">r = I/(Pt) = 90 ÷ 3,000 = 0.03, so the rate is 3% per year.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>A literal equation has two or more variables. Solve it for one variable by using inverse operations, treating the other letters as numbers. To model a situation, define a variable, write an equation, solve it and interpret the answer with units. Unit analysis checks that a model makes sense.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Literal equation = several variables.</li>
    <li>Isolate the chosen variable with inverse operations.</li>
    <li>Define → write → solve → interpret.</li>
    <li>Check the units of the answer.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A division bar applies to the whole numerator.</li>
    <li>Consecutive integers: n, n + 1, n + 2.</li>
    <li>Reject answers that make no sense in context.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Dividing only part of an expression.</li>
    <li>Reversing subtraction in word problems.</li>
    <li>Forgetting units in the final answer.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Circle the variable you are solving for.</li>
    <li>Underline key words such as “per,” “more than” and “total.”</li>
    <li>Check with a quick estimate.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State what your variable represents.</li>
    <li>Answer the question in a full sentence with units.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP4 Modeling</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing equations for real situations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using units correctly.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP2 Reasoning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpreting answers in context.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Personal finance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Science and health</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From converting a recipe’s oven temperature to estimating a road trip, rearranging formulas saves time and prevents errors.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve the assigned literal equations.</li>
    <li>Write and solve one word problem about something you plan to buy or save for.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which part of modeling is hardest for me: writing or interpreting?</li>
    <li>Do I check my units?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Literal equation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An equation with several variables.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Formula</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A rule relating quantities.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Model</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A math representation of a situation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Unit analysis</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking with units.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can solve a formula for any variable.</p>
    <p style="margin:6px 0;">☐ I can write an equation from a word problem.</p>
    <p style="margin:6px 0;">☐ I can solve consecutive-integer problems.</p>
    <p style="margin:6px 0;">☐ I can check answers with units.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Solve d = rt for r.',
            options: ['r = dt', 'r = t/d', 'r = d − t', 'r = d/t'],
            correct: 3,
            explanation: 'The answer is r = d/t. Divide both sides by t.'
        },
        {
            question: 'Solve P = 2l + 2w for w.',
            options: ['w = P − 2l', 'w = (P − 2l)/2', 'w = P/2 − 2l', 'w = 2P − l'],
            correct: 1,
            explanation: 'Subtract 2l, then divide the whole side by 2.'
        },
        {
            question: 'A literal equation is one that:',
            options: ['Has no variables', 'Has two or more variables', 'Is always false', 'Has only fractions'],
            correct: 1,
            explanation: 'Formulas are literal equations.'
        },
        {
            question: 'The sum of three consecutive integers is 45. The integers are:',
            options: ['15, 16, 17', '13, 15, 17', '12, 15, 18', '14, 15, 16'],
            correct: 3,
            explanation: 'The answer is 14, 15, 16. 3n + 3 = 45, so n = 14.'
        },
        {
            question: 'A repair costs $40 plus $15 per hour. The bill is $100. How many hours?',
            options: ['4', '6.7', '9.3', '2.5'],
            correct: 0,
            explanation: '40 + 15h = 100, 15h = 60, h = 4.'
        },
        {
            question: 'Solve y = mx + b for x.',
            options: ['x = (y − b)/m', 'x = y − b − m', 'x = (y + b)/m', 'x = m(y − b)'],
            correct: 0,
            explanation: 'The answer is x = (y − b)/m. Subtract b, then divide by m.'
        },
        {
            question: 'If d is in miles and r in miles per hour, t = d/r is measured in:',
            options: ['Hours', 'Miles', 'Miles per hour', 'Square miles'],
            correct: 0,
            explanation: 'The answer is Hours. Miles cancel, leaving hours.'
        },
        {
            question: 'Use C = (5/9)(F − 32) to convert 95°F.',
            options: ['63°C', '35°C', '53°C', '27°C'],
            correct: 1,
            explanation: 'The answer is 35°C. 95 − 32 = 63; (5/9)(63) = 35.'
        },
        {
            question: 'Solve 2a + 3b = 12 for b.',
            options: ['b = 12 − 2a', 'b = (12 + 2a)/3', 'b = (12 − 2a)/3', 'b = 4 − 2a'],
            correct: 2,
            explanation: 'Subtract 2a, then divide by 3.'
        },
        {
            question: '“Five less than twice a number is 17.” The number is:',
            options: ['6', '−6', '11', '22'],
            correct: 2,
            explanation: '2n − 5 = 17, so 2n = 22 and n = 11.'
        }
    ]
},
{
    name: '1.1 Activity: Which Plan Is the Better Deal?',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Which Plan Is the Better Deal?</h2>
    <p style="font-size:16px;">Two gyms near your school charge in different ways. In this investigation you will model both plans with equations, compare them with a table and a graph, and solve an equation to find when they cost the same.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Agree on roles: recorder, calculator-checker, grapher and presenter.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every value in your table must be checked by a second person.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use rulers for graphs; use calculators only for checking.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Listen to every method — groups may solve it differently.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Math Investigation: Comparing Two Gym Plans</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To use equations, tables and graphs to decide which of two plans is cheaper and when they cost the same.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Colored pencils</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator (for checking only)</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gym A: $60 sign-up fee plus $20 per month</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Gym B: no sign-up fee, $35 per month</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Share materials fairly.</li>
    <li>Check each other’s calculations respectfully.</li>
    <li>Stay on task and keep noise to working levels.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Define the variable: let m be the number of months and C the total cost in dollars.</li>
    <li>Write an equation for each plan: Gym A, C = 60 + 20m; Gym B, C = 35m.</li>
    <li>Make a table of total costs for m = 0 to 6 months for both plans.</li>
    <li>Graph both equations on the same axes, using a different color for each plan.</li>
    <li>Find the month where the costs are equal by solving 60 + 20m = 35m.</li>
    <li>Decide which plan is cheaper for a 3-month and a 12-month membership.</li>
    <li>Prepare a one-minute recommendation for a friend, with evidence.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Months (m)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">3</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">4</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">5</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">6</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gym A: 60 + 20m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">60</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">80</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">120</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">140</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">160</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">180</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gym B: 35m</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">35</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">70</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">105</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">140</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">175</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">210</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Total Cost of Two Gym Plans</text><line x1="80" y1="260" x2="640" y2="260" stroke="#64748b" stroke-width="2"/><line x1="80" y1="260" x2="80" y2="44" stroke="#64748b" stroke-width="2"/><text x="80" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">0</text><text x="170" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">1</text><text x="260" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">2</text><text x="350" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">3</text><text x="440" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">4</text><text x="530" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">5</text><text x="620" y="280" fill="#94a3b8" font-size="12" text-anchor="middle">6</text><text x="70" y="264" fill="#94a3b8" font-size="12" text-anchor="end">0</text><line x1="80" y1="260" x2="640" y2="260" stroke="#1e293b" stroke-width="1"/><text x="70" y="214" fill="#94a3b8" font-size="12" text-anchor="end">50</text><line x1="80" y1="210" x2="640" y2="210" stroke="#1e293b" stroke-width="1"/><text x="70" y="164" fill="#94a3b8" font-size="12" text-anchor="end">100</text><line x1="80" y1="160" x2="640" y2="160" stroke="#1e293b" stroke-width="1"/><text x="70" y="114" fill="#94a3b8" font-size="12" text-anchor="end">150</text><line x1="80" y1="110" x2="640" y2="110" stroke="#1e293b" stroke-width="1"/><text x="70" y="64" fill="#94a3b8" font-size="12" text-anchor="end">200</text><line x1="80" y1="60" x2="640" y2="60" stroke="#1e293b" stroke-width="1"/><text x="360" y="304" fill="#94a3b8" font-size="12" text-anchor="middle">months (m)</text><text x="30" y="152" fill="#94a3b8" font-size="12" text-anchor="middle" transform="rotate(-90 30 152)">total cost ($)</text><line x1="80" y1="200" x2="620" y2="80" stroke="#b39ddb" stroke-width="3"/><line x1="80" y1="260" x2="620" y2="50" stroke="#fde68a" stroke-width="3"/><circle cx="440" cy="120" r="7" fill="#86efac"/><text x="440" y="175" fill="#86efac" font-size="13" text-anchor="middle">(4, 140): equal cost</text><text x="616" y="140" fill="#b39ddb" font-size="13" text-anchor="end">Gym A: C = 60 + 20m</text><text x="616" y="40" fill="#fde68a" font-size="13" text-anchor="end">Gym B: C = 35m</text><text x="360" y="322" fill="#cbd5e1" font-size="12" text-anchor="middle">Gym B is cheaper before month 4; Gym A is cheaper after month 4.</text>
    </svg>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve 60 + 20m = 35m. What does the solution mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">60 = 15m, so m = 4. After 4 months both plans cost $140.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which plan is cheaper for 3 months? For 12 months?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3 months: Gym B ($105) versus Gym A ($120). 12 months: Gym A ($300) versus Gym B ($420).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What do the 60 and the 20 mean in the Gym A equation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">60 is the one-time sign-up fee; 20 is the cost per month.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Gym B is cheaper for memberships shorter than 4 months, both cost the same at 4 months, and Gym A is cheaper for longer memberships.</p>
    <p><strong style="color:#fde68a;">Why it works:</strong> The plan with the lower monthly rate always becomes cheaper eventually, because each month it adds less to the total. The sign-up fee only delays when that happens.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Starting Gym A’s table at 0 instead of 60.</li>
    <li>Mixing up the fee and the rate.</li>
    <li>Plotting the points but not drawing the lines.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Phone plans, car rentals, streaming services and memberships can all be compared this way before you sign a contract.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Compare your table, graph and equation. All three show that the plans cross at 4 months. The equation gives the exact answer; the table and graph show how the costs change over time.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>A table, a graph and an equation are three views of the same relationship.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write an equation for Gym A.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">C = 60 + 20m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> How much does Gym B cost for 5 months?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">35 × 5 = $175</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> After how many months do the plans cost the same?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4 months</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why did you check the table with a second person?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To catch arithmetic errors before graphing and drawing conclusions.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How would the answer change if Gym A’s fee were $90?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">90 + 20m = 35m gives m = 6, so the plans would cost the same after 6 months.</div>
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
            question: 'Which equation models Gym A?',
            options: ['C = 20 + 60m', 'C = 80m', 'C = 35m', 'C = 60 + 20m'],
            correct: 3,
            explanation: 'The answer is C = 60 + 20m. Fee $60 plus $20 per month.'
        },
        {
            question: 'Which equation models Gym B?',
            options: ['C = 35 + m', 'C = 60 + 35m', 'C = 35m', 'C = 20m'],
            correct: 2,
            explanation: 'The answer is C = 35m. No fee, $35 per month.'
        },
        {
            question: 'When do the plans cost the same?',
            options: ['After 4 months', 'After 2 months', 'After 6 months', 'Never'],
            correct: 0,
            explanation: 'The answer is After 4 months. 60 + 20m = 35m gives m = 4.'
        },
        {
            question: 'Which plan is cheaper for 2 months?',
            options: ['Gym A', 'They cost the same', 'Gym B', 'Neither'],
            correct: 2,
            explanation: 'The answer is Gym B. Gym B: $70; Gym A: $100.'
        },
        {
            question: 'The point where the two graphs cross shows:',
            options: ['The sign-up fee', 'When the costs are equal', 'The monthly rate', 'The cheapest month'],
            correct: 1,
            explanation: 'At the crossing point both plans have the same cost.'
        },
        {
            question: 'What is the total cost of Gym A for 12 months?',
            options: ['$420', '$300', '$240', '$360'],
            correct: 1,
            explanation: 'The answer is $300. 60 + 20(12) = 300.'
        }
    ]
},
{
    name: '1.1 Quiz: Expressions and Linear Equations',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Expressions and Linear Equations</h2>
    <p style="font-size:16px;">Test your understanding of expressions, multi-step equations, literal equations and modeling from Topic 1.1.</p>
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
    <li>Parts of an expression and the order of operations</li>
    <li>Properties of real numbers and combining like terms</li>
    <li>Multi-step equations and variables on both sides</li>
    <li>No solution and infinitely many solutions</li>
    <li>Literal equations and formulas</li>
    <li>Modeling and units</li>
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
    <div>Work each problem on scrap paper before choosing. Substitute your answer back into the equation to check — it takes only seconds.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Simplify 2(3x − 4) + 5.',
            options: ['6x − 3', '6x − 8', '6x + 1', '5x − 3'],
            correct: 0,
            explanation: 'The answer is 6x − 3. 6x − 8 + 5 = 6x − 3.'
        },
        {
            question: 'Evaluate x² − 4x for x = −2.',
            options: ['−4', '12', '4', '−12'],
            correct: 1,
            explanation: 'The answer is 12. 4 + 8 = 12.'
        },
        {
            question: 'Solve 4x + 11 = 3.',
            options: ['x = −2', 'x = 2', 'x = 3.5', 'x = −3.5'],
            correct: 0,
            explanation: 'The answer is x = −2. 4x = −8, so x = −2.'
        },
        {
            question: 'Solve 8x − 3 = 5x + 12.',
            options: ['x = 3', 'x = 1', 'x = 5', 'x = 9'],
            correct: 2,
            explanation: 'The answer is x = 5. 3x = 15, so x = 5.'
        },
        {
            question: 'What does 3(x + 1) = 3x + 3 simplify to?',
            options: ['A false statement — no solution', 'x = 1', 'x = 0', 'A true statement — infinitely many solutions'],
            correct: 3,
            explanation: 'Both sides are the same expression.'
        },
        {
            question: 'Solve (3/4)x = 12.',
            options: ['x = 16', 'x = 9', 'x = 36', 'x = 4'],
            correct: 0,
            explanation: 'The answer is x = 16. Multiply by 4/3.'
        },
        {
            question: 'Solve A = ½bh for b.',
            options: ['b = A/(2h)', 'b = 2Ah', 'b = A − h', 'b = 2A/h'],
            correct: 3,
            explanation: 'Multiply by 2, then divide by h.'
        },
        {
            question: 'A tutor charges $15 plus $25 per hour. The bill is $90. How many hours?',
            options: ['4.2', '2.5', '6', '3'],
            correct: 3,
            explanation: '15 + 25h = 90, 25h = 75, h = 3.'
        },
        {
            question: 'Which property is used in 5(x + 2) = 5x + 10?',
            options: ['Commutative property', 'Identity property', 'Distributive property', 'Inverse property'],
            correct: 2,
            explanation: 'The 5 is distributed to each term.'
        },
        {
            question: 'In C = 60 + 20m, what does 60 represent?',
            options: ['The monthly rate', 'A one-time fee', 'The number of months', 'The total cost'],
            correct: 1,
            explanation: 'The constant does not depend on m.'
        }
    ]
},
{
    name: '1.1 Assignment: Compare Two Real Plans',
    type: 'lesson',
    duration: '90 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 90 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Compare Two Real Plans</h2>
    <p style="font-size:16px;">Choose two real plans or prices — for example two phone plans, streaming services, car-rental offers or bike-share options — and use equations to decide which is the better deal.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 90 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Task:</strong> Find two plans that charge in different ways (for example, one with a higher fee and a lower rate). Model each with an equation, compare them with a table and a graph, solve for the break-even point, and write a recommendation for a friend or family member.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>If you cannot find real prices, your teacher will give you two sample plans. Keep any personal or family details private.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose two plans and record their fees and rates, with the source of your information.</li>
    <li>Define your variables and write an equation for each plan.</li>
    <li>Make a table of costs for at least six values of the variable.</li>
    <li>Graph both equations on the same axes, with labeled axes and a key.</li>
    <li>Solve an equation to find where the plans cost the same, showing every step.</li>
    <li>Interpret the result: which plan is better for light use and which for heavy use?</li>
    <li>Write a short recommendation (100–150 words) with your evidence.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your equations with defined variables</li>
    <li>Your table and graph</li>
    <li>Your algebraic solution for the break-even point, with a check</li>
    <li>Your written recommendation</li>
    <li>Your sources</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modeling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate equations with clearly defined variables and units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minor errors in the equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations missing or incorrect</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct solution with every step justified and checked</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct solution with clear steps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors in solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little or no correct work</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Representations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Table and graph are accurate, labeled and consistent</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Table and graph are mostly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Table or graph incomplete</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful recommendation linked to evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear recommendation with evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recommendation with little evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No recommendation</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, organized and precise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat unclear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hard to follow</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use the same variable letters in your equations, table and graph.<br>Label the break-even point on your graph.<br>Check your break-even point in both equations.<br>Consider costs that are not in the equation, such as contract length.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What surprised you about the comparison?</li>
    <li>How did the graph help you explain your recommendation?</li>
    <li>Where else could you use this method?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The break-even point is where:',
            options: ['One plan is free', 'The fee is zero', 'The graph starts', 'Both plans cost the same'],
            correct: 3,
            explanation: 'At break-even the costs are equal.'
        },
        {
            question: 'Your graph should include:',
            options: ['No labels', 'Labeled axes and a key', 'Only one plan', 'Random points'],
            correct: 1,
            explanation: 'The answer is Labeled axes and a key. Labels make a graph readable.'
        },
        {
            question: 'To find the break-even point algebraically, you:',
            options: ['Add the two equations', 'Graph only one equation', 'Guess', 'Set the two cost expressions equal and solve'],
            correct: 3,
            explanation: 'Equal costs mean equal expressions.'
        },
        {
            question: 'Why should you check the break-even point in both equations?',
            options: ['To make the answer longer', 'Because teachers like checks', 'To confirm both give the same cost', 'It changes the answer'],
            correct: 2,
            explanation: 'A correct solution makes both sides equal.'
        },
        {
            question: 'A plan with a higher fee but lower monthly rate is usually better for:',
            options: ['Very short-term use', 'Long-term use', 'Zero months', 'No one'],
            correct: 1,
            explanation: 'The lower rate adds up to savings over time.'
        },
        {
            question: 'Which is NOT required in the hand-in?',
            options: ['A poem about the plans', 'Equations', 'A graph', 'A recommendation'],
            correct: 0,
            explanation: 'The task needs equations, a table, a graph and a recommendation.'
        }
    ]
},
{
    name: '1.1 Review: Expressions and Linear Equations',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Expressions and Linear Equations</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before you move on.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Expressions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Terms, coefficients and constants; the sign belongs to the term.</li>
    <li>Order of operations: P, E, MD, AS.</li>
    <li>Distribute, then combine like terms.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Solving Equations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do the same to both sides.</li>
    <li>Undo operations in reverse order.</li>
    <li>Move the smaller variable term; check in the original.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Special Cases</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Variables cancel and a false statement remains: no solution.</li>
    <li>Variables cancel and a true statement remains: infinitely many solutions.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Literal Equations and Modeling</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Treat other letters like numbers.</li>
    <li>Define → write → solve → interpret.</li>
    <li>Check units.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simplify</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4(2x − 3) − 5x + 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3x − 5</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evaluate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3x² − 2x + 5 for x = −2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">21</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7x − 5 = 3x + 19</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = 6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Special case</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4(x + 2) = 4x + 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No solution</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Literal equation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P = 2l + 2w for l</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">l = (P − 2w)/2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Model</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">$25 + $30 per month = $205</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 months</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Simplify 5 − 2(x + 3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5 − 2x − 6 = −2x − 1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve 3(x − 4) + 5 = 20.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x = 9</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 10 − 3x = 2x − 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">15 = 5x, so x = 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> How many solutions does 2(x − 1) = 2x − 2 have?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Infinitely many.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve C = 2πr for r.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">r = C/(2π)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A phone plan costs $20 plus $5 per GB. The bill is $45. How many GB were used?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">20 + 5g = 45, g = 5 GB</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can simplify expressions.</p>
    <p style="margin:6px 0;">☐ I can solve multi-step equations.</p>
    <p style="margin:6px 0;">☐ I can identify special cases.</p>
    <p style="margin:6px 0;">☐ I can solve literal equations.</p>
    <p style="margin:6px 0;">☐ I can model and interpret real problems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Simplify 7x − 2(x − 1).',
            options: ['5x − 2', '9x − 2', '5x − 1', '5x + 2'],
            correct: 3,
            explanation: 'The answer is 5x + 2. 7x − 2x + 2 = 5x + 2.'
        },
        {
            question: 'Solve 10 − 3x = 2x − 5.',
            options: ['x = −3', 'x = 3', 'x = 1', 'x = 5'],
            correct: 1,
            explanation: 'The answer is x = 3. 15 = 5x, so x = 3.'
        },
        {
            question: 'An equation that simplifies to 0 = 4 has:',
            options: ['Infinitely many solutions', 'No solution', 'One solution, x = 4', 'One solution, x = 0'],
            correct: 1,
            explanation: 'The answer is No solution. 0 = 4 is false.'
        },
        {
            question: 'Solve C = 2πr for r.',
            options: ['r = 2πC', 'r = C − 2π', 'r = 2C/π', 'r = C/(2π)'],
            correct: 3,
            explanation: 'The answer is r = C/(2π). Divide both sides by 2π.'
        },
        {
            question: 'The last step in modeling is to:',
            options: ['Define the variable', 'Write the equation', 'Interpret the answer in context', 'Draw a picture'],
            correct: 2,
            explanation: 'The answer is Interpret the answer in context. Interpret with units.'
        },
        {
            question: 'A phone plan costs $20 plus $5 per GB. A $45 bill means:',
            options: ['5 GB', '9 GB', '13 GB', '4 GB'],
            correct: 0,
            explanation: 'The answer is 5 GB. 5g = 25, g = 5.'
        }
    ]
},
{
    name: '1.1 Summary: Expressions and Linear Equations',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.1 Expressions and Linear Equations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Expressions and Linear Equations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> An equation is a balance: by simplifying and doing the same operation to both sides, we can find unknown values — and by writing equations from real situations, we can answer real questions.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Expressions are built from terms; follow the order of operations to evaluate them.</li>
    <li>The distributive property and combining like terms simplify expressions.</li>
    <li>Solve equations by keeping them balanced and undoing operations in reverse order.</li>
    <li>Equations may have one solution, no solution or infinitely many solutions.</li>
    <li>Literal equations are solved for one variable by treating the others as numbers.</li>
    <li>Modeling means define, write, solve and interpret — with units.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Algebraic Expressions and Properties</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parts of expressions, order of operations, properties, like terms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distribute negatives carefully</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Solving Multi-Step Linear Equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balance method, variables on both sides, special cases</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check in the original equation</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Literal Equations and Modeling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rearranging formulas, word problems, units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Define your variable with units</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">variable</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">coefficient</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">constant</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">term</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">like terms</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">distributive property</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">equation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">solution</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inverse operations</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">identity</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">literal equation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">formula</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">model</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">unit analysis</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Comparing plans, planning a budget, converting units and estimating travel time all use the equation skills from this topic.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will move from equations to inequalities — statements such as “at least,” “no more than” and “between” — which describe limits like budgets and speed limits.</div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can simplify and evaluate expressions.</p>
    <p style="margin:6px 0;">✔️ I can solve multi-step linear equations.</p>
    <p style="margin:6px 0;">✔️ I can recognize equations with no solution or infinitely many solutions.</p>
    <p style="margin:6px 0;">✔️ I can rearrange formulas.</p>
    <p style="margin:6px 0;">✔️ I can write and solve equations that model real situations.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that an equation is like:',
            options: ['A circle', 'A list', 'A balance', 'A number line'],
            correct: 2,
            explanation: 'The answer is A balance. Both sides stay equal.'
        },
        {
            question: 'Which type of equation is always true?',
            options: ['An equation with no solution', 'A literal equation', 'A false equation', 'An identity'],
            correct: 3,
            explanation: 'An identity holds for all values.'
        },
        {
            question: 'Topic 1.2 will study:',
            options: ['Quadratics', 'Exponents', 'Probability', 'Inequalities'],
            correct: 3,
            explanation: 'Topic 1.2 is about inequalities.'
        },
        {
            question: 'Which step comes first in modeling?',
            options: ['Interpret the answer', 'Check units', 'Define the variable', 'Solve'],
            correct: 2,
            explanation: 'The answer is Define the variable. Define before writing.'
        },
        {
            question: 'Combining like terms means:',
            options: ['Adding coefficients of terms with the same variable part', 'Multiplying all terms', 'Removing variables', 'Adding exponents'],
            correct: 0,
            explanation: 'The answer is Adding coefficients of terms with the same variable part. 3x + 4x = 7x.'
        },
        {
            question: 'Which is a literal equation?',
            options: ['A = lw', '3 + 4 = 7', '5x = 10', '2 = 2'],
            correct: 0,
            explanation: 'It has more than one variable.'
        }
    ]
},
{
    name: '1.2.1 Writing and Graphing Inequalities',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Budgets and Limits</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Writing and Graphing Inequalities</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn the four inequality symbols, translate phrases such as “at least” and “no more than” into inequalities, test whether a value is a solution, and graph inequalities on a number line.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Many real rules are limits, not exact values: a minimum age, a maximum weight, a budget you must not exceed. Inequalities are the language of limits.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Speed limits</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎢 Ride height rules</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛗 Elevator weight limits</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💳 Budgets</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Minimum GPA</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Safe temperature ranges</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write inequalities from words and graph them on a number line. (A-CED.1)</li>
    <li>Solve multi-step linear inequalities, reversing the sign when multiplying or dividing by a negative. (A-REI.3)</li>
    <li>Solve and graph compound inequalities. (A-REI.3)</li>
    <li>Represent constraints with inequalities and decide whether solutions are viable. (A-CED.3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Read and write the symbols &lt;, &gt;, ≤ and ≥.</li>
    <li>Translate verbal phrases into inequalities.</li>
    <li>Test whether a value is a solution.</li>
    <li>Graph an inequality on a number line using open and closed circles.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do we describe a whole range of values instead of just one?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Topic 1.1 you solved equations with exactly one solution. An inequality usually has infinitely many solutions.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A roller coaster sign says riders must be at least 48 inches tall. A rider who is 48 inches can ride; so can one who is 52 or 60 inches. We write this as <strong>h ≥ 48</strong>. Unlike an equation, this inequality has infinitely many solutions.</p>
    <p>An <strong>inequality</strong> compares two expressions using &lt; (less than), &gt; (greater than), ≤ (less than or equal to) or ≥ (greater than or equal to). Its <strong>solution set</strong> is all values that make it true.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>An equation points to one spot. An inequality shades a whole region.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The symbols &lt; and &gt; were introduced by the English mathematician Thomas Harriot in a book published in 1631, after his death. The symbols ≤ and ≥ came later. A simple memory aid: the symbol always “opens” toward the larger quantity, so 3 &lt; 8 and 8 &gt; 3 say the same thing.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">inequality</strong>
    </p>
    <p style="margin:6px 0;">A statement that compares two expressions that may not be equal.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> &lt;, &gt;, ≤, ≥</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>h ≥ 48</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">solution set</strong>
    </p>
    <p style="margin:6px 0;">All values of the variable that make an inequality true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> {x | x ≥ 2}</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Every number from 2 upward.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">open circle</strong>
    </p>
    <p style="margin:6px 0;">A circle on a number line showing the endpoint is NOT included.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> &lt; or &gt;</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x &gt; 2 has an open circle at 2.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">closed circle</strong>
    </p>
    <p style="margin:6px 0;">A filled circle showing the endpoint IS included.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ≤ or ≥</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x ≤ −1 has a closed circle at −1.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">at least</strong>
    </p>
    <p style="margin:6px 0;">Greater than or equal to — a minimum.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ≥</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>At least 16 years old: a ≥ 16.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">at most</strong>
    </p>
    <p style="margin:6px 0;">Less than or equal to — a maximum.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ≤</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>At most 2,000 lb: w ≤ 2,000.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. From Words to Symbols</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Words</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Symbol</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">is less than, fewer than, below</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">&lt;</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">fewer than 30 students: s &lt; 30</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">is greater than, more than, above, exceeds</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">&gt;</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">more than 10 points: p &gt; 10</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">at most, no more than, maximum, does not exceed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">≤</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">no more than $50: c ≤ 50</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">at least, no less than, minimum</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">≥</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">at least 8 hours of sleep: h ≥ 8</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>“No more than” means ≤, not &gt;. Ask: is the boundary value allowed? If a $50 limit allows exactly $50, use ≤.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Writing an inequality</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> An elevator can carry at most 2,000 pounds. Write an inequality for the total weight w.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Find the key phrase</strong>
    </p>
    <div style="margin:6px 0 0 34px;">“at most” — a maximum</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Choose the symbol</strong>
    </p>
    <div style="margin:6px 0 0 34px;">≤, because exactly 2,000 lb is allowed</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Write</strong>
    </p>
    <div style="margin:6px 0 0 34px;">w ≤ 2,000</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> w ≤ 2,000</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Testing Solutions</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Is it a solution?</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Is x = −2 a solution of 3x + 1 &lt; −4?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Substitute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3(−2) + 1 &lt; −4</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Simplify the left side</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−5 &lt; −4</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Decide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−5 is to the left of −4 on the number line, so the statement is true.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Yes, x = −2 is a solution.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Thinking −5 &gt; −4 because 5 &gt; 4. With negatives, the number farther left is smaller.</p>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>An inequality can have infinitely many solutions. Testing one value only tells you about that value.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Graphing on a Number Line</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 164" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="28" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">x &gt; 2</text><line x1="40" y1="80" x2="660" y2="80" stroke="#94a3b8" stroke-width="2"/><polygon points="672,80 660,73 660,87" fill="#94a3b8"/><polygon points="28,80 40,73 40,87" fill="#94a3b8"/><line x1="70" y1="72" x2="70" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="70" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-6</text><line x1="117" y1="72" x2="117" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="117" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-5</text><line x1="164" y1="72" x2="164" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="164" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-4</text><line x1="211" y1="72" x2="211" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="211" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-3</text><line x1="258" y1="72" x2="258" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="258" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-2</text><line x1="305" y1="72" x2="305" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="305" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-1</text><line x1="352" y1="72" x2="352" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="352" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">0</text><line x1="399" y1="72" x2="399" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="399" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">1</text><line x1="446" y1="72" x2="446" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="446" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">2</text><line x1="493" y1="72" x2="493" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="493" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><line x1="540" y1="72" x2="540" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="540" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">4</text><line x1="587" y1="72" x2="587" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="587" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">5</text><line x1="634" y1="72" x2="634" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="634" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">6</text><line x1="446" y1="80" x2="648" y2="80" stroke="#fde68a" stroke-width="6"/><circle cx="446" cy="80" r="8" fill="#0f172a" stroke="#fde68a" stroke-width="3"/><polygon points="660,80 648,73 648,87" fill="#fde68a"/><text x="350" y="146" fill="#86efac" font-size="14" text-anchor="middle">Open circle: 2 is NOT included. Shade to the right (greater).</text>
    </svg>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 164" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="28" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">x ≤ −1</text><line x1="40" y1="80" x2="660" y2="80" stroke="#94a3b8" stroke-width="2"/><polygon points="672,80 660,73 660,87" fill="#94a3b8"/><polygon points="28,80 40,73 40,87" fill="#94a3b8"/><line x1="70" y1="72" x2="70" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="70" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-6</text><line x1="117" y1="72" x2="117" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="117" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-5</text><line x1="164" y1="72" x2="164" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="164" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-4</text><line x1="211" y1="72" x2="211" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="211" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-3</text><line x1="258" y1="72" x2="258" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="258" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-2</text><line x1="305" y1="72" x2="305" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="305" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-1</text><line x1="352" y1="72" x2="352" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="352" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">0</text><line x1="399" y1="72" x2="399" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="399" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">1</text><line x1="446" y1="72" x2="446" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="446" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">2</text><line x1="493" y1="72" x2="493" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="493" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><line x1="540" y1="72" x2="540" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="540" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">4</text><line x1="587" y1="72" x2="587" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="587" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">5</text><line x1="634" y1="72" x2="634" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="634" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">6</text><line x1="52" y1="80" x2="305" y2="80" stroke="#fde68a" stroke-width="6"/><polygon points="40,80 52,73 52,87" fill="#fde68a"/><circle cx="305" cy="80" r="8" fill="#fde68a" stroke="#fde68a" stroke-width="3"/><text x="350" y="146" fill="#86efac" font-size="14" text-anchor="middle">Closed circle: −1 IS included. Shade to the left (less).</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inequality</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Circle</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Direction</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x &gt; a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Open at a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≥ a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Closed at a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x &lt; a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Open at a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Left</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≤ a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Closed at a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Left</td>
    </tr>
    </table>
    </div>
    <div style="background:#241338;border-left:4px solid #ff9800;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">⚡ Quick Trick</p>
    <div>Write the variable on the left first. Then the symbol points the way to shade: x &gt; 2 “points” right, x &lt; 2 “points” left. If you see 5 ≥ x, rewrite it as x ≤ 5.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Write an inequality: a number n is greater than 7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">n &gt; 7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Describe the graph of x ≤ 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A closed circle at 3 with shading to the left.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A number line has a closed circle at −1 and shading to the right. Write the inequality.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≥ −1</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP2 Reason abstractly</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP4 Model limits</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Choose the correct symbol</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graphing on a number line</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Testing values</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Two decisions control every graph: whether the endpoint is included (open or closed circle) and which way to shade. Check both with a test value: pick a number in your shaded region and make sure it makes the inequality true.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student graphs x &gt; −3 with a closed circle at −3, shading right. What is wrong? <em>Answer: &gt; does not include −3, so the circle must be open.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #b39ddb;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Height rules for rides, age limits for driving and voting, and minimum test scores for college programs are all inequalities.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Environmental rules set limits such as a maximum amount of a pollutant in drinking water — an “at most” inequality.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Engineers write load limits, pharmacists check maximum safe doses and businesses set minimum stock levels using inequalities.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Translate: fewer than 25 people.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Is 25 itself allowed?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">p &lt; 25</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Translate: at least 3 servings of vegetables.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: “At least” is a minimum.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">v ≥ 3</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Rewrite 5 ≥ x with x on the left.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Flip the whole statement, so the symbol turns around.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≤ 5</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find five signs or rules in your community or online that describe limits. Write each as an inequality.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner says a real-life limit; the other writes and graphs the inequality. Switch after five turns.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Human number line: students stand on a number line taped to the floor. When an inequality is called out, everyone in the solution set steps forward.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Type an inequality such as x ≥ −1 into a graphing tool such as Desmos and compare its shading with your hand-drawn number line.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write an inequality: a number is greater than 7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">n &gt; 7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe the graph of x ≤ 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Closed circle at 3, shaded to the left.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Is −2 a solution of 3x + 1 &lt; −4?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Yes: 3(−2) + 1 = −5, and −5 &lt; −4.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Write the inequality for a closed circle at −1 with shading to the right.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≥ −1</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #b39ddb;">
    <p style="margin:0 0 6px 0;color:#b39ddb;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why x &gt; 4 and 4 &lt; x describe the same set.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Both say x is to the right of 4; reading the second from right to left gives x greater than 4.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A highway speed limit is 65 mph, and the minimum is 40 mph. Write two inequalities for the speed s.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">s ≤ 65 and s ≥ 40</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A-CED.1: A recipe needs at least 2 cups of flour, and you have 5 cups. Write an inequality for the flour f you can use, and state its range.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">f ≥ 2 and f ≤ 5, so the usable amount is from 2 to 5 cups.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>An inequality compares expressions using &lt;, &gt;, ≤ or ≥ and usually has infinitely many solutions. Translate key phrases carefully (“at least” is ≥, “at most” is ≤). On a number line, use an open circle for &lt; or &gt; and a closed circle for ≤ or ≥, then shade toward the solutions.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>At least = ≥; at most = ≤.</li>
    <li>Open circle for &lt; and &gt;; closed for ≤ and ≥.</li>
    <li>Write the variable on the left before graphing.</li>
    <li>Test a value from the shaded region.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Inequalities have solution sets, not single answers.</li>
    <li>With negatives, farther left is smaller.</li>
    <li>The symbol opens toward the larger value.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Using the wrong circle.</li>
    <li>Shading the wrong way when the variable is on the right.</li>
    <li>Confusing “no more than” with &gt;.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Underline the key phrase in word problems.</li>
    <li>Ask: is the boundary allowed?</li>
    <li>Check with a test point.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the circle type clearly.</li>
    <li>Label at least three numbers on your number line.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP4 Modeling</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing limits as inequalities.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing open or closed circles.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP3 Arguments</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Justifying a solution with a test point.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety awareness</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety rules</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Personal finance</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every time you check a limit — a budget, a speed or an age requirement — you are using an inequality.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write and graph ten inequalities from real situations.</li>
    <li>Test two values in each of three inequalities.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which phrases do I confuse most often?</li>
    <li>Can I explain the difference between open and closed circles?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Inequality</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A comparison using a symbol other than =.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Solution set</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All values that make it true.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Open circle</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Endpoint not included.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Closed circle</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Endpoint included.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can read and write inequality symbols.</p>
    <p style="margin:6px 0;">☐ I can translate words into inequalities.</p>
    <p style="margin:6px 0;">☐ I can test values.</p>
    <p style="margin:6px 0;">☐ I can graph inequalities on a number line.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '“At least 16 years old” is written as:',
            options: ['a ≥ 16', 'a ≤ 16', 'a = 16', 'a ≠ 16'],
            correct: 0,
            explanation: '“At least” is a minimum, so ≥.'
        },
        {
            question: '“No more than $50” is written as:',
            options: ['c ≥ 50', 'c ≤ 50', 'c = 50', 'c ≠ 50'],
            correct: 1,
            explanation: '“No more than” is a maximum, so ≤.'
        },
        {
            question: 'A closed circle on a number line means:',
            options: ['The endpoint is not included', 'There is no solution', 'The endpoint is included', 'Shade both ways'],
            correct: 2,
            explanation: 'Closed circles are used for ≤ and ≥.'
        },
        {
            question: 'The graph of x ≤ 3 has:',
            options: ['An open circle at 3, shaded left', 'A closed circle at 3, shaded right', 'An open circle at 3, shaded right', 'A closed circle at 3, shaded left'],
            correct: 3,
            explanation: 'Included endpoint, values less than 3.'
        },
        {
            question: 'Which value is a solution of x ≥ −1?',
            options: ['0', '−2', '−5', '−1.5'],
            correct: 0,
            explanation: 'The answer is 0. 0 is greater than −1.'
        },
        {
            question: 'Rewrite 5 ≥ x with x first.',
            options: ['x ≤ 5', 'x ≥ 5', 'x = 5', '5 ≤ x'],
            correct: 0,
            explanation: 'Reading backward reverses the symbol.'
        },
        {
            question: 'How many solutions does x ≥ 2 have?',
            options: ['One', 'Two', 'None', 'Infinitely many'],
            correct: 3,
            explanation: 'Every number from 2 upward works.'
        },
        {
            question: 'Is −2 a solution of 3x + 1 ≤ −4?',
            options: ['No, because −5 is greater than −4', 'No, because −7 ≤ −4 is false', 'Yes, because −5 ≤ −4', 'Yes, because 7 ≤ 4'],
            correct: 2,
            explanation: '3(−2) + 1 = −5, which is less than −4.'
        },
        {
            question: 'An elevator holds at most 2,000 lb. The inequality is:',
            options: ['w ≥ 2,000', 'w = 2,000', 'w ≤ 2,000', 'w ≤ 200'],
            correct: 2,
            explanation: 'The answer is w ≤ 2,000. “At most” means ≤.'
        },
        {
            question: 'A closed circle at −1 with shading to the right shows:',
            options: ['x ≤ −1', 'x ≥ −1', 'x = −1', 'x ≥ 1'],
            correct: 1,
            explanation: 'Included endpoint, values greater than −1.'
        }
    ]
},
{
    name: '1.2.2 Solving Multi-Step Inequalities',
    type: 'lesson',
    duration: '55 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Budgets and Limits</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Solving Multi-Step Inequalities</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will solve inequalities using the same steps as equations, learn why the sign must be reversed when you multiply or divide by a negative number, and recognize inequalities with no solution or all real numbers as solutions.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Inequalities answer questions such as “How many can I buy?” and “How long can I wait?” — the kind of decisions you make with a budget or a deadline.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛍️ How many items you can afford</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Data limits</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⏱️ Time limits</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏆 Points needed to win</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💵 Minimum hours to work</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚌 Seats on a bus</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write inequalities from words and graph them on a number line. (A-CED.1)</li>
    <li>Solve multi-step linear inequalities, reversing the sign when multiplying or dividing by a negative. (A-REI.3)</li>
    <li>Solve and graph compound inequalities. (A-REI.3)</li>
    <li>Represent constraints with inequalities and decide whether solutions are viable. (A-CED.3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Solve one-step and multi-step inequalities.</li>
    <li>Reverse the inequality sign when multiplying or dividing by a negative.</li>
    <li>Solve inequalities with variables on both sides.</li>
    <li>Identify inequalities with no solution or all real numbers as solutions.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How is solving an inequality like solving an equation — and how is it different?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> You can solve multi-step equations (Lesson 1.1.2) and graph inequalities (Lesson 1.2.1).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Solving an inequality is almost exactly like solving an equation: you use inverse operations and do the same thing to both sides. There is one important difference. Start with a true statement: 2 &lt; 5. Multiply both sides by −1 and you get −2 and −5. But −2 is <em>greater</em> than −5. To keep the statement true, the sign must flip: −2 &gt; −5.</p>
    <p>So whenever you <strong>multiply or divide both sides by a negative number</strong>, you must <strong>reverse the inequality sign</strong>. Adding or subtracting — even a negative number — never changes the sign.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Same steps as equations. Negative multiply or divide? Flip the sign.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>The rule comes from the number line. Multiplying by −1 reflects every number across 0, so the order of numbers reverses: what was on the left is now on the right. That is why the inequality symbol must turn around too.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">reverse the inequality</strong>
    </p>
    <p style="margin:6px 0;">Change the direction of the inequality symbol.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> &lt; becomes &gt;; ≤ becomes ≥</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>−2x ≥ 8 becomes x ≤ −4.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">equivalent inequalities</strong>
    </p>
    <p style="margin:6px 0;">Inequalities with the same solution set.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>3x ≤ 15 and x ≤ 5 are equivalent.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">all real numbers</strong>
    </p>
    <p style="margin:6px 0;">Every number is a solution.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ℝ</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>3x + 1 &lt; 3x + 4 is always true.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">no solution</strong>
    </p>
    <p style="margin:6px 0;">No number makes the inequality true.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∅</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>2x + 2 &gt; 2x + 5 is never true.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">boundary point</strong>
    </p>
    <p style="margin:6px 0;">The value where the inequality would be an equation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> x = 5 in x ≤ 5</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Solve the related equation to find it.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">test point</strong>
    </p>
    <p style="margin:6px 0;">A value used to check which side of the boundary is the solution.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Try x = 0 when possible.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Solving Like an Equation</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: A two-step inequality</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve 3x − 4 ≤ 11 and graph the solution.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Add 4 to both sides</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x ≤ 15</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide both sides by 3 (positive, so no flip)</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x ≤ 5</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check with x = 0</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3(0) − 4 = −4, and −4 ≤ 11 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x ≤ 5: closed circle at 5, shaded left.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Variables on both sides</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve 5x − 2 ≥ 3x + 8.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 3x</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x − 2 ≥ 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Add 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x ≥ 10</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Divide by 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x ≥ 5</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x ≥ 5</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. The Negative Rule</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Start</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Operation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Still true?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 &lt; 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add −3 to both sides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−1 &lt; 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes — no flip needed</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 &lt; 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply both sides by 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 &lt; 15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes — no flip needed</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 &lt; 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply both sides by −1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 &gt; −5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Only if the sign is flipped</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Dividing by a negative</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve −2x + 3 &gt; 11 and graph the solution.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−2x &gt; 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide by −2 and FLIP the sign</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x &lt; −4</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check with x = −5</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−2(−5) + 3 = 13, and 13 &gt; 11 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x &lt; −4</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Forgetting to flip and writing x &gt; −4. A quick test point catches this: x = 0 gives 3 &gt; 11, which is false.</p>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 164" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="28" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">x &lt; −4</text><line x1="40" y1="80" x2="660" y2="80" stroke="#94a3b8" stroke-width="2"/><polygon points="672,80 660,73 660,87" fill="#94a3b8"/><polygon points="28,80 40,73 40,87" fill="#94a3b8"/><line x1="70" y1="72" x2="70" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="70" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-6</text><line x1="117" y1="72" x2="117" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="117" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-5</text><line x1="164" y1="72" x2="164" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="164" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-4</text><line x1="211" y1="72" x2="211" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="211" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-3</text><line x1="258" y1="72" x2="258" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="258" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-2</text><line x1="305" y1="72" x2="305" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="305" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-1</text><line x1="352" y1="72" x2="352" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="352" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">0</text><line x1="399" y1="72" x2="399" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="399" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">1</text><line x1="446" y1="72" x2="446" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="446" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">2</text><line x1="493" y1="72" x2="493" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="493" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><line x1="540" y1="72" x2="540" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="540" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">4</text><line x1="587" y1="72" x2="587" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="587" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">5</text><line x1="634" y1="72" x2="634" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="634" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">6</text><line x1="52" y1="80" x2="164" y2="80" stroke="#fde68a" stroke-width="6"/><polygon points="40,80 52,73 52,87" fill="#fde68a"/><circle cx="164" cy="80" r="8" fill="#0f172a" stroke="#fde68a" stroke-width="3"/><text x="350" y="146" fill="#86efac" font-size="14" text-anchor="middle">Dividing by −2 reversed the sign: the solution is x less than −4.</text>
    </svg>
    </div>
    <div style="background:#241338;border-left:4px solid #ff9800;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">⚡ Quick Trick</p>
    <div>To avoid dividing by a negative, move the variable term to the side where its coefficient stays positive: 4 − 3x ≤ 2x − 11 becomes 15 ≤ 5x, so x ≥ 3.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Special Cases</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inequality</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">After simplifying</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2(x + 1) &gt; 2x + 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 &gt; 5 (false)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No solution</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3x + 1 &lt; 3x + 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 &lt; 4 (true)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All real numbers</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve x − 6 ≥ 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≥ 8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve −3x ≤ 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≥ −4 (divide by −3 and flip)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Solve 4 − 3x ≤ 2x − 11.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">15 ≤ 5x, so x ≥ 3</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP3 Justify the sign flip</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Track signs precisely</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP7 See equations and inequalities as related</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Test points</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graphing solutions</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>The most common error in this topic is forgetting to flip the sign. Build a habit: every time you divide or multiply by a negative, circle it and flip immediately. Then check with a test point from your solution set — if the original inequality is false for that value, something went wrong.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student solves x/(−2) ≥ 3 and writes x ≥ −6. What is wrong? <em>Answer: multiplying by −2 requires a flip: x ≤ −6. Test x = −8: −8 ÷ −2 = 4, and 4 ≥ 3 ✓.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #b39ddb;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> You have $60. Shirts cost $14 each with a $4 shipping fee. Solving 14s + 4 ≤ 60 gives s ≤ 4, so you can buy at most 4 shirts.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> A town wants to keep daily water use at or below a limit. Inequalities show how many gallons each household can use.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Factories use inequalities to make sure production costs stay below selling prices so they earn a profit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Solve 4x &lt; 20.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Divide by a positive number — no flip.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x &lt; 5</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Solve 2(x − 3) ≥ 10.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Divide both sides by 2 first.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x − 3 ≥ 5, so x ≥ 8</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Solve x/(−2) ≥ 3.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Multiply by −2 and flip.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≤ −6</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Solve eight inequalities. Circle every step where you multiplied or divided by a negative, and check each answer with a test point.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Flip or not? One partner calls out an operation (“divide by −4”, “subtract 9”); the other says whether to flip the sign and why.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Each group writes a budget problem that needs an inequality, then trades with another group to solve it.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Graph y = −2x + 3 and y = 11 in Desmos. Find where the line is above 11 and compare it with your algebraic solution.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve x − 6 ≥ 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≥ 8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve 4x &lt; 20.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x &lt; 5</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve −3x ≤ 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≥ −4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve 2(x − 3) &gt; 10.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x − 3 &gt; 5, so x &gt; 8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve x/(−2) ≥ 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≤ −6</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #b39ddb;">
    <p style="margin:0 0 6px 0;color:#b39ddb;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve 7 − 2x &gt; 3(x − 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">7 − 2x &gt; 3x − 3, so 10 &gt; 5x, and x &lt; 2</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> You have $60. Shirts cost $14 each plus a $4 shipping fee. How many shirts can you buy?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">14s + 4 ≤ 60, 14s ≤ 56, s ≤ 4 — at most 4 shirts.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A-REI.3: Solve −5x + 2 ≥ 17 and justify the step where the sign changes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−5x ≥ 15; dividing by −5 reverses the order of numbers, so x ≤ −3.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Solve inequalities with the same steps as equations. Adding or subtracting never changes the sign, but multiplying or dividing both sides by a negative number reverses it. Check the solution with a test point. If the variable disappears, a false statement means no solution and a true one means all real numbers.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Same steps as equations.</li>
    <li>Multiply or divide by a negative → flip.</li>
    <li>Check with a test point.</li>
    <li>False statement = no solution; true = all real numbers.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Subtracting a negative does not flip the sign.</li>
    <li>Keep the variable coefficient positive to avoid flips.</li>
    <li>Graph the final answer.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to flip.</li>
    <li>Flipping when adding or subtracting.</li>
    <li>Checking with the boundary value only.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Circle negative divisors.</li>
    <li>Use x = 0 as a test point when it is not the boundary.</li>
    <li>Rewrite with the variable on the left at the end.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the step where you flip.</li>
    <li>Write the solution and graph it.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining why the sign flips.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tracking signs and circle types.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP4 Modeling</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Answering “how many” questions.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility with money</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perseverance</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Personal finance</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Decision-making</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Inequalities tell you the most you can spend, the fewest hours you must work or the longest you can wait.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve the ten assigned inequalities and graph each one.</li>
    <li>Write one inequality with no solution and one with all real numbers as solutions.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I remember to flip the sign every time?</li>
    <li>How does a test point help me?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Reverse the inequality</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turn the symbol around.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Boundary point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Where the two sides are equal.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Test point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A value used to check the solution.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">All real numbers</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every number works.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can solve multi-step inequalities.</p>
    <p style="margin:6px 0;">☐ I can explain when to flip the sign.</p>
    <p style="margin:6px 0;">☐ I can solve inequalities with variables on both sides.</p>
    <p style="margin:6px 0;">☐ I can identify the special cases.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Solve x + 5 ≥ 12.',
            options: ['x ≥ 7', 'x ≤ 7', 'x ≥ 17', 'x ≤ 17'],
            correct: 0,
            explanation: 'The answer is x ≥ 7. Subtract 5 from both sides.'
        },
        {
            question: 'Solve 3x − 4 ≤ 11.',
            options: ['x ≥ 5', 'x ≤ 2.3', 'x ≤ 5', 'x ≥ 2.3'],
            correct: 2,
            explanation: 'The answer is x ≤ 5. 3x ≤ 15, so x ≤ 5.'
        },
        {
            question: 'When must you reverse the inequality sign?',
            options: ['When adding a negative', 'When subtracting any number', 'Always', 'When multiplying or dividing by a negative'],
            correct: 3,
            explanation: 'Only negative multiplication or division flips the sign.'
        },
        {
            question: 'Solve −2x ≥ 8.',
            options: ['x ≥ −4', 'x ≤ 4', 'x ≤ −4', 'x ≥ 4'],
            correct: 2,
            explanation: 'The answer is x ≤ −4. Divide by −2 and flip.'
        },
        {
            question: 'Solve 5x − 2 ≥ 3x + 8.',
            options: ['x ≤ 5', 'x ≥ 5', 'x ≥ 3', 'x ≥ 1.25'],
            correct: 1,
            explanation: 'The answer is x ≥ 5. 2x ≥ 10, so x ≥ 5.'
        },
        {
            question: 'Solve −3x ≤ 12.',
            options: ['x ≤ −4', 'x ≥ −4', 'x ≥ 4', 'x ≤ 4'],
            correct: 1,
            explanation: 'The answer is x ≥ −4. Divide by −3 and flip.'
        },
        {
            question: '3x + 1 ≤ 3x + 4 has:',
            options: ['No solution', 'One solution', 'Two solutions', 'All real numbers as solutions'],
            correct: 3,
            explanation: 'It simplifies to 1 ≤ 4, which is always true.'
        },
        {
            question: '2(x + 1) ≥ 2x + 5 has:',
            options: ['All real numbers as solutions', 'x ≥ 3', 'x ≥ 1.5', 'No solution'],
            correct: 3,
            explanation: 'It simplifies to 2 ≥ 5, which is false.'
        },
        {
            question: 'Solve x/(−2) ≥ 3.',
            options: ['x ≥ −6', 'x ≤ −1.5', 'x ≤ −6', 'x ≥ 6'],
            correct: 2,
            explanation: 'The answer is x ≤ −6. Multiply by −2 and flip.'
        },
        {
            question: 'You have $60; shirts cost $14 each plus $4 shipping. The most you can buy is:',
            options: ['5 shirts', '4 shirts', '3 shirts', '4.6 shirts'],
            correct: 1,
            explanation: 'The answer is 4 shirts. 14s + 4 ≤ 60 gives s ≤ 4.'
        }
    ]
},
{
    name: '1.2.3 Compound Inequalities and Constraints',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Budgets and Limits</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Compound Inequalities and Constraints</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will solve and graph compound inequalities joined by “and” or “or,” and use inequalities to model real constraints, deciding which solutions make sense.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Real limits often come in pairs — a minimum and a maximum. Compound inequalities describe ranges such as safe temperatures, healthy heart rates and allowed group sizes.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌡️ Safe temperature ranges</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏊 Pool chemistry</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎟️ Group sizes</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">❤️ Target heart rates</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Lab measurements</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎛️ Machine tolerances</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write inequalities from words and graph them on a number line. (A-CED.1)</li>
    <li>Solve multi-step linear inequalities, reversing the sign when multiplying or dividing by a negative. (A-REI.3)</li>
    <li>Solve and graph compound inequalities. (A-REI.3)</li>
    <li>Represent constraints with inequalities and decide whether solutions are viable. (A-CED.3)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish “and” from “or” compound inequalities.</li>
    <li>Solve and graph compound inequalities.</li>
    <li>Write inequalities that represent constraints in a real situation.</li>
    <li>Decide whether solutions are viable in context.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do we describe values that must stay between two limits?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> You can solve multi-step inequalities and graph them on a number line (Lessons 1.2.1 and 1.2.2).</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A pool must be kept between 78°F and 82°F. The temperature t must be at least 78 <em>and</em> at most 82. We write this as one statement: <strong>78 ≤ t ≤ 82</strong>. This is a <strong>compound inequality</strong> — two inequalities joined together.</p>
    <p>An <strong>“and”</strong> inequality is true only where <em>both</em> parts are true — the overlap, or <strong>intersection</strong>. An <strong>“or”</strong> inequality is true where <em>at least one</em> part is true — the <strong>union</strong>. For example, a store might charge a discount for customers younger than 12 or at least 65: a &lt; 12 or a ≥ 65.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>“And” = between (the overlap). “Or” = outside (either piece).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Where This Comes From</h3>
    <p>In real problems, solutions must also make sense. If n is the number of students on a bus, n must be a whole number and cannot be negative. Standard A-CED.3 calls solutions that make sense <strong>viable</strong> and those that do not <strong>non-viable</strong>. Always check the context after you solve.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and its notation. Use the example to see it in action.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">compound inequality</strong>
    </p>
    <p style="margin:6px 0;">Two inequalities joined by “and” or “or.”</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> −2 ≤ x ≤ 4</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The pool temperature 78 ≤ t ≤ 82.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">intersection</strong>
    </p>
    <p style="margin:6px 0;">The values that satisfy both inequalities (“and”).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∩</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The overlap of x ≥ −2 and x ≤ 4.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">union</strong>
    </p>
    <p style="margin:6px 0;">The values that satisfy at least one inequality (“or”).</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ∪</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x &lt; −2 or x ≥ 4.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">constraint</strong>
    </p>
    <p style="margin:6px 0;">A limit or condition in a real situation.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> ≤, ≥</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A bus holds at most 52 people.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">viable solution</strong>
    </p>
    <p style="margin:6px 0;">A solution that makes sense in the context.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> —</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>30 students is viable; 30.5 is not.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #b39ddb;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">range</strong>
    </p>
    <p style="margin:6px 0;">The set of values between a minimum and a maximum.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">🔣 Notation:</span> a ≤ x ≤ b</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A safe range of 78 to 82°F.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. “And” Inequalities</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 164" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="28" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">−2 ≤ x ≤ 4</text><line x1="40" y1="80" x2="660" y2="80" stroke="#94a3b8" stroke-width="2"/><polygon points="672,80 660,73 660,87" fill="#94a3b8"/><polygon points="28,80 40,73 40,87" fill="#94a3b8"/><line x1="70" y1="72" x2="70" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="70" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-6</text><line x1="117" y1="72" x2="117" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="117" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-5</text><line x1="164" y1="72" x2="164" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="164" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-4</text><line x1="211" y1="72" x2="211" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="211" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-3</text><line x1="258" y1="72" x2="258" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="258" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-2</text><line x1="305" y1="72" x2="305" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="305" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-1</text><line x1="352" y1="72" x2="352" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="352" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">0</text><line x1="399" y1="72" x2="399" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="399" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">1</text><line x1="446" y1="72" x2="446" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="446" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">2</text><line x1="493" y1="72" x2="493" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="493" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><line x1="540" y1="72" x2="540" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="540" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">4</text><line x1="587" y1="72" x2="587" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="587" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">5</text><line x1="634" y1="72" x2="634" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="634" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">6</text><line x1="258" y1="80" x2="540" y2="80" stroke="#fde68a" stroke-width="6"/><circle cx="258" cy="80" r="8" fill="#fde68a" stroke="#fde68a" stroke-width="3"/><circle cx="540" cy="80" r="8" fill="#fde68a" stroke="#fde68a" stroke-width="3"/><text x="350" y="146" fill="#86efac" font-size="14" text-anchor="middle">“And”: the overlap — every number between −2 and 4, including both.</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Solving a three-part inequality</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve −3 ≤ 2x + 1 ≤ 9 and graph the solution.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Do the same operation to all three parts at once.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 1 from all three parts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−4 ≤ 2x ≤ 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide all three parts by 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−2 ≤ x ≤ 4</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check x = 0</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−3 ≤ 1 ≤ 9 ✓</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> −2 ≤ x ≤ 4: closed circles at −2 and 4 with shading between them.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: A three-part inequality with a negative</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve −7 ≤ −3x + 2 ≤ 11.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Subtract 2 from all parts</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−9 ≤ −3x ≤ 9</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Divide all parts by −3 and flip BOTH signs</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3 ≥ x ≥ −3</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Rewrite from least to greatest</strong>
    </p>
    <div style="margin:6px 0 0 34px;">−3 ≤ x ≤ 3</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> −3 ≤ x ≤ 3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Flipping only one of the two signs. Both must reverse.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. “Or” Inequalities</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 164" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="28" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">x &lt; −2  or  x ≥ 4</text><line x1="40" y1="80" x2="660" y2="80" stroke="#94a3b8" stroke-width="2"/><polygon points="672,80 660,73 660,87" fill="#94a3b8"/><polygon points="28,80 40,73 40,87" fill="#94a3b8"/><line x1="70" y1="72" x2="70" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="70" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-6</text><line x1="117" y1="72" x2="117" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="117" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-5</text><line x1="164" y1="72" x2="164" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="164" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-4</text><line x1="211" y1="72" x2="211" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="211" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-3</text><line x1="258" y1="72" x2="258" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="258" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-2</text><line x1="305" y1="72" x2="305" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="305" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">-1</text><line x1="352" y1="72" x2="352" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="352" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">0</text><line x1="399" y1="72" x2="399" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="399" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">1</text><line x1="446" y1="72" x2="446" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="446" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">2</text><line x1="493" y1="72" x2="493" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="493" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><line x1="540" y1="72" x2="540" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="540" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">4</text><line x1="587" y1="72" x2="587" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="587" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">5</text><line x1="634" y1="72" x2="634" y2="88" stroke="#94a3b8" stroke-width="2"/><text x="634" y="110" fill="#cbd5e1" font-size="13" text-anchor="middle">6</text><line x1="52" y1="80" x2="258" y2="80" stroke="#fde68a" stroke-width="6"/><polygon points="40,80 52,73 52,87" fill="#fde68a"/><circle cx="258" cy="80" r="8" fill="#0f172a" stroke="#fde68a" stroke-width="3"/><line x1="540" y1="80" x2="648" y2="80" stroke="#fde68a" stroke-width="6"/><circle cx="540" cy="80" r="8" fill="#fde68a" stroke="#fde68a" stroke-width="3"/><polygon points="660,80 648,73 648,87" fill="#fde68a"/><text x="350" y="146" fill="#86efac" font-size="14" text-anchor="middle">“Or”: either piece — the two rays point away from each other.</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Solving an “or” inequality</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Solve 3x − 2 &lt; −8 or 2x + 1 ≥ 9.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Solve the first part</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3x &lt; −6, so x &lt; −2</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve the second part</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2x ≥ 8, so x ≥ 4</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Combine with “or”</strong>
    </p>
    <div style="margin:6px 0 0 34px;">x &lt; −2 or x ≥ 4</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> x &lt; −2 or x ≥ 4: an open circle at −2 shaded left and a closed circle at 4 shaded right.</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Graph</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">And</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both must be true</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One segment between two points</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Or</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">At least one must be true</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two rays pointing away from each other</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Modeling Constraints (A-CED.3)</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: A field trip constraint</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A school bus holds at most 52 people. Four adults must go. How many students s can go?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Write the constraint</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 + s ≤ 52</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Solve</strong>
    </p>
    <div style="margin:6px 0 0 34px;">s ≤ 48</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Add the context constraint</strong>
    </p>
    <div style="margin:6px 0 0 34px;">A number of students cannot be negative: s ≥ 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Combine and interpret</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 ≤ s ≤ 48, and s must be a whole number</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> From 0 to 48 students (whole numbers only). 30 students is viable; 30.5 or 50 is not.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The algebra gives s ≤ 48; the context adds s ≥ 0 and whole numbers.</p>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>After solving a real problem, ask: does my answer need to be a whole number? Can it be negative? Is there a maximum?</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve 5 ≤ x + 3 ≤ 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2 ≤ x ≤ 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Is x = 0 a solution of x ≤ −1 or x ≥ 3?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — 0 is in neither piece.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A pool must be between 78°F and 82°F, inclusive. Write a compound inequality.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">78 ≤ t ≤ 82</div>
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
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP4 Model constraints</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP2 Interpret solutions in context</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">MP6 Precise graphs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Solving three-part inequalities</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Judging viability</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Reasoning and Common Errors</h3>
    <p>Check whether a compound inequality makes sense before solving. “x &gt; 5 and x &lt; 2” has no solution, because no number is both greater than 5 and less than 2. “x &gt; 2 or x &lt; 5” includes every real number. Always picture the number line.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🛠️ Can You Spot the Mistake?</p>
    <div>A student writes the solution of “x is less than −1 or greater than 3” as 3 ≤ x ≤ −1. What is wrong? <em>Answer: a three-part inequality means “between,” but no number is between 3 and −1 in that order. An “or” solution must be written as two separate pieces.</em>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #b39ddb;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Algebra in the Real World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Fitness trackers show a target heart-rate range — a compound “and” inequality — so you know when you are exercising at the right intensity.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Fish and coral survive only within ranges of water temperature and acidity, so aquarium keepers and scientists monitor compound inequalities.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Manufacturers allow a tolerance: a bolt might need a diameter between 9.95 mm and 10.05 mm to pass inspection.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Solve −4 &lt; 2x − 6 ≤ 8.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Add 6 to all parts, then divide by 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1 &lt; x ≤ 7</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Write as an inequality: x is less than −2 or greater than 5.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Two separate pieces.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x &lt; −2 or x &gt; 5</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> A ticket price p must be at least $5 and at most $12. Write the constraint.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: “And” between two limits.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5 ≤ p ≤ 12</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Find three real ranges (for example, a healthy sleep range or a game’s player count) and write each as a compound inequality.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Sort cards into “and” or “or” situations, then write and graph each inequality.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Design a “safe zone” poster for a pet or plant, using compound inequalities for temperature, light and water.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>In Desmos, type −2 ≤ x ≤ 4, then x &lt; −2 or x ≥ 4 (use the “or” option or two separate lines). Compare the shaded regions with your number lines.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Describe the graph of −1 ≤ x ≤ 3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Closed circles at −1 and 3 with shading between them.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write: x is less than −2 or greater than 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x &lt; −2 or x &gt; 5</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 5 ≤ x + 3 &lt; 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2 ≤ x &lt; 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve −4 &lt; 2x − 6 ≤ 8.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1 &lt; x ≤ 7</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #b39ddb;">
    <p style="margin:0 0 6px 0;color:#b39ddb;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve −7 ≤ −3x + 2 ≤ 11.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">−9 ≤ −3x ≤ 9; dividing by −3 and flipping gives −3 ≤ x ≤ 3.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A bus holds at most 52 people and 4 adults must go. Write and solve an inequality for the number of students, and state the viable solutions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">4 + s ≤ 52, so s ≤ 48. Viable solutions are whole numbers from 0 to 48.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A-CED.3: A phone plan allows 2 to 10 GB per month. Each streamed movie uses about 1.5 GB, and you use 1 GB for other apps. Write and solve a compound inequality for the number of movies m.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2 ≤ 1.5m + 1 ≤ 10, so 1 ≤ 1.5m ≤ 9 and about 0.67 ≤ m ≤ 6. Viable: 1 to 6 movies.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>A compound inequality joins two inequalities. “And” means both are true — the overlap, graphed as a segment. “Or” means at least one is true — graphed as two rays. Solve a three-part inequality by doing the same operation to all parts, flipping both signs if you multiply or divide by a negative. In real problems, check that solutions are viable.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>And = intersection = between.</li>
    <li>Or = union = outside.</li>
    <li>Do the same to all three parts.</li>
    <li>Check viability: whole numbers, no negatives.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Flip both signs with a negative.</li>
    <li>Write “or” solutions as two pieces.</li>
    <li>Read three-part inequalities from least to greatest.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Flipping only one sign.</li>
    <li>Writing an “or” solution as a three-part inequality.</li>
    <li>Ignoring context constraints.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sketch the number line first.</li>
    <li>Test one value inside and one outside your solution.</li>
    <li>Underline “and” and “or.”</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Graph every compound solution.</li>
    <li>State viable solutions in a sentence.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP4 Modeling</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing real constraints.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP2 Reasoning</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpreting viable solutions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">MP6 Precision</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphing segments and rays correctly.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety awareness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Precision</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health and fitness</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Event planning</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Whenever something must stay within limits — a temperature, a budget or a group size — you are using a compound inequality.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve and graph the assigned compound inequalities.</li>
    <li>Write one real constraint problem and list its viable solutions.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain the difference between “and” and “or”?</li>
    <li>Do I check whether my answers make sense in context?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Compound inequality</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two inequalities joined together.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Intersection</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Values in both.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Union</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Values in either.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Viable</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Makes sense in context.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can tell “and” from “or” inequalities.</p>
    <p style="margin:6px 0;">☐ I can solve three-part inequalities.</p>
    <p style="margin:6px 0;">☐ I can graph compound inequalities.</p>
    <p style="margin:6px 0;">☐ I can model constraints and identify viable solutions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The compound inequality −1 ≤ x ≤ 4 describes:',
            options: ['Numbers less than −1 or greater than 4', 'Only −1 and 4', 'No numbers', 'Numbers between −1 and 4, including both'],
            correct: 3,
            explanation: 'It is an “and” inequality — a range.'
        },
        {
            question: 'An “or” inequality is true when:',
            options: ['Both parts are true', 'At least one part is true', 'Neither part is true', 'The variable is zero'],
            correct: 1,
            explanation: 'The answer is At least one part is true. “Or” is a union.'
        },
        {
            question: 'Solve −3 ≤ 2x + 1 ≤ 9.',
            options: ['−2 ≤ x ≤ 4', '−1 ≤ x ≤ 5', '−4 ≤ x ≤ 8', '−2 ≤ x ≤ 5'],
            correct: 0,
            explanation: 'The answer is −2 ≤ x ≤ 4. Subtract 1, then divide by 2.'
        },
        {
            question: 'Solve −7 ≤ −3x + 2 ≤ 11.',
            options: ['3 ≤ x ≤ −3', '−3 ≤ x ≤ 3', '−9 ≤ x ≤ 9', '−3 ≤ x ≤ 9'],
            correct: 1,
            explanation: 'Divide by −3 and flip both signs.'
        },
        {
            question: 'The graph of an “or” inequality usually shows:',
            options: ['One segment', 'A single point', 'Two rays pointing away from each other', 'Nothing'],
            correct: 2,
            explanation: 'The answer is Two rays pointing away from each other. Union of two pieces.'
        },
        {
            question: 'Solve 5 ≤ x + 3 ≤ 9.',
            options: ['8 ≤ x ≤ 12', '5 ≤ x ≤ 9', '2 ≤ x ≤ 6', '2 ≤ x ≤ 9'],
            correct: 2,
            explanation: 'The answer is 2 ≤ x ≤ 6. Subtract 3 from all parts.'
        },
        {
            question: 'Is 0 a solution of “x ≤ −1 or x ≥ 3”?',
            options: ['Yes, it is in the first piece', 'Yes, it is in the second piece', 'Yes, it is in both pieces', 'No, it is in neither piece'],
            correct: 3,
            explanation: 'The answer is No, it is in neither piece. 0 is between −1 and 3.'
        },
        {
            question: 'A pool must stay between 78°F and 82°F, inclusive. The constraint is:',
            options: ['78 ≤ t ≤ 82', 't ≤ 78 or t ≥ 82', 't = 80', '82 ≤ t ≤ 78'],
            correct: 0,
            explanation: 'The answer is 78 ≤ t ≤ 82. An “and” range.'
        },
        {
            question: 'A bus holds at most 52 people with 4 adults. A viable number of students is:',
            options: ['50', '30', '−2', '30.5'],
            correct: 1,
            explanation: 'Viable solutions are whole numbers from 0 to 48.'
        },
        {
            question: 'A viable solution is one that:',
            options: ['Is always a fraction', 'Is negative', 'Ignores the context', 'Makes sense in the real situation'],
            correct: 3,
            explanation: 'The answer is Makes sense in the real situation. Viability depends on context.'
        }
    ]
},
{
    name: '1.2 Activity: Planning a Class Event on a Budget',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Planning a Class Event on a Budget</h2>
    <p style="font-size:16px;">Your class is planning an end-of-semester event. In this investigation you will use inequalities to find how many students can attend without going over budget — and how many must buy tickets for the event to pay for itself.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Assign roles: planner, calculator-checker, grapher and presenter.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check every inequality with a test value before you graph it.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Consider every idea; vote fairly on group decisions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculators may be used to check, after solving by hand.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Math Investigation: Event Budget Constraints</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To write, solve and graph inequalities that describe the constraints on a real event, and to find the range of viable solutions.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Graph paper or number-line strips</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Colored pencils</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator (for checking only)</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Budget: $500</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Venue rental: $150</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Food: $7 per student</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Venue capacity: 60 people</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ticket price: $12 per student</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Share materials fairly.</li>
    <li>Check each other’s work respectfully.</li>
    <li>Keep noise at a working level.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Let n be the number of students who attend.</li>
    <li>Write the budget constraint: venue plus food must be at most $500, so 150 + 7n ≤ 500.</li>
    <li>Solve the budget constraint and graph it on a number line.</li>
    <li>Write the capacity constraint: n ≤ 60. Which constraint is stricter?</li>
    <li>Write the break-even constraint: ticket income must be at least the total cost, so 12n ≥ 150 + 7n.</li>
    <li>Solve the break-even constraint and combine all the constraints into one compound inequality.</li>
    <li>Decide on the viable solutions and recommend a target number of students to your class.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Constraint</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inequality</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Budget</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">150 + 7n ≤ 500</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Capacity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n ≤ 60</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Break-even</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12n ≥ 150 + 7n</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Combined</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve the budget constraint. What does it mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">7n ≤ 350, so n ≤ 50. Food and venue stay within budget for up to 50 students.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve the break-even constraint. What does it mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">5n ≥ 150, so n ≥ 30. At least 30 students must buy tickets to cover the costs.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is the combined solution, and which values are viable?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">30 ≤ n ≤ 50, whole numbers only. The capacity limit of 60 is not the deciding limit, because the budget is stricter.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The event works for 30 to 50 students. Fewer than 30 loses money; more than 50 goes over budget.</p>
    <p><strong style="color:#fde68a;">Why it works:</strong> Each real limit becomes an inequality. The solution to the whole problem is the intersection — the values that satisfy every constraint at once.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Writing ≥ instead of ≤ for “at most.”</li>
    <li>Forgetting that n must be a whole number.</li>
    <li>Using the capacity limit instead of the stricter budget limit.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Event planners, coaches and business owners use constraints like these to plan trips, tournaments and product launches.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Graph all three constraints on the same number line. The region where every constraint is satisfied is the solution. Discuss: what would change if the ticket price rose to $15, or the food cost fell to $5?</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>The combined solution of several “and” constraints is their overlap.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve 150 + 7n ≤ 500.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">n ≤ 50</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve 12n ≥ 150 + 7n.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">n ≥ 30</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Write the combined solution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">30 ≤ n ≤ 50, whole numbers</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> If the ticket price rises to $15, what is the new break-even constraint?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">15n ≥ 150 + 7n, so 8n ≥ 150 and n ≥ 18.75 — at least 19 students.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why must n be a whole number?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It counts students; you cannot have part of a student.</div>
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
            question: 'The budget constraint is:',
            options: ['150 + 7n ≥ 500', '150 + 7n ≤ 500', '7n ≤ 150', '500n ≤ 150'],
            correct: 1,
            explanation: 'The answer is 150 + 7n ≤ 500. Costs must be at most $500.'
        },
        {
            question: 'Solving 150 + 7n ≤ 500 gives:',
            options: ['n ≥ 50', 'n ≤ 71', 'n ≤ 93', 'n ≤ 50'],
            correct: 3,
            explanation: 'The answer is n ≤ 50. 7n ≤ 350, so n ≤ 50.'
        },
        {
            question: 'The break-even constraint 12n ≥ 150 + 7n gives:',
            options: ['n ≤ 30', 'n ≥ 12', 'n ≥ 30', 'n ≥ 50'],
            correct: 2,
            explanation: 'The answer is n ≥ 30. 5n ≥ 150, so n ≥ 30.'
        },
        {
            question: 'The combined viable solution is:',
            options: ['30 ≤ n ≤ 50, whole numbers', '0 ≤ n ≤ 60', 'n ≥ 50', 'n ≤ 30'],
            correct: 0,
            explanation: 'The overlap of all constraints.'
        },
        {
            question: 'Which constraint is stricter: n ≤ 50 or n ≤ 60?',
            options: ['n ≤ 60', 'They are the same', 'n ≤ 50', 'Neither'],
            correct: 2,
            explanation: 'A smaller maximum is stricter.'
        },
        {
            question: 'Why is 42.5 not a viable solution?',
            options: ['The number of students must be a whole number', 'It is too large', 'It is negative', 'It breaks the budget'],
            correct: 0,
            explanation: 'Students are counted in whole numbers.'
        }
    ]
},
{
    name: '1.2 Quiz: Linear Inequalities',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Linear Inequalities</h2>
    <p style="font-size:16px;">Test your understanding of writing, solving and graphing inequalities and compound inequalities from Topic 1.2.</p>
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
    <li>Inequality symbols and key phrases</li>
    <li>Open and closed circles on a number line</li>
    <li>Solving multi-step inequalities</li>
    <li>Reversing the sign with negatives</li>
    <li>Compound “and” and “or” inequalities</li>
    <li>Constraints and viable solutions</li>
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
    <div>After solving, test one value from your answer in the original inequality. If it does not work, check whether you forgot to flip the sign.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '“At most 8 hours” is written as:',
            options: ['h ≥ 8', 'h = 8', 'h ≠ 8', 'h ≤ 8'],
            correct: 3,
            explanation: 'The answer is h ≤ 8. “At most” is ≤.'
        },
        {
            question: 'Which graph shows x ≥ −2?',
            options: ['Open circle at −2, shaded right', 'Closed circle at −2, shaded left', 'Closed circle at −2, shaded right', 'Open circle at −2, shaded left'],
            correct: 2,
            explanation: 'Included endpoint, greater values.'
        },
        {
            question: 'Solve 2x + 7 ≤ 19.',
            options: ['x ≥ 6', 'x ≤ 6', 'x ≤ 13', 'x ≤ 12'],
            correct: 1,
            explanation: 'The answer is x ≤ 6. 2x ≤ 12, so x ≤ 6.'
        },
        {
            question: 'Solve −4x ≥ 20.',
            options: ['x ≤ −5', 'x ≥ −5', 'x ≤ 5', 'x ≥ 5'],
            correct: 0,
            explanation: 'The answer is x ≤ −5. Divide by −4 and flip.'
        },
        {
            question: 'Solve 6 − x ≥ 2x − 9.',
            options: ['x ≤ 5', 'x ≥ 5', 'x ≤ −5', 'x ≥ 1'],
            correct: 0,
            explanation: 'The answer is x ≤ 5. 15 ≥ 3x, so x ≤ 5.'
        },
        {
            question: 'Adding −3 to both sides of an inequality:',
            options: ['Reverses the sign', 'Does not change the sign', 'Makes it an equation', 'Removes all solutions'],
            correct: 1,
            explanation: 'Only negative multiplication or division flips the sign.'
        },
        {
            question: 'Solve 1 ≤ x − 2 ≤ 6.',
            options: ['−1 ≤ x ≤ 4', '3 ≤ x ≤ 6', '1 ≤ x ≤ 8', '3 ≤ x ≤ 8'],
            correct: 3,
            explanation: 'The answer is 3 ≤ x ≤ 8. Add 2 to all parts.'
        },
        {
            question: 'Solve −6 ≤ −2x ≤ 4.',
            options: ['3 ≤ x ≤ −2', '−3 ≤ x ≤ 2', '−2 ≤ x ≤ 3', '−12 ≤ x ≤ 8'],
            correct: 2,
            explanation: 'Divide by −2, flip both signs, then reorder.'
        },
        {
            question: '“x ≤ −3 or x ≥ 1” is graphed as:',
            options: ['A segment from −3 to 1', 'A single point', 'Two rays pointing away from each other', 'An empty number line'],
            correct: 2,
            explanation: 'The answer is Two rays pointing away from each other. “Or” gives two pieces.'
        },
        {
            question: 'A van holds at most 12 people, and 2 drivers must ride. Which is a viable number of passengers?',
            options: ['11', '−1', '9.5', '10'],
            correct: 3,
            explanation: '2 + p ≤ 12 gives 0 ≤ p ≤ 10, whole numbers.'
        }
    ]
},
{
    name: '1.2 Assignment: Design a Budget Plan with Inequalities',
    type: 'lesson',
    duration: '90 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 90 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Design a Budget Plan with Inequalities</h2>
    <p style="font-size:16px;">Plan a real purchase or event — such as a party, a club trip, a fundraiser or saving for a new device — and use inequalities to describe and solve its constraints.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 90 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Task:</strong> Describe your plan and its limits (a budget, a minimum, a maximum or a range). Write at least three inequalities, including one compound inequality, solve and graph each one, and combine them to find the viable solutions. Then write a short recommendation.</p>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Use realistic prices you find in stores or online, and name your sources. You do not need to share any personal or family financial information.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose your plan and list its fixed costs, costs per item or person, and limits.</li>
    <li>Define your variable and its units.</li>
    <li>Write at least three inequalities, including one compound inequality.</li>
    <li>Solve each inequality, showing every step and marking any sign reversal.</li>
    <li>Graph each solution on a number line, then graph the combined solution.</li>
    <li>Identify the viable solutions and explain why some values are not viable.</li>
    <li>Write a recommendation (100–150 words) and present it to a partner for feedback.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A description of your plan and its constraints</li>
    <li>Your inequalities with defined variables</li>
    <li>Your solutions and number-line graphs</li>
    <li>Your combined viable solutions</li>
    <li>Your recommendation and sources</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modeling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All constraints accurately written, including a compound inequality</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constraints mostly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some constraints missing or incorrect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inequalities missing or incorrect</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All solutions correct, sign reversals justified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solutions mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little correct work</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All graphs accurate with correct circles and shading</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphs mostly accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some graph errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graphs missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viability</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful discussion of viable and non-viable solutions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viable solutions identified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Viability mentioned briefly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not addressed</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, organized and precise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and organized</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Somewhat unclear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hard to follow</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use key phrases (“at least,” “no more than”) to choose symbols.<br>Check each solution with a test value.<br>Remember that counts of people and items are whole numbers.<br>Show the overlap of constraints on one number line.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which constraint limited your plan the most?</li>
    <li>How did inequalities help you make a decision?</li>
    <li>What would you do differently next time?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The assignment requires at least:',
            options: ['One equation', 'Ten graphs', 'No graphs', 'Three inequalities, including one compound inequality'],
            correct: 3,
            explanation: 'Three inequalities, one of them compound.'
        },
        {
            question: 'The combined solution of several “and” constraints is:',
            options: ['Their overlap', 'Their sum', 'The largest value', 'The first constraint only'],
            correct: 0,
            explanation: 'The answer is Their overlap. All constraints must be true.'
        },
        {
            question: 'Why must you mark sign reversals?',
            options: ['To decorate the page', 'Because every step reverses', 'To show you multiplied or divided by a negative correctly', 'To change the answer'],
            correct: 2,
            explanation: 'The answer is To show you multiplied or divided by a negative correctly. It shows your reasoning.'
        },
        {
            question: 'Which is NOT a viable number of club members?',
            options: ['14', '14.5', '20', '0'],
            correct: 1,
            explanation: 'People are counted in whole numbers.'
        },
        {
            question: 'A recommendation should be based on:',
            options: ['Guesses', 'Your solutions and evidence', 'Only your opinion', 'A random choice'],
            correct: 1,
            explanation: 'The answer is Your solutions and evidence. Use evidence from your math.'
        },
        {
            question: 'Graphs should show:',
            options: ['Only numbers', 'No labels', 'Pictures of items', 'Correct circles and shading'],
            correct: 3,
            explanation: 'Accurate number lines communicate solutions.'
        }
    ]
},
{
    name: '1.2 Review: Linear Inequalities',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Linear Inequalities</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and the whole unit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Writing and Graphing</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>At least = ≥; at most = ≤.</li>
    <li>Open circle for &lt; and &gt;; closed for ≤ and ≥.</li>
    <li>Shade toward the solutions.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Solving</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Same steps as equations.</li>
    <li>Multiply or divide by a negative → flip the sign.</li>
    <li>Check with a test point.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Compound Inequalities</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>And = overlap (segment).</li>
    <li>Or = either piece (two rays).</li>
    <li>In three-part inequalities, do the same to all parts.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #b39ddb;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Constraints</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write each limit as an inequality.</li>
    <li>Combine the constraints.</li>
    <li>Keep only viable solutions.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">at least 8 hours</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">h ≥ 8</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3x − 4 ≤ 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≤ 5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flip</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2x + 3 &gt; 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x &lt; −4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">And</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 ≤ 2x + 1 ≤ 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 ≤ x ≤ 4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Or</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3x − 2 &lt; −8 or 2x + 1 ≥ 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x &lt; −2 or x ≥ 4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Constraint</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">bus of 52 with 4 adults</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 ≤ s ≤ 48, whole numbers</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write: no more than 30 minutes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">m ≤ 30</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve −5x + 2 ≥ 17.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x ≤ −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 7 − 2x &gt; 3(x − 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x &lt; 2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve 5 ≤ x + 3 ≤ 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2 ≤ x ≤ 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve x + 4 &lt; 1 or 3x ≥ 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">x &lt; −3 or x ≥ 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A club has $200. Pizza costs $12 each plus a $20 delivery fee. How many pizzas can it buy?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">12p + 20 ≤ 200, p ≤ 15 — at most 15 pizzas.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can write and graph inequalities.</p>
    <p style="margin:6px 0;">☐ I can solve multi-step inequalities.</p>
    <p style="margin:6px 0;">☐ I know when to flip the sign.</p>
    <p style="margin:6px 0;">☐ I can solve compound inequalities.</p>
    <p style="margin:6px 0;">☐ I can model constraints and find viable solutions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '“No more than 30 minutes” is:',
            options: ['m ≤ 30', 'm ≥ 30', 'm = 30', 'm ≠ 30'],
            correct: 0,
            explanation: 'The answer is m ≤ 30. A maximum uses ≤.'
        },
        {
            question: 'Solve −5x + 2 ≥ 17.',
            options: ['x ≥ −3', 'x ≤ −3', 'x ≤ 3', 'x ≥ 3.8'],
            correct: 1,
            explanation: '−5x ≥ 15; divide by −5 and flip.'
        },
        {
            question: 'An “and” inequality is graphed as:',
            options: ['Two rays', 'A segment between two points', 'A single point', 'An empty line'],
            correct: 1,
            explanation: 'The answer is A segment between two points. The overlap is a segment.'
        },
        {
            question: 'Solve 5 ≤ x + 3 ≤ 9.',
            options: ['8 ≤ x ≤ 12', '5 ≤ x ≤ 9', '2 ≤ x ≤ 6', '−2 ≤ x ≤ 6'],
            correct: 2,
            explanation: 'The answer is 2 ≤ x ≤ 6. Subtract 3 from every part.'
        },
        {
            question: 'A club with $200 buys $12 pizzas plus a $20 fee. The most pizzas is:',
            options: ['16', '18', '14', '15'],
            correct: 3,
            explanation: 'The answer is 15. 12p ≤ 180, so p ≤ 15.'
        },
        {
            question: 'Which operation reverses the inequality sign?',
            options: ['Dividing by −3', 'Adding −3', 'Subtracting 3', 'Multiplying by 3'],
            correct: 0,
            explanation: 'Negative division flips the sign.'
        }
    ]
},
{
    name: '1.2 Summary: Linear Inequalities',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #4527a0, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #b39ddb;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Expressions, Equations and Inequalities · Topic 1.2 Linear Inequalities</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #b39ddb;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Linear Inequalities</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Inequalities describe limits and ranges. We solve them almost exactly like equations — except that multiplying or dividing by a negative reverses the sign — and we use them to find all the solutions that work in a real situation.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Key phrases decide the symbol: at least (≥), at most (≤), more than, fewer than.</li>
    <li>On a number line, open circles mark &lt; and &gt;; closed circles mark ≤ and ≥.</li>
    <li>Solving inequalities uses inverse operations, just like equations.</li>
    <li>Multiplying or dividing both sides by a negative number reverses the inequality sign.</li>
    <li>“And” compound inequalities describe a range; “or” inequalities describe values outside a range.</li>
    <li>Constraints in real problems produce viable solutions that must make sense in context.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Writing and Graphing Inequalities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Symbols, key phrases, testing values, number lines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choose open or closed circles carefully</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Solving Multi-Step Inequalities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inverse operations, the negative rule, special cases</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flip the sign with negatives</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Compound Inequalities and Constraints</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">And/or inequalities, modeling constraints, viability</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check that solutions make sense</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">inequality</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">solution set</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">open circle</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">closed circle</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">at least</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">at most</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">reverse the inequality</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">test point</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compound inequality</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">intersection</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">union</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">constraint</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">viable solution</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Budgets, speed limits, safe temperature ranges and group sizes are all inequalities. You can now write them, solve them and decide which answers really work.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #b39ddb;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Expressions, Equations and Inequalities. In Unit 2.0 you will study functions — rules that connect inputs to outputs — and learn to read and build tables, graphs and function notation.</div>
    </div>
    <div style="background:#2a1f4a;padding:20px;border-radius:12px;border:1px solid #b39ddb;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can write inequalities from words.</p>
    <p style="margin:6px 0;">✔️ I can graph inequalities on a number line.</p>
    <p style="margin:6px 0;">✔️ I can solve multi-step inequalities and know when to flip the sign.</p>
    <p style="margin:6px 0;">✔️ I can solve and graph compound inequalities.</p>
    <p style="margin:6px 0;">✔️ I can model constraints and identify viable solutions.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big difference between solving equations and inequalities is:',
            options: ['Flipping the sign when multiplying or dividing by a negative', 'Inequalities never use inverse operations', 'Equations have no solutions', 'Inequalities cannot be graphed'],
            correct: 0,
            explanation: 'The negative rule is the key difference.'
        },
        {
            question: '“Or” compound inequalities describe:',
            options: ['Values satisfying both parts', 'Values satisfying at least one part', 'Exactly one value', 'No values'],
            correct: 1,
            explanation: 'The answer is Values satisfying at least one part. “Or” is a union.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['Trigonometry', 'Functions', 'Probability', 'Calculus'],
            correct: 1,
            explanation: 'Unit 2.0 introduces functions.'
        },
        {
            question: 'A closed circle is used for:',
            options: ['Only strict inequalities', 'Equations', '≤ and ≥', 'No solution'],
            correct: 2,
            explanation: 'Closed circles include the endpoint.'
        },
        {
            question: 'Viable solutions are:',
            options: ['Solutions that make sense in context', 'All real numbers', 'Only negative numbers', 'Only fractions'],
            correct: 0,
            explanation: 'The answer is Solutions that make sense in context. Context decides viability.'
        },
        {
            question: 'Which phrase means ≥?',
            options: ['At most', 'Fewer than', 'No more than', 'At least'],
            correct: 3,
            explanation: 'The answer is At least. “At least” is a minimum.'
        }
    ]
}
],
          stats:{lessons:19,exercises:132,quizzes:20,projects:2,duration:'14 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Simplify 3(x + 4) − 2x.',
                  options: ['5x + 12', 'x + 4', 'x + 12', 'x + 7'],
                  correct: 2,
                  explanation: '3x + 12 − 2x = x + 12.'
              },
              {
                  question: 'Evaluate 8 + 2 × 5² when following the order of operations.',
                  options: ['250', '58', '108', '18'],
                  correct: 1,
                  explanation: '5² = 25, 2 × 25 = 50, 8 + 50 = 58.'
              },
              {
                  question: 'In 7x − 3, the coefficient of x is:',
                  options: ['7', '−3', 'x', '4'],
                  correct: 0,
                  explanation: 'The coefficient multiplies the variable.'
              },
              {
                  question: 'Solve 4x − 7 = 21.',
                  options: ['x = 7', 'x = 3.5', 'x = 14', 'x = 28'],
                  correct: 0,
                  explanation: 'Add 7: 4x = 28; divide by 4: x = 7.'
              },
              {
                  question: 'Solve 5x + 2 = 3x + 14.',
                  options: ['x = 2', 'x = 6', 'x = 8', 'x = 1.5'],
                  correct: 1,
                  explanation: '2x = 12, so x = 6.'
              },
              {
                  question: 'The equation 2(x + 3) = 2x + 6 has:',
                  options: ['No solution', 'Exactly one solution', 'Two solutions', 'Infinitely many solutions'],
                  correct: 3,
                  explanation: 'Both sides are identical, so every x works.'
              },
              {
                  question: 'Solve A = lw for w.',
                  options: ['w = A − l', 'w = A ÷ l', 'w = Al', 'w = l ÷ A'],
                  correct: 1,
                  explanation: 'Divide both sides by l.'
              },
              {
                  question: 'A phone plan costs $20 plus $5 per GB. Which equation gives the cost C for g GB?',
                  options: ['C = 5 + 20g', 'C = 25g', 'C = 20g − 5', 'C = 20 + 5g'],
                  correct: 3,
                  explanation: 'Fixed fee plus rate times amount.'
              },
              {
                  question: 'Solve −3x ≤ 12.',
                  options: ['x ≤ −4', 'x ≥ 4', 'x ≥ −4', 'x ≤ 4'],
                  correct: 2,
                  explanation: 'Dividing by a negative reverses the inequality sign.'
              },
              {
                  question: 'On a number line, x ≥ 2 is shown with:',
                  options: ['An open circle at 2 and an arrow to the left', 'A closed circle at 2 and an arrow to the left', 'An open circle at 2 and an arrow to the right', 'A closed circle at 2 and an arrow to the right'],
                  correct: 3,
                  explanation: '≥ includes 2 (closed) and goes to larger numbers.'
              },
              {
                  question: 'The compound inequality −1 ≤ x ≤ 4 describes numbers:',
                  options: ['Between −1 and 4, including both', 'Less than −1 or greater than 4', 'Only −1 and 4', 'Greater than 4 only'],
                  correct: 0,
                  explanation: 'An “and” inequality is the overlap between two values.'
              },
              {
                  question: 'You need at least $150 and earn $12 per hour. Which inequality models h hours?',
                  options: ['12h ≤ 150', '150h ≥ 12', '12h ≥ 150', 'h + 12 ≥ 150'],
                  correct: 2,
                  explanation: '“At least” means ≥.'
              }
          ]}
);