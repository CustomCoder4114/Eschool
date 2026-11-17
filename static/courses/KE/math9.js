// Eschool course: Grade 9 Mathematics (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'math-grade-9', name:'Grade 9 Mathematics', code:'MAT 091', level:'grade-9', iconStyle:'fas', icon:'fa-calculator', color:'#7c3aed',
          category:'Mathematics',
          description:'The Kenya CBC Grade 9 Mathematics course: integers, cubes and cube roots, indices and logarithms, proportions, matrices, straight lines, inequalities, measurement, money, scale drawing, trigonometry, data and probability, taught step by step.',
          longDescription:'This Grade 9 Mathematics course follows the KICD Junior School Grade 9 Mathematics curriculum design strand by strand: Numbers (integers, cubes and cube roots, indices and logarithms, compound proportions and rates of work), Algebra (matrices, equation of a straight line, linear inequalities), Measurements (area, volume of solids, mass, volume, weight and density, time, distance and speed, money, approximations and errors), Geometry (coordinates and graphs, scale drawing, similarity and enlargement, trigonometry) and Data Handling and Probability (grouped data and probability). Each sub-strand has lessons followed by worked examples, a practice set, a quiz, an assignment, a revision page and a summary. Every lesson includes learning outcomes, a key inquiry question, a teacher explanation, vocabulary, step-by-step explanations, diagrams, formula cards, worked and guided examples, graded practice with answers, Kenyan real-life applications, calculator tips, common mistakes, exam tips, structured questions, homework and a multiple-choice quiz with explanations.',
          modules:[
{
    name: '1.0 Numbers — Strand Overview',
    type: 'lesson',
    duration: '25 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 25 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🗺️ Strand 1.0: Numbers</h2>
    <p style="font-size:16px;">Welcome to Grade 9 Mathematics, your final year of Junior School. This year prepares you for Senior School, where Mathematics is a core subject in every pathway.</p>
    <p style="font-size:16px;">Strand 1.0 Numbers sharpens the number skills you use every day: working with positive and negative numbers, cubes and cube roots, indices and logarithms, and sharing work and resources fairly using proportions and rates.</p>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#bae6fd;">❓ Big question for this strand:</strong> How do we use numbers to solve problems in everyday life?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>The strand has <strong>four sub-strands</strong>, in the order set by the KICD Grade 9 Mathematics curriculum design:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it lets you do</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example in real life</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Integers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add, subtract, multiply and divide positive and negative numbers, including combined operations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Temperature changes, bank balances, floors above and below ground</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Cubes and Cube Roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find cubes and cube roots by multiplication, factors, tables and calculators</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Volume of a cube-shaped water tank; side of a box from its volume</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Indices and Logarithms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the laws of indices and simple logarithms</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large numbers in science; repeated growth</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Compound Proportions and Rates of Work</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share quantities in ratios and work out how long jobs take</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sharing profit in a chama; how many workers finish a job sooner</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧭 Strand Map</h3>
    <p>Follow the sub-strands in order. Each has four lessons followed by worked examples, practice, a quiz, an assignment, revision and a summary. This batch contains 1.1 and 1.2.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.1 Integers</p>
    <p style="margin:4px 0;color:#cbd5e1;">Operations on integers, combined operations and integers in real life.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>📘 Lesson 1: Adding and Subtracting Integers</li>
    <li>📘 Lesson 2: Multiplying and Dividing Integers</li>
    <li>📘 Lesson 3: Combined Operations on Integers</li>
    <li>📘 Lesson 4: Integers in Real-Life Situations</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0;color:#cbd5e1;">Cubes and cube roots by multiplication, factors, tables and calculators.</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>📘 Lesson 1: Cubes by Multiplication</li>
    <li>📘 Lesson 2: Cubes from Mathematical Tables</li>
    <li>📘 Lesson 3: Cube Roots by the Factor Method</li>
    <li>📘 Lesson 4: Cube Roots from Tables and Calculators</li>
    <li>✏️ Worked Examples</li>
    <li>🏋️ Practice</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.3 Indices and Logarithms</p>
    <p style="margin:4px 0;color:#cbd5e1;">Laws of indices, powers of 10 and logarithms (next batch).</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.4 Compound Proportions and Rates of Work</p>
    <p style="margin:4px 0;color:#cbd5e1;">Proportional sharing and rates of work (next batch).</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the correct order of operations and checking answers make sense.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining working clearly and playing number games in groups.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a calculator and IT tools to check operations, cubes and cube roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and imagination</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing number games and real-life problems using integers.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reviewing mistakes and tracking progress through quizzes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tackling harder problems step by step.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity — honest self-marking</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility — completing practice on time</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect — valuing others’ methods</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity — solving problems as a team</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy (profit, loss and balances)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental awareness (temperature and climate)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety (heights and depths)</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Digital citizenship</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🧰 What You Need</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>A scientific calculator</li>
    <li>KNEC mathematical tables</li>
    <li>A ruler, pencil and graph paper</li>
    <li>Small cubes or boxes (for stacking activities)</li>
    <li>An exercise book for working</li>
    </ul>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 How to Study This Strand</p>
    <div>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read each lesson in order.</li>
    <li>Try every checkpoint before opening the answer.</li>
    <li>Copy every formula card into your notebook.</li>
    <li>Do the practice questions, then mark yourself.</li>
    <li>Take the quiz only after the worked examples and practice.</li>
    </ol>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Strand 1.0 Numbers in Grade 9?',
            options: ['Three', 'Four', 'Five', 'Six'],
            correct: 1,
            explanation: 'The strand has four: Integers; Cubes and Cube Roots; Indices and Logarithms; Compound Proportions and Rates of Work.'
        },
        {
            question: 'Which sub-strand comes first?',
            options: ['Cubes and Cube Roots', 'Indices and Logarithms', 'Integers', 'Matrices'],
            correct: 2,
            explanation: 'The KICD design begins Strand 1.0 with Integers.'
        },
        {
            question: 'Finding the side of a cube-shaped tank from its volume uses:',
            options: ['Integers only', 'Cube roots', 'Matrices', 'Probability'],
            correct: 1,
            explanation: 'If volume = side³, the side is the cube root of the volume.'
        },
        {
            question: 'A temperature of −5 °C is an example of:',
            options: ['A cube root', 'A logarithm', 'A negative integer', 'A ratio'],
            correct: 2,
            explanation: 'Temperatures below zero are written as negative integers.'
        },
        {
            question: 'Each sub-strand in this course ends with:',
            options: ['Worked examples, practice, quiz, assignment, revision and summary', 'Only a quiz', 'A science experiment', 'Nothing'],
            correct: 0,
            explanation: 'Every sub-strand closes with the same six support pages.'
        }
    ]
},
{
    name: '1.0 Numbers — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 20 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🎯 What You Will Achieve in Numbers</h2>
    <p style="font-size:16px;">These outcomes come from the KICD Grade 9 Mathematics curriculum design. Before a test, read each outcome and ask, “Can I do this without notes?”</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🌟 General Learning Outcomes</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Perform operations on integers and apply them in real-life situations.</li>
    <li>Work out cubes and cube roots by different methods.</li>
    <li>Apply the laws of indices and logarithms.</li>
    <li>Solve problems on compound proportions and rates of work.</li>
    <li>Appreciate the use of numbers in everyday life.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.1 Integers</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>perform basic operations on integers in different situations</li>
    <li>work out combined operations on integers in different situations</li>
    <li>apply integers to real-life situations</li>
    <li>appreciate the use of integers in real-life situations</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How do we carry out operations of integers in real-life situations? How do we apply integers in daily activities?</em>
    </p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0;color:#7dd3fc;font-weight:bold;">1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;">By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>work out cubes of numbers by multiplication in real-life situations</li>
    <li>determine cubes of numbers from mathematical tables</li>
    <li>determine cube roots of numbers by the factor method</li>
    <li>determine cube roots of numbers from mathematical tables</li>
    <li>determine cubes and cube roots of numbers using a calculator</li>
    <li>apply cubes and cube roots in real-life situations</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ Key inquiry question: <em>How do we work out the cubes and cube roots of numbers? Where do we apply them in real life?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Performs all operations accurately, including combined operations, and applies them correctly to unfamiliar real-life problems with clear reasoning.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">✅ Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Performs operations correctly with clear working and applies them to familiar real-life problems.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🔶 Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Performs simple operations with some errors, especially with signs or order of operations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">🔴 Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Attempts a few steps but needs support to complete standard problems.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>This batch covers sub-strands 1.1 and 1.2. Outcomes for 1.3 and 1.4 will be added with their lessons.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which is a learning outcome of sub-strand 1.1?',
            options: ['Find cube roots from tables', 'Multiply matrices', 'Draw a scale drawing', 'Work out combined operations on integers'],
            correct: 3,
            explanation: 'Combined operations on integers is part of Integers.'
        },
        {
            question: 'Determining cube roots by the factor method belongs to:',
            options: ['1.1 Integers', '1.2 Cubes and Cube Roots', '1.3 Indices and Logarithms', '2.1 Matrices'],
            correct: 1,
            explanation: 'The factor method for cube roots is in Cubes and Cube Roots.'
        },
        {
            question: 'A learner who performs operations correctly with clear working is at:',
            options: ['Below Expectations', 'Meets Expectations', 'Approaches Expectations', 'Not assessed'],
            correct: 1,
            explanation: 'Correct work with clear working is described as Meets Expectations.'
        },
        {
            question: 'Which tool does the curriculum suggest for finding cubes and cube roots?',
            options: ['A calculator and mathematical tables', 'A protractor only', 'A thermometer only', 'A compass only'],
            correct: 0,
            explanation: 'Learners use tables and calculators as well as multiplication and factors.'
        },
        {
            question: 'Errors with signs are typical of which level?',
            options: ['Exceeds Expectations', 'Meets Expectations', 'Approaches Expectations', 'None'],
            correct: 2,
            explanation: 'Sign and order-of-operation errors are described at Approaches Expectations.'
        }
    ]
},
{
    name: '1.1.1 Adding and Subtracting Integers',
    type: 'lesson',
    duration: '60 min',
    exercises: 11,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 1</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Adding and Subtracting Integers</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify positive and negative integers in real life.</li>
    <li>Add integers using a number line and sign rules.</li>
    <li>Subtract integers, including subtracting a negative.</li>
    <li>Solve simple real-life problems involving addition and subtraction of integers.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Whole numbers, the number line and the four operations from Grade 8.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we carry out operations of integers in real-life situations?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>At 6 a.m. in Nyahururu, one of Kenya’s coldest towns, a farmer reads a thermometer: 2 °C. By midnight on a cold July night it can drop below freezing. How do we describe a temperature 5 degrees below 2 °C? We need numbers less than zero — <strong>negative integers</strong>.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>Without calculating, decide whether each answer is positive or negative: (a) 3 + (−8) (b) −4 − (−10). Check later in the lesson.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“<strong>Integers</strong> are the whole numbers and their negatives: … −3, −2, −1, 0, 1, 2, 3 …. Zero is neither positive nor negative.</p>
    <p>On a number line, positive numbers lie to the right of zero and negative numbers to the left. <strong>Adding a positive</strong> moves you right. <strong>Adding a negative</strong> moves you left — it is the same as subtracting.</p>
    <p>To <strong>subtract</strong>, add the opposite: a − b = a + (−b). So subtracting a negative is the same as adding a positive: 5 − (−3) = 5 + 3 = 8.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Integer</p>
    <div>
    <p style="margin:0;">A whole number or its negative, including zero.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: −7, 0, 12</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Positive integer</p>
    <div>
    <p style="margin:0;">An integer greater than zero.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: +5 or 5</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Negative integer</p>
    <div>
    <p style="margin:0;">An integer less than zero.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: −5</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Opposite (additive inverse)</p>
    <div>
    <p style="margin:0;">The number the same distance from zero on the other side.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: The opposite of −4 is 4.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Absolute value</p>
    <div>
    <p style="margin:0;">The distance of a number from zero, always positive or zero.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: |−9| = 9</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Number line</p>
    <div>
    <p style="margin:0;">A line on which numbers are placed in order.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: … −2, −1, 0, 1, 2 …</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Ordering integers</p>
    <p>The further left on the number line, the smaller the number. So −8 &lt; −3 &lt; 0 &lt; 2. A common trap: −8 is <em>smaller</em> than −3 even though 8 is bigger than 3.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Adding integers</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Case</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rule</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same signs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add the absolute values; keep the sign</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 + (−6) = −10</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different signs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtract the absolute values; take the sign of the larger absolute value</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−9 + 4 = −5; 9 + (−4) = 5</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Subtracting integers</p>
    <p>Change subtraction into adding the opposite, then use the addition rules.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Subtraction</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Add the opposite</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 − 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 + (−10)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 − 5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 + (−5)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−7</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 − (−4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6 + 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 − (−8)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 + 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>3 + (−8): start at 3 and move 8 places left.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 130" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="20" y1="90" x2="540" y2="90" stroke="#94a3b8" stroke-width="2"/><line x1="30" y1="84" x2="30" y2="96" stroke="#94a3b8"/><text x="30" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−6</text><line x1="71.66666666666666" y1="84" x2="71.66666666666666" y2="96" stroke="#94a3b8"/><text x="71.66666666666666" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−5</text><line x1="113.33333333333333" y1="84" x2="113.33333333333333" y2="96" stroke="#94a3b8"/><text x="113.33333333333333" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−4</text><line x1="155" y1="84" x2="155" y2="96" stroke="#94a3b8"/><text x="155" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−3</text><line x1="196.66666666666666" y1="84" x2="196.66666666666666" y2="96" stroke="#94a3b8"/><text x="196.66666666666666" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−2</text><line x1="238.33333333333331" y1="84" x2="238.33333333333331" y2="96" stroke="#94a3b8"/><text x="238.33333333333331" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−1</text><line x1="280" y1="84" x2="280" y2="96" stroke="#94a3b8"/><text x="280" y="114" fill="#e2e8f0" font-size="12" text-anchor="middle">0</text><line x1="321.66666666666663" y1="84" x2="321.66666666666663" y2="96" stroke="#94a3b8"/><text x="321.66666666666663" y="114" fill="#86efac" font-size="12" text-anchor="middle">1</text><line x1="363.3333333333333" y1="84" x2="363.3333333333333" y2="96" stroke="#94a3b8"/><text x="363.3333333333333" y="114" fill="#86efac" font-size="12" text-anchor="middle">2</text><line x1="405" y1="84" x2="405" y2="96" stroke="#94a3b8"/><text x="405" y="114" fill="#86efac" font-size="12" text-anchor="middle">3</text><line x1="446.66666666666663" y1="84" x2="446.66666666666663" y2="96" stroke="#94a3b8"/><text x="446.66666666666663" y="114" fill="#86efac" font-size="12" text-anchor="middle">4</text><line x1="488.3333333333333" y1="84" x2="488.3333333333333" y2="96" stroke="#94a3b8"/><text x="488.3333333333333" y="114" fill="#86efac" font-size="12" text-anchor="middle">5</text><line x1="530" y1="84" x2="530" y2="96" stroke="#94a3b8"/><text x="530" y="114" fill="#86efac" font-size="12" text-anchor="middle">6</text><path d="M405 86 Q 238.33333333333331 36 71.66666666666666 86" fill="none" stroke="#f472b6" stroke-width="2.5"/><circle cx="71.66666666666666" cy="86" r="4" fill="#f472b6"/><text x="238.33333333333331" y="52" fill="#f472b6" font-size="13" text-anchor="middle">−8</text><circle cx="405" cy="90" r="6" fill="#7dd3fc"/>
    </svg>
    </div>
    <p>−4 − (−10) = −4 + 10: start at −4 and move 10 places right.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 130" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="20" y1="90" x2="540" y2="90" stroke="#94a3b8" stroke-width="2"/><line x1="30" y1="84" x2="30" y2="96" stroke="#94a3b8"/><text x="30" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−6</text><line x1="68.46153846153845" y1="84" x2="68.46153846153845" y2="96" stroke="#94a3b8"/><text x="68.46153846153845" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−5</text><line x1="106.92307692307692" y1="84" x2="106.92307692307692" y2="96" stroke="#94a3b8"/><text x="106.92307692307692" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−4</text><line x1="145.3846153846154" y1="84" x2="145.3846153846154" y2="96" stroke="#94a3b8"/><text x="145.3846153846154" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−3</text><line x1="183.84615384615384" y1="84" x2="183.84615384615384" y2="96" stroke="#94a3b8"/><text x="183.84615384615384" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−2</text><line x1="222.3076923076923" y1="84" x2="222.3076923076923" y2="96" stroke="#94a3b8"/><text x="222.3076923076923" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−1</text><line x1="260.7692307692308" y1="84" x2="260.7692307692308" y2="96" stroke="#94a3b8"/><text x="260.7692307692308" y="114" fill="#e2e8f0" font-size="12" text-anchor="middle">0</text><line x1="299.2307692307692" y1="84" x2="299.2307692307692" y2="96" stroke="#94a3b8"/><text x="299.2307692307692" y="114" fill="#86efac" font-size="12" text-anchor="middle">1</text><line x1="337.6923076923077" y1="84" x2="337.6923076923077" y2="96" stroke="#94a3b8"/><text x="337.6923076923077" y="114" fill="#86efac" font-size="12" text-anchor="middle">2</text><line x1="376.15384615384613" y1="84" x2="376.15384615384613" y2="96" stroke="#94a3b8"/><text x="376.15384615384613" y="114" fill="#86efac" font-size="12" text-anchor="middle">3</text><line x1="414.6153846153846" y1="84" x2="414.6153846153846" y2="96" stroke="#94a3b8"/><text x="414.6153846153846" y="114" fill="#86efac" font-size="12" text-anchor="middle">4</text><line x1="453.07692307692304" y1="84" x2="453.07692307692304" y2="96" stroke="#94a3b8"/><text x="453.07692307692304" y="114" fill="#86efac" font-size="12" text-anchor="middle">5</text><line x1="491.53846153846155" y1="84" x2="491.53846153846155" y2="96" stroke="#94a3b8"/><text x="491.53846153846155" y="114" fill="#86efac" font-size="12" text-anchor="middle">6</text><line x1="530" y1="84" x2="530" y2="96" stroke="#94a3b8"/><text x="530" y="114" fill="#86efac" font-size="12" text-anchor="middle">7</text><path d="M106.92307692307692 86 Q 299.2307692307692 36 491.53846153846155 86" fill="none" stroke="#22c55e" stroke-width="2.5"/><circle cx="491.53846153846155" cy="86" r="4" fill="#22c55e"/><text x="299.2307692307692" y="52" fill="#22c55e" font-size="13" text-anchor="middle">+10</text><circle cx="106.92307692307692" cy="90" r="6" fill="#7dd3fc"/>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Subtraction rule</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">a − b = a + (−b)</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Subtracting a number is the same as adding its opposite.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Every subtraction involving negatives.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Changing the sign of the first number as well.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Keep, change, change”: keep the first number, change − to +, change the sign of the second number.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Two minuses</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">a − (−b) = a + b</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Taking away a debt is like receiving money.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> When a negative number is subtracted.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Adding with the same sign <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out −7 + (−5).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Both negative: add the sizes and keep the negative sign.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 7 + 5 = 12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add the absolute values.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Keep the sign: −12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Both numbers are negative.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −12</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing +12 because “two negatives make a positive” — that rule is for multiplication, not addition.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Adding with different signs <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out −15 + 9.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Different signs: subtract the sizes; the larger size is 15 (negative).</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 15 − 9 = 6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract the absolute values.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Sign of the larger: negative</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> |−15| is larger than |9|.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −6</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> On a number line, start at −15 and move 9 right: you land on −6.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Subtracting a negative <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out −6 − (−14).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Keep, change, change.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> −6 + 14</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtracting −14 is adding 14.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 14 − 6 = 8; sign of 14 is positive</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Different signs: subtract and take the sign of the larger.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 8</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing −6 − 14 = −20 by ignoring the second minus.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: A string of additions and subtractions <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out 12 − 20 + (−7) − (−9).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Rewrite every subtraction as adding the opposite, then group positives and negatives.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 12 + (−20) + (−7) + 9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add the opposite for each subtraction.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Positives: 12 + 9 = 21</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Group the positive terms.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Negatives: −20 + (−7) = −27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Group the negative terms.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> 21 + (−27) = −6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Combine.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −6</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Temperature change <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> At the top of Mt Kenya the temperature at 4 a.m. is −6 °C. By noon it is 8 °C. By how many degrees has it risen?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Rise = final − initial.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 8 − (−6)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract the starting temperature from the final one.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 8 + 6 = 14</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtracting a negative is adding.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> It rose by 14 °C.</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Calculating 8 − 6 = 2, forgetting that the start was below zero.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out −11 + 4.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Signs are … (same/different) <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Subtract sizes: 11 − 4 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Sign of the larger: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Different signs; 7; negative, so −7.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out 3 − (−9).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Keep 3, change − to …, change −9 to … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>3 + 9 = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 + 9 = 12.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Arrange in ascending order: 4, −2, 0, −7, 1.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7, −2, 0, 1, 4</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Work out −3 + (−8).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Work out 5 + (−12).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Work out −9 − 6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−15</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Work out −4 − (−11).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Work out 15 + (−6) − (−3).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Work out −18 + 25 − (−7) − 30.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−16</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Find the number that must be added to −13 to give 5.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">18</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A diver is 12 m below the surface of Lake Victoria (−12 m). She swims up 5 m. Where is she now?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7 m (7 m below the surface)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Wanjiru’s M-Pesa balance is Ksh 250. She is charged a Fuliza debt of Ksh 400. What is her balance as an integer?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">250 − 400 = −150, so Ksh −150 (she owes Ksh 150)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Is a − b always smaller than a? Explain with an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No. If b is negative, a − b is larger: 5 − (−2) = 7.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌡️ Weather</p>
    <div>Temperatures below zero in high places such as Mt Kenya are negative.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏦 Money</p>
    <div>Overdrafts and debts are negative balances.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏢 Buildings</p>
    <div>Basement floors in Nairobi buildings are labelled B1, B2 — floors −1, −2.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⛵ Depth</p>
    <div>Depths below sea level or lake level are negative heights.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deciding the direction of each move on a number line.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Playing integer card games in pairs.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking answers with a calculator’s (−) key.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linking Grade 8 number work to negative numbers.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental awareness</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the (−) key for a negative number, not the subtraction key: 5 − (−3) is typed 5 − (−) 3 =.</li>
    <li>Use brackets to keep signs clear.</li>
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
    <li>Keep, change, change for subtraction.</li>
    <li>Group all positives and all negatives, then combine once.</li>
    <li>Picture a number line: right is up, left is down.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 + (−6) = 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Adding two negatives cannot give a positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 + (−6) = −10</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5 − (−3) = 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtracting a negative means adding</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5 − (−3) = 8</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8 is greater than −3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Further left is smaller</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8 is less than −3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using the subtraction key for a negative sign</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The calculator reads it as an operation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the (−) key</td>
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
    <li>Play “integer cards”: red cards negative, black cards positive; learners add pairs quickly.</li>
    <li>Use a large floor number line so learners physically walk the moves.</li>
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
    <li>Integers: … −2, −1, 0, 1, 2 …</li>
    <li>Same signs: add sizes, keep sign.</li>
    <li>Different signs: subtract sizes, sign of larger.</li>
    <li>a − b = a + (−b).</li>
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
    <li>Show the step where you change subtraction into addition.</li>
    <li>In word problems, state what a negative answer means (e.g. “7 m below the surface”).</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which is greater: −15 or −51?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−15</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: −6 + … = 0</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Predict the sign of −20 + 13.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Negative (−7)</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Record the minimum and maximum temperature in your area for five days (from a weather app or radio). Work out the daily range each day.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain to a friend why 5 − (−3) = 8?</li>
    <li>Which rule do I mix up most often?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Integers are whole numbers and their negatives.</li>
    <li>Same signs: add and keep the sign; different signs: subtract and take the sign of the larger.</li>
    <li>To subtract, add the opposite.</li>
    <li>A negative answer in real life often means below zero, a loss or a debt.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Rewrite</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−5 + (−9)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">same signs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−14</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−12 + 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">different signs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 − 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 + (−11)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−7</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 − (−9)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 + 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Integer</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Whole number or its negative.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Absolute value</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Distance from zero.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Opposite</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same size, other sign.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Negative</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Less than zero.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) Work out −14 + 6 − (−10). (b) The temperature in a freezer is −18 °C. It rises by 7 °C. Find the new temperature. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) −14 + 6 + 10 [1] = 2 [1]. (b) −18 + 7 [1] = −11 °C [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A lift starts at floor 3, goes down 5 floors, then up 2 floors. Which floor is it on? Show the integer working. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 + (−5) + 2 [2] = 0 (ground floor) [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Work out: (a) −17 + 9 (b) 6 − 15 (c) −8 − (−8) (d) −3 + (−4) − (−12).</li>
    <li>Write two real-life situations that use negative integers and make a question for each.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '−7 + (−5) equals:',
            options: ['12', '−12', '−2', '2'],
            correct: 1,
            explanation: 'Both numbers are negative, so add 7 and 5 and keep the negative sign.'
        },
        {
            question: '−15 + 9 equals:',
            options: ['−24', '6', '−6', '24'],
            correct: 2,
            explanation: 'Different signs: 15 − 9 = 6, and the larger size (15) is negative.'
        },
        {
            question: '−6 − (−14) equals:',
            options: ['−20', '−8', '8', '20'],
            correct: 2,
            explanation: 'Subtracting −14 is adding 14, and −6 + 14 = 8.'
        },
        {
            question: 'Which list is in ascending order?',
            options: ['0, −2, −7, 1', '−2, −7, 0, 1', '−7, −2, 0, 1', '1, 0, −2, −7'],
            correct: 2,
            explanation: 'Numbers further left on the number line are smaller, so −7 comes first.'
        },
        {
            question: 'The temperature rises from −6 °C to 8 °C. The rise is:',
            options: ['2 °C', '−14 °C', '−2 °C', '14 °C'],
            correct: 3,
            explanation: 'Rise = 8 − (−6) = 8 + 6 = 14 °C.'
        },
        {
            question: 'Which is the same as 9 − (−4)?',
            options: ['9 + 4', '9 − 4', '−9 + 4', '−9 − 4'],
            correct: 0,
            explanation: 'Subtracting a negative number is the same as adding its opposite.'
        },
        {
            question: 'A diver at −12 m rises 5 m. Her new position is:',
            options: ['−17 m', '−7 m', '7 m', '17 m'],
            correct: 1,
            explanation: 'Rising is adding: −12 + 5 = −7 m.'
        },
        {
            question: 'The absolute value of −9 is:',
            options: ['−9', '9', '0', '1/9'],
            correct: 1,
            explanation: 'Absolute value is distance from zero, which is always positive or zero.'
        },
        {
            question: '12 − 20 + (−7) − (−9) equals:',
            options: ['−6', '6', '−48', '2'],
            correct: 0,
            explanation: 'Rewrite as 12 − 20 − 7 + 9; positives make 21, negatives make −27, total −6.'
        },
        {
            question: 'What must be added to −13 to give 5?',
            options: ['−8', '8', '−18', '18'],
            correct: 3,
            explanation: 'The required number is 5 − (−13) = 18.'
        }
    ]
},
{
    name: '1.1.2 Multiplying and Dividing Integers',
    type: 'lesson',
    duration: '60 min',
    exercises: 11,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 2</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Multiplying and Dividing Integers</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use patterns to discover the sign rules for multiplication.</li>
    <li>Multiply integers, including more than two factors.</li>
    <li>Divide integers using the sign rules.</li>
    <li>Solve real-life problems involving multiplication and division of integers.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lesson 1.1.1 (adding and subtracting integers) and multiplication tables.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we carry out operations of integers in real-life situations?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A shop in Eldoret loses Ksh 300 every day for 4 days because of a broken fridge. The total change in profit is 4 × (−300). Is that positive or negative? And if a debt of Ksh 1 200 is shared equally among 3 partners, each one’s share is −1 200 ÷ 3. This lesson gives you the rules for such calculations.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Multiplication is repeated addition: 3 × (−4) = (−4) + (−4) + (−4) = −12. So a positive times a negative is negative.</p>
    <p>Look at the pattern: −3 × 2 = −6, −3 × 1 = −3, −3 × 0 = 0. Each time the second number falls by 1, the answer rises by 3. Continue: −3 × (−1) = 3, −3 × (−2) = 6. So a negative times a negative is <strong>positive</strong>.</p>
    <p>Division follows the same sign rules, because division undoes multiplication.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Product</p>
    <div>
    <p style="margin:0;">The result of multiplying.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: The product of −3 and 4 is −12.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Quotient</p>
    <div>
    <p style="margin:0;">The result of dividing.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: The quotient of −20 ÷ 5 is −4.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Factor</p>
    <div>
    <p style="margin:0;">A number being multiplied.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In −2 × 7, the factors are −2 and 7.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Sign rule</p>
    <div>
    <p style="margin:0;">The rule that decides whether an answer is positive or negative.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Negative × negative = positive.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Repeated addition</p>
    <div>
    <p style="margin:0;">Adding the same number several times.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3 × (−4) = −4 − 4 − 4</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Sign rules</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">First</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Second</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">× or ÷ result</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Same signs give a positive answer. Different signs give a negative answer.</div>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: More than two factors</p>
    <p>Count the negative factors. An <strong>even</strong> number of negatives gives a positive product; an <strong>odd</strong> number gives a negative product. Example: (−2) × (−3) × (−1) has three negatives, so the answer is −6.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Powers of negative numbers</p>
    <p>(−2)² = (−2) × (−2) = 4, but (−2)³ = −8. Watch out: −2² means −(2²) = −4, because the power applies only to 2.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Pattern that shows why negative × negative is positive:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Change</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 × 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 × 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 × 0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 × (−1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3 × (−2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">+3</td>
    </tr>
    </table>
    </div>
    <p>Repeated addition: 3 × (−4) on a number line</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 130" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="20" y1="90" x2="540" y2="90" stroke="#94a3b8" stroke-width="2"/><line x1="30" y1="84" x2="30" y2="96" stroke="#94a3b8"/><text x="30" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−13</text><line x1="65.71428571428572" y1="84" x2="65.71428571428572" y2="96" stroke="#94a3b8"/><text x="65.71428571428572" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−12</text><line x1="101.42857142857143" y1="84" x2="101.42857142857143" y2="96" stroke="#94a3b8"/><text x="101.42857142857143" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−11</text><line x1="137.14285714285714" y1="84" x2="137.14285714285714" y2="96" stroke="#94a3b8"/><text x="137.14285714285714" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−10</text><line x1="172.85714285714286" y1="84" x2="172.85714285714286" y2="96" stroke="#94a3b8"/><text x="172.85714285714286" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−9</text><line x1="208.57142857142858" y1="84" x2="208.57142857142858" y2="96" stroke="#94a3b8"/><text x="208.57142857142858" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−8</text><line x1="244.28571428571428" y1="84" x2="244.28571428571428" y2="96" stroke="#94a3b8"/><text x="244.28571428571428" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−7</text><line x1="280" y1="84" x2="280" y2="96" stroke="#94a3b8"/><text x="280" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−6</text><line x1="315.7142857142857" y1="84" x2="315.7142857142857" y2="96" stroke="#94a3b8"/><text x="315.7142857142857" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−5</text><line x1="351.42857142857144" y1="84" x2="351.42857142857144" y2="96" stroke="#94a3b8"/><text x="351.42857142857144" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−4</text><line x1="387.14285714285717" y1="84" x2="387.14285714285717" y2="96" stroke="#94a3b8"/><text x="387.14285714285717" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−3</text><line x1="422.8571428571429" y1="84" x2="422.8571428571429" y2="96" stroke="#94a3b8"/><text x="422.8571428571429" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−2</text><line x1="458.57142857142856" y1="84" x2="458.57142857142856" y2="96" stroke="#94a3b8"/><text x="458.57142857142856" y="114" fill="#fca5a5" font-size="12" text-anchor="middle">−1</text><line x1="494.2857142857143" y1="84" x2="494.2857142857143" y2="96" stroke="#94a3b8"/><text x="494.2857142857143" y="114" fill="#e2e8f0" font-size="12" text-anchor="middle">0</text><line x1="530" y1="84" x2="530" y2="96" stroke="#94a3b8"/><text x="530" y="114" fill="#86efac" font-size="12" text-anchor="middle">1</text><path d="M494.2857142857143 86 Q 422.8571428571429 36 351.42857142857144 86" fill="none" stroke="#f472b6" stroke-width="2.5"/><circle cx="351.42857142857144" cy="86" r="4" fill="#f472b6"/><text x="422.8571428571429" y="52" fill="#f472b6" font-size="13" text-anchor="middle">−4</text><path d="M351.42857142857144 86 Q 280 36 208.57142857142858 86" fill="none" stroke="#f472b6" stroke-width="2.5"/><circle cx="208.57142857142858" cy="86" r="4" fill="#f472b6"/><text x="280" y="52" fill="#f472b6" font-size="13" text-anchor="middle">−4</text><path d="M208.57142857142858 86 Q 137.14285714285717 36 65.71428571428572 86" fill="none" stroke="#f472b6" stroke-width="2.5"/><circle cx="65.71428571428572" cy="86" r="4" fill="#f472b6"/><text x="137.14285714285717" y="52" fill="#f472b6" font-size="13" text-anchor="middle">−4</text><circle cx="494.2857142857143" cy="90" r="6" fill="#7dd3fc"/>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Sign rules</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(+)(+) = + · (−)(−) = + · (+)(−) = − · (−)(+) = −</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Same signs give positive; different signs give negative.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Every multiplication and division of integers.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Friends together are happy (+); enemies together are sad (−).”</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Many factors</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">even number of negatives → + ; odd number of negatives → −</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Pair the negatives; each pair makes a positive.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Products with three or more factors.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Basic products <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out (a) 6 × (−7) (b) (−8) × (−5).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply the sizes, then apply the sign rule.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (a) 6 × 7 = 42; different signs</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So the answer is −42.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (b) 8 × 5 = 40; same signs</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So the answer is 40.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (a) −42 (b) 40</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Division <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out (a) −56 ÷ 8 (b) −72 ÷ (−9).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Same sign rules as multiplication.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (a) 56 ÷ 8 = 7; different signs</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Answer −7.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (b) 72 ÷ 9 = 8; same signs</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Answer 8.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> (a) −7 (b) 8</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> −7 × 8 = −56 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Three factors <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out (−2) × 5 × (−3) × (−4).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Count negatives: three (odd).</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2 × 5 × 3 × 4 = 120</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply the sizes.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Three negatives → negative</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> An odd number of negatives gives a negative product.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −120</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Making the answer positive because “negatives cancel” without counting them.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Powers <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate (−3)² , −3² and (−3)³.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Brackets decide what is squared.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (−3)² = (−3)(−3) = 9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The bracket squares −3.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> −3² = −(3 × 3) = −9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Only 3 is squared.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> (−3)³ = (−3)(−3)(−3) = −27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Three negatives give a negative.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 9, −9, −27</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Sharing a loss <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A chama of 6 members makes a loss of Ksh 4 800 (−4 800). The loss is shared equally. Find each member’s share, then the total change if the same loss happens for 3 months.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Divide the loss, then multiply.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> −4 800 ÷ 6 = −800</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Different signs give a negative quotient.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 3 × (−4 800) = −14 400</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Different signs give a negative product.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Each member: Ksh −800 (loses Ksh 800); 3 months: Ksh −14 400.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out (−9) × (−6).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Sizes: 9 × 6 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Signs: … (same/different) <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Answer: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">54; same; 54.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Work out 84 ÷ (−7).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>84 ÷ 7 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Signs: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Answer: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12; different; −12.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Work out −4 × 9.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−36</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Work out −45 ÷ (−5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Work out 7 × (−1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Work out (−2)(−2)(−2)(−2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">16</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Work out −144 ÷ 12.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−12</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Evaluate (−5)² and −5².</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">25 and −25</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Work out (−3) × (−4) × (−5) ÷ 6.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−60 ÷ 6 = −10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Find n if −8 × n = 96.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">n = −12</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> The water level of a dam falls by 3 cm every day for 9 days. Write the total change as an integer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9 × (−3) = −27 cm</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A debt of Ksh 2 700 is shared equally by 9 siblings. Write each share as an integer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−2 700 ÷ 9 = −300</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Without calculating, is (−1)¹⁰¹ positive or negative? Explain.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Negative: 101 negative factors is an odd number.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💸 Business</p>
    <div>Repeated daily losses are multiplied: 5 days × (−Ksh 200).</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌊 Water levels</p>
    <div>A steady fall in a dam level is a negative rate multiplied by time.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌡️ Cooling</p>
    <div>A freezer cooling by 4 °C every hour: change = hours × (−4).</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🤝 Sharing debts</p>
    <div>A shared debt divides a negative amount among members.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discovering the sign rules from patterns.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the sign rules to a partner.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Verifying products and quotients on a calculator.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Connecting repeated addition to multiplication of negatives.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental awareness</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Type (−) 8 × (−) 5 = to check signs.</li>
    <li>Use brackets for powers: ((−) 3) x² gives 9, but (−) 3 x² gives −9.</li>
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
    <li>Decide the sign first, then multiply the sizes.</li>
    <li>Count negatives: even → positive, odd → negative.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−8)(−5) = −40</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Same signs give a positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3² = 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The power applies only to 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3² = −9; (−3)² = 9</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 × 3 = 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Different signs give a negative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−12</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thinking the sign rule for × also works for +</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 + (−6) is not positive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use addition rules for + and −</td>
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
    <li>Let learners discover the rule from the pattern table before telling them.</li>
    <li>Use “owing money” stories for negative × positive.</li>
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
    <li>Same signs → positive.</li>
    <li>Different signs → negative.</li>
    <li>Count negatives for many factors.</li>
    <li>Brackets matter with powers.</li>
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
    <li>Write the sign decision as a step.</li>
    <li>Check a division by multiplying back.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Sign of (−7) × (−7) × (−7)?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Negative (three negatives).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: … × (−6) = 42</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Is (−1)²⁰ positive or negative?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Positive (even power).</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain why negative × negative is positive using a pattern?</li>
    <li>Do I mix up the sign rules for addition and multiplication?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Multiplication and division use the same sign rules.</li>
    <li>Same signs give positive; different signs give negative.</li>
    <li>An even number of negative factors gives a positive product.</li>
    <li>(−a)² is positive, but −a² is negative.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sign</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 × 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">different</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−42</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 × (−7)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">same</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">42</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">48 ÷ (−8)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">different</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2)³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">odd negatives</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Product</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Result of multiplication.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Quotient</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Result of division.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Factor</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A number being multiplied.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Sign rule</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rule for the sign of an answer.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Evaluate (a) (−4) × (−6) ÷ (−3) (b) (−2)⁴ − (−2)³. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 24 ÷ (−3) [1] = −8 [1]. (b) 16 − (−8) [1] = 24 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A tank loses 15 litres of water each hour through a leak. Write the change in the volume after 8 hours as an integer and explain its meaning. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8 × (−15) [1] = −120 [1]; the tank has 120 litres less [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Work out (a) −13 × 4 (b) −90 ÷ (−15) (c) (−1)(−2)(−3)(−4)(−5).</li>
    <li>Make a pattern table that shows why (−2) × (−3) = 6.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '6 × (−7) equals:',
            options: ['42', '−42', '−13', '13'],
            correct: 1,
            explanation: 'Different signs give a negative product: 6 × 7 = 42, so −42.'
        },
        {
            question: '(−8) × (−5) equals:',
            options: ['−40', '40', '−13', '3'],
            correct: 1,
            explanation: 'Same signs give a positive product.'
        },
        {
            question: '−72 ÷ (−9) equals:',
            options: ['−8', '81', '−81', '8'],
            correct: 3,
            explanation: 'Same signs give a positive quotient: 72 ÷ 9 = 8.'
        },
        {
            question: '(−2) × 5 × (−3) × (−4) equals:',
            options: ['120', '−24', '24', '−120'],
            correct: 3,
            explanation: 'There are three negative factors (odd), so the product is negative.'
        },
        {
            question: '(−3)² equals:',
            options: ['−9', '9', '−6', '6'],
            correct: 1,
            explanation: '(−3) × (−3) = 9 because the bracket squares the whole number.'
        },
        {
            question: '−3² equals:',
            options: ['9', '6', '−6', '−9'],
            correct: 3,
            explanation: 'Only 3 is squared, so −3² = −(3 × 3) = −9.'
        },
        {
            question: 'A loss of Ksh 4 800 shared by 6 members gives each:',
            options: ['Ksh −800', 'Ksh 800', 'Ksh −28 800', 'Ksh 4 794'],
            correct: 0,
            explanation: '−4 800 ÷ 6 = −800, a loss of Ksh 800 each.'
        },
        {
            question: 'If −8 × n = 96, then n is:',
            options: ['−12', '12', '88', '−104'],
            correct: 0,
            explanation: 'n = 96 ÷ (−8) = −12.'
        },
        {
            question: '(−1)¹⁰¹ is:',
            options: ['1', '101', '−1', '0'],
            correct: 2,
            explanation: 'An odd number of negative factors gives a negative product, so −1.'
        },
        {
            question: 'A dam falls 3 cm a day for 9 days. The change is:',
            options: ['27 cm', '−12 cm', '−27 cm', '12 cm'],
            correct: 2,
            explanation: 'A fall is negative: 9 × (−3) = −27 cm.'
        }
    ]
},
{
    name: '1.1.3 Combined Operations on Integers',
    type: 'lesson',
    duration: '60 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 3</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Combined Operations on Integers</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Apply the order of operations (BODMAS) to expressions with integers.</li>
    <li>Work out expressions with brackets, powers and all four operations.</li>
    <li>Simplify expressions with fractions whose numerators and denominators contain integers.</li>
    <li>Identify and correct order-of-operation errors.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 1.1.1 and 1.1.2; the order of operations from earlier grades.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we carry out operations of integers in real-life situations?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Two learners work out −6 + 4 × (−3). Achieng gets 6 by working from left to right. Baraka gets −18 by multiplying first. Only one is right. The order in which we carry out operations changes the answer, so mathematicians agree on one order — <strong>BODMAS</strong>.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>Who is right, Achieng or Baraka? Decide before reading on.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“BODMAS gives the order: <strong>B</strong>rackets, <strong>O</strong>f (powers and roots, and ‘of’ meaning ×), <strong>D</strong>ivision and <strong>M</strong>ultiplication (from left to right), <strong>A</strong>ddition and <strong>S</strong>ubtraction (from left to right).</p>
    <p>With integers, apply the sign rules at every step. So −6 + 4 × (−3) = −6 + (−12) = −18. Baraka is right.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">BODMAS</p>
    <div>
    <p style="margin:0;">The agreed order of operations.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Brackets, Of, Division, Multiplication, Addition, Subtraction</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Expression</p>
    <div>
    <p style="margin:0;">A combination of numbers and operations.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: −6 + 4 × (−3)</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Evaluate</p>
    <div>
    <p style="margin:0;">Find the value of.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Evaluate (−2)³ + 5.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Numerator</p>
    <div>
    <p style="margin:0;">The top of a fraction.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In −12/4, the numerator is −12.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Denominator</p>
    <div>
    <p style="margin:0;">The bottom of a fraction.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In −12/4, the denominator is 4.</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: The order</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Brackets first (work inside them).</li>
    <li>Powers and “of”.</li>
    <li>Division and multiplication, left to right.</li>
    <li>Addition and subtraction, left to right.</li>
    </ol>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Fractions as division</p>
    <p>A fraction bar acts like brackets: work out the whole numerator and the whole denominator first, then divide. For (−8 + 2)/(−3) = (−6)/(−3) = 2.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Left to right</p>
    <p>D and M have equal rank; so do A and S. Work them from left to right: −24 ÷ 6 × (−2) = −4 × (−2) = 8, not −24 ÷ (−12) = 2.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Step 1</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Step 2</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 + 4 × (−3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 × (−3) = −12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 + (−12)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−18</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−6 + 4) × (−3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 + 4 = −2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2 × (−3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−24 ÷ 6 × (−2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−24 ÷ 6 = −4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4 × (−2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>Same numbers, different brackets, different answers. Brackets are instructions about order.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Order of operations</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">B → O → D/M (left to right) → A/S (left to right)</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The agreed sequence for evaluating expressions.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Any expression with more than one operation.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Always doing multiplication before division, instead of left to right.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Multiplication before addition <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate 15 − 3 × (−4).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3 × (−4) = −12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiplication comes before subtraction.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 15 − (−12) = 27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtracting a negative is adding.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 27</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Brackets and powers <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate (−2)³ + 4 × (5 − 8).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Brackets, then power, then multiply, then add.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 5 − 8 = −3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Brackets first.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (−2)³ = −8</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Power next.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 4 × (−3) = −12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> −8 + (−12) = −20</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −20</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Left to right <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate −36 ÷ (−4) × 3 − 10.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Division and multiplication left to right, then subtract.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> −36 ÷ (−4) = 9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Division comes first because it is on the left.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 9 × 3 = 27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Then multiply.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 27 − 10 = 17</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract last.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 17</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Doing 4 × 3 first to get −36 ÷ (−12) = 3.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: A fraction <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate (−12 + 3 × (−2)) ÷ (4 − (−5)) written as a fraction: (−12 + 3 × (−2)) / (4 − (−5)).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Simplify numerator and denominator separately.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Numerator: 3 × (−2) = −6; −12 + (−6) = −18</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> BODMAS inside the numerator.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Denominator: 4 − (−5) = 9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtracting a negative.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> −18 ÷ 9 = −2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −2</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Spot the error <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A learner writes: −5 − 3² = −5 − (−9) = 4. Find and correct the error.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> What does 3² equal?</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3² = 9 (positive)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The learner wrote −9 by mistake.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> −5 − 9 = −14</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Subtract 9 from −5.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> The correct value is −14.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate −20 + 6 × (−2).</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>First: 6 × (−2) = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Then: −20 + … = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−12; −32.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate (−9 − 3) ÷ (−4) + 2.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Brackets: −9 − 3 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Divide by −4: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Add 2: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−12; 3; 5.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Evaluate 8 + 2 × (−5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Evaluate −18 ÷ 3 − 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Evaluate (7 − 10) × 4.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−12</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Evaluate −3 × (−4) − 20 ÷ (−5).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12 + 4 = 16</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Evaluate (−4)² − 3 × 7.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">16 − 21 = −5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Evaluate −48 ÷ (6 − 14).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Evaluate (−6 × 4 + 9) / (−3 − 2).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(−15)/(−5) = 3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Evaluate 2(−3)² − 5(−2) − (−4)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">18 + 10 + 64 = 92</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A trader makes Ksh 500 profit on each of 3 days and a loss of Ksh 800 on each of 2 days. Write and evaluate an expression for the total.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 × 500 + 2 × (−800) = 1 500 − 1 600 = −100 (a loss of Ksh 100)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Insert brackets to make −8 + 4 × −2 equal 8.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(−8 + 4) × (−2) = 8</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🛒 Business records</p>
    <div>Totals of daily profits and losses need the right order of operations.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧾 Spreadsheets</p>
    <div>Formulas such as =B2*C2−D2 follow the same order.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌡️ Averages</p>
    <div>The average of temperatures such as −2, 3 and −7 needs brackets: (−2 + 3 − 7) ÷ 3.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">💻 Programming</p>
    <div>Computer languages use BODMAS-style precedence.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the correct order of operations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing answers and finding errors together.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking long expressions on a calculator.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building on BODMAS from earlier grades.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental awareness</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Scientific calculators follow BODMAS automatically — basic calculators may not.</li>
    <li>For a fraction, put brackets around the whole numerator and the whole denominator.</li>
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
    <li>Underline the operation to do first before you start.</li>
    <li>Rewrite the expression after every step.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Working strictly left to right</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ignores BODMAS</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply and divide before adding and subtracting</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiplication always before division</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">They have equal rank</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Work D and M left to right</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dividing only part of the numerator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The fraction bar groups the whole numerator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simplify numerator and denominator fully first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3² = 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The power applies only to 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−3² = −9</td>
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
    <li>Have learners write each new line under the last, with one operation done per line.</li>
    <li>Use “spot the error” tasks to build checking habits.</li>
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
    <li>BODMAS.</li>
    <li>D/M and A/S: left to right.</li>
    <li>Fraction bar = brackets.</li>
    <li>Apply sign rules at each step.</li>
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
    <li>Show one step per line.</li>
    <li>Examiners give method marks for correct order even if a sign slip occurs later.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Evaluate −2 + 3 × (−1).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Is −12 ÷ 2 × 3 equal to −18 or −2?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−18 (left to right)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Evaluate (−1 − 1)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−8</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which part of BODMAS do I forget most?</li>
    <li>Did I check my answers with a calculator?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Follow BODMAS for combined operations.</li>
    <li>Division and multiplication have equal rank, as do addition and subtraction; work left to right.</li>
    <li>A fraction bar works like brackets.</li>
    <li>Apply integer sign rules at every step.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15 − 3 × (−4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">27</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2)³ + 4(5 − 8)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−20</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−36 ÷ (−4) × 3 − 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">17</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−12 − 6)/9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−2</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">BODMAS</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order of operations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Evaluate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find the value.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Expression</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Numbers joined by operations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Precedence</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Which operation comes first.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Evaluate, showing all steps: (a) −7 + 24 ÷ (−6) × 2 (b) (3 − 9)² ÷ (−4). <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 24 ÷ (−6) = −4 [1]; −4 × 2 = −8 [1]; −7 − 8 = −15 [1]. (b) 36 [1] ÷ (−4) = −9 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> Evaluate (−15 + 5 × 3) / (−2 − (−7)). <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Numerator 0 [1]; denominator 5 [1]; answer 0 [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Evaluate: (a) −4 − 6 × (−3) (b) (−5)² − 2 × (−8) (c) (−20 ÷ 4 + 1) × (−3).</li>
    <li>Make up an expression with integers that gives −10 and uses brackets, a power and division.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '−6 + 4 × (−3) equals:',
            options: ['−18', '6', '−30', '18'],
            correct: 0,
            explanation: 'Multiply first: 4 × (−3) = −12, then −6 + (−12) = −18.'
        },
        {
            question: '(−6 + 4) × (−3) equals:',
            options: ['−6', '6', '−18', '18'],
            correct: 1,
            explanation: 'The bracket gives −2, and −2 × (−3) = 6.'
        },
        {
            question: '15 − 3 × (−4) equals:',
            options: ['−48', '3', '27', '48'],
            correct: 2,
            explanation: '3 × (−4) = −12 and 15 − (−12) = 27.'
        },
        {
            question: '−24 ÷ 6 × (−2) equals:',
            options: ['2', '−8', '−2', '8'],
            correct: 3,
            explanation: 'Work left to right: −24 ÷ 6 = −4, then −4 × (−2) = 8.'
        },
        {
            question: '(−2)³ + 4 × (5 − 8) equals:',
            options: ['4', '−4', '20', '−20'],
            correct: 3,
            explanation: 'Brackets −3, power −8, multiply −12, add: −20.'
        },
        {
            question: 'In BODMAS, division and multiplication are done:',
            options: ['From left to right', 'Multiplication always first', 'Division always first', 'Last'],
            correct: 0,
            explanation: 'They have equal rank, so work from left to right.'
        },
        {
            question: '(−12 + 3 × (−2)) divided by (4 − (−5)) equals:',
            options: ['2', '−1', '−2', '−18'],
            correct: 2,
            explanation: 'Numerator −18, denominator 9, quotient −2.'
        },
        {
            question: '−5 − 3² equals:',
            options: ['4', '14', '−4', '−14'],
            correct: 3,
            explanation: '3² = 9, so −5 − 9 = −14.'
        },
        {
            question: 'A fraction bar acts like:',
            options: ['An addition sign', 'Brackets around numerator and denominator', 'A power', 'Nothing'],
            correct: 1,
            explanation: 'Simplify the whole top and whole bottom before dividing.'
        },
        {
            question: '3 × 500 + 2 × (−800) equals:',
            options: ['100', '3 100', '−100', '−3 100'],
            correct: 2,
            explanation: '1 500 + (−1 600) = −100, a loss of Ksh 100.'
        }
    ]
},
{
    name: '1.1.4 Integers in Real-Life Situations',
    type: 'lesson',
    duration: '60 min',
    exercises: 8,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 4</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Integers in Real-Life Situations</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Represent real-life quantities as positive or negative integers.</li>
    <li>Read and record temperature changes on a thermometer.</li>
    <li>Solve problems on money, heights, depths and time using integers.</li>
    <li>Appreciate the use of integers in daily activities.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 1.1.1 to 1.1.3.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we carry out operations of integers in real-life situations?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Integers are everywhere: the temperature on a thermometer, a lift moving between basement and upper floors, profits and losses in a kiosk, goals for and against in a football league, and heights above and below sea level. In this lesson you will turn real situations into integer calculations.</p>
    <div style="background:#1f2937;border-left:4px solid #94a3b8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">📜 Did You Know?</p>
    <div>Kenya’s highest point, Batian on Mt Kenya, is 5 199 m above sea level. The Indian Ocean coast is at 0 m. Any place below sea level would be written with a negative height.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Decide on a <strong>reference point</strong> (zero): sea level, ground floor, 0 °C, a balance of Ksh 0 or the start of a journey. Values above or after the reference are positive; values below or before it are negative.</p>
    <p>Then write the situation as an expression and use the rules you have learnt. Finally, <strong>interpret</strong> the answer in words.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Reference point</p>
    <div>
    <p style="margin:0;">The zero from which values are measured.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Sea level, 0 °C, ground floor</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Profit</p>
    <div>
    <p style="margin:0;">Money gained; a positive integer.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: +Ksh 600</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Loss</p>
    <div>
    <p style="margin:0;">Money lost; a negative integer.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: −Ksh 250</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Range</p>
    <div>
    <p style="margin:0;">The difference between the highest and lowest values.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Range of 8 °C and −6 °C is 14 °C.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Goal difference</p>
    <div>
    <p style="margin:0;">Goals scored minus goals conceded.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 12 − 15 = −3</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Choose the sign</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Positive</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Negative</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Temperature</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Above 0 °C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below 0 °C</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Money</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Profit, deposit, credit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Loss, withdrawal, debt</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Height</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Above sea level</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below sea level</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Floors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Above ground</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Basements</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Football</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Goals scored</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Goals conceded</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Write the expression</p>
    <p>Example: “A lift is at floor 4, goes down 6 floors, then up 1.” → 4 + (−6) + 1 = −1, so it is at basement 1.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Interpret</p>
    <p>Always state the meaning: −1 means one floor below ground; −150 means a debt of Ksh 150.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Reading temperature change on a thermometer:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 400 240" width="400" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="70" y="30" width="24" height="180" rx="12" fill="#1e293b" stroke="#94a3b8"/><circle cx="82" cy="215" r="18" fill="#ef4444"/><rect x="76" y="168" width="12" height="47" fill="#ef4444"/><line x1="94" y1="200" x2="104" y2="200" stroke="#94a3b8"/><text x="110" y="204" fill="#fca5a5" font-size="12">−10 °C</text><line x1="94" y1="184" x2="104" y2="184" stroke="#94a3b8"/><text x="110" y="188" fill="#fca5a5" font-size="12">−8 °C</text><line x1="94" y1="168" x2="104" y2="168" stroke="#94a3b8"/><text x="110" y="172" fill="#fca5a5" font-size="12">−6 °C</text><line x1="94" y1="152" x2="104" y2="152" stroke="#94a3b8"/><text x="110" y="156" fill="#fca5a5" font-size="12">−4 °C</text><line x1="94" y1="136" x2="104" y2="136" stroke="#94a3b8"/><text x="110" y="140" fill="#fca5a5" font-size="12">−2 °C</text><line x1="94" y1="120" x2="104" y2="120" stroke="#94a3b8"/><text x="110" y="124" fill="#e2e8f0" font-size="12">0 °C</text><line x1="94" y1="104" x2="104" y2="104" stroke="#94a3b8"/><text x="110" y="108" fill="#e2e8f0" font-size="12">2 °C</text><line x1="94" y1="88" x2="104" y2="88" stroke="#94a3b8"/><text x="110" y="92" fill="#e2e8f0" font-size="12">4 °C</text><line x1="94" y1="72" x2="104" y2="72" stroke="#94a3b8"/><text x="110" y="76" fill="#e2e8f0" font-size="12">6 °C</text><line x1="94" y1="56" x2="104" y2="56" stroke="#94a3b8"/><text x="110" y="60" fill="#e2e8f0" font-size="12">8 °C</text><line x1="94" y1="40" x2="104" y2="40" stroke="#94a3b8"/><text x="110" y="44" fill="#e2e8f0" font-size="12">10 °C</text><path d="M170 168 L 170 56" stroke="#22c55e" stroke-width="3" marker-end="none"/><polygon points="164,64 176,64 170,56" fill="#22c55e"/><text x="182" y="172" fill="#fca5a5" font-size="13">Night: −6 °C</text><text x="182" y="60" fill="#86efac" font-size="13">Noon: 8 °C</text><text x="182" y="116" fill="#fde68a" font-size="13">Rise = 8 − (−6) = 14 °C</text>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Change</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">change = final value − initial value</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Positive change is a rise or gain; negative change is a fall or loss.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Temperature changes, balances, heights.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Range</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">range = highest − lowest</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> The spread of the values.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Comparing temperatures or results.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Lift <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A lift in a Nairobi office block starts at floor 7. It goes down 9 floors, then up 3. Which floor is it on?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Down is negative, up is positive.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 7 + (−9) + 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Write the moves as integers.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Combine.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Floor 1</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Temperature range <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Minimum temperatures recorded at a station on five nights were 3, −2, −5, 1 and −1 °C. Find the range and the mean.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Range = highest − lowest; mean = total ÷ 5.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Range = 3 − (−5) = 8 °C</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Highest minus lowest.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Total = 3 − 2 − 5 + 1 − 1 = −4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add the integers.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Mean = −4 ÷ 5 = −0.8 °C</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by the number of nights.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Range 8 °C; mean −0.8 °C</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Kiosk records <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A kiosk records: Mon +450, Tue −200, Wed +300, Thu −650, Fri +150 (Ksh). Find the week’s overall result.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Add all the integers.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Positives: 450 + 300 + 150 = 900</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Gains.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Negatives: −200 − 650 = −850</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Losses.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 900 − 850 = 50</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Overall.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Overall profit of Ksh 50</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Goal difference <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A team scored 18 goals and conceded 23. Another scored 15 and conceded 17. Which has the better goal difference?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Goal difference = scored − conceded.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 18 − 23 = −5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Team A.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 15 − 17 = −2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Team B.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> −2 is greater than −5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Compare on the number line.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Team B (−2 is better than −5).</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Height and depth <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A bird flies at 35 m above the surface of Lake Turkana while a fish swims 12 m below it. What is the vertical distance between them? The fish then dives 8 m deeper. Find its new position and the new distance.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Use the surface as 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Bird +35, fish −12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Choose signs.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Distance = 35 − (−12) = 47 m</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Difference of positions.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> New fish position = −12 + (−8) = −20 m</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Diving deeper is negative.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> New distance = 35 − (−20) = 55 m</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Difference again.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 47 m; −20 m; 55 m</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A freezer is at −18 °C. During a power cut it warms by 2 °C every hour for 5 hours. Find the new temperature.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Change = 5 × … = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>New = −18 + … = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5 × 2 = 10; −18 + 10 = −8 °C.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Otieno’s balance is Ksh 120. He pays Ksh 420 using an overdraft service. What is his balance?</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Balance = 120 − … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>= … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">120 − 420 = −300, a debt of Ksh 300.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Write as integers: a deposit of Ksh 500; a debt of Ksh 80; 3 floors below ground.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">+500, −80, −3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> The temperature is −4 °C and rises by 9 °C. Find the new temperature.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5 °C</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A submarine is at −150 m. It rises 60 m, then dives 45 m. Find its final depth.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−135 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find the range of these temperatures: −7, 2, 5, −1 °C.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12 °C</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> In a quiz, a correct answer earns +3 and a wrong answer −1. Amina answers 20 questions and gets 13 right. Find her score.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">13 × 3 + 7 × (−1) = 32</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> The mean of five temperatures is −2 °C. Four of them are 1, −4, −3 and 0. Find the fifth.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Total −10; 1 − 4 − 3 + 0 = −6; fifth = −4 °C</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> A boda boda rider earns Ksh 1 200 a day but spends Ksh 1 450 on fuel and repairs on a bad day. Write the day’s result as an integer, then the result for 4 such days.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−250; 4 × (−250) = −1 000</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Why is it important to choose a reference point before writing integers?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Signs only make sense relative to a zero; a different zero changes the values.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌡️ Kenya Meteorological Department</p>
    <div>Records minimum and maximum temperatures, including below zero on high ground.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⚽ League tables</p>
    <div>Goal difference can be negative.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📱 Mobile money</p>
    <div>Overdraft services create negative balances.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">⛰️ Geography</p>
    <div>Heights above and depths below sea level.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Turning word problems into integer expressions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Playing and designing integer games in groups.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a weather app or spreadsheet to record temperature changes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reflecting on where integers appear in daily life.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental awareness</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Enter each value with its sign and add them in one line to find totals quickly.</li>
    <li>Use a spreadsheet: =SUM(B2:B6) adds a column of profits and losses.</li>
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
    <li>Group gains and losses separately.</li>
    <li>For changes, always do final − initial.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change = initial − final</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gives the opposite sign</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change = final − initial</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Range of 3 and −5 = 3 − 5 = −2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lowest is −5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 − (−5) = 8</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaving −150 without meaning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Real-life answers need interpretation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Say “a debt of Ksh 150”</td>
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
    <li>Collect real temperature data from a weather app for class problems.</li>
    <li>Let groups design an integer board game with + and − squares.</li>
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
    <li>Pick a zero.</li>
    <li>Write the expression.</li>
    <li>Calculate.</li>
    <li>Interpret in words.</li>
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
    <li>State the meaning of a negative answer.</li>
    <li>Include units (°C, m, Ksh).</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Write a withdrawal of Ksh 700 as an integer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−700</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Range of −10 and 4?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">14</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Goal difference for 9 scored, 14 conceded?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−5</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Play “Integer Market”: each group starts with Ksh 0 and draws cards showing profits or losses. After ten rounds, write and evaluate the expression for your final balance.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Where have I seen negative numbers this week?</li>
    <li>Can I explain my answers in words, not just numbers?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Choose a reference point, then use positive and negative integers.</li>
    <li>Change = final − initial; range = highest − lowest.</li>
    <li>Interpret negative answers as below zero, a loss or a debt.</li>
    <li>Integers appear in weather, money, sport, buildings and geography.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Integer expression</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lift: floor 7, down 9, up 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 − 9 + 3 = 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Floor 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 °C to 8 °C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 − (−6) = 14</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rise of 14 °C</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ksh 250 balance, pay 400</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">250 − 400 = −150</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Debt of Ksh 150</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">18 scored, 23 conceded</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">18 − 23 = −5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Goal difference −5</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Reference point</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The zero of a situation.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Profit</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Positive gain.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Loss</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Negative change in money.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Range</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Highest minus lowest.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> The table shows a school canteen’s daily results (Ksh): Mon −300, Tue 750, Wed −120, Thu 480, Fri −90. (a) Find the total for the week. (b) Find the difference between the best and worst days. <span style="color:#fde68a;font-size:13px;">(4 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 750 + 480 − 300 − 120 − 90 [1] = 720 profit [1]. (b) 750 − (−300) [1] = 1 050 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> At 6 a.m. the temperature on Mt Kenya was −8 °C. It rose 3 °C every hour for 5 hours. Find the temperature at 11 a.m. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Change 5 × 3 = 15 [1]; −8 + 15 [1] = 7 °C [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Record the minimum temperature in your area for 7 days (or use given data). Find the range and mean.</li>
    <li>Write and solve three word problems: one on money, one on floors and one on temperature.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A debt of Ksh 80 is written as:',
            options: ['80', '0.80', '−80', '+80'],
            correct: 2,
            explanation: 'Debts and losses are negative integers.'
        },
        {
            question: 'A lift at floor 7 goes down 9 then up 3. It is now at floor:',
            options: ['−1', '19', '5', '1'],
            correct: 3,
            explanation: 'Down is negative and up is positive: 7 − 9 + 3 = 1.'
        },
        {
            question: 'The range of 3, −2, −5, 1 and −1 °C is:',
            options: ['2 °C', '−8 °C', '8 °C', '4 °C'],
            correct: 2,
            explanation: 'Highest minus lowest: 3 − (−5) = 8 °C.'
        },
        {
            question: 'Change in temperature from −18 °C to −8 °C is:',
            options: ['10 °C', '−10 °C', '26 °C', '−26 °C'],
            correct: 0,
            explanation: 'Final − initial = −8 − (−18) = 10 °C, a rise.'
        },
        {
            question: 'Weekly kiosk results +450, −200, +300, −650, +150 give:',
            options: ['Loss Ksh 50', 'Profit Ksh 50', 'Profit Ksh 1 750', 'Loss Ksh 1 750'],
            correct: 1,
            explanation: 'Gains 900 minus losses 850 leaves a profit of 50.'
        },
        {
            question: 'Which goal difference is better?',
            options: ['−5', '−7', '−2', '−9'],
            correct: 2,
            explanation: '−2 is furthest right on the number line, so it is the greatest.'
        },
        {
            question: 'A bird at 35 m and a fish at −12 m are how far apart vertically?',
            options: ['47 m', '23 m', '−47 m', '35 m'],
            correct: 0,
            explanation: 'The distance is the difference of positions: 35 − (−12) = 47 m.'
        },
        {
            question: 'Amina scores +3 per correct answer and −1 per wrong one; 13 right and 7 wrong gives:',
            options: ['46', '39', '26', '32'],
            correct: 3,
            explanation: '13 × 3 + 7 × (−1) = 39 − 7 = 32.'
        },
        {
            question: 'Change is calculated as:',
            options: ['Initial − final', 'Final value − initial value', 'Final + initial', 'Final × initial'],
            correct: 1,
            explanation: 'A positive result shows a rise; a negative result shows a fall.'
        },
        {
            question: 'Basement level 2 is written as:',
            options: ['2', '−2', '0', '20'],
            correct: 1,
            explanation: 'Floors below the ground floor (0) are negative.'
        }
    ]
},
{
    name: '1.1 Worked Examples: Integers',
    type: 'lesson',
    duration: '45 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Worked Examples</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 45 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">✏️ Worked Examples — Integers</h2>
    <p style="font-size:16px;">Exam-style examples that combine all four operations and real-life contexts.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Operations and order</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Mixed operations <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate −8 − (−3) × 4 + 18 ÷ (−6).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply and divide first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (−3) × 4 = −12</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 18 ÷ (−6) = −3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> −8 − (−12) + (−3) = −8 + 12 − 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Rewrite subtraction.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> = 1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Combine.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 1</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Powers and brackets <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate [(−2)³ − (−4)²] ÷ (−3 − 3).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Square brackets first, then divide.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> (−2)³ = −8; (−4)² = 16</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Powers.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> −8 − 16 = −24</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Inside the square brackets.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> −3 − 3 = −6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Denominator.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#bae6fd;">Step 4:</strong> −24 ÷ (−6) = 4</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 4</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Real life</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Average temperature <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Temperatures at Kinangop at 5 a.m. on six days were −2, 1, −3, 0, −4 and 2 °C. Find the mean.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Mean = total ÷ number of days.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Total = −2 + 1 − 3 + 0 − 4 + 2 = −6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Add the integers.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Mean = −6 ÷ 6 = −1</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 6.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −1 °C</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Savings and debt <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A youth group has Ksh 2 400. It pays 5 members Ksh 600 each, then receives a grant of Ksh 1 500. What is its balance? Interpret.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Payments are negative.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2 400 + 5 × (−600) + 1 500</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Write the expression.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> = 2 400 − 3 000 + 1 500</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> = 900</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Combine.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Ksh 900; the group still has money.</div>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 How Examiners Mark These</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Method marks for writing the correct expression.</li>
    <li>Accuracy marks for correct signs.</li>
    <li>Interpretation marks for real-life meaning.</li>
    </ul>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '−8 − (−3) × 4 + 18 ÷ (−6) equals:',
            options: ['−23', '1', '−5', '17'],
            correct: 1,
            explanation: 'Multiply and divide first: −8 + 12 − 3 = 1.'
        },
        {
            question: '[(−2)³ − (−4)²] ÷ (−3 − 3) equals:',
            options: ['−4', '4', '−1', '1'],
            correct: 1,
            explanation: 'Numerator −24 and denominator −6 give 4.'
        },
        {
            question: 'The mean of −2, 1, −3, 0, −4 and 2 is:',
            options: ['1', '−6', '0', '−1'],
            correct: 3,
            explanation: 'Total −6 divided by 6 gives −1.'
        },
        {
            question: '2 400 + 5 × (−600) + 1 500 equals:',
            options: ['900', '−900', '6 900', '3 900'],
            correct: 0,
            explanation: '2 400 − 3 000 + 1 500 = 900.'
        },
        {
            question: 'In word problems, a negative answer should be:',
            options: ['Ignored', 'Made positive', 'Interpreted in words', 'Rounded'],
            correct: 2,
            explanation: 'Explaining the meaning earns interpretation marks.'
        }
    ]
},
{
    name: '1.1 Practice: Integers',
    type: 'lesson',
    duration: '60 min',
    exercises: 19,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Practice</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🏋️ Practice Set — Integers</h2>
    <p style="font-size:16px;">Twenty questions covering all four lessons.</p>
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
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> −9 + 4</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> −6 − 7</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−13</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> 5 − (−8)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">13</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> −3 × 8</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−24</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> −63 ÷ (−7)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">9</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> (−2)(−3)(−5)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−30</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> −4 + 6 × (−2)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−16</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> (−3)² − 4²</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> −50 ÷ (3 − 13)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Arrange in descending order: −3, 5, −12, 0, 1</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5, 1, 0, −3, −12</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> (−5 × 4 + 2) ÷ (−3 + 6)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> 2(−4)² − 3(−2)³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">32 + 24 = 56</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q13.</strong> Find x if −7x = −91.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">13</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q14.</strong> Insert brackets so that 6 − 2 × −3 + 1 equals 10.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6 − 2 × (−3 + 1) = 6 − 2 × (−2) = 6 + 4 = 10</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q15.</strong> A fridge at 4 °C is set to cool by 3 °C per hour. Find its temperature after 5 hours.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4 + 5 × (−3) = −11 °C</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q16.</strong> A climber at 4 200 m descends 650 m, then climbs 300 m. Find her height.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 850 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q17.</strong> A school team scored 21 and conceded 26 goals. Find the goal difference.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−5</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #93c5fd;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">Exam Style</p>
    <p style="margin:8px 0 2px 0;"><strong>Q18.</strong> (a) Evaluate (−36 ÷ 4) − (−2)³. (b) Interpret −250 in a bank statement.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) −9 + 8 = −1 (b) An overdraft or debt of 250</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q19.</strong> The mean of four numbers is −3. Three are 2, −5 and −7. Find the fourth.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Total −12; 2 − 5 − 7 = −10; fourth −2</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">17 – 20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Move to the quiz.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 – 16</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redo the ones you missed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 – 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Revise the lessons, then retry.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 – 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ask your teacher for help and repeat the guided examples.</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '−9 + 4 equals:',
            options: ['5', '−13', '13', '−5'],
            correct: 3,
            explanation: 'Different signs: 9 − 4 = 5, and the larger size is negative.'
        },
        {
            question: '(−2)(−3)(−5) equals:',
            options: ['30', '−10', '10', '−30'],
            correct: 3,
            explanation: 'Three negative factors give a negative product.'
        },
        {
            question: '−50 ÷ (3 − 13) equals:',
            options: ['−5', '5', '−3.85', '−25'],
            correct: 1,
            explanation: 'The bracket gives −10, and −50 ÷ (−10) = 5.'
        },
        {
            question: 'If −7x = −91, x equals:',
            options: ['−13', '84', '13', '−84'],
            correct: 2,
            explanation: 'Divide both sides by −7: x = 13.'
        },
        {
            question: 'A fridge at 4 °C cools 3 °C per hour for 5 hours. Its temperature is:',
            options: ['−11 °C', '19 °C', '−15 °C', '11 °C'],
            correct: 0,
            explanation: '4 + 5 × (−3) = 4 − 15 = −11 °C.'
        }
    ]
},
{
    name: '1.1 Quiz: Integers',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📝 Sub-strand 1.1 Quiz</h2>
    <p style="font-size:16px;">Test yourself on all four lessons on integers.</p>
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
    <li>Ordering, adding and subtracting integers</li>
    <li>Multiplying and dividing integers; sign rules</li>
    <li>Combined operations (BODMAS)</li>
    <li>Integers in real-life situations</li>
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
    <div>Most wrong options come from sign slips. Decide the sign separately before calculating the size.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which integer is the smallest?',
            options: ['−3', '0', '−11', '2'],
            correct: 2,
            explanation: '−11 is furthest left on the number line.'
        },
        {
            question: '−4 + (−9) equals:',
            options: ['5', '−13', '−5', '13'],
            correct: 1,
            explanation: 'Same signs: add sizes and keep the negative sign.'
        },
        {
            question: '7 − 12 equals:',
            options: ['−5', '5', '19', '−19'],
            correct: 0,
            explanation: 'Subtracting 12 is adding −12: 7 + (−12) = −5.'
        },
        {
            question: '−2 − (−10) equals:',
            options: ['−12', '−8', '12', '8'],
            correct: 3,
            explanation: 'Subtracting −10 is adding 10.'
        },
        {
            question: '−6 × (−9) equals:',
            options: ['−54', '−15', '54', '15'],
            correct: 2,
            explanation: 'Same signs give a positive product.'
        },
        {
            question: '84 ÷ (−12) equals:',
            options: ['7', '72', '−72', '−7'],
            correct: 3,
            explanation: 'Different signs give a negative quotient.'
        },
        {
            question: '(−1)(−1)(−1)(−1) equals:',
            options: ['−1', '1', '−4', '4'],
            correct: 1,
            explanation: 'Four negatives is an even number, so the product is positive.'
        },
        {
            question: '−4² equals:',
            options: ['16', '8', '−8', '−16'],
            correct: 3,
            explanation: 'Only 4 is squared: −(4 × 4) = −16.'
        },
        {
            question: '5 + 3 × (−4) equals:',
            options: ['−7', '−32', '17', '7'],
            correct: 0,
            explanation: 'Multiply first: 5 − 12 = −7.'
        },
        {
            question: '−18 ÷ 3 × (−2) equals:',
            options: ['12', '3', '−12', '−3'],
            correct: 0,
            explanation: 'Left to right: −6 × (−2) = 12.'
        },
        {
            question: 'The temperature falls from 5 °C to −7 °C. The change is:',
            options: ['12 °C', '−12 °C', '−2 °C', '2 °C'],
            correct: 1,
            explanation: 'Final − initial = −7 − 5 = −12 °C, a fall of 12 °C.'
        },
        {
            question: 'A team scored 10 goals and conceded 14. Goal difference is:',
            options: ['4', '24', '−4', '−24'],
            correct: 2,
            explanation: 'Goal difference = scored − conceded = 10 − 14 = −4.'
        },
        {
            question: 'The mean of −6, 2 and −5 is:',
            options: ['−3', '3', '−9', '−13'],
            correct: 0,
            explanation: 'Total −9 divided by 3 gives −3.'
        },
        {
            question: '(−9 + 3) divided by (−2) equals:',
            options: ['−3', '3', '6', '−6'],
            correct: 1,
            explanation: 'Numerator −6 divided by −2 gives 3.'
        },
        {
            question: 'A withdrawal of Ksh 1 000 is written as:',
            options: ['1 000', '+1 000', '0', '−1 000'],
            correct: 3,
            explanation: 'Money leaving an account is a negative change.'
        }
    ]
},
{
    name: '1.1 Assignment: Integers',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 120 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📂 Assignment: The Integer Weather and Money Diary</h2>
    <p style="font-size:16px;">Collect real data for one week and use integers to analyse it.</p>
    <p style="margin:6px 0 0 0;color:#e0f2fe;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work).</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your class is preparing a display for parents on “Mathematics in Everyday Life”. Each learner will contribute an integer diary showing temperatures and a small money record.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Weather stations and businesses keep records like these every day to plan ahead.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Tasks</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>For 7 days, record the morning (or minimum) temperature in your area from a thermometer, radio or weather app.</li>
    <li>Find the daily changes between consecutive days as integers (final − initial).</li>
    <li>Find the range and the mean of the 7 temperatures.</li>
    <li>Create a pretend kiosk record for 7 days with at least three losses (negative) and three profits (positive).</li>
    <li>Find the total, the best and worst days, and the difference between them.</li>
    <li>Write two of your calculations as single expressions using BODMAS and evaluate them.</li>
    <li>Present your diary as a table and a number-line or bar diagram, and write a paragraph explaining what the negative numbers mean.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Temperature table with daily changes</li>
    <li>Range and mean with working</li>
    <li>Kiosk record with totals</li>
    <li>Two BODMAS expressions</li>
    <li>Diagram and explanatory paragraph</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data collection</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete, accurate and sourced</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some days missing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little data</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integer calculations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All changes, totals, range and mean correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several sign errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few correct</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Expressions and BODMAS</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two correct expressions, clearly evaluated</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two expressions with minor slips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One expression</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">None</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear table, diagram and insightful paragraph</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear presentation</td>
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
    <li>Label each column with units.</li>
    <li>Use colours: red for negative, green for positive.</li>
    <li>Check totals by adding positives and negatives separately.</li>
    </ul>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did the negative numbers tell me about the week?</li>
    <li>Which calculation was hardest?</li>
    <li>Where else could I use integers?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Daily change in temperature is calculated as:',
            options: ['Yesterday − today', 'Today − yesterday', 'Today + yesterday', 'Today × yesterday'],
            correct: 1,
            explanation: 'Change = final − initial.'
        },
        {
            question: 'If temperatures are 2, −1, −4, 0, 3, 1 and −1 °C, the range is:',
            options: ['7 °C', '3 °C', '−7 °C', '4 °C'],
            correct: 0,
            explanation: 'Highest 3 minus lowest −4 gives 7 °C.'
        },
        {
            question: 'A loss in the kiosk record should be written as:',
            options: ['A positive integer', 'Zero', 'A fraction', 'A negative integer'],
            correct: 3,
            explanation: 'Losses reduce the total, so they are negative.'
        },
        {
            question: 'Profits 300, 450, 200 and losses −150, −500, −250 total:',
            options: ['−50', '1 850', '50', '−1 850'],
            correct: 2,
            explanation: 'Profits total 950 and losses total 900, so 950 − 900 = 50.'
        },
        {
            question: 'Why use red and green colours?',
            options: ['To make the work longer', 'Because it is required by law', 'No reason', 'To show negative and positive values clearly'],
            correct: 3,
            explanation: 'Colour helps readers see gains and losses at a glance.'
        }
    ]
},
{
    name: '1.1 Revision: Integers',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🔁 Revision — Integers</h2>
    <p style="font-size:16px;">Review these cards before the next sub-strand.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">1. Adding</p>
    <div>
    <p>Same signs: add and keep the sign. Different signs: subtract and take the sign of the larger.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">2. Subtracting</p>
    <div>
    <p>Add the opposite: a − b = a + (−b); a − (−b) = a + b.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">3. Multiplying and dividing</p>
    <div>
    <p>Same signs → positive; different signs → negative. Count negatives for many factors.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">4. Order of operations</p>
    <div>
    <p>BODMAS; D/M and A/S left to right; fraction bars act as brackets.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">5. Real life</p>
    <div>
    <p>Choose a zero; write the expression; calculate; interpret. Change = final − initial; range = highest − lowest.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Add</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8 + 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−5</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtract</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8 − (−3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multiply</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8 × (−3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">24</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Divide</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−24 ÷ 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−8</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Combined</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 − 3 × (−4)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">14</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> −17 + 11</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−6</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> −5 − 16</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−21</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> (−4)(−6) ÷ (−3)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> (−3)³ + 20</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> (10 − 4 × 5) ÷ (−5)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Temperature rises from −9 °C by 13 °C. New temperature?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4 °C</div>
    </details>
    </div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can order integers.</p>
    <p style="margin:6px 0;">☐ I can add and subtract integers.</p>
    <p style="margin:6px 0;">☐ I can multiply and divide integers.</p>
    <p style="margin:6px 0;">☐ I can use BODMAS with integers.</p>
    <p style="margin:6px 0;">☐ I can solve and interpret real-life problems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '−17 + 11 equals:',
            options: ['−6', '6', '−28', '28'],
            correct: 0,
            explanation: 'Different signs: 17 − 11 = 6, negative because 17 is larger.'
        },
        {
            question: '(−4)(−6) ÷ (−3) equals:',
            options: ['8', '−24', '−8', '24'],
            correct: 2,
            explanation: '(−4)(−6) = 24, then 24 ÷ (−3) = −8 because the signs differ.'
        },
        {
            question: '(−3)³ + 20 equals:',
            options: ['47', '7', '−7', '−47'],
            correct: 2,
            explanation: '(−3)³ = −27, and −27 + 20 = −7.'
        },
        {
            question: '(10 − 4 × 5) ÷ (−5) equals:',
            options: ['2', '−2', '6', '−6'],
            correct: 0,
            explanation: 'Bracket gives 10 − 20 = −10, and −10 ÷ (−5) = 2.'
        },
        {
            question: 'Range of −9 and 4 is:',
            options: ['−5', '13', '5', '−13'],
            correct: 1,
            explanation: 'Range = highest − lowest = 4 − (−9) = 13.'
        }
    ]
},
{
    name: '1.1 Summary: Integers',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.1 Integers</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 15 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🧾 Summary — Integers</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Integers extend the number line below zero. Simple sign rules let you add, subtract, multiply and divide them, BODMAS tells you the order, and real-life situations — temperature, money, height and sport — give the answers meaning.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔑 Key Points</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Integers are whole numbers and their negatives.</li>
    <li>Same signs add and keep the sign; different signs subtract.</li>
    <li>Subtracting means adding the opposite.</li>
    <li>Same signs multiply or divide to a positive; different signs to a negative.</li>
    <li>BODMAS sets the order of operations.</li>
    <li>In real life, choose a zero and interpret negative answers.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Adding and subtracting</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number line and sign rules</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−6 − (−14)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Multiplying and dividing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sign rules and powers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2)³ vs −2³</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Combined operations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">BODMAS with integers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−24 ÷ 6 × (−2)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Real life</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Temperature, money, heights, sport</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change = final − initial</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Subtraction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">a − b = a + (−b)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sign rules</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">same → +, different → −</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">BODMAS</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Change</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">final − initial</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Range</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">highest − lowest</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integer</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Negative</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Positive</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Absolute value</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Opposite</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Product</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Quotient</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">BODMAS</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Range</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Weather reports, bank statements, league tables and building lifts all use integers every day.</div>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Cubes and Cube Roots uses multiplication — including negative numbers — to find cubes and to work backwards to cube roots.</div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ add and subtract integers</p>
    <p style="margin:6px 0;">✔️ multiply and divide integers</p>
    <p style="margin:6px 0;">✔️ evaluate combined operations</p>
    <p style="margin:6px 0;">✔️ apply integers to real-life problems</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which rule is for multiplication?',
            options: ['Same signs give a positive', 'Same signs add and keep the sign', 'Change the sign of both numbers', 'Ignore the signs'],
            correct: 0,
            explanation: 'For × and ÷, same signs give a positive answer.'
        },
        {
            question: 'a − (−b) equals:',
            options: ['a − b', '−a − b', 'a + b', 'ab'],
            correct: 2,
            explanation: 'Subtracting a negative is adding.'
        },
        {
            question: 'BODMAS tells us:',
            options: ['How to find cube roots', 'The order of operations', 'How to draw graphs', 'The sign of an answer'],
            correct: 1,
            explanation: 'It fixes the order in which operations are done.'
        },
        {
            question: 'Which sub-strand comes next?',
            options: ['1.2 Cubes and Cube Roots', '1.3 Indices and Logarithms', '2.1 Matrices', '1.4 Compound Proportions'],
            correct: 0,
            explanation: 'Cubes and Cube Roots follows Integers in Strand 1.0.'
        },
        {
            question: 'A negative balance in a bank statement means:',
            options: ['Savings', 'Interest earned', 'A debt or overdraft', 'Nothing'],
            correct: 2,
            explanation: 'Negative money values represent amounts owed.'
        }
    ]
},
{
    name: '1.2.1 Cubes by Multiplication',
    type: 'lesson',
    duration: '60 min',
    exercises: 11,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 1</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Cubes by Multiplication</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain what the cube of a number means.</li>
    <li>Work out cubes of whole numbers, negative numbers, fractions and decimals by multiplication.</li>
    <li>Relate the cube of a number to the volume of a cube.</li>
    <li>Recognise perfect cubes up to 20³.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Squares and square roots (Grade 8), multiplication of decimals and fractions, and integers (sub-strand 1.1).</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we work out the cubes and cube roots of numbers, and where do we use them?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A juakali artisan in Kamukunji makes cube-shaped metal water tanks. A tank with sides of 2 m holds how much? Its volume is 2 m × 2 m × 2 m = 8 m³, which is 8 000 litres. Multiplying a number by itself three times is called <strong>cubing</strong> it.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🔮 Predict First</p>
    <div>Which is bigger: 3³ or 3 × 3? How many small cubes are needed to build a cube of side 5?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“The <strong>cube</strong> of a number n is n × n × n, written <strong>n³</strong> and read “n cubed”. It is called a cube because it gives the volume of a cube with side n.</p>
    <p>Cubes keep the sign of the number: (−2)³ = (−2)(−2)(−2) = −8, because there are three negative factors. For fractions, cube the numerator and the denominator: (2/3)³ = 8/27. For decimals, count the decimal places: 0.2³ = 0.008 (three times one place = three places).”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Cube of a number</p>
    <div>
    <p style="margin:0;">The number multiplied by itself three times.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 4³ = 4 × 4 × 4 = 64</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Perfect cube</p>
    <div>
    <p style="margin:0;">A whole number that is the cube of a whole number.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 1, 8, 27, 64, 125</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Index (power)</p>
    <div>
    <p style="margin:0;">The small raised number showing how many times to multiply.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In 5³ the index is 3.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Base</p>
    <div>
    <p style="margin:0;">The number being multiplied.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: In 5³ the base is 5.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Volume</p>
    <div>
    <p style="margin:0;">The space inside a solid, in cubic units.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: A cube of side 3 cm has volume 27 cm³.</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Whole numbers</p>
    <p>Multiply in two stages: 7³ = (7 × 7) × 7 = 49 × 7 = 343.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Negative numbers</p>
    <p>The cube of a negative number is negative: (−5)³ = −125. (The square of a negative is positive, but the cube is not.)</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Fractions and mixed numbers</p>
    <p>Cube top and bottom: (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">4</span></span>)³ = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">27</span><span style="padding:0 4px;">64</span></span>. Change mixed numbers to improper fractions first: (1½)³ = (<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">2</span></span>)³ = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">27</span><span style="padding:0 4px;">8</span></span> = 3<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">3</span><span style="padding:0 4px;">8</span></span>.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Decimals</p>
    <p>Cube the digits, then give the answer three times as many decimal places: 0.3³ → 3³ = 27, and 1 × 3 = 3 places, so 0.027. Similarly 1.2³ → 12³ = 1 728 with 3 places → 1.728.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Stacking cubes shows why the volume of a cube of side n is n³:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 620 270" width="620" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><g transform="translate(-60,0)"><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 147.4,133.0 124.8,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 147.4,133.0 124.8,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 147.4,159.0 147.4,133.0 170.0,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 192.6,133.0 170.0,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 192.6,133.0 170.0,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 192.6,159.0 192.6,133.0 215.2,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 170.0,146.0 147.4,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 170.0,146.0 147.4,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 170.0,172.0 170.0,146.0 192.6,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 170.0,94.0 147.4,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 170.0,94.0 147.4,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 170.0,120.0 170.0,94.0 192.6,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 147.4,107.0 124.8,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 147.4,107.0 124.8,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 147.4,133.0 147.4,107.0 170.0,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 192.6,107.0 170.0,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 192.6,107.0 170.0,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 192.6,133.0 192.6,107.0 215.2,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><text x="170" y="252" fill="#e2e8f0" font-size="14" text-anchor="middle">2 × 2 × 2 = 8 cubes</text></g><g transform="translate(140,0)"><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 147.4,133.0 124.8,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 147.4,133.0 124.8,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 147.4,159.0 147.4,133.0 170.0,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 124.8,146.0 102.1,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,159.0 124.8,172.0 124.8,146.0 102.1,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 124.8,172.0 124.8,146.0 147.4,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 192.6,133.0 170.0,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 192.6,133.0 170.0,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 192.6,159.0 192.6,133.0 215.2,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 170.0,146.0 147.4,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 170.0,146.0 147.4,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 170.0,172.0 170.0,146.0 192.6,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 147.4,159.0 124.8,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,172.0 147.4,185.0 147.4,159.0 124.8,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 147.4,185.0 147.4,159.0 170.0,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 237.9,133.0 215.2,146.0 192.6,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 215.2,172.0 215.2,146.0 192.6,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,159.0 215.2,172.0 215.2,146.0 237.9,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 215.2,146.0 192.6,159.0 170.0,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 192.6,185.0 192.6,159.0 170.0,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,172.0 192.6,185.0 192.6,159.0 215.2,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 170.0,172.0 147.4,159.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,185.0 170.0,198.0 170.0,172.0 147.4,159.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,185.0 170.0,198.0 170.0,172.0 192.6,159.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 170.0,94.0 147.4,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 170.0,94.0 147.4,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 170.0,120.0 170.0,94.0 192.6,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 147.4,107.0 124.8,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 147.4,107.0 124.8,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 147.4,133.0 147.4,107.0 170.0,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 147.4,107.0 124.8,120.0 102.1,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,133.0 124.8,146.0 124.8,120.0 102.1,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 124.8,146.0 124.8,120.0 147.4,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 192.6,107.0 170.0,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 192.6,107.0 170.0,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 192.6,133.0 192.6,107.0 215.2,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 147.4,133.0 124.8,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 147.4,133.0 124.8,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 147.4,159.0 147.4,133.0 170.0,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 237.9,107.0 215.2,120.0 192.6,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 215.2,146.0 215.2,120.0 192.6,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,133.0 215.2,146.0 215.2,120.0 237.9,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 192.6,133.0 170.0,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 192.6,133.0 170.0,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 192.6,159.0 192.6,133.0 215.2,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 170.0,146.0 147.4,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 170.0,146.0 147.4,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 170.0,172.0 170.0,146.0 192.6,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,42.0 192.6,55.0 170.0,68.0 147.4,55.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 170.0,68.0 147.4,55.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 170.0,94.0 170.0,68.0 192.6,55.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,55.0 170.0,68.0 147.4,81.0 124.8,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 147.4,107.0 147.4,81.0 124.8,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 147.4,107.0 147.4,81.0 170.0,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,68.0 147.4,81.0 124.8,94.0 102.1,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,107.0 124.8,120.0 124.8,94.0 102.1,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 124.8,120.0 124.8,94.0 147.4,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,55.0 215.2,68.0 192.6,81.0 170.0,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 192.6,81.0 170.0,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 192.6,107.0 192.6,81.0 215.2,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 170.0,94.0 147.4,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 170.0,94.0 147.4,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 170.0,120.0 170.0,94.0 192.6,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 147.4,107.0 124.8,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 147.4,107.0 124.8,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 147.4,133.0 147.4,107.0 170.0,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,68.0 237.9,81.0 215.2,94.0 192.6,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 215.2,94.0 192.6,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,107.0 215.2,120.0 215.2,94.0 237.9,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 192.6,107.0 170.0,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 192.6,107.0 170.0,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 192.6,133.0 192.6,107.0 215.2,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><text x="170" y="252" fill="#e2e8f0" font-size="14" text-anchor="middle">3 × 3 × 3 = 27 cubes</text></g><g transform="translate(340,0)"><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 147.4,133.0 124.8,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 147.4,133.0 124.8,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 147.4,159.0 147.4,133.0 170.0,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 124.8,146.0 102.1,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,159.0 124.8,172.0 124.8,146.0 102.1,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 124.8,172.0 124.8,146.0 147.4,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,133.0 124.8,146.0 102.1,159.0 79.5,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="79.5,172.0 102.1,185.0 102.1,159.0 79.5,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,172.0 102.1,185.0 102.1,159.0 124.8,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 192.6,133.0 170.0,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 192.6,133.0 170.0,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 192.6,159.0 192.6,133.0 215.2,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 170.0,146.0 147.4,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 170.0,146.0 147.4,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 170.0,172.0 170.0,146.0 192.6,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 147.4,159.0 124.8,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,172.0 147.4,185.0 147.4,159.0 124.8,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 147.4,185.0 147.4,159.0 170.0,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 124.8,172.0 102.1,159.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,185.0 124.8,198.0 124.8,172.0 102.1,159.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,185.0 124.8,198.0 124.8,172.0 147.4,159.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 237.9,133.0 215.2,146.0 192.6,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 215.2,172.0 215.2,146.0 192.6,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,159.0 215.2,172.0 215.2,146.0 237.9,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 215.2,146.0 192.6,159.0 170.0,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 192.6,185.0 192.6,159.0 170.0,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,172.0 192.6,185.0 192.6,159.0 215.2,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 170.0,172.0 147.4,159.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,185.0 170.0,198.0 170.0,172.0 147.4,159.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,185.0 170.0,198.0 170.0,172.0 192.6,159.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 147.4,185.0 124.8,172.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,198.0 147.4,211.0 147.4,185.0 124.8,172.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,198.0 147.4,211.0 147.4,185.0 170.0,172.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,133.0 260.5,146.0 237.9,159.0 215.2,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,172.0 237.9,185.0 237.9,159.0 215.2,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="260.5,172.0 237.9,185.0 237.9,159.0 260.5,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 237.9,159.0 215.2,172.0 192.6,159.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,185.0 215.2,198.0 215.2,172.0 192.6,159.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,185.0 215.2,198.0 215.2,172.0 237.9,159.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 215.2,172.0 192.6,185.0 170.0,172.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,198.0 192.6,211.0 192.6,185.0 170.0,172.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,198.0 192.6,211.0 192.6,185.0 215.2,172.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 192.6,185.0 170.0,198.0 147.4,185.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,211.0 170.0,224.0 170.0,198.0 147.4,185.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,211.0 170.0,224.0 170.0,198.0 192.6,185.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 170.0,94.0 147.4,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 170.0,94.0 147.4,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 170.0,120.0 170.0,94.0 192.6,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 147.4,107.0 124.8,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 147.4,107.0 124.8,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 147.4,133.0 147.4,107.0 170.0,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 147.4,107.0 124.8,120.0 102.1,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,133.0 124.8,146.0 124.8,120.0 102.1,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 124.8,146.0 124.8,120.0 147.4,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,107.0 124.8,120.0 102.1,133.0 79.5,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="79.5,146.0 102.1,159.0 102.1,133.0 79.5,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 102.1,159.0 102.1,133.0 124.8,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 192.6,107.0 170.0,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 192.6,107.0 170.0,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 192.6,133.0 192.6,107.0 215.2,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 147.4,133.0 124.8,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 147.4,133.0 124.8,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 147.4,159.0 147.4,133.0 170.0,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 124.8,146.0 102.1,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,159.0 124.8,172.0 124.8,146.0 102.1,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 124.8,172.0 124.8,146.0 147.4,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 237.9,107.0 215.2,120.0 192.6,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 215.2,146.0 215.2,120.0 192.6,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,133.0 215.2,146.0 215.2,120.0 237.9,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 192.6,133.0 170.0,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 192.6,133.0 170.0,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 192.6,159.0 192.6,133.0 215.2,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 170.0,146.0 147.4,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 170.0,146.0 147.4,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 170.0,172.0 170.0,146.0 192.6,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 147.4,159.0 124.8,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,172.0 147.4,185.0 147.4,159.0 124.8,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 147.4,185.0 147.4,159.0 170.0,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,107.0 260.5,120.0 237.9,133.0 215.2,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 237.9,159.0 237.9,133.0 215.2,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="260.5,146.0 237.9,159.0 237.9,133.0 260.5,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 237.9,133.0 215.2,146.0 192.6,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 215.2,172.0 215.2,146.0 192.6,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,159.0 215.2,172.0 215.2,146.0 237.9,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 215.2,146.0 192.6,159.0 170.0,146.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,172.0 192.6,185.0 192.6,159.0 170.0,146.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,172.0 192.6,185.0 192.6,159.0 215.2,146.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 170.0,172.0 147.4,159.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,185.0 170.0,198.0 170.0,172.0 147.4,159.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,185.0 170.0,198.0 170.0,172.0 192.6,159.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,42.0 192.6,55.0 170.0,68.0 147.4,55.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 170.0,68.0 147.4,55.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 170.0,94.0 170.0,68.0 192.6,55.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,55.0 170.0,68.0 147.4,81.0 124.8,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 147.4,107.0 147.4,81.0 124.8,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 147.4,107.0 147.4,81.0 170.0,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,68.0 147.4,81.0 124.8,94.0 102.1,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,107.0 124.8,120.0 124.8,94.0 102.1,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 124.8,120.0 124.8,94.0 147.4,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,81.0 124.8,94.0 102.1,107.0 79.5,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="79.5,120.0 102.1,133.0 102.1,107.0 79.5,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 102.1,133.0 102.1,107.0 124.8,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,55.0 215.2,68.0 192.6,81.0 170.0,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 192.6,81.0 170.0,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 192.6,107.0 192.6,81.0 215.2,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 170.0,94.0 147.4,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 170.0,94.0 147.4,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 170.0,120.0 170.0,94.0 192.6,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 147.4,107.0 124.8,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 147.4,107.0 124.8,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 147.4,133.0 147.4,107.0 170.0,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 147.4,107.0 124.8,120.0 102.1,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,133.0 124.8,146.0 124.8,120.0 102.1,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 124.8,146.0 124.8,120.0 147.4,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,68.0 237.9,81.0 215.2,94.0 192.6,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 215.2,94.0 192.6,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,107.0 215.2,120.0 215.2,94.0 237.9,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 192.6,107.0 170.0,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 192.6,107.0 170.0,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 192.6,133.0 192.6,107.0 215.2,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 147.4,133.0 124.8,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,146.0 147.4,159.0 147.4,133.0 124.8,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 147.4,159.0 147.4,133.0 170.0,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,81.0 260.5,94.0 237.9,107.0 215.2,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 237.9,133.0 237.9,107.0 215.2,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="260.5,120.0 237.9,133.0 237.9,107.0 260.5,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 237.9,107.0 215.2,120.0 192.6,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 215.2,146.0 215.2,120.0 192.6,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,133.0 215.2,146.0 215.2,120.0 237.9,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 192.6,133.0 170.0,120.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,146.0 192.6,159.0 192.6,133.0 170.0,120.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,146.0 192.6,159.0 192.6,133.0 215.2,120.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 170.0,146.0 147.4,133.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,159.0 170.0,172.0 170.0,146.0 147.4,133.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,159.0 170.0,172.0 170.0,146.0 192.6,133.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,16.0 192.6,29.0 170.0,42.0 147.4,29.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,55.0 170.0,68.0 170.0,42.0 147.4,29.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,55.0 170.0,68.0 170.0,42.0 192.6,29.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,29.0 170.0,42.0 147.4,55.0 124.8,42.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,68.0 147.4,81.0 147.4,55.0 124.8,42.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 147.4,81.0 147.4,55.0 170.0,42.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,42.0 147.4,55.0 124.8,68.0 102.1,55.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,81.0 124.8,94.0 124.8,68.0 102.1,55.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 124.8,94.0 124.8,68.0 147.4,55.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,55.0 124.8,68.0 102.1,81.0 79.5,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="79.5,94.0 102.1,107.0 102.1,81.0 79.5,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 102.1,107.0 102.1,81.0 124.8,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,29.0 215.2,42.0 192.6,55.0 170.0,42.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 192.6,55.0 170.0,42.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,68.0 192.6,81.0 192.6,55.0 215.2,42.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,42.0 192.6,55.0 170.0,68.0 147.4,55.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 170.0,68.0 147.4,55.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 170.0,94.0 170.0,68.0 192.6,55.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,55.0 170.0,68.0 147.4,81.0 124.8,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,94.0 147.4,107.0 147.4,81.0 124.8,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 147.4,107.0 147.4,81.0 170.0,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,68.0 147.4,81.0 124.8,94.0 102.1,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="102.1,107.0 124.8,120.0 124.8,94.0 102.1,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 124.8,120.0 124.8,94.0 147.4,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,42.0 237.9,55.0 215.2,68.0 192.6,55.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 215.2,68.0 192.6,55.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,81.0 215.2,94.0 215.2,68.0 237.9,55.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,55.0 215.2,68.0 192.6,81.0 170.0,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 192.6,81.0 170.0,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 192.6,107.0 192.6,81.0 215.2,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,68.0 192.6,81.0 170.0,94.0 147.4,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,107.0 170.0,120.0 170.0,94.0 147.4,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 170.0,120.0 170.0,94.0 192.6,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,81.0 170.0,94.0 147.4,107.0 124.8,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="124.8,120.0 147.4,133.0 147.4,107.0 124.8,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 147.4,133.0 147.4,107.0 170.0,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,55.0 260.5,68.0 237.9,81.0 215.2,68.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,94.0 237.9,107.0 237.9,81.0 215.2,68.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="260.5,94.0 237.9,107.0 237.9,81.0 260.5,68.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,68.0 237.9,81.0 215.2,94.0 192.6,81.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,107.0 215.2,120.0 215.2,94.0 192.6,81.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="237.9,107.0 215.2,120.0 215.2,94.0 237.9,81.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,81.0 215.2,94.0 192.6,107.0 170.0,94.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,120.0 192.6,133.0 192.6,107.0 170.0,94.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="215.2,120.0 192.6,133.0 192.6,107.0 215.2,94.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><polygon points="170.0,94.0 192.6,107.0 170.0,120.0 147.4,107.0" fill="#a78bfa" stroke="#0b1220" stroke-width="1"/><polygon points="147.4,133.0 170.0,146.0 170.0,120.0 147.4,107.0" fill="#7c3aed" stroke="#0b1220" stroke-width="1"/><polygon points="192.6,133.0 170.0,146.0 170.0,120.0 192.6,107.0" fill="#5b21b6" stroke="#0b1220" stroke-width="1"/><text x="170" y="252" fill="#e2e8f0" font-size="14" text-anchor="middle">4 × 4 × 4 = 64 cubes</text></g>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Cube</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">n<sup>3</sup> = n × n × n</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Multiply the number by itself three times.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Volume of a cube; repeated growth by the same factor three times.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Confusing n³ with 3n (for n = 4: 64, not 12).</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Cube = three equal sides of a box.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Volume of a cube</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">V = s<sup>3</sup>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Volume equals side cubed.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Cube-shaped tanks, boxes and blocks.</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Fractions</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a</span><span style="padding:0 4px;">b</span></span>)<sup>3</sup> = <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 3px;line-height:1.25;text-align:center;"><span style="border-bottom:1px solid currentColor;padding:0 4px;">a³</span><span style="padding:0 4px;">b³</span></span>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Cube the numerator and the denominator.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Any fraction raised to the power 3.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Whole number <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 9³.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply in two stages.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 9 × 9 = 81</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Square first.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 81 × 9 = 729</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply by 9 again.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 729</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 9³ should be a little less than 10³ = 1 000 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Negative number <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find (−6)³.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Three negative factors give a negative answer.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 6³ = 216</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube the size.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Sign: negative</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> An odd number of negatives.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −216</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Writing +216, as for a square.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Fraction <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find (2⅓)³ as a mixed number.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Change to an improper fraction first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 2⅓ = 7/3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Improper fraction.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 7³ = 343 and 3³ = 27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube top and bottom.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 343/27 = 12 19/27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 27 × 12 = 324, remainder 19.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 12 19/27</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Decimal <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 0.15³.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Cube 15, then count decimal places.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 15³ = 3 375</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 15 × 15 = 225; 225 × 15 = 3 375.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 0.15 has 2 decimal places → 6 places</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 2 × 3 = 6.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 0.003375</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Place the point six places from the right.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 0.003375</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Volume of a tank <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A cube-shaped tank has internal sides of 1.2 m. Find its capacity in litres (1 m³ = 1 000 litres).</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Volume = side³, then convert.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 1.2³ = 1.728 m³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 12³ = 1 728 with three decimal places.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 1.728 × 1 000 = 1 728 litres</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Convert cubic metres to litres.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 1 728 litres</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Calculating 1.2 × 3 = 3.6 instead of cubing.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 11³.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>11 × 11 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>… × 11 = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">121; 1 331.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find (−0.4)³.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>4³ = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Decimal places: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Sign: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">64; 3 places → 0.064; negative → −0.064.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find 5³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">125</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find (−3)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−27</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> List the perfect cubes from 1 to 200.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1, 8, 27, 64, 125</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find (3/5)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">27/125</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find 0.7³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.343</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Find 14³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2 744</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Find (1¼)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(5/4)³ = 125/64 = 1 61/64</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Evaluate 2³ + (−3)³ − 1³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8 − 27 − 1 = −20</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A box of chalk is a cube of side 8 cm. Find its volume.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">512 cm³</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A cube-shaped water tank has sides of 1.5 m. How many litres does it hold?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3.375 m³ = 3 375 litres</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Can the cube of a number be smaller than the number itself? Give an example.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Yes, for numbers between 0 and 1: 0.5³ = 0.125 is less than 0.5 (also negatives below −1, e.g. (−2)³ = −8 is less than −2).</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚰 Water tanks</p>
    <div>The capacity of a cube-shaped tank is side³.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📦 Packaging</p>
    <div>Cube boxes for soap, chalk and sugar cubes.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧱 Building</p>
    <div>Concrete blocks and volumes of material.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🔬 Science</p>
    <div>Volumes of crystals and cells modelled as cubes.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relating the volume of a cube to the cube of its side.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building cube stacks in groups and explaining the pattern.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking cubes with the x³ key.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Linking squares (Grade 8) to cubes.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (water storage)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the x³ key: 1.2 x³ = 1.728.</li>
    <li>Or use the power key: 1.2 ^ 3 = 1.728.</li>
    <li>Put negative numbers and fractions in brackets: ((−) 6) x³ = −216.</li>
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
    <li>Learn the first ten cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1 000.</li>
    <li>For decimals: digits cubed, then three times the decimal places.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4³ = 12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">That is 4 × 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4³ = 4 × 4 × 4 = 64</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2)³ = 8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three negative factors give a negative</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−2)³ = −8</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.2³ = 0.8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Decimal places must be tripled</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.2³ = 0.008</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2/3)³ = 8/3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The denominator must also be cubed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(2/3)³ = 8/27</td>
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
    <li>Let learners build 2 × 2 × 2 and 3 × 3 × 3 stacks with small boxes or clay cubes.</li>
    <li>Display a chart of cubes from 1³ to 20³.</li>
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
    <li>n³ = n × n × n.</li>
    <li>Cubes keep the sign.</li>
    <li>Fractions: cube top and bottom.</li>
    <li>Decimals: three times the decimal places.</li>
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
    <li>Show at least one multiplication step.</li>
    <li>Give exact answers for fractions unless asked to round.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is 100 a perfect cube?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No (4³ = 64, 5³ = 125).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Fill in: … ³ = 343</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Find (−1)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−1</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Find any cube-shaped container at home or school. Measure its side and work out its volume. Is it a perfect cube in centimetres?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain the difference between n² and n³?</li>
    <li>Which type of cube (negative, fraction, decimal) do I find hardest?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The cube of n is n × n × n = n³.</li>
    <li>The volume of a cube of side s is s³.</li>
    <li>Negative numbers have negative cubes.</li>
    <li>For fractions, cube both parts; for decimals, triple the decimal places.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cube</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">216</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−64</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2/5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8/125</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.027</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.331</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cube</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n × n × n.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Perfect cube</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube of a whole number.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Index</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The power, here 3.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Volume</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Space inside a solid.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> (a) Find 13³. (b) Find (−0.5)³. (c) Find (1⅔)³ as a mixed number. <span style="color:#fde68a;font-size:13px;">(6 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 169 × 13 [1] = 2 197 [1]. (b) 125 → 0.125 [1], negative: −0.125 [1]. (c) (5/3)³ = 125/27 [1] = 4 17/27 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A cube-shaped classroom store has sides of 2.5 m. Find its volume. <span style="color:#fde68a;font-size:13px;">(2 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2.5³ [1] = 15.625 m³ [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write the cubes of 1 to 15 in a table and learn the first ten.</li>
    <li>Find (a) (−7)³ (b) (4/9)³ (c) 0.06³.</li>
    <li>Measure a cube-shaped object at home and find its volume.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '9³ equals:',
            options: ['27', '729', '81', '18'],
            correct: 1,
            explanation: '9 × 9 × 9 = 81 × 9 = 729.'
        },
        {
            question: '(−6)³ equals:',
            options: ['216', '−18', '−216', '36'],
            correct: 2,
            explanation: 'Three negative factors give a negative cube.'
        },
        {
            question: '(3/4)³ equals:',
            options: ['9/12', '9/16', '27/64', '27/4'],
            correct: 2,
            explanation: 'Cube both the numerator and the denominator.'
        },
        {
            question: '0.15³ equals:',
            options: ['0.45', '0.3375', '0.0225', '0.003375'],
            correct: 3,
            explanation: '15³ = 3 375 and the answer needs 2 × 3 = 6 decimal places.'
        },
        {
            question: 'A cube tank of side 1.2 m holds:',
            options: ['3.6 litres', '1 728 litres', '144 litres', '1.44 litres'],
            correct: 1,
            explanation: '1.2³ = 1.728 m³, which is 1 728 litres.'
        },
        {
            question: 'Which is a perfect cube?',
            options: ['100', '150', '200', '125'],
            correct: 3,
            explanation: '125 = 5 × 5 × 5, so it is the cube of a whole number.'
        },
        {
            question: '4³ means:',
            options: ['4 × 4 × 4', '4 × 3', '4 + 4 + 4', '3 × 3 × 3 × 3'],
            correct: 0,
            explanation: 'The index 3 shows that 4 is multiplied by itself three times.'
        },
        {
            question: '0.2³ equals:',
            options: ['0.8', '0.008', '0.08', '0.6'],
            correct: 1,
            explanation: '2³ = 8 with three decimal places gives 0.008.'
        },
        {
            question: '(1½)³ equals:',
            options: ['3 3/8', '1 1/8', '4 1/2', '2 1/4'],
            correct: 0,
            explanation: '(3/2)³ = 27/8 = 3 3/8.'
        },
        {
            question: 'For which number is the cube smaller than the number itself?',
            options: ['2', '3', '10', '0.5'],
            correct: 3,
            explanation: 'Numbers between 0 and 1 get smaller when cubed: 0.5³ = 0.125.'
        }
    ]
},
{
    name: '1.2.2 Cubes from Mathematical Tables',
    type: 'lesson',
    duration: '60 min',
    exercises: 9,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 2</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Cubes from Mathematical Tables</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Read cubes of numbers from 1.000 to 9.999 in mathematical tables.</li>
    <li>Use standard form to find cubes of numbers outside this range.</li>
    <li>Estimate cubes to check table readings.</li>
    <li>Compare table values with calculator values.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lesson 1.2.1, reading tables of squares (Grade 8) and standard form.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we work out the cubes and cube roots of numbers, and where do we use them?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Before calculators were common, engineers and surveyors used printed tables to find squares, cubes and roots quickly. The KNEC mathematical tables you use in exams still contain a table of cubes. Learning to read it builds number sense and gives you a way to check calculator answers.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“The table of cubes gives the cube of every number from 1.000 to 9.999, usually to four significant figures. Find the first two digits in the left column, the third digit across the top, and add the value in the small ‘difference’ column for the fourth digit (where the table has one).</p>
    <p>For a number outside 1 to 10, write it in standard form, A × 10ⁿ, with A between 1 and 10. Then (A × 10ⁿ)³ = A³ × 10³ⁿ. So 23.4³ = 2.34³ × 10³.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Mathematical tables</p>
    <div>
    <p style="margin:0;">A printed book of values such as squares, cubes and roots.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: KNEC four-figure tables</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Standard form</p>
    <div>
    <p style="margin:0;">A number written as A × 10ⁿ, where 1 ≤ A &lt; 10.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 23.4 = 2.34 × 10¹</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Significant figures</p>
    <div>
    <p style="margin:0;">The digits that carry meaning in a number.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 12.81 has 4 significant figures.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Difference column</p>
    <div>
    <p style="margin:0;">The columns used to add the effect of the fourth digit.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Mean difference for the digit 6</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Estimate</p>
    <div>
    <p style="margin:0;">A rough value used to check an answer.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 2.34³ is between 2³ = 8 and 3³ = 27.</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Numbers from 1 to 10</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Find the row for the first two digits (e.g. 2.3).</li>
    <li>Move across to the column for the third digit (e.g. 4).</li>
    <li>If there is a fourth digit, add its value from the difference columns.</li>
    <li>Check with an estimate.</li>
    </ol>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Numbers greater than 10</p>
    <p>Write in standard form and multiply the power by 3: 45.6³ = (4.56 × 10)³ = 4.56³ × 10³ ≈ 94.82 × 1 000 = 94 820.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Numbers less than 1</p>
    <p>0.456³ = (4.56 × 10<sup>−1</sup>)³ = 4.56³ × 10<sup>−3</sup> ≈ 94.82 × 0.001 = 0.09482.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Standard form</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">A³ from tables</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Power of 10</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cube</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.34</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.34 × 10⁰</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">× 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">23.4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.34 × 10¹</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">× 10³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 810</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">234</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.34 × 10²</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">× 10⁶</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 810 000</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.234</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2.34 × 10⁻¹</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">× 10⁻³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.01281</td>
    </tr>
    </table>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">👁️ See It</p>
    <div>The digits 1281 stay the same; only the position of the decimal point changes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Cube of a number in standard form</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">(A × 10<sup>n</sup>)<sup>3</sup> = A<sup>3</sup> × 10<sup>3n</sup>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Cube A from the table, and multiply the power of 10 by 3.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Any number outside 1 to 10.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Multiplying by 10ⁿ instead of 10³ⁿ.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Direct reading <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find 3.7³.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Row 3.7, column 0.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 3.7, column 0 → 50.65</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Read the table.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Estimate: 3.7 is close to 4, and 4³ = 64; 3³ = 27</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So about 50 is reasonable.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 3.7³ ≈ 50.65</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> Calculator: 50.653 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Four digits <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find 7.08³.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Row 7.0, column 8.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 7.0, column 8 → 354.9</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Read the table (three digits are enough here).</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Estimate: 7³ = 343</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So about 355 is reasonable.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 7.08³ ≈ 354.9</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Number greater than 10 <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 45.6³ using tables.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Standard form first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 45.6 = 4.56 × 10</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Standard form.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 4.56³ ≈ 94.82</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> From tables.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> × 10³ = 94 820</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube the power of 10.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 45.6³ ≈ 94 820 (calculator: 94 818.8)</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Number less than 1 <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 0.123³ using tables.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Standard form with a negative power.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 0.123 = 1.23 × 10⁻¹</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Standard form.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 1.23³ ≈ 1.861</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> From tables.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> × 10⁻³ = 0.001861</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Move the point three places left.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 0.123³ ≈ 0.001861</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Moving the point only one place.</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Using cubes in a volume <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A cube-shaped storage room has sides of 3.45 m. Use tables to find its volume to 3 significant figures.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Read 3.45³.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Row 3.4, column 5 → 41.06</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Read the table.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Round to 3 s.f.</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 41.1</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> ≈ 41.1 m³</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 2.5³ from tables.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Row …, column … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Value: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Estimate: between 2³ and 3³ <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Row 2.5, column 0; 15.63; between 8 and 27 ✓</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find 12.5³ using tables.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Standard form: 1.25 × 10 <span style="color:#94a3b8;">…………</span>
    </li>
    <li>1.25³ ≈ … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>× 10³ = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1.953; 1 953.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Use tables to find 1.5³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3.375</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Use tables to find 6.2³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">238.3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Use tables to find 9.9³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">970.3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find 21.3³ using tables.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2.13³ × 10³ ≈ 9.664 × 1 000 = 9 664</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find 0.84³ using tables.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8.4³ × 10⁻³ ≈ 592.7 × 0.001 = 0.5927</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Find 0.0305³ using tables.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3.05³ × 10⁻⁶ ≈ 28.37 × 10⁻⁶ = 0.00002837</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Find 456³ using tables and give the answer in standard form.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4.56³ × 10⁶ ≈ 94.82 × 10⁶ = 9.482 × 10⁷</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> A block of soap is a cube of side 6.5 cm. Use tables to find its volume.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">274.6 cm³</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> Why do 2.34³ and 23.4³ have the same digits 1281?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">They differ only by a power of 10; cubing multiplies the power by 3, which moves the decimal point but keeps the digits.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📐 Surveying</p>
    <div>Tables were used to calculate volumes quickly in the field.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📝 Exams</p>
    <div>KNEC tables are allowed in exams and help check calculator work.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏭 Industry</p>
    <div>Volumes of cube-shaped containers and blocks.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🔁 Checking</p>
    <div>Table values provide a quick check on calculator errors.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the correct power of 10 when reading tables.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking each other’s table readings.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing table values with calculator values.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building on reading square tables in Grade 8.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (water storage)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Check every table value with x³ on a calculator.</li>
    <li>Small differences in the last digit come from rounding in the table.</li>
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
    <li>Always estimate using the nearest whole-number cubes.</li>
    <li>Each step of 10 in the number changes the cube by a factor of 1 000.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">23.4³ = 12.81 × 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The power of 10 must be cubed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81 × 10³ = 12 810</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reading the wrong row</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rows show the first two digits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Find the row for the first two digits, then the column</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.234³ = 1.281</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Point not moved enough</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12.81 × 10⁻³ = 0.01281</td>
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
    <li>Give each pair a set of tables and race to read values correctly, then check with calculators.</li>
    <li>Insist on an estimate before every table reading.</li>
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
    <li>Table range: 1.000 to 9.999.</li>
    <li>Use standard form outside this range.</li>
    <li>(A × 10ⁿ)³ = A³ × 10³ⁿ.</li>
    <li>Estimate to check.</li>
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
    <li>Write the standard form step clearly.</li>
    <li>State that the value was read from tables.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What is 2.34³ × 10⁶?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">12 810 000</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> To find 0.5³ from tables, multiply 5³ by…</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">10⁻³ (0.125)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Which row gives 6.27³?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Row 6.2, column 7</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I read the cube tables without help?</li>
    <li>Do I always check with an estimate?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cube tables give cubes of numbers from 1 to 10.</li>
    <li>For other numbers, use standard form: (A × 10ⁿ)³ = A³ × 10³ⁿ.</li>
    <li>The digits stay the same; the decimal point moves.</li>
    <li>Estimate and use a calculator to check.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Working</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cube</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">tables</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">50.65</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45.6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.56³ × 10³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">94 820</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.123</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.23³ × 10⁻³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.001861</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Standard form</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A × 10ⁿ with 1 ≤ A &lt; 10.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Significant figures</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meaningful digits.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mathematical tables</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Printed values of functions.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Estimate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A rough check value.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Use mathematical tables to find (a) 5.67³ (b) 56.7³ (c) 0.567³. <span style="color:#fde68a;font-size:13px;">(6 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) ≈ 182.3 [2]. (b) 182.3 × 10³ = 182 300 [2]. (c) 182.3 × 10⁻³ = 0.1823 [2].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A cube-shaped box has sides 8.4 cm. Use tables to find its volume to 3 significant figures. <span style="color:#fde68a;font-size:13px;">(2 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8.4³ ≈ 592.7 [1] ≈ 593 cm³ [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use tables to find 1.75³, 17.5³ and 0.175³. Check with a calculator.</li>
    <li>Explain in two sentences why the digits are the same in all three answers.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Cube tables give cubes of numbers from:',
            options: ['1.000 to 9.999', '0 to 1', '10 to 100', '100 to 1 000'],
            correct: 0,
            explanation: 'Numbers outside this range are first written in standard form.'
        },
        {
            question: '23.4³ written using 2.34³ is:',
            options: ['2.34³ × 10', '2.34³ × 10³', '2.34³ × 10²', '2.34³ ÷ 10³'],
            correct: 1,
            explanation: '(2.34 × 10)³ = 2.34³ × 10³.'
        },
        {
            question: 'If 2.34³ ≈ 12.81, then 0.234³ is about:',
            options: ['0.01281', '1.281', '0.1281', '128.1'],
            correct: 0,
            explanation: '(2.34 × 10⁻¹)³ = 12.81 × 10⁻³ = 0.01281.'
        },
        {
            question: '45.6³ is approximately:',
            options: ['94.82', '948.2', '94 820', '9 482'],
            correct: 2,
            explanation: '4.56³ ≈ 94.82, multiplied by 10³ gives 94 820.'
        },
        {
            question: '3.7³ is about 50.65. A good estimate check is that it lies between:',
            options: ['9 and 16', '27 and 64', '1 and 8', '64 and 125'],
            correct: 1,
            explanation: '3³ = 27 and 4³ = 64.'
        },
        {
            question: '(A × 10ⁿ)³ equals:',
            options: ['A³ × 10ⁿ', '3A × 10ⁿ', 'A × 10³ⁿ', 'A³ × 10³ⁿ'],
            correct: 3,
            explanation: 'Both A and the power of 10 are cubed.'
        },
        {
            question: 'To read 6.27³ from tables, use:',
            options: ['Row 6.7, column 2', 'Row 2.7, column 6', 'Row 62, column 7', 'Row 6.2, column 7'],
            correct: 3,
            explanation: 'The row gives the first two digits and the column the third.'
        },
        {
            question: 'The volume of a cube of side 6.5 cm is about:',
            options: ['274.6 cm³', '42.25 cm³', '19.5 cm³', '2 746 cm³'],
            correct: 0,
            explanation: 'Volume = side³, and from tables 6.5³ ≈ 274.6 cm³.'
        },
        {
            question: 'Why do 2.34³ and 23.4³ share the digits 1281?',
            options: ['Tables are wrong', 'They are equal', 'They differ only by a power of 10', 'Because of rounding only'],
            correct: 2,
            explanation: 'Cubing changes the power of 10 but not the significant digits.'
        },
        {
            question: '456³ in standard form is about:',
            options: ['9.482 × 10⁵', '9.482 × 10⁷', '9.482 × 10⁶', '9.482 × 10³'],
            correct: 1,
            explanation: '4.56³ ≈ 94.82, and 94.82 × 10⁶ = 9.482 × 10⁷.'
        }
    ]
},
{
    name: '1.2.3 Cube Roots by the Factor Method',
    type: 'lesson',
    duration: '60 min',
    exercises: 11,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 3</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Cube Roots by the Factor Method</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the meaning of a cube root.</li>
    <li>Find cube roots of perfect cubes by prime factorisation.</li>
    <li>Find cube roots of negative numbers, fractions and decimals that are perfect cubes.</li>
    <li>Decide whether a number is a perfect cube.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lesson 1.2.1 (cubes), prime factors and indices.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we work out the cubes and cube roots of numbers, and where do we use them?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>A carpenter is asked to make a cube-shaped box that holds exactly 1 728 cm³ of maize flour. How long should each side be? He needs the number that, cubed, gives 1 728. Finding it is called finding the <strong>cube root</strong>.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“The <strong>cube root</strong> of a number x is the number which, multiplied by itself three times, gives x. It is written ∛<span style="border-top:1px solid currentColor;padding:0 2px;">x</span>. Since 12³ = 1 728, ∛<span style="border-top:1px solid currentColor;padding:0 2px;">1 728</span> = 12.</p>
    <p>To use the <strong>factor method</strong>: write the number as a product of prime factors, group identical factors in threes, and take one factor from each group. If the factors cannot all be grouped in threes, the number is not a perfect cube.</p>
    <p>Unlike square roots, cube roots of negative numbers exist: ∛<span style="border-top:1px solid currentColor;padding:0 2px;">−8</span> = −2 because (−2)³ = −8.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Cube root</p>
    <div>
    <p style="margin:0;">The number that, cubed, gives the original number.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: ∛64 = 4</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Prime factor</p>
    <div>
    <p style="margin:0;">A prime number that divides a number exactly.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: The prime factors of 12 are 2 and 3.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Prime factorisation</p>
    <div>
    <p style="margin:0;">Writing a number as a product of primes.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 1 728 = 2⁶ × 3³</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Perfect cube</p>
    <div>
    <p style="margin:0;">A number whose cube root is a whole number (or exact fraction or decimal).</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 3 375 = 15³</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Radical sign</p>
    <div>
    <p style="margin:0;">The root symbol; ∛ shows a cube root.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: ∛27</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Factorise</p>
    <p>Divide repeatedly by primes: 1 728 ÷ 2 = 864, ÷ 2 = 432, ÷ 2 = 216, ÷ 2 = 108, ÷ 2 = 54, ÷ 2 = 27, ÷ 3 = 9, ÷ 3 = 3, ÷ 3 = 1. So 1 728 = 2 × 2 × 2 × 2 × 2 × 2 × 3 × 3 × 3.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Group in threes</p>
    <p>(2 × 2 × 2) × (2 × 2 × 2) × (3 × 3 × 3). Take one factor from each group: 2 × 2 × 3 = 12.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Using indices</p>
    <p>1 728 = 2⁶ × 3³. Divide each index by 3: 2² × 3¹ = 12. If an index is not divisible by 3, the number is not a perfect cube.</p>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 4: Fractions, decimals, negatives</p>
    <p>∛<span style="border-top:1px solid currentColor;padding:0 2px;">27/125</span> = ∛<span style="border-top:1px solid currentColor;padding:0 2px;">27</span>/∛<span style="border-top:1px solid currentColor;padding:0 2px;">125</span> = 3/5. ∛<span style="border-top:1px solid currentColor;padding:0 2px;">0.008</span> = ∛<span style="border-top:1px solid currentColor;padding:0 2px;">8/1 000</span> = 2/10 = 0.2. ∛<span style="border-top:1px solid currentColor;padding:0 2px;">−343</span> = −7.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Grouping the prime factors of 1 728 in threes:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 120" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="40" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">2</text><text x="67" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="95" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">2</text><text x="122" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="150" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">2</text><text x="177" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="205" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">2</text><text x="232" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="260" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">2</text><text x="287" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="315" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">2</text><text x="342" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="370" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">3</text><text x="397" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="425" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">3</text><text x="452" y="50" fill="#94a3b8" font-size="16" text-anchor="middle">×</text><text x="480" y="50" fill="#e2e8f0" font-size="18" text-anchor="middle">3</text><rect x="22" y="26" width="146" height="34" rx="8" fill="none" stroke="#f472b6" stroke-width="2"/><text x="95" y="95" fill="#f472b6" font-size="16" text-anchor="middle">2</text><rect x="187" y="26" width="146" height="34" rx="8" fill="none" stroke="#fde68a" stroke-width="2"/><text x="260" y="95" fill="#fde68a" font-size="16" text-anchor="middle">2</text><rect x="352" y="26" width="146" height="34" rx="8" fill="none" stroke="#86efac" stroke-width="2"/><text x="425" y="95" fill="#86efac" font-size="16" text-anchor="middle">3</text><text x="280" y="115" fill="#e2e8f0" font-size="14" text-anchor="middle">One factor from each group of three: 2 × 2 × 3 = 12</text>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Cube root</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">∛<span style="border-top:1px solid currentColor;padding:0 2px;">x</span> = y &nbsp;⇔&nbsp; y<sup>3</sup> = x</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Cube root and cube undo each other.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Finding the side of a cube from its volume.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Dividing by 3 instead of finding the cube root (∛27 = 3, but 27 ÷ 3 = 9).</div>
    </div>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Index method</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">∛<span style="border-top:1px solid currentColor;padding:0 2px;">a<sup>3m</sup> × b<sup>3n</sup></span> = a<sup>m</sup> × b<sup>n</sup>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Divide every index by 3.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> After prime factorisation.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> “Groups of three, take one.”</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Perfect cube <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find ∛<span style="border-top:1px solid currentColor;padding:0 2px;">216</span> by the factor method.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Factorise and group.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 216 = 2 × 2 × 2 × 3 × 3 × 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Prime factors.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> (2 × 2 × 2)(3 × 3 × 3)</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Groups of three.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 2 × 3 = 6</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> One from each group.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 6</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 6³ = 216 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Larger number <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find ∛<span style="border-top:1px solid currentColor;padding:0 2px;">74 088</span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Factorise patiently.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 74 088 = 2³ × 3³ × 7³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 74 088 ÷ 8 = 9 261; 9 261 ÷ 27 = 343; 343 = 7³.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Divide each index by 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 2 × 3 × 7.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 42</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Fraction <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find ∛<span style="border-top:1px solid currentColor;padding:0 2px;">3 3/8</span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Change to an improper fraction.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 3 3/8 = 27/8</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Improper fraction.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> ∛<span style="border-top:1px solid currentColor;padding:0 2px;">27</span> = 3, ∛<span style="border-top:1px solid currentColor;padding:0 2px;">8</span> = 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube root of top and bottom.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 3/2 = 1½</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Decimal and negative <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find ∛<span style="border-top:1px solid currentColor;padding:0 2px;">−0.125</span>.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Write as a fraction, then take the sign into account.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 0.125 = 125/1 000</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Fraction form.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> ∛<span style="border-top:1px solid currentColor;padding:0 2px;">125/1 000</span> = 5/10 = 0.5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube roots of 125 and 1 000.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Negative → −0.5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> The cube root of a negative number is negative.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> −0.5</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> (−0.5)³ = −0.125 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Is it a perfect cube? <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Is 1 500 a perfect cube? If not, find the smallest whole number to multiply it by to make a perfect cube.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Look at the indices.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 1 500 = 2² × 3 × 5³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Prime factorisation.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Indices 2 and 1 are not multiples of 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Not a perfect cube.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Multiply by 2 × 3² = 18</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Makes 2³ × 3³ × 5³ = 27 000.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> No; multiply by 18 to get 27 000 = 30³.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find ∛<span style="border-top:1px solid currentColor;padding:0 2px;">3 375</span>.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>3 375 = 3 × 3 × 3 × … × … × … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Groups: (3 × 3 × 3)(… × … × …) <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Cube root: … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5 × 5 × 5; (5 × 5 × 5); 3 × 5 = 15.</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Find ∛<span style="border-top:1px solid currentColor;padding:0 2px;">64/343</span>.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>∛64 = … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>∛343 = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4; 7; so 4/7.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find ∛512.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find ∛(−27).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−3</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find ∛1 000.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">10</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Find ∛2 744 by the factor method.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2³ × 7³ → 14</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Find ∛(8/125).</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2/5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Find ∛0.027.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.3</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Find ∛9 261.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3³ × 7³ → 21</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Find the smallest number by which 3 456 must be divided to give a perfect cube.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">3 456 = 2⁷ × 3³; divide by 2 → 1 728 = 12³</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A cube-shaped box must hold 64 000 cm³. Find the length of each side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">∛64 000 = 40 cm</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A cube of metal has volume 0.343 m³. Find its side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.7 m</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Why can we find ∛(−8) but not √(−4) using real numbers?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Three equal negative factors give a negative product, so (−2)³ = −8; but two equal factors always give a non-negative product.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">📦 Packaging design</p>
    <div>Finding the side of a box from the volume it must hold.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚰 Tank making</p>
    <div>Side of a cube-shaped tank from its capacity.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧊 Ice and soap blocks</p>
    <div>Cutting cube blocks of a required volume.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🔬 Science</p>
    <div>Scaling volumes back to lengths.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grouping prime factors in threes to find cube roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining why some numbers are not perfect cubes.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Confirming answers with the ∛ key.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using prime factorisation from earlier grades.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (water storage)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use SHIFT and x³ (or the ∛ key) to check: ∛ 1728 = 12.</li>
    <li>For other roots, use the x√ key with 3.</li>
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
    <li>Know cubes to 10³ to recognise cube roots instantly.</li>
    <li>A number ending in 8 has a cube root ending in 2 (because 2³ = 8); ending in 7 → 3; ending in 3 → 7.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛27 = 9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">That is 27 ÷ 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛27 = 3</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛(−64) has no answer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Negative numbers have real cube roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛(−64) = −4</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grouping factors in pairs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pairs are for square roots</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group in threes for cube roots</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛(8/27) = 8/3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Both parts must be rooted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2/3</td>
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
    <li>Use a factor tree on the board and circle triples in colour.</li>
    <li>Have learners check each cube root by cubing.</li>
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
    <li>∛x cubed gives x.</li>
    <li>Group prime factors in threes.</li>
    <li>Divide indices by 3.</li>
    <li>Negative numbers have negative cube roots.</li>
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
    <li>Show the prime factorisation.</li>
    <li>Check your answer by cubing.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> ∛125 = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Is 72 a perfect cube?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No: 72 = 2³ × 3²</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> ∛0.001 = ?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.1</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I explain the difference between square roots and cube roots?</li>
    <li>Do I check by cubing my answer?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The cube root undoes cubing.</li>
    <li>Factor method: prime factorise, group in threes, take one from each group.</li>
    <li>With indices: divide every index by 3.</li>
    <li>Fractions, decimals and negative numbers can have exact cube roots.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Prime factors</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cube root</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">216</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2³ × 3³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 728</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2⁶ × 3³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 375</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3³ × 5³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−343</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−(7³)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−7</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cube root</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number that cubes to the original.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Prime factor</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prime number that divides exactly.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Perfect cube</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Has an exact cube root.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">∛</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube root sign.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Use the factor method to find (a) ∛5 832 (b) ∛(−0.064). <span style="color:#fde68a;font-size:13px;">(5 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 5 832 = 2³ × 3⁶ [1]; ∛ = 2 × 3² [1] = 18 [1]. (b) 64/1 000 → 4/10 [1] = −0.4 [1].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A cube-shaped water tank holds 3 375 litres (3.375 m³). Find the length of its side in metres. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">∛3.375 [1] = 1.5 [1] m [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Find by the factor method: ∛1 331, ∛4 096, ∛(125/216).</li>
    <li>Find the smallest number by which 250 must be multiplied to give a perfect cube.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '∛216 equals:',
            options: ['72', '6', '36', '8'],
            correct: 1,
            explanation: '216 = 2³ × 3³, so the cube root is 2 × 3 = 6.'
        },
        {
            question: '∛1 728 equals:',
            options: ['14', '576', '18', '12'],
            correct: 3,
            explanation: '1 728 = 2⁶ × 3³; dividing each index by 3 gives 2² × 3 = 12.'
        },
        {
            question: '∛(−343) equals:',
            options: ['7', 'No real answer', '−7', '−49'],
            correct: 2,
            explanation: '(−7)³ = −343, so the cube root is −7.'
        },
        {
            question: '∛(27/125) equals:',
            options: ['3/5', '9/25', '27/5', '3/125'],
            correct: 0,
            explanation: 'Take cube roots of 27 and 125: 3 and 5.'
        },
        {
            question: '∛0.008 equals:',
            options: ['0.2', '0.02', '0.002', '2'],
            correct: 0,
            explanation: '0.008 = 8/1 000, and ∛8/∛1 000 = 2/10 = 0.2.'
        },
        {
            question: 'For cube roots, prime factors are grouped in:',
            options: ['Pairs', 'Threes', 'Fours', 'Ones'],
            correct: 1,
            explanation: 'Each group of three equal factors gives one factor of the root.'
        },
        {
            question: 'Is 72 a perfect cube?',
            options: ['Yes', 'Only if negative', 'No', 'Only in tables'],
            correct: 2,
            explanation: '72 = 2³ × 3², and the index 2 is not a multiple of 3.'
        },
        {
            question: 'The side of a cube of volume 64 000 cm³ is:',
            options: ['40 cm', '400 cm', '4 cm', '8 cm'],
            correct: 0,
            explanation: '∛64 000 = ∛64 × ∛1 000 = 4 × 10 = 40 cm.'
        },
        {
            question: '∛74 088 equals:',
            options: ['24', '36', '48', '42'],
            correct: 3,
            explanation: '74 088 = 2³ × 3³ × 7³, so the root is 2 × 3 × 7 = 42.'
        },
        {
            question: 'To make 1 500 a perfect cube, multiply it by:',
            options: ['2', '18', '3', '5'],
            correct: 1,
            explanation: '1 500 = 2² × 3 × 5³; multiplying by 2 × 3² completes the triples.'
        }
    ]
},
{
    name: '1.2.4 Cube Roots from Tables and Calculators',
    type: 'lesson',
    duration: '60 min',
    exercises: 11,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson 4</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📘 Cube Roots from Tables and Calculators</h2>
    <div style="background:rgba(11,18,32,0.55);border-radius:10px;padding:12px 14px;margin-top:10px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#bae6fd;">🎯 Learning outcomes:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Find cube roots of numbers from mathematical tables.</li>
    <li>Find cubes and cube roots using a calculator.</li>
    <li>Choose the most suitable method for a problem.</li>
    <li>Apply cubes and cube roots to real-life problems.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">🧰 Prerequisite knowledge:</strong> Lessons 1.2.1 to 1.2.3 and standard form.</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#bae6fd;">❓ Key inquiry question:</strong> How do we work out the cubes and cube roots of numbers, and where do we use them?</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">1. Introduction</h3>
    <p>Most numbers are not perfect cubes. A cube-shaped tank that must hold 4 500 litres needs a side of ∛4.5 m — and 4.5 is not a perfect cube, so the factor method fails. For such numbers we use mathematical tables or a calculator.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">2. Teacher Explanation</h3>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">👩🏾‍🏫 Your teacher explains</p>
    <div>
    <p>“Cube-root tables usually have three parts: for numbers from 1 to 10, from 10 to 100 and from 100 to 1 000. This is because ∛4.5, ∛45 and ∛450 have different digits: about 1.651, 3.557 and 7.663.</p>
    <p>To find the cube root of any number, write it as (a number between 1 and 1 000) × 10³ⁿ — that is, group the digits in threes from the decimal point. Then ∛(A × 10³ⁿ) = ∛A × 10ⁿ. For example, 4 500 = 4.5 × 10³, so ∛4 500 = ∛4.5 × 10 ≈ 16.51.”</p>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">3. Mathematical Vocabulary</h3>
    <p>Learn these words first; they appear throughout the lesson.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Cube-root tables</p>
    <div>
    <p style="margin:0;">Tables giving cube roots of numbers from 1 to 1 000 in three sections.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: Section for 10–100 gives ∛45 ≈ 3.557.</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Grouping in threes</p>
    <div>
    <p style="margin:0;">Splitting digits into groups of three from the decimal point.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 45 000 → 45 | 000</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Approximate</p>
    <div>
    <p style="margin:0;">Close to, but not exactly, the true value.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: ∛4.5 ≈ 1.651</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Calculator key</p>
    <div>
    <p style="margin:0;">The ∛ or x√ function.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: SHIFT x³</p>
    </div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">Capacity</p>
    <div>
    <p style="margin:0;">How much a container can hold.</p>
    <p style="margin:6px 0 0 0;color:#fde68a;font-size:14px;">Example: 4 500 litres</p>
    </div>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">4. Step-by-Step Explanation</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 1: Choose the section</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Group digits in threes</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Write as</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Section</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cube root</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 500</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 | 500</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4.5 × 10³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1–10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.651 × 10 = 16.51</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45 | 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45 × 10³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10–100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.557 × 10 = 35.57</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">450</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">450</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">450 × 10⁰</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">100–1 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7.663</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.045</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.045 | (000)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45 × 10⁻³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10–100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3.557 × 0.1 = 0.3557</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 2: Using a calculator</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Press SHIFT then x³ (or the ∛ key).</li>
    <li>Type the number and press =.</li>
    <li>For cubes, type the number then x³.</li>
    <li>Round to the required accuracy.</li>
    </ol>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 6px 0;color:#7dd3fc;font-weight:bold;">Part 3: Choosing a method</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Situation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Best method</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Perfect cube (e.g. 2 744)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factor method — gives the exact answer</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not a perfect cube, no calculator (exam paper 1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tables</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Checking any answer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculator</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">5. Visual Explanation</h3>
    <p>Why the section matters — the same digits “45” give three different cube roots:</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 150" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="40" y="20" width="74.295" height="28" rx="6" fill="#f472b6"/><text x="124.295" y="39" fill="#e2e8f0" font-size="14">∛4.5 ≈ 1.651</text><rect x="40" y="62" width="160.065" height="28" rx="6" fill="#fde68a"/><text x="210.065" y="81" fill="#e2e8f0" font-size="14">∛45 ≈ 3.557</text><rect x="40" y="104" width="344.83500000000004" height="28" rx="6" fill="#86efac"/><text x="394.83500000000004" y="123" fill="#e2e8f0" font-size="14">∛450 ≈ 7.663</text>
    </svg>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">6. Formula Cards</h3>
    <div style="background:#0b1729;border:1px solid #38bdf8;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#7dd3fc;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Cube root in standard form</p>
    <div style="color:#e0f2fe;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">∛<span style="border-top:1px solid currentColor;padding:0 2px;">A × 10<sup>3n</sup></span> = ∛<span style="border-top:1px solid currentColor;padding:0 2px;">A</span> × 10<sup>n</sup>
    </div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> Make the power of 10 a multiple of 3, root A from tables, divide the power by 3.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Numbers outside 1 to 1 000.</div>
    <div style="border-top:1px solid #1e3a5f;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚠️ Watch out:</span> Writing 4 500 as 4.5 × 10³ correctly but then using the 10–100 section.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">7. Worked Examples</h3>
    <p>The examples get harder as you go. Cover the solution, try the problem, then compare.</p>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Tables, 1–10 section <span style="font-size:12px;color:#0b1220;background:#86efac;padding:2px 8px;border-radius:999px;margin-left:6px;">Easy</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find ∛6.2.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> The number is between 1 and 10.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Section 1–10, row 6.2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Read the table.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> ≈ 1.837</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Value.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Estimate: 1³ = 1, 2³ = 8</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> So the answer is between 1 and 2 ✓</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> ∛6.2 ≈ 1.837</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Large number <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find ∛45 000.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Group digits in threes: 45 | 000.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 45 000 = 45 × 10³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> A multiple-of-3 power of 10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> ∛45 ≈ 3.557</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Section 10–100.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> × 10 = 35.57</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide the power by 3.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> ≈ 35.57</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 35.57³ ≈ 45 000 ✓</p>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Small number <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find ∛0.0027.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> 0.0027 = 2.7 × 10⁻³.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 0.0027 = 2.7 × 10⁻³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Group in threes from the point: 0.002 | 7…</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> ∛2.7 ≈ 1.392</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Section 1–10.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> × 10⁻¹ = 0.1392</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide the power by 3.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> ≈ 0.1392</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Calculator <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use a calculator to find ∛600 to 2 decimal places, and 3.6³ exactly.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Use SHIFT x³ and x³.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> SHIFT x³ 600 = 8.434…</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube root.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Round: 8.43</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> 2 decimal places.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 3.6 x³ = 46.656</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> ∛600 ≈ 8.43; 3.6³ = 46.656</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 5: Tank design <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> A school needs a cube-shaped tank to hold 4 500 litres. Find the length of each side in metres, to 2 decimal places.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Convert litres to m³ first.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> 4 500 litres = 4.5 m³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Divide by 1 000.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Side = ∛4.5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Volume = side³.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> ≈ 1.65 m</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> From tables or calculator.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> ≈ 1.65 m</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Using ∛4 500 ≈ 16.5 and giving 16.5 m.</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">8. Guided Examples</h3>
    <p>Fill each blank in your book, then open the solution to check.</p>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 1</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find ∛250.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Section: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Value: … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>Check: 6³ = 216, 7³ = 343 <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">100–1 000; 6.300; between 6 and 7 ✓</div>
    </details>
    </div>
    <div style="background:#0b1729;border-left:4px solid #a78bfa;border-radius:9px;padding:14px 16px;margin:12px 0;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">🤝 Guided Example 2</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Use tables to find ∛0.5.</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>0.5 = 500 × 10⁻³ <span style="color:#94a3b8;">…………</span>
    </li>
    <li>∛500 ≈ … <span style="color:#94a3b8;">…………</span>
    </li>
    <li>× 10⁻¹ = … <span style="color:#94a3b8;">…………</span>
    </li>
    </ol>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Check your working</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7.937; 0.7937.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Use tables to find ∛3.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1.442</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Use a calculator to find ∛20 to 3 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2.714</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Use a calculator to find 2.7³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">19.683</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Use tables to find ∛80.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4.309</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Use tables to find ∛8 000.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">20 (perfect cube)</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Use tables to find ∛0.045.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.3557</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> Find ∛7 500 using tables.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">∛7.5 × 10 ≈ 1.957 × 10 = 19.57</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> Find the side of a cube of volume 200 cm³ to 1 d.p. and check by cubing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">5.8 cm; 5.8³ = 195.1 (close to 200)</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> A cube-shaped grain store must hold 30 m³. Find its side to 2 d.p.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">≈ 3.11 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> A cube of clay of side 4 cm is reshaped into 8 equal cubes. Find the side of each small cube.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Volume 64 ÷ 8 = 8 cm³; side 2 cm</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Reasoning</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Without tables, explain why ∛45 000 lies between 30 and 40.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">30³ = 27 000 and 40³ = 64 000, and 45 000 lies between them.</div>
    </details>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">9. Real-Life Applications</h3>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin:10px 0;">
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🚰 Water storage</p>
    <div>Designing tanks for a required capacity.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🌾 Grain stores</p>
    <div>Side lengths of cube-shaped silos and bins.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🧱 Moulding</p>
    <div>Reshaping material into cubes of given volume.</div>
    </div>
    <div style="flex:1 1 230px;background:#0b1729;border-radius:10px;padding:12px 14px;border-top:3px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#bae6fd;font-weight:bold;">🏗️ Engineering</p>
    <div>Scaling models: volume scale factors are cubes of length scale factors.</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing the right section of the cube-root tables.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Solving real-life volume problems in groups.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using calculator keys for cubes and cube roots.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Combining all methods learnt in the sub-strand.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1729;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#bae6fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy</span><span style="background:#0b1729;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental conservation (water storage)</span>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">11. Calculator Tips</h3>
    <div style="background:#0f2a1a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">🧮 Calculator Tip</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>SHIFT x³ (∛) then the number: ∛4.5 = 1.6509…</li>
    <li>x³ for cubes.</li>
    <li>Use x√ with 3 if your calculator has no ∛ key.</li>
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
    <li>Estimate with known cubes: 1, 8, 27, 64, 125, …, 1 000.</li>
    <li>Group digits in threes to decide the size of the answer.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛4 500 using the 100–1 000 section</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 500 must be written as 4.5 × 10³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use the 1–10 section, then × 10</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Forgetting to convert litres to m³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Units must match</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 m³ = 1 000 litres</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rounding too early</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Errors grow when cubed back</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Round only the final answer</td>
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
    <li>Practise “grouping in threes” with many numbers before using tables.</li>
    <li>Pair learners: one uses tables, the other a calculator; compare.</li>
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
    <li>Cube-root tables: 1–10, 10–100, 100–1 000.</li>
    <li>Group digits in threes from the decimal point.</li>
    <li>∛(A × 10³ⁿ) = ∛A × 10ⁿ.</li>
    <li>Check by cubing.</li>
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
    <li>Show the grouping step.</li>
    <li>Give the answer to the accuracy asked.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">17. Interactive Questions</h3>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Checkpoint 1: Quick Checks <span style="font-weight:normal;color:#a5b4fc;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which section for ∛7.3?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1–10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> ∛(5 × 10³) = ∛5 × …</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Estimate ∛100.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Between 4 and 5 (≈ 4.64)</div>
    </details>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🔍 Real-Life Investigation</p>
    <div>Find the capacity of your school’s or home water tank (often printed on it). If it were cube-shaped, how long would each side be?</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">18. Reflection</h3>
    <p>Answer honestly in your notebook:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Can I choose the right section of the tables?</li>
    <li>When should I use the factor method instead?</li>
    </ul>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🧠 19. Summary</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cube-root tables have three sections: 1–10, 10–100, 100–1 000.</li>
    <li>Group digits in threes to choose the section and the power of 10.</li>
    <li>Calculators find cubes and cube roots directly.</li>
    <li>Cubes and cube roots link the side and volume of a cube.</li>
    </ul>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">20. Revision Notes</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Working</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cube root</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 500</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛4.5 × 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">16.51</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛45 × 10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">35.57</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.0027</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛2.7 × 0.1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.1392</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">600</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">calculator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8.434</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cube-root tables</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tables of cube roots in three sections.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Grouping in threes</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Splitting digits from the point.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Capacity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How much a container holds.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Approximate</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Close to the true value.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">22. Multiple Choice Quiz</h3>
    <p>This lesson ends with a 10-question multiple-choice quiz. Each answer comes with an explanation — read it even when you are right.</p>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 Exam Tip</p>
    <div>Work each question on rough paper before choosing. Several options are designed to match common mistakes.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">23. Structured Questions</h3>
    <p>Answer in full, showing all working. Marks are shown in brackets.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>1.</strong> Use tables to find (a) ∛5.6 (b) ∛56 000 (c) ∛0.56. <span style="color:#fde68a;font-size:13px;">(6 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) ≈ 1.776 [2]. (b) 56 × 10³ → ∛56 × 10 ≈ 3.826 × 10 = 38.26 [2]. (c) 560 × 10⁻³ → ∛560 × 0.1 ≈ 8.243 × 0.1 = 0.8243 [2].</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #fde68a;">
    <p style="margin:0;"><strong>2.</strong> A cube-shaped tank holds 2 000 litres. Find its side to 2 decimal places. <span style="color:#fde68a;font-size:13px;">(3 marks)</span>
    </p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show marking guide</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2 m³ [1]; ∛2 [1] ≈ 1.26 m [1].</div>
    </details>
    </div>
    </div>
    <div style="background:#052e16;padding:20px;border-radius:12px;border:1px solid #22c55e;margin-bottom:20px;">
    <h3 style="color:#86efac;margin-top:0;">🏠 24. Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use tables to find ∛9, ∛90, ∛900 and ∛9 000. Explain the pattern.</li>
    <li>Design a cube-shaped tank to hold 1 000 litres and one to hold 8 000 litres. Find their sides.</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '∛4 500 is about:',
            options: ['16.51', '1.651', '165.1', '7.663'],
            correct: 0,
            explanation: '4 500 = 4.5 × 10³, so ∛4 500 = ∛4.5 × 10 ≈ 16.51.'
        },
        {
            question: '∛45 000 is about:',
            options: ['35.57', '3.557', '16.51', '355.7'],
            correct: 0,
            explanation: '45 000 = 45 × 10³, so ∛45 × 10 ≈ 35.57.'
        },
        {
            question: '∛0.0027 is about:',
            options: ['0.03', '1.392', '0.1392', '0.3'],
            correct: 2,
            explanation: '0.0027 = 2.7 × 10⁻³, and ∛2.7 × 0.1 ≈ 0.1392.'
        },
        {
            question: 'Cube-root tables have sections for:',
            options: ['0–1 only', '1–10, 10–100 and 100–1 000', '1–10 only', '1–100 only'],
            correct: 1,
            explanation: 'Three sections are needed because the digit groups matter.'
        },
        {
            question: 'A cube tank holding 4 500 litres has a side of about:',
            options: ['16.5 m', '4.5 m', '0.165 m', '1.65 m'],
            correct: 3,
            explanation: '4 500 litres = 4.5 m³, and ∛4.5 ≈ 1.65 m.'
        },
        {
            question: '∛(A × 10³ⁿ) equals:',
            options: ['∛A × 10³ⁿ', '∛A × 10ⁿ', 'A × 10ⁿ', '3A × 10ⁿ'],
            correct: 1,
            explanation: 'Divide the power of 10 by 3 and take the cube root of A.'
        },
        {
            question: 'Which is the best method for ∛2 744?',
            options: ['Guessing', 'Square-root tables', 'Long division', 'Factor method'],
            correct: 3,
            explanation: '2 744 = 2³ × 7³ is a perfect cube, so factors give the exact answer 14.'
        },
        {
            question: '∛45 000 lies between:',
            options: ['3 and 4', '30 and 40', '300 and 400', '10 and 20'],
            correct: 1,
            explanation: '30³ = 27 000 and 40³ = 64 000.'
        },
        {
            question: '3.6³ on a calculator equals:',
            options: ['10.8', '12.96', '46.656', '466.56'],
            correct: 2,
            explanation: '3.6 × 3.6 × 3.6 = 46.656.'
        },
        {
            question: 'A clay cube of side 4 cm is cut into 8 equal cubes. Each small cube has side:',
            options: ['0.5 cm', '1 cm', '2 cm', '8 cm'],
            correct: 2,
            explanation: 'Each has volume 64 ÷ 8 = 8 cm³, and ∛8 = 2 cm.'
        }
    ]
},
{
    name: '1.2 Worked Examples: Cubes and Cube Roots',
    type: 'lesson',
    duration: '45 min',
    exercises: 4,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Worked Examples</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 45 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">✏️ Worked Examples — Cubes and Cube Roots</h2>
    <p style="font-size:16px;">Exam-style examples combining cubes, cube roots, tables and real-life problems.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Calculations</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 1: Combined expression <span style="font-size:12px;color:#0b1220;background:#fde68a;padding:2px 8px;border-radius:999px;margin-left:6px;">Medium</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate ∛(−125) + 2³ × ∛8.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Roots and powers first, then multiply, then add.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> ∛(−125) = −5</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube root of a negative.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 2³ = 8 and ∛8 = 2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Powers and roots.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> −5 + 8 × 2 = −5 + 16 = 11</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> BODMAS.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 11</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 2: Fraction <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Evaluate ∛(0.064 × 27) as a decimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Multiply first or take separate roots.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> ∛0.064 = 0.4; ∛27 = 3</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Separate roots.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> 0.4 × 3 = 1.2</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Multiply.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 1.2</div>
    <p style="margin:8px 0 0 0;color:#a7f3d0;">🔁 <strong>Check:</strong> 1.2³ = 1.728 = 0.064 × 27 ✓</p>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📂 Real life</h3>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 3: Comparing tanks <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Tank A is a cube of side 1.8 m. Tank B is a cube holding 8 000 litres. Which holds more, and by how much?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Compare volumes in litres.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> A: 1.8³ = 5.832 m³ = 5 832 litres</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube the side.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> B: 8 000 litres</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Given.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> 8 000 − 5 832 = 2 168</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Difference.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> Tank B holds 2 168 litres more.</div>
    </div>
    <div style="background:#0b1729;border-left:4px solid #22c55e;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#86efac;font-weight:bold;">✏️ Worked Example 4: Melting and recasting <span style="font-size:12px;color:#0b1220;background:#fb923c;padding:2px 8px;border-radius:999px;margin-left:6px;">Hard</span>
    </p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Problem:</strong> Twenty-seven small metal cubes of side 2 cm are melted and recast into one large cube. Find its side.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>Thinking process:</strong> Total volume stays the same.</p>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#bae6fd;">Step 1:</strong> Small volume = 2³ = 8 cm³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Each cube.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#bae6fd;">Step 2:</strong> Total = 27 × 8 = 216 cm³</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> All cubes.</p>
    </div>
    <div style="background:#13233a;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#38bdf8;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#bae6fd;">Step 3:</strong> Side = ∛216 = 6 cm</p>
    <p style="margin:6px 0 0 34px;color:#cbd5e1;"><em>Explanation:</em> Cube root.</p>
    </div>
    <div style="background:#052e16;border:1px solid #22c55e;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#86efac;">✅ Final answer:</strong> 6 cm</div>
    </div>
    </div>
    <div style="background:#10233d;border-left:4px solid #3b82f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">📝 How Examiners Mark These</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Method marks for correct factorisation or correct use of tables.</li>
    <li>Unit conversion (litres and m³) earns marks.</li>
    <li>Always check by cubing.</li>
    </ul>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '∛(−125) + 2³ × ∛8 equals:',
            options: ['−21', '11', '3', '6'],
            correct: 1,
            explanation: '−5 + 8 × 2 = −5 + 16 = 11.'
        },
        {
            question: '∛(0.064 × 27) equals:',
            options: ['0.12', '1.2', '12', '1.728'],
            correct: 1,
            explanation: '∛0.064 × ∛27 = 0.4 × 3 = 1.2.'
        },
        {
            question: 'A cube of side 1.8 m holds:',
            options: ['3 240 litres', '583.2 litres', '5.4 litres', '5 832 litres'],
            correct: 3,
            explanation: '1.8³ = 5.832 m³ = 5 832 litres.'
        },
        {
            question: '27 cubes of side 2 cm recast into one cube give a side of:',
            options: ['6 cm', '54 cm', '18 cm', '3 cm'],
            correct: 0,
            explanation: 'Total volume 216 cm³ and ∛216 = 6 cm.'
        },
        {
            question: 'When recasting, which quantity stays the same?',
            options: ['Side length', 'Number of cubes', 'Surface area', 'Total volume'],
            correct: 3,
            explanation: 'Melting and recasting does not change the amount of material.'
        }
    ]
},
{
    name: '1.2 Practice: Cubes and Cube Roots',
    type: 'lesson',
    duration: '60 min',
    exercises: 19,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Practice</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 60 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🏋️ Practice Set — Cubes and Cube Roots</h2>
    <p style="font-size:16px;">Twenty questions covering all four lessons.</p>
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
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> 8³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">512</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> (−4)³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−64</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> ∛343</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">7</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> ∛(−1 000)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−10</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> (1/2)³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1/8</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> 0.6³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.216</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> (2½)³ as a mixed number</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">125/8 = 15 5/8</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q8.</strong> ∛5 832 by factors</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">18</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q9.</strong> ∛(216/1 331)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">6/11</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q10.</strong> Use tables: 4.2³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">74.09</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fb923c;">
    <p style="margin:0 0 6px 0;color:#fb923c;font-weight:bold;">Hard</p>
    <p style="margin:8px 0 2px 0;"><strong>Q11.</strong> Use tables: 0.042³</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">74.09 × 10⁻⁶ = 0.00007409</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q12.</strong> Use tables: ∛9 500</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">∛9.5 × 10 ≈ 21.18</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q13.</strong> Smallest number to multiply 108 by to get a perfect cube</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">108 = 2² × 3³; multiply by 2 → 216</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q14.</strong> Evaluate ∛(8 × 27 × 125)</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">2 × 3 × 5 = 30</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q15.</strong> A cube box holds 125 000 cm³. Find its side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">50 cm</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q16.</strong> A cube tank of side 0.9 m: capacity in litres?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">729 litres</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q17.</strong> 64 dice of side 1.5 cm are packed into a cube-shaped box with no gaps. Find the side of the box.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">Total 64 × 3.375 = 216 cm³; side 6 cm</div>
    </details>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #93c5fd;">
    <p style="margin:0 0 6px 0;color:#93c5fd;font-weight:bold;">Exam Style</p>
    <p style="margin:8px 0 2px 0;"><strong>Q18.</strong> (a) Find ∛2 197 by factors. (b) Use tables to find 13.5³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(a) 13 (b) 1.35³ × 10³ ≈ 2.460 × 1 000 = 2 460</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q19.</strong> Evaluate (∛64 + ∛(−8))³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">(4 − 2)³ = 8</div>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">17 – 20</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Move to the quiz.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12 – 16</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Redo the ones you missed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7 – 11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Revise the lessons, then retry.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0 – 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ask for help and redo the guided examples.</td>
    </tr>
    </table>
    </div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '8³ equals:',
            options: ['512', '24', '64', '256'],
            correct: 0,
            explanation: '8 × 8 × 8 = 64 × 8 = 512.'
        },
        {
            question: '∛5 832 equals:',
            options: ['16', '24', '12', '18'],
            correct: 3,
            explanation: '5 832 = 2³ × 3⁶, so the root is 2 × 3² = 18.'
        },
        {
            question: '0.6³ equals:',
            options: ['1.8', '0.216', '0.36', '2.16'],
            correct: 1,
            explanation: '6³ = 216 with three decimal places gives 0.216.'
        },
        {
            question: 'The side of a cube box holding 125 000 cm³ is:',
            options: ['500 cm', '5 cm', '25 cm', '50 cm'],
            correct: 3,
            explanation: '∛125 × ∛1 000 = 5 × 10 = 50 cm.'
        },
        {
            question: '(∛64 + ∛(−8))³ equals:',
            options: ['8', '216', '−8', '64'],
            correct: 0,
            explanation: 'Inside the bracket 4 + (−2) = 2, and 2³ = 8.'
        }
    ]
},
{
    name: '1.2 Quiz: Cubes and Cube Roots',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📝 Sub-strand 1.2 Quiz</h2>
    <p style="font-size:16px;">Test yourself on cubes and cube roots by all methods.</p>
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
    <li>Cubes by multiplication (including negatives, fractions and decimals)</li>
    <li>Cubes from tables and standard form</li>
    <li>Cube roots by the factor method</li>
    <li>Cube roots from tables and calculators</li>
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
    <div>Many wrong options come from dividing by 3 instead of finding a cube root, or forgetting to triple the decimal places.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '7³ equals:',
            options: ['21', '343', '49', '777'],
            correct: 1,
            explanation: '7 × 7 × 7 = 49 × 7 = 343.'
        },
        {
            question: '(−5)³ equals:',
            options: ['125', '−15', '15', '−125'],
            correct: 3,
            explanation: 'The cube of a negative number is negative.'
        },
        {
            question: '(2/5)³ equals:',
            options: ['6/15', '8/15', '4/25', '8/125'],
            correct: 3,
            explanation: 'Cube the top and the bottom: 8 and 125.'
        },
        {
            question: '0.3³ equals:',
            options: ['0.9', '0.027', '0.09', '0.27'],
            correct: 1,
            explanation: '3³ = 27 with three decimal places gives 0.027.'
        },
        {
            question: 'If 1.23³ ≈ 1.861, then 12.3³ is about:',
            options: ['18.61', '186.1', '18 610', '1 861'],
            correct: 3,
            explanation: '12.3³ = 1.23³ × 10³ ≈ 1 861.'
        },
        {
            question: '∛512 equals:',
            options: ['8', '6', '256', '170.7'],
            correct: 0,
            explanation: '8 × 8 × 8 = 512, so the cube root of 512 is 8.'
        },
        {
            question: '∛(−27) equals:',
            options: ['3', '−3', '−9', 'No real answer'],
            correct: 1,
            explanation: '(−3)³ = −27, so the cube root of −27 is −3.'
        },
        {
            question: '∛3 375 equals:',
            options: ['25', '13', '15', '35'],
            correct: 2,
            explanation: '3 375 = 3³ × 5³, so the root is 3 × 5 = 15.'
        },
        {
            question: '∛(8/27) equals:',
            options: ['8/9', '4/9', '2/9', '2/3'],
            correct: 3,
            explanation: 'Cube roots of 8 and 27 are 2 and 3.'
        },
        {
            question: '∛0.001 equals:',
            options: ['0.1', '0.01', '0.0003', '1'],
            correct: 0,
            explanation: '0.1 × 0.1 × 0.1 = 0.001.'
        },
        {
            question: '∛4 500 is about:',
            options: ['1.651', '7.663', '16.51', '35.57'],
            correct: 2,
            explanation: '4.5 × 10³ gives ∛4.5 × 10 ≈ 16.51.'
        },
        {
            question: 'A cube-shaped box of volume 1 728 cm³ has side:',
            options: ['12 cm', '14 cm', '576 cm', '18 cm'],
            correct: 0,
            explanation: 'The side is the cube root of the volume: ∛1 728 = 12.'
        },
        {
            question: 'Which number is NOT a perfect cube?',
            options: ['64', '125', '200', '1 000'],
            correct: 2,
            explanation: '200 = 2³ × 5², and 5² is not a complete triple.'
        },
        {
            question: 'A cube tank of side 1.5 m holds:',
            options: ['4.5 litres', '2 250 litres', '3 375 litres', '337.5 litres'],
            correct: 2,
            explanation: '1.5³ = 3.375 m³ = 3 375 litres.'
        },
        {
            question: 'Cube-root tables are divided into sections because:',
            options: ['∛4.5, ∛45 and ∛450 have different digits', 'Tables are long', 'Cubes are negative', 'Calculators are banned'],
            correct: 0,
            explanation: 'Grouping digits in threes decides which section to use.'
        }
    ]
},
{
    name: '1.2 Assignment: Cubes and Cube Roots',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 120 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">📂 Assignment: Designing Cube-Shaped Containers</h2>
    <p style="font-size:16px;">Design cube-shaped containers for a school farm and kitchen using cubes and cube roots.</p>
    <p style="margin:6px 0 0 0;color:#e0f2fe;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work).</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🎬 The Task in Context</h3>
    <p>The school wants three cube-shaped containers: a water tank to hold 2 744 litres, a grain bin to hold 0.729 m³, and a set of small storage boxes for spices, each holding 125 cm³. You are the designer.</p>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Tank makers and carpenters in Kenya regularly work out sizes from the capacity a customer needs.</div>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪜 Tasks</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Convert each capacity to suitable cubic units.</li>
    <li>Use the factor method to find the exact side of the water tank and the spice boxes.</li>
    <li>Find the side of the grain bin by the factor method or tables and explain your choice.</li>
    <li>A second water tank must hold 5 000 litres. Use tables and a calculator to find its side, and compare.</li>
    <li>Draw a labelled sketch of each container with its side.</li>
    <li>Check every side by cubing it.</li>
    <li>Write a short report recommending sizes, with your reasons.</li>
    </ol>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>All calculations with methods shown</li>
    <li>Labelled sketches</li>
    <li>Table versus calculator comparison</li>
    <li>Checks by cubing</li>
    <li>Short report</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unit conversion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All conversions correct and explained</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Methods</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Factor method, tables and calculator all used correctly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two methods used correctly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One method used</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Methods incorrect</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy and checking</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All answers correct and checked</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minor slips; checked</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Several errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few correct</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear sketches and well-reasoned report</td>
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
    <li>2 744 litres = 2.744 m³.</li>
    <li>125 is a perfect cube.</li>
    <li>Round only at the end.</li>
    </ul>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which method did I find most useful, and why?</li>
    <li>How close were the table and calculator answers?</li>
    <li>Where else could I use cube roots?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '2 744 litres equals:',
            options: ['27.44 m³', '274.4 m³', '0.2744 m³', '2.744 m³'],
            correct: 3,
            explanation: 'Divide litres by 1 000 to get cubic metres.'
        },
        {
            question: 'The side of a cube tank holding 2.744 m³ is:',
            options: ['14 m', '0.14 m', '1.04 m', '1.4 m'],
            correct: 3,
            explanation: '∛2.744 = 1.4 because 14³ = 2 744.'
        },
        {
            question: 'A spice box holding 125 cm³ has side:',
            options: ['25 cm', '5 cm', '41.7 cm', '11.2 cm'],
            correct: 1,
            explanation: 'The side is ∛125, and 5³ = 125, so the side is 5 cm.'
        },
        {
            question: 'The side of a cube bin of 0.729 m³ is:',
            options: ['0.9 m', '0.09 m', '9 m', '0.27 m'],
            correct: 0,
            explanation: 'The side is ∛0.729, and 0.9³ = 0.729, so the side is 0.9 m.'
        },
        {
            question: 'A 5 000-litre cube tank has a side of about:',
            options: ['1.71 m', '17.1 m', '2.5 m', '1.25 m'],
            correct: 0,
            explanation: '5 000 litres = 5 m³, and ∛5 ≈ 1.71 m.'
        }
    ]
},
{
    name: '1.2 Revision: Cubes and Cube Roots',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 30 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🔁 Revision — Cubes and Cube Roots</h2>
    <p style="font-size:16px;">Review these cards before moving on.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">1. Cubes</p>
    <div>
    <p>n³ = n × n × n. Negative numbers have negative cubes. Fractions: cube top and bottom. Decimals: triple the decimal places.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">2. Cubes from tables</p>
    <div>
    <p>Tables cover 1.000–9.999. Use standard form: (A × 10ⁿ)³ = A³ × 10³ⁿ.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">3. Factor method</p>
    <div>
    <p>Prime factorise, group in threes, take one from each group (or divide indices by 3).</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">4. Cube roots from tables</p>
    <div>
    <p>Group digits in threes from the point; sections 1–10, 10–100, 100–1 000; ∛(A × 10³ⁿ) = ∛A × 10ⁿ.</p>
    </div>
    </div>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #38bdf8;">
    <p style="margin:0 0 4px 0;color:#7dd3fc;font-weight:bold;">5. Real life</p>
    <div>
    <p>Volume = side³; side = ∛volume. 1 m³ = 1 000 litres.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(−0.4)³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">−0.064</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube (tables)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45.6³</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">≈ 94 820</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube root (factors)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛2 744</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">14</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube root (tables)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛45 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">≈ 35.57</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Real life</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Side of 64 000 cm³ cube</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">40 cm</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy ones and climb. Show every step, then open the answer to mark yourself.</p>
    <div style="background:#0b1729;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Find 12³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">1 728</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Find (−2/3)³.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">−8/27</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Find ∛9 261.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">21</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Use tables to find ∛70.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">4.121</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> A cube holds 0.216 m³. Find its side.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">0.6 m</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Is 486 a perfect cube?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#7dd3fc;">👉 Show answer</summary>
    <div style="background:#0b1729;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e0f2fe;">No: 486 = 2 × 3⁵</div>
    </details>
    </div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can find cubes by multiplication.</p>
    <p style="margin:6px 0;">☐ I can read cubes from tables.</p>
    <p style="margin:6px 0;">☐ I can find cube roots by factors.</p>
    <p style="margin:6px 0;">☐ I can find cube roots from tables and a calculator.</p>
    <p style="margin:6px 0;">☐ I can solve real-life problems.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: '12³ equals:',
            options: ['144', '36', '1 200', '1 728'],
            correct: 3,
            explanation: '12 × 12 × 12 = 144 × 12 = 1 728.'
        },
        {
            question: '(−2/3)³ equals:',
            options: ['−8/27', '8/27', '−6/9', '−2/9'],
            correct: 0,
            explanation: 'Cube both parts and keep the negative sign.'
        },
        {
            question: '∛9 261 equals:',
            options: ['31', '19', '21', '27'],
            correct: 2,
            explanation: '9 261 = 3³ × 7³, so the root is 3 × 7 = 21.'
        },
        {
            question: 'A cube of 0.216 m³ has side:',
            options: ['0.06 m', '0.6 m', '6 m', '0.072 m'],
            correct: 1,
            explanation: 'The side is ∛0.216, and 0.6³ = 0.216, so the side is 0.6 m.'
        },
        {
            question: 'Is 486 a perfect cube?',
            options: ['Yes', 'No', 'Only in tables', 'Only if negative'],
            correct: 1,
            explanation: '486 = 2 × 3⁵, and the indices are not multiples of 3.'
        }
    ]
},
{
    name: '1.2 Summary: Cubes and Cube Roots',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #f1f5f9;">
    <div style="background: linear-gradient(135deg, #5b21b6, #0b1220); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #38bdf8;">
    <p style="margin:0;color:#bae6fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 · Numbers · Sub-strand 1.2 Cubes and Cube Roots</p>
    <p style="margin:4px 0 0 0;"><span style="background:#0b1729;border:1px solid #38bdf8;color:#e0f2fe;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e0f2fe;font-size:13px;">⏱️ Estimated duration: 15 min</span>
    </p>
    <h2 style="color:#e0f2fe;margin:8px 0 10px 0;">🧾 Summary — Cubes and Cube Roots</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Cubing a number gives the volume of a cube with that side; the cube root works backwards from volume to side. You can find both by multiplication and factors, by tables, or with a calculator.</p>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">🔑 Key Points</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>n³ = n × n × n; the volume of a cube is side³.</li>
    <li>Negative numbers have negative cubes and negative cube roots.</li>
    <li>Use standard form with tables: (A × 10ⁿ)³ = A³ × 10³ⁿ.</li>
    <li>Factor method: group prime factors in threes.</li>
    <li>Cube-root tables: group digits in threes to choose the section.</li>
    <li>Always check a cube root by cubing.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1. Cubes by multiplication</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Whole numbers, negatives, fractions, decimals</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0.15³</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2. Cubes from tables</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Standard form and table reading</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45.6³</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3. Factor method</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prime factors in threes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛1 728</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4. Tables and calculator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sections, grouping, calculator keys</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛4 500</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">n³ = n × n × n</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Volume of cube</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">V = s³</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cube root</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛V = s</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tables (cubes)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">(A × 10ⁿ)³ = A³ × 10³ⁿ</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tables (roots)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">∛(A × 10³ⁿ) = ∛A × 10ⁿ</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#13233a;padding:20px;border-radius:12px;margin-bottom:20px;border:1px solid #24415f;">
    <h3 style="color:#7dd3fc;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cube</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cube root</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Perfect cube</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Prime factor</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Standard form</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mathematical tables</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Volume</span><span style="background:#0b1729;border:1px solid #e0f2fe;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Capacity</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real Life in Kenya</p>
    <div>Tank makers, carpenters, packagers and engineers use cubes and cube roots whenever they move between the size of a container and how much it holds.</div>
    </div>
    <div style="background:#172554;border-left:4px solid #60a5fa;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bfdbfe;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Indices and Logarithms (next batch) extends powers beyond 2 and 3 and introduces logarithms.</div>
    </div>
    <div style="background:#0c4a6e;padding:20px;border-radius:12px;border:1px solid #38bdf8;margin-bottom:20px;">
    <h3 style="color:#e0f2fe;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ find cubes by multiplication and tables</p>
    <p style="margin:6px 0;">✔️ find cube roots by factors, tables and a calculator</p>
    <p style="margin:6px 0;">✔️ apply cubes and cube roots to real-life problems</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The cube root of a volume gives:',
            options: ['The side of the cube', 'The area of a face', 'The number of faces', 'The surface area'],
            correct: 0,
            explanation: 'If V = s³, then s = ∛V.'
        },
        {
            question: 'Which method gives exact cube roots of perfect cubes?',
            options: ['Estimation only', 'Square-root tables', 'Factor method', 'Guessing'],
            correct: 2,
            explanation: 'Prime factorisation gives the exact root.'
        },
        {
            question: '1 m³ equals:',
            options: ['100 litres', '1 000 litres', '10 litres', '1 litre'],
            correct: 1,
            explanation: 'One cubic metre holds 1 000 litres.'
        },
        {
            question: 'Which sub-strand comes next?',
            options: ['1.1 Integers', '1.3 Indices and Logarithms', '2.1 Matrices', '1.4 Compound Proportions'],
            correct: 1,
            explanation: 'Indices and Logarithms follows Cubes and Cube Roots.'
        },
        {
            question: '(A × 10ⁿ)³ equals:',
            options: ['A³ × 10ⁿ', '3A × 10ⁿ', 'A³ × 10³ⁿ', 'A × 10³ⁿ'],
            correct: 2,
            explanation: 'Both A and the power of 10 are cubed.'
        }
    ]
}
],
          stats:{lessons:22,exercises:204,quizzes:23,projects:2,duration:'19 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: '−9 + (−6) equals:',
                  options: ['3', '15', '−15', '−3'],
                  correct: 2,
                  explanation: 'Both numbers are negative, so add 9 and 6 and keep the negative sign.'
              },
              {
                  question: '8 − (−5) equals:',
                  options: ['3', '13', '−13', '−3'],
                  correct: 1,
                  explanation: 'Subtracting a negative number is the same as adding: 8 + 5 = 13.'
              },
              {
                  question: '(−7) × (−8) equals:',
                  options: ['56', '−56', '−15', '15'],
                  correct: 0,
                  explanation: 'Same signs give a positive product.'
              },
              {
                  question: '−20 + 4 × (−3) equals:',
                  options: ['−32', '48', '−8', '32'],
                  correct: 0,
                  explanation: 'Multiply first: 4 × (−3) = −12, then −20 + (−12) = −32.'
              },
              {
                  question: 'The temperature rises from −4 °C to 9 °C. The rise is:',
                  options: ['5 °C', '13 °C', '−13 °C', '−5 °C'],
                  correct: 1,
                  explanation: 'Rise = final − initial = 9 − (−4) = 13 °C.'
              },
              {
                  question: '(−2)⁴ equals:',
                  options: ['−16', '−8', '8', '16'],
                  correct: 3,
                  explanation: 'Four negative factors is an even number, so the answer is positive.'
              },
              {
                  question: '6³ equals:',
                  options: ['18', '216', '36', '666'],
                  correct: 1,
                  explanation: '6 × 6 × 6 = 36 × 6 = 216.'
              },
              {
                  question: '0.4³ equals:',
                  options: ['1.2', '0.64', '0.012', '0.064'],
                  correct: 3,
                  explanation: '4³ = 64 with three decimal places gives 0.064.'
              },
              {
                  question: '∛2 744 equals:',
                  options: ['12', '16', '14', '18'],
                  correct: 2,
                  explanation: '2 744 = 2³ × 7³, so the cube root is 2 × 7 = 14.'
              },
              {
                  question: '∛(−0.008) equals:',
                  options: ['0.2', '−0.02', '0.02', '−0.2'],
                  correct: 3,
                  explanation: '(−0.2)³ = −0.008.'
              },
              {
                  question: 'If 4.56³ ≈ 94.82, then 45.6³ is about:',
                  options: ['94 820', '948.2', '9 482', '948 200'],
                  correct: 0,
                  explanation: '(4.56 × 10)³ = 4.56³ × 10³ ≈ 94 820.'
              },
              {
                  question: 'A cube-shaped tank holds 4 500 litres. Its side is about:',
                  options: ['16.5 m', '4.5 m', '1.65 m', '0.45 m'],
                  correct: 2,
                  explanation: '4 500 litres = 4.5 m³, and ∛4.5 ≈ 1.65 m.'
              }
          ]}
);