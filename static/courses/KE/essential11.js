// Eschool course: Grade 11 Essential Mathematics (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'essential-math-grade-11', name:'Grade 11 Essential Mathematics', code:'EMA 201', level:'grade-11', iconStyle:'fas', icon:'fa-calculator', color:'#0f766e',
          category:'Mathematics',
          description:'Practical mathematics for everyday life and work: solve quadratic equations by factorising, completing the square and the formula to find garden sizes, plot dimensions and profits, then use matrices to organise and calculate with stock, price and sales tables.',
          longDescription:'This Grade 11 Essential Mathematics course builds on Grade 10 Essential Mathematics and follows the Senior School Grade 11 sequence: Numbers and Algebra (quadratic equations, matrices, variations, sequences and series), Measurements and Geometry (approximation and errors, distance, time and speed, commercial arithmetic, rotation, scale drawing) and Statistics and Probability. Each strand opens with an overview, its learning outcomes and an introduction, and every sub-strand has four lessons followed by worked examples, a practice set, a quiz, an assignment, a revision page and a summary. Lessons use Kenyan real-life contexts — farms, shops, matatus, school projects — with teacher explanations, vocabulary, step-by-step methods, diagrams, formula cards, many worked and guided examples, graded practice, common mistakes, exam tips and quizzes. Batch 1 covers Quadratic Equations and Matrices.',
          modules:[
{
    name: '1.0 Numbers and Algebra — Strand Overview',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🗺️ Strand 1.0: Numbers and Algebra (Grade 11 Essential Mathematics)</h2>
    <p style="font-size:16px;">Welcome to Grade 11 Essential Mathematics. This course is about mathematics you can use — at home, on the farm, in a shop, at work and in your community. In this first strand you will use algebra to answer practical questions: How wide should a garden be to have a certain area? How many items must a trader sell to make a target profit? How can a shop keep track of stock and prices quickly?</p>
    <p style="font-size:16px;">In Grade 10 you worked with real numbers, indices and quadratic equations solved by factorising. Now you will solve <em>any</em> quadratic equation, form equations from real situations, and learn to organise information in matrices and calculate with them.</p>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bae6fd;">❓ Big question for this strand:</strong> How can algebra help us solve practical problems in daily life and work?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>The strand has <strong>four sub-strands</strong>. This batch covers the first two.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Tool</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it lets you do</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example in real life</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quadratic equations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve problems where a quantity is multiplied by itself</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Finding the width of a plot with a known area</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matrices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organise numbers in rows and columns and calculate with them</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stock and price tables in a duka</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Variations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe how one quantity changes with another</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fuel cost increases with distance</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sequences and series</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe patterns and add their terms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Savings that grow each month</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Strand Map</h3>
    <p>Follow the sub-strands in this order. Each has four lessons followed by worked examples, practice, a quiz, an assignment, revision and a summary.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.1 Quadratic Equations</p>
    <p style="margin:4px 0;color:#cbd5e1;">Factorising, completing the square, the quadratic formula and solving real-life problems such as gardens, plots, profit and the height of a thrown ball.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>📘 Lesson 1: Solving by Factorising (Review and Extension)</li>
    <li>📘 Lesson 2: Completing the Square</li>
    <li>📘 Lesson 3: The Quadratic Formula</li>
    <li>📘 Lesson 4: Real-Life Problems Leading to Quadratic Equations</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.2 Matrices</p>
    <p style="margin:4px 0;color:#cbd5e1;">Meaning, order and types of matrices, addition, subtraction, scalar multiplication, matrix multiplication and practical applications.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>📘 Lesson 1: Meaning, Order and Types of Matrices</li>
    <li>📘 Lesson 2: Addition and Subtraction of Matrices</li>
    <li>📘 Lesson 3: Scalar and Matrix Multiplication</li>
    <li>📘 Lesson 4: Applications of Matrices</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.3 Variations</p>
    <p style="margin:4px 0;color:#cbd5e1;">Direct, inverse, joint and partial variation.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.4 Sequence and Series</p>
    <p style="margin:4px 0;color:#cbd5e1;">Arithmetic and geometric sequences and their sums.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forming equations from real situations and checking that answers make sense.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining methods and presenting solutions in groups.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using calculators and spreadsheets to check quadratic answers and matrix products.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the best method and reflecting on mistakes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving practical problems confidently.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity — honest working and self-marking</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility — completing practice on time</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect — valuing classmates’ methods</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity — working well in groups</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (profit, stock and prices)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (land and garden planning)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (motion of thrown objects)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social cohesion (group projects)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧰 What You Need</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A scientific calculator (non-programmable)</li>
    <li>Graph paper, a sharp pencil and a ruler</li>
    <li>An exercise book for working and a notebook for formulae</li>
    <li>Optional: a computer or phone with a spreadsheet</li>
    </ul>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 How to Study This Strand</p>
    <div>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read each lesson in order — the steps build on each other.</li>
    <li>Try every checkpoint before opening the answer.</li>
    <li>Copy every formula card into your notebook.</li>
    <li>Do the practice from easy to hard and mark yourself honestly.</li>
    <li>Always check that your answer makes sense in the real situation.</li>
    </ol>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Strand 1.0 of Grade 11 Essential Mathematics?',
            options: ['Four', 'Two', 'Seven', 'Eleven'],
            correct: 0,
            explanation: 'Quadratic equations, matrices, variations, and sequence and series.'
        },
        {
            question: 'Which sub-strand is about organising numbers in rows and columns?',
            options: ['1.2 Matrices', '1.1 Quadratic Equations', '1.3 Variations', '1.4 Sequence and Series'],
            correct: 0,
            explanation: 'A matrix is a rectangular arrangement of numbers.'
        },
        {
            question: 'Finding the width of a plot with a known area usually leads to a:',
            options: ['Matrix', 'Sequence', 'Quadratic equation', 'Variation only'],
            correct: 2,
            explanation: 'The answer is “Quadratic equation”. Width × length gives a squared term.'
        },
        {
            question: 'In Grade 10 you solved quadratic equations mainly by:',
            options: ['Matrices', 'Logarithms', 'Calculus', 'Factorising'],
            correct: 3,
            explanation: 'Grade 11 adds completing the square and the formula.'
        },
        {
            question: 'Every answer to a real-life problem should be:',
            options: ['Rounded to zero', 'Checked to see if it makes sense', 'Left without units', 'Ignored'],
            correct: 1,
            explanation: 'Negative lengths, for example, must be rejected.'
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
    <p style="font-size:16px;">These outcomes describe what you should be able to do at the end of each sub-strand in this batch. Use them as a checklist before tests.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌟 General Learning Outcomes</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve quadratic equations using different methods and apply them to real-life problems.</li>
    <li>Organise information in matrices and perform operations on them.</li>
    <li>Use matrices to solve practical problems involving quantities and prices.</li>
    <li>Check and interpret answers in real-life contexts.</li>
    <li>Appreciate the use of algebra in daily life, business and careers.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>solve quadratic equations by factorising</li>
    <li>solve quadratic equations by completing the square</li>
    <li>solve quadratic equations using the quadratic formula</li>
    <li>form and solve quadratic equations from real-life situations</li>
    <li>appreciate the use of quadratic equations in real life</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How are quadratic equations used to solve problems in real life?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.2 Matrices</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>identify the order and types of matrices</li>
    <li>add and subtract matrices</li>
    <li>multiply a matrix by a scalar and by another matrix</li>
    <li>apply matrices to real-life situations</li>
    <li>appreciate the use of matrices in organising information</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How are matrices used to organise and process information?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chooses efficient methods, solves multi-step real-life problems correctly, checks and interprets answers, and explains reasoning clearly.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">✅ Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves standard problems correctly with clear working and interprets answers in context.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🔶 Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solves simple problems with some errors; needs help forming equations or setting up matrices.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🔻 Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Attempts problems with many errors, even with support.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Essential Mathematics is assessed through written tests, practical tasks, projects, observation and portfolios. Always show your working — method marks count.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Forming and solving quadratic equations from real situations is an outcome of:',
            options: ['1.2 Matrices', '1.3 Variations', '1.1 Quadratic Equations', '1.4 Sequences'],
            correct: 2,
            explanation: 'The answer is “1.1 Quadratic Equations”. Applications of quadratics.'
        },
        {
            question: 'Multiplying a matrix by a scalar is an outcome of:',
            options: ['1.1 Quadratic Equations', '1.2 Matrices', '1.4 Sequences', '1.3 Variations'],
            correct: 1,
            explanation: 'The answer is “1.2 Matrices”. Operations on matrices.'
        },
        {
            question: 'Checking and interpreting answers in context shows:',
            options: ['Meets or Exceeds Expectations', 'Below Expectations', 'No level', 'Approaches only'],
            correct: 0,
            explanation: 'The answer is “Meets or Exceeds Expectations”. Interpretation is a key skill.'
        },
        {
            question: 'Needing help to set up matrices is:',
            options: ['Approaches Expectations', 'Exceeds Expectations', 'Meets Expectations', 'No level'],
            correct: 0,
            explanation: 'The answer is “Approaches Expectations”. Still developing.'
        },
        {
            question: 'Showing working matters because:',
            options: ['It wastes time', 'Answers alone are always enough', 'Examiners ignore it', 'Method marks are awarded'],
            correct: 3,
            explanation: 'The answer is “Method marks are awarded”. Clear steps earn marks.'
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
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🚀 Getting Ready for Grade 11 Essential Algebra</h2>
    <p style="font-size:16px;">Wambui wants to fence a rectangular kitchen garden of area 24 m², with the length 2 m more than the width. How wide should it be? Her neighbour, a shopkeeper, wants to know quickly how much a customer owes for 3 kg of sugar, 2 packets of flour and 5 bars of soap, and to update his stock table every week.</p>
    <p style="font-size:16px;">The first question leads to a quadratic equation; the second is solved neatly with matrices. This page reminds you of the Grade 10 skills you will use and checks that you are ready.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + 2)(x + 5) = x² + 7x + 10</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factorising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 5x + 6 = (x + 2)(x + 3)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving by factorising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x − 4)(x + 1) = 0 gives x = 4 or x = −1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² = 25 gives x = ±5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Area of a rectangle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Area = length × width</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧮 Calculator Skills</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the square-root key for √(b² − 4ac).</li>
    <li>Use brackets when typing negative numbers, e.g. (−3)².</li>
    <li>Round only at the final step.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📊 Tables in Daily Life</h3>
    <p>Price lists, timetables, stock sheets and mark sheets are all tables of numbers arranged in rows and columns. A matrix is simply such a table written in brackets so that we can calculate with it.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">✅ Readiness Check</h3>
    <p>Try these Grade 10 skills. If any feels hard, revise it before Lesson 1.</p>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Am I ready? <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Expand (x + 3)(x − 2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + x − 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Factorise x² − 7x + 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 3)(x − 4)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Solve (x + 5)(x − 2) = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = −5 or x = 2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>4.</strong> Find √(49).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7 (and −7 for x² = 49)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>5.</strong> A rectangle is 6 m by 4 m. Find its area.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">24 m²</div>
    </details>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 How Each Sub-strand Works</p>
    <div>Each sub-strand has four lessons. In every lesson read the introduction and teacher explanation, study the worked examples, try the guided examples, then do the practice from easy to hard. Finish with the quiz and structured questions.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '(x + 2)(x + 5) expands to:',
            options: ['x² + 10x + 7', 'x² + 7x + 10', 'x² + 7', 'x² + 2x + 5'],
            correct: 1,
            explanation: 'The answer is “x² + 7x + 10”. x² + 5x + 2x + 10 = x² + 7x + 10.'
        },
        {
            question: 'x² + 5x + 6 factorises to:',
            options: ['(x + 1)(x + 6)', '(x − 2)(x − 3)', '(x + 5)(x + 1)', '(x + 2)(x + 3)'],
            correct: 3,
            explanation: 'The answer is “(x + 2)(x + 3)”. 2 × 3 = 6 and 2 + 3 = 5.'
        },
        {
            question: 'If (x − 4)(x + 1) = 0, then:',
            options: ['x = −4 or x = 1', 'x = 4 only', 'x = 4 or x = −1', 'x = 0'],
            correct: 2,
            explanation: 'The answer is “x = 4 or x = −1”. Set each bracket equal to zero.'
        },
        {
            question: 'If x² = 25, then:',
            options: ['x = 5 or x = −5', 'x = 5 only', 'x = 12.5', 'x = 625'],
            correct: 0,
            explanation: 'The answer is “x = 5 or x = −5”. Both 5 and −5 square to 25.'
        },
        {
            question: 'A price list arranged in rows and columns can be written as a:',
            options: ['Matrix', 'Sequence', 'Quadratic', 'Variation'],
            correct: 0,
            explanation: 'The answer is “Matrix”. A matrix is a rectangular array.'
        }
    ]
},
{
    name: '1.1.1 Solving Quadratic Equations by Factorising',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 1</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Solving Quadratic Equations by Factorising</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write a quadratic equation in the form ax² + bx + c = 0.</li>
    <li>Solve quadratic equations by factorising when a = 1 and when a ≠ 1.</li>
    <li>Solve equations involving a difference of two squares and a common factor.</li>
    <li>Check solutions by substitution.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Expanding brackets, factorising quadratic expressions and solving simple equations (Grade 10).</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How can factorising help us solve a quadratic equation?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A <strong>quadratic equation</strong> is an equation in which the highest power of the unknown is 2, for example x² + 2x − 24 = 0. In Grade 10 you solved simple ones by factorising. In this lesson you will extend that skill to equations that first need rearranging, equations where the coefficient of x² is not 1, and special cases.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 460 250" width="460" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="90" y="40" width="240" height="160" fill="#14532d" stroke="#22c55e" stroke-width="2.5"/><text x="210" y="125" fill="#bbf7d0" font-size="16" text-anchor="middle">Area = 24 m²</text><text x="210" y="226" fill="#fde68a" font-size="13" text-anchor="middle">length = (x + 2) m</text><line x1="90" y1="210" x2="330" y2="210" stroke="#fde68a"/><text x="70" y="125" fill="#fde68a" font-size="13" text-anchor="end">x m</text><line x1="80" y1="40" x2="80" y2="200" stroke="#fde68a"/><text x="350" y="100" fill="#e0f2fe" font-size="13">x(x + 2) = 24</text><text x="350" y="120" fill="#e0f2fe" font-size="13">x² + 2x − 24 = 0</text><text x="350" y="140" fill="#e0f2fe" font-size="13">(x + 6)(x − 4) = 0</text><text x="350" y="160" fill="#86efac" font-size="13">x = 4 m</text>
    </svg>
    </div>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>Wambui’s garden has width x m and length (x + 2) m, with area 24 m². Can you guess the width before solving?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“If two numbers multiply to give zero, at least one of them must be zero. That is the key idea: if (x + 6)(x − 4) = 0, then either x + 6 = 0 or x − 4 = 0. So we always get the equation into the form <strong>something = 0</strong>, factorise the left side, and set each bracket equal to zero.</p>
    <p>Remember: never divide both sides by x — you would lose the solution x = 0.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quadratic equation</p>
    <div>
    <p style="margin:0;">An equation whose highest power of the unknown is 2.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 5x + 6 = 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Standard form</p>
    <div>
    <p style="margin:0;">ax² + bx + c = 0, with a ≠ 0.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2x² + 3x − 5 = 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Root (solution)</p>
    <div>
    <p style="margin:0;">A value of x that makes the equation true.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = 2 is a root of x² − 5x + 6 = 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Factorise</p>
    <div>
    <p style="margin:0;">Write an expression as a product of brackets.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 5x + 6 = (x − 2)(x − 3)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Difference of two squares</p>
    <div>
    <p style="margin:0;">a² − b² = (a + b)(a − b).</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 49 = (x + 7)(x − 7)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Common factor</p>
    <div>
    <p style="margin:0;">A factor shared by every term.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 5x = x(x − 5)</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Rearrange into standard form</p>
    <p>Move every term to one side so the other side is 0. Example: x² = 3x + 10 becomes x² − 3x − 10 = 0.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Factorise when a = 1</p>
    <p>Find two numbers that multiply to c and add to b. For x² − 3x − 10: −5 × 2 = −10 and −5 + 2 = −3, so (x − 5)(x + 2) = 0.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Factorise when a ≠ 1</p>
    <p>Multiply a × c, find two numbers with that product and sum b, split the middle term and group. For 2x² + 7x + 3: a × c = 6; 6 and 1 add to 7; 2x² + 6x + x + 3 = 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3).</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Special cases</p>
    <p>Common factor: x² − 5x = 0 → x(x − 5) = 0 → x = 0 or 5. Difference of two squares: x² − 49 = 0 → (x + 7)(x − 7) = 0 → x = ±7.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Set each factor to zero and check</p>
    <p>Solve each bracket = 0, then substitute both answers into the original equation.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Think of the zero-product rule as two doors: the equation is true if <em>either</em> bracket is zero.</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">(x + 6)(x − 4) = 0 → x + 6 = 0 or x − 4 = 0 → x = −6 or x = 4</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>In real problems, one root may not make sense — for example, a width of −6 m. Reject it and keep the sensible answer.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Zero-product rule</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">If A × B = 0, then A = 0 or B = 0</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> A product is zero only if a factor is zero.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> After factorising a quadratic equation.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Using it when the right side is not zero, e.g. (x − 1)(x − 2) = 6.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Difference of two squares</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">a² − b² = (a + b)(a − b)</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Two squares subtracted factorise into a sum times a difference.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Equations like x² − 36 = 0.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Look for a minus sign between two perfect squares.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Simple trinomial <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 7x + 12 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Two numbers that multiply to 12 and add to 7.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3 × 4 = 12 and 3 + 4 = 7.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Find the factor pair.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x + 3)(x + 4) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Write the factors.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = −3 or x = −4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Set each bracket to zero.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −3 or x = −4</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 9 − 21 + 12 = 0 ✓</p>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing x = 3 or 4 — the signs change when solving.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Rearranging first <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² = 3x + 10.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Bring all terms to one side.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 3x − 10 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract 3x and 10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x − 5)(x + 2) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> −5 × 2 = −10; −5 + 2 = −3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = 5 or x = −2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each bracket = 0.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 5 or x = −2</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 25 = 15 + 10 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Common factor <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 6x = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> x is common to both terms.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x(x − 6) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Take out x.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = 0 or x = 6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each factor = 0.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 0 or x = 6</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing by x and losing x = 0.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Difference of two squares <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 4x² − 25 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> 4x² = (2x)² and 25 = 5².</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (2x + 5)(2x − 5) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> a² − b² = (a + b)(a − b).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span> or x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5</span><span style="padding:0 4px;">2</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Solve each bracket.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = ±2.5</div>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> 4x² = 25 → x² = 6.25 → x = ±2.5.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Coefficient of x² not 1 <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² + 7x + 3 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> a × c = 6; find numbers with product 6 and sum 7.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 6 and 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 6 × 1 = 6; 6 + 1 = 7.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2x² + 6x + x + 3 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Split the middle term.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 2x(x + 3) + 1(x + 3) = 0 → (2x + 1)(x + 3) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Group and factorise.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = −<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">1</span><span style="padding:0 4px;">2</span></span> or x = −3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each bracket = 0.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −0.5 or x = −3</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 2(9) − 21 + 3 = 0 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Brackets to expand first <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x(x + 3) = 28.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Expand, then rearrange to = 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 3x = 28</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Expand.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 3x − 28 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract 28.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x + 7)(x − 4) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 7 × (−4) = −28; 7 − 4 = 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = −7 or x = 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each bracket = 0.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −7 or x = 4</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Setting x = 28 or x + 3 = 28 — the zero-product rule needs 0 on the right.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 9x + 20 = 0.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Two numbers multiplying to 20 and adding to −9: … and … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Factors: (x − …)(x − …) = 0 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>So x = … or x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−4 and −5; (x − 4)(x − 5) = 0; x = 4 or x = 5.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 3x² − 10x − 8 = 0.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>a × c = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Two numbers with that product and sum −10: … and … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Split, group and factorise <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Solve <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a × c = −24; −12 and 2; 3x² − 12x + 2x − 8 = 3x(x − 4) + 2(x − 4) = (3x + 2)(x − 4); x = −⅔ or x = 4.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve x² + 5x + 6 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = −2 or x = −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve x² − x − 12 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 4 or x = −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve x² − 8x = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 0 or x = 8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve x² − 64 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = ±8</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve x² = 7x − 10.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 7x + 10 = 0 → x = 2 or 5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve 2x² − 5x − 3 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(2x + 1)(x − 3) = 0 → x = −½ or 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve 9x² − 16 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = ±4/3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve (x + 2)(x − 3) = 14.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − x − 20 = 0 → x = 5 or −4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Solve 6x² + x − 2 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(3x + 2)(2x − 1) = 0 → x = −⅔ or ½</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A square plot has an area of 144 m². Form and solve an equation for its side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² = 144 → x = 12 m (reject −12)</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌱 Farming</p>
    <div>Finding the width of a plot or garden from its area.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Building</p>
    <div>Working out the side of a square floor from its area.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🛒 Business</p>
    <div>Finding the number of items that gives a certain revenue.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🎨 Design</p>
    <div>Sizing frames and borders.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rearranging equations into the form ax² + bx + c = 0 and choosing a factor pair.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining to a partner why both brackets can be zero.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking answers with a calculator or spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check roots by substituting: use brackets for negatives, e.g. (−3)² + 5(−3) + 6.</li>
    <li>Use the calculator’s equation mode only to check, not to replace working.</li>
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
    <li>Product and sum: for x² + bx + c list factor pairs of c quickly.</li>
    <li>If c is negative, the factors have opposite signs.</li>
    <li>If c is positive and b negative, both factors are negative.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving (x − 1)(x − 2) = 6 by x − 1 = 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The zero-product rule needs 0 on the right</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Expand and rearrange to = 0 first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dividing x² = 5x by x</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You lose the root x = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write x² − 5x = 0 and factorise</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wrong signs in answers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + 3) = 0 gives x = −3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change the sign when solving each bracket</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 25 = (x − 5)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">That expands to x² − 10x + 25</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 25 = (x + 5)(x − 5)</td>
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
    <li>Always write “= 0” before factorising.</li>
    <li>Check by expanding your brackets.</li>
    <li>Substitute each root into the original equation.</li>
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
    <li>Get = 0 first.</li>
    <li>Zero-product rule.</li>
    <li>a² − b² = (a + b)(a − b).</li>
    <li>Reject roots that do not make sense in context.</li>
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
    <li>Show the factorised form — it earns a method mark.</li>
    <li>Give both roots unless the context rules one out.</li>
    <li>State why you reject a root, e.g. “length cannot be negative”.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Solve x² − 4x − 21 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 7)(x + 3) = 0 → x = 7 or −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve x² − 100 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = ±10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why must one side be zero before using the zero-product rule?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Only a product equal to zero forces one factor to be zero.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which type of quadratic do I find easiest to factorise?</li>
    <li>Do I remember to check both roots?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write the equation as ax² + bx + c = 0.</li>
    <li>Factorise and use the zero-product rule.</li>
    <li>For a ≠ 1, split the middle term using a × c.</li>
    <li>Use common factors and the difference of two squares for special cases.</li>
    <li>Check roots and reject those that do not fit the context.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a = 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 7x + 12 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3, −4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Common factor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 6x = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0, 6</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Difference of squares</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 49 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">±7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a ≠ 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2x² + 7x + 3 = 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−½, −3</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Quadratic equation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equation with highest power 2.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Root</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A solution.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zero-product rule</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If AB = 0 then A = 0 or B = 0.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Difference of two squares</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a² − b² = (a + b)(a − b).</td>
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
    <p style="margin:0;"><strong>1.</strong> Solve (a) x² − 2x − 15 = 0 (b) 3x² + 5x − 2 = 0. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) (x − 5)(x + 3) = 0 → x = 5 or −3 [2]; (b) (3x − 1)(x + 2) = 0 → x = ⅓ or −2 [2]</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> The product of two consecutive positive whole numbers is 72. Form an equation and find the numbers. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x(x + 1) = 72 [1]; x² + x − 72 = 0 [1]; (x + 9)(x − 8) = 0 [1]; numbers 8 and 9 [1]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve x² + 2x − 35 = 0 and 2x² − x − 6 = 0.</li>
    <li>Solve x(x − 4) = 12.</li>
    <li>A rectangular room is 3 m longer than it is wide and has area 40 m². Find its dimensions.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Solve x² + 7x + 12 = 0.',
            options: ['x = 3 or 4', 'x = −3 or −4', 'x = −3 or 4', 'x = 12'],
            correct: 1,
            explanation: '(x + 3)(x + 4) = 0, so x = −3 or x = −4.'
        },
        {
            question: 'x² − 6x = 0 has roots:',
            options: ['x = 6 only', 'x = 0 or x = −6', 'x = ±6', 'x = 0 or x = 6'],
            correct: 3,
            explanation: 'The answer is “x = 0 or x = 6”. x(x − 6) = 0 gives x = 0 or x = 6.'
        },
        {
            question: 'x² − 49 = 0 has roots:',
            options: ['x = 7 only', 'x = 49', 'x = ±49', 'x = ±7'],
            correct: 3,
            explanation: 'Difference of two squares: (x + 7)(x − 7) = 0.'
        },
        {
            question: 'x² = 3x + 10 in standard form is:',
            options: ['x² − 3x − 10 = 0', 'x² + 3x + 10 = 0', 'x² − 3x + 10 = 0', '3x + 10 = 0'],
            correct: 0,
            explanation: 'The answer is “x² − 3x − 10 = 0”. Subtract 3x and 10 from both sides.'
        },
        {
            question: '2x² + 7x + 3 factorises as:',
            options: ['(2x + 3)(x + 1)', '(x + 1)(x + 3)', '(2x + 1)(x + 3)', '(2x − 1)(x − 3)'],
            correct: 2,
            explanation: 'Expanding (2x + 1)(x + 3) gives 2x² + 7x + 3.'
        },
        {
            question: 'If (x − 5)(x + 2) = 0, the roots are:',
            options: ['x = −5 or x = 2', 'x = 5 or x = 2', 'x = 5 or x = −2', 'x = −5 or x = −2'],
            correct: 2,
            explanation: 'The answer is “x = 5 or x = −2”. Set each bracket equal to zero.'
        },
        {
            question: 'A width found as −6 m should be:',
            options: ['Rejected because a width cannot be negative', 'Kept', 'Changed to 6 m without checking', 'Doubled'],
            correct: 0,
            explanation: 'Only sensible values are accepted in real problems.'
        },
        {
            question: 'Before using the zero-product rule, the right-hand side must be:',
            options: ['1', '0', 'x', 'positive'],
            correct: 1,
            explanation: 'Only a product equal to zero forces a factor to be zero.'
        }
    ]
},
{
    name: '1.1.2 Solving Quadratic Equations by Completing the Square',
    type: 'lesson',
    duration: '80 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 2</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Solving Quadratic Equations by Completing the Square</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Find the number that makes x² + bx a perfect square.</li>
    <li>Solve quadratic equations by completing the square when a = 1.</li>
    <li>Solve simple equations with a ≠ 1 by first dividing by a.</li>
    <li>Give answers in exact form and to a given number of decimal places.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Expanding (x + a)², factorising and square roots (remember y² = 9 gives y = ±3).</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How can we solve a quadratic equation that does not factorise neatly?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Try to factorise x² + 6x − 2 = 0. No whole-number pair multiplies to −2 and adds to 6. The equation still has solutions — about 0.32 and −6.32. To find them, we use <strong>completing the square</strong>, which works for any quadratic equation with real solutions.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>What do x² + 6x + 9, x² − 10x + 25 and x² + 4x + 4 have in common?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Expand (x + 3)²: you get x² + 6x + 9. The 6 is double 3 and the 9 is 3 squared. So to make x² + 6x a perfect square, take <strong>half of 6</strong>, which is 3, and <strong>square it</strong> to get 9. That is completing the square: half the coefficient of x, then square it — and add it to <em>both</em> sides of the equation.”</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 420 290" width="420" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="60" y="40" width="160" height="160" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/><text x="140" y="125" fill="#e0f2fe" font-size="18" text-anchor="middle">x²</text><rect x="220" y="40" width="60" height="160" fill="#14532d" stroke="#22c55e" stroke-width="2"/><text x="250" y="125" fill="#bbf7d0" font-size="16" text-anchor="middle">3x</text><rect x="60" y="200" width="160" height="60" fill="#14532d" stroke="#22c55e" stroke-width="2"/><text x="140" y="236" fill="#bbf7d0" font-size="16" text-anchor="middle">3x</text><rect x="220" y="200" width="60" height="60" fill="none" stroke="#fde68a" stroke-width="2" stroke-dasharray="6 4"/><text x="250" y="236" fill="#fde68a" font-size="15" text-anchor="middle">9</text><text x="140" y="30" fill="#cbd5e1" font-size="13" text-anchor="middle">x</text><text x="250" y="30" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><text x="45" y="125" fill="#cbd5e1" font-size="13" text-anchor="middle">x</text><text x="45" y="236" fill="#cbd5e1" font-size="13" text-anchor="middle">3</text><text x="298" y="110" fill="#e0f2fe" font-size="12">x² + 6x is a square</text><text x="298" y="128" fill="#e0f2fe" font-size="12">with a missing corner.</text><text x="298" y="160" fill="#fde68a" font-size="12">Add 3 × 3 = 9:</text><text x="298" y="180" fill="#86efac" font-size="12">x² + 6x + 9 = (x + 3)²</text>
    </svg>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Perfect square</p>
    <div>
    <p style="margin:0;">An expression equal to (x + p)².</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² + 6x + 9 = (x + 3)²</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Completing the square</p>
    <div>
    <p style="margin:0;">Adding (b ÷ 2)² to x² + bx to make a perfect square.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² + 8x + 16 = (x + 4)²</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Coefficient</p>
    <div>
    <p style="margin:0;">The number multiplying a letter.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In x² − 10x, the coefficient of x is −10.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Exact form</p>
    <div>
    <p style="margin:0;">An answer with a square root left in.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = −3 + √11</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Decimal places</p>
    <div>
    <p style="margin:0;">Digits after the decimal point.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 0.317 is 3 d.p.</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Move the constant</p>
    <p>x² + 6x − 2 = 0 → x² + 6x = 2.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Add (b ÷ 2)² to both sides</p>
    <p>Half of 6 is 3; 3² = 9. x² + 6x + 9 = 2 + 9 = 11.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Write as a square</p>
    <p>(x + 3)² = 11.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Square-root both sides with ±</p>
    <p>x + 3 = ±√<span style="border-top:1px solid currentColor;padding:0 2px;">11</span>.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Solve and round</p>
    <p>x = −3 ± √<span style="border-top:1px solid currentColor;padding:0 2px;">11</span> → x ≈ 0.317 or x ≈ −6.317.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 6: If a ≠ 1, divide first</p>
    <p>2x² + 8x − 10 = 0 → x² + 4x − 5 = 0, then continue.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>The picture shows x² + 6x as a square of side x with two strips of 3 by x. Only a 3 × 3 corner is missing; adding 9 completes the square.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>The missing corner always has side (b ÷ 2), so its area is (b ÷ 2)².</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Completing the square</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x² + bx + (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)²</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Adding the square of half of b turns x² + bx into a perfect square.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Equations that do not factorise.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Adding (b ÷ 2)² to one side only.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Halve, square, add both sides.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Making a perfect square <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> What must be added to x² + 10x to make a perfect square?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half of 10, then square.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Half of 10 is 5.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 5² = 25.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 10x + 25 = (x + 5)²</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Check by expanding.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 25; (x + 5)²</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Negative coefficient <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Complete the square for x² − 8x.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Keep the sign inside the bracket.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Half of −8 is −4.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (−4)² = 16.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² − 8x + 16 = (x − 4)²</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 16; (x − 4)²</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing (x + 4)².</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Whole-number roots <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 6x − 7 = 0 by completing the square.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Move −7, add 9.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 6x = 7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move the constant.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 6x + 9 = 16</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add 9 to both sides.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x + 3)² = 16</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Perfect square.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x + 3 = ±4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square-root with ±.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x = 1 or x = −7</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Solve.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 1 or x = −7</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 1 + 6 − 7 = 0 ✓</p>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Factorise: (x + 7)(x − 1) = 0.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Decimal answers <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 4x − 1 = 0, giving answers to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half of −4 is −2; add 4.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 4x = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move the constant.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² − 4x + 4 = 5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add 4 to both sides.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x − 2)² = 5</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x − 2 = ±2.236</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> √<span style="border-top:1px solid currentColor;padding:0 2px;">5</span> ≈ 2.236.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x ≈ 4.24 or x ≈ −0.24</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 4.24 or x ≈ −0.24</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Losing the negative root.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Dividing by a first <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² + 8x − 10 = 0 by completing the square.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Divide every term by 2.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 4x − 5 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 2.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 4x = 5</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 4x + 4 = 9 → (x + 2)² = 9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add 4.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x + 2 = ±3 → x = 1 or x = −5</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 1 or x = −5</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Dividing only the x² term by 2.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: An odd coefficient <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 3x − 1 = 0 to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half of 3 is 1.5; 1.5² = 2.25.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 3x = 1</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 3x + 2.25 = 3.25</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add 2.25.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x + 1.5)² = 3.25</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x + 1.5 = ±1.803</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#bae6fd;">Step 5:</strong> x ≈ 0.30 or x ≈ −3.30</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 0.30 or x ≈ −3.30</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 8x + 12 = 0 by completing the square.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Move the constant: x² + 8x = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Half of 8 is …, squared is … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>(x + 4)² = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x + 4 = ± … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = … or x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 8x = −12; add 16: (x + 4)² = 4; x + 4 = ±2; x = −2 or −6.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 2x − 5 = 0 to 2 d.p.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>x² − 2x = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Add … to both sides <span style="color:#94a3b8;">…………</span>
    </li>
    <li>(x − 1)² = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Solve <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 2x = 5; add 1: (x − 1)² = 6; x = 1 ± 2.449; x ≈ 3.45 or −1.45.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What must be added to x² + 12x to make a perfect square?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">36; (x + 6)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What must be added to x² − 6x?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9; (x − 3)²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve (x + 2)² = 25.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3 or −7</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve x² + 4x − 12 = 0 by completing the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 2)² = 16 → x = 2 or −6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve x² − 6x + 4 = 0 to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x − 3)² = 5 → x ≈ 5.24 or 0.76</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve x² + 2x − 4 = 0 to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 1)² = 5 → x ≈ 1.24 or −3.24</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve 3x² + 12x − 15 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 4x − 5 = 0 → x = 1 or −5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve x² + 5x + 2 = 0 to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(x + 2.5)² = 4.25 → x ≈ −0.44 or −4.56</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A vegetable bed is x m wide and (x + 4) m long with area 21 m². Solve by completing the square.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 4x = 21 → (x + 2)² = 25 → x = 3 m (reject −7). Bed: 3 m by 7 m.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Explain why (x + 1)² = −4 has no real solution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">A square of a real number cannot be negative.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Construction</p>
    <div>Finding dimensions when a plan gives only the area.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💰 Business</p>
    <div>Rewriting profit formulas to find the best price.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚽ Sport</p>
    <div>Finding the greatest height of a ball.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📐 Design</p>
    <div>Fitting shapes into a given area.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using completing the square when an equation does not factorise.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the area model to a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking answers with a calculator or spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Store √5 in memory instead of typing a rounded value.</li>
    <li>Round only at the end.</li>
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
    <li>Half then square: b = 10 → 25; b = 14 → 49; b = 3 → 2.25.</li>
    <li>Spot perfect squares: x² − 18x + 81 = (x − 9)².</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding (b/2)² to one side only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The equation is no longer balanced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add to both sides</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using half of c instead of b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The corner depends on the x-coefficient</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Halve b, then square</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forgetting ±</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both positive and negative roots square to the same number</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write ±</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not dividing by a first</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The method needs x² with coefficient 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide every term by a</td>
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
    <li>Say: move, halve, square, add both sides, root with ±, solve.</li>
    <li>Write the bracket squared before taking roots.</li>
    <li>Check one root in the original equation.</li>
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
    <li>Add to both sides.</li>
    <li>Square-root gives ±.</li>
    <li>Divide by a first if a ≠ 1.</li>
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
    <li>If asked to complete the square, do not use the formula.</li>
    <li>Show (x + p)² = number clearly.</li>
    <li>Round to the decimal places asked.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What must be added to x² − 2x?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve (x − 3)² = 16.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 7 or −1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Will (x + 2)² = −9 have real solutions?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which step do I find hardest?</li>
    <li>When would I choose completing the square instead of factorising?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>To complete the square on x² + bx, add (b ÷ 2)².</li>
    <li>Move the constant, add (b ÷ 2)² to both sides, write as a square, square-root with ±, solve.</li>
    <li>Divide by a first when a ≠ 1.</li>
    <li>Give answers exactly or rounded as asked.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Step</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">x² − 4x − 1 = 0</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Move constant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 4x = 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add (b/2)²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 4x + 4 = 5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x − 2)² = 5</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Root</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x − 2 = ±√5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solve</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x ≈ 4.24 or −0.24</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(x + p)².</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Completing the square</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding (b/2)².</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Exact form</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Answer with a root left in.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Coefficient</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number multiplying a letter.</td>
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
    <p style="margin:0;"><strong>1.</strong> Solve x² + 10x + 18 = 0 by completing the square, giving answers to 2 decimal places. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 10x = −18 [1]; (x + 5)² = 7 [1]; x = −5 ± 2.646 [1]; x ≈ −2.35 or −7.65 [1]</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A rectangular pen has width x m and length (x + 6) m. Its area is 55 m². Solve by completing the square. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 6x = 55 [1]; (x + 3)² = 64 [1]; x = 5 (reject −11) [1]; 5 m by 11 m [1]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete the square for x² + 14x and x² − 5x.</li>
    <li>Solve x² − 8x + 13 = 0 to 2 d.p.</li>
    <li>Solve 2x² − 12x + 10 = 0 by completing the square.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'What must be added to x² + 10x to make a perfect square?',
            options: ['10', '20', '100', '25'],
            correct: 3,
            explanation: 'The answer is “25”. Half of 10 is 5 and 5² = 25.'
        },
        {
            question: 'x² − 8x + 16 equals:',
            options: ['(x − 4)²', '(x + 4)²', '(x − 8)²', '(x − 16)²'],
            correct: 0,
            explanation: 'The answer is “(x − 4)²”. Half of −8 is −4 and (−4)² = 16.'
        },
        {
            question: 'Solve (x − 2)² = 9.',
            options: ['x = 5 only', 'x = 11 or x = −7', 'x = 5 or x = −1', 'x = ±3'],
            correct: 2,
            explanation: 'The answer is “x = 5 or x = −1”. x − 2 = ±3 gives x = 5 or x = −1.'
        },
        {
            question: 'Before completing the square for 3x² + 12x − 4 = 0, first:',
            options: ['add 36', 'divide every term by 3', 'take the square root', 'factorise'],
            correct: 1,
            explanation: 'The method needs the coefficient of x² to be 1.'
        },
        {
            question: 'After moving the constant, x² + 6x − 2 = 0 becomes:',
            options: ['x² + 6x = −2', 'x² = 6x + 2', '6x = 2', 'x² + 6x = 2'],
            correct: 3,
            explanation: 'The answer is “x² + 6x = 2”. Add 2 to both sides.'
        },
        {
            question: 'What is added to both sides of x² − 4x = 1?',
            options: ['2', '16', '4', '1'],
            correct: 2,
            explanation: 'The answer is “4”. Half of −4 is −2 and (−2)² = 4.'
        },
        {
            question: 'Why does (x + 1)² = −4 have no real solution?',
            options: ['A real square cannot be negative', '4 is even', 'x must be positive', 'The bracket has a plus sign'],
            correct: 0,
            explanation: 'Squares of real numbers are zero or positive.'
        },
        {
            question: 'x² + 3x needs what added to complete the square?',
            options: ['3', '2.25', '9', '1.5'],
            correct: 1,
            explanation: 'The answer is “2.25”. Half of 3 is 1.5 and 1.5² = 2.25.'
        }
    ]
},
{
    name: '1.1.3 Solving Quadratic Equations Using the Quadratic Formula',
    type: 'lesson',
    duration: '80 min',
    exercises: 9,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 3</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Solving Quadratic Equations Using the Quadratic Formula</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify a, b and c in a quadratic equation.</li>
    <li>Use the quadratic formula to solve quadratic equations.</li>
    <li>Use the discriminant to state the number of real roots.</li>
    <li>Choose a suitable method for a given equation.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Completing the square (Lesson 2), square roots and order of operations.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How can one formula solve every quadratic equation?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Completing the square works for every quadratic, but the steps are long. If we complete the square on the general equation ax² + bx + c = 0, we get a formula that can be used directly every time: the <strong>quadratic formula</strong>.</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;">x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √(b² − 4ac)</span><span style="padding:0 4px;">2a</span></span>
    </p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Write the equation in standard form, read off a, b and c with their signs, and substitute carefully using brackets. The part under the square root, b² − 4ac, is called the <strong>discriminant</strong>. If it is negative, there are no real roots — you cannot square-root a negative number in real numbers.”</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 620 190" width="620" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="15" y="30" width="185" height="130" rx="12" fill="#0b1729" stroke="#22c55e" stroke-width="2"/><text x="107" y="66" fill="#22c55e" font-size="15" text-anchor="middle">b² − 4ac &gt; 0</text><text x="107" y="104" fill="#e0f2fe" font-size="13" text-anchor="middle">Two different</text><text x="107" y="124" fill="#e0f2fe" font-size="13" text-anchor="middle">real roots</text><rect x="215" y="30" width="185" height="130" rx="12" fill="#0b1729" stroke="#fde68a" stroke-width="2"/><text x="307" y="66" fill="#fde68a" font-size="15" text-anchor="middle">b² − 4ac = 0</text><text x="307" y="104" fill="#e0f2fe" font-size="13" text-anchor="middle">One repeated</text><text x="307" y="124" fill="#e0f2fe" font-size="13" text-anchor="middle">real root</text><rect x="415" y="30" width="185" height="130" rx="12" fill="#0b1729" stroke="#f87171" stroke-width="2"/><text x="507" y="66" fill="#f87171" font-size="15" text-anchor="middle">b² − 4ac &lt; 0</text><text x="507" y="104" fill="#e0f2fe" font-size="13" text-anchor="middle">No real</text><text x="507" y="124" fill="#e0f2fe" font-size="13" text-anchor="middle">roots</text><text x="310" y="18" fill="#bae6fd" font-size="12" text-anchor="middle">The discriminant b² − 4ac tells you how many real roots there are</text>
    </svg>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quadratic formula</p>
    <div>
    <p style="margin:0;">x = (−b ± √(b² − 4ac)) ÷ 2a.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Solves any quadratic with real roots</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Discriminant</p>
    <div>
    <p style="margin:0;">b² − 4ac.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: For x² − 4x + 4 = 0, it is 0</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Real roots</p>
    <div>
    <p style="margin:0;">Solutions that are real numbers.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x = 2, x = −0.5</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Repeated root</p>
    <div>
    <p style="margin:0;">Both roots are equal.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: x² − 6x + 9 = 0 gives x = 3 twice</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Substitute</p>
    <div>
    <p style="margin:0;">Replace letters with numbers.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: a = 2, b = −3, c = −2</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Write in standard form</p>
    <p>ax² + bx + c = 0. Example: 2x² = 3x + 2 → 2x² − 3x − 2 = 0.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Identify a, b and c with signs</p>
    <p>a = 2, b = −3, c = −2.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Find the discriminant first</p>
    <p>b² − 4ac = (−3)² − 4(2)(−2) = 9 + 16 = 25.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Substitute into the formula</p>
    <p>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3 ± √25</span><span style="padding:0 4px;">4</span></span> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3 ± 5</span><span style="padding:0 4px;">4</span></span>.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Calculate both roots</p>
    <p>x = 8 ÷ 4 = 2 or x = −2 ÷ 4 = −0.5.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Look back at the discriminant chart above.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>Work out b² − 4ac first. It tells you whether to expect two, one or no real roots before you go further.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Quadratic formula</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √(b² − 4ac)</span><span style="padding:0 4px;">2a</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Gives both roots of ax² + bx + c = 0.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> When factorising is hard or impossible.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Writing −b as b when b is negative; −(−3) = +3.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Negative b, plus or minus the square root of b squared minus four a c, all over two a.”</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Discriminant</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">D = b² − 4ac</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> D &gt; 0: two roots; D = 0: one repeated root; D &lt; 0: no real roots.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> To check how many real roots there are.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Whole-number roots <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 5x + 6 = 0 using the formula.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> a = 1, b = 5, c = 6.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> D = 25 − 24 = 1</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−5 ± 1</span><span style="padding:0 4px;">2</span></span>
    </p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = −2 or x = −3</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = −2 or x = −3</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Factorising gives (x + 2)(x + 3) = 0 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Negative b <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² − 3x − 2 = 0.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> a = 2, b = −3, c = −2.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> D = 9 + 16 = 25</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> (−3)² = 9; −4(2)(−2) = +16.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3 ± 5</span><span style="padding:0 4px;">4</span></span>
    </p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> −b = 3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = 2 or x = −0.5</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 2 or x = −0.5</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using −b = −3.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Decimal answers <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 6x − 2 = 0 to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> D = 36 + 8 = 44.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−6 ± √44</span><span style="padding:0 4px;">2</span></span>
    </p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> √44 ≈ 6.633</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x ≈ 0.32 or x ≈ −6.32</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 0.32 or x ≈ −6.32</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Rearranging first <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 3x² = 5x + 1 to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> 3x² − 5x − 1 = 0; a = 3, b = −5, c = −1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> D = 25 + 12 = 37</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">5 ± 6.083</span><span style="padding:0 4px;">6</span></span>
    </p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x ≈ 1.85 or x ≈ −0.18</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ 1.85 or x ≈ −0.18</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: No real roots <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Show that x² + 2x + 5 = 0 has no real roots.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Check the discriminant.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> D = 4 − 20 = −16</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> D &lt; 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A negative number has no real square root.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> No real roots</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Choosing the method <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Which method would you use for (a) x² − 9 = 0 (b) x² + 7x + 10 = 0 (c) x² + 3x − 5 = 0? Solve (c) to 2 d.p.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Use the quickest method each time.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (a) Difference of squares → x = ±3</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (b) Factorise → (x + 2)(x + 5) = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (c) Formula: D = 9 + 20 = 29; x = (−3 ± 5.385) ÷ 2</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (c) x ≈ 1.19 or x ≈ −4.19</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve 2x² + 5x − 3 = 0 using the formula.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>a = …, b = …, c = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>D = b² − 4ac = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = (−5 ± …) ÷ 4 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = … or x = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 2, b = 5, c = −3; D = 25 + 24 = 49; x = (−5 ± 7) ÷ 4; x = 0.5 or −3.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² − 4x + 1 = 0 to 2 d.p.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>D = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>x = (4 ± …) ÷ 2 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Roots <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">D = 16 − 4 = 12; √12 ≈ 3.464; x ≈ 3.73 or 0.27.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State a, b and c in 3x² − 2x + 7 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 3, b = −2, c = 7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find the discriminant of x² − 4x + 4 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0 (one repeated root)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve x² − 5x + 4 = 0 using the formula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 4 or 1</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Solve x² + 4x − 1 = 0 to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x ≈ 0.24 or −4.24</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Solve 2x² − 7x + 3 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3 or 0.5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Does x² + x + 3 = 0 have real roots?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">D = 1 − 12 = −11; no real roots</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve 5x² = 2x + 1 to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5x² − 2x − 1 = 0; x ≈ 0.69 or −0.29</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve 4x² + 4x + 1 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">D = 0; x = −0.5 (repeated)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> The area of a rectangle is given by x² + 3x = 20. Find x to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 3x − 20 = 0; x ≈ 3.22 (reject −6.22)</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💻 Spreadsheets</p>
    <div>Spreadsheets use the formula to solve quadratics automatically.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Engineering</p>
    <div>Finding dimensions and loads.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💰 Finance</p>
    <div>Finding interest rates in some savings problems.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚗 Transport</p>
    <div>Stopping-distance calculations.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identifying a, b and c correctly and using the discriminant.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing methods with a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking answers with a calculator or spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Type the discriminant in brackets: (−3)² − 4 × 2 × (−2).</li>
    <li>Find √D, store it, then work out both roots.</li>
    <li>If the calculator shows Math ERROR for √D, D is negative: no real roots.</li>
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
    <li>If D is a perfect square (1, 4, 9, 25 …), the equation also factorises.</li>
    <li>If a and c have opposite signs, D is always positive.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−b written wrongly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">If b = −3, −b = +3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use brackets: −(−3) = 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">b² with a negative b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−3)² = 9, not −9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square inside brackets</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dividing only √D by 2a</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The whole numerator is divided</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide (−b ± √D) by 2a</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not rearranging first</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a, b, c must come from standard form</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write ax² + bx + c = 0 first</td>
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
    <li>Write a = , b = , c = before substituting.</li>
    <li>Work out D separately.</li>
    <li>Check one root by substitution.</li>
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
    <li>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √(b² − 4ac)</span><span style="padding:0 4px;">2a</span></span>
    </li>
    <li>D = b² − 4ac.</li>
    <li>D &lt; 0 means no real roots.</li>
    <li>Standard form first.</li>
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
    <li>Show the substitution — it earns method marks.</li>
    <li>Give answers to the accuracy asked.</li>
    <li>If D is negative, state “no real roots”.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Find D for 2x² + 3x + 5 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9 − 40 = −31: no real roots</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Solve x² − 2x − 3 = 0 by the formula.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3 or −1</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> When does a quadratic have one repeated root?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">When D = 0</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I always use brackets when substituting negatives?</li>
    <li>Which method do I prefer and why?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The quadratic formula solves any quadratic with real roots.</li>
    <li>Identify a, b, c from standard form.</li>
    <li>The discriminant b² − 4ac shows the number of real roots.</li>
    <li>Choose factorising when easy; use the formula otherwise.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Discriminant</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Roots</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two different real roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 5x + 4 = 0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zero</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One repeated root</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 6x + 9 = 0</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Negative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No real roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 2x + 5 = 0</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">b² − 4ac.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Repeated root</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equal roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Real roots</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Real-number solutions.</td>
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
    <p style="margin:0;"><strong>1.</strong> Solve 3x² − 4x − 2 = 0 using the formula, giving answers to 2 decimal places. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 3, b = −4, c = −2 [1]; D = 16 + 24 = 40 [1]; x = (4 ± 6.325) ÷ 6 [1]; x ≈ 1.72 or −0.39 [1]</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> (a) Find the discriminant of x² + kx + 9 = 0 when k = 6. (b) Describe the roots. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 36 − 36 = 0 [2]; (b) one repeated real root, x = −3 [1]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Solve 2x² + x − 6 = 0 using the formula.</li>
    <li>Solve x² − 3x − 7 = 0 to 2 d.p.</li>
    <li>Show that 3x² + x + 2 = 0 has no real roots.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'In 2x² − 3x − 2 = 0, b equals:',
            options: ['3', '2', '−3', '−2'],
            correct: 2,
            explanation: 'b is the coefficient of x, including its sign.'
        },
        {
            question: 'The discriminant of x² − 4x + 4 = 0 is:',
            options: ['8', '−8', '16', '0'],
            correct: 3,
            explanation: 'The answer is “0”. (−4)² − 4(1)(4) = 16 − 16 = 0.'
        },
        {
            question: 'If b² − 4ac is negative, the equation has:',
            options: ['no real roots', 'two real roots', 'one real root', 'three roots'],
            correct: 0,
            explanation: 'A negative number has no real square root.'
        },
        {
            question: 'Solve x² + 5x + 6 = 0 using the formula.',
            options: ['x = 2 or 3', 'x = −2 or −3', 'x = −5 or −6', 'x = 1 or 6'],
            correct: 1,
            explanation: 'The answer is “x = −2 or −3”. D = 1; x = (−5 ± 1) ÷ 2 = −2 or −3.'
        },
        {
            question: 'In the formula, the whole numerator is divided by:',
            options: ['a', '2a', '4a', 'b'],
            correct: 1,
            explanation: 'The answer is “2a”. x = (−b ± √D) ÷ 2a.'
        },
        {
            question: 'For 2x² − 3x − 2 = 0, the roots are:',
            options: ['2 and −0.5', '−2 and 0.5', '3 and −2', '1 and −1'],
            correct: 0,
            explanation: 'The answer is “2 and −0.5”. D = 25; x = (3 ± 5) ÷ 4.'
        },
        {
            question: '(−3)² equals:',
            options: ['−9', '6', '−6', '9'],
            correct: 3,
            explanation: 'The answer is “9”. A negative number squared is positive.'
        },
        {
            question: 'A quadratic with D = 49 has:',
            options: ['no real roots', 'one repeated root', 'two different real roots', 'no roots at all'],
            correct: 2,
            explanation: 'The answer is “two different real roots”. D is positive.'
        }
    ]
},
{
    name: '1.1.4 Real-Life Problems Leading to Quadratic Equations',
    type: 'lesson',
    duration: '80 min',
    exercises: 9,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 4</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Real-Life Problems Leading to Quadratic Equations</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Form quadratic equations from real-life situations.</li>
    <li>Solve problems on gardens, land, area and numbers.</li>
    <li>Solve simple business profit problems.</li>
    <li>Interpret solutions of idealised projectile motion problems.</li>
    <li>Reject solutions that do not make sense.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 1–3: factorising, completing the square and the formula.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How are quadratic equations used to solve problems in real life?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Many practical questions lead to quadratic equations: finding the size of a plot, the width of a path around a garden, the number of items a trader must sell, or the time a ball is at a certain height. The skill is to <strong>translate words into an equation</strong>, solve it and <strong>interpret</strong> the answer.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Use this routine: (1) choose a letter for the unknown and say what it means, with units; (2) express other quantities in terms of it; (3) form the equation; (4) solve it; (5) check which roots make sense; (6) answer the question in words with units.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Let statement</p>
    <div>
    <p style="margin:0;">A sentence saying what the letter stands for.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Let the width be x m.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Model</p>
    <div>
    <p style="margin:0;">An equation that represents a real situation.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: h = 20t − 5t²</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Revenue</p>
    <div>
    <p style="margin:0;">Total money from sales.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Price × number sold</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Profit</p>
    <div>
    <p style="margin:0;">Revenue minus costs.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: KSh 12 000 − KSh 9 000</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Projectile</p>
    <div>
    <p style="margin:0;">An object thrown or kicked into the air.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: A ball</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Interpret</p>
    <div>
    <p style="margin:0;">Explain what an answer means in the situation.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: The ball is 15 m high after 1 s and 3 s</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Define the unknown</p>
    <p>Let the width be x m.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Express other quantities</p>
    <p>Length = (x + 5) m.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Form the equation</p>
    <p>Area: x(x + 5) = 84.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Solve</p>
    <p>x² + 5x − 84 = 0 → (x + 12)(x − 7) = 0.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Interpret and answer</p>
    <p>x = 7 (reject −12). The plot is 7 m by 12 m.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 600 270" width="600" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="70" y1="220" x2="530" y2="220" stroke="#94a3b8" stroke-width="2"/><line x1="70" y1="220" x2="70" y2="20" stroke="#94a3b8" stroke-width="2"/><line x1="70" y1="220" x2="70" y2="226" stroke="#94a3b8"/><text x="70" y="242" fill="#cbd5e1" font-size="12" text-anchor="middle">0</text><line x1="180" y1="220" x2="180" y2="226" stroke="#94a3b8"/><text x="180" y="242" fill="#cbd5e1" font-size="12" text-anchor="middle">1</text><line x1="290" y1="220" x2="290" y2="226" stroke="#94a3b8"/><text x="290" y="242" fill="#cbd5e1" font-size="12" text-anchor="middle">2</text><line x1="400" y1="220" x2="400" y2="226" stroke="#94a3b8"/><text x="400" y="242" fill="#cbd5e1" font-size="12" text-anchor="middle">3</text><line x1="510" y1="220" x2="510" y2="226" stroke="#94a3b8"/><text x="510" y="242" fill="#cbd5e1" font-size="12" text-anchor="middle">4</text><line x1="64" y1="220" x2="70" y2="220" stroke="#94a3b8"/><text x="58" y="224" fill="#cbd5e1" font-size="12" text-anchor="end">0</text><line x1="64" y1="175" x2="70" y2="175" stroke="#94a3b8"/><text x="58" y="179" fill="#cbd5e1" font-size="12" text-anchor="end">5</text><line x1="64" y1="130" x2="70" y2="130" stroke="#94a3b8"/><text x="58" y="134" fill="#cbd5e1" font-size="12" text-anchor="end">10</text><line x1="64" y1="85" x2="70" y2="85" stroke="#94a3b8"/><text x="58" y="89" fill="#cbd5e1" font-size="12" text-anchor="end">15</text><line x1="64" y1="40" x2="70" y2="40" stroke="#94a3b8"/><text x="58" y="44" fill="#cbd5e1" font-size="12" text-anchor="end">20</text><polyline points="70.0,220.0 81.0,202.4 92.0,185.8 103.0,170.1 114.0,155.2 125.0,141.3 136.0,128.2 147.0,116.0 158.0,104.8 169.0,94.5 180.0,85.0 191.0,76.5 202.0,68.8 213.0,62.1 224.0,56.2 235.0,51.3 246.0,47.2 257.0,44.0 268.0,41.8 279.0,40.4 290.0,40.0 301.0,40.4 312.0,41.8 323.0,44.1 334.0,47.2 345.0,51.3 356.0,56.2 367.0,62.1 378.0,68.8 389.0,76.5 400.0,85.0 411.0,94.5 422.0,104.8 433.0,116.1 444.0,128.2 455.0,141.3 466.0,155.2 477.0,170.1 488.0,185.8 499.0,202.5 510.0,220.0" fill="none" stroke="#38bdf8" stroke-width="3"/><line x1="70" y1="85" x2="530" y2="85" stroke="#fde68a" stroke-dasharray="6 4"/><text x="536" y="89" fill="#fde68a" font-size="12">h = 15</text><circle cx="180" cy="85" r="5" fill="#fde68a"/><circle cx="400" cy="85" r="5" fill="#fde68a"/><text x="180" y="72" fill="#fde68a" font-size="12" text-anchor="middle">t = 1</text><text x="400" y="72" fill="#fde68a" font-size="12" text-anchor="middle">t = 3</text><text x="300" y="262" fill="#cbd5e1" font-size="12" text-anchor="middle">time t (seconds)</text><text x="20" y="15" fill="#cbd5e1" font-size="12">height h (m)</text><text x="360" y="40" fill="#7dd3fc" font-size="13">h = 20t − 5t²</text>
    </svg>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>A ball thrown upwards with h = 20t − 5t² is 15 m high twice: once going up (t = 1 s) and once coming down (t = 3 s). Both answers make sense!</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Area of a rectangle</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">A = length × width</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Gives a quadratic when both sides involve x.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Garden, plot and room problems.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Profit</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Profit = Revenue − Cost</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Revenue = price × quantity.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Business problems.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Idealised height of a thrown ball</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">h = ut − 5t²</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> u is the starting upward speed in m/s; 5 approximates half of gravity (10 m/s²).</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Simple projectile problems.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Forgetting the ball reaches the same height twice.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Garden dimensions <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A garden is 5 m longer than it is wide. Its area is 84 m². Find its dimensions.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let the width be x m.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x(x + 5) = 84</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Area equation.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² + 5x − 84 = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x + 12)(x − 7) = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 7 (reject −12)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Width cannot be negative.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 7 m by 12 m</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 7 × 12 = 84 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Path around a garden <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A rectangular garden 10 m by 6 m has a path of uniform width x m all round. The total area of garden and path is 96 m². Find x.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Outer dimensions: (10 + 2x) by (6 + 2x).</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (10 + 2x)(6 + 2x) = 96</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 60 + 32x + 4x² = 96 → 4x² + 32x − 36 = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x² + 8x − 9 = 0 → (x + 9)(x − 1) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 4.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 1 (reject −9)</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The path is 1 m wide.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding x only once to each side; the path is on both sides.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Land with perimeter and area <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A rectangular plot has perimeter 46 m and area 120 m². Find its dimensions.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Length + width = 23.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Width x, length 23 − x</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x(23 − x) = 120 → x² − 23x + 120 = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x − 8)(x − 15) = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 8 or 15</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both give the same rectangle.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 15 m by 8 m</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 2(15 + 8) = 46 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Business profit <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A juice vendor’s daily profit is P = −x² + 60x − 500, where x is the price of a cup in KSh. Find the prices that give a profit of KSh 300.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Set P = 300.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> −x² + 60x − 500 = 300</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> x² − 60x + 800 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Rearrange and multiply by −1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (x − 20)(x − 40) = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> x = 20 or 40</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both are sensible prices.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> KSh 20 or KSh 40 per cup</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Ball height <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A ball is thrown up with h = 20t − 5t². When is it 15 m high?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Set h = 15.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 20t − 5t² = 15</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 5t² − 20t + 15 = 0 → t² − 4t + 3 = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 5.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (t − 1)(t − 3) = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> t = 1 s or t = 3 s</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Going up and coming down.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> After 1 s and after 3 s</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 20 − 5 = 15 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: When does the ball land? <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Using h = 20t − 5t², find when the ball returns to the ground.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Ground means h = 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 20t − 5t² = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 5t(4 − t) = 0</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Common factor.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> t = 0 or t = 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> t = 0 is the moment of throwing.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> It lands after 4 seconds.</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 7: Shared cost <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A group shares the KSh 6 000 cost of a trip equally. If 5 more people join, each pays KSh 100 less. How many were in the group?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Let n be the number of people.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">6000</span><span style="padding:0 4px;">n</span></span> − <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">6000</span><span style="padding:0 4px;">n + 5</span></span> = 100</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 6000(n + 5) − 6000n = 100n(n + 5)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply by n(n + 5).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 30 000 = 100n² + 500n → n² + 5n − 300 = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> (n + 20)(n − 15) = 0 → n = 15</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Reject −20.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 15 people</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 6000 ÷ 15 = 400; 6000 ÷ 20 = 300; difference 100 ✓</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A rectangle is 4 cm longer than it is wide and its area is 45 cm². Find its width.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Let width = x; length = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Equation: x(…) = 45 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Standard form: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Factorise and solve <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Reject … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Length x + 4; x² + 4x − 45 = 0; (x + 9)(x − 5) = 0; width 5 cm (reject −9).</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A stone is thrown up with h = 25t − 5t². When is it 20 m high?</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>25t − 5t² = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Divide by 5 and rearrange: t² − 5t + … = 0 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Factorise <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Interpret <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">t² − 5t + 4 = 0; (t − 1)(t − 4) = 0; t = 1 s (rising) and t = 4 s (falling).</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Two consecutive numbers multiply to 56. Find them.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x(x + 1) = 56 → 7 and 8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A square plot has area 225 m². Find its side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">15 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A room is 2 m longer than it is wide with area 48 m². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 m by 8 m</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A plot has perimeter 34 m and area 60 m². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 17x + 60 = 0 → 12 m by 5 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A ball has h = 30t − 5t². When is it 40 m high?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">t² − 6t + 8 = 0 → t = 2 s or 4 s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A trader’s profit is P = −x² + 50x − 400. Find the prices for a profit of KSh 200.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² − 50x + 600 = 0 → KSh 20 or KSh 30</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A photo 20 cm by 15 cm has a frame of width x cm. Total area is 500 cm². Find x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(20 + 2x)(15 + 2x) = 500 → 4x² + 70x − 200 = 0 → 2x² + 35x − 100 = 0 → x = 2.5 cm</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A group shares KSh 4 800 equally; with 4 fewer people each pays KSh 200 more. Find the group size.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4800/(n − 4) − 4800/n = 200 → n² − 4n − 96 = 0 → n = 12</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Using h = 20t − 5t², find the greatest height of the ball. (Hint: it is halfway between the times it lands.)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Lands at t = 4, so top at t = 2: h = 40 − 20 = 20 m</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌾 Agriculture</p>
    <div>Planning plot and greenhouse sizes.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏪 Business</p>
    <div>Finding prices that give a target profit.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚽ Sport</p>
    <div>Working out the time a ball is in the air.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏠 Home</p>
    <div>Fitting carpets, frames and paths.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Translating word problems into equations and interpreting roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presenting solutions to real problems in groups.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking answers with a calculator or spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check answers by substituting back into the word problem, not just the equation.</li>
    <li>For the formula, round only the final answer.</li>
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
    <li>Perimeter P gives length + width = P ÷ 2.</li>
    <li>A path of width x adds 2x to each dimension.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keeping a negative length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lengths cannot be negative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reject it and say why</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding x once for a path</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The path is on both sides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add 2x to each dimension</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using full perimeter as length + width</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Perimeter = 2(l + w)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use half the perimeter</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thinking a ball is at a height once</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">It passes the height going up and down</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpret both roots</td>
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
    <li>Always write a “let” statement with units.</li>
    <li>Draw a sketch for area problems.</li>
    <li>Answer in a full sentence.</li>
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
    <li>Define, express, form, solve, interpret.</li>
    <li>Reject impossible roots.</li>
    <li>Half the perimeter = length + width.</li>
    <li>h = ut − 5t² for a thrown ball.</li>
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
    <li>Marks are given for forming the equation — show it.</li>
    <li>State clearly which root you reject and why.</li>
    <li>Include units in the final answer.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> A rectangle is x m wide and (x + 3) m long with area 70 m². Write the equation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x² + 3x − 70 = 0</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Using h = 20t − 5t², when is h = 0?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">t = 0 and t = 4 s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why reject n = −20 people?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">A count cannot be negative</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which step of forming equations do I find hardest?</li>
    <li>Do I always check my answer in the real situation?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Real problems often lead to quadratic equations.</li>
    <li>Follow the routine: define, express, form, solve, interpret.</li>
    <li>Reject roots that do not make sense.</li>
    <li>A thrown object reaches a given height twice.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Problem type</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Equation idea</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rectangle area</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x(x + k) = A</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Perimeter and area</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x(P/2 − x) = A</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Path around a garden</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(l + 2x)(w + 2x) = total</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Profit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Set P(x) = target</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thrown ball</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ut − 5t² = h</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Model</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equation for a situation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Revenue</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Money from sales.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Profit</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Revenue − cost.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Projectile</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thrown object.</td>
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
    <p style="margin:0;"><strong>1.</strong> A rectangular field is 30 m longer than it is wide. Its area is 2 800 m². (a) Form an equation. (b) Find the dimensions. <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) x(x + 30) = 2800 → x² + 30x − 2800 = 0 [2]; (b) (x + 70)(x − 40) = 0 [1]; x = 40 (reject −70) [1]; 40 m by 70 m [1]</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A ball is kicked up with h = 15t − 5t². (a) When is it 10 m high? (b) When does it land? <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) t² − 3t + 2 = 0 → t = 1 s or 2 s [3]; (b) 5t(3 − t) = 0 → t = 3 s [2]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A plot has perimeter 52 m and area 160 m². Find its dimensions.</li>
    <li>A path of width x m surrounds a 12 m by 8 m garden; total area 140 m². Find x.</li>
    <li>Using h = 25t − 5t², find when the object is 30 m high.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A garden x m wide and (x + 5) m long has area 84 m². The equation is:',
            options: ['x² + 5x − 84 = 0', 'x² + 5x + 84 = 0', '2x + 5 = 84', 'x² = 84'],
            correct: 0,
            explanation: 'The answer is “x² + 5x − 84 = 0”. x(x + 5) = 84 gives x² + 5x − 84 = 0.'
        },
        {
            question: 'Solving gives x = 7 or x = −12. The width is:',
            options: ['−12 m', '7 m', '12 m', '19 m'],
            correct: 1,
            explanation: 'The answer is “7 m”. A width cannot be negative, so x = 7.'
        },
        {
            question: 'A rectangle has perimeter 46 m. Its length + width is:',
            options: ['46 m', '23 m', '92 m', '12 m'],
            correct: 1,
            explanation: 'The answer is “23 m”. Perimeter = 2(l + w), so l + w = 23.'
        },
        {
            question: 'A path x m wide surrounds a 10 m by 6 m garden. The outer length is:',
            options: ['10 + x', '10x', '20 + x', '10 + 2x'],
            correct: 3,
            explanation: 'The answer is “10 + 2x”. The path adds x on both ends.'
        },
        {
            question: 'With h = 20t − 5t², the ball is 15 m high at:',
            options: ['t = 1 s only', 't = 3 s only', 't = 15 s', 't = 1 s and t = 3 s'],
            correct: 3,
            explanation: 'The answer is “t = 1 s and t = 3 s”. t² − 4t + 3 = 0 gives t = 1 or 3.'
        },
        {
            question: 'With h = 20t − 5t², the ball lands at:',
            options: ['t = 4 s', 't = 2 s', 't = 5 s', 't = 20 s'],
            correct: 0,
            explanation: 'The answer is “t = 4 s”. 5t(4 − t) = 0 gives t = 0 or 4.'
        },
        {
            question: 'Profit equals:',
            options: ['Revenue + cost', 'Cost − revenue', 'Revenue − cost', 'Price × cost'],
            correct: 2,
            explanation: 'The answer is “Revenue − cost”. Profit is what remains after costs.'
        },
        {
            question: 'A solution of −20 people should be:',
            options: ['used', 'made positive', 'rejected because a count cannot be negative', 'halved'],
            correct: 2,
            explanation: 'The answer is “rejected because a count cannot be negative”. Always interpret roots in context.'
        }
    ]
},
{
    name: '1.1 Worked Examples: Quadratic Equations',
    type: 'lesson',
    duration: '60 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Worked Examples</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">✏️ Worked Examples — Quadratic Equations</h2>
    <p style="font-size:16px;">These exam-style examples bring the four lessons together. Each shows the thinking, every step, the final answer and a common mistake.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Choosing and using methods</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Factorise or formula? <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve (a) x² − 11x + 28 = 0 (b) x² − 3x − 5 = 0 (to 2 d.p.).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> (a) factorises; (b) does not.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (a) (x − 4)(x − 7) = 0 → x = 4 or 7</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (b) D = 9 + 20 = 29; x = (3 ± 5.385) ÷ 2</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (b) x ≈ 4.19 or −1.19</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (a) 4 or 7; (b) 4.19 or −1.19</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Completing the square <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Solve x² + 8x + 3 = 0 by completing the square, to 2 d.p.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Half of 8 is 4; add 16.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 8x = −3</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x + 4)² = 13</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = −4 ± 3.606</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x ≈ −0.39 or −7.61</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Adding 16 to the left only.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Real-life problems</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Greenhouse <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A greenhouse floor is 10 m longer than it is wide and has area 200 m². Find the width to 1 d.p.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> x(x + 10) = 200.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² + 10x − 200 = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> D = 100 + 800 = 900; √900 = 30</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = (−10 + 30) ÷ 2 = 10</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Reject the negative root.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Width 10 m (length 20 m)</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Ticket price <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A school’s profit from a show is P = −x² + 120x − 2 000 shillings, where x is the ticket price. Find the price for a profit of KSh 1 500.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Set P = 1 500.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> x² − 120x + 3 500 = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (x − 50)(x − 70) = 0</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> x = 50 or 70</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both possible prices.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> KSh 50 or KSh 70</div>
    <p style="margin:8px 0 0 0;color:#d8b4fe;">🔀 <strong>Alternative method:</strong> Use the formula: D = 14 400 − 14 000 = 400.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Ball in the air <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A ball has h = 25t − 5t². For how long is it higher than 20 m?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Find the two times when h = 20.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> t² − 5t + 4 = 0 → t = 1 or 4</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> It is above 20 m between t = 1 and t = 4</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 3 seconds</div>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 How Examiners Mark These</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Method marks are given for forming the equation and correct substitution.</li>
    <li>Accuracy marks need correct rounding.</li>
    <li>Context marks need a clear statement and units.</li>
    </ul>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'x² − 11x + 28 = 0 has roots:',
            options: ['4 and 7', '−4 and −7', '2 and 14', '1 and 28'],
            correct: 0,
            explanation: 'The answer is “4 and 7”. (x − 4)(x − 7) = 0.'
        },
        {
            question: 'For x² − 3x − 5 = 0, D equals:',
            options: ['−11', '29', '11', '−29'],
            correct: 1,
            explanation: 'The answer is “29”. 9 − 4(1)(−5) = 29.'
        },
        {
            question: 'A floor x m wide and (x + 10) m long has area 200 m². The width is:',
            options: ['10 m', '20 m', '−20 m', '200 m'],
            correct: 0,
            explanation: 'The answer is “10 m”. x² + 10x − 200 = 0 gives x = 10.'
        },
        {
            question: 'With h = 25t − 5t², the ball is above 20 m for:',
            options: ['1 s', '4 s', '5 s', '3 s'],
            correct: 3,
            explanation: 'The answer is “3 s”. From t = 1 to t = 4.'
        },
        {
            question: 'For P = −x² + 120x − 2 000, a profit of 1 500 gives prices:',
            options: ['20 or 100', '50 or 70', '35 or 85', '60 only'],
            correct: 1,
            explanation: 'x² − 120x + 3 500 = 0 factorises to (x − 50)(x − 70).'
        }
    ]
},
{
    name: '1.1 Practice: Quadratic Equations',
    type: 'lesson',
    duration: '80 min',
    exercises: 20,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Practice</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🏋️ Practice Set — Quadratic Equations</h2>
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
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve x² − 9x + 18 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 3 or 6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve x² − 81 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = ±9</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve x² + 4x = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 0 or −4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What must be added to x² − 12x to make a perfect square?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">36</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find the discriminant of x² + 2x + 1 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Solve 2x² + x − 10 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 2 or −2.5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Solve x² + 6x + 4 = 0 by completing the square (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x ≈ −0.76 or −5.24</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Solve x² − 5x − 2 = 0 by the formula (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x ≈ 5.37 or −0.37</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Does 2x² + 3x + 4 = 0 have real roots?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">D = 9 − 32 &lt; 0: no</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Solve x(x − 2) = 15.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 5 or −3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Solve 3x² − 7x + 1 = 0 (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x ≈ 2.18 or 0.15</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> Solve (2x − 1)(x + 3) = 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2x² + 5x − 15 = 0 → x ≈ 1.76 or −4.26</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q13.</strong> Solve 4x² − 12x + 9 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 1.5 (repeated)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q14.</strong> A plot is 8 m longer than it is wide and has area 180 m². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">10 m by 18 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q15.</strong> A rectangular pen uses 40 m of fencing and encloses 96 m². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12 m by 8 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q16.</strong> A ball has h = 40t − 5t². When is it 75 m high?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">t = 3 s and t = 5 s</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q17.</strong> A path x m wide surrounds a 15 m by 10 m lawn. Total area 204 m². Find x.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(15 + 2x)(10 + 2x) = 204 → x = 1 m</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #93c5fd;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">Exam Style</p>
    <p style="margin:8px 0 2px 0;"><strong>Q18.</strong> A trader buys goods for KSh 9 000. Had each item cost KSh 30 less, she would have bought 10 more. How many did she buy?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9000/(n) − 9000/(n + 10) = 30 → n² + 10n − 3000 = 0 → n = 50</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q19.</strong> Solve x² + 10x + 21 = 0 by (a) factorising (b) completing the square (c) the formula. Compare.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">All give x = −3 or −7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q20.</strong> The profit P = −2x² + 80x − 600. Find x for P = 150.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2x² − 80x + 750 = 0 → x² − 40x + 375 = 0 → x = 15 or 25</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redo the ones you missed after one day.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 – 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Revisit the lesson for each method you found hard.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 – 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Work through the worked examples again with your teacher.</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'x² − 9x + 18 = 0 has roots:',
            options: ['−3 and −6', '2 and 9', '1 and 18', '3 and 6'],
            correct: 3,
            explanation: 'The answer is “3 and 6”. (x − 3)(x − 6) = 0.'
        },
        {
            question: 'x² + 4x = 0 has roots:',
            options: ['0 and −4', '0 and 4', '4 only', '±2'],
            correct: 0,
            explanation: 'The answer is “0 and −4”. x(x + 4) = 0.'
        },
        {
            question: 'What must be added to x² − 12x to make a perfect square?',
            options: ['12', '6', '36', '144'],
            correct: 2,
            explanation: 'The answer is “36”. Half of −12 is −6; (−6)² = 36.'
        },
        {
            question: 'A pen uses 40 m of fencing and encloses 96 m². Its dimensions are:',
            options: ['12 m by 8 m', '10 m by 10 m', '16 m by 6 m', '24 m by 4 m'],
            correct: 0,
            explanation: 'The answer is “12 m by 8 m”. x(20 − x) = 96 gives 12 and 8.'
        },
        {
            question: '4x² − 12x + 9 = 0 has:',
            options: ['two different roots', 'one repeated root', 'no real roots', 'three roots'],
            correct: 1,
            explanation: 'The answer is “one repeated root”. D = 144 − 144 = 0.'
        }
    ]
},
{
    name: '1.1 Quiz: Quadratic Equations',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📝 Quiz — Quadratic Equations</h2>
    <p style="font-size:16px;">Fifteen questions on all four lessons. Work each on rough paper before choosing.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Work each question on rough paper before choosing an answer.</li>
    <li>Do not look back at the lessons — test yourself honestly.</li>
    <li>Afterwards, read the explanation for every question, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Solving by factorising</li>
    <li>Completing the square</li>
    <li>The quadratic formula and discriminant</li>
    <li>Forming and solving real-life problems</li>
    <li>Interpreting roots</li>
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
    <div>Most wrong options match a common mistake — wrong signs, forgetting ±, or keeping an impossible root.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Solve x² − x − 6 = 0.',
            options: ['x = −3 or 2', 'x = 3 or −2', 'x = 6 or −1', 'x = 1 or 6'],
            correct: 1,
            explanation: 'The answer is “x = 3 or −2”. (x − 3)(x + 2) = 0.'
        },
        {
            question: 'Solve x² − 16 = 0.',
            options: ['x = 4', 'x = 16', 'x = ±8', 'x = ±4'],
            correct: 3,
            explanation: 'The answer is “x = ±4”. Difference of two squares.'
        },
        {
            question: '3x² + 5x − 2 = 0 factorises as:',
            options: ['(3x − 1)(x + 2)', '(3x + 1)(x − 2)', '(3x + 2)(x − 1)', '(x − 1)(x + 2)'],
            correct: 0,
            explanation: 'The answer is “(3x − 1)(x + 2)”. Expanding gives 3x² + 6x − x − 2.'
        },
        {
            question: 'What must be added to x² + 14x?',
            options: ['14', '7', '49', '196'],
            correct: 2,
            explanation: 'The answer is “49”. Half of 14 is 7; 7² = 49.'
        },
        {
            question: 'x² + 6x = 7 after completing the square is:',
            options: ['(x + 3)² = 7', '(x + 6)² = 43', '(x + 3)² = 16', '(x + 3)² = −2'],
            correct: 2,
            explanation: 'The answer is “(x + 3)² = 16”. Add 9 to both sides.'
        },
        {
            question: 'In 5x² − 2x + 1 = 0, the discriminant is:',
            options: ['−16', '24', '16', '−24'],
            correct: 0,
            explanation: 'The answer is “−16”. 4 − 20 = −16.'
        },
        {
            question: 'The quadratic formula is:',
            options: ['x = (b ± √(b² − 4ac)) ÷ 2a', 'x = (−b ± √(b² − 4ac)) ÷ 2a', 'x = (−b ± √(b² + 4ac)) ÷ 2a', 'x = −b ÷ 2a'],
            correct: 1,
            explanation: 'The answer is “x = (−b ± √(b² − 4ac)) ÷ 2a”. Standard formula.'
        },
        {
            question: 'x² + 2x + 5 = 0 has:',
            options: ['two real roots', 'one real root', 'roots 2 and 5', 'no real roots'],
            correct: 3,
            explanation: 'The answer is “no real roots”. D = 4 − 20 = −16, which is negative.'
        },
        {
            question: 'Solve 2x² − 3x − 2 = 0.',
            options: ['−2 or 0.5', '3 or −2', '2 or −0.5', '1 or −2'],
            correct: 2,
            explanation: 'The answer is “2 or −0.5”. D = 25; x = (3 ± 5) ÷ 4.'
        },
        {
            question: 'A room is 3 m longer than wide with area 40 m². Its width is:',
            options: ['5 m', '8 m', '−8 m', '10 m'],
            correct: 0,
            explanation: 'The answer is “5 m”. x² + 3x − 40 = 0 → (x + 8)(x − 5) = 0.'
        },
        {
            question: 'A plot has perimeter 30 m and area 56 m². Its dimensions are:',
            options: ['10 m by 5 m', '14 m by 4 m', '8 m by 7 m', '28 m by 2 m'],
            correct: 2,
            explanation: 'The answer is “8 m by 7 m”. x(15 − x) = 56 gives 7 and 8.'
        },
        {
            question: 'With h = 30t − 5t², when does the ball land?',
            options: ['t = 3 s', 't = 5 s', 't = 30 s', 't = 6 s'],
            correct: 3,
            explanation: 'The answer is “t = 6 s”. 5t(6 − t) = 0.'
        },
        {
            question: 'With h = 20t − 5t², the greatest height is:',
            options: ['20 m', '40 m', '15 m', '10 m'],
            correct: 0,
            explanation: 'The answer is “20 m”. At t = 2: 40 − 20 = 20 m.'
        },
        {
            question: 'A path x m wide around a 10 m by 8 m garden gives an outer width of:',
            options: ['8 + x', '10 + x', '8x', '8 + 2x'],
            correct: 3,
            explanation: 'The answer is “8 + 2x”. The path is on both sides.'
        },
        {
            question: 'A negative number of items found when solving should be:',
            options: ['used', 'rejected', 'squared', 'ignored without comment'],
            correct: 1,
            explanation: 'The answer is “rejected”. State that it is impossible in context.'
        }
    ]
},
{
    name: '1.1 Assignment: Planning a School Garden',
    type: 'lesson',
    duration: '120 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 120 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📂 Planning a School Garden</h2>
    <p style="font-size:16px;">In groups, you will use quadratic equations to plan a rectangular school vegetable garden with a path around it.</p>
    <p style="margin:6px 0 0 0;color:#e0f2fe;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work).</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school agriculture club has 120 m² of land available for a vegetable garden and a surrounding path. The club wants the garden to be 4 m longer than it is wide and the path to be 1 m wide all round. They also want to estimate profit from selling vegetables.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Tasks</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Let the garden width be x m. Write expressions for the garden length and for the outer length and width including the path.</li>
    <li>Form an equation for the total area of 120 m² and write it in standard form.</li>
    <li>Solve the equation by two different methods and compare the answers.</li>
    <li>State the dimensions of the garden and path, rejecting any impossible values.</li>
    <li>The club’s weekly profit is P = −x² + 30x − 150 shillings when vegetables are sold at x shillings per bunch. Find the prices that give a profit of KSh 50.</li>
    <li>Draw a labelled sketch and write a short report to the club.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Labelled sketch</li>
    <li>Equations and full working</li>
    <li>Comparison of two methods</li>
    <li>Short report with recommendations</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All equations correct and explained</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equations missing or wrong</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two methods, both correct, compared clearly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two methods correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One method correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incorrect</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All answers interpreted with units and reasons for rejection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Answers interpreted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly interpreted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not interpreted</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear sketch and report</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unclear</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Tips for Success</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw the sketch first.</li>
    <li>The path adds 2 m to each dimension.</li>
    <li>Check your final dimensions give 120 m².</li>
    </ul>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which method was quicker for this problem?</li>
    <li>How did the sketch help?</li>
    <li>How would the plan change if the land were 150 m²?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'If the garden width is x m, its length is:',
            options: ['4x m', '(x − 4) m', '(x + 2) m', '(x + 4) m'],
            correct: 3,
            explanation: 'The answer is “(x + 4) m”. It is 4 m longer than it is wide.'
        },
        {
            question: 'With a 1 m path all round, the outer width is:',
            options: ['x + 1', 'x + 2', 'x + 4', '2x'],
            correct: 1,
            explanation: 'The answer is “x + 2”. Add 1 m on each side.'
        },
        {
            question: 'The total area equation is:',
            options: ['(x + 2)(x + 6) = 120', 'x(x + 4) = 120', '(x + 1)(x + 5) = 120', 'x + 6 = 120'],
            correct: 0,
            explanation: 'The answer is “(x + 2)(x + 6) = 120”. Outer width x + 2, outer length x + 6.'
        },
        {
            question: '(x + 2)(x + 6) = 120 in standard form is:',
            options: ['x² + 8x + 12 = 0', 'x² + 8x − 120 = 0', 'x² − 108 = 0', 'x² + 8x − 108 = 0'],
            correct: 3,
            explanation: 'x² + 8x + 12 = 120 gives x² + 8x − 108 = 0.'
        },
        {
            question: 'Comparing two methods helps to:',
            options: ['waste time', 'check the answer', 'avoid working', 'change the question'],
            correct: 1,
            explanation: 'Same answers by two methods build confidence.'
        }
    ]
},
{
    name: '1.1 Revision: Quadratic Equations',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 40 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🔁 Revision — Quadratic Equations</h2>
    <p style="font-size:16px;">Use these cards and questions to revise before moving on to 1.2 Matrices.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Standard form</p>
    <div>
    <p>ax² + bx + c = 0, a ≠ 0.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Factorising</p>
    <div>
    <p>Get = 0, factorise, set each bracket to zero.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Completing the square</p>
    <div>
    <p>Move c, add (b/2)² to both sides, square-root with ±.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Quadratic formula</p>
    <div>
    <p>x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √(b² − 4ac)</span><span style="padding:0 4px;">2a</span></span>
    </p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Discriminant</p>
    <div>
    <p>b² − 4ac: positive → two roots; zero → one; negative → none.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Real life</p>
    <div>
    <p>Define, express, form, solve, interpret; reject impossible roots.</p>
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
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factorising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Easy factor pairs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 5x + 6 = 0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Difference of squares</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a² − b² form</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² − 49 = 0</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Completing the square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Asked for, or a = 1 with even b</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + 6x − 2 = 0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Does not factorise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3x² − 5x − 1 = 0</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Solve x² + x − 20 = 0.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 4 or −5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Solve x² − 2x − 4 = 0 by completing the square (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x ≈ 3.24 or −1.24</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Solve 2x² + 3x − 4 = 0 by the formula (2 d.p.).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x ≈ 0.85 or −2.35</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A rectangle is 6 cm longer than wide with area 72 cm². Find its dimensions.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 cm by 12 cm</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Using h = 20t − 5t², when is the ball 20 m high?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">t = 2 s (only once — its highest point)</div>
    </details>
    </div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can solve by factorising.</p>
    <p style="margin:6px 0;">☐ I can complete the square.</p>
    <p style="margin:6px 0;">☐ I can use the quadratic formula and discriminant.</p>
    <p style="margin:6px 0;">☐ I can solve real-life problems and interpret roots.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'x² + x − 20 = 0 has roots:',
            options: ['−4 and 5', '4 and −5', '2 and −10', '1 and −20'],
            correct: 1,
            explanation: 'The answer is “4 and −5”. (x − 4)(x + 5) = 0.'
        },
        {
            question: 'The discriminant of 2x² + 3x − 4 = 0 is:',
            options: ['−23', '41', '23', '−41'],
            correct: 1,
            explanation: 'The answer is “41”. 9 + 32 = 41.'
        },
        {
            question: 'A rectangle 6 cm longer than wide with area 72 cm² has width:',
            options: ['12 cm', '8 cm', '9 cm', '6 cm'],
            correct: 3,
            explanation: 'The answer is “6 cm”. x² + 6x − 72 = 0 → x = 6.'
        },
        {
            question: 'Using h = 20t − 5t², the ball is 20 m high at:',
            options: ['t = 2 s only', 't = 1 s and 3 s', 't = 4 s', 't = 0 s'],
            correct: 0,
            explanation: 'The answer is “t = 2 s only”. t² − 4t + 4 = 0 → (t − 2)² = 0.'
        },
        {
            question: 'The best method for x² − 49 = 0 is:',
            options: ['Difference of two squares', 'The formula', 'Completing the square', 'Graphing only'],
            correct: 0,
            explanation: 'The answer is “Difference of two squares”. It is a² − b².'
        },
        {
            question: 'Completing the square on x² − 2x − 4 = 0 gives:',
            options: ['(x − 2)² = 8', '(x + 1)² = 5', '(x − 1)² = 5', '(x − 1)² = 3'],
            correct: 2,
            explanation: 'The answer is “(x − 1)² = 5”. x² − 2x = 4; add 1.'
        },
        {
            question: 'If D = 0, the roots are:',
            options: ['two different', 'none', 'equal', 'negative only'],
            correct: 2,
            explanation: 'The answer is “equal”. One repeated root.'
        },
        {
            question: 'The next sub-strand is:',
            options: ['1.3 Variations', '2.1 Approximation', '3.1 Statistics', '1.2 Matrices'],
            correct: 3,
            explanation: 'The answer is “1.2 Matrices”. Matrices follow quadratic equations.'
        }
    ]
},
{
    name: '1.1 Summary: Quadratic Equations',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.1 Quadratic Equations</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 20 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🧾 Summary — Quadratic Equations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Any quadratic equation can be solved — by factorising, completing the square or the formula — and quadratics help us answer real questions about areas, profits and moving objects.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔑 Key Points</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A quadratic equation has the form ax² + bx + c = 0.</li>
    <li>Factorise and use the zero-product rule when possible.</li>
    <li>Complete the square by adding (b ÷ 2)² to both sides.</li>
    <li>The formula x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √(b² − 4ac)</span><span style="padding:0 4px;">2a</span></span> solves any quadratic with real roots.</li>
    <li>The discriminant b² − 4ac shows the number of real roots.</li>
    <li>Real problems: define, express, form, solve, interpret.</li>
    <li>Reject roots that do not make sense in context.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Factorising</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zero-product rule, special cases</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Get = 0 first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Completing the square</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add (b/2)² to both sides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Remember ±</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a, b, c and the discriminant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Brackets for negatives</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.4 Real-life problems</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gardens, profit, projectiles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpret roots</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x² + bx + (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)² = (x + <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">b</span><span style="padding:0 4px;">2</span></span>)²</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quadratic formula</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">x = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">−b ± √(b² − 4ac)</span><span style="padding:0 4px;">2a</span></span>
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discriminant</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">b² − 4ac</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Difference of squares</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a² − b² = (a + b)(a − b)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thrown ball (idealised)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">h = ut − 5t²</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">quadratic equation</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">standard form</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">root</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">factorise</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">zero-product rule</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">difference of two squares</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">perfect square</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">completing the square</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">quadratic formula</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">discriminant</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">model</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">profit</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Farmers, builders, traders and engineers use quadratic equations to size plots, set prices and predict motion.</div>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Matrices shows how to organise numbers in tables and calculate with them.</div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ solve quadratic equations by factorising</p>
    <p style="margin:6px 0;">✔️ solve by completing the square</p>
    <p style="margin:6px 0;">✔️ use the quadratic formula and discriminant</p>
    <p style="margin:6px 0;">✔️ form and solve real-life quadratic problems</p>
    <p style="margin:6px 0;">✔️ interpret and reject roots sensibly</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is that quadratic equations:',
            options: ['have no real uses', 'cannot be factorised', 'can always be solved and model real situations', 'only have one root'],
            correct: 2,
            explanation: 'The answer is “can always be solved and model real situations”. Several methods, many applications.'
        },
        {
            question: 'Which lesson covered the discriminant?',
            options: ['1.1.3', '1.1.1', '1.1.2', '1.1.4'],
            correct: 0,
            explanation: 'The answer is “1.1.3”. The quadratic formula lesson.'
        },
        {
            question: 'Which lesson covered thrown balls?',
            options: ['1.1.1', '1.1.2', '1.1.3', '1.1.4'],
            correct: 3,
            explanation: 'The answer is “1.1.4”. Real-life problems.'
        },
        {
            question: 'What comes next?',
            options: ['1.2 Matrices', '1.3 Variations', '1.4 Sequences', '2.1 Approximation'],
            correct: 0,
            explanation: 'The answer is “1.2 Matrices”. Matrices.'
        },
        {
            question: 'To complete the square on x² + bx, add:',
            options: ['b²', '(b ÷ 2)²', '2b', 'b ÷ 2'],
            correct: 1,
            explanation: 'The answer is “(b ÷ 2)²”. Half of b, squared.'
        }
    ]
},
{
    name: '1.2.1 Meaning, Order and Types of Matrices',
    type: 'lesson',
    duration: '80 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 1</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Meaning, Order and Types of Matrices</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define a matrix and its elements.</li>
    <li>State the order of a matrix.</li>
    <li>Identify row, column, square, zero and identity matrices.</li>
    <li>Write real-life information as a matrix.</li>
    <li>Recognise equal matrices.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Reading tables, rows and columns (Grade 10).</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How are matrices used to organise and process information?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A shopkeeper keeps a table showing how many packets of sugar, flour and soap are in two shops. Written in brackets, this table becomes a <strong>matrix</strong> — a rectangular arrangement of numbers that we can add, subtract and multiply to answer questions quickly.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 620 230" width="620" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="40" width="300" height="150" rx="10" fill="#0b1729" stroke="#38bdf8" stroke-width="2"/><text x="170" y="30" fill="#bae6fd" font-size="13" text-anchor="middle">Stock table</text><text x="110" y="70" fill="#fde68a" font-size="13" text-anchor="middle">Sugar</text><text x="190" y="70" fill="#fde68a" font-size="13" text-anchor="middle">Flour</text><text x="270" y="70" fill="#fde68a" font-size="13" text-anchor="middle">Soap</text><text x="50" y="110" fill="#fde68a" font-size="12">Shop A</text><text x="50" y="160" fill="#fde68a" font-size="12">Shop B</text><text x="110" y="110" fill="#e0f2fe" font-size="16" text-anchor="middle">20</text><text x="190" y="110" fill="#e0f2fe" font-size="16" text-anchor="middle">15</text><text x="270" y="110" fill="#e0f2fe" font-size="16" text-anchor="middle">30</text><text x="110" y="160" fill="#e0f2fe" font-size="16" text-anchor="middle">25</text><text x="190" y="160" fill="#e0f2fe" font-size="16" text-anchor="middle">10</text><text x="270" y="160" fill="#e0f2fe" font-size="16" text-anchor="middle">40</text><line x1="330" y1="115" x2="380" y2="115" stroke="#fde68a" stroke-width="2.5"/><polygon points="390,115 380,109 380,121" fill="#fde68a"/><path d="M420,70 q-14,45 0,90" fill="none" stroke="#7dd3fc" stroke-width="2.5"/><path d="M580,70 q14,45 0,90" fill="none" stroke="#7dd3fc" stroke-width="2.5"/><text x="450" y="105" fill="#e0f2fe" font-size="16" text-anchor="middle">20</text><text x="500" y="105" fill="#e0f2fe" font-size="16" text-anchor="middle">15</text><text x="550" y="105" fill="#e0f2fe" font-size="16" text-anchor="middle">30</text><text x="450" y="145" fill="#e0f2fe" font-size="16" text-anchor="middle">25</text><text x="500" y="145" fill="#e0f2fe" font-size="16" text-anchor="middle">10</text><text x="550" y="145" fill="#e0f2fe" font-size="16" text-anchor="middle">40</text><text x="500" y="200" fill="#86efac" font-size="13" text-anchor="middle">A 2 × 3 matrix</text><text x="170" y="215" fill="#cbd5e1" font-size="12" text-anchor="middle">2 rows (shops), 3 columns (items)</text>
    </svg>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Important Note</p>
    <div>In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“A matrix is a table without the labels. We describe its size by its <strong>order</strong>: number of <strong>rows</strong> first, then number of <strong>columns</strong>. Rows go across, columns go down. Each number is an <strong>element</strong>. The element in row 2, column 3 of the stock matrix is 40 — the number of soap bars in Shop B.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Matrix</p>
    <div>
    <p style="margin:0;">A rectangular arrangement of numbers in rows and columns.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>
    </p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Element</p>
    <div>
    <p style="margin:0;">Each number in a matrix.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In the stock matrix, 15 is an element</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Row</p>
    <div>
    <p style="margin:0;">A horizontal line of elements.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (20 15 30)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Column</p>
    <div>
    <p style="margin:0;">A vertical line of elements.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Sugar: 20 and 25</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Order</p>
    <div>
    <p style="margin:0;">Number of rows × number of columns.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2 × 3</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Square matrix</p>
    <div>
    <p style="margin:0;">Same number of rows and columns.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2 × 2</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Identity matrix</p>
    <div>
    <p style="margin:0;">A square matrix with 1s on the leading diagonal and 0s elsewhere.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>
    </p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Count rows, then columns</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">20</span><span style="display:inline-block;min-width:30px;text-align:center;">15</span><span style="display:inline-block;min-width:30px;text-align:center;">30</span><br><span style="display:inline-block;min-width:30px;text-align:center;">25</span><span style="display:inline-block;min-width:30px;text-align:center;">10</span><span style="display:inline-block;min-width:30px;text-align:center;">40</span></span> has 2 rows and 3 columns, so its order is 2 × 3.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Locate elements</p>
    <p>The element a<sub>23</sub> is in row 2, column 3: here it is 40.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Identify types</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 640 170" width="640" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="10" y="30" width="116" height="110" rx="10" fill="#0b1729" stroke="#38bdf8" stroke-width="2"/><text x="68" y="58" fill="#fde68a" font-size="13" text-anchor="middle">Row</text><text x="68" y="92" fill="#e0f2fe" font-size="13" text-anchor="middle">(3  5  1)</text><text x="68" y="122" fill="#cbd5e1" font-size="11" text-anchor="middle">1 × 3</text><rect x="136" y="30" width="116" height="110" rx="10" fill="#0b1729" stroke="#38bdf8" stroke-width="2"/><text x="194" y="58" fill="#fde68a" font-size="13" text-anchor="middle">Column</text><text x="194" y="92" fill="#e0f2fe" font-size="13" text-anchor="middle">(4 ; 2)</text><text x="194" y="122" fill="#cbd5e1" font-size="11" text-anchor="middle">2 × 1</text><rect x="262" y="30" width="116" height="110" rx="10" fill="#0b1729" stroke="#38bdf8" stroke-width="2"/><text x="320" y="58" fill="#fde68a" font-size="13" text-anchor="middle">Square</text><text x="320" y="92" fill="#e0f2fe" font-size="13" text-anchor="middle">(1 2 ; 3 4)</text><text x="320" y="122" fill="#cbd5e1" font-size="11" text-anchor="middle">2 × 2</text><rect x="388" y="30" width="116" height="110" rx="10" fill="#0b1729" stroke="#38bdf8" stroke-width="2"/><text x="446" y="58" fill="#fde68a" font-size="13" text-anchor="middle">Zero</text><text x="446" y="92" fill="#e0f2fe" font-size="13" text-anchor="middle">(0 0 ; 0 0)</text><text x="446" y="122" fill="#cbd5e1" font-size="11" text-anchor="middle">all zeros</text><rect x="514" y="30" width="116" height="110" rx="10" fill="#0b1729" stroke="#38bdf8" stroke-width="2"/><text x="572" y="58" fill="#fde68a" font-size="13" text-anchor="middle">Identity</text><text x="572" y="92" fill="#e0f2fe" font-size="13" text-anchor="middle">(1 0 ; 0 1)</text><text x="572" y="122" fill="#cbd5e1" font-size="11" text-anchor="middle">1s on diagonal</text><text x="320" y="18" fill="#bae6fd" font-size="12" text-anchor="middle">Types of matrices (rows separated by ;)</text>
    </svg>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Equal matrices</p>
    <p>Two matrices are equal if they have the same order and all corresponding elements are equal. If <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">x</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">y</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">7</span></span> then x = 5 and y = 7.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: Write data as a matrix</p>
    <p>Decide what the rows and columns stand for, then copy the numbers in order without the labels.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>The labels (shops, items) are kept in your head or written beside the matrix — the matrix itself holds only the numbers.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Order of a matrix</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Order = rows × columns</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> A matrix with m rows and n columns has order m × n.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Describing any matrix.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Writing columns × rows.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “RC” like a Roman Catholic church: Rows then Columns.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Finding the order <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> State the order of <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> and <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">9</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Count rows then columns.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> First: 1 row, 4 columns.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Second: 3 rows, 1 column.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 1 × 4 (row matrix) and 3 × 1 (column matrix)</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Locating an element <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> In <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">9</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>, state the element in row 1, column 3.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Go to row 1, then across to column 3.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 1: 6 2 9</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Third element is 9.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 9</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Writing data as a matrix <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A farmer harvested 40 bags of maize and 15 of beans in season 1, and 55 of maize and 20 of beans in season 2. Write a matrix with seasons as rows.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Rows: seasons; columns: crops.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 1: 40, 15</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Row 2: 55, 20</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">40</span><span style="display:inline-block;min-width:30px;text-align:center;">15</span><br><span style="display:inline-block;min-width:30px;text-align:center;">55</span><span style="display:inline-block;min-width:30px;text-align:center;">20</span></span>, order 2 × 2</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Equal matrices <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find x and y if <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2x</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">y + 1</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">8</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Corresponding elements are equal.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2x = 8 → x = 4</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> y + 1 = 6 → y = 5</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 4, y = 5</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Identifying types <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Name the type of <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Square, with 1s on the diagonal.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3 rows and 3 columns → square.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 1s on the leading diagonal, 0s elsewhere.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> A 3 × 3 identity matrix</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A school sold 120 exercise books and 80 pens in Term 1, and 150 books and 95 pens in Term 2. Write a matrix and state its order.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Rows represent … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Row 1: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Row 2: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Order: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Rows are terms: <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">120</span><span style="display:inline-block;min-width:30px;text-align:center;">80</span><br><span style="display:inline-block;min-width:30px;text-align:center;">150</span><span style="display:inline-block;min-width:30px;text-align:center;">95</span></span>; order 2 × 2.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> If <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">a</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">b − 2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">9</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span>, find a and b.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>a = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>b − 2 = … so b = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 9, b = 5.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the order of <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span></span>.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 × 2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> A matrix has 4 rows and 2 columns. What is its order?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4 × 2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Write the 2 × 2 identity matrix.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>
    </div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> In <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span></span>, find the element in row 2, column 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find p and q if <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">p + 3</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">3q</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">10</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">12</span></span>.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">p = 7, q = 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> A clinic saw 30 men, 45 women and 60 children on Monday and 25, 50 and 70 on Tuesday. Write a matrix with days as rows.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">30</span><span style="display:inline-block;min-width:30px;text-align:center;">45</span><span style="display:inline-block;min-width:30px;text-align:center;">60</span><br><span style="display:inline-block;min-width:30px;text-align:center;">25</span><span style="display:inline-block;min-width:30px;text-align:center;">50</span><span style="display:inline-block;min-width:30px;text-align:center;">70</span></span> (2 × 3)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A matatu sacco recorded passengers on routes A and B for morning and evening: A 120 and 95, B 80 and 110. Write the matrix with routes as rows.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">120</span><span style="display:inline-block;min-width:30px;text-align:center;">95</span><br><span style="display:inline-block;min-width:30px;text-align:center;">80</span><span style="display:inline-block;min-width:30px;text-align:center;">110</span></span>
    </div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏪 Shops</p>
    <div>Stock lists by branch and item.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏫 Schools</p>
    <div>Marks by learner and subject.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚌 Transport</p>
    <div>Passengers by route and time.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌾 Farming</p>
    <div>Harvests by season and crop.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organising real data into rows and columns.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Agreeing with a partner what rows and columns represent.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking matrix calculations in a spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social cohesion</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Order: count across the top for columns, down the side for rows.</li>
    <li>A square matrix has the same number of rows and columns.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing order as columns × rows</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order is rows first</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rows × columns</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Including labels in the matrix</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A matrix holds only numbers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep labels outside</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calling any square matrix an identity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identity needs 1s on the diagonal and 0s elsewhere</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check every element</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Say what the rows and columns represent before writing a matrix.</li>
    <li>Use the same order of items in every row.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Order = rows × columns.</li>
    <li>Equal matrices: same order, same elements.</li>
    <li>Identity: 1s on the diagonal.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the order in the form m × n.</li>
    <li>Show how you found unknowns in equal matrices.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Order of a matrix with 3 rows and 4 columns?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 × 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Is <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> an identity matrix?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No — the diagonal elements are 2, not 1.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is a 1 × 3 matrix called?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">A row matrix</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Where in my daily life do I see data in rows and columns?</li>
    <li>Do I always state rows before columns?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 18. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A matrix is a rectangular arrangement of numbers.</li>
    <li>Its order is rows × columns.</li>
    <li>Types include row, column, square, zero and identity matrices.</li>
    <li>Equal matrices have the same order and equal corresponding elements.</li>
    <li>Real data such as stock and marks can be written as matrices.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">19. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 × 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Row matrix</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 5 1)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Column matrix</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(4 ; 2)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Square matrix</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1 2 ; 3 4)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1 0 ; 0 1)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Matrix</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rectangular array of numbers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Element</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An entry.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Order</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rows × columns.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Identity matrix</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1s on the diagonal, 0s elsewhere.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) State the order of <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span>. (b) Name the element in row 2, column 2. (c) Write a matrix equal to it. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 2 × 3 [1]; (b) 5 [1]; (c) the same matrix [1]</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Find x and y if <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">x + y</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">x − y</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">10</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span>. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x + y = 10, x − y = 2 [1]; x = 6 [1]; y = 4 [1]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 23. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write your marks in three subjects for two tests as a matrix and state its order.</li>
    <li>Give one example each of a row, column, square and identity matrix.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The order of a matrix with 2 rows and 3 columns is:',
            options: ['2 × 3', '3 × 2', '6', '5'],
            correct: 0,
            explanation: 'The answer is “2 × 3”. Order is rows × columns.'
        },
        {
            question: 'A matrix with only one row is a:',
            options: ['column matrix', 'square matrix', 'row matrix', 'zero matrix'],
            correct: 2,
            explanation: 'The answer is “row matrix”. It has one horizontal line of elements.'
        },
        {
            question: 'Which is a square matrix?',
            options: ['(1 2 ; 3 4)', '(1 2 3)', '(1 ; 2)', '(1 2 3 ; 4 5 6)'],
            correct: 0,
            explanation: 'It has 2 rows and 2 columns. In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.'
        },
        {
            question: 'The 2 × 2 identity matrix is:',
            options: ['(1 1 ; 1 1)', '(0 0 ; 0 0)', '(1 0 ; 0 1)', '(0 1 ; 1 0)'],
            correct: 2,
            explanation: 'It has 1s on the leading diagonal and 0s elsewhere.'
        },
        {
            question: 'In (6 2 9 ; 4 0 5), the element in row 2, column 3 is:',
            options: ['9', '0', '4', '5'],
            correct: 3,
            explanation: 'The answer is “5”. Row 2 is 4 0 5; the third element is 5.'
        },
        {
            question: 'If (2x 5 ; 3 6) = (8 5 ; 3 6), then x is:',
            options: ['8', '4', '16', '2'],
            correct: 1,
            explanation: 'The answer is “4”. 2x = 8 gives x = 4.'
        },
        {
            question: 'A matrix whose elements are all zero is a:',
            options: ['identity matrix', 'zero matrix', 'row matrix', 'column matrix'],
            correct: 1,
            explanation: 'The answer is “zero matrix”. All entries are 0.'
        },
        {
            question: 'Each number in a matrix is called an:',
            options: ['order', 'identity', 'index', 'element'],
            correct: 3,
            explanation: 'The answer is “element”. Elements are the entries of a matrix.'
        }
    ]
},
{
    name: '1.2.2 Addition and Subtraction of Matrices',
    type: 'lesson',
    duration: '80 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 2</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Addition and Subtraction of Matrices</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State when two matrices can be added or subtracted.</li>
    <li>Add and subtract matrices.</li>
    <li>Solve simple matrix equations involving addition and subtraction.</li>
    <li>Apply addition and subtraction to real situations.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lesson 1: order and elements of matrices.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How are matrices used to organise and process information?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A shop has stock at the start of the week and receives a delivery. To find the new stock, we add the two stock matrices. To find what was sold, we subtract the closing stock from the opening stock.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Important Note</p>
    <div>In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“You can only add or subtract matrices of the <strong>same order</strong>. Then you add or subtract <strong>corresponding elements</strong> — the ones in the same position. The answer has the same order.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Corresponding elements</p>
    <div>
    <p style="margin:0;">Elements in the same position in two matrices.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Row 1, column 2 of each</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Compatible for addition</p>
    <div>
    <p style="margin:0;">Matrices of the same order.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Two 2 × 3 matrices</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Matrix equation</p>
    <div>
    <p style="margin:0;">An equation where the unknown is a matrix or its elements.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: A + X = B</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Zero matrix</p>
    <div>
    <p style="margin:0;">Adding it leaves a matrix unchanged.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: A + O = A</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Check the orders</p>
    <p>Both must have the same order. A 2 × 3 matrix cannot be added to a 2 × 2 matrix.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Add corresponding elements</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span> + <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2 + 4</span><span style="display:inline-block;min-width:30px;text-align:center;">5 + 1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1 + 6</span><span style="display:inline-block;min-width:30px;text-align:center;">3 + 2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Subtract corresponding elements</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">9</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span></span> − <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Solve matrix equations</p>
    <p>If A + X = B, then X = B − A.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Picture two stock sheets laid on top of each other: add the numbers that sit in the same box.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>Addition is commutative: A + B = B + A. Subtraction is not: A − B is usually different from B − A.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Addition</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">A + B: add corresponding elements</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Only for matrices of the same order.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Combining quantities.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Adding matrices of different orders.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Subtraction</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">A − B: subtract corresponding elements</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Order of subtraction matters.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding differences, e.g. items sold.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Adding <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> + <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Add position by position.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3 + 2 = 5, 1 + 5 = 6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Row 1.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 0 + 7 = 7, 4 + 1 = 5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Row 2.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Subtracting with negatives <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span> − <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Subtract each element.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 5 − 3 = 2, 2 − 6 = −4, 0 − 4 = −4</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">−4</span><span style="display:inline-block;min-width:30px;text-align:center;">−4</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Cannot be added <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Can <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> and <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> be added?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Compare orders.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Orders are 1 × 2 and 2 × 1.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> They differ.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> No — the orders are different.</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Matrix equation <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find X if X + <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> X = B − A.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 7 − 2 = 5, 5 − 3 = 2</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 6 − 1 = 5, 4 − 4 = 0</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> X = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Stock after delivery <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Opening stock in two shops (rows) of sugar and flour (columns) is <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">20</span><span style="display:inline-block;min-width:30px;text-align:center;">15</span><br><span style="display:inline-block;min-width:30px;text-align:center;">25</span><span style="display:inline-block;min-width:30px;text-align:center;">10</span></span>. A delivery of <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">30</span><span style="display:inline-block;min-width:30px;text-align:center;">20</span><br><span style="display:inline-block;min-width:30px;text-align:center;">15</span><span style="display:inline-block;min-width:30px;text-align:center;">25</span></span> arrives. Find the new stock.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Add the matrices.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 20 + 30 = 50, 15 + 20 = 35</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Shop A.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 25 + 15 = 40, 10 + 25 = 35</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Shop B.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">50</span><span style="display:inline-block;min-width:30px;text-align:center;">35</span><br><span style="display:inline-block;min-width:30px;text-align:center;">40</span><span style="display:inline-block;min-width:30px;text-align:center;">35</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Items sold <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> New stock is <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">50</span><span style="display:inline-block;min-width:30px;text-align:center;">35</span><br><span style="display:inline-block;min-width:30px;text-align:center;">40</span><span style="display:inline-block;min-width:30px;text-align:center;">35</span></span> and closing stock is <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">12</span><span style="display:inline-block;min-width:30px;text-align:center;">9</span><br><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">14</span></span>. How many of each item did each shop sell?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Sold = new stock − closing stock.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 50 − 12 = 38, 35 − 9 = 26</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Shop A.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 40 − 6 = 34, 35 − 14 = 21</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Shop B.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">38</span><span style="display:inline-block;min-width:30px;text-align:center;">26</span><br><span style="display:inline-block;min-width:30px;text-align:center;">34</span><span style="display:inline-block;min-width:30px;text-align:center;">21</span></span>
    </div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Subtracting new stock from closing stock and getting negatives.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span></span> − <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Row 1: 6 − 2 = …, 1 − 4 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Row 2: 3 − 5 = …, 8 − 1 = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">−3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">−2</span><span style="display:inline-block;min-width:30px;text-align:center;">7</span></span>
    </div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find a and b if <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">a</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span> + <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">b</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">10</span><span style="display:inline-block;min-width:30px;text-align:center;">9</span></span>.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>a + 4 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>3 + b = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a = 6, b = 6</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> + <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span><br><span style="display:inline-block;min-width:30px;text-align:center;">10</span><span style="display:inline-block;min-width:30px;text-align:center;">12</span></span>
    </div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">9</span><span style="display:inline-block;min-width:30px;text-align:center;">7</span></span> − <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>
    </div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Can a 2 × 3 matrix be added to a 3 × 2 matrix?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No — different orders</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">−1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> − <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">−2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">−2</span><span style="display:inline-block;min-width:30px;text-align:center;">−4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>
    </div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find X: X − <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">X = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>
    </div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Two classes scored (12 15 ; 10 18) goals in two terms and (8 10 ; 14 9) in the next two. Find the totals.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(20 25 ; 24 27)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A kiosk had (40 25 30) items and sold (28 19 22). Find what remains.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(12 6 8)</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏪 Retail</p>
    <div>Updating stock after deliveries and sales.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏫 School</p>
    <div>Adding marks from two tests.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏦 Finance</p>
    <div>Combining monthly income and expenses.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌾 Farming</p>
    <div>Total harvest over two seasons.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deciding when matrices can be added and interpreting the result.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Combining stock data from different shops in groups.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking matrix calculations in a spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social cohesion</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Mental Strategies</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧠 Mental Strategy</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check orders first — it takes one second.</li>
    <li>Watch signs when subtracting negatives: 2 − (−3) = 5.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">12. Common Mistakes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">❌ Mistake</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">🤔 Why it is wrong</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">✅ Correct way</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding different orders</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">There are no matching positions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check orders first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtracting in the wrong order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A − B ≠ B − A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep the order given</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sign errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 − 4 = −4, not 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Write each subtraction</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">13. Teacher Tips</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Teacher Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Write the working inside the brackets for the first few questions.</li>
    <li>Label what the result means in real problems.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">14. Remember Box</h3>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Same order only.</li>
    <li>Add or subtract corresponding elements.</li>
    <li>A + X = B gives X = B − A.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">15. Exam Tips</h3>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State “not possible” with a reason when orders differ.</li>
    <li>Interpret real-life results in words.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">16. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> (3 4) + (1 6) = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(4 10)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> (5 ; 2) − (1 ; 7) = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(4 ; −5)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Is A + B always equal to B + A?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes, when the addition is possible</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Do I check orders before adding?</li>
    <li>Where could adding matrices save time at home or school?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 18. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Matrices of the same order can be added or subtracted.</li>
    <li>Add or subtract corresponding elements.</li>
    <li>The result has the same order.</li>
    <li>Matrix equations: X = B − A.</li>
    <li>Used for stock, marks and totals.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">19. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Operation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2 5) + (4 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(6 6)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(9 4) − (3 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(6 3)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not possible</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1 2) + (1 ; 2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Orders differ</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Glossary</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Corresponding elements</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same position.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Compatible</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same order for addition.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Matrix equation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equation with matrices.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Zero matrix</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All elements zero.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">21. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 8-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Given A = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> and B = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span>, find (a) A + B (b) A − B (c) X if A + X = B. <span style="color:#fde68a;font-size:13px;">(6 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) (4 6 ; 3 5) [2]; (b) (2 −2 ; −1 5) [2]; (c) X = B − A = (−2 2 ; 1 −5) [2]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 23. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Add your marks from two tests in three subjects using matrices.</li>
    <li>A shop had (30 45 20) items and received (15 10 25). It sold (35 40 30). Find closing stock.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '(3 1 ; 0 4) + (2 5 ; 7 1) equals:',
            options: ['(6 6 ; 7 5)', '(5 6 ; 7 4)', '(1 −4 ; −7 3)', '(5 6 ; 7 5)'],
            correct: 3,
            explanation: 'Add corresponding elements. In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.'
        },
        {
            question: 'Two matrices can be added only if they:',
            options: ['are square', 'have the same first element', 'have the same order', 'are row matrices'],
            correct: 2,
            explanation: 'Each element needs a partner in the same position.'
        },
        {
            question: '(5 2 0) − (3 6 4) equals:',
            options: ['(2 4 4)', '(2 −4 −4)', '(8 8 4)', '(−2 4 4)'],
            correct: 1,
            explanation: 'The answer is “(2 −4 −4)”. 5 − 3 = 2, 2 − 6 = −4, 0 − 4 = −4.'
        },
        {
            question: 'If X + A = B, then X equals:',
            options: ['A + B', 'A − B', 'B − A', 'AB'],
            correct: 2,
            explanation: 'The answer is “B − A”. Subtract A from both sides.'
        },
        {
            question: 'A 2 × 3 matrix plus a 2 × 3 matrix gives a matrix of order:',
            options: ['2 × 3', '3 × 2', '4 × 6', '2 × 6'],
            correct: 0,
            explanation: 'The answer is “2 × 3”. The order stays the same.'
        },
        {
            question: 'Can (1 2) and (1 ; 2) be added?',
            options: ['Yes', 'No, the orders differ', 'Only if multiplied first', 'Only in a spreadsheet'],
            correct: 1,
            explanation: 'The answer is “No, the orders differ”. Orders are 1 × 2 and 2 × 1.'
        },
        {
            question: 'Items sold = opening stock − closing stock. If opening is (40 25) and closing (12 5), sold is:',
            options: ['(28 20)', '(52 30)', '(−28 −20)', '(12 5)'],
            correct: 0,
            explanation: 'The answer is “(28 20)”. 40 − 12 = 28, 25 − 5 = 20.'
        },
        {
            question: 'Adding a zero matrix to A gives:',
            options: ['zero', '2A', 'the identity', 'A'],
            correct: 3,
            explanation: 'The answer is “A”. Adding zeros changes nothing.'
        }
    ]
},
{
    name: '1.2.3 Scalar Multiplication and Multiplication of Matrices',
    type: 'lesson',
    duration: '80 min',
    exercises: 9,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 3</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Scalar Multiplication and Multiplication of Matrices</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiply a matrix by a scalar.</li>
    <li>State when two matrices can be multiplied and the order of the product.</li>
    <li>Multiply a row matrix by a column matrix.</li>
    <li>Multiply 2 × 2 matrices and a 2 × 2 by a 2 × 1 matrix.</li>
    <li>Use the identity matrix in multiplication.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 1 and 2; multiplication and addition of integers.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How are matrices used to organise and process information?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>If every price in a shop doubles, we multiply the price matrix by 2 — that is <strong>scalar multiplication</strong>. To find the total cost of a shopping list, we multiply a <strong>quantity row</strong> by a <strong>price column</strong> — that is <strong>matrix multiplication</strong>.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 620 200" width="620" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="60" width="170" height="40" rx="8" fill="#14532d" stroke="#22c55e" stroke-width="2"/><text x="105" y="86" fill="#e0f2fe" font-size="16" text-anchor="middle">2      3      1</text><text x="105" y="50" fill="#86efac" font-size="12" text-anchor="middle">Row: quantities</text><text x="215" y="86" fill="#fde68a" font-size="20" text-anchor="middle">×</text><rect x="240" y="20" width="60" height="140" rx="8" fill="#1e3a5f" stroke="#38bdf8" stroke-width="2"/><text x="270" y="50" fill="#e0f2fe" font-size="16" text-anchor="middle">50</text><text x="270" y="95" fill="#e0f2fe" font-size="16" text-anchor="middle">80</text><text x="270" y="140" fill="#e0f2fe" font-size="16" text-anchor="middle">30</text><text x="270" y="182" fill="#7dd3fc" font-size="12" text-anchor="middle">Column: prices</text><text x="325" y="86" fill="#fde68a" font-size="20" text-anchor="middle">=</text><text x="350" y="72" fill="#e0f2fe" font-size="14">2×50 + 3×80 + 1×30</text><text x="350" y="100" fill="#e0f2fe" font-size="14">= 100 + 240 + 30</text><text x="350" y="128" fill="#86efac" font-size="16">= 370</text><text x="470" y="160" fill="#cbd5e1" font-size="12" text-anchor="middle">Multiply in pairs, then add</text>
    </svg>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Important Note</p>
    <div>In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“For scalar multiplication, multiply every element by the number. For matrix multiplication, use <strong>row × column</strong>: multiply the elements of a row of the first matrix by the matching elements of a column of the second, and add. This only works if the number of <strong>columns of the first</strong> equals the number of <strong>rows of the second</strong>. The product has the rows of the first and the columns of the second.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Scalar</p>
    <div>
    <p style="margin:0;">An ordinary number that multiplies a matrix.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3 in 3A</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Scalar multiplication</p>
    <div>
    <p style="margin:0;">Multiplying every element by a scalar.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2 × (1 4) = (2 8)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Compatible for multiplication</p>
    <div>
    <p style="margin:0;">Columns of the first = rows of the second.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (1 × 3) × (3 × 1)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Product</p>
    <div>
    <p style="margin:0;">The result of multiplying.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: AB</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Identity matrix</p>
    <div>
    <p style="margin:0;">AI = IA = A.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (1 0 ; 0 1)</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Scalar multiplication</p>
    <p>3 × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">15</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">12</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Check compatibility</p>
    <p>(m × n) × (n × p) gives an m × p product. A 2 × 3 by a 3 × 1 gives 2 × 1. A 2 × 3 by a 2 × 3 is not possible.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Row × column</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">50</span><br><span style="display:inline-block;min-width:30px;text-align:center;">80</span><br><span style="display:inline-block;min-width:30px;text-align:center;">30</span></span> = (2×50 + 3×80 + 1×30) = (370)</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: 2 × 2 by 2 × 1</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2×5 + 1×2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3×5 + 4×2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">12</span><br><span style="display:inline-block;min-width:30px;text-align:center;">23</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 5: 2 × 2 by 2 × 2</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">6</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1×5+2×7</span><span style="display:inline-block;min-width:30px;text-align:center;">1×6+2×8</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3×5+4×7</span><span style="display:inline-block;min-width:30px;text-align:center;">3×6+4×8</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">19</span><span style="display:inline-block;min-width:30px;text-align:center;">22</span><br><span style="display:inline-block;min-width:30px;text-align:center;">43</span><span style="display:inline-block;min-width:30px;text-align:center;">50</span></span>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 6: Identity</p>
    <p><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>
    </p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>Run your left finger along a row and your right finger down a column, multiplying pairs and adding.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Scalar multiplication</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">kA: multiply every element by k</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Changes every value by the same factor.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Price increases, doubling quantities.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Compatibility and order</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(m × n)(n × p) = (m × p)</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Inner numbers must match; outer numbers give the order of the product.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Before every matrix multiplication.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Inner match, outer gives the answer size.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Row × column</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(a b)(c ; d) = (ac + bd)</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Multiply pairs and add.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Each element of a product.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Multiplying corresponding elements as in addition.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Scalar multiple <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 4 × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">−1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply each element by 4.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 4 × 3 = 12, 4 × (−1) = −4</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 4 × 0 = 0, 4 × 2 = 8</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">12</span><span style="display:inline-block;min-width:30px;text-align:center;">−4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Compatibility <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A is 2 × 3 and B is 3 × 4. Can AB be found? What is its order? Can BA be found?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Inner numbers must match.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> AB: (2 × 3)(3 × 4) → inner 3 = 3 ✓, order 2 × 4</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> BA: (3 × 4)(2 × 3) → inner 4 ≠ 2 ✗</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> AB is 2 × 4; BA is not possible.</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Row by column <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span><br><span style="display:inline-block;min-width:30px;text-align:center;">6</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply pairs and add.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 1×4 + 2×5 + 3×6</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 4 + 10 + 18 = 32</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (32)</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: 2 × 2 by 2 × 1 <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Each row times the column.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 1: 3×2 + 2×5 = 16</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Row 2: 1×2 + 4×5 = 22</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">16</span><br><span style="display:inline-block;min-width:30px;text-align:center;">22</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: 2 × 2 by 2 × 2 <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Four row-by-column products.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 1 × col 1: 8 + 2 = 10; row 1 × col 2: 2 + 5 = 7</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Row 2 × col 1: 0 + 6 = 6; row 2 × col 2: 0 + 15 = 15</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">10</span><span style="display:inline-block;min-width:30px;text-align:center;">7</span><br><span style="display:inline-block;min-width:30px;text-align:center;">6</span><span style="display:inline-block;min-width:30px;text-align:center;">15</span></span>
    </div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Multiplying corresponding elements to get (8 1 ; 0 15).</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 6: Order matters <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> With A = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">0</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span> and B = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span>, find AB and BA.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Compute both and compare.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> AB = (1×3+2×1, 0+4 ; 1, 2) = (5 4 ; 1 2)</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> BA = (3, 6 ; 1, 2+2) = (3 6 ; 1 4)</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> AB = (5 4 ; 1 2), BA = (3 6 ; 1 4); AB ≠ BA</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>2 × 3 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>5 × 4 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Sum = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 + 20 = 26, so (26)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Row 1 × col 1 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Row 1 × col 2 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Row 2 × col 1 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Row 2 × col 2 = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">13</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span>
    </div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> 5 × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">5</span><span style="display:inline-block;min-width:30px;text-align:center;">10</span><br><span style="display:inline-block;min-width:30px;text-align:center;">15</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span>
    </div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(10)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A is 1 × 3 and B is 3 × 1. Order of AB?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1 × 1</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span></span>
    </div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">8</span><br><span style="display:inline-block;min-width:30px;text-align:center;">7</span><span style="display:inline-block;min-width:30px;text-align:center;">7</span></span>
    </div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Can a 2 × 3 matrix be multiplied by a 2 × 3 matrix?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No — 3 columns but 2 rows</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Show that <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> × I = the same matrix, where I is the 2 × 2 identity.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Row-by-column gives (3 1 ; 2 4)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Find x if <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">x</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><br><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> = (19).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3x + 10 = 19 → x = 3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A customer buys 3 kg sugar, 2 packets of flour and 4 bars of soap at KSh 180, KSh 150 and KSh 60. Use matrices to find the total cost.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(3 2 4)(180 ; 150 ; 60) = 540 + 300 + 240 = KSh 1 080</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🛒 Shopping</p>
    <div>Quantity row × price column gives the bill.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💰 Pricing</p>
    <div>Scalar multiplication applies a price rise.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏭 Production</p>
    <div>Materials per product × products made.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📊 Data</p>
    <div>Computers and spreadsheets multiply large matrices.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking compatibility and multiplying rows by columns.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the row-by-column rule to a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking matrix calculations in a spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social cohesion</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Spreadsheets use MMULT to multiply matrices — useful for checking.</li>
    <li>Check one element by hand before trusting a calculator result.</li>
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
    <li>Inner numbers match? Then the outer numbers give the order.</li>
    <li>Row × column: multiply pairs, add.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplying corresponding elements</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">That is not matrix multiplication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use row × column</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Assuming AB = BA</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matrix multiplication is usually not commutative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keep the order given</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplying incompatible matrices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The rows and columns do not match</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check inner numbers first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar applied to one element only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every element is multiplied</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply all elements</td>
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
    <li>Write the orders under each matrix before multiplying.</li>
    <li>Draw arrows along the row and down the column.</li>
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
    <li>kA: multiply every element.</li>
    <li>(m × n)(n × p) = m × p.</li>
    <li>Row × column.</li>
    <li>AI = IA = A.</li>
    <li>AB is usually not BA.</li>
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
    <li>State the order of the product.</li>
    <li>Show the row-by-column sums for at least one element.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> 2 × (3 1) = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(6 2)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> (1 2)(3 ; 4) = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(11)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Order of (2 × 2)(2 × 1)?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2 × 1</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain row × column in my own words?</li>
    <li>Do I check compatibility every time?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Scalar multiplication multiplies every element.</li>
    <li>Matrices can be multiplied if columns of the first equal rows of the second.</li>
    <li>Each element of the product is a row × column sum.</li>
    <li>The product of (m × n) and (n × p) is m × p.</li>
    <li>The identity matrix leaves a matrix unchanged; AB usually differs from BA.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Product</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Order</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Possible?</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1 × 3)(3 × 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 × 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2 × 2)(2 × 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 × 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2 × 3)(2 × 3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">—</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(3 × 1)(1 × 3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 × 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Yes</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Scalar</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An ordinary number.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Compatible</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Columns of first = rows of second.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Product</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Result of multiplication.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Identity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaves a matrix unchanged.</td>
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
    <p style="margin:0;"><strong>1.</strong> A = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span></span>, B = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span></span>. Find (a) 3A (b) AB (c) BA. (d) Comment. <span style="color:#fde68a;font-size:13px;">(7 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) (6 3 ; 9 0) [1]; (b) (4 9 ; 3 12) [2]; (c) (14 1 ; 7 2) [2]; (d) AB ≠ BA [2]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Find 3 × (2 −1 ; 4 0).</li>
    <li>Find (2 3 ; 1 5) × (4 ; 1).</li>
    <li>Write and calculate a shopping bill for four items using matrices.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '3 × (2 5) equals:',
            options: ['(5 8)', '(6 5)', '(6 15)', '(2 15)'],
            correct: 2,
            explanation: 'The answer is “(6 15)”. Multiply every element by 3.'
        },
        {
            question: 'A 2 × 3 matrix can be multiplied by a matrix of order:',
            options: ['2 × 3', '3 × 2', '2 × 2', '1 × 2'],
            correct: 1,
            explanation: 'Columns of the first (3) must equal rows of the second (3).'
        },
        {
            question: 'The order of (2 × 3) × (3 × 4) is:',
            options: ['2 × 4', '3 × 3', '4 × 2', '2 × 3'],
            correct: 0,
            explanation: 'The answer is “2 × 4”. Outer numbers give the order.'
        },
        {
            question: '(1 2 3) × (4 ; 5 ; 6) equals:',
            options: ['(32)', '(4 10 18)', '(15)', '(6 15)'],
            correct: 0,
            explanation: '4 + 10 + 18 = 32. In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.'
        },
        {
            question: '(3 2 ; 1 4) × (2 ; 5) equals:',
            options: ['(6 ; 20)', '(5 ; 9)', '(16 ; 22)', '(16 ; 20)'],
            correct: 2,
            explanation: 'The answer is “(16 ; 22)”. Row 1: 6 + 10 = 16; row 2: 2 + 20 = 22.'
        },
        {
            question: 'For most matrices A and B:',
            options: ['AB = BA', 'AB ≠ BA', 'AB = 0', 'AB = A + B'],
            correct: 1,
            explanation: 'Matrix multiplication is not usually commutative.'
        },
        {
            question: 'AI, where I is the identity, equals:',
            options: ['I', '0', '2A', 'A'],
            correct: 3,
            explanation: 'The answer is “A”. The identity leaves a matrix unchanged.'
        },
        {
            question: '(2 1 ; 0 3) × (4 1 ; 2 5) equals:',
            options: ['(8 1 ; 0 15)', '(6 2 ; 2 8)', '(10 6 ; 7 15)', '(10 7 ; 6 15)'],
            correct: 3,
            explanation: 'The answer is “(10 7 ; 6 15)”. Use row × column for each element.'
        }
    ]
},
{
    name: '1.2.4 Applications of Matrices in Real Life',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 4</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min (two lessons of 40 min)</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Applications of Matrices in Real Life</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Set up matrices from real-life information.</li>
    <li>Use matrix multiplication to find totals such as bills, income and costs.</li>
    <li>Use addition, subtraction and scalar multiplication in practical problems.</li>
    <li>Interpret matrix results in context.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 1–3.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How are matrices used to organise and process information?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Matrices make repeated calculations fast. A shop can find the bills of many customers at once; a farmer can find the cost of inputs for several plots; a school can calculate the total cost of uniforms for different classes. The key is to arrange the matrices so that the multiplication makes sense.</p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Important Note</p>
    <div>In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Ask: what must be multiplied by what? Quantities times prices gives cost. Put the quantities in rows (one row per customer) and the prices in a column (one row per item, in the same order as the columns of the quantity matrix). The product gives one total per customer.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quantity matrix</p>
    <div>
    <p style="margin:0;">Numbers of items, one row per customer or shop.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (3 2 ; 1 5)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Price matrix</p>
    <div>
    <p style="margin:0;">Prices of items arranged as a column.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: (50 ; 20)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Total cost</p>
    <div>
    <p style="margin:0;">Quantity × price summed over items.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: KSh 190</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Interpret</p>
    <div>
    <p style="margin:0;">Explain what each element of the result means.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: First element = customer A’s bill</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Identify what is multiplied</p>
    <p>Cost = quantity × price. Income = items sold × price. Inputs = plots × inputs per plot.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Arrange the matrices</p>
    <p>Columns of the first must match rows of the second, with items in the same order.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Multiply</p>
    <p>Use row × column.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Interpret</p>
    <p>Say what each element of the answer represents, with units.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Customers A and B buy sugar and bread:</p>
    <p style="color:#bfdbfe;font-size:19px;text-align:center;margin:8px 0;"><span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">180</span><br><span style="display:inline-block;min-width:30px;text-align:center;">70</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">540 + 140</span><br><span style="display:inline-block;min-width:30px;text-align:center;">180 + 350</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">680</span><br><span style="display:inline-block;min-width:30px;text-align:center;">530</span></span>
    </p>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>Customer A pays KSh 680 and customer B pays KSh 530.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Cost with matrices</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Cost = Quantity matrix × Price column</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Each element of the result is one total.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Bills, budgets, income.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Putting items in a different order in the two matrices.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Two customers <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Customer A buys 3 kg sugar and 2 loaves; B buys 1 kg sugar and 5 loaves. Sugar is KSh 180/kg and bread KSh 70. Find each bill.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Quantities 2 × 2 × prices 2 × 1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (3 2 ; 1 5)(180 ; 70)</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> A: 540 + 140 = 680; B: 180 + 350 = 530</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> A pays KSh 680; B pays KSh 530</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Weekly income <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A kiosk sold (40 25 60) units of milk, bread and eggs on Monday and (35 30 50) on Tuesday at KSh 60, KSh 70 and KSh 15. Find the income each day.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Sales 2 × 3 × prices 3 × 1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Monday: 2 400 + 1 750 + 900 = 5 050</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Tuesday: 2 100 + 2 100 + 750 = 4 950</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Monday KSh 5 050; Tuesday KSh 4 950</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Price increase <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> The prices (60 70 15) rise by 10%. Use scalar multiplication to find the new prices.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply by 1.1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 1.1 × (60 70 15) = (66 77 16.5)</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> KSh 66, KSh 77 and KSh 16.50</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Farm inputs <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Each acre of maize needs 2 bags of fertiliser and 10 kg of seed; each acre of beans needs 1 bag and 15 kg. A farmer plants 3 acres of maize and 2 of beans. Fertiliser costs KSh 3 500 per bag and seed KSh 250 per kg. Find the total cost.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Acres × inputs per acre, then × prices.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Inputs: (3 2)(2 10 ; 1 15) = (6 + 2, 30 + 30) = (8 60)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 8 bags, 60 kg.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Cost: (8 60)(3500 ; 250) = 28 000 + 15 000</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> KSh 43 000</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Combining and comparing <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Two schools ordered uniforms (shirts, skirts) as (120 80 ; 90 100). Shirts cost KSh 450 and skirts KSh 600. Which school pays more, and by how much?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply by the price column, then compare.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> School 1: 54 000 + 48 000 = 102 000</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> School 2: 40 500 + 60 000 = 100 500</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Difference 1 500</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> School 1 pays KSh 1 500 more.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A trader sells 20 trays of eggs and 15 crates of soda on Saturday, and 25 and 10 on Sunday. A tray earns KSh 450 and a crate KSh 800. Find the income each day.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sales matrix: (… ; …) <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Price column: (450 ; 800) <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Saturday = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Sunday = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(20 15 ; 25 10)(450 ; 800): Saturday 9 000 + 12 000 = KSh 21 000; Sunday 11 250 + 8 000 = KSh 19 250.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find the bill for (2 3) items priced (100 ; 50).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">200 + 150 = KSh 350</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Double the prices (40 25 60) using a scalar.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(80 50 120)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Three customers buy (1 2 ; 3 0 ; 2 2) of items priced (120 ; 80). Find each bill.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(280 ; 360 ; 400)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A shop’s stock (50 30 20) falls by (12 8 5) on Monday. Find the remaining stock.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(38 22 15)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A bakery makes cakes and loaves. A cake uses 2 eggs and 0.5 kg flour; a loaf uses 0 eggs and 0.4 kg flour. It makes 30 cakes and 50 loaves. Find the eggs and flour needed.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(30 50)(2 0.5 ; 0 0.4) = (60 eggs, 35 kg flour)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Plan a class party: list 3 items, quantities for 2 groups and prices; use matrices to find each group’s cost.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Answers vary; check row × column.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏪 Retail</p>
    <div>Bills for many customers.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌾 Agriculture</p>
    <div>Input costs per farm.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏫 Schools</p>
    <div>Uniform and book orders.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏭 Manufacturing</p>
    <div>Raw materials for products.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Setting up matrices from word problems and interpreting products.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Working in groups on a shop or farm problem.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking matrix calculations in a spreadsheet.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Social cohesion</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use a spreadsheet: type the matrices and use =MMULT(range1, range2).</li>
    <li>Check totals by adding the individual costs.</li>
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
    <li>Estimate first: 3 kg at about KSh 200 is about KSh 600.</li>
    <li>Keep items in the same order in every matrix.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Items in different orders</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Products pair the wrong items</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Match the order of items</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wrong arrangement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Orders not compatible</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quantities in rows, prices in a column</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Numbers without meaning lose marks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">State what each element means</td>
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
    <li>Label the rows and columns beside the matrices.</li>
    <li>Estimate the answer before calculating.</li>
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
    <li>Cost = quantity × price.</li>
    <li>Match the item order.</li>
    <li>Interpret every element.</li>
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
    <li>Write the matrices clearly before multiplying.</li>
    <li>Give final answers with units in a sentence.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1 <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> (2 1)(50 ; 30) = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(130)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> If prices rise by 20%, multiply by …</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1.2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What does each element of quantity × price represent?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">A total cost for one customer or shop</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which real problem in my home could matrices simplify?</li>
    <li>Do I always interpret my results?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Matrices organise real data such as quantities, prices and inputs.</li>
    <li>Quantity × price gives totals for many customers at once.</li>
    <li>Scalar multiplication applies percentage changes.</li>
    <li>Addition and subtraction update stock.</li>
    <li>Always interpret results with units.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Matrix operation</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bills for customers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quantity × price</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Price rise</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar × prices</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New stock after delivery</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stock + delivery</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Items sold</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Opening − closing</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Quantity matrix</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Numbers of items.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Price matrix</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prices as a column.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Total cost</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sum of quantity × price.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Interpret</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explain meaning.</td>
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
    <p style="margin:0;"><strong>1.</strong> A school canteen sold (50 40 30) plates of rice, chapati and beans on Monday and (45 50 35) on Tuesday. Prices are KSh 60, KSh 20 and KSh 50. (a) Write the matrices. (b) Find the income each day. (c) Find the total for both days. <span style="color:#fde68a;font-size:13px;">(6 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) (50 40 30 ; 45 50 35) and (60 ; 20 ; 50) [2]; (b) Monday 3 000 + 800 + 1 500 = 5 300; Tuesday 2 700 + 1 000 + 1 750 = 5 450 [3]; (c) KSh 10 750 [1]</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use matrices to find the cost of your family’s weekly shopping for three items.</li>
    <li>A shop increases prices (80 120 45) by 15%. Find the new prices.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Quantities (2 3) and prices (50 ; 20) give a total cost of:',
            options: ['KSh 160', 'KSh 70', 'KSh 100', 'KSh 250'],
            correct: 0,
            explanation: 'The answer is “KSh 160”. 2 × 50 + 3 × 20 = 160.'
        },
        {
            question: 'To increase prices by 10%, multiply the price matrix by:',
            options: ['10', '0.1', '1.1', '110'],
            correct: 2,
            explanation: 'The answer is “1.1”. New price = 1.1 × old price.'
        },
        {
            question: 'Customers’ quantities are usually placed:',
            options: ['in a single column', 'in rows', 'on the diagonal', 'anywhere'],
            correct: 1,
            explanation: 'The answer is “in rows”. One row per customer.'
        },
        {
            question: 'Prices should be arranged as a:',
            options: ['row in any order', 'square matrix', 'column, with items in the same order as the quantity columns', 'zero matrix'],
            correct: 2,
            explanation: 'The answer is “column, with items in the same order as the quantity columns”. This makes the product compatible.'
        },
        {
            question: '(3 2 ; 1 5)(180 ; 70) equals:',
            options: ['(680 ; 530)', '(540 ; 350)', '(250 ; 250)', '(680 ; 350)'],
            correct: 0,
            explanation: 'The answer is “(680 ; 530)”. Row 1: 540 + 140; row 2: 180 + 350.'
        },
        {
            question: 'Stock after a delivery is found by:',
            options: ['subtracting matrices', 'adding matrices', 'scalar multiplication only', 'the identity'],
            correct: 1,
            explanation: 'The answer is “adding matrices”. Opening stock + delivery.'
        },
        {
            question: 'Each element of quantity × price represents:',
            options: ['a price', 'a quantity', 'a profit margin', 'a total cost'],
            correct: 3,
            explanation: 'The answer is “a total cost”. One total per row.'
        },
        {
            question: 'A farmer’s inputs (8 bags, 60 kg) at (3 500 ; 250) cost:',
            options: ['KSh 28 000', 'KSh 15 000', 'KSh 3 750', 'KSh 43 000'],
            correct: 3,
            explanation: 'The answer is “KSh 43 000”. 28 000 + 15 000 = 43 000.'
        }
    ]
},
{
    name: '1.2 Worked Examples: Matrices',
    type: 'lesson',
    duration: '60 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Worked Examples</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">✏️ Worked Examples — Matrices</h2>
    <p style="font-size:16px;">These exam-style examples combine the four lessons on matrices.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Operations</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Combined operations <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Given A = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">4</span></span> and B = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">0</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">5</span></span>, find 2A − B.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Scalar first, then subtract.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2A = (4 2 ; 6 8)</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2A − B = (3 2 ; 4 3)</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">3</span><span style="display:inline-block;min-width:30px;text-align:center;">2</span><br><span style="display:inline-block;min-width:30px;text-align:center;">4</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span>
    </div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Product and unknown <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find x and y if <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">2</span><span style="display:inline-block;min-width:30px;text-align:center;">x</span><br><span style="display:inline-block;min-width:30px;text-align:center;">1</span><span style="display:inline-block;min-width:30px;text-align:center;">3</span></span> × <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">1</span><br><span style="display:inline-block;min-width:30px;text-align:center;">2</span></span> = <span style="display:inline-block;vertical-align:middle;border-left:2px solid #7dd3fc;border-right:2px solid #7dd3fc;border-radius:8px;padding:2px 8px;margin:0 4px;line-height:1.5;"><span style="display:inline-block;min-width:30px;text-align:center;">8</span><br><span style="display:inline-block;min-width:30px;text-align:center;">y</span></span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply out and compare.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 1: 2 + 2x = 8 → x = 3</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Row 2: 1 + 6 = 7 → y = 7</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> x = 3, y = 7</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Applications</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Shop bills <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Customers buy (2 1 3 ; 1 4 0) of soap, sugar and tea priced (60 ; 180 ; 120). Find each bill.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> 2 × 3 by 3 × 1.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Customer 1: 120 + 180 + 360 = 660</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Customer 2: 60 + 720 + 0 = 780</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> KSh 660 and KSh 780</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Two-stage problem <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A tailor makes shirts and dresses. A shirt needs 2 m of cloth and 6 buttons; a dress needs 3 m and 4 buttons. Orders are 10 shirts and 8 dresses. Cloth costs KSh 300 per m and buttons KSh 5 each. Find the total cost.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Orders × requirements × prices.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (10 8)(2 6 ; 3 4) = (20 + 24, 60 + 32) = (44 92)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 44 m, 92 buttons.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (44 92)(300 ; 5) = 13 200 + 460</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> KSh 13 660</div>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 How Examiners Mark These</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show the orders to prove compatibility.</li>
    <li>Show each row-by-column sum.</li>
    <li>Interpret answers with units.</li>
    </ul>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '2A − B for A = (2 1 ; 3 4), B = (1 0 ; 2 5) is:',
            options: ['(3 2 ; 4 3)', '(1 1 ; 1 −1)', '(4 2 ; 6 8)', '(3 1 ; 5 9)'],
            correct: 0,
            explanation: 'The answer is “(3 2 ; 4 3)”. 2A = (4 2 ; 6 8); subtract B.'
        },
        {
            question: 'If (2 x ; 1 3)(1 ; 2) = (8 ; y), then x is:',
            options: ['4', '2', '3', '6'],
            correct: 2,
            explanation: 'The answer is “3”. 2 + 2x = 8.'
        },
        {
            question: 'The bills for (2 1 3 ; 1 4 0) at (60 ; 180 ; 120) are:',
            options: ['360 and 720', '660 and 780', '780 and 660', '600 and 800'],
            correct: 1,
            explanation: 'The answer is “660 and 780”. Row-by-column sums.'
        },
        {
            question: 'The tailor needs how much cloth?',
            options: ['20 m', '24 m', '92 m', '44 m'],
            correct: 3,
            explanation: 'The answer is “44 m”. 10 × 2 + 8 × 3 = 44.'
        },
        {
            question: 'The tailor’s total cost is:',
            options: ['KSh 13 200', 'KSh 13 660', 'KSh 460', 'KSh 14 000'],
            correct: 1,
            explanation: 'The answer is “KSh 13 660”. 13 200 + 460.'
        }
    ]
},
{
    name: '1.2 Practice: Matrices',
    type: 'lesson',
    duration: '80 min',
    exercises: 20,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Practice</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 80 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🏋️ Practice Set — Matrices</h2>
    <p style="font-size:16px;">Twenty questions covering all four lessons, from easy to exam level.</p>
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
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the order of (1 2 3 ; 4 5 6).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2 × 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Write the 3 × 3 identity matrix.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(1 0 0 ; 0 1 0 ; 0 0 1)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> (4 2) + (1 5)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(5 7)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> (7 ; 3) − (2 ; 5)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(5 ; −2)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> 3 × (1 −2)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(3 −6)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Find x if (x + 2 3) = (9 3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">x = 7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> (2 3)(4 ; 1)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(11)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> (1 2 ; 0 1)(3 ; 4)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(11 ; 4)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Can a 3 × 2 and a 3 × 2 matrix be multiplied?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Order of (3 × 2)(2 × 4)?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 × 4</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> (1 3 ; 2 1)(2 0 ; 1 4)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(5 12 ; 5 4)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> Find X if 2X + (1 2) = (7 10).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">X = (3 4)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q13.</strong> Show that (2 1 ; 0 1)(1 0 ; 1 1) ≠ (1 0 ; 1 1)(2 1 ; 0 1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(3 1 ; 1 1) vs (2 1 ; 2 2)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q14.</strong> Bills for (4 2 ; 1 6) items priced (50 ; 30).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(260 ; 230)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q15.</strong> Stock (60 40) receives (25 35) and sells (50 45). Closing stock?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(35 30)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q16.</strong> Prices (200 150 90) rise by 5%.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(210 157.5 94.5)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #93c5fd;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">Exam Style</p>
    <p style="margin:8px 0 2px 0;"><strong>Q17.</strong> A farmer sells (30 20) crates of tomatoes and kale in week 1 and (25 35) in week 2 at KSh 1 200 and KSh 400. Find weekly and total income.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Week 1: 36 000 + 8 000 = 44 000; week 2: 30 000 + 14 000 = 44 000; total KSh 88 000</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q18.</strong> A = (3 −1 ; 2 0). Find A² (= A × A).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(7 −3 ; 6 −2)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q19.</strong> Find a and b if (a 2 ; 1 b)(1 ; 3) = (9 ; 10).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">a + 6 = 9 → a = 3; 1 + 3b = 10 → b = 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q20.</strong> Explain why the identity matrix is like the number 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Multiplying by it leaves a matrix unchanged</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Try the assignment challenge extension.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13 – 17</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redo the ones you missed after one day.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 – 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Revisit Lesson 3 on multiplication.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 – 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Work through the worked examples again with your teacher.</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The order of (1 2 3 ; 4 5 6) is:',
            options: ['3 × 2', '6 × 1', '2 × 3', '1 × 6'],
            correct: 2,
            explanation: 'The answer is “2 × 3”. 2 rows and 3 columns.'
        },
        {
            question: '(2 3)(4 ; 1) equals:',
            options: ['(11)', '(8 3)', '(5)', '(14)'],
            correct: 0,
            explanation: 'The answer is “(11)”. 8 + 3 = 11.'
        },
        {
            question: 'Order of (3 × 2)(2 × 4):',
            options: ['2 × 2', '4 × 3', '3 × 4', '3 × 2'],
            correct: 2,
            explanation: 'The answer is “3 × 4”. Outer numbers.'
        },
        {
            question: 'If 2X + (1 2) = (7 10), X is:',
            options: ['(6 8)', '(3 4)', '(4 6)', '(8 12)'],
            correct: 1,
            explanation: 'The answer is “(3 4)”. 2X = (6 8).'
        },
        {
            question: 'A² for A = (3 −1 ; 2 0) is:',
            options: ['(9 1 ; 4 0)', '(6 −2 ; 4 0)', '(7 3 ; 6 2)', '(7 −3 ; 6 −2)'],
            correct: 3,
            explanation: 'Row-by-column: 9 − 2, −3 + 0; 6 + 0, −2 + 0.'
        }
    ]
},
{
    name: '1.2 Quiz: Matrices',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📝 Quiz — Matrices</h2>
    <p style="font-size:16px;">Fifteen questions on all four lessons. In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Work each question on rough paper before choosing an answer.</li>
    <li>Do not look back at the lessons — test yourself honestly.</li>
    <li>Afterwards, read the explanation for every question, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Order and types of matrices</li>
    <li>Equal matrices</li>
    <li>Addition and subtraction</li>
    <li>Scalar multiplication</li>
    <li>Matrix multiplication and compatibility</li>
    <li>Real-life applications</li>
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
    <div>Check orders before every addition or multiplication — many wrong options come from ignoring compatibility.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A matrix with 3 rows and 2 columns has order:',
            options: ['2 × 3', '6', '3 × 2', '5'],
            correct: 2,
            explanation: 'The answer is “3 × 2”. Rows × columns.'
        },
        {
            question: '(3 ; 5 ; 9) is a:',
            options: ['column matrix', 'row matrix', 'square matrix', 'identity matrix'],
            correct: 0,
            explanation: 'The answer is “column matrix”. One column.'
        },
        {
            question: 'If (x 4 ; 7 y) = (9 4 ; 7 3), then x + y equals:',
            options: ['13', '16', '6', '12'],
            correct: 3,
            explanation: 'The answer is “12”. x = 9 and y = 3.'
        },
        {
            question: '(1 2) + (3 4) equals:',
            options: ['(4 6)', '(3 8)', '(11)', '(2 2)'],
            correct: 0,
            explanation: 'The answer is “(4 6)”. Add corresponding elements.'
        },
        {
            question: '(6 1 ; 3 8) − (2 4 ; 5 1) equals:',
            options: ['(8 5 ; 8 9)', '(4 3 ; 2 7)', '(4 −3 ; −2 7)', '(−4 3 ; 2 −7)'],
            correct: 2,
            explanation: 'The answer is “(4 −3 ; −2 7)”. Subtract corresponding elements.'
        },
        {
            question: 'Can (1 2 3) and (1 2) be added?',
            options: ['Yes', 'No', 'Only if multiplied', 'Only if square'],
            correct: 1,
            explanation: 'The answer is “No”. Orders 1 × 3 and 1 × 2 differ.'
        },
        {
            question: '5 × (2 0 ; 1 3) equals:',
            options: ['(10 0 ; 5 15)', '(7 5 ; 6 8)', '(10 0 ; 1 3)', '(2 0 ; 5 15)'],
            correct: 0,
            explanation: 'The answer is “(10 0 ; 5 15)”. Multiply every element.'
        },
        {
            question: 'A 3 × 1 matrix times a 1 × 3 matrix has order:',
            options: ['1 × 1', '3 × 1', '1 × 3', '3 × 3'],
            correct: 3,
            explanation: 'The answer is “3 × 3”. Outer numbers.'
        },
        {
            question: '(2 1)(3 ; 4) equals:',
            options: ['(6 4)', '(7)', '(11)', '(10)'],
            correct: 3,
            explanation: 'The answer is “(10)”. 6 + 4 = 10.'
        },
        {
            question: '(1 2 ; 3 4)(1 ; 1) equals:',
            options: ['(1 ; 4)', '(3 ; 7)', '(4 ; 6)', '(2 ; 4)'],
            correct: 1,
            explanation: 'The answer is “(3 ; 7)”. 1 + 2 = 3; 3 + 4 = 7.'
        },
        {
            question: '(1 0 ; 0 1) × (5 2 ; 3 4) equals:',
            options: ['(1 0 ; 0 1)', '(5 2 ; 3 4)', '(5 0 ; 0 4)', '(6 2 ; 3 5)'],
            correct: 1,
            explanation: 'The answer is “(5 2 ; 3 4)”. The identity leaves a matrix unchanged.'
        },
        {
            question: 'Matrix multiplication is generally:',
            options: ['commutative', 'impossible', 'the same as addition', 'not commutative'],
            correct: 3,
            explanation: 'The answer is “not commutative”. AB is usually not BA.'
        },
        {
            question: 'Bills for (3 2 ; 1 5) at (180 ; 70) are:',
            options: ['(540 ; 350)', '(250 ; 250)', '(680 ; 530)', '(680 ; 350)'],
            correct: 2,
            explanation: 'The answer is “(680 ; 530)”. Row-by-column sums.'
        },
        {
            question: 'A 20% price increase on (100 50) gives:',
            options: ['(120 60)', '(20 10)', '(80 40)', '(100 50)'],
            correct: 0,
            explanation: 'The answer is “(120 60)”. Multiply by 1.2.'
        },
        {
            question: 'Items sold is found by:',
            options: ['closing + opening', 'opening × closing', 'opening stock − closing stock', 'scalar × closing'],
            correct: 2,
            explanation: 'The answer is “opening stock − closing stock”. What left the shop.'
        }
    ]
},
{
    name: '1.2 Assignment: Matrices for a School Canteen',
    type: 'lesson',
    duration: '120 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 120 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📂 Matrices for a School Canteen</h2>
    <p style="font-size:16px;">In groups, you will use matrices to manage stock, prices and income for a school canteen over one week.</p>
    <p style="margin:6px 0 0 0;color:#e0f2fe;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work).</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school canteen sells tea, mandazi and chapati. The manager wants a simple system to update stock, calculate daily income and plan a small price increase. Your group will design it using matrices.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Tasks</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose realistic prices for three items and write them as a column matrix.</li>
    <li>Invent sales for five days and write a 5 × 3 sales matrix.</li>
    <li>Use matrix multiplication to find the income for each day and the total for the week.</li>
    <li>Write an opening stock matrix and a delivery matrix; find the stock after delivery and the closing stock after the week’s sales.</li>
    <li>Apply a 10% price increase using scalar multiplication and find the new weekly income if sales stay the same.</li>
    <li>Present your results in a short report with all matrices and working.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>All matrices with labels</li>
    <li>Full working for each operation</li>
    <li>Short report with recommendations</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Setting up matrices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All matrices correct, labelled and compatible</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Correct and compatible</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incorrect</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All operations correct with clear working</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many errors</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All results interpreted with units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most interpreted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some interpreted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not interpreted</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, organised report</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unclear</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Tips for Success</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep the items in the same order in every matrix.</li>
    <li>Check one product with a spreadsheet using MMULT.</li>
    <li>Estimate totals to spot errors.</li>
    </ul>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How did matrices make the calculations easier?</li>
    <li>What would change if the canteen added a fourth item?</li>
    <li>How did our group divide the work?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A 5 × 3 sales matrix times a 3 × 1 price column gives a matrix of order:',
            options: ['3 × 5', '1 × 5', '5 × 3', '5 × 1'],
            correct: 3,
            explanation: 'The answer is “5 × 1”. Outer numbers.'
        },
        {
            question: 'A 10% price rise uses scalar multiplication by:',
            options: ['1.1', '0.1', '10', '1.01'],
            correct: 0,
            explanation: 'The answer is “1.1”. New price = 1.1 × old.'
        },
        {
            question: 'Stock after delivery equals:',
            options: ['opening − delivery', 'opening stock + delivery', 'opening × delivery', 'delivery only'],
            correct: 1,
            explanation: 'The answer is “opening stock + delivery”. Addition of matrices.'
        },
        {
            question: 'Items must appear in the same order so that:',
            options: ['the matrices look neat', 'orders change', 'the right quantities are multiplied by the right prices', 'the identity is used'],
            correct: 2,
            explanation: 'The answer is “the right quantities are multiplied by the right prices”. Correct pairing.'
        },
        {
            question: 'A spreadsheet function for multiplying matrices is:',
            options: ['SUM', 'AVERAGE', 'MMULT', 'COUNT'],
            correct: 2,
            explanation: 'The answer is “MMULT”. It returns the matrix product.'
        }
    ]
},
{
    name: '1.2 Revision: Matrices',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 40 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🔁 Revision — Matrices</h2>
    <p style="font-size:16px;">Use these cards and questions to revise before the end-of-batch assessment. In quiz options, a matrix is written in brackets with rows separated by a semicolon, so (2 3 ; 1 4) means first row 2 3 and second row 1 4.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Matrix and order</p>
    <div>
    <p>A rectangular array; order = rows × columns.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Types</p>
    <div>
    <p>Row, column, square, zero, identity.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Equal matrices</p>
    <div>
    <p>Same order, equal corresponding elements.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Add and subtract</p>
    <div>
    <p>Same order; work element by element.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Scalar multiplication</p>
    <div>
    <p>Multiply every element.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Matrix multiplication</p>
    <div>
    <p>(m × n)(n × p) = m × p; row × column.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">Applications</p>
    <div>
    <p>Quantity × price = totals; stock + delivery − sales.</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Operation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Condition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A + B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1 2) + (3 4) = (4 6)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kA</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Always possible</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3(1 2) = (3 6)</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AB</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Columns of A = rows of B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(1 2)(3 ; 4) = (11)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AI</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">I same size</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AI = A</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the order of (2 4 6 ; 1 3 5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2 × 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find (3 2 ; 1 0) + (1 1 ; 4 2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(4 3 ; 5 2)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find 2 × (3 −1 ; 0 4).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(6 −2 ; 0 8)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find (2 1 ; 3 2)(1 ; 4).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(6 ; 11)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A customer buys (2 3 1) items priced (90 ; 40 ; 150). Find the bill.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">180 + 120 + 150 = KSh 450</div>
    </details>
    </div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can state the order and type of a matrix.</p>
    <p style="margin:6px 0;">☐ I can add, subtract and multiply by a scalar.</p>
    <p style="margin:6px 0;">☐ I can multiply compatible matrices.</p>
    <p style="margin:6px 0;">☐ I can solve real-life problems with matrices.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '(2 4 6 ; 1 3 5) has order:',
            options: ['3 × 2', '6 × 1', '2 × 2', '2 × 3'],
            correct: 3,
            explanation: 'The answer is “2 × 3”. 2 rows, 3 columns.'
        },
        {
            question: '(3 2 ; 1 0) + (1 1 ; 4 2) equals:',
            options: ['(2 1 ; −3 −2)', '(3 2 ; 4 0)', '(4 3 ; 5 0)', '(4 3 ; 5 2)'],
            correct: 3,
            explanation: 'The answer is “(4 3 ; 5 2)”. Add element by element.'
        },
        {
            question: '2 × (3 −1 ; 0 4) equals:',
            options: ['(5 1 ; 2 6)', '(6 −1 ; 0 4)', '(6 −2 ; 0 8)', '(6 2 ; 0 8)'],
            correct: 2,
            explanation: 'The answer is “(6 −2 ; 0 8)”. Multiply every element by 2.'
        },
        {
            question: '(2 1 ; 3 2)(1 ; 4) equals:',
            options: ['(2 ; 12)', '(6 ; 11)', '(3 ; 5)', '(6 ; 8)'],
            correct: 1,
            explanation: 'The answer is “(6 ; 11)”. 2 + 4 = 6; 3 + 8 = 11.'
        },
        {
            question: 'The bill for (2 3 1) at (90 ; 40 ; 150) is:',
            options: ['KSh 450', 'KSh 280', 'KSh 600', 'KSh 330'],
            correct: 0,
            explanation: 'The answer is “KSh 450”. 180 + 120 + 150.'
        },
        {
            question: 'AB can be found if:',
            options: ['rows of A = rows of B', 'columns of A = rows of B', 'A and B are any size', 'A is square only'],
            correct: 1,
            explanation: 'The answer is “columns of A = rows of B”. Compatibility rule.'
        },
        {
            question: 'The identity matrix is like the number:',
            options: ['0', '10', '1', '−1'],
            correct: 2,
            explanation: 'It leaves a matrix unchanged when multiplying.'
        },
        {
            question: 'The next sub-strand is:',
            options: ['1.3 Variations', '1.1 Quadratic Equations', '2.1 Approximation', '3.1 Statistics'],
            correct: 0,
            explanation: 'The answer is “1.3 Variations”. Variations follow matrices.'
        }
    ]
},
{
    name: '1.2 Summary: Matrices',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #075985, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers and Algebra · Sub-strand 1.2 Matrices</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 20 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🧾 Summary — Matrices</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> A matrix is a table of numbers we can calculate with: by adding, subtracting and multiplying matrices, we can update stock, apply price changes and find many totals at once.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔑 Key Points</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A matrix is a rectangular arrangement of numbers; its order is rows × columns.</li>
    <li>Types include row, column, square, zero and identity matrices.</li>
    <li>Equal matrices have the same order and equal corresponding elements.</li>
    <li>Matrices of the same order can be added and subtracted element by element.</li>
    <li>Scalar multiplication multiplies every element.</li>
    <li>Matrices can be multiplied when columns of the first equal rows of the second; use row × column.</li>
    <li>Quantity × price matrices give totals such as bills and income.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Meaning and types</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order, elements, types, equality</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rows × columns</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Add and subtract</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same order only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Watch signs</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Multiplication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar and row × column</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Check compatibility</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.4 Applications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bills, stock, inputs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interpret results</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧾 All the Formulas in One Place</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Statement</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">rows × columns</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Addition</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same order; add corresponding elements</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Scalar</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">kA multiplies every element</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(m × n)(n × p) = m × p</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Identity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AI = IA = A</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">matrix</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">element</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">order</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">row matrix</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">column matrix</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">square matrix</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">zero matrix</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">identity matrix</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">scalar</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">compatible</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">product</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">quantity matrix</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Shops, farms, schools and factories use matrices — often inside spreadsheets — to manage stock, costs and income.</div>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Variations explains how one quantity changes as another changes.</div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ state the order and type of a matrix</p>
    <p style="margin:6px 0;">✔️ add and subtract matrices</p>
    <p style="margin:6px 0;">✔️ multiply by a scalar</p>
    <p style="margin:6px 0;">✔️ multiply compatible matrices</p>
    <p style="margin:6px 0;">✔️ use matrices to solve real-life problems</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is that matrices:',
            options: ['organise numbers so we can calculate many totals at once', 'are only for scientists', 'cannot be multiplied', 'are the same as quadratics'],
            correct: 0,
            explanation: 'The answer is “organise numbers so we can calculate many totals at once”. Practical organisation.'
        },
        {
            question: 'Which lesson covered compatibility?',
            options: ['1.2.3', '1.2.1', '1.2.2', '1.2.4'],
            correct: 0,
            explanation: 'The answer is “1.2.3”. Multiplication.'
        },
        {
            question: 'Which lesson covered shop bills?',
            options: ['1.2.1', '1.2.2', '1.2.3', '1.2.4'],
            correct: 3,
            explanation: 'The answer is “1.2.4”. Applications.'
        },
        {
            question: 'What comes next?',
            options: ['1.4 Sequences', '2.1 Approximation', '1.1 Quadratics', '1.3 Variations'],
            correct: 3,
            explanation: 'The answer is “1.3 Variations”. Variations.'
        },
        {
            question: 'Order of a matrix means:',
            options: ['columns × rows', 'number of elements', 'rows × columns', 'largest element'],
            correct: 2,
            explanation: 'The answer is “rows × columns”. Rows first.'
        }
    ]
}
],
          stats:{lessons:23,exercises:193,quizzes:24,projects:2,duration:'24 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Solve x² − 5x + 6 = 0.',
                  options: ['x = −2 or x = −3', 'x = 1 or x = 6', 'x = 2 or x = 3', 'x = 5 or x = 6'],
                  correct: 2,
                  explanation: '(x − 2)(x − 3) = 0, so x = 2 or x = 3.'
              },
              {
                  question: 'What must be added to x² + 8x to make a perfect square?',
                  options: ['8', '16', '4', '64'],
                  correct: 1,
                  explanation: 'Half of 8 is 4, and 4² = 16.'
              },
              {
                  question: 'In ax² + bx + c = 0 the quadratic formula is x =',
                  options: ['(−b ± √(b² − 4ac)) ÷ 2a', '(b ± √(b² + 4ac)) ÷ 2a', '(−b ± √(b² − 4ac)) ÷ a', '−b ÷ 2a only'],
                  correct: 0,
                  explanation: 'This formula solves any quadratic with real roots.'
              },
              {
                  question: 'A rectangular garden is x m wide and (x + 3) m long with area 40 m². The equation is:',
                  options: ['x² + 3x − 40 = 0', 'x² + 3x + 40 = 0', '2x + 3 = 40', 'x² − 40 = 0'],
                  correct: 0,
                  explanation: 'x(x + 3) = 40 gives x² + 3x − 40 = 0.'
              },
              {
                  question: 'A length found as −8 m should be:',
                  options: ['Used as 8 m', 'Rejected, because a length cannot be negative', 'Kept as −8 m', 'Doubled'],
                  correct: 1,
                  explanation: 'Always check answers make sense in the context.'
              },
              {
                  question: 'The order of a matrix with 2 rows and 3 columns is:',
                  options: ['3 × 2', '6', '5', '2 × 3'],
                  correct: 3,
                  explanation: 'Order is rows × columns.'
              },
              {
                  question: 'Two matrices can be added only if they have:',
                  options: ['The same first element', 'The same order', 'Different orders', 'Square shape only'],
                  correct: 1,
                  explanation: 'Add corresponding elements.'
              },
              {
                  question: '3 × (2 5) equals:',
                  options: ['(5 8)', '(6 5)', '(2 15)', '(6 15)'],
                  correct: 3,
                  explanation: 'Multiply every element by the scalar 3.'
              },
              {
                  question: 'A 2 × 3 matrix can be multiplied by a matrix of order:',
                  options: ['2 × n', 'n × 2', '3 × n', 'Any order'],
                  correct: 2,
                  explanation: 'Columns of the first must equal rows of the second.'
              },
              {
                  question: '(1 2) multiplied by the column (3, 4) gives:',
                  options: ['(3 8)', '(4 6)', '(10)', '(11)'],
                  correct: 3,
                  explanation: '1 × 3 + 2 × 4 = 11.'
              },
              {
                  question: 'A shop’s quantities (2 3) times prices column (50, 20) gives the total cost:',
                  options: ['KSh 160', 'KSh 70', 'KSh 100', 'KSh 250'],
                  correct: 0,
                  explanation: '2 × 50 + 3 × 20 = 160.'
              },
              {
                  question: 'The identity matrix of order 2 has:',
                  options: ['All 1s', 'All 0s', '1s on the leading diagonal and 0s elsewhere', '1s in the corners only'],
                  correct: 2,
                  explanation: 'Multiplying by I leaves a matrix unchanged.'
              }
          ]}
);