// Eschool course: World History (USA, high school, C3 Framework aligned)
// Loaded only for learners whose country is the USA. The list of the USA's
// course files is COURSE_FILES['US'] in backen.py.
(window.ESCHOOL_COURSES = window.ESCHOOL_COURSES || []).push(
        { id:'world-history-us', name:'World History', code:'WH 1', level:'grade-9', iconStyle:'fas', icon:'fa-landmark', color:'#bf360c',
          category:'Social Sciences',
          description:'Think like a historian: analyze sources and artifacts, trace early humans out of Africa, explain the Neolithic Revolution and the rise of civilization, and compare Mesopotamia, Egypt and Nubia, the Indus Valley and ancient China.',
          longDescription:'World History is a high-school social studies course aligned to the C3 Framework for Social Studies (Dimension 2: History and Geography; Dimension 3: Evaluating Sources and Using Evidence) and the National Standards for World History. Unit 1, Beginnings of Civilization, teaches historical thinking skills (chronology, primary and secondary sources, sourcing with HIPP), early human migration, the Neolithic Revolution and the characteristics of civilization, and the river valley civilizations of Mesopotamia, Egypt and Nubia, the Indus Valley and China. Later units cover classical civilizations, world religions, post-classical empires, the Renaissance and Reformation, exploration and global exchange, revolutions, industrialization and imperialism, the world wars, the Cold War and globalization. Every lesson includes primary-source work, historical-thinking practice, an investigation, a quiz, an assignment with a four-level rubric, and a review.',
          modules:[
{
    name: '1.0 Beginnings of Civilization — Unit Overview',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Unit Overview</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🗺️ Unit 1.0: Beginnings of Civilization</h2>
    <p style="font-size:16px;">Welcome to World History. For most of the human story, people lived in small groups that moved from place to place, hunting animals and gathering plants. Then, about 12,000 years ago, something changed: people began to farm. Within a few thousand years, the first cities, governments, writing systems and empires appeared.</p>
    <p style="font-size:16px;">In this unit you will learn how historians and archaeologists know about the distant past, and you will investigate how and why the first civilizations rose along great rivers in Southwest Asia, Africa, South Asia and East Asia.</p>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0;"><strong style="color:#e3f2fd;">❓ Essential question for this unit:</strong> How did the shift to farming lead to the rise of the first civilizations, and how do we know?</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 What This Unit Is About</h3>
    <p>This unit has two topics. The first builds your historian’s toolkit and follows humans from the earliest hunter-gatherers to the first farming villages. The second compares four river valley civilizations — the places where cities, writing and organized government first developed.</p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Topic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Focus</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Standards connection</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1 Early Humans and the Neolithic Revolution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Historical thinking and sources; Paleolithic life and migration; the Neolithic Revolution and the characteristics of civilization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C3 D2.His.1, D2.His.2, D2.His.10, D2.Geo; National World History Standards Era 1</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2 River Valley Civilizations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mesopotamia; Egypt and Nubia; the Indus Valley and ancient China</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C3 D2.His.1, D2.His.14, D2.His.16; National World History Standards Era 2</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Unit Map</h3>
    <p>Each topic has three lessons, a historical investigation, a quiz, an assignment, a review and a summary.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Early Humans and the Neolithic Revolution <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: From Foragers to Farmers</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.1.1 Thinking Like a Historian</li>
    <li>1.1.2 Paleolithic Life and Human Migration</li>
    <li>1.1.3 The Neolithic Revolution and Civilization</li>
    <li>🧭 Investigation: What Can Artifacts Tell Us?</li>
    <li>📝 Quiz</li>
    <li>📂 Assignment</li>
    <li>🔁 Revision</li>
    <li>🧾 Summary</li>
    </ul>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 River Valley Civilizations <span style="color:#94a3b8;font-weight:normal;font-size:13px;">· Theme: Rivers, Cities and Kings</span>
    </p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>1.2.1 Mesopotamia: The Land Between the Rivers</li>
    <li>1.2.2 Ancient Egypt and Nubia</li>
    <li>1.2.3 The Indus Valley and Ancient China</li>
    <li>🧭 Investigation: Comparing River Valley Civilizations</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chronological reasoning (D2.His.1–2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Placing events on timelines and explaining change and continuity.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sourcing (D2.His.10–12)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing who made a source, when, why and for whom.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causation (D2.His.14)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining the causes and effects of the Neolithic Revolution.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparison</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing the political, economic and social features of river civilizations.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Argumentation (D2.His.16)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing claims supported by evidence from several sources.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for all cultures</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Open-mindedness</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty with evidence</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Geography and environment</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Government and law</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Technology and innovation</span>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 How to Study This Unit</p>
    <div>Keep a history notebook with three sections: a running timeline, a vocabulary list and a source log. In the source log, record every primary source you study and what it tells you.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'About how long ago did people begin to farm?',
            options: ['About 1,000 years ago', 'About 1 million years ago', 'About 200 years ago', 'About 12,000 years ago'],
            correct: 3,
            explanation: 'The Neolithic Revolution began roughly 12,000 years ago.'
        },
        {
            question: 'Where did the first civilizations develop?',
            options: ['Along major rivers', 'On high mountain tops', 'In polar regions', 'In the middle of deserts far from water'],
            correct: 0,
            explanation: 'Rivers provided water, fertile soil and transportation.'
        },
        {
            question: 'Topic 1.2 of this unit compares:',
            options: ['Modern nations', 'River valley civilizations', 'Medieval kingdoms', 'Industrial cities'],
            correct: 1,
            explanation: 'It compares Mesopotamia, Egypt, the Indus Valley and China.'
        },
        {
            question: 'C3 standard D2.His.14 is about:',
            options: ['Spelling', 'Causes and effects in history', 'Graphing equations', 'Chemical reactions'],
            correct: 1,
            explanation: 'D2.His.14 deals with causation.'
        },
        {
            question: 'A source log is used to:',
            options: ['List your friends', 'Draw maps only', 'Record the sources you study and what they show', 'Keep track of homework due dates only'],
            correct: 2,
            explanation: 'Historians keep careful records of their evidence.'
        },
        {
            question: 'Which region is NOT one of the four river valleys studied?',
            options: ['The Amazon basin', 'Mesopotamia', 'The Nile Valley', 'The Indus Valley'],
            correct: 0,
            explanation: 'The unit studies Mesopotamia, the Nile, the Indus and the Huang He.'
        }
    ]
},
{
    name: '1.0 Beginnings of Civilization — Learning Objectives',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Learning Objectives</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🎯 Learning Objectives for Unit 1.0</h2>
    <p style="font-size:16px;">These objectives are based on the C3 Framework for Social Studies and the National Standards for World History. Check them at the start and end of each topic.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🌟 Unit Goals</h3>
    <p>By the end of this unit, you should be able to:</p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Use chronology, including BCE and CE dates, to place events in order and measure time.</li>
    <li>Distinguish primary from secondary sources and evaluate a source’s reliability and limits. (D2.His.10)</li>
    <li>Explain how early humans adapted to their environments and migrated across the world.</li>
    <li>Analyze the causes and effects of the Neolithic Revolution. (D2.His.14)</li>
    <li>Identify the characteristics of civilization and explain how geography shaped early civilizations. (D2.Geo)</li>
    <li>Compare the political, economic and social structures of the river valley civilizations, using evidence from multiple sources. (D2.His.16)</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📋 Learning Objectives and Standards by Topic</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.1 Early Humans and the Neolithic Revolution</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Read and build timelines using BCE and CE.</li>
    <li>Analyze a source using HIPP (historical context, intended audience, purpose, point of view).</li>
    <li>Describe Paleolithic life and the spread of humans out of Africa.</li>
    <li>Explain the causes and effects of farming and list the characteristics of civilization.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Was the shift to farming the most important change in human history?</em>
    </p>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0;color:#bbdefb;font-weight:bold;">1.2 River Valley Civilizations</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Tigris and Euphrates shaped Mesopotamia, and analyze the Code of Hammurabi.</li>
    <li>Describe Egyptian government, religion and achievements, and the role of Nubia.</li>
    <li>Describe the cities of the Indus Valley and the Shang and Zhou dynasties of China.</li>
    <li>Compare the four civilizations using a structured chart and evidence.</li>
    </ul>
    <p style="margin:6px 0 0 0;color:#f9a8d4;">❓ <em>Why did the first civilizations develop along rivers, and how were they alike and different?</em>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You make insightful, well-supported claims, use specific evidence from several sources and explain context and perspective.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Proficient (3)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You make clear claims supported by accurate evidence and explanation.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Developing (2)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You describe events accurately but claims or evidence are incomplete.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Beginning (1)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">You recall some facts but do not yet make or support claims.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>History is not just memorizing dates. It is asking questions about the past and answering them with evidence.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'HIPP stands for:',
            options: ['History, Ideas, People, Places', 'Hypothesis, Investigation, Proof, Presentation', 'Heading, Intro, Paragraph, Proof', 'Historical context, Intended audience, Purpose, Point of view'],
            correct: 3,
            explanation: 'HIPP is a tool for sourcing documents.'
        },
        {
            question: 'D2.His.10 asks students to:',
            options: ['Graph data', 'Write poetry', 'Solve equations', 'Detect limitations in historical evidence'],
            correct: 3,
            explanation: 'It is about the limits of evidence.'
        },
        {
            question: 'Which question fits Topic 1.1?',
            options: ['Was the shift to farming the most important change in human history?', 'Who won World War II?', 'What is photosynthesis?', 'How do you solve for x?'],
            correct: 0,
            explanation: 'It is Topic 1.1’s essential question.'
        },
        {
            question: 'At the Proficient (3) level, you:',
            options: ['Only recall dates', 'Make clear claims supported by accurate evidence', 'Avoid using sources', 'Copy the textbook'],
            correct: 1,
            explanation: 'Proficient means claims with evidence.'
        },
        {
            question: 'Comparing civilizations means:',
            options: ['Listing only one civilization', 'Finding similarities and differences', 'Ignoring evidence', 'Memorizing dates only'],
            correct: 1,
            explanation: 'Comparison looks at likenesses and differences.'
        },
        {
            question: 'History is best described as:',
            options: ['Asking questions about the past and answering them with evidence', 'Memorizing dates only', 'Guessing about the past', 'Reading stories for fun only'],
            correct: 0,
            explanation: 'Evidence is at the heart of history.'
        }
    ]
},
{
    name: '1.0 Beginnings of Civilization — Introduction',
    type: 'lesson',
    duration: '25 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Introduction</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🚪 Introduction: How Do We Know What Happened Before Writing?</h2>
    <p style="font-size:16px;">Imagine archaeologists 10,000 years from now digging up your bedroom. There are no written records — only objects. What would your phone, your shoes, your books and your trash tell them about your life? What might they get wrong?</p>
    <p style="font-size:16px;">That is exactly the challenge historians face when they study the earliest humans. For most of human history there was no writing, so we must read the past from bones, tools, paintings and the remains of homes.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 History vs. Prehistory</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Meaning</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Prehistory</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The time before writing was invented — studied mainly through artifacts and fossils</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">History</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The time since writing began — studied through written records as well as artifacts</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Archaeology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The study of past human life through material remains</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Anthropology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The study of human cultures and societies</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Your Historian’s Toolkit</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">artifact</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">fossil</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">primary source</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">secondary source</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">chronology</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">BCE / CE</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">civilization</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">culture</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">surplus</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">specialization</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">irrigation</span><span style="background:#0b1a2e;border:1px solid #ffcc80;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dynasty</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">✏️ Quick-Write (5 minutes)</h3>
    <p>List five objects from your daily life. For each one, write what a future archaeologist might conclude about you — and one thing they might misunderstand.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗺️ Where in the World?</h3>
    <p>On a blank world map, locate and label: Africa, Southwest Asia, the Tigris, Euphrates, Nile, Indus and Huang He (Yellow) rivers. You will use this map throughout the unit.</p>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Before You Begin</p>
    <div>Bring your history notebook and a world map to every lesson. When you see a date, add it to your running timeline.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Prehistory is the period:',
            options: ['Before writing was invented', 'After the year 1 CE', 'Of the Middle Ages', 'Of modern history'],
            correct: 0,
            explanation: 'Prehistory comes before written records.'
        },
        {
            question: 'Archaeology is the study of:',
            options: ['Stars and planets', 'Past human life through material remains', 'Living cells', 'Modern governments'],
            correct: 1,
            explanation: 'Archaeologists study artifacts and sites.'
        },
        {
            question: 'An object made by humans, such as a tool or a pot, is called a(n):',
            options: ['Artifact', 'Fossil', 'Dynasty', 'Surplus'],
            correct: 0,
            explanation: 'Artifacts are human-made objects.'
        },
        {
            question: 'Why is studying prehistory challenging?',
            options: ['There are too many written records', 'No objects survive', 'There are no written records', 'Historians are not allowed to study it'],
            correct: 2,
            explanation: 'We must rely on artifacts and fossils.'
        },
        {
            question: 'Which river is in East Asia?',
            options: ['Nile', 'Tigris', 'Euphrates', 'Huang He (Yellow River)'],
            correct: 3,
            explanation: 'The answer is Huang He (Yellow River). The Huang He is in China.'
        },
        {
            question: 'Anthropology is the study of:',
            options: ['Rocks', 'Weather', 'Numbers', 'Human cultures and societies'],
            correct: 3,
            explanation: 'The answer is Human cultures and societies. “Anthropo-” means human.'
        }
    ]
},
{
    name: '1.1.1 Thinking Like a Historian',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: From Foragers to Farmers</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.1: Thinking Like a Historian</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how historians measure time with BCE and CE, how they tell primary sources from secondary sources, and how to analyze a source using HIPP.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Every claim about the past — in a textbook, a documentary or a social-media post — rests on evidence. Learning to question sources protects you from misinformation and makes you a stronger thinker in every subject.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📰 Judging news stories</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📱 Checking social-media claims</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Museums and archives</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎬 Historical films</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Courtrooms</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 Family history research</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use chronology, including BCE and CE, to order events. (D2.His.1)</li>
    <li>Analyze primary and secondary sources and their limits. (D2.His.10)</li>
    <li>Describe Paleolithic life and the migration of early humans. (D2.Geo)</li>
    <li>Explain the causes and effects of the Neolithic Revolution and identify the characteristics of civilization. (D2.His.14)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Read and order dates using BCE and CE.</li>
    <li>Calculate the time between two dates.</li>
    <li>Distinguish primary from secondary sources.</li>
    <li>Analyze a source using HIPP.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How do historians know what happened in the past?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In middle school you used timelines and read about ancient peoples. Now you will learn the methods historians use to investigate them.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Two friends describe the same basketball game. One says it was “the most unfair game ever.” The other says “we lost fairly.” Which one is telling the truth? To decide, you would ask: Who are they? Which team do they support? Did they actually see the game? Historians ask the same kinds of questions about every source.</p>
    <p>A <strong>primary source</strong> was created at the time being studied, by someone who experienced or witnessed it — a letter, a law code, a tool, a photograph. A <strong>secondary source</strong> was created later by someone interpreting primary sources — a textbook, a documentary, a history article.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Primary = from the time. Secondary = about the time, made later.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Historians organize time using a <strong>chronology</strong>, an order of events. Most of the world today uses a calendar that labels years as <strong>BCE</strong> (Before the Common Era) and <strong>CE</strong> (Common Era). These labels refer to the same years as the older BC and AD. Large spans of time are often described in <strong>centuries</strong> (100 years) and <strong>millennia</strong> (1,000 years).</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Dates far in the past are often given as “years ago” or with “c.” (circa), meaning “about.” For example, c. 3000 BCE means “around 3000 BCE.”</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">chronology</strong>
    </p>
    <p style="margin:6px 0;">The arrangement of events in the order in which they happened.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> any period</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A timeline shows chronology.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">BCE / CE</strong>
    </p>
    <p style="margin:6px 0;">Before the Common Era / Common Era; labels for years before and after year 1.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> used worldwide</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Great Pyramid was built c. 2560 BCE.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">primary source</strong>
    </p>
    <p style="margin:6px 0;">A source created at the time by someone who experienced the event.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> from the period studied</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A clay tablet from ancient Sumer.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">secondary source</strong>
    </p>
    <p style="margin:6px 0;">A source created later that interprets primary sources.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> made after the period</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Your textbook chapter on Egypt.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">artifact</strong>
    </p>
    <p style="margin:6px 0;">An object made or used by humans in the past.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> any period</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A stone spear point.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">bias</strong>
    </p>
    <p style="margin:6px 0;">A one-sided point of view that can affect how a source presents events.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> any period</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A king’s inscription may exaggerate his victories.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Measuring Time: BCE and CE</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 200" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Reading BCE and CE Dates</text><line x1="40" y1="100" x2="660" y2="100" stroke="#ffcc80" stroke-width="3"/><polygon points="672,100 660,93 660,107" fill="#ffcc80"/><polygon points="28,100 40,93 40,107" fill="#ffcc80"/><line x1="50" y1="92" x2="50" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="50" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">2500 BCE</text><line x1="110" y1="92" x2="110" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="110" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">2000 BCE</text><line x1="170" y1="92" x2="170" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="170" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">1500 BCE</text><line x1="230" y1="92" x2="230" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="230" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">1000 BCE</text><line x1="290" y1="92" x2="290" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="290" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">500 BCE</text><line x1="350" y1="92" x2="350" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="350" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">1 CE</text><line x1="410" y1="92" x2="410" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="410" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">500 CE</text><line x1="470" y1="92" x2="470" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="470" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">1000 CE</text><line x1="530" y1="92" x2="530" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="530" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">1500 CE</text><line x1="590" y1="92" x2="590" y2="108" stroke="#ffcc80" stroke-width="2"/><text x="590" y="128" fill="#cbd5e1" font-size="11" text-anchor="middle">2000 CE</text><text x="175" y="66" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">BCE: Before the Common Era</text><text x="175" y="84" fill="#cbd5e1" font-size="12" text-anchor="middle">numbers get SMALLER as time moves forward</text><text x="525" y="66" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">CE: Common Era</text><text x="525" y="84" fill="#cbd5e1" font-size="12" text-anchor="middle">numbers get LARGER as time moves forward</text><text x="350" y="160" fill="#86efac" font-size="13" text-anchor="middle">There is no year 0: the calendar goes from 1 BCE straight to 1 CE.</text><text x="350" y="182" fill="#94a3b8" font-size="12" text-anchor="middle">BCE and CE mean the same as the older labels BC and AD.</text>
    </svg>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Calculating elapsed time</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> How many years passed between 3000 BCE and 500 BCE? Between 500 BCE and 500 CE?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> If both dates are BCE, subtract. If one is BCE and one is CE, add — then subtract 1, because there is no year 0.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Both BCE</strong>
    </p>
    <div style="margin:6px 0 0 34px;">3000 − 500 = 2,500 years</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Across the line</strong>
    </p>
    <div style="margin:6px 0 0 34px;">500 + 500 = 1,000, minus 1 for the missing year 0 = 999 years</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Check with a timeline</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Count the gap on the number line to confirm</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> 2,500 years; 999 years (many people round this to about 1,000).</div>
    <p style="margin:8px 0 0 0;color:#fca5a5;">⚠️ <strong>Common mistake:</strong> Thinking 500 BCE is later than 3000 BCE because 500 is a smaller number. In BCE, smaller numbers are later.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Primary and Secondary Sources</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Primary sources</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Secondary sources</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A clay tablet written in ancient Sumer</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A museum website explaining Sumerian writing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A stone tool found at an archaeological site</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An archaeologist’s book about early tools</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A soldier’s diary from a war</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A documentary about the war</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A photograph taken during an event</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A textbook chapter that uses the photograph</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Primary sources are not automatically “true,” and secondary sources are not automatically “false.” Every source must be questioned.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Sourcing with HIPP</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Letter</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Question</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Why it matters</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">H — Historical context</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">What was happening when and where this was made?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Events shape what people write and create.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">I — Intended audience</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Who was this made for?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">People write differently for kings, citizens or gods.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P — Purpose</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Why was it made?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A source made to persuade or glorify may exaggerate.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">P — Point of view</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Who made it, and what was their position?</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A ruler, a priest and a farmer would see events differently.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">📖 Reading Text</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Sample source: a royal inscription (description)</p>
    <p style="margin:8px 0;"><em>An ancient king orders a stone monument carved with his picture standing over defeated enemies. The inscription praises his strength and says the gods chose him to rule. It was placed in the center of his capital city.</em>
    </p>
    </div>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 2: Applying HIPP</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Use HIPP to analyze the royal inscription. How reliable is it as evidence of how the battle really went?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Historical context</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Made after a war, when the king wanted to show his power.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Intended audience</strong>
    </p>
    <div style="margin:6px 0 0 34px;">His own people and visitors to the capital.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Purpose</strong>
    </p>
    <div style="margin:6px 0 0 34px;">To glorify the king and prove the gods favored him.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Point of view</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The king’s own view — the defeated side is not heard.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> It is useful evidence of how the king wanted to be seen, but it is unreliable as a full account of the battle, because it was made to glorify him and leaves out other perspectives.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A biased source can still be valuable — it tells us about the beliefs and goals of the people who made it.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Is a textbook a primary or secondary source?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Secondary — it was written later and interprets other sources.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which is earlier: 1200 BCE or 800 BCE?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1200 BCE.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What does the first P in HIPP stand for?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Purpose.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect the ideas, beliefs and cultures of classmates and of the people we study, even when they differ from your own.</li>
    <li>Disagree with ideas, not people, and support every claim with evidence.</li>
    <li>Treat difficult topics — such as slavery, war and inequality — seriously and with care.</li>
    <li>Use school-approved sources and give credit to every source you quote or paraphrase.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Historical Thinking Skills You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Chronological reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sourcing</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Contextualization</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Detecting bias</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Corroborating sources</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Historians rarely trust a single source. They <strong>corroborate</strong> — compare several sources to see where they agree and disagree. If an inscription, an archaeological site and a later historian all describe a city being destroyed, we can be more confident it happened. If only the victor’s monument mentions a battle, we should be cautious.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>What sources might future historians use to study your school year? Which would be most and least reliable?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffcc80;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Checking who created a post, when and why — sourcing — is the best defense against fake news and misleading videos online.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Scientists studying climate history use “sources” such as ice cores and tree rings, which they date and compare just like historians.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Journalists, lawyers, archivists, museum curators and intelligence analysts all evaluate sources for a living.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> How many years between 1500 BCE and 1000 BCE?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Both BCE: subtract.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">500 years.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Is a stone tool a primary or secondary source?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Was it made at the time?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Primary — it is an artifact from the time.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> A source was written to praise a ruler. Which part of HIPP does this describe?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Why was it made?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Purpose.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Sort ten sources your teacher gives you into primary and secondary, and explain one choice in a sentence.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Each partner describes a school event in a way that is deliberately biased. Swap and use HIPP to find the bias.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Build a human timeline: each student holds a date card (some BCE, some CE) and the group lines up in the correct order.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Visit the online collection of a major museum. Choose one ancient artifact and record its date, place and what it might tell us.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Define primary source.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A source created at the time by someone who experienced or witnessed the event.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Put in order: 500 CE, 2000 BCE, 100 BCE.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">2000 BCE, 100 BCE, 500 CE.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> How many years passed between 2500 BCE and 1500 BCE?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1,000 years.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain why a biased source can still be useful.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows the beliefs, goals and point of view of the people who created it.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ffcc80;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> How many years passed from 200 BCE to 200 CE? Explain your method.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">200 + 200 = 400, minus 1 because there is no year 0, giving 399 years.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> You see a viral video claiming something happened yesterday. List three HIPP-style questions you would ask.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Who made it and what is their point of view? Who was it made for? Why was it made? What was the context?</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.10: Explain one limitation of using only a ruler’s monuments to study an ancient civilization.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Monuments show the ruler’s point of view and were made to glorify him, so they may exaggerate and leave out ordinary people’s experiences.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Historians use chronology to order events; in BCE dates, larger numbers are earlier, and there is no year 0. Primary sources come from the time studied; secondary sources interpret them later. HIPP — historical context, intended audience, purpose and point of view — helps us judge a source’s reliability and limits.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>BCE counts down; CE counts up; no year 0.</li>
    <li>Primary = from the time; secondary = later interpretation.</li>
    <li>HIPP: context, audience, purpose, point of view.</li>
    <li>Corroborate with several sources.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>c. means “about.”</li>
    <li>Every source has a point of view.</li>
    <li>Biased sources can still be useful.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Ordering BCE dates like CE dates.</li>
    <li>Assuming primary sources are always true.</li>
    <li>Forgetting there is no year 0.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Draw a quick timeline for any date problem.</li>
    <li>Write HIPP in the margin of every document.</li>
    <li>Ask “Who is missing from this source?”</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Identify the source type and explain why.</li>
    <li>Use HIPP language in source-analysis answers.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.1 Chronology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ordering and measuring time.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.10 Sourcing</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Detecting limits of evidence.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.11 Usefulness</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Judging how useful a source is for a question.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Honesty</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Skepticism</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Open-mindedness</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Media literacy</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Citizenship</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Every time you decide whether to believe and share something online, you are doing what historians do.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Create a timeline of ten important events in your own life.</li>
    <li>Find one primary and one secondary source about the same historical event and compare them.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which sources do I usually trust without questioning?</li>
    <li>How will HIPP change how I read online?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Chronology</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Order of events.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Primary source</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Made at the time.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Secondary source</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Made later.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Bias</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A one-sided view.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can read and order BCE and CE dates.</p>
    <p style="margin:6px 0;">☐ I can calculate elapsed time.</p>
    <p style="margin:6px 0;">☐ I can tell primary from secondary sources.</p>
    <p style="margin:6px 0;">☐ I can analyze a source with HIPP.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which date is earliest?',
            options: ['3000 BCE', '1000 BCE', '1 CE', '500 CE'],
            correct: 0,
            explanation: 'In BCE, larger numbers are earlier.'
        },
        {
            question: 'How many years passed between 2500 BCE and 1500 BCE?',
            options: ['1,000', '4,000', '2,000', '500'],
            correct: 0,
            explanation: 'Both are BCE, so subtract: 2500 − 1500.'
        },
        {
            question: 'Which is a primary source?',
            options: ['A textbook about Sumer', 'A documentary about Sumer', 'An encyclopedia article', 'A clay tablet from ancient Sumer'],
            correct: 3,
            explanation: 'The answer is A clay tablet from ancient Sumer. It was made at the time.'
        },
        {
            question: 'Which is a secondary source?',
            options: ['An ancient law code', 'A Paleolithic cave painting', 'A history article written last year', 'A pharaoh’s inscription'],
            correct: 2,
            explanation: 'It interprets earlier sources.'
        },
        {
            question: 'In HIPP, the “I” stands for:',
            options: ['Intended audience', 'Information', 'Importance', 'Inscription'],
            correct: 0,
            explanation: 'The answer is Intended audience. Who the source was made for.'
        },
        {
            question: 'A source created to glorify a king most likely shows:',
            options: ['No point of view', 'The enemy’s view', 'Only facts', 'Bias toward the king'],
            correct: 3,
            explanation: 'Its purpose shapes what it says.'
        },
        {
            question: 'The abbreviation “c.” before a date means:',
            options: ['Century', 'Calendar', 'Correct', 'About'],
            correct: 3,
            explanation: 'The answer is About. Circa means approximately.'
        },
        {
            question: 'Comparing several sources to check a claim is called:',
            options: ['Contextualization', 'Corroboration', 'Chronology', 'Civilization'],
            correct: 1,
            explanation: 'Corroboration tests agreement among sources.'
        },
        {
            question: 'How many years are in a millennium?',
            options: ['100', '1,000', '10', '10,000'],
            correct: 1,
            explanation: 'The answer is 1,000. A millennium is 1,000 years.'
        },
        {
            question: 'Why is there a “minus 1” when counting from BCE to CE?',
            options: ['Calendars are wrong', 'CE starts at year 2', 'There is no year 0', 'BCE ends at year 0'],
            correct: 2,
            explanation: 'The calendar goes from 1 BCE to 1 CE.'
        }
    ]
},
{
    name: '1.1.2 Paleolithic Life and Human Migration',
    type: 'lesson',
    duration: '50 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: From Foragers to Farmers</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.2: Paleolithic Life and Human Migration</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how early humans lived during the Paleolithic Era, how they adapted to different environments, and how and when they spread from Africa across the world.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> For more than 95% of the time modern humans have existed, they lived as hunter-gatherers. Understanding this long era explains where all of us come from and how human cultures began.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🦴 Natural history museums</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧬 DNA ancestry research</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏔️ Archaeological sites</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎨 Cave art</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌍 Climate science</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🎓 Anthropology</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use chronology, including BCE and CE, to order events. (D2.His.1)</li>
    <li>Analyze primary and secondary sources and their limits. (D2.His.10)</li>
    <li>Describe Paleolithic life and the migration of early humans. (D2.Geo)</li>
    <li>Explain the causes and effects of the Neolithic Revolution and identify the characteristics of civilization. (D2.His.14)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the way of life of Paleolithic hunter-gatherers.</li>
    <li>Explain how technology such as fire, tools and clothing helped humans adapt.</li>
    <li>Trace the spread of modern humans out of Africa.</li>
    <li>Explain how scientists use evidence to study early humans.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How did early humans adapt to survive in so many different environments?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.1 you learned how historians use evidence. Most evidence for this lesson comes from artifacts, fossils and DNA.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Imagine you and twenty relatives must find all your food, water and shelter every day, with no stores, farms or metal tools. You would need to know which plants are safe, where animals travel and when the seasons change. This was daily life in the <strong>Paleolithic Era</strong>, or Old Stone Age.</p>
    <p>Paleolithic people were <strong>hunter-gatherers</strong> (also called foragers). They were usually <strong>nomadic</strong> — moving from place to place to follow food sources — and lived in small groups, often of a few dozen people.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Paleolithic = “old stone.” People hunted, gathered, made stone tools and moved with the seasons.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Most scientists agree that <em>Homo sapiens</em>, our species, first appeared in Africa — some of the oldest known fossils, from Jebel Irhoud in Morocco, are about 300,000 years old. Earlier human species, such as <em>Homo erectus</em>, had already spread beyond Africa. Modern humans began their main spread out of Africa roughly 70,000 to 50,000 years ago and eventually reached every continent except Antarctica.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Dates for prehistory are estimates based on evidence such as fossils, tools and DNA. They often change when new discoveries are made.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Paleolithic Era</strong>
    </p>
    <p style="margin:6px 0;">The Old Stone Age, when people made stone tools and lived as hunter-gatherers.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> from more than 2.5 million to about 12,000 years ago</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Cave paintings were made in the Paleolithic.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">hunter-gatherer</strong>
    </p>
    <p style="margin:6px 0;">A person who gets food by hunting animals and gathering wild plants.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Paleolithic worldwide</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Hunter-gatherers knew hundreds of edible plants.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">nomad</strong>
    </p>
    <p style="margin:6px 0;">A person who moves from place to place instead of settling permanently.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Paleolithic and later</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Nomads followed herds of animals.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">migration</strong>
    </p>
    <p style="margin:6px 0;">The movement of people from one region to another.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> all periods</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Humans migrated from Africa to Asia.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">fossil</strong>
    </p>
    <p style="margin:6px 0;">The preserved remains or traces of an ancient living thing.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> prehistory</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Fossil skulls show how humans changed.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">culture</strong>
    </p>
    <p style="margin:6px 0;">The shared beliefs, customs, language, tools and arts of a group.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> all periods</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Cave art is evidence of early culture.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Life as a Hunter-Gatherer</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aspect of life</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Paleolithic way of life</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Evidence</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hunting animals; gathering fruit, nuts, roots and seeds; fishing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Animal bones with cut marks; plant remains at campsites</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stone, bone and wood tools — hand axes, spear points, needles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thousands of stone tools found worldwide</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shelter</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Caves, rock shelters, huts of wood, bone or hides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Remains of hearths and huts</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Social life</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small, mobile groups; work often shared</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Size of campsites; anthropologists’ studies of modern foragers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Culture and beliefs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cave paintings, carvings, jewelry, burials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Paintings such as those at Lascaux, France (about 17,000 years old)</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Do not imagine Paleolithic people as unintelligent. Their brains were like ours, and they developed complex skills, languages, art and knowledge of their environments.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Adapting to New Environments</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Technology</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">How it helped</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Control of fire</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Warmth, light, cooking (which made food safer and easier to digest), protection from animals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specialized tools</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Spears and later bows for hunting; scrapers for preparing hides; needles for sewing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clothing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sewn hides allowed people to survive in cold Ice Age climates</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Boats and rafts</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Allowed people to cross water and reach places such as Australia</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Language</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Made it possible to plan hunts, share knowledge and pass on culture</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Using evidence to make an inference</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Archaeologists find bone needles at a site in a region that was very cold during the Ice Age. What can they infer?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Ask what the artifact was used for and why that would matter in this environment.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Identify the artifact</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Bone needles are used for sewing.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Connect to the environment</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The region was very cold.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Make an inference</strong>
    </p>
    <div style="margin:6px 0 0 34px;">People sewed fitted clothing from hides to survive the cold.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The people who lived there sewed warm, fitted clothing, which helped them adapt to a cold climate.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> An inference connects evidence to a conclusion using reasoning. It is stronger when supported by more than one piece of evidence.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. The Spread of Modern Humans</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 230" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">The Spread of Modern Humans (approximate dates)</text><rect x="14" y="50" width="122" height="120" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="75" y="84" fill="#ffcc80" font-size="14" font-weight="bold" text-anchor="middle">Africa</text><text x="75" y="106" fill="#e2e8f0" font-size="11" text-anchor="middle">Homo sapiens</text><text x="75" y="120" fill="#e2e8f0" font-size="11" text-anchor="middle">appear</text><text x="75" y="144" fill="#fde68a" font-size="11" text-anchor="middle">about 300,000</text><text x="75" y="158" fill="#fde68a" font-size="11" text-anchor="middle">years ago</text><line x1="137" y1="110" x2="140.0" y2="110.0" stroke="#94a3b8" stroke-width="2"/><polygon points="150,110 140.0,115.0 140.0,105.0" fill="#94a3b8"/><rect x="151" y="50" width="122" height="120" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="212" y="84" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">SW Asia</text><text x="212" y="106" fill="#e2e8f0" font-size="11" text-anchor="middle">main spread</text><text x="212" y="120" fill="#e2e8f0" font-size="11" text-anchor="middle">out of Africa</text><text x="212" y="144" fill="#fde68a" font-size="11" text-anchor="middle">about 70,000–50,000</text><text x="212" y="158" fill="#fde68a" font-size="11" text-anchor="middle">years ago</text><line x1="274" y1="110" x2="277.0" y2="110.0" stroke="#94a3b8" stroke-width="2"/><polygon points="287,110 277.0,115.0 277.0,105.0" fill="#94a3b8"/><rect x="288" y="50" width="122" height="120" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="349" y="84" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">Australia</text><text x="349" y="106" fill="#e2e8f0" font-size="11" text-anchor="middle">reached</text><text x="349" y="120" fill="#e2e8f0" font-size="11" text-anchor="middle">by boat</text><text x="349" y="144" fill="#fde68a" font-size="11" text-anchor="middle">by about 50,000</text><text x="349" y="158" fill="#fde68a" font-size="11" text-anchor="middle">years ago</text><line x1="411" y1="110" x2="414.0" y2="110.0" stroke="#94a3b8" stroke-width="2"/><polygon points="424,110 414.0,115.0 414.0,105.0" fill="#94a3b8"/><rect x="425" y="50" width="122" height="120" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="486" y="84" fill="#67e8f9" font-size="14" font-weight="bold" text-anchor="middle">Europe</text><text x="486" y="106" fill="#e2e8f0" font-size="11" text-anchor="middle">settled</text><text x="486" y="144" fill="#fde68a" font-size="11" text-anchor="middle">about 45,000</text><text x="486" y="158" fill="#fde68a" font-size="11" text-anchor="middle">years ago</text><line x1="548" y1="110" x2="551.0" y2="110.0" stroke="#94a3b8" stroke-width="2"/><polygon points="561,110 551.0,115.0 551.0,105.0" fill="#94a3b8"/><rect x="562" y="50" width="122" height="120" rx="12" fill="#10233d" stroke="#c4b5fd" stroke-width="2"/><text x="623" y="84" fill="#c4b5fd" font-size="14" font-weight="bold" text-anchor="middle">Americas</text><text x="623" y="106" fill="#e2e8f0" font-size="11" text-anchor="middle">reached</text><text x="623" y="120" fill="#e2e8f0" font-size="11" text-anchor="middle">from Asia</text><text x="623" y="144" fill="#fde68a" font-size="11" text-anchor="middle">by at least 15,000</text><text x="623" y="158" fill="#fde68a" font-size="11" text-anchor="middle">years ago</text><text x="350" y="200" fill="#86efac" font-size="13" text-anchor="middle">Dates come from fossils, tools and DNA, and change as scientists find new evidence.</text><text x="350" y="220" fill="#94a3b8" font-size="12" text-anchor="middle">This is a sequence, not a map: people spread gradually in many directions over thousands of years.</text>
    </svg>
    </div>
    <p>Scientists combine several kinds of evidence to trace human migration: fossils, stone tools, ancient campsites and DNA from living and ancient people. During the last Ice Age, sea levels were lower, exposing land bridges such as Beringia between Asia and North America.</p>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> On which continent did Homo sapiens first appear?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Africa.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why were Paleolithic people usually nomadic?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They followed animal herds and the seasonal ripening of wild plants.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Name two technologies that helped early humans adapt.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Fire, tools, sewn clothing, boats or language.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect the ideas, beliefs and cultures of classmates and of the people we study, even when they differ from your own.</li>
    <li>Disagree with ideas, not people, and support every claim with evidence.</li>
    <li>Treat difficult topics — such as slavery, war and inequality — seriously and with care.</li>
    <li>Use school-approved sources and give credit to every source you quote or paraphrase.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Historical Thinking Skills You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Making inferences from artifacts</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using geography</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Chronological reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Evaluating scientific evidence</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recognizing change over time</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Prehistoric dates are revised as evidence grows. For example, new fossil and DNA discoveries have pushed back estimates of when people first reached Australia and the Americas. This does not mean historians are “wrong”; it shows how scientific knowledge improves as new evidence appears.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might the earliest evidence of humans in a place be hard to find?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffcc80;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> DNA ancestry tests use the same science that helps researchers trace ancient human migrations.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> The end of the last Ice Age changed sea levels and habitats, showing how strongly climate shapes where people can live.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Archaeologists, anthropologists, geneticists and museum educators study and explain early human life.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What does “Paleolithic” mean?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Paleo = old; lithic = stone.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Old Stone Age.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> How did fire help early humans?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of four uses.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Warmth, light, cooking and protection.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> What land bridge connected Asia and North America during the Ice Age?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It is now under the Bering Strait.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Beringia.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write a journal entry from the point of view of a Paleolithic teenager describing one day of hunting and gathering.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Examine photographs of stone tools. Partners infer what each tool was used for and explain their evidence.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a “survival kit” display: each group chooses five Paleolithic technologies and explains how each helped humans adapt.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Take a virtual tour of a cave-painting site online. Describe two images and what they might tell us about the artists’ lives.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What is a hunter-gatherer?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A person who gets food by hunting animals and gathering wild plants.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Where did Homo sapiens first appear?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Africa.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why Paleolithic people moved often.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To follow animal herds and find plants as they ripened in different places and seasons.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Give two kinds of evidence scientists use to study early migration.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Fossils, stone tools, campsites and DNA.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ffcc80;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why dates for early human migration keep changing.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">New fossils, tools and DNA evidence are discovered and dating methods improve, so estimates are revised.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Name one skill hunter-gatherers needed that people still use today.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Observation, cooperation, communication, planning or knowledge of plants and animals.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.Geo: Explain how lower sea levels during the Ice Age affected human migration.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Lower seas exposed land bridges such as Beringia and shortened sea crossings, allowing people to walk or travel by boat to new continents.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>During the Paleolithic Era, people lived as nomadic hunter-gatherers in small groups, using stone tools, fire, clothing and language to adapt to many environments. Homo sapiens first appeared in Africa and gradually spread across the world, reaching Australia, Europe and the Americas. Evidence from fossils, tools and DNA helps scientists trace these migrations.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Paleolithic = Old Stone Age.</li>
    <li>Hunter-gatherers were usually nomadic.</li>
    <li>Fire, tools, clothing, boats and language aided adaptation.</li>
    <li>Humans spread from Africa to every continent except Antarctica.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Prehistoric dates are estimates.</li>
    <li>Paleolithic people were as intelligent as we are.</li>
    <li>Evidence comes from fossils, artifacts and DNA.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking early humans were primitive or unintelligent.</li>
    <li>Treating estimated dates as exact.</li>
    <li>Confusing Paleolithic with Neolithic.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Link each technology to the problem it solved.</li>
    <li>Use “about” with prehistoric dates.</li>
    <li>Picture the migration sequence.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Support inferences with specific artifacts.</li>
    <li>Explain how geography affected migration.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.Geo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explaining how environment shaped migration.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing change over long time spans.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">Inference</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Drawing conclusions from artifacts.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for all human cultures</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Open-mindedness</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environment and climate</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Human diversity</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> All people alive today share common ancestors who lived in Africa — a powerful reminder of our shared humanity.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Draw a sequence chart of the spread of modern humans with approximate dates.</li>
    <li>Research one Paleolithic site and summarize what was found there.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What surprised me most about Paleolithic life?</li>
    <li>Which modern skill would be most useful in the Paleolithic?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Paleolithic</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Old Stone Age.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Nomad</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A person who moves often.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Migration</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Movement of people.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Culture</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shared ways of life.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe Paleolithic life.</p>
    <p style="margin:6px 0;">☐ I can explain how technology helped humans adapt.</p>
    <p style="margin:6px 0;">☐ I can trace human migration.</p>
    <p style="margin:6px 0;">☐ I can explain how evidence is used.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The Paleolithic Era is also called the:',
            options: ['New Stone Age', 'Bronze Age', 'Iron Age', 'Old Stone Age'],
            correct: 3,
            explanation: 'Paleo means old; lithic means stone.'
        },
        {
            question: 'Paleolithic people got their food mainly by:',
            options: ['Farming', 'Trading in markets', 'Raising cattle in towns', 'Hunting and gathering'],
            correct: 3,
            explanation: 'The answer is Hunting and gathering. They were hunter-gatherers.'
        },
        {
            question: 'Why were most Paleolithic groups nomadic?',
            options: ['Because they disliked their homes', 'To trade with cities', 'To follow animals and seasonal plants', 'To escape governments'],
            correct: 2,
            explanation: 'Food sources moved with the seasons.'
        },
        {
            question: 'Some of the oldest known Homo sapiens fossils, about 300,000 years old, were found in:',
            options: ['France', 'China', 'Australia', 'Morocco, in Africa'],
            correct: 3,
            explanation: 'The Jebel Irhoud fossils come from Morocco.'
        },
        {
            question: 'Which technology allowed humans to reach Australia?',
            options: ['Boats or rafts', 'Wheels', 'Metal plows', 'Writing'],
            correct: 0,
            explanation: 'Reaching Australia required crossing water.'
        },
        {
            question: 'Bone needles found at a cold Ice Age site suggest people:',
            options: ['Built pyramids', 'Wrote books', 'Sewed warm clothing', 'Farmed wheat'],
            correct: 2,
            explanation: 'Needles were used for sewing hides.'
        },
        {
            question: 'Beringia was:',
            options: ['A land bridge between Asia and North America', 'A river in Africa', 'An early city', 'A type of stone tool'],
            correct: 0,
            explanation: 'It was exposed when sea levels were low.'
        },
        {
            question: 'Cave paintings at Lascaux, France, are evidence of early:',
            options: ['Farming', 'Art and culture', 'Writing', 'Metalworking'],
            correct: 1,
            explanation: 'They show Paleolithic artistic culture.'
        },
        {
            question: 'Which evidence helps scientists trace ancient migrations?',
            options: ['Modern maps only', 'DNA', 'Novels', 'Recent newspapers'],
            correct: 1,
            explanation: 'DNA reveals ancestry and movement.'
        },
        {
            question: 'Cooking food with fire helped early humans because it:',
            options: ['Made food spoil faster', 'Made food safer and easier to digest', 'Replaced the need to hunt', 'Created writing'],
            correct: 1,
            explanation: 'Cooking kills germs and softens food.'
        }
    ]
},
{
    name: '1.1.3 The Neolithic Revolution and Civilization',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: From Foragers to Farmers</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.1.3: The Neolithic Revolution and Civilization</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn what the Neolithic Revolution was, where and why farming began, how it changed human life, and the characteristics that define a civilization.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Farming is the foundation of almost everything in modern life — cities, governments, writing, trade and even social inequality. Many historians call it the most important change in human history.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Agriculture today</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏙️ Cities</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🐄 Domesticated animals</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🍞 The foods we eat</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Governments</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📜 Writing and records</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use chronology, including BCE and CE, to order events. (D2.His.1)</li>
    <li>Analyze primary and secondary sources and their limits. (D2.His.10)</li>
    <li>Describe Paleolithic life and the migration of early humans. (D2.Geo)</li>
    <li>Explain the causes and effects of the Neolithic Revolution and identify the characteristics of civilization. (D2.His.14)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain what the Neolithic Revolution was and where it began.</li>
    <li>Analyze the causes and effects of farming.</li>
    <li>Evaluate the positive and negative effects of settled life.</li>
    <li>Identify the characteristics of civilization.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> Was the shift to farming the most important change in human history?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.1.2 you learned how Paleolithic hunter-gatherers lived. Now you will see what happened when people began to farm.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>About 12,000 years ago, people in some regions began to plant seeds and raise animals instead of only hunting and gathering. This shift is called the <strong>Neolithic Revolution</strong> (or Agricultural Revolution). “Neolithic” means New Stone Age, because people also made new kinds of polished stone tools.</p>
    <p>It was a “revolution” not because it happened quickly — it took thousands of years — but because it completely changed how humans lived. Farming produced a <strong>surplus</strong> of food, and surpluses allowed people to settle in permanent villages, grow in number and take on new jobs.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Neolithic Revolution = the change from foraging to farming, which led to settled villages and, eventually, civilization.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Farming began first in the <strong>Fertile Crescent</strong> of Southwest Asia, around 10,000 BCE, where people domesticated wheat, barley, sheep and goats. It also began <strong>independently</strong> in several other regions: rice and millet in China, maize (corn) and squash in Mesoamerica, potatoes in the Andes, and sorghum in parts of Africa, among others. Historians link the timing to the warmer, more stable climate after the last Ice Age.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Neolithic Revolution</strong>
    </p>
    <p style="margin:6px 0;">The shift from hunting and gathering to farming and settled life.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> began about 10,000 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>It started in the Fertile Crescent.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">domestication</strong>
    </p>
    <p style="margin:6px 0;">Taming and breeding plants and animals for human use.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Neolithic onward</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Wild wheat was domesticated for larger seeds.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">surplus</strong>
    </p>
    <p style="margin:6px 0;">More of something than is needed.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Neolithic onward</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>A grain surplus fed potters and priests.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">job specialization</strong>
    </p>
    <p style="margin:6px 0;">Doing one type of work and becoming skilled at it.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Neolithic onward</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Some villagers became weavers or traders.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Fertile Crescent</strong>
    </p>
    <p style="margin:6px 0;">A curved region of fertile land in Southwest Asia where farming began early.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Southwest Asia</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>It stretches from the Nile to the Persian Gulf.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">civilization</strong>
    </p>
    <p style="margin:6px 0;">A complex society with cities, government, specialization, social classes, writing and other features.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> from about 3500 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sumer was one of the first civilizations.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Causes and Effects of Farming</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 170" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">From Farming to Civilization: A Chain of Causes</text><rect x="14" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="75" y="80" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Farming</text><text x="75" y="104" fill="#cbd5e1" font-size="11" text-anchor="middle">plants and</text><text x="75" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">animals tamed</text><line x1="137" y1="90" x2="140.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="150,90 140.0,95.0 140.0,85.0" fill="#94a3b8"/><rect x="151" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="212" y="80" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Surplus</text><text x="212" y="104" fill="#cbd5e1" font-size="11" text-anchor="middle">more food</text><text x="212" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">than needed</text><line x1="274" y1="90" x2="277.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="287,90 277.0,95.0 277.0,85.0" fill="#94a3b8"/><rect x="288" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="349" y="80" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Population</text><text x="349" y="104" fill="#cbd5e1" font-size="11" text-anchor="middle">villages become</text><text x="349" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">towns</text><line x1="411" y1="90" x2="414.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="424,90 414.0,95.0 414.0,85.0" fill="#94a3b8"/><rect x="425" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="486" y="80" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Specialization</text><text x="486" y="104" fill="#cbd5e1" font-size="11" text-anchor="middle">potters, priests,</text><text x="486" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">traders</text><line x1="548" y1="90" x2="551.0" y2="90.0" stroke="#94a3b8" stroke-width="2"/><polygon points="561,90 551.0,95.0 551.0,85.0" fill="#94a3b8"/><rect x="562" y="50" width="122" height="80" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="623" y="80" fill="#fde68a" font-size="13" font-weight="bold" text-anchor="middle">Civilization</text><text x="623" y="104" fill="#cbd5e1" font-size="11" text-anchor="middle">cities, rulers,</text><text x="623" y="118" fill="#cbd5e1" font-size="11" text-anchor="middle">writing</text><text x="350" y="156" fill="#86efac" font-size="12" text-anchor="middle">Each change made the next one possible — over thousands of years, not overnight.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Causes</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Effects</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Warmer, wetter climate after the Ice Age</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Permanent villages and houses</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wild grains and animals in fertile regions</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Food surpluses and population growth</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Generations of knowledge about plants</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Job specialization and trade</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Growing populations needing reliable food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Private property, social classes and larger governments</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">📖 Reading Text</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">An early farming village: Çatalhöyük</p>
    <p style="margin:8px 0;"><em>Çatalhöyük, in what is now Türkiye, was occupied from about 7400 to 6000 BCE. Its mud-brick houses were packed so closely together that people entered through openings in their roofs. Archaeologists have found wall paintings, figurines, stored grain and burials beneath house floors. At its peak, several thousand people may have lived there.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Was Farming a Good Change?</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Benefits of settled farming</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Costs of settled farming</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More food from less land, supporting larger populations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Harder, longer work for many people</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Permanent homes and stored food</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Less varied diets and new nutritional problems</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">New jobs, crafts and trade</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Diseases spread more easily in crowded villages and from animals</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Growth of art, religion and knowledge</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Growing inequality between rich and poor; more conflict over land</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Making a historical argument</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Write a claim answering: “Was the Neolithic Revolution good for humanity?” Support it with two pieces of evidence.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Choose a position, then select evidence from both columns that supports it. Acknowledge the other side.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Claim</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The Neolithic Revolution benefited humanity overall, though it came with serious costs.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Evidence 1</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Food surpluses supported larger populations and new jobs, leading to crafts, trade and eventually writing.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Evidence 2</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Settled life allowed knowledge and culture to build up over generations, as seen in villages like Çatalhöyük.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">4</span><strong style="color:#e3f2fd;">Step 4: Counterclaim</strong>
    </p>
    <div style="margin:6px 0 0 34px;">However, farming also brought harder work, new diseases and inequality.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> A strong answer states a clear claim, supports it with specific evidence and acknowledges a counterclaim.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Historians often disagree. A good argument shows you understand more than one side.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. The Characteristics of Civilization</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 330" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Eight Characteristics of Civilization</text><circle cx="350" cy="180" r="62" fill="#2e1d12" stroke="#ffcc80" stroke-width="3"/><text x="350" y="176" fill="#fde68a" font-size="16" font-weight="bold" text-anchor="middle">Civilization</text><text x="350" y="196" fill="#cbd5e1" font-size="11" text-anchor="middle">built on a food surplus</text><line x1="350.0" y1="114.0" x2="350.0" y2="88.0" stroke="#64748b" stroke-width="1.5"/><rect x="268.0" y="45.0" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="350.0" y="67.0" fill="#e2e8f0" font-size="13" text-anchor="middle">Cities</text><line x1="396.7" y1="133.3" x2="456.1" y2="114.9" stroke="#64748b" stroke-width="1.5"/><rect x="430.6" y="79.6" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="512.6" y="101.6" fill="#e2e8f0" font-size="13" text-anchor="middle">Organized government</text><line x1="416.0" y1="180.0" x2="500.0" y2="180.0" stroke="#64748b" stroke-width="1.5"/><rect x="498.0" y="163.0" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="580.0" y="185.0" fill="#e2e8f0" font-size="13" text-anchor="middle">Complex religion</text><line x1="396.7" y1="226.7" x2="456.1" y2="245.1" stroke="#64748b" stroke-width="1.5"/><rect x="430.6" y="246.4" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="512.6" y="268.4" fill="#e2e8f0" font-size="13" text-anchor="middle">Job specialization</text><line x1="350.0" y1="246.0" x2="350.0" y2="272.0" stroke="#64748b" stroke-width="1.5"/><rect x="268.0" y="281.0" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="350.0" y="303.0" fill="#e2e8f0" font-size="13" text-anchor="middle">Social classes</text><line x1="303.3" y1="226.7" x2="243.9" y2="245.1" stroke="#64748b" stroke-width="1.5"/><rect x="105.4" y="246.4" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="187.4" y="268.4" fill="#e2e8f0" font-size="13" text-anchor="middle">Writing and records</text><line x1="284.0" y1="180.0" x2="200.0" y2="180.0" stroke="#64748b" stroke-width="1.5"/><rect x="38.0" y="163.0" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="120.0" y="185.0" fill="#e2e8f0" font-size="13" text-anchor="middle">Art and architecture</text><line x1="303.3" y1="133.3" x2="243.9" y2="114.9" stroke="#64748b" stroke-width="1.5"/><rect x="105.4" y="79.6" width="164" height="34" rx="9" fill="#10233d" stroke="#ffcc80" stroke-width="1.5"/><text x="187.4" y="101.6" fill="#e2e8f0" font-size="13" text-anchor="middle">Public works</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Characteristic</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it means</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Large, dense centers of population, trade and government</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized government</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Leaders and officials who make laws and organize work</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complex religion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shared beliefs, priests and temples</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Job specialization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">People doing specific jobs such as scribe, potter or soldier</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Social classes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Groups ranked by wealth, power or occupation</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing and record keeping</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Systems for recording laws, trade and history</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Art and architecture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Monuments, temples, palaces and decorative arts</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Public works</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Projects for the community, such as walls, roads and irrigation canals</td>
    </tr>
    </table>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does “Neolithic” mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">New Stone Age.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Where did farming first begin?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">In the Fertile Crescent of Southwest Asia, around 10,000 BCE.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why was a food surplus so important?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It allowed people to do jobs other than farming, supporting specialization, trade and larger populations.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect the ideas, beliefs and cultures of classmates and of the people we study, even when they differ from your own.</li>
    <li>Disagree with ideas, not people, and support every claim with evidence.</li>
    <li>Treat difficult topics — such as slavery, war and inequality — seriously and with care.</li>
    <li>Use school-approved sources and give credit to every source you quote or paraphrase.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Historical Thinking Skills You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Argumentation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing perspectives</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Using archaeological evidence</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Change over time</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Historians debate how to judge the Neolithic Revolution. Some emphasize progress: it made cities, writing and science possible. Others point out that skeletons from early farming villages often show more signs of poor nutrition and disease than those of earlier foragers, and that farming created new inequalities. Both views use evidence; your job is to weigh it.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>If farming created so many problems, why do you think people did not go back to hunting and gathering?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffcc80;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Almost all the food you eat today comes from plants and animals first domesticated during the Neolithic era — wheat, rice, maize, chickens and cattle.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Farming changed landscapes forever: forests were cleared, rivers were redirected and wild species declined, raising questions about sustainability that we still face.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Farmers, agricultural scientists, food engineers and archaeologists continue to study and improve the domestication begun 12,000 years ago.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Name two crops first domesticated in the Fertile Crescent.</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Grains.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Wheat and barley.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Did farming begin in only one place?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of China and Mesoamerica.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — it began independently in several regions.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which characteristic of civilization includes irrigation canals?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Projects for the community.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Public works.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Make a T-chart comparing Paleolithic and Neolithic life in five categories: food, shelter, tools, social structure and population.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Debate in pairs: one argues farming was humanity’s greatest achievement, the other that it was its biggest mistake. Then switch sides.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Design a museum exhibit about Çatalhöyük, with five “artifacts” and labels explaining what each shows about Neolithic life.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Use an online map tool to mark the regions where farming developed independently, with the main crops of each.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> What was the Neolithic Revolution?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The shift from hunting and gathering to farming and settled life.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> List four characteristics of civilization.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Any four: cities, government, religion, specialization, social classes, writing, art and architecture, public works.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how a food surplus led to job specialization.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">With extra food, not everyone had to farm, so some people could become potters, toolmakers, priests or traders.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Give two negative effects of settled farming.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Harder work, more disease, less varied diets, inequality or conflict over land.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ffcc80;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why do historians call it a “revolution” if it took thousands of years?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Because it completely transformed how humans lived — their food, homes, societies and futures — even though the change was gradual.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Name three foods you ate this week that come from crops or animals domesticated in the Neolithic era.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Examples: bread (wheat), rice, corn, eggs (chickens), milk or beef (cattle).</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.14: Analyze the multiple causes of the Neolithic Revolution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A warmer, stable climate after the Ice Age; wild plants and animals suitable for domestication in fertile regions; and growing knowledge of plants combined to make farming possible and attractive.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Neolithic Revolution, beginning around 10,000 BCE in the Fertile Crescent and independently elsewhere, was the shift from foraging to farming. Farming produced surpluses that allowed permanent villages, population growth and job specialization — but also brought harder work, disease and inequality. Over thousands of years, these changes led to civilizations with cities, governments, religion, social classes, writing, art and public works.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Neolithic = New Stone Age.</li>
    <li>Farming began c. 10,000 BCE in the Fertile Crescent.</li>
    <li>Surplus → population growth → specialization → civilization.</li>
    <li>Eight characteristics of civilization.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Farming began independently in several regions.</li>
    <li>“Revolution” refers to impact, not speed.</li>
    <li>Farming had costs as well as benefits.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking farming spread from one place only.</li>
    <li>Believing the change happened quickly.</li>
    <li>Calling any village a civilization.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use cause-and-effect chains.</li>
    <li>Memorize the eight characteristics with a mnemonic.</li>
    <li>Always include a counterclaim in arguments.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain causes AND effects.</li>
    <li>Use specific examples such as Çatalhöyük.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.14 Causation</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyzing causes and effects of farming.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.16 Argument</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Building a claim with evidence.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2 Change</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparing Paleolithic and Neolithic life.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Critical thinking</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for different viewpoints</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Responsibility to the environment</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Food and agriculture</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environment</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Inequality</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> The farming revolution still shapes debates about food, land and the environment today.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph answering the essential question with a claim, evidence and a counterclaim.</li>
    <li>Create a mnemonic for the eight characteristics of civilization.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Would I rather have lived as a hunter-gatherer or an early farmer? Why?</li>
    <li>Which effect of farming do I think was most important?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Domestication</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Taming plants and animals.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Surplus</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Extra beyond what is needed.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Specialization</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Doing one kind of job.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Civilization</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A complex society with cities and government.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain the Neolithic Revolution.</p>
    <p style="margin:6px 0;">☐ I can analyze its causes and effects.</p>
    <p style="margin:6px 0;">☐ I can evaluate its benefits and costs.</p>
    <p style="margin:6px 0;">☐ I can list the characteristics of civilization.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The Neolithic Revolution was the shift from:',
            options: ['Farming to factories', 'Cities to villages', 'Hunting and gathering to farming', 'Writing to speaking'],
            correct: 2,
            explanation: 'People began to farm and settle.'
        },
        {
            question: 'Farming first began in the:',
            options: ['Amazon rainforest', 'Fertile Crescent', 'Sahara Desert', 'Arctic'],
            correct: 1,
            explanation: 'Southwest Asia, around 10,000 BCE.'
        },
        {
            question: 'Which crops were first domesticated in the Fertile Crescent?',
            options: ['Wheat and barley', 'Maize and squash', 'Potatoes and quinoa', 'Rice and millet'],
            correct: 0,
            explanation: 'Grains were domesticated there first.'
        },
        {
            question: 'Maize (corn) was first domesticated in:',
            options: ['The Fertile Crescent', 'Europe', 'Australia', 'Mesoamerica'],
            correct: 3,
            explanation: 'Farming arose independently in the Americas.'
        },
        {
            question: 'A food surplus allowed people to:',
            options: ['Stop eating', 'Become nomadic again', 'Avoid trade', 'Specialize in jobs other than farming'],
            correct: 3,
            explanation: 'The answer is Specialize in jobs other than farming. Not everyone needed to farm.'
        },
        {
            question: 'Which was a NEGATIVE effect of settled farming?',
            options: ['Larger populations', 'Diseases spread more easily', 'Permanent homes', 'New crafts'],
            correct: 1,
            explanation: 'Crowded villages helped disease spread.'
        },
        {
            question: 'Çatalhöyük is an example of:',
            options: ['An early farming village', 'A Paleolithic cave', 'An Egyptian pyramid', 'A Chinese dynasty'],
            correct: 0,
            explanation: 'It was a large Neolithic settlement.'
        },
        {
            question: 'Why is it called a “revolution”?',
            options: ['It happened in one day', 'It involved a war', 'It completely transformed human life', 'It was led by a king'],
            correct: 2,
            explanation: 'The change was huge, even if gradual.'
        },
        {
            question: 'Which is a characteristic of civilization?',
            options: ['Social classes', 'Nomadic bands only', 'No religion', 'No government'],
            correct: 0,
            explanation: 'Civilizations have ranked social groups.'
        },
        {
            question: 'Irrigation canals are an example of:',
            options: ['Social classes', 'Public works', 'Religion', 'Writing'],
            correct: 1,
            explanation: 'Projects that serve the community.'
        }
    ]
},
{
    name: '1.1 Activity: What Can Artifacts Tell Us?',
    type: 'lesson',
    duration: '50 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 50 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: What Can Artifacts Tell Us?</h2>
    <p style="font-size:16px;">In this investigation you will act as an archaeologist. You will examine descriptions and images of real artifacts and sites from the Paleolithic and Neolithic eras, make inferences, and decide what they reveal about how people lived.</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discussion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every group member shares one inference before anyone shares a second.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separate what you observe (facts) from what you infer (interpretations).</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Treat burial evidence and human remains with respect; they were real people.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Use only museum or university websites if you research online.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Historical Investigation: Artifact Stations</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To use artifacts as evidence to make and support inferences about Paleolithic and Neolithic life.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Artifact station cards with images</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Observation–Inference chart</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Colored pencils</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">History notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Station A: a Paleolithic stone hand axe</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Station B: cave paintings of animals (Lascaux, France, about 17,000 years ago)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Station C: carved stone pillars at Göbekli Tepe (Türkiye, about 9500 BCE)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Station D: mud-brick houses with roof entrances at Çatalhöyük (about 7400–6000 BCE)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Station E: grinding stones for grain</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle any replica artifacts gently.</li>
    <li>Move between stations calmly.</li>
    <li>Disagree respectfully and use evidence.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>At each station, spend four minutes studying the artifact or site description.</li>
    <li>In the Observation column, record only what you can see or read (size, material, shape, decoration).</li>
    <li>In the Inference column, record what the artifact suggests about how people lived.</li>
    <li>Decide whether each artifact is Paleolithic or Neolithic, and give one reason.</li>
    <li>Rate your confidence in each inference: high, medium or low.</li>
    <li>As a group, choose the artifact that tells you the most and explain why.</li>
    <li>Share your strongest inference with the class.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Station</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Observation</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Inference</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Paleolithic or Neolithic?</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Confidence</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">D</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">E</td>
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
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What do the grinding stones suggest?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">People were processing grain, which points to farming or intensive use of wild grains — typical of the Neolithic.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Why is Göbekli Tepe surprising to historians?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its huge carved pillars were built around 9500 BCE, apparently by people who were still mostly hunter-gatherers, suggesting that religion or gathering together may have encouraged settled life — not only farming.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What are the limits of artifacts as evidence?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They do not tell us people’s names, words or exact beliefs; many objects made of wood, cloth or food have decayed, so the record is incomplete.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> Artifacts show a shift from mobile hunter-gatherer life (hand axes, cave art) to settled farming communities (grinding stones, mud-brick houses), but interpretations must be made carefully because the evidence is incomplete.</p>
    <p><strong style="color:#fde68a;">Historical explanation:</strong> Archaeologists build understanding by combining many artifacts and comparing sites. One object can be misleading; patterns across many objects are more reliable.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Writing inferences in the observation column.</li>
    <li>Treating a single artifact as proof.</li>
    <li>Forgetting that perishable materials rarely survive.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Museum curators and archaeologists use the same observation–inference process to write the labels you read in museums.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Compare inferences across groups. Where did groups agree? Where did they disagree, and why? Discuss which artifacts gave the strongest evidence of the Neolithic Revolution.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>An observation is a fact you can see. An inference is a conclusion you draw. Good historians keep them separate.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Give one observation and one inference about the cave paintings.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Observation: they show animals such as horses and bulls. Inference: animals were important to the artists, perhaps for food or beliefs.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Which station provides the best evidence of settled life?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Station D (Çatalhöyük) — permanent mud-brick houses and a large population.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why is the hand axe classified as Paleolithic?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It is a chipped stone tool typical of hunter-gatherers of the Old Stone Age.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why should you rate your confidence in each inference?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Because some inferences are well supported while others are guesses; rating them shows how strong your evidence is.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What other evidence would help confirm your inferences?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Animal bones, plant remains, DNA, dating results or similar artifacts from other sites.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Up Your Investigation</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>The historical question you investigated</li>
    <li>The sources you used (primary and secondary)</li>
    <li>What each source tells you, and its limits</li>
    <li>Your claim, answering the question</li>
    <li>Evidence from at least two sources</li>
    <li>How your evidence supports your claim</li>
    <li>Questions you still have</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'An observation is:',
            options: ['A conclusion you draw', 'Something you can directly see or read', 'A guess about beliefs', 'A secondary source'],
            correct: 1,
            explanation: 'The answer is Something you can directly see or read. Observations are facts.'
        },
        {
            question: 'An inference is:',
            options: ['A conclusion based on evidence and reasoning', 'A direct measurement', 'A copy of the text', 'A date'],
            correct: 0,
            explanation: 'Inferences interpret evidence.'
        },
        {
            question: 'Grinding stones for grain suggest:',
            options: ['Space travel', 'Farming or grain processing', 'Writing', 'Metal tools'],
            correct: 1,
            explanation: 'The answer is Farming or grain processing. They were used to make flour.'
        },
        {
            question: 'Göbekli Tepe is surprising because:',
            options: ['It is a modern building', 'It has written records', 'It is in the Americas', 'Monumental pillars were built by people who were still mostly hunter-gatherers'],
            correct: 3,
            explanation: 'It challenges the idea that farming came first.'
        },
        {
            question: 'A limit of artifacts as evidence is that:',
            options: ['They do not record people’s words or names', 'They are always complete', 'They are always written', 'They never decay'],
            correct: 0,
            explanation: 'Artifacts cannot speak for themselves.'
        },
        {
            question: 'Çatalhöyük’s houses were entered through:',
            options: ['Wide front doors', 'Underground tunnels', 'Openings in the roof', 'Windows'],
            correct: 2,
            explanation: 'Houses were tightly packed together.'
        }
    ]
},
{
    name: '1.1 Quiz: Early Humans and the Neolithic Revolution',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: Early Humans and the Neolithic Revolution</h2>
    <p style="font-size:16px;">Test your understanding of historical thinking, Paleolithic life, human migration and the Neolithic Revolution from Topic 1.1.</p>
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
    <li>BCE and CE dates and elapsed time</li>
    <li>Primary and secondary sources; HIPP</li>
    <li>Paleolithic hunter-gatherers and technology</li>
    <li>The spread of modern humans</li>
    <li>Causes and effects of the Neolithic Revolution</li>
    <li>Characteristics of civilization</li>
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
    <div>For date questions, sketch a quick number line. For source questions, ask: was it made at the time, and why was it made?</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which date is the most recent?',
            options: ['800 BCE', '1500 BCE', '200 BCE', '3000 BCE'],
            correct: 2,
            explanation: 'Smaller BCE numbers are later.'
        },
        {
            question: 'How many years passed between 3000 BCE and 2000 BCE?',
            options: ['5,000', '500', '1,000', '2,000'],
            correct: 2,
            explanation: 'The answer is 1,000. 3000 − 2000 = 1,000.'
        },
        {
            question: 'A cave painting from 17,000 years ago is a(n):',
            options: ['Secondary source', 'Primary source', 'Modern document', 'Biography'],
            correct: 1,
            explanation: 'The answer is Primary source. It was made at the time.'
        },
        {
            question: 'In HIPP, “Point of view” asks:',
            options: ['When was it found?', 'How long is it?', 'Who made the source and what was their position?', 'What color is it?'],
            correct: 2,
            explanation: 'Point of view looks at the creator.'
        },
        {
            question: 'Paleolithic people were mostly:',
            options: ['Settled farmers', 'Nomadic hunter-gatherers', 'City dwellers', 'Factory workers'],
            correct: 1,
            explanation: 'The answer is Nomadic hunter-gatherers. They moved to follow food.'
        },
        {
            question: 'Humans reached Australia by:',
            options: ['Walking on a dry land bridge the whole way', 'Crossing water by boat or raft', 'Flying', 'Riding horses'],
            correct: 1,
            explanation: 'Water crossings were required.'
        },
        {
            question: 'The Neolithic Revolution began around:',
            options: ['1,000 CE', '500 BCE', '1800 CE', '10,000 BCE'],
            correct: 3,
            explanation: 'The answer is 10,000 BCE. About 12,000 years ago.'
        },
        {
            question: 'Which effect of farming led most directly to job specialization?',
            options: ['Food surpluses', 'Nomadic life', 'Fewer people', 'Less food'],
            correct: 0,
            explanation: 'Surpluses freed people for other work.'
        },
        {
            question: 'Which is NOT a characteristic of civilization?',
            options: ['Cities', 'Writing', 'Organized government', 'Living in small nomadic bands'],
            correct: 3,
            explanation: 'Civilizations are settled and complex.'
        },
        {
            question: 'Farming developed independently in:',
            options: ['Several regions of the world', 'Only the Fertile Crescent', 'Only Europe', 'Only China'],
            correct: 0,
            explanation: 'Including China, Mesoamerica, the Andes and Africa.'
        }
    ]
},
{
    name: '1.1 Assignment: Argument Essay on the Neolithic Revolution',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Argument Essay on the Neolithic Revolution</h2>
    <p style="font-size:16px;">Write a short argument essay (400–600 words) answering the compelling question: “Was the Neolithic Revolution good for humanity?”</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p>Historians disagree about the Neolithic Revolution. Some see it as the start of human progress; others point to the hard work, disease and inequality it brought. You will take a position and defend it with evidence from at least three sources from this topic — such as the Çatalhöyük description, the benefits-and-costs table, the artifact stations and your textbook.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>There is no single “right” answer. You will be scored on the strength of your argument and your use of evidence.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Review your notes, the artifact stations and the benefits-and-costs table.</li>
    <li>Write a thesis: a one-sentence claim that answers the question and previews your reasons.</li>
    <li>Plan two body paragraphs, each with a reason, evidence from a source and explanation.</li>
    <li>Plan a counterclaim paragraph: present the other side fairly, then rebut it with evidence.</li>
    <li>Write an introduction with historical context and a conclusion that restates your thesis in new words.</li>
    <li>Cite each source in parentheses, for example (Çatalhöyük description).</li>
    <li>Peer review, revise and submit.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your outline</li>
    <li>Your draft with peer comments</li>
    <li>Your final essay (400–600 words)</li>
    <li>A list of the sources you used</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear, arguable and sophisticated; previews reasons</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and arguable</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Present but vague</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specific, accurate evidence from three or more sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate evidence from three sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence from one or two sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little or no evidence</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains clearly how each piece of evidence supports the thesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains most evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly summary</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No explanation</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Counterclaim</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fairly presented and effectively rebutted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Presented and rebutted</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mentioned only</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing and citations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized, clear and correctly cited</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized and cited</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some organization or citation errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disorganized; no citations</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Use historical vocabulary: surplus, specialization, domestication, civilization.<br>Begin body paragraphs with topic sentences.<br>Use transitions such as “furthermore,” “however” and “as a result.”<br>Quote or paraphrase briefly and always explain.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What evidence was most persuasive?</li>
    <li>Did writing the counterclaim change your view?</li>
    <li>What will you improve in your next essay?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'A thesis statement should be:',
            options: ['A list of dates', 'A question', 'A clear, arguable claim that answers the question', 'A summary of the textbook'],
            correct: 2,
            explanation: 'The thesis is your main argument.'
        },
        {
            question: 'How many sources should you use?',
            options: ['None', 'At least three', 'Exactly one', 'Only the internet'],
            correct: 1,
            explanation: 'The answer is At least three. At least three sources.'
        },
        {
            question: 'A counterclaim is:',
            options: ['Your main claim', 'An opposing argument that you address', 'A citation', 'A conclusion'],
            correct: 1,
            explanation: 'It shows you understand the other side.'
        },
        {
            question: 'Citing a source in parentheses shows:',
            options: ['Where your evidence came from', 'Your opinion', 'The date of the essay', 'Your name'],
            correct: 0,
            explanation: 'The answer is Where your evidence came from. Citations credit sources.'
        },
        {
            question: 'Which transition shows contrast?',
            options: ['Furthermore', 'In addition', 'Also', 'However'],
            correct: 3,
            explanation: '“However” introduces a contrasting idea.'
        },
        {
            question: 'The essay is scored mainly on:',
            options: ['Which side you choose', 'Its length only', 'The strength of your argument and evidence', 'Handwriting only'],
            correct: 2,
            explanation: 'Argument and evidence matter most.'
        }
    ]
},
{
    name: '1.1 Review: Early Humans and the Neolithic Revolution',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: Early Humans and the Neolithic Revolution</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.1 before you move on.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Thinking Like a Historian</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>BCE counts down, CE counts up; no year 0.</li>
    <li>Primary = from the time; secondary = later.</li>
    <li>HIPP: context, audience, purpose, point of view.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Paleolithic Life</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nomadic hunter-gatherers in small groups.</li>
    <li>Fire, tools, clothing, boats and language aided adaptation.</li>
    <li>Homo sapiens spread from Africa across the world.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">The Neolithic Revolution</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Farming began c. 10,000 BCE in the Fertile Crescent and independently elsewhere.</li>
    <li>Surplus → population growth → specialization.</li>
    <li>Benefits and costs.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Civilization</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Cities, government, religion, specialization.</li>
    <li>Social classes, writing, art and architecture, public works.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Term</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Definition</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Primary source</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Made at the time</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Lascaux cave painting</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Paleolithic</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Old Stone Age</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hand axes, hunter-gatherers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Migration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Movement of people</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Humans reaching Australia</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Neolithic Revolution</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shift to farming</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wheat in the Fertile Crescent</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Surplus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">More than needed</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stored grain at Çatalhöyük</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Civilization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Complex society</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sumer (next topic)</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> How many years between 1800 BCE and 300 BCE?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">1,500 years.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Classify: a modern documentary about Egypt.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Secondary source.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Describe two features of Paleolithic life.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Nomadic movement, hunting and gathering, stone tools, small groups or cave art.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain one cause of the Neolithic Revolution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A warmer, more stable climate after the Ice Age made farming easier.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain one effect of the Neolithic Revolution.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Food surpluses led to permanent villages, population growth and job specialization.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> List the eight characteristics of civilization.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Cities, organized government, complex religion, job specialization, social classes, writing, art and architecture, public works.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can work with BCE and CE dates.</p>
    <p style="margin:6px 0;">☐ I can analyze sources with HIPP.</p>
    <p style="margin:6px 0;">☐ I can describe Paleolithic life and migration.</p>
    <p style="margin:6px 0;">☐ I can explain the Neolithic Revolution.</p>
    <p style="margin:6px 0;">☐ I can list the characteristics of civilization.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many years between 1800 BCE and 300 BCE?',
            options: ['2,100', '1,100', '500', '1,500'],
            correct: 3,
            explanation: 'The answer is 1,500. 1800 − 300 = 1,500.'
        },
        {
            question: 'A modern documentary about Egypt is a:',
            options: ['Primary source', 'Artifact', 'Secondary source', 'Fossil'],
            correct: 2,
            explanation: 'It was made long after the events.'
        },
        {
            question: 'Which technology helped humans survive Ice Age cold?',
            options: ['Writing', 'The wheel', 'Sewn clothing', 'Irrigation'],
            correct: 2,
            explanation: 'Needles and hides made warm clothing.'
        },
        {
            question: 'Farming first began around:',
            options: ['3000 BCE', '10,000 BCE', '500 CE', '1500 CE'],
            correct: 1,
            explanation: 'The answer is 10,000 BCE. About 12,000 years ago.'
        },
        {
            question: 'A key result of food surpluses was:',
            options: ['Job specialization', 'More nomadic life', 'Fewer villages', 'An end to trade'],
            correct: 0,
            explanation: 'The answer is Job specialization. People could do other jobs.'
        },
        {
            question: 'Which is a characteristic of civilization?',
            options: ['Small nomadic bands', 'Writing and record keeping', 'No leaders', 'No religion'],
            correct: 1,
            explanation: 'The answer is Writing and record keeping. Writing is a key feature.'
        }
    ]
},
{
    name: '1.1 Summary: Early Humans and the Neolithic Revolution',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.1 Early Humans and the Neolithic Revolution</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: Early Humans and the Neolithic Revolution</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> Historians use evidence to reconstruct the past. That evidence shows humans spreading from Africa as hunter-gatherers, then — beginning about 12,000 years ago — turning to farming, a change that made civilization possible.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>BCE dates count down to 1 BCE; CE dates count up from 1 CE; there is no year 0.</li>
    <li>Primary sources come from the time studied; secondary sources interpret them later; all must be questioned with HIPP.</li>
    <li>Paleolithic people were nomadic hunter-gatherers who adapted with fire, tools, clothing, boats and language.</li>
    <li>Homo sapiens first appeared in Africa and spread to every continent except Antarctica.</li>
    <li>The Neolithic Revolution began c. 10,000 BCE in the Fertile Crescent and independently in other regions.</li>
    <li>Food surpluses led to villages, specialization and, eventually, civilizations with eight key characteristics.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.1 Thinking Like a Historian</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Chronology, primary and secondary sources, HIPP</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Source every document with HIPP</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.2 Paleolithic Life and Human Migration</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hunter-gatherer life, adaptation, migration out of Africa</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Support inferences with artifacts</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.1.3 The Neolithic Revolution and Civilization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Causes and effects of farming; characteristics of civilization</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Argue with claim, evidence and counterclaim</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">chronology</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">BCE / CE</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">primary source</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">secondary source</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">HIPP</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">artifact</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Paleolithic</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hunter-gatherer</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">nomad</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">migration</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Neolithic Revolution</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">domestication</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">surplus</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">specialization</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">civilization</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>From judging online sources to understanding where our food comes from, the skills and history of this topic connect directly to life today.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>In Topic 1.2 you will investigate four of the world’s first civilizations — Mesopotamia, Egypt and Nubia, the Indus Valley and ancient China — and compare how geography shaped them.</div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can order and calculate BCE and CE dates.</p>
    <p style="margin:6px 0;">✔️ I can analyze a source using HIPP.</p>
    <p style="margin:6px 0;">✔️ I can describe Paleolithic life and human migration.</p>
    <p style="margin:6px 0;">✔️ I can explain the causes and effects of the Neolithic Revolution.</p>
    <p style="margin:6px 0;">✔️ I can identify the characteristics of civilization.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.1 is that farming:',
            options: ['Ended all trade', 'Began in Europe', 'Made civilization possible', 'Happened overnight'],
            correct: 2,
            explanation: 'Surpluses led to cities and civilization.'
        },
        {
            question: 'Topic 1.2 will compare:',
            options: ['Modern nations', 'Medieval castles', 'Industrial cities', 'Four river valley civilizations'],
            correct: 3,
            explanation: 'Mesopotamia, Egypt, the Indus Valley and China.'
        },
        {
            question: 'HIPP is used to:',
            options: ['Analyze sources', 'Date fossils', 'Grow crops', 'Draw maps'],
            correct: 0,
            explanation: 'The answer is Analyze sources. It is a sourcing tool.'
        },
        {
            question: 'Homo sapiens first appeared in:',
            options: ['Europe', 'Africa', 'North America', 'Antarctica'],
            correct: 1,
            explanation: 'The oldest fossils come from Africa.'
        },
        {
            question: 'Domestication means:',
            options: ['Building cities', 'Writing laws', 'Taming and breeding plants and animals', 'Making stone tools'],
            correct: 2,
            explanation: 'The answer is Taming and breeding plants and animals. It was the basis of farming.'
        },
        {
            question: 'Which came first?',
            options: ['Cities', 'Hunting and gathering', 'Writing', 'Empires'],
            correct: 1,
            explanation: 'Foraging came long before farming and cities.'
        }
    ]
},
{
    name: '1.2.1 Mesopotamia: The Land Between the Rivers',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Rivers, Cities and Kings</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.1: Mesopotamia: The Land Between the Rivers</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how the Tigris and Euphrates rivers shaped Mesopotamia, how Sumerian city-states developed writing, religion and government, and how the Code of Hammurabi organized society.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Mesopotamia gave the world some of its first cities, its earliest known writing system and one of its oldest written law codes. Ideas such as written laws and the 60-minute hour trace back to this region.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⚖️ Written laws</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">⏱️ 60 minutes and 360 degrees</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📜 Writing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏙️ Cities</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌾 Irrigation farming</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📚 Literature</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how geography shaped the river valley civilizations. (D2.Geo)</li>
    <li>Describe the political, economic and social structures of Mesopotamia, Egypt and Nubia, the Indus Valley and ancient China. (D2.His.1)</li>
    <li>Analyze primary sources such as the Code of Hammurabi. (D2.His.10, D2.His.12)</li>
    <li>Compare early civilizations using evidence from multiple sources. (D2.His.16)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Tigris and Euphrates shaped life in Mesopotamia.</li>
    <li>Describe Sumerian city-states, ziggurats and cuneiform.</li>
    <li>Explain how the first empires formed.</li>
    <li>Analyze the Code of Hammurabi as a primary source.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How did the environment of Mesopotamia shape its civilization?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Topic 1.1 you learned the eight characteristics of civilization. Mesopotamia was one of the first places where they all appeared.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>The name <strong>Mesopotamia</strong> comes from Greek and means “land between the rivers.” It lay between the <strong>Tigris</strong> and <strong>Euphrates</strong> rivers, mostly in present-day Iraq, at the eastern end of the Fertile Crescent. The rivers brought water and rich silt, but they also flooded unpredictably and the summers were hot and dry.</p>
    <p>To farm, people had to work together to build <strong>irrigation</strong> canals, dikes and reservoirs. Managing this work required leaders, laws and record keeping — some of the key features of civilization.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>The rivers gave life, but only if people organized to control them. That organization helped create civilization.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>By about 3500 BCE, the people of <strong>Sumer</strong> in southern Mesopotamia had built cities such as Uruk and Ur. Each city controlled the surrounding farmland, forming a <strong>city-state</strong> with its own ruler and patron god. Around 2334 BCE, <strong>Sargon of Akkad</strong> conquered the Sumerian city-states and created what many historians consider the world’s first <strong>empire</strong>. Later, <strong>Hammurabi</strong> of Babylon (reigned c. 1792–1750 BCE) united much of Mesopotamia and issued his famous law code.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">city-state</strong>
    </p>
    <p style="margin:6px 0;">A city and the surrounding land it controls, with its own government.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Sumer, c. 3500 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Ur and Uruk were Sumerian city-states.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">irrigation</strong>
    </p>
    <p style="margin:6px 0;">Supplying land with water through canals or channels.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Mesopotamia and other river valleys</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Canals carried river water to fields.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">ziggurat</strong>
    </p>
    <p style="margin:6px 0;">A large, stepped temple tower in Mesopotamia.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Sumer and Babylon</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Ziggurat of Ur honored the moon god.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">cuneiform</strong>
    </p>
    <p style="margin:6px 0;">A writing system of wedge-shaped marks pressed into clay.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Sumer, c. 3200 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Scribes recorded taxes in cuneiform.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">polytheism</strong>
    </p>
    <p style="margin:6px 0;">Belief in many gods.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> most ancient civilizations</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sumerians were polytheistic.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">empire</strong>
    </p>
    <p style="margin:6px 0;">Several peoples or territories ruled by one ruler or government.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Akkad, c. 2334 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Sargon built the Akkadian Empire.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. Geography: Gifts and Challenges</h3>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 230" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Four River Valley Civilizations</text><rect x="14" y="48" width="158" height="140" rx="12" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="93" y="78" fill="#ffcc80" font-size="15" font-weight="bold" text-anchor="middle">Mesopotamia</text><path d="M34 100 q 20 -12 40 0 t 40 0 t 40 0" fill="none" stroke="#38bdf8" stroke-width="3"/><text x="93" y="128" fill="#e2e8f0" font-size="12" text-anchor="middle">Tigris & Euphrates</text><text x="93" y="150" fill="#fde68a" font-size="12" text-anchor="middle">cities by c. 3500 BCE</text><text x="93" y="172" fill="#cbd5e1" font-size="12" text-anchor="middle">cuneiform, city-states</text><rect x="185" y="48" width="158" height="140" rx="12" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="264" y="78" fill="#fde68a" font-size="15" font-weight="bold" text-anchor="middle">Egypt</text><path d="M205 100 q 20 -12 40 0 t 40 0 t 40 0" fill="none" stroke="#38bdf8" stroke-width="3"/><text x="264" y="128" fill="#e2e8f0" font-size="12" text-anchor="middle">Nile</text><text x="264" y="150" fill="#fde68a" font-size="12" text-anchor="middle">united c. 3100 BCE</text><text x="264" y="172" fill="#cbd5e1" font-size="12" text-anchor="middle">pharaohs, pyramids</text><rect x="356" y="48" width="158" height="140" rx="12" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="435" y="78" fill="#86efac" font-size="15" font-weight="bold" text-anchor="middle">Indus Valley</text><path d="M376 100 q 20 -12 40 0 t 40 0 t 40 0" fill="none" stroke="#38bdf8" stroke-width="3"/><text x="435" y="128" fill="#e2e8f0" font-size="12" text-anchor="middle">Indus</text><text x="435" y="150" fill="#fde68a" font-size="12" text-anchor="middle">cities by c. 2600 BCE</text><text x="435" y="172" fill="#cbd5e1" font-size="12" text-anchor="middle">planned cities</text><rect x="527" y="48" width="158" height="140" rx="12" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="606" y="78" fill="#67e8f9" font-size="15" font-weight="bold" text-anchor="middle">China</text><path d="M547 100 q 20 -12 40 0 t 40 0 t 40 0" fill="none" stroke="#38bdf8" stroke-width="3"/><text x="606" y="128" fill="#e2e8f0" font-size="12" text-anchor="middle">Huang He (Yellow)</text><text x="606" y="150" fill="#fde68a" font-size="12" text-anchor="middle">Shang from c. 1600 BCE</text><text x="606" y="172" fill="#cbd5e1" font-size="12" text-anchor="middle">bronze, oracle bones</text><text x="350" y="216" fill="#86efac" font-size="13" text-anchor="middle">Rivers gave water, fertile soil and transportation — but also floods that had to be managed.</text>
    </svg>
    </div>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Geographic feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Challenge</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Solution</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Unpredictable floods</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Floods could destroy crops and villages</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Dikes and levees to control water</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hot, dry summers</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Not enough rain for crops</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Irrigation canals from the rivers</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flat, open land</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few natural barriers against invaders</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">City walls and armies</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Few natural resources (little stone, wood or metal)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shortage of building and tool materials</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mud bricks and long-distance trade</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Sumerian Civilization</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Sumerian example</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cities and government</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">City-states ruled by kings who claimed the support of the gods</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Religion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Polytheism; a ziggurat in each city honored its patron god</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cuneiform, developed around 3200 BCE, first used to record trade and taxes</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Literature</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Epic of Gilgamesh, one of the oldest surviving works of literature</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Technology</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The wheel, the plow, sailboats and a number system based on 60</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Social classes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kings, priests and nobles at the top; farmers and enslaved people at the bottom</td>
    </tr>
    </table>
    </div>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 300" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Social Classes in Mesopotamia (simplified)</text><polygon points="290,46 410,46 462,88 238,88" fill="#10233d" stroke="#ffcc80" stroke-width="2"/><text x="350" y="72" fill="#ffcc80" font-size="14" font-weight="bold" text-anchor="middle">King</text><polygon points="238,92 462,92 514,134 186,134" fill="#10233d" stroke="#fde68a" stroke-width="2"/><text x="350" y="118" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Priests and nobles</text><polygon points="186,138 514,138 566,180 134,180" fill="#10233d" stroke="#86efac" stroke-width="2"/><text x="350" y="164" fill="#86efac" font-size="14" font-weight="bold" text-anchor="middle">Merchants and artisans</text><polygon points="134,184 566,184 618,226 82,226" fill="#10233d" stroke="#67e8f9" stroke-width="2"/><text x="350" y="210" fill="#67e8f9" font-size="14" font-weight="bold" text-anchor="middle">Farmers and laborers</text><polygon points="82,230 618,230 670,272 30,272" fill="#10233d" stroke="#c4b5fd" stroke-width="2"/><text x="350" y="256" fill="#c4b5fd" font-size="14" font-weight="bold" text-anchor="middle">Enslaved people</text><text x="350" y="290" fill="#94a3b8" font-size="12" text-anchor="middle">More power and wealth at the top; most people were farmers. Laws treated classes differently.</text>
    </svg>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>The Sumerian number system based on 60 is why we still have 60 seconds in a minute, 60 minutes in an hour and 360 degrees in a circle.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Primary Source: The Code of Hammurabi</h3>
    <div style="background:#0b2530;border-left:4px solid #06b6d4;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">📖 Reading Text</p>
    <div>
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Selected laws from the Code of Hammurabi (c. 1754 BCE; translation by L. W. King, 1910)</p>
    <p style="margin:8px 0;">196. “If a man put out the eye of another man, his eye shall be put out.”</p>
    <p style="margin:8px 0;">198. “If he put out the eye of a freed man, or break the bone of a freed man, he shall pay one gold mina.”</p>
    <p style="margin:8px 0;">199. “If he put out the eye of a man’s slave, or break the bone of a man’s slave, he shall pay one-half of its value.”</p>
    </div>
    </div>
    <p>The code contains 282 laws carved on a tall stone pillar called a stele, which is now in the Louvre Museum in Paris. At the top, a carving shows Hammurabi receiving authority from Shamash, the god of justice.</p>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Analyzing a primary source (D2.His.12)</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> What do laws 196, 198 and 199 reveal about Babylonian society?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Compare the punishments. Who receives equal punishment, and who receives less protection?</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Observe</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Injuring an equal is punished “an eye for an eye”; injuring a freed man or an enslaved person is punished with a payment.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Infer</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Punishments depended on the social class of the victim.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Conclude</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Babylonian society had a clear class structure, and the law did not treat all people equally.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The laws show that Babylon had distinct social classes and that justice depended on a person’s rank — injuries to higher-ranking people were punished more harshly.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> A law code reveals a society’s values: what it protected, what it punished and whom it valued most.</p>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What does “Mesopotamia” mean?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">“Land between the rivers.”</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What was cuneiform first used for?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Recording trade and taxes.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Who created the first empire in Mesopotamia?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Sargon of Akkad, around 2334 BCE.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect the ideas, beliefs and cultures of classmates and of the people we study, even when they differ from your own.</li>
    <li>Disagree with ideas, not people, and support every claim with evidence.</li>
    <li>Treat difficult topics — such as slavery, war and inequality — seriously and with care.</li>
    <li>Use school-approved sources and give credit to every source you quote or paraphrase.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Historical Thinking Skills You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Geographic reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Sourcing (HIPP)</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Close reading of primary sources</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Causation</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Contextualization</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Apply HIPP to the Code of Hammurabi. <strong>Historical context:</strong> Hammurabi ruled a newly united empire of many peoples. <strong>Intended audience:</strong> his subjects and judges. <strong>Purpose:</strong> to create order and show that he was a just king chosen by the gods. <strong>Point of view:</strong> the king’s. The code tells us the official rules — but not how often they were enforced, or how ordinary people experienced them.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might a ruler want laws to be written down and displayed in public?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffcc80;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Modern legal systems are also written down so that everyone can know the rules — an idea that goes back to codes like Hammurabi’s.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> Ancient irrigation in Mesopotamia gradually left salt in the soil and reduced harvests — an early lesson about the long-term effects of farming methods.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Archaeologists, museum curators, linguists who read cuneiform and lawyers who study legal history all work with Mesopotamia’s legacy.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Which two rivers formed Mesopotamia?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Land between the rivers.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Tigris and the Euphrates.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What was a ziggurat?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Religious building.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A stepped temple tower.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Why did Mesopotamians trade for stone and wood?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of geography.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Their region had few natural resources such as stone, wood and metal.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Write your name or a short message in a simplified cuneiform chart, and explain how writing helped Sumerian society.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Read five more laws from the Code of Hammurabi (provided by your teacher). Decide what problem each law was trying to solve.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Design a city-state: draw a map with a ziggurat, walls, canals and fields, and write three laws your city would need.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>View the Code of Hammurabi stele on a museum website. Describe the carving at the top and explain its purpose.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Name the two rivers of Mesopotamia.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Tigris and the Euphrates.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is cuneiform?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A writing system of wedge-shaped marks pressed into clay.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain why irrigation led to the growth of government.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Building and maintaining canals needed organized labor, planning and rules, so leaders and officials gained power.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> What was a city-state?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">An independent city and the farmland around it, with its own government.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ffcc80;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Using laws 196, 198 and 199, explain how the Code of Hammurabi reflects social classes.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Punishments for the same injury differ: equals face “an eye for an eye,” but injuring a freed man or enslaved person brings only a payment, showing that people were valued by class.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Give one Mesopotamian idea that we still use today.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Written laws, the 60-minute hour, 360 degrees in a circle, the wheel or writing.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.10: Identify one limitation of the Code of Hammurabi as evidence of daily life in Babylon.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows the official laws from the king’s point of view, but not whether they were enforced or how ordinary people actually lived.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>Mesopotamia, between the Tigris and Euphrates rivers, developed one of the first civilizations. Sumerians built city-states, ziggurats and irrigation systems and invented cuneiform. Sargon of Akkad created an early empire, and Hammurabi of Babylon issued a written law code that reveals a society divided into social classes.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Mesopotamia = land between the rivers.</li>
    <li>Sumer: city-states, ziggurats, cuneiform.</li>
    <li>Sargon of Akkad: first empire.</li>
    <li>Code of Hammurabi: 282 laws, c. 1754 BCE.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Rivers brought both benefits and dangers.</li>
    <li>Writing began for record keeping.</li>
    <li>Laws reflected social classes.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Confusing Sumer with Egypt.</li>
    <li>Thinking Hammurabi’s laws treated everyone equally.</li>
    <li>Forgetting the role of irrigation.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Link each geographic challenge to a solution.</li>
    <li>Use HIPP on every law code.</li>
    <li>Remember: cuneiform = wedge-shaped.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Quote the law number when using the code as evidence.</li>
    <li>Explain what a source reveals about values.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.Geo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How rivers shaped Mesopotamia.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.12</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Questions from primary sources.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.1</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Context of city-states and empires.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Justice</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for other cultures</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Critical thinking</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Law and government</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environment and farming</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> When you check the time, read a law or write a message, you use ideas first developed in Mesopotamia.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Write a paragraph comparing a modern law with one of Hammurabi’s laws.</li>
    <li>Label the Tigris, Euphrates and major Sumerian cities on your map.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Is “an eye for an eye” a fair form of justice? Why or why not?</li>
    <li>What surprised me most about Mesopotamia?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">City-state</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">An independent city and its lands.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Ziggurat</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Stepped temple tower.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Cuneiform</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Wedge-shaped writing.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Empire</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Many lands under one ruler.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain how geography shaped Mesopotamia.</p>
    <p style="margin:6px 0;">☐ I can describe Sumerian achievements.</p>
    <p style="margin:6px 0;">☐ I can explain the first empires.</p>
    <p style="margin:6px 0;">☐ I can analyze the Code of Hammurabi.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Mesopotamia means:',
            options: ['Land of the pharaohs', 'Fertile valley', 'City of gods', 'Land between the rivers'],
            correct: 3,
            explanation: 'The answer is Land between the rivers. The name is Greek.'
        },
        {
            question: 'Mesopotamia lay mostly in present-day:',
            options: ['Egypt', 'Iraq', 'India', 'China'],
            correct: 1,
            explanation: 'Between the Tigris and Euphrates.'
        },
        {
            question: 'Why did Mesopotamians build irrigation canals?',
            options: ['To travel to Egypt', 'Summers were hot and dry, so crops needed river water', 'To defend against elephants', 'To mine gold'],
            correct: 1,
            explanation: 'Irrigation brought water to fields.'
        },
        {
            question: 'A stepped temple tower in Mesopotamia is called a:',
            options: ['Pyramid', 'Stupa', 'Pagoda', 'Ziggurat'],
            correct: 3,
            explanation: 'Each city-state had a ziggurat.'
        },
        {
            question: 'Cuneiform was written by:',
            options: ['Painting on papyrus', 'Pressing wedge-shaped marks into clay', 'Carving on bamboo', 'Printing on paper'],
            correct: 1,
            explanation: 'The answer is Pressing wedge-shaped marks into clay. Cuneiform means wedge-shaped.'
        },
        {
            question: 'Who is often credited with creating the first empire?',
            options: ['Hammurabi', 'Gilgamesh', 'Sargon of Akkad', 'Menes'],
            correct: 2,
            explanation: 'Sargon united the Sumerian city-states c. 2334 BCE.'
        },
        {
            question: 'The Code of Hammurabi contains about how many laws?',
            options: ['282', '10', '1,000', '50'],
            correct: 0,
            explanation: 'The answer is 282. It has 282 laws.'
        },
        {
            question: 'Laws 196 and 199 show that Babylonian law:',
            options: ['Treated everyone equally', 'Had no punishments', 'Treated people differently by social class', 'Applied only to kings'],
            correct: 2,
            explanation: 'The answer is Treated people differently by social class. Punishments depended on rank.'
        },
        {
            question: 'Our 60-minute hour comes from:',
            options: ['Egyptian pyramids', 'Chinese oracle bones', 'Indus Valley weights', 'The Sumerian base-60 number system'],
            correct: 3,
            explanation: 'The answer is The Sumerian base-60 number system. Sumerians counted in sixties.'
        },
        {
            question: 'Which is one of the oldest surviving works of literature?',
            options: ['The Iliad', 'The Book of the Dead', 'The Epic of Gilgamesh', 'The Analects'],
            correct: 2,
            explanation: 'The answer is The Epic of Gilgamesh. It comes from Mesopotamia.'
        }
    ]
},
{
    name: '1.2.2 Ancient Egypt and Nubia',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Rivers, Cities and Kings</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.2: Ancient Egypt and Nubia</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn how the Nile River shaped Egypt, how pharaohs ruled, what Egyptians believed about the afterlife, and how the kingdom of Kush in Nubia interacted with and even ruled Egypt.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> Egypt lasted as a powerful civilization for nearly 3,000 years and built monuments that still stand. Nubia shows that African civilizations along the Nile traded, competed and shared ideas with Egypt.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Museums worldwide</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📜 Paper (from papyrus)</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📅 The 365-day calendar</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🩺 Early medicine</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏗️ Engineering</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🌍 African history</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how geography shaped the river valley civilizations. (D2.Geo)</li>
    <li>Describe the political, economic and social structures of Mesopotamia, Egypt and Nubia, the Indus Valley and ancient China. (D2.His.1)</li>
    <li>Analyze primary sources such as the Code of Hammurabi. (D2.His.10, D2.His.12)</li>
    <li>Compare early civilizations using evidence from multiple sources. (D2.His.16)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how the Nile shaped Egyptian life.</li>
    <li>Describe the power of the pharaohs and Egyptian religion.</li>
    <li>Identify Egyptian achievements such as hieroglyphics and pyramids.</li>
    <li>Describe the kingdom of Kush and its relationship with Egypt.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> How did the Nile River make Egyptian civilization possible?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> In Lesson 1.2.1 you studied Mesopotamia. As you learn about Egypt, notice how a different river created a different civilization.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Egypt is mostly desert, yet it became one of the richest civilizations of the ancient world. The reason is the <strong>Nile River</strong>, the longest river in Africa. Every year, the Nile flooded in a predictable pattern, spreading rich black silt across the fields. Egyptians called their land <em>Kemet</em>, “the black land,” after this fertile soil.</p>
    <p>Unlike the unpredictable Tigris and Euphrates, the Nile’s regular floods made farming reliable. Deserts on both sides protected Egypt from invasion, and the river itself was a highway for trade and travel.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>The Nile was Egypt’s water supply, farm, highway and shield all at once.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>Around 3100 BCE, a ruler often named as Menes (or Narmer) united Upper Egypt (in the south) and Lower Egypt (in the north) into one kingdom. Egypt was ruled by a series of <strong>dynasties</strong> — ruling families — whose kings became known as <strong>pharaohs</strong>. South of Egypt, along the upper Nile, lay <strong>Nubia</strong>, home to the kingdom of <strong>Kush</strong>, which was rich in gold and controlled trade routes into central Africa.</p>
    <div style="text-align:center;margin:12px 0;">
    <svg viewBox="0 0 700 200" width="700" style="max-width:100%;height:auto;background:#0f172a;border-radius:9px;" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif" font-size="14"><text x="350" y="26" fill="#e3f2fd" font-size="17" font-weight="bold" text-anchor="middle">Major Periods of Ancient Egypt</text><line x1="40" y1="96" x2="660" y2="96" stroke="#ffcc80" stroke-width="3"/><circle cx="105" cy="96" r="8" fill="#fde68a"/><text x="105" y="74" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Old Kingdom</text><text x="105" y="124" fill="#e2e8f0" font-size="12" text-anchor="middle">c. 2686–2181 BCE</text><text x="105" y="144" fill="#cbd5e1" font-size="12" text-anchor="middle">Age of Pyramids</text><circle cx="268" cy="96" r="8" fill="#fde68a"/><text x="268" y="74" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Middle Kingdom</text><text x="268" y="124" fill="#e2e8f0" font-size="12" text-anchor="middle">c. 2055–1650 BCE</text><text x="268" y="144" fill="#cbd5e1" font-size="12" text-anchor="middle">trade, literature</text><circle cx="431" cy="96" r="8" fill="#fde68a"/><text x="431" y="74" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">New Kingdom</text><text x="431" y="124" fill="#e2e8f0" font-size="12" text-anchor="middle">c. 1550–1069 BCE</text><text x="431" y="144" fill="#cbd5e1" font-size="12" text-anchor="middle">empire, Valley of the Kings</text><circle cx="594" cy="96" r="8" fill="#fde68a"/><text x="594" y="74" fill="#fde68a" font-size="14" font-weight="bold" text-anchor="middle">Kushite rule</text><text x="594" y="124" fill="#e2e8f0" font-size="12" text-anchor="middle">c. 744–656 BCE</text><text x="594" y="144" fill="#cbd5e1" font-size="12" text-anchor="middle">Nubian pharaohs</text><text x="350" y="182" fill="#86efac" font-size="12" text-anchor="middle">Upper and Lower Egypt were united around 3100 BCE. Dates are approximate.</text>
    </svg>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">pharaoh</strong>
    </p>
    <p style="margin:6px 0;">The title for the king of ancient Egypt, believed to be a god on earth.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Egypt, c. 3100–30 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Khufu was the pharaoh who built the Great Pyramid.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">dynasty</strong>
    </p>
    <p style="margin:6px 0;">A series of rulers from the same family.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Egypt, China and others</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Egypt had about 30 dynasties.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">theocracy</strong>
    </p>
    <p style="margin:6px 0;">A government in which rulers are seen as divine or rule in the name of gods.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Egypt</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Egypt’s pharaohs led a theocracy.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">hieroglyphics</strong>
    </p>
    <p style="margin:6px 0;">The Egyptian writing system using pictures and symbols.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Egypt, c. 3200 BCE onward</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Hieroglyphics were carved on temple walls.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">mummification</strong>
    </p>
    <p style="margin:6px 0;">The process of preserving a body after death.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Egypt</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Egyptians believed the body was needed in the afterlife.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Kush</strong>
    </p>
    <p style="margin:6px 0;">A kingdom in Nubia, south of Egypt, along the Nile.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Nubia (modern Sudan)</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Kushite kings ruled Egypt in the 700s BCE.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Gift of the Nile</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature of the Nile</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Effect on Egypt</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Predictable yearly flood</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rich silt and reliable harvests of wheat, barley and flax</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Flows north; winds blow south</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Boats could float downstream and sail upstream — easy travel and trade</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Deserts on both sides</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Natural protection from invaders</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Papyrus reeds along the banks</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Used to make paper, rope, sandals and boats</td>
    </tr>
    </table>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>The Greek historian Herodotus, who visited Egypt in the 400s BCE, described Egypt as a gift of the river — a famous idea that shows how outsiders saw the Nile’s importance.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Pharaohs, Religion and Achievements</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Area</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key ideas</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Government</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The pharaoh was both king and a god on earth (a theocracy). Officials called viziers and scribes ran the government and collected taxes.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Religion</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Polytheism with gods such as Ra (sun god) and Osiris (god of the afterlife). Egyptians believed in life after death.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Afterlife</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bodies were mummified and buried with goods needed in the afterlife.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Architecture</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pyramids at Giza, including the Great Pyramid built for Khufu around 2560 BCE, and later temples such as Karnak.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Hieroglyphics, written on papyrus and carved on monuments; deciphered in 1822 by Jean-François Champollion using the Rosetta Stone.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Science</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A 365-day calendar, geometry for surveying flooded fields, and medical knowledge.</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Comparing two civilizations</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> Explain one way the geography of Egypt led to a different civilization from Mesopotamia.</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Compare the rivers and the natural barriers of the two regions.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: Egypt</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Predictable Nile floods and protective deserts.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Mesopotamia</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Unpredictable floods and flat, open land with few barriers.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Effect</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Egypt was united under one ruler for long periods and was more stable; Mesopotamia was divided into rival city-states and often invaded.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> Because deserts protected Egypt and the Nile was predictable, Egypt became a stable, united kingdom, while Mesopotamia’s open land and unpredictable rivers led to competing city-states and frequent conquest.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> Comparison answers must name both civilizations and explain a cause, not just list differences.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. Nubia and the Kingdom of Kush</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Aspect</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Kush</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Location</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Along the Nile south of Egypt, in present-day Sudan</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Resources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gold, ivory, ebony and access to trade routes into central Africa</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Relationship with Egypt</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trading partner, rival and at times a conquered land; Egypt ruled Nubia during the New Kingdom</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kushite pharaohs</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Around 744 BCE, Kushite kings such as Piye conquered Egypt and ruled it as the 25th Dynasty until about 656 BCE</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Later Kush</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The capital moved to Meroë, a center of iron-working, where Kushites built hundreds of pyramids and developed their own script</td>
    </tr>
    </table>
    </div>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Kush adopted some Egyptian customs, such as pyramids and pharaohs, but kept its own gods, language and traditions. Influence flowed in both directions.</div>
    </div>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Why were the Nile’s floods so important?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They were predictable and left rich silt for farming.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What was a pharaoh?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The king of Egypt, believed to be a god on earth.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What did the kingdom of Kush do around 744 BCE?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It conquered Egypt and ruled it as the 25th Dynasty.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect the ideas, beliefs and cultures of classmates and of the people we study, even when they differ from your own.</li>
    <li>Disagree with ideas, not people, and support every claim with evidence.</li>
    <li>Treat difficult topics — such as slavery, war and inequality — seriously and with care.</li>
    <li>Use school-approved sources and give credit to every source you quote or paraphrase.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Historical Thinking Skills You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparing civilizations</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Geographic reasoning</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Interpreting artifacts</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Understanding perspective</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Change and continuity</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>Much of what we know about Egypt comes from tombs and temples built for pharaohs and nobles. These sources tell us a great deal about the powerful but less about ordinary farmers and workers. Archaeologists have helped fill this gap by excavating workers’ villages, such as the one near the pyramids at Giza, which shows that many pyramid builders were paid, fed and housed laborers.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>Why might historians in the past have paid more attention to Egypt than to Nubia? How might that affect what we know?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffcc80;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> The 365-day calendar and paper-like writing materials both have roots in ancient Egypt.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> The Aswan High Dam, completed in 1970, ended the Nile’s yearly floods, bringing electricity and flood control but also reducing the natural silt that once fertilized fields.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Egyptologists, archaeologists, conservators, tour guides and engineers who study ancient construction all work with Egypt’s and Nubia’s heritage.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> What did Egyptians call their land, and why?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of silt.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Kemet, “the black land,” after the dark fertile soil.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> What helped scholars read hieroglyphics?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: A stone with three scripts.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Rosetta Stone, deciphered by Champollion in 1822.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Where was Kush located?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Nubia.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">South of Egypt along the Nile, in present-day Sudan.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw a Venn diagram comparing Egypt and Mesopotamia in geography, government, religion and writing.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>One partner explains how the Nile helped Egypt; the other explains how it could also cause problems. Combine your ideas.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Create a museum display on Kush, with a map, three artifacts or achievements and a label explaining its relationship with Egypt.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Explore a virtual tour of the Giza pyramids or a museum Egyptian collection. Record three facts about how the pyramids were built.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Which river made Egyptian civilization possible?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Nile.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What is hieroglyphics?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Egyptian writing system of pictures and symbols.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Explain how deserts helped Egypt.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They acted as natural barriers that protected Egypt from invaders.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why did Egyptians mummify their dead?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They believed the body was needed in the afterlife.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ffcc80;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Explain why Egypt was more politically stable than Mesopotamia.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Predictable floods and natural barriers allowed Egypt to stay united under one ruler, while Mesopotamia’s open land and rivalries led to frequent wars.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Name one Egyptian achievement we still use today.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The 365-day calendar, geometry for measuring land, or paper-like writing materials.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.1: Explain how Kush’s location and resources shaped its relationship with Egypt.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Kush was rich in gold and controlled trade routes south of Egypt, so it was valuable to Egypt as a trading partner and target, and powerful enough to conquer Egypt around 744 BCE.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Nile’s predictable floods, fertile soil and protective deserts allowed Egypt to become a stable, united kingdom ruled by pharaohs for nearly 3,000 years. Egyptians built pyramids, developed hieroglyphics and a 365-day calendar, and believed in an afterlife. To the south, the Nubian kingdom of Kush traded with Egypt, was ruled by it, and later conquered it.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Nile: predictable floods and rich silt.</li>
    <li>Pharaoh = god-king; Egypt was a theocracy.</li>
    <li>Achievements: pyramids, hieroglyphics, calendar.</li>
    <li>Kush: gold, trade, 25th Dynasty, Meroë.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Egypt was united c. 3100 BCE.</li>
    <li>The Great Pyramid was built c. 2560 BCE.</li>
    <li>Influence flowed both ways between Egypt and Kush.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Thinking enslaved people built all the pyramids.</li>
    <li>Ignoring Nubia in the story of the Nile.</li>
    <li>Confusing hieroglyphics with cuneiform.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Compare Egypt and Mesopotamia in a chart.</li>
    <li>Link each achievement to a need.</li>
    <li>Use the Egypt timeline.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain geography’s effect on government.</li>
    <li>Include Kush in answers about the Nile valley.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.Geo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">How the Nile shaped Egypt.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.1</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Context of Egypt–Kush relations.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.10</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limits of tomb and temple evidence.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for African heritage</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Fairness in perspective</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Environment and rivers</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Cultural exchange</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> The Nile still supports most of Egypt’s population, and decisions about its water affect millions of people today.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete a Venn diagram comparing Egypt and Kush.</li>
    <li>Research one pharaoh and write a short profile.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>How did learning about Kush change my picture of ancient Africa?</li>
    <li>Which Egyptian achievement impresses me most?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Pharaoh</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Egyptian god-king.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Dynasty</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Ruling family.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Hieroglyphics</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Egyptian picture writing.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Kush</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nubian kingdom south of Egypt.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can explain how the Nile shaped Egypt.</p>
    <p style="margin:6px 0;">☐ I can describe pharaohs and Egyptian religion.</p>
    <p style="margin:6px 0;">☐ I can identify Egyptian achievements.</p>
    <p style="margin:6px 0;">☐ I can describe Kush and its relationship with Egypt.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The Nile’s floods were important because they were:',
            options: ['Unpredictable and destructive', 'Predictable and left fertile silt', 'Salty', 'Rare'],
            correct: 1,
            explanation: 'Regular floods made farming reliable.'
        },
        {
            question: 'Egyptians called their land Kemet, meaning:',
            options: ['The red desert', 'The river kingdom', 'The black land', 'The land of gods'],
            correct: 2,
            explanation: 'Named for its dark, fertile soil.'
        },
        {
            question: 'Upper and Lower Egypt were united around:',
            options: ['1000 BCE', '500 CE', '3100 BCE', '1500 BCE'],
            correct: 2,
            explanation: 'Traditionally by Menes or Narmer.'
        },
        {
            question: 'A government in which the ruler is considered divine is a:',
            options: ['Democracy', 'Republic', 'City-state', 'Theocracy'],
            correct: 3,
            explanation: 'The answer is Theocracy. Pharaohs were seen as gods.'
        },
        {
            question: 'The Great Pyramid at Giza was built for:',
            options: ['Hammurabi', 'Sargon', 'Piye', 'Khufu'],
            correct: 3,
            explanation: 'The answer is Khufu. Around 2560 BCE.'
        },
        {
            question: 'Hieroglyphics were deciphered with the help of:',
            options: ['The Rosetta Stone', 'The Code of Hammurabi', 'Oracle bones', 'The Epic of Gilgamesh'],
            correct: 0,
            explanation: 'Champollion deciphered them in 1822.'
        },
        {
            question: 'Why did Egyptians mummify bodies?',
            options: ['They believed the body was needed in the afterlife', 'To scare enemies', 'To grow crops', 'To record taxes'],
            correct: 0,
            explanation: 'Preservation was linked to beliefs about life after death.'
        },
        {
            question: 'Kush was located:',
            options: ['North of Egypt in Europe', 'South of Egypt along the Nile', 'In Mesopotamia', 'In China'],
            correct: 1,
            explanation: 'The answer is South of Egypt along the Nile. In Nubia, present-day Sudan.'
        },
        {
            question: 'Around 744 BCE, Kushite kings:',
            options: ['Were conquered by China', 'Built the first ziggurat', 'Conquered Egypt and ruled it', 'Invented cuneiform'],
            correct: 2,
            explanation: 'They ruled as the 25th Dynasty.'
        },
        {
            question: 'Meroë, a later capital of Kush, was known for:',
            options: ['Oracle bones', 'Iron-working', 'Ziggurats', 'The Rosetta Stone'],
            correct: 1,
            explanation: 'Meroë was a center of iron production.'
        }
    ]
},
{
    name: '1.2.3 The Indus Valley and Ancient China',
    type: 'lesson',
    duration: '55 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Lesson</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span> <span style="color:#e3f2fd;font-size:13px;">· 🎨 Theme: Rivers, Cities and Kings</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📘 Lesson 1.2.3: The Indus Valley and Ancient China</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">Introduction:</strong> You will learn about the planned cities of the Indus Valley, the mystery of their undeciphered script, and the Shang and Zhou dynasties of ancient China, including oracle bones and the Mandate of Heaven.</p>
    <p><strong style="color:#fde68a;">Why does this matter?</strong> The Indus Valley built some of the most advanced cities of the ancient world, and China developed a civilization whose writing and political ideas continued for thousands of years.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Where will you use this?</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏙️ City planning</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🚰 Sanitation and drainage</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">📜 Chinese writing</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🏛️ Ideas about legitimate rule</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🥉 Bronze casting</span><span style="background:#0b1a2e;border:1px solid #bbdefb;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">🧵 Silk</span>
    </div>
    <div style="background:rgba(15,23,42,0.55);border-radius:10px;padding:12px 14px;margin-top:12px;">
    <p style="margin:0 0 4px 0;"><strong style="color:#e3f2fd;">🎯 Learning targets:</strong> By the end of this topic, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Explain how geography shaped the river valley civilizations. (D2.Geo)</li>
    <li>Describe the political, economic and social structures of Mesopotamia, Egypt and Nubia, the Indus Valley and ancient China. (D2.His.1)</li>
    <li>Analyze primary sources such as the Code of Hammurabi. (D2.His.10, D2.His.12)</li>
    <li>Compare early civilizations using evidence from multiple sources. (D2.His.16)</li>
    </ul>
    <p style="margin:8px 0 4px 0;"><strong style="color:#e3f2fd;">🏁 Lesson objectives:</strong> By the end of this lesson, you should be able to:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Describe the geography and cities of the Indus Valley civilization.</li>
    <li>Explain why the Indus script and the civilization’s decline remain mysteries.</li>
    <li>Describe the Shang dynasty and the use of oracle bones.</li>
    <li>Explain the Mandate of Heaven and the dynastic cycle.</li>
    </ul>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">❓ Essential question:</strong> What can archaeology reveal about civilizations whose writing we cannot read?</p>
    <p style="margin:8px 0 0 0;"><strong style="color:#e3f2fd;">🧰 What you already know:</strong> You have studied Mesopotamia and Egypt. Now you will complete the set of four river valley civilizations.</p>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">👩🏾‍🔬 Teacher Explanation</h3>
    <p>Imagine discovering an ancient city with straight streets laid out in a grid, houses with private bathrooms connected to covered drains, and a huge public bath — all built about 4,500 years ago. This was <strong>Mohenjo-daro</strong>, one of the great cities of the <strong>Indus Valley</strong> (or Harappan) civilization, in present-day Pakistan and northwest India.</p>
    <p>Far to the east, along the <strong>Huang He</strong> (Yellow River), Chinese civilization arose. The Huang He is called “China’s Sorrow” because its floods were so destructive — yet its yellow silt made the land fertile.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">🗣️ In Simple Words</p>
    <div>Indus Valley: amazing planned cities, but a script we still cannot read. China: a long line of dynasties and a writing system still in use today.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">🔭 Historical Context</h3>
    <p>The Indus Valley civilization flourished from about 2600 to 1900 BCE, with major cities such as Harappa and Mohenjo-daro. It covered a larger area than Egypt or Mesopotamia. Its script appears on hundreds of small stone seals, but no one has deciphered it. In China, the <strong>Shang dynasty</strong> ruled the Huang He valley from about 1600 to 1046 BCE and left the earliest known Chinese writing. The <strong>Zhou dynasty</strong> then overthrew the Shang and ruled from 1046 to 256 BCE.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📚 Key Terms</h3>
    <p>Learn each term and when or where it applies. Use the example to see it in context.</p>
    <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Harappan civilization</strong>
    </p>
    <p style="margin:6px 0;">Another name for the Indus Valley civilization, after the city of Harappa.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Indus Valley, c. 2600–1900 BCE</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Harappan cities used standardized bricks.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">citadel</strong>
    </p>
    <p style="margin:6px 0;">A fortified, raised area of a city.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Indus Valley and elsewhere</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Mohenjo-daro had a citadel with a great bath.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">oracle bones</strong>
    </p>
    <p style="margin:6px 0;">Animal bones or shells used by Shang priests to ask questions of ancestors and gods.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Shang China</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Oracle bones show the earliest Chinese writing.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">Mandate of Heaven</strong>
    </p>
    <p style="margin:6px 0;">The Chinese belief that Heaven gave a just ruler the right to rule.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> Zhou China and later</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>The Zhou used it to justify replacing the Shang.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">dynastic cycle</strong>
    </p>
    <p style="margin:6px 0;">The pattern of rise, decline and replacement of dynasties.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> China</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Floods and rebellions signaled a dynasty’s decline.</em>
    </p>
    </div>
    <div style="flex:1 1 250px;background:#0b1a2e;border:1px solid #33415c;border-top:3px solid #ffcc80;border-radius:10px;padding:12px 14px;">
    <p style="margin:0;font-size:18px;"><strong style="color:#fde68a;">ancestor worship</strong>
    </p>
    <p style="margin:6px 0;">Honoring and asking for help from the spirits of dead relatives.</p>
    <p style="margin:4px 0;font-size:14px;"><span style="color:#e3f2fd;">📍 Time or place:</span> China</p>
    <p style="margin:6px 0 0 0;font-size:14px;color:#cbd5e1;">🔎 <em>Shang kings consulted ancestors with oracle bones.</em>
    </p>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">1. The Indus Valley Civilization</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Feature</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Evidence</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">What it suggests</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Grid-pattern streets</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Straight, wide streets crossing at right angles</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Strong central planning</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Advanced drainage</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Covered drains and private bathrooms in many houses</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Concern for public health and organized city services</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Standardized bricks and weights</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bricks and stone weights of the same sizes across many cities</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trade and a shared system of measurement</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Great Bath</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A large, waterproofed pool at Mohenjo-daro</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Possible religious or ritual use</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Seals with script</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Small stone seals with animals and symbols</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Trade and ownership marks; a writing system still undeciphered</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Long-distance trade</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Indus seals found in Mesopotamia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Contact and trade between civilizations</td>
    </tr>
    </table>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Mistake</p>
    <div>Historians do not know for certain why the Indus cities declined after about 1900 BCE. Possible causes include climate change, shifting rivers, floods and the decline of trade. Be careful not to state one cause as fact.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">2. Ancient China: The Shang and Zhou</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Dynasty</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Dates (approx.)</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key features</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shang</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">c. 1600–1046 BCE</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kings ruled with nobles; skilled bronze casting; ancestor worship; oracle bones with the earliest known Chinese writing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zhou</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1046–256 BCE</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Justified rule with the Mandate of Heaven; feudal system of lords; iron tools; growth of trade and philosophy</td>
    </tr>
    </table>
    </div>
    <div style="background:#0b1a2e;border-left:4px solid #1e88e5;border-radius:9px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 8px 0;color:#bbdefb;font-weight:bold;">✏️ Worked Example 1: Understanding the Mandate of Heaven</p>
    <p style="margin:4px 0;"><strong style="color:#fde68a;">Task:</strong> How did the Mandate of Heaven help the Zhou justify overthrowing the Shang?</p>
    <p style="margin:8px 0;color:#cbd5e1;font-style:italic;">🧠 <strong>How to think about it:</strong> Ask what the idea says about who has the right to rule, and how that right can be lost.</p>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">1</span><strong style="color:#e3f2fd;">Step 1: The idea</strong>
    </p>
    <div style="margin:6px 0 0 34px;">Heaven grants the right to rule to a just and wise ruler.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">2</span><strong style="color:#e3f2fd;">Step 2: Losing it</strong>
    </p>
    <div style="margin:6px 0 0 34px;">If a ruler is cruel or the land suffers floods, famine or rebellion, it is a sign that Heaven has withdrawn its support.</div>
    </div>
    <div style="background:#132a45;border-radius:8px;padding:10px 12px;margin:8px 0;">
    <p style="margin:0;"><span style="display:inline-block;min-width:26px;height:26px;line-height:26px;text-align:center;border-radius:50%;background:#1e88e5;color:#0b1220;font-weight:bold;margin-right:8px;">3</span><strong style="color:#e3f2fd;">Step 3: Applying it</strong>
    </p>
    <div style="margin:6px 0 0 34px;">The Zhou claimed the last Shang king was cruel and had lost the Mandate, so their rebellion was approved by Heaven.</div>
    </div>
    <div style="background:#0d1b2e;border:1px solid #1e88e5;border-radius:8px;padding:10px 12px;margin-top:10px;"><strong style="color:#bbdefb;">✅ Model answer:</strong> The Mandate of Heaven allowed the Zhou to argue that the Shang had lost Heaven’s approval through bad rule, so replacing them was legitimate.</div>
    <p style="margin:8px 0 0 0;color:#6ee7b7;">🌟 <strong>Why this works:</strong> The idea gave every new dynasty a reason to rule — and gave people a reason to rebel against bad rulers — creating the dynastic cycle.</p>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Chinese characters today developed from the writing on Shang oracle bones, making Chinese one of the oldest continuously used writing systems in the world.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">3. The Dynastic Cycle</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>A new dynasty comes to power and claims the Mandate of Heaven.</li>
    <li>The dynasty brings peace, builds projects and grows strong.</li>
    <li>Over time, rulers become corrupt or weak; taxes rise and projects are neglected.</li>
    <li>Disasters, famine and rebellions break out — signs the Mandate is lost.</li>
    <li>A new leader overthrows the old dynasty and claims the Mandate, and the cycle begins again.</li>
    </ol>
    <div style="background:#1e1b4b;border:1px solid #6366f1;border-radius:12px;padding:16px;margin:16px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🎯 Interactive Questions 1 <span style="font-weight:normal;color:#e3f2fd;font-size:14px;">— try first, then open the answer.</span>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> Name two major cities of the Indus Valley civilization.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Harappa and Mohenjo-daro.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> What were oracle bones used for?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">To ask questions of ancestors and gods; they carry the earliest known Chinese writing.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> What is the Mandate of Heaven?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The belief that Heaven grants a just ruler the right to rule and can withdraw it from a bad ruler.</div>
    </details>
    </div>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Classroom Expectations</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Respect the ideas, beliefs and cultures of classmates and of the people we study, even when they differ from your own.</li>
    <li>Disagree with ideas, not people, and support every claim with evidence.</li>
    <li>Treat difficult topics — such as slavery, war and inequality — seriously and with care.</li>
    <li>Use school-approved sources and give credit to every source you quote or paraphrase.</li>
    </ul>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧰 Historical Thinking Skills You Will Use</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Inferring from archaeology</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Recognizing uncertainty</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Understanding political ideas</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Change and continuity</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Comparison</span>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Thinking Like a Historian</h3>
    <p>The Indus Valley shows the limits of evidence. Without readable writing, we cannot learn the names of its rulers, its laws or its beliefs in their own words. Historians must rely on artifacts and careful inference, and they must say clearly what is known, what is likely and what is still uncertain.</p>
    <div style="background:#2a1426;border-left:4px solid #ec4899;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#f9a8d4;font-weight:bold;">🤔 What Do You Think?</p>
    <div>If archaeologists cannot read the Indus script, how can they still tell that the cities were well organized?</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #ffcc80;">
    <h3 style="color:#bbdefb;margin-top:0;">🌍 History in Today’s World</h3>
    <p style="margin:0 0 4px 0;"><strong style="color:#fde68a;">🏠 Real life:</strong> Modern city planners still use ideas the Indus Valley pioneered: grid streets, sanitation systems and standard building materials.</p>
    <p style="margin:6px 0 4px 0;"><strong style="color:#fde68a;">🌳 Environment:</strong> The changing course of rivers and climate shifts may have contributed to the decline of the Indus cities — a reminder that environmental change can reshape societies.</p>
    <p style="margin:6px 0 0 0;"><strong style="color:#fde68a;">🏭 Industry and careers:</strong> Urban planners, archaeologists, sinologists (experts on China) and linguists trying to decipher ancient scripts all draw on these civilizations.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧭 Guided Practice</h3>
    <p>Let us do these together. Read the task, use the hint, then compare your answer.</p>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">1.</strong> Why is the Huang He called “China’s Sorrow”?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: Think of the danger of the river.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its floods were very destructive.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">2.</strong> Has the Indus script been deciphered?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It is one of history’s great mysteries.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">No — it remains unread.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:9px;padding:10px 14px;margin:10px 0;">
    <p style="margin:0;"><strong style="color:#fde68a;">3.</strong> Which dynasty used the Mandate of Heaven to justify its rule?</p>
    <p style="margin:4px 0;color:#cbd5e1;font-style:italic;">🪜 Hint: It replaced the Shang.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Zhou.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🛠️ Learning Activities</h3>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">🧍 Independent Activity</p>
    <div>Draw a diagram of the dynastic cycle with five labeled stages.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👥 Pair Activity</p>
    <div>Compare a map of Mohenjo-daro with a map of a modern city. List three similarities in planning.</div>
    </div>
    <div style="background:#1e1b4b;border-left:4px solid #818cf8;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#c7d2fe;font-weight:bold;">👨‍👩‍👧‍👦 Group Activity</p>
    <div>Hold a “Mandate of Heaven” trial: one side argues a ruler has lost the Mandate, the other defends the ruler, using evidence such as harvests and rebellions.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #22c55e;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">💻 Digital Activity</p>
    <div>Search a museum website for Indus seals or Shang oracle bones. Describe one object and what it reveals.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Practice Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #86efac;">
    <p style="margin:0 0 6px 0;color:#86efac;font-weight:bold;">Easy</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> On which river did the Indus Valley civilization develop?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Indus River.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What was the first Chinese dynasty with written records?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">The Shang dynasty.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Medium</p>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Give two pieces of evidence that Indus cities were carefully planned.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Grid streets, covered drains, standardized bricks and weights, citadels.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Explain what oracle bones were.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Bones or shells used by Shang priests to ask ancestors and gods questions; the cracks were read as answers and the questions were written on them.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #ffcc80;">
    <p style="margin:0 0 6px 0;color:#ffcc80;font-weight:bold;">Challenging</p>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why is it difficult to know why the Indus civilization declined?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its writing cannot be read, so historians rely on artifacts and environmental evidence, which suggest several possible causes but no certainty.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #5eead4;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">Real Life</p>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> How might the Mandate of Heaven compare with modern ideas about when people can replace leaders?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Both suggest leaders must govern well to keep the right to rule; today, many countries use elections rather than rebellion to replace leaders.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #c4b5fd;">
    <p style="margin:0 0 6px 0;color:#c4b5fd;font-weight:bold;">Standards Practice</p>
    <p style="margin:8px 0 2px 0;"><strong>Q7.</strong> D2.His.10: What is one limitation of studying the Indus Valley civilization compared with Mesopotamia?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its script is undeciphered, so we lack written records of its rulers, laws and beliefs, while Mesopotamian cuneiform can be read.</div>
    </details>
    </div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🧠 Lesson Summary</h3>
    <p>The Indus Valley civilization (c. 2600–1900 BCE) built carefully planned cities such as Harappa and Mohenjo-daro with grid streets, drainage and standardized weights, but its script remains undeciphered and the reasons for its decline are uncertain. In China, the Shang dynasty left oracle bones with the earliest Chinese writing, and the Zhou introduced the Mandate of Heaven, which shaped the dynastic cycle for thousands of years.</p>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🗒️ Review notes</h4>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Indus: Harappa, Mohenjo-daro, planned cities.</li>
    <li>Indus script undeciphered; decline uncertain.</li>
    <li>Shang: bronze, ancestor worship, oracle bones.</li>
    <li>Zhou: Mandate of Heaven; dynastic cycle.</li>
    </ul>
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:20px;">
    <div style="flex:1 1 260px;background:#0c2a1f;border-left:4px solid #10b981;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📌 Remember Box</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Say “possible causes” for the Indus decline.</li>
    <li>Chinese writing has continued for over 3,000 years.</li>
    <li>The Mandate could be lost by bad rule.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a1215;border-left:4px solid #ef4444;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">⚠️ Common Misconceptions</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Stating one certain cause for the Indus decline.</li>
    <li>Confusing the Shang and the Zhou.</li>
    <li>Thinking the Mandate of Heaven belonged to one family forever.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#2a2410;border-left:4px solid #f59e0b;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">💡 Teacher Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Use a four-civilization comparison chart.</li>
    <li>Draw the dynastic cycle as a circle.</li>
    <li>Link each artifact to an inference.</li>
    </ul>
    </div>
    <div style="flex:1 1 260px;background:#10233d;border-left:4px solid #1e88e5;border-radius:10px;padding:12px 14px;">
    <p style="margin:0 0 6px 0;font-weight:bold;color:#f1f5f9;">📝 Test Tips</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Distinguish what is known from what is uncertain.</li>
    <li>Explain how the Mandate justified changes in rule.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.10</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limits of evidence for the Indus Valley.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.His.2</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Continuity of Chinese writing and political ideas.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#5eead4;">D2.Geo</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">River geography of the Indus and Huang He.</td>
    </tr>
    </table>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">💚 Habits of mind</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Intellectual honesty</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Curiosity</span><span style="background:#0b1a2e;border:1px solid #10b981;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Respect for diverse civilizations</span>
    </div>
    <h4 style="color:#e3f2fd;margin:16px 0 6px 0;">🧩 Real-world connections</h4>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">City planning and public health</span><span style="background:#0b1a2e;border:1px solid #f59e0b;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Government and legitimacy</span>
    </div>
    <p><strong style="color:#5eead4;">Real-life use:</strong> Ideas about clean cities and about leaders needing to govern well still matter in every country today.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏠 Homework</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Complete the four-civilization comparison chart.</li>
    <li>Write a paragraph explaining the dynastic cycle using the Shang and Zhou as examples.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflection</h3>
    <p>Answer honestly in your journal:</p>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>What would I most like to learn if the Indus script were deciphered?</li>
    <li>Is the Mandate of Heaven a fair way to judge leaders?</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Citadel</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Fortified high area of a city.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Oracle bones</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Bones used to ask the gods questions.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Mandate of Heaven</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Heaven’s approval to rule.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;"><strong style="color:#fde68a;">Dynastic cycle</strong>
    </td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rise and fall of dynasties.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Self-Check</h3>
    <p>Tick ☑ only if you can do it without looking at the notes.</p>
    <p style="margin:6px 0;">☐ I can describe Indus Valley cities.</p>
    <p style="margin:6px 0;">☐ I can explain the mysteries of the Indus Valley.</p>
    <p style="margin:6px 0;">☐ I can describe the Shang and oracle bones.</p>
    <p style="margin:6px 0;">☐ I can explain the Mandate of Heaven and the dynastic cycle.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Two major cities of the Indus Valley civilization were:',
            options: ['Harappa and Mohenjo-daro', 'Ur and Uruk', 'Memphis and Thebes', 'Anyang and Xi’an'],
            correct: 0,
            explanation: 'Both are in present-day Pakistan.'
        },
        {
            question: 'Indus Valley cities are known for:',
            options: ['Ziggurats', 'Grid streets and advanced drainage', 'Pyramids', 'Oracle bones'],
            correct: 1,
            explanation: 'The answer is Grid streets and advanced drainage. They were carefully planned.'
        },
        {
            question: 'The Indus script:',
            options: ['Was deciphered with the Rosetta Stone', 'Has not been deciphered', 'Is the same as cuneiform', 'Is the basis of English'],
            correct: 1,
            explanation: 'The answer is Has not been deciphered. No one can read it yet.'
        },
        {
            question: 'Indus seals found in Mesopotamia are evidence of:',
            options: ['Conquest by Egypt', 'A shared language', 'Long-distance trade', 'Farming in Europe'],
            correct: 2,
            explanation: 'The answer is Long-distance trade. The two regions traded.'
        },
        {
            question: 'The Huang He is also called:',
            options: ['The Gift of the Nile', 'The Land Between the Rivers', 'The Black Land', 'China’s Sorrow'],
            correct: 3,
            explanation: 'The answer is China’s Sorrow. Its floods were destructive.'
        },
        {
            question: 'The Shang dynasty ruled from about:',
            options: ['3100 to 2000 BCE', '500 to 200 BCE', '100 to 500 CE', '1600 to 1046 BCE'],
            correct: 3,
            explanation: 'The answer is 1600 to 1046 BCE. It was followed by the Zhou.'
        },
        {
            question: 'Oracle bones were used to:',
            options: ['Ask questions of ancestors and gods', 'Build houses', 'Measure weights', 'Make bronze'],
            correct: 0,
            explanation: 'Priests read the cracks as answers.'
        },
        {
            question: 'The Mandate of Heaven said that:',
            options: ['Kings can never be replaced', 'Priests should rule', 'Heaven gives a just ruler the right to rule', 'All people are gods'],
            correct: 2,
            explanation: 'The answer is Heaven gives a just ruler the right to rule. Bad rulers could lose it.'
        },
        {
            question: 'Floods, famine and rebellions were seen as signs that a dynasty had:',
            options: ['Gained more power', 'Become a democracy', 'Ended the dynastic cycle', 'Lost the Mandate of Heaven'],
            correct: 3,
            explanation: 'They signaled Heaven’s disapproval.'
        },
        {
            question: 'Which dynasty replaced the Shang?',
            options: ['The Han', 'The Zhou', 'The Qin', 'The Tang'],
            correct: 1,
            explanation: 'The Zhou took power in 1046 BCE.'
        }
    ]
},
{
    name: '1.2 Activity: Comparing River Valley Civilizations',
    type: 'lesson',
    duration: '55 min',
    exercises: 5,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Activity</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 55 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧭 Investigation: Comparing River Valley Civilizations</h2>
    <p style="font-size:16px;">In this document-based investigation you will analyze four sources — one from each river valley civilization — and use them to answer the compelling question: “Why did the first civilizations develop along rivers, and how were they alike and different?”</p>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Read each document twice: once for meaning, once with HIPP.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Teamwork</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Rotate roles: reader, HIPP analyst, recorder and presenter.</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Respect</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Discuss beliefs and social systems of the past respectfully, even when they seem unfair today.</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Every claim on your chart must point to a specific document.</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#67e8f9;margin-top:0;">🧭 Historical Investigation: Four-Document Comparison</h3>
    <p><strong style="color:#fde68a;">Aim:</strong> To compare the geography, government, economy and society of four river valley civilizations using primary-source evidence.</p>
    <p style="margin-bottom:4px;"><strong style="color:#fde68a;">Materials needed:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document packet</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Four-civilization comparison chart</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Highlighters</span><span style="background:#0b1a2e;border:1px solid #22d3ee;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">History notebook</span>
    </div>
    <p style="margin:8px 0 4px 0;"><strong style="color:#fde68a;">Materials and resources:</strong>
    </p>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document A: laws 196, 198 and 199 of the Code of Hammurabi (Mesopotamia)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document B: a description of the Nile flood and harvest from Egyptian records (Egypt)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document C: an archaeologist’s description of the drains and grid streets of Mohenjo-daro (Indus Valley)</span><span style="background:#0b1a2e;border:1px solid #1e88e5;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Document D: a Shang oracle-bone question asking whether the harvest will be good (China)</span>
    </div>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">🚧 Safety Precautions</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Handle any printed packets carefully and return them.</li>
    <li>Keep discussions focused and respectful.</li>
    <li>Credit documents by letter in your answers.</li>
    </ul>
    </div>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Procedure:</strong>
    </p>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Read Document A and complete the HIPP questions in your notebook.</li>
    <li>Record on your chart what Document A reveals about government and social classes in Mesopotamia.</li>
    <li>Repeat for Documents B, C and D, focusing on geography, the economy and beliefs.</li>
    <li>Identify at least two similarities shared by all four civilizations.</li>
    <li>Identify at least two important differences, and explain the causes of each.</li>
    <li>Write a claim answering the compelling question.</li>
    <li>Support your claim with evidence from at least three documents.</li>
    </ol>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Record sheet:</strong>
    </p>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Category</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Mesopotamia</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Egypt and Nubia</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Indus Valley</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">China</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">River(s)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tigris, Euphrates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Indus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huang He</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Government</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Religion</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Achievements</td>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence (document)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">A</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">B</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">C</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">D</td>
    </tr>
    </table>
    </div>
    <p style="margin:10px 0 4px 0;"><strong style="color:#fde68a;">Discussion — think before you open each answer:</strong>
    </p>
    <p style="margin:8px 0 2px 0;"><strong>1.</strong> What similarity do all four documents suggest?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All four civilizations depended on rivers and farming — floods, harvests and water systems appear in the evidence — and all needed organized leadership.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>2.</strong> Which document is most limited as evidence, and why?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Document C, because it is an archaeologist’s interpretation (a secondary description) of a civilization whose own writing cannot be read; or Document A, because it shows only the king’s official view.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>3.</strong> Why did all four civilizations develop along rivers?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Rivers provided water for drinking and irrigation, fertile soil from floods, fish, and routes for transportation and trade — the foundation for food surpluses and cities.</div>
    </details>
    <p><strong style="color:#fde68a;">Conclusion:</strong> All four civilizations developed along rivers that provided water, fertile soil and transportation, which supported food surpluses and cities. They differed in government, religion and writing because of different geography, resources and histories.</p>
    <p><strong style="color:#fde68a;">Historical explanation:</strong> Comparing several sources lets historians see patterns (similarities) and explain differences. A conclusion built on several documents is stronger than one built on a single source.</p>
    <div style="background:#2a1215;border-left:4px solid #ef4444;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fca5a5;font-weight:bold;">⚠️ Common Errors</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Summarizing documents instead of using them as evidence.</li>
    <li>Ignoring the source’s point of view.</li>
    <li>Listing differences without explaining their causes.</li>
    </ul>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Researchers, journalists and policy analysts use the same method — gathering and comparing documents — to answer big questions.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;border-left:4px solid #22d3ee;">
    <h3 style="color:#bbdefb;margin-top:0;">📊 Results and Analysis</h3>
    <p>Use your completed chart to write one paragraph of comparison. Start with a claim, use evidence from at least three documents (cite them as Doc A, Doc B and so on) and explain how each piece of evidence supports your claim.</p>
    <div style="background:#0c2a1f;border-left:4px solid #10b981;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#6ee7b7;font-weight:bold;">📌 Remember</p>
    <div>Compare = similarities AND differences. Contrast = differences only.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Activity Questions</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #fde68a;">
    <p style="margin:0 0 6px 0;color:#fde68a;font-weight:bold;">Structured Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Which document provides evidence about social classes?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Document A — the Code of Hammurabi.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> Which document provides evidence about city planning?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Document C — the description of Mohenjo-daro.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Name one similarity shared by all four civilizations.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">All depended on rivers and farming, or all had organized governments.</div>
    </details>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #67e8f9;">
    <p style="margin:0 0 6px 0;color:#67e8f9;font-weight:bold;">Practical Questions</p>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Why is it important to cite documents by letter?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It shows exactly which source supports each claim, so a reader can check the evidence.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> What additional source would improve this investigation?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">A source from ordinary people, such as a farmer’s record or a workers’ village site, to balance the rulers’ point of view.</div>
    </details>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📝 Write Up Your Investigation</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>The historical question you investigated</li>
    <li>The sources you used (primary and secondary)</li>
    <li>What each source tells you, and its limits</li>
    <li>Your claim, answering the question</li>
    <li>Evidence from at least two sources</li>
    <li>How your evidence supports your claim</li>
    <li>Questions you still have</li>
    </ol>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The compelling question of this investigation asks:',
            options: ['Who won World War I', 'How cells divide', 'Why civilizations developed along rivers and how they compare', 'How to solve equations'],
            correct: 2,
            explanation: 'It focuses on river valley civilizations.'
        },
        {
            question: 'Document A provides evidence mainly about:',
            options: ['City drainage', 'Laws and social classes', 'Oracle bones', 'Pyramids'],
            correct: 1,
            explanation: 'The answer is Laws and social classes. It is the Code of Hammurabi.'
        },
        {
            question: 'Document D, a Shang oracle bone about the harvest, shows:',
            options: ['The importance of farming and of asking ancestors and gods for guidance', 'Egyptian mummification', 'Mesopotamian trade', 'Indus Valley drains'],
            correct: 0,
            explanation: 'Harvests mattered, and rulers consulted ancestors.'
        },
        {
            question: 'A similarity among all four civilizations is that they:',
            options: ['Used the same writing system', 'Had the same gods', 'Were ruled by one emperor', 'Depended on rivers and farming'],
            correct: 3,
            explanation: 'Rivers were the foundation of all four.'
        },
        {
            question: 'Comparing means finding:',
            options: ['Only differences', 'Only dates', 'Similarities and differences', 'Only names'],
            correct: 2,
            explanation: 'The answer is Similarities and differences. Comparison covers both.'
        },
        {
            question: 'A conclusion based on several documents is:',
            options: ['Always weaker', 'Unnecessary', 'The same as a guess', 'Stronger than one based on a single source'],
            correct: 3,
            explanation: 'Corroboration strengthens conclusions.'
        }
    ]
},
{
    name: '1.2 Quiz: River Valley Civilizations',
    type: 'lesson',
    duration: '25 min',
    exercises: 10,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Quiz</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 25 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📝 Quiz: River Valley Civilizations</h2>
    <p style="font-size:16px;">Test your understanding of Mesopotamia, Egypt and Nubia, the Indus Valley and ancient China from Topic 1.2.</p>
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
    <li>Geography of the four river valleys</li>
    <li>Sumerian city-states, cuneiform and the Code of Hammurabi</li>
    <li>Egyptian pharaohs, religion and achievements</li>
    <li>The kingdom of Kush</li>
    <li>Indus Valley cities and their mysteries</li>
    <li>The Shang, the Zhou and the Mandate of Heaven</li>
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
    <div>Picture each river and its civilization on a map before you answer. Link each achievement to the civilization that created it.</div>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which civilization developed on the Huang He?',
            options: ['Egypt', 'China', 'Mesopotamia', 'Indus Valley'],
            correct: 1,
            explanation: 'The Huang He is the Yellow River of China.'
        },
        {
            question: 'Which civilization used cuneiform?',
            options: ['Egypt', 'China', 'Mesopotamia', 'Kush'],
            correct: 2,
            explanation: 'The answer is Mesopotamia. Sumerians invented cuneiform.'
        },
        {
            question: 'The Code of Hammurabi is an example of:',
            options: ['A written law code', 'A religious hymn', 'A trade map', 'A calendar'],
            correct: 0,
            explanation: 'The answer is A written law code. It contains 282 laws.'
        },
        {
            question: 'Which geographic feature protected Egypt from invasion?',
            options: ['Mountains in the south only', 'Rainforests', 'Glaciers', 'Deserts'],
            correct: 3,
            explanation: 'Deserts surrounded the Nile valley.'
        },
        {
            question: 'Egyptian writing using pictures and symbols is called:',
            options: ['Cuneiform', 'Oracle script', 'The alphabet', 'Hieroglyphics'],
            correct: 3,
            explanation: 'Hieroglyphics means sacred carvings.'
        },
        {
            question: 'The kingdom of Kush was rich in:',
            options: ['Oil', 'Silk', 'Coal', 'Gold'],
            correct: 3,
            explanation: 'Nubian gold was highly valued.'
        },
        {
            question: 'Which is evidence of planning in Mohenjo-daro?',
            options: ['Covered drains and grid streets', 'Pyramids', 'Ziggurats', 'Oracle bones'],
            correct: 0,
            explanation: 'The city was carefully laid out.'
        },
        {
            question: 'Why is the Indus civilization harder to study than Mesopotamia?',
            options: ['It left no artifacts', 'Its writing has not been deciphered', 'It was very small', 'It had no cities'],
            correct: 1,
            explanation: 'The answer is Its writing has not been deciphered. We cannot read its records.'
        },
        {
            question: 'The earliest known Chinese writing appears on:',
            options: ['Papyrus', 'Clay tablets', 'Oracle bones', 'Stone stelae in Babylon'],
            correct: 2,
            explanation: 'Shang priests wrote on bones and shells.'
        },
        {
            question: 'According to the Mandate of Heaven, a ruler could lose the right to rule by:',
            options: ['Building temples', 'Winning wars', 'Ruling badly', 'Collecting taxes'],
            correct: 2,
            explanation: 'Disasters and rebellion were signs of lost approval.'
        }
    ]
},
{
    name: '1.2 Assignment: Comparative Essay on Two River Valley Civilizations',
    type: 'lesson',
    duration: '120 min',
    exercises: 7,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Assignment</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 120 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">📂 Assignment: Comparative Essay on Two River Valley Civilizations</h2>
    <p style="font-size:16px;">Write a comparative essay (500–700 words) on two river valley civilizations of your choice, explaining how geography shaped their similarities and differences.</p>
    <p style="margin:6px 0 0 0;color:#e3f2fd;font-size:14px;">🗓️ Time to complete: one week (about 120 min of work in class and at home).</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🎬 The Task in Context</h3>
    <p><strong>Prompt:</strong> Choose two of the four civilizations studied in this topic. Compare them in at least three categories (for example, geography, government, religion, writing, achievements or social structure). Explain how geography helped cause at least one similarity and one difference.</p>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Note</p>
    <div>Use at least three sources, including at least one primary source. Credit every source.</div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪜 Steps to Follow</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Choose two civilizations and three categories of comparison.</li>
    <li>Complete a comparison chart with evidence and sources for each category.</li>
    <li>Write a thesis that states the most important similarity and difference and how geography explains them.</li>
    <li>Organize body paragraphs by category, discussing both civilizations in each paragraph.</li>
    <li>Use at least one primary source (such as the Code of Hammurabi or an oracle-bone inscription) and analyze it with HIPP.</li>
    <li>Write a conclusion that explains why the comparison matters.</li>
    <li>Peer review, revise and submit with a source list.</li>
    </ol>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📦 What to Hand In</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Your comparison chart</li>
    <li>Your draft with peer comments</li>
    <li>Your final essay (500–700 words)</li>
    <li>Your source list</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Thesis</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and insightful; links geography to a similarity and a difference</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Clear and links geography to the comparison</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Present but vague</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Missing</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparison</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Balanced, detailed comparison in three or more categories</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Comparison in three categories</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Uneven or fewer categories</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little comparison</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Specific, accurate evidence, including well-analyzed primary sources</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Accurate evidence with a primary source</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Limited evidence</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Little or no evidence</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Historical reasoning</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains causes of similarities and differences convincingly</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Explains causes</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mostly description</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">No explanation</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Writing and citations</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized, clear and correctly cited</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Organized and cited</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Some errors</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Disorganized; no citations</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#2a2410;border-left:4px solid #f59e0b;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#fcd34d;font-weight:bold;">💡 Tips for Success</p>
    <div>Organize by category, not by civilization, to keep the comparison clear.<br>Use comparison words: similarly, likewise, in contrast, whereas.<br>Explain why, not just what.<br>Avoid judging past cultures only by today’s standards — explain their context.</div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🪞 Reflect After the Task</h3>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Which similarity surprised you most?</li>
    <li>How did geography shape the civilizations you chose?</li>
    <li>What would you research further?</li>
    </ul>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'How many categories should you compare?',
            options: ['One', 'Two', 'Ten', 'At least three'],
            correct: 3,
            explanation: 'The answer is At least three. At least three categories.'
        },
        {
            question: 'The best way to organize a comparative essay is often:',
            options: ['By civilization, with no links', 'Randomly', 'By category, discussing both civilizations in each paragraph', 'By date only'],
            correct: 2,
            explanation: 'Category organization keeps the comparison clear.'
        },
        {
            question: 'Which word signals a difference?',
            options: ['Similarly', 'Likewise', 'Also', 'Whereas'],
            correct: 3,
            explanation: '“Whereas” introduces contrast.'
        },
        {
            question: 'You must include at least one:',
            options: ['Primary source', 'Video game', 'Novel', 'Advertisement'],
            correct: 0,
            explanation: 'The answer is Primary source. A primary source is required.'
        },
        {
            question: 'Historical reasoning in this essay means:',
            options: ['Explaining the causes of similarities and differences', 'Listing facts only', 'Giving your favorite civilization', 'Copying the textbook'],
            correct: 0,
            explanation: 'The answer is Explaining the causes of similarities and differences. Explain why, not just what.'
        },
        {
            question: 'Why should you avoid judging past cultures only by today’s standards?',
            options: ['Because the past was always perfect', 'To understand them in their own context', 'Because there are no standards', 'Because teachers forbid opinions'],
            correct: 1,
            explanation: 'The answer is To understand them in their own context. Context helps us understand.'
        }
    ]
},
{
    name: '1.2 Review: River Valley Civilizations',
    type: 'lesson',
    duration: '30 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Review</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 30 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🔁 Review: River Valley Civilizations</h2>
    <p style="font-size:16px;">Use these cards and questions to review Topic 1.2 and the whole unit.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🗒️ Review Cards</h3>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Mesopotamia</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Tigris and Euphrates; unpredictable floods; irrigation.</li>
    <li>Sumerian city-states, ziggurats, cuneiform.</li>
    <li>Sargon’s empire; the Code of Hammurabi.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Egypt and Nubia</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Predictable Nile floods; protective deserts.</li>
    <li>Pharaohs, pyramids, hieroglyphics, afterlife beliefs.</li>
    <li>Kush: gold, trade, 25th Dynasty, Meroë.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Indus Valley</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Harappa and Mohenjo-daro; grid streets and drainage.</li>
    <li>Standardized bricks and weights; trade with Mesopotamia.</li>
    <li>Undeciphered script; uncertain decline.</li>
    </ul>
    </div>
    </div>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:10px 0;border-left:4px solid #ffcc80;">
    <p style="margin:0 0 4px 0;color:#bbdefb;font-weight:bold;">Ancient China</p>
    <div>
    <ul style="margin:6px 0;padding-left:22px;">
    <li>Huang He, “China’s Sorrow.”</li>
    <li>Shang: bronze, ancestor worship, oracle bones.</li>
    <li>Zhou: Mandate of Heaven, dynastic cycle.</li>
    </ul>
    </div>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🧩 Quick-Reference Table</h3>
    <div style="overflow-x:auto;margin:12px 0;">
    <table style="width:100%;border-collapse:collapse;color:#f1f5f9;">
    <tr style="background:#334155;">
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Civilization</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">River</th>
    <th style="padding:10px;border:1px solid #475569;text-align:left;">Key feature</th>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mesopotamia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Tigris and Euphrates</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Cuneiform; Code of Hammurabi</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Egypt</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Nile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Pharaohs; pyramids; hieroglyphics</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Kush (Nubia)</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Upper Nile</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Gold; Kushite pharaohs; Meroë</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Indus Valley</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Indus</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planned cities; undeciphered script</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Shang China</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huang He</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Oracle bones; bronze</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Zhou China</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Huang He</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Mandate of Heaven</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🏋️ Review Practice</h3>
    <p>Work in your exercise book. Start with the easy questions and move up. Open each answer only after trying.</p>
    <div style="background:#0b1a2e;border-radius:10px;padding:12px 14px;margin:12px 0;border-top:3px solid #e2e8f0;">
    <p style="margin:0 0 6px 0;color:#e2e8f0;font-weight:bold;">Mixed Review</p>
    <p style="margin:8px 0 2px 0;"><strong>Q1.</strong> Explain one way geography shaped Mesopotamia.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Unpredictable floods and a dry climate required irrigation, which encouraged organized government.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q2.</strong> What does the Code of Hammurabi reveal about Babylonian society?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">It had social classes, and punishments depended on the victim’s rank.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q3.</strong> Why was Egypt more stable than Mesopotamia?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Predictable floods and protective deserts helped Egypt stay united.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q4.</strong> Describe the relationship between Egypt and Kush.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">They traded and competed; Egypt ruled Kush at times, and Kush conquered Egypt around 744 BCE.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q5.</strong> Why do historians call the Indus decline uncertain?</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Its script cannot be read and the evidence points to several possible causes.</div>
    </details>
    <p style="margin:8px 0 2px 0;"><strong>Q6.</strong> Explain the Mandate of Heaven.</p>
    <details style="margin:4px 0 10px 0;">
    <summary style="cursor:pointer;color:#e3f2fd;">👉 Show answer</summary>
    <div style="background:#0b1a2e;border-radius:8px;padding:8px 12px;margin-top:6px;color:#e3f2fd;">Heaven gave a just ruler the right to rule; bad rule led to its loss and to a new dynasty.</div>
    </details>
    </div>
    </div>
    <div style="background:#0d1b2e;padding:20px;border-radius:12px;border:1px solid #1e88e5;margin-bottom:20px;">
    <h3 style="color:#bbdefb;margin-top:0;">✅ Are You Ready to Move On?</h3>
    <p style="margin:6px 0;">☐ I can explain how rivers shaped the four civilizations.</p>
    <p style="margin:6px 0;">☐ I can describe Mesopotamia and analyze Hammurabi’s Code.</p>
    <p style="margin:6px 0;">☐ I can describe Egypt and Kush.</p>
    <p style="margin:6px 0;">☐ I can describe the Indus Valley and its mysteries.</p>
    <p style="margin:6px 0;">☐ I can explain the Shang, the Zhou and the Mandate of Heaven.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'Which civilization had predictable floods and protective deserts?',
            options: ['Egypt', 'Mesopotamia', 'Indus Valley', 'Shang China'],
            correct: 0,
            explanation: 'The Nile and deserts shaped Egypt.'
        },
        {
            question: 'Which civilization is known for an undeciphered script?',
            options: ['Egypt', 'Mesopotamia', 'Zhou China', 'Indus Valley'],
            correct: 3,
            explanation: 'The Indus script remains unread.'
        },
        {
            question: 'Kushite pharaohs ruled Egypt as the:',
            options: ['25th Dynasty', '1st Dynasty', 'Shang dynasty', 'Akkadian Empire'],
            correct: 0,
            explanation: 'The answer is 25th Dynasty. From about 744 to 656 BCE.'
        },
        {
            question: 'The Mandate of Heaven was first used by the:',
            options: ['Shang', 'Sumerians', 'Egyptians', 'Zhou'],
            correct: 3,
            explanation: 'The Zhou justified replacing the Shang.'
        },
        {
            question: 'Sumerian city-states each had a:',
            options: ['Pyramid for a pharaoh', 'Great Bath', 'Ziggurat for their patron god', 'Oracle-bone temple'],
            correct: 2,
            explanation: 'The answer is Ziggurat for their patron god. Ziggurats were temple towers.'
        },
        {
            question: 'All four river valley civilizations depended on:',
            options: ['Ocean trade only', 'Rivers for water, soil and transportation', 'Mountain mining only', 'Desert oases only'],
            correct: 1,
            explanation: 'Rivers made surpluses possible.'
        }
    ]
},
{
    name: '1.2 Summary: River Valley Civilizations',
    type: 'lesson',
    duration: '20 min',
    exercises: 6,
    quiz: true,

    description: `
    <div style="font-family: Arial, sans-serif; line-height: 1.8; color: #e8eef5;">
    <div style="background: linear-gradient(135deg, #bf360c, #10233d); padding: 22px; border-radius: 14px; margin-bottom: 22px; border-left: 5px solid #ffcc80;">
    <p style="margin:0;color:#e3f2fd;font-size:13px;letter-spacing:1px;text-transform:uppercase;">Unit 1.0 Beginnings of Civilization · Topic 1.2 River Valley Civilizations</p>
    <p style="margin:2px 0 0 0;"><span style="background:#0d1b2e;border:1px solid #ffcc80;color:#e3f2fd;padding:2px 10px;border-radius:999px;font-size:12px;">Summary</span> <span style="color:#e3f2fd;font-size:13px;">⏱️ 20 min</span>
    </p>
    <h2 style="color:#e3f2fd;margin:8px 0 10px 0;">🧾 Summary: River Valley Civilizations</h2>
    <p style="font-size:16px;"><strong style="color:#fde68a;">The big idea:</strong> The first civilizations grew along great rivers that provided water, fertile soil and transportation. Each developed its own government, beliefs and achievements, shaped by its geography — and each left evidence that historians still analyze today.</p>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">🔑 Key Points from the Topic</h3>
    <ol style="margin:6px 0;padding-left:22px;">
    <li>Mesopotamia’s unpredictable rivers required irrigation and organization; Sumerians built city-states and invented cuneiform.</li>
    <li>Hammurabi’s written law code reveals a society divided into social classes.</li>
    <li>Egypt’s predictable Nile and protective deserts supported a stable kingdom ruled by god-kings.</li>
    <li>The Nubian kingdom of Kush traded with Egypt, was ruled by it and later conquered it.</li>
    <li>The Indus Valley built planned cities, but its undeciphered script leaves key questions unanswered.</li>
    <li>China’s Shang left oracle bones; the Zhou introduced the Mandate of Heaven and the dynastic cycle.</li>
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
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.1 Mesopotamia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">City-states, cuneiform, empires, the Code of Hammurabi</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Analyze laws as evidence of values</td>
    </tr>
    <tr style="background:#172033;">
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.2 Ancient Egypt and Nubia</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">The Nile, pharaohs, achievements, Kush</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Compare Egypt with Mesopotamia</td>
    </tr>
    <tr>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">1.2.3 The Indus Valley and Ancient China</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Planned cities, the Shang and Zhou, the Mandate of Heaven</td>
    <td style="padding:10px;border:1px solid #475569;vertical-align:top;">Separate what is known from what is uncertain</td>
    </tr>
    </table>
    </div>
    </div>
    <div style="background:#10233d;padding:20px;border-radius:14px;margin-bottom:20px;border:1px solid #33415c;">
    <h3 style="color:#bbdefb;margin-top:0;">📖 Key Terms</h3>
    <div style="display:flex;flex-wrap:wrap;gap:8px;margin:8px 0;"><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">city-state</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">irrigation</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">ziggurat</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">cuneiform</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">empire</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">pharaoh</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dynasty</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">theocracy</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">hieroglyphics</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Kush</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">citadel</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">oracle bones</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">Mandate of Heaven</span><span style="background:#0b1a2e;border:1px solid #e3f2fd;color:#e2e8f0;padding:4px 12px;border-radius:999px;font-size:14px;">dynastic cycle</span>
    </div>
    </div>
    <div style="background:#062a2e;border-left:4px solid #14b8a6;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#5eead4;font-weight:bold;">🌍 Real-Life Connection</p>
    <div>Written laws, calendars, city planning and the idea that leaders must govern well all have roots in these first civilizations.</div>
    </div>
    <div style="background:#0d1b2e;border-left:4px solid #ffcc80;padding:14px 16px;border-radius:9px;margin:14px 0;">
    <p style="margin:0 0 6px 0;color:#e3f2fd;font-weight:bold;">ℹ️ Looking Ahead</p>
    <div>You have completed Unit 1.0: Beginnings of Civilization. In Unit 2.0 you will study the classical civilizations of Greece, Rome, Persia, India and China, and the ideas, empires and belief systems they spread.</div>
    </div>
    <div style="background:#2e1d12;padding:20px;border-radius:12px;border:1px solid #ffcc80;margin-bottom:20px;">
    <h3 style="color:#e3f2fd;margin-top:0;">🏅 I Can…</h3>
    <p style="margin:6px 0;">✔️ I can explain why civilizations developed along rivers.</p>
    <p style="margin:6px 0;">✔️ I can describe Mesopotamia and analyze the Code of Hammurabi.</p>
    <p style="margin:6px 0;">✔️ I can describe Egypt and the kingdom of Kush.</p>
    <p style="margin:6px 0;">✔️ I can describe the Indus Valley and ancient China.</p>
    <p style="margin:6px 0;">✔️ I can compare civilizations using evidence.</p>
    </div>
    </div>
    `,

    mcQuestions: [
        {
            question: 'The big idea of Topic 1.2 is that rivers:',
            options: ['Supported the first civilizations, each shaped by its geography', 'Prevented civilization', 'Were unimportant', 'Existed only in Egypt'],
            correct: 0,
            explanation: 'Rivers were the foundation of civilization.'
        },
        {
            question: 'Unit 2.0 will study:',
            options: ['The Industrial Revolution', 'World War II', 'Classical civilizations', 'The Cold War'],
            correct: 2,
            explanation: 'Greece, Rome, Persia, India and China.'
        },
        {
            question: 'Which pair is matched correctly?',
            options: ['China — cuneiform', 'Mesopotamia — oracle bones', 'Indus — pyramids', 'Egypt — hieroglyphics'],
            correct: 3,
            explanation: 'Egyptians wrote in hieroglyphics.'
        },
        {
            question: 'Which civilization’s decline remains uncertain?',
            options: ['Egypt', 'Zhou China', 'Akkad', 'Indus Valley'],
            correct: 3,
            explanation: 'Several possible causes exist.'
        },
        {
            question: 'The dynastic cycle describes:',
            options: ['The rise and fall of Chinese dynasties', 'The Nile’s floods', 'Mesopotamian trade', 'Egyptian burial'],
            correct: 0,
            explanation: 'Dynasties gain and lose the Mandate.'
        },
        {
            question: 'Kush was located in:',
            options: ['Mesopotamia', 'The Indus Valley', 'Nubia, south of Egypt', 'China'],
            correct: 2,
            explanation: 'The answer is Nubia, south of Egypt. Along the upper Nile.'
        }
    ]
}
],
          stats:{lessons:19,exercises:128,quizzes:20,projects:2,duration:'15 hrs',learners:0}, popular:false, new:true, rating:0,
          quizQuestions:[
              {
                  question: 'A primary source is:',
                  options: ['A textbook written centuries later', 'A modern encyclopedia article', 'A source created at the time by someone who experienced the event', 'A documentary made today'],
                  correct: 2,
                  explanation: 'Primary sources come from the period being studied.'
              },
              {
                  question: 'The year 500 BCE is:',
                  options: ['Later than 200 BCE', 'Earlier than 200 BCE', 'The same as 500 CE', 'After the year 1 CE'],
                  correct: 1,
                  explanation: 'BCE years count down toward year 1, so larger BCE numbers are earlier.'
              },
              {
                  question: 'According to most scientists, modern humans (Homo sapiens) first appeared in:',
                  options: ['Africa', 'Europe', 'Australia', 'The Americas'],
                  correct: 0,
                  explanation: 'The oldest Homo sapiens fossils have been found in Africa.'
              },
              {
                  question: 'The Neolithic Revolution was the shift from hunting and gathering to:',
                  options: ['Farming and settled villages', 'Industrial factories', 'Ocean exploration', 'Nomadic herding only'],
                  correct: 0,
                  explanation: 'People began domesticating plants and animals.'
              },
              {
                  question: 'A food surplus allowed early societies to develop:',
                  options: ['Less trade', 'Job specialization', 'Fewer people', 'Nomadic lifestyles'],
                  correct: 1,
                  explanation: 'Not everyone had to farm, so people took on other jobs.'
              },
              {
                  question: 'Which is a characteristic of civilization?',
                  options: ['Living in small nomadic bands', 'No form of government', 'Only hunting and gathering', 'A system of writing or record keeping'],
                  correct: 3,
                  explanation: 'Writing is one key characteristic of civilization.'
              },
              {
                  question: 'Mesopotamia developed between which two rivers?',
                  options: ['Nile and Congo', 'Tigris and Euphrates', 'Indus and Ganges', 'Huang He and Yangtze'],
                  correct: 1,
                  explanation: 'Mesopotamia means “land between the rivers.”'
              },
              {
                  question: 'Cuneiform was the writing system of:',
                  options: ['Ancient Egypt', 'Shang China', 'The Indus Valley', 'Sumer in Mesopotamia'],
                  correct: 3,
                  explanation: 'Sumerians pressed wedge-shaped marks into clay.'
              },
              {
                  question: 'Hammurabi is best known for:',
                  options: ['Building the Great Pyramid', 'Uniting China', 'A written code of laws', 'Inventing the wheel'],
                  correct: 2,
                  explanation: 'The Code of Hammurabi is one of the earliest surviving law codes.'
              },
              {
                  question: 'The yearly flooding of the Nile was important because it:',
                  options: ['Destroyed all crops', 'Made Egypt a desert', 'Prevented trade', 'Left rich soil for farming'],
                  correct: 3,
                  explanation: 'Floodwaters deposited fertile silt.'
              },
              {
                  question: 'Indus Valley cities such as Mohenjo-daro are known for:',
                  options: ['Planned streets and drainage systems', 'Giant pyramids', 'Oracle bones', 'A deciphered alphabet'],
                  correct: 0,
                  explanation: 'They had grid layouts and advanced drainage.'
              },
              {
                  question: 'The Zhou dynasty justified its rule with the idea of the:',
                  options: ['Divine right of pharaohs', 'Code of Hammurabi', 'Mandate of Heaven', 'Rosetta Stone'],
                  correct: 2,
                  explanation: 'Heaven granted the right to rule to a just ruler.'
              }
          ]}
);