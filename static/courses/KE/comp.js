// Eschool course: Grade 10 Computer Science (Kenya, CBC)
// Loaded only for learners whose country is Kenya. The list of Kenya's
// course files is COURSE_FILES['KE'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'computer-science', name:'Grade 10 Computer Science', code:'CSC 101', level:'grade-10', iconStyle:'fas', icon:'fa-laptop-code', color:'#0277bd',
          category:'Sciences',
          description:'Trace how computers evolved, explore how they are built and how the CPU runs instructions, master binary, octal and hexadecimal, and build towards networking and programming, with hands-on practical activities.',
          longDescription:'This Grade 10 Computer Science course follows the KICD Senior School Grade 10 Computer Science curriculum design (June 2024) strand by strand: Foundation of Computer Science, Computer Networking and Software Development. Each strand opens with an overview, its learning outcomes and an introduction, and every sub-strand has three lessons, a computer laboratory activity, a quiz, an assignment, a revision page and a summary. Lessons include teacher explanations, background, vocabulary, labelled diagrams, worked examples, safety notes, practical investigations, analysis, real-life applications, guided and independent practice, and ten practice questions each. Batch 1 covers the evolution and development of computers and computer organisation and architecture, including number systems.',
          modules:[
{
    name: '1.0 Foundation of Computer Science — Strand Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Strand Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Strand 1.0: Foundation of Computer Science</h2>
    <p style="font-size:16px;">Welcome to Grade 10 Computer Science. Computers are everywhere in Kenya today: in the phone that sends M-Pesa, in the eCitizen services, in hospital records, in supermarket tills and in the satellites that forecast the weather. Computer Science explains how these machines work, how they talk to each other and how we write the instructions they follow.</p>
    <p style="font-size:16px;">This first strand, <strong>Foundation of Computer Science</strong>, starts with the story of how computers developed, then opens up the computer to see how it is organised, how the processor runs instructions, how data is represented in binary, and how devices, storage, the operating system and a complete computer setup fit together.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Big question for this strand:</strong> How do the history, structure and components of a computer explain what it can do today?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Strand Is About</h3>
    <p>The foundation strand gives you the concepts every later strand builds on: you cannot configure a network or write efficient programs without knowing what happens inside the machine.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sub-strand</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Big question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">You will be able to…</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Evolution of Computers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How have computers evolved over generations?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe early computing devices, the key technologies and the five generations of computers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 Computer Architecture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What is the role of computer architecture in computer performance?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe the von Neumann architecture, the fetch–execute cycle, RISC and CISC, and use binary, octal and hexadecimal.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.3 Input/Output (I/O) Devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How do we communicate with computers?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Classify and select input and output devices for different tasks.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.4 Computer Storage</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why are there different types of storage?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compare primary and secondary storage and their capacities.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.5 Central Processing Unit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How does the CPU affect performance?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Describe CPU components and factors affecting processing speed.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.6 Operating System</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What does an operating system do?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explain the functions of operating systems and manage files and resources.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.7 Computer Setup</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How is a computer system set up?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Assemble, connect and configure a computer safely.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Strand Map</h3>
    <p>Strand 1.0 has seven sub-strands. Each has three lessons, a computer laboratory activity, a quiz, an assignment, a revision page and a summary. This first batch covers 1.1 and 1.2.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Evolution of Computers <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: History of Computing</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Early computing devices</li>
    <li>1.1.2 Key technologies: from vacuum tubes to VLSI</li>
    <li>1.1.3 The five generations of computers</li>
    <li>💻 Laboratory activity: calculating then and now</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Computer Architecture <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Inside the Computer</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 The von Neumann architecture, RISC and CISC</li>
    <li>1.2.2 Buses, registers and the fetch–execute cycle</li>
    <li>1.2.3 Number systems: binary, octal and hexadecimal</li>
    <li>💻 Laboratory activity: modelling the von Neumann computer</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.3 Input/Output (I/O) Devices <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Hardware</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.4 Computer Storage <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Hardware</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.5 Central Processing Unit (CPU) <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Hardware</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.6 Operating System (OS) <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Software</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.7 Computer Setup <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Practical Computing</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Coming in a later batch</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs in This Strand</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How you will build it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Communication and collaboration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group research and presentations on the history of computers.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Critical thinking and problem solving</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining how architecture elements work together; number conversions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creativity and imagination</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building models of computer architecture from local materials.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Digital literacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using simulations and videos of the fetch–execute cycle.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Self-efficacy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Following correct procedures when matching generations to technologies.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Learning to learn</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keeping a practical notebook and reflecting on progress.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Patriotism</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 PCIs</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Citizenship education: equity and non-discrimination</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Life skills: effective communication</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety in the computer laboratory</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cyber security and digital citizenship</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care: e-waste</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Strand</p>
    <div>Work through the modules in order. Read the teacher explanation and background first, learn the vocabulary, then study each diagram and worked example. Practise number conversions until they are quick. Do practical activities only under supervision and follow the computer laboratory rules.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many sub-strands are in Strand 1.0 Foundation of Computer Science?',
            options: ['Seven', 'Four', 'Five', 'Three'],
            correct: 0,
            explanation: 'Strand 1.0 has seven sub-strands, from Evolution of Computers to Computer Setup.'
        },
        {
            question: 'Which sub-strand covers binary and hexadecimal numbers?',
            options: ['1.1 Evolution of Computers', '1.2 Computer Architecture', '1.4 Computer Storage', '1.7 Computer Setup'],
            correct: 1,
            explanation: 'Number systems are part of computer organisation and architecture in the KICD design.'
        },
        {
            question: 'The key question for 1.1 is:',
            options: ['What does an operating system do?', 'How is a network configured?', 'Why do we need storage?', 'How have computers evolved over generations?'],
            correct: 3,
            explanation: 'Sub-strand 1.1 traces computers from early devices to modern generations.'
        },
        {
            question: 'The other two strands in Grade 10 Computer Science are:',
            options: ['Computer Networking and Software Development', 'Biology and Chemistry', 'Accounting and Business', 'Graphics and Music'],
            correct: 0,
            explanation: 'The Grade 10 design has Foundation of Computer Science, Computer Networking and Software Development.'
        },
        {
            question: 'Before opening a computer case you should:',
            options: ['Keep it running', 'Pour water on it', 'Shut it down, unplug it and work under supervision', 'Remove parts while it is on'],
            correct: 2,
            explanation: 'Unplugging prevents electric shock and damage to components.'
        }
    ]
},
{
    name: '1.0 Foundation of Computer Science — Learning Outcomes',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Outcomes</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Outcomes for Strand 1.0</h2>
    <p style="font-size:16px;">These are the outcomes you should achieve in this strand. Come back after each sub-strand and tick what you can now do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 General Learning Outcomes for the Strand</h3>
    <p>By the end of this strand, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use computer science knowledge, skills and values in daily life.</li>
    <li>Practise ethical and safe use of computer technology.</li>
    <li>Develop computer applications that solve real-world problems.</li>
    <li>Configure and manage computer networks for resource sharing.</li>
    <li>Pursue career and entrepreneurship opportunities in computer science, and adapt to the changing digital world.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Specific Learning Outcomes by Sub-strand</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Evolution of Computers</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify early computing devices and how they led to electronic computers.</li>
    <li>Describe the key technologies that defined computer development.</li>
    <li>Relate those technologies to each computer generation.</li>
    <li>Appreciate technological advancement in computer development.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How have computers evolved over generations?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 Computer Architecture</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the functional organisation and architecture of a von Neumann computer.</li>
    <li>Analyse the relationships among its functional elements.</li>
    <li>Create a model showing the structural elements of a von Neumann computer.</li>
    <li>Use binary, octal and hexadecimal number systems to represent data.</li>
    <li>Appreciate the importance of computer architecture.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>What is the role of computer architecture in computer performance?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.3–1.7 I/O Devices, Storage, CPU, Operating System, Computer Setup</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Outcomes for these sub-strands will be added with their lessons in later batches.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>How do the parts of a computer system work together?</em>
    </p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 How You Will Be Assessed</h3>
    <p>Your teacher (and this course) will use the four CBC achievement levels:</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it looks like in Strand 1.0 (from the KICD rubric)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Exceeds Expectations (EE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates all five principal technologies to their computer generations, with relevant examples; converts between all number bases accurately and explains the fetch–execute cycle in full.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Meets Expectations (ME)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates four technologies to their generations; converts most numbers correctly; describes the main stages of the fetch–execute cycle.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Approaches Expectations (AE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates three technologies to their generations; makes some conversion errors; partly describes the fetch–execute cycle.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Below Expectations (BE)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relates at most two technologies to their generations; struggles with conversions and with the parts of the architecture.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Computer Science is assessed through written tests, practical tasks, projects, observation and portfolios. Accurate explanations, careful practical work and safe use of equipment all count.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'To exceed expectations in 1.1 you must relate:',
            options: ['All five technologies to their generations with examples', 'Two technologies', 'Only vacuum tubes', 'No technologies'],
            correct: 0,
            explanation: 'The KICD rubric requires five technologies with examples for Exceeds Expectations.'
        },
        {
            question: 'Creating a model of a von Neumann computer is an outcome of:',
            options: ['1.1 Evolution of Computers', '1.6 Operating System', '1.3 I/O Devices', '1.2 Computer Architecture'],
            correct: 3,
            explanation: 'Modelling the architecture is listed in sub-strand 1.2.'
        },
        {
            question: 'Relating three technologies to generations is at which level?',
            options: ['Exceeds Expectations', 'Meets Expectations', 'Approaches Expectations', 'Below Expectations'],
            correct: 2,
            explanation: 'Three technologies describes Approaches Expectations in the rubric.'
        },
        {
            question: 'Which is a general outcome of Computer Science?',
            options: ['Grow crops', 'Practise ethical and safe use of computer technology', 'Play football', 'Draw maps'],
            correct: 1,
            explanation: 'Ethical and safe use of technology is a general learning outcome.'
        },
        {
            question: 'Recording practical results honestly shows the value of:',
            options: ['Integrity', 'Unity', 'Patriotism', 'Peace'],
            correct: 0,
            explanation: 'Honest reporting of what you observed is integrity.'
        }
    ]
},
{
    name: '1.0 Foundation of Computer Science — Introduction',
    type: 'lesson',
    duration: '20 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: Thinking Like a Computer Scientist</h2>
    <p style="font-size:16px;">In 1946, ENIAC, one of the first electronic computers, filled a large room, weighed about 27 tonnes and used around 18 000 vacuum tubes. Today a smartphone that fits in your pocket is millions of times faster. How did that happen, and what is actually going on inside the machine when you tap the screen?</p>
    <p style="font-size:16px;">Computer scientists answer these questions by breaking big systems into smaller parts, looking for patterns, and describing exactly what each part does. This introduction shows you the habits and tools you will use in this strand.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧠 How Computer Scientists Think</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li><strong>Decompose</strong> — break a big system into parts (input, processing, storage, output).</li>
    <li><strong>Recognise patterns</strong> — every computer, from ENIAC to a phone, follows the same basic design.</li>
    <li><strong>Abstract</strong> — focus on what a part does, not every tiny detail.</li>
    <li><strong>Design algorithms</strong> — write clear step-by-step instructions.</li>
    <li><strong>Evaluate</strong> — compare options for speed, cost and reliability.</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔤 The Language of Computing</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hardware</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The physical parts of a computer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keyboard, CPU, memory</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Software</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Programs that tell the hardware what to do</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Windows, a browser, a game</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Raw facts the computer processes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Marks entered for a class</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Information</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Processed, meaningful data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A class mean score</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A binary digit: 0 or 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 bit</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Byte</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A group of 8 bits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">01000001 = the letter A</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔄 The Input–Process–Output Model</h3>
    <p>Every computer task follows the same pattern: <strong>input</strong> (data comes in), <strong>processing</strong> (the CPU works on it), <strong>output</strong> (results come out) and <strong>storage</strong> (data and programs are kept for later). Typing a message, the phone processing it, and the message appearing on screen is this model in action.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Safety in the Computer Laboratory</h3>
    <p>No food or drinks near computers. Keep cables tidy so nobody trips. Never touch electrical parts with wet hands, and never open a computer that is plugged in. Sit upright, keep the screen at eye level and rest your eyes regularly. Report any damaged equipment to the teacher straight away.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Get a notebook with sections for: (1) vocabulary, (2) diagrams, (3) number conversions and (4) practical reports. Practise one binary conversion every day — speed and accuracy come from regular practice.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Breaking a big system into smaller parts is called:',
            options: ['Abstraction', 'Compilation', 'Execution', 'Decomposition'],
            correct: 3,
            explanation: 'Decomposition makes complex systems easier to understand and build.'
        },
        {
            question: 'A byte is made of:',
            options: ['4 bits', '16 bits', '8 bits', '2 bits'],
            correct: 2,
            explanation: 'One byte is a group of eight binary digits.'
        },
        {
            question: 'Processed, meaningful data is called:',
            options: ['Information', 'Hardware', 'A bit', 'Input'],
            correct: 0,
            explanation: 'Data becomes information after processing gives it meaning.'
        },
        {
            question: 'In the input–process–output model, the CPU carries out:',
            options: ['Processing', 'Input', 'Output', 'Printing'],
            correct: 0,
            explanation: 'The CPU processes data according to program instructions.'
        },
        {
            question: 'Which is a computer laboratory rule?',
            options: ['Open computers while running', 'No food or drinks near computers', 'Touch sockets with wet hands', 'Leave cables across walkways'],
            correct: 1,
            explanation: 'Food and drinks can damage equipment and cause electrical hazards.'
        }
    ]
},
{
    name: '1.1.1 Evolution of Computers: Early Computing Devices',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Early Computing Devices</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will study the ancient, medieval and mechanical devices people invented to calculate and to control machines — the abacus, Napier’s bones, the slide rule, the Pascaline, the Jacquard loom, and Babbage’s Difference and Analytical Engines — and see which of their ideas live on in modern computers.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Modern computers did not appear from nowhere. Ideas such as place value, mechanical calculation, punched-card instructions and a separate “mill” and “store” were developed over centuries. Knowing them helps you understand why computers are designed the way they are.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧮 Abacus still used to teach counting</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📈 Logarithms in science and engineering</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧵 Programmable machines in factories</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💳 Punched-card ideas in data entry</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Museums and history of science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💡 Inventing new devices</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify early computing devices and how they led to electronic computers.</li>
    <li>Describe the key technologies that defined computer development.</li>
    <li>Relate those technologies to each computer generation.</li>
    <li>Appreciate technological advancement in computer development.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe at least six early computing devices.</li>
    <li>State who invented each device and roughly when.</li>
    <li>Explain how each device contributed to modern computing.</li>
    <li>Use an abacus and Napier’s bones to calculate.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Key inquiry question:</strong> What is the importance of principles and technologies in the development of computers?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> Junior School Computer Science: uses of computers and parts of a computer; Mathematics: place value and multiplication.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>computer</strong> is an electronic device that accepts data (input), processes it according to instructions, stores it and produces information (output). Long before electricity was used, people needed help with counting, trading, taxes and astronomy, so they built <strong>computing aids</strong>.</p>
    <p>Each early device introduced an idea we still use: the <strong>abacus</strong> used place value; <strong>Napier’s bones</strong> broke multiplication into simple steps; the <strong>Pascaline</strong> calculated with gears automatically; the <strong>Jacquard loom</strong> was controlled by a program of punched cards; and <strong>Babbage’s Analytical Engine</strong> had a processing unit, a memory, input and output.</p>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Early devices = tools that helped people calculate. Each one added an idea that modern computers still use.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Scientific Background</h3>
    <p>Calculating devices developed in three broad stages: <strong>manual</strong> devices moved by hand (abacus, Napier’s bones, slide rule); <strong>mechanical</strong> devices with gears and levers (Pascaline, Leibniz’s stepped reckoner, Babbage’s engines); and <strong>electromechanical</strong> machines that used electricity with moving parts (Hollerith’s 1890 tabulating machine). Fully <strong>electronic</strong> computers came in the 1940s.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Computer</strong>
    </p>
    <p style="margin:6px 0;">An electronic device that accepts, processes, stores and outputs data according to instructions.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A laptop, a phone, a server.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Computing device</strong>
    </p>
    <p style="margin:6px 0;">Any tool used to perform calculations.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Abacus, calculator.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Mechanical</strong>
    </p>
    <p style="margin:6px 0;">Working by gears, wheels and levers rather than electronics.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Pascaline.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Punched card</strong>
    </p>
    <p style="margin:6px 0;">A card with holes in set positions that represent data or instructions.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Cards used by the Jacquard loom and Hollerith tabulator.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Program</strong>
    </p>
    <p style="margin:6px 0;">A sequence of instructions that controls a machine.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The chain of cards controlling a loom’s pattern.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Algorithm</strong>
    </p>
    <p style="margin:6px 0;">A step-by-step procedure for solving a problem.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Ada Lovelace’s method for Bernoulli numbers.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Manual Devices: Abacus, Napier’s Bones and the Slide Rule</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 520 250" width="520" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="60" y="20" width="300" height="200" rx="8" fill="none" stroke="#8d6e63" stroke-width="6"/><line x1="60" y1="98" x2="360" y2="98" stroke="#8d6e63" stroke-width="6"/><line x1="130" y1="30" x2="130" y2="210" stroke="#94a3b8" stroke-width="3"/><ellipse cx="130" cy="50" rx="22" ry="11" fill="#475569" stroke="#e3f2fd"/><ellipse cx="130" cy="118" rx="22" ry="10" fill="#fde68a" stroke="#e3f2fd"/><ellipse cx="130" cy="140" rx="22" ry="10" fill="#fde68a" stroke="#e3f2fd"/><ellipse cx="130" cy="162" rx="22" ry="10" fill="#fde68a" stroke="#e3f2fd"/><ellipse cx="130" cy="206" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><text x="130" y="232" fill="#e3f2fd" font-size="12" text-anchor="middle">hundreds: 3</text><line x1="210" y1="30" x2="210" y2="210" stroke="#94a3b8" stroke-width="3"/><ellipse cx="210" cy="82" rx="22" ry="11" fill="#fde68a" stroke="#e3f2fd"/><ellipse cx="210" cy="140" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><ellipse cx="210" cy="162" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><ellipse cx="210" cy="184" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><ellipse cx="210" cy="206" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><text x="210" y="232" fill="#e3f2fd" font-size="12" text-anchor="middle">tens: 5</text><line x1="290" y1="30" x2="290" y2="210" stroke="#94a3b8" stroke-width="3"/><ellipse cx="290" cy="50" rx="22" ry="11" fill="#475569" stroke="#e3f2fd"/><ellipse cx="290" cy="118" rx="22" ry="10" fill="#fde68a" stroke="#e3f2fd"/><ellipse cx="290" cy="140" rx="22" ry="10" fill="#fde68a" stroke="#e3f2fd"/><ellipse cx="290" cy="184" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><ellipse cx="290" cy="206" rx="22" ry="10" fill="#475569" stroke="#e3f2fd"/><text x="290" y="232" fill="#e3f2fd" font-size="12" text-anchor="middle">units: 2</text><text x="380" y="70" fill="#e3f2fd" font-size="12">Upper bead = 5</text><text x="380" y="90" fill="#e3f2fd" font-size="12">(counts when moved</text><text x="380" y="106" fill="#e3f2fd" font-size="12">down to the bar)</text><text x="380" y="150" fill="#e3f2fd" font-size="12">Lower bead = 1</text><text x="380" y="170" fill="#e3f2fd" font-size="12">(counts when moved</text><text x="380" y="186" fill="#e3f2fd" font-size="12">up to the bar)</text><text x="380" y="226" fill="#e3f2fd" font-size="14">Value shown: 352</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Device</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inventor and date</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it worked</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Contribution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Abacus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ancient Mesopotamia; later China (suanpan) and Japan (soroban)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beads on rods represent digits in place-value columns</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Place value and digit-by-digit calculation</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Napier’s bones</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">John Napier, 1617 (Scotland)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Numbered rods with multiplication tables; read diagonals to multiply</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Breaking multiplication into simple additions</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slide rule</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">William Oughtred, about 1622 (England)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two sliding logarithmic scales multiply and divide by adding lengths</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Used by engineers until electronic calculators in the 1970s</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Reading an abacus</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> On a soroban-type abacus, the hundreds rod has 1 upper bead and 2 lower beads at the bar, the tens rod has none, and the units rod has 4 lower beads. What number is shown?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Upper bead = 5, each lower bead = 1, on each rod.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Hundreds</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5 + 2 = 7.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Tens</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Units</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 704</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Mechanical Calculators and the Jacquard Loom</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Device</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inventor and date</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key idea</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pascaline</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Blaise Pascal, 1642 (France)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gears added and subtracted automatically, carrying digits from one wheel to the next</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stepped reckoner</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gottfried Leibniz, 1673 (Germany)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Could also multiply and divide by repeated addition and subtraction</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Jacquard loom</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Joseph-Marie Jacquard, 1804 (France)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A chain of punched cards controlled the weaving pattern — an early stored program</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tabulating machine</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Herman Hollerith, 1890 (USA)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrically read punched cards to count census data; his company later became IBM</td>
    </tr>
    </table>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Changing the cards on a Jacquard loom changed the pattern without rebuilding the machine. Installing a new app on your phone without changing its hardware is the same idea: <strong>software controls general-purpose hardware</strong>.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Charles Babbage and Ada Lovelace</h3>
    <p><strong>Charles Babbage</strong> (England) designed the <strong>Difference Engine</strong> (1822) to calculate and print mathematical tables without human error, and then the <strong>Analytical Engine</strong> (1837), a general-purpose mechanical computer. It was never completed in his lifetime, but its design is remarkably modern.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Analytical Engine part</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Modern equivalent</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mill</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Central processing unit (arithmetic)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Store</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Memory</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Punched-card reader</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Input device</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Printer and card punch</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Output devices</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Conditional jumps on cards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Decisions (if statements) in programs</td>
    </tr>
    </table>
    </div>
    <p><strong>Ada Lovelace</strong> wrote notes in 1843 describing how the Analytical Engine could calculate Bernoulli numbers — often called the first published computer program. She also predicted that such machines could work with symbols and music, not only numbers.</p>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Babbage is often called the “father of the computer” because his Analytical Engine had all the main parts of a modern computer.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which device used punched cards to control weaving patterns?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Jacquard loom.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What was the “mill” in the Analytical Engine equivalent to?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The CPU (processing unit).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Who invented the Pascaline and when?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Blaise Pascal, 1642.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Researching</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating with manual devices</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing technologies</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Presenting findings</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Multiplying with Napier’s Bones</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To make a simple set of Napier’s bones and use it to multiply.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Manila paper or card</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pencil and marker</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Scissors</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Template of rods 0–9 (each rod shows the multiples of its number, with tens and units split by a diagonal)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use scissors carefully and pass them handle first.</li>
    <li>Keep the workspace tidy.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Cut ten strips and an index strip (1–9).</li>
    <li>On each strip write the multiples of its number (×1 to ×9), splitting each product into a tens digit (top left) and a units digit (bottom right) by a diagonal line.</li>
    <li>To multiply 47 × 6, place the 4 and 7 rods side by side next to the index strip.</li>
    <li>Read row 6: rod 4 gives 2/4 and rod 7 gives 4/2.</li>
    <li>Add the digits along each diagonal from the right: 2, then 4 + 4 = 8, then 2. The answer is 282.</li>
    <li>Use the bones to work out 47 × 36 = (47 × 30) + (47 × 6) and check with a calculator.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Calculation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer with Napier’s bones</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Answer with calculator</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time taken (s)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">47 × 6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">58 × 7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">47 × 36</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why did Napier’s bones make multiplication easier?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They turned multiplication into reading tables and adding diagonals, which is simpler and less error-prone.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What limitation did they have?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A person still had to read, add and record every step; they were slow for large numbers.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Napier’s bones break multiplication into simple steps, an early example of an algorithm carried out with a tool.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Each rod stores a multiplication table; arranging rods side by side and adding diagonals carries out long multiplication in place-value columns.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting to carry when a diagonal sum exceeds 9.</li>
    <li>Reading the wrong row of the index strip.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Engineers once used tables, slide rules and logarithms to design bridges and aircraft before electronic calculators.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare the times in your table. How much faster was the calculator? Every early device reduced effort or errors, but each still needed a human operator. The big leap came when machines could <strong>store and follow a program automatically</strong>.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #64b5f6;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Computer Science in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> The abacus is still used in some schools to build number sense; programmable machines such as washing machines and microwaves follow stored sequences like the Jacquard loom.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Early devices used no electricity; today, energy efficiency and safe disposal of e-waste are major concerns in computing.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Historians of technology, museum curators and engineers study early devices; their ideas inspired today’s processor and software designers.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Arrange in order of invention: Pascaline, Napier’s bones, Jacquard loom.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Check the dates in the tables.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Napier’s bones (1617), Pascaline (1642), Jacquard loom (1804).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Which two parts of the Analytical Engine match the CPU and memory?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Mill processes; store keeps.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The mill (CPU) and the store (memory).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why is Ada Lovelace important?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think “first programmer”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">She wrote what is regarded as the first published computer program (algorithm) for the Analytical Engine.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a timeline of eight early computing devices with dates and inventors.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner describes a device; the other names it and its inventor.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Research one device in depth and present a three-minute talk with a drawing or model.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find a virtual abacus or slide-rule simulator online and use it to do three calculations.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define a computer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An electronic device that accepts data, processes it according to instructions, stores it and produces information.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe how the Jacquard loom contributed to computing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It used punched cards to control a sequence of operations — an early stored program; punched cards were later used for computer input.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> List the four main parts of the Analytical Engine and their modern equivalents.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Mill (CPU), store (memory), card reader (input), printer/punch (output).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Use Napier’s bones to find 63 × 8. Show the diagonal sums.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Rod 6 row 8 gives 4/8; rod 3 row 8 gives 2/4. Diagonals from the right: 4; then 8 + 2 = 10 (write 0, carry 1); then 4 + 1 = 5. Answer: 504.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why was Babbage’s Analytical Engine not built in his time?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It needed very precise parts and a great deal of money; the engineering and funding of the time could not support it.</div>
    </details>
    </div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Early computing aids were manual (abacus, Napier’s bones, slide rule), mechanical (Pascaline, stepped reckoner, Difference and Analytical Engines) and electromechanical (Hollerith’s tabulator). The Jacquard loom introduced punched-card programs; Babbage’s Analytical Engine had a mill, store, input and output; Ada Lovelace wrote the first published algorithm for it.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Manual devices.</li>
    <li>Mechanical devices.</li>
    <li>Jacquard loom and punched cards.</li>
    <li>Babbage and Lovelace.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Napier 1617, Pascal 1642, Jacquard 1804, Babbage 1822/1837.</li>
    <li>Mill = CPU, store = memory.</li>
    <li>Lovelace = first published program.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying Babbage built an electronic computer.</li>
    <li>Confusing the Difference Engine with the Analytical Engine.</li>
    <li>Thinking the abacus is a computer (it is a computing aid).</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Learn each device with its inventor, date and contribution.</li>
    <li>Draw a timeline.</li>
    <li>Link each idea to a modern feature.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>When asked for a “contribution”, explain the idea that lives on in modern computers.</li>
    <li>Give dates where possible.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group research and presentations.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Making and using Napier’s bones.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Learning to learn</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a timeline.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Citizenship education: equity in group work</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every app you use builds on centuries of ideas about calculation and programs.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write 150 words on how punched cards moved from looms to computers.</li>
    <li>Make a paper abacus and show 2 637.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which early device impressed me most?</li>
    <li>What problem would I invent a device to solve?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Abacus</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bead-frame counting device.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pascaline</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gear-driven adding machine.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Punched card</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Card storing data as holes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Analytical Engine</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Babbage’s general-purpose design.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Algorithm</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Step-by-step procedure.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe six early devices.</p>
    <p style="margin:6px 0;">☐ I can name inventors and dates.</p>
    <p style="margin:6px 0;">☐ I can explain each device’s contribution.</p>
    <p style="margin:6px 0;">☐ I can calculate with an abacus and Napier’s bones.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which device used beads on rods to represent numbers?',
            options: ['Slide rule', 'Abacus', 'Pascaline', 'Jacquard loom'],
            correct: 1,
            explanation: 'Beads in place-value columns represent digits on an abacus.'
        },
        {
            question: 'Napier’s bones were introduced in:',
            options: ['1946', '1804', '1890', '1617'],
            correct: 3,
            explanation: 'John Napier published his rods in 1617.'
        },
        {
            question: 'The slide rule works using:',
            options: ['Vacuum tubes', 'Punched cards', 'Transistors', 'Logarithmic scales'],
            correct: 3,
            explanation: 'Adding lengths on logarithmic scales multiplies numbers.'
        },
        {
            question: 'The Pascaline was able to:',
            options: ['Browse the internet', 'Weave cloth', 'Store programs electronically', 'Add and subtract using gears'],
            correct: 3,
            explanation: 'Pascal’s gear wheels added and carried digits automatically.'
        },
        {
            question: 'Which device first used punched cards to control a machine?',
            options: ['Abacus', 'Slide rule', 'Jacquard loom', 'Napier’s bones'],
            correct: 2,
            explanation: 'Jacquard’s 1804 loom followed a chain of punched cards.'
        },
        {
            question: 'The “store” in Babbage’s Analytical Engine is equivalent to modern:',
            options: ['Printer', 'Keyboard', 'Memory', 'Monitor'],
            correct: 2,
            explanation: 'The store held numbers, like memory does today.'
        },
        {
            question: 'Who is often called the first computer programmer?',
            options: ['Ada Lovelace', 'Blaise Pascal', 'John Napier', 'Joseph-Marie Jacquard'],
            correct: 0,
            explanation: 'Her 1843 notes describe an algorithm for the Analytical Engine.'
        },
        {
            question: 'Herman Hollerith’s tabulating machine was first used for:',
            options: ['The 1890 US census', 'Weaving silk', 'Space travel', 'Mobile money'],
            correct: 0,
            explanation: 'It counted census data from punched cards much faster than by hand.'
        },
        {
            question: 'The Difference Engine was designed to:',
            options: ['Send emails', 'Calculate and print mathematical tables', 'Play music', 'Control looms'],
            correct: 1,
            explanation: 'Babbage wanted to remove human errors from printed tables.'
        },
        {
            question: 'Which is a mechanical calculating device?',
            options: ['Smartphone', 'Stepped reckoner', 'Laptop', 'Tablet'],
            correct: 1,
            explanation: 'Leibniz’s stepped reckoner used gears and a stepped drum.'
        }
    ]
},
{
    name: '1.1.2 Evolution of Computers: Key Technologies from Vacuum Tubes to VLSI',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Key Technologies: From Vacuum Tubes to VLSI</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how the electronic switch at the heart of every computer developed — from the vacuum tube to the transistor, the integrated circuit, large-scale integration (LSI) and very-large-scale integration (VLSI) — and how each change made computers smaller, faster, cheaper and more reliable.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> A computer is built from millions or billions of tiny switches. The technology used to make those switches decides how big, fast, hot, reliable and affordable the computer is.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Smartphone processors</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💡 LED bulbs and chargers</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Car electronics</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Medical equipment</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📻 Radios and TVs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛰️ Satellites</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify early computing devices and how they led to electronic computers.</li>
    <li>Describe the key technologies that defined computer development.</li>
    <li>Relate those technologies to each computer generation.</li>
    <li>Appreciate technological advancement in computer development.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain the role of a switch in a computer.</li>
    <li>Describe vacuum tubes, transistors and integrated circuits.</li>
    <li>Distinguish SSI, MSI, LSI and VLSI.</li>
    <li>Compare the technologies in size, speed, heat, reliability and cost.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Key inquiry question:</strong> What is the importance of principles and technologies in the development of computers?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> Lesson 1.1.1; Junior School: simple circuits and switches.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Inside every computer, information is stored and processed as <strong>binary digits</strong>: 0 (off) and 1 (on). To do this, a computer needs <strong>electronic switches</strong> that can turn on and off millions of times per second without moving parts.</p>
    <p>The history of computers is largely the history of better switches: the <strong>vacuum tube</strong> (glass bulb), the <strong>transistor</strong> (small solid crystal), the <strong>integrated circuit</strong> (many transistors on one chip), and <strong>LSI/VLSI</strong> (thousands, millions and now billions of transistors on one chip).</p>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Smaller switches = more switches in less space = faster, cheaper, cooler computers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Scientific Background</h3>
    <p>A vacuum tube controlled the flow of electrons through a vacuum inside a glass bulb; it needed heating, so it used a lot of power and burned out often. In 1947 scientists at Bell Laboratories (John Bardeen, Walter Brattain and William Shockley) invented the transistor, made from semiconductor material. In 1958–1959 Jack Kilby and Robert Noyce independently created the integrated circuit (IC). In 1965 Gordon Moore observed that the number of transistors on a chip was doubling regularly — later stated as about every two years (“Moore’s law”).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Vacuum tube (valve)</strong>
    </p>
    <p style="margin:6px 0;">A glass tube with no air, used as an electronic switch or amplifier.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Used in ENIAC.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Semiconductor</strong>
    </p>
    <p style="margin:6px 0;">A material whose conductivity is between a conductor and an insulator.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol / unit:</span> e.g. silicon</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Silicon in chips.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Transistor</strong>
    </p>
    <p style="margin:6px 0;">A small semiconductor device that switches or amplifies electrical signals.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Billions in a phone processor.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Integrated circuit (IC)</strong>
    </p>
    <p style="margin:6px 0;">Many electronic components built on one small piece of silicon (a chip).</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A memory chip.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">VLSI</strong>
    </p>
    <p style="margin:6px 0;">Very-large-scale integration: hundreds of thousands or more transistors on one chip.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A microprocessor.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Microprocessor</strong>
    </p>
    <p style="margin:6px 0;">A complete CPU on a single chip.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Intel 4004 (1971).</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Vacuum Tubes and Transistors</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Vacuum tube</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Transistor</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Size</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large (several cm)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very small</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Power and heat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">High power; lots of heat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Low power; little heat</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reliability</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Burned out often</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Much more reliable</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Slower switching</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Faster switching</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Warm-up</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Needed to heat up</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Works immediately</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cost</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Expensive to run and replace</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cheaper</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Saying transistors were invented for computers. They were invented at Bell Labs in 1947 for telephone and radio equipment, then adopted in computers from the mid-1950s.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Integrated Circuits and Levels of Integration</h3>
    <p>An <strong>integrated circuit</strong> combines transistors, resistors and their connections on one tiny chip of silicon. Instead of wiring thousands of separate parts by hand, engineers could print whole circuits at once.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Level</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approximate transistors per chip</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Period</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">SSI (small-scale)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Up to about 100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1960s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Simple logic gates</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">MSI (medium-scale)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">About 100–1 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Late 1960s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Counters, adders</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">LSI (large-scale)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">About 1 000–100 000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1970s</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Early microprocessors and memory chips</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">VLSI (very-large-scale)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More than 100 000 (now billions)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Late 1970s – today</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modern CPUs, phone chips</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ULSI (ultra-large-scale)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many millions to billions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Today</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Multi-core processors</td>
    </tr>
    </table>
    </div>
    <p>The first commercial microprocessor, the <strong>Intel 4004</strong> (1971), had about 2 300 transistors. Modern smartphone chips have well over ten billion.</p>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Applying Moore’s law</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A chip has 1 million transistors. If the number doubles every two years, about how many will a chip have after 10 years?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Count how many doublings fit into 10 years.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Doublings</strong>
    </p>
    <div style="margin:6px 0 0 34px;">10 ÷ 2 = 5 doublings.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Multiply</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 000 000 × 2⁵ = 1 000 000 × 32.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Answer</strong>
    </p>
    <div style="margin:6px 0 0 34px;">= 32 000 000.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> About 32 million transistors.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Why the Technology Matters</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li><strong>Size:</strong> a room-sized machine became a desktop, then a laptop, then a phone.</li>
    <li><strong>Speed:</strong> shorter distances and faster switches mean more operations per second.</li>
    <li><strong>Power and heat:</strong> less heat allows small, battery-powered devices.</li>
    <li><strong>Reliability:</strong> solid-state parts have no filaments to burn out.</li>
    <li><strong>Cost:</strong> mass-produced chips made computers affordable for homes and schools.</li>
    </ul>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Kenya’s mobile money revolution depended on cheap, low-power phones — only possible because VLSI chips are small, cheap and energy-efficient.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Name two disadvantages of vacuum tubes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Large size and high heat/power use (also unreliability, need to warm up).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What is an integrated circuit?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Many electronic components built on one small silicon chip.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What does VLSI stand for?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Very-large-scale integration.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle old circuit boards and components by their edges; some have sharp pins.</li>
    <li>Never open monitors or power supplies — they can hold dangerous charge even when unplugged.</li>
    <li>Wear an anti-static wrist strap or touch an earthed metal object before handling chips.</li>
    <li>Wash hands after handling old electronic boards.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Identifying components</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safe handling of electronics</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Identifying Electronic Components on Circuit Boards</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To identify transistors and integrated circuits on old circuit boards and compare their sizes.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Old motherboard or circuit board (from a broken radio, phone or computer)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Hand lens</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Ruler</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Anti-static wrist strap</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pictures of a vacuum tube</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Labelled component chart</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only boards provided by the teacher; never boards from power supplies or monitors.</li>
    <li>Handle boards by the edges.</li>
    <li>Do not try to remove components.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Observe the board with a hand lens.</li>
    <li>Find and count integrated circuits (black rectangular chips with many pins).</li>
    <li>Look for small three-legged transistors if present.</li>
    <li>Measure the length of the largest chip and compare with the picture of a vacuum tube.</li>
    <li>Record markings printed on one chip (manufacturer and part number).</li>
    <li>Sketch the board, labelling the components you identified.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Component</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Number found</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Approximate size (mm)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Notes</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integrated circuits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transistors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Capacitors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Connectors/ports</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why does one IC replace many vacuum tubes?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An IC contains thousands to billions of transistors, each doing the job of a tube, in a tiny space.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why do chips have so many pins?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Pins carry data, addresses, control signals and power to and from the chip.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Modern boards are built from integrated circuits containing huge numbers of transistors in a very small area.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Photolithography prints transistors on silicon at sizes of a few nanometres, so billions fit on a chip smaller than a fingernail.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing capacitors (cylinders) with transistors.</li>
    <li>Touching chips without discharging static first.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Electronics repair technicians in Kenyan towns identify and replace faulty ICs and components on phones and TVs every day.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare the size of one IC with a vacuum tube (about 5–10 cm long). Estimate how many tubes would be needed to match the transistors in a modern chip. This shows why first-generation computers filled rooms.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #64b5f6;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Computer Science in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Phones, smart TVs, calculators and digital watches all depend on VLSI chips.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Small, low-power chips save energy, but discarded electronics (e-waste) contain harmful metals and must be recycled properly.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Chip design, electronics manufacturing and repair are major careers; Kenya’s growing electronics assembly and repair sector employs many technicians.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Put in order: IC, vacuum tube, VLSI, transistor.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Follow the dates.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vacuum tube, transistor, IC, VLSI.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Give two advantages of transistors over vacuum tubes.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think size and heat.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Smaller and produce less heat (also more reliable, cheaper, faster).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> A chip doubles from 2 million transistors twice. How many now?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 2 → 4 → 8.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">8 million.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a table comparing vacuum tubes, transistors and ICs under five headings.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Explain Moore’s law to your partner using a doubling example.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Collect pictures of devices from each technology era and make a poster.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Find the transistor count of a recent smartphone processor and compare it with the Intel 4004.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain why computers need electronic switches.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Data is represented in binary (on/off); switches represent and process these states.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe three advantages of integrated circuits.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Very small; cheaper to mass-produce; more reliable and faster (low power).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Distinguish LSI and VLSI.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">LSI has about 1 000–100 000 transistors per chip; VLSI has more than 100 000.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why must you discharge static before handling chips?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Static electricity can damage the tiny transistors inside chips.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Moore’s law is slowing down. Suggest one reason.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Transistors are approaching atomic sizes, making further shrinking very difficult and expensive.</div>
    </details>
    </div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Computers depend on electronic switches. Vacuum tubes were large, hot and unreliable; transistors (1947) were small, cool and reliable; integrated circuits (1958–59) put many components on one chip; LSI and VLSI put thousands to billions of transistors on one chip, making microprocessors and modern devices possible.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Role of switches.</li>
    <li>Vacuum tubes vs transistors.</li>
    <li>Integrated circuits.</li>
    <li>SSI to VLSI and Moore’s law.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Transistor: 1947, Bell Labs.</li>
    <li>IC: Kilby and Noyce, 1958–59.</li>
    <li>Intel 4004: 1971, first microprocessor.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mixing up transistor and IC.</li>
    <li>Thinking VLSI means a bigger chip.</li>
    <li>Forgetting that ICs still contain transistors.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Compare technologies in a table.</li>
    <li>Link each technology to a generation (next lesson).</li>
    <li>Learn one key date per technology.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Give comparisons in pairs (size, heat, reliability, cost).</li>
    <li>Use correct terms: “integrated circuit”, not “small circuit”.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing technologies.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching chip specifications.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining Moore’s law.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environmental care: e-waste disposal</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> The phone in your pocket holds more switches than all the computers of the 1950s combined.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write 120 words on how the transistor changed computing.</li>
    <li>Find out how e-waste is collected and recycled in Kenya.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How would life differ if transistors had never been invented?</li>
    <li>What should I do with an old phone?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Vacuum tube</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Glass-bulb electronic switch.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Transistor</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Semiconductor switch.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">IC</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Circuit on one chip.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">VLSI</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very many transistors per chip.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Microprocessor</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">CPU on one chip.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain the role of switches.</p>
    <p style="margin:6px 0;">☐ I can compare tubes and transistors.</p>
    <p style="margin:6px 0;">☐ I can describe ICs and VLSI.</p>
    <p style="margin:6px 0;">☐ I can apply Moore’s law.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Computers need electronic switches because data is represented as:',
            options: ['Binary digits (on/off)', 'Colours', 'Sounds', 'Letters only'],
            correct: 0,
            explanation: 'Each switch represents a 0 or 1.'
        },
        {
            question: 'The transistor was invented in:',
            options: ['1971', '1822', '1904', '1947'],
            correct: 3,
            explanation: 'Bardeen, Brattain and Shockley built it at Bell Labs in 1947.'
        },
        {
            question: 'A major disadvantage of vacuum tubes was that they:',
            options: ['Were too small', 'Used no power', 'Produced a lot of heat and burned out often', 'Were invisible'],
            correct: 2,
            explanation: 'Heated filaments wasted energy and failed frequently.'
        },
        {
            question: 'An integrated circuit is:',
            options: ['Many components on one silicon chip', 'A single vacuum tube', 'A punched card', 'A keyboard'],
            correct: 0,
            explanation: 'ICs combine transistors and connections on a chip.'
        },
        {
            question: 'VLSI stands for:',
            options: ['Very-low-speed interface', 'Variable logic system input', 'Virtual large storage index', 'Very-large-scale integration'],
            correct: 3,
            explanation: 'VLSI chips hold more than about 100 000 transistors.'
        },
        {
            question: 'The first commercial microprocessor was the:',
            options: ['ENIAC', 'UNIVAC', 'Pascaline', 'Intel 4004'],
            correct: 3,
            explanation: 'Released in 1971 with about 2 300 transistors.'
        },
        {
            question: 'Moore’s law states that transistor counts roughly:',
            options: ['Halve every year', 'Double about every two years', 'Stay constant', 'Triple every month'],
            correct: 1,
            explanation: 'Moore observed regular doubling of transistors per chip.'
        },
        {
            question: 'Semiconductors such as silicon are used to make:',
            options: ['Vacuum tubes only', 'Transistors and chips', 'Punched cards', 'Abacus beads'],
            correct: 1,
            explanation: 'Silicon’s controllable conductivity suits transistors.'
        },
        {
            question: 'Compared with tubes, transistors are:',
            options: ['Larger and hotter', 'Smaller, cooler and more reliable', 'Slower and costlier', 'Made of glass'],
            correct: 1,
            explanation: 'Solid-state transistors have no heated filament.'
        },
        {
            question: 'Before handling chips you should:',
            options: ['Discharge static electricity', 'Wet your hands', 'Plug in the board', 'Bend the pins'],
            correct: 0,
            explanation: 'Static can destroy tiny transistors.'
        }
    ]
},
{
    name: '1.1.3 Evolution of Computers: The Five Generations of Computers',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: The Five Generations of Computers</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will relate each key technology to its computer generation, describe the features, examples, languages and storage of each generation, and look at current and future trends such as artificial intelligence and quantum computing.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Grouping computers into generations shows how one breakthrough led to the next. It helps you understand why today’s devices are so capable and where computing is heading.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🤖 Artificial intelligence and chatbots</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💳 Mobile money and banking systems</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Scientific research</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Gaming</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏥 Hospital systems</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌦️ Weather forecasting</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify early computing devices and how they led to electronic computers.</li>
    <li>Describe the key technologies that defined computer development.</li>
    <li>Relate those technologies to each computer generation.</li>
    <li>Appreciate technological advancement in computer development.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>State the principal technology of each generation.</li>
    <li>Describe features and examples of each generation.</li>
    <li>Compare generations in size, speed, cost and languages.</li>
    <li>Discuss trends in fifth-generation computing.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Key inquiry question:</strong> How have computers evolved over generations?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> Lessons 1.1.1 and 1.1.2.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>A <strong>computer generation</strong> is a stage in computer development marked by a major change in the main electronic technology used. Each new generation produced computers that were smaller, faster, cheaper, more reliable and easier to use.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 580 170" width="580" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><line x1="20" y1="85" x2="560" y2="85" stroke="#fde68a" stroke-width="3"/><polygon points="560,79 574,85 560,91" fill="#fde68a"/><rect x="30" y="12" width="100" height="62" rx="8" fill="#0d47a1" opacity="0.5" stroke="#64b5f6"/><text x="80" y="30" fill="#e3f2fd" font-size="12" text-anchor="middle">1st generation</text><text x="80" y="48" fill="#e3f2fd" font-size="11" text-anchor="middle">1940s–1956</text><text x="80" y="65" fill="#e3f2fd" font-size="10" text-anchor="middle">Vacuum tubes</text><circle cx="80" cy="85" r="6" fill="#fde68a"/><rect x="138" y="98" width="100" height="62" rx="8" fill="#0d47a1" opacity="0.6" stroke="#64b5f6"/><text x="188" y="116" fill="#e3f2fd" font-size="12" text-anchor="middle">2nd generation</text><text x="188" y="134" fill="#e3f2fd" font-size="11" text-anchor="middle">1956–1963</text><text x="188" y="151" fill="#e3f2fd" font-size="10" text-anchor="middle">Transistors</text><circle cx="188" cy="85" r="6" fill="#fde68a"/><rect x="246" y="12" width="100" height="62" rx="8" fill="#0d47a1" opacity="0.7" stroke="#64b5f6"/><text x="296" y="30" fill="#e3f2fd" font-size="12" text-anchor="middle">3rd generation</text><text x="296" y="48" fill="#e3f2fd" font-size="11" text-anchor="middle">1964–1971</text><text x="296" y="65" fill="#e3f2fd" font-size="10" text-anchor="middle">Integrated circuits</text><circle cx="296" cy="85" r="6" fill="#fde68a"/><rect x="354" y="98" width="100" height="62" rx="8" fill="#0d47a1" opacity="0.8" stroke="#64b5f6"/><text x="404" y="116" fill="#e3f2fd" font-size="12" text-anchor="middle">4th generation</text><text x="404" y="134" fill="#e3f2fd" font-size="11" text-anchor="middle">1971–now</text><text x="404" y="151" fill="#e3f2fd" font-size="10" text-anchor="middle">Microprocessors (VLSI)</text><circle cx="404" cy="85" r="6" fill="#fde68a"/><rect x="462" y="12" width="100" height="62" rx="8" fill="#0d47a1" opacity="0.9" stroke="#64b5f6"/><text x="512" y="30" fill="#e3f2fd" font-size="12" text-anchor="middle">5th generation</text><text x="512" y="48" fill="#e3f2fd" font-size="11" text-anchor="middle">Now & future</text><text x="512" y="65" fill="#e3f2fd" font-size="10" text-anchor="middle">AI, ULSI, parallel</text><circle cx="512" cy="85" r="6" fill="#fde68a"/>
    </svg>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Tubes → transistors → ICs → microprocessors → AI. Each step made computers smaller, faster and cheaper.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Scientific Background</h3>
    <p>Dates for generations are approximate and different books give slightly different years, because new technology overlapped with old. What matters is the <strong>principal technology</strong> and the improvements it brought. Programming languages also evolved: from machine language (0s and 1s) to assembly language, then high-level languages, and today natural-language interfaces.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Generation</strong>
    </p>
    <p style="margin:6px 0;">A stage of computer development defined by its main technology.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Third generation = ICs.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Machine language</strong>
    </p>
    <p style="margin:6px 0;">Instructions written in binary that the CPU understands directly.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>10110000 01100001.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Assembly language</strong>
    </p>
    <p style="margin:6px 0;">Low-level language using short codes (mnemonics) for instructions.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>ADD, MOV, LOAD.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">High-level language</strong>
    </p>
    <p style="margin:6px 0;">A programming language close to human language.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Python, COBOL, FORTRAN.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Artificial intelligence (AI)</strong>
    </p>
    <p style="margin:6px 0;">Computer systems that perform tasks needing human-like intelligence.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Speech recognition.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Parallel processing</strong>
    </p>
    <p style="margin:6px 0;">Using many processors at the same time on one task.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Supercomputers.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. First and Second Generations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">First (1940s–1956)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Second (1956–1963)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Principal technology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vacuum tubes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transistors</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Memory/storage</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnetic drums; punched cards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Magnetic core memory; magnetic tape and disk</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Languages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Machine language</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Assembly; early high-level (FORTRAN, COBOL)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Size and heat</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Room-sized; very hot; needed air conditioning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Smaller; less heat</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reliability</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Frequent breakdowns</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More reliable</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ENIAC, EDVAC, UNIVAC I</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">IBM 1401, IBM 7090</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>ENIAC (1946) could do about 5 000 additions per second — impressive then, but billions of times slower than a modern phone.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Third and Fourth Generations</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Third (1964–1971)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Fourth (1971–present)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Principal technology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integrated circuits</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microprocessors (LSI and VLSI)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Input/output</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Keyboards and monitors replace punched cards</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mouse, touchscreens, GUIs, printers, cameras</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Software</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Operating systems; multiprogramming; BASIC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">User-friendly OS (Windows, macOS, Linux, Android); networks and the internet</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Size and cost</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Minicomputers; cheaper</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Personal computers, laptops, smartphones; affordable</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">IBM System/360, PDP-8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Apple II, IBM PC, laptops, smartphones</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. The Fifth Generation and Future Trends</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Trend</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it means</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Artificial intelligence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Machines that learn, reason and understand language</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chatbots, voice assistants, crop-disease apps</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ULSI and multi-core chips</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Billions of transistors; many cores per chip</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Modern phone and laptop processors</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Parallel processing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many processors work together</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Supercomputers for weather forecasting</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Quantum computing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uses qubits that can represent 0 and 1 at once</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Research machines</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Natural language and robotics</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Talking to computers in everyday language; smart machines</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Voice search; factory robots</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Matching technology to generation</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A computer used magnetic core memory, was programmed in COBOL and had transistors. Which generation is it? Give two reasons.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Look for the principal technology first.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Technology</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Transistors point to the second generation.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Supporting clues</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Magnetic core memory and COBOL (1959) are second-generation features.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Second generation — it used transistors, magnetic core memory and an early high-level language.</div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Kenyan innovators use fifth-generation tools: AI apps help farmers identify crop diseases from photos, and Konza Technopolis is planned as a hub for technology businesses.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which generation introduced integrated circuits?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The third generation.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Give two features of first-generation computers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vacuum tubes; machine language (also very large, hot, unreliable, punched cards).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name two fifth-generation trends.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Artificial intelligence; quantum computing (also parallel processing, ULSI).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Researching</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Classifying</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Presenting</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Building a Generations Matching Chart</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To match computers, technologies and features to the correct generation.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with internet access (supervised)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Manila paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Markers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Printed or drawn picture cards</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Card set: ENIAC, IBM 1401, IBM System/360, IBM PC, smartphone, voice assistant; vacuum tube, transistor, IC, microprocessor, AI; machine language, assembly, COBOL, BASIC, Python</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only websites approved by the teacher.</li>
    <li>Sit correctly and take breaks from the screen.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw five columns labelled First to Fifth generation on manila paper.</li>
    <li>Sort each card into the correct column.</li>
    <li>Use the internet to check one fact about each computer example (year, size or speed).</li>
    <li>Add one advantage and one disadvantage for each generation.</li>
    <li>Present your chart and justify two placements to the class.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Generation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Technology</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Language/software</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Advantage</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Disadvantage</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">First</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Second</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Third</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fourth</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fifth</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which card was hardest to place, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Answers vary — e.g. BASIC (1964) sits at the start of the third generation; dates overlap between generations.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What trend do you notice across the generations?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Computers became smaller, faster, cheaper, more reliable and easier to use.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Each generation is defined by its principal technology, which changed size, speed, cost and ease of use.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> New switching technology allowed more components in less space, which in turn allowed new storage, input/output and software.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Placing by date alone without checking the technology.</li>
    <li>Confusing the microprocessor (4th) with the IC (3rd).</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Museums and technology exhibitions organise displays by generation so visitors can see progress clearly.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Using your chart, rank the generations by size, cost and speed. Describe the pattern. Then suggest which improvement mattered most for ordinary Kenyans and explain your choice (for example, low cost and low power made mobile phones and mobile money possible).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #64b5f6;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Computer Science in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Smartphones, laptops and smart TVs are fourth-generation devices using fifth-generation features such as AI assistants.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Each generation used less energy per calculation, but the huge number of devices today makes e-waste and energy use important issues.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> AI engineers, data scientists, software developers and computer technicians are growing careers in Kenya and worldwide.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which generation used magnetic drums for memory?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think vacuum-tube era.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">First generation.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Name one example of a third-generation computer.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 1964 onwards.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">IBM System/360 (or PDP-8).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why are fourth-generation computers affordable?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: One chip, many transistors.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Mass-produced microprocessors (VLSI) are cheap.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write a short paragraph describing a day in the life of a first-generation computer operator.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Quiz each other: one names a feature, the other names the generation.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a role-play where each member is a “generation” explaining what it improved.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Research one AI application used in Kenya (e.g. in farming or health) and summarise how it works.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the principal technology of each of the first four generations.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Vacuum tubes; transistors; integrated circuits; microprocessors (VLSI).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Give three differences between first- and fourth-generation computers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Size (room vs desktop/phone); heat (high vs low); language (machine vs high-level/GUI).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain two features of fifth-generation computers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">AI — learning and reasoning; parallel processing — many processors working together.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should you check facts from more than one website?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Sources may differ or contain errors; cross-checking improves accuracy.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why do different books give different dates for generations?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Technologies overlapped; new machines were introduced gradually, so boundaries are approximate.</div>
    </details>
    </div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Computers are grouped into five generations by their principal technology: vacuum tubes (1st), transistors (2nd), integrated circuits (3rd), microprocessors/VLSI (4th) and AI with ULSI and parallel processing (5th). Each generation became smaller, faster, cheaper, more reliable and easier to use, with languages moving from machine code to high-level and natural language.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Technology of each generation.</li>
    <li>Features and examples.</li>
    <li>Languages and storage.</li>
    <li>Fifth-generation trends.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1 tubes, 2 transistors, 3 ICs, 4 microprocessors, 5 AI.</li>
    <li>ENIAC = 1st; IBM PC = 4th.</li>
    <li>Dates are approximate.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying the IC defines the fourth generation.</li>
    <li>Calling a smartphone fifth-generation hardware.</li>
    <li>Learning dates without technologies.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the timeline diagram.</li>
    <li>Make a five-column comparison table.</li>
    <li>Relate generations to devices you know.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Always name the principal technology first.</li>
    <li>Give examples of computers for each generation.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presenting the matching chart.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Self-efficacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Matching generations to technologies correctly.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Researching facts online.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Citizenship education: equity and non-discrimination</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From ENIAC to AI, every generation changed how people live and work.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw a fully labelled timeline of the five generations.</li>
    <li>Write 150 words predicting what computers will be like in 2040.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which generation’s change was most important?</li>
    <li>How might AI change my future career?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Generation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stage defined by technology.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Machine language</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Binary instructions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Assembly language</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mnemonic codes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">AI</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Human-like intelligence in machines.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Quantum computing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Computing with qubits.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can name the technology of each generation.</p>
    <p style="margin:6px 0;">☐ I can describe features and examples.</p>
    <p style="margin:6px 0;">☐ I can compare generations.</p>
    <p style="margin:6px 0;">☐ I can discuss future trends.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'First-generation computers used:',
            options: ['Transistors', 'Vacuum tubes', 'Integrated circuits', 'Microprocessors'],
            correct: 1,
            explanation: 'Vacuum tubes were the switching technology of the 1940s and early 1950s.'
        },
        {
            question: 'The second generation is defined by:',
            options: ['Vacuum tubes', 'Transistors', 'Artificial intelligence', 'Microprocessors'],
            correct: 1,
            explanation: 'Transistors replaced tubes from the mid-1950s.'
        },
        {
            question: 'Integrated circuits define the:',
            options: ['First generation', 'Second generation', 'Third generation', 'Fifth generation'],
            correct: 2,
            explanation: 'ICs were used from about 1964.'
        },
        {
            question: 'Which is a fourth-generation computer?',
            options: ['ENIAC', 'UNIVAC I', 'IBM PC', 'IBM 1401'],
            correct: 2,
            explanation: 'The IBM PC (1981) used a microprocessor.'
        },
        {
            question: 'Machine language was the main language of the:',
            options: ['Fourth generation', 'Fifth generation', 'Third generation', 'First generation'],
            correct: 3,
            explanation: 'Early computers were programmed directly in binary.'
        },
        {
            question: 'FORTRAN and COBOL first appeared in the:',
            options: ['First generation', 'Fourth generation', 'Fifth generation', 'Second generation'],
            correct: 3,
            explanation: 'They were created in the late 1950s.'
        },
        {
            question: 'Keyboards and monitors replaced punched cards in the:',
            options: ['Third generation', 'First generation', 'Second generation', 'Fifth generation'],
            correct: 0,
            explanation: 'Interactive terminals spread with IC-based computers.'
        },
        {
            question: 'Artificial intelligence is a feature of the:',
            options: ['Second generation', 'Third generation', 'Fifth generation', 'First generation'],
            correct: 2,
            explanation: 'AI is the defining aim of fifth-generation computing.'
        },
        {
            question: 'Compared with earlier generations, fourth-generation computers are:',
            options: ['Smaller, cheaper and faster', 'Larger and hotter', 'Slower and costlier', 'Mechanical'],
            correct: 0,
            explanation: 'Microprocessors made computers compact and affordable.'
        },
        {
            question: 'Quantum computers use:',
            options: ['Qubits', 'Punched cards', 'Vacuum tubes', 'Beads'],
            correct: 0,
            explanation: 'Qubits can represent 0 and 1 at the same time.'
        }
    ]
},
{
    name: '1.1 Laboratory Activity: Calculating Then and Now',
    type: 'lesson',
    duration: '60 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 60 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧪 Calculating Then and Now</h2>
    <p style="font-size:16px;">How much faster are modern computers than the tools people used before them? In this activity you will carry out the same set of calculations by hand, with an abacus or Napier’s bones, with a calculator and with a spreadsheet, time each method and analyse the results.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Electrical safety</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Do not touch sockets or cables with wet hands; report damaged cables.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Workstation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sit upright, screen at eye level, feet flat on the floor.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Food and drink</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">None in the computer laboratory.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Equipment</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Handle keyboards and mice gently; do not unplug devices without permission.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group work</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Share devices fairly and take turns.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Timing Four Methods of Calculation</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To compare the speed and accuracy of manual, mechanical-style and electronic methods of calculation.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Stopwatch or phone timer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Abacus or home-made Napier’s bones</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with spreadsheet software</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet of 10 multiplications (e.g. 47 × 36, 58 × 23, 125 × 14, …)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Save your spreadsheet regularly.</li>
    <li>Log out of the computer when done.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>In pairs, one learner calculates while the other times.</li>
    <li>Method A: do all 10 calculations by hand (long multiplication). Record the time.</li>
    <li>Method B: use Napier’s bones or an abacus. Record the time.</li>
    <li>Method C: use a calculator. Record the time.</li>
    <li>Method D: type the numbers into a spreadsheet, enter a formula such as =A1*B1 in C1, and fill it down for all 10 rows. Record the time.</li>
    <li>Check all answers against the spreadsheet and count errors for each method.</li>
    <li>Finally, extend the spreadsheet to 1 000 rows using fill-down and note how long the computer takes.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Method</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time for 10 (s)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Errors</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Time per calculation (s)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A: By hand</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B: Napier’s bones/abacus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C: Calculator</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">D: Spreadsheet</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which method was fastest for 1 000 calculations, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The spreadsheet: once the formula is entered, the computer repeats it automatically at electronic speed.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which method had most errors?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Usually the manual method — humans make copying and carrying errors.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Electronic computers are far faster and more accurate than manual methods, especially for repeated calculations, because they follow stored instructions automatically.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> A spreadsheet stores the formula (program) and applies it to every row; the processor performs millions of operations per second.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Starting or stopping the timer late.</li>
    <li>Entering numbers wrongly in the spreadsheet (input error).</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Banks, KRA and mobile-money systems process millions of calculations a day — impossible without electronic computers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Calculate the time per calculation for each method (total time ÷ 10). Then work out how many times faster the spreadsheet was than the manual method (manual time ÷ spreadsheet time). Present your results as a bar chart.</p>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Comparing speeds</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> By hand, 10 calculations took 300 s. With a spreadsheet they took 30 s, including typing. How many times faster was the spreadsheet? What was the time per calculation by hand?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Divide the times.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Times faster</strong>
    </p>
    <div style="margin:6px 0 0 34px;">300 ÷ 30 = 10.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Per calculation by hand</strong>
    </p>
    <div style="margin:6px 0 0 34px;">300 ÷ 10 = 30 s.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The spreadsheet was 10 times faster; by hand took 30 s per calculation.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Give two reasons why electronic computers are faster than manual methods.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They use electronic switches that work millions of times per second; they follow stored instructions automatically without human steps.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is the advantage of entering a formula once and filling it down?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The same instruction is repeated automatically for every row, saving time and reducing errors.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> A method took 240 s for 10 calculations. Find the time per calculation.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">24 s.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Suggest one way to make the timing fairer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Use the same calculations and the same timer person for every method; repeat and take an average.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why can a spreadsheet still give wrong answers?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">If the data or formula is entered wrongly — “garbage in, garbage out”.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'Which method is fastest for 1 000 repeated calculations?',
            options: ['Long multiplication', 'Abacus', 'Napier’s bones', 'Spreadsheet formula'],
            correct: 3,
            explanation: 'The computer repeats the stored formula automatically.'
        },
        {
            question: '“Garbage in, garbage out” means:',
            options: ['Computers make random errors', 'Wrong input gives wrong output', 'Bins need emptying', 'Output is always correct'],
            correct: 1,
            explanation: 'Computers process exactly what they are given.'
        },
        {
            question: '10 calculations took 200 s. Time per calculation:',
            options: ['20 s', '2 s', '200 s', '2 000 s'],
            correct: 0,
            explanation: 'The answer is 20 s. 200 ÷ 10 = 20 seconds each.'
        },
        {
            question: 'In a spreadsheet, =A1*B1 is a:',
            options: ['Picture', 'Font', 'Chart title', 'Formula'],
            correct: 3,
            explanation: 'Formulas begin with = and calculate values.'
        },
        {
            question: 'In the computer laboratory you should not:',
            options: ['Eat or drink near computers', 'Sit upright', 'Save your work', 'Log out when done'],
            correct: 0,
            explanation: 'Spills can damage equipment and cause electrical hazards.'
        }
    ]
},
{
    name: '1.1 Quiz: Evolution of Computers',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz — Evolution of Computers</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.1.1–1.1.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Early computing devices, inventors and contributions</li>
    <li>Babbage’s engines and Ada Lovelace</li>
    <li>Vacuum tubes, transistors, ICs, LSI and VLSI; Moore’s law</li>
    <li>The five generations: technology, features and examples</li>
    <li>Comparing manual and electronic calculation</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #1e88e5;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bbdefb;font-weight:bold;">📝 Exam Tip</p>
    <div>For generation questions, find the principal technology first. For device questions, link each device to the idea it contributed.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which device is a manual computing aid?',
            options: ['Abacus', 'Laptop', 'ENIAC', 'IBM PC'],
            correct: 0,
            explanation: 'The abacus is operated entirely by hand.'
        },
        {
            question: 'Who invented logarithms and the calculating rods called “bones”?',
            options: ['Blaise Pascal', 'Charles Babbage', 'John Napier', 'Alan Turing'],
            correct: 2,
            explanation: 'Napier published both in the early 1600s.'
        },
        {
            question: 'The Pascaline was invented in:',
            options: ['1804', '1642', '1947', '1971'],
            correct: 1,
            explanation: 'Blaise Pascal built it in 1642.'
        },
        {
            question: 'Punched-card control first appeared in:',
            options: ['The slide rule', 'The abacus', 'The Jacquard loom', 'The transistor'],
            correct: 2,
            explanation: 'Jacquard’s 1804 loom used chains of punched cards.'
        },
        {
            question: 'The “mill” of the Analytical Engine corresponds to the:',
            options: ['Monitor', 'Mouse', 'CPU', 'Hard disk'],
            correct: 2,
            explanation: 'The mill did the arithmetic, like a processor.'
        },
        {
            question: 'Ada Lovelace is known for:',
            options: ['Inventing the transistor', 'Building ENIAC', 'Inventing the slide rule', 'Writing the first published computer program'],
            correct: 3,
            explanation: 'Her 1843 notes describe an algorithm for Babbage’s engine.'
        },
        {
            question: 'Transistors replaced vacuum tubes because they were:',
            options: ['Smaller and more reliable', 'Larger', 'Hotter', 'Made of glass'],
            correct: 0,
            explanation: 'Solid-state transistors have no filament to burn out.'
        },
        {
            question: 'Integrated circuits were invented by:',
            options: ['Pascal and Leibniz', 'Jack Kilby and Robert Noyce', 'Babbage and Lovelace', 'Napier and Oughtred'],
            correct: 1,
            explanation: 'They developed ICs independently in 1958–59.'
        },
        {
            question: 'A chip with millions of transistors is an example of:',
            options: ['SSI', 'VLSI', 'A vacuum tube', 'A punched card'],
            correct: 1,
            explanation: 'Very-large-scale integration covers more than 100 000 transistors.'
        },
        {
            question: 'ENIAC belongs to the:',
            options: ['Second generation', 'Third generation', 'Fourth generation', 'First generation'],
            correct: 3,
            explanation: 'It used about 18 000 vacuum tubes.'
        },
        {
            question: 'Magnetic core memory was a feature of the:',
            options: ['First generation', 'Fourth generation', 'Fifth generation', 'Second generation'],
            correct: 3,
            explanation: 'Core memory came with transistorised computers.'
        },
        {
            question: 'The IBM System/360 used:',
            options: ['Integrated circuits', 'Vacuum tubes', 'Beads', 'Gears'],
            correct: 0,
            explanation: 'It is a well-known third-generation computer.'
        },
        {
            question: 'The microprocessor defines the:',
            options: ['Third generation', 'Second generation', 'First generation', 'Fourth generation'],
            correct: 3,
            explanation: 'A CPU on one chip arrived in 1971.'
        },
        {
            question: 'Which is a fifth-generation goal?',
            options: ['Vacuum tubes', 'Artificial intelligence', 'Magnetic drums', 'Punched cards'],
            correct: 1,
            explanation: 'Fifth-generation computing aims at intelligent machines.'
        },
        {
            question: 'Spreadsheets calculate quickly because they:',
            options: ['Guess answers', 'Use beads', 'Repeat stored formulas automatically', 'Need no input'],
            correct: 2,
            explanation: 'Stored instructions run at electronic speed.'
        }
    ]
},
{
    name: '1.1 Assignment: A Museum of Computing History',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 A Museum of Computing History</h2>
    <p style="font-size:16px;">In groups, you will create a classroom “museum” exhibit that tells the story of computers from early devices to the fifth generation, using models, posters and short guided tours.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Your school is holding a Science and Technology Day. The Computer Science club has been asked to set up a mini-museum so that visitors, including parents and younger learners, can understand how computers evolved.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Divide the history into six stations: early devices, first, second, third, fourth and fifth generations.</li>
    <li>For each station, prepare a poster with the principal technology, dates, two examples and one advantage and disadvantage.</li>
    <li>Build at least one model from local materials (e.g. an abacus, Napier’s bones, a cardboard ENIAC or a phone cut-away).</li>
    <li>Prepare a one-minute guided-tour script for each station.</li>
    <li>Include one display on e-waste and how old devices should be disposed of.</li>
    <li>Run the museum for your class and collect visitors’ feedback.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Six station posters</li>
    <li>At least one model</li>
    <li>Guided-tour scripts</li>
    <li>Feedback summary</li>
    <li>Individual reflections (100 words each)</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accuracy</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All technologies, dates and examples correct for all generations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Four generations correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three generations correct</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two or fewer correct</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Models and posters</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Creative, accurate and clearly labelled</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate and clear</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors or unclear labels</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Incomplete</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Guided tour</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Confident, clear and engaging; answers questions well</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some hesitation or errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unprepared</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All members contribute equally</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uneven participation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One or two do all the work</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Share tasks fairly so every member presents.<br>Use reliable sources and list them.<br>Use recycled materials for models.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What did I learn about how technology improves over time?</li>
    <li>Which station did visitors find most interesting, and why?</li>
    <li>How did we share resources fairly?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many stations should the museum have?',
            options: ['Two', 'Six', 'Ten', 'One'],
            correct: 1,
            explanation: 'Early devices plus five generations make six stations.'
        },
        {
            question: 'Each poster must include the:',
            options: ['Price of a laptop', 'School timetable', 'Football results', 'Principal technology'],
            correct: 3,
            explanation: 'The technology defines each generation.'
        },
        {
            question: 'Models should be made from:',
            options: ['Expensive new parts', 'Live electrical cables', 'Local or recycled materials', 'Broken glass'],
            correct: 2,
            explanation: 'Local materials are safe and affordable.'
        },
        {
            question: 'The e-waste display teaches visitors to:',
            options: ['Dispose of old devices safely', 'Burn old phones', 'Throw devices in rivers', 'Hide old devices'],
            correct: 0,
            explanation: 'E-waste contains harmful substances.'
        },
        {
            question: 'Fair sharing of tasks shows the value of:',
            options: ['Greed', 'Laziness', 'Rivalry', 'Unity'],
            correct: 3,
            explanation: 'Working together fairly builds unity.'
        }
    ]
},
{
    name: '1.1 Revision: Evolution of Computers',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Revision — Evolution of Computers</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.1 before starting 1.2 Computer Architecture.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🧮 Manual devices</p>
    <div>Abacus (place value), Napier’s bones (1617), slide rule (about 1622).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">⚙️ Mechanical devices</p>
    <div>Pascaline (1642), stepped reckoner (1673), Difference Engine (1822), Analytical Engine (1837).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🧵 Punched cards</p>
    <div>Jacquard loom (1804) → Hollerith tabulator (1890) → early computer input.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">👩🏾‍💻 Lovelace</p>
    <div>First published algorithm for the Analytical Engine (1843).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🔌 Technologies</p>
    <div>Vacuum tube → transistor (1947) → IC (1958–59) → LSI → VLSI; Moore’s law.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🖥️ Generations</p>
    <div>1 tubes; 2 transistors; 3 ICs; 4 microprocessors; 5 AI, ULSI, parallel processing.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Generation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Technology and example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">First</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Vacuum tubes — ENIAC, UNIVAC I</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Second</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Transistors — IBM 1401</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Third</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Integrated circuits — IBM System/360</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fourth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microprocessors — IBM PC, smartphones</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fifth</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">AI, ULSI, parallel and quantum computing</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the contribution of the Jacquard loom.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It used punched cards to control a sequence of operations — an early stored program.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Compare vacuum tubes and transistors under three headings.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Size: large vs small; heat: high vs low; reliability: low vs high.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Which generation introduced the operating system and keyboards with monitors?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The third generation.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> A chip has 4 million transistors. Using Moore’s law, estimate the count after 6 years.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3 doublings: 4 → 8 → 16 → 32 million.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Give two fifth-generation trends with examples.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">AI (chatbots); parallel processing (supercomputers).</div>
    </details>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can describe early devices and their contributions.</p>
    <p style="margin:6px 0;">☐ I can explain Babbage’s and Lovelace’s work.</p>
    <p style="margin:6px 0;">☐ I can compare switching technologies.</p>
    <p style="margin:6px 0;">☐ I can relate technologies to generations.</p>
    <p style="margin:6px 0;">☐ I can discuss future trends.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which device is mechanical?',
            options: ['Abacus', 'Smartphone', 'Pascaline', 'Laptop'],
            correct: 2,
            explanation: 'The Pascaline worked with gears.'
        },
        {
            question: 'The slide rule is based on:',
            options: ['Transistors', 'Punched cards', 'Qubits', 'Logarithms'],
            correct: 3,
            explanation: 'Logarithmic scales turn multiplication into adding lengths.'
        },
        {
            question: 'Hollerith’s company later became:',
            options: ['Apple', 'IBM', 'Safaricom', 'Intel'],
            correct: 1,
            explanation: 'The Tabulating Machine Company became part of IBM.'
        },
        {
            question: 'Which technology came first?',
            options: ['Vacuum tube', 'Transistor', 'Integrated circuit', 'VLSI'],
            correct: 0,
            explanation: 'Vacuum tubes were used in the 1940s.'
        },
        {
            question: 'Intel 4004 had about:',
            options: ['2 300 transistors', '2 billion transistors', '18 000 vacuum tubes', '10 transistors'],
            correct: 0,
            explanation: 'It was the first commercial microprocessor (1971).'
        },
        {
            question: 'Assembly language became common in the:',
            options: ['First generation', 'Second generation', 'Fifth generation', 'Fourth generation'],
            correct: 1,
            explanation: 'Mnemonics replaced raw binary in the transistor era.'
        },
        {
            question: 'Smartphones contain:',
            options: ['Vacuum tubes', 'Magnetic drums', 'Gears', 'VLSI microprocessors'],
            correct: 3,
            explanation: 'Modern phones use billions of transistors on chips.'
        },
        {
            question: 'Parallel processing means:',
            options: ['Processing on paper', 'Using one bead', 'Many processors working at the same time', 'Printing twice'],
            correct: 2,
            explanation: 'It speeds up big tasks such as weather forecasting.'
        }
    ]
},
{
    name: '1.1 Summary: Evolution of Computers',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.1 Evolution of Computers</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary — Evolution of Computers</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Computers evolved from hand-operated aids to electronic machines; each new switching technology — vacuum tubes, transistors, integrated circuits, microprocessors — defined a generation and made computers smaller, faster, cheaper and more reliable.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Early aids include the abacus, Napier’s bones, the slide rule, the Pascaline and the stepped reckoner.</li>
    <li>The Jacquard loom introduced punched-card programs.</li>
    <li>Babbage’s Analytical Engine had a mill, store, input and output; Ada Lovelace wrote the first published algorithm.</li>
    <li>Vacuum tubes gave way to transistors (1947), integrated circuits (1958–59) and LSI/VLSI chips.</li>
    <li>Moore’s law: transistor counts doubled about every two years.</li>
    <li>Generations: 1 tubes, 2 transistors, 3 ICs, 4 microprocessors, 5 AI and parallel processing.</li>
    <li>Electronic computers follow stored instructions automatically, making them far faster and more accurate than manual methods.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Early computing devices</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Manual and mechanical devices; Babbage and Lovelace</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Link each device to its idea</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Key technologies</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tubes, transistors, ICs, LSI, VLSI, Moore’s law</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compare in a table</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 Five generations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Technology, features, examples, trends</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Name the technology first</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Timing manual and electronic calculation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Calculate time per task</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">computer</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">abacus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Napier’s bones</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pascaline</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Jacquard loom</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Analytical Engine</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">algorithm</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">vacuum tube</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">transistor</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">integrated circuit</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">VLSI</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">microprocessor</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">generation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">machine language</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">artificial intelligence</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>The device in your hand is the result of centuries of invention, from beads on rods to billions of transistors.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.2 Computer Architecture opens the computer to see how its parts are organised and how it runs instructions.</div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ identify early computing devices and their contributions</p>
    <p style="margin:6px 0;">✔️ describe the key technologies of computer development</p>
    <p style="margin:6px 0;">✔️ relate technologies to the five generations</p>
    <p style="margin:6px 0;">✔️ appreciate technological advancement</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.1 is that:',
            options: ['Computers have never changed', 'Each new switching technology defined a generation', 'Computers began with smartphones', 'Technology makes computers bigger'],
            correct: 1,
            explanation: 'Changes in technology drove each generation.'
        },
        {
            question: 'Which lesson covered Moore’s law?',
            options: ['1.1.1', '1.1.3', '1.2.1', '1.1.2'],
            correct: 3,
            explanation: 'Moore’s law was taught with key technologies.'
        },
        {
            question: 'Which technology defines the third generation?',
            options: ['Integrated circuits', 'Vacuum tubes', 'Transistors', 'AI'],
            correct: 0,
            explanation: 'The answer is Integrated circuits. ICs arrived from about 1964.'
        },
        {
            question: 'What comes next?',
            options: ['1.3 I/O Devices', '1.2 Computer Architecture', '2.1 Data Communication', '3.1 Programming Concepts'],
            correct: 1,
            explanation: 'Architecture follows evolution in Strand 1.0.'
        },
        {
            question: 'The first published algorithm was written by:',
            options: ['Alan Turing', 'Blaise Pascal', 'Ada Lovelace', 'John Napier'],
            correct: 2,
            explanation: 'Her 1843 notes describe a program for the Analytical Engine.'
        }
    ]
},
{
    name: '1.2.1 Computer Architecture: The von Neumann Architecture, RISC and CISC',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: The von Neumann Architecture, RISC and CISC</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what computer architecture means, the stored-program concept, the functional elements of a von Neumann computer (input, output, CPU, memory, buses, interfaces and ports), the von Neumann bottleneck, and the difference between RISC and CISC processors.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Almost every computer you will ever use — laptop, phone, ATM, smart TV — follows the von Neumann design. Understanding it explains how computers run programs and what limits their speed.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💻 Laptops and desktops (CISC)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Smartphones (RISC/ARM)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏧 ATMs</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚗 Car control units</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Game consoles</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛰️ Embedded systems</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the functional organisation and architecture of a von Neumann computer.</li>
    <li>Analyse the relationships among its functional elements.</li>
    <li>Create a model showing the structural elements of a von Neumann computer.</li>
    <li>Use binary, octal and hexadecimal number systems to represent data.</li>
    <li>Appreciate the importance of computer architecture.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Define computer architecture and the stored-program concept.</li>
    <li>Describe the functional elements of a von Neumann computer.</li>
    <li>Explain the von Neumann bottleneck.</li>
    <li>Compare RISC and CISC architectures.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Key inquiry question:</strong> What is the role of computer architecture in computer performance?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> Sub-strand 1.1: generations and microprocessors; Introduction: input–process–output model.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p><strong>Computer architecture</strong> is the design of a computer system: what its parts are, what each part does and how they are connected and communicate. Think of a house plan: it shows the rooms, their purposes and the corridors that link them.</p>
    <p>In 1945 the mathematician <strong>John von Neumann</strong> described a design in which the <strong>program and the data are stored together in the same memory</strong>. This is the <strong>stored-program concept</strong>. To run a different task you simply load a different program — you do not rewire the machine, as early computers such as ENIAC required.</p>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Von Neumann computer = CPU + one memory holding both programs and data + input/output, all linked by buses.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Scientific Background</h3>
    <p>Earlier machines such as ENIAC were programmed by setting switches and plugging cables, which could take days. The stored-program design, described in von Neumann’s 1945 report on the EDVAC, made computers general-purpose and fast to reprogram. Its weakness is that instructions and data share one path to memory, so the CPU often waits — the <strong>von Neumann bottleneck</strong>. Some systems use the <strong>Harvard architecture</strong>, with separate memories and paths for instructions and data.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Computer architecture</strong>
    </p>
    <p style="margin:6px 0;">The design, organisation and interconnection of a computer’s parts.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Von Neumann architecture.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Stored-program concept</strong>
    </p>
    <p style="margin:6px 0;">Programs and data are stored together in the same main memory.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Loading an app from storage into RAM.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Bus</strong>
    </p>
    <p style="margin:6px 0;">A set of parallel wires that carries signals between components.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Data bus, address bus.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Port</strong>
    </p>
    <p style="margin:6px 0;">A socket where an external device is connected.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>USB, HDMI, Ethernet.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Interface</strong>
    </p>
    <p style="margin:6px 0;">Hardware and rules that let two components communicate.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A USB controller.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Instruction set</strong>
    </p>
    <p style="margin:6px 0;">The complete set of commands a processor can carry out.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>x86, ARM.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Bottleneck</strong>
    </p>
    <p style="margin:6px 0;">A point that limits the speed of the whole system.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The shared memory bus.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Functional Elements of a von Neumann Computer</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 600 330" width="600" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="200" y="20" width="200" height="150" rx="8" fill="#0d47a1" stroke="#64b5f6" stroke-width="2"/><text x="300" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">Central Processing Unit</text><text x="300" y="62" fill="#e3f2fd" font-size="11" text-anchor="middle">Control Unit (CU)</text><text x="300" y="79" fill="#e3f2fd" font-size="11" text-anchor="middle">Arithmetic Logic Unit (ALU)</text><text x="300" y="96" fill="#e3f2fd" font-size="11" text-anchor="middle">Registers: PC, MAR, MDR,</text><text x="300" y="113" fill="#e3f2fd" font-size="11" text-anchor="middle">CIR, Accumulator</text><rect x="20" y="60" width="130" height="70" rx="8" fill="#0b1e3a" stroke="#64b5f6" stroke-width="2"/><text x="85" y="82" fill="#e3f2fd" font-size="13" text-anchor="middle">Input</text><text x="85" y="102" fill="#e3f2fd" font-size="11" text-anchor="middle">keyboard, mouse,</text><text x="85" y="119" fill="#e3f2fd" font-size="11" text-anchor="middle">microphone</text><rect x="450" y="60" width="130" height="70" rx="8" fill="#0b1e3a" stroke="#64b5f6" stroke-width="2"/><text x="515" y="82" fill="#e3f2fd" font-size="13" text-anchor="middle">Output</text><text x="515" y="102" fill="#e3f2fd" font-size="11" text-anchor="middle">monitor, printer,</text><text x="515" y="119" fill="#e3f2fd" font-size="11" text-anchor="middle">speakers</text><rect x="200" y="250" width="200" height="66" rx="8" fill="#0b1e3a" stroke="#64b5f6" stroke-width="2"/><text x="300" y="272" fill="#e3f2fd" font-size="13" text-anchor="middle">Main Memory</text><text x="300" y="292" fill="#e3f2fd" font-size="11" text-anchor="middle">programs AND data</text><text x="300" y="309" fill="#e3f2fd" font-size="11" text-anchor="middle">stored together</text><line x1="150" y1="95" x2="198" y2="95" stroke="#fde68a" stroke-width="2"/><polygon points="198,95 189.9,98.9 189.9,91.1" fill="#fde68a"/><line x1="400" y1="95" x2="448" y2="95" stroke="#fde68a" stroke-width="2"/><polygon points="448,95 439.9,98.9 439.9,91.1" fill="#fde68a"/><rect x="20" y="190" width="560" height="44" rx="6" fill="none" stroke="#94a3b8" stroke-dasharray="5 4"/><text x="300" y="205" fill="#e3f2fd" font-size="12" text-anchor="middle">System bus</text><text x="300" y="225" fill="#e3f2fd" font-size="11" text-anchor="middle">data bus (two-way) · address bus (one-way) · control bus</text><line x1="300" y1="172" x2="300" y2="188" stroke="#64b5f6" stroke-width="2"/><polygon points="300,188 296.1,179.9 303.9,179.9" fill="#64b5f6"/><line x1="300" y1="236" x2="300" y2="248" stroke="#64b5f6" stroke-width="2"/><polygon points="300,248 296.1,239.9 303.9,239.9" fill="#64b5f6"/>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Element</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Input unit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accepts data and instructions from the user or environment and converts them into binary signals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Control Unit (CU)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fetches and decodes instructions; sends control signals to coordinate all parts</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Arithmetic Logic Unit (ALU)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Performs arithmetic (+, −, ×, ÷) and logic operations (AND, OR, NOT, comparisons)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Registers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Very fast, small storage locations inside the CPU used during processing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Main memory (RAM)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Holds the programs and data currently in use</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Output unit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Converts processed results into a form people can use</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">System bus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carries data, addresses and control signals between the CPU, memory and I/O</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Interfaces and ports</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Connect peripheral devices to the system (USB, HDMI, Ethernet, audio)</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Secondary storage (hard disk, SSD, flash) keeps programs and data permanently; they are copied into main memory when needed because the CPU works directly only with main memory.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. The von Neumann Bottleneck</h3>
    <p>Because instructions and data travel along the <strong>same bus</strong> between the CPU and memory, the CPU can only fetch one at a time. Modern processors are much faster than memory, so the CPU often waits. Designers reduce this bottleneck using <strong>cache memory</strong> (small fast memory close to the CPU), wider buses, and separate instruction and data caches (a Harvard-style idea inside a von Neumann machine).</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Von Neumann</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Harvard</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Memory for programs and data</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shared</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separate</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Buses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One shared path</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separate paths</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Speed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited by bottleneck</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Can fetch instruction and data at once</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Typical use</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">General-purpose computers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Microcontrollers, signal processors</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. RISC and CISC Architectures</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">RISC (Reduced Instruction Set Computer)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CISC (Complex Instruction Set Computer)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Instructions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few, simple instructions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many, complex instructions</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Instruction length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fixed length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Variable length</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clock cycles per instruction</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Usually one</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Often several</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Program length</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More instructions per program</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fewer instructions per program</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Registers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many general-purpose registers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fewer registers</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Memory access</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Only load/store instructions use memory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many instructions can use memory</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Power use</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Low — good for batteries</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Higher</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ARM processors in phones, tablets, Raspberry Pi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Intel and AMD x86 processors in most PCs</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Choosing an architecture</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> A company is designing a solar-powered weather sensor that must run for months on a small battery. Should it use a RISC or CISC processor? Explain.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Which architecture uses less power?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Requirement</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Very low power consumption.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Compare</strong>
    </p>
    <div style="margin:6px 0 0 34px;">RISC uses simple instructions and fewer transistors, so it uses less energy.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Decide</strong>
    </p>
    <div style="margin:6px 0 0 34px;">RISC suits battery-powered embedded devices.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> RISC — it uses less power, which suits a battery-powered device.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> State the stored-program concept.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Programs and data are stored together in the same main memory.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What does the ALU do?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Performs arithmetic and logic operations.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Give one example each of RISC and CISC processors.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">RISC: ARM (phones); CISC: Intel/AMD x86 (PCs).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Identifying components</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Modelling</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing designs</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safe handling of hardware</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Mapping a Real Computer to the von Neumann Model</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To identify the functional elements of a real computer and relate them to the von Neumann architecture.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">A desktop computer (opened by the teacher, unplugged)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Anti-static wrist strap</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Torch</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Labels and masking tape</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">System information tool (e.g. Settings → About, or System Information)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>The teacher shuts down, unplugs and opens the computer.</li>
    <li>Do not touch the power supply unit.</li>
    <li>Discharge static before touching any part; do not remove components.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Run the system information tool and record the processor name, number of cores and installed RAM.</li>
    <li>With the case opened by the teacher, identify the processor (under the cooler), RAM modules, storage drive and motherboard.</li>
    <li>Identify ports at the back: USB, HDMI/VGA, Ethernet, audio.</li>
    <li>Label each part with its von Neumann role (CPU, memory, storage, input/output interface, bus).</li>
    <li>Find out whether the processor is RISC or CISC from its name (Intel/AMD = CISC x86; ARM-based = RISC).</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Part found</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Specification</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Von Neumann role</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Processor</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">RAM</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Storage drive</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Motherboard</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ports</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">
    </td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Where is the system bus?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It is the network of copper tracks on the motherboard connecting the CPU, memory and expansion slots.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why is the processor covered by a fan and heat sink?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It produces heat from billions of switching transistors; cooling stops it overheating.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A real computer contains every element of the von Neumann model: CPU, main memory, storage, input/output interfaces and buses.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> The motherboard is the physical implementation of the architecture: its tracks form the buses that link the components.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing RAM (main memory) with the storage drive.</li>
    <li>Touching components without discharging static.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Computer technicians use this knowledge to diagnose faults and upgrade RAM or storage.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare the RAM and storage figures you recorded. Why is RAM smaller but faster? Explain how the amount of RAM and the processor type affect how many programs can run smoothly at once — this is the link between architecture and performance.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #64b5f6;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Computer Science in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Phones use RISC chips for long battery life; gaming PCs use powerful CISC processors with large caches.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Energy-efficient architectures reduce electricity use in data centres and extend battery life, reducing e-waste.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Computer engineers, hardware technicians and embedded-systems developers design and maintain computer architectures.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which unit coordinates all other parts?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think “manager”.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Control Unit.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Why was ENIAC hard to reprogram?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Before the stored-program idea.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It had no stored program; it had to be rewired with cables and switches.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How does cache reduce the bottleneck?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Small and fast.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It keeps frequently used data close to the CPU so fewer slow memory accesses are needed.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw and label the von Neumann architecture from memory.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Explain the stored-program concept to your partner using the example of installing an app.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Debate: “RISC processors will replace CISC in all computers.” Use facts on power and performance.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Watch a short video on the von Neumann architecture and list three new facts you learnt.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define computer architecture.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The design, organisation and interconnection of a computer’s parts.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe four functional elements of a von Neumann computer.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Input (accepts data); CPU (processes); memory (stores programs and data); output (presents results) — linked by buses.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Give three differences between RISC and CISC.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">RISC: few simple, fixed-length, one-cycle instructions; CISC: many complex, variable-length, multi-cycle instructions (also registers, power).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why must a computer be unplugged before its case is opened?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To prevent electric shock and damage to components.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain the von Neumann bottleneck and one solution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Instructions and data share one bus, so the CPU waits for memory; cache memory reduces the waiting.</div>
    </details>
    </div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Computer architecture is the design and interconnection of a computer’s parts. The von Neumann architecture stores programs and data together in main memory and links input, output, the CPU (CU, ALU, registers) and memory through the system bus, interfaces and ports. Its shared bus causes the von Neumann bottleneck, reduced by cache. RISC uses few simple instructions and low power; CISC uses many complex instructions.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Stored-program concept.</li>
    <li>Functional elements.</li>
    <li>Bottleneck and Harvard architecture.</li>
    <li>RISC vs CISC.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Programs + data in one memory.</li>
    <li>CU controls; ALU calculates.</li>
    <li>Phones = RISC (ARM); PCs = CISC (x86).</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Calling the whole computer case the “CPU”.</li>
    <li>Confusing RAM with storage.</li>
    <li>Thinking RISC means less powerful.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw the architecture diagram until you can do it from memory.</li>
    <li>Learn RISC/CISC as paired comparisons.</li>
    <li>Relate each element to a part you can see.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Label diagrams clearly with arrows showing data flow.</li>
    <li>Name the three buses and their directions.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relating architecture to performance.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using system information tools.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Debating RISC and CISC.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Life skills: effective communication</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Safety</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every app you open is loaded into memory and run by the von Neumann design.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw the von Neumann architecture and explain each part in one sentence.</li>
    <li>Find the processor type of three devices at home and classify each as RISC or CISC.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How does architecture affect the devices I choose?</li>
    <li>Which part of the computer do I now understand better?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Architecture</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Design of a computer’s parts.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Stored program</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Programs in memory with data.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">ALU</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Arithmetic and logic.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">RISC</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reduced instruction set.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">CISC</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complex instruction set.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can state the stored-program concept.</p>
    <p style="margin:6px 0;">☐ I can describe each functional element.</p>
    <p style="margin:6px 0;">☐ I can explain the bottleneck.</p>
    <p style="margin:6px 0;">☐ I can compare RISC and CISC.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Computer architecture refers to:',
            options: ['The colour of the case', 'The building housing computers', 'The design and interconnection of a computer’s parts', 'The price of a computer'],
            correct: 2,
            explanation: 'Architecture is how components are organised and connected.'
        },
        {
            question: 'The stored-program concept means:',
            options: ['Programs are printed on paper', 'Data is never stored', 'Programs and data share the same main memory', 'Programs are wired into the machine'],
            correct: 2,
            explanation: 'Von Neumann placed instructions and data in one memory.'
        },
        {
            question: 'Which unit performs calculations and comparisons?',
            options: ['ALU', 'Control Unit', 'Output unit', 'Port'],
            correct: 0,
            explanation: 'The Arithmetic Logic Unit does arithmetic and logic.'
        },
        {
            question: 'Which unit coordinates and sends control signals?',
            options: ['ALU', 'Control Unit', 'Hard disk', 'Monitor'],
            correct: 1,
            explanation: 'The CU manages the fetch–execute cycle and other parts.'
        },
        {
            question: 'Registers are:',
            options: ['Printers', 'Very fast storage locations inside the CPU', 'Network cables', 'Ports at the back'],
            correct: 1,
            explanation: 'Registers hold data the CPU is working on right now.'
        },
        {
            question: 'The von Neumann bottleneck is caused by:',
            options: ['Too many keyboards', 'Instructions and data sharing one bus to memory', 'Slow printers', 'Large monitors'],
            correct: 1,
            explanation: 'The CPU must wait while one path is used.'
        },
        {
            question: 'Cache memory helps by:',
            options: ['Printing faster', 'Cooling the CPU', 'Storing files permanently', 'Keeping frequently used data close to the CPU'],
            correct: 3,
            explanation: 'Fewer trips to slow main memory are needed.'
        },
        {
            question: 'RISC processors typically:',
            options: ['Use many complex instructions', 'Use vacuum tubes', 'Use simple instructions and low power', 'Have no registers'],
            correct: 2,
            explanation: 'Simple fixed-length instructions suit efficient, low-power chips.'
        },
        {
            question: 'Most smartphone processors are based on:',
            options: ['ARM (RISC)', 'x86 (CISC)', 'Vacuum tubes', 'Harvard mechanical engines'],
            correct: 0,
            explanation: 'ARM chips dominate phones because of power efficiency.'
        },
        {
            question: 'A USB socket is an example of a:',
            options: ['Register', 'Bus width', 'ALU', 'Port'],
            correct: 3,
            explanation: 'Ports connect external devices to the computer.'
        }
    ]
},
{
    name: '1.2.2 Computer Architecture: Buses, Registers and the Fetch–Execute Cycle',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Buses, Registers and the Fetch–Execute Cycle</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how the parts of a computer communicate through the data, address and control buses, the roles of the key CPU registers, how the fetch–decode–execute cycle runs a program step by step, and the factors that affect processor performance.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every program — from a calculator app to a game — runs as millions of fetch–execute cycles. Knowing how they work explains why clock speed, cores, cache and bus width matter when you buy or use a computer.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🛒 Choosing a laptop or phone</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎮 Gaming performance</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🖥️ Servers for websites</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔧 Diagnosing slow computers</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📡 Embedded devices</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧑🏾‍💻 Writing efficient programs</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the functional organisation and architecture of a von Neumann computer.</li>
    <li>Analyse the relationships among its functional elements.</li>
    <li>Create a model showing the structural elements of a von Neumann computer.</li>
    <li>Use binary, octal and hexadecimal number systems to represent data.</li>
    <li>Appreciate the importance of computer architecture.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the data, address and control buses.</li>
    <li>State the functions of PC, MAR, MDR, CIR and the accumulator.</li>
    <li>Explain each stage of the fetch–decode–execute cycle.</li>
    <li>Explain factors that affect CPU performance.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Key inquiry question:</strong> What is the role of computer architecture in computer performance?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> Lesson 1.2.1: the von Neumann architecture.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Think of a school library. You give the librarian a <strong>shelf number</strong> (an address), the librarian brings the <strong>book</strong> (the data), and the library rules say whether you are <strong>borrowing or returning</strong> (control). Inside a computer, the <strong>address bus</strong>, <strong>data bus</strong> and <strong>control bus</strong> play these three roles.</p>
    <p>The CPU runs a program by repeating the <strong>fetch–decode–execute cycle</strong>: fetch the next instruction from memory, decode what it means, execute it, then fetch the next one. Special registers keep track of where it is and what it is working on.</p>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Address bus = “where?”, data bus = “what?”, control bus = “what to do?”. The CPU fetches, decodes and executes again and again.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Scientific Background</h3>
    <p>Each memory location has a unique number called its <strong>address</strong>. With an address bus of <em>n</em> lines, the CPU can address 2<sup>n</sup> locations. The CPU clock sends regular pulses; each pulse moves the processor one step through the cycle. A 3 GHz processor receives 3 billion pulses per second.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Data bus</strong>
    </p>
    <p style="margin:6px 0;">Carries data and instructions between the CPU, memory and I/O; two-way.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sending a number from RAM to the CPU.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Address bus</strong>
    </p>
    <p style="margin:6px 0;">Carries memory addresses from the CPU; one-way.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Location 200.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Control bus</strong>
    </p>
    <p style="margin:6px 0;">Carries control and timing signals (read, write, clock, interrupt).</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Memory read signal.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Program Counter (PC)</strong>
    </p>
    <p style="margin:6px 0;">Holds the address of the next instruction to fetch.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>PC = 5.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Memory Address Register (MAR)</strong>
    </p>
    <p style="margin:6px 0;">Holds the address of the memory location being accessed.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>MAR = 5.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Memory Data Register (MDR)</strong>
    </p>
    <p style="margin:6px 0;">Holds data or an instruction just read from or about to be written to memory.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>MDR = ADD 7.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Current Instruction Register (CIR)</strong>
    </p>
    <p style="margin:6px 0;">Holds the instruction being decoded and executed.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>CIR = ADD 7.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Accumulator (ACC)</strong>
    </p>
    <p style="margin:6px 0;">Holds results of calculations performed by the ALU.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>ACC = 42.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Three Buses</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Bus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Carries</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Direction</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Effect of more lines (width)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data bus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data and instructions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two-way (bidirectional)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More bits moved at once → faster</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Address bus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Memory addresses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">One-way: CPU → memory/I/O</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More memory locations can be addressed</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Control bus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Signals: memory read/write, clock, interrupt, reset</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Two-way</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Coordinates timing and actions</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border:1px solid #1e88e5;border-radius:12px;padding:16px;margin:14px 0;">
    <p style="margin:0;color:#bbdefb;font-size:13px;letter-spacing:1px;text-transform:uppercase;">🧾 Formula Card · Addressable memory</p>
    <div style="color:#e3f2fd;font-size:21px;text-align:center;margin:10px 0 12px 0;font-weight:bold;">Locations = 2ⁿ</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📖 Meaning:</span> n is the number of lines in the address bus.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">📏 Units:</span> Memory locations (each usually one byte)</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">🎯 When to use it:</span> Working out how much memory a CPU can address.</div>
    <div style="border-top:1px solid #132a45;padding:6px 0;"><span style="color:#fde68a;font-weight:bold;">⚡ Memory trick:</span> Add one line → double the memory.</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Address bus width</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> How many memory locations can a CPU with a 16-bit address bus address? What about a 32-bit bus, if each location stores one byte?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Use 2ⁿ.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 16-bit</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2¹⁶ = 65 536 locations (64 KB).</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 32-bit</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2³² = 4 294 967 296 locations.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: In bytes</strong>
    </p>
    <div style="margin:6px 0 0 34px;">4 294 967 296 bytes = 4 GB.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 65 536 locations; a 32-bit address bus can address 4 GB.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. The Fetch–Decode–Execute Cycle</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 520 300" width="520" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><circle cx="260" cy="150" r="105" fill="none" stroke="#334155" stroke-width="14"/><rect x="190" y="12" width="140" height="60" rx="8" fill="#0d47a1" stroke="#64b5f6" stroke-width="2"/><text x="260" y="34" fill="#e3f2fd" font-size="13" text-anchor="middle">FETCH</text><text x="260" y="54" fill="#e3f2fd" font-size="11" text-anchor="middle">get next instruction</text><rect x="370" y="190" width="140" height="60" rx="8" fill="#0d47a1" stroke="#64b5f6" stroke-width="2"/><text x="440" y="212" fill="#e3f2fd" font-size="13" text-anchor="middle">DECODE</text><text x="440" y="232" fill="#e3f2fd" font-size="11" text-anchor="middle">CU works out meaning</text><rect x="10" y="190" width="140" height="60" rx="8" fill="#0d47a1" stroke="#64b5f6" stroke-width="2"/><text x="80" y="212" fill="#e3f2fd" font-size="13" text-anchor="middle">EXECUTE</text><text x="80" y="232" fill="#e3f2fd" font-size="11" text-anchor="middle">carry out instruction</text><line x1="332" y1="60" x2="420" y2="186" stroke="#fde68a" stroke-width="2"/><polygon points="420,186 412.2,181.6 418.6,177.1" fill="#fde68a"/><line x1="368" y1="232" x2="152" y2="232" stroke="#fde68a" stroke-width="2"/><polygon points="152,232 160.1,228.1 160.1,235.9" fill="#fde68a"/><line x1="90" y1="188" x2="188" y2="50" stroke="#fde68a" stroke-width="2"/><polygon points="188,50 186.5,58.9 180.1,54.3" fill="#fde68a"/><text x="260" y="145" fill="#e3f2fd" font-size="12" text-anchor="middle">Repeats billions</text><text x="260" y="162" fill="#e3f2fd" font-size="12" text-anchor="middle">of times per second</text><text x="260" y="290" fill="#e3f2fd" font-size="11" text-anchor="middle">driven by the CPU clock</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Stage</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What happens</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fetch 1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The address in the PC is copied to the MAR.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fetch 2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The address goes along the address bus; the control unit sends a “memory read” signal on the control bus.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fetch 3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The instruction at that address travels on the data bus into the MDR.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fetch 4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The instruction is copied from the MDR to the CIR; the PC is increased by 1 to point to the next instruction.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Decode</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The control unit decodes the instruction in the CIR to find the operation (e.g. ADD) and the operand (e.g. address 7).</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Execute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The instruction is carried out — e.g. data is fetched from address 7 and the ALU adds it to the accumulator. The cycle then repeats.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Tracing one instruction</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> PC = 2. Memory address 2 holds “ADD 7” and address 7 holds 30. The accumulator holds 12. Trace the registers through one cycle.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Follow PC → MAR → MDR → CIR, then execute.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Fetch</strong>
    </p>
    <div style="margin:6px 0 0 34px;">MAR ← 2; MDR ← “ADD 7”; CIR ← “ADD 7”; PC ← 3.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Decode</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Operation ADD; operand address 7.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Execute</strong>
    </p>
    <div style="margin:6px 0 0 34px;">MAR ← 7; MDR ← 30; ALU adds 12 + 30; ACC ← 42.</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> After the cycle: PC = 3, CIR = ADD 7, ACC = 42.</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>The PC is incremented during the <strong>fetch</strong> stage, not after execution. A jump instruction can later change the PC to a different address.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Factors Affecting CPU Performance</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Factor</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Effect</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clock speed (GHz)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More cycles per second → more instructions executed per second</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number of cores</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Each core runs its own fetch–execute cycle, so several tasks run at once</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cache size</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More fast memory near the CPU → fewer slow trips to RAM</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data bus width</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More bits transferred per cycle</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Architecture (RISC/CISC) and instruction set</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Affects how much work each instruction does and how many cycles it needs</td>
    </tr>
    </table>
    </div>
    <div style="background:#10233d;border-left:4px solid #1e88e5;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bbdefb;font-weight:bold;">📝 Exam Tip</p>
    <div>A higher clock speed does not always mean a faster computer: a CPU with more cores or a larger cache can outperform one with a slightly higher clock speed.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which bus is one-way?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The address bus.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which register holds the address of the next instruction?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Program Counter (PC).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name two factors that affect CPU performance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Clock speed and number of cores (also cache size, bus width).</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Keep food and drinks out of the computer laboratory.</li>
    <li>Never touch power sockets, cables or the inside of a computer with wet hands; report damaged cables immediately.</li>
    <li>Shut down and unplug a computer before opening its case, and only do so under the teacher’s supervision.</li>
    <li>Sit upright at a comfortable distance from the screen and take short breaks to rest your eyes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Simulating</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Tracing algorithms</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculating</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting specifications</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Watching and Simulating the Fetch–Execute Cycle</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To observe the fetch–execute cycle in a simulator and trace register values for a short program.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer with internet access (supervised)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Projector or shared screen</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Register trace table worksheet</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">An approved fetch–execute or “Little Man Computer”-style simulator, or a teacher-prepared video of the cycle</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only websites approved by the teacher.</li>
    <li>Take short breaks from the screen.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Watch the video or simulator demonstration of one complete fetch–decode–execute cycle.</li>
    <li>Load (or follow) this program: address 0: LOAD 5; 1: ADD 6; 2: STORE 7; 3: HALT; address 5 holds 12; address 6 holds 30.</li>
    <li>Step through the program one cycle at a time.</li>
    <li>After each cycle, record PC, MAR, MDR, CIR and ACC in the trace table.</li>
    <li>Check the value stored at address 7 at the end.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cycle</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">PC (after fetch)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">MAR</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">MDR</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CIR</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">ACC</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 (LOAD 5)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2 (ADD 6)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3 (STORE 7)</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 (HALT)</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What value is stored at address 7?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">42 (12 + 30).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why does the PC increase by 1 in each fetch?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Instructions are stored one after another, so the next one is at the next address.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> A program runs as a sequence of fetch–decode–execute cycles, with registers holding addresses, instructions and results at each step.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> The control unit uses the PC to find each instruction, the MAR and MDR to communicate with memory over the buses, the CIR to decode, and the ALU and accumulator to compute.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Forgetting that MAR and MDR change again during execution of LOAD, ADD and STORE.</li>
    <li>Incrementing the PC twice.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Software engineers use similar step-by-step debugging tools to trace how their programs change values in memory.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Compare your completed trace table with a partner’s. Explain why the ACC changes only in cycles 1 and 2, and why address 7 changes only in cycle 3. Then estimate how long the program would take on a 1 GHz CPU if each cycle needed 4 clock pulses (4 cycles × 4 pulses = 16 pulses = 16 nanoseconds).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #64b5f6;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Computer Science in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> When buying a laptop, compare cores, clock speed, cache and RAM — not just one number.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Efficient processors complete work in fewer cycles, using less electricity.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Processor designers, compiler writers and performance engineers optimise the fetch–execute cycle.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How many locations can a 20-bit address bus access?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use 2ⁿ.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2²⁰ = 1 048 576 (1 MB if each holds a byte).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What register receives the instruction from the MDR?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Current instruction.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The CIR.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why does a quad-core CPU handle multitasking better?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: More workers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Four cores can each execute instructions at the same time.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write the fetch stage as four numbered steps from memory.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Act out the cycle: one learner is the CPU, one is memory, and paper slips carry addresses and data.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Compare the specifications of three laptops or phones and rank them for performance with reasons.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a fetch–execute simulator to run a program that adds three numbers.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Describe the function of each of the three buses.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Data bus carries data/instructions both ways; address bus carries addresses from the CPU; control bus carries control and timing signals.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Explain the role of the PC, MAR and MDR in the fetch stage.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">PC holds next address and copies it to MAR; MAR sends it on the address bus; MDR receives the instruction from memory.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> State three factors that affect processor performance.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Clock speed; number of cores; cache size (also bus width).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> In the simulation, which instruction changes memory rather than the accumulator?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">STORE 7.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does doubling the clock speed not always double performance?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The CPU may wait for memory (bottleneck), and other factors such as cache and cores also matter.</div>
    </details>
    </div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The data bus (two-way) carries data and instructions, the address bus (one-way) carries addresses, and the control bus carries control signals. Registers PC, MAR, MDR, CIR and ACC support the fetch–decode–execute cycle, which repeats for every instruction. Performance depends on clock speed, cores, cache, bus width and architecture. Addressable locations = 2ⁿ.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Three buses.</li>
    <li>Five registers.</li>
    <li>Fetch, decode, execute steps.</li>
    <li>Performance factors; 2ⁿ.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>PC → MAR → (memory) → MDR → CIR.</li>
    <li>PC increments during fetch.</li>
    <li>Address bus is one-way.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Saying the data bus is one-way.</li>
    <li>Mixing MAR (address) and MDR (data).</li>
    <li>Judging speed by GHz alone.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use the library analogy for buses.</li>
    <li>Practise trace tables.</li>
    <li>Memorise 2¹⁰, 2¹⁶, 2²⁰, 2³².</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Name registers in full the first time, then use abbreviations.</li>
    <li>Describe the fetch stage in correct order.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tracing register values.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a simulator.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Communication and collaboration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Acting out the cycle.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Unity</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Consumer awareness: comparing device specifications</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every tap on your phone triggers millions of fetch–execute cycles.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete a trace table for a program that adds 15 and 27 and stores the result.</li>
    <li>Compare the CPU specifications of two phones on sale in Kenya.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which register’s job do I find most interesting?</li>
    <li>What will I check when buying my next device?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Data bus</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carries data both ways.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Address bus</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Carries addresses one way.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">PC</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Next instruction address.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">CIR</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Current instruction.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Clock speed</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cycles per second.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe the three buses.</p>
    <p style="margin:6px 0;">☐ I can state register functions.</p>
    <p style="margin:6px 0;">☐ I can explain the fetch–execute cycle.</p>
    <p style="margin:6px 0;">☐ I can explain performance factors.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which bus carries memory addresses?',
            options: ['Data bus', 'Control bus', 'USB bus', 'Address bus'],
            correct: 3,
            explanation: 'The CPU sends the location number on the address bus.'
        },
        {
            question: 'The data bus is:',
            options: ['One-way from memory only', 'Two-way', 'One-way from CPU only', 'Not connected to the CPU'],
            correct: 1,
            explanation: 'Data moves both to and from the CPU.'
        },
        {
            question: 'A “memory write” signal travels on the:',
            options: ['Control bus', 'Address bus', 'Data bus', 'Power cable'],
            correct: 0,
            explanation: 'Control signals coordinate read and write operations.'
        },
        {
            question: 'A CPU with a 16-bit address bus can address:',
            options: ['16 locations', '256 locations', '65 536 locations', '4 GB'],
            correct: 2,
            explanation: 'The answer is 65 536 locations. 2 to the power 16 is 65 536.'
        },
        {
            question: 'The Program Counter holds:',
            options: ['The current result', 'The data just read', 'The clock speed', 'The address of the next instruction'],
            correct: 3,
            explanation: 'It points to the next instruction to fetch.'
        },
        {
            question: 'During the fetch stage, the instruction is first copied from memory into the:',
            options: ['Accumulator', 'MDR', 'PC', 'ALU'],
            correct: 1,
            explanation: 'The memory data register receives what comes along the data bus.'
        },
        {
            question: 'The instruction being decoded is held in the:',
            options: ['CIR', 'MAR', 'PC', 'Cache'],
            correct: 0,
            explanation: 'The current instruction register holds it for decoding.'
        },
        {
            question: 'ALU results are usually stored in the:',
            options: ['Accumulator', 'MAR', 'PC', 'Address bus'],
            correct: 0,
            explanation: 'The accumulator holds arithmetic results.'
        },
        {
            question: 'Increasing the number of cores mainly helps by:',
            options: ['Making the screen bigger', 'Increasing storage', 'Cooling the CPU', 'Running several tasks at the same time'],
            correct: 3,
            explanation: 'Each core runs its own instruction stream.'
        },
        {
            question: 'A 3 GHz processor receives about:',
            options: ['3 pulses per second', '3 million per hour', '3 billion clock pulses per second', '300 per second'],
            correct: 2,
            explanation: 'Giga means billion; hertz means per second.'
        }
    ]
},
{
    name: '1.2.3 Computer Architecture: Number Systems — Binary, Octal and Hexadecimal',
    type: 'lesson',
    duration: '40 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 40 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: Number Systems: Binary, Octal and Hexadecimal</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn why computers use binary, how place value works in bases 2, 8, 10 and 16, and how to convert numbers between decimal, binary, octal and hexadecimal. You will also learn the units bit, nibble, byte, kilobyte, megabyte and gigabyte.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Everything a computer stores — numbers, text, images, sound — is binary. Programmers use octal and hexadecimal as short ways of writing binary, for example in colour codes, memory addresses and network (MAC) addresses.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎨 Web colour codes (#FF0000)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌐 MAC and IPv6 addresses</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">💾 File sizes (KB, MB, GB)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧑🏾‍💻 Debugging memory</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🔐 Encryption keys</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐧 Linux file permissions (octal)</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning outcomes (CBC):</strong> By the end of the sub-strand, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the functional organisation and architecture of a von Neumann computer.</li>
    <li>Analyse the relationships among its functional elements.</li>
    <li>Create a model showing the structural elements of a von Neumann computer.</li>
    <li>Use binary, octal and hexadecimal number systems to represent data.</li>
    <li>Appreciate the importance of computer architecture.</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain why computers use binary.</li>
    <li>Convert between decimal and binary.</li>
    <li>Convert between binary, octal and hexadecimal.</li>
    <li>Convert between decimal and hexadecimal.</li>
    <li>Use units of data storage.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Key inquiry question:</strong> What is the role of computer architecture in computer performance?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> Lesson 1.1.2 (switches as 0 and 1); Mathematics: place value and powers.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>In our everyday <strong>decimal</strong> (base 10) system we use ten digits, 0–9, and each place is worth ten times the place to its right: units, tens, hundreds. A computer’s switches have only two states, on and off, so computers use <strong>binary</strong> (base 2) with just two digits, 0 and 1. Each place is worth <strong>twice</strong> the place to its right: 1, 2, 4, 8, 16, …</p>
    <p>Long binary numbers are hard for people to read, so programmers group bits: three bits make one <strong>octal</strong> (base 8) digit, and four bits make one <strong>hexadecimal</strong> (base 16) digit.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 560 120" width="560" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><rect x="20" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="50" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">128</text><rect x="20" y="58" width="60" height="34" fill="#0f172a" stroke="#64b5f6"/><text x="50" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">0</text><rect x="86" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="116" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">64</text><rect x="86" y="58" width="60" height="34" fill="#0f172a" stroke="#64b5f6"/><text x="116" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">0</text><rect x="152" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="182" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">32</text><rect x="152" y="58" width="60" height="34" fill="#0d47a1" stroke="#64b5f6"/><text x="182" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">1</text><rect x="218" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="248" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">16</text><rect x="218" y="58" width="60" height="34" fill="#0f172a" stroke="#64b5f6"/><text x="248" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">0</text><rect x="284" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="314" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">8</text><rect x="284" y="58" width="60" height="34" fill="#0d47a1" stroke="#64b5f6"/><text x="314" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">1</text><rect x="350" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="380" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">4</text><rect x="350" y="58" width="60" height="34" fill="#0d47a1" stroke="#64b5f6"/><text x="380" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">1</text><rect x="416" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="446" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">2</text><rect x="416" y="58" width="60" height="34" fill="#0f172a" stroke="#64b5f6"/><text x="446" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">0</text><rect x="482" y="20" width="60" height="34" fill="#0b1e3a" stroke="#64b5f6"/><text x="512" y="42" fill="#e3f2fd" font-size="13" text-anchor="middle">1</text><rect x="482" y="58" width="60" height="34" fill="#0d47a1" stroke="#64b5f6"/><text x="512" y="81" fill="#e3f2fd" font-size="15" text-anchor="middle">1</text><text x="280" y="112" fill="#e3f2fd" font-size="13" text-anchor="middle">00101101₂ = 32 + 8 + 4 + 1 = 45₁₀</text>
    </svg>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Binary uses 0 and 1. Group 3 bits for octal, 4 bits for hex. Hex digits go 0–9 then A–F (10–15).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Scientific Background</h3>
    <p>We write the base as a subscript: 1011₂ is binary, 17₈ is octal, 45₁₀ is decimal and 2F₁₆ is hexadecimal. A single binary digit is a <strong>bit</strong>; 4 bits make a <strong>nibble</strong>; 8 bits make a <strong>byte</strong>. In computing, 1 kilobyte (KB) is usually taken as 1 024 bytes, 1 MB = 1 024 KB and 1 GB = 1 024 MB (strictly, these are kibibytes, mebibytes and gibibytes).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term, its symbol and SI unit. Use the example to picture it.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Number base (radix)</strong>
    </p>
    <p style="margin:6px 0;">The number of different digits a number system uses.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Binary is base 2.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Binary</strong>
    </p>
    <p style="margin:6px 0;">Base 2 system using digits 0 and 1.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol / unit:</span> ₂</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1101₂ = 13₁₀.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Octal</strong>
    </p>
    <p style="margin:6px 0;">Base 8 system using digits 0–7.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol / unit:</span> ₈</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>17₈ = 15₁₀.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Hexadecimal</strong>
    </p>
    <p style="margin:6px 0;">Base 16 system using 0–9 and A–F.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol / unit:</span> ₁₆</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>FF₁₆ = 255₁₀.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Bit</strong>
    </p>
    <p style="margin:6px 0;">A single binary digit.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol / unit:</span> b</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Nibble</strong>
    </p>
    <p style="margin:6px 0;">Four bits.</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>1010</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #64b5f6;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Byte</strong>
    </p>
    <p style="margin:6px 0;">Eight bits.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📏 Symbol / unit:</span> B</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>01000001</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Decimal and Binary Conversions</h3>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">Decimal → binary: repeated division by 2</h4>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Convert 45₁₀ to binary</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 45 to binary.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Divide by 2, write remainders, read upwards.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 45 ÷ 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">22 remainder 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 22 ÷ 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">11 remainder 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: 11 ÷ 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5 remainder 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: 5 ÷ 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 remainder 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">5</span><strong style="color:#e3f2fd;">Step 5: 2 ÷ 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1 remainder 0</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">6</span><strong style="color:#e3f2fd;">Step 6: 1 ÷ 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 remainder 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">7</span><strong style="color:#e3f2fd;">Step 7: Read remainders from bottom to top</strong>
    </p>
    <div style="margin:6px 0 0 34px;">101101</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 45₁₀ = 101101₂</div>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">Binary → decimal: add place values</h4>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Convert 110101₂ to decimal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 110101₂ to decimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Write place values 32, 16, 8, 4, 2, 1 above the bits.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Place values</strong>
    </p>
    <div style="margin:6px 0 0 34px;">32 16 8 4 2 1 over 1 1 0 1 0 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Add the places with 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">32 + 16 + 4 + 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Total</strong>
    </p>
    <div style="margin:6px 0 0 34px;">53</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 110101₂ = 53₁₀</div>
    </div>
    <div style="background:#241338;border-left:4px solid #2196f3;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#90caf9;font-weight:bold;">⚡ Quick Trick</p>
    <div>For quick decimal → binary, subtract the largest power of 2 you can: 45 − 32 = 13, 13 − 8 = 5, 5 − 4 = 1, 1 − 1 = 0 → bits for 32, 8, 4, 1 → 101101.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Binary, Octal and Hexadecimal</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Decimal</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Binary</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Octal</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hex</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0001</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0010</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">2</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">3</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0101</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">5</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">6</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">0111</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">7</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1000</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1001</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">9</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">10</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1010</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">11</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1011</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">12</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1100</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">14</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">13</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1101</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">D</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">14</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1110</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">16</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">E</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">15</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1111</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">17</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">F</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 3: Binary → octal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 101101₂ to octal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Group in threes from the right.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Group</strong>
    </p>
    <div style="margin:6px 0 0 34px;">101 | 101</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Convert each group</strong>
    </p>
    <div style="margin:6px 0 0 34px;">5 | 5</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 101101₂ = 55₈ (check: 5 × 8 + 5 = 45)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 4: Binary → hexadecimal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 11010110₂ to hexadecimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Group in fours from the right.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Group</strong>
    </p>
    <div style="margin:6px 0 0 34px;">1101 | 0110</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Convert each group</strong>
    </p>
    <div style="margin:6px 0 0 34px;">D | 6</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 11010110₂ = D6₁₆ (= 214₁₀)</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 5: Octal → binary</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 73₈ to binary.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Replace each octal digit with 3 bits.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 7</strong>
    </p>
    <div style="margin:6px 0 0 34px;">111</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 3</strong>
    </p>
    <div style="margin:6px 0 0 34px;">011</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Join</strong>
    </p>
    <div style="margin:6px 0 0 34px;">111011</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 73₈ = 111011₂ (= 59₁₀)</div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>When grouping, always start from the <strong>right</strong> and add leading zeros on the left if needed: 1011010₂ → 0101 1010 → 5A₁₆.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Decimal and Hexadecimal; Units of Data</h3>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 6: Hexadecimal → decimal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 2F₁₆ to decimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Place values 16 and 1; F = 15.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Expand</strong>
    </p>
    <div style="margin:6px 0 0 34px;">2 × 16 + 15 × 1</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Calculate</strong>
    </p>
    <div style="margin:6px 0 0 34px;">32 + 15</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 2F₁₆ = 47₁₀</div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 7: Decimal → hexadecimal</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Convert 200₁₀ to hexadecimal.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Divide by 16; remainders 10–15 become A–F.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: 200 ÷ 16</strong>
    </p>
    <div style="margin:6px 0 0 34px;">12 remainder 8</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: 12 ÷ 16</strong>
    </p>
    <div style="margin:6px 0 0 34px;">0 remainder 12 → C</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Read upwards</strong>
    </p>
    <div style="margin:6px 0 0 34px;">C8</div>
    </div>
    <div style="background:#0b1e3a;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 200₁₀ = C8₁₆</div>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Unit</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Size</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 bit</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A single 0 or 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 nibble</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 bits</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 byte</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 bits (one character such as “A”)</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 kilobyte (KB)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 024 bytes</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 megabyte (MB)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 024 KB</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 gigabyte (GB)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 024 MB</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 terabyte (TB)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1 024 GB</td>
    </tr>
    </table>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Web colours use hexadecimal: #FF0000 is pure red (FF red, 00 green, 00 blue). Each pair is one byte, from 00 (0) to FF (255).</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Convert 13₁₀ to binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1101₂</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Convert 111100₂ to octal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">111 100 → 74₈</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Convert 3A₁₆ to decimal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">3 × 16 + 10 = 58</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Computer Laboratory Safety Notes</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Sit upright and keep the screen at eye level when using the computer.</li>
    <li>Take short breaks every 20–30 minutes to rest your eyes.</li>
    <li>Keep food and drinks away from computers.</li>
    <li>Log out when you finish.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Laboratory Skills Developed</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Converting numbers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Checking answers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using a programmer calculator</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Pattern recognition</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Checking Conversions with a Programmer Calculator and Colour Codes</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To check number-base conversions with software and see how hexadecimal represents colours.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Computer</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Calculator app in Programmer mode (or an approved online base converter)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Simple web page editor or an approved online colour picker</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Worksheet of 10 conversions</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use only approved websites.</li>
    <li>Save your work in your own folder.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Do each conversion on the worksheet by hand first.</li>
    <li>Open the calculator in Programmer mode. Type each decimal number and read its BIN, OCT and HEX values.</li>
    <li>Compare with your hand answers and correct any mistakes.</li>
    <li>Open the colour picker. Enter #FF0000, #00FF00, #0000FF and #FFFF00 and record the colours.</li>
    <li>Find the hex code for your school colour and convert each pair to decimal.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Decimal</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Binary (hand)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Octal (hand)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Hex (hand)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Correct? (Y/N)</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">45</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">100</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">200</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">255</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why is #FFFFFF white?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Red, green and blue are all at the maximum (255), and mixing all colours of light gives white.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why do programmers prefer hex to binary?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Hex is shorter and easier to read; each hex digit stands for exactly four bits.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Software confirms hand conversions; hexadecimal is a compact way to write binary, as in colour codes.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Each colour channel is stored as one byte (8 bits), written as two hex digits from 00 to FF.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Reading remainders from top to bottom instead of bottom to top.</li>
    <li>Forgetting that A–F stand for 10–15.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Web and app designers type hex colour codes every day; network engineers read MAC addresses written in hex.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Data Analysis and Scientific Reasoning</h3>
    <p>Count how many of your hand conversions were correct first time. Identify the type of mistake you made most often (grouping, remainders or A–F values). Then explain why 255 is the largest value one byte can hold: 11111111₂ = 128 + 64 + 32 + 16 + 8 + 4 + 2 + 1 = 255.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #64b5f6;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Computer Science in Action</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Phone storage, file sizes and data bundles are measured in MB and GB, which are based on bytes.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Compressing data (fewer bits) saves storage and energy in data centres.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Programmers, network engineers and cyber-security analysts read binary and hexadecimal daily.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Convert 25₁₀ to binary.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Use place values.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">11001₂ (16 + 8 + 1).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Convert 1111₂ to hexadecimal.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: One group of four.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">F₁₆.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> How many bits are in 3 bytes?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: 8 bits per byte.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">24 bits.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write your age, house number and the current year in binary, octal and hex.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Take turns giving a binary number for your partner to convert to hex.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Play a “binary cards” game: five cards showing 16, 8, 4, 2, 1 face up or down to make numbers 0–31.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use a colour picker to design a poster palette and write each colour’s hex code and its decimal values.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice: Structured and Practical Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Convert 100₁₀ to binary, octal and hexadecimal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1100100₂; 144₈; 64₁₆.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Convert 10110111₂ to decimal and hexadecimal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">128 + 32 + 16 + 4 + 2 + 1 = 183; 1011 0111 → B7₁₆.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Convert 1C₁₆ to binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">0001 1100 → 11100₂ (= 28).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What does the colour code #000000 represent, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Black — red, green and blue are all 0.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #f9a8d4;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">Think Deeper</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why does octal group bits in threes and hex in fours?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">8 = 2³ and 16 = 2⁴, so each octal digit matches exactly 3 bits and each hex digit 4 bits.</div>
    </details>
    </div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Computers use binary because switches have two states. Decimal → binary: divide by 2 and read remainders upwards; binary → decimal: add place values. Group bits in threes for octal and fours for hexadecimal (A–F = 10–15). Hex ↔ decimal uses powers of 16. Data units: bit, nibble (4), byte (8), KB (1 024 bytes), MB, GB, TB.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Revision notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Why binary.</li>
    <li>Decimal ↔ binary.</li>
    <li>Binary ↔ octal and hex.</li>
    <li>Decimal ↔ hex.</li>
    <li>Units of data.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Read remainders bottom to top.</li>
    <li>Group from the right.</li>
    <li>One byte: 0 to 255 (00 to FF).</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Grouping from the left.</li>
    <li>Writing 10 instead of A in hex.</li>
    <li>Forgetting leading zeros in groups.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Memorise powers of 2 up to 1 024.</li>
    <li>Memorise the 0–15 conversion table.</li>
    <li>Always check by converting back.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Exam Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Show your working (divisions or place values).</li>
    <li>Write the base as a subscript in every answer.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 Competencies, Values and PCIs</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CBC core competency</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How this lesson builds it</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Critical thinking</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Choosing efficient conversion methods.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Digital literacy</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Using a programmer calculator.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Creativity</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Designing colour palettes in hex.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Values</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Integrity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Pertinent and Contemporary Issues (PCIs)</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Financial literacy: understanding data bundle sizes</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> From photo sizes to web colours, binary and hex are everywhere in digital life.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Convert ten numbers of your choice between all four bases.</li>
    <li>Find the hex colour codes used on two websites and convert them to decimal.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which conversion do I find hardest?</li>
    <li>Where have I seen hexadecimal before?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Base</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Number of digits used.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Bit</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Binary digit.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Nibble</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">4 bits.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Byte</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">8 bits.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hexadecimal</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Base 16.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain why computers use binary.</p>
    <p style="margin:6px 0;">☐ I can convert decimal ↔ binary.</p>
    <p style="margin:6px 0;">☐ I can convert binary ↔ octal and hex.</p>
    <p style="margin:6px 0;">☐ I can convert decimal ↔ hex.</p>
    <p style="margin:6px 0;">☐ I can use data units.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Computers use binary because:',
            options: ['Electronic switches have two states', 'It is the oldest system', 'It uses ten digits', 'It is easiest for humans'],
            correct: 0,
            explanation: 'On and off map naturally to 1 and 0.'
        },
        {
            question: '13₁₀ in binary is:',
            options: ['1011', '1110', '1101', '0111'],
            correct: 2,
            explanation: 'The answer is 1101. 13 = 8 + 4 + 1, giving 1101.'
        },
        {
            question: '110101₂ in decimal is:',
            options: ['53', '45', '35', '101'],
            correct: 0,
            explanation: 'The answer is 53. 32 + 16 + 4 + 1 = 53.'
        },
        {
            question: 'How many bits are grouped to make one octal digit?',
            options: ['4', '3', '8', '2'],
            correct: 1,
            explanation: 'Eight equals 2 to the power 3.'
        },
        {
            question: '101101₂ in octal is:',
            options: ['45', '2D', '55', '101'],
            correct: 2,
            explanation: 'Groups 101 and 101 give 5 and 5.'
        },
        {
            question: '11010110₂ in hexadecimal is:',
            options: ['D6', '6D', 'C6', '214'],
            correct: 0,
            explanation: 'The answer is D6. Groups 1101 = D and 0110 = 6.'
        },
        {
            question: 'In hexadecimal, the digit B stands for:',
            options: ['12', '10', '13', '11'],
            correct: 3,
            explanation: 'A = 10, B = 11, C = 12 and so on.'
        },
        {
            question: '2F₁₆ in decimal is:',
            options: ['32', '215', '17', '47'],
            correct: 3,
            explanation: 'The answer is 47. 2 × 16 + 15 = 47.'
        },
        {
            question: 'One byte is equal to:',
            options: ['4 bits', '1 024 bits', '16 bits', '8 bits'],
            correct: 3,
            explanation: 'A byte is a group of eight bits.'
        },
        {
            question: 'The largest number one byte can store is:',
            options: ['256', '128', '255', '1 024'],
            correct: 2,
            explanation: '11111111 in binary equals 255.'
        }
    ]
},
{
    name: '1.2 Laboratory Activity: Modelling the von Neumann Computer',
    type: 'lesson',
    duration: '80 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Laboratory Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧪 Modelling the von Neumann Computer</h2>
    <p style="font-size:16px;">In this activity you will build a physical model of the von Neumann architecture from locally available materials, then use it to “run” a short program by acting out the fetch–decode–execute cycle, moving address and data cards along the buses.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ef4444;">
    <h3 style="color:#bbdefb;margin-top:0;">🥽 Personal Protective Equipment and Safety</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What to do</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use scissors and craft knives carefully; cut away from your body; teacher supervises craft knives.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Glue</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use non-toxic glue; keep the room ventilated.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Movement</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Move carefully during the role-play; keep walkways clear.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use clean recycled materials only (no sharp tins or broken glass).</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clean-up</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tidy up and dispose of offcuts properly.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧪 Practical Investigation: Build a Model and Run a Program</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To create a model showing the structural elements of a von Neumann computer and use it to demonstrate the fetch–execute cycle.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Apparatus:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cardboard boxes or cartons</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Manila paper</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">String or wool in three colours (data, address, control buses)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Markers</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Scissors and glue</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Small cards or sticky notes</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials / software:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recycled bottle tops or paper slips (to represent data)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Program cards: 0: LOAD 5 · 1: ADD 6 · 2: STORE 7 · 3: HALT · 5: 12 · 6: 30</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle scissors safely.</li>
    <li>Do not climb on furniture when setting up.</li>
    <li>Keep strings at low height so no one trips.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Make labelled boxes for: Input, Output, Main Memory (with numbered slots 0–7) and CPU (containing CU, ALU and register pockets for PC, MAR, MDR, CIR and ACC).</li>
    <li>Connect the CPU and memory with three strings of different colours: data bus, address bus and control bus. Add a key.</li>
    <li>Place the program and data cards in the memory slots.</li>
    <li>Assign roles: Control Unit, ALU, Memory, Bus carrier and Recorder.</li>
    <li>Run the program: for each cycle, the CU copies the PC to the MAR, the bus carrier takes the address along the address string, memory sends the instruction back along the data string to the MDR, then the CIR, and the PC is increased.</li>
    <li>The CU decodes the instruction and the ALU executes it; the Recorder fills the trace table.</li>
    <li>Repeat until HALT, then check the value in memory slot 7.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Observation table:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Cycle</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">PC</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">MAR</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">MDR</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">CIR</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">ACC</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Memory slot 7</th>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Which bus string did the bus carrier walk along in both directions?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The data bus — data and instructions travel both to and from the CPU.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Where was the bottleneck in your model?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Only one carrier could use the bus at a time, so the CPU team waited — just like the von Neumann bottleneck.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> The model shows how the CPU, memory and I/O are linked by buses and how a stored program is executed one fetch–decode–execute cycle at a time.</p>
    <p><strong style="color:#fde68a;">Scientific explanation:</strong> Because the program and data share one memory and one set of buses, each step must wait for the previous transfer — the essence of the von Neumann design and its bottleneck.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors in This Practical</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mixing up address and data cards.</li>
    <li>Forgetting to increase the PC after each fetch.</li>
    <li>Storing the result in the wrong slot.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Engineers sketch and model systems before building them; your model is a simple version of a hardware design diagram.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Data Analysis</h3>
    <p>Present your model to another group and explain each part. Then answer: what change to your model would reduce waiting? (E.g. a second carrier with a separate instruction path — a Harvard idea — or a “cache” box next to the CPU holding frequently used values.)</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Laboratory Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> List five structural elements your model must show.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">CPU (CU, ALU, registers), main memory, input, output and buses.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> After running the program, what value is in slot 7?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">42.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how your model shows the stored-program concept.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Program instructions and data were stored in the same memory box.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why were three colours of string used?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To show the three different buses: data, address and control.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Suggest one improvement to make the model more realistic.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Add a clock signal (e.g. a bell for each step) or a cache box near the CPU.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Your Laboratory Report</h3>
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
            question: 'In the model, the string carrying slot numbers represents the:',
            options: ['Data bus', 'Control bus', 'Address bus', 'Power supply'],
            correct: 2,
            explanation: 'Slot numbers are memory addresses.'
        },
        {
            question: 'Storing program cards and data cards in the same box shows the:',
            options: ['Stored-program concept', 'Harvard architecture', 'Vacuum tube', 'Abacus'],
            correct: 0,
            explanation: 'Von Neumann keeps programs and data in one memory.'
        },
        {
            question: 'After LOAD 5, ADD 6, STORE 7 with values 12 and 30, slot 7 holds:',
            options: ['12', '30', '42', '18'],
            correct: 2,
            explanation: 'The accumulator holds 12 + 30, which is stored at slot 7.'
        },
        {
            question: 'The learner playing the Control Unit:',
            options: ['Adds the numbers', 'Directs each step of the cycle', 'Stores the program', 'Prints the output'],
            correct: 1,
            explanation: 'The CU coordinates fetching, decoding and executing.'
        },
        {
            question: 'Waiting for one bus carrier models the:',
            options: ['Moore’s law', 'Von Neumann bottleneck', 'Jacquard loom', 'Binary system'],
            correct: 1,
            explanation: 'A single shared path limits speed.'
        }
    ]
},
{
    name: '1.2 Quiz: Computer Architecture',
    type: 'lesson',
    duration: '30 min',
    exercises: 15,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz — Computer Architecture</h2>
    <p style="font-size:16px;">This quiz checks your understanding of lessons 1.2.1–1.2.3 and the laboratory activity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Instructions</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>This quiz has 15 multiple-choice questions.</li>
    <li>Read each question twice before you choose.</li>
    <li>Do not look back at the lessons during the quiz — test yourself honestly.</li>
    <li>When you finish, read the explanation for every answer, especially the ones you got wrong.</li>
    <li>Suggested time: 30 min.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎯 What This Quiz Covers</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Von Neumann architecture and the stored-program concept</li>
    <li>Functional elements, buses, interfaces and ports</li>
    <li>Von Neumann bottleneck, Harvard architecture, RISC and CISC</li>
    <li>Registers and the fetch–decode–execute cycle; performance factors</li>
    <li>Binary, octal and hexadecimal conversions; units of data</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 CBC Performance Levels</h3>
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
    <div style="background:#10233d;border-left:4px solid #1e88e5;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#bbdefb;font-weight:bold;">📝 Exam Tip</p>
    <div>For register questions, remember the path PC → MAR → memory → MDR → CIR. For conversions, group bits from the right and check by converting back.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'In the von Neumann architecture, instructions are stored:',
            options: ['In the same memory as data', 'In a separate memory', 'On the monitor', 'In the keyboard'],
            correct: 0,
            explanation: 'This is the stored-program concept.'
        },
        {
            question: 'Which part decodes instructions?',
            options: ['ALU', 'Output unit', 'Data bus', 'Control Unit'],
            correct: 3,
            explanation: 'The CU interprets each instruction.'
        },
        {
            question: 'The Harvard architecture uses:',
            options: ['One shared memory', 'No memory', 'Separate memories for instructions and data', 'Vacuum tubes'],
            correct: 2,
            explanation: 'Separate paths let instructions and data be fetched at once.'
        },
        {
            question: 'CISC processors are found in most:',
            options: ['Smartwatches', 'Basic calculators only', 'Desktop and laptop PCs', 'Abacuses'],
            correct: 2,
            explanation: 'Intel and AMD x86 chips are CISC.'
        },
        {
            question: 'RISC instructions are usually:',
            options: ['Fixed length and simple', 'Variable length and complex', 'Written on cards', 'Executed by the monitor'],
            correct: 0,
            explanation: 'Simplicity allows fast, efficient execution.'
        },
        {
            question: 'The address bus carries signals:',
            options: ['From memory to the CPU only', 'From the CPU to memory', 'In both directions equally', 'To the printer only'],
            correct: 1,
            explanation: 'Only the CPU places addresses on the address bus.'
        },
        {
            question: 'A 32-bit address bus can address:',
            options: ['32 bytes', '4 GB', '64 KB', '1 MB'],
            correct: 1,
            explanation: '2 to the power 32 bytes is 4 GB.'
        },
        {
            question: 'Which register is incremented during the fetch stage?',
            options: ['Program Counter', 'Accumulator', 'MDR', 'CIR'],
            correct: 0,
            explanation: 'The PC moves on to the next instruction’s address.'
        },
        {
            question: 'The MAR holds:',
            options: ['The result of a calculation', 'The address of the location being accessed', 'The clock speed', 'The instruction being decoded'],
            correct: 1,
            explanation: 'Memory Address Register holds an address.'
        },
        {
            question: 'More cache memory improves performance because:',
            options: ['The screen gets bigger', 'Programs get shorter', 'Fewer slow trips to RAM are needed', 'The clock slows down'],
            correct: 2,
            explanation: 'Cache keeps frequently used data near the CPU.'
        },
        {
            question: '25₁₀ in binary is:',
            options: ['10011', '11001', '11010', '10101'],
            correct: 1,
            explanation: 'The answer is 11001. 16 + 8 + 1 = 25.'
        },
        {
            question: '111100₂ in octal is:',
            options: ['47', '3C', '60', '74'],
            correct: 3,
            explanation: 'Groups 111 and 100 give 7 and 4.'
        },
        {
            question: 'FF₁₆ in decimal is:',
            options: ['255', '256', '240', '15'],
            correct: 0,
            explanation: 'The answer is 255. 15 × 16 + 15 = 255.'
        },
        {
            question: 'C8₁₆ in decimal is:',
            options: ['128', '208', '108', '200'],
            correct: 3,
            explanation: 'The answer is 200. 12 × 16 + 8 = 200.'
        },
        {
            question: 'How many bits are in 2 bytes?',
            options: ['8', '4', '16', '32'],
            correct: 2,
            explanation: 'The answer is 16. Each byte has 8 bits.'
        }
    ]
},
{
    name: '1.2 Assignment: Buyer’s Guide — Choosing the Right Computer',
    type: 'lesson',
    duration: '80 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 80 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Buyer’s Guide — Choosing the Right Computer</h2>
    <p style="font-size:16px;">In groups, you will produce a short buyer’s guide that explains computer architecture to ordinary customers and recommends suitable devices for three different users, based on processor type, cores, clock speed, cache, RAM and storage.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 80 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>A local electronics shop wants a simple guide for customers who do not understand specifications such as “Quad-core 2.4 GHz, 8 GB RAM, 256 GB SSD, ARM processor”. Your group will write a guide that explains these terms using what you learnt about architecture, and recommends devices for a student, a small-business owner and a graphic designer.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Collect the specifications of at least four devices (laptops, tablets or phones) from adverts, shop leaflets or approved websites.</li>
    <li>Explain in simple language what each specification means: processor type (RISC/CISC), cores, clock speed, cache, RAM and storage.</li>
    <li>Draw a simplified von Neumann diagram showing where each specification fits.</li>
    <li>Convert storage figures between MB, GB and TB and show your working (1 GB = 1 024 MB).</li>
    <li>Recommend one device for each of the three users and justify each choice with at least three specifications.</li>
    <li>Present your guide as a two-page leaflet or a short slide show.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Specification table for four devices</li>
    <li>Simplified architecture diagram</li>
    <li>Conversion calculations</li>
    <li>Recommendations with reasons</li>
    <li>Leaflet or slides</li>
    <li>Individual reflections (100 words each)</li>
    </ul>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📏 Assessment Rubric</h3>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explanations of specifications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">All terms explained accurately and simply, with examples</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Most terms explained accurately</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some terms explained</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few or incorrect explanations</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Architecture diagram</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete, accurate and clearly linked to specifications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complete and accurate</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Partly complete</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing or inaccurate</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Recommendations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Well-justified using three or more specifications for each user</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Justified using two specifications</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Weak justification</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No justification</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presentation and teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, attractive; all contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear; most contribute</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some disorganisation</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Poorly prepared</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use real specifications, not guesses.<br>Explain terms as if to a parent or customer with no technical background.<br>Do not copy marketing text — write in your own words.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which specification is most often misunderstood by buyers?</li>
    <li>How did architecture knowledge help my recommendations?</li>
    <li>How did our group share the work?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many devices should you collect specifications for?',
            options: ['One', 'At least four', 'Two', 'Twenty'],
            correct: 1,
            explanation: 'The brief asks for at least four devices.'
        },
        {
            question: 'A graphic designer would most benefit from:',
            options: ['The smallest storage', 'No RAM', 'A vacuum tube', 'More cores, more RAM and a fast processor'],
            correct: 3,
            explanation: 'Design software needs processing power and memory.'
        },
        {
            question: '1 GB equals:',
            options: ['100 MB', '1 000 KB', '1 024 MB', '8 MB'],
            correct: 2,
            explanation: 'In computing, 1 GB is 1 024 MB.'
        },
        {
            question: 'An ARM processor is an example of:',
            options: ['CISC', 'Harvard memory', 'A bus', 'RISC'],
            correct: 3,
            explanation: 'ARM chips use a reduced instruction set.'
        },
        {
            question: 'Writing the guide in your own words shows:',
            options: ['Integrity', 'Greed', 'Laziness', 'Copying'],
            correct: 0,
            explanation: 'The answer is Integrity. Original work is honest work.'
        }
    ]
},
{
    name: '1.2 Revision: Computer Architecture',
    type: 'lesson',
    duration: '30 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Revision</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Revision — Computer Architecture</h2>
    <p style="font-size:16px;">Review the key ideas of sub-strand 1.2 before moving on to 1.3 Input/Output Devices.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Revision Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🏗️ Von Neumann</p>
    <div>Stored-program concept: programs and data share main memory; CPU, memory, I/O linked by buses.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🧠 CPU parts</p>
    <div>CU (controls and decodes), ALU (arithmetic and logic), registers (fast storage).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🚌 Buses</p>
    <div>Data (two-way), address (one-way, 2ⁿ locations), control (signals).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">⏳ Bottleneck</p>
    <div>Shared bus makes the CPU wait; cache and Harvard ideas help.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">⚖️ RISC vs CISC</p>
    <div>RISC: simple, fixed-length, low power (ARM). CISC: complex, variable-length (x86).</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🔁 Fetch–execute</p>
    <div>PC → MAR → memory → MDR → CIR; PC + 1; decode; execute.</div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #64b5f6;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">🔢 Number systems</p>
    <div>Binary (2), octal (8, groups of 3), hex (16, groups of 4, A–F).</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Register</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Function</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">PC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Address of the next instruction</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">MAR</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Address being accessed</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">MDR</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Data or instruction read from/written to memory</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">CIR</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Instruction being decoded and executed</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">ACC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Results from the ALU</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Revision Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Revision</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> State the stored-program concept and why it was important.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Programs and data stored in the same memory; computers could be reprogrammed quickly without rewiring.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Describe the fetch stage of the cycle.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">PC copied to MAR; address sent on address bus with a read signal; instruction comes along data bus to MDR; copied to CIR; PC incremented.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> How many locations does a 24-bit address bus give?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2²⁴ = 16 777 216 (16 MB).</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Convert 150₁₀ to binary and hexadecimal.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">10010110₂; 96₁₆.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Convert 7B₁₆ to decimal and binary.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">7 × 16 + 11 = 123; 01111011₂.</div>
    </details>
    </div>
    </div>
    <div style="background:#0b1e3a;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can describe the von Neumann architecture.</p>
    <p style="margin:6px 0;">☐ I can explain buses and registers.</p>
    <p style="margin:6px 0;">☐ I can describe the fetch–execute cycle.</p>
    <p style="margin:6px 0;">☐ I can compare RISC and CISC.</p>
    <p style="margin:6px 0;">☐ I can convert between number bases.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Who described the stored-program architecture in 1945?',
            options: ['Charles Babbage', 'Blaise Pascal', 'Ada Lovelace', 'John von Neumann'],
            correct: 3,
            explanation: 'His report on the EDVAC set out the design.'
        },
        {
            question: 'The ALU performs:',
            options: ['Printing', 'Storage of files', 'Network connection', 'Arithmetic and logic operations'],
            correct: 3,
            explanation: 'Arithmetic Logic Unit does calculations and comparisons.'
        },
        {
            question: 'The control bus carries:',
            options: ['Only data', 'Control and timing signals', 'Only addresses', 'Electricity for the monitor'],
            correct: 1,
            explanation: 'Read, write, clock and interrupt signals travel here.'
        },
        {
            question: 'Which architecture is better for battery-powered devices?',
            options: ['RISC', 'CISC', 'Mechanical', 'Vacuum tube'],
            correct: 0,
            explanation: 'The answer is RISC. RISC uses less power.'
        },
        {
            question: 'The correct cycle order is:',
            options: ['Decode, fetch, execute', 'Execute, decode, fetch', 'Fetch, decode, execute', 'Fetch, execute, decode'],
            correct: 2,
            explanation: 'An instruction must be fetched before it can be decoded.'
        },
        {
            question: '1010₂ in hex is:',
            options: ['10', 'B', 'A', '12'],
            correct: 2,
            explanation: '1010 is ten, which is A in hex.'
        },
        {
            question: '64₁₀ in octal is:',
            options: ['64', '100', '40', '80'],
            correct: 1,
            explanation: '64 = 1 × 8² + 0 + 0, so 100 in octal.'
        },
        {
            question: 'A nibble is:',
            options: ['4 bits', '8 bits', '2 bytes', '1 024 bytes'],
            correct: 0,
            explanation: 'The answer is 4 bits. Half a byte is a nibble.'
        }
    ]
},
{
    name: '1.2 Summary: Computer Architecture',
    type: 'lesson',
    duration: '15 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #0d47a1, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #64b5f6;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Strand 1.0 Foundation of Computer Science · Sub-strand 1.2 Computer Architecture</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0b1e3a;border:1px solid #64b5f6;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 15 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary — Computer Architecture</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> A computer’s architecture — a CPU, one memory holding programs and data, input/output and the buses that join them — decides how it runs instructions, how fast it can work and how it represents all data in binary.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Sub-strand</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Computer architecture is the design and interconnection of a computer’s parts.</li>
    <li>The von Neumann architecture stores programs and data together in main memory.</li>
    <li>The CPU has a control unit, an ALU and registers; I/O connects through interfaces and ports.</li>
    <li>The data bus is two-way, the address bus one-way (2ⁿ locations) and the control bus carries signals.</li>
    <li>The shared bus creates the von Neumann bottleneck; cache helps reduce it.</li>
    <li>RISC uses simple, low-power instructions; CISC uses complex instructions.</li>
    <li>The fetch–decode–execute cycle uses PC, MAR, MDR, CIR and ACC.</li>
    <li>Performance depends on clock speed, cores, cache, bus width and architecture.</li>
    <li>Data is represented in binary; octal and hexadecimal are shorthand for binary.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗂️ Lesson by Lesson</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Lesson</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What you learnt</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">One thing to practise</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Von Neumann, RISC and CISC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stored program, functional elements, bottleneck, RISC/CISC</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Draw the diagram from memory</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Buses and the cycle</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Three buses, registers, fetch–execute, performance</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Practise trace tables</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 Number systems</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Binary, octal, hex conversions; data units</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Group from the right</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Laboratory activity</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a model and running a program</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Increase the PC after each fetch</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">architecture</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">stored-program concept</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">control unit</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ALU</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">register</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">data bus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">address bus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">control bus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">bottleneck</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">RISC</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">CISC</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">fetch–decode–execute</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">binary</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">octal</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hexadecimal</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">byte</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Understanding architecture helps you choose devices wisely, fix problems and, later, write faster programs.</div>
    </div>
    <div style="background:#0b1e3a;border-left:4px solid #64b5f6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>Sub-strand 1.3 Input/Output Devices explores how data gets into and out of the computer.</div>
    </div>
    <div style="background:#0c2d5c;padding:20px;border-radius:12px;border:1px solid #64b5f6;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ describe the von Neumann architecture</p>
    <p style="margin:6px 0;">✔️ analyse how its elements communicate</p>
    <p style="margin:6px 0;">✔️ model the architecture</p>
    <p style="margin:6px 0;">✔️ convert between binary, octal and hexadecimal</p>
    <p style="margin:6px 0;">✔️ appreciate the importance of architecture</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of 1.2 is that architecture decides:',
            options: ['The colour of the case', 'The price of software only', 'The shape of the keyboard', 'How a computer runs instructions and how fast'],
            correct: 3,
            explanation: 'Design determines execution and performance.'
        },
        {
            question: 'Which lesson covered RISC and CISC?',
            options: ['1.2.1', '1.2.2', '1.2.3', '1.1.3'],
            correct: 0,
            explanation: 'Instruction-set designs were taught with the von Neumann architecture.'
        },
        {
            question: 'Which register holds the instruction being executed?',
            options: ['PC', 'CIR', 'MAR', 'MDR'],
            correct: 1,
            explanation: 'The current instruction register holds it.'
        },
        {
            question: 'What comes next?',
            options: ['1.1 Evolution of Computers', '1.3 Input/Output Devices', '2.1 Data Communication', '1.7 Computer Setup'],
            correct: 1,
            explanation: 'I/O devices follow architecture in Strand 1.0.'
        },
        {
            question: 'Hexadecimal groups bits in:',
            options: ['Threes', 'Eights', 'Fours', 'Twos'],
            correct: 2,
            explanation: 'Sixteen equals 2 to the power 4.'
        }
    ]
}
],
          stats:{lessons:19,exercises:117,quizzes:20,projects:2,duration:'13 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'Which early device used beads on rods to perform calculations?',
                  options: ['Pascaline', 'Jacquard loom', 'Abacus', 'Slide rule'],
                  correct: 2,
                  explanation: 'The abacus represents numbers with beads that are moved along rods; it is one of the oldest calculating aids.'
              },
              {
                  question: 'Who designed the Analytical Engine, a mechanical general-purpose computer?',
                  options: ['Blaise Pascal', 'Charles Babbage', 'John Napier', 'Herman Hollerith'],
                  correct: 1,
                  explanation: 'Babbage designed the Analytical Engine in the 1830s with a mill, a store and punched-card input, ideas found in modern computers.'
              },
              {
                  question: 'The Jacquard loom is important in computing history because it used:',
                  options: ['Punched cards to control a sequence of operations', 'Vacuum tubes', 'Transistors', 'A keyboard'],
                  correct: 0,
                  explanation: 'Its punched cards were an early form of stored instructions and inspired card input in later machines.'
              },
              {
                  question: 'First-generation computers such as ENIAC used:',
                  options: ['Vacuum tubes', 'Transistors', 'Integrated circuits', 'Microprocessors'],
                  correct: 0,
                  explanation: 'Vacuum tubes acted as switches; they were large, hot and failed often.'
              },
              {
                  question: 'Fourth-generation computers are defined by the use of:',
                  options: ['Vacuum tubes', 'Microprocessors built with VLSI', 'Magnetic drums only', 'Relays'],
                  correct: 1,
                  explanation: 'Very-large-scale integration put a whole CPU on one chip, making personal computers possible.'
              },
              {
                  question: 'In the von Neumann architecture, programs and data are:',
                  options: ['Kept in separate memories', 'Never stored', 'Stored only on paper', 'Stored together in the same memory'],
                  correct: 3,
                  explanation: 'The stored-program concept places instructions and data in one shared main memory.'
              },
              {
                  question: 'Which bus carries the address of the memory location to be accessed?',
                  options: ['Data bus', 'Address bus', 'Control bus', 'USB bus'],
                  correct: 1,
                  explanation: 'The CPU places the location number on the address bus; the data itself travels on the data bus.'
              },
              {
                  question: 'Which register holds the address of the next instruction to be fetched?',
                  options: ['Accumulator', 'Memory Data Register', 'Current Instruction Register', 'Program Counter (PC)'],
                  correct: 3,
                  explanation: 'The PC points to the next instruction and is incremented after each fetch.'
              },
              {
                  question: 'The correct order of the machine cycle is:',
                  options: ['Execute, fetch, decode', 'Decode, execute, fetch', 'Fetch, decode, execute', 'Store, fetch, print'],
                  correct: 2,
                  explanation: 'The CPU fetches an instruction, decodes it, then executes it, and repeats.'
              },
              {
                  question: 'The decimal number 13 in binary is:',
                  options: ['1011', '1110', '1001', '1101'],
                  correct: 3,
                  explanation: '13 = 8 + 4 + 1, so the bits for 8, 4 and 1 are set: 1101.'
              },
              {
                  question: 'The binary number 11111111 in hexadecimal is:',
                  options: ['FF', 'F8', '255', 'EE'],
                  correct: 0,
                  explanation: 'Split into 1111 and 1111; each group is F, giving FF (which is 255 in decimal).'
              },
              {
                  question: 'RISC processors are characterised by:',
                  options: ['Very many complex instructions', 'No registers', 'A small set of simple instructions that run in about one clock cycle', 'Vacuum tubes'],
                  correct: 2,
                  explanation: 'Reduced Instruction Set Computers use simple, fixed-length instructions, common in phones.'
              }
          ]}
);