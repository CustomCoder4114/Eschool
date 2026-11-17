// Eschool course: Grade 11 Mathematics (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'math-grade-11', name:'Grade 11 Mathematics', code:'MAT 201', level:'grade-11', iconStyle:'fas', icon:'fa-square-root-alt', color:'#0284c7',
          category:'Mathematics',
          description:'The Kenya CBC Grade 11 Core Mathematics course: quadratics, irrational numbers, inequalities, logarithms, variation, sequences, matrices, circles, trigonometry, commercial arithmetic, graphs, permutations, probability and functions, taught step by step.',
          longDescription:'This Grade 11 Mathematics course follows the KICD Grade 11 Core Mathematics curriculum design strand by strand: Numbers and Algebra (quadratic expressions and equations, irrational numbers, linear inequalities, logarithms, formulae and variation, sequences and series, matrices), Measurements and Geometry (approximation and errors, angle properties of a circle, commercial arithmetic, circles, chords and tangents, trigonometry, graphical methods), Statistics and Probability (permutations and combinations, probability) and Calculus (functions). Each strand opens with an overview, its learning outcomes and an introduction. Every sub-strand has four lessons, a page of worked examples, a practice set, a quiz, an assignment, a revision page and a summary. Every lesson includes learning outcomes, prerequisite knowledge, a key inquiry question, a teacher explanation, vocabulary, a step-by-step explanation, a visual explanation, formula cards, fully explained worked examples with thinking process and alternative methods, guided examples, graded practice, real-life applications, calculator tips, mental strategies, common mistakes, teacher tips, remember and exam boxes, interactive checkpoints, reflection, a summary, revision notes, a glossary, a multiple-choice quiz, structured questions and homework.',
          modules:[
{
    name: '1.0 Numbers and Algebra — Strand Overview',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🗺️ Strand 1.0: Numbers and Algebra</h2>
    <p style="font-size:16px;">Welcome to Grade 11 Mathematics. This first strand is the engine room of the whole course: almost every later topic — circles, trigonometry, graphs, probability and calculus — uses the algebra you build here.</p>
    <p style="font-size:16px;">In Grade 10 you met real numbers, indices, basic logarithms and factorising quadratics. Now you go further: you will solve any quadratic equation, work exactly with surds, describe regions with inequalities, solve logarithmic equations, rearrange formulae, model patterns with sequences and organise information in matrices.</p>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bae6fd;">❓ Big question for this strand:</strong> How do numbers and algebraic relationships help us model and solve problems in everyday life?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>The strand has <strong>seven sub-strands</strong>, taught in the order set by the KICD Grade 11 Core Mathematics curriculum design. Each one adds a new tool to your mathematical toolbox:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tool</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it lets you do</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example in real life</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quadratic equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve problems where a quantity is squared</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Finding the dimensions of a plot with a given area</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Irrational numbers (surds)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep answers exact instead of rounding</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Diagonal of a square roof panel: 3√2 m</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linear inequalities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe limits and allowed regions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A matatu can carry at most 14 passengers</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Logarithms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Undo powers and handle growth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How many years for savings to double</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formulae and variation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rearrange formulae; describe how quantities change together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cost of fuel varies directly with distance</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sequences and series</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe patterns and add their terms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Monthly savings that grow by Ksh 500</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matrices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organise numbers in tables and calculate with them</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stock and price tables in a duka</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Strand Map</h3>
    <p>Follow the sub-strands in this order. Each has four lessons followed by worked examples, practice, a quiz, an assignment, revision and a summary.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0;color:#cbd5e1;">Completing the square, the quadratic formula, forming quadratic equations and solving them using graphs.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>📘 Lesson 1: Completing the Square</li>
    <li>📘 Lesson 2: The Quadratic Formula</li>
    <li>📘 Lesson 3: Forming and Solving Quadratic Equations</li>
    <li>📘 Lesson 4: Graphs of Quadratic Functions</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.2 Irrational Numbers</p>
    <p style="margin:4px 0;color:#cbd5e1;">Rational and irrational numbers, surds, operations on surds and rationalising denominators.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>📘 Lesson 1: Rational and Irrational Numbers</li>
    <li>📘 Lesson 2: Simplifying Surds</li>
    <li>📘 Lesson 3: Multiplying and Dividing Surds</li>
    <li>📘 Lesson 4: Rationalising the Denominator</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.3 Linear Inequalities</p>
    <p style="margin:4px 0;color:#cbd5e1;">Solving inequalities and showing their solutions on number lines and graphs.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.4 Logarithms II</p>
    <p style="margin:4px 0;color:#cbd5e1;">Laws of logarithms and solving logarithmic and exponential equations.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.5 Formulae and Variation</p>
    <p style="margin:4px 0;color:#cbd5e1;">Changing the subject of a formula and the different types of variation.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.6 Sequences and Series</p>
    <p style="margin:4px 0;color:#cbd5e1;">Arithmetic and geometric sequences and the sums of their terms.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.7 Matrices (I)</p>
    <p style="margin:4px 0;color:#cbd5e1;">Order of matrices, operations on matrices and their uses.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the best method (factorising, completing the square or the formula) and checking whether answers make sense.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining each step of your working clearly and discussing methods with classmates.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a scientific calculator, spreadsheets and graphing tools such as GeoGebra or Desmos to explore graphs.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and imagination</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building your own real-life problems that lead to quadratic equations or sequences.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reviewing mistakes, keeping a formula notebook and tracking your progress through the quizzes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taking on harder problems step by step and recognising your own improvement.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity — honest working and self-marking</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility — completing practice on time</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect — valuing classmates’ methods</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity — solving problems as a team</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Patriotism — using Kenyan data and contexts</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (budgets, savings, profit)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (land use, water tanks)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Health (dosages and growth)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (stopping distances and projectiles)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Digital citizenship</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧰 What You Need</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A scientific calculator (non-programmable)</li>
    <li>Graph paper, a sharp pencil and a 30 cm ruler</li>
    <li>An exercise book for working and a small notebook for formulae</li>
    <li>Optional: a phone or computer with GeoGebra or Desmos for checking graphs</li>
    </ul>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 How to Study This Strand</p>
    <div>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read each lesson in order — the steps build on each other.</li>
    <li>Try every checkpoint before opening the answer.</li>
    <li>Copy every formula card into your formula notebook.</li>
    <li>Do the practice set and quiz for a sub-strand before moving on.</li>
    <li>Use the revision page a week later to keep the ideas fresh.</li>
    </ol>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Strand 1.0 Numbers and Algebra in Grade 11 Core Mathematics?',
            options: ['Seven', 'Five', 'Six', 'Eight'],
            correct: 0,
            explanation: 'The strand has seven sub-strands, from Quadratic Expressions and Equations to Matrices (I).'
        },
        {
            question: 'Which sub-strand comes first in this strand?',
            options: ['Irrational Numbers', 'Quadratic Expressions and Equations', 'Matrices (I)', 'Logarithms II'],
            correct: 1,
            explanation: 'The curriculum design begins the strand with Quadratic Expressions and Equations.'
        },
        {
            question: 'Which tool would you use to keep the diagonal of a square of side 3 m in exact form?',
            options: ['Matrices', 'Inequalities', 'Surds (irrational numbers)', 'Sequences'],
            correct: 2,
            explanation: 'The diagonal is 3√2 m; surds let you write this exactly without rounding.'
        },
        {
            question: '"A matatu can carry at most 14 passengers" is best described using:',
            options: ['a matrix', 'an inequality', 'a logarithm', 'a quadratic formula'],
            correct: 1,
            explanation: 'At most 14 means n ≤ 14, which is an inequality.'
        },
        {
            question: 'Which sub-strand deals with patterns such as savings that grow by the same amount each month?',
            options: ['Sequences and Series', 'Formulae and Variation', 'Matrices (I)', 'Linear Inequalities'],
            correct: 0,
            explanation: 'Adding the same amount each time forms an arithmetic sequence, studied in Sequences and Series.'
        },
        {
            question: 'Each sub-strand in this course ends with which set of pages?',
            options: ['Only a quiz', 'A laboratory activity', 'Worked examples, practice, quiz, assignment, revision and summary', 'A project only'],
            correct: 2,
            explanation: 'After the four lessons, every sub-strand has worked examples, practice, a quiz, an assignment, revision and a summary.'
        }
    ]
},
{
    name: '1.0 Numbers and Algebra — Learning Outcomes',
    type: 'lesson',
    duration: '25 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 25 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🎯 What You Will Achieve in Numbers and Algebra</h2>
    <p style="font-size:16px;">These outcomes describe exactly what you should be able to do at the end of each sub-strand. Use them as a checklist: before a test, read each outcome and ask, “Can I do this without notes?”</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌟 General Learning Outcomes</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use algebraic methods to solve quadratic equations and apply them to real-life problems.</li>
    <li>Work accurately with rational and irrational numbers, including surds.</li>
    <li>Solve and represent linear inequalities and apply them to decision-making.</li>
    <li>Apply the laws of logarithms to simplify expressions and solve equations.</li>
    <li>Rearrange formulae and use variation to describe relationships between quantities.</li>
    <li>Identify, describe and sum arithmetic and geometric sequences.</li>
    <li>Perform operations on matrices and use them to organise and process information.</li>
    <li>Appreciate the use of algebra in other subjects, careers and everyday life.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>complete the square for a quadratic expression</li>
    <li>solve quadratic equations by completing the square</li>
    <li>derive the quadratic formula and use it to solve quadratic equations</li>
    <li>form and solve quadratic equations from real-life situations</li>
    <li>draw graphs of quadratic functions and use them to solve quadratic equations</li>
    <li>appreciate the use of quadratic equations in real life</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How are quadratic equations used to solve problems in real life?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>distinguish between rational and irrational numbers</li>
    <li>express surds in their simplest form</li>
    <li>add, subtract, multiply and divide surds</li>
    <li>rationalise the denominator of a fraction involving surds</li>
    <li>appreciate the use of exact values in measurement and design</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>Why do we sometimes need exact values instead of decimals?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.3 Linear Inequalities</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>solve linear inequalities in one unknown and show the solution on a number line</li>
    <li>represent linear inequalities in two unknowns graphically</li>
    <li>identify the region that satisfies simultaneous linear inequalities</li>
    <li>form and solve inequalities from real-life situations</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How are inequalities used to make decisions?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.4 Logarithms II</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>state and apply the laws of logarithms</li>
    <li>simplify logarithmic expressions</li>
    <li>solve logarithmic and exponential equations</li>
    <li>apply logarithms to real-life problems</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How do logarithms make calculations with powers easier?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.5 Formulae and Variation</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>change the subject of a formula</li>
    <li>solve problems involving direct, inverse, joint and partial variation</li>
    <li>apply variation to real-life situations</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How do quantities in real life depend on each other?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.6 Sequences and Series</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>identify and describe number patterns</li>
    <li>find the general term of arithmetic and geometric sequences</li>
    <li>find the sum of arithmetic and geometric series</li>
    <li>apply sequences and series to real-life problems</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How are patterns used to predict and plan?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.7 Matrices (I)</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>identify the order of a matrix</li>
    <li>add, subtract and multiply matrices</li>
    <li>use matrices to represent and solve real-life problems</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How are matrices used to organise information?</em>
    </p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your work is described using the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Mathematics</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🌟 Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chooses the most efficient method, solves unfamiliar and multi-step problems correctly, checks and interprets answers in context, and explains reasoning clearly.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">✅ Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves standard problems correctly with clear working and interprets answers in context.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🔶 Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves simple problems with some errors or needs prompts to choose a method; working is incomplete.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🔴 Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Attempts a few steps but cannot complete standard problems without support.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>The specific learning outcomes for sub-strands 1.3 to 1.7 are given here so you can see where the strand is going. Each sub-strand page will repeat its own outcomes in detail.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a specific learning outcome of sub-strand 1.1?',
            options: ['Rationalise the denominator of a surd', 'Multiply matrices', 'Derive the quadratic formula and use it to solve quadratic equations', 'Sum a geometric series'],
            correct: 2,
            explanation: 'Deriving and using the quadratic formula belongs to Quadratic Expressions and Equations.'
        },
        {
            question: 'Rationalising the denominator is an outcome of which sub-strand?',
            options: ['1.2 Irrational Numbers', '1.4 Logarithms II', '1.5 Formulae and Variation', '1.7 Matrices (I)'],
            correct: 0,
            explanation: 'Rationalising removes surds from a denominator, which is part of Irrational Numbers.'
        },
        {
            question: 'A learner solves standard problems correctly with clear working. This is described as:',
            options: ['Below Expectations', 'Meets Expectations', 'Approaches Expectations', 'Exceeds Expectations'],
            correct: 1,
            explanation: 'Correct, clearly worked standard problems match the Meets Expectations level.'
        },
        {
            question: 'What extra does a learner at Exceeds Expectations show?',
            options: ['Efficient methods on unfamiliar problems with clear reasoning', 'Only neat handwriting', 'Correct answers without any working', 'Memorised formulae only'],
            correct: 0,
            explanation: 'Exceeds Expectations means handling unfamiliar, multi-step problems efficiently and explaining the reasoning.'
        },
        {
            question: 'Which outcome belongs to Formulae and Variation?',
            options: ['Draw a quadratic graph', 'Change the subject of a formula', 'Find the order of a matrix', 'Simplify √50'],
            correct: 1,
            explanation: 'Changing the subject of a formula is a key skill in sub-strand 1.5.'
        }
    ]
},
{
    name: '1.0 Numbers and Algebra — Introduction',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🚀 Getting Ready for Grade 11 Algebra</h2>
    <p style="font-size:16px;">Imagine a farmer in Nakuru who wants a rectangular greenhouse covering 200 m², with the length 10 m more than the width. What width should she choose? A factorising trick may not work here — you will need a method that solves <em>any</em> quadratic equation. That is where this strand begins.</p>
    <p style="font-size:16px;">Before you start, this page reminds you of the Grade 10 skills you will use every day in this strand and checks that you are ready.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔁 Skills from Grade 10 You Will Use</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Skill</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Quick reminder</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Expanding brackets</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + 3)(x + 5) = x² + 8x + 15</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Perfect squares</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + a)² = x² + 2ax + a² and (x − a)² = x² − 2ax + a²</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factorising quadratics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 5x + 6 = (x − 2)(x − 3)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving by factorising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If (x − 2)(x − 3) = 0, then x = 2 or x = 3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If y² = 9, then y = 3 or y = −3 (two answers)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Indices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a<sup>m</sup> × a<sup>n</sup> = a<sup>m+n</sup>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plotting points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Make a table of values, plot (x, y), join with a smooth curve</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌍 Where This Strand Appears in Life</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Construction: floor areas and roof diagonals</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💰 Banking: savings and loan growth</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Agriculture: plot sizes and yields</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚽ Sports: path of a ball</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Programming: loops and arrays</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📈 Business: profit and break-even</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧪 Medicine: dosage patterns</span><span style="background:#0b1729;border:1px solid #38bdf8;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧭 Engineering: exact lengths</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧠 A Mindset for Algebra</h3>
    <p>Algebra is a language for describing relationships. When you meet a new problem, ask three questions:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>What is unknown? Give it a letter.</li>
    <li>What do I know about it? Write that as an equation or inequality.</li>
    <li>Which tool solves this kind of equation? Then check the answer makes sense.</li>
    </ol>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 Think About It</p>
    <div>Why do quadratic equations usually have <em>two</em> answers? Keep this question in mind — Lesson 4 answers it with a graph.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">✅ Readiness Check</h3>
    <p>Try these Grade 10 skills. If any feels hard, revise it before Lesson 1.</p>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Am I ready? <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Expand (x + 4)².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 8x + 16</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Factorise x² − 9x + 20.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 4)(x − 5)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Solve (x − 7)(x + 2) = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 7 or x = −2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>4.</strong> Solve y² = 49.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">y = 7 or y = −7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>5.</strong> Simplify √<span style="border-top:1px solid currentColor;padding:0 2px;">36</span> + √<span style="border-top:1px solid currentColor;padding:0 2px;">64</span>.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 + 8 = 14 (note: this is not the same as √100 = 10)</div>
    </details>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 How Each Sub-strand Works</p>
    <div>Each sub-strand has four lessons. Every lesson follows the same layout — introduction, teacher explanation, vocabulary, step-by-step explanation, visuals, formula cards, worked and guided examples, practice, applications, tips, interactive questions, summary, revision notes, a quiz, structured questions and homework. After the lessons come worked examples, practice, a quiz, an assignment, revision and a summary for the whole sub-strand.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Expand (x − 3)².',
            options: ['x² − 9', 'x² + 9', 'x² − 3x + 9', 'x² − 6x + 9'],
            correct: 3,
            explanation: '(x − 3)(x − 3) = x² − 3x − 3x + 9 = x² − 6x + 9.'
        },
        {
            question: 'Factorise x² + 7x + 12.',
            options: ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x − 3)(x − 4)'],
            correct: 0,
            explanation: '3 × 4 = 12 and 3 + 4 = 7, so x² + 7x + 12 = (x + 3)(x + 4).'
        },
        {
            question: 'Solve x² = 25.',
            options: ['x = 5 only', 'x = 5 or x = −5', 'x = −5 only', 'x = 12.5'],
            correct: 1,
            explanation: 'Both 5² and (−5)² equal 25, so there are two solutions.'
        },
        {
            question: 'If (2x − 1)(x + 4) = 0, the solutions are:',
            options: ['x = 1 or x = 4', 'x = −1/2 or x = 4', 'x = 1/2 or x = −4', 'x = 2 or x = −4'],
            correct: 2,
            explanation: 'Set each bracket to zero: 2x − 1 = 0 gives x = 1/2, and x + 4 = 0 gives x = −4.'
        },
        {
            question: 'Which is equal to √9 + √16?',
            options: ['7', '5', '25', '√25'],
            correct: 0,
            explanation: '√9 + √16 = 3 + 4 = 7. Square roots cannot be added by adding the numbers inside.'
        }
    ]
},
{
    name: '1.1.1 Completing the Square',
    type: 'lesson',
    duration: '80 min',
    exercises: 12,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 1</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Completing the Square</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Recognise a perfect square expression.</li>
    <li>Find the number that must be added to x² + bx to make a perfect square.</li>
    <li>Write a quadratic expression in the form (x + p)² + q.</li>
    <li>Solve quadratic equations by completing the square, including when the coefficient of x² is not 1.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Expanding (x + a)² and (x − a)², factorising quadratic expressions, solving equations by factorising, and finding square roots (remembering that y² = 9 gives y = ±3).</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How can we solve a quadratic equation that does not factorise neatly?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>In Grade 10 you solved equations like x² − 5x + 6 = 0 by factorising. But try factorising x² − 4x − 1 = 0. No pair of whole numbers multiplies to −1 and adds to −4. Does that mean the equation has no solution? No! Its solutions are x ≈ 4.24 and x ≈ −0.24 — they are just not whole numbers.</p>
    <p>Today you learn <strong>completing the square</strong>, a method that works for <em>every</em> quadratic equation that has real solutions. The idea is simple: rearrange the expression so that it contains a perfect square such as (x − 2)², and then take square roots.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>Look at these: x² + 6x + 9, x² − 10x + 25, x² + 8x + 16. What do they have in common? (Hint: try to factorise each one.)</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Class, a perfect square expression is one that can be written as (something)². When you expand (x + 3)² you get x² + 6x + 9. Notice two things: the 6 is <em>double</em> the 3, and the 9 is 3 <em>squared</em>.</p>
    <p>So if I give you x² + 6x and ask what is missing to make a perfect square, you work backwards: half of 6 is 3, and 3 squared is 9. Add 9 and you get (x + 3)². That is all completing the square is — <strong>half the coefficient of x, then square it</strong>.</p>
    <p>When we use this to solve equations, we must keep the equation balanced: whatever we add to the left side, we add to the right side too.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quadratic expression</p>
    <div>
    <p style="margin:0;">An expression whose highest power of the unknown is 2, written ax² + bx + c with a ≠ 0.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3x² − 2x + 7</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Coefficient</p>
    <div>
    <p style="margin:0;">The number multiplying a letter.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In 5x² − 4x, the coefficient of x is −4.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Perfect square</p>
    <div>
    <p style="margin:0;">An expression that can be written as (x + p)² or (x − p)².</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 8x + 16 = (x − 4)²</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Completing the square</p>
    <div>
    <p style="margin:0;">Adding a number to x² + bx so that it becomes a perfect square.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² + 6x + 9 = (x + 3)²</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Constant term</p>
    <div>
    <p style="margin:0;">The term with no letter.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In x² + 6x − 7 the constant is −7.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Root (solution)</p>
    <div>
    <p style="margin:0;">A value of x that makes the equation true.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = 1 is a root of x² + 6x − 7 = 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Minimum value</p>
    <div>
    <p style="margin:0;">The smallest value an expression can take.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (x − 3)² + 2 is never less than 2</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Spot the pattern in perfect squares</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Perfect square</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expanded</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Coefficient of x</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Constant</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + 3)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 6x + 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 = 2 × 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9 = 3²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x − 5)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 10x + 25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−10 = 2 × (−5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25 = (−5)²</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + ½)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + x + ¼</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 = 2 × ½</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">¼ = (½)²</td>
    </tr>
    </table>
    </div>
    <p>In every row, the constant is <span style="color:#fde68a;font-weight:bold;">(half the coefficient of x)²</span>.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Complete the square for x² + bx</p>
    <p>Take half of b, square it, and add: x² + bx + (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)².</p>
    <p>Example: x² − 12x → half of −12 is −6 → (−6)² = 36 → x² − 12x + 36 = (x − 6)².</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Write x² + bx + c in the form (x + p)² + q</p>
    <p>Add and subtract the same number so the value of the expression does not change:</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x² + 8x + 3 = x² + 8x <span style="color:#fde68a;font-weight:bold;">+ 16 − 16</span> + 3 = (x + 4)² − 13</p>
    <p>Here p = 4 and q = −13. This form shows the smallest value of the expression: since (x + 4)² is never negative, the expression is never less than −13, and it equals −13 when x = −4.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Solve an equation by completing the square (a = 1)</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Move the constant to the right-hand side.</li>
    <li>Add (half of b)² to <strong>both</strong> sides.</li>
    <li>Write the left side as a perfect square.</li>
    <li>Take the square root of both sides — remember ±.</li>
    <li>Solve the two simple equations and check.</li>
    </ol>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: When the coefficient of x² is not 1</p>
    <p>First divide <em>every</em> term by a, so that the x² term has coefficient 1. Then continue exactly as before. Fractions may appear — that is normal.</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">2x² + 8x − 5 = 0 → x² + 4x − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span> = 0</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Think of x² as the area of a square of side x, and 6x as two strips of 3 by x placed along two sides. The picture is almost a big square — only the corner is missing.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 420 300" width="420" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="60" y="40" width="160" height="160" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/><text x="140" y="125" fill="#e0f2fe" font-size="18" text-anchor="middle">x²</text><rect x="220" y="40" width="60" height="160" fill="#14532d" stroke="#22c55e" stroke-width="2"/><text x="250" y="125" fill="#bbf7d0" font-size="16" text-anchor="middle">3x</text><rect x="60" y="200" width="160" height="60" fill="#14532d" stroke="#22c55e" stroke-width="2"/><text x="140" y="236" fill="#bbf7d0" font-size="16" text-anchor="middle">3x</text><rect x="220" y="200" width="60" height="60" fill="none" stroke="#fde68a" stroke-width="2" stroke-dasharray="6,4"/><text x="250" y="236" fill="#fde68a" font-size="15" text-anchor="middle">9 ?</text><text x="140" y="30" fill="#cbd5e1" text-anchor="middle">x</text><text x="250" y="30" fill="#cbd5e1" text-anchor="middle">3</text><text x="45" y="125" fill="#cbd5e1" text-anchor="middle">x</text><text x="45" y="236" fill="#cbd5e1" text-anchor="middle">3</text><text x="300" y="110" fill="#e2e8f0" font-size="13">x² + 6x is a square</text><text x="300" y="128" fill="#e2e8f0" font-size="13">with a missing corner.</text><text x="300" y="160" fill="#fde68a" font-size="13">Add 3 × 3 = 9</text><text x="300" y="178" fill="#fde68a" font-size="13">to complete it:</text><text x="300" y="200" fill="#86efac" font-size="14" font-weight="bold">(x + 3)²</text>
    </svg>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>The missing corner always has side half of b, so its area is (b ÷ 2)². Adding it “completes the square” — that is where the name comes from.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Completing the square</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x² + bx + (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)²</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Adding the square of half the coefficient of x turns x² + bx into a perfect square.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Whenever you need to rewrite or solve a quadratic that does not factorise easily.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> (x + b/2)² expands to x² + bx + (b/2)².</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Use half of b, not half of the constant c.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Halve it, square it, add it.”</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Completed-square form</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x² + bx + c = (x + p)² + q</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> p = b ÷ 2 and q = c − p².</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> To find the minimum value or to solve the equation.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Remember to subtract p² so the expression keeps the same value.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Making a perfect square <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> What number must be added to x² + 6x to make a perfect square? Write the result as a square.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The coefficient of x is 6. Halve it and square it.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Half of 6 is 3.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Completing the square always starts with half the coefficient of x.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 3² = 9.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> This is the area of the missing corner.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 6x + 9 = (x + 3)².</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Check: (x + 3)² = x² + 6x + 9. ✓</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Add 9; x² + 6x + 9 = (x + 3)²</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding 6 or 36 instead of 9.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: A negative coefficient <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Complete the square for x² − 10x.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> b = −10. The sign stays inside the bracket.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Half of −10 is −5.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Keep the negative sign.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (−5)² = 25.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A square is always positive.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² − 10x + 25 = (x − 5)².</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The bracket uses the half, −5.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Add 25; (x − 5)²</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x + 5)²: the sign in the bracket must match the sign of b.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: An odd coefficient <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Complete the square for x² + 5x.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half of 5 is a fraction. Fractions are fine.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Half of 5 is <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Leave it as a fraction; it is exact.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">4</span></span>.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square top and bottom.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 5x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">4</span></span> = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>)².</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Adding (b/2)² completes the square, so the expression can be written as a bracket squared.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Add <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">4</span></span>; (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>)²</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x + 5)² by forgetting to halve 5.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Use decimals: half of 5 is 2.5 and 2.5² = 6.25, so x² + 5x + 6.25 = (x + 2.5)².</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Writing in the form (x + p)² + q <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Write x² + 8x + 3 in the form (x + p)² + q and state its minimum value.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Complete the square on x² + 8x, then adjust the constant so the value is unchanged.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Half of 8 is 4; 4² = 16.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> To complete the square, halve the coefficient of x and square the result.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 8x + 3 = (x² + 8x + 16) − 16 + 3.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Adding 16 and subtracting 16 changes nothing.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = (x + 4)² − 13.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So p = 4 and q = −13.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (x + 4)² ≥ 0, so the smallest value is −13, when x = −4.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A square can be zero but never negative.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (x + 4)² − 13; minimum value −13 at x = −4</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Expand: x² + 8x + 16 − 13 = x² + 8x + 3. ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x + 4)² + 3, forgetting to subtract the 16 that was added.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Solving when a = 1 (whole-number answers) <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 6x − 7 = 0 by completing the square.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Move −7 across, complete the square on x² + 6x, then square-root.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 6x = 7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move the constant to the right.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 6x + 9 = 7 + 9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add (6 ÷ 2)² = 9 to both sides.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x + 3)² = 16</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The left side is now a perfect square.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x + 3 = ±4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both 4² and (−4)² are 16.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x = −3 + 4 = 1 or x = −3 − 4 = −7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Solve each case.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 1 or x = −7</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 1² + 6 − 7 = 0 ✓ and 49 − 42 − 7 = 0 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing only x + 3 = 4 and losing the root x = −7.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> This one also factorises: (x + 7)(x − 1) = 0. Completing the square gives the same answers, which is a good check.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Solving with surd answers <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 4x − 1 = 0, giving answers exactly and to 3 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> This does not factorise — perfect for completing the square.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 4x = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move the constant to the right-hand side so the left side holds only the x² and x terms.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² − 4x + 4 = 1 + 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Half of −4 is −2, and (−2)² = 4.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x − 2)² = 5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The left side is now a perfect square, so square-rooting will isolate x.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x − 2 = ±√<span style="border-top:1px solid currentColor;padding:0 2px;">5</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 5 is not a perfect square, so leave it as √5 for the exact answer.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x = 2 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √5 ≈ 2.2361</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 2 + √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span> ≈ 4.236 or x = 2 − √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span> ≈ −0.236</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing only x = 2 + √5 and losing the negative root.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 7: Coefficient of x² not equal to 1 <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² + 8x − 5 = 0 by completing the square, correct to 3 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Divide every term by 2 first so the x² coefficient is 1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 4x − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span> = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide every term by 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 4x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move the constant.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 4x + 4 = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span> + 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Half of 4 is 2; 2² = 4.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (x + 2)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">13</span><span style="padding:0 4px;">2</span></span> = 6.5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Adding the fractions gives one number on the right, ready for square-rooting.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x + 2 = ±√<span style="border-top:1px solid currentColor;padding:0 2px;">6.5</span> = ±2.5495</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Use a calculator for √6.5.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">6</span><strong style="color:#bae6fd;">Step 6:</strong> x = −2 + 2.5495 = 0.5495 or x = −2 − 2.5495 = −4.5495</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Round at the end only.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 0.550 or x ≈ −4.550</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only the x² term by 2 and leaving 8x and −5 unchanged.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 8: Fractions all the way <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 3x² − 5x − 2 = 0 by completing the square.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Divide by 3; the half of the x-coefficient will be a fraction.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">3</span></span>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">2</span><span style="padding:0 4px;">3</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 3 and move the constant.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Half of −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">3</span></span> is −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">6</span></span>; (−<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">6</span></span>)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">36</span></span>.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Halve the coefficient of x and square it — the same rule works with fractions.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">6</span></span>)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">2</span><span style="padding:0 4px;">3</span></span> + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">36</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">24</span><span style="padding:0 4px;">36</span></span> + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">36</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">49</span><span style="padding:0 4px;">36</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Use a common denominator of 36.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">6</span></span> = ±<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7</span><span style="padding:0 4px;">6</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √49 = 7 and √36 = 6.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">6</span></span> + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7</span><span style="padding:0 4px;">6</span></span> = 2 or x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">6</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7</span><span style="padding:0 4px;">6</span></span> = −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">1</span><span style="padding:0 4px;">3</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Solve the two linear equations, one with + and one with −.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 2 or x = −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">1</span><span style="padding:0 4px;">3</span></span>
    </div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 3(4) − 10 − 2 = 0 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding 2/3 + 25/36 without a common denominator.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Factorising: (3x + 1)(x − 2) = 0 gives the same roots.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 8x + 12 = 0 by completing the square.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Move the constant: x² + 8x =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Half of 8 is …, squared is … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Add it to both sides: (x + 4)² =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Square-root: x + 4 = ± <span style="color:#94a3b8;">…………</span>
    </li>
    <li>So x = … or x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 8x = −12 → x² + 8x + 16 = 4 → (x + 4)² = 4 → x + 4 = ±2 → x = −2 or x = −6.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² − 12x + 7 = 0, correct to 3 decimal places.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Divide by 2: x² − 6x + … = 0 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Move the constant: x² − 6x =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Add (−3)² = 9 to both sides: (x − 3)² =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Square-root and solve <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 6x + 3.5 = 0 → x² − 6x = −3.5 → (x − 3)² = 5.5 → x − 3 = ±2.3452 → x ≈ 5.345 or x ≈ 0.655.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What must be added to x² + 12x to make a perfect square? Write the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">36; (x + 6)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What must be added to x² − 14x? Write the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">49; (x − 7)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Complete the square for x² + 3x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Add <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">9</span><span style="padding:0 4px;">4</span></span>; (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">2</span></span>)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Write x² + 4x + 1 in the form (x + p)² + q.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 2)² − 3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve x² + 2x − 8 = 0 by completing the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 1)² = 9 → x = 2 or x = −4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve x² − 6x + 4 = 0, correct to 2 decimal places.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 3)² = 5 → x = 3 ± 2.236 → x ≈ 5.24 or 0.76</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve x² + x − 1 = 0, correct to 2 decimal places.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + ½)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">4</span></span> → x = −0.5 ± 1.118 → x ≈ 0.62 or −1.62</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve 2x² − 3x − 2 = 0 by completing the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">2</span></span>x = 1 → (x − ¾)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">16</span></span> → x = ¾ ± <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">4</span></span> → x = 2 or x = −½</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Solve 3x² + 6x − 1 = 0, correct to 2 decimal places.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 2x = ⅓ → (x + 1)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">4</span><span style="padding:0 4px;">3</span></span> → x = −1 ± 1.1547 → x ≈ 0.15 or −2.15</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Find the minimum value of x² − 8x + 21 and the value of x where it occurs.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 4)² + 5 → minimum 5 when x = 4</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> A vegetable bed is x m wide and (x + 6) m long. Its area is 40 m². Form an equation and solve it by completing the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 6x = 40 → (x + 3)² = 49 → x = 4 (reject −10). The bed is 4 m by 10 m.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> Explain why (x + 2)² = −9 has no real solution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">A real number squared is never negative, so no real x makes (x + 2)² equal to −9.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Construction</p>
    <div>Engineers complete the square to find the lowest point of a cable or arch modelled by a quadratic.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💰 Business</p>
    <div>A profit formula such as P = −x² + 40x − 300 can be completed to find the number of items that gives maximum profit.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚽ Sports</p>
    <div>The height of a ball is quadratic in time; completing the square gives the greatest height.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💻 Computer graphics</p>
    <div>Game engines solve quadratic equations to tell when a moving object hits a curved surface.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing completing the square for equations that do not factorise and checking the roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the area model of completing the square to a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a calculator to evaluate square roots and check answers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Following the five-step routine and correcting errors.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (maximum profit)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (projectile heights)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep exact values until the last step: store √6.5 in memory (or use the answer key) instead of typing a rounded value.</li>
    <li>Use the fraction key to add fractions such as 2/3 + 25/36 = 49/36.</li>
    <li>Check each root by substituting it back into the original equation; the result should be 0 (or very close, such as 0.0001, because of rounding).</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Half then square quickly: b = 10 → 25; b = 14 → 49; b = 7 → 12.25; b = 3 → 2.25.</li>
    <li>Recognise perfect squares on sight: x² − 18x + 81 = (x − 9)² because 81 = 9² and 18 = 2 × 9.</li>
    <li>Estimate: √5 is a little more than 2 (since 2² = 4), so 2 + √5 is a bit more than 4.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding (b/2)² to the left side only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The equation is no longer balanced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add the same number to both sides</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using half of the constant c</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The missing corner depends on the coefficient of x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Halve b, the coefficient of x, then square it</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing x + 3 = 4 only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both 4 and −4 square to 16</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write x + 3 = ±4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not dividing by a first</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The method needs x² with coefficient 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide every term by a</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + 3)² = x² + 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The middle term 6x is missing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + 3)² = x² + 6x + 9</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Say the routine aloud: “move, halve, square, add both sides, root with ±, solve.”</li>
    <li>Always rewrite the left side as a bracket squared before taking roots — it prevents slips.</li>
    <li>Check every root by substitution; it takes 20 seconds and catches most errors.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>x² + bx + (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)²</li>
    <li>Divide by a first if a ≠ 1.</li>
    <li>Square-rooting gives ±.</li>
    <li>(x + p)² + q has minimum value q when x = −p.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>If the question says “by completing the square”, you will get no marks for factorising or the formula.</li>
    <li>Show the line (x + p)² = number clearly — it carries a method mark.</li>
    <li>Give answers to the accuracy asked (e.g. 2 decimal places); do not round in the middle of the working.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What must be added to x² − 2x to make a perfect square?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1, giving (x − 1)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: x² + 10x + ___ = (x + ___)²</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">25 and 5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Predict: will x² + 4x + 7 = 0 have real solutions? (Complete the square.)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 2)² + 3 = 0 → (x + 2)² = −3, impossible. No real solutions.</div>
    </details>
    </div>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔎 Spot the Pattern</p>
    <div>Complete the square for x² + 2x, x² + 4x, x² + 6x, x² + 8x. What pattern do the added numbers follow?<details style="margin-top:6px;">
    <summary style="cursor:pointer;color:#f9a8d4;">Show the pattern</summary>1, 4, 9, 16 — the square numbers, because half of 2, 4, 6, 8 is 1, 2, 3, 4.</details>
    </div>
    </div>
    <div style="background:#2b1a0b;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">🏆 Mini Challenge</p>
    <div>Find the value of k that makes x² + kx + 49 a perfect square. (There are two answers.)<details style="margin-top:6px;">
    <summary style="cursor:pointer;color:#fdba74;">Show answer</summary>(k/2)² = 49 → k/2 = ±7 → k = 14 or k = −14.</details>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which step of completing the square do I find hardest, and why?</li>
    <li>How is completing the square related to the area picture?</li>
    <li>When would I choose completing the square instead of factorising?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A perfect square has the form (x + p)² = x² + 2px + p².</li>
    <li>To complete the square for x² + bx, add (b ÷ 2)².</li>
    <li>x² + bx + c = (x + b/2)² + c − (b/2)².</li>
    <li>To solve: move the constant, add (b/2)² to both sides, square-root (±), solve.</li>
    <li>If a ≠ 1, divide every term by a first.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Step</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example: x² − 4x − 1 = 0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Move constant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 4x = 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Add (b/2)² both sides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 4x + 4 = 5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Write as square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x − 2)² = 5</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Root with ±</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x − 2 = ±√5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5. Solve</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = 2 ± √5</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Perfect square</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An expression equal to a bracket squared, e.g. x² + 6x + 9 = (x + 3)².</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Completing the square</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rewriting x² + bx + c as (x + p)² + q.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Root</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A solution of an equation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Minimum value</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The least value an expression can take.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Surd</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An exact root that is irrational, such as √5.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) Write x² − 6x + 2 in the form (x − p)² + q. (b) Hence solve x² − 6x + 2 = 0, correct to 2 decimal places. (c) State the minimum value of x² − 6x + 2. <span style="color:#fde68a;font-size:13px;">(6 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) (x − 3)² − 9 + 2 = (x − 3)² − 7 [2]. (b) (x − 3)² = 7 → x = 3 ± 2.6458 → x ≈ 5.65 or 0.35 [3]. (c) Minimum −7 when x = 3 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Solve 2x² + 5x − 3 = 0 by completing the square. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">2</span></span> [1]; add <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">16</span></span>: (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">4</span></span>)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">49</span><span style="padding:0 4px;">16</span></span> [1]; x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">4</span></span> = ±<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7</span><span style="padding:0 4px;">4</span></span> [1]; x = ½ or x = −3 [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete the square for x² + 16x, x² − 9x and x² + ⅔x.</li>
    <li>Solve by completing the square: x² − 8x + 13 = 0 (exact and 2 d.p.).</li>
    <li>Solve 4x² + 4x − 3 = 0 by completing the square.</li>
    <li>Write x² + 2x + 10 in the form (x + p)² + q and explain why it is always positive.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'What number must be added to x² + 10x to make a perfect square?',
            options: ['25', '10', '20', '100'],
            correct: 0,
            explanation: 'Half of 10 is 5, and 5² = 25, so x² + 10x + 25 = (x + 5)².'
        },
        {
            question: 'x² − 8x + 16 is equal to:',
            options: ['(x − 4)²', '(x + 4)²', '(x − 8)²', '(x − 16)²'],
            correct: 0,
            explanation: 'Half of −8 is −4 and (−4)² = 16, so the expression is (x − 4)².'
        },
        {
            question: 'Write x² + 6x + 1 in the form (x + p)² + q.',
            options: ['(x + 3)² + 1', '(x + 6)² − 35', '(x + 3)² + 10', '(x + 3)² − 8'],
            correct: 3,
            explanation: 'x² + 6x + 9 − 9 + 1 = (x + 3)² − 8.'
        },
        {
            question: 'Solve (x − 2)² = 9.',
            options: ['x = 5 only', 'x = 11 or x = −7', 'x = 5 or x = −1', 'x = 3 or x = −3'],
            correct: 2,
            explanation: 'x − 2 = ±3, so x = 5 or x = −1.'
        },
        {
            question: 'Before completing the square for 3x² + 12x − 4 = 0, the first step is to:',
            options: ['add 36 to both sides', 'divide every term by 3', 'take the square root', 'factorise'],
            correct: 1,
            explanation: 'The method needs the coefficient of x² to be 1, so divide every term by 3.'
        },
        {
            question: 'What must be added to x² + 3x to make a perfect square?',
            options: ['3/2', '9', '9/4', '3'],
            correct: 2,
            explanation: 'Half of 3 is 3/2 and (3/2)² = 9/4.'
        },
        {
            question: 'The minimum value of (x + 1)² + 4 is:',
            options: ['1', '4', '−1', '5'],
            correct: 1,
            explanation: 'The squared bracket is at least 0, so the smallest value is 0 + 4 = 4 (when x = −1).'
        },
        {
            question: 'Why does (x + 1)² = −4 have no real solution?',
            options: ['Because 4 is even', 'Because x must be positive', 'Because the bracket has a plus sign', 'Because a real number squared cannot be negative'],
            correct: 3,
            explanation: 'The square of any real number is zero or positive, so it can never equal −4.'
        }
    ]
},
{
    name: '1.1.2 The Quadratic Formula',
    type: 'lesson',
    duration: '80 min',
    exercises: 11,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 2</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 The Quadratic Formula</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Derive the quadratic formula by completing the square.</li>
    <li>Identify a, b and c in a quadratic equation written in the form ax² + bx + c = 0.</li>
    <li>Use the quadratic formula to solve quadratic equations, giving exact or rounded answers.</li>
    <li>Use the value of b² − 4ac to tell whether an equation has two, one or no real roots.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Completing the square (Lesson 1), substituting negative numbers, the order of operations and using a calculator for square roots.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> Is there one method that solves every quadratic equation?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Completing the square works every time, but it can be slow, especially with fractions. Mathematicians asked: what if we complete the square once, on the <em>general</em> equation ax² + bx + c = 0? The result is a formula that solves any quadratic in one line.</p>
    <p>This formula is one of the most used results in school mathematics. Engineers, economists and programmers use it every day.</p>
    <div style="background:#1f2937;border-left:4px solid #94a3b8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">📜 Did You Know?</p>
    <div>Methods for solving quadratic problems were used thousands of years ago by Babylonian and Indian mathematicians. The formula in the symbolic form you will learn today came much later, once algebra notation was developed.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“We already know how to complete the square. So let us do it with letters instead of numbers. If the letters a, b and c can stand for any numbers, the answer we get will work for every quadratic equation.</p>
    <p>Once you have the formula, using it is like following a recipe: write the equation in the form ax² + bx + c = 0, read off a, b and c with their signs, substitute carefully using brackets, and simplify. Most mistakes come from signs — so we will be very careful with negative numbers.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Standard form</p>
    <div>
    <p style="margin:0;">A quadratic equation written as ax² + bx + c = 0.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2x² − 3x + 1 = 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quadratic formula</p>
    <div>
    <p style="margin:0;">A formula that gives the roots of ax² + bx + c = 0.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>
    </p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Discriminant</p>
    <div>
    <p style="margin:0;">The expression b² − 4ac under the square root sign.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: For x² + 2x + 5, it is 4 − 20 = −16</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Real roots</p>
    <div>
    <p style="margin:0;">Solutions that are real numbers.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = 3 and x = 0.5</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Repeated root</p>
    <div>
    <p style="margin:0;">When both roots are the same number.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 6x + 9 = 0 gives x = 3 twice</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Exact answer</p>
    <div>
    <p style="margin:0;">An answer left in surd or fraction form, with no rounding.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = −3 ± √5</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Start from the general equation</p>
    <p>ax² + bx + c = 0, where a ≠ 0. Divide every term by a:</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x² + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">a</span></span>x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">c</span><span style="padding:0 4px;">a</span></span> = 0</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Move the constant and complete the square</p>
    <p>Half of <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">a</span></span> is <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2a</span></span>. Add its square to both sides:</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x² + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">a</span></span>x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b²</span><span style="padding:0 4px;">4a²</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b²</span><span style="padding:0 4px;">4a²</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">c</span><span style="padding:0 4px;">a</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Write as a perfect square and combine fractions</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">(x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2a</span></span>)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b² − 4ac</span><span style="padding:0 4px;">4a²</span></span>
    </p>
    <p>The right side uses a common denominator 4a²: c/a = 4ac/4a².</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Take the square root</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2a</span></span> = ± <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>
    </p>
    <p>√(4a²) = 2a.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Make x the subject</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>
    </p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>This is the quadratic formula. You do not need to derive it in every question — but understanding where it comes from helps you remember it correctly.</div>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 6: Using the formula: the routine</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Rearrange into the form ax² + bx + c = 0 (everything on one side, 0 on the other).</li>
    <li>Write down a, b and c, including their signs.</li>
    <li>Work out b² − 4ac first.</li>
    <li>Substitute into the formula, using brackets for negative values.</li>
    <li>Simplify and round only at the end.</li>
    </ol>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>The number under the square root, <strong>b² − 4ac</strong>, decides how many real roots there are. On a graph, the roots are where the curve meets the x-axis:</p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;">
    <div style="flex:1 1 200px;text-align:center;">
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 206 227" width="268" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="30" y1="202" x2="30" y2="20" stroke="#1e293b"/><line x1="56" y1="202" x2="56" y2="20" stroke="#1e293b"/><line x1="82" y1="202" x2="82" y2="20" stroke="#1e293b"/><line x1="108" y1="202" x2="108" y2="20" stroke="#1e293b"/><line x1="134" y1="202" x2="134" y2="20" stroke="#1e293b"/><line x1="160" y1="202" x2="160" y2="20" stroke="#1e293b"/><line x1="186" y1="202" x2="186" y2="20" stroke="#1e293b"/><line x1="30" y1="202" x2="186" y2="202" stroke="#1e293b"/><line x1="30" y1="176" x2="186" y2="176" stroke="#1e293b"/><line x1="30" y1="150" x2="186" y2="150" stroke="#1e293b"/><line x1="30" y1="124" x2="186" y2="124" stroke="#1e293b"/><line x1="30" y1="98" x2="186" y2="98" stroke="#1e293b"/><line x1="30" y1="72" x2="186" y2="72" stroke="#1e293b"/><line x1="30" y1="46" x2="186" y2="46" stroke="#1e293b"/><line x1="30" y1="20" x2="186" y2="20" stroke="#1e293b"/><line x1="30" y1="150" x2="186" y2="150" stroke="#94a3b8" stroke-width="1.5"/><line x1="108" y1="202" x2="108" y2="20" stroke="#94a3b8" stroke-width="1.5"/><text x="30" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-3</text><text x="56" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-2</text><text x="82" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text><text x="134" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><text x="160" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><text x="186" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><text x="102" y="206" fill="#94a3b8" font-size="11" text-anchor="end">-2</text><text x="102" y="180" fill="#94a3b8" font-size="11" text-anchor="end">-1</text><text x="102" y="128" fill="#94a3b8" font-size="11" text-anchor="end">1</text><text x="102" y="102" fill="#94a3b8" font-size="11" text-anchor="end">2</text><text x="102" y="76" fill="#94a3b8" font-size="11" text-anchor="end">3</text><text x="102" y="50" fill="#94a3b8" font-size="11" text-anchor="end">4</text><text x="102" y="24" fill="#94a3b8" font-size="11" text-anchor="end">5</text><polyline points="30,-58 32.6,-42.660000000000004 35.2,-27.839999999999975 37.8,-13.539999999999957 40.4,0.24000000000005173 43,13.500000000000046 45.6,26.240000000000073 48.2,38.460000000000065 50.8,50.160000000000075 53.4,61.34000000000009 56,72.00000000000009 58.6,82.1400000000001 61.2,91.7600000000001 63.800000000000004,100.8600000000001 66.4,109.4400000000001 69,117.5000000000001 71.6,125.04000000000012 74.19999999999999,132.06000000000012 76.80000000000001,138.56000000000012 79.4,144.54000000000008 82,150.00000000000009 84.6,154.94000000000008 87.2,159.36000000000007 89.8,163.26000000000008 92.4,166.64000000000007 95,169.50000000000006 97.60000000000001,171.84000000000003 100.2,173.66000000000003 102.8,174.96000000000004 105.39999999999999,175.74 108,176 110.60000000000001,175.73999999999998 113.2,174.95999999999998 115.8,173.65999999999997 118.39999999999999,171.83999999999997 121,169.49999999999994 123.60000000000001,166.63999999999996 126.2,163.25999999999993 128.8,159.35999999999993 131.39999999999998,154.93999999999994 134,149.99999999999991 136.6,144.5399999999999 139.2,138.5599999999999 141.8,132.0599999999999 144.4,125.03999999999986 147,117.49999999999984 149.6,109.43999999999983 152.2,100.85999999999981 154.8,91.75999999999979 157.4,82.13999999999977 160,71.99999999999977 162.6,61.33999999999974 165.20000000000002,50.15999999999973 167.79999999999998,38.459999999999695 170.4,26.239999999999682 173,13.499999999999654 175.6,0.23999999999963606 178.20000000000002,-13.54000000000039 180.79999999999998,-27.840000000000437 183.4,-42.660000000000466 186,-58.00000000000051" fill="none" stroke="#86efac" stroke-width="2.5"/><text x="32.6" y="35.599999999999994" fill="#86efac" font-size="12">b² − 4ac > 0</text>
    </svg>
    </div>
    <p style="margin:0;color:#86efac;">Crosses the x-axis twice → two roots</p>
    </div>
    <div style="flex:1 1 200px;text-align:center;">
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 206 227" width="268" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="30" y1="202" x2="30" y2="20" stroke="#1e293b"/><line x1="56" y1="202" x2="56" y2="20" stroke="#1e293b"/><line x1="82" y1="202" x2="82" y2="20" stroke="#1e293b"/><line x1="108" y1="202" x2="108" y2="20" stroke="#1e293b"/><line x1="134" y1="202" x2="134" y2="20" stroke="#1e293b"/><line x1="160" y1="202" x2="160" y2="20" stroke="#1e293b"/><line x1="186" y1="202" x2="186" y2="20" stroke="#1e293b"/><line x1="30" y1="202" x2="186" y2="202" stroke="#1e293b"/><line x1="30" y1="176" x2="186" y2="176" stroke="#1e293b"/><line x1="30" y1="150" x2="186" y2="150" stroke="#1e293b"/><line x1="30" y1="124" x2="186" y2="124" stroke="#1e293b"/><line x1="30" y1="98" x2="186" y2="98" stroke="#1e293b"/><line x1="30" y1="72" x2="186" y2="72" stroke="#1e293b"/><line x1="30" y1="46" x2="186" y2="46" stroke="#1e293b"/><line x1="30" y1="20" x2="186" y2="20" stroke="#1e293b"/><line x1="30" y1="150" x2="186" y2="150" stroke="#94a3b8" stroke-width="1.5"/><line x1="108" y1="202" x2="108" y2="20" stroke="#94a3b8" stroke-width="1.5"/><text x="30" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-3</text><text x="56" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-2</text><text x="82" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text><text x="134" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><text x="160" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><text x="186" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><text x="102" y="206" fill="#94a3b8" font-size="11" text-anchor="end">-2</text><text x="102" y="180" fill="#94a3b8" font-size="11" text-anchor="end">-1</text><text x="102" y="128" fill="#94a3b8" font-size="11" text-anchor="end">1</text><text x="102" y="102" fill="#94a3b8" font-size="11" text-anchor="end">2</text><text x="102" y="76" fill="#94a3b8" font-size="11" text-anchor="end">3</text><text x="102" y="50" fill="#94a3b8" font-size="11" text-anchor="end">4</text><text x="102" y="24" fill="#94a3b8" font-size="11" text-anchor="end">5</text><polyline points="30,-84 32.6,-68.66 35.2,-53.839999999999975 37.8,-39.53999999999996 40.4,-25.75999999999995 43,-12.499999999999957 45.6,0.24000000000007304 48.2,12.460000000000068 50.8,24.160000000000075 53.4,35.34000000000009 56,46.00000000000009 58.6,56.14000000000009 61.2,65.7600000000001 63.800000000000004,74.8600000000001 66.4,83.44000000000011 69,91.5000000000001 71.6,99.0400000000001 74.19999999999999,106.0600000000001 76.80000000000001,112.5600000000001 79.4,118.54000000000009 82,124.00000000000009 84.6,128.94000000000008 87.2,133.36000000000007 89.8,137.26000000000005 92.4,140.64000000000004 95,143.50000000000006 97.60000000000001,145.84000000000003 100.2,147.66000000000003 102.8,148.96000000000004 105.39999999999999,149.74 108,150 110.60000000000001,149.73999999999998 113.2,148.95999999999998 115.8,147.65999999999997 118.39999999999999,145.83999999999997 121,143.49999999999994 123.60000000000001,140.63999999999993 126.2,137.25999999999993 128.8,133.35999999999996 131.39999999999998,128.93999999999994 134,123.99999999999991 136.6,118.5399999999999 139.2,112.5599999999999 141.8,106.05999999999987 144.4,99.03999999999986 147,91.49999999999984 149.6,83.43999999999983 152.2,74.85999999999981 154.8,65.75999999999979 157.4,56.13999999999977 160,45.99999999999977 162.6,35.33999999999974 165.20000000000002,24.159999999999727 167.79999999999998,12.459999999999699 170.4,0.23999999999968225 173,-12.500000000000348 175.6,-25.76000000000036 178.20000000000002,-39.54000000000039 180.79999999999998,-53.84000000000043 183.4,-68.66000000000047 186,-84.00000000000051" fill="none" stroke="#fde68a" stroke-width="2.5"/><text x="32.6" y="35.599999999999994" fill="#fde68a" font-size="12">b² − 4ac = 0</text>
    </svg>
    </div>
    <p style="margin:0;color:#fde68a;">Touches the x-axis once → one repeated root</p>
    </div>
    <div style="flex:1 1 200px;text-align:center;">
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 206 227" width="268" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="30" y1="202" x2="30" y2="20" stroke="#1e293b"/><line x1="56" y1="202" x2="56" y2="20" stroke="#1e293b"/><line x1="82" y1="202" x2="82" y2="20" stroke="#1e293b"/><line x1="108" y1="202" x2="108" y2="20" stroke="#1e293b"/><line x1="134" y1="202" x2="134" y2="20" stroke="#1e293b"/><line x1="160" y1="202" x2="160" y2="20" stroke="#1e293b"/><line x1="186" y1="202" x2="186" y2="20" stroke="#1e293b"/><line x1="30" y1="202" x2="186" y2="202" stroke="#1e293b"/><line x1="30" y1="176" x2="186" y2="176" stroke="#1e293b"/><line x1="30" y1="150" x2="186" y2="150" stroke="#1e293b"/><line x1="30" y1="124" x2="186" y2="124" stroke="#1e293b"/><line x1="30" y1="98" x2="186" y2="98" stroke="#1e293b"/><line x1="30" y1="72" x2="186" y2="72" stroke="#1e293b"/><line x1="30" y1="46" x2="186" y2="46" stroke="#1e293b"/><line x1="30" y1="20" x2="186" y2="20" stroke="#1e293b"/><line x1="30" y1="150" x2="186" y2="150" stroke="#94a3b8" stroke-width="1.5"/><line x1="108" y1="202" x2="108" y2="20" stroke="#94a3b8" stroke-width="1.5"/><text x="30" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-3</text><text x="56" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-2</text><text x="82" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text><text x="134" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><text x="160" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><text x="186" y="164" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><text x="102" y="206" fill="#94a3b8" font-size="11" text-anchor="end">-2</text><text x="102" y="180" fill="#94a3b8" font-size="11" text-anchor="end">-1</text><text x="102" y="128" fill="#94a3b8" font-size="11" text-anchor="end">1</text><text x="102" y="102" fill="#94a3b8" font-size="11" text-anchor="end">2</text><text x="102" y="76" fill="#94a3b8" font-size="11" text-anchor="end">3</text><text x="102" y="50" fill="#94a3b8" font-size="11" text-anchor="end">4</text><text x="102" y="24" fill="#94a3b8" font-size="11" text-anchor="end">5</text><polyline points="30,-110 32.6,-94.66 35.2,-79.84 37.8,-65.53999999999998 40.4,-51.75999999999995 43,-38.49999999999996 45.6,-25.759999999999927 48.2,-13.539999999999935 50.8,-1.8399999999999253 53.4,9.340000000000089 56,20.000000000000092 58.6,30.140000000000107 61.2,39.76000000000009 63.800000000000004,48.8600000000001 66.4,57.440000000000104 69,65.50000000000011 71.6,73.0400000000001 74.19999999999999,80.0600000000001 76.80000000000001,86.5600000000001 79.4,92.54000000000009 82,98.00000000000009 84.6,102.94000000000008 87.2,107.36000000000007 89.8,111.26000000000006 92.4,114.64000000000004 95,117.50000000000004 97.60000000000001,119.84000000000003 100.2,121.66000000000003 102.8,122.96000000000002 105.39999999999999,123.74000000000001 108,124 110.60000000000001,123.74 113.2,122.95999999999998 115.8,121.65999999999998 118.39999999999999,119.83999999999997 121,117.49999999999996 123.60000000000001,114.63999999999994 126.2,111.25999999999995 128.8,107.35999999999994 131.39999999999998,102.93999999999993 134,97.99999999999991 136.6,92.5399999999999 139.2,86.5599999999999 141.8,80.05999999999987 144.4,73.03999999999986 147,65.49999999999983 149.6,57.43999999999983 152.2,48.859999999999815 154.8,39.759999999999785 157.4,30.139999999999784 160,19.99999999999977 162.6,9.339999999999742 165.20000000000002,-1.8400000000002734 167.79999999999998,-13.540000000000305 170.4,-25.760000000000318 173,-38.50000000000035 175.6,-51.76000000000036 178.20000000000002,-65.54000000000039 180.79999999999998,-79.84000000000046 183.4,-94.66000000000047 186,-110.00000000000051" fill="none" stroke="#fca5a5" stroke-width="2.5"/><text x="32.6" y="35.599999999999994" fill="#fca5a5" font-size="12">b² − 4ac &lt; 0</text>
    </svg>
    </div>
    <p style="margin:0;color:#fca5a5;">Never meets the x-axis → no real roots</p>
    </div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Value of b² − 4ac</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number of real roots</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two different roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 5x + 6 = 0 (25 − 24 = 1)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zero</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One repeated root</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 6x + 9 = 0 (36 − 36 = 0)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Negative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No real roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 2x + 5 = 0 (4 − 20 = −16)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · The quadratic formula</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Gives both roots of ax² + bx + c = 0: one with +, one with −.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> For any quadratic equation, especially when it does not factorise or when answers are needed to decimal places.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> It comes from completing the square on ax² + bx + c = 0.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> The whole numerator −b ± √(b² − 4ac) is divided by 2a, not just the square root.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Negative b, plus or minus the root of b squared minus four a c, all over two a.”</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Discriminant</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">b² − 4ac</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Positive: two roots; zero: one repeated root; negative: no real roots.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> To check quickly whether an equation can be solved before doing the full working.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> b² is always positive or zero — square negative b with brackets: (−3)² = 9.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Identifying a, b and c <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 5x + 6 = 0 using the formula.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Already in standard form: a = 1, b = 5, c = 6.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> b² − 4ac = 5² − 4(1)(6) = 25 − 24 = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Do the discriminant first; it is positive, so there are two roots.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−5 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">1</span></span><span style="padding:0 4px;">2(1)</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−5 ± 1</span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute a = 1, b = 5 and c = 6 into the formula.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−4</span><span style="padding:0 4px;">2</span></span> = −2 or x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−6</span><span style="padding:0 4px;">2</span></span> = −3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Work out the + case and the − case separately.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −2 or x = −3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Forgetting to divide the whole numerator by 2a, e.g. writing −5 ± 1 ÷ 2.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Factorising: (x + 2)(x + 3) = 0. Use this to check the formula answer.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: When a is not 1 <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² − 7x + 3 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> a = 2, b = −7, c = 3. Careful: −b = 7.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> b² − 4ac = (−7)² − 4(2)(3) = 49 − 24 = 25</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Brackets around −7 make sure it squares to +49.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7 ± 5</span><span style="padding:0 4px;">4</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> −b = −(−7) = 7 and √25 = 5.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">12</span><span style="padding:0 4px;">4</span></span> = 3 or x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">2</span><span style="padding:0 4px;">4</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">1</span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Simplify each fraction to get the two roots.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 3 or x = ½</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing −b as −7 instead of +7.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Answers to 2 decimal places <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 4x − 2 = 0, giving answers to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> a = 1, b = −4, c = −2.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> b² − 4ac = 16 − 4(1)(−2) = 16 + 8 = 24</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Minus a negative becomes plus.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">4 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">24</span></span><span style="padding:0 4px;">2</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">4 ± 4.8990</span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute a = 1, b = −4 and the discriminant 24; √24 ≈ 4.8990.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = 8.8990 ÷ 2 = 4.4495 or x = −0.8990 ÷ 2 = −0.4495</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Evaluate the + and − cases, then round at the end only.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 4.45 or x ≈ −0.45</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Sum of roots = 4.00 = −b/a ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing −4(1)(−2) as −8 instead of +8.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Larger coefficients <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 3x² + 2x − 4 = 0, correct to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> a = 3, b = 2, c = −4.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> b² − 4ac = 4 − 4(3)(−4) = 4 + 48 = 52</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Minus a negative becomes plus: −4(3)(−4) = +48.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−2 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">52</span></span><span style="padding:0 4px;">6</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−2 ± 7.2111</span><span style="padding:0 4px;">6</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 2a = 6.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = 5.2111 ÷ 6 = 0.8685 or x = −9.2111 ÷ 6 = −1.5352</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Evaluate the + and − cases before rounding.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 0.87 or x ≈ −1.54</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only √52 by 6 and then subtracting 2.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Rearrange first <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 5x² = 3x + 1, correct to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The formula only works when the right side is 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 5x² − 3x − 1 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract 3x and 1 from both sides.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> a = 5, b = −3, c = −1; b² − 4ac = 9 + 20 = 29</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Read a, b and c with their signs, then compute the discriminant.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">29</span></span><span style="padding:0 4px;">10</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3 ± 5.3852</span><span style="padding:0 4px;">10</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute into the formula; 2a = 10 and √29 ≈ 5.3852.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 0.83852 or x = −0.23852</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide each numerator by 10 to get both roots.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 0.84 or x ≈ −0.24</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using a = 5, b = 3, c = 1 straight from 5x² = 3x + 1 without rearranging.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Negative coefficient of x² <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve −x² + 3x + 10 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiplying every term by −1 makes the numbers friendlier and does not change the roots.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 3x − 10 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply every term by −1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> b² − 4ac = 9 + 40 = 49</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> a = 1, b = −3, c = −10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3 ± 7</span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> With a = 1, b = −3, the numerator is −(−3) ± √49 = 3 ± 7, over 2a = 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 5 or x = −2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 3 + 7 = 10 and 10 ÷ 2 = 5; 3 − 7 = −4 and −4 ÷ 2 = −2.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 5 or x = −2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying only the x² term by −1 and leaving the other terms unchanged.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Use a = −1, b = 3, c = 10 directly: x = (−3 ± 7) ÷ (−2), which also gives −2 and 5.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 7: Exact (surd) answers <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 6x + 4 = 0, leaving your answer in simplest surd form.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Leave the square root unevaluated, then simplify.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> b² − 4ac = 36 − 16 = 20</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Compute the discriminant first: b² = 36 and 4ac = 16.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−6 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">20</span></span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute into the formula; leave √20 unevaluated for an exact answer.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">20</span> = √<span style="border-top:1px solid currentColor;padding:0 2px;">4 × 5</span> = 2√<span style="border-top:1px solid currentColor;padding:0 2px;">5</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> You will practise simplifying surds in sub-strand 1.2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−6 ± 2√<span style="border-top:1px solid currentColor;padding:0 2px;">5</span></span><span style="padding:0 4px;">2</span></span> = −3 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide both terms of the numerator by 2.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −3 + √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span> or x = −3 − √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span>
    </div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Completing the square: (x + 3)² = 5 gives the same answer.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only −6 by 2 and leaving 2√5 undivided.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 8: No real roots <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Show that x² + 2x + 5 = 0 has no real roots.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Look at the discriminant.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> b² − 4ac = 2² − 4(1)(5) = 4 − 20 = −16</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The discriminant is negative, so we expect no real roots.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> The square root of a negative number is not a real number.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So the formula cannot give real values.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> b² − 4ac = −16 &lt; 0, so there are no real roots.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Stopping at √(−16) = −4 — there is no real square root of a negative number.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Completing the square: (x + 1)² + 4 = 0 → (x + 1)² = −4, impossible.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² + 3x − 5 = 0 using the formula.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>a = …, b = …, c = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>b² − 4ac = 9 − 4(2)(−5) =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = (−3 ± …) ÷ 4 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = … or x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 2, b = 3, c = −5; b² − 4ac = 9 + 40 = 49; x = (−3 ± 7) ÷ 4; x = 1 or x = −2.5.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 3x − 5 = 0, correct to 2 decimal places.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>a = 1, b = −3, c = −5 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>b² − 4ac =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = (3 ± √…) ÷ 2 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x ≈ … or x ≈ … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 9 + 20 = 29; x = (3 ± 5.3852) ÷ 2; x ≈ 4.19 or x ≈ −1.19.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write down a, b and c for 3x² − x + 7 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 3, b = −1, c = 7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve x² + 7x + 10 = 0 using the formula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 9 → x = (−7 ± 3)/2 → x = −2 or −5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve x² − x − 6 = 0 using the formula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 25 → x = (1 ± 5)/2 → x = 3 or −2</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve 2x² + x − 6 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 49 → x = (−1 ± 7)/4 → x = 1.5 or −2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve x² + 4x − 3 = 0, correct to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 28 → x = (−4 ± 5.2915)/2 → x ≈ 0.65 or −4.65</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve 4x² − 4x − 1 = 0, correct to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 32 → x = (4 ± 5.6569)/8 → x ≈ 1.21 or −0.21</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve x(x + 3) = 7, correct to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 3x − 7 = 0; b² − 4ac = 37 → x = (−3 ± 6.0828)/2 → x ≈ 1.54 or −4.54</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">x</span></span> = x − 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Multiply by x: 3 = x² − 2x → x² − 2x − 3 = 0 → x = 3 or x = −1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Find the nature of the roots of 4x² − 12x + 9 = 0 and solve it.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 144 − 144 = 0 → one repeated root x = 12/8 = 1.5</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A stone is thrown upwards. Its height after t seconds is h = 20t − 5t² metres. When is it 15 m above the ground?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5t² − 20t + 15 = 0 → t² − 4t + 3 = 0 → t = 1 s (going up) or t = 3 s (coming down).</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Why must a not be 0 in the quadratic formula?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">The formula divides by 2a; if a = 0 we would divide by zero, and the equation would be linear, not quadratic.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚗 Road safety</p>
    <div>Stopping distance formulas are quadratic in speed; the formula finds the maximum safe speed for a given distance.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📈 Economics</p>
    <div>Break-even points, where revenue equals cost, often come from a quadratic equation.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🛰️ Engineering</p>
    <div>Satellite dishes and bridge arches are parabolas; their measurements are found with the formula.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🤖 Programming</p>
    <div>Many programs include a short routine that uses the quadratic formula, for example in physics simulations.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deriving the formula and using the discriminant to predict the number of roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presenting the derivation step by step to classmates.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a calculator efficiently for the formula and checking with equation mode.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving any quadratic with one reliable method.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Road safety (stopping distances)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (break-even)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Work out b² − 4ac first and write it down; then find its square root.</li>
    <li>Use brackets when squaring negatives: (−7)² = 49, but −7² on many calculators gives −49.</li>
    <li>Type the whole numerator in brackets before dividing: (−2 + √52) ÷ 6.</li>
    <li>Some calculators have an equation mode that solves quadratics. Use it only to check — exams expect working.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>If b² − 4ac is a perfect square (1, 4, 9, 16, 25…), the equation factorises — the roots are rational.</li>
    <li>Sum of roots = −b/a and product of roots = c/a. Use these to check answers quickly.</li>
    <li>Estimate √29: between 5 (25) and 6 (36), closer to 5 → about 5.4.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−b written as −7 when b = −7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−(−7) = +7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write −b with brackets: −(−7) = 7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">b² for b = −3 taken as −9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A negative number squared is positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−3)² = 9</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dividing only the square root by 2a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The fraction line covers the whole numerator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide (−b ± √(b² − 4ac)) by 2a</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using the formula before rearranging</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The formula needs ax² + bx + c = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Move every term to one side first</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4ac with c negative computed as −</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 × a × (negative) is positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use brackets: −4(2)(−5) = +40</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write “a = …, b = …, c = …” at the top of every solution.</li>
    <li>Work out the discriminant separately — it reduces errors and tells you what to expect.</li>
    <li>Use the sum-of-roots check (−b/a) to catch sign errors.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>
    </li>
    <li>Rearrange to = 0 first.</li>
    <li>b² − 4ac > 0: two roots; = 0: one root; &lt; 0: no real roots.</li>
    <li>Round only at the final step.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Questions saying “correct to 2 decimal places” are a hint to use the formula.</li>
    <li>Show the substituted formula — it earns a method mark even if the arithmetic slips.</li>
    <li>If the context is a length or time, reject negative answers and say why.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> For 3x² − 2x − 8 = 0, find b² − 4ac.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(−2)² − 4(3)(−8) = 4 + 96 = 100</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: for x² + 4x + 4 = 0, b² − 4ac = ___, so there is ___ root.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0; one repeated root (x = −2)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Predict the number of real roots of 2x² + x + 3 = 0 without solving.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1 − 24 = −23 &lt; 0, so no real roots.</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Choose any three quadratic equations from this lesson. For each, add the two roots and multiply them. Compare with −b/a and c/a. What do you find?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I understand where the formula comes from, or have I only memorised it?</li>
    <li>Which sign mistakes do I make most often?</li>
    <li>How do I decide between factorising and the formula?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The quadratic formula x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span> solves ax² + bx + c = 0.</li>
    <li>It is found by completing the square on the general equation.</li>
    <li>Always rearrange to standard form first and note the signs of a, b and c.</li>
    <li>The discriminant b² − 4ac tells you the number of real roots.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">a, b, c</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">b² − 4ac</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Roots</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 5x + 6 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1, 5, 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2, −3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2x² − 7x + 3 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2, −7, 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3, ½</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 4x − 2 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1, −4, −2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">24</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.45, −0.45</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 2x + 5 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1, 2, 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−16</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">none (real)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Quadratic formula</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = (−b ± √(b² − 4ac)) ÷ 2a.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Discriminant</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">b² − 4ac; decides the number of real roots.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Standard form</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ax² + bx + c = 0.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Repeated root</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A single root that occurs twice.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) Show that the equation 2x² = 6x − 1 can be written as 2x² − 6x + 1 = 0. (b) Solve it, giving answers correct to 3 significant figures. <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) Subtract 6x and add 1 to both sides [1]. (b) a = 2, b = −6, c = 1; b² − 4ac = 36 − 8 = 28 [1]; x = (6 ± 5.2915) ÷ 4 [1]; x ≈ 2.82 or 0.177 [2].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> The equation x² + kx + 9 = 0 has one repeated root. Find the possible values of k. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Repeated root: b² − 4ac = 0 → k² − 36 = 0 [1] → k² = 36 [1] → k = 6 or k = −6 [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve using the formula: 3x² − 5x + 1 = 0 (2 d.p.).</li>
    <li>Solve x² + 10x + 18 = 0 in simplest surd form.</li>
    <li>Without solving, state the number of real roots of 5x² − 2x + 1 = 0 and 9x² − 6x + 1 = 0.</li>
    <li>A rectangle has area 30 cm² and its length is 4 cm more than its width. Find the width to 2 d.p.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The quadratic formula gives x equal to:',
            options: ['(−b ± √(b² − 4ac)) ÷ 2a', '(b ± √(b² − 4ac)) ÷ 2a', '(−b ± √(b² + 4ac)) ÷ 2a', '−b ± √(b² − 4ac) ÷ 2'],
            correct: 0,
            explanation: 'The roots of ax² + bx + c = 0 are (−b ± √(b² − 4ac)) ÷ 2a, with the whole numerator divided by 2a.'
        },
        {
            question: 'For 2x² − 5x − 3 = 0, the values of a, b and c are:',
            options: ['2, 5, 3', '2, −5, 3', '2, −5, −3', '−2, 5, 3'],
            correct: 2,
            explanation: 'Read the coefficients with their signs: a = 2, b = −5, c = −3.'
        },
        {
            question: 'For x² − 3x − 4 = 0, b² − 4ac equals:',
            options: ['−7', '25', '9', '−25'],
            correct: 1,
            explanation: '(−3)² − 4(1)(−4) = 9 + 16 = 25.'
        },
        {
            question: 'If b² − 4ac is negative, the equation has:',
            options: ['no real roots', 'two real roots', 'one repeated root', 'infinitely many roots'],
            correct: 0,
            explanation: 'The square root of a negative number is not real, so there are no real roots.'
        },
        {
            question: 'The roots of x² − 6x + 9 = 0 are:',
            options: ['3 and −3', '6 and 9', 'no real roots', '3 only (repeated)'],
            correct: 3,
            explanation: 'b² − 4ac = 36 − 36 = 0, so there is one repeated root, x = 6 ÷ 2 = 3.'
        },
        {
            question: 'Before using the formula on 3x² = 2x + 7, you must:',
            options: ['divide by 7', 'take the square root of both sides', 'rearrange to 3x² − 2x − 7 = 0', 'factorise'],
            correct: 2,
            explanation: 'The formula only applies when the equation is in the form ax² + bx + c = 0.'
        },
        {
            question: 'Solve x² + 2x − 1 = 0 exactly.',
            options: ['x = 1 ± √2', 'x = −1 ± √2', 'x = −2 ± √2', 'x = −1 ± 2'],
            correct: 1,
            explanation: 'b² − 4ac = 4 + 4 = 8; x = (−2 ± 2√2) ÷ 2 = −1 ± √2.'
        },
        {
            question: 'Which equation has two different real roots?',
            options: ['x² + 4 = 0', 'x² − 4x + 4 = 0', 'x² + x + 1 = 0', 'x² − 4 = 0'],
            correct: 3,
            explanation: 'For x² − 4 = 0, b² − 4ac = 0 + 16 = 16, which is positive, giving x = 2 and x = −2.'
        }
    ]
},
{
    name: '1.1.3 Forming and Solving Quadratic Equations',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 3</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Forming and Solving Quadratic Equations from Real-Life Situations</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Form a quadratic equation when its roots are given.</li>
    <li>Translate word problems into quadratic equations.</li>
    <li>Solve the equations using a suitable method.</li>
    <li>Interpret the solutions and reject those that do not fit the situation.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Solving quadratics by factorising, completing the square and the formula; area and perimeter of rectangles; speed = distance ÷ time; Pythagoras’ theorem.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we turn a real-life problem into a quadratic equation and decide which answer makes sense?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Remember the farmer in Nakuru from the strand introduction? She wants a greenhouse of area 200 m² whose length is 10 m more than its width. Let the width be x m. Then the length is (x + 10) m and:</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x(x + 10) = 200 → x² + 10x − 200 = 0</p>
    <p>Solving gives x = 10 or x = −20. A width cannot be negative, so the greenhouse is 10 m by 20 m. This lesson teaches you to set up and interpret equations like this one.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Word problems scare many learners, but they all follow the same plan. First, decide what the unknown is and give it a letter — write it down in a sentence like <em>Let the width be x metres</em>. Second, write every other quantity in terms of x. Third, use the information in the question to form an equation. Fourth, solve. Finally — and this is where marks are lost — go back to the story and ask: does each answer make sense? A length, a number of people or a price cannot be negative.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Form an equation</p>
    <div>
    <p style="margin:0;">Write the information as an equation.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Area 54 → x(x + 3) = 54</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Roots</p>
    <div>
    <p style="margin:0;">The solutions of the equation.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Roots 2 and 5 → (x − 2)(x − 5) = 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Sum of roots</p>
    <div>
    <p style="margin:0;">The roots added together; equals −b/a.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: For x² − 7x + 10 = 0, sum = 7</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Product of roots</p>
    <div>
    <p style="margin:0;">The roots multiplied; equals c/a.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: For x² − 7x + 10 = 0, product = 10</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Consecutive</p>
    <div>
    <p style="margin:0;">Following one after another.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Consecutive odd numbers: n and n + 2</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Reject</p>
    <div>
    <p style="margin:0;">Discard a solution that does not fit the context.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: A negative length is rejected</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: From roots to equation</p>
    <p>If the roots are α and β, then (x − α)(x − β) = 0. Expanding gives:</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x² − (α + β)x + αβ = 0</p>
    <p>So the equation is x² − (sum of roots)x + (product of roots) = 0.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Fractional roots</p>
    <p>If a root is ½, use (2x − 1) instead of (x − ½) to avoid fractions. Both give zero when x = ½.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: The five-step plan for word problems</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li><strong>Define</strong> the unknown: “Let … be x.”</li>
    <li><strong>Express</strong> other quantities in terms of x.</li>
    <li><strong>Form</strong> the equation from the facts.</li>
    <li><strong>Solve</strong> by factorising, completing the square or the formula.</li>
    <li><strong>Interpret</strong>: reject impossible answers and answer the question in words with units.</li>
    </ol>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Common situations</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Typical equation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rectangle of area A, length 3 more than width</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x(x + 3) = A</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two consecutive numbers with product P</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n(n + 1) = P</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Right-angled triangle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a² + b² = c²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speed problems: time changes when speed changes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">d</span><span style="padding:0 4px;">x</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">d</span><span style="padding:0 4px;">x + k</span></span> = time difference</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sharing money: more people, less each</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">M</span><span style="padding:0 4px;">n</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">M</span><span style="padding:0 4px;">n + k</span></span> = amount less</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Diagrams turn words into shapes. Here is a garden 12 m by 8 m surrounded by a path of width x m. The whole area is 192 m².</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 420 260" width="420" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="40" y="30" width="340" height="200" fill="#14532d" stroke="#22c55e" stroke-width="2"/><rect x="90" y="70" width="240" height="120" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/><text x="210" y="135" fill="#e0f2fe" text-anchor="middle" font-size="15">Garden 12 m × 8 m</text><text x="65" y="135" fill="#bbf7d0" text-anchor="middle">x</text><text x="355" y="135" fill="#bbf7d0" text-anchor="middle">x</text><text x="210" y="55" fill="#bbf7d0" text-anchor="middle">x</text><text x="210" y="215" fill="#bbf7d0" text-anchor="middle">x</text><text x="210" y="252" fill="#fde68a" text-anchor="middle">Whole length: 12 + 2x     Whole width: 8 + 2x</text>
    </svg>
    </div>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">(12 + 2x)(8 + 2x) = 192</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>The path adds x on <em>both</em> sides, which is why the length becomes 12 + 2x, not 12 + x.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Equation from roots</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x² − (α + β)x + αβ = 0</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Any quadratic with roots α and β (and leading coefficient 1).</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> When the roots are given and you need the equation.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> Expanding (x − α)(x − β).</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Roots 2 and −3 give (x − 2)(x + 3), not (x + 2)(x − 3).</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “x squared minus the sum, plus the product.”</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Time from distance and speed</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">time = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">distance</span><span style="padding:0 4px;">speed</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Used in journey problems that lead to quadratics.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> When two journeys differ in speed and time.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Equation from whole-number roots <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Form a quadratic equation whose roots are 2 and 5.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Each root gives a bracket that equals zero at that value.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (x − 2)(x − 5) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> x = 2 makes the first bracket zero; x = 5 the second.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² − 5x − 2x + 10 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² − 7x + 10 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Sum 7, product 10.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x² − 7x + 10 = 0</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Substitute x = 2: 4 − 14 + 10 = 0 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using (x + 2)(x + 5), which has roots −2 and −5.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Roots with different signs <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Form a quadratic equation whose roots are −3 and 4.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Root −3 gives the bracket (x + 3).</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (x + 3)(x − 4) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each root r gives a bracket (x − r); a root of −3 gives (x + 3).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² − 4x + 3x − 12 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand the brackets term by term.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² − x − 12 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Sum = 1, product = −12.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x² − x − 12 = 0</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x − 3)(x + 4), which has roots 3 and −4.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: A fractional root <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Form a quadratic equation with integer coefficients whose roots are ½ and −3.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Use (2x − 1) for the root ½.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (2x − 1)(x + 3) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both brackets are zero at the given roots.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2x² + 6x − x − 3 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand: 2x × x, 2x × 3, −1 × x and −1 × 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 2x² + 5x − 3 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Collect like terms: 6x − x = 5x.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 2x² + 5x − 3 = 0</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x − 2) for the root ½ instead of (2x − 1).</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Use sum = −5/2 and product = −3/2: x² + (5/2)x − 3/2 = 0, then multiply by 2.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: A number problem <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> When a number is added to its square, the result is 42. Find the number.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let the number be x. “Added to its square” means x² + x.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + x = 42 → x² + x − 42 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Form and rearrange.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x + 7)(x − 6) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 7 × 6 = 42 and 7 − 6 = 1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = −7 or x = 6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both are possible for “a number”.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The number is 6 or −7.</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 36 + 6 = 42 ✓; 49 − 7 = 42 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing x² + x + 42 = 0 by moving 42 without changing its sign.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: The greenhouse <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A greenhouse has area 200 m² and its length is 10 m more than its width. Find its dimensions.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let the width be x m; the length is (x + 10) m.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x(x + 10) = 200 → x² + 10x − 200 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Area = length × width.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x + 20)(x − 10) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 20 × 10 = 200 and 20 − 10 = 10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = 10 or x = −20</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each bracket set to zero gives one solution.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> Reject x = −20; a width cannot be negative.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Always interpret.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Width 10 m, length 20 m</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Giving both 10 and −20 as answers.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Path around a garden <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A garden 12 m by 8 m has a path of uniform width x m around it. The total area of garden and path is 192 m². Find x.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The whole rectangle measures (12 + 2x) by (8 + 2x).</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (12 + 2x)(8 + 2x) = 192</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The outer rectangle is the garden plus the path on both sides of each dimension.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 96 + 24x + 16x + 4x² = 192</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 4x² + 40x − 96 = 0 → x² + 10x − 24 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide every term by 4.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (x + 12)(x − 2) = 0 → x = 2 or x = −12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Factorise: 12 × 2 = 24 and 12 − 2 = 10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> Reject −12.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A path width cannot be negative.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The path is 2 m wide.</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 16 × 12 = 192 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using (12 + x)(8 + x), forgetting the path is on both sides.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 7: A journey problem <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A cyclist rides 60 km. If she rode 5 km/h faster, the journey would take 1 hour less. Find her usual speed.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let the usual speed be x km/h. Time = distance ÷ speed.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">60</span><span style="padding:0 4px;">x</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">60</span><span style="padding:0 4px;">x + 5</span></span> = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Usual time minus faster time = 1 hour.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 60(x + 5) − 60x = x(x + 5)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply every term by x(x + 5).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 300 = x² + 5x → x² + 5x − 300 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Collect all terms on one side so the equation equals zero.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (x + 20)(x − 15) = 0 → x = 15 or x = −20</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Reject −20.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Her usual speed is 15 km/h.</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 60 ÷ 15 = 4 h; 60 ÷ 20 = 3 h; difference 1 h ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Forgetting to multiply the 1 on the right by x(x + 5).</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 8: A business problem <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A trader spends Ksh 12 000 on crates of tomatoes. If each crate cost Ksh 200 less, she could buy 2 more crates. How many crates did she buy?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let the number of crates be n. Price per crate = 12 000 ÷ n.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">12 000</span><span style="padding:0 4px;">n</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">12 000</span><span style="padding:0 4px;">n + 2</span></span> = 200</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Actual price minus cheaper price = 200.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 12 000(n + 2) − 12 000n = 200n(n + 2)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply by n(n + 2).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 24 000 = 200n² + 400n → n² + 2n − 120 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 200.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (n + 12)(n − 10) = 0 → n = 10</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Reject n = −12.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> She bought 10 crates (at Ksh 1 200 each).</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 12 000 ÷ 12 = 1 000 = 1 200 − 200 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing 12 000/(n − 2) for the cheaper price — more crates means n + 2.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> The product of two consecutive odd numbers is 143. Find the numbers.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Let the numbers be n and … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Equation: n(n + 2) =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Rearrange: n² + 2n − … = 0 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Factorise and solve <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">n(n + 2) = 143 → n² + 2n − 143 = 0 → (n + 13)(n − 11) = 0 → 11 and 13 (or −13 and −11).</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A right-angled triangle has shorter sides x cm and (x + 7) cm and hypotenuse 13 cm. Find x.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Pythagoras: x² + (x + 7)² =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Expand: 2x² + 14x + 49 = 169 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Simplify: x² + 7x − … = 0 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Solve and reject the negative <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 7x − 60 = 0 → (x + 12)(x − 5) = 0 → x = 5. Sides 5, 12, 13 cm.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Form a quadratic equation whose roots are 3 and 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 7x + 12 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Form a quadratic equation whose roots are −2 and −5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 7x + 10 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Form a quadratic equation whose roots are 0 and 6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 6x = 0</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Form a quadratic equation with integer coefficients whose roots are ⅔ and −1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(3x − 2)(x + 1) = 0 → 3x² + x − 2 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Two numbers differ by 3 and their product is 70. Find them.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x(x + 3) = 70 → x = 7 or −10 → 7 and 10, or −10 and −7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A rectangle has perimeter 34 cm and area 60 cm². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">w(17 − w) = 60 → w² − 17w + 60 = 0 → w = 5 or 12 → 5 cm by 12 cm</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A bus travels 240 km. If its speed were 20 km/h more, the journey would take 1 hour less. Find its speed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">240/x − 240/(x + 20) = 1 → x² + 20x − 4800 = 0 → x = 60 km/h</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Some students share Ksh 3 600 equally. If there were 6 more students, each would get Ksh 20 less. How many students are there?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3600/n − 3600/(n + 6) = 20 → n² + 6n − 1080 = 0 → n = 30</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A square plot is extended by 5 m on one side and 3 m on the other to give an area of 255 m². Find the side of the original plot.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 5)(x + 3) = 255 → x² + 8x − 240 = 0 → (x + 20)(x − 12) = 0 → 12 m</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> In a problem about the number of people, the equation gives n = 8 or n = −15. Which answer do you give and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">n = 8. A number of people must be a positive whole number, so −15 is rejected.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌾 Agriculture</p>
    <div>Planning plot sizes and paths in farms, with a fixed area of land.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏦 Business and banking</p>
    <div>Working out prices, quantities and shares when amounts change.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚌 Transport</p>
    <div>Planning matatu and bus speeds to meet a timetable.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏠 Architecture</p>
    <div>Fitting rooms, frames and borders around windows of a given area.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turning word problems into equations and rejecting impossible answers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing clear “Let …” statements and final answers in context.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and imagination</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Inventing real-life problems that lead to quadratic equations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Citizenship</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving fair-sharing and land-use problems from the community.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social justice (fair sharing)</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (land use)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Food security</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When the numbers do not factorise, use the formula with your calculator and round sensibly (e.g. lengths to 2 d.p.).</li>
    <li>Use the calculator to check a journey answer: 60 ÷ 15 − 60 ÷ 20 should equal 1.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>For factor pairs, list pairs of the constant quickly: 120 = 10 × 12; 143 = 11 × 13; 300 = 15 × 20.</li>
    <li>Check a word-problem answer by putting it back into the story, not just the equation.</li>
    <li>Use sum and product to form equations in your head: roots 3 and −5 → sum −2, product −15 → x² + 2x − 15 = 0.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Roots 2 and −3 → (x + 2)(x − 3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">This bracket pair gives roots −2 and 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use (x − root): (x − 2)(x + 3)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Path width counted once: 12 + x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The path is on both sides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use 12 + 2x</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keeping a negative length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lengths, speeds and counts are positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reject it and state why</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forgetting to multiply every term when clearing fractions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The equation becomes unbalanced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply every term, including the number on the right</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not answering the actual question</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x may not be what is asked</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the question; give dimensions, numbers or prices with units</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Always write a “Let …” sentence with units; examiners reward it.</li>
    <li>Sketch a diagram for any shape problem.</li>
    <li>Finish with a sentence that answers the question in context.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Roots α, β → x² − (α + β)x + αβ = 0.</li>
    <li>Define, express, form, solve, interpret.</li>
    <li>Reject answers that do not fit the context.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forming the equation correctly usually carries the most marks — show it clearly.</li>
    <li>In journey and sharing problems, show the line where you multiply through by the denominators.</li>
    <li>State clearly which solution is rejected and why.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Form the equation with roots 1 and −1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 1 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: a rectangle has width w and length w + 4. Its area is ___.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">w(w + 4) = w² + 4w</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> A problem gives x = 3 or x = −8 for a width. Which is rejected?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = −8, because a width cannot be negative.</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Measure the length and width of your classroom door. Imagine a frame of equal width x cm around it that doubles its area. Form the equation and solve it.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which step of the five-step plan do I skip most often?</li>
    <li>Did I check my answers against the story, or only against the equation?</li>
    <li>Can I invent my own problem that leads to x² + 3x − 10 = 0?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Roots α and β give (x − α)(x − β) = 0, i.e. x² − (α + β)x + αβ = 0.</li>
    <li>Word problems: define, express, form, solve, interpret.</li>
    <li>Use diagrams for shapes and time = distance ÷ speed for journeys.</li>
    <li>Reject solutions that are impossible in the context.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unknown</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Area</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">width x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x(x + k) = A</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Consecutive numbers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n(n + 1) = P</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Path</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">width x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(L + 2x)(W + 2x) = A</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Journey</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">speed x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">d/x − d/(x + k) = t</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sharing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">number n</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">M/n − M/(n + k) = m</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Consecutive</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Following in order, e.g. 4, 5, 6.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sum of roots</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">α + β = −b/a.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Product of roots</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">αβ = c/a.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Interpret</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explain what the solution means in the real situation.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> A rectangular hall is 4 m longer than it is wide. Its area is 96 m². (a) Taking the width as x m, form an equation. (b) Solve it and state the dimensions of the hall. <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) x(x + 4) = 96 → x² + 4x − 96 = 0 [2]. (b) (x + 12)(x − 8) = 0 [1]; x = 8, reject −12 [1]; hall 8 m by 12 m [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A car travels 180 km at a steady speed. If the speed had been 15 km/h less, the journey would have taken 1 hour longer. Find the speed. <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">180/(x − 15) − 180/x = 1 [1]; 180x − 180(x − 15) = x(x − 15) [1]; x² − 15x − 2700 = 0 [1]; (x − 60)(x + 45) = 0 [1]; x = 60 km/h [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Form equations with roots (a) 7 and −2, (b) −¼ and 3.</li>
    <li>The sum of a number and its reciprocal is 2.5. Find the number.</li>
    <li>A picture 30 cm by 20 cm has a frame of uniform width; the total area is 1 064 cm². Find the width of the frame.</li>
    <li>Write and solve your own sharing problem that leads to a quadratic equation.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The quadratic equation with roots 3 and −2 is:',
            options: ['x² + x − 6 = 0', 'x² − 5x + 6 = 0', 'x² + 5x − 6 = 0', 'x² − x − 6 = 0'],
            correct: 3,
            explanation: '(x − 3)(x + 2) = x² − x − 6; the sum is 1 and the product is −6.'
        },
        {
            question: 'A quadratic equation with integer coefficients and roots ½ and 2 is:',
            options: ['x² − 2.5x − 1 = 0', '2x² − 5x + 2 = 0', '2x² + 5x + 2 = 0', 'x² − 5x + 2 = 0'],
            correct: 1,
            explanation: '(2x − 1)(x − 2) = 2x² − 4x − x + 2 = 2x² − 5x + 2.'
        },
        {
            question: 'A rectangle has width x m and length (x + 5) m and area 36 m². The equation is:',
            options: ['x² + 5x + 36 = 0', '2x + 5 = 36', 'x² + 5x − 36 = 0', 'x² − 5x − 36 = 0'],
            correct: 2,
            explanation: 'Area x(x + 5) = 36 gives x² + 5x − 36 = 0.'
        },
        {
            question: 'Solving a problem about the width of a field gives x = 9 or x = −14. The width is:',
            options: ['−14 m', '9 m or −14 m', '23 m', '9 m'],
            correct: 3,
            explanation: 'A width must be positive, so x = −14 is rejected.'
        },
        {
            question: 'A path of width x surrounds a garden 10 m by 6 m. The outer length is:',
            options: ['10 + x', '10x', '10 + 2x', '10 − 2x'],
            correct: 2,
            explanation: 'The path adds x on each side, so the outer length is 10 + 2x.'
        },
        {
            question: 'Two consecutive whole numbers have a product of 72. They are:',
            options: ['6 and 12', '8 and 9', '7 and 8', '9 and 10'],
            correct: 1,
            explanation: 'n(n + 1) = 72 → n² + n − 72 = 0 → (n + 9)(n − 8) = 0, so the numbers are 8 and 9.'
        },
        {
            question: 'A car covers 120 km at x km/h. The time taken in hours is:',
            options: ['120 ÷ x', '120x', 'x ÷ 120', '120 + x'],
            correct: 0,
            explanation: 'Time = distance ÷ speed = 120 ÷ x.'
        },
        {
            question: 'The sum and product of the roots of x² − 9x + 14 = 0 are:',
            options: ['9 and 14', '−9 and 14', '9 and −14', '14 and 9'],
            correct: 0,
            explanation: 'Sum = −b/a = 9 and product = c/a = 14 (the roots are 2 and 7).'
        }
    ]
},
{
    name: '1.1.4 Graphs of Quadratic Functions and Graphical Solutions',
    type: 'lesson',
    duration: '90 min',
    exercises: 9,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 4</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 90 min (two lessons of 45 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Graphs of Quadratic Functions and Graphical Solutions</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Make a table of values for a quadratic function.</li>
    <li>Draw the graph of a quadratic function with a suitable scale.</li>
    <li>Identify the roots, the y-intercept, the turning point and the line of symmetry from the graph.</li>
    <li>Use a graph to solve quadratic equations and to solve a quadratic and a linear equation simultaneously.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Substituting values into expressions, plotting coordinates, drawing straight-line graphs from y = mx + c, and solving quadratic equations algebraically (Lessons 1–3).</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How does the graph of a quadratic function show the solutions of an equation?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Kick a football into the air and watch its path: it rises, slows, turns and falls in a smooth curve. That curve is a <strong>parabola</strong>, the shape of every quadratic graph. Water from a fountain, the cables of a suspension bridge and the beam from a car headlamp all follow parabolas.</p>
    <p>In this lesson the graph becomes a tool: the points where the curve crosses the x-axis are the roots of the equation. Graphs also let you solve equations that would be messy to solve by algebra.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 Think About It</p>
    <div>Why might a quadratic equation have two solutions, one solution or none? By the end of this lesson, the graph will answer this for you.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“To draw a quadratic graph, we first build a table of values. Choose x-values (the question usually gives the range), work out y for each, and plot the points. Then — and this is important — join them with a <em>smooth curve</em>, not a set of straight lines. The curve should be rounded at the bottom (or top), not pointed.</p>
    <p>Once the graph is drawn, solving is reading: to solve x² − 2x − 3 = 0, look where y = 0, that is, where the curve crosses the x-axis. To solve x² − 2x − 3 = 2, draw the line y = 2 and read the x-values where it meets the curve.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quadratic function</p>
    <div>
    <p style="margin:0;">A rule y = ax² + bx + c, a ≠ 0.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: y = x² − 2x − 3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Parabola</p>
    <div>
    <p style="margin:0;">The U-shaped (or ∩-shaped) curve of a quadratic.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: The path of a thrown ball</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Turning point (vertex)</p>
    <div>
    <p style="margin:0;">The lowest or highest point of the parabola.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (1, −4) for y = x² − 2x − 3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Line of symmetry</p>
    <div>
    <p style="margin:0;">The vertical line through the turning point.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = 1</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">y-intercept</p>
    <div>
    <p style="margin:0;">Where the graph crosses the y-axis (x = 0).</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: y = c</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">x-intercepts (roots)</p>
    <div>
    <p style="margin:0;">Where the graph crosses the x-axis (y = 0).</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = −1 and x = 3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Point of intersection</p>
    <div>
    <p style="margin:0;">Where two graphs meet.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Curve and line meet where both equations are true</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Build a table of values</p>
    <p>For y = x² − 2x − 3 with −2 ≤ x ≤ 4, work row by row:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;text-align:center;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">x</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">−2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">−1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">0</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">3</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">4</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">16</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>y</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>5</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>0</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>−3</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>−4</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>−3</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>0</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>5</strong>
    </td>
    </tr>
    </table>
    </div>
    <p>Splitting into rows (x², −2x, −3) reduces mistakes with negatives.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Choose a scale and plot</p>
    <p>Look at the smallest and largest x and y values (here x from −2 to 4, y from −4 to 5). Choose a scale that uses most of the graph paper, for example 2 cm for 1 unit on both axes. Plot each point with a small neat cross.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Draw a smooth curve</p>
    <p>Join the points with one smooth curve using a sharp pencil. Turn the paper so that your hand is inside the curve. The turning point should look rounded.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Read the key features</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Roots (y = 0): x = −1 and x = 3.</li>
    <li>y-intercept: (0, −3).</li>
    <li>Turning point: (1, −4), a minimum.</li>
    <li>Line of symmetry: x = 1, halfway between the roots.</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Solve other equations with the same graph</p>
    <p>To solve x² − 2x − 3 = k, draw the horizontal line y = k and read the x-values of the intersections. To solve x² − 2x − 3 = x − 1, draw the straight line y = x − 1 and read the x-values where it meets the curve.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 6: Shape depends on a</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sign of a</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Shape</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Turning point</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a > 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">U-shaped (opens up)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minimum</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a &lt; 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∩-shaped (opens down)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Maximum</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>The graph of y = x² − 2x − 3, with the lines y = 2 and y = x − 1 drawn for solving equations:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 357 423" width="464" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="30" y1="398" x2="30" y2="20" stroke="#1e293b"/><line x1="72" y1="398" x2="72" y2="20" stroke="#1e293b"/><line x1="114" y1="398" x2="114" y2="20" stroke="#1e293b"/><line x1="156" y1="398" x2="156" y2="20" stroke="#1e293b"/><line x1="198" y1="398" x2="198" y2="20" stroke="#1e293b"/><line x1="240" y1="398" x2="240" y2="20" stroke="#1e293b"/><line x1="282" y1="398" x2="282" y2="20" stroke="#1e293b"/><line x1="30" y1="398" x2="282" y2="398" stroke="#1e293b"/><line x1="30" y1="356" x2="282" y2="356" stroke="#1e293b"/><line x1="30" y1="314" x2="282" y2="314" stroke="#1e293b"/><line x1="30" y1="272" x2="282" y2="272" stroke="#1e293b"/><line x1="30" y1="230" x2="282" y2="230" stroke="#1e293b"/><line x1="30" y1="188" x2="282" y2="188" stroke="#1e293b"/><line x1="30" y1="146" x2="282" y2="146" stroke="#1e293b"/><line x1="30" y1="104" x2="282" y2="104" stroke="#1e293b"/><line x1="30" y1="62" x2="282" y2="62" stroke="#1e293b"/><line x1="30" y1="20" x2="282" y2="20" stroke="#1e293b"/><line x1="30" y1="230" x2="282" y2="230" stroke="#94a3b8" stroke-width="1.5"/><line x1="114" y1="398" x2="114" y2="20" stroke="#94a3b8" stroke-width="1.5"/><text x="30" y="244" fill="#94a3b8" font-size="11" text-anchor="middle">-2</text><text x="72" y="244" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text><text x="156" y="244" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><text x="198" y="244" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><text x="240" y="244" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><text x="282" y="244" fill="#94a3b8" font-size="11" text-anchor="middle">4</text><text x="108" y="402" fill="#94a3b8" font-size="11" text-anchor="end">-4</text><text x="108" y="360" fill="#94a3b8" font-size="11" text-anchor="end">-3</text><text x="108" y="318" fill="#94a3b8" font-size="11" text-anchor="end">-2</text><text x="108" y="276" fill="#94a3b8" font-size="11" text-anchor="end">-1</text><text x="108" y="192" fill="#94a3b8" font-size="11" text-anchor="end">1</text><text x="108" y="150" fill="#94a3b8" font-size="11" text-anchor="end">2</text><text x="108" y="108" fill="#94a3b8" font-size="11" text-anchor="end">3</text><text x="108" y="66" fill="#94a3b8" font-size="11" text-anchor="end">4</text><text x="108" y="24" fill="#94a3b8" font-size="11" text-anchor="end">5</text><text x="286" y="234" fill="#cbd5e1" font-size="12">x</text><text x="118" y="14" fill="#cbd5e1" font-size="12">y</text><polyline points="30,20 34.2,44.779999999999994 38.4,68.72000000000004 42.6,91.82000000000004 46.8,114.08000000000008 51,135.50000000000006 55.2,156.08000000000013 59.4,175.8200000000001 63.6,194.7200000000001 67.8,212.78000000000014 72,230.00000000000014 76.2,246.3800000000001 80.4,261.9200000000001 84.6,276.6200000000001 88.8,290.4800000000001 93,303.50000000000006 97.2,315.68000000000006 101.39999999999999,327.02000000000004 105.60000000000001,337.52000000000004 109.8,347.18000000000006 114,356.00000000000006 118.2,363.9800000000001 122.4,371.12000000000006 126.6,377.4200000000001 130.8,382.88 135,387.5 139.2,391.28 143.4,394.22 147.6,396.32000000000005 151.8,397.58 156,398 160.20000000000002,397.58 164.4,396.32000000000005 168.6,394.22 172.79999999999998,391.28 177,387.49999999999994 181.20000000000002,382.87999999999994 185.4,377.4199999999999 189.6,371.1199999999999 193.79999999999998,363.9799999999999 198,355.9999999999999 202.2,347.17999999999984 206.4,337.5199999999998 210.6,327.0199999999998 214.8,315.67999999999984 219,303.4999999999998 223.2,290.47999999999973 227.4,276.6199999999997 231.6,261.91999999999973 235.8,246.37999999999965 240,229.9999999999996 244.2,212.77999999999963 248.4,194.71999999999952 252.6,175.8199999999995 256.8,156.07999999999944 261,135.4999999999994 265.2,114.07999999999937 269.4,91.81999999999937 273.6,68.71999999999929 277.8,44.77999999999925 282,19.99999999999933" fill="none" stroke="#38bdf8" stroke-width="2.5"/><line x1="30" y1="356" x2="282" y2="104" stroke="#fb923c" stroke-width="2"/><line x1="30" y1="146" x2="282" y2="146" stroke="#a78bfa" stroke-width="1.5" stroke-dasharray="5,4"/><circle cx="72" cy="230" r="4" fill="#fde68a"/><text x="10" y="216" fill="#fde68a" font-size="13" font-weight="bold">(−1, 0)</text><circle cx="240" cy="230" r="4" fill="#fde68a"/><text x="246" y="246" fill="#fde68a" font-size="13" font-weight="bold">(3, 0)</text><circle cx="156" cy="398" r="4" fill="#f472b6"/><text x="164" y="402" fill="#f472b6" font-size="13" font-weight="bold">min (1, −4)</text><circle cx="114" cy="356" r="4" fill="#86efac"/><text x="120" y="370" fill="#86efac" font-size="13" font-weight="bold">(0, −3)</text><text x="181.20000000000002" y="36.80000000000001" fill="#38bdf8" font-size="13">y = x² − 2x − 3</text><text x="34.2" y="330.8" fill="#fb923c" font-size="13">y = x − 1</text><text x="162.29999999999998" y="133.4" fill="#a78bfa" font-size="13">y = 2</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation to solve</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Line to draw</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solutions read from the graph</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 2x − 3 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = 0 (the x-axis)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = −1, x = 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 2x − 3 = 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≈ −1.4, x ≈ 3.4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 2x − 3 = x − 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y = x − 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≈ −0.6, x ≈ 3.6</td>
    </tr>
    </table>
    </div>
    <p>A quadratic with a negative x² coefficient opens downwards. Here is y = −x² + 2x + 8, with maximum point (1, 9):</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 345 555" width="449" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="30" y1="530" x2="30" y2="20" stroke="#1e293b"/><line x1="60" y1="530" x2="60" y2="20" stroke="#1e293b"/><line x1="90" y1="530" x2="90" y2="20" stroke="#1e293b"/><line x1="120" y1="530" x2="120" y2="20" stroke="#1e293b"/><line x1="150" y1="530" x2="150" y2="20" stroke="#1e293b"/><line x1="180" y1="530" x2="180" y2="20" stroke="#1e293b"/><line x1="210" y1="530" x2="210" y2="20" stroke="#1e293b"/><line x1="240" y1="530" x2="240" y2="20" stroke="#1e293b"/><line x1="270" y1="530" x2="270" y2="20" stroke="#1e293b"/><line x1="30" y1="530" x2="270" y2="530" stroke="#1e293b"/><line x1="30" y1="500" x2="270" y2="500" stroke="#1e293b"/><line x1="30" y1="470" x2="270" y2="470" stroke="#1e293b"/><line x1="30" y1="440" x2="270" y2="440" stroke="#1e293b"/><line x1="30" y1="410" x2="270" y2="410" stroke="#1e293b"/><line x1="30" y1="380" x2="270" y2="380" stroke="#1e293b"/><line x1="30" y1="350" x2="270" y2="350" stroke="#1e293b"/><line x1="30" y1="320" x2="270" y2="320" stroke="#1e293b"/><line x1="30" y1="290" x2="270" y2="290" stroke="#1e293b"/><line x1="30" y1="260" x2="270" y2="260" stroke="#1e293b"/><line x1="30" y1="230" x2="270" y2="230" stroke="#1e293b"/><line x1="30" y1="200" x2="270" y2="200" stroke="#1e293b"/><line x1="30" y1="170" x2="270" y2="170" stroke="#1e293b"/><line x1="30" y1="140" x2="270" y2="140" stroke="#1e293b"/><line x1="30" y1="110" x2="270" y2="110" stroke="#1e293b"/><line x1="30" y1="80" x2="270" y2="80" stroke="#1e293b"/><line x1="30" y1="50" x2="270" y2="50" stroke="#1e293b"/><line x1="30" y1="20" x2="270" y2="20" stroke="#1e293b"/><line x1="30" y1="320" x2="270" y2="320" stroke="#94a3b8" stroke-width="1.5"/><line x1="120" y1="530" x2="120" y2="20" stroke="#94a3b8" stroke-width="1.5"/><text x="30" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">-3</text><text x="60" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">-2</text><text x="90" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">-1</text><text x="150" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">1</text><text x="180" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">2</text><text x="210" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">3</text><text x="240" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">4</text><text x="270" y="334" fill="#94a3b8" font-size="11" text-anchor="middle">5</text><text x="114" y="534" fill="#94a3b8" font-size="11" text-anchor="end">-7</text><text x="114" y="474" fill="#94a3b8" font-size="11" text-anchor="end">-5</text><text x="114" y="414" fill="#94a3b8" font-size="11" text-anchor="end">-3</text><text x="114" y="354" fill="#94a3b8" font-size="11" text-anchor="end">-1</text><text x="114" y="294" fill="#94a3b8" font-size="11" text-anchor="end">1</text><text x="114" y="234" fill="#94a3b8" font-size="11" text-anchor="end">3</text><text x="114" y="174" fill="#94a3b8" font-size="11" text-anchor="end">5</text><text x="114" y="114" fill="#94a3b8" font-size="11" text-anchor="end">7</text><text x="114" y="54" fill="#94a3b8" font-size="11" text-anchor="end">9</text><text x="274" y="324" fill="#cbd5e1" font-size="12">x</text><text x="124" y="14" fill="#cbd5e1" font-size="12">y</text><polyline points="30,530 33,506.3 36.00000000000001,483.19999999999993 38.99999999999999,460.69999999999993 42,438.7999999999999 45,417.4999999999999 48,396.79999999999984 51.00000000000001,376.69999999999993 53.99999999999999,357.1999999999998 57,338.2999999999999 60,319.99999999999983 63,302.29999999999984 66,285.1999999999998 69,268.6999999999998 72,252.7999999999998 75,237.49999999999977 78,222.79999999999978 81,208.6999999999998 84,195.1999999999998 87,182.29999999999978 90,169.99999999999977 93,158.2999999999998 96,147.19999999999982 99,136.69999999999982 102,126.79999999999986 105,117.49999999999987 108,108.79999999999987 111,100.69999999999987 114,93.19999999999987 117,86.2999999999999 120,79.99999999999989 123,74.29999999999991 126,69.1999999999999 129,64.69999999999996 132,60.799999999999926 135,57.49999999999994 138,54.799999999999955 141,52.699999999999996 144,51.199999999999974 147,50.3 150,50 153,50.3 156,51.20000000000003 159,52.700000000000045 162,54.800000000000054 165,57.50000000000006 168,60.80000000000009 171,64.70000000000006 174,69.20000000000013 177,74.30000000000013 180,80.00000000000014 183,86.30000000000015 186,93.20000000000017 189,100.7000000000002 192,108.80000000000021 195,117.50000000000024 198,126.80000000000025 201,136.70000000000027 204,147.20000000000033 207,158.30000000000035 210,170.0000000000004 213,182.30000000000038 216,195.20000000000044 219,208.70000000000044 222,222.8000000000005 225,237.50000000000054 228,252.80000000000055 231,268.7000000000006 234,285.2000000000006 237,302.3000000000007 240,320.0000000000006 243,338.30000000000064 246,357.2000000000006 249,376.70000000000044 252,396.8000000000004 255,417.50000000000045 258,438.80000000000035 261,460.7000000000003 264,483.20000000000016 267,506.3000000000001 270,530" fill="none" stroke="#f472b6" stroke-width="2.5"/><circle cx="60" cy="320" r="4" fill="#fde68a"/><text x="4" y="312" fill="#fde68a" font-size="13" font-weight="bold">(−2, 0)</text><circle cx="240" cy="320" r="4" fill="#fde68a"/><text x="246" y="312" fill="#fde68a" font-size="13" font-weight="bold">(4, 0)</text><circle cx="150" cy="50" r="4" fill="#86efac"/><text x="158" y="54" fill="#86efac" font-size="13" font-weight="bold">max (1, 9)</text><line x1="150" y1="530" x2="150" y2="20" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/><text x="156" y="500" fill="#94a3b8" font-size="13">x = 1</text>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Line of symmetry</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x = −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2a</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The vertical line through the turning point of y = ax² + bx + c.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> To find the turning point quickly, or to check your graph.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> It is halfway between the two roots; from completing the square, the turning point is at x = −b/2a.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Use −b, not b.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> It is the formula without the ± part: −b ÷ 2a.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Graphical solution</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Solutions of f(x) = g(x) are the x-values where y = f(x) and y = g(x) meet</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Draw both graphs and read the x-coordinates of the intersections.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> When the question asks you to use a graph, or when algebra is difficult.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Give x-values for an equation in x; give both x and y only if asked for the points.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Table and roots <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Copy and complete the table for y = x² − 2x − 3 for −2 ≤ x ≤ 4, draw the graph and use it to solve x² − 2x − 3 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Work out each y-value, plot, join smoothly, then read where y = 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> y-values: 5, 0, −3, −4, −3, 0, 5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Use the row method shown in Part 1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Plot the points and draw a smooth U-shaped curve.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Scale: 2 cm to 1 unit.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> The curve crosses the x-axis at x = −1 and x = 3.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> These are the roots because y = 0 there.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −1 or x = 3</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Factorise: (x + 1)(x − 3) = 0 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Joining the points with straight lines instead of a smooth curve.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Turning point and symmetry <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> State the turning point and line of symmetry of y = x² − 2x − 3.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The line of symmetry is halfway between the roots −1 and 3.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Halfway: (−1 + 3) ÷ 2 = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So the line of symmetry is x = 1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> When x = 1, y = 1 − 2 − 3 = −4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute to get the y-value.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Turning point (1, −4), a minimum; line of symmetry x = 1</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Taking the line of symmetry as x = −1 (one of the roots) instead of halfway between them.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> x = −b/2a = 2/2 = 1. Or complete the square: (x − 1)² − 4.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Solving with a horizontal line <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use the graph of y = x² − 2x − 3 to solve x² − 2x − 3 = 2.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The left side is the curve; the right side is the line y = 2.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Draw the line y = 2.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A horizontal line through 2 on the y-axis.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Read the x-values at the two intersections.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> They are a little beyond −1 and 3.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ −1.4 or x ≈ 3.4</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> The exact roots are 1 ± √6 ≈ −1.45 and 3.45, so the readings are good.</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Reading the y-values of the intersections instead of the x-values.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Rearranging to find the line <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> The graph of y = x² − 2x − 3 has been drawn. What line should be drawn to solve x² − 2x − 5 = 0?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Make the left side match the curve x² − 2x − 3.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 2x − 5 = 0 → x² − 2x − 3 − 2 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Split −5 into −3 − 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² − 2x − 3 = 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add 2 to both sides.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Draw y = 2 (it gives the same solutions as Example 3).</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Drawing y = −5 or y = 5; the curve already contains −3.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Curve and straight line <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> On the same axes as y = x² − 2x − 3, draw y = x − 1 and use the graphs to solve x² − 3x − 2 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Check: x² − 2x − 3 = x − 1 rearranges to x² − 3x − 2 = 0, so the intersections give the solutions.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Table for the line: x = −2, y = −3; x = 0, y = −1; x = 4, y = 3.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Three points for a straight line, one as a check.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Draw the line on the same axes.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Plot the three points and join them with a ruler.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Read the x-coordinates of the intersections.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> About −0.6 and 3.6.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ −0.6 or x ≈ 3.6</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Formula: x = (3 ± √17) ÷ 2 ≈ 3.56 or −0.56 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Drawing y = x + 1 instead of y = x − 1 and reading the wrong intersections.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: A maximum curve <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Draw y = −x² + 2x + 8 for −3 ≤ x ≤ 5. State the maximum value and solve −x² + 2x + 8 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Square x first, then make it negative: for x = −3, −x² = −9.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> y-values: −7, 0, 5, 8, 9, 8, 5, 0, −7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> For x = −3, −2, −1, 0, 1, 2, 3, 4, 5.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Draw a smooth ∩-shaped curve.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> a = −1 &lt; 0, so it opens downwards.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Maximum point (1, 9); roots where y = 0.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The highest point of the ∩-shaped curve is the maximum; the roots are where it meets the x-axis.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Maximum value 9 (at x = 1); roots x = −2 and x = 4</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Calculating −(−3)² as +9; the square comes before the negative sign.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> For y = x² + x − 6, complete the table for −4 ≤ x ≤ 3 and use the graph to solve x² + x − 6 = 0.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>y at x = −4: 16 − 4 − 6 =  <span style="color:#94a3b8;">…………</span>
    </li>
    <li>y at x = −3, −2, −1, 0, 1, 2, 3: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Roots where y = 0: x = … and x = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Line of symmetry: x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">y = 6, 0, −4, −6, −6, −4, 0, 6. Roots x = −3 and x = 2. Line of symmetry x = −0.5, turning point (−0.5, −6.25).</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> The graph of y = x² + x − 6 is drawn. Which line solves x² + 2x − 8 = 0?</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write x² + 2x − 8 as (x² + x − 6) + … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>So x² + x − 6 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>The line is y = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 2x − 8 = (x² + x − 6) + x − 2 = 0 → x² + x − 6 = −x + 2. Draw y = −x + 2; the intersections are at x = 2 and x = −4.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find y when x = −3 for y = x² − 4x + 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9 + 12 + 1 = 22</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> State the y-intercept of y = 2x² − 5x + 7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(0, 7)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Does y = −3x² + x + 2 have a maximum or a minimum point?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">A maximum, because a = −3 &lt; 0.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Make a table for y = 2x² − 3x − 5 for −2 ≤ x ≤ 3, draw the graph and solve 2x² − 3x − 5 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">y = 9, 0, −5, −6, −3, 4. Roots x = −1 and x = 2.5.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find the line of symmetry of y = x² − 6x + 5 using x = −b/2a, and the turning point.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3; y = 9 − 18 + 5 = −4; turning point (3, −4).</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> The graph of y = x² − 2x − 3 is drawn. Which line would you draw to solve x² − x − 6 = 0? Find the solutions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 2x − 3 = −x + 3 → line y = −x + 3. Solutions x = 3 and x = −2.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Explain, using a graph, why x² − 2x + 4 = 0 has no real roots.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">y = x² − 2x + 4 = (x − 1)² + 3 has minimum value 3 above the x-axis, so it never crosses y = 0.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A ball is kicked so that its height is h = 8t − 2t² metres after t seconds. Make a table for t = 0 to 4, draw the graph, and find the greatest height and when the ball lands.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">h = 0, 6, 8, 6, 0. Greatest height 8 m at t = 2 s; lands at t = 4 s.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Why should the points of a quadratic graph be joined with a smooth curve and not straight lines?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">The function changes continuously; between the plotted points the y-values follow a curve, so straight lines would give wrong readings.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚽ Sports</p>
    <div>Coaches study the parabola of a kick or throw to find the best angle and greatest height.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌉 Engineering</p>
    <div>Arch bridges and suspension cables are designed using parabolas.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💰 Business</p>
    <div>A profit graph shaped like ∩ shows the price that gives maximum profit.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📊 Data science</p>
    <div>Software fits quadratic curves to data to model trends that rise and then fall.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the right line to draw and interpreting intersections.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exploring parabolas and sliders in GeoGebra or Desmos.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Labelling graphs clearly and explaining readings.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking graphical answers against algebraic ones.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (projectiles and sports)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (profit graphs)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the table mode (if your calculator has one) to generate y-values, then check each by hand for one or two points.</li>
    <li>Square negatives with brackets: (−3)² = 9, then apply any minus sign in front: −(−3)² = −9.</li>
    <li>For the line of symmetry, compute −b ÷ (2a) using brackets.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The table of values is symmetric about the turning point — use this to check: y(−1) = y(3) for y = x² − 2x − 3.</li>
    <li>The y-intercept is just c; read it straight from the equation.</li>
    <li>If the roots are p and q, the line of symmetry is x = (p + q) ÷ 2.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Joining points with straight lines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The graph is a curve</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Draw one smooth curve</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−(−3)² = 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The square is done before the minus sign</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−(−3)² = −9</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reading only one root</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A parabola usually crosses the x-axis twice</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Look for both intersections</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing the wrong line for a new equation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The curve’s equation must appear on one side</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rearrange so one side is exactly the drawn curve</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uneven scale on an axis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Points are plotted in the wrong place</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use equal steps along each axis</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check that your table is symmetric before plotting.</li>
    <li>Label each graph with its equation.</li>
    <li>When reading solutions, draw faint vertical lines from the intersections to the x-axis.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>a > 0: U-shape, minimum. a &lt; 0: ∩-shape, maximum.</li>
    <li>Roots are where the graph meets the x-axis.</li>
    <li>Line of symmetry x = −b/2a.</li>
    <li>To solve f(x) = g(x), read the x-values where the graphs meet.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the scale given in the question exactly.</li>
    <li>Read answers to the nearest half square (often 1 decimal place).</li>
    <li>Show the line you draw on the graph and label it — the line itself earns marks.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Where does y = x² − 9 cross the x-axis?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3 and x = −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: the turning point of y = (x − 2)² + 1 is (___, ___).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(2, 1)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Predict: how many times does y = x² + 4 meet the x-axis?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Never; its lowest value is 4.</div>
    </details>
    </div>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Tool</p>
    <div>Open GeoGebra or Desmos and type y = x^2 − 2x − 3. Add a slider k and the line y = k. Move k and watch how the number of intersections changes from two to one to none.</div>
    </div>
    <div style="background:#2b1a0b;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">🏆 Mini Challenge</p>
    <div>Find the value of k for which the line y = k touches y = x² − 2x − 3 at exactly one point.<details style="margin-top:6px;">
    <summary style="cursor:pointer;color:#fdba74;">Show answer</summary>k = −4, the minimum value; the line touches the curve at its turning point (1, −4).</details>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain, using a graph, why some quadratics have no real roots?</li>
    <li>Was my curve smooth and my scale sensible?</li>
    <li>Which is quicker for me — graphical or algebraic solution — and when would I use each?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A quadratic graph is a parabola: U-shaped if a > 0, ∩-shaped if a &lt; 0.</li>
    <li>Build a table, choose a scale, plot, and join with a smooth curve.</li>
    <li>Roots: where the curve meets y = 0; y-intercept: (0, c); line of symmetry: x = −b/2a.</li>
    <li>To solve f(x) = g(x), draw both graphs and read the x-values of the intersections.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How to find it</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">y = x² − 2x − 3</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">y-intercept</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Put x = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(0, −3)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Read y = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−1, 3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line of symmetry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = −b/2a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turning point</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Substitute x = −b/2a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1, −4), minimum</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Parabola</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The curve of a quadratic function.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Turning point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The maximum or minimum point of a parabola.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Line of symmetry</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The vertical line that divides the parabola into two mirror halves.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Intersection</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A point where two graphs meet.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) Complete the table of values for y = x² − x − 6 for −3 ≤ x ≤ 4. (b) Draw the graph using 1 cm for 1 unit on both axes. (c) Use the graph to solve x² − x − 6 = 0. (d) By drawing a suitable line, solve x² − x − 6 = 2. <span style="color:#fde68a;font-size:13px;">(8 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) y = 6, 0, −4, −6, −6, −4, 0, 6 [2]. (b) Correct plotting and smooth curve [2]. (c) x = −2 and x = 3 [2]. (d) Line y = 2; x ≈ −2.4 and x ≈ 3.4 [2].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> State the turning point of y = x² + 4x + 1 and say whether it is a maximum or minimum. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = −4/2 = −2 [1]; y = 4 − 8 + 1 = −3 [1]; (−2, −3), a minimum since a > 0 [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw y = x² − 4 for −3 ≤ x ≤ 3 and solve x² − 4 = 0 and x² − 4 = 1.</li>
    <li>Draw y = 3 + 2x − x² for −2 ≤ x ≤ 4; state its maximum point and roots.</li>
    <li>On the graph of y = x² − 4, draw y = x + 2 and solve x² − x − 6 = 0.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The graph of y = −2x² + 3x + 1 is:',
            options: ['U-shaped with a minimum', 'a straight line', 'a circle', '∩-shaped with a maximum'],
            correct: 3,
            explanation: 'The coefficient of x² is negative, so the parabola opens downwards and has a maximum.'
        },
        {
            question: 'The y-intercept of y = x² − 5x + 6 is:',
            options: ['(6, 0)', '(0, −5)', '(2, 0)', '(0, 6)'],
            correct: 3,
            explanation: 'Putting x = 0 gives y = 6, so the graph crosses the y-axis at (0, 6).'
        },
        {
            question: 'The line of symmetry of y = x² − 8x + 3 is:',
            options: ['x = −4', 'x = 4', 'x = 8', 'x = 3'],
            correct: 1,
            explanation: 'x = −b/2a = 8/2 = 4.'
        },
        {
            question: 'A curve crosses the x-axis at x = −2 and x = 6. Its line of symmetry is:',
            options: ['x = 4', 'x = 2', 'x = −2', 'x = 8'],
            correct: 1,
            explanation: 'The line of symmetry is halfway between the roots: (−2 + 6) ÷ 2 = 2.'
        },
        {
            question: 'To solve x² − 3x + 1 = 4 using the graph of y = x² − 3x + 1, draw:',
            options: ['y = −4', 'y = 3x', 'y = 4', 'x = 4'],
            correct: 2,
            explanation: 'The solutions are where the curve meets the horizontal line y = 4.'
        },
        {
            question: 'For y = −x², the value of y when x = −3 is:',
            options: ['−9', '9', '6', '−6'],
            correct: 0,
            explanation: 'Square first: (−3)² = 9, then apply the minus sign to get −9.'
        },
        {
            question: 'The graph of y = x² − 2x − 3 is drawn. To solve x² − 2x − 3 = x + 1, draw:',
            options: ['y = x − 3', 'y = 1', 'y = x + 1', 'y = −x − 1'],
            correct: 2,
            explanation: 'The right-hand side is x + 1, so draw y = x + 1 and read the intersections.'
        },
        {
            question: 'A quadratic graph that never meets the x-axis shows that the equation has:',
            options: ['no real roots', 'two roots', 'one root', 'negative roots only'],
            correct: 0,
            explanation: 'Roots are where the graph meets y = 0; if it never does, there are no real roots.'
        }
    ]
},
{
    name: '1.1 Worked Examples: Quadratic Expressions and Equations',
    type: 'lesson',
    duration: '60 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Worked Examples</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">✏️ Worked Examples — Quadratic Expressions and Equations</h2>
    <p style="font-size:16px;">These exam-style examples bring the four lessons together. Each one shows the thinking process, every step with its explanation, the final answer, a common mistake and, where useful, another method. Try each problem first, then compare.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Completing the square</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Express and solve <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Express x² + 10x + 18 in the form (x + p)² + q and hence solve x² + 10x + 18 = 0, leaving answers in surd form.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half of 10 is 5; 5² = 25.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 10x + 18 = (x + 5)² − 25 + 18 = (x + 5)² − 7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add and subtract 25.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x + 5)² = 7 → x + 5 = ±√<span style="border-top:1px solid currentColor;padding:0 2px;">7</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square-root both sides, remembering both the + and − roots.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = −5 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">7</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract 5 from both sides to make x the subject.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (x + 5)² − 7; x = −5 + √<span style="border-top:1px solid currentColor;padding:0 2px;">7</span> or x = −5 − √<span style="border-top:1px solid currentColor;padding:0 2px;">7</span>
    </div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x + 5)² + 18.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Formula: x = (−10 ± √28) ÷ 2 = −5 ± √7.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Coefficient of x² not 1 <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 3x² − 6x − 2 = 0 by completing the square, correct to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Divide by 3 first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 2x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">2</span><span style="padding:0 4px;">3</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 3 and move the constant.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x − 1)² = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">2</span><span style="padding:0 4px;">3</span></span> + 1 = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">3</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Half of −2 is −1; (−1)² = 1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x − 1 = ±1.2910</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √(5/3) ≈ 1.2910.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 2.2910 or x = −0.2910</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add and subtract 1.2910 from 1, then round at the end.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 2.29 or x ≈ −0.29</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding 1 to the left side only.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 The quadratic formula</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Fractions in the equation <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">x</span><span style="padding:0 4px;">2</span></span> + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">x</span></span> = 4, correct to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply every term by 2x to clear the fractions, then use the formula.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 6 = 8x → x² − 8x + 6 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply by 2x.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> b² − 4ac = 64 − 24 = 40</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Here a = 1, b = −8, c = 6, so b² = 64 and 4ac = 24.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = (8 ± 6.3246) ÷ 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute into the formula: √40 ≈ 6.3246 and 2a = 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 7.1623 or x = 0.8377</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Evaluate both cases, then round to the required accuracy.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 7.16 or x ≈ 0.84</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying only the fractions by 2x and not the 4.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Using the discriminant <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find the values of k for which 2x² + kx + 8 = 0 has equal roots.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Equal (repeated) roots means b² − 4ac = 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> k² − 4(2)(8) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Equal roots means the discriminant b² − 4ac must be zero.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> k² = 64</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move 64 to the other side: k² − 64 = 0.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> k = 8 or k = −8</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both values work.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> k = 8 or k = −8</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> k = 8: 2x² + 8x + 8 = 2(x + 2)², repeated root x = −2 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing k² − 4(2)(8) = 0 as k² = 16 by forgetting to multiply by 2.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Forming equations</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Area and perimeter together <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A rectangular plot has perimeter 46 m and area 120 m². Find its dimensions.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half the perimeter: length + width = 23.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Let the width be x; length = 23 − x.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Half the perimeter is 23, so length + width = 23.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x(23 − x) = 120 → x² − 23x + 120 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Area = width × length; rearrange so the equation equals zero.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x − 8)(x − 15) = 0 → x = 8 or 15</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both give the same rectangle.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The plot is 15 m by 8 m.</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 2(15 + 8) = 46 ✓; 15 × 8 = 120 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using length + width = 46 instead of half the perimeter, 23.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Shared transport cost <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A group hires a matatu for Ksh 7 200, sharing the cost equally. Four people fail to come, so each of the others pays Ksh 60 more. How many people were in the group at first?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let n be the original number. Each would pay 7 200 ÷ n.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7200</span><span style="padding:0 4px;">n − 4</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">7200</span><span style="padding:0 4px;">n</span></span> = 60</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> New share minus old share.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 7200n − 7200(n − 4) = 60n(n − 4)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply by n(n − 4).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 28 800 = 60n² − 240n → n² − 4n − 480 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 60.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (n − 24)(n + 20) = 0 → n = 24</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Reject −20.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 24 people</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 7 200 ÷ 24 = 300; 7 200 ÷ 20 = 360; difference 60 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing 7 200/n − 7 200/(n − 4) = 60, which gives a negative difference.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Graphical solutions</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 7: Choosing the line <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> The graph of y = 2x² − 3x − 5 is drawn. State the line to draw to solve 2x² − 5x − 3 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Write the new equation so that 2x² − 3x − 5 is on one side.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2x² − 5x − 3 = 0 → 2x² − 3x − 5 − 2x + 2 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> −5x = −3x − 2x and −3 = −5 + 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2x² − 3x − 5 = 2x − 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move −2x + 2 to the right; the left side is now exactly the drawn curve.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Draw y = 2x − 2. (The solutions are x = 3 and x = −½.)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Changing the curve instead of finding a line.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 8: Profit graph <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> The daily profit (Ksh) of a juice kiosk selling at x shillings per cup is P = −x² + 80x − 1 200. Find the price that gives maximum profit and the maximum profit.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The graph is ∩-shaped (a &lt; 0). The maximum is on the line of symmetry.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x = −b/2a = −80 ÷ (−2) = 40</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> For a ∩-shaped graph the maximum lies on the line of symmetry x = −b/2a.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> P = −1 600 + 3 200 − 1 200 = 400</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Substitute x = 40.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Price Ksh 40 per cup; maximum daily profit Ksh 400</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using x = b/2a = −40, forgetting the minus sign in −b/2a.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Complete the square: P = −(x − 40)² + 400.</p>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 How Examiners Mark These</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Method marks are given for correct forming, substituting and rearranging — show them.</li>
    <li>Accuracy marks need the final answer rounded as asked.</li>
    <li>Context questions need a final sentence with units.</li>
    <li>Graph questions: plotting, curve quality and readings are marked separately.</li>
    </ul>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'x² + 10x + 18 in the form (x + p)² + q is:',
            options: ['(x + 5)² + 18', '(x + 5)² − 7', '(x + 10)² − 82', '(x + 5)² + 7'],
            correct: 1,
            explanation: 'Add and subtract 25: (x + 5)² − 25 + 18 = (x + 5)² − 7.'
        },
        {
            question: '2x² + kx + 8 = 0 has equal roots when k equals:',
            options: ['±4', '±16', '±2', '±8'],
            correct: 3,
            explanation: 'Equal roots need k² − 64 = 0, so k = 8 or k = −8.'
        },
        {
            question: 'A rectangle has perimeter 46 m and area 120 m². Its length and width add up to:',
            options: ['46 m', '120 m', '23 m', '92 m'],
            correct: 2,
            explanation: 'Perimeter = 2(length + width), so length + width = 46 ÷ 2 = 23.'
        },
        {
            question: 'P = −x² + 80x − 1 200 has its maximum when x equals:',
            options: ['80', '40', '−40', '1 200'],
            correct: 1,
            explanation: 'For a ∩-shaped graph the maximum is at x = −b/2a = −80 ÷ (−2) = 40.'
        },
        {
            question: 'After multiplying x/2 + 3/x = 4 by 2x, the equation becomes:',
            options: ['x² + 3 = 4x', 'x + 6 = 8', '2x² + 6 = 4', 'x² + 6 = 8x'],
            correct: 3,
            explanation: 'x/2 × 2x = x², 3/x × 2x = 6 and 4 × 2x = 8x.'
        },
        {
            question: 'When a solution gives the number of people as −20, you should:',
            options: ['reject it because a count cannot be negative', 'use it anyway', 'make it positive', 'add 20'],
            correct: 0,
            explanation: 'A number of people must be a positive whole number, so the negative solution is rejected.'
        }
    ]
},
{
    name: '1.1 Practice: Quadratic Expressions and Equations',
    type: 'lesson',
    duration: '80 min',
    exercises: 20,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Practice</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🏋️ Practice Set — Quadratic Expressions and Equations</h2>
    <p style="font-size:16px;">Twenty questions covering all four lessons, from easy to exam level. Use any suitable method unless a question names one.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 How to Use This Practice Set</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Do the questions in order; each level builds on the one before.</li>
    <li>Time yourself: about 3 minutes for easy, 5 for medium and 8 for hard questions.</li>
    <li>Mark yourself honestly with the hidden answers.</li>
    <li>For every wrong answer, write down the mistake and redo the question the next day.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Set</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What must be added to x² − 18x to make a perfect square?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">81, giving (x − 9)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write x² + 2x − 5 in the form (x + p)² + q.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 1)² − 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> State a, b and c for 4 − 3x + 2x² = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Rearranged: 2x² − 3x + 4 = 0, so a = 2, b = −3, c = 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Form the quadratic equation whose roots are 5 and −1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 4x − 5 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> State the y-intercept and shape of y = 3 − x − x².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">y-intercept (0, 3); ∩-shaped (a = −1)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve x² − 10x + 18 = 0 by completing the square (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 5)² = 7 → x ≈ 7.65 or 2.35</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve 2x² + 7x + 3 = 0 using the formula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 25 → x = (−7 ± 5)/4 → x = −½ or −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve 3x² − x − 1 = 0 (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 13 → x = (1 ± 3.6056)/6 → 0.77 or −0.43</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Find b² − 4ac for 2x² − 4x + 5 = 0 and state the number of real roots.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">16 − 40 = −24; no real roots</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A number is 4 less than its square. Find the possible numbers (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 4 = x → x² − x − 4 = 0 → x = (1 ± √17)/2 ≈ 2.56 or −1.56</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Solve (2x − 1)(x + 3) = 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2x² + 5x − 3 = 5 → 2x² + 5x − 8 = 0 → x = (−5 ± √89)/4 ≈ 1.11 or −3.61</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> Solve 1/x + 1/(x + 2) = 1 (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x + 2 + x = x² + 2x → x² = 2 → x = ±1.41</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q13.</strong> Find k if x² − 6x + k = 0 has equal roots.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">36 − 4k = 0 → k = 9</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q14.</strong> The graph of y = x² + 2x − 3 is drawn. State the line needed to solve x² + 3x − 1 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 2x − 3 = −x − 2 → draw y = −x − 2</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q15.</strong> A school field is 20 m longer than it is wide and has area 4 800 m². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x(x + 20) = 4800 → x² + 20x − 4800 = 0 → (x + 80)(x − 60) = 0 → 60 m by 80 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q16.</strong> A farmer has 60 m of fencing to make a rectangular pen against a wall (three sides fenced). The area is 450 m². Find the dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Width x, length 60 − 2x: x(60 − 2x) = 450 → x² − 30x + 225 = 0 → (x − 15)² = 0 → 15 m by 30 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q17.</strong> A ball’s height is h = 1 + 14t − 5t² m. When is it 9 m high?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5t² − 14t + 8 = 0 → (5t − 4)(t − 2) = 0 → t = 0.8 s and 2 s</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #93c5fd;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">Exam Style</p>
    <p style="margin:8px 0 2px 0;"><strong>Q18.</strong> (a) Make a table for y = x² − 3x − 4 for −2 ≤ x ≤ 5. (b) Draw the graph. (c) Solve x² − 3x − 4 = 0 and x² − 3x − 4 = 2 from the graph.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) y = 6, 0, −4, −6, −6, −4, 0, 6. (c) x = −1, 4; with y = 2: x ≈ −1.4 and 4.4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q19.</strong> A trader buys some bags of maize for Ksh 36 000. If each bag had cost Ksh 600 less, she would have bought 3 more bags. Find the number of bags bought.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">36000/n − 36000/(n + 3) = 600 → n² + 3n − 180 = 0 → (n + 15)(n − 12) = 0 → 12 bags</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q20.</strong> Derive the quadratic formula by completing the square on ax² + bx + c = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Divide by a; move c/a; add (b/2a)² to both sides; (x + b/2a)² = (b² − 4ac)/4a²; root and make x the subject: x = (−b ± √(b² − 4ac))/2a.</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">📊 Score Yourself</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Questions correct</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Next step</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">18 – 20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Try the challenge questions in the revision page.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13 – 17</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redo the ones you missed tomorrow.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 – 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the worked examples, then retry.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 – 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Go back to Lessons 1–4 and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Solve x² − 10x + 18 = 0 exactly.',
            options: ['x = −5 ± √7', 'x = 10 ± √7', 'x = 5 ± √7', 'x = 5 ± 7'],
            correct: 2,
            explanation: '(x − 5)² = 25 − 18 = 7, so x = 5 ± √7.'
        },
        {
            question: 'For 2x² − 4x + 5 = 0, b² − 4ac is:',
            options: ['56', '24', '−24', '−56'],
            correct: 2,
            explanation: '(−4)² − 4(2)(5) = 16 − 40 = −24, so there are no real roots.'
        },
        {
            question: 'x² − 6x + k = 0 has equal roots when k is:',
            options: ['6', '−9', '36', '9'],
            correct: 3,
            explanation: '36 − 4k = 0 gives k = 9, and x² − 6x + 9 = (x − 3)².'
        },
        {
            question: 'A field is 20 m longer than it is wide with area 4 800 m². Its width is:',
            options: ['40 m', '80 m', '120 m', '60 m'],
            correct: 3,
            explanation: 'x² + 20x − 4800 = 0 factorises as (x + 80)(x − 60) = 0, so the width is 60 m.'
        },
        {
            question: 'The roots of x² − 3x − 4 = 0 are:',
            options: ['1 and −4', '−1 and 4', '3 and 4', '−3 and −4'],
            correct: 1,
            explanation: '(x + 1)(x − 4) = 0 gives x = −1 or x = 4.'
        },
        {
            question: 'The equation with roots 5 and −1 is:',
            options: ['x² − 4x − 5 = 0', 'x² + 4x − 5 = 0', 'x² − 6x + 5 = 0', 'x² + 6x + 5 = 0'],
            correct: 0,
            explanation: 'Sum 4 and product −5 give x² − 4x − 5 = 0.'
        }
    ]
},
{
    name: '1.1 Quiz: Quadratic Expressions and Equations',
    type: 'lesson',
    duration: '30 min',
    exercises: 12,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📝 Sub-strand 1.1 Quiz</h2>
    <p style="font-size:16px;">Test yourself on everything in this sub-strand: completing the square, the quadratic formula, forming equations and graphs.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 12 multiple-choice questions.</li>
    <li>Work each question on rough paper before choosing an answer.</li>
    <li>Do not look back at the lessons — test yourself honestly.</li>
    <li>Afterwards, read the explanation for every question, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Completing the square and the form (x + p)² + q</li>
    <li>Solving by completing the square</li>
    <li>Deriving and using the quadratic formula</li>
    <li>The discriminant b² − 4ac</li>
    <li>Forming equations from roots and word problems</li>
    <li>Features of quadratic graphs and graphical solutions</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the four lessons and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Most wrong options in this quiz match a common mistake — such as forgetting ±, wrong signs in −b, or not rearranging to = 0. If your answer matches an option, check whether you made one of these slips.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'What must be added to x² − 7x to make a perfect square?',
            options: ['49/4', '7/2', '49', '14'],
            correct: 0,
            explanation: 'Half of −7 is −7/2, and (−7/2)² = 49/4.'
        },
        {
            question: 'x² − 4x + 7 written as (x + p)² + q is:',
            options: ['(x − 2)² + 7', '(x + 2)² + 3', '(x − 2)² + 3', '(x − 4)² − 9'],
            correct: 2,
            explanation: 'x² − 4x + 4 − 4 + 7 = (x − 2)² + 3.'
        },
        {
            question: 'The minimum value of x² − 4x + 7 is:',
            options: ['7', '3', '2', '−3'],
            correct: 1,
            explanation: 'From (x − 2)² + 3, the least value is 3, when x = 2.'
        },
        {
            question: 'Solve (x + 4)² = 25.',
            options: ['x = 21', 'x = 1 only', 'x = 1 or x = −9', 'x = 9 or x = −1'],
            correct: 2,
            explanation: 'x + 4 = ±5, so x = 1 or x = −9.'
        },
        {
            question: 'For 3x² + 4x − 2 = 0, b² − 4ac equals:',
            options: ['40', '−8', '16', '28'],
            correct: 0,
            explanation: '4² − 4(3)(−2) = 16 + 24 = 40.'
        },
        {
            question: 'The roots of 2x² − 5x + 2 = 0 are:',
            options: ['2 and ½', '−2 and −½', '5 and 2', '1 and 4'],
            correct: 0,
            explanation: 'b² − 4ac = 25 − 16 = 9; x = (5 ± 3) ÷ 4 = 2 or ½.'
        },
        {
            question: 'How many real roots does x² + x + 3 = 0 have?',
            options: ['Two', 'None', 'One', 'Three'],
            correct: 1,
            explanation: 'b² − 4ac = 1 − 12 = −11, which is negative, so there are no real roots.'
        },
        {
            question: 'The quadratic equation with roots −4 and 3 is:',
            options: ['x² − x − 12 = 0', 'x² + 7x + 12 = 0', 'x² − 7x − 12 = 0', 'x² + x − 12 = 0'],
            correct: 3,
            explanation: '(x + 4)(x − 3) = x² + x − 12.'
        },
        {
            question: 'A rectangle is 2 cm longer than it is wide and has area 48 cm². Its width is:',
            options: ['8 cm', '4 cm', '6 cm', '12 cm'],
            correct: 2,
            explanation: 'x(x + 2) = 48 → (x + 8)(x − 6) = 0, so the width is 6 cm.'
        },
        {
            question: 'The turning point of y = x² + 6x + 5 is:',
            options: ['(3, 32)', '(−3, −4)', '(−6, 5)', '(3, −4)'],
            correct: 1,
            explanation: 'x = −6/2 = −3 and y = 9 − 18 + 5 = −4.'
        },
        {
            question: 'To solve x² + x − 6 = 3 using the graph of y = x² + x − 6, draw:',
            options: ['y = −3', 'x = 3', 'y = x + 3', 'y = 3'],
            correct: 3,
            explanation: 'The solutions are where the curve meets the horizontal line y = 3.'
        },
        {
            question: 'The graph of y = 5 + 4x − x² has:',
            options: ['a minimum point', 'no turning point', 'two turning points', 'a maximum point'],
            correct: 3,
            explanation: 'The coefficient of x² is negative, so the parabola opens downwards with a maximum.'
        }
    ]
},
{
    name: '1.1 Assignment: Quadratic Expressions and Equations',
    type: 'lesson',
    duration: '180 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 180 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📂 Assignment: Designing a School Kitchen Garden</h2>
    <p style="font-size:16px;">In this assignment you will use quadratic equations and graphs to design a kitchen garden for your school, then explain your design to the school’s environment club.</p>
    <p style="margin:6px 0 0 0;color:#e0f2fe;font-size:14px;">🗓️ Time to complete: one week (about 180 min of work).</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your school has set aside land for a rectangular kitchen garden to grow sukuma wiki, spinach and onions. The club has 56 m of fencing and wants the garden to have an area of 180 m². They also want a path of equal width around a central planting bed.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Kitchen gardens help schools cut food costs and teach learners about nutrition and environmental conservation.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Tasks</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Let the width of the garden be x m. Using the 56 m of fencing, write the length in terms of x.</li>
    <li>Form a quadratic equation for an area of 180 m² and solve it by completing the square. State the dimensions.</li>
    <li>Solve the same equation using the quadratic formula and confirm your answer.</li>
    <li>Inside the garden, a path of uniform width w m runs along all four edges, leaving a central planting bed of area 128 m². Form an equation for w using your garden dimensions, solve it and state the size of the bed.</li>
    <li>Make a table of values and draw the graph of A = x(28 − x) for 0 ≤ x ≤ 28, where A is the area for any width x. Use your graph to find the greatest possible area and the widths that give an area of 180 m².</li>
    <li>Write a one-page report for the environment club explaining your design, your methods and why you rejected any solutions.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>All working for Tasks 1–4, clearly labelled.</li>
    <li>The graph on graph paper with a title, labelled axes and the line A = 180 drawn.</li>
    <li>A scale drawing (1 cm to 2 m) of the garden and path.</li>
    <li>The one-page report.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forming equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All equations correct, with clear “Let …” statements and units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations correct with minor presentation gaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some equations correct; others need prompting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations missing or incorrect</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct by both methods, exact and rounded values given</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct by at least one method</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly correct with errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little correct working</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate, smooth, well-scaled; maximum and readings correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate with minor plotting errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some points wrong or curve not smooth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph missing or very inaccurate</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpretation and report</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, well-argued report with justified rejections</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear report covering the main points</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Report incomplete or unclear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No meaningful report</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Tips for Success</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Perimeter 56 m means length + width = 28 m.</li>
    <li>The path surrounds the bed, so the bed measures (length − 2w) by (width − 2w).</li>
    <li>Check that the widths you read from the graph match your algebraic answers.</li>
    </ul>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which method (completing the square, formula or graph) did you find most useful, and why?</li>
    <li>How did the graph help you understand the largest possible area?</li>
    <li>What would change if the club had 60 m of fencing?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'With 56 m of fencing and width x m, the length of the garden is:',
            options: ['56 − x', '56 − 2x', '28 + x', '28 − x'],
            correct: 3,
            explanation: 'Perimeter 2(length + width) = 56, so length + width = 28 and length = 28 − x.'
        },
        {
            question: 'The area equation for 180 m² is:',
            options: ['x(56 − x) = 180', 'x(28 − x) = 180', '2x + 28 = 180', 'x² = 180'],
            correct: 1,
            explanation: 'Area = width × length = x(28 − x) = 180.'
        },
        {
            question: 'x(28 − x) = 180 rearranges to:',
            options: ['x² + 28x − 180 = 0', 'x² − 28x − 180 = 0', 'x² − 28x + 180 = 0', 'x² + 180 = 28'],
            correct: 2,
            explanation: '28x − x² = 180 → x² − 28x + 180 = 0.'
        },
        {
            question: 'The solutions of x² − 28x + 180 = 0 are:',
            options: ['9 and 20', '12 and 15', '10 and 18', '6 and 30'],
            correct: 2,
            explanation: '(x − 10)(x − 18) = 0, so the garden is 10 m by 18 m.'
        },
        {
            question: 'The greatest possible area with 28 m for length + width is when the width is:',
            options: ['14 m', '10 m', '18 m', '28 m'],
            correct: 0,
            explanation: 'The ∩-shaped graph of A = x(28 − x) has its maximum on the line of symmetry x = 14, a square.'
        }
    ]
},
{
    name: '1.1 Revision: Quadratic Expressions and Equations',
    type: 'lesson',
    duration: '45 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 45 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🔁 Revision — Quadratic Expressions and Equations</h2>
    <p style="font-size:16px;">Use these cards a few days after finishing the sub-strand. Read a card, close it, and say the key idea aloud before trying the questions.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">1. Completing the square</p>
    <div>
    <p>x² + bx + (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)². To solve: move c, add (b/2)² to both sides, square-root with ±. Divide by a first if a ≠ 1.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">2. The quadratic formula</p>
    <div>
    <p>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>. Rearrange to = 0 and read a, b, c with signs.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">3. The discriminant</p>
    <div>
    <p>b² − 4ac &gt; 0: two roots; = 0: one repeated root; &lt; 0: no real roots.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">4. Forming equations</p>
    <div>
    <p>Roots α, β → x² − (α + β)x + αβ = 0. Word problems: define, express, form, solve, interpret.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">5. Graphs</p>
    <div>
    <p>Parabola: U if a &gt; 0, ∩ if a &lt; 0. Roots at y = 0; y-intercept c; symmetry x = −b/2a. Solve f(x) = g(x) by reading intersections.</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Method</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Best when</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Watch out for</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factorising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Roots are whole numbers or simple fractions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sign errors in brackets</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Completing the square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asked to, or to find a minimum/maximum</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding to one side only</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Answers needed to decimal places</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Signs of −b and −4ac</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Graph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asked to, or to see the number of roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reading accuracy and scale</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Complete the square for x² − 5x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Add <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">25</span><span style="padding:0 4px;">4</span></span>; (x − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve x² + 4x − 7 = 0 exactly by completing the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 2)² = 11 → x = −2 ± √11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 5x² − 2x − 1 = 0 (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">b² − 4ac = 24 → x = (2 ± 4.899)/10 → 0.69 or −0.29</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the equation with roots −⅓ and 2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(3x + 1)(x − 2) = 0 → 3x² − 5x − 2 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> The product of two consecutive even numbers is 168. Find them.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">n(n + 2) = 168 → n = 12 → 12 and 14 (or −14 and −12)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> State the turning point of y = −x² + 6x − 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3, y = −9 + 18 − 5 = 4 → maximum (3, 4)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> For which values of k does x² + kx + 4 = 0 have no real roots?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">k² − 16 &lt; 0 → −4 &lt; k &lt; 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> The graph of y = x² − 4x is drawn. Which line solves x² − 5x + 2 = 0?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 4x = x − 2 → draw y = x − 2</div>
    </details>
    </div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can complete the square for any x² + bx + c.</p>
    <p style="margin:6px 0;">☐ I can solve quadratics by completing the square, even when a ≠ 1.</p>
    <p style="margin:6px 0;">☐ I can derive and use the quadratic formula.</p>
    <p style="margin:6px 0;">☐ I can use b² − 4ac to describe the roots.</p>
    <p style="margin:6px 0;">☐ I can form and solve equations from word problems and reject impossible answers.</p>
    <p style="margin:6px 0;">☐ I can draw quadratic graphs and use them to solve equations.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which method is required when a question says "correct to 2 decimal places" and the expression does not factorise?',
            options: ['Factorising', 'Formula or completing the square', 'Guessing', 'Reading the y-intercept'],
            correct: 1,
            explanation: 'Non-factorising quadratics with decimal answers are solved with the formula or by completing the square.'
        },
        {
            question: 'x² + kx + 4 = 0 has no real roots when:',
            options: ['k² − 16 is negative', 'k² − 16 is positive', 'k = 4', 'k = 0 only'],
            correct: 0,
            explanation: 'No real roots means b² − 4ac = k² − 16 is less than zero.'
        },
        {
            question: 'The turning point of y = −x² + 6x − 5 is:',
            options: ['(−3, 4), a maximum', '(3, −4), a minimum', '(3, 4), a maximum', '(6, −5), a maximum'],
            correct: 2,
            explanation: 'x = −6 ÷ (−2) = 3 and y = −9 + 18 − 5 = 4; a is negative so it is a maximum.'
        },
        {
            question: 'The equation with roots −⅓ and 2 is:',
            options: ['3x² − 5x − 2 = 0', '3x² + 5x − 2 = 0', 'x² − 2x − ⅓ = 0', '3x² − 5x + 2 = 0'],
            correct: 0,
            explanation: '(3x + 1)(x − 2) = 3x² − 6x + x − 2 = 3x² − 5x − 2.'
        },
        {
            question: 'Two consecutive even numbers with product 168 are:',
            options: ['10 and 12', '14 and 16', '12 and 14', '8 and 21'],
            correct: 2,
            explanation: 'n(n + 2) = 168 → (n + 14)(n − 12) = 0, so n = 12 and the numbers are 12 and 14.'
        }
    ]
},
{
    name: '1.1 Summary: Quadratic Expressions and Equations',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Expressions and Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 20 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🧾 Summary — Quadratic Expressions and Equations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Every quadratic equation ax² + bx + c = 0 can be solved: by completing the square, by the quadratic formula (which comes from completing the square) or by reading a graph. Real problems become quadratics when a quantity is multiplied by itself — areas, products, and journeys where time depends on speed.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔑 Key Points</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A perfect square is (x + p)² = x² + 2px + p²; add (b/2)² to complete the square.</li>
    <li>x² + bx + c = (x + p)² + q shows the minimum value q.</li>
    <li>The quadratic formula is x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>.</li>
    <li>b² − 4ac decides whether there are two, one or no real roots.</li>
    <li>Roots α and β give x² − (α + β)x + αβ = 0.</li>
    <li>Word problems: define, express, form, solve, interpret.</li>
    <li>Quadratic graphs are parabolas; roots are x-intercepts; the line of symmetry is x = −b/2a.</li>
    <li>Draw a line to solve related equations from a graph.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Completing the Square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making perfect squares and solving with them</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving 2x² + 8x − 5 = 0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. The Quadratic Formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deriving and using the formula; the discriminant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Signs of −b and −4ac</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Forming and Solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations from roots and real situations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Journey and sharing problems</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Graphs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Plotting parabolas and solving graphically</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the right line to draw</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧾 All the Formulas in One Place</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Name</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Formula</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Completing the square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + bx = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² − (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quadratic formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √<span style="border-top:1px solid currentColor;padding:0 2px;">b² − 4ac</span></span><span style="padding:0 4px;">2a</span></span>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discriminant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">b² − 4ac</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equation from roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − (α + β)x + αβ = 0</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Line of symmetry</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2a</span></span>
    </td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perfect square</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Completing the square</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Quadratic formula</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Discriminant</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Roots</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Parabola</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Turning point</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Line of symmetry</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Intersection</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Quadratic equations help Kenyan farmers plan plots, traders work out prices and quantities, engineers design arches and coaches study the flight of a ball.</div>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Lesson 2 of this sub-strand gave answers such as x = −3 ± √5. In sub-strand 1.2 Irrational Numbers you will learn to simplify and calculate with surds like these.</div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ complete the square and find a minimum value</p>
    <p style="margin:6px 0;">✔️ solve any quadratic equation by completing the square or the formula</p>
    <p style="margin:6px 0;">✔️ tell how many real roots an equation has</p>
    <p style="margin:6px 0;">✔️ form quadratic equations from roots and real situations</p>
    <p style="margin:6px 0;">✔️ draw quadratic graphs and solve equations graphically</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The quadratic formula is obtained by:',
            options: ['factorising', 'completing the square on ax² + bx + c = 0', 'drawing a graph', 'guessing and checking'],
            correct: 1,
            explanation: 'Completing the square on the general equation ax² + bx + c = 0 gives the formula.'
        },
        {
            question: 'b² − 4ac = 0 means the equation has:',
            options: ['two different roots', 'no real roots', 'one repeated root', 'three roots'],
            correct: 2,
            explanation: 'When the discriminant is zero, the ± part adds nothing, so both roots are equal.'
        },
        {
            question: 'The line of symmetry of a parabola passes through its:',
            options: ['turning point', 'y-intercept', 'roots only', 'origin'],
            correct: 0,
            explanation: 'The vertical line of symmetry always passes through the turning point.'
        },
        {
            question: 'Which is a correct step when completing the square on x² + 8x = 5?',
            options: ['x² + 8x + 16 = 5', 'x² + 8x + 64 = 69', 'x² + 8x + 4 = 9', 'x² + 8x + 16 = 21'],
            correct: 3,
            explanation: 'Add (8 ÷ 2)² = 16 to both sides: 5 + 16 = 21.'
        },
        {
            question: 'In context, a negative solution for a length should be:',
            options: ['rejected', 'kept', 'doubled', 'squared'],
            correct: 0,
            explanation: 'Lengths cannot be negative, so that solution is rejected.'
        }
    ]
},
{
    name: '1.2.1 Rational and Irrational Numbers',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 1</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Rational and Irrational Numbers</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish between rational and irrational numbers.</li>
    <li>Convert recurring decimals (including two repeating digits) into fractions.</li>
    <li>Identify surds.</li>
    <li>Estimate and place irrational numbers on a number line.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Real numbers from Grade 10, fractions and decimals, square numbers and Pythagoras’ theorem.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> Why do we sometimes need exact values instead of decimals?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A carpenter in Kisii cuts a square table top of side 1 m. How long is the diagonal? Pythagoras gives √2 m. Type √2 into a calculator and you get 1.414213562… — the digits never end and never repeat. No ruler, fraction or decimal can give its exact length. Numbers like this are <strong>irrational</strong>, and in this sub-strand you will learn to work with them exactly.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>Is 0.272727… rational or irrational? Is 0.1010010001… rational or irrational? Decide, then check later in the lesson.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“A <strong>rational number</strong> can be written as a fraction a/b of two integers, with b ≠ 0. Its decimal either ends (0.375) or repeats a pattern for ever (0.2727…).</p>
    <p>An <strong>irrational number</strong> cannot be written as such a fraction; its decimal never ends and never repeats. Examples are √2, √3, √5, π and numbers like 0.1010010001… whose pattern keeps changing.</p>
    <p>A <strong>surd</strong> is an irrational root, such as √2 or ∛5. Note: √9 = 3 is <em>not</em> a surd, because it is rational. We leave surds in root form when we need an exact answer.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Rational number</p>
    <div>
    <p style="margin:0;">A number that can be written as a/b, where a and b are integers and b ≠ 0.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3/8, −5, 0.4̇</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Irrational number</p>
    <div>
    <p style="margin:0;">A number whose decimal never ends and never repeats.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: √7, π</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Surd</p>
    <div>
    <p style="margin:0;">An irrational root of a rational number.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: √2, 3√5</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Recurring decimal</p>
    <div>
    <p style="margin:0;">A decimal with a block of digits that repeats for ever.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 0.272727… = 0.2̇7̇</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Perfect square</p>
    <div>
    <p style="margin:0;">A number whose square root is a whole number.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 1, 4, 9, 16, 25</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Exact value</p>
    <div>
    <p style="margin:0;">A value written without rounding.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: √2 rather than 1.414</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Test for rationality</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Can it be written as a fraction of integers? → rational.</li>
    <li>Does the decimal end or repeat? → rational.</li>
    <li>Is it the root of a number that is not a perfect power? → irrational (a surd).</li>
    <li>Is it π, or a decimal with a non-repeating pattern? → irrational.</li>
    </ol>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Recurring decimals with two repeating digits</p>
    <p>Let x = 0.272727…. Two digits repeat, so multiply by 100: 100x = 27.2727…. Subtract: 99x = 27, so x = 27/99 = 3/11.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Important Note</p>
    <div>Multiply by 10 for one repeating digit, by 100 for two, by 1 000 for three.</div>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Estimating surds</p>
    <p>Find the perfect squares on either side: 9 &lt; 10 &lt; 16, so 3 &lt; √10 &lt; 4, and √10 is a little above 3 because 10 is close to 9 (√10 ≈ 3.16).</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>The square-root spiral builds lengths √2, √3, √4, … using right-angled triangles with one side of 1 unit:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 330" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="230" y1="150" x2="282" y2="150" stroke="#38bdf8" stroke-width="2"/><line x1="282.0" y1="150.0" x2="282.0" y2="98.0" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="282.0" y2="98.0" stroke="#94a3b8" stroke-width="1.2"/><text x="258.6" y="121.4" fill="#fde68a" font-size="12">√2</text><line x1="282.0" y1="98.0" x2="245.2" y2="61.2" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="245.2" y2="61.2" stroke="#94a3b8" stroke-width="1.2"/><text x="238.4" y="101.2" fill="#fde68a" font-size="12">√3</text><line x1="245.2" y1="61.2" x2="194.0" y2="52.4" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="194.0" y2="52.4" stroke="#94a3b8" stroke-width="1.2"/><text x="210.2" y="96.3" fill="#fde68a" font-size="12">√4</text><line x1="194.0" y1="52.4" x2="145.2" y2="70.4" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="145.2" y2="70.4" stroke="#94a3b8" stroke-width="1.2"/><text x="183.4" y="106.2" fill="#fde68a" font-size="12">√5</text><line x1="145.2" y1="70.4" x2="109.6" y2="108.4" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="109.6" y2="108.4" stroke="#94a3b8" stroke-width="1.2"/><text x="163.8" y="127.1" fill="#fde68a" font-size="12">√6</text><line x1="109.6" y1="108.4" x2="92.6" y2="157.5" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="92.6" y2="157.5" stroke="#94a3b8" stroke-width="1.2"/><text x="154.4" y="154.1" fill="#fde68a" font-size="12">√7</text><line x1="92.6" y1="157.5" x2="95.5" y2="209.4" stroke="#22c55e" stroke-width="2"/><line x1="230" y1="150" x2="95.5" y2="209.4" stroke="#94a3b8" stroke-width="1.2"/><text x="156.0" y="182.7" fill="#fde68a" font-size="12">√8</text><text x="255" y="166" fill="#7dd3fc" font-size="12">1</text><text x="340" y="250" fill="#e2e8f0" font-size="13">Each outer edge is 1 unit.</text><text x="340" y="270" fill="#e2e8f0" font-size="13">By Pythagoras, each new</text><text x="340" y="290" fill="#e2e8f0" font-size="13">spoke is √2, √3, √4, …</text>
    </svg>
    </div>
    <p>Irrational numbers still have exact places on the number line:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 540 100" width="540" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="20" y1="60" x2="520" y2="60" stroke="#94a3b8" stroke-width="2"/><line x1="30" y1="53" x2="30" y2="67" stroke="#94a3b8"/><text x="30" y="88" fill="#cbd5e1" text-anchor="middle">0</text><line x1="140" y1="53" x2="140" y2="67" stroke="#94a3b8"/><text x="140" y="88" fill="#cbd5e1" text-anchor="middle">1</text><line x1="250" y1="53" x2="250" y2="67" stroke="#94a3b8"/><text x="250" y="88" fill="#cbd5e1" text-anchor="middle">2</text><line x1="360" y1="53" x2="360" y2="67" stroke="#94a3b8"/><text x="360" y="88" fill="#cbd5e1" text-anchor="middle">3</text><line x1="470" y1="53" x2="470" y2="67" stroke="#94a3b8"/><text x="470" y="88" fill="#cbd5e1" text-anchor="middle">4</text><circle cx="185.6" cy="60" r="6" fill="#f472b6"/><text x="185.6" y="28" fill="#f472b6" text-anchor="middle" font-weight="bold">√2</text><circle cx="220.5" cy="60" r="6" fill="#fde68a"/><text x="220.5" y="38" fill="#fde68a" text-anchor="middle" font-weight="bold">√3</text><circle cx="276.0" cy="60" r="6" fill="#86efac"/><text x="276.0" y="28" fill="#86efac" text-anchor="middle" font-weight="bold">√5</text><circle cx="375.6" cy="60" r="6" fill="#7dd3fc"/><text x="375.6" y="38" fill="#7dd3fc" text-anchor="middle" font-weight="bold">π</text><circle cx="341.1" cy="60" r="6" fill="#fb923c"/><text x="341.1" y="28" fill="#fb923c" text-anchor="middle" font-weight="bold">√8</text>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Rational number</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">b</span></span>, &nbsp;a, b ∈ integers, b ≠ 0</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Any number expressible as a fraction of integers.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> To classify a number.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Thinking every decimal is rational — only ending or repeating ones are.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Recurring decimals</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">0.ȧ = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">9</span></span>, &nbsp; 0.ȧḃ = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">ab</span><span style="padding:0 4px;">99</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> One repeating digit over 9; two repeating digits over 99.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Fast conversions such as 0.27… = 27/99.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> Multiplying by 10 or 100 and subtracting removes the repeating tail.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “As many 9s as repeating digits.”</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Classifying numbers <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Classify as rational or irrational: √<span style="border-top:1px solid currentColor;padding:0 2px;">25</span>, √<span style="border-top:1px solid currentColor;padding:0 2px;">12</span>, 0.625, π, <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">22</span><span style="padding:0 4px;">7</span></span>, 0.1010010001…</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Check for a fraction form, an ending or repeating decimal, or a perfect-square root.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">25</span> = 5 and 0.625 = 5/8</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both can be written as fractions, so they are rational.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">22</span><span style="padding:0 4px;">7</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> It is already a fraction of integers, so it is rational.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">12</span> and π</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 12 is not a perfect square and π never repeats, so both are irrational.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> 0.1010010001…</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The pattern changes (one more 0 each time), so it never repeats — irrational.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Rational: √<span style="border-top:1px solid currentColor;padding:0 2px;">25</span>, 0.625, 22/7. Irrational: √<span style="border-top:1px solid currentColor;padding:0 2px;">12</span>, π, 0.1010010001…</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Calling 22/7 irrational because it is close to π.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Two repeating digits <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Express 0.272727… as a fraction in its simplest form.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Two digits repeat, so multiply by 100.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Let x = 0.272727…</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Name the number.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 100x = 27.272727…</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiplying by 100 shifts the decimal two places so the repeating parts line up.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 99x = 27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtracting x removes the repeating tail.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 27/99 = 3/11</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide numerator and denominator by 9.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">11</span></span>
    </div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying by 10 only, so the tails do not cancel.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Mixed recurring decimal <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Express 0.1666… as a fraction.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Only the 6 repeats, and it starts after one decimal place.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Let x = 0.1666…</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Name the number.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 10x = 1.666… and 100x = 16.666…</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Create two numbers with the same repeating tail.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 100x − 10x = 15</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract to remove the tail: 90x = 15.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 15/90 = 1/6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Simplify by dividing by 15.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">1</span><span style="padding:0 4px;">6</span></span>
    </div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using 16/99, which treats both digits as repeating.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> 0.1666… = 0.1 + 0.0666… = 1/10 + (6/9)/10 = 1/10 + 1/15 = 1/6.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Estimating a surd <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Between which two integers does √<span style="border-top:1px solid currentColor;padding:0 2px;">55</span> lie? Estimate it to one decimal place.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Find the perfect squares on either side of 55.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 49 &lt; 55 &lt; 64</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 7² = 49 and 8² = 64.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> So 7 &lt; √<span style="border-top:1px solid currentColor;padding:0 2px;">55</span> &lt; 8</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square roots keep the same order.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 55 is 6 above 49 out of a gap of 15</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So √55 is a bit less than halfway: about 7.4.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">55</span> lies between 7 and 8; ≈ 7.4 (calculator: 7.416…)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Saying √55 is between 27 and 28 by halving 55.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Is the result rational? <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Is √<span style="border-top:1px solid currentColor;padding:0 2px;">2</span> × √<span style="border-top:1px solid currentColor;padding:0 2px;">8</span> rational or irrational? What about √<span style="border-top:1px solid currentColor;padding:0 2px;">2</span> + √<span style="border-top:1px solid currentColor;padding:0 2px;">8</span>?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply under one root; for addition, simplify first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">2</span> × √<span style="border-top:1px solid currentColor;padding:0 2px;">8</span> = √<span style="border-top:1px solid currentColor;padding:0 2px;">16</span> = 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The product of the numbers under the roots is a perfect square, so the result is rational.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">8</span> = 2√<span style="border-top:1px solid currentColor;padding:0 2px;">2</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Take the square factor 4 out of 8.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> √<span style="border-top:1px solid currentColor;padding:0 2px;">2</span> + 2√<span style="border-top:1px solid currentColor;padding:0 2px;">2</span> = 3√<span style="border-top:1px solid currentColor;padding:0 2px;">2</span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A rational multiple of √2 is still irrational.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The product is rational (4); the sum 3√2 is irrational.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Assuming that combining two surds always gives a surd.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Express 0.454545… as a fraction.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Let x = 0.4545… <span style="color:#94a3b8;">…………</span>
    </li>
    <li>100x = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>99x = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">100x = 45.4545…; 99x = 45; x = 45/99 = 5/11.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Between which integers does √<span style="border-top:1px solid currentColor;padding:0 2px;">30</span> lie?</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Perfect squares: … &lt; 30 &lt; … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>So … &lt; √30 &lt; … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">25 &lt; 30 &lt; 36, so 5 &lt; √<span style="border-top:1px solid currentColor;padding:0 2px;">30</span> &lt; 6 (≈ 5.48).</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Which are surds: √4, √6, √9, √11?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√6 and √11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write 0.555… as a fraction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5/9</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Is 0.125 rational?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes: 0.125 = 1/8.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Write 0.363636… as a fraction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">36/99 = 4/11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Between which integers does √90 lie?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9 and 10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Classify √0.25 and √0.5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√0.25 = 0.5 rational; √0.5 irrational.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Write 0.2333… as a fraction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">10x = 2.333…, 100x = 23.333…; 90x = 21; x = 21/90 = 7/30</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Is √3 × √12 rational? Show why.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√36 = 6, rational.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A square floor tile has area 2 m². Explain why a tiler cannot measure its side exactly with a tape measure, and give the exact side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">The side is √2 m, an irrational number whose decimal never ends, so any measurement is an approximation.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Is the sum of two irrational numbers always irrational? Give an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No: (1 + √2) + (1 − √2) = 2, which is rational.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Construction</p>
    <div>Diagonals of square rooms and roof trusses involve √2 and √3.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📐 Design</p>
    <div>A4 paper has sides in the ratio 1 : √2, so it keeps its shape when folded in half.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💻 Computing</p>
    <div>Computers store irrational numbers only approximately, which is why exact symbolic forms matter.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🎵 Music</p>
    <div>The ratios between musical notes in modern tuning use roots of 2.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deciding whether a number is rational and justifying the decision.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the square-root spiral to a group.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a calculator to observe non-repeating decimals.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linking Grade 10 real numbers to surds.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance (engineering and design)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the √ key to estimate surds, but give exact answers when the question asks for them.</li>
    <li>Some calculators show answers in surd form (e.g. 2√3); press S⇔D to switch to decimals.</li>
    <li>Check a recurring-decimal fraction by dividing: 3 ÷ 11 = 0.272727…</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Know squares to 20² = 400 to estimate roots quickly.</li>
    <li>One repeating digit → over 9; two → over 99.</li>
    <li>If the number under the root is a perfect square, the root is rational.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All decimals are rational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Non-repeating, non-ending decimals are irrational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check whether the decimal ends or repeats</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√9 is a surd</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√9 = 3 is rational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Only irrational roots are surds</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.2727… = 27/100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">27/100 = 0.27 exactly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.2727… = 27/99 = 3/11</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">22/7 is irrational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">It is a fraction of integers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">22/7 is rational; it only approximates π</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Build the square-root spiral on paper with a ruler and set square — learners remember it.</li>
    <li>Always ask: “Can I write it as a fraction?”</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rational: a/b; ending or repeating decimal.</li>
    <li>Irrational: never ends, never repeats.</li>
    <li>Surds are irrational roots.</li>
    <li>As many 9s as repeating digits.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the multiply-and-subtract steps when converting recurring decimals.</li>
    <li>When classifying, give a reason for each number.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is √49 a surd?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No, √49 = 7.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: 0.0̇9̇ = ___ / 99 = ___.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9/99 = 1/11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Predict: is √2 × √18 rational?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes: √36 = 6.</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Measure the length and width of an A4 sheet in millimetres. Divide the length by the width. Compare your answer with √2 ≈ 1.414.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain why √2 cannot be written exactly as a decimal?</li>
    <li>Which conversions do I still need to practise?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rational numbers can be written as fractions of integers; their decimals end or repeat.</li>
    <li>Irrational numbers cannot; their decimals never end or repeat.</li>
    <li>Surds are irrational roots such as √2 and √5.</li>
    <li>Recurring decimals convert to fractions by multiplying by 10, 100, … and subtracting.</li>
    <li>Surds can be estimated using neighbouring perfect squares.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Reason</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.375</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">= 3/8</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.2727…</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">= 3/11</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√16</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">= 4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Irrational (surd)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15 not a perfect square</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">π</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Irrational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">never repeats</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Rational number</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Can be written as a fraction of integers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Irrational number</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cannot be written as a fraction of integers.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Surd</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An irrational root, e.g. √3.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Recurring decimal</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A decimal with a repeating block.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) Express 0.818181… as a fraction in simplest form. (b) State, with a reason, whether √45 is rational or irrational. <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 100x − x = 81 [1]; x = 81/99 [1] = 9/11 [1]. (b) Irrational [1]; 45 is not a perfect square [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Show that √5 lies between 2 and 3 and estimate it to one decimal place. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4 &lt; 5 &lt; 9 [1] so 2 &lt; √5 &lt; 3 [1]; ≈ 2.2 [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Express 0.1̇2̇, 0.5̇4̇ and 0.08333… as fractions.</li>
    <li>List five surds between 3 and 4.</li>
    <li>Find two irrational numbers whose product is rational.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which number is irrational?',
            options: ['√36', '0.5', '7/3', '√20'],
            correct: 3,
            explanation: '20 is not a perfect square, so √20 never ends or repeats.'
        },
        {
            question: '0.272727… as a fraction is:',
            options: ['3/11', '27/100', '27/90', '2/7'],
            correct: 0,
            explanation: '99x = 27, so x = 27/99 = 3/11.'
        },
        {
            question: 'Which is NOT a surd?',
            options: ['√3', '√10', '√25', '√7'],
            correct: 2,
            explanation: '√25 = 5 is rational, so it is not a surd.'
        },
        {
            question: '√55 lies between:',
            options: ['5 and 6', '27 and 28', '8 and 9', '7 and 8'],
            correct: 3,
            explanation: '55 lies between the squares 49 and 64, so √55 lies between 7 and 8.'
        },
        {
            question: '0.1666… as a fraction is:',
            options: ['16/99', '1/6', '1/16', '16/90'],
            correct: 1,
            explanation: '100x − 10x = 15 gives x = 15/90 = 1/6.'
        },
        {
            question: '√2 × √8 equals:',
            options: ['4', '√10', '2√2', '16'],
            correct: 0,
            explanation: 'Multiply under one root: √(2 × 8) = √16 = 4, a rational number.'
        },
        {
            question: 'Which statement is true?',
            options: ['22/7 is irrational', 'Every decimal is rational', 'Every surd is irrational', '√9 is a surd'],
            correct: 2,
            explanation: 'By definition a surd is an irrational root.'
        },
        {
            question: 'How many 9s go in the denominator for 0.ȧḃ?',
            options: ['One', 'Two', 'Three', 'None'],
            correct: 1,
            explanation: 'Two repeating digits give a denominator of 99.'
        }
    ]
},
{
    name: '1.2.2 Simplifying Surds',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 2</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Simplifying Surds</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use √(ab) = √a × √b and √(a/b) = √a ÷ √b.</li>
    <li>Express surds in their simplest form.</li>
    <li>Add and subtract like surds.</li>
    <li>Simplify expressions with unlike surds by first simplifying each term.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lesson 1; factors; perfect squares up to 400.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> Why do we sometimes need exact values instead of decimals?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>An engineer writes the length of a steel brace as √72 m. Another writes 6√2 m. Are they the same? Yes! 6√2 is the <strong>simplest form</strong>: easier to compare, add and use. Just as we simplify 18/24 to 3/4, we simplify surds.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 Think About It</p>
    <div>√4 × √9 = 2 × 3 = 6, and √36 = 6. What does this suggest about √a × √b?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“The key rule is <strong>√(ab) = √a × √b</strong>. To simplify a surd, split the number under the root into a <em>perfect square</em> times another number, then take the square root of the perfect square outside: √50 = √(25 × 2) = 5√2. Always use the <strong>largest</strong> perfect square factor.</p>
    <p>Surds behave like algebraic terms. 3√2 + 5√2 = 8√2, just as 3x + 5x = 8x. But √2 + √3 cannot be combined — they are unlike, like x + y.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Simplest form</p>
    <div>
    <p style="margin:0;">A surd with no square factor (other than 1) left under the root.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: √72 = 6√2</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Like surds</p>
    <div>
    <p style="margin:0;">Surds with the same number under the root.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3√5 and −2√5</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Unlike surds</p>
    <div>
    <p style="margin:0;">Surds with different numbers under the root.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: √2 and √3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Coefficient</p>
    <div>
    <p style="margin:0;">The number in front of a surd.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In 4√3, the coefficient is 4</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Radicand</p>
    <div>
    <p style="margin:0;">The number under the root sign.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In √7, the radicand is 7</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Find the largest perfect square factor</p>
    <p>Perfect squares: 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, …. For 72: 72 = 36 × 2, and 36 is the largest square factor.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Split and simplify</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">√<span style="border-top:1px solid currentColor;padding:0 2px;">72</span> = √<span style="border-top:1px solid currentColor;padding:0 2px;">36 × 2</span> = √<span style="border-top:1px solid currentColor;padding:0 2px;">36</span> × √<span style="border-top:1px solid currentColor;padding:0 2px;">2</span> = 6√<span style="border-top:1px solid currentColor;padding:0 2px;">2</span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Fractions under a root</p>
    <p>√<span style="border-top:1px solid currentColor;padding:0 2px;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">9</span><span style="padding:0 4px;">16</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">9</span></span><span style="padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">16</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">4</span></span>; and √<span style="border-top:1px solid currentColor;padding:0 2px;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">9</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">5</span></span><span style="padding:0 4px;">3</span></span>.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Adding and subtracting</p>
    <p>Simplify each surd first, then collect like surds: √12 + √27 = 2√3 + 3√3 = 5√3.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Surd</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Largest square factor</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Simplest form</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√18</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3√2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√45</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3√5</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√50</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5√2</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√72</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">36</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6√2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√98</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">49</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7√2</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>A surd is like a pack: the perfect square “escapes” from the root as its square root, and whatever is left stays inside.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Product rule</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">√<span style="border-top:1px solid currentColor;padding:0 2px;">ab</span> = √<span style="border-top:1px solid currentColor;padding:0 2px;">a</span> × √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The root of a product is the product of the roots (a, b ≥ 0).</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Simplifying surds and multiplying them.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> √(a + b) is NOT √a + √b: √(9 + 16) = 5, but √9 + √16 = 7.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Square factor out, leftover in.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Quotient rule</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">√<span style="border-top:1px solid currentColor;padding:0 2px;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">b</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span></span><span style="padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The root of a fraction is the root of the top over the root of the bottom.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Simplifying roots of fractions.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Like surds</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">m√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span> + n√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span> = (m + n)√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Add or subtract the coefficients of like surds.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Collecting surd terms.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> √2 + √3 ≠ √5.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Simplest form <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √50 and √72.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Find the largest perfect square factor of each.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 50 = 25 × 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 25 is the largest square factor of 50.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> √50 = √25 × √2 = 5√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Take √25 = 5 outside the root.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 72 = 36 × 2, so √72 = 6√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 36 is the largest square factor of 72.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 5√2 and 6√2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using 72 = 4 × 18 and stopping at 2√18, which is not fully simplified.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Simplify in stages: √72 = 2√18 = 2 × 3√2 = 6√2.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Larger numbers <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √180.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Try large perfect squares: 36 × 5 = 180.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 180 = 36 × 5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 36 is the largest square factor (180 = 4 × 45 = 9 × 20 also work but are not largest).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> √180 = 6√5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Take √36 = 6 outside.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 6√5</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing √180 = 2√45 and stopping.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Like surds <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify 3√2 + 5√2 − √2.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> All terms are multiples of √2.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (3 + 5 − 1)√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Collect the coefficients of the like surds.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 7√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add and subtract the coefficients.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 7√2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Treating −√2 as 0 and getting 8√2.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Simplify then add <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √12 + √27 − √48.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Each number has a square factor that leaves 3.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √12 = 2√3, √27 = 3√3, √48 = 4√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Take out the squares 4, 9 and 16.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2√3 + 3√3 − 4√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> All are now like surds.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = √3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 2 + 3 − 4 = 1.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> √3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding the radicands: √(12 + 27 − 48) = √(−9), which is meaningless.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Fractions under a root <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √(18/25).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Split into top and bottom roots, then simplify the top.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √(18/25) = √18 ÷ √25</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Use the quotient rule.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 3√2 ÷ 5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √18 = 3√2 and √25 = 5.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3√<span style="border-top:1px solid currentColor;padding:0 2px;">2</span></span><span style="padding:0 4px;">5</span></span>
    </div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Taking √18 = 9 by halving.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Mixed expression <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify 2√75 − 3√12 + √108.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Simplify each surd with coefficients carried along.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2√75 = 2 × 5√3 = 10√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 75 = 25 × 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 3√12 = 3 × 2√3 = 6√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 12 = 4 × 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> √108 = √(36 × 3) = 6√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 108 = 36 × 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> 10√3 − 6√3 + 6√3 = 10√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Collect like surds.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 10√3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Forgetting to multiply the coefficient: writing 2√75 = 5√3.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √98 − √32.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>√98 = √(49 × 2) = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>√32 = √(16 × 2) = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Difference: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7√2 − 4√2 = 3√2.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √(45/4).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>√45 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>√4 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Answer: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3√5 ÷ 2 = (3√5)/2.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Simplify √8, √20, √27.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2√2, 2√5, 3√3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Simplify 4√5 + 2√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6√5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Simplify √(16/49).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4/7</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Simplify √200 and √245.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">10√2 and 7√5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Simplify √50 + √18.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5√2 + 3√2 = 8√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Simplify √80 − √20.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4√5 − 2√5 = 2√5</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Simplify 3√28 − 2√63 + √175.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6√7 − 6√7 + 5√7 = 5√7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Express 5√3 as the square root of a single number.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√(25 × 3) = √75</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A square plot has area 288 m². Find the exact side and the diagonal in simplest form.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Side √288 = 12√2 m; diagonal = 12√2 × √2 = 24 m.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Show with numbers that √(a + b) ≠ √a + √b.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√(9 + 16) = √25 = 5, but √9 + √16 = 3 + 4 = 7.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏠 Architecture</p>
    <div>Exact diagonal lengths for tiles, frames and roofs.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚙️ Engineering</p>
    <div>Simplified surds make design formulas easier to compare and check.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📱 Screens</p>
    <div>Screen sizes are diagonals, found with Pythagoras and simplified roots.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧮 Exams and further study</p>
    <div>Simplest surd form is expected in trigonometry and coordinate geometry.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Finding the largest square factor efficiently.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing simplification methods with a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking simplified surds with a calculator.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a personal list of perfect squares.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance (engineering and design)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check: √72 ≈ 8.485 and 6√2 ≈ 8.485 — equal decimals confirm your simplification.</li>
    <li>Use the calculator only to check; show the factor working.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Memorise square factors: 8 = 4·2, 12 = 4·3, 18 = 9·2, 20 = 4·5, 27 = 9·3, 45 = 9·5, 50 = 25·2.</li>
    <li>If the radicand is even, try 4 first; if its digit sum is a multiple of 9, try 9.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√72 = 2√18 (final)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">18 still has the square factor 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the largest square: 6√2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√2 + √3 = √5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unlike surds cannot be added</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leave as √2 + √3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√75 = 5√3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The coefficient 2 was forgotten</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 × 5√3 = 10√3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√(9 + 16) = 3 + 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The product rule does not apply to sums</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√25 = 5</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ask learners to write the list of perfect squares at the top of the page before starting.</li>
    <li>Treat surds like algebra: √3 behaves like x.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>√(ab) = √a √b.</li>
    <li>Use the largest square factor.</li>
    <li>Only like surds can be added or subtracted.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>“Simplest form” means no square factor left under the root.</li>
    <li>Show the factorisation step — it earns a method mark.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Simplify √63.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3√7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: √48 = √(___ × 3) = ___√3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">16; 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Can √5 + √20 be simplified?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes: √5 + 2√5 = 3√5.</div>
    </details>
    </div>
    <div style="background:#2b1a0b;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">🏆 Mini Challenge</p>
    <div>Find a whole number n so that √n + √(4n) = 3√7.<details style="margin-top:6px;">
    <summary style="cursor:pointer;color:#fdba74;">Show answer</summary>√(4n) = 2√n, so 3√n = 3√7 and n = 7.</details>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I always find the largest square factor?</li>
    <li>When can and can’t I add surds?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>√(ab) = √a × √b and √(a/b) = √a ÷ √b.</li>
    <li>Simplify by taking the largest perfect square factor outside the root.</li>
    <li>Like surds add and subtract like algebraic terms.</li>
    <li>Simplify every surd before collecting terms.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Simplified</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√50</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5√2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√180</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6√5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√12 + √27 − √48</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√75 − 3√12 + √108</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10√3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√(18/25)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3√2/5</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Radicand</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The number under the root sign.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Like surds</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Surds with the same radicand.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Simplest form</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No square factor left under the root.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Simplify fully: (a) √288 (b) √45 + √80 − √20. <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) √(144 × 2) = 12√2 [2]. (b) 3√5 + 4√5 − 2√5 [2] = 5√5 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Express √(50/9) in simplest form. <span style="color:#fde68a;font-size:13px;">(2 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√50 ÷ 3 = (5√2)/3 [2].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Simplify √125, √252, √300 and √392.</li>
    <li>Simplify 4√18 − √8 + 3√50.</li>
    <li>Write 7√3 and 4√5 each as a single root.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '√50 in simplest form is:',
            options: ['25√2', '2√5', '5√2', '10√5'],
            correct: 2,
            explanation: '50 = 25 × 2 and √25 = 5.'
        },
        {
            question: '√72 in simplest form is:',
            options: ['2√18', '3√8', '6√2', '36√2'],
            correct: 2,
            explanation: '36 is the largest square factor of 72, giving 6√2.'
        },
        {
            question: '3√2 + 5√2 equals:',
            options: ['8√2', '8√4', '15√2', '8'],
            correct: 0,
            explanation: 'Like surds: add the coefficients 3 + 5.'
        },
        {
            question: '√12 + √27 equals:',
            options: ['√39', '6√3', '13√3', '5√3'],
            correct: 3,
            explanation: 'Simplify each surd first: 2√3 + 3√3 = 5√3.'
        },
        {
            question: 'Which can be simplified to a single surd?',
            options: ['√2 + √3', '√5 + √7', '√3 + √5', '√8 + √2'],
            correct: 3,
            explanation: '√8 = 2√2, so √8 + √2 = 3√2.'
        },
        {
            question: '√(18/25) equals:',
            options: ['3√2/5', '9/5', '√18/25', '18/5'],
            correct: 0,
            explanation: '√18 = 3√2 and √25 = 5.'
        },
        {
            question: '2√75 simplifies to:',
            options: ['5√3', '10√3', '2√15', '25√3'],
            correct: 1,
            explanation: '√75 = 5√3, then multiply by 2.'
        },
        {
            question: '√(9 + 16) equals:',
            options: ['7', '5', '25', '√7'],
            correct: 1,
            explanation: '9 + 16 = 25 and √25 = 5; roots of sums are not sums of roots.'
        }
    ]
},
{
    name: '1.2.3 Multiplying and Dividing Surds',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 3</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Multiplying and Dividing Surds</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiply and divide surds.</li>
    <li>Expand brackets containing surds.</li>
    <li>Use conjugate pairs to obtain rational products.</li>
    <li>Simplify the results fully.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lesson 2 (simplifying surds); expanding brackets and (a + b)(a − b) = a² − b².</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> Why do we sometimes need exact values instead of decimals?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>In the quadratic formula you met answers like x = −3 ± √5. If you want to check them by substitution, you need to square and multiply surds. This lesson shows how — using exactly the same algebra you already know.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>What do you think (√5 + 2)(√5 − 2) equals? A surd or a whole number?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“To multiply surds, multiply the numbers in front together and the numbers under the roots together: 2√5 × 3√2 = 6√10. A surd times itself gives the number under the root: √7 × √7 = 7.</p>
    <p>To divide, divide coefficients and radicands: 6√10 ÷ 2√5 = 3√2. Brackets expand as in algebra. The special pair (a + √b)(a − √b) = a² − b is called a <strong>conjugate pair</strong>; its product is always rational.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Expand</p>
    <div>
    <p style="margin:0;">Multiply out brackets.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (1 + √2)(3 + √2)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Conjugate</p>
    <div>
    <p style="margin:0;">The same two terms with the opposite sign between them.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3 + √2 and 3 − √2</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Difference of two squares</p>
    <div>
    <p style="margin:0;">(a + b)(a − b) = a² − b².</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (√5 + 2)(√5 − 2) = 1</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Square of a surd</p>
    <div>
    <p style="margin:0;">(√a)² = a.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (√7)² = 7</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Multiplying single surds</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">m√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span> × n√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span> = mn√<span style="border-top:1px solid currentColor;padding:0 2px;">ab</span>
    </p>
    <p>Then simplify: √6 × √8 = √48 = 4√3.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Dividing single surds</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">m√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span> ÷ n√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">m</span><span style="padding:0 4px;">n</span></span>√<span style="border-top:1px solid currentColor;padding:0 2px;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">b</span></span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Expanding brackets</p>
    <p>Multiply every term in the first bracket by every term in the second (FOIL), then collect like terms.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Conjugate pairs</p>
    <p>(a + √b)(a − √b) = a² − (√b)² = a² − b, a rational number. This is the key to rationalising in Lesson 4.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Grid method for (2 + √3)(1 + √3):</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">×</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">√3</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>2</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong>√3</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    </table>
    </div>
    <p>Add the four cells: 2 + 2√3 + √3 + 3 = 5 + 3√3.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>In a conjugate pair the two middle cells cancel each other, leaving only rational terms.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Product of surds</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">m√<span style="border-top:1px solid currentColor;padding:0 2px;">a</span> × n√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span> = mn√<span style="border-top:1px solid currentColor;padding:0 2px;">ab</span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Multiply outside numbers together and inside numbers together.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Any surd multiplication.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Adding the coefficients instead of multiplying them.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Conjugate product</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(a + √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span>)(a − √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span>) = a² − b</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> A conjugate pair multiplies to a rational number.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Rationalising denominators; checking quadratic roots.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> The cross terms +a√b and −a√b cancel.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Square of a binomial</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(a + √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span>)² = a² + 2a√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span> + b</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Square every part, including the middle term.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Squaring surd expressions.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> (3 − √2)² is not 9 − 2.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Single surds <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify (a) √3 × √12 (b) 2√5 × 3√2 (c) (2√7)².</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply outside and inside numbers separately.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √3 × √12 = √36 = 6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The product under the root is a perfect square.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2√5 × 3√2 = 6√10</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Coefficients 2 × 3; radicands 5 × 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (2√7)² = 4 × 7 = 28</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square both the coefficient and the surd.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (a) 6 (b) 6√10 (c) 28</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (2√7)² = 2 × 7 = 14, squaring only the surd.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Division <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify (a) √48 ÷ √3 (b) 6√10 ÷ 2√5.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Divide radicands and coefficients separately.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √48 ÷ √3 = √16 = 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 48 ÷ 3 = 16, a perfect square.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 6√10 ÷ 2√5 = 3√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 6 ÷ 2 = 3 and 10 ÷ 5 = 2.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (a) 4 (b) 3√2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only the coefficients and leaving √10 ÷ √5 unsimplified.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Expanding brackets <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Expand and simplify (2 + √3)(1 + √3).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply each term of the first bracket by each term of the second.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2 × 1 + 2 × √3 + √3 × 1 + √3 × √3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Four products (FOIL).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 2 + 2√3 + √3 + 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √3 × √3 = 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = 5 + 3√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Collect rational terms and like surds.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 5 + 3√3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing √3 × √3 = √9 and leaving it, or as 9.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Conjugate pair <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Expand (√5 + 2)(√5 − 2).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> This is a difference of two squares.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (√5)² − 2²</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Use (a + b)(a − b) = a² − b².</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 5 − 4 = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> (√5)² = 5.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 1</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Expanding to 5 − 2√5 + 2√5 − 4 and not cancelling the middle terms.</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Expand all four terms: 5 − 2√5 + 2√5 − 4 = 1.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Squaring a binomial <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Expand (3 − √2)².</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Write it as (3 − √2)(3 − √2) or use (a − b)² = a² − 2ab + b².</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3² − 2(3)(√2) + (√2)²</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square the first term, double the product, square the last.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 9 − 6√2 + 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> (√2)² = 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = 11 − 6√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Collect the rational terms.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 11 − 6√2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (3 − √2)² = 9 − 2 = 7, missing the middle term.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Checking a quadratic root <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Show that x = −3 + √5 satisfies x² + 6x + 4 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Substitute, expand and simplify.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² = (−3 + √5)² = 9 − 6√5 + 5 = 14 − 6√5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square the binomial.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 6x = −18 + 6√5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply each term by 6.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 6x + 4 = 14 − 6√5 − 18 + 6√5 + 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add the three parts.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The surd terms cancel and 14 − 18 + 4 = 0.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The left side equals 0, so x = −3 + √5 is a root.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Squaring −3 + √5 as 9 + 5 only.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Expand (4 − √3)(2 + √3).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>4 × 2 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>4 × √3 = …; −√3 × 2 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>−√3 × √3 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Total: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8 + 4√3 − 2√3 − 3 = 5 + 2√3.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify 3√6 × 2√3.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Coefficients: 3 × 2 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Radicands: √18 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Answer: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6√18 = 6 × 3√2 = 18√2.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Simplify √2 × √18.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√36 = 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Simplify 4√3 × 2√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8√15</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Simplify √75 ÷ √3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√25 = 5</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Expand (1 + √2)(3 + √2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 + √2 + 3√2 + 2 = 5 + 4√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Expand (√7 − 1)(√7 + 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7 − 1 = 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Expand (2 + √5)².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4 + 4√5 + 5 = 9 + 4√5</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Expand (2√3 − √2)(√3 + 2√2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 + 4√6 − √6 − 4 = 2 + 3√6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Show that x = 2 − √3 satisfies x² − 4x + 1 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² = 7 − 4√3; −4x = −8 + 4√3; sum + 1 = 0.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A rectangle measures (3 + √2) m by (3 − √2) m. Find its exact area.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9 − 2 = 7 m²</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Why is the product of conjugates always rational?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">The cross terms are equal and opposite, so they cancel; what remains is a² − b, both rational.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📐 Geometry</p>
    <div>Exact areas of shapes with surd sides.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🔬 Physics</p>
    <div>Formulas such as speeds and periods often involve products of roots.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧮 Algebra</p>
    <div>Checking roots of quadratic equations exactly.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Design</p>
    <div>Scaling plans by surd factors such as √2.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Expanding and simplifying surd brackets accurately.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the difference-of-squares pattern with conjugates.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking products with a calculator.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Connecting surd algebra with ordinary algebra.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance (engineering and design)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check an expansion by evaluating both sides: (2 + √3)(1 + √3) ≈ 10.196 and 5 + 3√3 ≈ 10.196.</li>
    <li>Use the answer memory to avoid retyping long decimals.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>√a × √a = a.</li>
    <li>Conjugates multiply to (first)² − (second)².</li>
    <li>(a + √b)² always has a middle term 2a√b.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 − √2)² = 9 − 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Middle term missed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9 − 6√2 + 2 = 11 − 6√2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√5 × 3√2 = 5√10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coefficients added</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6√10</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3 × √3 = 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The square root of 9 is 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3 × √3 = 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2√7)² = 14</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coefficient not squared</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 × 7 = 28</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the grid method for learners who lose terms when expanding.</li>
    <li>Always finish by collecting rational and surd terms separately.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>m√a × n√b = mn√(ab).</li>
    <li>(√a)² = a.</li>
    <li>(a + √b)(a − √b) = a² − b.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show every term of the expansion before simplifying.</li>
    <li>State clearly when the result is rational.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Simplify √6 × √6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: (√11 + 3)(√11 − 3) = ___.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Predict: is (1 + √2)² rational?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No: 3 + 2√2.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which expansion step do I most often get wrong?</li>
    <li>How does surd algebra mirror ordinary algebra?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiply coefficients and radicands separately; simplify after.</li>
    <li>Divide coefficients and radicands separately.</li>
    <li>Expand brackets term by term and collect like terms.</li>
    <li>Conjugate pairs multiply to rational numbers: (a + √b)(a − √b) = a² − b.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3 × √12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6√10 ÷ 2√5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3√2</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2 + √3)(1 + √3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5 + 3√3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(√5 + 2)(√5 − 2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 − √2)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11 − 6√2</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Conjugate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a + √b and a − √b.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Expand</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply out brackets.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">FOIL</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">First, Outer, Inner, Last — an expansion routine.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Expand and simplify: (a) (5 − √3)(2 + √3) (b) (√6 + √2)². <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 10 + 5√3 − 2√3 − 3 = 7 + 3√3 [3]. (b) 6 + 2√12 + 2 = 8 + 4√3 [2].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Show that (4 + √7)(4 − √7) is rational. <span style="color:#fde68a;font-size:13px;">(2 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">16 − 7 = 9, a rational number [2].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Simplify √8 × √27 and 10√21 ÷ 5√7.</li>
    <li>Expand (3 + 2√5)(1 − √5) and (√10 − √2)².</li>
    <li>Show that x = 1 + √2 satisfies x² − 2x − 1 = 0.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '2√5 × 3√2 equals:',
            options: ['5√10', '6√7', '30', '6√10'],
            correct: 3,
            explanation: 'Multiply 2 × 3 and 5 × 2 to get 6√10.'
        },
        {
            question: '√48 ÷ √3 equals:',
            options: ['16', '4', '√45', '4√3'],
            correct: 1,
            explanation: '48 ÷ 3 = 16 and √16 = 4.'
        },
        {
            question: '(√5 + 2)(√5 − 2) equals:',
            options: ['9', '5 − 2√5', '1', '3'],
            correct: 2,
            explanation: 'Difference of squares: 5 − 4 = 1.'
        },
        {
            question: '(3 − √2)² equals:',
            options: ['7', '9 − 6√2', '11', '11 − 6√2'],
            correct: 3,
            explanation: '9 − 6√2 + 2 = 11 − 6√2.'
        },
        {
            question: '(2 + √3)(1 + √3) equals:',
            options: ['2 + 3√3', '5 + 2√3', '5 + 3√3', '8'],
            correct: 2,
            explanation: '2 + 2√3 + √3 + 3 = 5 + 3√3.'
        },
        {
            question: '(2√7)² equals:',
            options: ['28', '14', '4√7', '49'],
            correct: 0,
            explanation: 'Square both parts: 2² × 7 = 28.'
        },
        {
            question: 'The conjugate of 3 + √5 is:',
            options: ['3 − √5', '−3 + √5', '√5 + 3', '1/(3 + √5)'],
            correct: 0,
            explanation: 'A conjugate changes only the sign between the terms.'
        },
        {
            question: '√3 × √3 equals:',
            options: ['9', '3', '√9 left unsimplified', '6'],
            correct: 1,
            explanation: '(√a)² = a, so √3 × √3 = 3.'
        }
    ]
},
{
    name: '1.2.4 Rationalising the Denominator',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 4</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Rationalising the Denominator</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain what it means to rationalise a denominator.</li>
    <li>Rationalise denominators of the form √b and a√b.</li>
    <li>Rationalise denominators of the form a ± √b using conjugates.</li>
    <li>Simplify the results fully.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 2 and 3; equivalent fractions; conjugate pairs.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> Why do we sometimes need exact values instead of decimals?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Before calculators, people needed 1/√2 ≈ 0.7071. Dividing 1 by 1.41421… by hand is painful; but 1/√2 = √2/2 = 1.41421 ÷ 2 = 0.7071 is easy. Rewriting a fraction so that its denominator has no surd is called <strong>rationalising the denominator</strong>. It is still the standard way to present exact answers.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 Think About It</p>
    <div>If you multiply the top and bottom of a fraction by the same number, does its value change?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“To rationalise, multiply the numerator and denominator by a number that makes the denominator rational. The fraction’s value does not change because we are multiplying by 1 in disguise.</p>
    <p>• If the denominator is √b, multiply by √b/√b.<br>• If it is a + √b, multiply by its conjugate (a − √b)/(a − √b), and use (a + √b)(a − √b) = a² − b.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Rationalise</p>
    <div>
    <p style="margin:0;">Remove surds from the denominator of a fraction.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 1/√3 = √3/3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Denominator</p>
    <div>
    <p style="margin:0;">The bottom of a fraction.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In 5/√2, the denominator is √2</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Conjugate</p>
    <div>
    <p style="margin:0;">Same terms, opposite middle sign.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2 − √3 for 2 + √3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Equivalent fraction</p>
    <div>
    <p style="margin:0;">A fraction with the same value.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 1/√2 = √2/2</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Denominator √b</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span> × <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span><span style="padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span><span style="padding:0 4px;">b</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Denominator c√b</p>
    <p>Multiply by √b/√b only (not c√b): 5/(2√5) = 5√5/(2 × 5) = √5/2.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Denominator a ± √b</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">1</span><span style="padding:0 4px;">a + √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span> × <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a − √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span><span style="padding:0 4px;">a − √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a − √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span><span style="padding:0 4px;">a² − b</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Always simplify</p>
    <p>Cancel common factors and simplify any surds in the final answer.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Denominator</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Multiply top and bottom by</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">New denominator</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 − √2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 + √2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9 − 2 = 7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√5 + 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√5 − 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5 − 1 = 4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√7 − √3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√7 + √3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 − 3 = 4</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>Multiplying by (something)/(the same something) is multiplying by 1, so the value never changes — only its appearance.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Single surd denominator</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a√<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span><span style="padding:0 4px;">b</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Multiply top and bottom by √b.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Denominators like √3 or 4√2.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Multiplying only the denominator.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Binomial denominator</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;"><span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">c</span><span style="padding:0 4px;">a + √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span></span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">c(a − √<span style="border-top:1px solid currentColor;padding:0 2px;">b</span>)</span><span style="padding:0 4px;">a² − b</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Multiply top and bottom by the conjugate.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Denominators like 3 − √2 or √5 + 1.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🔧 Why it works:</span> The conjugate product is rational.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Change the sign, multiply both.”</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Simple surd denominator <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Rationalise 1/√2 and 6/√3.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply top and bottom by the surd in the denominator.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 1/√2 × √2/√2 = √2/2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √2 × √2 = 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 6/√3 × √3/√3 = 6√3/3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The denominator becomes 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = 2√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cancel 6 ÷ 3 = 2.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> √2/2 and 2√3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Leaving 6√3/3 without cancelling.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Coefficient in the denominator <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Rationalise 5/(2√5).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Only the surd part needs removing — multiply by √5/√5.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 5√5 / (2 × 5)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 2√5 × √5 = 2 × 5 = 10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 5√5/10 = √5/2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cancel the common factor 5.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> √5/2</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying by 2√5 and getting a larger, unsimplified fraction (still correct but harder).</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Binomial denominator <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Rationalise 1/(3 − √2).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply by the conjugate 3 + √2.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (3 + √2) / ((3 − √2)(3 + √2))</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply top and bottom by the conjugate.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Denominator: 9 − 2 = 7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Difference of squares.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (3 + √2)/7</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying by 3 − √2 instead, which keeps a surd in the denominator.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Cancelling after rationalising <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Rationalise 4/(√5 + 1).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Use the conjugate √5 − 1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 4(√5 − 1) / ((√5 + 1)(√5 − 1))</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply top and bottom by √5 − 1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Denominator = 5 − 1 = 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Difference of squares.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 4(√5 − 1)/4 = √5 − 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cancel the 4.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> √5 − 1</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Expanding the numerator and not noticing the factor 4 cancels.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Surds on top and bottom <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Express (√3 + 1)/(√3 − 1) in the form a + b√3.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply by the conjugate √3 + 1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (√3 + 1)² / ((√3 − 1)(√3 + 1))</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The numerator becomes a square.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Numerator: 3 + 2√3 + 1 = 4 + 2√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand (√3 + 1)².</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Denominator: 3 − 1 = 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Conjugate product.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (4 + 2√3)/2 = 2 + √3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide each term by 2.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 2 + √3 (a = 2, b = 1)</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only the 4 by 2 and leaving 2√3 unchanged.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Why rationalise? <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Given √2 ≈ 1.4142, evaluate 1/√2 without dividing by a decimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Rationalise first, then divide by a whole number.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 1/√2 = √2/2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Rationalise the denominator.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 1.4142 ÷ 2 = 0.7071</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Dividing by 2 is easy by hand.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 0.7071</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Attempting 1 ÷ 1.4142 by long division, which is slow and error-prone.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Rationalise 10/√5.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Multiply by √5/√5: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Simplify: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Multiply top and bottom by √5 to get 10√5/5, which simplifies to 2√5.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Rationalise 2/(√7 − √3).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Conjugate: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Denominator: 7 − 3 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Answer: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2(√7 + √3)/4 = (√7 + √3)/2.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Rationalise 1/√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√5/5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Rationalise 12/√6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12√6/6 = 2√6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Rationalise 3/√3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Rationalise 7/(2√7).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√7/2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Rationalise 1/(2 + √3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(2 − √3)/(4 − 3) = 2 − √3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Rationalise 6/(√5 − 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6(√5 + 1)/4 = 3(√5 + 1)/2</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Express (2 + √5)/(2 − √5) in the form a + b√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(2 + √5)²/(4 − 5) = (9 + 4√5)/(−1) = −9 − 4√5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Simplify 1/(√2 + 1) + 1/(√2 − 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(√2 − 1) + (√2 + 1) = 2√2</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A machine part has width 12/√3 cm. Write the width in simplest surd form and estimate it to 2 d.p. (√3 ≈ 1.732).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4√3 ≈ 6.93 cm</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Explain why multiplying by √b/√b does not change the value of a fraction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√b/√b = 1, and multiplying by 1 leaves the value unchanged.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📐 Trigonometry</p>
    <div>Exact values such as sin 45° = 1/√2 = √2/2.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚡ Electrical engineering</p>
    <div>Formulas for alternating current use 1/√2 ≈ 0.707.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧮 Hand calculation</p>
    <div>Rationalised forms are far easier to evaluate without a calculator.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🎓 Further study</p>
    <div>Rationalised answers are the expected form in senior school and college.</div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">10. Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the right multiplier to remove surds from denominators.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing rationalised and unrationalised forms with peers.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a calculator to confirm equal values.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Applying conjugates learnt in Lesson 3.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Career guidance (engineering and design)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check: 1/(3 − √2) ≈ 0.6306 and (3 + √2)/7 ≈ 0.6306.</li>
    <li>Type the whole denominator in brackets: 1 ÷ (3 − √2).</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Denominator √b → multiply by √b.</li>
    <li>Denominator a ± √b → multiply by the conjugate.</li>
    <li>Conjugate product: a² − b.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplying only the denominator by √b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The fraction’s value changes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply top and bottom</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using the same sign instead of the conjugate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The surd does not disappear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change the middle sign</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(4 + 2√3)/2 = 2 + 2√3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Only one term was divided</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide every term: 2 + √3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5/(2√5) → multiply by 2√5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Works but makes extra cancelling</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply by √5 only</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Insist on writing the multiplier fraction explicitly, e.g. × (3 + √2)/(3 + √2).</li>
    <li>Have learners verify one answer by calculator each lesson.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiply top and bottom by the same thing.</li>
    <li>Use the conjugate for binomial denominators.</li>
    <li>Simplify fully at the end.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>“Rationalise” means no surd may remain in the denominator.</li>
    <li>Show the conjugate product in the denominator explicitly.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Rationalise 1/√7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√7/7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: the conjugate of √6 − 2 is ___.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√6 + 2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Is (3 + √2)/7 fully rationalised?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes: the denominator 7 is rational.</div>
    </details>
    </div>
    <div style="background:#2b1a0b;border-left:4px solid #fb923c;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fdba74;font-weight:bold;">🏆 Mini Challenge</p>
    <div>Simplify 1/(√3 + √2) + 1/(√3 − √2).<details style="margin-top:6px;">
    <summary style="cursor:pointer;color:#fdba74;">Show answer</summary>(√3 − √2)/1 + (√3 + √2)/1 = 2√3.</details>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I choose the right multiplier quickly?</li>
    <li>Why is rationalising useful even with calculators?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rationalising removes surds from denominators without changing the value.</li>
    <li>For √b, multiply top and bottom by √b.</li>
    <li>For a ± √b, multiply top and bottom by the conjugate.</li>
    <li>Simplify and cancel at the end.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Fraction</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rationalised</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1/√2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√2/2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6/√3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5/(2√5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√5/2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1/(3 − √2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 + √2)/7</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(√3 + 1)/(√3 − 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 + √3</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Rationalise</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Make a denominator rational.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Conjugate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Binomial with the opposite middle sign.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Equivalent fraction</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same value, different form.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Rationalise the denominator and simplify: (a) 15/√5 (b) 3/(√7 + 2). <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 15√5/5 = 3√5 [2]. (b) 3(√7 − 2)/(7 − 4) [2] = √7 − 2 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Express (1 + √2)/(1 − √2) in the form a + b√2. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Multiply by (1 + √2)/(1 + √2) [1]; numerator 3 + 2√2 [1]; denominator −1 [1]; −3 − 2√2 [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Rationalise 9/√3, 4/(3√2) and 1/(√5 − 2).</li>
    <li>Express (3 − √2)/(3 + √2) in the form a + b√2.</li>
    <li>Given √3 ≈ 1.732, evaluate 6/√3 without dividing by a decimal.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Rationalising 1/√2 gives:',
            options: ['√2', '√2/2', '2/√2', '1/2'],
            correct: 1,
            explanation: 'Multiply top and bottom by √2: √2/2.'
        },
        {
            question: '6/√3 simplifies to:',
            options: ['2√3', '6√3', '√3/2', '2'],
            correct: 0,
            explanation: 'Multiply top and bottom by √3 to get 6√3/3, which simplifies to 2√3.'
        },
        {
            question: 'To rationalise 1/(3 − √2), multiply top and bottom by:',
            options: ['3 − √2', '3 + √2', '√2', '3'],
            correct: 1,
            explanation: 'The conjugate 3 + √2 makes the denominator 9 − 2 = 7.'
        },
        {
            question: '4/(√5 + 1) simplifies to:',
            options: ['√5 + 1', '4√5', '(√5 − 1)/4', '√5 − 1'],
            correct: 3,
            explanation: '4(√5 − 1)/(5 − 1) = √5 − 1.'
        },
        {
            question: '5/(2√5) simplifies to:',
            options: ['5√5', '2√5', '√5/2', '1/2'],
            correct: 2,
            explanation: 'Multiply top and bottom by √5 to get 5√5/10, which simplifies to √5/2.'
        },
        {
            question: '(√3 + 1)/(√3 − 1) equals:',
            options: ['4 + 2√3', '1', '2 − √3', '2 + √3'],
            correct: 3,
            explanation: '(4 + 2√3)/2 = 2 + √3.'
        },
        {
            question: 'Multiplying top and bottom by √b/√b does not change the value because:',
            options: ['√b/√b = 1', '√b is rational', 'b is even', 'it removes the numerator'],
            correct: 0,
            explanation: 'Multiplying by 1 leaves any number unchanged.'
        },
        {
            question: 'Which denominator is rational?',
            options: ['√6', '2 + √3', '7', '√2 − 1'],
            correct: 2,
            explanation: '7 is an integer, so it is rational.'
        }
    ]
},
{
    name: '1.2 Worked Examples: Irrational Numbers',
    type: 'lesson',
    duration: '60 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Worked Examples</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">✏️ Worked Examples — Irrational Numbers</h2>
    <p style="font-size:16px;">Exam-style examples that combine classification, simplifying, operations and rationalising.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Classification and conversion</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Recurring to fraction <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Express 1.4̇5̇ (1.454545…) as a mixed number.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Convert the decimal part only.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 0.4545… = 45/99 = 5/11</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Two repeating digits go over 99.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 1.4545… = 1 + 5/11</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add the whole number back.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 1 5/11</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing 145/99 and forgetting to subtract the whole part correctly.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Simplifying and operations</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Combined simplification <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify √8 × √6 + √48.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply first, then simplify both terms.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> √8 × √6 = √48</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply the radicands.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> √48 + √48 = 2√48</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The two terms are identical.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 2√48 = 2 × 4√3 = 8√3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 48 = 16 × 3.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 8√3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding the radicands: √48 + √48 = √96.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Area of a rectangle <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A rectangle has sides (2√3 + 1) cm and (2√3 − 1) cm. Find its area and the length of its diagonal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Area uses conjugates; the diagonal uses Pythagoras.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Area = (2√3)² − 1² = 12 − 1 = 11 cm²</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Difference of squares.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Diagonal² = (2√3 + 1)² + (2√3 − 1)²</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Pythagoras’ theorem.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = (13 + 4√3) + (13 − 4√3) = 26</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand each square; the surds cancel.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> Diagonal = √26 cm</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 26 has no square factor.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Area 11 cm²; diagonal √26 cm</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Squaring 2√3 as 2 × 3 = 6.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Rationalising</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Sum of fractions <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Simplify 2/(√5 − √3) − 1/√3, leaving the answer with a rational denominator.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Rationalise each term separately, then combine.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2(√5 + √3)/(5 − 3) = √5 + √3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Conjugate of √5 − √3 is √5 + √3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 1/√3 = √3/3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply top and bottom by √3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> √5 + √3 − √3/3 = √5 + (2√3)/3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Combine the √3 terms: 1 − 1/3 = 2/3.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> √5 + (2√3)/3</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Combining √5 and √3 terms, which are unlike.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Finding unknowns <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Given that (3 + √2)/(3 − √2) = a + b√2, find a and b.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Rationalise and compare.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Multiply by (3 + √2)/(3 + √2)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Use the conjugate.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Numerator: 9 + 6√2 + 2 = 11 + 6√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand (3 + √2)².</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Denominator: 9 − 2 = 7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Conjugate product.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (11 + 6√2)/7 = 11/7 + (6/7)√2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Split into rational and surd parts.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> a = 11/7, b = 6/7</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Forgetting to divide the surd term by 7.</p>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 How Examiners Mark These</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Method marks: correct conversion steps, correct multiplier, correct expansion.</li>
    <li>Accuracy marks: simplest form with a rational denominator.</li>
    <li>Always simplify surds and cancel common factors.</li>
    </ul>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '1.454545… as a mixed number is:',
            options: ['1 45/100', '1 5/11', '1 4/9', '1 9/20'],
            correct: 1,
            explanation: '0.4545… = 45/99 = 5/11.'
        },
        {
            question: '√8 × √6 + √48 equals:',
            options: ['8√3', '√96', '4√3', '12√3'],
            correct: 0,
            explanation: 'Both terms equal √48 = 4√3, so the sum is 8√3.'
        },
        {
            question: 'The area of a rectangle (2√3 + 1) by (2√3 − 1) is:',
            options: ['13', '12', '11', '4√3'],
            correct: 2,
            explanation: '(2√3)² − 1 = 12 − 1 = 11.'
        },
        {
            question: '2/(√5 − √3) simplifies to:',
            options: ['√5 − √3', '√5 + √3', '2(√5 + √3)', '(√5 + √3)/4'],
            correct: 1,
            explanation: '2(√5 + √3)/(5 − 3) = √5 + √3.'
        },
        {
            question: 'In (3 + √2)/(3 − √2) = a + b√2, the denominator after rationalising is:',
            options: ['7', '11', '9', '5'],
            correct: 0,
            explanation: '(3 − √2)(3 + √2) = 9 − 2 = 7.'
        }
    ]
},
{
    name: '1.2 Practice: Irrational Numbers',
    type: 'lesson',
    duration: '80 min',
    exercises: 20,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Practice</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🏋️ Practice Set — Irrational Numbers</h2>
    <p style="font-size:16px;">Twenty questions covering all four lessons. Give exact answers unless told otherwise.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 How to Use This Practice Set</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Do the questions in order; each level builds on the one before.</li>
    <li>Time yourself: about 3 minutes for easy, 5 for medium and 8 for hard questions.</li>
    <li>Mark yourself honestly with the hidden answers.</li>
    <li>For every wrong answer, write down the mistake and redo the question the next day.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Set</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Classify √64, √65 and 0.3̇.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√64 = 8 rational; √65 irrational; 0.3̇ = 1/3 rational</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Simplify √32.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Simplify 5√3 − 2√3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3√3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Simplify √5 × √20.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√100 = 10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Rationalise 1/√6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√6/6</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Express 0.6̇3̇ as a fraction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">63/99 = 7/11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Simplify √27 + √75.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3√3 + 5√3 = 8√3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Expand (2 − √3)(2 + √3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4 − 3 = 1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Expand (1 + √5)².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 + 2√5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Rationalise 8/√2.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4√2</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Simplify 4√50 − 2√32 + √8.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">20√2 − 8√2 + 2√2 = 14√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> Expand (3√2 + √5)(√2 − 2√5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 − 6√10 + √10 − 10 = −4 − 5√10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q13.</strong> Rationalise 5/(4 − √6).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5(4 + √6)/10 = (4 + √6)/2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q14.</strong> Express (√5 − 1)/(√5 + 1) in the form a + b√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(6 − 2√5)/4 = 3/2 − (1/2)√5</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q15.</strong> A square solar panel has area 50 m². Find its side and its diagonal exactly.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Side 5√2 m; diagonal 5√2 × √2 = 10 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q16.</strong> A ladder reaches √48 m up a wall with its foot √16 m from the wall. Find the ladder’s length exactly.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√(48 + 16) = √64 = 8 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q17.</strong> A rectangular field is (5 + √3) m by (5 − √3) m. Find its exact area.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">25 − 3 = 22 m²</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #93c5fd;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">Exam Style</p>
    <p style="margin:8px 0 2px 0;"><strong>Q18.</strong> (a) Simplify √12 × √15. (b) Rationalise 6/√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) √180 = 6√5 (b) 6√5/5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q19.</strong> Show that x = 2 + √3 is a root of x² − 4x + 1 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² = 7 + 4√3; −4x = −8 − 4√3; 7 + 4√3 − 8 − 4√3 + 1 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q20.</strong> Simplify 1/(√3 − 1) − 1/(√3 + 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">[(√3 + 1) − (√3 − 1)]/2 = 2/2 = 1</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">📊 Score Yourself</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Questions correct</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Next step</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">18 – 20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Try the challenge items on the revision page.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13 – 17</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redo the ones you missed tomorrow.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 – 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Study the worked examples, then retry.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 – 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Revisit Lessons 1–4 and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '0.6̇3̇ as a fraction is:',
            options: ['63/100', '63/90', '7/10', '7/11'],
            correct: 3,
            explanation: '63/99 simplifies to 7/11.'
        },
        {
            question: '4√50 − 2√32 + √8 equals:',
            options: ['14√2', '10√2', '2√26', '22√2'],
            correct: 0,
            explanation: '20√2 − 8√2 + 2√2 = 14√2.'
        },
        {
            question: '5/(4 − √6) rationalised is:',
            options: ['(4 + √6)/2', '5(4 − √6)/10', '(4 − √6)/2', '5(4 + √6)'],
            correct: 0,
            explanation: '5(4 + √6)/(16 − 6) = (4 + √6)/2.'
        },
        {
            question: 'A square of area 50 m² has a diagonal of:',
            options: ['5√2 m', '10 m', '25 m', '√50 m'],
            correct: 1,
            explanation: 'Side 5√2 m; diagonal 5√2 × √2 = 10 m.'
        },
        {
            question: '1/(√3 − 1) − 1/(√3 + 1) equals:',
            options: ['√3', '2', '1', '0'],
            correct: 2,
            explanation: 'The difference of the rationalised forms is 2/2 = 1.'
        }
    ]
},
{
    name: '1.2 Quiz: Irrational Numbers',
    type: 'lesson',
    duration: '30 min',
    exercises: 12,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📝 Sub-strand 1.2 Quiz</h2>
    <p style="font-size:16px;">Test yourself on rational and irrational numbers, simplifying, operations and rationalising.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 12 multiple-choice questions.</li>
    <li>Work each question on rough paper before choosing an answer.</li>
    <li>Do not look back at the lessons — test yourself honestly.</li>
    <li>Afterwards, read the explanation for every question, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rational and irrational numbers; recurring decimals</li>
    <li>Simplest form of surds</li>
    <li>Adding and subtracting like surds</li>
    <li>Multiplying, dividing and expanding surds</li>
    <li>Rationalising denominators</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Re-read the four lessons and ask your teacher for help.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Many wrong options come from three slips: adding unlike surds, forgetting the middle term when squaring, and multiplying only the denominator when rationalising.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which number is rational?',
            options: ['√18', '0.7̇', 'π', '√3'],
            correct: 1,
            explanation: '0.777… = 7/9, a fraction of integers.'
        },
        {
            question: '0.0̇9̇ equals:',
            options: ['9/100', '1/9', '9/10', '1/11'],
            correct: 3,
            explanation: 'Two repeating digits go over 99: 9/99 simplifies to 1/11.'
        },
        {
            question: '√98 in simplest form is:',
            options: ['7√2', '2√7', '49√2', '14'],
            correct: 0,
            explanation: '98 = 49 × 2 and √49 = 7, so √98 = 7√2.'
        },
        {
            question: '√20 + √45 equals:',
            options: ['√65', '13√5', '5√5', '6√5'],
            correct: 2,
            explanation: '√20 = 2√5 and √45 = 3√5; adding like surds gives 5√5.'
        },
        {
            question: '3√2 × 4√6 equals:',
            options: ['12√12', '7√8', '12√3', '24√3'],
            correct: 3,
            explanation: '12√12 = 12 × 2√3 = 24√3.'
        },
        {
            question: '(√7 + √2)(√7 − √2) equals:',
            options: ['9', '√5', '5', '7 − 2√14'],
            correct: 2,
            explanation: 'Difference of squares: 7 − 2 = 5.'
        },
        {
            question: '(1 + √3)² equals:',
            options: ['4', '1 + 3', '4 + 2√3', '2 + 2√3'],
            correct: 2,
            explanation: '1 + 2√3 + 3 = 4 + 2√3.'
        },
        {
            question: '√72 ÷ √2 equals:',
            options: ['6', '36', '√70', '6√2'],
            correct: 0,
            explanation: '72 ÷ 2 = 36 and √36 = 6.'
        },
        {
            question: 'Rationalising 10/√5 gives:',
            options: ['10√5', '√5/2', '2', '2√5'],
            correct: 3,
            explanation: 'Multiply top and bottom by √5 to get 10√5/5, which simplifies to 2√5.'
        },
        {
            question: 'The conjugate of √5 − 2 is:',
            options: ['−√5 − 2', '√5 + 2', '2 − √5', '√5 − 2'],
            correct: 1,
            explanation: 'Change only the sign between the terms.'
        },
        {
            question: '1/(2 + √3) rationalised is:',
            options: ['2 − √3', '2 + √3', '(2 − √3)/7', '1/7'],
            correct: 0,
            explanation: '(2 − √3)/(4 − 3) = 2 − √3.'
        },
        {
            question: '√(a + b) = √a + √b is:',
            options: ['always true', 'never true for positive a and b', 'true when a = b', 'true for surds only'],
            correct: 1,
            explanation: 'For positive a and b, √(a + b) is always less than √a + √b, e.g. √25 = 5 but √9 + √16 = 7.'
        }
    ]
},
{
    name: '1.2 Assignment: Irrational Numbers',
    type: 'lesson',
    duration: '180 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 180 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📂 Assignment: Exact Measurements for a School Garden Gazebo</h2>
    <p style="font-size:16px;">Use surds to give exact measurements for a small gazebo (shelter) in the school garden, then compare exact and rounded values.</p>
    <p style="margin:6px 0 0 0;color:#e0f2fe;font-size:14px;">🗓️ Time to complete: one week (about 180 min of work).</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school’s environment club is building a square-based gazebo with a square floor of area 18 m² and a pyramid-style roof. The carpenter wants exact measurements on the plan and rounded measurements for cutting.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Engineers and architects keep exact values on plans and round only at the cutting or building stage, so errors do not build up.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Tasks</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Find the exact side of the floor in simplest surd form.</li>
    <li>Find the exact length of the floor diagonal and simplify it.</li>
    <li>Each roof edge runs from a corner to a point directly above the centre of the floor, at a height of 2 m. Find the exact length of a roof edge (use half the diagonal and Pythagoras).</li>
    <li>A decorative panel has width 6/√2 m. Rationalise and simplify this width.</li>
    <li>Make a table comparing each exact value with its value rounded to 2 decimal places.</li>
    <li>Write a short paragraph explaining why exact values are kept on the plan.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>All working with exact answers in simplest form</li>
    <li>A labelled sketch of the gazebo</li>
    <li>The comparison table</li>
    <li>The explanatory paragraph</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exact calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All surds correct and fully simplified</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct with minor slips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors or unsimplified answers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few correct answers</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use of Pythagoras and rationalising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Applied correctly and efficiently</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Applied with small errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly applied</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not applied correctly</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear sketch and table with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear with minor gaps</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unclear</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explanation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Insightful, well-reasoned paragraph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No meaningful explanation</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Tips for Success</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Area 18 = 9 × 2.</li>
    <li>Half the diagonal of a square of side s is s√2/2.</li>
    <li>Round only after the exact answer is found.</li>
    </ul>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Where did simplifying surds save me work?</li>
    <li>How big were the differences between exact and rounded values?</li>
    <li>Would rounding early have caused errors?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The exact side of a square floor of area 18 m² is:',
            options: ['9 m', '√9 m', '2√3 m', '3√2 m'],
            correct: 3,
            explanation: '√18 = √(9 × 2) = 3√2.'
        },
        {
            question: 'The diagonal of a square of side 3√2 m is:',
            options: ['3√2 m', '18 m', '3√4 m', '6 m'],
            correct: 3,
            explanation: 'Diagonal = side × √2 = 3√2 × √2 = 6.'
        },
        {
            question: 'Half the diagonal is 3 m and the height is 2 m. The roof edge is:',
            options: ['√13 m', '5 m', '√5 m', '13 m'],
            correct: 0,
            explanation: 'By Pythagoras, the edge is √(3² + 2²) = √(9 + 4) = √13.'
        },
        {
            question: '6/√2 simplifies to:',
            options: ['6√2', '3√2', '√3', '3'],
            correct: 1,
            explanation: 'Multiply top and bottom by √2 to get 6√2/2, which simplifies to 3√2.'
        },
        {
            question: 'Why keep exact values on a plan?',
            options: ['Because decimals are illegal', 'To avoid rounding errors building up', 'To make the plan longer', 'Because surds look nicer only'],
            correct: 1,
            explanation: 'Rounding early can accumulate errors in later calculations.'
        }
    ]
},
{
    name: '1.2 Revision: Irrational Numbers',
    type: 'lesson',
    duration: '45 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 45 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🔁 Revision — Irrational Numbers</h2>
    <p style="font-size:16px;">Review these cards a few days after completing the sub-strand.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">1. Rational or irrational?</p>
    <div>
    <p>Rational: a/b, ending or repeating decimal. Irrational: never ends, never repeats (√2, π). Surds are irrational roots.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">2. Recurring decimals</p>
    <div>
    <p>One repeating digit: over 9; two: over 99. For mixed patterns, use two multiples (10x and 100x) and subtract.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">3. Simplifying</p>
    <div>
    <p>√(ab) = √a √b. Take out the largest square factor. Only like surds combine.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">4. Operations</p>
    <div>
    <p>m√a × n√b = mn√(ab). (√a)² = a. Conjugates: (a + √b)(a − √b) = a² − b.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">5. Rationalising</p>
    <div>
    <p>Denominator √b: multiply by √b/√b. Denominator a ± √b: multiply by the conjugate.</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Task</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Convert</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.2727…</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3/11</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simplify</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√72</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6√2</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Collect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√12 + √27</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5√3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Expand</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 − √2)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11 − 6√2</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rationalise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1/(3 − √2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 + √2)/7</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Express 0.1̇8̇ as a fraction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">18/99 = 2/11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Simplify √162.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Simplify √3(√12 + √6).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">√36 + √18 = 6 + 3√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Expand (√6 − √3)².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 − 2√18 + 3 = 9 − 6√2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Rationalise 14/√7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2√7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Rationalise 3/(√10 − √7).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3(√10 + √7)/3 = √10 + √7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Is (√2 + 3)(√2 − 3) rational?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes: 2 − 9 = −7.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Find a if √a = 3√5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 45</div>
    </details>
    </div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can classify rational and irrational numbers.</p>
    <p style="margin:6px 0;">☐ I can convert recurring decimals to fractions.</p>
    <p style="margin:6px 0;">☐ I can simplify surds fully.</p>
    <p style="margin:6px 0;">☐ I can multiply, divide and expand surds.</p>
    <p style="margin:6px 0;">☐ I can rationalise denominators, including with conjugates.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '0.1̇8̇ equals:',
            options: ['18/100', '2/11', '1/8', '9/50'],
            correct: 1,
            explanation: 'Two repeating digits go over 99: 18/99 simplifies to 2/11.'
        },
        {
            question: '√162 equals:',
            options: ['9√2', '81√2', '2√9', '18'],
            correct: 0,
            explanation: '162 = 81 × 2 and √81 = 9, so √162 = 9√2.'
        },
        {
            question: '√3(√12 + √6) equals:',
            options: ['√54', '6 + 3√2', '9√2', '3√6'],
            correct: 1,
            explanation: '√36 + √18 = 6 + 3√2.'
        },
        {
            question: '(√6 − √3)² equals:',
            options: ['9 − 6√2', '3', '9', '3 − 6√2'],
            correct: 0,
            explanation: '6 − 2√18 + 3 = 9 − 6√2.'
        },
        {
            question: 'If √a = 3√5, then a equals:',
            options: ['15', '8', '75', '45'],
            correct: 3,
            explanation: '(3√5)² = 9 × 5 = 45.'
        }
    ]
},
{
    name: '1.2 Summary: Irrational Numbers',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Irrational Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 20 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🧾 Summary — Irrational Numbers</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Some lengths and values — like the diagonal of a unit square — can never be written exactly as decimals. Surds let us keep these values exact, simplify them, calculate with them like algebra, and present them neatly with rational denominators.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔑 Key Points</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Rational numbers are fractions of integers; their decimals end or repeat.</li>
    <li>Irrational numbers never end or repeat; surds are irrational roots.</li>
    <li>Recurring decimals convert to fractions using 10x, 100x and subtraction.</li>
    <li>√(ab) = √a √b: simplify by taking out the largest square factor.</li>
    <li>Only like surds can be added or subtracted.</li>
    <li>Multiply and divide coefficients and radicands separately; (√a)² = a.</li>
    <li>Conjugate pairs multiply to rational numbers.</li>
    <li>Rationalise by multiplying top and bottom by √b or by the conjugate.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Rational and irrational</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Classifying, converting, estimating</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.1666… = 1/6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Simplifying surds</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Largest square factor; like surds</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2√75 − 3√12 + √108</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Operations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplying, dividing, expanding</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 − √2)²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Rationalising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Single surds and conjugates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(√3 + 1)/(√3 − 1)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧾 All the Formulas in One Place</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Name</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recurring decimals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.ȧ = a/9; 0.ȧḃ = ab/99</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Product rule</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">√(ab) = √a √b</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Like surds</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">m√a + n√a = (m + n)√a</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conjugates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(a + √b)(a − √b) = a² − b</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rationalising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a/√b = a√b/b</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rational</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Irrational</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Surd</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Radicand</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Like surds</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Simplest form</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Conjugate</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Rationalise</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Builders, engineers and designers keep exact surd values on plans — from roof trusses to A4 paper proportions — and round only at the final stage.</div>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Linear Inequalities moves from exact values to ranges of values: you will solve inequalities and show their solutions on number lines and graphs.</div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ distinguish rational and irrational numbers</p>
    <p style="margin:6px 0;">✔️ convert recurring decimals to fractions</p>
    <p style="margin:6px 0;">✔️ simplify surds and collect like surds</p>
    <p style="margin:6px 0;">✔️ multiply, divide and expand surd expressions</p>
    <p style="margin:6px 0;">✔️ rationalise denominators</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which lesson covered conjugate pairs first?',
            options: ['Lesson 1', 'Lesson 3', 'Lesson 2', 'Lesson 4'],
            correct: 1,
            explanation: 'Lesson 3 introduced conjugates; Lesson 4 used them to rationalise.'
        },
        {
            question: 'A surd is:',
            options: ['any square root', 'an irrational root', 'a recurring decimal', 'a negative number'],
            correct: 1,
            explanation: 'Roots that are rational, such as √9, are not surds.'
        },
        {
            question: 'The key rule for simplifying surds is:',
            options: ['√(ab) = √a √b', '√(a + b) = √a + √b', '√a × √a = a²', '√a/√a = 0'],
            correct: 0,
            explanation: 'The product rule lets square factors come out of the root.'
        },
        {
            question: 'Rationalising changes a fraction’s:',
            options: ['value', 'sign', 'form, not its value', 'numerator only'],
            correct: 2,
            explanation: 'Multiplying by a form of 1 keeps the value the same.'
        },
        {
            question: 'Which sub-strand comes next?',
            options: ['1.3 Linear Inequalities', '1.4 Logarithms II', '2.1 Approximation and Errors', '1.1 Quadratics'],
            correct: 0,
            explanation: 'Linear Inequalities follows Irrational Numbers in Strand 1.'
        }
    ]
}
],
          stats:{lessons:23,exercises:213,quizzes:24,projects:2,duration:'26 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'How many strands does Grade 11 Core Mathematics have?',
                  options: ['Three', 'Five', 'Seven', 'Four'],
                  correct: 3,
                  explanation: 'The four strands are Numbers and Algebra, Measurements and Geometry, Statistics and Probability, and Calculus.'
              },
              {
                  question: 'What must be added to x² − 12x to make a perfect square?',
                  options: ['12', '36', '144', '6'],
                  correct: 1,
                  explanation: 'Half of −12 is −6, and (−6)² = 36, giving (x − 6)².'
              },
              {
                  question: 'x² + 4x − 1 written in the form (x + p)² + q is:',
                  options: ['(x + 2)² − 1', '(x + 4)² − 17', '(x + 2)² + 3', '(x + 2)² − 5'],
                  correct: 3,
                  explanation: 'x² + 4x + 4 − 4 − 1 = (x + 2)² − 5.'
              },
              {
                  question: 'Solve (x − 3)² = 16.',
                  options: ['x = 19', 'x = 7 or x = −1', 'x = 7 only', 'x = 4 or x = −4'],
                  correct: 1,
                  explanation: 'x − 3 = ±4, so x = 7 or x = −1.'
              },
              {
                  question: 'The quadratic formula is:',
                  options: ['x = (−b ± √(b² − 4ac)) ÷ 2a', 'x = (b ± √(b² − 4ac)) ÷ 2a', 'x = (−b ± √(b² + 4ac)) ÷ 2a', 'x = −b ± √(b² − 4ac)'],
                  correct: 0,
                  explanation: 'Completing the square on ax² + bx + c = 0 gives x = (−b ± √(b² − 4ac)) ÷ 2a.'
              },
              {
                  question: 'Solve 2x² − 3x − 2 = 0.',
                  options: ['x = 2 or x = −½', 'x = −2 or x = ½', 'x = 1 or x = −2', 'x = 3 or x = −1'],
                  correct: 0,
                  explanation: 'b² − 4ac = 9 + 16 = 25, so x = (3 ± 5) ÷ 4, giving 2 or −½.'
              },
              {
                  question: 'How many real roots does 3x² + 2x + 1 = 0 have?',
                  options: ['None', 'Two', 'One', 'Infinitely many'],
                  correct: 0,
                  explanation: 'b² − 4ac = 4 − 12 = −8, which is negative, so there are no real roots.'
              },
              {
                  question: 'The quadratic equation whose roots are 4 and −1 is:',
                  options: ['x² + 3x − 4 = 0', 'x² − 5x + 4 = 0', 'x² − 3x − 4 = 0', 'x² + 5x + 4 = 0'],
                  correct: 2,
                  explanation: 'The sum is 3 and the product is −4, giving x² − 3x − 4 = 0.'
              },
              {
                  question: 'A plot is 5 m longer than it is wide and has area 84 m². Its width is:',
                  options: ['12 m', '5 m', '7 m', '9 m'],
                  correct: 2,
                  explanation: 'x(x + 5) = 84 → (x + 12)(x − 7) = 0; the width is 7 m because −12 is rejected.'
              },
              {
                  question: 'The turning point of y = x² − 4x + 1 is:',
                  options: ['(−2, 13)', '(4, 1)', '(2, −3)', '(2, 5)'],
                  correct: 2,
                  explanation: 'x = −b/2a = 2 and y = 4 − 8 + 1 = −3.'
              },
              {
                  question: 'To solve x² − x − 2 = 3 using the graph of y = x² − x − 2, draw:',
                  options: ['y = −3', 'x = 3', 'y = x + 3', 'y = 3'],
                  correct: 3,
                  explanation: 'The solutions are where the curve meets the horizontal line y = 3.'
              },
              {
                  question: 'The graph of y = 4 + 3x − x² is:',
                  options: ['U-shaped with a minimum', 'a straight line', 'U-shaped with a maximum', '∩-shaped with a maximum'],
                  correct: 3,
                  explanation: 'The coefficient of x² is negative, so the parabola opens downwards and has a maximum.'
              },
              {
                  question: 'Which number is irrational?',
                  options: ['√49', '0.4̇', '√50', '22/7'],
                  correct: 2,
                  explanation: '50 is not a perfect square, so √50 never ends or repeats.'
              },
              {
                  question: '√72 in simplest form is:',
                  options: ['2√18', '6√2', '3√8', '36√2'],
                  correct: 1,
                  explanation: '36 is the largest square factor of 72, so √72 = 6√2.'
              },
              {
                  question: '(√5 + 2)(√5 − 2) equals:',
                  options: ['3', '1', '9', '5 − 2√5'],
                  correct: 1,
                  explanation: 'This is a difference of squares: 5 − 4 = 1.'
              },
              {
                  question: 'Rationalising 1/(3 − √2) gives:',
                  options: ['(3 + √2)/7', '(3 − √2)/7', '3 + √2', '(3 + √2)/11'],
                  correct: 0,
                  explanation: 'Multiply top and bottom by the conjugate 3 + √2; the denominator becomes 9 − 2 = 7.'
              }
          ]}
);